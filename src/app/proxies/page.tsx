import React from 'react';
import Link from 'next/link';
import { Network, Zap, Shield, Cpu, ArrowRight, BarChart3 } from 'lucide-react';

export default function ProxiesHub() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 border border-blue-500/20">
              <Network className="w-4 h-4 mr-2" />
              Advanced Web Automation Hub
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Master the Art of <span className="text-blue-500 font-mono">Proxy Infrastructure</span>
            </h1>
            <p className="text-xl text-slate-100 leading-relaxed mb-10">
              Stop getting blocked. Whether you're building a massive mobile proxy farm or selecting the right residential IP provider, our data-driven guides help you navigate the 2026 proxy landscape with enterprise-grade reliability.
            </p>
          </div>
        </div>
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* Main Guides Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Guide 1: Mobile Farm */}
            <Link href="/proxies/mobile-proxy-farm-setup-guide-2026" className="group block p-10 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-500/30 hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">Mobile Proxy Farm Setup</h3>
                <p className="text-slate-800 text-lg leading-relaxed mb-8">
                  The ultimate 2026 blueprint for building your own Android-based proxy cluster. Hardware selection, carrier management, and software orchestration.
                </p>
                <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                  Read Full Guide <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>

            {/* Guide 2: Residential vs Mobile */}
            <Link href="/proxies/residential-vs-mobile-proxies-comparison-2026" className="group block p-10 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-500/30 hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">Residential vs Mobile Comparison</h3>
                <p className="text-slate-800 text-lg leading-relaxed mb-8">
                  Understand the technical trade-offs between static residential, rotating datacenter, and 4G/5G mobile IPs for your specific use case.
                </p>
                <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                  Compare Now <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Expert-Vetted Proxy Infrastructure</h2>
            <p className="text-xl text-slate-900 leading-relaxed">
              We recommend only the tools that pass our rigorous "anti-bot detection" and "latency stability" tests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 p-12 rounded-[3rem] border border-slate-100 mb-12">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                BEST FOR DIY CLUSTERS
              </div>
              <h3 className="text-3xl font-bold mb-6">Coronium.io OS</h3>
              <p className="text-lg text-slate-900 mb-8">
                The most reliable management software for Android device clusters. One dashboard to rule all your IPs with millisecond rotation precision.
              </p>
              <Link href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
                Access Official Link <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "IP Rotation", val: "Instant" },
                { label: "Support", val: "SOCKS5/HTTP" },
                { label: "Reliability", val: "99.9%" },
                { label: "Scale", val: "Unlimited" }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
                  <div className="text-slate-600 text-sm mb-1 font-semibold">{stat.label}</div>
                  <div className="text-blue-700 font-bold text-xl">{stat.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-900 p-12 rounded-[3rem] text-white">
            <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
              {[
                { label: "Deployment", val: "Plug & Play" },
                { label: "Global Nodes", val: "Managed" },
                { label: "Stability", val: "Carrier-Grade" },
                { label: "Dashboard", val: "Advanced" }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="text-slate-100 text-sm mb-1 font-semibold">{stat.label}</div>
                  <div className="text-blue-300 font-bold text-xl">{stat.val}</div>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold mb-6">
                ENTERPRISE MANAGEMENT PANEL
              </div>
              <h3 className="text-3xl font-bold mb-6">LTESpace.com</h3>
              <p className="text-lg text-slate-100 mb-8">
                A high-performance cloud management panel specifically designed for 4G/5G mobile proxies. Ideal for users scaling rapidly with zero technical overhead.
              </p>
              <Link href="https://ltespace.com/sitepilot" className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition-all">
                Try LTESpace Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
