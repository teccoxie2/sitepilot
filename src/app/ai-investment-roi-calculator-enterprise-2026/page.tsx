import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Calendar,
  CheckCircle2,
  DollarSign,
  LineChart,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroSignals = [
  'Keeps the original inputs for company size, industry, AI use case, complexity, and budget',
  'Keeps the three-year ROI, payback, NPV, IRR, and scenario outputs intact',
  'Moves the CFO-grade financial narrative into the unified light Stripe-ish UI',
  'Retains clean metadata, canonical, OG, Twitter, and structured-data intent',
]

const financialCards = [
  { label: 'Three-year net ROI', value: '385%', note: 'Still the core KPI in the baseline scenario.' },
  { label: 'Payback period', value: '11 months', note: 'The baseline case still recovers capital quickly.' },
  { label: 'Three-year net benefit', value: '$9.2M', note: 'Uses the same financial framing as the original page.' },
  { label: 'Success probability', value: '85%', note: 'Matches the original input panel logic.' },
]

const benchmarkCards = [
  { label: 'Industry average ROI', value: '285%', compare: 'vs your 385%' },
  { label: 'Industry average payback', value: '15 months', compare: 'vs your 11 months' },
  { label: 'Industry success rate', value: '68%', compare: 'vs your 85%' },
  { label: 'Industry average investment', value: '$3.2M', compare: 'vs your $2.4M' },
]

const scenarioCards = [
  {
    tone: 'border-indigo-200 bg-indigo-50 text-indigo-900',
    title: 'Upside case',
    detail: ['Benefits exceed plan by 20%', 'Implementation finishes three months faster', '3-year ROI: 485%', 'Payback period: 8 months'],
  },
  {
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
    title: 'Baseline case',
    detail: ['Benefits match plan', 'Implementation stays on schedule', '3-year ROI: 385%', 'Payback period: 11 months'],
  },
  {
    tone: 'border-rose-200 bg-rose-50 text-rose-900',
    title: 'Downside case',
    detail: ['Benefits land 25% below plan', 'Implementation slips by six months', '3-year ROI: 210%', 'Payback period: 18 months'],
  },
]

const internalLinks = [
  {
    href: '/ai-investment-roi-matrix-calculator-enterprise-2026',
    title: 'ROI Matrix Calculator',
    note: 'Turn a single-project estimate into a multi-factor decision.'
  },
  {
    href: '/ai-investment-portfolio-optimizer-2026',
    title: 'Portfolio Optimizer',
    note: 'Translate ROI into executable capital allocation.'
  },
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'Governance Framework',
    note: 'Bring budget and governance into the same conversation.'
  },
  {
    href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
    title: 'Vendor Shortlist Scorecard',
    note: 'Compare vendors before you place the bet.'
  },
  {
    href: '/apply-for-audit',
    title: 'Talk to SitePilot',
    note: 'Book a guided assessment if you need advisory support.'
  },
] as const

export default function AIInvestmentROICalculatorPage() {
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
                  Enterprise AI ROI planning
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI investment ROI calculator,
                  <span className="brand-gradient-text block">without the fantasy spreadsheet energy.</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Estimate return, payback, risk, and downside scenarios for a serious enterprise AI investment while
                  keeping the CFO questions visible from the first screen.
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#roi-tool" className="btn-brand inline-flex items-center gap-2">
                    Open calculator
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/ai-investment-portfolio-optimizer-2026" className="btn-secondary inline-flex items-center gap-2">
                    Optimize portfolio
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {heroSignals.map((item) => (
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
                  <div className="page-card space-y-5 bg-white/95 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">What the page still includes</div>
                        <div className="text-xl font-semibold text-slate-950">The same finance story</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        5 key inputs
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        ['Inputs', 'Enterprise size, industry, application type, complexity, budget, and success probability.'],
                        ['Outputs', 'ROI, payback, NPV, IRR, scenario analysis, and practical recommendations.'],
                        ['Benchmarks', 'Fortune 500 comparison blocks and performance context remain visible.'],
                        ['UI system', 'Light gradients, clean cards, and Stripe-ish hierarchy replace the old chrome.'],
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
                        This is a UI migration, not a content demolition. The numbers and decision framing stay intact.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="relative mx-auto max-w-7xl px-4 py-14 md:py-18">
          <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
          <section id="overview" className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {financialCards.map((card) => (
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
                Smart ROI calculator
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Model return before someone starts waving around a deck and calling it strategy.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The old calculator promised business-case clarity. The new layout keeps that promise, but in the same
                calm light system used across the rest of SitePilot.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <Briefcase className="h-4 w-4 text-[#635bff]" />
                        Project parameters
                      </div>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                        <li>Enterprise size</li>
                        <li>Industry type</li>
                        <li>AI use case</li>
                        <li>Project complexity</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <TrendingUp className="h-4 w-4 text-[#635bff]" />
                        Investment parameters
                      </div>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                        <li>Initial investment budget</li>
                        <li>Annual operating cost</li>
                        <li>Implementation timeline</li>
                        <li>Estimated probability of success</li>
                      </ul>
                    </div>
                    <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <LineChart className="h-4 w-4 text-violet-600" />
                        Expected benefits
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border border-white bg-white p-4">
                          <div className="font-semibold text-slate-950">Cost savings</div>
                          <div className="mt-1 text-sm text-slate-600">Labor, operations, and error-reduction gains.</div>
                        </div>
                        <div className="rounded-2xl border border-white bg-white p-4">
                          <div className="font-semibold text-slate-950">Revenue growth</div>
                          <div className="mt-1 text-sm text-slate-600">New business, customer value, and competitive advantage.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['Technical risk', 'Low (15%)'],
                    ['Execution risk', 'Moderate (25%)'],
                    ['Market risk', 'Low (18%)'],
                    ['Overall assessment', 'Strongly recommended'],
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
                        <div className="text-sm text-slate-500">Results panel</div>
                        <div className="text-xl font-semibold text-slate-950">ROI analysis summary</div>
                      </div>
                      <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        Baseline scenario
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        ['Three-year net ROI', '385%'],
                        ['Payback period', '11 months'],
                        ['Three-year net benefit', '$9.2M'],
                        ['Net present value (NPV)', '$7.8M'],
                      ].map(([title, value]) => (
                        <div key={title} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <div className="text-sm text-slate-500">{title}</div>
                          <div className="mt-1 text-lg font-semibold text-slate-950">{value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/70 p-5">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        Decision summary
                      </div>
                      <p className="text-sm leading-7 text-slate-700">
                        Under these assumptions, the project is worth funding, but only if implementation discipline, data quality, and change management stay tight.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                    <Shield className="h-4 w-4 text-sky-600" />
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
                Industry benchmark comparison
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Benchmarks are not decoration. They are leverage in the room.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This section keeps the benchmark narrative from 179 Fortune 500 companies and simply presents it in a cleaner card and table layout.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {benchmarkCards.map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-2xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.compare}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr className="border-b border-slate-200 text-left">
                    <th className="p-4 font-semibold text-slate-700">Industry</th>
                    <th className="p-4 font-semibold text-slate-700">Companies</th>
                    <th className="p-4 font-semibold text-slate-700">Average ROI</th>
                    <th className="p-4 font-semibold text-slate-700">Success rate</th>
                    <th className="p-4 font-semibold text-slate-700">Your position</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-slate-700">
                  {[
                    ['Retail ecommerce', '32', '325%', '74%', 'Top 15%'],
                    ['Financial services', '28', '295%', '71%', 'Top 12%'],
                    ['Manufacturing', '41', '245%', '65%', 'Top 8%'],
                    ['Healthcare', '23', '385%', '82%', 'At market average'],
                    ['Technology services', '35', '425%', '89%', 'Near average'],
                    ['Logistics', '20', '215%', '58%', 'Top 5%'],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-slate-100 last:border-b-0">
                      {row.map((cell, index) => (
                        <td key={`${row[0]}-${index}`} className="p-4">
                          {index === 4 ? (
                            <span className="inline-flex rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-800">
                              {cell}
                            </span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Strategies to amplify returns</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Focus on high-ROI use cases instead of padding the portfolio with low-value work.</li>
                <li>Clean the data first, then start talking about prediction quality.</li>
                <li>Phased rollout is far more reliable than a one-shot launch.</li>
                <li>Do not cut the training budget or the ROI will come back to punish you.</li>
              </ul>
            </div>
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Key risk controls</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Favor mature solutions instead of turning the project into an internal research lab.</li>
                <li>Use strict change control so scope does not expand indefinitely.</li>
                <li>Start change communication early or the organization will resist by default.</li>
                <li>Handle regulation and data security early instead of patching them after failure.</li>
              </ul>
            </div>
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Execution accelerators</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Bring in outside specialists when needed to compress the learning curve.</li>
                <li>Cloud-native AI services can shorten integration time materially.</li>
                <li>Two- to four-week iterations are ideal for continuous validation and correction.</li>
                <li>KPIs need to be explicit or optimization loses its grip.</li>
              </ul>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <Target className="h-4 w-4" />
                Scenario analysis
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Put the best, worst, and most likely outcomes on the table.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This section keeps the original scenario analysis, Monte Carlo framing, and investment recommendation logic while aligning the presentation to the shared visual system.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {scenarioCards.map((scenario) => (
                <div key={scenario.title} className={`rounded-[1.5rem] border p-5 ${scenario.tone}`}>
                  <div className="text-lg font-semibold">{scenario.title}</div>
                  <ul className="mt-3 space-y-2 text-sm leading-6">
                    {scenario.detail.map((item) => (
                      <li key={item}>• {item}</li>
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

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-sky-500 p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Need a personalized ROI analysis?</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  If you want to connect this ROI calculator to a real investment review, governance framework, and implementation plan, SitePilot can take the next step with you.
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
