"use client";

import { Landmark, Dna, Network, Globe2, Cpu, TrendingUp } from "lucide-react";

const partners = [
  { name: "NEXUS CAPITAL", icon: Landmark, color: "text-[#b4c5ff]" },
  { name: "VORTECH BIO", icon: Dna, color: "text-[#4cd7f6]" },
  { name: "HYPERSCALE", icon: Network, color: "text-[#dbe1ff]" },
  { name: "OMNIGLOBAL", icon: Globe2, color: "text-[#4cd7f6]" },
  { name: "SYNTHETIX AI", icon: Cpu, color: "text-[#b4c5ff]" },
  { name: "APEX FINTECH", icon: TrendingUp, color: "text-[#4cd7f6]" },
];

export default function LogoTicker() {
  return (
    <section className="w-full py-12 bg-[#0b0e15] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Header pill */}
          <div className="flex items-center gap-2.5 font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#8d90a0] uppercase tracking-widest whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
            TRUSTED BY LEADERS IN HIGH-STAKES INDUSTRIES
          </div>

          {/* Logo Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 w-full lg:w-auto items-center">
            {partners.map((partner) => {
              const Icon = partner.icon;
              return (
                <div
                  key={partner.name}
                  className="flex items-center justify-center gap-2.5 font-['Plus_Jakarta_Sans',sans-serif] text-sm font-bold tracking-tight text-[#e1e2ec]/80 hover:text-white transition-all duration-200 group cursor-default select-none"
                >
                  <Icon className={`w-5 h-5 ${partner.color} group-hover:scale-110 transition-transform`} />
                  <span className="group-hover:text-white transition-colors">{partner.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
