import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LayoutDashboard,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Tools Usage Tracking Dashboard 2026 | SitePilot'
const pageDescription =
  'Track enterprise AI tool adoption, cost, ROI, feature overlap, and alert priority in one dashboard before renewing licenses or expanding the stack.'
const pageUrl = 'https://sitepilot.co/ai-tools-usage-tracking-dashboard-2026'

const metadataConfig: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'enterprise AI tool tracking',
    'usage monitoring',
    'cost optimization dashboard',
    'AI investment ROI',
    'enterprise tool management',
    'budget optimization',
    'usage analysis',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: 'An enterprise AI tools usage tracking page covering adoption, wasted spend, alert levels, ROI examples, and rollout paths.',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: 'An enterprise AI usage dashboard for measuring adoption, wasted spend, feature overlap, ROI, and rollout decisions.',
  },
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
const heroStats = [
  { value: '87%', label: 'Illustrative planning assumption: enterprises unable to measure AI tool ROI accurately' },
  { value: '44%', label: 'Illustrative budget savings scenario' },
  { value: '467%', label: 'Illustrative first-year ROI scenario' },
  { value: '3.2 months', label: 'Illustrative payback scenario' },
]

const dashboardSignals = [
  'Without usage data, so-called tool portfolio optimization is usually just budget cutting by instinct.',
  'If nobody tracks overlap, enterprises pay for three similar tools at once and still call it digital maturity.',
  'A tracking dashboard is not there to look impressive. It exists to justify cancellation, consolidation, training, and expansion decisions.',
  'If nobody uses the tool after launch, even the cheap one is expensive. The logic is brutal but simple.',
]

const problemCards = [
  {
    title: 'Illustrative 37% budget waste scenario',
    description: 'Illustrative usage assumption of 31% shows how overlapping functionality and idle licenses can eat the budget.',
    icon: AlertTriangle,
  },
  {
    title: 'Weak data foundation',
    description: 'Illustrative 87% planning assumption: enterprises may lack accurate adoption, ROI, or cross-team usage data.',
    icon: BarChart3,
  },
  {
    title: 'Hidden costs stay high',
    description: 'Illustrative $2,400-per-tool annual hidden-cost scenario covering training, integration, and maintenance.',
    icon: Shield,
  },
]

const trackingMatrix = [
  {
    title: 'High-usage tools',
    range: '>70%',
    note: 'Keep and expand these tools. Review whether they justify deeper integrations or upgraded licenses.',
    tone: 'border-indigo-100 bg-indigo-50/80 text-indigo-800',
  },
  {
    title: 'Mid-usage tools',
    range: '30-70%',
    note: 'Optimize training, templates, and workflows before deciding whether to cut them.',
    tone: 'border-amber-100 bg-amber-50/80 text-amber-800',
  },
  {
    title: 'Low-usage tools',
    range: '<30%',
    note: 'Evaluate replacement, consolidation, or cancellation first. Do not keep carrying them passively.',
    tone: 'border-rose-100 bg-rose-50/80 text-rose-800',
  },
]

const alertLevels = [
  {
    title: 'High risk',
    note: 'Usage below 20% plus high cost means immediate action',
    tone: 'border-rose-100 bg-rose-50/80 text-rose-800',
  },
  {
    title: 'Moderate risk',
    note: 'Usage between 20% and 50% plus mid-range cost means build an optimization plan',
    tone: 'border-amber-100 bg-amber-50/80 text-amber-800',
  },
  {
    title: 'Low risk',
    note: 'Usage above 50% plus reasonable cost means maintain and keep monitoring',
    tone: 'border-indigo-100 bg-indigo-50/80 text-indigo-800',
  },
]

const beforeItems = [
  'Illustrative scenario: 23 AI tool subscriptions with annual cost of $127,000',
  'Illustrative scenario: usage at 31% with heavy feature overlap',
  'Illustrative scenario: training cost of $18,000 per year with high employee confusion',
  'Illustrative scenario: 120 hours of IT maintenance work each month',
]

const afterItems = [
  'Illustrative scenario: 9 core tools with annual cost of $71,000, a 44% reduction',
  'Illustrative scenario: usage raised to 78% with a tighter functional stack',
  'Illustrative scenario: training cost cut to $6,000 per year with satisfaction at 8.7 out of 10',
  'Illustrative scenario: IT maintenance reduced to 45 hours each month',
]

const serviceCards = [
  {
    title: '30-day free trial',
    price: '$0',
    note: 'Limited-time free offer',
    features: ['Full dashboard experience', 'Basic implementation guidance', 'Usage analysis report', 'Initial optimization recommendations'],
    cta: 'Start the free trial',
    href: '/ai-roi-calculator',
    featured: false,
  },
  {
    title: 'Full enterprise implementation',
    price: '$15,000 - $50,000',
    note: 'Priced by company size',
    features: ['Six months of implementation support', 'Custom tracking metric design', 'Team training and change management', 'Quarterly optimization reviews'],
    cta: 'Book an enterprise consultation',
    href: '/ai-roi-calculator',
    featured: true,
  },
]

export default function AIToolsUsageTrackingDashboardPage() {
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
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI usage tracking 2026
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI Tools Usage Tracking
                  <span className="brand-gradient-text block">Stop mistaking instinct for ROI.</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Usage tracking for enterprise AI tools should measure adoption, cost, ROI, feature overlap, and alert priority together so budget optimization can drive operating decisions.
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                    Get a free ROI estimate
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#case-study" className="btn-secondary inline-flex items-center gap-2">
                    View the case study
                  </a>
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
                        <div className="mb-1 text-sm text-slate-500">Dashboard logic</div>
                        <div className="text-xl font-semibold text-slate-950">Four hard calls</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Data before intuition
                      </div>
                    </div>

                    <div className="space-y-3">
                      {dashboardSignals.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#635bff]" />
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

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Problem framing</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Tracking is not a nice-to-have
              <span className="brand-gradient-text block">It is where budget governance starts.</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              The original problem statement, research numbers, and optimization direction all remain. They are simply organized into clearer decision cards without the older overdesigned enterprise visual style.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {problemCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="page-card p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                    <Icon className="h-5 w-5 text-[#635bff]" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{card.title}</h3>
                  <p className="leading-7 text-slate-600">{card.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2 mb-16">
          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <Activity className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Usage monitoring matrix</h2>
            </div>
            <div className="space-y-4">
              {trackingMatrix.map((item) => (
                <div key={item.title} className={`rounded-2xl border px-4 py-4 ${item.tone}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="mt-1 text-sm opacity-80">{item.note}</div>
                    </div>
                    <div className="shrink-0 rounded-full border border-current/15 bg-white/60 px-3 py-1 text-xs font-semibold">
                      {item.range}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <AlertTriangle className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Smart alerting system</h2>
            </div>
            <div className="space-y-4">
              {alertLevels.map((item) => (
                <div key={item.title} className={`rounded-2xl border px-4 py-4 ${item.tone}`}>
                  <div className="font-semibold">{item.title}</div>
                  <div className="mt-1 text-sm opacity-80">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="case-study" className="mb-16 scroll-mt-28">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Case study</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Illustrative case study: a 500-person company
              <span className="brand-gradient-text block">Scenario: from 23 tools down to 9 core tools.</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              The most valuable part of the page is not the headline. It is the before-and-after comparison: cost, usage, training spend, and maintenance hours are all there. That is what makes the page usable for actual decisions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mb-6">
            <div className="page-card rounded-[1.8rem] border border-rose-100 bg-white p-8">
              <div className="mb-6 inline-flex rounded-full border border-rose-100 bg-rose-50/80 px-3 py-1 text-xs font-semibold text-rose-700">
                Before implementation
              </div>
              <div className="space-y-3">
                {beforeItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card rounded-[1.8rem] border border-indigo-100 bg-white p-8">
              <div className="mb-6 inline-flex rounded-full border border-indigo-100 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700">
                Illustrative results scenario after six months
              </div>
              <div className="space-y-3">
                {afterItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#635bff]" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ['467%', 'Illustrative total ROI scenario in year one'],
                ['3.2 months', 'Illustrative payback scenario'],
                ['$84,000', 'Illustrative annual net benefit scenario'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center">
                  <div className="mb-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950">{value}</div>
                  <div className="text-sm text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] mb-16">
          <div className="page-card-glow p-8 md:p-12 surface-muted">
            <div className="max-w-3xl">
              <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">ROI prompt</div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                If you want to know whether the dashboard pays off
                <span className="brand-gradient-text block">Start by opening the tool ledger you already have.</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                The original page routed readers into the ROI calculator, and that path still makes sense. Once the tracking logic is clear, the next step is to quantify your own savings opportunity instead of holding another abstract meeting.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {[
                  ['10-50', 'Smaller teams'],
                  ['50-200', 'Mid-sized teams'],
                  ['200+', 'Large enterprises'],
                  ['44%', 'Illustrative savings-rate scenario'],
                ].map(([value, label]) => (
                  <div key={label} className="page-card bg-white/90 p-4 text-center">
                    <div className="mb-1 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{value}</div>
                    <div className="text-sm text-slate-600">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                  Calculate ROI for free
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ai-tools-cost-optimization-enterprise-2026" className="btn-secondary">
                  Review the cost optimization guide
                </Link>
              </div>
            </div>
          </div>

          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <LayoutDashboard className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Related paths</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  href: '/ai-roi-calculator',
                  title: 'AI ROI Calculator',
                  description: 'Model usage, cost, and payback in the same framework.',
                },
                {
                  href: '/ai-tools-cost-optimization-enterprise-2026',
                  title: 'AI Tools Cost Optimization Guide',
                  description: 'Tracking finds the issue, and optimization is what saves the money.',
                },
              ].map((item) => (
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
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Implementation options</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Implementation should be tiered
              <span className="brand-gradient-text block">Not every team should buy the full program on day one.</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              The original page offered a free trial tier and a full enterprise implementation tier, and that structure stays because it matches reality. Validate first, then expand. Do not blow up process and budget in the first move.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className={`page-card relative p-8 ${card.featured ? 'border-indigo-200 shadow-[0_24px_80px_-32px_rgba(99,91,255,0.30)]' : ''}`}
              >
                {card.featured ? (
                  <div className="absolute -top-3 left-8 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    Recommended
                  </div>
                ) : null}
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{card.title}</h3>
                  <div className="text-lg font-semibold text-[#635bff]">{card.price}</div>
                  <div className="mt-1 text-sm text-slate-500">{card.note}</div>
                </div>
                <div className="mb-8 space-y-3">
                  {card.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-slate-700">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#635bff]" />
                        <span>{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href={card.href}
                  className={card.featured ? 'btn-brand inline-flex items-center gap-2' : 'btn-secondary inline-flex items-center gap-2'}
                >
                  {card.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#635bff]" />
                Final CTA
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                Do not let an illustrative 37% of the AI budget evaporate.
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                The optimization logic is an illustrative $25,000 planning scenario, not a validated study across 500 companies. Replace every input with your own ledger before making a renewal decision.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                Get a free ROI estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/ai-tools-cost-optimization-enterprise-2026" className="btn-secondary">
                Review the full cost optimization guide
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
