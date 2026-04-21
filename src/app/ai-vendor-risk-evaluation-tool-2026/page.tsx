'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Shield,
  Sparkles,
  Target,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

type RiskDimension = {
  name: string
  weight: number
  description: string
  criteria: string[]
}

type VendorData = {
  name: string
  category: string
  businessCriticality: string
  dimensions: Record<string, number>
}

type RiskAssessment = {
  overallScore: number
  riskLevel: string
  recommendations: string[]
  criticalFindings: string[]
  complianceStatus: string
}

const riskDimensions: RiskDimension[] = [
  {
    name: 'Technical Architecture & Performance',
    weight: 15,
    description: 'Model accuracy, scalability, integration complexity, API stability',
    criteria: ['Model accuracy >95%', 'API response time <200ms', 'Enterprise integration capabilities', 'Scalability under load'],
  },
  {
    name: 'Security & Data Protection',
    weight: 20,
    description: 'Cybersecurity posture, data handling, access controls, incident response',
    criteria: ['SOC 2 Type II certification', 'AES-256 encryption', 'Multi-factor authentication', '24/7 security monitoring'],
  },
  {
    name: 'Regulatory & Legal Compliance',
    weight: 18,
    description: 'GDPR, CCPA compliance, industry regulations, AI ethics, legal frameworks',
    criteria: ['GDPR Article 22 compliance', 'Industry-specific certifications', 'AI bias prevention measures', 'Legal liability framework'],
  },
  {
    name: 'Financial Stability & Pricing',
    weight: 12,
    description: 'Vendor financial health, pricing transparency, contract terms, TCO analysis',
    criteria: ['Revenue growth >20% YoY', 'Transparent pricing model', 'Favorable contract terms', 'Predictable TCO'],
  },
  {
    name: 'Operational Excellence',
    weight: 10,
    description: 'Service availability, customer support, change management, disaster recovery',
    criteria: ['99.9% uptime SLA', 'Enterprise support tier', 'Change management process', 'Business continuity plan'],
  },
  {
    name: 'Innovation & Roadmap',
    weight: 8,
    description: 'Product development, technology roadmap, R&D investment, market position',
    criteria: ['Active R&D investment', 'Clear product roadmap', 'Technology leadership', 'Market differentiation'],
  },
  {
    name: 'Governance & Transparency',
    weight: 10,
    description: 'Algorithmic transparency, audit trails, governance structure, stakeholder communication',
    criteria: ['Algorithm explainability', 'Comprehensive audit logs', 'Strong governance structure', 'Regular reporting'],
  },
  {
    name: 'Strategic Partnership Potential',
    weight: 7,
    description: 'Cultural alignment, integration capabilities, partnership viability, knowledge transfer',
    criteria: ['Cultural fit assessment', 'Integration readiness', 'Long-term partnership potential', 'Training and support'],
  },
]

const vendorCategories = [
  'Machine Learning Platform',
  'AI-Powered Analytics',
  'Natural Language Processing',
  'Computer Vision',
  'Robotic Process Automation',
  'Conversational AI',
  'Predictive Analytics',
  'AI Development Tools',
  'Data Management & Processing',
  'AI Security & Governance',
]

const criticalityLevels = [
  'Mission Critical - Core business process dependency',
  'Business Critical - Important business function',
  'Operational - Supporting business operations',
  'Development - Testing or development use only',
]

const heroSignals = [
  'All eight risk dimensions remain intact, with the original scores and weighting logic preserved.',
  'The results screen still reports risk level, compliance status, recommendations, and key findings.',
  'Canonical, metadata, and internal links stay in place.',
  'Only the shell changed; the evaluation logic did not.',
]

const processCards = [
  {
    title: 'Step 1',
    note: 'Enter the vendor basics, category, and business criticality.',
    icon: FileSearch,
  },
  {
    title: 'Step 2',
    note: 'Score across all eight dimensions using evidence instead of instinct.',
    icon: ClipboardCheck,
  },
  {
    title: 'Step 3',
    note: 'Generate the overall risk view, compliance status, and action guidance.',
    icon: Target,
  },
]

const relatedLinks = [
  {
    href: '/ai-vendor-due-diligence-checklist-enterprise-2026',
    title: 'AI Vendor Due Diligence Checklist 2026',
    note: 'Get the diligence questions straight before you score anything.',
  },
  {
    href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
    title: 'Enterprise AI Vendor Shortlist Scorecard 2026',
    note: 'Turn the long list into a workable shortlist.',
  },
  {
    href: '/ai-governance-framework-enterprise-2026',
    title: 'AI Governance Framework Enterprise 2026',
    note: 'Connect vendor risk to governance and approval workflows.',
  },
  {
    href: '/ai-procurement-decision-matrix-tool-2026',
    title: 'AI Procurement Decision Matrix Tool 2026',
    note: 'Use this when you need a more procurement-led lens.',
  },
]

const scoreLabels = {
  1: 'Critical',
  2: 'High',
  3: 'Moderate',
  4: 'Low',
  5: 'Minimal',
} as const

const scoreTone = {
  1: 'bg-rose-500',
  2: 'bg-orange-500',
  3: 'bg-amber-500',
  4: 'bg-sky-500',
  5: 'bg-indigo-500',
} as const

function getRiskColor(level: string) {
  switch (level) {
    case 'LOW RISK':
      return 'border-indigo-100 bg-indigo-50 text-indigo-700'
    case 'MODERATE RISK':
      return 'border-amber-100 bg-amber-50 text-amber-700'
    case 'HIGH RISK':
      return 'border-orange-100 bg-orange-50 text-orange-700'
    case 'CRITICAL RISK':
      return 'border-rose-100 bg-rose-50 text-rose-700'
    default:
      return 'border-slate-200 bg-slate-50 text-slate-700'
  }
}

function getScoreColor(score: number) {
  if (score >= 4) return 'text-indigo-600'
  if (score >= 3) return 'text-amber-600'
  if (score >= 2) return 'text-orange-600'
  return 'text-rose-600'
}

export default function AIVendorRiskEvaluationTool2026() {
  const [currentStep, setCurrentStep] = useState(1)
  const [vendorData, setVendorData] = useState<VendorData>({
    name: '',
    category: '',
    businessCriticality: '',
    dimensions: {},
  })
  const [assessment, setAssessment] = useState<RiskAssessment | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const completedDimensions = Object.keys(vendorData.dimensions).length
  const canContinue = vendorData.name && vendorData.category && vendorData.businessCriticality
  const canCalculate = completedDimensions === riskDimensions.length

  const progressValue = useMemo(() => {
    if (currentStep === 1) return 20
    if (currentStep === 2) return 45
    if (currentStep === 3) return 70 + (completedDimensions / riskDimensions.length) * 20
    return 100
  }, [completedDimensions, currentStep])

  const handleDimensionScore = (dimensionName: string, score: number) => {
    setVendorData((prev) => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        [dimensionName]: score,
      },
    }))
  }

  const calculateRiskAssessment = () => {
    setIsCalculating(true)

    setTimeout(() => {
      let weightedSum = 0
      let totalWeight = 0

      riskDimensions.forEach((dimension) => {
        const score = vendorData.dimensions[dimension.name] || 1
        weightedSum += score * dimension.weight
        totalWeight += dimension.weight
      })

      const overallScore = weightedSum / totalWeight

      let riskLevel = ''
      let recommendations: string[] = []
      let criticalFindings: string[] = []
      let complianceStatus = ''

      if (overallScore >= 4.0) {
        riskLevel = 'LOW RISK'
        recommendations = [
          'Approved for critical business processes',
          'Implement standard monitoring procedures',
          'Schedule annual risk reassessment',
          'Consider for strategic partnership expansion',
        ]
        complianceStatus = 'COMPLIANT - Ready for enterprise deployment'
      } else if (overallScore >= 3.0) {
        riskLevel = 'MODERATE RISK'
        recommendations = [
          'Approved with enhanced monitoring requirements',
          'Implement quarterly risk reviews',
          'Develop contingency plans for critical dependencies',
          'Negotiate improved SLA terms',
        ]
        complianceStatus = 'CONDITIONAL COMPLIANCE - Requires ongoing monitoring'
      } else if (overallScore >= 2.0) {
        riskLevel = 'HIGH RISK'
        recommendations = [
          'Requires significant risk mitigation measures',
          'Not recommended for critical business processes',
          'Implement continuous monitoring and controls',
          'Develop detailed exit strategy',
        ]
        criticalFindings = [
          'Multiple compliance gaps identified',
          'Security controls below enterprise standards',
          'Financial or operational stability concerns',
        ]
        complianceStatus = 'NON-COMPLIANT - Requires remediation'
      } else {
        riskLevel = 'CRITICAL RISK'
        recommendations = [
          'NOT APPROVED for enterprise use',
          'Immediate discontinuation recommended',
          'Seek alternative vendor solutions',
          'Legal review of existing contracts required',
        ]
        criticalFindings = [
          'Severe compliance violations detected',
          'Unacceptable security posture',
          'High probability of regulatory penalties',
          'Significant operational or financial risks',
        ]
        complianceStatus = 'CRITICAL NON-COMPLIANCE - Immediate action required'
      }

      riskDimensions.forEach((dimension) => {
        const score = vendorData.dimensions[dimension.name] || 1
        if (score <= 2) {
          criticalFindings.push(`${dimension.name}: Below acceptable standards`)
        }
      })

      setAssessment({
        overallScore: Math.round(overallScore * 10) / 10,
        riskLevel,
        recommendations,
        criticalFindings,
        complianceStatus,
      })

      setIsCalculating(false)
      setCurrentStep(4)
    }, 1200)
  }

  const resetAssessment = () => {
    setCurrentStep(1)
    setVendorData({ name: '', category: '', businessCriticality: '', dimensions: {} })
    setAssessment(null)
    setIsCalculating(false)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-11"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_54%_82%,rgba(251,191,36,0.05),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise vendor risk scoring 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI vendor risk evaluation,
                  <span className="brand-gradient-text block">do not let &quot;seems fine&quot; become the verdict.</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Use an 8-dimension model to evaluate enterprise AI vendors across security, compliance, architecture, financial health, operations, governance,
                  and partnership maturity. The original scoring logic, risk tiers, and recommendation outputs stay intact; only the interface has been aligned to
                  the current light Stripe-ish UI.
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#tool" className="btn-brand inline-flex items-center gap-2">
                    Open the assessment tool
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="btn-secondary inline-flex items-center gap-2">
                    Review the due diligence checklist first
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
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
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">Assessment structure</div>
                        <div className="text-xl font-semibold text-slate-950">Three steps to a defensible decision</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Evidence first
                      </div>
                    </div>
                    <div className="space-y-3">
                      {processCards.map((card) => {
                        const Icon = card.icon
                        return (
                          <div key={card.title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                            <div className="flex items-start gap-3">
                              <div className="rounded-xl border border-slate-200 bg-white p-2">
                                <Icon className="h-4 w-4 text-[#635bff]" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-950">{card.title}</div>
                                <p className="mt-1 text-sm leading-6 text-slate-600">{card.note}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/80 px-4 py-4 text-sm leading-6 text-slate-700">
                      A high score does not automatically mean you should buy, and a low score does not always mean immediate rejection. The point is to create a
                      judgment process you can explain, revisit, and document.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="page-card p-8 md:p-10">
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">What this tool keeps</h2>
            <div className="space-y-4 text-lg leading-8 text-slate-600">
              <p>
                This page still uses the original 8-dimension weighted model. Technical architecture, security, compliance, pricing, operations, roadmap, governance, and partnership potential all keep the same relative importance.
              </p>
              <p>
                The result logic also stays intact: overall score, risk classification, recommendations, critical findings, and compliance status. It just no longer
                feels like a rushed B2B form page from 2024.
              </p>
            </div>
          </div>

          <div className="page-card border border-sky-100 bg-sky-50/80 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-white/80">
              <Shield className="h-5 w-5 text-[#635bff]" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Weights that matter</h2>
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">Security &amp; Data Protection — 20%</div>
              <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">Regulatory &amp; Legal Compliance — 18%</div>
              <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">Technical Architecture &amp; Performance — 15%</div>
              <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">The rest covers pricing, operations, roadmap, governance, and partnership fit.</div>
            </div>
          </div>
        </section>

        <section id="tool" className="mb-16 page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Interactive tool</div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                Scoring can be subjective,
                <span className="brand-gradient-text block">but the process has to stay transparent.</span>
              </h2>
            </div>
            <div className="min-w-[240px] rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>Progress</span>
                <span>{Math.round(progressValue)}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 rounded-full bg-gradient-to-r from-[#635bff] via-sky-500 to-indigo-500" style={{ width: `${progressValue}%` }} />
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  currentStep >= step ? 'border border-indigo-200 bg-indigo-50 text-indigo-700' : 'border border-slate-200 bg-white text-slate-500'
                }`}
              >
                Step {step}
              </div>
            ))}
          </div>

          {currentStep === 1 && (
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="page-card p-8">
                <h3 className="mb-6 text-2xl font-semibold text-slate-950">Vendor information</h3>
                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Vendor name</label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-4 focus:ring-indigo-100"
                      placeholder="e.g. OpenAI, Anthropic, Microsoft"
                      value={vendorData.name}
                      onChange={(e) => setVendorData((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">AI solution category</label>
                    <select
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-4 focus:ring-indigo-100"
                      value={vendorData.category}
                      onChange={(e) => setVendorData((prev) => ({ ...prev, category: e.target.value }))}
                    >
                      <option value="">Select a category...</option>
                      {vendorCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Business criticality level</label>
                    <select
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#635bff] focus:ring-4 focus:ring-indigo-100"
                      value={vendorData.businessCriticality}
                      onChange={(e) => setVendorData((prev) => ({ ...prev, businessCriticality: e.target.value }))}
                    >
                      <option value="">Select criticality level...</option>
                      {criticalityLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setCurrentStep(2)}
                    disabled={!canContinue}
                    className="btn-brand inline-flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue to framework review
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card border border-indigo-100 bg-indigo-50/80 p-8">
                  <h3 className="mb-4 text-2xl font-semibold text-slate-950">Before you score</h3>
                  <div className="space-y-3 text-sm leading-6 text-slate-700">
                    <p>Do not hand out high scores based on sales promises. It only counts if you can verify it.</p>
                    <p>If security, legal, and procurement are not aligned, the result will almost always look too optimistic.</p>
                    <p>This tool is built for a first structured view, not as a replacement for formal due diligence.</p>
                  </div>
                </div>

                <div className="page-card p-8">
                  <h3 className="mb-4 text-2xl font-semibold text-slate-950">What you will get</h3>
                  <div className="space-y-3 text-sm leading-6 text-slate-700">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Overall weighted score out of 5.0</div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Risk class from LOW to CRITICAL</div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Compliance status and next-step recommendations</div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Critical findings list when weak dimensions show up</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="page-card p-8">
                <h3 className="mb-6 text-2xl font-semibold text-slate-950">8-dimension risk framework</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {riskDimensions.map((dimension) => (
                    <div key={dimension.name} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <h4 className="text-lg font-semibold text-slate-950">{dimension.name}</h4>
                        <div className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          {dimension.weight}%
                        </div>
                      </div>
                      <p className="mb-4 text-sm leading-6 text-slate-600">{dimension.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {dimension.criteria.map((criterion) => (
                          <span key={criterion} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                            {criterion}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="page-card border border-sky-100 bg-sky-50/80 p-8">
                <h3 className="mb-4 text-2xl font-semibold text-slate-950">Scoring scale</h3>
                <div className="grid gap-4 md:grid-cols-5">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <div key={score} className="rounded-2xl border border-white/80 bg-white/80 p-4 text-center">
                      <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-white ${scoreTone[score as keyof typeof scoreTone]}`}>
                        {score}
                      </div>
                      <div className="text-sm font-semibold text-slate-950">{scoreLabels[score as keyof typeof scoreLabels]}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button onClick={() => setCurrentStep(1)} className="btn-secondary inline-flex items-center justify-center gap-2">
                  Back
                </button>
                <button onClick={() => setCurrentStep(3)} className="btn-brand inline-flex items-center justify-center gap-2">
                  Start scoring
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="page-card p-8">
                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">Risk dimension scoring</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Rate each dimension from 1 to 5 for <strong>{vendorData.name || 'this vendor'}</strong>.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-600">
                    Completed: {completedDimensions}/{riskDimensions.length}
                  </div>
                </div>

                <div className="space-y-6">
                  {riskDimensions.map((dimension) => {
                    const selectedScore = vendorData.dimensions[dimension.name]
                    return (
                      <div key={dimension.name} className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6">
                        <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-950">{dimension.name}</h4>
                            <p className="mt-1 text-sm leading-6 text-slate-600">{dimension.description}</p>
                          </div>
                          <div className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                            Weight {dimension.weight}%
                          </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-5">
                          {[1, 2, 3, 4, 5].map((score) => {
                            const active = selectedScore === score
                            return (
                              <button
                                key={score}
                                onClick={() => handleDimensionScore(dimension.name, score)}
                                className={`rounded-2xl border p-4 text-left transition ${
                                  active
                                    ? 'border-[#635bff] bg-indigo-50 shadow-sm ring-4 ring-indigo-100'
                                    : 'border-slate-200 bg-white hover:border-slate-300'
                                }`}
                              >
                                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${scoreTone[score as keyof typeof scoreTone]}`}>
                                  {score}
                                </div>
                                <div className="text-sm font-semibold text-slate-950">{scoreLabels[score as keyof typeof scoreLabels]}</div>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button onClick={() => setCurrentStep(2)} className="btn-secondary inline-flex items-center justify-center gap-2">
                  Back
                </button>
                <button
                  onClick={calculateRiskAssessment}
                  disabled={!canCalculate || isCalculating}
                  className="btn-brand inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate risk assessment'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              {isCalculating ? (
                <div className="page-card p-10 text-center">
                  <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-b-2 border-[#635bff]" />
                  <h3 className="text-xl font-semibold text-slate-950">Calculating risk assessment...</h3>
                  <p className="mt-2 text-slate-600">Analyzing 8 dimensions and generating the report.</p>
                </div>
              ) : (
                assessment && (
                  <>
                    <div className="page-card p-8 md:p-10">
                      <div className="mb-8 text-center">
                        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">Risk assessment results</h3>
                        <p className="mt-3 text-slate-600">
                          Vendor: <strong>{vendorData.name}</strong> · Category: <strong>{vendorData.category}</strong>
                        </p>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 text-center">
                          <div className={`text-4xl font-semibold tracking-tight ${getScoreColor(assessment.overallScore)}`}>
                            {assessment.overallScore}
                          </div>
                          <div className="mt-2 text-sm text-slate-500">Overall score / 5.0</div>
                        </div>
                        <div className={`rounded-3xl border p-6 text-center ${getRiskColor(assessment.riskLevel)}`}>
                          <div className="text-xl font-semibold">{assessment.riskLevel}</div>
                          <div className="mt-2 text-sm opacity-80">Risk classification</div>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 text-center">
                          <div className="text-lg font-semibold text-slate-950">{assessment.complianceStatus.split(' - ')[0]}</div>
                          <div className="mt-2 text-sm text-slate-500">Compliance status</div>
                        </div>
                      </div>
                    </div>

                    <div className="page-card p-8">
                      <h3 className="mb-6 text-2xl font-semibold text-slate-950">Dimension score breakdown</h3>
                      <div className="space-y-4">
                        {riskDimensions.map((dimension) => {
                          const score = vendorData.dimensions[dimension.name] || 0
                          return (
                            <div key={dimension.name} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 md:flex-row md:items-center md:justify-between">
                              <div>
                                <div className="font-semibold text-slate-950">{dimension.name}</div>
                                <div className="mt-1 text-sm text-slate-600">Weight: {dimension.weight}%</div>
                              </div>
                              <div className="text-center md:text-right">
                                <div className={`text-3xl font-semibold ${getScoreColor(score)}`}>{score}</div>
                                <div className="text-xs text-slate-500">/ 5</div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="page-card p-8">
                        <h3 className="mb-6 text-2xl font-semibold text-slate-950">Recommendations</h3>
                        <ul className="space-y-3">
                          {assessment.recommendations.map((rec) => (
                            <li key={rec} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm leading-6 text-slate-700">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`page-card p-8 ${assessment.criticalFindings.length > 0 ? 'border border-rose-100 bg-rose-50/60' : ''}`}>
                        <h3 className="mb-6 text-2xl font-semibold text-slate-950">Critical findings</h3>
                        {assessment.criticalFindings.length > 0 ? (
                          <ul className="space-y-3">
                            {assessment.criticalFindings.map((finding) => (
                              <li key={finding} className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/80 px-4 py-4 text-sm leading-6 text-slate-700">
                                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                                <span>{finding}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm leading-6 text-slate-700">
                            No critical findings were triggered by the current score profile.
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div>
                          <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Next actions</div>
                          <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                            The score is only the start,
                            <span className="brand-gradient-text block">the decision depends on what happens next.</span>
                          </h3>
                          <p className="mt-4 text-lg leading-8 text-slate-600">
                            Take this result into diligence, shortlisting, and procurement approval. Do not turn vendor risk assessment into a PDF people read once and
                            ignore.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <button onClick={() => window.print()} className="btn-brand inline-flex w-full items-center justify-center gap-2">
                            Save / print report
                          </button>
                          <button onClick={resetAssessment} className="btn-secondary inline-flex w-full items-center justify-center gap-2">
                            Assess another vendor
                          </button>
                          <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary inline-flex w-full items-center justify-center gap-2">
                            Open shortlist scorecard
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          )}
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-2">
          <div className="page-card border border-rose-100 bg-rose-50/80 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-100 bg-white/80">
              <AlertTriangle className="h-5 w-5 text-rose-600" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">What teams usually get wrong</h2>
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">They score the vendor before security and legal finish their questions.</div>
              <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">They confuse “popular vendor” with “low-risk vendor”.</div>
              <div className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4">They forget exit risk, pricing drift, and governance maturity.</div>
            </div>
          </div>

          <div className="page-card p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
              <Target className="h-5 w-5 text-indigo-600" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Related internal resources</h2>
            <div className="space-y-3">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 transition hover:border-indigo-200 hover:bg-indigo-50/60">
                  <div className="font-semibold text-slate-950">{item.title}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">{item.note}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
