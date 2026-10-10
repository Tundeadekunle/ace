"use client";

import { Cpu, BrainCircuit, CloudCog, Layers, CheckCircle2, ShieldCheck, Gauge } from "lucide-react";

export default function Capabilities() {
  return (
    <section className="w-full py-28 relative" id="capabilities">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#4cd7f6] tracking-widest uppercase mb-3 flex items-center gap-2">
              <span>[ DOMAIN ARCHITECTURE ]</span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold text-[#e1e2ec] tracking-tight leading-tight">
              Engineered for Extremes of Scale, Velocity, and Security
            </h2>
          </div>
          <p className="font-['Inter',sans-serif] text-base text-[#c3c6d7] max-w-md leading-relaxed">
            We build with zero tolerance for architectural degradation. Systems architected to operate under volatile load spikes and stringent compliance mandates.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Pillar 1: Full-Cycle Bespoke Engineering (Col Span 7) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#191b23] border border-white/[0.08] p-8 lg:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:bg-[#1d1f27] hover:border-[#4cd7f6]/30 transition-all duration-300">
            <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-[#2563eb]/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#272a32] border border-white/10 flex items-center justify-center text-[#4cd7f6] mb-6 shadow-inner group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6 text-[#4cd7f6]" />
              </div>
              <div className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#4cd7f6] uppercase tracking-widest mb-1.5">
                01 / CORE SYSTEMS
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-bold text-[#e1e2ec] mb-4">
                Full-Cycle Bespoke Engineering
              </h3>
              <p className="font-['Inter',sans-serif] text-base text-[#c3c6d7] leading-relaxed mb-8">
                End-to-end realization of high-throughput backend fabrics. We engineer distributed event brokers, fault-tolerant stateful engines, and multi-tenant architectures engineered with low latency and lock-free concurrency.
              </p>
            </div>

            {/* Feature Bullets & Benchmark bar */}
            <div className="space-y-6 pt-4 border-t border-white/[0.06]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] mt-1 shrink-0" />
                  <span className="font-['Inter',sans-serif] text-sm text-[#e1e2ec]">
                    Distributed state engines &amp; consensus (Raft/Paxos)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] mt-1 shrink-0" />
                  <span className="font-['Inter',sans-serif] text-sm text-[#e1e2ec]">
                    Sub-millisecond internal RPC orchestration
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] mt-1 shrink-0" />
                  <span className="font-['Inter',sans-serif] text-sm text-[#e1e2ec]">
                    High-volume transactional event streams (Kafka/Flink)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] mt-1 shrink-0" />
                  <span className="font-['Inter',sans-serif] text-sm text-[#e1e2ec]">
                    Automated multi-region sharding strategies
                  </span>
                </div>
              </div>

              {/* Benchmark Bar */}
              <div className="p-3.5 rounded-lg bg-[#0b0e15] border border-white/5 flex items-center justify-between font-['JetBrains_Mono',monospace] text-xs">
                <span className="text-[#8d90a0]">BENCHMARK: 2.4M OPS/SEC</span>
                <span className="text-[#4cd7f6] font-semibold">P99.9: 1.18ms</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Enterprise AI & Agent Platforms (Col Span 5) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#191b23] border border-white/[0.08] p-8 lg:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:bg-[#1d1f27] hover:border-[#b4c5ff]/30 transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#4cd7f6]/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#272a32] border border-white/10 flex items-center justify-center text-[#b4c5ff] mb-6 shadow-inner group-hover:scale-105 transition-transform">
                <BrainCircuit className="w-6 h-6 text-[#b4c5ff]" />
              </div>
              <div className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#b4c5ff] uppercase tracking-widest mb-1.5">
                02 / INTELLIGENCE
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-bold text-[#e1e2ec] mb-4">
                Enterprise AI &amp; Agent Platforms
              </h3>
              <p className="font-['Inter',sans-serif] text-base text-[#c3c6d7] leading-relaxed mb-8">
                Productionize autonomous agent networks, vector-indexed hybrid RAG pipelines, and deterministic tool-calling runtimes inside airtight security perimeter enclaves.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              <div className="p-3 rounded-lg bg-[#0b0e15] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
                  <span className="font-['Inter',sans-serif] text-sm text-[#e1e2ec] font-medium">
                    Fine-Tuned LLM Routing
                  </span>
                </div>
                <span className="font-['JetBrains_Mono',monospace] text-xs text-[#8d90a0]">
                  Llama-3.3 / Mistral
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#0b0e15] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                  <span className="font-['Inter',sans-serif] text-sm text-[#e1e2ec] font-medium">
                    Vector Graph Retrieval
                  </span>
                </div>
                <span className="font-['JetBrains_Mono',monospace] text-xs text-[#8d90a0]">
                  Milvus + pgvector
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#0b0e15] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#acedff]"></span>
                  <span className="font-['Inter',sans-serif] text-sm text-[#e1e2ec] font-medium">
                    On-Prem Enclave Inference
                  </span>
                </div>
                <span className="font-['JetBrains_Mono',monospace] text-xs text-[#4cd7f6]">
                  Zero Data Leakage
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Cloud Modernization & DevSecOps (Col Span 5) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#191b23] border border-white/[0.08] p-8 lg:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:bg-[#1d1f27] hover:border-[#4cd7f6]/30 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#272a32] border border-white/10 flex items-center justify-center text-[#4cd7f6] mb-6 shadow-inner group-hover:scale-105 transition-transform">
                <CloudCog className="w-6 h-6 text-[#4cd7f6]" />
              </div>
              <div className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#4cd7f6] uppercase tracking-widest mb-1.5">
                03 / FABRIC
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-bold text-[#e1e2ec] mb-4">
                Cloud Modernization &amp; DevSecOps
              </h3>
              <p className="font-['Inter',sans-serif] text-base text-[#c3c6d7] leading-relaxed mb-8">
                Transition complex legacy infrastructure to cloud-native orchestrations without operational paralysis. Immutable IaC with continuous security guardrails.
              </p>
            </div>

            <div className="space-y-3.5 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-2.5 font-['Inter',sans-serif] text-sm text-[#e1e2ec]">
                <ShieldCheck className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                <span>Multi-Cloud Kubernetes (EKS / GKE / On-Prem)</span>
              </div>
              <div className="flex items-center gap-2.5 font-['Inter',sans-serif] text-sm text-[#e1e2ec]">
                <ShieldCheck className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                <span>GitOps Automated Deployments (ArgoCD / Flux)</span>
              </div>
              <div className="flex items-center gap-2.5 font-['Inter',sans-serif] text-sm text-[#e1e2ec]">
                <ShieldCheck className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                <span>eBPF-Based Telemetry &amp; Micro-Segmentation</span>
              </div>
            </div>
          </div>

          {/* Pillar 4: High-Velocity Web & Native Platforms (Col Span 7) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#191b23] border border-white/[0.08] p-8 lg:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:bg-[#1d1f27] hover:border-[#b4c5ff]/30 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#272a32] border border-white/10 flex items-center justify-center text-[#b4c5ff] mb-6 shadow-inner group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6 text-[#b4c5ff]" />
              </div>
              <div className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#b4c5ff] uppercase tracking-widest mb-1.5">
                04 / APPLICATION INTERFACES
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-bold text-[#e1e2ec] mb-4">
                High-Velocity Web &amp; Native Platforms
              </h3>
              <p className="font-['Inter',sans-serif] text-base text-[#c3c6d7] leading-relaxed mb-8">
                Sub-second client rendering engines, WebAssembly computations, real-time WebSockets synchronization, and pixel-precise, mission-critical mobile interfaces designed for high-density analytical dashboards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.06]">
              <div className="p-4 rounded-xl bg-[#0b0e15] border border-white/5">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#4cd7f6] uppercase tracking-wider">
                  WebAssembly
                </div>
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-bold text-[#e1e2ec] mt-1">
                  Client Compute
                </div>
                <p className="font-['Inter',sans-serif] text-xs text-[#8d90a0] mt-1.5 leading-normal">
                  Heavy client-side parsing without server load
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0e15] border border-white/5">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#b4c5ff] uppercase tracking-wider">
                  Sync Fabric
                </div>
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-bold text-[#e1e2ec] mt-1">
                  CRDT Realtime
                </div>
                <p className="font-['Inter',sans-serif] text-xs text-[#8d90a0] mt-1.5 leading-normal">
                  Collaborative operational editing &amp; offline sync
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0e15] border border-white/5">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#4cd7f6] uppercase tracking-wider">
                  Zero Lag UI
                </div>
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-bold text-[#e1e2ec] mt-1">
                  60-120 FPS
                </div>
                <p className="font-['Inter',sans-serif] text-xs text-[#8d90a0] mt-1.5 leading-normal">
                  Virtualization for 100K+ data table rows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
