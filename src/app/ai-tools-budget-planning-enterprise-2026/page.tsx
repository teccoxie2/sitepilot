import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'
import Link from 'next/link'
import { marked } from 'marked'
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Tools Budget Planning Strategy Guide 2026 | SitePilot'
const pageDescription =
  'An enterprise AI tools budget planning framework built from data across 1,000+ companies. Helps teams maximize ROI, reduce an average of $680K in avoidable waste, and allocate budget by company size with stronger cost controls.'
const pageUrl = 'https://sitepilot.co/ai-tools-budget-planning-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI tools budget',
    'enterprise AI investment',
    'ROI modeling',
    'budget planning',
    'IT budget allocation',
    'AI tool costs',
    'enterprise digital budget',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Enterprise AI Tools Budget Planning Strategy Guide 2026',
    description: 'A practical AI tools budget planning method for teams that need stronger returns from enterprise investment.',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Tools Budget Planning Strategy Guide 2026',
    description: 'A practical AI tools budget planning method for teams that need stronger returns from enterprise investment.',
  },
}

marked.setOptions({ breaks: true, gfm: true })

const heroStats = [
  { value: '18-25%', label: 'Share of IT budget allocated to AI tools' },
  { value: '47%', label: 'Budget growth trend in 2026' },
  { value: '$680K', label: 'Average avoidable annual budget waste' },
  { value: '12-18 months', label: 'Typical ROI payback window' },
]

const planningSignals = [
  'Audit the current tool stack before adding new software so overlapping licenses do not eat the budget.',
  'Include training, integration, maintenance, and governance in the budget instead of staring only at subscription fees.',
  'ROI should connect to time saved, quality gains, and revenue impact, not fictional vanity numbers.',
  'Budget planning should be designed alongside risk, compliance, and usage tracking or it drifts out of reality.',
]

const budgetBands = [
  {
    title: 'Startup teams',
    team: '50-100 employees',
    budget: '$25K-$50K / year',
    split: [
      'Content creation tools 40%',
      'Productivity tools 30%',
      'Analytics tools 20%',
      'Other or buffer 10%',
    ],
    roi: 'Target 200% ROI within 18 months',
  },
  {
    title: 'Mid-market enterprises',
    team: '500-1,000 employees',
    budget: '$150K-$400K / year',
    split: [
      'Enterprise productivity platforms 35%',
      'Specialized content tools 25%',
      'Data analysis and insight tools 25%',
      'Integration and security 15%',
    ],
    roi: 'Target 150% ROI within 12 months',
  },
  {
    title: 'Large enterprises',
    team: '5,000+ employees',
    budget: '$800K-$2.5M / year',
    split: [
      'Core AI platform investment 40%',
      'Function-specific tools 30%',
      'Security and compliance 20%',
      'Training and support 10%',
    ],
    roi: 'Target 300% ROI within 8-12 months',
  },
]

const roiCards = [
  {
    title: 'Manufacturing',
    note: '2,000-employee company',
    investment: '$450,000',
    returnValue: '$1,350,000',
    outcome: 'Production efficiency +15%, defect rate -78%',
  },
  {
    title: 'Financial services',
    note: '5,000-employee company',
    investment: '$800,000',
    returnValue: '$2,400,000',
    outcome: 'Support costs -40%, risk losses -60%',
  },
  {
    title: 'Retail ecommerce',
    note: '1,200-employee company',
    investment: '$280,000',
    returnValue: '$980,000',
    outcome: 'Conversion rate +25%, inventory costs -30%',
  },
]

const relatedLinks = [
  {
    href: '/ai-tools-cost-benefit-analysis-2026',
    title: 'AI Tools Cost-Benefit Analysis',
    description: 'Review budget planning and return validation in the same decision flow.',
  },
  {
    href: '/ai-tools-risk-assessment-enterprise-2026',
    title: 'AI Tools Risk Assessment Framework',
    description: 'Check risk before budget approval so savings do not turn into incidents.',
  },
  {
    href: '/ai-tools-security-compliance-checklist-2026',
    title: 'Security and Compliance Checklist',
    description: 'Procurement and governance need to move together, not as an afterthought.',
  },
]

export default function AIToolsBudgetPlanningPage() {
  const contentPath = join(process.cwd(), 'content', 'ai-tools-budget-planning-enterprise-2026.md')
  const fileContent = readFileSync(contentPath, 'utf-8')
  const htmlContent = marked.parse(fileContent) as string

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-11"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI budget planning 2026
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI Tools Budget Planning
                  <span className="brand-gradient-text block">Spend with clarity before you talk transformation.</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Enterprise AI budget planning has to account for investment scale, overlapping capabilities, hidden training and integration costs, payback windows, and governance requirements. This page keeps the original budget framework, ROI logic, and internal resource paths while translating the experience into the current light Stripe-ish system.
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-tools-cost-benefit-analysis-2026" className="btn-brand inline-flex items-center gap-2">
                    Review cost-benefit analysis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-tools" className="btn-secondary inline-flex items-center gap-2">
                    Return to the AI tools hub
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {heroStats.map((item) => (
                    <div key={item.label} className="page-card bg-white/90 p-4">
                      <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
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
                        <div className="text-sm text-slate-500 mb-1">Planning baseline</div>
                        <div className="text-xl font-semibold text-slate-950">Four hard metrics for budget design</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Execution-ready
                      </div>
                    </div>

                    <div className="space-y-3">
                      {planningSignals.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                            <p className="text-sm leading-6 text-slate-600">{item}</p>
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

        <section className="grid gap-6 md:grid-cols-3 mb-16">
          {budgetBands.map((band) => (
            <div key={band.title} className="page-card p-8">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 mb-5">
                <Briefcase className="h-3.5 w-3.5 mr-2" />
                {band.team}
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-2">{band.title}</h2>
              <div className="text-3xl font-semibold tracking-[-0.04em] text-[#635bff] mb-5">{band.budget}</div>
              <div className="space-y-3 mb-6">
                {band.split.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 px-4 py-3 text-sm font-medium text-indigo-700">
                {band.roi}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">ROI benchmarks</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              A budget is only as good as its returns
              <span className="brand-gradient-text block">The numbers matter more than the story around them.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The industry examples, investment levels, and payback logic from the original page all remain. They are simply reorganized into cleaner decision cards so readers can see budget size, return profile, and outcome variables at a glance.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {roiCards.map((card) => (
              <div key={card.title} className="page-card p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#635bff]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-950">{card.title}</div>
                    <div className="text-sm text-slate-500">{card.note}</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500">Investment</span>
                    <span className="font-semibold text-slate-950">{card.investment}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500">Annual return</span>
                    <span className="font-semibold text-indigo-700">{card.returnValue}</span>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-600">
                  {card.outcome}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr] mb-16">
          <div className="page-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Full budget article</h2>
            </div>
            <div
              className="prose prose-lg max-w-none
              prose-headings:text-slate-950 prose-headings:font-semibold
              prose-h1:text-4xl prose-h1:tracking-[-0.04em]
              prose-h2:text-2xl prose-h2:tracking-[-0.03em] prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:text-slate-900 prose-h3:mt-8 prose-h3:mb-3
              prose-h4:text-base prose-h4:text-slate-900 prose-h4:mt-6 prose-h4:mb-2
              prose-p:text-slate-600 prose-p:leading-8
              prose-strong:text-slate-950
              prose-a:text-[#635bff] hover:prose-a:text-[#4f46e5]
              prose-ul:text-slate-600 prose-ol:text-slate-600
              prose-li:my-1
              prose-blockquote:border-l-[#635bff] prose-blockquote:bg-indigo-50/50 prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:text-slate-700
              prose-code:text-[#635bff] prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-2xl
              prose-table:block prose-table:overflow-x-auto prose-th:bg-slate-50 prose-th:text-slate-900 prose-td:text-slate-600 prose-th:border prose-td:border prose-th:border-slate-200 prose-td:border-slate-200"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>

          <div className="space-y-6">
            <div className="page-card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Implementation reminders</h2>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Underestimating hidden costs is the most common failure mode. Training, migration, integration, and support all need their own line items.</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Budget governance needs a cross-functional mechanism or sales, marketing, and operations will all buy overlapping tools on their own.</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Do not skip quarterly reviews. A budget is a living model, not a static snapshot taken in January.</div>
              </div>
            </div>

            <div className="page-card p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Related internal resources</h2>
              </div>
              <div className="space-y-3">
                {relatedLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70">
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="page-card-glow p-8 surface-muted">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Next step</h2>
              </div>
              <p className="text-slate-600 leading-7 mb-6">
                If you are planning an AI tool portfolio, start by listing current licenses, active usage, overlap across departments, and expected time savings. Without those four inputs, the budget model usually becomes a polished fiction.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-tools-cost-benefit-analysis-2026" className="btn-brand inline-flex items-center gap-2">
                  Run the cost-benefit analysis
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ai-tools-risk-assessment-enterprise-2026" className="btn-secondary">
                  Continue to risk assessment
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
