import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Shield, Zap, Cpu, ArrowRight, DollarSign, CreditCard, Landmark, LockKeyhole } from 'lucide-react';

export default function ApplyForAudit() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5 text-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-black mb-8 tracking-widest uppercase">
            SitePilot Technical Partnerships
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
            Infrastructure <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent italic">Audit</span> Program
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Apply for a technical audit to feature your platform on SitePilot.co. We prioritize data integrity, server-level benchmarking, and performance transparency.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Standard Audit - The $800 Option */}
            <div className="p-12 rounded-[4rem] bg-[#161616] border-2 border-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                 <div className="px-6 py-2 bg-blue-600 rounded-full text-white text-xs font-black tracking-widest uppercase">Standard Audit</div>
              </div>
              
              <div className="mb-10">
                <div className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2">Standard Technical</div>
                <div className="flex items-baseline gap-2">
                   <span className="text-6xl font-black text-white">$800</span>
                   <span className="text-slate-500 font-bold">USD</span>
                </div>
              </div>

              <ul className="space-y-6 mb-12">
                {[
                  "20-Hour Technical Deep-Dive",
                  "Performance Benchmarking (TTFB/CWV)",
                  "Dedicated Review Article (SEO Optimized)",
                  "Master Comparison Table Integration",
                  "SitePilot 'Verified' Badge License",
                  "7-Day Turnaround"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300 font-bold leading-tight">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              {/* PAYMENT LINK PLACEHOLDER */}
              <Link 
                href="https://buy.stripe.com/test_placeholder_link" 
                className="inline-flex items-center justify-center w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40"
              >
                PROCEED TO PAYMENT <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
              <div className="mt-6 flex justify-center gap-4 opacity-50">
                 <CreditCard className="w-6 h-6" />
                 <Landmark className="w-6 h-6" />
              </div>
            </div>

            {/* Custom/Enterprise Option */}
            <div className="p-12 rounded-[4rem] bg-[#111] border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="mb-10">
                <div className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2">Custom Audit</div>
                <div className="text-6xl font-black text-white">Custom</div>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed mb-10">
                For infrastructure platforms requiring cluster-level testing, geo-specific benchmarks, or ongoing white-glove monitoring.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center w-full py-5 bg-transparent border-2 border-white/10 text-white rounded-2xl font-black text-xl hover:border-white/30 transition-all"
              >
                CONTACT BD TEAM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-[#0F0F0F] border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
           <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-xs mb-8 italic">Secure Payments via Stripe & Wise Business</p>
           <div className="flex justify-center gap-12 text-slate-600">
              <Shield className="w-10 h-10" />
              <LockKeyhole className="w-10 h-10" />
              <CheckCircle2 className="w-10 h-10" />
           </div>
        </div>
      </section>
    </div>
  );
}
