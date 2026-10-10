"use client";

import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="w-full py-24 bg-[#0b0e15] border-y border-white/[0.06] relative overflow-hidden">
      {/* Subtle Ambient Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2563eb]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Quote Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#2563eb]/10 border border-[#2563eb]/20 mx-auto flex items-center justify-center text-[#4cd7f6] mb-8 shadow-sm">
          <Quote className="w-8 h-8 text-[#4cd7f6]" />
        </div>

        {/* Quote Statement */}
        <blockquote className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-3xl md:text-4xl font-semibold text-[#e1e2ec] tracking-tight leading-snug mb-10">
          “ACE Technologies completely redefined our perception of engineering velocity. What took our previous external systems vendor 14 months took ACE just 90 days—delivering a zero-downtime ledger migration that handled our record cyber-week surge without a single rollback.”
        </blockquote>

        {/* Executive Attribution */}
        <div className="flex flex-col items-center">
          <div className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-bold text-[#e1e2ec]">
            Marcus Vance
          </div>
          <div className="font-['Inter',sans-serif] text-sm font-medium text-[#4cd7f6] mt-0.5">
            Chief Technology Officer &amp; VP Engineering
          </div>
          <div className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#8d90a0] uppercase tracking-wider mt-1.5">
            Vertex Global Systems (FTSE 100)
          </div>
        </div>
      </div>
    </section>
  );
}
