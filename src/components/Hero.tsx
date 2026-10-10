"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal, Shield, Cpu, Activity, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-24 overflow-hidden">
      {/* Ambient Backdrop Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#2563eb]/20 via-[#4cd7f6]/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[420px] h-[420px] bg-[#03b5d3]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-[380px] h-[380px] bg-[#2563eb]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Telemetry Badge Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#191b23]/80 border border-white/[0.08] backdrop-blur-md shadow-sm mb-8 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4cd7f6]"></span>
          </span>
          <span className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#4cd7f6] tracking-widest uppercase">
            Next-Gen Enterprise Engineering
          </span>
          <span className="text-[#434655] font-['JetBrains_Mono',monospace] text-xs">|</span>
          <span className="font-['JetBrains_Mono',monospace] text-xs text-[#c3c6d7] flex items-center gap-1.5">
            <span className="text-[#4cd7f6] text-[10px]">●</span> ACTIVE NODES: 4,096
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-[#e1e2ec] max-w-5xl tracking-tight leading-[1.08] mb-7">
          Architecting High-Consequence{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4c5ff] via-[#4cd7f6] to-[#dbe1ff]">
            Digital Infrastructure
          </span>{" "}
          &amp; AI Platforms
        </h1>

        {/* Subhead */}
        <p className="font-['Inter',sans-serif] text-lg md:text-xl text-[#c3c6d7] text-center max-w-3xl leading-relaxed mb-10">
          We partner with Fortune 500 enterprises and hyper-growth scale-ups to engineer mission-critical cloud backends, bespoke autonomous AI architectures, and resilient distributed platforms with mathematical precision.
        </p>

        {/* Dual Call-to-Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20 w-full">
          <Link
            href="#capabilities"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#2563eb] text-white font-semibold text-base tracking-wide shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:bg-[#1d4ed8] hover:shadow-[0_0_40px_rgba(37,99,235,0.65)] transition-all duration-200 active:scale-[0.99]"
          >
            <span>Explore Engineering Capabilities</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#architecture-specs"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#191b23]/80 border border-white/10 backdrop-blur-md text-[#e1e2ec] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/30 hover:bg-[#272a32] transition-all duration-200"
          >
            <Terminal className="w-5 h-5 text-[#4cd7f6]" />
            <span className="font-medium text-base">Review Architecture Specs</span>
          </Link>
        </div>

        {/* Hero Visual HUD Showcase */}
        <div className="relative w-full max-w-6xl rounded-2xl bg-[#0b0e15] border border-white/10 overflow-hidden shadow-2xl shadow-black/80 group">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/8] overflow-hidden">
            <Image
              src="/images/hero-topology.jpg"
              alt="ACE Global Cloud Architecture Topology and Interconnected Substrates"
              fill
              priority
              className="object-cover object-center filter brightness-[0.9] contrast-[1.1] scale-[1.01] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            {/* Ambient Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e15] via-transparent to-[#0b0e15]/40 pointer-events-none" />

            {/* Live Telemetry Badges Overlay (Top Left) */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2.5">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0b0e15]/85 border border-white/10 backdrop-blur-md shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
                <span className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#e1e2ec]">
                  SYS_HEALTH: OPTIMAL
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0b0e15]/85 border border-white/10 backdrop-blur-md shadow-md">
                <span className="font-['JetBrains_Mono',monospace] text-xs text-[#b4c5ff]">
                  MULTI-REGION MESH [US-EAST / EU-CENTRAL / AP-NE]
                </span>
              </div>
            </div>

            {/* Zero-Trust Badge (Top Right) */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0b0e15]/90 border border-[#4cd7f6]/20 backdrop-blur-md font-['JetBrains_Mono',monospace] text-xs text-[#c3c6d7]">
              <Shield className="w-4 h-4 text-[#4cd7f6]" />
              <span className="font-medium tracking-wide">ZERO-TRUST ENCLAVE VERIFIED</span>
            </div>

            {/* HUD Floating Metrics Pill (Bottom Left) */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto flex flex-wrap items-center">
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 px-5 py-3 rounded-xl bg-[#10131a]/95 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">
                    Target Latency
                  </span>
                  <span className="font-['JetBrains_Mono',monospace] text-base font-bold text-[#4cd7f6]">
                    &lt;42ms Global
                  </span>
                </div>
                <div className="hidden sm:block h-7 w-px bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">
                    Availability SLA
                  </span>
                  <span className="font-['JetBrains_Mono',monospace] text-base font-bold text-[#e1e2ec]">
                    99.999%
                  </span>
                </div>
                <div className="hidden sm:block h-7 w-px bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">
                    Compliance
                  </span>
                  <span className="font-['JetBrains_Mono',monospace] text-base font-bold text-[#b4c5ff]">
                    SOC-2 Type II
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Ribbon Below Image */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08] border-t border-white/[0.08]">
            <div className="bg-[#191b23] p-6 lg:p-8 flex flex-col items-center justify-center text-center group/card hover:bg-[#1d1f27] transition-colors">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl lg:text-4xl font-extrabold text-[#e1e2ec] tracking-tight group-hover/card:scale-105 transition-transform">
                120+
              </div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#c3c6d7] uppercase tracking-wider mt-1.5">
                Enterprise Systems Deployed
              </div>
            </div>
            <div className="bg-[#191b23] p-6 lg:p-8 flex flex-col items-center justify-center text-center group/card hover:bg-[#1d1f27] transition-colors">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl lg:text-4xl font-extrabold text-[#4cd7f6] tracking-tight group-hover/card:scale-105 transition-transform">
                $4.2B+
              </div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#c3c6d7] uppercase tracking-wider mt-1.5">
                Processed Transaction Vol
              </div>
            </div>
            <div className="bg-[#191b23] p-6 lg:p-8 flex flex-col items-center justify-center text-center group/card hover:bg-[#1d1f27] transition-colors">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl lg:text-4xl font-extrabold text-[#e1e2ec] tracking-tight group-hover/card:scale-105 transition-transform">
                98.4%
              </div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#c3c6d7] uppercase tracking-wider mt-1.5">
                Multi-Year Client Retention
              </div>
            </div>
            <div className="bg-[#191b23] p-6 lg:p-8 flex flex-col items-center justify-center text-center group/card hover:bg-[#1d1f27] transition-colors">
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl lg:text-4xl font-extrabold text-[#b4c5ff] tracking-tight group-hover/card:scale-105 transition-transform">
                Tier-1
              </div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#c3c6d7] uppercase tracking-wider mt-1.5">
                Staff Engineering Roster
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
