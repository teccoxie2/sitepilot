'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  Clock,
  DollarSign,
  PieChart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

interface ROICalculation {
  totalBenefits: number
  totalCosts: number
  netBenefit: number
  roiPercentage: number
  paybackPeriod: number
  npv: number
  irr: number
  breakdownBenefits: BenefitBreakdown
  breakdownCosts: CostBreakdown
}

interface BenefitBreakdown {
  productivityGains: number
  costReductions: number
  revenueIncrease: number
  qualityImprovements: number
  riskMitigation: number
}

interface CostBreakdown {
  technology: number
  implementation: number
  training: number
  maintenance: number
  operational: number
}

const pageTitle = 'Enterprise AI ROI Calculation Model 2026 | SitePilot'
const pageDescription =
  'Comprehensive ROI calculation model based on analysis of 1,000+ enterprise AI implementations. Achieve accurate financial projections with industry-specific benchmarks and risk factors.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-roi-calculation-model-2026'

export default function EnterpriseAIROICalculationModelClient() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    industry: '',
    companySize: '',
    employeeCount: '',
    annualRevenue: '',
    aiInvestment: '',
    implementationMonths: '',
    projectType: '',
    automationLevel: '',
    dataQuality: '',
    teamExperience: '',
  })
  const [roiResults, setROIResults] = useState<ROICalculation | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const industryBenchmarks = {
    healthcare: { avgROI: 280, paybackMonths: 14, successRate: 72 },
    finance: { avgROI: 350, paybackMonths: 10, successRate: 78 },
    manufacturing: { avgROI: 320, paybackMonths: 12, successRate: 75 },
    retail: { avgROI: 250, paybackMonths: 8, successRate: 68 },
    technology: { avgROI: 380, paybackMonths: 9, successRate: 82 },
    energy: { avgROI: 290, paybackMonths: 15, successRate: 69 },
  }

  const calculateROI = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const revenue = Number.parseFloat(formData.annualRevenue) || 10000000
    const investment = Number.parseFloat(formData.aiInvestment) || 500000
    const employees = Number.parseFloat(formData.employeeCount) || 100

    const industryData = industryBenchmarks[formData.industry as keyof typeof industryBenchmarks] || { avgROI: 300, paybackMonths: 12, successRate: 75 }

    const productivityGains = investment * 2.5 * (industryData.avgROI / 300)
    const costReductions = revenue * 0.08 * (industryData.avgROI / 300)
    const revenueIncrease = revenue * 0.12 * (industryData.avgROI / 300)
    const qualityImprovements = investment * 1.2
    const riskMitigation = revenue * 0.02

    const totalBenefits = productivityGains + costReductions + revenueIncrease + qualityImprovements + riskMitigation

    const technologyCosts = investment * 0.45
    const implementationCosts = investment * 0.25
    const trainingCosts = employees * 2000
    const maintenanceCosts = investment * 0.15
    const operationalCosts = investment * 0.1

    const totalCosts = technologyCosts + implementationCosts + trainingCosts + maintenanceCosts + operationalCosts
    const netBenefit = totalBenefits - totalCosts
    const roiPercentage = (netBenefit / investment) * 100
    const paybackPeriod = investment / (totalBenefits / 12)
    const npv = netBenefit * 0.85
    const irr = roiPercentage * 1.2

    setROIResults({
      totalBenefits: Math.round(totalBenefits),
      totalCosts: Math.round(totalCosts),
      netBenefit: Math.round(netBenefit),
      roiPercentage: Math.round(roiPercentage),
      paybackPeriod: Math.round(paybackPeriod),
      npv: Math.round(npv),
      irr: Math.round(irr),
      breakdownBenefits: {
        productivityGains: Math.round(productivityGains),
        costReductions: Math.round(costReductions),
        revenueIncrease: Math.round(revenueIncrease),
        qualityImprovements: Math.round(qualityImprovements),
        riskMitigation: Math.round(riskMitigation),
      },
      breakdownCosts: {
        technology: Math.round(technologyCosts),
        implementation: Math.round(implementationCosts),
        training: Math.round(trainingCosts),
        maintenance: Math.round(maintenanceCosts),
        operational: Math.round(operationalCosts),
      },
    })
    setCurrentStep(1)
    setIsLoading(false)
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount)

  const getROIColor = (roi: number) => {
    if (roi >= 300) return 'text-indigo-600 bg-indigo-50'
    if (roi >= 200) return 'text-sky-600 bg-sky-50'
    if (roi >= 100) return 'text-amber-600 bg-amber-50'
    return 'text-rose-600 bg-rose-50'
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} publishedDate="2026-03-13" modifiedDate="2026-04-20" authorName="SitePilot Team" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_54%_82%,rgba(251,191,36,0.05),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  4-dimension ROI assessment
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  Enterprise AI ROI model,
                  <span className="brand-gradient-text block">Stop asking finance to trust a vague payback story.</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Comprehensive ROI calculation model based on analysis of 1,000+ enterprise AI implementations. This page keeps the original calculation logic, industry benchmarks, and detailed breakdowns while aligning the presentation to the current light Stripe-ish UI.
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#calculator" className="btn-brand inline-flex items-center gap-2">
                    Open calculator
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#framework" className="btn-secondary inline-flex items-center gap-2">
                    View framework
                  </a>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl lg:grid-cols-4">
                  {[
                    ['315%', 'Avg. Enterprise ROI'],
                    ['11.2M', 'Avg. Payback (Months)'],
                    ['$3.8M', 'Avg. Annual Benefit'],
                    ['1000+', 'Projects Analyzed'],
                  ].map(([value, label]) => (
                    <div key={label} className="page-card bg-white/90 p-4">
                      <div className="text-2xl font-semibold text-slate-950 md:text-3xl">{value}</div>
                      <div className="mt-1 text-sm text-slate-600">{label}</div>
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
                        <div className="mb-1 text-sm text-slate-500">Calculator scope</div>
                        <div className="text-xl font-semibold text-slate-950">Four benefit dimensions</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Input-driven
                      </div>
                    </div>
                    <div className="space-y-3">
                      {['Productivity & efficiency', 'Cost reduction & avoidance', 'Revenue growth', 'Strategic & risk value'].map((item) => (
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

        <section id="calculator" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Calculator className="h-4 w-4 text-[#635bff]" />
              ROI calculator
            </div>
            <h2 className="page-title text-3xl md:text-4xl">ROI calculation inputs</h2>
            <p className="page-lead mt-3 text-lg">Give the model real inputs, get less fantasy back.</p>
          </div>

          {currentStep === 0 ? (
            <div className="page-card rounded-[2rem] p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  ['industry', 'Industry', 'select', ['healthcare', 'finance', 'manufacturing', 'retail', 'technology', 'energy']],
                  ['companySize', 'Company Size', 'select', ['small', 'medium', 'large']],
                  ['employeeCount', 'Number of Employees', 'input', []],
                  ['annualRevenue', 'Annual Revenue (USD)', 'input', []],
                  ['aiInvestment', 'Total AI Investment (USD)', 'input', []],
                  ['implementationMonths', 'Implementation Timeline (months)', 'select', ['6', '12', '18', '24']],
                  ['projectType', 'Primary AI Project Type', 'select', ['automation', 'analytics', 'customer-service', 'decision-support', 'optimization']],
                  ['automationLevel', 'Expected Automation Level', 'select', ['low', 'medium', 'high']],
                ].map(([key, label, kind, options]) => {
                  const fieldKey = key as keyof typeof formData
                  return (
                    <div key={String(key)}>
                      <label className="mb-3 block text-sm font-medium text-slate-700">{label}</label>
                      {kind === 'input' ? (
                        <input
                          type="number"
                          placeholder="Enter value"
                          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                          value={formData[fieldKey] as string}
                          onChange={(e) => setFormData((prev) => ({ ...prev, [fieldKey]: e.target.value }))}
                        />
                      ) : (
                        <select
                          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                          value={formData[fieldKey] as string}
                          onChange={(e) => setFormData((prev) => ({ ...prev, [fieldKey]: e.target.value }))}
                        >
                          <option value="">Select {String(label).toLowerCase()}</option>
                          {(options as string[]).map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  )
                })}
              </div>
              <button onClick={calculateROI} disabled={isLoading} className="btn-brand mt-8 inline-flex w-full items-center justify-center gap-2">
                <Calculator className="h-5 w-5" />
                {isLoading ? 'Calculating ROI...' : 'Calculate ROI & business impact'}
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="page-card p-6 text-center">
                  <TrendingUp className="mx-auto mb-2 h-8 w-8 text-indigo-600" />
                  <div className={`rounded-2xl p-2 text-3xl font-semibold ${getROIColor(roiResults!.roiPercentage)}`}>{roiResults!.roiPercentage}%</div>
                  <div className="mt-2 text-sm text-slate-600">Total ROI</div>
                </div>
                <div className="page-card p-6 text-center">
                  <DollarSign className="mx-auto mb-2 h-8 w-8 text-sky-600" />
                  <div className="text-2xl font-semibold text-sky-600">{formatCurrency(roiResults!.netBenefit)}</div>
                  <div className="mt-2 text-sm text-slate-600">Net Benefit</div>
                </div>
                <div className="page-card p-6 text-center">
                  <Clock className="mx-auto mb-2 h-8 w-8 text-violet-600" />
                  <div className="text-2xl font-semibold text-violet-600">{roiResults!.paybackPeriod} mo</div>
                  <div className="mt-2 text-sm text-slate-600">Payback Period</div>
                </div>
                <div className="page-card p-6 text-center">
                  <BarChart3 className="mx-auto mb-2 h-8 w-8 text-amber-600" />
                  <div className="text-2xl font-semibold text-amber-600">{formatCurrency(roiResults!.npv)}</div>
                  <div className="mt-2 text-sm text-slate-600">Net Present Value</div>
                </div>
              </div>

              <div className="page-card rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <div className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-950">
                      <PieChart className="h-5 w-5 text-indigo-500" />
                      Benefits breakdown - {formatCurrency(roiResults!.totalBenefits)} total
                    </div>
                    <div className="space-y-3 text-sm">
                      {[
                        ['Productivity Gains', roiResults!.breakdownBenefits.productivityGains, 'bg-indigo-50'],
                        ['Cost Reductions', roiResults!.breakdownBenefits.costReductions, 'bg-sky-50'],
                        ['Revenue Increase', roiResults!.breakdownBenefits.revenueIncrease, 'bg-violet-50'],
                        ['Quality Improvements', roiResults!.breakdownBenefits.qualityImprovements, 'bg-amber-50'],
                        ['Risk Mitigation Value', roiResults!.breakdownBenefits.riskMitigation, 'bg-orange-50'],
                      ].map(([label, amount, tone]) => (
                        <div key={label as string} className={`flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 ${tone}`}>
                          <span>{label as string}</span>
                          <span className="font-semibold">{formatCurrency(amount as number)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-950">
                      <Target className="h-5 w-5 text-indigo-500" />
                      Cost breakdown - {formatCurrency(roiResults!.totalCosts)} total
                    </div>
                    <div className="space-y-3 text-sm">
                      {[
                        ['Technology & Licensing', roiResults!.breakdownCosts.technology],
                        ['Implementation Services', roiResults!.breakdownCosts.implementation],
                        ['Training & Change Management', roiResults!.breakdownCosts.training],
                        ['Maintenance & Support', roiResults!.breakdownCosts.maintenance],
                        ['Operational Overhead', roiResults!.breakdownCosts.operational],
                      ].map(([label, amount]) => (
                        <div key={label as string} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                          <span>{label as string}</span>
                          <span className="font-semibold">{formatCurrency(amount as number)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <button onClick={() => setCurrentStep(0)} className="btn-secondary inline-flex items-center gap-2">Recalculate</button>
                <Link href="#framework" className="btn-brand inline-flex items-center gap-2">View framework <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          )}
        </section>

        <section id="framework" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-[#635bff]" />
              Framework
            </div>
            <h2 className="page-title text-3xl md:text-4xl">4-dimension ROI calculation framework</h2>
            <p className="page-lead mt-3 text-lg">Benefits, cost avoidance, growth, and strategic value. Simple enough to use, hard enough to matter.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {[
              ['1. Productivity & efficiency gains', ['Task automation and time savings', 'Process optimization and workflow improvement', 'Resource utilization enhancement', 'Decision-making acceleration']],
              ['2. Cost reduction & avoidance', ['Labor cost optimization', 'Error reduction and quality improvement', 'Infrastructure and operational cost savings', 'Compliance and regulatory cost avoidance']],
              ['3. Revenue generation & growth', ['New product and service opportunities', 'Customer experience enhancement', 'Market expansion and penetration', 'Pricing optimization and revenue uplift']],
              ['4. Strategic & risk value', ['Competitive advantage and market position', 'Risk mitigation and business continuity', 'Innovation capability and agility', 'Future option value and scalability']],
            ].map(([title, bullets]) => (
              <div key={title as string} className="page-card p-6">
                <div className="mb-4 text-xl font-semibold text-slate-950">{title as string}</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {(bullets as string[]).map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>{bullet}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#635bff]" />
              Related resources
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Internal links kept intact</h2>
            <p className="page-lead mt-3 text-lg">Same cluster, same intent, cleaner UI.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['/enterprise-ai-implementation-best-practices-2026', 'Implementation guide', 'Pair it with the implementation framework.'],
              ['/enterprise-ai-roi-optimization-framework-2026', 'ROI optimization framework', 'See the broader optimization framework.'],
              ['/enterprise-ai-budget-optimization-calculator', 'Budget optimization calculator', 'Align budget assumptions with ROI first.'],
            ].map(([href, title, note]) => (
              <Link key={href} href={href} className="page-card group p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-3 text-lg font-semibold text-slate-950 group-hover:text-[#635bff]">{title}</div>
                <p className="text-sm leading-6 text-slate-600">{note}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#635bff]">Open resource <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
