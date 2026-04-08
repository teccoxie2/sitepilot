import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, XCircle, Info, Zap, BarChart3 } from 'lucide-react';

export default function ProxyComparison() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Residential vs. Mobile Proxies: <span className="text-blue-400">2026 Comparison</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            The technical difference between residential and mobile proxies lies in their IP source and network reputation. Static residential IPs are sourced from ISPs via fixed-line broadband, while mobile proxies route traffic through 4G/5G cellular networks, offering the highest level of anonymity due to the inherent trust associated with real mobile device users.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="p-6 text-left border-b border-slate-200">Feature</th>
                  <th className="p-6 text-left border-b border-slate-200 bg-blue-50/50">Residential Proxies</th>
                  <th className="p-6 text-left border-b border-slate-200 bg-blue-600 text-white font-bold">Mobile Proxies (4G/5G)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Anonymity Level", res: "High", mob: "Elite (Undetectable)" },
                  { feature: "Bypass Capability", res: "Good for general SEO", mob: "Best for Social Media/Amazon" },
                  { feature: "IP Rotation", res: "Limited to ISP lease", mob: "Instant via Software" },
                  { feature: "Risk of Ban", res: "Moderate", mob: "Extremely Low" },
                  { feature: "Cost per Port", res: "$$ (Affordable)", mob: "$$$ (Premium)" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 border-b border-slate-100 font-bold text-slate-950">{row.feature}</td>
                    <td className="p-6 border-b border-slate-100 text-slate-900 font-medium">{row.res}</td>
                    <td className="p-6 border-b border-slate-100 font-black text-blue-900 bg-blue-50/40">{row.mob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verdict Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">When to Choose Residential</h3>
              <p className="text-slate-600 mb-8">Ideal for high-bandwidth tasks that require stability but not the extreme evasion techniques needed for social platform algorithms.</p>
              <ul className="space-y-4">
                {["Search Engine Monitoring", "Website Performance Testing", "Price Comparison", "Brand Protection"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-900 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">When to Choose Mobile</h3>
                <p className="text-blue-100 mb-8">Essential for tasks targeting platforms with aggressive anti-bot measures like Instagram, TikTok, and Amazon.</p>
                <ul className="space-y-4 mb-8">
                  {["Social Media Management", "Ticket Scalping", "Sneaker Botting", "High-frequency Data Scraping"].map((item, i) => (
                    <li key={i} className="flex items-center text-blue-50">
                      <Zap className="w-5 h-5 text-blue-400 mr-3" /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/proxies/mobile-proxy-farm-setup-guide-2026" className="inline-flex items-center font-bold text-blue-400 hover:text-blue-300">
                  Build Your Own Farm <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-slate-950">Get the Right Software for Your Setup</h2>
            <p className="text-xl text-slate-900 font-medium mb-10">Whether you are building or buying, professional management software is non-negotiable for 2026 automation.</p>
            <Link 
              href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201" 
              className="px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-xl hover:bg-blue-700 shadow-xl inline-block"
            >
              Start with Coronium.io
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
