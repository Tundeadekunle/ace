import { MessageAction, SuggestedPrompt } from "@/types/chat";

export const ACE_SYSTEM_PROMPT = `You are "ACE Architecture Advisor", the elite AI engineering assistant for ACE Technologies.
ACE Technologies is a premier engineering firm that partners with Fortune 500 enterprises and hyper-growth scale-ups to architect high-consequence digital infrastructure, bespoke autonomous AI architectures, and resilient distributed platforms with mathematical precision.

### CORE BRAND IDENTITY & TONE:
- Tone: Authoritative, deeply technical, precise, concise, engineering-focused. Avoid fluff and buzzword salad. Speak like a Principal Systems Architect.
- Style: Use bullet points, bold highlights, metrics (latencies, throughput, SLA), and occasional code/architecture snippets where appropriate.

### CORE CAPABILITIES:
1. Autonomous Agent Swarms & Orchestration:
   - Bespoke multi-agent coordination frameworks with sub-second consensus mechanisms.
   - Deterministic execution graphs, automatic self-healing runtimes, zero-drifting task pipelines.
   - Integration with proprietary enterprise models, open-source weights (Llama 3, DeepSeek, Mistral), and frontier reasoning APIs.

2. High-Throughput Distributed State Engines:
   - Active-active multi-region distributed databases with custom Raft/Paxos consensus implementations.
   - Sub-5ms p99 write latency across globally replicated nodes; 100,000+ operations/sec per cluster.
   - 99.999% SLA availability guarantees with zero data-loss failover primitives.

3. Zero-Trust Cloud Fabric & Cryptographic Security:
   - Workload identity federation with SPIFFE/SPIRE and mTLS mesh networks.
   - Confidential computing enclaves (AMD SEV-SNP, Intel SGX) for private inference.
   - Full compliance readiness: SOC 2 Type II, HIPAA, PCI-DSS Level 1, ISO 27001.

### KEY CASE STUDIES:
- Global Tier-1 FinTech Core: Replaced legacy mainframe clearing with an event-driven distributed actor pipeline; handled $4.2B in daily volume with 99.999% uptime and zero settlement discrepancies.
- Sovereign Healthcare Intelligence: Deployed an on-premise private agent network for clinical trial data summarization with zero patient data egress outside VPC boundaries.
- Autonomous Logistics & Fleet Mesh: Engineered dynamic real-time routing mesh across 12,000+ IoT nodes with sub-4ms distributed edge synchronization.

### CONSULTATION & ENGAGEMENT:
- Horizon: Available for Q2 launch engagements (4–8 week sprint cycles or multi-quarter transformation mandates).
- Next Step: Direct clients to reserve an Executive Engineering Briefing with ACE Principal Architects. Prompt them to check the consultation form on the page (#consultation-card) or provide their email and scope for direct routing.

Always keep answers grounded in these capabilities. If a user asks a general software engineering or distributed systems question, answer it through the lens of high-reliability, mission-critical architecture.`;

export const SUGGESTED_PROMPTS: SuggestedPrompt[] = [
  {
    id: "agents",
    category: "Agents",
    text: "How does ACE architect autonomous AI agent swarms?",
    shortLabel: "Autonomous AI Swarms",
  },
  {
    id: "distributed-state",
    category: "Architecture",
    text: "What are your distributed state engine benchmarks and failover SLAs?",
    shortLabel: "Distributed State & SLAs",
  },
  {
    id: "fintech-study",
    category: "Case Studies",
    text: "Can you detail the Tier-1 FinTech case study and latency results?",
    shortLabel: "FinTech Case Study",
  },
  {
    id: "consultation",
    category: "Engagement",
    text: "How do we schedule an Executive Engineering Briefing for Q2?",
    shortLabel: "Schedule Q2 Briefing",
  },
];

interface KnowledgeMatch {
  keywords: string[];
  reply: string;
  actions?: MessageAction[];
  suggestedFollowUps?: string[];
}

export const KNOWLEDGE_BASE_RULES: KnowledgeMatch[] = [
  {
    keywords: ["agent", "swarm", "autonomous", "orchestration", "multi-agent"],
    reply: `### Autonomous Agent Swarms & Orchestration
ACE engineers enterprise-grade multi-agent architectures that move beyond simple prompt chaining:

- **Deterministic Execution Graphs**: DAG-driven agent workflows with verifiable rollback checkpoints and deterministic state transitions.
- **Sub-Second Consensus**: Inter-agent arbitration protocols ensuring aligned decisions across heterogeneous model workers.
- **Private Enclave Execution**: Sovereign deployments running within private VPCs or on-premise enclaves with zero external data egress.
- **Self-Healing Topology**: Automated agent heartbeat monitoring with instantaneous hot-standby failover.

Would you like to examine our healthcare agent case study or discuss your enterprise workflow?`,
    actions: [
      { label: "View Case Studies", action: "navigate", target: "#case-studies" },
      { label: "Book Technical Briefing", action: "navigate", target: "#consultation-card" },
    ],
    suggestedFollowUps: [
      "How do agents ensure zero data egress in healthcare?",
      "What models do you support in your agent pipelines?",
    ],
  },
  {
    keywords: ["distributed", "state", "consensus", "latency", "raft", "paxos", "database", "scale"],
    reply: `### High-Throughput Distributed State Engines
We specialize in mission-critical data systems engineered for extreme concurrency:

- **Latency Profile**: Sub-5ms p99 write latencies across multi-region active-active clusters.
- **Throughput**: Validated sustained load of 100,000+ transactional write operations/second per partition.
- **Consensus Primitives**: Tailored Raft & Multi-Paxos algorithms optimized for WAN replication.
- **SLA Reliability**: Guaranteed 99.999% availability with zero-downtime rolling upgrades.

You can inspect our live benchmarks and tech stack in the interactive terminal on this page.`,
    actions: [
      { label: "Inspect Terminal Specs", action: "navigate", target: "#architecture-specs" },
      { label: "Schedule Architecture Review", action: "navigate", target: "#consultation-card" },
    ],
    suggestedFollowUps: [
      "Tell me about the FinTech mainframe migration",
      "How do you handle cross-region partition tolerance?",
    ],
  },
  {
    keywords: ["fintech", "finance", "banking", "case study", "4.2b", "settlement"],
    reply: `### Case Study: Tier-1 Global FinTech Core
- **Challenge**: The client operated legacy mainframe infrastructure handling billions in daily settlements, struggling with maintenance overhead and batch settlement latency.
- **Architecture**: ACE engineered an event-driven, actor-based clearing pipeline with distributed deterministic ledger state.
- **Outcomes**:
  - **Volume Handled**: $4.2B+ daily transaction volume processed with zero discrepancies.
  - **Uptime**: 99.999% verified uptime across 4 consecutive fiscal quarters.
  - **Latency**: Reduced end-to-end clearing window from 4.5 hours to under 280 milliseconds.`,
    actions: [
      { label: "Review All Case Studies", action: "navigate", target: "#case-studies" },
      { label: "Book Consultation", action: "navigate", target: "#consultation-card" },
    ],
    suggestedFollowUps: [
      "What was the migration strategy from the mainframe?",
      "Tell me about the Sovereign Healthcare case study",
    ],
  },
  {
    keywords: ["healthcare", "hipaa", "privacy", "clinical", "pharma"],
    reply: `### Case Study: Sovereign Healthcare AI
- **Challenge**: A leading health sciences enterprise required automated clinical summarization across petabytes of sensitive records while strictly observing HIPAA and GDPR mandates.
- **Architecture**: We built a sovereign multi-agent LLM pipeline deployed within confidential computing enclaves (AMD SEV-SNP), guaranteeing hardware-isolated cryptographic privacy.
- **Outcomes**:
  - 100% data residency retention within private VPC boundaries.
  - 82% reduction in clinical report generation turnaround time.
  - Complete cryptographic audit trails for every agent inference.`,
    actions: [
      { label: "View Architecture Specs", action: "navigate", target: "#architecture-specs" },
      { label: "Schedule Briefing", action: "navigate", target: "#consultation-card" },
    ],
    suggestedFollowUps: [
      "How does confidential computing work with LLMs?",
      "What are ACE's compliance certifications?",
    ],
  },
  {
    keywords: ["consultation", "contact", "hire", "schedule", "pricing", "cost", "q2", "book", "meeting", "briefing"],
    reply: `### Reserve an Executive Engineering Briefing
Our principal architects work directly with executive leadership and engineering directors to scope mission-critical initiatives:

- **Typical Horizons**: 4–8 week rapid architectural sprints or multi-quarter replatforming mandates.
- **Availability**: Currently accepting high-impact projects for **Q2**.
- **What We Cover**: Technical viability assessment, distributed topology diagrams, latency benchmarks, and concrete milestone estimates.

You can reserve a briefing instantly through our consultation portal below.`,
    actions: [
      { label: "Open Consultation Form", action: "navigate", target: "#consultation-card" },
    ],
    suggestedFollowUps: [
      "What is the average timeline for an enterprise AI deployment?",
      "Do you offer on-premise deployments?",
    ],
  },
  {
    keywords: ["security", "zero-trust", "soc2", "compliance", "mtls", "enclave"],
    reply: `### Zero-Trust Cloud Fabric & Cryptographic Defense
Security is a foundational design invariant at ACE:

- **Workload Identity**: Cryptographically verified identities powered by SPIFFE/SPIRE across all mesh services.
- **Confidential Computing**: Hardware enclaves ensuring data is encrypted in-use, in-transit, and at-rest.
- **Compliance Standards**: SOC 2 Type II, HIPAA, PCI-DSS Level 1, ISO/IEC 27001 verified patterns.
- **Automated Chaos & Red-Teaming**: Built-in fault injection and automated threat modeling throughout CI/CD pipelines.`,
    actions: [
      { label: "Explore Capabilities", action: "navigate", target: "#capabilities" },
      { label: "Schedule Security Audit", action: "navigate", target: "#consultation-card" },
    ],
    suggestedFollowUps: [
      "How do you implement SPIFFE/SPIRE in multi-cloud?",
      "Can we book an engineering consultation?",
    ],
  },
];

export function getOfflineResponse(userQuery: string): {
  reply: string;
  actions?: MessageAction[];
  suggestedFollowUps?: string[];
} {
  const queryLower = userQuery.toLowerCase();

  for (const rule of KNOWLEDGE_BASE_RULES) {
    if (rule.keywords.some((k) => queryLower.includes(k))) {
      return {
        reply: rule.reply,
        actions: rule.actions,
        suggestedFollowUps: rule.suggestedFollowUps,
      };
    }
  }

  // Default fallback response
  return {
    reply: `### ACE Systems Engineering
Thank you for your inquiry. ACE Technologies designs mission-critical distributed architectures, autonomous AI agent networks, and resilient cloud platforms for global enterprises.

Key areas where our principal architects can assist:
- **Autonomous AI Swarms**: Deterministic execution, inter-agent consensus, and private VPC deployment.
- **Distributed State Engines**: Sub-5ms p99 write latency, multi-region Raft/Paxos clustering, and 99.999% SLA.
- **Zero-Trust Cloud Fabric**: SPIFFE/SPIRE mTLS, confidential computing enclaves, and regulatory compliance.

Would you like to explore our case studies or reserve an executive engineering briefing with our team?`,
    actions: [
      { label: "Explore Capabilities", action: "navigate", target: "#capabilities" },
      { label: "Schedule Consultation", action: "navigate", target: "#consultation-card" },
    ],
    suggestedFollowUps: [
      "Tell me about your distributed state engine",
      "How does ACE architect autonomous AI swarms?",
      "How can we book an engineering briefing?",
    ],
  };
}
