import { Metadata } from 'next'
import { LockKeyhole, Eye, Database, Globe } from 'lucide-react'

const pageTitle = 'Privacy Policy | SitePilot'
const pageDescription = 'Our commitment to data privacy, transparency, and secure infrastructure auditing for our global audience.'
const pageUrl = 'https://sitepilot.co/privacy'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Header */}
      <section className="relative py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <LockKeyhole className="w-3 h-3" /> SECURITY FIRST
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            How SitePilot and Xentech Limited protect your data and maintain technical integrity.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid gap-16">
          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Globe className="w-5 h-5 text-blue-500" /> 1. Data Stewardship
            </h2>
            <p className="leading-relaxed mb-4">
              SitePilot.co is a brand operated by Xentech Limited. We are committed to maintaining the highest standards of data privacy. We do not sell user data. Our primary mission is to provide technical auditing services, and your privacy is a core component of that trust.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Eye className="w-5 h-5 text-blue-500" /> 2. Information Collection
            </h2>
            <p className="leading-relaxed">
              We collect minimal data required to provide our technical services, primarily focused on Google Analytics 4 (GA4) for traffic analysis and server-side logs for security monitoring. No personally identifiable information (PII) is stored without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Database className="w-5 h-5 text-blue-500" /> 3. Infrastructure Security
            </h2>
            <p className="leading-relaxed">
              Our infrastructure is hardened against common vulnerabilities. We use SSL encryption (provided via our hosting partners) and follow best practices in technical auditing to ensure the integrity of the data presented on SitePilot.co.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-bold text-white mb-4">Regulatory Compliance</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              As a New Zealand-based entity, Xentech Limited complies with local privacy regulations and aligns with global standards such as GDPR for our European visitors. For any privacy-related inquiries, contact us at office@xentech.co.nz.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
