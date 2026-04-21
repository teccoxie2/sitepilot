import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Clock3,
  Compass,
  DollarSign,
  Gauge,
  Layers3,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Investment Decision Framework 2026 | Enterprise AI Capital Allocation Strategy | SitePilot'
const pageDescription =
  'Use a practical enterprise AI investment decision framework to evaluate ROI, prioritize capital allocation, balance portfolio risk, and sequence implementation in 2026.'
const pageUrl = 'https://sitepilot.co/ai-investment-decision-framework-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI investment decision framework',
    'enterprise AI capital allocation',
    'AI portfolio strategy',
    'AI investment ROI',
    'AI investment prioritization',
    'enterprise AI planning',
  ],
  authors: [{ name: 'SitePilot Team' }],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
    siteName: 'SitePilot',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const quickNav = [
  { href: '#overview', title: 'Overview', note: 'What this framework is designed to decide' },
  { href: '#decision-matrix', title: 'Decision matrix', note: 'How to score impact, feasibility, and timing' },
  { href: '#portfolio', title: 'Portfolio strategy', note: 'How to split capital across core, growth, and bets' },
  { href: '#roadmap', title: 'Roadmap', note: 'How to sequence investment over 36 months' },
  { href: '#related-tools', title: 'Related tools', note: 'Supporting calculators and governance resources' },
] as const

const summaryCards = [
  { value: '$47M', label: 'Average AI investment', note: 'Illustrative Fortune 500 benchmark for 2026 planning cycles.' },
  { value: '342%', label: 'Mean ROI', note: 'Long-horizon return for enterprises with disciplined portfolio governance.' },
  { value: '18', label: 'Months payback', note: 'Median period for proven operational and customer-facing programs.' },
  { value: '73%', label: 'Structured success rate', note: 'Observed when allocation decisions are linked to readiness and governance.' },
] as const

const impactDimensions = [
  {
    title: 'Revenue generation',
    weight: '35%',
    note: 'New revenue streams, product upsell, and AI-enabled commercial advantage.',
    tone: 'bg-sky-50 border-sky-200 text-sky-900',
    bar: 'w-full bg-sky-500',
  },
  {
    title: 'Cost reduction',
    weight: '30%',
    note: 'Labor leverage, process automation, and margin expansion.',
    tone: 'bg-indigo-50 border-indigo-200 text-indigo-900',
    bar: 'w-5/6 bg-indigo-500',
  },
  {
    title: 'Competitive advantage',
    weight: '20%',
    note: 'Defensibility, market timing, and strategic positioning versus peers.',
    tone: 'bg-violet-50 border-violet-200 text-violet-900',
    bar: 'w-3/5 bg-violet-500',
  },
  {
    title: 'Risk mitigation',
    weight: '15%',
    note: 'Compliance resilience, control maturity, and downside protection.',
    tone: 'bg-amber-50 border-amber-200 text-amber-900',
    bar: 'w-2/5 bg-amber-500',
  },
] as const

const feasibilityFactors = [
  {
    title: 'Technical readiness',
    description: 'Assess infrastructure, data availability, model operations capability, and architectural fit.',
    score: 'Score 1-10',
    icon: Layers3,
    accent: 'text-sky-600',
    tone: 'border-sky-200 bg-sky-50',
  },
  {
    title: 'Resource availability',
    description: 'Budget, leadership attention, specialist bandwidth, and realistic program timing.',
    score: 'Score 1-10',
    icon: Briefcase,
    accent: 'text-indigo-600',
    tone: 'border-indigo-200 bg-indigo-50',
  },
  {
    title: 'Organizational readiness',
    description: 'Change capacity, operating model maturity, stakeholder buy-in, and adoption probability.',
    score: 'Score 1-10',
    icon: Compass,
    accent: 'text-violet-600',
    tone: 'border-violet-200 bg-violet-50',
  },
  {
    title: 'Market timing',
    description: 'Urgency created by competition, regulation, customer expectations, and timing of value capture.',
    score: 'Score 1-10',
    icon: Clock3,
    accent: 'text-amber-600',
    tone: 'border-amber-200 bg-amber-50',
  },
] as const

const calculatorCards = [
  { label: 'Priority score', value: '8.4', note: 'High priority after impact and feasibility weighting.', icon: Target, accent: 'text-sky-600' },
  { label: 'Expected ROI', value: '385%', note: 'Illustrative 5-year upside for a well-sequenced program.', icon: TrendingUp, accent: 'text-indigo-600' },
  { label: 'Risk-adjusted return', value: '312%', note: 'Portfolio view after downside adjustment and scenario analysis.', icon: Gauge, accent: 'text-violet-600' },
] as const

const portfolioBuckets = [
  {
    title: 'Core infrastructure',
    share: '40-50%',
    icon: Shield,
    accent: 'text-sky-700',
    cardTone: 'border-sky-200 bg-sky-50/70',
    items: [
      'Data platform and ML infrastructure foundations',
      'AI governance, security, and compliance controls',
      'Talent development, enablement, and operating model design',
    ],
    returnBand: 'Expected return: 180-220%',
    returnNote: 'Lower risk, foundational value, and portfolio de-risking.',
  },
  {
    title: 'Growth initiatives',
    share: '30-40%',
    icon: TrendingUp,
    accent: 'text-indigo-700',
    cardTone: 'border-indigo-200 bg-indigo-50/70',
    items: [
      'Customer experience and revenue-enhancing AI programs',
      'Operational efficiency and automation deployments',
      'Product and service innovation tied to measurable adoption',
    ],
    returnBand: 'Expected return: 280-450%',
    returnNote: 'Medium risk, strongest medium-term portfolio contribution.',
  },
  {
    title: 'Innovation bets',
    share: '10-20%',
    icon: Sparkles,
    accent: 'text-violet-700',
    cardTone: 'border-violet-200 bg-violet-50/70',
    items: [
      'Emerging AI technologies and experimental capabilities',
      'Strategic partnerships and ecosystem positioning',
      'Moonshot programs with transformational but less certain payoff',
    ],
    returnBand: 'Expected return: 150-800%',
    returnNote: 'Higher risk, asymmetric upside, best capped within a disciplined portfolio.',
  },
] as const

const portfolioMetrics = [
  { label: 'Portfolio ROI', value: '298%', note: 'Weighted average', accent: 'text-sky-600' },
  { label: 'Risk score', value: '6.2', note: 'Balanced portfolio', accent: 'text-amber-600' },
  { label: 'Time to value', value: '14', note: 'Months average', accent: 'text-indigo-600' },
  { label: 'Success probability', value: '78%', note: 'Overall portfolio', accent: 'text-violet-600' },
] as const

const roadmapPhases = [
  {
    phase: 'Foundation phase',
    timing: 'Months 1-6',
    icon: Shield,
    accent: 'text-sky-600',
    columns: [
      {
        title: 'Core investments',
        items: [
          'Data infrastructure modernization',
          'AI governance framework and control library',
          'Security and compliance setup',
          'Initial talent acquisition and enablement',
        ],
      },
      {
        title: 'Success metrics',
        items: [
          'Data quality score ≥ 85%',
          'Governance compliance at 100% for launch scope',
          'Security assessment at A-grade threshold',
          'Team capability index ≥ 7.0',
        ],
      },
    ],
  },
  {
    phase: 'Growth phase',
    timing: 'Months 7-18',
    icon: BarChart3,
    accent: 'text-indigo-600',
    columns: [
      {
        title: 'Growth investments',
        items: [
          'Customer-facing AI solutions',
          'Operational automation initiatives',
          'Product enhancement projects',
          'Advanced analytics and forecasting capabilities',
        ],
      },
      {
        title: 'Success metrics',
        items: [
          'Customer satisfaction +15%',
          'Operational efficiency +25%',
          'At least 3 new revenue-linked AI motions',
          'Portfolio ROI above 200%',
        ],
      },
    ],
  },
  {
    phase: 'Innovation phase',
    timing: 'Months 19-36',
    icon: Sparkles,
    accent: 'text-violet-600',
    columns: [
      {
        title: 'Innovation investments',
        items: [
          'Emerging technology adoption',
          'Strategic AI partnerships',
          'Research and development bets',
          'Expansion into new markets and service lines',
        ],
      },
      {
        title: 'Success metrics',
        items: [
          'Market leadership movement in target segment',
          'Patent or IP portfolio growth',
          'Three or more strategic ecosystem partnerships',
          'Total ROI above 350%',
        ],
      },
    ],
  },
] as const

const relatedLinks = [
  {
    href: '/ai-investment-roi-matrix-calculator-enterprise-2026',
    title: 'ROI Matrix Calculator',
    description: 'Pressure-test investment assumptions with a more detailed multi-factor ROI model.',
  },
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'Governance Framework',
    description: 'Pair capital allocation decisions with enterprise AI governance and control design.',
  },
  {
    href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
    title: 'Vendor Shortlist Scorecard',
    description: 'Use a structured supplier evaluation model before committing capital to a platform bet.',
  },
] as const

export default function AIInvestmentDecisionFramework2026Page() {
  return (
    <>
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-16"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
        <section className="relative overflow-hidden border-b border-slate-200/80">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
            <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
            <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
          </div>
          <div className="mx-auto max-w-7xl px-4 pt-22 pb-20 md:pt-28 md:pb-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 mb-6 shadow-sm backdrop-blur-xl">
                  <DollarSign className="h-4 w-4 text-indigo-500" />
                  Enterprise AI capital strategy 2026
                </div>
                <h1 className="page-title max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  AI investment decision framework for enterprises deciding where to place the next dollar.
                </h1>
                <p className="page-lead mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  Use a practical capital-allocation framework to score AI initiatives by strategic impact, feasibility,
                  payback, and portfolio fit—without separating investment ambition from governance reality.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/ai-investment-roi-matrix-calculator-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                    Model investment returns
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
                    Discuss allocation strategy
                  </Link>
                </div>
              </div>

              <div className="relative rounded-[2rem] border border-white/70 bg-white/75 p-5 backdrop-blur-2xl shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-sm text-slate-500 mb-1">SitePilot view</div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Stripe palette
                    </div>
                  </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                  <Target className="h-4 w-4 text-indigo-500" />
                  Quick navigation
                </div>
                <div className="mt-5 space-y-3">
                  {quickNav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-2xl border border-slate-200 bg-white/85 p-4 transition hover:bg-slate-50 hover:border-slate-300"
                    >
                      <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                      <div className="mt-1 text-sm text-slate-600">{item.note}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <section id="overview" className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {summaryCards.map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="decision-matrix" className="mt-16 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-xl lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Compass className="h-4 w-4" />
                Decision matrix
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Score strategic impact before you score enthusiasm.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A workable investment decision framework needs two lenses at the same time: impact on enterprise value,
                and feasibility of actually delivering the return inside a realistic operating environment.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Strategic impact dimensions</h3>
                {impactDimensions.map((item) => (
                  <div key={item.title} className={`rounded-2xl border p-5 ${item.tone}`}>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="text-base font-semibold">{item.title}</div>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                      </div>
                      <div className="min-w-[150px]">
                        <div className="text-right text-sm font-semibold">Weight: {item.weight}</div>
                        <div className="mt-2 h-2.5 rounded-full bg-white/70">
                          <div className={`h-2.5 rounded-full ${item.bar}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Feasibility assessment</h3>
                {feasibilityFactors.map((factor) => {
                  const Icon = factor.icon
                  return (
                    <div key={factor.title} className={`rounded-2xl border p-5 ${factor.tone}`}>
                      <div className="flex items-start gap-4">
                        <div className={`rounded-2xl bg-white p-3 ${factor.accent}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-base font-semibold text-slate-900">{factor.title}</div>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{factor.description}</p>
                          <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{factor.score}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-[linear-gradient(135deg,rgba(14,165,233,0.08),rgba(99,102,241,0.08))] p-6 lg:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <BarChart3 className="h-4 w-4 text-sky-600" />
                Investment priority snapshot
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {calculatorCards.map((card) => {
                  const Icon = card.icon
                  return (
                    <div key={card.label} className="rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm">
                      <div className={`inline-flex rounded-2xl bg-slate-50 p-3 ${card.accent}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-4 text-sm font-medium text-slate-500">{card.label}</div>
                      <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section id="portfolio" className="mt-16 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-xl lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Layers3 className="h-4 w-4" />
                Portfolio strategy
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Balance foundational control, growth upside, and experimental bets.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Most enterprise portfolios fail because everything gets funded like a moonshot or everything gets funded
                like a compliance obligation. A portfolio mix forces different return expectations onto different classes
                of AI investment.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {portfolioBuckets.map((bucket) => {
                const Icon = bucket.icon
                return (
                  <div key={bucket.title} className={`rounded-3xl border p-6 ${bucket.cardTone}`}>
                    <div className={`inline-flex rounded-2xl bg-white p-3 ${bucket.accent}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-5 flex items-end justify-between gap-4">
                      <h3 className="text-xl font-semibold text-slate-950">{bucket.title}</h3>
                      <div className="text-sm font-semibold text-slate-500">{bucket.share}</div>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                      {bucket.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-slate-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 rounded-2xl bg-white/85 p-4">
                      <div className="text-sm font-semibold text-slate-900">{bucket.returnBand}</div>
                      <div className="mt-1 text-sm text-slate-600">{bucket.returnNote}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {portfolioMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                  <div className="text-sm font-medium text-slate-500">{metric.label}</div>
                  <div className={`mt-2 text-3xl font-semibold tracking-tight ${metric.accent}`}>{metric.value}</div>
                  <div className="mt-1 text-sm text-slate-600">{metric.note}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="roadmap" className="mt-16 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-xl lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                Implementation roadmap
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Sequence capital deployment so value arrives before confidence runs out.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Investment discipline is not just about what to fund. It is also about when to fund it, what evidence is
                required to unlock the next tranche, and how each phase changes the risk profile of the whole portfolio.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {roadmapPhases.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <div key={phase.phase} className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 lg:p-8">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
                      <div className="flex items-center gap-4 lg:min-w-[240px]">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white ${phase.accent}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Phase {index + 1}</div>
                          <h3 className="text-xl font-semibold text-slate-950">{phase.phase}</h3>
                          <div className="mt-1 text-sm text-slate-600">{phase.timing}</div>
                        </div>
                      </div>

                      <div className="grid flex-1 gap-6 md:grid-cols-2">
                        {phase.columns.map((column) => (
                          <div key={column.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                            <div className="text-base font-semibold text-slate-900">{column.title}</div>
                            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                              {column.items.map((item) => (
                                <li key={item} className="flex gap-3">
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-slate-400" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Decision discipline
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Three rules that keep AI investment committees honest.</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                  <div className="font-semibold text-slate-900">Fund infrastructure before scaling demand.</div>
                  <p className="mt-2">Do not accelerate commercial or operational AI programs before data, governance, and security controls can handle success.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                  <div className="font-semibold text-slate-900">Separate strategic options from guaranteed return.</div>
                  <p className="mt-2">Innovation bets deserve capital, but not on the same evidence threshold as foundational or growth-stage investments.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                  <div className="font-semibold text-slate-900">Tie release of capital to operating proof.</div>
                  <p className="mt-2">Move from roadmap to rollout only when readiness, adoption, and control metrics are already proving out in the prior phase.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,rgba(59,130,246,0.08),rgba(168,85,247,0.08))] p-8 shadow-sm">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Target className="h-4 w-4" />
                Next action
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Use this framework with a live ROI model, governance baseline, and vendor shortlist.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Capital allocation gets much sharper when investment assumptions are tied to operating controls, supplier choices, and realistic rollout timing.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-brand inline-flex items-center gap-2">
                  Talk through your AI investment plan
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ai-governance-framework-enterprise-2026" className="btn-secondary inline-flex items-center gap-2">
                  Review governance baseline
                </Link>
              </div>
            </div>
          </section>

          <section id="related-tools" className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2 border-white/10 bg-white/10 text-white/90">
                <Sparkles className="h-4 w-4" />
                Related enterprise AI tools
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">Use the adjacent tools before locking the capital plan.</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Investment decisions get better when return assumptions, governance controls, and supplier trade-offs are all pressure-tested together.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-sky-300/40 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">{link.title}</h3>
                    <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{link.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
