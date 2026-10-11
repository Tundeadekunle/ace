import { NextRequest, NextResponse } from "next/server";
import { ACE_SYSTEM_PROMPT, getOfflineResponse } from "@/lib/chatKnowledge";
import { ChatApiRequest, ChatApiResponse, MessageAction } from "@/types/chat";


// Extract helpful navigation actions based on user message and reply content
function extractContextualActions(query: string, reply: string): MessageAction[] {
  const combined = (query + " " + reply).toLowerCase();
  const actions: MessageAction[] = [];

  if (
    combined.includes("consult") ||
    combined.includes("book") ||
    combined.includes("schedule") ||
    combined.includes("briefing") ||
    combined.includes("contact") ||
    combined.includes("hire") ||
    combined.includes("engage") ||
    combined.includes("q2")
  ) {
    actions.push({
      label: "Reserve Executive Briefing",
      action: "navigate",
      target: "#consultation-card",
    });
  }

  if (
    combined.includes("terminal") ||
    combined.includes("latency") ||
    combined.includes("p99") ||
    combined.includes("benchmark") ||
    combined.includes("throughput") ||
    combined.includes("spec")
  ) {
    actions.push({
      label: "Inspect Architecture Terminal",
      action: "navigate",
      target: "#architecture-specs",
    });
  }

  if (
    combined.includes("case study") ||
    combined.includes("fintech") ||
    combined.includes("healthcare") ||
    combined.includes("logistics")
  ) {
    actions.push({
      label: "Explore Case Studies",
      action: "navigate",
      target: "#case-studies",
    });
  }

  if (
    combined.includes("capability") ||
    combined.includes("swarm") ||
    combined.includes("agent") ||
    combined.includes("cloud fabric")
  ) {
    actions.push({
      label: "Core Capabilities Bento",
      action: "navigate",
      target: "#capabilities",
    });
  }

  return actions.slice(0, 2);
}

// Generate contextual follow-up questions
function extractFollowUps(query: string, reply: string): string[] {
  const combined = (query + " " + reply).toLowerCase();

  if (combined.includes("agent") || combined.includes("swarm")) {
    return [
      "How do agents ensure zero data egress in healthcare?",
      "Can we integrate custom open-source models with ACE agents?",
      "How do you schedule an architecture briefing?",
    ];
  }

  if (combined.includes("state") || combined.includes("latency") || combined.includes("database")) {
    return [
      "What are the p99 latency figures in multi-region setups?",
      "Tell me about the FinTech mainframe migration",
      "What is ACE's engagement model for Q2?",
    ];
  }

  if (combined.includes("consult") || combined.includes("briefing") || combined.includes("hire")) {
    return [
      "What is the typical sprint timeline?",
      "Do you support on-premise sovereign deployments?",
      "What are your core security certifications?",
    ];
  }

  return [
    "How does ACE architect autonomous AI swarms?",
    "Tell me about your distributed state engine benchmarks",
    "How do we book an Executive Engineering Briefing?",
  ];
}

async function callGeminiApi(
  apiKey: string,
  messages: Array<{ role: "user" | "assistant"; content: string }>
): Promise<{ text: string; modelName: string }> {
  const modelsToTry = [
    "gemini-2.5-flash",
    "gemini-1.5-flash",
    "gemini-1.5-pro",
  ];

  // Convert past messages to Gemini format
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  // Ensure last message is from user
  if (contents.length === 0 || contents[contents.length - 1].role !== "user") {
    throw new Error("Chat history must end with a user message.");
  }

  let lastError: Error | null = null;

  for (const model of modelsToTry) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
      const payload = {
        systemInstruction: {
          parts: [{ text: ACE_SYSTEM_PROMPT }],
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(`Gemini API error [${res.status}]: ${errorData}`);
      }

      const data = await res.json();
      const candidateText =
        data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (candidateText && candidateText.trim().length > 0) {
        return {
          text: candidateText.trim(),
          modelName: `Gemini (${model})`,
        };
      }
    } catch (err: unknown) {
      lastError = err instanceof Error ? err : new Error(String(err));
      // Try next model if current is 404/not found
      continue;
    }
  }

  throw lastError || new Error("Failed to generate response from Gemini API.");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChatApiRequest;
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json<ChatApiResponse>(
        {
          reply: "No messages provided.",
          success: false,
          modelUsed: "None",
          error: "Messages array cannot be empty.",
        },
        { status: 400 }
      );
    }

    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
    const userQuery = lastUserMessage?.content || "";

    const apiKey = process.env.GEMINI_API_KEY?.trim() || "";

    // If Gemini API Key is provided, use Google Generative AI
    if (apiKey && apiKey.length > 5) {
      try {
        const { text, modelName } = await callGeminiApi(apiKey, messages);
        const actions = extractContextualActions(userQuery, text);
        const followUps = extractFollowUps(userQuery, text);

        return NextResponse.json<ChatApiResponse>({
          reply: text,
          actions,
          suggestedFollowUps: followUps,
          modelUsed: modelName,
          success: true,
        });
      } catch (geminiError: unknown) {
        console.warn("Gemini API call failed, falling back to ACE offline knowledge engine:", geminiError);
        // Fall through to offline engine
      }
    }

    // Offline / Local Knowledge Engine Fallback
    const offlineResult = getOfflineResponse(userQuery);
    return NextResponse.json<ChatApiResponse>({
      reply: offlineResult.reply,
      actions: offlineResult.actions,
      suggestedFollowUps: offlineResult.suggestedFollowUps,
      modelUsed: apiKey.length > 5 ? "ACE Architecture Engine (API Fallback)" : "ACE Architecture Engine (Local)",
      success: true,
    });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    return NextResponse.json<ChatApiResponse>(
      {
        reply: "System telemetry anomaly detected. Please try your inquiry again or schedule an engineering briefing.",
        actions: [{ label: "Schedule Consultation", action: "navigate", target: "#consultation-card" }],
        modelUsed: "Emergency Fallback",
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
