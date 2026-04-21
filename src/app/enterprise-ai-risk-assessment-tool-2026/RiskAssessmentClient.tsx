"use client";

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Risk Assessment Tool 2026 | SitePilot'
const pageDescription =
  'Evaluate financial risks, hidden costs, and success probability for your enterprise AI investment. Get CFO-ready risk assessment with mitigation strategies.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-risk-assessment-tool-2026'

export default function EnterpriseAIRiskAssessmentToolClient() {
  const [assessmentData, setAssessmentData] = useState({
    company_size: '',
    ai_budget: '',
    implementation_timeline: '',
    current_ai_experience: '',
    data_readiness: '',
    change_management: '',
    technical_infrastructure: '',
    regulatory_compliance: '',
    roi_expectations: '',
    risk_tolerance: '',
  })

  const [results, setResults] = useState<{
    riskScore: number
    riskLevel: string
    recommendations: string[]
    expectedROI: number
    mitigationStrategies: string[]
  } | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setAssessmentData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const calculateExpectedROI = (riskScore: number) => {
    const baseROI = 25
    const riskPenalty = Math.floor(riskScore / 10) * 3
    return Math.max(baseROI - riskPenalty, 5)
  }

  const generateMitigationStrategies = (riskScore: number) => {
    const strategies = [] as string[]
    if (riskScore > 60) {
      strategies.push('Reduce scope and focus on single high-impact use case')
      strategies.push('Extend timeline by 6-12 months for proper preparation')
      strategies.push('Hire external AI implementation consultant')
    } else if (riskScore > 30) {
      strategies.push('Implement robust change management program')
      strategies.push('Establish clear success metrics and monitoring')
    }
    strategies.push('Regular financial review gates every quarter')
    return strategies
  }

  const calculateRiskScore = () => {
    let riskScore = 0
    const recommendations: string[] = []

    if (assessmentData.company_size === 'startup') riskScore += 20
    else if (assessmentData.company_size === 'mid') riskScore += 10
    else if (assessmentData.company_size === 'enterprise') riskScore += 5

    const budget = Number.parseInt(assessmentData.ai_budget, 10)
    if (budget > 5000000) riskScore += 25
    else if (budget > 1000000) riskScore += 15
    else if (budget > 500000) riskScore += 10
    else riskScore += 5

    if (assessmentData.current_ai_experience === 'none') riskScore += 25
    else if (assessmentData.current_ai_experience === 'limited') riskScore += 15
    else if (assessmentData.current_ai_experience === 'moderate') riskScore += 10

    if (assessmentData.data_readiness === 'poor') riskScore += 30
    else if (assessmentData.data_readiness === 'fair') riskScore += 15
    else if (assessmentData.data_readiness === 'good') riskScore += 5

    if (assessmentData.current_ai_experience === 'none') {
      recommendations.push('Start with AI pilot project ($50K-100K) before major investment')
    }
    if (assessmentData.data_readiness === 'poor') {
      recommendations.push('Invest 20-30% of budget in data infrastructure before AI implementation')
    }
    if (Number.parseInt(assessmentData.ai_budget, 10) > 2000000) {
      recommendations.push('Implement phased approach with financial gates every 6 months')
    }

    const riskLevel = riskScore > 60 ? 'High' : riskScore > 30 ? 'Medium' : 'Low'

    setResults({
      riskScore,
      riskLevel,
      recommendations,
      expectedROI: calculateExpectedROI(riskScore),
      mitigationStrategies: generateMitigationStrategies(riskScore),
    })
  }

  const heroStats = [
    { value: 'CFO-grade', label: 'risk analysis' },
    { value: 'Hidden costs', label: 'included in framing' },
    { value: 'Quarterly', label: 'review gates' },
  ]

  const inputFields = [
    {
      label: 'Company Size',
      key: 'company_size',
      options: [
        ['', 'Select company size'],
        ['startup', 'Startup (1-50 employees)'],
        ['mid', 'Mid-market (51-1000 employees)'],
        ['enterprise', 'Enterprise (1000+ employees)'],
      ],
    },
    {
      label: 'Total AI Investment Budget',
      key: 'ai_budget',
      options: [
        ['', 'Select budget range'],
        ['100000', '$100K - $500K'],
        ['750000', '$500K - $1M'],
        ['2000000', '$1M - $3M'],
        ['5000000', '$3M - $10M'],
        ['10000000', '$10M+'],
      ],
    },
    {
      label: 'Implementation Timeline',
      key: 'implementation_timeline',
      options: [
        ['', 'Select timeline'],
        ['3', '3-6 months'],
        ['9', '6-12 months'],
        ['18', '12-24 months'],
        ['36', '24+ months'],
      ],
    },
    {
      label: 'Current AI Experience',
      key: 'current_ai_experience',
      options: [
        ['', 'Select experience level'],
        ['none', 'No AI experience'],
        ['limited', 'Limited AI pilots'],
        ['moderate', 'Some AI implementations'],
        ['extensive', 'Extensive AI experience'],
      ],
    },
    {
      label: 'Data Infrastructure Readiness',
      key: 'data_readiness',
      options: [
        ['', 'Select data readiness'],
        ['poor', 'Poor - Data silos, quality issues'],
        ['fair', 'Fair - Some integration, inconsistent quality'],
        ['good', 'Good - Integrated, clean data systems'],
        ['excellent', 'Excellent - AI-ready data infrastructure'],
      ],
    },
    {
      label: 'Change Management Capability',
      key: 'change_management',
      options: [
        ['', 'Select capability level'],
        ['weak', 'Weak - High resistance to change'],
        ['moderate', 'Moderate - Some change experience'],
        ['strong', 'Strong - Proven change management'],
      ],
    },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-14"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="page-hero relative border-b border-slate-200/80">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI risk assessment tool 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI investment risk calculator,
                  <span className="brand-gradient-text block">Quantify the downside before you talk about launch.</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Evaluate financial risks, hidden costs, and success probability for your enterprise AI investment. This page keeps the interactive calculation logic and simply moves the shell into the shared light Stripe-ish UI.
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#assessment" className="btn-brand inline-flex items-center gap-2">
                    Open assessment
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#results" className="btn-secondary inline-flex items-center gap-2">
                    View output layout
                  </a>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 max-w-2xl">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="page-card bg-white/90 p-4">
                      <div className="text-2xl font-semibold text-slate-950 md:text-3xl">{stat.value}</div>
                      <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
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
                        <div className="mb-1 text-sm text-slate-500">Risk lens</div>
                        <div className="text-xl font-semibold text-slate-950">What the calculator weighs</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        CFO-ready
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        'Budget size and scope',
                        'Experience and readiness',
                        'Data and change management',
                        'Mitigation strategies and ROI output',
                      ].map((item) => (
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

        <section className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Financial risk', 'Budget pressure, overruns, and hidden cost exposure.'],
            ['Operating risk', 'Timeline slip, integration friction, and adoption drag.'],
            ['Control points', 'Quarterly gates and mitigation strategies.'],
            ['Success signal', 'Risk score and success probability in one view.'],
          ].map(([title, body]) => (
            <div key={title} className="page-card p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <BarChart3 className="h-4 w-4 text-indigo-500" />
                {title}
              </div>
              <p className="text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </section>

        <section id="assessment" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Calculator className="h-4 w-4 text-[#635bff]" />
              Assessment form
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Enterprise AI investment assessment</h2>
            <p className="page-lead mt-3 text-lg">
              A practical risk intake form. Same calculator logic, cleaner presentation.
            </p>
          </div>

          <div className="page-card rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              {inputFields.map((field) => (
                <div key={field.key}>
                  <label className="mb-3 block text-sm font-medium text-slate-700">{field.label}</label>
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    value={assessmentData[field.key as keyof typeof assessmentData]}
                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                  >
                    {field.options.map(([value, label]) => (
                      <option key={String(value)} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <button onClick={calculateRiskScore} className="btn-brand mt-8 inline-flex w-full items-center justify-center gap-2">
              <Calculator className="h-5 w-5" />
              Calculate risk assessment
            </button>
          </div>
        </section>

        {results && (
          <section id="results" className="mb-16">
            <div className="mb-8 max-w-2xl">
              <div className="page-pill mb-3 inline-flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#635bff]" />
                Results
              </div>
              <h2 className="page-title text-3xl md:text-4xl">Risk assessment results</h2>
              <p className="page-lead mt-3 text-lg">
                Scores, recommendations, and mitigation steps rendered in the same Stripe-ish system.
              </p>
            </div>

            <div className="page-card rounded-[2rem] p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <div
                    className={`text-3xl font-semibold ${
                      results.riskLevel === 'High' ? 'text-rose-600' : results.riskLevel === 'Medium' ? 'text-amber-600' : 'text-indigo-600'
                    }`}
                  >
                    {results.riskScore}%
                  </div>
                  <div className="mt-1 text-sm text-slate-500">Risk score</div>
                  <div
                    className={`mt-2 text-lg font-semibold ${
                      results.riskLevel === 'High' ? 'text-rose-600' : results.riskLevel === 'Medium' ? 'text-amber-600' : 'text-indigo-600'
                    }`}
                  >
                    {results.riskLevel} risk
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <div className="text-3xl font-semibold text-indigo-600">{results.expectedROI}%</div>
                  <div className="mt-1 text-sm text-slate-500">Expected ROI</div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">12-month target</div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <div className="text-3xl font-semibold text-indigo-600">{Math.max(100 - results.riskScore, 20)}%</div>
                  <div className="mt-1 text-sm text-slate-500">Success probability</div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">Implementation</div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="mb-4 text-xl font-semibold text-slate-950">Key recommendations</h3>
                  <div className="space-y-3">
                    {results.recommendations.map((rec) => (
                      <div key={rec} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                        <span className="text-sm leading-6 text-slate-700">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="mb-4 text-xl font-semibold text-slate-950">Risk mitigation strategies</h3>
                  <div className="space-y-3">
                    {results.mitigationStrategies.map((strategy) => (
                      <div key={strategy} className="flex items-start gap-3">
                        <Shield className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                        <span className="text-sm leading-6 text-slate-700">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-6">
                <div className="mb-2 text-lg font-semibold text-slate-950">Need detailed financial analysis?</div>
                <p className="mb-4 text-sm leading-6 text-slate-600">
                  Get a comprehensive CFO-grade risk assessment with detailed financial modeling, ROI projections, and implementation roadmap.
                </p>
                <Link href="/enterprise-ai-roi-optimization-framework-2026" className="btn-brand inline-flex items-center gap-2">
                  Get enterprise ROI framework
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="mb-8">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#635bff]" />
              Related resources
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Internal links kept intact</h2>
            <p className="page-lead mt-3 text-lg">
              Same cluster, same intent, cleaner UI.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['/enterprise-ai-implementation-best-practices-2026', 'Implementation guide', 'Pair it with the implementation framework.'],
              ['/manufacturing-ai-roi-calculator-2026', 'ROI calculator', 'See a more specific ROI workflow.' ],
              ['/enterprise-ai-success-patterns-analysis-2026', 'Success patterns', 'Study how successful delivery paths actually form.' ],
            ].map(([href, title, note]) => (
              <Link key={href} href={href} className="page-card group p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-3 text-lg font-semibold text-slate-950 group-hover:text-[#635bff]">{title}</div>
                <p className="text-sm leading-6 text-slate-600">{note}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#635bff]">
                  Open resource
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
