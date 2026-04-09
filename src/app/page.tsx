import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Terminal, Globe, Cpu } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'SitePilot | Global Digital Infrastructure Authority',
  description: 'Independent technical audits, infrastructure benchmarks, and AI-driven procurement frameworks for modern enterprises.',
}

export default function HomePage() {
  const pageTitle = 'SitePilot | Global Digital Infrastructure Authority'
  const pageDescription = 'Independent technical audits and infrastructure benchmarks.'
  const pageUrl = 'https://sitepilot.co'

  const features = [
    {
      title: "Technical Auditing",
      desc: "Independent performance and security audits for global tech stacks.",
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Infrastructure Benchmarks",
      desc: "Data-driven TTFB, Uptime, and Scalability testing for 2026.",
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "AI Procurement",
      desc: "Strategic frameworks for selecting high-performance Gen-AI tools.",
      icon: <Cpu className="w-6 h-6 text-purple-500" />
    }
  ]

  return (
    <div className="bg-[#0A0A0A] selection:bg-blue-500/30">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 animate-in fade-in slide-in-from-bottom-4">
            <Terminal className="w-3 h-3" /> 2026 INFRASTRUCTURE AUDIT ACTIVE
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-700">
            CONNECT EVERYTHING <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600">
              WITH PRECISION
            </span>
          </h1>
          
          <p className="text-slate-500 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000">
            A digital infrastructure authority is a research platform that evaluates hosting, AI tooling, and automation systems using technical criteria such as uptime, latency, security controls, and deployment risk. SitePilot publishes 2026 buyer guides, scorecards, and setup frameworks so operators can make infrastructure decisions using evidence instead of vendor marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <Link 
              href="/web-hosting" 
              className="px-8 py-4 bg-white text-black rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-white/5"
            >
              EXPLORE AUDITS
            </Link>
            <Link 
              href="/methodology" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all backdrop-blur-md"
            >
              VIEW METHODOLOGY
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="py-32 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div 
                key={i} 
                className="glass-card p-10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-blue-500/50 transition-colors shadow-lg">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarking Teaser */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-blue-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter italic uppercase">
            Data is the <span className="text-blue-500">New Standard</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            We don't just review products. We benchmark them against 12-factor infrastructure protocols to ensure your technology stack is enterprise-ready.
          </p>
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
             <div className="text-left">
               <div className="text-xs font-bold text-blue-500 uppercase tracking-widest">Coverage</div>
               <div className="text-2xl font-black text-white">Hosting • AI • Proxies</div>
             </div>
             <div className="w-px h-10 bg-white/10" />
             <div className="text-left">
               <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Focus</div>
               <div className="text-2xl font-black text-white">Audits • Guides • Scorecards</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
