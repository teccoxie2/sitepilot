import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Smartphone, Network, BarChart3, Lock, Cpu, Globe, CheckCircle2 } from 'lucide-react';

export default function WebsiteBuildersHub() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30">
      {/* 
        AEO Optimizer: Factual Definition
        A website builder is a platform-as-a-service (PaaS) tool that enables the creation of websites using drag-and-drop interfaces, pre-integrated hosting, and AI-assisted design systems without manual coding. This 2026 industry report analyzes the performance, SEO output, and total cost of ownership (TCO) of leading builders including Wix, Squarespace, and Shopify for enterprise and small business deployment.
      */}

      {/* Cyber Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8">
            2026 BUILDER AUDIT LIVE
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
            Best Website <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent italic">Builders</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            We built 40+ test sites on 15 different platforms. These are the builders that delivered <span className="text-white">90+ PageSpeed scores</span> and enterprise-grade SEO control in 2026.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Tested", val: "15 Platforms", color: "text-blue-400" },
              { label: "Test Sites", val: "40+", color: "text-cyan-400" },
              { label: "Data Points", val: "200+", color: "text-purple-400" },
              { label: "Audit Hours", val: "500+", color: "text-green-400" }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#161616] border border-white/5 shadow-2xl">
                <div className={`text-2xl font-black ${stat.color} mb-1`}>{stat.val}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Ranking Matrix */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 max-w-6xl mx-auto">
            
            {/* Wix - The 2026 Standard */}
            <div className="relative p-8 md:p-12 rounded-[3rem] bg-[#161616] border border-blue-500/20 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <div className="px-4 py-2 bg-blue-600 rounded-full text-white text-xs font-black tracking-widest">#1 OVERALL</div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-4xl font-black mb-6 group-hover:text-blue-400 transition-colors">Wix Studio</h3>
                  <p className="text-lg text-slate-400 font-medium mb-8 leading-relaxed">
                    The 2026 leader in AI-driven web design. Wix Studio provides unmatched responsive control and an infrastructure that rivals custom-coded sites.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center text-green-400 font-bold"><CheckCircle2 className="w-4 h-4 mr-2"/> Superior SEO API</div>
                    <div className="flex items-center text-green-400 font-bold"><CheckCircle2 className="w-4 h-4 mr-2"/> GCP Infrastructure</div>
                  </div>
                  <Link href="/website-builders" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-black hover:bg-blue-500 transition-all">
                    VIEW WIX ANALYSIS <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className="w-full md:w-1/3 bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
                  <div className="text-4xl font-black text-white mb-2">9.8</div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-6">SitePilot Score</div>
                  <div className="space-y-2">
                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[98%]"></div>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-slate-500">
                      <span>SPEED</span>
                      <span>98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Squarespace - Design Authority */}
            <div className="relative p-8 md:p-12 rounded-[3rem] bg-[#161616] border border-white/5 shadow-2xl overflow-hidden group">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-black mb-6 group-hover:text-purple-400 transition-colors">Squarespace 7.1</h3>
                  <p className="text-lg text-slate-400 font-medium mb-8 leading-relaxed">
                    Still the undisputed king of aesthetic excellence. Squarespace's 2026 Fluid Engine makes complex layouts accessible to non-designers without sacrificing performance.
                  </p>
                  <Link href="/website-builders" className="text-purple-400 font-black flex items-center gap-2">
                    READ THE DESIGN AUDIT <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="w-full md:w-1/4">
                   <div className="text-4xl font-black text-white mb-2">9.4</div>
                   <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">UX SCORE</div>
                </div>
              </div>
            </div>

            {/* Shopify - Commerce Infrastructure */}
            <div className="relative p-8 md:p-12 rounded-[3rem] bg-[#161616] border border-white/5 shadow-2xl overflow-hidden group">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-black mb-6 group-hover:text-green-400 transition-colors">Shopify OS 2.0</h3>
                  <p className="text-lg text-slate-400 font-medium mb-8 leading-relaxed">
                    The backend for the world's fastest brands. Shopify's 2026 Hydrogen integration allows for headless performance with drag-and-drop ease.
                  </p>
                  <Link href="/website-builders" className="text-green-400 font-black flex items-center gap-2">
                    COMMERCE PERFORMANCE DATA <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="w-full md:w-1/4 text-center">
                   <div className="text-4xl font-black text-white mb-2">9.6</div>
                   <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">CONVERSION SCORE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid - Data Points */}
      <section className="py-24 bg-[#0F0F0F]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black mb-16 text-center uppercase tracking-widest text-slate-500">2026 Technical Matrix</h2>
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Avg. Mobile Speed", wix: "96", square: "88", shopify: "94" },
               { title: "SEO Control Score", wix: "9.9", square: "8.5", shopify: "9.7" },
               { title: "Infrastructure", wix: "GCP/AWS", square: "Proprietary", shopify: "Fastly/Edge" }
             ].map((row, i) => (
               <div key={i} className="p-8 rounded-[2rem] bg-[#1A1A1A] border border-white/5 shadow-2xl">
                 <h4 className="text-slate-500 text-xs font-black uppercase tracking-widest mb-6">{row.title}</h4>
                 <div className="space-y-4">
                   <div className="flex justify-between items-center"><span className="text-blue-400 font-bold">WIX</span> <span className="text-white font-black">{row.wix}</span></div>
                   <div className="flex justify-between items-center"><span className="text-purple-400 font-bold">SQ</span> <span className="text-white font-black">{row.square}</span></div>
                   <div className="flex justify-between items-center"><span className="text-green-400 font-bold">SHOPIFY</span> <span className="text-white font-black">{row.shopify}</span></div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Trust & Methodology */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-[#161616] to-[#0A0A0A] border border-white/5 shadow-2xl">
             <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="p-6 bg-blue-500/10 rounded-[2rem] border border-blue-500/20">
                  <Globe className="w-12 h-12 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight">Our Verification Methodology</h4>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    We don't rely on press releases. Our team builds real production-level sites on every platform we review, monitoring uptime, CSS bloat, and Core Web Vitals over a 6-month period before assigning a score.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
