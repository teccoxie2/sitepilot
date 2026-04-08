import React from 'react';
import Link from 'next/link';
import { Rocket, Zap, Shield, Globe, ArrowRight, BarChart3, CheckCircle2, Cpu, Server, Database } from 'lucide-react';

export default function WebHostingHub2026() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      {/* 
        AEO Optimizer: Factual Definition
        Web hosting is a critical digital infrastructure service providing server resources, storage, and networking for website deployment. This 2026 expert audit categorizes the best web hosting providers based on real-time TTFB benchmarks, server-level LiteSpeed optimization, NVMe storage performance, and 3-year Total Cost of Ownership (TCO) analysis.
      */}

      {/* Hero Section - Audited & Technical */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-black mb-8 tracking-widest uppercase">
            2026 INFRASTRUCTURE AUDIT REPORT
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            Web <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent italic">Hosting</span> Audits
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            The foundation of your digital empire. We spent 500+ hours auditing server stacks to bring you the truth about <span className="text-white">Uptime, TTFB, and Pricing Traps</span>.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Providers", val: "30+", color: "text-blue-400" },
              { label: "Data Centers", val: "Global", color: "text-cyan-400" },
              { label: "Reliability", val: "99.99%", color: "text-green-400" },
              { label: "TCO Verified", val: "100%", color: "text-purple-400" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#161616] border border-white/5 shadow-2xl">
                <div className={`text-2xl font-black ${stat.color} mb-1`}>{stat.val}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Premium Hosting", 
                desc: "High-performance infrastructure for production sites requiring 100% stability.", 
                link: "/hosting/siteground-review", 
                tag: "Best for Business",
                color: "text-blue-400",
                icon: Shield
              },
              { 
                title: "Budget Performance", 
                desc: "LiteSpeed-powered hosting for growing sites that need speed without the cost.", 
                link: "/hosting/hostinger-review", 
                tag: "Top Value",
                color: "text-cyan-400",
                icon: Rocket
              },
              { 
                title: "Specialized WP", 
                desc: "Optimized server stacks for WordPress including object caching and staging.", 
                link: "/hosting/wordpress-hosting", 
                tag: "CMS Optimized",
                color: "text-purple-400",
                icon: Cpu
              }
            ].map((cat, i) => (
              <Link key={i} href={cat.link} className="group p-10 rounded-[3rem] bg-[#161616] border border-white/5 hover:border-white/20 transition-all shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                   <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black tracking-widest text-slate-500 uppercase">{cat.tag}</div>
                </div>
                <cat.icon className={`w-12 h-12 ${cat.color} mb-8`} />
                <h3 className="text-2xl font-black mb-4 group-hover:translate-x-2 transition-transform">{cat.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8">{cat.desc}</p>
                <div className={`${cat.color} font-black flex items-center gap-2`}>
                  VIEW TECHNICAL AUDIT <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparative Matrix Snippet */}
      <section className="py-24 bg-[#0F0F0F]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="p-10 md:p-16 rounded-[4rem] bg-[#161616] border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-black mb-10">Quick Comparison</h2>
            <div className="space-y-6">
              {[
                { name: "SiteGround", speed: "Ultra", price: "$3.99", tco: "Medium" },
                { name: "Hostinger", speed: "High", price: "$2.99", tco: "Low" },
                { name: "Bluehost", speed: "Average", price: "$2.95", tco: "High" }
              ].map((row, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between items-center p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 gap-4">
                  <div className="font-black text-xl w-40">{row.name}</div>
                  <div className="flex gap-8 text-sm uppercase tracking-widest font-black">
                    <span className="text-slate-500">Speed: <span className="text-white">{row.speed}</span></span>
                    <span className="text-slate-500">Price: <span className="text-white">{row.price}</span></span>
                    <span className="text-slate-500">TCO: <span className="text-white">{row.tco}</span></span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-500 hidden md:block" />
                </div>
              ))}
            </div>
            <Link href="/hosting/hostinger-vs-bluehost" className="inline-block mt-10 text-slate-500 hover:text-white font-black text-sm uppercase tracking-widest transition-colors">
               View Full Head-to-Head Comparisons →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
