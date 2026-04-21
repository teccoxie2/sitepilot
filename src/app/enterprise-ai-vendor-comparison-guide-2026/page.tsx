import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, BarChart3, Brain, CheckCircle2, DollarSign, Shield, Sparkles, Users, Zap } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Vendor Comparison Guide 2026 | SitePilot'
const pageDescription =
  'Enterprise AI vendors in 2026 should be compared on architecture, security, deployment model, pricing mechanics, and operational fit so buying teams can move from shortlist to pilot with fewer mistakes.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-vendor-comparison-guide-2026'

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

const frameworkCards = [
  {
    title: 'Strategic fit',
    weight: '15%',
    note: 'Start with business use case, executive sponsor, roadmap relevance, and industry fit.',
  },
  {
    title: 'Technical architecture',
    weight: '15%',
    note: 'Check deployment model, integration effort, latency, and observability support.',
  },
  {
    title: 'Data governance',
    weight: '20%',
    note: 'Review training usage policy, residency, retention, deletion, and export controls.',
  },
  {
    title: 'Security and access',
    weight: '15%',
    note: 'Validate SSO, MFA, RBAC, audit logs, and incident response behavior.',
  },
  {
    title: 'Commercial model',
    weight: '10%',
    note: 'Price transparency, pilot-to-production cost, support minimums, and exit terms all matter.',
  },
  {
    title: 'Implementation speed',
    weight: '10%',
    note: 'Measure time to value, onboarding quality, internal staffing, and change management effort.',
  },
  {
    title: 'Compliance readiness',
    weight: '10%',
    note: 'Look for privacy obligations, sector requirements, reviewability, and governance evidence.',
  },
  {
    title: 'Risk profile',
    weight: '5%',
    note: 'Subprocessors, vendor concentration, lock-in exposure, and rollback feasibility should be explicit.',
  },
]

const questions = [
  {
    q: 'What should eliminate a vendor before weighted scoring begins?',
    a: 'Unclear training usage, weak identity controls, missing auditability, no workable export path, or unresolved residency requirements should be treated as fail conditions before feature scoring starts.',
  },
  {
    q: 'What makes pricing data decision-grade instead of sales-grade?',
    a: 'You need contract mechanics, usage assumptions, implementation scope, support minimums, and pilot-to-production cost behavior. List prices alone are not enough.',
  },
  {
    q: 'How should teams reduce lock-in risk during selection?',
    a: 'Check export rights, deletion workflows, API coverage, substitution options, and rollback practicality before approval. Migration pain discovered after signature is already too late.',
  },
  {
    q: 'When does a pilot count as procurement evidence?',
    a: 'When it tests a live workflow, validates security and governance controls in the target environment, and proves the commercial model still holds under real usage.',
  },
  {
    q: 'What should this comparison page do in the larger cluster?',
    a: 'It should narrow the shortlist, not close the deal. The actual buying decision still depends on RFP answers, due diligence findings, scorecard weighting, pricing review, and pilot evidence.',
  },
  {
    q: 'Why keep the procurement path tightly linked?',
    a: 'Because comparison content without follow-through creates vanity research. Methodology, comparison, RFP, due diligence, scorecard, pricing, and pilot pages should operate as one decision system.',
  },
]

const resourceLinks = [
  { href: '/enterprise-ai-vendor-rfp-template-2026', title: 'Enterprise AI Vendor RFP Template 2026', description: 'Turn unresolved RFP answers into explicit pilot test cases.' },
  { href: '/ai-vendor-due-diligence-checklist-enterprise-2026', title: 'AI Vendor Due Diligence Checklist 2026', description: 'Address underlying security risks before running the pilot.' },
  { href: '/enterprise-ai-vendor-shortlist-scorecard-2026', title: 'Enterprise AI Vendor Shortlist Scorecard 2026', description: 'Score final candidates against the same decision model.' },
  { href: '/enterprise-ai-vendor-pricing-guide-2026', title: 'Enterprise AI Vendor Pricing Guide 2026', description: 'Check whether the commercial model survives real usage.' },
  { href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026', title: 'Enterprise AI Vendor Pilot Evaluation Checklist 2026', description: 'Use measurable acceptance criteria before production approval.' },
]

export default function EnterpriseAIVendorComparisonGuide2026() {
  return (
    <>
      <SchemaMarkup
        type="article"
        data={{
          headline: pageTitle,
          description: pageDescription,
          url: pageUrl,
          datePublished: '2026-04-20',
          dateModified: '2026-04-20',
        }}
      />

      <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
          <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
          <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
          <section className="page-hero relative">
            <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-3xl">
                  <div className="page-pill mb-6">
                    <Sparkles className="h-4 w-4 text-[#635bff]" />
                    2026 enterprise vendor comparison
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    Enterprise AI Vendor Comparison Guide 2026
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    Enterprise AI vendors in 2026 should be compared on architecture, security, deployment model, pricing mechanics, and operational fit so buying teams can move from shortlist to pilot with fewer mistakes.
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-brand inline-flex items-center gap-2">
                      Open RFP template
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="btn-secondary inline-flex items-center gap-2">
                      Review due diligence
                    </Link>
                    <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="btn-secondary inline-flex items-center gap-2">
                      Go to pilot checklist
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                    {[
                      'Treat demos as input, not evidence',
                      'Separate weighted scores from pass/fail controls',
                      'Keep procurement, security, and finance in the same loop',
                      'Use the full cluster, not a single page, to make the call',
                    ].map((item) => (
                      <div key={item} className="page-card flex items-start gap-3 bg-white/90 p-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span className="text-sm leading-6 text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                  <div className="relative page-card-glow p-5 md:p-6">
                    <div className="page-card p-6 bg-white/95">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-sm text-slate-500 mb-1">Evaluation frame</div>
                          <div className="text-xl font-semibold text-slate-950">Vendor selection matrix</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          Stripe-ish system
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          ['Strategic fit', 'Does the platform solve the right business problem?'],
                          ['Technical risk', 'Can it integrate, scale, and stay observable?'],
                          ['Commercial fit', 'Does the pricing model survive real usage?'],
                          ['Governance fit', 'Can security and compliance teams approve it?'],
                        ].map(([title, note]) => (
                          <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                            <div className="flex items-center justify-between gap-4">
                              <div>
                                <div className="font-semibold text-slate-950">{title}</div>
                                <div className="text-sm text-slate-500 mt-1">{note}</div>
                              </div>
                              <Brain className="h-5 w-5 shrink-0 text-indigo-500" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-16">
            {frameworkCards.map((card) => (
              <div key={card.title} className="page-card p-6">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 mb-5">
                  {card.weight}
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{card.title}</h2>
                <p className="text-slate-600 leading-relaxed">{card.note}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] mb-16">
            <div className="page-card-glow p-8 md:p-12 surface-muted">
              <div className="max-w-3xl">
                <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Procurement logic</div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                  Comparison is the middle of the funnel.
                  <span className="block brand-gradient-text">Not the end of the decision.</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Use this page to cut weak vendors out early, then carry the shortlist through the RFP, due diligence, scorecard, pricing, and pilot pages before making a final call. Otherwise you are just collecting expensive opinions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/methodology" className="btn-secondary">See methodology</Link>
                  <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-brand inline-flex items-center gap-2">
                    Review shortlist scorecard
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/enterprise-ai-vendor-pricing-guide-2026" className="btn-secondary">Check pricing</Link>
                </div>
              </div>
            </div>

            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <BarChart3 className="h-4 w-4 text-sky-600" />
                Related internal resources
              </div>
              <div className="mt-5 space-y-3">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
                  >
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 text-center mb-8">
              Questions buying teams should answer before scoring
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {questions.map((faq) => (
                <div key={faq.q} className="page-card p-6 md:p-7">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-indigo-50 p-2 text-indigo-600">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950 mb-3">{faq.q}</h3>
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="page-card p-8 md:p-10">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6 text-center">
              Use BOFU logic, not feature theater
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-950 mb-4">What comparison should do</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Filter the field to realistic vendors</li>
                  <li>• Surface architecture and governance differences</li>
                  <li>• Expose commercial trade-offs early</li>
                  <li>• Set up the next BOFU step</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-950 mb-4">What comparison should not do</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Replace due diligence</li>
                  <li>• Pretend demos are proof</li>
                  <li>• Hide lock-in behind feature lists</li>
                  <li>• Ignore pilot validation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-950 mb-4">Next decision steps</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Collect comparable answers via RFP</li>
                  <li>• Run legal, security, and data diligence</li>
                  <li>• Weight the shortlist scorecard</li>
                  <li>• Validate reality through pilot evidence</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50/70 p-6">
              <h4 className="font-semibold text-slate-950 mb-2">Decision rule</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                If a vendor looks strong on feature breadth but weak on residency, export rights, RBAC, auditability, or rollback feasibility, the procurement system should make that failure obvious before contract approval.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
