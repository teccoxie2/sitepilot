import React from 'react';
import Link from 'next/link';
import { Cpu, Smartphone, Usb, Zap, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HardwareGuide() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold mb-6 border border-blue-500/20">
            <Cpu className="w-4 h-4 mr-2" />
            2026 Technical Blueprint
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            The Ultimate <span className="text-blue-500">Proxy Farm</span> Hardware Guide
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Proxy farm hardware is the physical infrastructure required to host mobile devices for web automation. Effective selection focuses on high-bandwidth USB controllers, stable power delivery for 24/7 operation, and compatible Android hardware that supports root-level IP rotation via AT commands or specialized OS kernels.
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
                desc: "Choose models with strong 4G/5G chipsets and easy root access. Used Pixel or Samsung devices are industry standards.",
                icon: Smartphone
              },
              {
                title: "Industrial USB Hubs",
                desc: "Standard hubs fail under load. You need sync-enabled, high-power hubs with individual port control.",
                icon: Usb
              },
              {
                title: "Cooling & Power",
                desc: "Heat is the #1 killer of proxy farms. Industrial-grade cooling and stable DC power are non-negotiable.",
                icon: Zap
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-sm overflow-hidden relative">
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl font-bold mb-8">Hardware Compatibility Matrix</h2>
              <div className="space-y-6">
                {[
                  { label: "Phone Model", spec: "Android 9+ (Pixel 4/5 Preferred)", reason: "Carrier compatibility & API support" },
                  { label: "Hub Type", spec: "Powered Sync Hub (12V/10A)", reason: "Ensures phones don't disconnect" },
                  { label: "Cables", spec: "Double-Shielded Type-C", reason: "Reduces signal interference" },
                  { label: "Controller", spec: "Dedicated NUC / Linux Server", reason: "Stable ADB connection management" }
                ].map((row, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center p-6 bg-slate-50 rounded-2xl">
                    <div className="w-40 font-bold text-slate-900 mb-2 md:mb-0">{row.label}</div>
                    <div className="flex-1 font-medium text-blue-600 mb-2 md:mb-0">{row.spec}</div>
                    <div className="text-slate-500 text-sm italic">{row.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Recommendation */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-8">Great Hardware Needs Great Software</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Even the best hardware cluster is useless without an operating system that can handle IP rotations and carrier handshakes flawlessly.
          </p>
          <div className="flex justify-center gap-6">
            <Link 
              href="https://dashboard.coronium.io/en/sign-up#bc2924ccac1eae657b6fe8daf1e97201" 
              className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl hover:bg-blue-50 shadow-2xl"
            >
              Get Coronium OS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
