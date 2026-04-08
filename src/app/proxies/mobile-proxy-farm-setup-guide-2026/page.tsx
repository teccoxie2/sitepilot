import React from 'react';
import Link from 'next/link';
import { Shield, Zap, Cpu, Network, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MobileProxyFarmGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
            <Zap className="w-4 h-4 mr-2" />
            2026 Industry Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            How to Build a Professional <span className="text-blue-400">Mobile Proxy Farm</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
            A mobile proxy farm is a localized infrastructure that routes web traffic through real mobile devices and 4G/5G SIM cards to obtain high-authority residential IP addresses. This 2026 setup guide explains how to bypass anti-scraping systems using Android-based clusters, specialized management software, and enterprise IoT data plans for web automation and data collection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-blue-900/20 flex items-center"
            >
              Get Coronium OS <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold text-lg transition-all backdrop-blur-sm border border-white/10"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Why Mobile Proxies? */}
      <section className="py-20 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Why Mobile Proxies Move the Needle</h2>
            <p className="text-slate-900 text-lg font-medium">
              Unlike data center IPs, mobile IPs are assigned to real humans. They are rarely banned because blocking them would affect thousands of legitimate mobile users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Undetectable Scraping",
                desc: "High-trust IP scores ensure your bots look like real users to Amazon, Google, and social platforms.",
                icon: Shield
              },
              {
                title: "Bypass Geo-Blocking",
                desc: "Access localized content and search results by placing your devices in specific geographic regions.",
                icon: Network
              },
              {
                title: "Unlimited IP Rotation",
                desc: "Force IP changes on-demand via software, giving you a fresh identity for every session.",
                icon: Cpu
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-800 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Software: Coronium */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                TOP RECOMMENDED SOLUTION
              </div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">
                Coronium.io: The Professional Operating System for Mobile Farms
              </h2>
              <p className="text-lg text-slate-900 mb-8 leading-relaxed font-medium">
                Building a farm is 20% hardware and 80% software management. Coronium simplifies the complexity of managing large Android clusters, offering a centralized dashboard for IP rotation, port management, and real-time monitoring.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "One-click IP rotation via SOCKS5/HTTP",
                  "Support for huge Android device clusters",
                  "Real-time device health monitoring",
                  "Automated carrier re-connection"
                ].map((text, i) => (
                  <li key={i} className="flex items-center text-slate-900 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link 
                  href="https://ltespace.com/sitepilot" 
                  className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors group mr-8"
                >
                  Visit LTESpace <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201" 
                  className="inline-flex items-center text-slate-600 font-bold text-lg hover:text-slate-900 transition-colors group"
                >
                  Visit Coronium <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="flex-1 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
              <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 font-mono text-sm overflow-hidden">
                <div className="p-8 w-full h-full">
                  <div className="mb-4 text-slate-500">// Coronium Device Control API</div>
                  <div className="text-blue-300">curl -X POST "https://api.coronium.io/rotate" \</div>
                  <div className="text-blue-300 ml-4">-H "Authorization: Bearer $TOKEN" \</div>
                  <div className="text-blue-300 ml-4">-d "device_id=phone_01"</div>
                  <div className="mt-8 text-green-400">{"{ \"status\": \"success\", \"new_ip\": \"103.24.xx.xx\" }"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale Your Scraping Infrastructure?</h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Don't waste months on DIY scripts. Start building your high-authority proxy farm today with professional-grade software.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201" 
                  className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl"
                >
                  Start Building Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
