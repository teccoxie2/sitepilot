import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, Shield, Sparkles, Target, Workflow } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Tool Shortlist Scorecard Template 2026 | SitePilot'
const pageDescription =
  'An AI tool shortlist scorecard template is a weighted framework for ranking finalists across workflow value, security, data governance, integration fit, operating control, and commercial discipline before purchase.'
const pageUrl = 'https://sitepilot.co/ai-tool-shortlist-scorecard-template-2026'

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
    title: 'Workflow value',
    weight: '20%',
    points: ['Does it remove actual work?', 'Does it reduce review debt?', 'Can teams measure time saved after rollout?'],
  },
  {
    title: 'Output quality',
    weight: '15%',
    points: ['Can the output ship with light editing?', 'Does quality stay stable across use cases?', 'Is hallucination or drift easy to detect?'],
  },
  {
    title: 'Security and access',
    weight: '15%',
    points: ['SSO, MFA, RBAC, audit logging', 'Admin boundaries and team controls', 'Incident response clarity'],
  },
  {
    title: 'Data governance',
    weight: '15%',
    points: ['Training usage policies are explicit', 'Retention and deletion are documented', 'Sensitive data controls are usable'],
  },
  {
    title: 'Integration fit',
    weight: '10%',
    points: ['API or workflow handoff quality', 'Works with the actual stack', 'Does not create brittle manual glue'],
  },
  {
    title: 'Commercial discipline',
    weight: '10%',
    points: ['Pricing is understandable', 'Expansion cost is predictable', 'The contract does not hide obvious traps'],
  },
  {
    title: 'Implementation speed',
    weight: '10%',
    points: ['Time to value is realistic', 'Training burden is acceptable', 'Internal rollout effort is manageable'],
  },
  {
    title: 'Portability and lock-in risk',
    weight: '5%',
    points: ['Exports are practical', 'Switching costs are visible', 'The workflow can survive a vendor change'],
  },
] as const

const operatingRules = [
  'Use the same rubric across every finalist.',
  'Separate hard-stop controls from weighted differentiators.',
  'Score from evidence and test workflows, not demos.',
  'Anything below 3.5 means unresolved buying risk.',
]

const scoreBands = [
  {
    score: '5',
    label: 'Strong fit',
    note: 'Evidence is documented, workflow value is clear, and no major blocker remains for the planned use case.',
  },
  {
    score: '3',
    label: 'Conditional fit',
    note: 'Tool may work, but caveats, missing controls, or process drag still need owners and deadlines.',
  },
  {
    score: '1',
    label: 'Do not buy yet',
    note: 'Core controls fail, value is fuzzy, or the operating model depends on wishful thinking.',
  },
] as const

export default function AIToolShortlistScorecardTemplatePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_22%,#ffffff_50%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[24rem] bg-[radial-gradient(circle_at_22%_22%,rgba(99,91,255,0.05),transparent_24%),radial-gradient(circle_at_76%_26%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_50%_82%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                BOFU buying template
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI Tool Shortlist Scorecard Template 2026,
                <span className="brand-gradient-text block">for ranking tools with evidence.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                An AI tool shortlist scorecard template is a weighted framework for ranking finalists across workflow value, security, data governance, integration fit, operating control, and commercial discipline before purchase. Use it after category research and vendor demos so the final decision reflects actual operational value instead of launch-day theater.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                  Open due diligence checklist
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary">
                  Enterprise vendor scorecard
                </Link>
                <Link href="/ai-tools-risk-assessment-enterprise-2026" className="btn-secondary">
                  Risk assessment guide
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {operatingRules.map((item) => (
                  <div key={item} className="page-card flex items-start gap-3 px-4 py-4">
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
                      <div className="text-sm text-slate-500 mb-1">Scorecard logic</div>
                      <div className="text-xl font-semibold text-slate-950">Buying system, not vibe check</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      8 dimensions
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Evidence first', 'The score should reflect workflow tests, controls, and contract reality.'],
                      ['Cross-functional', 'Ops, security, procurement, and budget owners all need the same decision frame.'],
                      ['Weighted', 'Not every dimension matters equally, so the rubric needs explicit weighting.'],
                      ['Explainable', 'If the winner cannot be defended in one page, the shortlist is still weak.'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="font-semibold text-slate-950">{title}</div>
                            <div className="text-sm text-slate-500 mt-1">{note}</div>
                          </div>
                          <BarChart3 className="h-5 w-5 shrink-0 text-indigo-500" />
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

      <section className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] mb-16">
          <div className="page-card-glow p-1.5">
            <div className="page-card rounded-[1.6rem] p-7 md:p-8">
              <div className="page-pill mb-4">How to use it</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">Pick finalists. Then score the part that actually matters.</h2>
              <p className="page-lead text-lg mb-4">
                This template is for late-stage evaluation, not broad discovery. Use it after teams narrow the field, complete light workflow tests, and confirm the buying problem. If the shortlist is still full of generic maybes, do not pretend a weighted sheet will save it.
              </p>
              <p className="text-slate-600 leading-7 mb-4">
                The clean sequence is methodology to category comparison to risk review to diligence to shortlist ranking. On SitePilot, that means using the{' '}
                <Link href="/methodology" className="text-[#635bff] hover:underline font-medium">methodology</Link>,{' '}
                <Link href="/best-ai-seo-tools-2026" className="text-[#635bff] hover:underline font-medium">comparison coverage</Link>,{' '}
                <Link href="/ai-tools-risk-assessment-enterprise-2026" className="text-[#635bff] hover:underline font-medium">risk framework</Link>, and{' '}
                <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-[#635bff] hover:underline font-medium">due diligence checklist</Link>{' '}
                before final ranking.
              </p>
              <p className="text-slate-600 leading-7">
                The goal is simple: make the last decision easier to defend. A good scorecard kills weak finalists fast, exposes soft spots in the likely winner, and keeps the team from buying a flashy workflow that creates review debt six weeks later.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="page-card p-6">
              <div className="text-sm text-slate-500 mb-2">Score meaning</div>
              <div className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">Below 3.5 means you still have buying risk.</div>
              <p className="text-sm text-slate-600 leading-6">Do not round uncertainty up into confidence. That is how mediocre tools survive the shortlist.</p>
            </div>
            <div className="page-card-soft p-6">
              <div className="text-sm text-slate-500 mb-3">Core path</div>
              <ul className="space-y-3 text-sm text-slate-700 leading-6">
                {[
                  'Methodology',
                  'Comparison or category page',
                  'Risk and compliance review',
                  'Due diligence checklist',
                  'Shortlist scorecard',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Scoring dimensions</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Eight weighted dimensions for practical tool selection.</h2>
            <p className="page-lead text-lg">
              If the rubric cannot capture workflow value, control, and long-term cost, it is not a buying tool. It is decoration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {dimensions.map((dim) => (
              <div key={dim.title} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8 h-full">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-slate-950">{dim.title}</h3>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 whitespace-nowrap">
                      Weight {dim.weight}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {dim.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-slate-600 leading-7">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#635bff] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] mb-16">
          <div className="page-card p-8 md:p-10">
            <div className="page-pill mb-4 inline-flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#635bff]" />
              Score bands
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">Keep the scoring harsh enough to mean something.</h2>
            <p className="text-slate-600 leading-7">
              Most shortlist sheets fail because every vendor gets a polite 4. That is useless. Force the score to reflect actual gaps, especially around governance, controls, and workflow friction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {scoreBands.map((band) => (
              <div key={band.score} className="page-card p-6">
                <div className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 mb-3">{band.score}</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">{band.label}</div>
                <p className="text-sm text-slate-600 leading-6">{band.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Topical authority loop</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Methodology to risk to shortlist.
                <span className="block brand-gradient-text">That is the buying loop.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                This page closes the BOFU path for AI tool buyers. Start with evaluation logic, move through comparison and diligence, then use the scorecard to rank finalists in one explainable system.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/methodology" className="btn-secondary inline-flex items-center gap-2">
                <Workflow className="h-4 w-4" />
                Methodology
              </Link>
              <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="btn-secondary">
                Due diligence
              </Link>
              <Link href="/ai-tools" className="btn-brand inline-flex items-center gap-2">
                Back to AI hub
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
