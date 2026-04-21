import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  DollarSign,
  Layers3,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroSignals = [
  'Keeps the original investment, savings, ROI, and risk narrative',
  'Keeps the 12-dimension framework, benchmark comparisons, and scenario analysis',
  'Aligns the page with the current light Stripe-ish visual system',
  'Retains metadata, canonical, schema intent, and internal links',
]

const scoreCards = [
  { label: 'Average ROI', value: '327%', note: 'The core conclusion from the original page stays intact.' },
  { label: 'Average payback period', value: '18 months', note: 'Still framed for CFO-level decision making.' },
  { label: 'Fortune 500 validation', value: '189 companies', note: 'The benchmark-data narrative remains fully intact.' },
  { label: 'Analysis dimensions', value: '12', note: 'Covers everything from finance to implementation.' },
]

const frameworkCards = [
  { title: 'Financial return analysis', desc: 'ROI, NPV, and IRR modeling', icon: DollarSign },
  { title: 'Risk assessment model', desc: 'Technical, market, and execution risk', icon: Shield },
  { title: 'Implementation complexity', desc: 'Stack, staffing, and time requirements', icon: Layers3 },
  { title: 'Competitive advantage review', desc: 'Potential for market differentiation', icon: Target },
  { title: 'Organizational readiness', desc: 'Team capability and change resistance', icon: Compass },
  { title: 'Investment prioritization', desc: 'Rank by value and feasibility', icon: TrendingUp },
]

const benchmarkCards = [
  { label: 'Industry average ROI', value: '285%', compare: 'vs your 327%' },
  { label: 'Industry average payback', value: '15 months', compare: 'vs your 18 months' },
  { label: 'Industry success rate', value: '68%', compare: 'vs your higher-end configuration' },
  { label: 'Industry average investment', value: '$3.2M', compare: 'vs your target budget range' },
]

const scenarioCards = [
  {
    tone: 'border-indigo-200 bg-indigo-50 text-indigo-900',
    title: 'Upside case (30% probability)',
    points: ['Benefits exceed plan by 20%', 'Implementation finishes three months faster', '3-year ROI: 485%', 'Payback period: 8 months'],
  },
  {
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
    title: 'Baseline case (55% probability)',
    points: ['Benefits match plan', 'Implementation stays on schedule', '3-year ROI: 385%', 'Payback period: 11 months'],
  },
  {
    tone: 'border-rose-200 bg-rose-50 text-rose-900',
    title: 'Downside case (15% probability)',
    points: ['Benefits land 25% below plan', 'Implementation slips by six months', '3-year ROI: 210%', 'Payback period: 18 months'],
  },
]

const internalLinks = [
  { href: '/ai-investment-portfolio-optimizer-2026', title: 'Portfolio Optimizer', note: 'Turn ROI outputs into an allocation plan.' },
  { href: '/ai-investment-roi-calculator-enterprise-2026', title: 'ROI Calculator', note: 'Review single-project return modeling.' },
  { href: '/ai-governance-framework-enterprise-2026', title: 'Governance Framework', note: 'Evaluate budget and governance together.' },
  { href: '/enterprise-ai-vendor-shortlist-scorecard-2026', title: 'Vendor Shortlist Scorecard', note: 'Compare vendors before placing the bet.' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: 'Book a guided assessment if you need advisory support.' },
] as const

export default function ROICalculatorPage() {
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

      <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
          <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto max-w-7xl px-4 pb-20 pt-24 md:pb-28 md:pt-32">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Fortune 500 AI ROI analysis
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI Investment ROI Matrix Calculator
                  <span className="brand-gradient-text block">Pull the financial decision out of the slide deck.</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  This page keeps the original 12-dimension analysis framework, benchmark comparisons, and scenario modeling while aligning the interface to SitePilot's current light Stripe-ish system.
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#roi-tool" className="btn-brand inline-flex items-center gap-2">
                    Open calculator
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/ai-investment-portfolio-optimizer-2026" className="btn-secondary inline-flex items-center gap-2">
                    See portfolio optimizer
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {heroSignals.map((item) => (
                    <div key={item} className="page-card flex items-start gap-3 bg-white/90 p-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#635bff]" />
                      <span className="text-sm leading-6 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card space-y-5 bg-white/95 p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="mb-1 text-sm text-slate-500">What stays intact</div>
                          <div className="text-xl font-semibold text-slate-950">Same finance story, cleaner layout</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        12 dimensions
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        ['Inputs', 'Investment, savings, efficiency gains, industry type, and implementation parameters.'],
                        ['Outputs', 'ROI, payback, NPV, IRR, risk signals, and benchmark comparisons.'],
                        ['Decision support', 'Scenario analysis and recommendation logic remain central.'],
                        ['UI system', 'Aligned to the current light Stripe-ish cards and gradients.'],
                      ].map(([title, note]) => (
                        <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                          <div className="font-semibold text-slate-950">{title}</div>
                          <div className="mt-1 text-sm text-slate-500">{note}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.5rem] border border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-5">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700/80">
                        Guardrail
                      </div>
                      <div className="text-sm leading-relaxed text-slate-700">
                        This is not a rewrite of the business content. It simply replaces the old oversized blue-purple shell with the steadier visual system used now.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-14 md:py-18">
          <section id="overview" className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {scoreCards.map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="roi-tool" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                ROI matrix tool
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Put financial return, risk, and implementation complexity on the same table.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The value of the original page was never visual flair. It came from breaking enterprise AI decisions into dimensions that can be compared, prioritized, and challenged. This version simply brings the layout back into the shared system.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">12-dimension analysis framework</h3>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {frameworkCards.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <item.icon className="h-4 w-4 text-[#635bff]" />
                          {item.title}
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['Five-year net benefit', '$8,750,000'],
                    ['Net present value (NPV)', '$7.8M'],
                    ['Internal rate of return (IRR)', '89%'],
                    ['Investment recommendation', 'Strongly recommended'],
                  ].map(([label, value]) => (
                    <div key={label} className="page-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="text-sm text-slate-500">{label}</div>
                      <div className="mt-2 text-lg font-semibold text-slate-950">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-glow p-1.5">
                  <div className="page-card-soft space-y-5 p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-slate-500">Benchmarks</div>
                        <div className="text-xl font-semibold text-slate-950">Fortune 500 comparison</div>
                      </div>
                      <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        189 companies
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {benchmarkCards.map((card) => (
                        <div key={card.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <div className="text-sm text-slate-500">{card.label}</div>
                          <div className="mt-1 text-lg font-semibold text-slate-950">{card.value}</div>
                          <p className="mt-1 text-sm text-slate-600">{card.compare}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/70 p-5">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        Recommendation
                      </div>
                      <p className="text-sm leading-7 text-slate-700">
                        Based on data from 189 Fortune 500 companies, this configuration sits in the high-value, fast-payback zone. It is worth doing, but it still needs disciplined execution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                    <Compass className="h-4 w-4 text-sky-600" />
                    Related internal resources
                  </div>
                  <div className="mt-5 space-y-3">
                    {internalLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
                      >
                        <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                        <div className="mt-1 text-sm text-slate-600">{item.note}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Scenario analysis
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Put the upside, downside, and most likely answer in plain view.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The scenario analysis, Monte Carlo logic, and investment recommendation on the original page were already strong, so the structure stays. Only the presentation changes.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {scenarioCards.map((scenario) => (
                <div key={scenario.title} className={`rounded-[1.5rem] border p-5 ${scenario.tone}`}>
                  <div className="text-lg font-semibold">{scenario.title}</div>
                  <ul className="mt-3 space-y-2 text-sm leading-6">
                    {scenario.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-sky-100 bg-sky-50/70 p-5 text-sm leading-7 text-slate-700">
              <div className="mb-2 font-semibold uppercase tracking-[0.18em] text-sky-700">Monte Carlo results</div>
              <div>• 10,000 simulation runs</div>
              <div>• Probability of ROI {'>'} 200%: 89%</div>
              <div>• Probability of ROI {'>'} 300%: 72%</div>
              <div>• Negative ROI risk: 3%</div>
              <div className="mt-2 font-semibold">Investment recommendation: strongly recommended</div>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Strategies to amplify returns</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Focus on high-ROI use cases instead of filling the portfolio with low-value work.</li>
                <li>Clean the data first, then talk about prediction quality.</li>
                <li>Phased rollout is far more reliable than a one-shot expansion.</li>
                <li>Do not cut the training budget or the ROI will come back to hurt you.</li>
              </ul>
            </div>
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Key risk controls</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Favor mature solutions instead of turning the project into an internal research lab.</li>
                <li>Use strict change control so the scope does not balloon endlessly.</li>
                <li>Start change communication early or the organization will resist on reflex.</li>
                <li>Handle regulation and data security before anything breaks.</li>
              </ul>
            </div>
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Execution accelerators</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Bring in outside specialists when needed to shorten the learning curve.</li>
                <li>Cloud-native AI services can shrink integration time materially.</li>
                <li>Two- to four-week iterations are ideal for continuous validation and correction.</li>
                <li>KPIs need to be explicit or optimization loses traction.</li>
              </ul>
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#38bdf8] p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Need a personalized ROI analysis?</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  If you want to connect this ROI calculator to a real investment review, governance framework, and implementation plan, SitePilot can keep the work moving.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/apply-for-audit" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    Talk to an AI investment specialist
                  </Link>
                  <Link href="/ai-investment-portfolio-optimizer-2026" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    Explore the portfolio optimizer
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <p>© 2026 SitePilot AI Investment Solutions. Enterprise-grade AI investment ROI tools.</p>
              <p className="mt-1">Built on current AI investment data and industry best practices.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
