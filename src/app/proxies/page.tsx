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
            
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-6 max-w-4xl mx-auto font-medium">
              A mobile proxy hub is a structured resource center covering 4G and 5G proxy infrastructure, residential versus mobile IP selection, Android farm hardware, and control software used for web automation. This 2026 guide set helps operators compare deployment models, reliability constraints, and commercial tooling before investing in a scalable proxy stack.
            </p>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-12 max-w-3xl mx-auto">
              Use it to move from network-model selection to setup planning, hardware validation, and software comparison without relying on vague vendor claims.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
              {[
                { label: "Decision Path", val: "Compare", color: "text-green-400" },
                { label: "Build", val: "Setup", color: "text-blue-400" },
                { label: "Validate", val: "Hardware", color: "text-cyan-400" },
                { label: "Operate", val: "Software", color: "text-purple-400" }
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
                      A practical setup guide for Android-based mobile proxy infrastructure, including SIM planning, controller layout, and software choices for managed IP rotation.
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
                    Compare where each proxy type fits, how rotation behavior differs, and when mobile infrastructure is justified over residential supply.
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
                    Review device, hub, cable, and controller requirements before you spend on a cluster that cannot stay stable under load.
                  </p>
                  <div className="inline-flex items-center text-purple-400 font-bold gap-2">
                    View Specs <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <Link href="/proxies/developer-hub" className="group">
                <div className="p-10 h-full rounded-[2.5rem] bg-[#161616] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
                  <div className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-black mb-4">Integration</div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-emerald-400 transition-colors">Developer Hub & Code Snippets</h3>
                  <p className="text-slate-400 font-medium leading-relaxed mb-6">Integrate proxies into Puppeteer, Playwright, and modern AI agents. Stop leaking WebRTC IPs and fighting TLS fingerprints.</p>
                  <div className="inline-flex items-center text-emerald-400 font-bold gap-2">View integration patterns <ArrowRight className="w-4 h-4" /></div>
                </div>
              </Link>

              <Link href="/proxies/recommendation" className="group">
                <div className="p-10 h-full rounded-[2.5rem] bg-[#161616] border border-white/5 hover:border-pink-500/30 transition-all duration-500 shadow-2xl">
                  <div className="text-xs uppercase tracking-[0.2em] text-pink-400 font-black mb-4">Workflow match</div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-pink-400 transition-colors">Interactive Recommendation Tool</h3>
                  <p className="text-slate-400 font-medium leading-relaxed mb-6">Map your automation budget, scale, and exact use case to a specific proxy vendor and infrastructure type in 3 clicks.</p>
                  <div className="inline-flex items-center text-pink-400 font-bold gap-2">Get your recommendation <ArrowRight className="w-4 h-4" /></div>
                </div>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
              <Link href="/proxies/best-residential-proxies-2026" className="rounded-[2rem] bg-[#161616] border border-white/5 p-8 hover:border-blue-500/30 transition-all duration-500 shadow-2xl group">
                <div className="text-xs uppercase tracking-[0.2em] text-blue-400 font-black mb-4">Buyer's Guide</div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors">Best Residential Proxies</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-6">Compare the top residential proxy vendors for scraping, AI collection, ad verification, and geo-authentic browsing.</p>
                <div className="inline-flex items-center text-blue-400 font-bold gap-2">Review vendors <ArrowRight className="w-4 h-4" /></div>
              </Link>

              <Link href="/proxies/best-datacenter-proxies-2026" className="rounded-[2rem] bg-[#161616] border border-white/5 p-8 hover:border-indigo-500/30 transition-all duration-500 shadow-2xl group">
                <div className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-black mb-4">Buyer's Guide</div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-indigo-400 transition-colors">Best Datacenter Proxies</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-6">Review fast, cheap datacenter proxy options for bulk concurrency and lower-risk workloads where trust is not the main constraint.</p>
                <div className="inline-flex items-center text-indigo-400 font-bold gap-2">Compare speed and cost <ArrowRight className="w-4 h-4" /></div>
              </Link>

              <Link href="/proxies/best-mobile-proxies-2026" className="rounded-[2rem] bg-[#161616] border border-white/5 p-8 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl group">
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-black mb-4">Buyer's Guide</div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-cyan-400 transition-colors">Best Mobile Proxies</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-6">Compare hosted mobile providers and DIY farm paths for high-trust sessions, carrier realism, and sensitive automation targets.</p>
                <div className="inline-flex items-center text-cyan-400 font-bold gap-2">Compare mobile options <ArrowRight className="w-4 h-4" /></div>
              </Link>

              <Link href="/proxies/best-isp-proxies-2026" className="rounded-[2rem] bg-[#161616] border border-white/5 p-8 hover:border-violet-500/30 transition-all duration-500 shadow-2xl group">
                <div className="text-xs uppercase tracking-[0.2em] text-violet-400 font-black mb-4">Buyer's Guide</div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-violet-400 transition-colors">Best ISP Proxies</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-6">Evaluate static residential providers for account continuity, lower latency, and workloads that need persistence instead of constant rotation.</p>
                <div className="inline-flex items-center text-violet-400 font-bold gap-2">Compare static residential <ArrowRight className="w-4 h-4" /></div>
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
                  Coronium is positioned here as an operator-focused control layer for Android device clusters with centralized rotation workflows and fleet visibility.
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
                  LTESpace is positioned here as a hosted control option for teams that want faster deployment and less custom infrastructure work.
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
                <Link href="/proxies/mobile-proxy-software-comparison-2026" className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-emerald-300 hover:bg-emerald-500/10 transition-colors font-semibold">
                  Compare proxy software stacks
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
                  Proxy infrastructure should be evaluated on deployment fit, hardware stability, rotation control, and operator overhead. SitePilot positions this cluster as a technical decision path rather than a generic affiliate roundup.
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Infrastructure Focus</span>
                  <span className="flex items-center gap-2"><Cpu className="w-4 h-4" /> Operator Fit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
