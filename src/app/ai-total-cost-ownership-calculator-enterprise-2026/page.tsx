import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  Clock,
  DollarSign,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Total Cost of Ownership Calculator 2026 | SitePilot'
const pageDescription =
  'Enterprise AI total cost of ownership should include software, infrastructure, implementation, training, maintenance, compliance, and hidden organizational drag instead of pretending the subscription line item is the whole story.'
const pageUrl = 'https://sitepilot.co/ai-total-cost-ownership-calculator-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI total cost ownership',
    'AI TCO calculator',
    'enterprise AI costs',
    'AI financial planning',
    'AI implementation budget',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: '5-year enterprise AI TCO planning with hidden costs, ROI framing, and financial decision support.',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: 'Enterprise AI TCO planning page with hidden costs, break-even framing, and related financial tools.',
  },
}

const heroStats = [
  { value: '$670K', label: 'Example year-one total cost' },
  { value: '$1.405M', label: 'Example five-year TCO' },
  { value: '340%', label: 'Example ROI' },
  { value: '18 months', label: 'Example payback period' },
]

const tcoSignals = [
  'The most misleading part of AI projects is how often teams stare at license fees and ignore the organizational cost behind them.',
  'If training, governance, compatibility, and maintenance are missing from the model, the budget is usually just optimism in spreadsheet form.',
  'TCO is not only a finance number. It determines whether the project becomes a strategic asset or an expensive prop.',
  'Calculate full cost before you start arguing about ROI. Reversing that order usually ends badly.',
]

const initialCosts = [
  'AI software licenses',
  'Infrastructure and hardware',
  'Implementation services',
  'Training and change management',
]

const ongoingCosts = [
  'Maintenance and support',
  'Cloud and compute costs',
  'Additional staffing and ongoing training',
  'Compliance and security governance',
]

const hiddenCosts = [
  {
    title: 'Hidden technical costs',
    items: ['Data migration and integration', 'Legacy-system compatibility work', 'Security and compliance upgrades', 'Monitoring and observability tooling'],
  },
  {
    title: 'Hidden organizational costs',
    items: ['Employee resistance and attrition', 'Process redesign', 'Extended training cycles', 'Short-term productivity decline'],
  },
]

const optimizationStrategies = [
  {
    title: 'Reduce upfront cost',
    icon: Clock,
    items: [
      'Use phased implementation so one-time spend is broken into controlled waves.',
      'Prefer a cloud-first setup to avoid committing too early to heavy fixed assets.',
    ],
  },
  {
    title: 'Maximize ROI',
    icon: TrendingUp,
    items: [
      'Prioritize high-impact workflows instead of trying to launch everything at once.',
      'Keep reviewing the rollout instead of treating the first launch as the final answer.',
    ],
  },
]

const relatedLinks = [
  {
    href: '/ai-implementation-cost-calculator-enterprise-2026',
    title: 'Implementation cost calculator',
    description: 'Model the upfront implementation spend first.',
  },
  {
    href: '/ai-automation-roi-measurement-2026',
    title: 'AI ROI measurement',
    description: 'Keep measuring automation returns after launch.',
  },
]

export default function AITotalCostOwnershipCalculatorPage() {
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
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI TCO planning 2026
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI Total Cost of Ownership
                  <span className="brand-gradient-text block">Do not stop at the subscription line item.</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Enterprise AI total cost of ownership should include software, infrastructure, implementation, training, maintenance, compliance, and hidden organizational drag instead of pretending the subscription line item is the whole story. This page keeps the original TCO structure, five-year cost view, optimization strategy, and internal links while aligning the layout to the current light Stripe-ish UI.
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-implementation-cost-calculator-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                    Review implementation costs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-automation-roi-measurement-2026" className="btn-secondary inline-flex items-center gap-2">
                    Review ROI measurement
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {heroStats.map((item) => (
                    <div key={item.label} className="page-card bg-white/90 p-4">
                      <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">Financial baseline</div>
                        <div className="text-xl font-semibold text-slate-950">Four non-negotiable checks</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Full-cost perspective
                      </div>
                    </div>
                    <div className="space-y-3">
                      {tcoSignals.map((item) => (
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

        <section className="grid gap-6 lg:grid-cols-2 mb-16">
          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <Calculator className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Upfront investment costs</h2>
            </div>
            <div className="space-y-4">
              {initialCosts.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <DollarSign className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Annual ongoing costs</h2>
            </div>
            <div className="space-y-4">
              {ongoingCosts.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3 mb-16">
          {[
            { title: 'Year 1 costs', icon: DollarSign, tone: 'bg-indigo-50/80 border-indigo-100', lines: ['Upfront investment: $425,000', 'Ongoing costs: $245,000', 'Total: $670,000'] },
            { title: '5-year TCO', icon: BarChart3, tone: 'bg-sky-50/80 border-sky-100', lines: ['Total investment: $1,405,000', 'Average annual cost: $281,000', 'ROI: 340%'] },
            { title: 'Break-even', icon: TrendingUp, tone: 'bg-violet-50/80 border-violet-100', lines: ['Payback period: 18 months', 'Year 3+ net benefit: $890K', 'NPV: $2.4M'] },
          ].map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className={`page-card border p-8 ${card.tone}`}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/70">
                  <Icon className="h-5 w-5 text-[#635bff]" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{card.title}</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  {card.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            )
          })}
        </section>

        <section className="mb-16 page-card-glow overflow-hidden rounded-[2rem] border border-amber-100 bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-white p-1.5">
          <div className="rounded-[1.8rem] border border-amber-100/80 bg-white/90 p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50">
                <Shield className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Hidden costs to consider</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {hiddenCosts.map((group) => (
                <div key={group.title} className="page-card p-6">
                  <h3 className="mb-4 text-lg font-semibold text-slate-950">{group.title}</h3>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] mb-16">
          <div className="page-card-glow p-8 md:p-12 surface-muted">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Optimization strategies</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Lowering cost and lifting ROI
              <span className="brand-gradient-text block">Both depend on doing the work in the right order.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              The original optimization sequence stays intact: control initial spend first, then focus on high-impact use cases, then optimize continuously. Without that order, many teams burn a lot of real money chasing the phrase "AI transformation."
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {optimizationStrategies.map((group) => {
                const Icon = group.icon
                return (
                  <div key={group.title} className="page-card bg-white/90 p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                      <Icon className="h-5 w-5 text-[#635bff]" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-slate-950">{group.title}</h3>
                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <Target className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Related AI financial tools</h2>
            </div>
            <div className="space-y-3">
              {relatedLinks.map((item) => (
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

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
              <div className="mb-3 flex items-center gap-3">
                <Users className="h-5 w-5 text-[#635bff]" />
                <h3 className="text-lg font-semibold text-slate-950">Next move</h3>
              </div>
              <p className="text-sm leading-7 text-slate-600">
                If you want a real TCO model, pull software, hardware, implementation, training, maintenance, security, compliance, and workforce variability into the same sheet. Miss one column and the model turns into self-soothing.
              </p>
            </div>
          </div>
        </section>

        <section className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Calculator className="h-4 w-4 text-[#635bff]" />
                CTA
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                Need expert TCO analysis?
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                The underlying message stays the same: if your team is modeling enterprise AI finances, do not guess alone. At minimum, look at TCO and ROI in the same frame or reality will likely tear the budget approval apart.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/ai-implementation-cost-calculator-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                Start with implementation costs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/ai-automation-roi-measurement-2026" className="btn-secondary">
                Review ROI measurement
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
