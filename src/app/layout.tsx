import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acetechnologies.com"),
  title: "ACE Technologies | High-Consequence Digital Infrastructure & AI Platforms",
  description:
    "We partner with Fortune 500 enterprises and hyper-growth scale-ups to engineer mission-critical cloud backends, bespoke autonomous AI architectures, and resilient distributed platforms.",
  keywords: [
    "Enterprise AI",
    "Distributed Systems",
    "Cloud Architecture",
    "Mission-Critical Infrastructure",
    "Autonomous Agents",
    "High-Performance Computing",
  ],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "ACE Technologies | High-Consequence Digital Infrastructure & AI Platforms",
    description:
      "Architecting high-throughput distributed state engines, autonomous agent networks, and zero-trust cloud architectures.",
    images: ["/images/hero-topology.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#10131a] text-[#e1e2ec] font-sans antialiased selection:bg-[#2563eb]/30 selection:text-[#4cd7f6]">
        {children}
      </body>
    </html>
  );
}
