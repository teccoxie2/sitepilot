'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  Sparkles,
  Target,
} from 'lucide-react'

type CompanySize = '1000-5000' | '5000-15000' | '15000-50000' | '50000+'
type Industry =
  | 'financial-services'
  | 'healthcare'
  | 'manufacturing'
  | 'technology'
  | 'retail'
  | 'energy'
  | 'government'
  | 'other'
type Scope =
  | 'pilot'
  | 'multi-department'
  | 'enterprise-wide'
  | 'customer-facing'
  | 'internal-operations'
  | 'full-transformation'
type Timeline = '6' | '12' | '18' | '24'
type UseCase =
  | 'customer-service'
  | 'predictive-analytics'
  | 'process-automation'
  | 'fraud-detection'
  | 'personalization'
  | 'document-processing'

const sizeFactors: Record<CompanySize, number> = {
  '1000-5000': 1,
  '5000-15000': 1.22,
  '15000-50000': 1.52,
  '50000+': 1.95,
}

const industryFactors: Record<Industry, number> = {
  'financial-services': 1.25,
  healthcare: 1.3,
  manufacturing: 1.08,
  technology: 1.05,
  retail: 1,
  energy: 1.15,
  government: 1.2,
  other: 1,
}

const scopeFactors: Record<Scope, number> = {
  pilot: 0.62,
  'multi-department': 0.95,
  'enterprise-wide': 1.25,
  'customer-facing': 0.92,
  'internal-operations': 0.85,
  'full-transformation': 1.5,
}

const timelineFactors: Record<Timeline, number> = {
  '6': 1.18,
  '12': 1,
  '18': 0.94,
  '24': 0.9,
}

const useCaseWeights: Record<UseCase, number> = {
  'customer-service': 0.1,
  'predictive-analytics': 0.12,
  'process-automation': 0.11,
  'fraud-detection': 0.14,
  personalization: 0.1,
  'document-processing': 0.09,
}

const useCaseLabels: { value: UseCase; label: string }[] = [
  { value: 'customer-service', label: 'Customer service automation' },
  { value: 'predictive-analytics', label: 'Predictive analytics' },
  { value: 'process-automation', label: 'Process automation' },
  { value: 'fraud-detection', label: 'Fraud detection' },
  { value: 'personalization', label: 'Personalization engine' },
  { value: 'document-processing', label: 'Document processing' },
]

const quickNav = [
  { href: '#calculator', title: 'Calculator', note: 'Enter scope, timeline, and use cases' },
  { href: '#breakdown', title: 'Cost breakdown', note: 'Implementation and annual operating cost' },
  { href: '#roi', title: '3-year model', note: 'Benefit, payback, and risk-adjusted ROI' },
  { href: '#risks', title: 'Risk factors', note: 'Where budgets usually drift' },
  { href: '#next-steps', title: 'Next steps', note: 'How to turn the estimate into a real budget plan' },
] as const

const riskFactors = [
  {
    title: 'Scope creep',
    impact: '+25% to +40%',
    note: 'New use cases and stakeholder requests appear after build work has already started.',
    tone: 'border-rose-200 bg-rose-50 text-rose-900',
  },
  {
    title: 'Integration complexity',
    impact: '+15% to +30%',
    note: 'Legacy systems, security reviews, and workflow mapping often take longer than expected.',
    tone: 'border-rose-200 bg-rose-50 text-rose-900',
  },
  {
    title: 'Data quality issues',
    impact: '+10% to +25%',
    note: 'Unplanned data cleaning, lineage work, and access remediation expand both timeline and spend.',
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
  },
  {
    title: 'Adoption resistance',
    impact: '+10% to +20%',
    note: 'Training, support, and redesign effort rises when teams are not prepared for workflow change.',
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
  },
] as const

const costControlPractices = [
  'Invest 15% to 20% of budget in planning and requirements discovery',
  'Start with a tightly bounded pilot before full enterprise rollout',
  'Secure executive sponsorship early enough to protect scope discipline',
  'Run monthly cost, value, and risk reviews with cross-functional owners',
] as const

const relatedResources = [
  {
    href: '/ai-implementation-checklist-enterprise-2026',
    title: 'Implementation checklist',
    description: 'Map the budget estimate to the rollout phases and action items that actually consume it.',
  },
  {
    href: '/ai-investment-roi-calculator-enterprise-2026',
    title: 'AI ROI calculator',
    description: 'Pressure-test value assumptions with a more finance-oriented ROI view.',
  },
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'AI governance framework',
    description: 'Budget governance, security, and evidence work before rollout forces them in later.',
  },
  {
    href: '/contact',
    title: 'Custom cost analysis',
    description: 'Get a more specific estimate for your industry, architecture, and delivery model.',
  },
] as const

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function formatRange(low: number, high: number) {
  return `${formatCurrency(low)} - ${formatCurrency(high)}`
}

export default function AIImplementationCostCalculatorClient() {
  const [companySize, setCompanySize] = useState<CompanySize>('5000-15000')
  const [industry, setIndustry] = useState<Industry>('financial-services')
  const [scope, setScope] = useState<Scope>('enterprise-wide')
  const [timeline, setTimeline] = useState<Timeline>('12')
  const [useCases, setUseCases] = useState<UseCase[]>(['customer-service', 'predictive-analytics', 'process-automation'])

  const baseImplementationCost = 1800000
  const useCaseFactor = 1 + useCases.reduce((total, key) => total + useCaseWeights[key], 0)
  const totalImplementationCost =
    baseImplementationCost *
    sizeFactors[companySize] *
    industryFactors[industry] *
    scopeFactors[scope] *
    timelineFactors[timeline] *
    useCaseFactor

  const softwareCost = totalImplementationCost * 0.24
  const servicesCost = totalImplementationCost * 0.31
  const infrastructureCost = totalImplementationCost * 0.16
  const trainingCost = totalImplementationCost * 0.12
  const integrationCost = totalImplementationCost * 0.17
  const contingencyCost = totalImplementationCost * 0.15
  const implementationWithContingency = totalImplementationCost + contingencyCost

  const annualOperatingCost = implementationWithContingency * 0.42
  const annualCostSavings = totalImplementationCost * 0.56
  const annualRevenueLift = totalImplementationCost * 0.31
  const annualBenefit = annualCostSavings + annualRevenueLift

  const complexityScore =
    scope === 'full-transformation' ? 0.18 : scope === 'enterprise-wide' ? 0.12 : scope === 'multi-department' ? 0.08 : 0.05
  const timelinePenalty = timeline === '6' ? 0.08 : timeline === '12' ? 0.04 : 0.02
  const riskAdjustment = Math.max(0.68, 0.92 - complexityScore - timelinePenalty)

  const year1Net = -(implementationWithContingency + annualOperatingCost) + annualBenefit * 0.38
  const year2Net = annualBenefit * 0.78 - annualOperatingCost
  const year3Net = annualBenefit - annualOperatingCost
  const totalNetBenefit = year1Net + year2Net + year3Net
  const roi = Math.round((totalNetBenefit / (implementationWithContingency + annualOperatingCost * 3)) * 100)
  const riskAdjustedROI = Math.round(roi * riskAdjustment)
  const monthlyNetBenefit = (annualBenefit - annualOperatingCost) / 12
  const breakEvenMonths = Math.max(9, Math.round(implementationWithContingency / Math.max(monthlyNetBenefit, 1)))

  const summaryCards = [
    { value: formatCurrency(Math.round(implementationWithContingency)), label: 'Estimated implementation budget' },
    { value: formatCurrency(Math.round(annualOperatingCost)), label: 'Estimated annual operating cost' },
    { value: `${riskAdjustedROI}%`, label: 'Risk-adjusted 3-year ROI' },
    { value: `${breakEvenMonths} months`, label: 'Estimated break-even timing' },
  ]

  function toggleUseCase(useCase: UseCase) {
    setUseCases((current) => {
      if (current.includes(useCase)) {
        if (current.length === 1) {
          return current
        }
        return current.filter((item) => item !== useCase)
      }
      return [...current, useCase]
    })
  }

  return (
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
                Enterprise AI cost planning
              </div>

              <h1 className="page-title mb-6 text-5xl md:text-7xl">
                Budget the AI rollout
                <span className="brand-gradient-text block">before the rollout starts inventing its own cost structure.</span>
              </h1>

              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                Use this calculator to estimate implementation cost, annual operating burden, 3-year ROI, and break-even timing for a realistic enterprise AI deployment.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a href="#calculator" className="btn-brand">
                  Open calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-investment-roi-calculator-enterprise-2026" className="btn-secondary">
                  Compare ROI model
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {summaryCards.map((card) => (
                  <div key={card.label} className="page-card p-4 bg-white/90">
                    <div className="mb-1 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{card.value}</div>
                    <div className="text-sm text-slate-500">{card.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card space-y-6 bg-white/95 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="mb-1 text-sm text-slate-500">Planning map</div>
                      <div className="text-xl font-semibold text-slate-950">What this page covers</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      3-year model
                    </div>
                  </div>

                  <div className="space-y-3">
                    {quickNav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 transition hover:border-indigo-200 hover:bg-indigo-50/50"
                      >
                        <div>
                          <div className="font-semibold text-slate-950">{item.title}</div>
                          <div className="text-sm text-slate-500">{item.note}</div>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 text-slate-400" />
                      </a>
                    ))}
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Benchmark snapshot</div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        '$2.5M average enterprise implementation',
                        '245% average 3-year ROI',
                        '18-month average break-even',
                        '85% success rate with planning discipline',
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/80 bg-white px-4 py-3 text-sm text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="page-section relative">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Calculator className="h-4 w-4 text-[#635bff]" />
              Interactive calculator
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Estimate implementation cost from company size, scope, timeline, and use-case load.
            </h2>
            <p className="page-lead text-base md:text-lg">
              This route keeps the original calculator intent but replaces the static form shell with a usable planning model and a cleaner Stripe-ish tool layout.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="page-card p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Company size</label>
                  <select
                    value={companySize}
                    onChange={(event) => setCompanySize(event.target.value as CompanySize)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                  >
                    <option value="1000-5000">1,000-5,000 employees</option>
                    <option value="5000-15000">5,000-15,000 employees</option>
                    <option value="15000-50000">15,000-50,000 employees</option>
                    <option value="50000+">50,000+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Industry</label>
                  <select
                    value={industry}
                    onChange={(event) => setIndustry(event.target.value as Industry)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                  >
                    <option value="financial-services">Financial services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="technology">Technology</option>
                    <option value="retail">Retail and e-commerce</option>
                    <option value="energy">Energy and utilities</option>
                    <option value="government">Government</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Implementation scope</label>
                  <select
                    value={scope}
                    onChange={(event) => setScope(event.target.value as Scope)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                  >
                    <option value="pilot">Single department pilot</option>
                    <option value="multi-department">Multiple departments</option>
                    <option value="enterprise-wide">Enterprise-wide</option>
                    <option value="customer-facing">Customer-facing only</option>
                    <option value="internal-operations">Internal operations only</option>
                    <option value="full-transformation">Full digital transformation</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Expected timeline</label>
                  <select
                    value={timeline}
                    onChange={(event) => setTimeline(event.target.value as Timeline)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                  >
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                    <option value="18">18 months</option>
                    <option value="24">24+ months</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-3 text-sm font-semibold text-slate-700">Use-case categories</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {useCaseLabels.map((useCase) => (
                    <label
                      key={useCase.value}
                      className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition ${
                        useCases.includes(useCase.value)
                          ? 'border-indigo-200 bg-indigo-50/70'
                          : 'border-slate-200 bg-slate-50/80 hover:border-indigo-200 hover:bg-indigo-50/40'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={useCases.includes(useCase.value)}
                        onChange={() => toggleUseCase(useCase.value)}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#635bff]"
                      />
                      <span className="text-sm text-slate-700">{useCase.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="page-card-soft p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Estimate preview</div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Cost and ROI snapshot</h3>
                </div>
                <DollarSign className="h-7 w-7 text-indigo-600" />
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                  <div className="text-sm text-slate-500">Estimated implementation budget</div>
                  <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                    {formatRange(Math.round(implementationWithContingency * 0.88), Math.round(implementationWithContingency * 1.18))}
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                  <div className="mb-2 text-sm text-slate-500">Projected 3-year ROI</div>
                  <div className="text-4xl font-semibold tracking-[-0.05em] text-indigo-600">{riskAdjustedROI}%</div>
                  <div className="mt-2 text-sm text-slate-600">Risk-adjusted against scope complexity and timeline pressure.</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                    <div className="text-sm text-slate-500">Break-even</div>
                    <div className="mt-2 text-2xl font-semibold text-slate-950">{breakEvenMonths} months</div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                    <div className="text-sm text-slate-500">Annual operating cost</div>
                    <div className="mt-2 text-2xl font-semibold text-slate-950">{formatCurrency(Math.round(annualOperatingCost))}</div>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-indigo-200 bg-indigo-50/80 p-5">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Planning note</div>
                  <p className="text-sm leading-6 text-indigo-950">
                    Budget overruns are usually driven by integration, data work, and change management. This estimate keeps contingency visible instead of hiding it in line-item optimism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="breakdown" className="page-section relative border-t border-slate-200/70 bg-white/70">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <BarChart3 className="h-4 w-4 text-[#635bff]" />
              Cost breakdown
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Keep implementation cost visible by category before it turns into one oversized project number.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="page-card p-8">
              <h3 className="mb-5 text-2xl font-semibold tracking-[-0.04em] text-slate-950">Initial implementation costs</h3>
              <div className="space-y-4">
                {[
                  ['Software and licensing', softwareCost],
                  ['Professional services', servicesCost],
                  ['Infrastructure', infrastructureCost],
                  ['Training and change management', trainingCost],
                  ['Integration and testing', integrationCost],
                  ['Contingency', contingencyCost],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="text-sm text-slate-600">{label}</span>
                    <span className="font-semibold text-slate-950">{formatCurrency(Math.round(Number(value)))}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card p-8">
              <h3 className="mb-5 text-2xl font-semibold tracking-[-0.04em] text-slate-950">Annual operating costs</h3>
              <div className="space-y-4">
                {[
                  ['Platform renewals and support', annualOperatingCost * 0.34],
                  ['Cloud and storage operations', annualOperatingCost * 0.28],
                  ['Security and monitoring', annualOperatingCost * 0.11],
                  ['AI specialists and delivery team', annualOperatingCost * 0.22],
                  ['Training and optimization', annualOperatingCost * 0.05],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="text-sm text-slate-600">{label}</span>
                    <span className="font-semibold text-slate-950">{formatCurrency(Math.round(Number(value)))}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[1.5rem] border border-amber-200 bg-amber-50 px-5 py-4">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Annual operational total</div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-amber-900">
                  {formatCurrency(Math.round(annualOperatingCost))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roi" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Target className="h-4 w-4 text-[#635bff]" />
              3-year model
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Model cash impact across three years instead of pretending the implementation ends at launch.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Year 1', year1Net, annualBenefit * 0.38, annualOperatingCost],
              ['Year 2', year2Net, annualBenefit * 0.78, annualOperatingCost],
              ['Year 3', year3Net, annualBenefit, annualOperatingCost],
            ].map(([year, net, benefit, cost]) => (
              <div key={year} className="page-card p-6">
                <h3 className="mb-4 text-xl font-semibold text-slate-950">{year}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-600">Projected benefit</span>
                    <span className="font-semibold text-indigo-600">{formatCurrency(Math.round(Number(benefit)))}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-600">Operating cost</span>
                    <span className="font-semibold text-rose-600">-{formatCurrency(Math.round(Number(cost)))}</span>
                  </div>
                  {year === 'Year 1' && (
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-600">Implementation cost</span>
                      <span className="font-semibold text-rose-600">-{formatCurrency(Math.round(implementationWithContingency))}</span>
                    </div>
                  )}
                  <div className="border-t border-slate-200 pt-3 flex items-center justify-between gap-4">
                    <span className="font-semibold text-slate-900">Net impact</span>
                    <span className={`font-semibold ${Number(net) >= 0 ? 'text-indigo-600' : 'text-rose-600'}`}>
                      {Number(net) >= 0 ? '' : '-'}
                      {formatCurrency(Math.round(Math.abs(Number(net))))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 page-card-glow p-1">
            <div className="page-card bg-slate-950 p-8 text-white">
              <div className="grid gap-4 md:grid-cols-4">
                <div>
                  <div className="text-sm text-slate-300">Net 3-year benefit</div>
                  <div className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{formatCurrency(Math.round(totalNetBenefit))}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-300">Base ROI</div>
                  <div className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{roi}%</div>
                </div>
                <div>
                  <div className="text-sm text-slate-300">Risk-adjusted ROI</div>
                  <div className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{riskAdjustedROI}%</div>
                </div>
                <div>
                  <div className="text-sm text-slate-300">Break-even timing</div>
                  <div className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{breakEvenMonths} months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="risks" className="page-section relative border-t border-slate-200/70 bg-white/70">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="page-card p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Budget risk</div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Where budgets usually overrun</h2>
                </div>
                <AlertTriangle className="h-7 w-7 text-amber-600" />
              </div>
              <div className="space-y-4">
                {riskFactors.map((risk) => (
                  <div key={risk.title} className={`rounded-[1.5rem] border p-5 ${risk.tone}`}>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <h3 className="font-semibold">{risk.title}</h3>
                      <span className="text-sm font-semibold">{risk.impact}</span>
                    </div>
                    <p className="text-sm leading-6">{risk.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card-soft p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Cost control</div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Practices that keep the estimate usable</h2>
                </div>
                <Shield className="h-7 w-7 text-indigo-600" />
              </div>
              <div className="space-y-4">
                {costControlPractices.map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                    <div className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="next-steps" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="page-card-soft p-8">
              <div className="page-pill mb-4">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Next step
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                Turn the estimate into a real implementation plan before you take it to finance.
              </h2>
              <p className="page-lead mb-6 text-base md:text-lg">
                Use the checklist, governance framework, and ROI model together. Budget planning gets materially better when scope, controls, and payback assumptions are reviewed as one system.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-brand">
                  Get custom cost analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/ai-implementation-checklist-enterprise-2026" className="btn-secondary">
                  Review checklist
                </Link>
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">Related resources</div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Keep the planning cluster connected</h2>
                </div>
                <ArrowRight className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-4">
                {relatedResources.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="block rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/50"
                  >
                    <h3 className="font-semibold text-slate-950">{resource.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{resource.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
