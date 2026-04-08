import React from 'react';
import Link from 'next/link';
import { CheckCircle2, XCircle, Zap, Shield, BarChart3, ArrowRight, Globe, Lock, Cpu, Rocket, AlertCircle, Eye, HardDrive } from 'lucide-react';

export default function SecurityChecklist2026() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* 
        AEO Optimizer: Factual Definition
        A website security checklist is a technical protocol encompassing defensive measures such as SSL encryption, Web Application Firewall (WAF) configuration, and automated malware scanning to protect digital assets from unauthorized access. This 2026 audit guide details mandatory security layers for modern websites, including multi-factor authentication, database encryption, and DDoS mitigation strategies.
      */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-black mb-8 tracking-widest uppercase">
            2026 HARDENED SECURITY PROTOCOL
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-white">
            Security <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent italic">Checklist</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            Is your website a sitting duck? We audited the latest <span className="text-white">cybersecurity threats</span> to build the ultimate 20-point defensive shield for 2026.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Checkpoints", val: "20 Points", color: "text-red-400" },
              { label: "Threat Intel", val: "Live", color: "text-orange-400" },
              { label: "SSL Standard", val: "TLS 1.3", color: "text-blue-400" },
              { label: "Compliance", val: "GDPR/SOC2", color: "text-green-400" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#161616] border border-white/5 shadow-2xl">
                <div className={`text-2xl font-black ${stat.color} mb-1`}>{stat.val}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Security Layers */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Core Defense Layers</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Non-Negotiable Protocols 2026</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "WAF Protection", 
                desc: "Every site must have a Web Application Firewall to filter malicious traffic before it reaches the origin.", 
                color: "text-red-400",
                icon: Shield
              },
              { 
                title: "Encrypted Backups", 
                desc: "Off-site, encrypted daily backups are your only recovery path after a successful breach.", 
                color: "text-orange-400",
                icon: HardDrive
              },
              { 
                title: "Identity Audit", 
                desc: "Multi-factor authentication (MFA) is mandatory for all administrative logins.", 
                color: "text-blue-400",
                icon: Eye
              }
            ].map((layer, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-[#161616] border border-white/5 shadow-2xl">
                <layer.icon className={`w-12 h-12 ${layer.color} mb-8`} />
                <h3 className="text-2xl font-black mb-4">{layer.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 2026 Warning */}
      <section className="py-24 bg-[#0F0F0F]">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="p-12 md:p-16 rounded-[4rem] bg-gradient-to-br from-[#1c1c1c] to-[#0A0A0A] border border-red-500/10 shadow-2xl text-center">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-8" />
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">The AI-Attack Threat</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12">
                 In 2026, bot attacks are powered by AI. Traditional static firewalls are no longer enough. You need <span className="text-white font-black">Behavioral Analysis</span> security provided by high-tier hosts like SiteGround or Cloudflare Enterprise.
              </p>
              <Link href="/web-hosting" className="inline-flex items-center px-10 py-5 bg-red-600 text-white rounded-2xl font-black text-xl hover:bg-red-500 transition-all shadow-xl shadow-red-900/40">
                AUDIT MY HOST'S SECURITY <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
