import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SitePilot - Your Guide to Building Websites That Work",
  description: "Expert reviews and guides on web hosting, AI tools, and website builders. Launch your website with confidence.",
  keywords: ["web hosting", "website builder", "AI tools", "hosting reviews", "best web hosting", "website creation", "AI writing tools"],
  authors: [{ name: "SitePilot Team" }],
  creator: "SitePilot",
  publisher: "SitePilot",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "SitePilot - Your Guide to Building Websites That Work",
    description: "Expert reviews and guides on web hosting, AI tools, and website builders. Launch your website with confidence.",
    url: "https://sitepilot.co",
    siteName: "SitePilot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SitePilot - Your Guide to Building Websites That Work",
    description: "Expert reviews and guides on web hosting, AI tools, and website builders. Launch your website with confidence.",
    site: "@sitepilot_co",
    creator: "@sitepilot_co",
  },
  verification: {
    google: "google-verification-code-here", // To be updated with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
