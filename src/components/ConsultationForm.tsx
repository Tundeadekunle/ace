"use client";

import { useState } from "react";
import { Lock, ShieldCheck, CheckCircle2, Send, Sparkles } from "lucide-react";

export default function ConsultationForm() {
  const [projectScope, setProjectScope] = useState("enterprise-ai");
  const [engagementHorizon, setEngagementHorizon] = useState("Q2 Launch [4-8 wks]");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 8000);
    }, 600);
  };

  return (
    <section className="w-full py-28 relative" id="consultation-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#191b23] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#2563eb]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#4cd7f6]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            {/* Form Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-[#4cd7f6] tracking-widest uppercase mb-3 block">
                [ DIRECT ACCESS ]
              </span>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold text-[#e1e2ec] tracking-tight mb-4">
                Ready to Build What Others Consider Impossible?
              </h2>
              <p className="font-['Inter',sans-serif] text-base text-[#c3c6d7] leading-relaxed">
                Reserve an executive engineering briefing with our principal architects. We assess technical viability, architecture vectors, and delivery timeline in initial consultation.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
              {/* Primary Engineering Focus */}
              <div>
                <label className="block font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#8d90a0] uppercase tracking-wider mb-3">
                  Primary Engineering Focus
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "cloud-native", label: "Cloud Core Infrastructure" },
                    { id: "enterprise-ai", label: "Enterprise AI & Agents" },
                    { id: "full-replatform", label: "Total Digital Re-platform" },
                  ].map((scope) => (
                    <button
                      key={scope.id}
                      type="button"
                      onClick={() => setProjectScope(scope.id)}
                      className={`p-4 rounded-xl text-center font-['Plus_Jakarta_Sans',sans-serif] text-sm font-semibold transition-all ${
                        projectScope === scope.id
                          ? "bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/30 border border-[#2563eb]"
                          : "bg-[#1d1f27] text-[#c3c6d7] hover:bg-[#272a32] border border-white/5"
                      }`}
                    >
                      {scope.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dual Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#8d90a0] uppercase tracking-wider mb-2">
                    Corporate Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="executive@enterprise.com"
                    className="w-full bg-[#0b0e15] border border-white/10 px-4 py-3.5 rounded-xl text-[#e1e2ec] placeholder:text-[#8d90a0] font-['Inter',sans-serif] text-sm focus:outline-none focus:ring-1 focus:ring-[#4cd7f6] focus:border-[#4cd7f6]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#8d90a0] uppercase tracking-wider mb-2">
                    Organization / Market Cap
                  </label>
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Acme Global Inc. ($500M+ ARR)"
                    className="w-full bg-[#0b0e15] border border-white/10 px-4 py-3.5 rounded-xl text-[#e1e2ec] placeholder:text-[#8d90a0] font-['Inter',sans-serif] text-sm focus:outline-none focus:ring-1 focus:ring-[#4cd7f6] focus:border-[#4cd7f6]/50 transition-colors"
                  />
                </div>
              </div>

              {/* Engagement Horizon Selector */}
              <div>
                <label className="block font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-[#8d90a0] uppercase tracking-wider mb-3">
                  Anticipated Engagement Horizon
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    "Q2 Launch [4-8 wks]",
                    "Multi-Phase [3-6 mo]",
                    "Dedicated Pod [1 yr]",
                    "Architecture Audit",
                  ].map((horizon) => (
                    <button
                      key={horizon}
                      type="button"
                      onClick={() => setEngagementHorizon(horizon)}
                      className={`px-3 py-2.5 rounded-lg font-['JetBrains_Mono',monospace] text-xs font-medium transition-all text-center ${
                        engagementHorizon === horizon
                          ? "bg-[#4cd7f6] text-[#003640] font-bold shadow-md shadow-[#4cd7f6]/20 border border-[#4cd7f6]"
                          : "bg-[#1d1f27] text-[#c3c6d7] hover:bg-[#272a32] border border-white/5"
                      }`}
                    >
                      {horizon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button & NDA badge */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2563eb] text-white font-['Plus_Jakarta_Sans',sans-serif] text-sm font-semibold tracking-wide shadow-xl shadow-[#2563eb]/40 hover:bg-[#1d4ed8] hover:shadow-2xl transition-all duration-200 active:scale-[0.99] disabled:opacity-50"
                >
                  <span>{loading ? "Processing Briefing Request..." : "Schedule Confidential Briefing"}</span>
                  <Lock className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 font-['JetBrains_Mono',monospace] text-xs text-[#8d90a0]">
                  <ShieldCheck className="w-4 h-4 text-[#4cd7f6]" />
                  <span>Protected under mutual enterprise NDA</span>
                </div>
              </div>
            </form>

            {/* Feedback Notification Toast */}
            {submitted && (
              <div className="mt-6 p-4 rounded-xl bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 text-[#4cd7f6] font-['JetBrains_Mono',monospace] text-sm flex items-center justify-center gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>
                  Briefing request logged for {organization || "your enterprise"}. A principal engineering partner will reach out within 4 business hours.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
