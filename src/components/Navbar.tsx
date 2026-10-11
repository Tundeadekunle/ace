"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, User, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0e15]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Logo & Live Badge */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-tr from-[#2563eb] to-[#4cd7f6] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#10131a] rounded-[7px] flex items-center justify-center p-1">
                <Image
                  src="/images/logo.png"
                  alt="ACE Technologies Logo"
                  width={28}
                  height={28}
                  className="object-contain filter brightness-110"
                />
              </div>
            </div>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold tracking-tight text-[#e1e2ec] group-hover:text-white transition-colors">
              ACE Technologies
            </span>
          </Link>

          {/* Q2 Projects Status Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#4cd7f6]/10 border border-[#4cd7f6]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]"></span>
            </span>
            <span className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#4cd7f6] tracking-wider uppercase">
              Available for Q2 Projects
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            href="#capabilities"
            className="px-3.5 py-1.5 rounded-md font-medium text-sm text-[#e1e2ec] hover:text-[#4cd7f6] hover:bg-white/[0.04] transition-all"
          >
            Capabilities
          </Link>
          <Link
            href="#solutions"
            className="px-3.5 py-1.5 rounded-md font-medium text-sm text-[#c3c6d7] hover:text-[#e1e2ec] hover:bg-white/[0.04] transition-all"
          >
            Solutions
          </Link>
          <Link
            href="#architecture-specs"
            className="px-3.5 py-1.5 rounded-md font-medium text-sm text-[#c3c6d7] hover:text-[#e1e2ec] hover:bg-white/[0.04] transition-all"
          >
            Architecture
          </Link>
          <Link
            href="#case-studies"
            className="px-3.5 py-1.5 rounded-md font-medium text-sm text-[#c3c6d7] hover:text-[#e1e2ec] hover:bg-white/[0.04] transition-all"
          >
            Case Studies
          </Link>
          <Link
            href="#insights"
            className="px-3.5 py-1.5 rounded-md font-medium text-sm text-[#c3c6d7] hover:text-[#e1e2ec] hover:bg-white/[0.04] transition-all"
          >
            Insights
          </Link>
        </nav>

        {/* Actions & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-ace-chat"))}
            className="hidden md:inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#191b23] border border-[#4cd7f6]/30 hover:border-[#4cd7f6]/70 text-[#4cd7f6] hover:text-white hover:bg-[#272a32] text-xs font-semibold tracking-wide transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4cd7f6]" />
            <span>AI Advisor</span>
          </button>

          <Link
            href="#consultation-card"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#2563eb] text-white text-sm font-semibold tracking-wide shadow-[0_0_24px_rgba(37,99,235,0.45)] hover:shadow-[0_0_32px_rgba(37,99,235,0.7)] hover:bg-[#1d4ed8] active:scale-[0.98] transition-all"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div
            title="Executive Enclave Portal"
            className="w-9 h-9 rounded-full bg-[#191b23] border border-white/10 flex items-center justify-center text-[#b4c5ff] hover:text-white hover:border-[#4cd7f6]/40 transition-colors cursor-pointer"
          >
            <User className="w-4 h-4" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#c3c6d7] hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Flyout Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0e15]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-['JetBrains_Mono',monospace] text-xs text-[#4cd7f6] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
              CLUSTER STATUS: OPTIMAL
            </span>
            <span className="text-xs text-[#8d90a0]">Q2 AVAILABILITY OPEN</span>
          </div>

          <div className="flex flex-col gap-2 font-medium">
            <Link
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-[#e1e2ec] hover:bg-white/5 hover:text-[#4cd7f6] transition-colors"
            >
              Capabilities
            </Link>
            <Link
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-[#c3c6d7] hover:bg-white/5 hover:text-[#e1e2ec] transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#architecture-specs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-[#c3c6d7] hover:bg-white/5 hover:text-[#e1e2ec] transition-colors"
            >
              Architecture Specs
            </Link>
            <Link
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-[#c3c6d7] hover:bg-white/5 hover:text-[#e1e2ec] transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="#insights"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-[#c3c6d7] hover:bg-white/5 hover:text-[#e1e2ec] transition-colors"
            >
              Insights & Whitepapers
            </Link>
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-ace-chat"));
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#191b23] border border-[#4cd7f6]/30 text-[#4cd7f6] font-semibold text-sm hover:bg-[#272a32] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#4cd7f6]" />
              <span>Talk to AI Architecture Advisor</span>
            </button>

            <Link
              href="#consultation-card"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#2563eb] text-white font-semibold text-sm shadow-lg shadow-[#2563eb]/30 hover:bg-[#1d4ed8] transition-all"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
