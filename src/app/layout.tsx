import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SitePilot | Global Digital Infrastructure Authority",
  description: "Independent technical audits, infrastructure benchmarks, and AI-driven procurement frameworks for modern enterprises.",
  metadataBase: new URL('https://sitepilot.co'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0A0A0A] text-[#EDEDED]`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics measurementId="G-ZEHW3WYWXL" />
      </body>
    </html>
  );
}
