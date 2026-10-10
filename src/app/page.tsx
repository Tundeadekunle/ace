import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Capabilities from "@/components/Capabilities";
import CaseStudies from "@/components/CaseStudies";
import ArchitectureTerminal from "@/components/ArchitectureTerminal";
import Testimonial from "@/components/Testimonial";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#10131a] text-[#e1e2ec] selection:bg-[#2563eb]/40 selection:text-[#4cd7f6]">
      {/* Fixed Header & Navigation */}
      <Navbar />

      {/* Main Landing Page Content */}
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Enterprise Logos & Trust Strip */}
        <LogoTicker />

        {/* Core Capabilities Bento Grid */}
        <Capabilities />

        {/* Mission-Critical Case Studies */}
        <CaseStudies />

        {/* Tech Stack & Interactive Terminal */}
        <ArchitectureTerminal />

        {/* Executive Testimonial */}
        <Testimonial />

        {/* Interactive Consultation CTA Card */}
        <ConsultationForm />
      </main>

      {/* Comprehensive Enterprise Footer */}
      <Footer />
    </div>
  );
}
