import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, FileText, Scale, LockKeyhole } from 'lucide-react'

const pageTitle = 'Terms of Service | SitePilot'
const pageDescription = 'Terms and conditions for using the SitePilot platform, guides, and technical infrastructure auditing tools.'
const pageUrl = 'https://sitepilot.co/terms'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Header */}
      <section className="relative py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Scale className="w-3 h-3" /> LEGAL FRAMEWORK
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Terms of <span className="text-blue-500">Service</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Last Updated: April 9, 2026. Governing the use of SitePilot technical assets and auditing tools.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid gap-16">
          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-5 h-5 text-blue-500" /> 1. Operating Entity
            </h2>
            <p className="leading-relaxed mb-4">
              SitePilot.co is a professional technology media and technical auditing platform. The website and all associated services are owned and operated by <span className="text-white font-medium text-lg">Xentech Limited</span> (Registered in New Zealand). All legal rights and commercial obligations are managed by the parent entity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-5 h-5 text-blue-500" /> 2. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing SitePilot.co, you agree to comply with these terms of service and all applicable laws. Our platform provides high-level technical benchmarks and infrastructure data. If you do not agree with our operational framework, please discontinue use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <LockKeyhole className="w-5 h-5 text-blue-500" /> 3. Professional Disclaimer
            </h2>
            <p className="leading-relaxed">
              The content on SitePilot, including technical audits and procurement frameworks, is for informational purposes only. While we perform rigorous testing, our reports do not constitute professional legal or financial advice. We are not liable for any losses arising from vendor decisions made based on our data.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-bold text-white mb-4">Intellectual Property Notice</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              All proprietary auditing methodologies, neon-themed UI designs, and technical data visualizations are the exclusive property of SitePilot and Xentech Limited. Unauthorized commercial redistribution is strictly prohibited.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
