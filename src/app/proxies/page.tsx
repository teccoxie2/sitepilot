import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Smartphone, Network, BarChart3, Lock, Cpu, Globe } from 'lucide-react';

export default function ProxiesHub() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30">
      {/* Cyber Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              2026 INFRASTRUCTURE GUIDE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
              Master the <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent italic">Proxy</span> Landscape
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-6 max-w-3xl mx-auto font-medium">
              From DIY mobile farms to global residential networks. We provide the <span className="text-white">technical blueprints</span> needed to compare infrastructure, software, and operating trade-offs.
            </p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-12 max-w-4xl mx-auto">
              A mobile proxy hub is a structured resource center covering 4G and 5G proxy infrastructure, residential versus mobile IP selection, Android farm hardware, and control software used for web automation. This 2026 guide set helps operators compare deployment models, reliability constraints, and commercial tooling before investing in a scalable proxy stack.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
              {[
                { label: "IP Quality", val: "99.9%", color: "text-green-400" },
                { label: "Providers", val: "15+", color: "text-blue-400" },
                { label: "Farm Cost", val: "-60%", color: "text-cyan-400" },
                { label: "Success", val: "Elite", color: "text-purple-400" }
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#161616] border border-white/5 shadow-2xl">
                  <div className={`text-2xl font-black ${stat.color} mb-1`}>{stat.val}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Tools & Guides Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 max-w-6xl mx-auto">
            
            {/* Featured Guide: Mobile Farm Setup */}
            <Link href="/proxies/mobile-proxy-farm-setup-guide-2026" className="group">
              <div className="relative p-8 md:p-12 rounded-[3rem] bg-[#161616] border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-2xl">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/5 blur-[80px] group-hover:bg-blue-600/10 transition-colors"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-black mb-6 tracking-widest uppercase">
                      Core Blueprint
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black mb-6 group-hover:text-blue-400 transition-colors">
                      Mobile Proxy Farm Setup
                    </h3>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed mb-8">
                      The definitive guide to building a localized 4G/5G proxy infrastructure using real Android devices. Learn how to manage SIM clusters and rotate IPs via API.
                    </p>
                    <div className="flex items-center text-blue-400 font-black gap-2 group-hover:gap-4 transition-all">
                      EXPLORE ARCHITECTURE <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
                    {[Smartphone, Network, Cpu, Shield].map((Icon, i) => (
                      <div key={i} className="aspect-square rounded-2xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center group-hover:border-blue-500/20 transition-colors shadow-inner">
                        <Icon className="w-8 h-8 text-slate-600 group-hover:text-blue-500 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>

            {/* Secondary Guides Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/proxies/residential-vs-mobile-proxies-comparison-2026" className="group">
                <div className="p-10 h-full rounded-[2.5rem] bg-[#161616] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
                  <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-8">
                    <BarChart3 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-cyan-400 transition-colors">
                    Residential vs. Mobile
                  </h3>
                  <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                    A technical deep-dive into reputation scores, packet headers, and the cost-to-reliability ratio of different proxy types.
                  </p>
                  <div className="inline-flex items-center text-cyan-400 font-bold gap-2">
                    Compare Specs <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/proxies/proxy-farm-hardware-selection-guide" className="group">
                <div className="p-10 h-full rounded-[2.5rem] bg-[#161616] border border-white/5 hover:border-purple-500/30 transition-all duration-500 shadow-2xl">
                  <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 w-fit mb-8">
                    <Cpu className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-purple-400 transition-colors">
                    Hardware Selection Matrix
                  </h3>
                  <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                    Not all USB hubs are created equal. We review industrial-grade hardware for 24/7 device clusters and power management.
                  </p>
                  <div className="inline-flex items-center text-purple-400 font-bold gap-2">
                    View Specs <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended OS Stack - High Visibility */}
      <section className="py-24 bg-[#0F0F0F]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Management Software</h2>
            <p className="text-slate-500 text-lg font-bold uppercase tracking-[0.2em]">Verified OS & Cloud Panels</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Coronium */}
            <div className="relative p-10 rounded-[3rem] bg-[#1A1A1A] border border-white/5 shadow-2xl group overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600/10 blur-[60px] group-hover:bg-blue-600/20 transition-all"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-black">Coronium OS</h3>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-black tracking-widest uppercase border border-blue-500/30">DIY CHOICE</span>
                </div>
                <p className="text-lg text-slate-400 font-medium mb-10 leading-relaxed">
                  The most reliable management software for Android device clusters. One dashboard to rule all your IPs with millisecond rotation precision.
                </p>
                <Link href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201" className="inline-flex items-center px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-500 shadow-xl shadow-blue-900/40 transition-all w-full justify-center">
                  ACCESS OFFICIAL LINK <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* LTESpace */}
            <div className="relative p-10 rounded-[3rem] bg-slate-900 border border-white/5 shadow-2xl group overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-600/10 blur-[60px] group-hover:bg-cyan-600/20 transition-all"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-black text-white">LTESpace Panel</h3>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-black tracking-widest uppercase border border-cyan-500/30">CLOUD CHOICE</span>
                </div>
                <p className="text-lg text-slate-400 font-medium mb-10 leading-relaxed">
                  A high-performance cloud management panel specifically designed for 4G/5G mobile proxies. Ideal for users scaling rapidly with zero technical overhead.
                </p>
                <Link href="https://ltespace.com/sitepilot" className="inline-flex items-center px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all w-full justify-center">
                  TRY LTESPACE NOW <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Cluster Navigation */}
      <section className="py-16 border-t border-white/5 bg-[#0D0D0D]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-[2.5rem] border border-white/5 bg-[#161616] p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-black mb-4">Proxy Authority Path</h2>
                <p className="text-slate-400 leading-relaxed">
                  Read the comparison first, move into the farm setup guide, then validate hardware before choosing an operating stack. That sequence keeps evaluation grounded in infrastructure fit instead of hype.
                </p>
              </div>
              <div className="grid gap-3 min-w-[280px]">
                <Link href="/proxies/residential-vs-mobile-proxies-comparison-2026" className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3 text-cyan-300 hover:bg-cyan-500/10 transition-colors font-semibold">
                  Compare residential vs mobile proxies
                </Link>
                <Link href="/proxies/mobile-proxy-farm-setup-guide-2026" className="rounded-2xl border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-blue-300 hover:bg-blue-500/10 transition-colors font-semibold">
                  Build a mobile proxy farm
                </Link>
                <Link href="/proxies/proxy-farm-hardware-selection-guide" className="rounded-2xl border border-purple-500/20 bg-purple-500/5 px-4 py-3 text-purple-300 hover:bg-purple-500/10 transition-colors font-semibold">
                  Review the hardware matrix
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-[#161616] to-[#0A0A0A] border border-white/5 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="p-6 bg-blue-500/10 rounded-[2rem] border border-blue-500/20">
                <Lock className="w-12 h-12 text-blue-400" />
              </div>
              <div>
                <h4 className="text-2xl font-black mb-4 tracking-tight">Independent Verification Statement</h4>
                <p className="text-slate-400 font-medium leading-relaxed mb-6">
                  Proxy infrastructure is critical for privacy and automation. Our engineers independently test hardware and software for latency, packet-level anonymity, and long-term stability. We only recommend solutions that meet our <span className="text-white italic">"Non-Detectable"</span> threshold.
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Global Testing</span>
                  <span className="flex items-center gap-2"><Cpu className="w-4 h-4" /> Hardware Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
