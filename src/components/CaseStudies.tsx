"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    image: "/images/case-fintech.jpg",
    alt: "Bank server rack data center glowing dark aesthetic",
    tag: "FINTECH INFRASTRUCTURE",
    tagColor: "text-[#4cd7f6]",
    title: "Tier-1 Bank Mainframe Migration to Distributed Event Fabric",
    description:
      "Replaced a 28-year-old COBOL core ledger with an asynchronous event-sourced distributed database. Successfully handled $1.8B peak cyber-week volume with zero reconciliation discrepancy.",
    stat1: { value: "15M+", label: "Daily Transactions", color: "text-[#4cd7f6]" },
    stat2: { value: "0.00s", label: "Migration Downtime", color: "text-[#e1e2ec]" },
  },
  {
    image: "/images/case-healthtech.jpg",
    alt: "Clinical oncology scanner AI neural network visualization",
    tag: "HEALTHTECH AI",
    tagColor: "text-[#b4c5ff]",
    title: "HIPAA-Compliant Real-Time Medical Computer Vision Pipeline",
    description:
      "Engineered an edge-deployed multi-modal computer vision model inference engine for MRI and CT anomaly scanning with hardware-accelerated TensorRT execution and on-prem cryptographic attestation.",
    stat1: { value: "-73%", label: "Inference Latency", color: "text-[#b4c5ff]" },
    stat2: { value: "99.8%", label: "Pathology Accuracy", color: "text-[#e1e2ec]" },
  },
  {
    image: "/images/case-logistics.jpg",
    alt: "Global logistics maritime flight path routing telemetry matrix",
    tag: "AUTONOMOUS LOGISTICS",
    tagColor: "text-[#acedff]",
    title: "Global Dynamic Freight Dispatch & Route Combinatorics",
    description:
      "Developed an NP-hard graph optimization scheduler in Rust processing 400,000 concurrent multimodal intercontinental freight legs with dynamic weather, port congestion, and fuel recalculation.",
    stat1: { value: "400K", label: "Active Shipments", color: "text-[#4cd7f6]" },
    stat2: { value: "$14.2M", label: "Annual Fuel Saved", color: "text-[#e1e2ec]" },
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full py-28 bg-[#0b0e15] border-t border-white/[0.06] relative" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#4cd7f6] tracking-widest uppercase mb-3 block">
              [ PROVEN EXECUTION ]
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold text-[#e1e2ec] tracking-tight">
              Mission-Critical Deployments
            </h2>
          </div>
          <Link
            href="#consultation-card"
            className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-sm font-semibold text-[#4cd7f6] hover:text-white transition-colors group"
          >
            <span>Request Detailed Engineering Whitepapers</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#191b23] border border-white/[0.08] overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300 group"
            >
              {/* Image Preview */}
              <div className="relative h-60 w-full overflow-hidden bg-[#272a32]">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191b23] via-[#191b23]/30 to-transparent" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-md bg-[#0b0e15]/90 border border-white/10 backdrop-blur-md font-['JetBrains_Mono',monospace] text-xs font-semibold ${c.tagColor}`}>
                  {c.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold text-[#e1e2ec] mb-3 leading-snug group-hover:text-white transition-colors">
                    {c.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-sm text-[#c3c6d7] leading-relaxed mb-6">
                    {c.description}
                  </p>
                </div>

                {/* Outcome Metrics Footer */}
                <div className="pt-4 bg-[#0b0e15]/80 -mx-7 sm:-mx-8 -mb-7 sm:-mb-8 p-6 border-t border-white/[0.06]">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className={`font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-extrabold ${c.stat1.color}`}>
                        {c.stat1.value}
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider mt-0.5">
                        {c.stat1.label}
                      </div>
                    </div>
                    <div>
                      <div className={`font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-extrabold ${c.stat2.color}`}>
                        {c.stat2.value}
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider mt-0.5">
                        {c.stat2.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
