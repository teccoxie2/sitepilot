import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  CalculatorIcon,
  ChartBarIcon,
  ClockIcon,
  CogIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Budget Template for Enterprise 2026 | Complete Financial Planning'
const pageDescription =
  'Comprehensive AI budget template for enterprise organizations, including cost categories, ROI calculations, financial projections, and phased rollout assumptions.'
const pageUrl = 'https://sitepilot.co/ai-budget-template-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'AI budget template, enterprise AI costs, AI investment planning, digital transformation budget, AI ROI calculator, enterprise AI financial planning',
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

const summaryCards = [
  { value: '$500K - $50M', label: 'Total investment range' },
  { value: '12-24 months', label: 'Typical path to positive ROI' },
  { value: '200-400%', label: 'Three-year ROI target' },
  { value: '40-50%', label: 'Typical technology allocation' },
]

const budgetCategories = [
  {
    category: 'Technology and infrastructure',
    percentage: '40-50%',
    icon: <CogIcon className="w-6 h-6 text-sky-600" />,
    items: [
      { item: 'AI platform licenses', range: '$50K - $500K', description: 'Core AI tools and platform subscriptions.' },
      { item: 'Cloud infrastructure', range: '$30K - $300K', description: 'Computing, storage, and networking resources.' },
      { item: 'Data infrastructure', range: '$25K - $200K', description: 'Data pipelines, warehouses, and processing.' },
      { item: 'Integration costs', range: '$20K - $150K', description: 'API development and system integration.' },
      { item: 'Security and compliance', range: '$15K - $100K', description: 'Security tools and compliance frameworks.' },
    ],
  },
  {
    category: 'Human resources',
    percentage: '30-40%',
    icon: <UsersIcon className="w-6 h-6 text-indigo-600" />,
    items: [
      { item: 'AI talent acquisition', range: '$100K - $800K', description: 'Data scientists, ML engineers, and AI specialists.' },
      { item: 'Training and development', range: '$20K - $150K', description: 'Upskilling the existing workforce.' },
      { item: 'Change management', range: '$30K - $200K', description: 'Consulting and change management support.' },
      { item: 'External consultants', range: '$50K - $300K', description: 'Specialized AI implementation consultants.' },
    ],
  },
  {
    category: 'Operations and maintenance',
    percentage: '15-25%',
    icon: <BuildingOfficeIcon className="w-6 h-6 text-orange-600" />,
    items: [
      { item: 'Ongoing support', range: '$25K - $200K', description: 'Technical support and maintenance.' },
      { item: 'Monitoring and analytics', range: '$15K - $100K', description: 'Performance monitoring and reporting tools.' },
      { item: 'Continuous improvement', range: '$20K - $150K', description: 'Model optimization and enhancement.' },
      { item: 'Vendor management', range: '$10K - $50K', description: 'Vendor relationship and contract management.' },
    ],
  },
  {
    category: 'Risk and contingency',
    percentage: '10-15%',
    icon: <ShieldCheckIcon className="w-6 h-6 text-rose-600" />,
    items: [
      { item: 'Implementation overruns', range: '10-20% of total', description: 'Buffer for unexpected cost increases.' },
      { item: 'Technology pivot', range: '5-10% of total', description: 'Contingency for technology changes.' },
      { item: 'Compliance changes', range: '$10K - $100K', description: 'Regulatory and compliance adaptations.' },
    ],
  },
]

const budgetByCompanySize = [
  {
    size: 'Small enterprise',
    employees: '500-1,000',
    totalBudget: '$500K - $2M',
    breakdown: [
      { category: 'Technology', amount: '$200K - $900K', percentage: '40-45%' },
      { category: 'Human resources', amount: '$150K - $700K', percentage: '30-35%' },
      { category: 'Operations', amount: '$100K - $400K', percentage: '20-25%' },
      { category: 'Risk buffer', amount: '$50K - $200K', percentage: '10%' },
    ],
  },
  {
    size: 'Medium enterprise',
    employees: '1,000-5,000',
    totalBudget: '$2M - $10M',
    breakdown: [
      { category: 'Technology', amount: '$800K - $4.5M', percentage: '40-45%' },
      { category: 'Human resources', amount: '$600K - $3.5M', percentage: '30-35%' },
      { category: 'Operations', amount: '$400K - $2M', percentage: '20-25%' },
      { category: 'Risk buffer', amount: '$200K - $1M', percentage: '10%' },
    ],
  },
  {
    size: 'Large enterprise',
    employees: '5,000+',
    totalBudget: '$10M - $50M+',
    breakdown: [
      { category: 'Technology', amount: '$4M - $22.5M', percentage: '40-45%' },
      { category: 'Human resources', amount: '$3M - $17.5M', percentage: '30-35%' },
      { category: 'Operations', amount: '$2M - $12.5M', percentage: '20-25%' },
      { category: 'Risk buffer', amount: '$1M - $5M', percentage: '10%' },
    ],
  },
]

const phasedInvestment = [
  {
    phase: 'Year 1: Foundation',
    percentage: '50-60%',
    description: 'Infrastructure setup, initial tools, and team building.',
    activities: ['Platform setup', 'Core team hiring', 'Initial training', 'Pilot projects'],
  },
  {
    phase: 'Year 2: Expansion',
    percentage: '25-35%',
    description: 'Scaled deployment, advanced tools, and broader use cases.',
    activities: ['Scaled deployment', 'Advanced features', 'Department expansion', 'Process optimization'],
  },
  {
    phase: 'Year 3+: Optimization',
    percentage: '15-25%',
    description: 'Continuous improvement, innovation, and emerging technology adoption.',
    activities: ['Innovation projects', 'Emerging tech', 'Continuous optimization', 'Strategic expansion'],
  },
]

const roiCalculator = {
  benefits: [
    {
      category: 'Productivity gains',
      calculation: '25-40% improvement multiplied by employee costs',
      example: '$500K annual savings for 100 employees',
    },
    {
      category: 'Cost reduction',
      calculation: '15-30% operational cost savings',
      example: '$300K annual savings in operations',
    },
    {
      category: 'Revenue growth',
      calculation: '5-15% revenue increase',
      example: '$1M additional revenue annually',
    },
    {
      category: 'Risk mitigation',
      calculation: 'Avoided costs from errors and delays',
      example: '$200K in avoided compliance costs',
    },
  ],
  timeline: [
    { period: 'Month 1-6', roi: 'Negative ROI', description: 'Investment phase with minimal returns.' },
    { period: 'Month 7-12', roi: '0-50% ROI', description: 'Initial productivity gains emerge.' },
    { period: 'Month 13-24', roi: '100-200% ROI', description: 'Material productivity and cost savings.' },
    { period: 'Month 25+', roi: '200-400% ROI', description: 'Optimized operations and innovation benefits.' },
  ],
}

const budgetTemplate = [
  {
    category: 'Technology infrastructure',
    items: [
      { line: 'AI platform licenses', q1: '$50,000', q2: '$25,000', q3: '$25,000', q4: '$25,000', annual: '$125,000' },
      { line: 'Cloud computing (AWS/Azure/GCP)', q1: '$30,000', q2: '$40,000', q3: '$45,000', q4: '$50,000', annual: '$165,000' },
      { line: 'Data infrastructure and storage', q1: '$25,000', q2: '$15,000', q3: '$15,000', q4: '$15,000', annual: '$70,000' },
      { line: 'Integration and API development', q1: '$40,000', q2: '$20,000', q3: '$10,000', q4: '$5,000', annual: '$75,000' },
      { line: 'Security and compliance tools', q1: '$20,000', q2: '$5,000', q3: '$5,000', q4: '$5,000', annual: '$35,000' },
    ],
    subtotal: { q1: '$165,000', q2: '$105,000', q3: '$100,000', q4: '$100,000', annual: '$470,000' },
  },
  {
    category: 'Human resources',
    items: [
      { line: 'AI team salaries and benefits', q1: '$150,000', q2: '$150,000', q3: '$150,000', q4: '$150,000', annual: '$600,000' },
      { line: 'Training and skill development', q1: '$25,000', q2: '$15,000', q3: '$10,000', q4: '$10,000', annual: '$60,000' },
      { line: 'External consultants', q1: '$50,000', q2: '$30,000', q3: '$20,000', q4: '$10,000', annual: '$110,000' },
      { line: 'Change management support', q1: '$30,000', q2: '$20,000', q3: '$15,000', q4: '$10,000', annual: '$75,000' },
    ],
    subtotal: { q1: '$255,000', q2: '$215,000', q3: '$195,000', q4: '$180,000', annual: '$845,000' },
  },
  {
    category: 'Operations and maintenance',
    items: [
      { line: 'Ongoing support and maintenance', q1: '$15,000', q2: '$25,000', q3: '$30,000', q4: '$35,000', annual: '$105,000' },
      { line: 'Monitoring and analytics', q1: '$10,000', q2: '$15,000', q3: '$15,000', q4: '$15,000', annual: '$55,000' },
      { line: 'Performance optimization', q1: '$5,000', q2: '$15,000', q3: '$20,000', q4: '$25,000', annual: '$65,000' },
    ],
    subtotal: { q1: '$30,000', q2: '$55,000', q3: '$65,000', q4: '$75,000', annual: '$225,000' },
  },
]

const grandTotal = {
  q1: '$450,000',
  q2: '$375,000',
  q3: '$360,000',
  q4: '$355,000',
  annual: '$1,540,000',
}

const planningConsiderations = [
  'Add 15-25% contingency for unexpected costs and scope changes.',
  'Factor in opportunity costs during transition periods.',
  'Use phased rollout to spread costs and reduce execution risk.',
  'Include change management and training costs that teams often underestimate.',
  'Plan for ongoing optimization and maintenance rather than only launch spend.',
]

const relatedLinks = [
  {
    href: '/ai-budget-planning-enterprise-2026',
    title: 'Budget planning framework',
    description: 'Move from template values into enterprise allocation strategy and forecasting logic.',
  },
  {
    href: '/ai-investment-decision-framework-2026',
    title: 'Investment decision framework',
    description: 'Prioritize AI initiatives after the base budget envelope is set.',
  },
  {
    href: '/apply-for-audit',
    title: 'Custom budget analysis',
    description: 'Escalate into a deeper advisory path when the standard template is not enough.',
  },
]

export default function AIBudgetTemplatePage() {
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
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[36rem] h-[28rem] bg-[radial-gradient(circle_at_18%_22%,rgba(99,91,255,0.05),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_54%_82%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                CFO-oriented budget template
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Enterprise AI budget template,
                <span className="brand-gradient-text block">with real line items.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This page turns enterprise AI budgeting into a practical planning template with category ranges, quarterly sample
                numbers, ROI timing, and phased investment guidance. It is meant to help finance and transformation teams build a
                defensible starting budget, not just admire a benchmark chart.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-budget-planning-enterprise-2026" className="btn-brand">
                  Open planning framework
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/ai-investment-decision-framework-2026" className="btn-secondary">
                  Review investment sequencing
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {summaryCards.map((item) => (
                  <div key={item.label} className="page-card p-4 bg-white/90">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
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
                      <div className="text-sm text-slate-500 mb-1">Template snapshot</div>
                      <div className="text-xl font-semibold text-slate-950">Sample annual budget</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      2026 model
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-5 py-5 mb-4">
                    <div className="text-sm text-slate-500 mb-2">Grand annual total</div>
                    <div className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">{grandTotal.annual}</div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      ['Q1', grandTotal.q1],
                      ['Q2', grandTotal.q2],
                      ['Q3', grandTotal.q3],
                      ['Q4', grandTotal.q4],
                    ].map(([quarter, value]) => (
                      <div key={quarter} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                        <div className="text-sm font-semibold text-slate-900">{quarter}</div>
                        <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mt-1">{value}</div>
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
        <section className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Budget categories</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Start with the category mix,
              <span className="block brand-gradient-text">not the vendor shortlist.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Technology spend is only part of the AI program. Talent, operations, and contingency planning drive the actual budget
              shape, especially once implementations leave pilot mode.
            </p>
          </div>

          <div className="grid gap-5">
            {budgetCategories.map((category) => (
              <div key={category.category} className="page-card p-7">
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{category.category}</h3>
                  <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {category.percentage}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {category.items.map((item) => (
                    <div key={item.item} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                      <div className="font-semibold text-slate-950 mb-2">{item.item}</div>
                      <div className="text-lg font-semibold text-indigo-700 mb-2">{item.range}</div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 mb-16">
          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <BuildingOfficeIcon className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Budget by company size</h2>
            </div>
            <div className="space-y-4">
              {budgetByCompanySize.map((size) => (
                <div key={size.size} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">{size.size}</h3>
                      <p className="text-sm text-slate-500">{size.employees} employees</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{size.totalBudget}</div>
                      <div className="text-xs text-slate-500">Total annual budget</div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {size.breakdown.map((item) => (
                      <div key={item.category} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                        <div className="text-sm font-semibold text-slate-900">{item.category}</div>
                        <div className="text-lg font-semibold text-slate-950 mt-1">{item.amount}</div>
                        <div className="text-xs text-slate-500 mt-1">{item.percentage}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <CalculatorIcon className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Sample annual budget template</h2>
            </div>
            <div className="overflow-x-auto page-card-soft">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left px-4 py-4 font-semibold text-slate-500 uppercase tracking-[0.12em]">Category / line item</th>
                    <th className="text-center px-4 py-4 font-semibold text-slate-500 uppercase tracking-[0.12em]">Q1</th>
                    <th className="text-center px-4 py-4 font-semibold text-slate-500 uppercase tracking-[0.12em]">Q2</th>
                    <th className="text-center px-4 py-4 font-semibold text-slate-500 uppercase tracking-[0.12em]">Q3</th>
                    <th className="text-center px-4 py-4 font-semibold text-slate-500 uppercase tracking-[0.12em]">Q4</th>
                    <th className="text-center px-4 py-4 font-semibold text-slate-500 uppercase tracking-[0.12em]">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {budgetTemplate.map((section) => (
                    <tbody key={section.category}>
                      <tr>
                        <td colSpan={6} className="px-4 py-4 bg-slate-100 font-semibold text-slate-700 uppercase tracking-[0.12em] text-xs">
                          {section.category}
                        </td>
                      </tr>
                      {section.items.map((item) => (
                        <tr key={item.line} className="bg-white">
                          <td className="px-4 py-4 font-medium text-slate-900">{item.line}</td>
                          <td className="px-4 py-4 text-center text-slate-600">{item.q1}</td>
                          <td className="px-4 py-4 text-center text-slate-600">{item.q2}</td>
                          <td className="px-4 py-4 text-center text-slate-600">{item.q3}</td>
                          <td className="px-4 py-4 text-center text-slate-600">{item.q4}</td>
                          <td className="px-4 py-4 text-center font-semibold text-indigo-700">{item.annual}</td>
                        </tr>
                      ))}
                      <tr className="bg-slate-50">
                        <td className="px-4 py-4 font-semibold text-slate-900">Subtotal</td>
                        <td className="px-4 py-4 text-center font-semibold text-slate-700">{section.subtotal.q1}</td>
                        <td className="px-4 py-4 text-center font-semibold text-slate-700">{section.subtotal.q2}</td>
                        <td className="px-4 py-4 text-center font-semibold text-slate-700">{section.subtotal.q3}</td>
                        <td className="px-4 py-4 text-center font-semibold text-slate-700">{section.subtotal.q4}</td>
                        <td className="px-4 py-4 text-center font-semibold text-slate-950">{section.subtotal.annual}</td>
                      </tr>
                    </tbody>
                  ))}
                  <tr className="bg-slate-950 text-white">
                    <td className="px-4 py-4 font-semibold">Grand total</td>
                    <td className="px-4 py-4 text-center font-semibold">{grandTotal.q1}</td>
                    <td className="px-4 py-4 text-center font-semibold">{grandTotal.q2}</td>
                    <td className="px-4 py-4 text-center font-semibold">{grandTotal.q3}</td>
                    <td className="px-4 py-4 text-center font-semibold">{grandTotal.q4}</td>
                    <td className="px-4 py-4 text-center font-semibold text-indigo-300">{grandTotal.annual}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <ChartBarIcon className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">ROI calculation framework</h2>
            </div>
            <div className="space-y-4 mb-6">
              {roiCalculator.benefits.map((benefit) => (
                <div key={benefit.category} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5">
                  <h3 className="font-semibold text-slate-950 mb-2">{benefit.category}</h3>
                  <p className="text-sm text-slate-600 mb-2">{benefit.calculation}</p>
                  <div className="text-sm font-semibold text-indigo-700">{benefit.example}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <ClockIcon className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">ROI timeline and phased investment</h2>
            </div>
            <div className="space-y-4 mb-6">
              {roiCalculator.timeline.map((item) => (
                <div key={item.period} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-slate-950">{item.period}</h3>
                    <div className="text-sm font-semibold text-indigo-700">{item.roi}</div>
                  </div>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4">
              {phasedInvestment.map((phase) => (
                <div key={phase.phase} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="font-semibold text-slate-950">{phase.phase}</h3>
                    <div className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      {phase.percentage}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-10 surface-muted mb-16">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
              <ExclamationTriangleIcon className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-amber-700/90 mb-3">Planning considerations</div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">What teams still underestimate</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {planningConsiderations.map((item) => (
                  <li key={item} className="page-card p-4 flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Next steps</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Use the template,
              <span className="block brand-gradient-text">then move into decision support.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              This page gives teams a planning baseline. The next step is turning that baseline into prioritized investments,
              implementation sequencing, and, when needed, a custom budget review.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {relatedLinks.map((item) => (
              <Link key={item.href} href={item.href} className="page-card p-6 hover:-translate-y-0.5 transition-transform">
                <h3 className="text-xl font-semibold text-slate-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{item.description}</p>
                <div className="inline-flex items-center text-[#635bff] font-semibold">
                  Open resource
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
