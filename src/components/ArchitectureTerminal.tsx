"use client";

import { useState } from "react";
import { ShieldCheck, Copy, Check, Terminal, Play, Server } from "lucide-react";

const codeSnippets = {
  "fabric.rs": `// Initialize ACE Zero-Trust Distributed Enclave
use ace_distributed::{MeshRouter, ConsensusProtocol, TokenBucket};
use ace_security::{MtlsChannel, EphemeralVaultKey};

// Enforce sub-millisecond sharded consensus with Raft
pub async fn bootstrap_regional_fabric(
    nodes: Vec<NodeAddr>, 
    quota: TokenBucket
) -> Result<MeshRouter, FabricError> {
    let security_context = MtlsChannel::assert_zero_trust(&nodes).await?;
    let router = MeshRouter::build(security_context)
        .with_failover_latency_cap(Duration::from_millis(5))
        .with_adaptive_model_route(ModelTier::HighThroughput)
        .rebalance_shards().await;

    log::info!("[ACE CORE] Fabric online. Global jitter: 0.12ms");
    Ok(router)
}`,

  "mesh.go": `// Multi-Region Mesh Interconnect Gateway
package fabric

import (
    "context"
    "time"
    "google.golang.org/grpc"
    "github.com/ace-tech/kernel/telemetry"
)

func NewZeroTrustGateway(ctx context.Context, config *ClusterConfig) (*Gateway, error) {
    conn, err := grpc.DialContext(ctx, config.PrimaryEnclave,
        grpc.WithTransportCredentials(config.MtlsCredentials),
        grpc.WithBlock(),
        grpc.WithTimeout(2*time.Millisecond),
    )
    if err != nil {
        return nil, telemetry.WrapFatal(err, "CLUSTER_CONNECT_FAIL")
    }
    telemetry.RecordMetric("active_shards", config.ShardCount)
    return &Gateway{conn: conn, ready: true}, nil
}`,

  "telemetry.sh": `#!/bin/bash
# ACE Kernel Telemetry & eBPF Health Probe
echo "[ACE TELEMETRY] Initializing dynamic trace points..."
bpftool prog load ./probes/xdp_filter.o /sys/fs/bpf/xdp_filter
tc filter add dev eth0 ingress bpf da obj ./probes/tc_meter.o sec meter

# Runtime Performance Metrics Output
echo "> RUNTIME VALIDATION: PASS (0 DEFECTS)"
echo "> ACTIVE SHARDS: 512 | P99.9 JITTER: 0.12ms"
echo "> COMPUTE CYCLES: 1,240 GFLOPS | MEMORY LEAK: 0.00KB"`,
};

export default function ArchitectureTerminal() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeSnippets>("fabric.rs");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-28 relative" id="architecture-specs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Technical Taxonomy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#4cd7f6] tracking-widest uppercase mb-3 block">
                [ PROTOCOLS &amp; RUNTIMES ]
              </span>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl font-bold text-[#e1e2ec] tracking-tight mb-4">
                Zero Unproven Dependencies. Surgical Stack Selection.
              </h2>
              <p className="font-['Inter',sans-serif] text-base text-[#c3c6d7] leading-relaxed">
                We engineer with systems-level languages and verified cloud primitives. No fragile abstractions—only deterministic memory management and industrial scale.
              </p>
            </div>

            {/* Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3.5 py-1.5 rounded-lg bg-[#272a32] border border-white/5 font-['JetBrains_Mono',monospace] text-xs font-medium text-[#4cd7f6]">
                Rust (Tokio / Actix)
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#272a32] border border-white/5 font-['JetBrains_Mono',monospace] text-xs font-medium text-[#b4c5ff]">
                Go 1.23 (gRPC / Fiber)
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#272a32] border border-white/5 font-['JetBrains_Mono',monospace] text-xs font-medium text-[#e1e2ec]">
                TypeScript / Node
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#272a32] border border-white/5 font-['JetBrains_Mono',monospace] text-xs font-medium text-[#e1e2ec]">
                Python (PyTorch / vLLM)
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#272a32] border border-white/5 font-['JetBrains_Mono',monospace] text-xs font-medium text-[#4cd7f6]">
                Kubernetes (K8s)
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#272a32] border border-white/5 font-['JetBrains_Mono',monospace] text-xs font-medium text-[#e1e2ec]">
                Apache Kafka / Redpanda
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#272a32] border border-white/5 font-['JetBrains_Mono',monospace] text-xs font-medium text-[#b4c5ff]">
                Terraform / OpenTofu
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#272a32] border border-white/5 font-['JetBrains_Mono',monospace] text-xs font-medium text-[#e1e2ec]">
                PostgreSQL / ClickHouse
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#272a32] border border-white/5 font-['JetBrains_Mono',monospace] text-xs font-medium text-[#4cd7f6]">
                AWS / GCP / Bare Metal
              </span>
            </div>

            {/* Architecture SLA Box */}
            <div className="p-6 rounded-xl bg-[#191b23] border border-white/[0.08] shadow-sm flex items-start gap-4 mt-2">
              <ShieldCheck className="w-8 h-8 text-[#4cd7f6] shrink-0 mt-0.5" />
              <div>
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-bold text-[#e1e2ec]">
                  Deterministic Guarantee
                </div>
                <div className="font-['Inter',sans-serif] text-sm text-[#c3c6d7] mt-1 leading-relaxed">
                  All code shipped meets 90%+ branch test coverage and continuous dynamic fuzzing analysis.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Simulated Interactive Code & Telemetry Terminal */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0b0e15] border border-white/10 shadow-2xl overflow-hidden group">
              {/* Terminal Titlebar with Tabs */}
              <div className="px-4 py-3 bg-[#191b23] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80 border border-white/10"></span>
                    <span className="w-3 h-3 rounded-full bg-[#03b5d3]/80 border border-white/10"></span>
                    <span className="w-3 h-3 rounded-full bg-[#4cd7f6]/80 border border-white/10"></span>
                  </div>

                  {/* File Tabs */}
                  <div className="flex items-center gap-1 ml-2">
                    {(Object.keys(codeSnippets) as (keyof typeof codeSnippets)[]).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1 rounded text-xs font-['JetBrains_Mono',monospace] transition-all ${
                          activeTab === tab
                            ? "bg-[#0b0e15] text-[#4cd7f6] border border-white/10 shadow-sm"
                            : "text-[#8d90a0] hover:text-[#e1e2ec]"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
                    <span className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#4cd7f6]">
                      CLUSTER_ONLINE
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md text-[#8d90a0] hover:text-white hover:bg-white/5 transition-colors"
                    title="Copy code snippet"
                  >
                    {copied ? (
                      <span className="flex items-center gap-1 text-[#4cd7f6] text-xs font-['JetBrains_Mono',monospace]">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-6 font-['JetBrains_Mono',monospace] text-xs sm:text-sm text-[#e1e2ec] leading-relaxed overflow-x-auto bg-[#0b0e15] min-h-[340px]">
                <pre className="text-[#c3c6d7]">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>

                {/* Execution Output Banner */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] text-[#4cd7f6] flex flex-wrap items-center justify-between gap-2 font-['JetBrains_Mono',monospace] text-xs">
                  <span className="flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-[#4cd7f6]" />
                    RUNTIME VALIDATION: PASS (0 DEFECTS)
                  </span>
                  <span className="text-[#8d90a0]">COMPUTE CYCLES: 1,240 GFLOPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
