import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Vendor Pricing Guide 2026 | SitePilot'
const pageDescription = 'A comprehensive guide to understanding enterprise AI vendor pricing models, hidden costs, and contract traps before moving to pilot or production.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-vendor-pricing-guide-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
}

export default function PricingGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6 border border-white/20">
            Commercial Review
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise AI Vendor Pricing Guide 2026</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Enterprise AI vendor pricing combines platform fees, usage charges, support minimums, and contract conditions that can materially change total cost after pilot approval. This 2026 guide helps procurement teams compare token pricing, seat licensing, infrastructure commitments, and exit terms before shortlist scoring or contract negotiation begins.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-10">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to use this pricing guide</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pricing should be reviewed alongside the{' '}
            <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-blue-700 font-medium hover:underline">
              enterprise AI vendor RFP template
            </Link>{' '}
            and the{' '}
            <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-blue-700 font-medium hover:underline">
              due diligence checklist
            </Link>{' '}
            so commercial assumptions are tied to security, deployment, and data-governance evidence instead of vendor sales language.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Before final approval, teams should map cost assumptions into the{' '}
            <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-blue-700 font-medium hover:underline">
              shortlist scorecard
            </Link>{' '}
            and validate them during the{' '}
            <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="text-blue-700 font-medium hover:underline">
              pilot evaluation checklist
            </Link>{' '}
            so overages and lock-in risks are tested before production access.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            If stakeholders disagree on what to compare, use the{' '}
            <Link href="/methodology" className="text-blue-700 font-medium hover:underline">
              SitePilot methodology
            </Link>{' '}
            to keep pricing review tied to evidence, weighted trade-offs, and documented approval criteria.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Core Pricing Models</h2>
          <ul className="space-y-4 text-slate-700">
            <li><strong>Consumption-based (Token pricing):</strong> Charges based on input/output tokens. Great for variable workloads, dangerous for uncapped user-facing applications.</li>
            <li><strong>Seat-based licensing:</strong> Per-user monthly fee (e.g., Copilot models). Predictable but expensive if utilization remains low.</li>
            <li><strong>Platform + Compute:</strong> Base platform fee plus dedicated instance costs for predictable latency and privacy.</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Hidden Contract Traps</h2>
          <ul className="space-y-4 text-slate-700">
            <li><strong>Overage Penalties:</strong> What happens when token limits are exceeded during a surge?</li>
            <li><strong>Data Retention Costs:</strong> Extra fees for extended audit logging and telemetry storage.</li>
            <li><strong>Support Minimums:</strong> Premium enterprise support often requires a baseline spend commitment.</li>
          </ul>
        </div>

        <RelatedLinks links={[
          { title: 'Enterprise AI Vendor RFP Template 2026', href: '/enterprise-ai-vendor-rfp-template-2026', description: 'Request clear pricing evidence in your RFP.', category: 'guide' },
          { title: 'AI Vendor Due Diligence Checklist 2026', href: '/ai-vendor-due-diligence-checklist-enterprise-2026', description: 'Check residency, retention, and training clauses behind the quoted price.', category: 'guide' },
          { title: 'Enterprise AI Vendor Shortlist Scorecard 2026', href: '/enterprise-ai-vendor-shortlist-scorecard-2026', description: 'Score vendors based on TCO and commercial models.', category: 'tools' },
          { title: 'Enterprise AI Vendor Pilot Evaluation Checklist 2026', href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026', description: 'Validate commercial assumptions with real pilot data before production.', category: 'tools' },
          { title: 'AI Procurement Decision Matrix Tool 2026', href: '/ai-procurement-decision-matrix-tool-2026', description: 'Quantify trade-offs across price, risk, and implementation fit.', category: 'tools' }
        ]} />
      </main>
    </div>
  )
}
