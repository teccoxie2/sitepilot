import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Vendor Evaluation Methodology 2026 | SitePilot'
const pageDescription = 'How SitePilot evaluates enterprise AI vendors using evidence-first research, weighted decision criteria, and procurement-ready validation.'
const pageUrl = 'https://sitepilot.co/methodology'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const principles = [
  {
    title: '1. Evidence-first, not demo-first',
    body:
      'We do not treat vendor demos, launch claims, or analyst hype as procurement evidence. A claim only counts when it is supported by documentation, reproducible controls, contract language, or pilot results tied to a real workflow.',
  },
  {
    title: '2. Pass/fail controls before weighted scoring',
    body:
      'Some issues should eliminate a vendor immediately: unclear training usage, weak identity controls, missing auditability, or no viable export and deletion path. Weighted scoring only matters after mandatory controls are satisfied.',
  },
  {
    title: '3. BOFU content for buying teams',
    body:
      'SitePilot prioritizes bottom-of-funnel assets such as RFP templates, due diligence checklists, scorecards, pricing reviews, and pilot checklists. Buying teams need decision tools, not another vague feature list dressed up as insight.',
  },
  {
    title: '4. Continuous updates when the market changes',
    body:
      'Enterprise AI changes fast, so we review priority pages on a rolling basis. We update guidance when pricing mechanics, model policies, deployment options, or regulatory obligations materially change the buying decision.',
  },
]

const workflow = [
  'Start with the enterprise AI vendor comparison guide to frame the category and shortlist logic.',
  'Use the RFP template to collect comparable written answers from vendors.',
  'Run the due diligence checklist to validate security, privacy, architecture, and data-governance claims.',
  'Apply the procurement decision matrix and shortlist scorecard to rank evidence-based trade-offs.',
  'Use the pricing guide and pilot evaluation checklist before final approval or production rollout.',
]

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6 border border-white/20">
              Research methodology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Enterprise AI Vendor Evaluation Methodology 2026
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              An enterprise AI vendor evaluation methodology is a structured research and decision model used to compare vendors across security, data governance, architecture, pricing, and rollout risk. SitePilot uses this 2026 methodology to connect comparison, RFP, due diligence, scoring, pricing review, and pilot validation into one procurement-ready system.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-10">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How SitePilot uses this methodology</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The point of methodology is not to sound rigorous. The point is to stop weak vendors from surviving on polished demos, vague legal language, and fake certainty. If a framework cannot eliminate a risky vendor, it is decorative.
          </p>
          <p className="text-slate-700 leading-relaxed">
            This page closes the topical authority loop for our enterprise procurement cluster by defining how the{' '}
            <Link href="/enterprise-ai-vendor-comparison-guide-2026" className="text-blue-700 font-medium hover:underline">
              comparison guide
            </Link>,{' '}
            <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-blue-700 font-medium hover:underline">
              RFP template
            </Link>,{' '}
            <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-blue-700 font-medium hover:underline">
              due diligence checklist
            </Link>,{' '}
            <Link href="/ai-procurement-decision-matrix-tool-2026" className="text-blue-700 font-medium hover:underline">
              decision matrix
            </Link>,{' '}
            <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-blue-700 font-medium hover:underline">
              shortlist scorecard
            </Link>,{' '}
            <Link href="/enterprise-ai-vendor-pricing-guide-2026" className="text-blue-700 font-medium hover:underline">
              pricing guide
            </Link>, and{' '}
            <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="text-blue-700 font-medium hover:underline">
              pilot checklist
            </Link>{' '}
            fit together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Core principles</h2>
            <div className="space-y-8">
              {principles.map((item) => (
                <div key={item.title} className="border-t border-slate-100 pt-6 first:border-t-0 first:pt-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
              <h3 className="font-bold text-indigo-900 mb-4 text-lg">What kills a vendor fast</h3>
              <ul className="space-y-3 text-sm text-indigo-900 list-disc pl-5">
                <li>Unclear data-training usage or retention rules</li>
                <li>No credible SSO, RBAC, or audit-log story</li>
                <li>Weak export, deletion, or rollback path</li>
                <li>Pricing that looks cheap until pilot-to-production scale</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Recommended workflow</h3>
              <ol className="space-y-3 text-sm text-slate-700 list-decimal list-inside">
                {workflow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </aside>
        </div>

        <RelatedLinks links={[
          { title: 'Enterprise AI Vendor Comparison Guide 2026', href: '/enterprise-ai-vendor-comparison-guide-2026', description: 'Frame the category before formal procurement begins.', category: 'guide' },
          { title: 'Enterprise AI Vendor RFP Template 2026', href: '/enterprise-ai-vendor-rfp-template-2026', description: 'Collect comparable written answers from vendors.', category: 'guide' },
          { title: 'AI Vendor Due Diligence Checklist 2026', href: '/ai-vendor-due-diligence-checklist-enterprise-2026', description: 'Validate security, privacy, and architecture claims.', category: 'guide' },
          { title: 'AI Procurement Decision Matrix Tool 2026', href: '/ai-procurement-decision-matrix-tool-2026', description: 'Turn procurement evidence into weighted ranking logic.', category: 'tools' },
          { title: 'Enterprise AI Vendor Shortlist Scorecard 2026', href: '/enterprise-ai-vendor-shortlist-scorecard-2026', description: 'Score finalists using documented evidence.', category: 'tools' },
          { title: 'Enterprise AI Vendor Pricing Guide 2026', href: '/enterprise-ai-vendor-pricing-guide-2026', description: 'Stress-test commercial assumptions before approval.', category: 'guide' },
          { title: 'Enterprise AI Vendor Pilot Evaluation Checklist 2026', href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026', description: 'Validate live workflow performance before production.', category: 'tools' },
        ]} />
      </main>
    </div>
  )
}
