'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, DollarSign, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

type RiskFactor = 'low' | 'medium' | 'high'

type FormData = {
  totalInvestment: string
  monthlyLabourSavings: string
  monthlyEfficiencyGains: string
  monthlyRevenueIncrease: string
  implementationTimeMonths: string
  maintenanceCostPercentage: string
  riskFactor: RiskFactor
}

type PaybackResult =
  | {
      error: false
      paybackMonths: number
      paybackYears: string
      netMonthlySavings: number
      yearOneROI: number
      yearThreeROI: number
      yearFiveROI: number
      totalFiveYearValue: number
      riskLevel: RiskFactor
      implementationDelay: number
    }
  | {
      error: true
      message: string
    }

const quickSignals = [
  'Keeps the original AI investment, savings, revenue, and maintenance inputs',
  'Preserves the payback, 3-year ROI, and 5-year value outputs',
  'Routes users into implementation planning and risk-assessment next steps',
  'Uses the shared light Stripe-ish calculator system already in the app',
]

const nextSteps = [
  {
    href: '/ai-integration-timeline-calculator-2026',
    title: 'Plan implementation timeline',
    note: 'Turn the payback number into a phased delivery schedule.',
  },
  {
    href: '/enterprise-ai-risk-assessment-tool-2026',
    title: 'Assess implementation risk',
    note: 'Check whether the rollout risk profile still supports the business case.',
  },
  {
    href: '/ai-implementation-checklist-enterprise-2026',
    title: 'Review the implementation checklist',
    note: 'Map budget assumptions to actual delivery work.',
  },
  {
    href: '/apply-for-audit',
    title: 'Talk to SitePilot',
    note: 'Get a tailored planning pass for your AI investment case.',
  },
]

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function AIInvestmentPaybackPeriodCalculatorClient() {
  const [formData, setFormData] = useState<FormData>({
    totalInvestment: '',
    monthlyLabourSavings: '',
    monthlyEfficiencyGains: '',
    monthlyRevenueIncrease: '',
    implementationTimeMonths: '',
    maintenanceCostPercentage: '',
    riskFactor: 'medium',
  })
  const [results, setResults] = useState<PaybackResult | null>(null)
  const [showAnimation, setShowAnimation] = useState(false)

  const canCalculate = useMemo(
    () => Number(formData.totalInvestment) > 0,
    [formData.totalInvestment],
  )

  const calculatePaybackPeriod = () => {
    const investment = Number.parseFloat(formData.totalInvestment)
    const labourSavings = Number.parseFloat(formData.monthlyLabourSavings) || 0
    const efficiencyGains = Number.parseFloat(formData.monthlyEfficiencyGains) || 0
    const revenueIncrease = Number.parseFloat(formData.monthlyRevenueIncrease) || 0
    const implementationMonths = Number.parseFloat(formData.implementationTimeMonths) || 0
    const maintenanceRate = Number.parseFloat(formData.maintenanceCostPercentage) / 100 || 0.02

    if (!(investment > 0)) return

    const monthlyBenefits = labourSavings + efficiencyGains + revenueIncrease
    const monthlyMaintenance = (investment * maintenanceRate) / 12
    const netMonthlySavings = monthlyBenefits - monthlyMaintenance

    if (netMonthlySavings <= 0) {
      setResults({
        error: true,
        message: 'Monthly costs exceed benefits. The rollout needs stronger savings assumptions or a lower budget.',
      })
      return
    }

    let riskMultiplier = 1
    if (formData.riskFactor === 'low') riskMultiplier = 0.95
    if (formData.riskFactor === 'medium') riskMultiplier = 1.1
    if (formData.riskFactor === 'high') riskMultiplier = 1.25

    const adjustedPaybackMonths = (investment / netMonthlySavings) * riskMultiplier + implementationMonths
    const breakEvenMonth = Math.ceil(adjustedPaybackMonths)
    const yearOneROI = (((netMonthlySavings * 12 - investment) / investment) * 100)
    const yearThreeROI = (((netMonthlySavings * 36 - investment) / investment) * 100)
    const yearFiveROI = (((netMonthlySavings * 60 - investment) / investment) * 100)

    setResults({
      error: false,
      paybackMonths: breakEvenMonth,
      paybackYears: (breakEvenMonth / 12).toFixed(1),
      netMonthlySavings,
      yearOneROI,
      yearThreeROI,
      yearFiveROI,
      totalFiveYearValue: netMonthlySavings * 60 - investment,
      riskLevel: formData.riskFactor,
      implementationDelay: implementationMonths,
    })

    setShowAnimation(true)
    window.setTimeout(() => setShowAnimation(false), 1800)
  }

  const recommendation = useMemo(() => {
    if (!results || results.error) return null

    if (results.paybackMonths <= 12) {
      return {
        status: 'Excellent investment',
        tone: 'border-indigo-200 bg-indigo-50 text-indigo-900',
        recommendation: 'Fast payback. This is the kind of business case people can defend in a real budget meeting.',
      }
    }

    if (results.paybackMonths <= 24) {
      return {
        status: 'Solid investment',
        tone: 'border-sky-200 bg-sky-50 text-sky-900',
        recommendation: 'Reasonable payback. Good enough to pursue if the rollout plan is disciplined.',
      }
    }

    if (results.paybackMonths <= 36) {
      return {
        status: 'Watch the assumptions',
        tone: 'border-amber-200 bg-amber-50 text-amber-900',
        recommendation: 'The business case works only if delivery and adoption stay tight. No heroics, just execution.',
      }
    }

    return {
      status: 'High-risk investment',
      tone: 'border-rose-200 bg-rose-50 text-rose-900',
      recommendation: 'Long payback. Recheck the use case, the savings model, or whether the project should be smaller.',
    }
  }, [results])

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-20"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

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
                Enterprise AI investment planning
              </div>

              <h1 className="page-title mb-6 text-5xl md:text-7xl">
                AI payback period,
                <span className="brand-gradient-text block">calculated without wishful thinking.</span>
              </h1>

              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                Estimate monthly savings, break-even timing, and 3-year ROI for an AI investment using a planning model that keeps the CFO questions visible.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a href="#payback-tool" className="btn-brand">
                  Open calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-integration-timeline-calculator-2026" className="btn-secondary">
                  Plan timeline
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {quickSignals.map((item) => (
                  <div key={item} className="page-card p-4 bg-white/90 flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#635bff]" />
                    <span className="text-sm text-slate-700">{item}</span>
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
                      <div className="mb-1 text-sm text-slate-500">What this tool returns</div>
                      <div className="text-xl font-semibold text-slate-950">Investment outputs</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      5-year view
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Core outputs</div>
                    <div className="grid gap-3">
                      {[
                        ['Payback period', 'How long it takes to recover the initial investment.'],
                        ['Net monthly savings', 'Savings after maintenance cost is subtracted.'],
                        ['ROI timeline', 'Year 1, year 3, and year 5 return snapshots.'],
                        ['Next steps', 'Implementation, risk, and consultation links.'],
                      ].map(([title, note]) => (
                        <div key={title} className="rounded-2xl border border-white/80 bg-white px-4 py-3">
                          <div className="font-semibold text-slate-950">{title}</div>
                          <div className="text-sm text-slate-500 mt-1">{note}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-5">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700/80 mb-2">Modeled guardrail</div>
                    <div className="text-sm text-slate-700 leading-relaxed">
                      This page does not pretend the numbers are magic. It keeps the savings assumptions, implementation delay, and maintenance drag visible.
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
        <section id="payback-tool" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="page-pill mb-4">
              <DollarSign className="h-4 w-4 text-[#635bff]" />
              Interactive calculator
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Model the payback period from investment, savings, and rollout friction.
            </h2>
            <p className="page-lead text-base md:text-lg">
              The inputs and outputs are the same as the legacy page, just wrapped in the current light Stripe-ish layout.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="page-card-soft p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-slate-950 mb-6">Investment parameters</h3>
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Total AI investment ($)</label>
                  <input
                    type="number"
                    placeholder="500000"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                    value={formData.totalInvestment}
                    onChange={(event) => setFormData({ ...formData, totalInvestment: event.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Monthly labour cost savings ($)</label>
                  <input
                    type="number"
                    placeholder="25000"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                    value={formData.monthlyLabourSavings}
                    onChange={(event) => setFormData({ ...formData, monthlyLabourSavings: event.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Monthly efficiency gains ($)</label>
                  <input
                    type="number"
                    placeholder="15000"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                    value={formData.monthlyEfficiencyGains}
                    onChange={(event) => setFormData({ ...formData, monthlyEfficiencyGains: event.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Monthly revenue increase ($)</label>
                  <input
                    type="number"
                    placeholder="10000"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                    value={formData.monthlyRevenueIncrease}
                    onChange={(event) => setFormData({ ...formData, monthlyRevenueIncrease: event.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Implementation time (months)</label>
                  <input
                    type="number"
                    placeholder="6"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                    value={formData.implementationTimeMonths}
                    onChange={(event) => setFormData({ ...formData, implementationTimeMonths: event.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Annual maintenance cost (% of investment)</label>
                  <input
                    type="number"
                    placeholder="2"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                    value={formData.maintenanceCostPercentage}
                    onChange={(event) => setFormData({ ...formData, maintenanceCostPercentage: event.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Risk assessment</label>
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
                    value={formData.riskFactor}
                    onChange={(event) => setFormData({ ...formData, riskFactor: event.target.value as RiskFactor })}
                  >
                    <option value="low">Low risk — proven technology, clear processes</option>
                    <option value="medium">Medium risk — standard implementation</option>
                    <option value="high">High risk — complex integration, new processes</option>
                  </select>
                </div>

                <button type="button" onClick={calculatePaybackPeriod} disabled={!canCalculate} className="btn-brand w-full disabled:cursor-not-allowed disabled:opacity-50">
                  Calculate payback period
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {results && results.error === false ? (
                <>
                  <div className={`page-card-glow p-1.5 transition-transform duration-500 ${showAnimation ? 'scale-[1.01]' : ''}`}>
                    <div className="page-card-soft p-6 md:p-8">
                      <h3 className="text-2xl font-semibold text-slate-950 mb-4">Payback analysis</h3>

                      {recommendation && (
                        <div className={`rounded-[1.5rem] border p-4 mb-6 ${recommendation.tone}`}>
                          <div className="text-lg font-semibold mb-1">{recommendation.status}</div>
                          <p className="text-sm leading-relaxed">{recommendation.recommendation}</p>
                        </div>
                      )}

                      <div className="grid gap-4 sm:grid-cols-2 mb-6">
                        <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-indigo-50 to-sky-50 p-4">
                          <div className="text-sm font-semibold text-slate-600 mb-1">Payback period</div>
                          <div className="text-3xl font-semibold tracking-[-0.05em] text-[#635bff]">{results.paybackMonths} months</div>
                          <div className="text-sm text-slate-500">({results.paybackYears} years)</div>
                        </div>

                        <div className="rounded-[1.5rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-sky-50 p-4">
                          <div className="text-sm font-semibold text-slate-600 mb-1">Net monthly savings</div>
                          <div className="text-3xl font-semibold tracking-[-0.05em] text-indigo-700">{formatCurrency(results.netMonthlySavings)}</div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <h4 className="text-lg font-semibold text-slate-800">ROI timeline</h4>

                        {[
                          ['Year 1 ROI', results.yearOneROI],
                          ['Year 3 ROI', results.yearThreeROI],
                          ['Year 5 ROI', results.yearFiveROI],
                        ].map(([label, value]) => (
                          <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                            <span className="text-sm font-medium text-slate-600">{label}</span>
                            <span className={`font-bold ${Number(value) > 0 ? 'text-indigo-600' : 'text-rose-600'}`}>
                              {Number(value) > 0 ? '+' : ''}
                              {Number(value).toFixed(1)}%
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-r from-indigo-50 to-sky-50 p-4">
                        <div className="text-sm font-semibold text-slate-600 mb-1">5-year total value</div>
                        <div className="text-3xl font-semibold tracking-[-0.05em] text-[#635bff]">
                          {formatCurrency(results.totalFiveYearValue)}
                        </div>
                        <div className="text-sm text-slate-500">Net value after investment recovery</div>
                      </div>
                    </div>
                  </div>

                  <div className="page-card-soft p-6 md:p-8">
                    <h3 className="text-2xl font-semibold text-slate-950 mb-4">Timeline factor snapshot</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
                      <div className="rounded-2xl border border-slate-200 bg-white p-4"><strong className="text-slate-950">Investment:</strong> {formatCurrency(Number(formData.totalInvestment))}</div>
                      <div className="rounded-2xl border border-slate-200 bg-white p-4"><strong className="text-slate-950">Delay:</strong> {results.implementationDelay} months</div>
                      <div className="rounded-2xl border border-slate-200 bg-white p-4"><strong className="text-slate-950">Risk:</strong> {results.riskLevel}</div>
                      <div className="rounded-2xl border border-slate-200 bg-white p-4"><strong className="text-slate-950">Maintenance:</strong> {formData.maintenanceCostPercentage || '2'}%</div>
                    </div>
                  </div>
                </>
              ) : results && results.error === true ? (
                <div className="page-card-soft p-6 md:p-8">
                  <div className="rounded-[1.5rem] border border-rose-200 bg-rose-50 p-5">
                    <h3 className="text-lg font-semibold text-rose-900 mb-2">Investment analysis alert</h3>
                    <p className="text-slate-700">{results.message}</p>
                    <p className="mt-2 text-sm text-slate-600">
                      Consider tightening the savings case, lowering scope, or splitting the rollout into smaller phases.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="page-card-soft p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 text-3xl">
                    ⏱️
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-950 mb-2">Ready to calculate?</h3>
                  <p className="text-slate-600">
                    Fill out the form to generate a payback period, ROI timeline, and 5-year value estimate.
                  </p>
                </div>
              )}

              <div className="page-card-soft p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-slate-950 mb-4">Next steps</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {nextSteps.map((item) => (
                    <Link key={item.href} href={item.href} className="page-card p-4 hover:-translate-y-0.5 transition-transform">
                      <div className="font-semibold text-slate-950 mb-1">{item.title}</div>
                      <div className="text-sm text-slate-600">{item.note}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted mb-16">
          <div className="max-w-3xl">
            <div className="page-pill mb-4">
              <Sparkles className="h-4 w-4 text-[#635bff]" />
              Professional disclaimer
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              The calculator is useful. The assumptions still need a human who can say no.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              This tool gives a planning estimate based on the inputs you provide. Actual results depend on implementation detail, operating discipline, and whether the project is scoped like a business case instead of a shiny demo.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
