import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Procurement Decision Matrix Tool 2026 | SitePilot'
const pageDescription = 'A practical AI procurement decision matrix for comparing enterprise vendors across strategic fit, security, data governance, architecture, pricing, and rollout risk.'
const pageUrl = 'https://sitepilot.co/ai-procurement-decision-matrix-tool-2026'

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

const dimensions = [
  {
    title: '1. Strategic Fit',
    weight: '15%',
    checks: ['Business use-case alignment', 'Executive sponsorship', 'Roadmap relevance', 'Industry fit'],
  },
  {
    title: '2. Technical Architecture',
    weight: '15%',
    checks: ['Deployment model', 'Integration effort', 'Latency and scale', 'Observability support'],
  },
  {
    title: '3. Data Governance',
    weight: '20%',
    checks: ['Training usage policy', 'Residency and retention', 'Deletion/export controls', 'Sensitive-data handling'],
  },
  {
    title: '4. Security & Access',
    weight: '15%',
    checks: ['SSO and MFA', 'RBAC granularity', 'Audit logs', 'Incident response maturity'],
  },
  {
    title: '5. Commercial Model',
    weight: '10%',
    checks: ['Pricing transparency', 'Pilot-to-production cost behavior', 'Support minimums', 'Exit terms'],
  },
  {
    title: '6. Implementation Speed',
    weight: '10%',
    checks: ['Time to first value', 'Internal staffing required', 'Vendor onboarding quality', 'Change-management effort'],
  },
  {
    title: '7. Compliance Readiness',
    weight: '10%',
    checks: ['Privacy obligations', 'Sector requirements', 'Reviewability', 'Governance evidence'],
  },
  {
    title: '8. Risk Profile',
    weight: '5%',
    checks: ['Subprocessor clarity', 'Vendor concentration risk', 'Lock-in exposure', 'Rollback feasibility'],
  },
]

const scoringScale = [
  {
    score: '5',
    label: 'Strong',
    detail: 'Clear evidence, low ambiguity, and controls already proven in environments similar to yours.',
  },
  {
    score: '3',
    label: 'Baseline',
    detail: 'Acceptable capability with gaps that need mitigation, contractual control, or pilot validation.',
  },
  {
    score: '1',
    label: 'High Risk',
    detail: 'Weak evidence, unresolved control gaps, or claims that collapse under technical review.',
  },
]

const workflow = [
  'Use the RFP template to gather comparable vendor responses.',
  'Use the due diligence checklist to verify security, privacy, and architecture claims.',
  'Score each shortlisted vendor only on documented evidence.',
  'Validate disputed assumptions during the pilot, then update final weighting before approval.',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI procurement decision matrix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI procurement decision matrix is a weighted evaluation framework used to compare shortlisted vendors across security, data governance, architecture, commercial model, implementation effort, and business fit before production approval.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should teams use a decision matrix in AI procurement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teams should use a decision matrix after collecting RFP responses and completing initial due diligence. It works best when multiple vendors remain viable and the organization needs a documented, evidence-based way to rank trade-offs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should be weighted most heavily in an AI procurement matrix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The heaviest weights usually belong to data governance, security, architecture, and business fit. Price matters, but cheap AI becomes expensive when controls, integration effort, or pilot reliability fail under production conditions.',
      },
    },
  ],
}

export default function AIProcurementDecisionMatrixToolPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6 border border-white/20">
              Decision support tool
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              AI Procurement Decision Matrix Tool 2026
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl">
              An AI procurement decision matrix is a weighted framework used to compare shortlisted vendors across business fit, security controls, data governance, architecture, pricing, and rollout risk. This 2026 SitePilot tool helps buying teams turn RFP answers, due diligence findings, and pilot evidence into a defensible final recommendation.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Weighted scoring</span>
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Evidence-first</span>
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Procurement ready</span>
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Pilot aligned</span>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-10">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to use this matrix</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Do not score vendors from demos alone. Start with the{' '}
            <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-blue-700 font-medium hover:underline">
              enterprise AI vendor RFP template
            </Link>{' '}
            to collect comparable answers, then move through the{' '}
            <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-blue-700 font-medium hover:underline">
              due diligence checklist
            </Link>{' '}
            before assigning weights and scores.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Final rankings should be updated after the{' '}
            <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="text-blue-700 font-medium hover:underline">
              pilot evaluation checklist
            </Link>{' '}
            validates real workflow performance and after the{' '}
            <Link href="/enterprise-ai-vendor-pricing-guide-2026" className="text-blue-700 font-medium hover:underline">
              pricing guide
            </Link>{' '}
            confirms commercial assumptions. That keeps the process evidence-led from comparison to approval instead of turning into vendor theater.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">8 weighted dimensions</h2>
            <div className="space-y-8">
              {dimensions.map((dimension) => (
                <div key={dimension.title} className="border-t border-slate-100 pt-6 first:border-t-0 first:pt-0">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{dimension.title}</h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-mono text-slate-600">Weight: {dimension.weight}</span>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {dimension.checks.map((check) => (
                      <li key={check} className="flex items-center gap-3 text-slate-700 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
              <h3 className="font-bold text-indigo-900 mb-4 text-lg">Scoring scale</h3>
              <ul className="space-y-4 text-sm text-indigo-900">
                {scoringScale.map((item) => (
                  <li key={item.score}>
                    <strong>{item.score} — {item.label}:</strong> {item.detail}
                  </li>
                ))}
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

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Use BOFU logic, not vanity comparisons</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Top-of-funnel content can compare features forever. Procurement teams need bottom-of-funnel clarity: what fails legal review, what creates lock-in, what breaks under pilot load, and what actually clears production approval.
          </p>
          <p className="text-slate-700 leading-relaxed">
            If a vendor scores well on shiny features but poorly on residency, export, RBAC, auditability, or rollback feasibility, the matrix should make that obvious. That is the whole point.
          </p>
        </div>

        <RelatedLinks links={[
          { title: 'Enterprise AI Vendor Comparison Guide 2026', href: '/enterprise-ai-vendor-comparison-guide-2026', description: 'Compare core vendor categories before formal procurement starts.', category: 'guide' },
          { title: 'Enterprise AI Vendor RFP Template 2026', href: '/enterprise-ai-vendor-rfp-template-2026', description: 'Collect comparable answers across procurement, security, and architecture.', category: 'guide' },
          { title: 'AI Vendor Due Diligence Checklist 2026', href: '/ai-vendor-due-diligence-checklist-enterprise-2026', description: 'Verify vendor claims before final scoring.', category: 'guide' },
          { title: 'Enterprise AI Vendor Shortlist Scorecard 2026', href: '/enterprise-ai-vendor-shortlist-scorecard-2026', description: 'Convert weighted assumptions into shortlist rankings.', category: 'tools' },
          { title: 'Enterprise AI Vendor Pricing Guide 2026', href: '/enterprise-ai-vendor-pricing-guide-2026', description: 'Stress-test pricing and contract assumptions before approval.', category: 'guide' },
          { title: 'Enterprise AI Vendor Pilot Evaluation Checklist 2026', href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026', description: 'Validate acceptance criteria before production rollout.', category: 'tools' },
          { title: 'SitePilot Methodology', href: '/methodology', description: 'See how SitePilot keeps vendor evaluation evidence-first.', category: 'guide' },
        ]} />
      </main>
    </div>
  )
}
