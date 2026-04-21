import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

const pageTitle = 'Enterprise AI Vendor Evaluation Methodology 2026 | SitePilot'
const pageDescription =
  'How SitePilot evaluates enterprise AI vendors using evidence-first research, weighted decision criteria, and procurement-ready validation.'
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

const relatedLinks = [
  {
    title: 'Enterprise AI Vendor Comparison Guide 2026',
    href: '/enterprise-ai-vendor-comparison-guide-2026',
    description: 'Frame the category before formal procurement begins.',
  },
  {
    title: 'Enterprise AI Vendor RFP Template 2026',
    href: '/enterprise-ai-vendor-rfp-template-2026',
    description: 'Collect comparable written answers from vendors.',
  },
  {
    title: 'AI Vendor Due Diligence Checklist 2026',
    href: '/ai-vendor-due-diligence-checklist-enterprise-2026',
    description: 'Validate security, privacy, and architecture claims.',
  },
  {
    title: 'AI Procurement Decision Matrix Tool 2026',
    href: '/ai-procurement-decision-matrix-tool-2026',
    description: 'Turn procurement evidence into weighted ranking logic.',
  },
  {
    title: 'Enterprise AI Vendor Shortlist Scorecard 2026',
    href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
    description: 'Score finalists using documented evidence.',
  },
  {
    title: 'Enterprise AI Vendor Pricing Guide 2026',
    href: '/enterprise-ai-vendor-pricing-guide-2026',
    description: 'Stress-test commercial assumptions before approval.',
  },
  {
    title: 'Enterprise AI Vendor Pilot Evaluation Checklist 2026',
    href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026',
    description: 'Validate live workflow performance before production.',
  },
]

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Research methodology
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Enterprise AI vendor evaluation methodology 2026,
                <span className="brand-gradient-text block">for evidence-first procurement.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                An enterprise AI vendor evaluation methodology is a structured research and decision model used to compare vendors across security, data governance, architecture, pricing, and rollout risk. This page defines how SitePilot ties comparison, RFP, due diligence, scoring, pricing review, and pilot validation into one procurement-ready system.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/enterprise-ai-vendor-comparison-guide-2026" className="btn-brand">
                  Start with the comparison guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-secondary">
                  Open the RFP template
                </Link>
              </div>
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 md:p-10">
                <div className="text-sm text-slate-500 mb-2">Why this exists</div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                  A methodology should eliminate bad vendors.
                </h2>
                <p className="text-slate-600 leading-8 mb-6">
                  The point of methodology is not to sound rigorous. The point is to stop weak vendors from surviving on polished demos, vague legal language, and fake certainty. If a framework cannot eliminate a risky vendor, it is decorative.
                </p>
                <p className="text-slate-600 leading-8">
                  This page also closes the topical authority loop for our procurement cluster by showing how the comparison guide, RFP template, due diligence checklist, decision matrix, shortlist scorecard, pricing guide, and pilot checklist fit together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted relative">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950 mb-8">Core principles</h2>
                <div className="space-y-6">
                  {principles.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                      <h3 className="text-xl font-semibold text-slate-950 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-8">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">What kills a vendor fast</h3>
                  <div className="space-y-4">
                    {[
                      'Unclear data-training usage or retention rules',
                      'No credible SSO, RBAC, or audit-log story',
                      'Weak export, deletion, or rollback path',
                      'Pricing that looks cheap until pilot-to-production scale',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-6 surface-muted">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">Recommended workflow</h3>
                  <ol className="space-y-4">
                    {workflow.map((step, index) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-sm font-semibold text-indigo-700">
                          {index + 1}
                        </span>
                        <span className="text-slate-700 leading-7">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Procurement cluster</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Use the full workflow, not just one document.</h2>
            <p className="page-lead text-lg">
              Each asset below exists to move the buying team from category framing to evidence collection to final validation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="page-card p-7 hover:-translate-y-0.5 transition-transform block">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{link.title}</h3>
                <p className="text-slate-600 leading-7 mb-5">{link.description}</p>
                <div className="inline-flex items-center font-semibold text-[#635bff]">
                  Open asset
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
