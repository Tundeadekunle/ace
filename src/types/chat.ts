export type MessageRole = "user" | "assistant" | "system";

export interface MessageAction {
  label: string;
  action: "navigate" | "query" | "lead";
  target?: string; // anchor link (e.g., #consultation-card) or query text
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
  status?: "sending" | "sent" | "error";
  actions?: MessageAction[];
  modelUsed?: string;
}

export interface SuggestedPrompt {
  id: string;
  category: "Architecture" | "Agents" | "Case Studies" | "Engagement";
  text: string;
  shortLabel: string;
}

export interface ChatApiRequest {
  messages: Array<{
    role: "user" | "assistant";
    content: string;
  }>;
}

export interface ChatApiResponse {
  reply: string;
  suggestedFollowUps?: string[];
  actions?: MessageAction[];
  modelUsed: string;
  success: boolean;
  error?: string;
}
