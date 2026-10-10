"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#0b0e15] border-t border-white/[0.08] text-[#c3c6d7] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          {/* Brand & Executive Briefing (Cols 1-2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-tr from-[#2563eb] to-[#4cd7f6] p-[1.5px]">
                <div className="w-full h-full bg-[#10131a] rounded-[7px] flex items-center justify-center p-1">
                  <Image
                    src="/images/logo.png"
                    alt="ACE Technologies Logo"
                    width={26}
                    height={26}
                    className="object-contain filter brightness-110"
                  />
                </div>
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold tracking-tight text-[#e1e2ec]">
                ACE Technologies
              </span>
            </div>

            <p className="font-['Inter',sans-serif] text-sm text-[#8d90a0] max-w-sm leading-relaxed">
              Engineering bespoke computing substrates, autonomous AI infrastructure, and mission-critical digital enterprise architectures.
            </p>

            <div className="flex flex-col gap-2.5 mt-2">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#e1e2ec] uppercase tracking-wider">
                Executive Intelligence Briefing
              </span>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="work@enterprise.com"
                  className="bg-[#191b23] border border-white/10 px-3.5 py-2.5 rounded-lg text-[#e1e2ec] placeholder:text-[#8d90a0] font-['Inter',sans-serif] text-sm w-full focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-[#272a32] text-[#e1e2ec] hover:bg-[#2563eb] hover:text-white font-['Plus_Jakarta_Sans',sans-serif] text-sm font-semibold transition-colors shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4 text-[#4cd7f6]" /> : "Subscribe"}
                </button>
              </form>
              {subscribed && (
                <span className="text-xs text-[#4cd7f6] font-['JetBrains_Mono',monospace]">
                  Subscribed to monthly CTO technical dispatch.
                </span>
              )}
            </div>
          </div>

          {/* Column 3: Solutions */}
          <div className="flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#e1e2ec] uppercase tracking-wider mb-1">
              Solutions
            </span>
            <Link href="#capabilities" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Enterprise Core Systems
            </Link>
            <Link href="#capabilities" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              High-Compute Fabrics
            </Link>
            <Link href="#capabilities" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              AI Agent Orchestration
            </Link>
            <Link href="#capabilities" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Resilient Cloud Modernization
            </Link>
            <Link href="#capabilities" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Data Mesh Foundations
            </Link>
          </div>

          {/* Column 4: Engineering Domains */}
          <div className="flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#e1e2ec] uppercase tracking-wider mb-1">
              Engineering Domains
            </span>
            <Link href="#architecture-specs" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Applied LLM Infra
            </Link>
            <Link href="#architecture-specs" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Distributed Systems
            </Link>
            <Link href="#architecture-specs" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Sub-Millisecond APIs
            </Link>
            <Link href="#architecture-specs" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Zero-Trust Architecture
            </Link>
            <Link href="#architecture-specs" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Full-Stack Telemetry
            </Link>
          </div>

          {/* Column 5: Company & Trust */}
          <div className="flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#e1e2ec] uppercase tracking-wider mb-1">
              Company &amp; Trust
            </span>
            <Link href="#case-studies" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Client Impact
            </Link>
            <Link href="#insights" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Research &amp; Insights
            </Link>
            <Link href="#consultation-card" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Leadership &amp; Advisors
            </Link>
            <Link href="#consultation-card" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              Security &amp; Compliance
            </Link>
            <Link href="#consultation-card" className="text-sm text-[#8d90a0] hover:text-white transition-colors">
              SOC2 Type II / ISO 27001
            </Link>
          </div>

          {/* Column 6: Global Offices */}
          <div className="flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#e1e2ec] uppercase tracking-wider mb-1">
              Global Offices
            </span>
            <div className="flex flex-col gap-3 text-sm text-[#8d90a0]">
              <div>
                <span className="text-[#e1e2ec] font-medium block">San Francisco</span>
                <p className="text-xs text-[#8d90a0]">500 Howard St, Suite 400</p>
              </div>
              <div>
                <span className="text-[#e1e2ec] font-medium block">London</span>
                <p className="text-xs text-[#8d90a0]">30 St Mary Axe, EC3A</p>
              </div>
              <div>
                <span className="text-[#e1e2ec] font-medium block">Singapore</span>
                <p className="text-xs text-[#8d90a0]">1 Marina Boulevard, #28</p>
              </div>
              <div>
                <span className="text-[#e1e2ec] font-medium block">Tokyo</span>
                <p className="text-xs text-[#8d90a0]">Roppongi Hills Mori Tower</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Rights Strip */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8d90a0]">
          <p>© 2025 ACE Technologies Inc. All rights reserved. Precision enterprise engineering.</p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#status" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] inline-block"></span>
              System Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
