import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  Clock3,
  DollarSign,
  Shield,
  Sparkles,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Budget Planning 2026 | AI Investment Calculator & Cost Framework'
const pageDescription =
  'Comprehensive enterprise AI budget planning framework with cost modeling, resource allocation, contingency planning, and ROI forecasting for 2026 investments.'
const pageUrl = 'https://sitepilot.co/ai-budget-planning-enterprise-2026'

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

const overviewStats = [
  { value: '$47M', label: 'Typical AI budget', note: 'Fortune 500 annual baseline' },
  { value: '38%', label: 'Budget growth', note: 'Year-over-year increase in 2026' },
  { value: '24', label: 'Months to ROI', note: 'Average payback window' },
  { value: '67%', label: 'Budget utilization', note: 'Industry average' },
]

const costCategories = [
  {
    title: 'Infrastructure and platform',
    share: '25-35%',
    range: '$11.8M - $16.5M annually',
    note: 'Cloud compute, data storage, ML platforms, and security infrastructure.',
  },
  {
    title: 'Talent and human resources',
    share: '40-50%',
    range: '$18.8M - $23.5M annually',
    note: 'Data scientists, ML engineers, AI specialists, and training programs.',
  },
  {
    title: 'Software and licensing',
    share: '10-15%',
    range: '$4.7M - $7.1M annually',
    note: 'AI software licenses, development tools, and third-party APIs.',
  },
  {
    title: 'Professional services',
    share: '8-12%',
    range: '$3.8M - $5.6M annually',
    note: 'Consulting, implementation, training, and audit services.',
  },
]

const calculatorBreakdown = [
  { label: 'Infrastructure', value: '$14.1M', share: '30%' },
  { label: 'Talent', value: '$21.2M', share: '45%' },
  { label: 'Software', value: '$5.9M', share: '12.5%' },
  { label: 'Services', value: '$5.8M', share: '12.5%' },
]

const optimizationGroups = [
  {
    title: 'Infrastructure optimization',
    items: [
      'Auto-scaling compute resources (15-25% savings)',
      'Reserved instance pricing (20-35% savings)',
      'Multi-cloud cost optimization (10-20% savings)',
    ],
  },
  {
    title: 'Operational efficiency',
    items: [
      'Shared ML platform adoption (30-40% savings)',
      'Open source tool integration (25-45% savings)',
      'Internal talent development (35-50% versus external)',
    ],
  },
]

const forecastYears = [
  {
    title: 'Year 1',
    strap: 'Foundation',
    investment: '$47.0M',
    revenue: '+$12.5M',
    savings: '+$8.2M',
    roi: '-55.8%',
    note: 'Investment phase',
  },
  {
    title: 'Year 2',
    strap: 'Growth',
    investment: '$52.3M',
    revenue: '+$45.8M',
    savings: '+$23.4M',
    roi: '+32.4%',
    note: 'Breakeven achieved',
  },
  {
    title: 'Year 3',
    strap: 'Maturity',
    investment: '$49.1M',
    revenue: '+$78.3M',
    savings: '+$41.7M',
    roi: '+144.6%',
    note: 'Full value realization',
  },
]

const cumulativeStats = [
  { label: 'Total investment', value: '$148.4M', note: 'Three-year period' },
  { label: 'Total returns', value: '$209.9M', note: 'Revenue plus savings' },
  { label: 'Net ROI', value: '141.4%', note: 'Three-year cumulative' },
  { label: 'Payback period', value: '22 months', note: 'Modeled enterprise average' },
]

const riskFactors = [
  {
    title: 'Technical complexity risk',
    note: 'Integration challenges and technical debt.',
    impact: 'High',
    probability: '35%',
  },
  {
    title: 'Talent acquisition risk',
    note: 'Competitive market for AI specialists.',
    impact: 'Medium',
    probability: '45%',
  },
  {
    title: 'Regulatory changes',
    note: 'New AI compliance requirements.',
    impact: 'Medium',
    probability: '60%',
  },
  {
    title: 'Technology evolution',
    note: 'Rapid AI technology advancement.',
    impact: 'Low',
    probability: '80%',
  },
]

const contingencyCards = [
  {
    title: 'Base contingency reserve',
    value: '15%',
    note: '$7.1M additional budget',
    subnote: 'Standard industry practice',
  },
  {
    title: 'Innovation buffer',
    value: '8%',
    note: '$3.8M for opportunities',
    subnote: 'Emerging technology adoption',
  },
  {
    title: 'Total recommended budget',
    value: '$57.9M',
    note: 'Including contingencies',
    subnote: '23% buffer for risks and opportunities',
  },
]

const timeline = [
  { quarter: 'Q1 2026', value: '$18.5M', note: 'Infrastructure + Talent' },
  { quarter: 'Q2 2026', value: '$15.2M', note: 'Platform + Tools' },
  { quarter: 'Q3 2026', value: '$12.8M', note: 'Applications + Services' },
  { quarter: 'Q4 2026', value: '$11.4M', note: 'Innovation + Scale' },
]

const recommendations = {
  costReduction: [
    {
      title: 'Shared infrastructure platform',
      note: 'Centralized ML platform serving multiple use cases.',
      value: '$8.5M - $12.3M',
    },
    {
      title: 'Internal talent development',
      note: 'Upskill existing staff versus pure external hiring.',
      value: '$5.2M - $8.9M',
    },
    {
      title: 'Open source integration',
      note: 'Use open models and tooling strategically where enterprise controls allow it.',
      value: '$3.1M - $5.7M',
    },
  ],
  acceleration: [
    {
      title: 'Quick win projects',
      note: 'High-impact, low-complexity AI implementations.',
      value: '+$12.4M - $18.7M',
    },
    {
      title: 'Strategic partnerships',
      note: 'Joint ventures and technology partnerships that spread cost.',
      value: '$7.3M - $15.2M',
    },
    {
      title: 'Data monetization',
      note: 'Revenue streams from AI-enhanced data products.',
      value: '$15.8M - $28.4M',
    },
  ],
}

const relatedTools = [
  {
    href: '/ai-investment-decision-framework-2026',
    title: 'Investment decision framework',
    description: 'Strategic AI investment evaluation and prioritization.',
  },
  {
    href: '/ai-investment-roi-matrix-calculator-enterprise-2026',
    title: 'ROI matrix calculator',
    description: '12-dimension ROI analysis with financial modeling.',
  },
  {
    href: '/ai-implementation-cost-calculator-enterprise-2026',
    title: 'Implementation cost calculator',
    description: 'Detailed cost estimation for enterprise AI programs.',
  },
]

export default function AIBudgetPlanningEnterprise2026() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-19"
        modifiedDate="2026-04-19"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Enterprise AI financial planning
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI budget planning,
                <span className="brand-gradient-text block">without fantasy math.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This framework helps enterprise teams plan AI budgets across infrastructure, talent, software, and services while
                modeling payback, contingency reserves, and value realization over a three-year horizon. It is meant to support
                actual capital allocation, not just present a glossy “innovation” number.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-investment-decision-framework-2026" className="btn-brand">
                  Open investment framework
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/ai-implementation-cost-calculator-enterprise-2026" className="btn-secondary">
                  Review implementation cost model
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {overviewStats.map((item) => (
                  <div key={item.label} className="page-card p-4 bg-white/90">
                    <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
                    <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-500 mt-1">{item.note}</div>
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
                      <div className="text-sm text-slate-500 mb-1">Budget model</div>
                      <div className="text-xl font-semibold text-slate-950">Typical allocation split</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      2026 planning
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border-2 border-dashed border-slate-200 bg-slate-50 px-5 py-6 text-center mb-4">
                    <div className="text-sm text-slate-500 mb-2">Total AI budget</div>
                    <div className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 mb-2">$47.0M</div>
                    <div className="text-sm text-slate-500">Annual allocation baseline</div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {calculatorBreakdown.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                        <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mt-1">{item.value}</div>
                        <div className="text-xs text-slate-500 mt-1">{item.share}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 mb-16">
          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">AI budget allocation framework</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {costCategories.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <div className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      {item.share}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.note}</p>
                  <div className="text-sm font-semibold text-slate-900">{item.range}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Cost optimization strategies</h2>
            </div>
            <div className="space-y-4">
              {optimizationGroups.map((group) => (
                <div key={group.title} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-950 mb-4">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">ROI forecasting</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Enterprise AI value shows up
              <span className="block brand-gradient-text">on a multi-year curve.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Budget planning is incomplete without a time-phased ROI model. These forecast cards keep the investment, revenue lift,
              operating savings, and payback assumptions visible from foundation year through maturity.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 mb-6">
            {forecastYears.map((year) => (
              <div key={year.title} className="page-card p-7">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 mb-4">
                  <Clock3 className="h-3.5 w-3.5 mr-2" />
                  {year.title} · {year.strap}
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Investment</span>
                    <span className="font-semibold text-slate-950">{year.investment}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Revenue impact</span>
                    <span className="font-semibold text-indigo-600">{year.revenue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Cost savings</span>
                    <span className="font-semibold text-sky-600">{year.savings}</span>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-900">Net ROI</span>
                      <span className="font-semibold text-indigo-700">{year.roi}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{year.note}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="page-card-glow p-8 surface-muted">
            <div className="grid md:grid-cols-4 gap-4">
              {cumulativeStats.map((item) => (
                <div key={item.label} className="page-card p-5 text-center">
                  <div className="text-sm font-semibold text-slate-900 mb-2">{item.label}</div>
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
                  <div className="text-sm text-slate-500">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-[1.02fr_0.98fr] gap-6 mb-16">
          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Risk assessment and contingency</h2>
            </div>
            <div className="space-y-4">
              {riskFactors.map((risk) => (
                <div key={risk.title} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-950 mb-2">{risk.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{risk.note}</p>
                  <div className="flex gap-4 text-xs font-semibold text-slate-500">
                    <span>Impact: {risk.impact}</span>
                    <span>Probability: {risk.probability}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Contingency budget framework</h2>
            </div>
            <div className="space-y-4 mb-6">
              {contingencyCards.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-900 mb-2">{item.title}</div>
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
                  <div className="text-sm text-slate-600">{item.note}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.subnote}</div>
                </div>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900 mb-4">Budget deployment timeline</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {timeline.map((item) => (
                  <div key={item.quarter} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                    <div className="text-sm font-semibold text-slate-900">{item.quarter}</div>
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mt-1">{item.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="page-card p-8">
            <div className="text-sm uppercase tracking-[0.18em] text-indigo-600/80 mb-3">Cost reduction</div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">Budget optimization recommendations</h2>
            <div className="space-y-4">
              {recommendations.costReduction.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/60 p-5">
                  <h3 className="font-semibold text-indigo-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.note}</p>
                  <div className="text-sm font-semibold text-indigo-700">Potential savings: {item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8">
            <div className="text-sm uppercase tracking-[0.18em] text-indigo-600/80 mb-3">Value acceleration</div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">Where upside can arrive faster</h2>
            <div className="space-y-4">
              {recommendations.acceleration.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/60 p-5">
                  <h3 className="font-semibold text-indigo-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.note}</p>
                  <div className="text-sm font-semibold text-indigo-700">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Related enterprise tools</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Budget planning gets sharper
              <span className="block brand-gradient-text">when it connects to the rest of the stack.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              These supporting pages help teams move from budget sizing into prioritization, ROI scoring, and detailed implementation cost work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {relatedTools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="page-card p-6 hover:-translate-y-0.5 transition-transform">
                <h3 className="text-xl font-semibold text-slate-950 mb-2">{tool.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{tool.description}</p>
                <div className="inline-flex items-center text-[#635bff] font-semibold">
                  Open tool
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
