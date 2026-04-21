import { Metadata } from 'next'
import { Database, Eye, Globe, LockKeyhole, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Privacy Policy | SitePilot'
const pageDescription = 'Our commitment to data privacy, transparency, and secure infrastructure auditing for our global audience.'
const pageUrl = 'https://sitepilot.co/privacy'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

const sections = [
  {
    title: '1. Data stewardship',
    body:
      'SitePilot.co is a brand operated by Xentech Limited. We are committed to maintaining high standards of data privacy and do not sell user data. Our primary mission is technical media and auditing guidance, and privacy is part of that trust.',
    icon: Globe,
  },
  {
    title: '2. Information collection',
    body:
      'We collect minimal data required to provide our services, primarily Google Analytics 4 (GA4) for traffic analysis and server-side logs for security monitoring. No personally identifiable information is stored without explicit consent.',
    icon: Eye,
  },
  {
    title: '3. Infrastructure security',
    body:
      'Our infrastructure is hardened against common vulnerabilities. We use SSL encryption through our hosting partners and follow technical auditing best practices to preserve the integrity of the information presented on SitePilot.co.',
    icon: Database,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-6xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Privacy policy
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Privacy policy,
                <span className="brand-gradient-text block">for transparency and data stewardship.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                How SitePilot and Xentech Limited approach privacy, infrastructure integrity, and the minimal collection of operational data.
              </p>
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <LockKeyhole className="w-5 h-5 text-[#635bff]" />
                  <div className="text-sm text-slate-500 uppercase tracking-[0.14em]">Security first</div>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                  Minimal collection, clear purpose.
                </h2>
                <p className="text-slate-600 leading-8">
                  The site is operated for technical publishing and auditing guidance, not for harvesting personal data. The privacy posture reflects that constraint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative max-w-4xl mx-auto px-4 py-16 md:py-20">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <div className="space-y-6">
          {sections.map((section) => {
            const Icon = section.icon

            return (
              <section key={section.title} className="page-card p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl border border-indigo-100 bg-indigo-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#635bff]" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
                </div>
                <p className="text-slate-600 leading-8">{section.body}</p>
              </section>
            )
          })}

          <section className="page-card-glow p-1.5">
            <div className="page-card rounded-[1.8rem] p-8 surface-muted">
              <h2 className="text-xl font-semibold text-slate-950 mb-4">Regulatory compliance</h2>
              <p className="text-slate-600 leading-8">
                As a New Zealand-based entity, Xentech Limited complies with local privacy regulations and aligns with global standards such as GDPR for European visitors. For privacy-related inquiries, contact `office@xentech.co.nz`.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
