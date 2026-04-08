import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { CheckCircle2, Rocket, Zap, Shield, Cpu, Globe, ArrowRight, BarChart3, Lock, LayoutDashboard } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <SchemaMarkup 
        type="website"
        title="SitePilot - Your Guide to Building Websites That Work"
        description="Expert reviews and guides on web hosting, AI tools, and website builders. Launch your website with confidence."
        url="https://sitepilot.co"
      />

      {/* Impact Site Verification */}
      <div style={{ display: 'none' }}>Impact-Site-Verification: ebd73b69-ae33-44b8-bd16-7c33c5b521d9</div>
      
      {/* Hero Section - The Professional Standard */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-black mb-8 tracking-widest uppercase">
            TRUSTED BY 100,000+ INFRASTRUCTURE EXPERTS
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            Build Your <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent italic">Infrastructure</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            Independent technical audits and expert guidance on web hosting, AI automation, and cloud building tools. <span className="text-white">No sponsored rankings.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/web-hosting" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40">
              FIND PERFECT HOSTING
            </Link>
            <Link href="/best-ai-seo-tools-2026" className="px-10 py-5 bg-[#161616] text-white rounded-2xl font-black text-xl border border-white/10 hover:bg-[#222] transition-all">
              EXPLORE AI TOOLS
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto opacity-50">
            <div>
              <div className="text-2xl font-black text-white">500+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-500">Audit Hours</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">30+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-500">Stacks Reviewed</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">100%</div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-500">Neutral</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Expert Audits</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Technical Analysis & Benchmarks</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Web Hosting 2026", 
                desc: "30+ providers audited for TTFB, Uptime, and Architecture efficiency.", 
                link: "/web-hosting", 
                color: "text-blue-400",
                icon: Rocket
              },
              { 
                title: "AI SEO Tools", 
                desc: "Real ROI data from 450+ article tests across the latest LLM models.", 
                link: "/best-ai-seo-tools-2026", 
                color: "text-purple-400",
                icon: Cpu
              },
              { 
                title: "Website Builders", 
                desc: "Enterprise-grade builders compared for scalability and Core Web Vitals.", 
                link: "/website-builders", 
                color: "text-green-400",
                icon: LayoutDashboard
              }
            ].map((cat, i) => (
              <Link key={i} href={cat.link} className="group p-10 rounded-[3rem] bg-[#161616] border border-white/5 hover:border-white/20 transition-all shadow-2xl">
                <cat.icon className={`w-12 h-12 ${cat.color} mb-8`} />
                <h3 className="text-2xl font-black mb-4 group-hover:translate-x-2 transition-transform">{cat.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8">{cat.desc}</p>
                <div className={`${cat.color} font-black flex items-center gap-2`}>
                  VIEW AUDIT <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Snippet */}
      <section className="py-24 bg-[#0F0F0F]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="p-12 md:p-16 rounded-[4rem] bg-gradient-to-br from-[#161616] to-[#0A0A0A] border border-white/10 shadow-2xl text-center">
            <Shield className="w-16 h-16 text-blue-500 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">Rigorous Auditing</h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12">
              Every tool and host on SitePilot goes through hands-on testing. We deploy production environments and monitor performance 24/7. No shortcuts, no sponsored fluff.
            </p>
            <div className="flex justify-center gap-8 text-xs text-slate-500 font-black uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500"/> Data Driven</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500"/> Independent</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
