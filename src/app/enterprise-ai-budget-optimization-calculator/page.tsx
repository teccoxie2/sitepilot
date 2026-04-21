import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle,
  ChevronRight,
  Coins,
  Download,
  Gauge,
  RefreshCw,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Budget Optimization Calculator 2026 | SitePilot'
const pageDescription =
  'Plan enterprise AI budgets with 12-month allocation guidance, ROI tracking, industry benchmarks, and implementation checkpoints.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-budget-optimization-calculator'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'enterprise AI budget calculator',
    'AI budget optimization',
    'enterprise AI financial planning',
    'AI investment budget',
    'corporate AI spending',
    'AI budget allocation',
    'enterprise AI ROI calculator',
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  alternates: { canonical: pageUrl },
}

const highlights = [
  {
    title: '12-month financial planning',
    body: 'Quarterly allocations, monthly cash flow tracking, and seasonal budget smoothing for enterprise AI work.',
    icon: Calendar,
  },
  {
    title: 'ROI tracking and analytics',
    body: 'Measure payback, cost savings, and performance impact across initiatives without fantasy math.',
    icon: TrendingUp,
  },
  {
    title: 'Cost allocation framework',
    body: 'Break spending down by department, program, and project so the budget has actual ownership.',
    icon: BarChart3,
  },
]

const allocation = [
  { label: 'Infrastructure & platform', amount: '$2,000,000', pct: '40%', color: 'bg-sky-500' },
  { label: 'Talent & training', amount: '$1,500,000', pct: '30%', color: 'bg-indigo-500' },
  { label: 'Data & security', amount: '$1,000,000', pct: '20%', color: 'bg-violet-500' },
  { label: 'Innovation & R&D', amount: '$500,000', pct: '10%', color: 'bg-orange-500' },
]

const budgetCategories = [
  {
    title: 'Infrastructure & Platform',
    icon: Target,
    items: [
      ['Cloud computing resources', '15-20% of total budget'],
      ['AI platform licensing', '10-15% of total budget'],
      ['Hardware & infrastructure', '10-15% of total budget'],
    ],
  },
  {
    title: 'Talent & Training',
    icon: Users,
    items: [
      ['AI talent acquisition', '15-20% of total budget'],
      ['Training & development', '5-8% of total budget'],
      ['External consulting', '5-7% of total budget'],
    ],
  },
  {
    title: 'Data & Security',
    icon: AlertCircle,
    items: [
      ['Data management', '8-12% of total budget'],
      ['AI security & compliance', '5-8% of total budget'],
      ['Privacy & risk management', '3-5% of total budget'],
    ],
  },
  {
    title: 'Innovation & R&D',
    icon: RefreshCw,
    items: [
      ['Emerging technologies', '4-6% of total budget'],
      ['Innovation labs', '3-4% of total budget'],
      ['Strategic partnerships', '1-3% of total budget'],
    ],
  },
]

const industryBenchmarks = [
  ['Financial Services', '3.2%', '$12.5M', 'Risk & compliance', '+285%'],
  ['Healthcare', '2.8%', '$8.7M', 'Clinical AI', '+245%'],
  ['Manufacturing', '4.1%', '$15.3M', 'Operations AI', '+310%'],
]

const phases = [
  ['Q1', 'Foundation', '25% deployment'],
  ['Q2', 'Scale', '30% deployment'],
  ['Q3', 'Expand', '30% deployment'],
  ['Q4', 'Optimize', '15% deployment'],
]

export default function EnterpriseAIBudgetCalculatorPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Enterprise AI Budget Optimization Calculator 2026"
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-02-15T00:00:00.000Z"
        modifiedDate="2026-04-18T00:00:00.000Z"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_22%,#ffffff_50%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[30rem] h-[24rem] bg-[radial-gradient(circle_at_22%_22%,rgba(99,91,255,0.05),transparent_24%),radial-gradient(circle_at_76%_26%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_50%_82%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-16 pt-10 md:pb-24 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-indigo-500" />
                  2026 budget planning tool
                </div>

                <h1 className="page-title mb-6 text-5xl font-semibold tracking-[-0.05em] text-slate-950 md:text-7xl">
                  Enterprise AI Budget
                  <span className="block bg-gradient-to-r from-slate-950 via-indigo-700 to-sky-600 bg-clip-text text-transparent">
                    optimization calculator.
                  </span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                  Plan enterprise AI spending with actual structure: 12-month allocation guidance, ROI tracking, industry benchmarks,
                  and a phased implementation framework that does not insult the CFO.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a href="#calculator" className="btn-brand inline-flex items-center gap-2">
                    Launch calculator
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#framework" className="btn-secondary inline-flex items-center gap-2">
                    View framework
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/ai-investment-roi-matrix-calculator-enterprise-2026" className="btn-secondary inline-flex items-center gap-2">
                    ROI matrix calculator
                  </Link>
                  <Link href="/ai-risk-management-dashboard-enterprise-2026" className="btn-secondary inline-flex items-center gap-2">
                    Risk dashboard
                  </Link>
                  <Link href="/enterprise-ai-transformation-roadmap-2026" className="btn-secondary inline-flex items-center gap-2">
                    Transformation roadmap
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="page-card-glow absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card space-y-5 rounded-[2rem] p-5 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">Executive summary</div>
                      <div className="text-xl font-semibold text-slate-950">What the model prioritizes</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Budget first
                    </div>
                  </div>
                  <div className="space-y-3">
                    {highlights.map((item) => {
                      const Icon = item.icon
                      return (
                        <div key={item.title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <Icon className="mt-1 h-4 w-4 shrink-0 text-indigo-500" />
                            <div>
                              <div className="font-semibold text-slate-950">{item.title}</div>
                              <p className="mt-1 text-sm leading-6 text-slate-600">{item.body}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Planning discipline', 'The calculator forces budget ownership instead of vague enthusiasm.'],
            ['ROI realism', 'Numbers should be tethered to operating costs, not fantasy.'],
            ['Allocation clarity', 'Every dollar needs a visible lane and a visible owner.'],
            ['Executive reporting', 'Use the model to explain decisions, not just to decorate slides.'],
          ].map(([title, body]) => (
            <div key={title} className="page-card p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Coins className="h-4 w-4 text-indigo-500" />
                {title}
              </div>
              <p className="text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </section>

        <section id="calculator" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Gauge className="h-4 w-4 text-indigo-500" />
              Budget calculator
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Interactive budget optimization calculator</h2>
            <p className="page-lead mt-3 text-lg">
              A practical planning layout for enterprise AI budgeting. No fake interactivity, no nonsense sliders pretending to be strategy.
            </p>
          </div>

          <div className="page-card overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-semibold text-slate-950">Budget parameters</h3>
                <div className="space-y-5">
                  {['Total annual AI budget', 'Company size', 'Industry vertical', 'AI maturity level'].map((label, index) => (
                    <div key={label}>
                      <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
                      {index === 0 || index === 1 ? (
                        <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100" placeholder={index === 0 ? '5,000,000' : '10,000-50,000'} />
                      ) : (
                        <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100">
                          {index === 2 ? (
                            <>
                              <option>Financial Services</option>
                              <option>Healthcare</option>
                              <option>Manufacturing</option>
                              <option>Technology</option>
                              <option>Retail</option>
                              <option>Energy</option>
                            </>
                          ) : (
                            <>
                              <option>Initial Implementation</option>
                              <option>Pilot Programs</option>
                              <option>Scaled Deployment</option>
                              <option>Enterprise-wide Integration</option>
                            </>
                          )}
                        </select>
                      )}
                    </div>
                  ))}
                  <button className="btn-brand w-full inline-flex items-center justify-center gap-2">
                    Calculate optimal allocation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-semibold text-slate-950">Recommended allocation</h3>
                <div className="space-y-4">
                  {allocation.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <div className="font-medium text-slate-900">{item.label}</div>
                        <div className="text-right">
                          <div className="font-semibold text-slate-950">{item.amount}</div>
                          <div className="text-xs text-slate-500">{item.pct}</div>
                        </div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-200">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: item.pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-indigo-500" />
              Budget categories
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Enterprise AI budget categories framework</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {budgetCategories.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.title} className="page-card p-6 md:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl bg-indigo-50 p-3">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map(([name, pct]) => (
                      <div key={name} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-medium text-slate-900">{name}</div>
                            <div className="mt-1 text-sm text-slate-600">{pct}</div>
                          </div>
                          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-indigo-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-indigo-500" />
              Benchmarks
            </div>
            <h2 className="page-title text-3xl md:text-4xl">2026 enterprise AI budget benchmarks by industry</h2>
          </div>

          <div className="page-card overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-slate-500">
                    <th className="px-3 py-3 font-medium">Industry</th>
                    <th className="px-3 py-3 font-medium">AI budget %</th>
                    <th className="px-3 py-3 font-medium">Median investment</th>
                    <th className="px-3 py-3 font-medium">Focus</th>
                    <th className="px-3 py-3 font-medium">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {industryBenchmarks.map(([industry, pct, investment, focus, growth]) => (
                    <tr key={industry} className="border-b border-slate-100 last:border-b-0">
                      <td className="px-3 py-4 font-medium text-slate-950">{industry}</td>
                      <td className="px-3 py-4 text-slate-600">{pct}</td>
                      <td className="px-3 py-4 text-slate-600">{investment}</td>
                      <td className="px-3 py-4 text-slate-600">{focus}</td>
                      <td className="px-3 py-4 text-indigo-600">{growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="framework" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-indigo-500" />
              Implementation framework
            </div>
            <h2 className="page-title text-3xl md:text-4xl">12-month budget implementation framework</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {phases.map(([quarter, title, deployment]) => (
              <div key={quarter} className="page-card p-6 md:p-7">
                <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 mb-4">
                  {quarter}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-950">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{deployment}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-indigo-500" />
              ROI snapshot
            </div>
            <h2 className="page-title text-3xl md:text-4xl">AI budget ROI calculator</h2>
          </div>

          <div className="page-card-glow rounded-[2rem] p-1.5">
            <div className="page-card-soft rounded-[1.6rem] p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="page-card p-6">
                  <h3 className="mb-4 text-xl font-semibold text-slate-950">Investment parameters</h3>
                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">Total AI investment: $5,000,000</div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">Expected efficiency gains: 25%</div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">Current annual operating costs: $50,000,000</div>
                  </div>
                </div>
                <div className="page-card p-6">
                  <h3 className="mb-4 text-xl font-semibold text-slate-950">Projected ROI analysis</h3>
                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 flex items-center justify-between">
                      <span>3-year ROI</span>
                      <span className="font-semibold text-indigo-600">285%</span>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 flex items-center justify-between">
                      <span>Break-even period</span>
                      <span className="font-semibold text-slate-950">14 months</span>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 flex items-center justify-between">
                      <span>Annual cost savings</span>
                      <span className="font-semibold text-slate-950">$12.5M</span>
                    </div>
                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50/70 px-4 py-3 flex items-center gap-3 text-indigo-900">
                      <CheckCircle className="h-4 w-4 text-indigo-600" />
                      Strong ROI projection - recommended for implementation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section pt-0">
          <div className="max-w-6xl mx-auto">
            <RelatedLinks
              title="Related enterprise AI tools"
              links={[
                {
                  href: '/ai-investment-roi-matrix-calculator-enterprise-2026',
                  title: 'AI ROI Matrix Calculator',
                  description: 'Calculate investment returns across AI initiatives.',
                },
                {
                  href: '/ai-risk-management-dashboard-enterprise-2026',
                  title: 'AI Risk Management Dashboard',
                  description: 'Monitor and mitigate AI implementation risks.',
                },
                {
                  href: '/enterprise-ai-transformation-roadmap-2026',
                  title: 'AI Transformation Roadmap',
                  description: '18-month strategic implementation guide.',
                },
              ]}
            />
          </div>
        </section>

        <section className="page-section">
          <div className="max-w-5xl mx-auto">
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-8 md:p-10 text-center">
                <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 mb-5">
                  Final answer
                </div>
                <h2 className="page-title text-3xl md:text-5xl mb-5">Budget like you expect to be audited.</h2>
                <p className="page-lead text-lg max-w-3xl mx-auto mb-8">
                  If the investment is real, the budget needs structure: allocation, ownership, milestones, and a return model that can survive a room full of skeptics.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/ai-investment-roi-matrix-calculator-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                    Download budget framework
                    <Download className="h-4 w-4" />
                  </Link>
                  <Link href="/enterprise-ai-transformation-roadmap-2026" className="btn-secondary inline-flex items-center gap-2">
                    See roadmap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
