import React from 'react';
import Link from 'next/link';
import { Cpu, Smartphone, Usb, Zap, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HardwareGuide() {
  return (
    <div className="min-h-screen bg-[#212121]">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-9000/20 text-blue-400 text-sm font-bold mb-6 border border-blue-500/20">
            <Cpu className="w-4 h-4 mr-2" />
            2026 Technical Blueprint
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            The Ultimate <span className="text-blue-500">Proxy Farm</span> Hardware Guide
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Proxy farm hardware is the physical infrastructure required to host mobile devices for web automation. Effective selection focuses on high-bandwidth USB controllers, stable power delivery for 24/7 operation, and compatible Android hardware that supports carrier switching, remote control, and repeatable IP rotation under load.
          </p>
        </div>
      </section>

      {/* Hardware Checklist */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Android Devices",
                desc: "Choose Android devices that match your carrier, remote-control method, and long-run stability requirements.",
                icon: Smartphone
              },
              {
                title: "Industrial USB Hubs",
                desc: "Hub stability, power delivery, and controller compatibility matter more than cheap consumer accessories.",
                icon: Usb
              },
              {
                title: "Cooling & Power",
                desc: "Thermal control and stable power matter if the cluster is expected to stay online for long operating windows.",
                icon: Zap
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-950 border border-slate-200 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-950">{item.title}</h3>
                <p className="text-white leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <div className="bg-slate-950 rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-sm overflow-hidden relative">
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl font-bold mb-8">Hardware Compatibility Matrix</h2>
              <div className="space-y-6">
                {[
                  { label: "Phone Model", spec: "Android 9+ with stable modem behavior", reason: "Carrier fit and remote-control compatibility" },
                  { label: "Hub Type", spec: "Powered sync-capable hub with stable delivery", reason: "Reduces disconnects under multi-device load" },
                  { label: "Cables", spec: "Reliable short USB cables", reason: "Helps reduce avoidable connection instability" },
                  { label: "Controller", spec: "Dedicated mini PC or Linux host", reason: "Keeps device control workflows predictable" }
                ].map((row, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center p-6 bg-slate-900/30 rounded-2xl border border-blue-100/50">
                    <div className="w-40 font-black text-slate-950 mb-2 md:mb-0">{row.label}</div>
                    <div className="flex-1 font-bold text-blue-800 mb-2 md:mb-0">{row.spec}</div>
                    <div className="text-slate-800 text-sm font-semibold italic">{row.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Cluster */}
      <section className="py-16 bg-slate-900 border-t border-white/10 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <Link href="/proxies/residential-vs-mobile-proxies-comparison-2026" className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6 hover:bg-cyan-500/10 transition-colors">
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-300 font-bold mb-3">Decision</div>
              <h3 className="text-xl font-bold text-white mb-3">Residential vs Mobile Comparison</h3>
              <p className="text-slate-300 leading-relaxed">Start here if you still need to justify why a mobile stack is necessary for the workload.</p>
            </Link>
            <Link href="/proxies/mobile-proxy-farm-setup-guide-2026" className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6 hover:bg-blue-500/10 transition-colors">
              <div className="text-sm uppercase tracking-[0.2em] text-blue-300 font-bold mb-3">Deployment</div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile Proxy Farm Setup</h3>
              <p className="text-slate-300 leading-relaxed">Pair this hardware matrix with the deployment guide so infrastructure and software assumptions stay aligned.</p>
            </Link>
            <Link href="/proxies/mobile-proxy-software-comparison-2026" className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-6 hover:bg-emerald-500/10 transition-colors">
              <div className="text-sm uppercase tracking-[0.2em] text-emerald-300 font-bold mb-3">Software</div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile Proxy Software Comparison</h3>
              <p className="text-slate-300 leading-relaxed">Compare the management layer after hardware constraints are clear.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Software Recommendation */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-8">Hardware and software should be chosen together</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hardware decisions only make sense when the control software, rotation workflow, and operator model are defined at the same time.
          </p>
          <div className="flex justify-center gap-6">
            <Link 
              href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201" 
              className="px-10 py-5 bg-slate-950 text-blue-600 rounded-xl font-bold text-xl hover:bg-slate-900 shadow-2xl"
            >
              Get Coronium OS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
