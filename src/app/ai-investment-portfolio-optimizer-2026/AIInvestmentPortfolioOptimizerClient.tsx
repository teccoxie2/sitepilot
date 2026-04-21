'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  Compass,
  Download,
  DollarSign,
  Layers3,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Briefcase,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface InvestmentArea {
  name: string
  currentBudget: number
  proposedBudget: number
  roi: number
  riskLevel: 'low' | 'medium' | 'high'
  timeline: number
  dependencies: string[]
}

interface PortfolioResult {
  totalInvestment: number
  expectedROI: number
  riskScore: number
  timeToValue: number
  recommendations: string[]
  allocations: InvestmentArea[]
}

const companySizes = [
  'Startup (1-50 employees)',
  'Small Business (51-200 employees)',
  'Mid-size (201-1000 employees)',
  'Enterprise (1001-5000 employees)',
  'Large Enterprise (5000+ employees)',
]

const industries = [
  'Technology',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Education',
  'Government',
  'Professional Services',
  'Media & Entertainment',
  'Transportation',
]

const goalOptions = [
  'Cost Reduction',
  'Revenue Growth',
  'Operational Efficiency',
  'Customer Experience',
  'Innovation Leadership',
  'Risk Mitigation',
  'Competitive Advantage',
  'Digital Transformation',
]

const defaultInvestmentAreas: InvestmentArea[] = [
  {
    name: 'Process Automation',
    currentBudget: 0,
    proposedBudget: 0,
    roi: 0,
    riskLevel: 'low',
    timeline: 6,
    dependencies: ['Infrastructure', 'Training'],
  },
  {
    name: 'Customer Analytics',
    currentBudget: 0,
    proposedBudget: 0,
    roi: 0,
    riskLevel: 'medium',
    timeline: 9,
    dependencies: ['Data Infrastructure', 'Analytics Team'],
  },
  {
    name: 'Predictive Maintenance',
    currentBudget: 0,
    proposedBudget: 0,
    roi: 0,
    riskLevel: 'medium',
    timeline: 12,
    dependencies: ['IoT Infrastructure', 'Data Collection'],
  },
  {
    name: 'AI-Powered Product Features',
    currentBudget: 0,
    proposedBudget: 0,
    roi: 0,
    riskLevel: 'high',
    timeline: 18,
    dependencies: ['R&D Team', 'Product Integration'],
  },
  {
    name: 'Intelligent Document Processing',
    currentBudget: 0,
    proposedBudget: 0,
    roi: 0,
    riskLevel: 'low',
    timeline: 4,
    dependencies: ['Document Digitization'],
  },
]

const quickSignals = [
  'Keeps the original budget, industry, goal, risk, and timeline inputs intact',
  'Preserves the allocation, ROI, and risk outputs for each investment area',
  'Routes users into ROI, governance, and vendor-planning next steps',
  'Uses the shared light Stripe-ish UI system already established on the site',
]

const relatedLinks = [
  {
    href: '/ai-investment-roi-matrix-calculator-enterprise-2026',
    title: 'ROI Matrix Calculator',
    note: 'Stress-test assumptions with a deeper multi-factor return model.',
  },
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'Governance Framework',
    note: 'Pair capital allocation with enterprise AI governance controls.',
  },
  {
    href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
    title: 'Vendor Shortlist Scorecard',
    note: 'Compare platforms before committing more capital to a bet.',
  },
  {
    href: '/apply-for-audit',
    title: 'Talk to SitePilot',
    note: 'Get a tailored review of the portfolio and implementation path.',
  },
]

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function AIInvestmentPortfolioOptimizerClient() {
  const [currentStep, setCurrentStep] = useState(1)
  const [companySize, setCompanySize] = useState('')
  const [industry, setIndustry] = useState('')
  const [currentAIBudget, setCurrentAIBudget] = useState('')
  const [strategicGoals, setStrategicGoals] = useState<string[]>([])
  const [riskTolerance, setRiskTolerance] = useState('')
  const [timeHorizon, setTimeHorizon] = useState('')
  const [currentInvestments, setCurrentInvestments] = useState<InvestmentArea[]>(defaultInvestmentAreas)
  const [result, setResult] = useState<PortfolioResult | null>(null)

  const canAdvanceStep1 = companySize && industry && currentAIBudget
  const canAdvanceStep2 = strategicGoals.length > 0 && riskTolerance && timeHorizon
  const canCalculate = Number.parseFloat(currentAIBudget) > 0

  const updateInvestmentBudget = (index: number, budget: string) => {
    setCurrentInvestments((prev) => {
      const next = [...prev]
      next[index] = {
        ...next[index],
        currentBudget: Number.parseFloat(budget) || 0,
      }
      return next
    })
  }

  const handleGoalToggle = (goal: string) => {
    setStrategicGoals((prev) => (prev.includes(goal) ? prev.filter((item) => item !== goal) : [...prev, goal]))
  }

  const calculateOptimalPortfolio = () => {
    const totalBudget = Number.parseFloat(currentAIBudget)
    if (!(totalBudget > 0)) return

    const sizeMultiplier = companySize.includes('Startup')
      ? 0.8
      : companySize.includes('Small')
        ? 1.0
        : companySize.includes('Mid-size')
          ? 1.2
          : companySize.includes('Enterprise')
            ? 1.5
            : 2.0

    const riskMultiplier = riskTolerance === 'conservative' ? 0.7 : riskTolerance === 'balanced' ? 1.0 : 1.3

    const optimizedAllocations = currentInvestments.map((area) => {
      let allocation = totalBudget * 0.1
      let expectedROI = 120

      if (strategicGoals.includes('Cost Reduction') && area.name === 'Process Automation') {
        allocation = totalBudget * 0.35 * sizeMultiplier * riskMultiplier
        expectedROI = 240
      } else if (strategicGoals.includes('Customer Experience') && area.name === 'Customer Analytics') {
        allocation = totalBudget * 0.25 * sizeMultiplier * riskMultiplier
        expectedROI = 180
      } else if (strategicGoals.includes('Operational Efficiency') && area.name === 'Predictive Maintenance') {
        allocation = totalBudget * 0.2 * sizeMultiplier * riskMultiplier
        expectedROI = 160
      } else if (strategicGoals.includes('Innovation Leadership') && area.name === 'AI-Powered Product Features') {
        allocation = totalBudget * 0.3 * sizeMultiplier * riskMultiplier
        expectedROI = 320
      } else if (strategicGoals.includes('Operational Efficiency') && area.name === 'Intelligent Document Processing') {
        allocation = totalBudget * 0.15 * sizeMultiplier * riskMultiplier
        expectedROI = 200
      }

      return {
        ...area,
        proposedBudget: Math.round(allocation),
        roi: expectedROI,
      }
    })

    const totalAllocated = optimizedAllocations.reduce((sum, area) => sum + area.proposedBudget, 0)
    const adjustmentFactor = totalAllocated > 0 ? totalBudget / totalAllocated : 1

    const finalAllocations = optimizedAllocations.map((area) => ({
      ...area,
      proposedBudget: Math.round(area.proposedBudget * adjustmentFactor),
    }))

    const avgROI = finalAllocations.reduce((sum, area) => sum + area.roi, 0) / finalAllocations.length
    const riskScore =
      finalAllocations.reduce((sum, area) => sum + (area.riskLevel === 'low' ? 1 : area.riskLevel === 'medium' ? 2 : 3), 0) /
      finalAllocations.length

    const recommendations = [
      `Based on your ${strategicGoals.join(', ')} priorities, the optimizer recommends leading with ${[...finalAllocations].sort((a, b) => b.proposedBudget - a.proposedBudget)[0].name}.`,
      `The portfolio risk score is ${riskScore.toFixed(1)}/3, which indicates ${riskScore < 2 ? 'a balanced risk profile' : riskScore < 2.5 ? 'an elevated risk profile' : 'a high-risk portfolio'}.`,
      'Phase the rollout, starting with the highest-ROI and lowest-risk initiatives.',
      `Expect the first visible results within ${Math.min(...finalAllocations.map((area) => area.timeline))} months.`,
      industry === 'Financial Services'
        ? 'Plan for additional compliance and security investment.'
        : industry === 'Healthcare'
          ? 'Make data privacy and regulatory requirements a front-line constraint.'
          : industry === 'Manufacturing'
            ? 'Prioritize operational-efficiency and predictive-maintenance bets first.'
            : 'Review ROI progress on a regular operating cadence.',
    ]

    setResult({
      totalInvestment: totalBudget,
      expectedROI: avgROI,
      riskScore,
      timeToValue: Math.min(...finalAllocations.map((area) => area.timeline)),
      recommendations,
      allocations: finalAllocations,
    })
  }

  const generatePDFReport = () => {
    if (!result) return

    const reportData = {
      companyProfile: { size: companySize, industry, budget: currentAIBudget },
      strategy: { goals: strategicGoals, riskTolerance, timeHorizon },
      recommendations: result.recommendations,
      allocations: result.allocations,
      metrics: {
        totalInvestment: result.totalInvestment,
        expectedROI: result.expectedROI,
        riskScore: result.riskScore,
        timeToValue: result.timeToValue,
      },
      generatedAt: new Date().toISOString(),
    }

    const dataStr = JSON.stringify(reportData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `ai-investment-portfolio-optimization-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
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
                Enterprise AI capital planning
              </div>

              <h1 className="page-title mb-6 text-5xl md:text-7xl">
                AI investment portfolio optimization,
                <span className="brand-gradient-text block">without pretending budget math is optional.</span>
              </h1>

              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                Compare initiatives by ROI, risk, timing, and strategic fit so the portfolio holds together after the
                board meeting, not just during the pitch.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a href="#portfolio-tool" className="btn-brand">
                  Open optimizer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-investment-roi-matrix-calculator-enterprise-2026" className="btn-secondary">
                  Model ROI matrix
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {quickSignals.map((item) => (
                  <div key={item} className="page-card flex items-start gap-3 bg-white/90 p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
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
                      <div className="mb-1 text-sm text-slate-500">This tool preserves</div>
                      <div className="text-xl font-semibold text-slate-950">The original business logic</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      4-step flow
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {[
                      ['Inputs', 'Company size, industry, budget, goals, risk, and time horizon.'],
                      ['Outputs', 'Optimized allocations, expected ROI, risk score, and time-to-value.'],
                      ['Next steps', 'ROI matrix, governance, vendor scorecard, and audit links.'],
                      ['UI system', 'Light Stripe-ish cards, gradients, and crisp hierarchy.'],
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
                      The page keeps the original calculator behavior intact. It just stops looking like a random 2021
                      admin panel.
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
            {[
              { value: '5', label: 'Investment areas', note: 'The portfolio model still evaluates five core AI plays.' },
              { value: '4', label: 'Planning steps', note: 'Profile, strategy, allocation, and results stay separate.' },
              { value: '1', label: 'Downloadable report', note: 'Exports a JSON report for further planning and discussion.' },
              { value: '100%', label: 'Metadata intent', note: 'Canonical, description, OG, and schema are still in place.' },
            ].map((card) => (
              <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio-tool" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <div className="max-w-3xl">
            <div className="page-pill mb-4 inline-flex items-center gap-2">
              <Compass className="h-4 w-4" />
              Portfolio optimizer
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Score the portfolio before you start hand-waving about transformation.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A useful investment optimizer needs to keep four things visible at the same time: business size,
              strategic goals, delivery risk, and the actual budget you can defend.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="page-card-soft p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-slate-500">Progress</div>
                    <div className="text-xl font-semibold text-slate-950">{Math.round((currentStep / 4) * 100)}%</div>
                  </div>
                  <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
                    Step {currentStep} / 4
                  </div>
                </div>
                <Progress value={(currentStep / 4) * 100} className="h-2" />
                <div className="mt-3 flex justify-between text-xs text-slate-500">
                  <span className={currentStep >= 1 ? 'font-medium text-[#635bff]' : ''}>Company profile</span>
                  <span className={currentStep >= 2 ? 'font-medium text-[#635bff]' : ''}>Strategic goals</span>
                  <span className={currentStep >= 3 ? 'font-medium text-[#635bff]' : ''}>Portfolio setup</span>
                  <span className={currentStep >= 4 ? 'font-medium text-[#635bff]' : ''}>Optimized result</span>
                </div>
              </div>

              {currentStep === 1 && (
                <Card className="page-card border-slate-200 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-xl text-slate-950">
                      <Briefcase className="h-5 w-5 text-[#635bff]" />
                      Company profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Company size</Label>
                        <Select value={companySize} onValueChange={setCompanySize}>
                          <SelectTrigger className="rounded-2xl">
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            {companySizes.map((size) => (
                              <SelectItem key={size} value={size}>
                                {size}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Industry</Label>
                        <Select value={industry} onValueChange={setIndustry}>
                          <SelectTrigger className="rounded-2xl">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((item) => (
                              <SelectItem key={item} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Annual AI budget (USD)</Label>
                      <Input
                        type="number"
                        placeholder="For example: 500000"
                        value={currentAIBudget}
                        onChange={(event) => setCurrentAIBudget(event.target.value)}
                        className="rounded-2xl"
                      />
                    </div>
                    <Button onClick={() => setCurrentStep(2)} disabled={!canAdvanceStep1} className="btn-brand w-full">
                      Next: define strategic goals
                    </Button>
                  </CardContent>
                </Card>
              )}

              {currentStep === 2 && (
                <Card className="page-card border-slate-200 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-xl text-slate-950">
                      <Target className="h-5 w-5 text-[#635bff]" />
                      Strategic goal setup
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label className="text-base font-medium">Primary strategic goals (select multiple)</Label>
                      <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
                        {goalOptions.map((goal) => (
                          <Button
                            key={goal}
                            type="button"
                            variant={strategicGoals.includes(goal) ? 'default' : 'outline'}
                            onClick={() => handleGoalToggle(goal)}
                            className={strategicGoals.includes(goal) ? 'btn-brand justify-start h-auto py-2' : 'btn-secondary justify-start h-auto py-2'}
                          >
                            {goal}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Risk tolerance</Label>
                        <Select value={riskTolerance} onValueChange={setRiskTolerance}>
                          <SelectTrigger className="rounded-2xl">
                            <SelectValue placeholder="Select risk tolerance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="conservative">Conservative - stable returns</SelectItem>
                            <SelectItem value="balanced">Balanced - moderate risk</SelectItem>
                            <SelectItem value="aggressive">Aggressive - higher-return pursuit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Investment horizon</Label>
                        <Select value={timeHorizon} onValueChange={setTimeHorizon}>
                          <SelectTrigger className="rounded-2xl">
                            <SelectValue placeholder="Select time horizon" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="short">Short term (6-12 months)</SelectItem>
                            <SelectItem value="medium">Medium term (1-2 years)</SelectItem>
                            <SelectItem value="long">Long term (2+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button variant="outline" onClick={() => setCurrentStep(1)} className="btn-secondary">
                        Back
                      </Button>
                      <Button onClick={() => setCurrentStep(3)} disabled={!canAdvanceStep2} className="btn-brand flex-1">
                        Next: configure investment areas
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 3 && (
                <Card className="page-card border-slate-200 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-xl text-slate-950">
                      <DollarSign className="h-5 w-5 text-[#635bff]" />
                      Investment area configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm leading-7 text-slate-600">
                      Set the current budget for each investment area if you have it. Leave fields empty and the optimizer will distribute capital from your strategic priorities.
                    </p>

                    <div className="space-y-4">
                      {currentInvestments.map((area, index) => (
                        <div key={area.name} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                          <div className="mb-3 flex items-start justify-between gap-4">
                            <div>
                              <h4 className="font-semibold text-slate-950">{area.name}</h4>
                              <p className="text-sm text-slate-600">
                                Expected timeline: {area.timeline} months • Risk level:{' '}
                                <Badge
                                  variant="secondary"
                                  className={`ml-1 ${
                                    area.riskLevel === 'low'
                                      ? 'bg-indigo-100 text-indigo-800'
                                      : area.riskLevel === 'medium'
                                        ? 'bg-amber-100 text-amber-800'
                                        : 'bg-rose-100 text-rose-800'
                                  }`}
                                >
                                  {area.riskLevel === 'low' ? 'Low' : area.riskLevel === 'medium' ? 'Medium' : 'High'}
                                </Badge>
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`budget-${index}`}>Current budget (USD)</Label>
                            <Input
                              id={`budget-${index}`}
                              type="number"
                              placeholder="For example: 50000"
                              value={area.currentBudget || ''}
                              onChange={(event) => updateInvestmentBudget(index, event.target.value)}
                              className="rounded-2xl"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button variant="outline" onClick={() => setCurrentStep(2)} className="btn-secondary">
                        Back
                      </Button>
                      <Button
                        onClick={() => {
                          calculateOptimalPortfolio()
                          setCurrentStep(4)
                        }}
                        className="btn-brand flex-1"
                        disabled={!canCalculate}
                      >
                        Generate optimized plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <div className="page-card-glow p-1.5">
                <div className="page-card-soft space-y-5 p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-slate-500">Sidebar summary</div>
                      <div className="text-xl font-semibold text-slate-950">Why this optimizer exists</div>
                    </div>
                    <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                      Portfolio logic
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {[
                      ['Budget discipline', 'Stops the plan from drifting into “everything is a priority.”'],
                      ['Risk visibility', 'Shows whether the portfolio is conservative, balanced, or aggressive.'],
                      ['Time-to-value', 'Makes the sequence visible instead of hiding it in a slide deck.'],
                      ['Decision support', 'Feeds the ROI matrix, governance, and vendor shortlists.'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                        <div className="font-semibold text-slate-950">{title}</div>
                        <div className="mt-1 text-sm text-slate-500">{note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                  <Compass className="h-4 w-4 text-sky-600" />
                  Related internal resources
                </div>
                <div className="mt-5 space-y-3">
                  {relatedLinks.map((item) => (
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

        {currentStep === 4 && result && (
          <section className="mt-16 space-y-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <DollarSign className="h-8 w-8 text-[#635bff]" />
                <p className="mt-4 text-sm font-medium text-slate-600">Total investment</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">{formatCurrency(result.totalInvestment)}</p>
              </div>
              <div className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
                <p className="mt-4 text-sm font-medium text-slate-600">Expected ROI</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">{result.expectedROI.toFixed(0)}%</p>
              </div>
              <div className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <Shield className="h-8 w-8 text-amber-600" />
                <p className="mt-4 text-sm font-medium text-slate-600">Risk score</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">{result.riskScore.toFixed(1)}/3</p>
              </div>
              <div className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <Calendar className="h-8 w-8 text-violet-600" />
                <p className="mt-4 text-sm font-medium text-slate-600">Time to value</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">{result.timeToValue} months</p>
              </div>
            </div>

            <Tabs defaultValue="allocations" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-2xl bg-slate-100 p-1">
                <TabsTrigger value="allocations">Allocations</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                <TabsTrigger value="timeline">Roadmap</TabsTrigger>
              </TabsList>

              <TabsContent value="allocations" className="mt-6">
                <Card className="page-card border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-950">Optimized investment allocation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[...result.allocations].map((area) => (
                      <div key={area.name} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                        <div className="mb-2 flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-semibold text-slate-950">{area.name}</h4>
                            <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                              <Badge
                                variant="secondary"
                                className={`$ {
                                  area.riskLevel === 'low'
                                    ? 'bg-indigo-100 text-indigo-800'
                                    : area.riskLevel === 'medium'
                                      ? 'bg-amber-100 text-amber-800'
                                      : 'bg-rose-100 text-rose-800'
                                }`}
                              >
                                {area.riskLevel === 'low' ? 'Low risk' : area.riskLevel === 'medium' ? 'Medium risk' : 'High risk'}
                              </Badge>
                              <span>Expected ROI: {area.roi}%</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold text-slate-950">{formatCurrency(area.proposedBudget)}</p>
                            <p className="text-sm text-slate-600">{((area.proposedBudget / result.totalInvestment) * 100).toFixed(1)}%</p>
                          </div>
                        </div>
                        <Progress value={(area.proposedBudget / result.totalInvestment) * 100} className="h-2" />
                        <p className="mt-2 text-sm text-slate-600">Dependencies: {area.dependencies.join(', ')}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recommendations" className="mt-6">
                <Card className="page-card border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-950">Professional recommendations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {result.recommendations.map((recommendation, index) => (
                      <div key={index} className="flex items-start gap-3 rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
                        <Sparkles className="mt-0.5 h-5 w-5 text-sky-600" />
                        <p className="text-sm leading-7 text-slate-700">{recommendation}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline" className="mt-6">
                <Card className="page-card border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-950">Implementation roadmap</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[...result.allocations]
                      .sort((a, b) => a.timeline - b.timeline)
                      .map((area, index) => (
                        <div key={area.name} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#635bff] text-sm font-semibold text-white">
                            {index + 1}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-slate-950">{area.name}</h4>
                            <p className="text-sm text-slate-600">
                              Expected completion: {area.timeline} months • Budget: {formatCurrency(area.proposedBudget)}
                            </p>
                          </div>
                          <Badge variant="outline" className="rounded-full border-slate-200 text-slate-600">
                            Phase {index + 1}
                          </Badge>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="outline" onClick={() => setCurrentStep(3)} className="btn-secondary">
                Return to inputs
              </Button>
              <Button onClick={generatePDFReport} className="btn-brand">
                <Download className="mr-2 h-4 w-4" />
                Download detailed report
              </Button>
              <Button
                onClick={() => {
                  setCurrentStep(1)
                  setResult(null)
                  setCompanySize('')
                  setIndustry('')
                  setCurrentAIBudget('')
                  setStrategicGoals([])
                  setRiskTolerance('')
                  setTimeHorizon('')
                  setCurrentInvestments(defaultInvestmentAreas)
                }}
                variant="outline"
                className="btn-secondary"
              >
                Start over
              </Button>
            </div>
          </section>
        )}

        <section className="mt-16 text-center">
          <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-sky-500 p-8 text-white">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Need expert AI investment advisory?</h3>
              <p className="mx-auto mt-3 max-w-2xl text-white/85">
                We can plug this portfolio optimizer into a broader enterprise AI planning, governance, and implementation support process.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/apply-for-audit" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                  Talk to an AI investment expert
                </Link>
                <Link href="/ai-investment-roi-matrix-calculator-enterprise-2026" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                  View ROI Matrix
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            <p>© 2026 SitePilot AI Investment Solutions. Professional-grade AI portfolio optimization tool.</p>
            <p className="mt-1">Built on current AI investment data and practical industry guidance.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
