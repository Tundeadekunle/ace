"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  ChevronDown,
  Terminal,
  Shield,
  ArrowRight,
} from "lucide-react";
import { ChatMessage, MessageAction } from "@/types/chat";
import { SUGGESTED_PROMPTS } from "@/lib/chatKnowledge";

// Initial greeting message from ACE Architecture Advisor
const INITIAL_MESSAGE: ChatMessage = {
  id: "init-1",
  role: "assistant",
  content: `### Systems Online • ACE Architecture Advisor
Welcome to ACE Technologies. I am your direct telemetry bridge to our principal architecture framework.

How can I assist your engineering evaluation today? You can inquire about our **Autonomous AI Agent Swarms**, **Sub-5ms Distributed State Engines**, **Enterprise Case Studies**, or schedule an **Executive Briefing**.`,
  timestamp: "Just now",
  actions: [
    { label: "Autonomous AI Swarms", action: "query", target: "How does ACE architect autonomous AI agent swarms?" },
    { label: "Distributed State & SLAs", action: "query", target: "What are your distributed state engine benchmarks and failover SLAs?" },
    { label: "Schedule Q2 Briefing", action: "navigate", target: "#consultation-card" },
  ],
  modelUsed: "ACE Architecture Mesh",
};

// Subtle Web Audio synthesizer for futuristic feedback
function playSound(type: "send" | "receive") {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === "send") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.12);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
      osc.start(now);
      osc.stop(now + 0.14);
    }
  } catch {
    // Ignore audio permission or context errors silently
  }
}

// Simple markdown-to-JSX renderer for structured responses
function renderMarkdown(content: string) {
  const lines = content.split("\n");

  return (
    <div className="space-y-2 text-sm leading-relaxed">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        // Headers
        if (trimmed.startsWith("### ")) {
          return (
            <h4
              key={idx}
              className="text-[#4cd7f6] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm tracking-wide mt-2 mb-1 flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-[#4cd7f6]" />
              {trimmed.replace("### ", "")}
            </h4>
          );
        }

        // Bullet points
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const text = trimmed.substring(2);
          const parts = text.split(/(\*\*.*?\*\*)/g);

          return (
            <div key={idx} className="flex items-start gap-2 text-[#c3c6d7] pl-1">
              <span className="text-[#4cd7f6] mt-1 text-xs">▸</span>
              <span>
                {parts.map((p, pIdx) => {
                  if (p.startsWith("**") && p.endsWith("**")) {
                    return (
                      <strong key={pIdx} className="text-[#e1e2ec] font-semibold">
                        {p.slice(2, -2)}
                      </strong>
                    );
                  }
                  return <span key={pIdx}>{p}</span>;
                })}
              </span>
            </div>
          );
        }

        // Blank lines
        if (trimmed === "") {
          return <div key={idx} className="h-1" />;
        }

        // Regular paragraph with bolding support
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={idx} className="text-[#c3c6d7]">
            {parts.map((p, pIdx) => {
              if (p.startsWith("**") && p.endsWith("**")) {
                return (
                  <strong key={pIdx} className="text-[#e1e2ec] font-semibold">
                    {p.slice(2, -2)}
                  </strong>
                );
              }
              return <span key={pIdx}>{p}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [suggestedFollowUps, setSuggestedFollowUps] = useState<string[]>([]);
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const openAdvisor = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const closeAdvisor = () => {
    setIsOpen(false);
  };

  const toggleAdvisor = () => {
    if (!isOpen) {
      openAdvisor();
    } else {
      closeAdvisor();
    }
  };

  const sendMessage = useCallback(
    async (textToSend?: string) => {
      const text = (textToSend ?? input).trim();
      if (!text || loading) return;

      if (soundEnabled) playSound("send");

      const userMessage: ChatMessage = {
        id: "usr-" + Date.now(),
        role: "user",
        content: text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setLoading(true);
      setSuggestedFollowUps([]);

      try {
        const historyPayload = [...messages, userMessage]
          .filter((m) => m.role === "user" || m.role === "assistant")
          .slice(-8)
          .map((m) => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          }));

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: historyPayload }),
        });

        const data = await res.json();

        const assistantMessage: ChatMessage = {
          id: "ast-" + Date.now(),
          role: "assistant",
          content: data.reply || "Systems report an unexpected response. Please re-verify your prompt.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          actions: data.actions || [],
          modelUsed: data.modelUsed || "ACE Engine",
        };

        setMessages((prev) => [...prev, assistantMessage]);
        if (data.suggestedFollowUps && Array.isArray(data.suggestedFollowUps)) {
          setSuggestedFollowUps(data.suggestedFollowUps);
        }

        if (soundEnabled) playSound("receive");
        if (!isOpen) setHasUnread(true);
      } catch (err) {
        console.error("Chat communication failure:", err);
        const errorMessage: ChatMessage = {
          id: "err-" + Date.now(),
          role: "assistant",
          content: `### Telemetry Interruption\nWe encountered a network interruption connecting to the ACE Architecture API. You can review our direct engineering capabilities or reserve an Executive Briefing below.`,
          timestamp: "Just now",
          actions: [
            { label: "Reserve Executive Briefing", action: "navigate", target: "#consultation-card" },
          ],
          modelUsed: "Failover Protocol",
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setLoading(false);
      }
    },
    [input, loading, soundEnabled, messages, isOpen]
  );

  // Auto-scroll on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Allow global triggering via custom window event
  useEffect(() => {
    const handleOpenChat = (e: CustomEvent<{ query?: string }>) => {
      setIsOpen(true);
      setHasUnread(false);
      if (e.detail?.query) {
        sendMessage(e.detail.query);
      }
    };

    window.addEventListener("open-ace-chat" as unknown as keyof WindowEventMap, handleOpenChat as EventListener);
    return () => {
      window.removeEventListener("open-ace-chat" as unknown as keyof WindowEventMap, handleOpenChat as EventListener);
    };
  }, [sendMessage]);

  const handleActionClick = (action: MessageAction) => {
    if (action.action === "navigate" && action.target) {
      const el = document.querySelector(action.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (action.action === "query" && action.target) {
      sendMessage(action.target);
    }
  };

  const resetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setSuggestedFollowUps([]);
  };

  return (
    <>
      {/* Floating Toggle Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {!isOpen && (
          <div
            onClick={openAdvisor}
            className="mb-3 px-3.5 py-1.5 rounded-full bg-[#191b23]/95 border border-[#4cd7f6]/30 text-xs text-[#e1e2ec] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2 cursor-pointer hover:border-[#4cd7f6]/60 transition-all group animate-fade-in"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]"></span>
            </span>
            <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#4cd7f6] font-medium tracking-wide">
              ACE AI ARCHITECT
            </span>
            <span className="text-white/40">|</span>
            <span className="text-xs text-[#c3c6d7] group-hover:text-white transition-colors">
              Ask Architecture Specs
            </span>
          </div>
        )}

        <button
          onClick={toggleAdvisor}
          aria-label={isOpen ? "Close ACE Architecture Advisor" : "Open ACE Architecture Advisor"}
          className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#2563eb] to-[#4cd7f6] p-[2px] shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(76,215,246,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
        >
          <div className="w-full h-full bg-[#10131a] rounded-[14px] flex items-center justify-center transition-colors group-hover:bg-[#10131a]/80">
            {isOpen ? (
              <X className="w-6 h-6 text-[#e1e2ec]" />
            ) : (
              <div className="relative">
                <MessageSquare className="w-6 h-6 text-[#4cd7f6]" />
                {hasUnread && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#4cd7f6] rounded-full ring-2 ring-[#10131a] animate-pulse" />
                )}
              </div>
            )}
          </div>
        </button>
      </div>

      {/* Main Chatbot Modal Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[440px] md:w-[470px] h-[640px] max-h-[82vh] rounded-3xl bg-[#10131a]/95 border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header Bar */}
          <div className="px-5 py-4 bg-[#191b23]/90 border-b border-white/[0.08] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2563eb] to-[#4cd7f6] p-[1.5px] flex-shrink-0">
                <div className="w-full h-full bg-[#10131a] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#4cd7f6]" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-sm font-bold text-[#e1e2ec] tracking-tight">
                    ACE Architecture Advisor
                  </h3>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-['JetBrains_Mono',monospace] bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/20">
                    LIVE
                  </span>
                </div>
                <div className="flex items-center gap-2 font-['JetBrains_Mono',monospace] text-[10px] text-[#8d90a0]">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-pulse" />
                  <span>NODE // AGENT-01 • READY</span>
                </div>
              </div>
            </div>

            {/* Actions: Sound, Reset, Close */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? "Mute audio cues" : "Enable audio cues"}
                className="p-1.5 rounded-lg text-[#8d90a0] hover:text-[#e1e2ec] hover:bg-white/[0.06] transition-colors"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <button
                onClick={resetChat}
                title="Reset conversation"
                className="p-1.5 rounded-lg text-[#8d90a0] hover:text-[#e1e2ec] hover:bg-white/[0.06] transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Minimize advisor"
                className="p-1.5 rounded-lg text-[#8d90a0] hover:text-[#e1e2ec] hover:bg-white/[0.06] transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
              >
                {/* Bubble */}
                <div
                  className={`max-w-[88%] sm:max-w-[84%] rounded-2xl p-4 text-sm ${
                    msg.role === "user"
                      ? "bg-[#2563eb] text-white rounded-br-xs shadow-[0_4px_15px_rgba(37,99,235,0.3)] font-medium"
                      : "bg-[#191b23] border border-white/[0.08] text-[#c3c6d7] rounded-bl-xs shadow-md"
                  }`}
                >
                  {msg.role === "user" ? (
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  ) : (
                    renderMarkdown(msg.content)
                  )}

                  {/* Actions inside bot bubble */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-3.5 pt-3 border-t border-white/[0.06] flex flex-wrap gap-2">
                      {msg.actions.map((act, aIdx) => (
                        <button
                          key={aIdx}
                          onClick={() => handleActionClick(act)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#272a32] hover:bg-[#32353d] text-[#4cd7f6] hover:text-white border border-[#4cd7f6]/20 hover:border-[#4cd7f6]/40 text-xs font-medium transition-all group cursor-pointer"
                        >
                          <span>{act.label}</span>
                          {act.action === "navigate" ? (
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          ) : (
                            <Terminal className="w-3 h-3" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub-label telemetry & timestamp */}
                <div className="mt-1 px-1 flex items-center gap-2 font-['JetBrains_Mono',monospace] text-[10px] text-[#8d90a0]">
                  <span>{msg.timestamp}</span>
                  {msg.modelUsed && (
                    <>
                      <span>•</span>
                      <span className="text-[#4cd7f6]/70">{msg.modelUsed}</span>
                    </>
                  )}
                </div>
              </div>
            ))}

            {/* Inference Loading Indicator */}
            {loading && (
              <div className="flex flex-col items-start animate-fade-in">
                <div className="bg-[#191b23] border border-[#4cd7f6]/20 rounded-2xl rounded-bl-xs p-4 flex items-center gap-3 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-bounce" />
                  </div>
                  <span className="font-['JetBrains_Mono',monospace] text-xs text-[#4cd7f6] tracking-wider uppercase">
                    Synthesizing Architecture...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Follow-Ups or Prompts */}
          <div className="px-4 py-2 border-t border-white/[0.04] bg-[#141720]/80">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
              {(suggestedFollowUps.length > 0
                ? suggestedFollowUps
                : SUGGESTED_PROMPTS.map((p) => p.text)
              ).map((promptText, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => sendMessage(promptText)}
                  disabled={loading}
                  className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[#191b23] hover:bg-[#272a32] text-[#c3c6d7] hover:text-[#4cd7f6] border border-white/[0.06] hover:border-[#4cd7f6]/30 text-xs font-medium transition-all disabled:opacity-50 cursor-pointer flex-shrink-0"
                >
                  {promptText}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="p-4 bg-[#191b23] border-t border-white/[0.08]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2"
            >
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about AI swarms, distributed state, or SLAs..."
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-xl bg-[#10131a] border border-white/10 text-sm text-[#e1e2ec] placeholder-[#8d90a0] focus:outline-none focus:border-[#4cd7f6]/50 focus:ring-1 focus:ring-[#4cd7f6]/50 transition-all font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Submit message"
                className="p-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white disabled:opacity-40 disabled:hover:bg-[#2563eb] transition-all duration-200 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2.5 flex items-center justify-between text-[10px] text-[#8d90a0] font-['JetBrains_Mono',monospace]">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-[#4cd7f6]" />
                Zero-Trust Secure Session
              </span>
              <span>ENTERPRISE SPEC v2.4</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
