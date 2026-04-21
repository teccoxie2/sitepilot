'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Download,
  Eye,
  FileText,
  Lock,
  Shield,
  Sparkles,
  XCircle,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Data Privacy Impact Assessment Tool 2026 | SitePilot'
const pageDescription =
  'Assess enterprise AI privacy risk across data handling, jurisdictions, security controls, and compliance gaps, then generate remediation priorities and an implementation roadmap.'
const pageUrl = 'https://sitepilot.co/ai-data-privacy-impact-assessment-2026'

interface AssessmentData {
  companyName: string
  industry: string
  companySize: string
  aiSystemType: string
  dataTypes: string[]
  dataVolume: string
  dataSubjects: string
  geographicScope: string[]
  retentionPeriod: string
  dataSharing: string
  securityMeasures: string[]
  complianceFrameworks: string[]
  riskTolerance: string
  budget: string
}

interface AssessmentResult {
  overallScore: number
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  privacyRisk: number
  complianceRisk: number
  operationalRisk: number
  reputationalRisk: number
  recommendations: string[]
  implementation: {
    phase: string
    timeframe: string
    estimatedCost: string
    priority: string
    actions: string[]
  }[]
  complianceGaps: string[]
  nextSteps: string[]
}

const inputClass =
  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm outline-none transition focus:border-[#635bff] focus:ring-4 focus:ring-[#635bff]/10'

const checkboxCardClass =
  'flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-50'

const industryOptions = [
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Financial services' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'retail', label: 'Retail' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'other', label: 'Other' },
]

const companySizeOptions = [
  { value: 'startup', label: 'Startup (1-50 people)' },
  { value: 'small', label: 'Small business (51-200 people)' },
  { value: 'medium', label: 'Mid-market (201-1,000 people)' },
  { value: 'large', label: 'Large company (1,000-5,000 people)' },
  { value: 'enterprise', label: 'Enterprise (5,000+ people)' },
]

const aiSystemOptions = [
  { value: 'customer_analytics', label: 'Customer analytics' },
  { value: 'recommendation', label: 'Recommendation system' },
  { value: 'automated_decision', label: 'Automated decision system' },
  { value: 'chatbot', label: 'Chatbot' },
  { value: 'computer_vision', label: 'Computer vision' },
  { value: 'nlp', label: 'Natural language processing' },
  { value: 'predictive_analytics', label: 'Predictive analytics' },
]

const dataTypeOptions = [
  { value: 'contact_info', label: 'Contact information' },
  { value: 'personal_identifiers', label: 'Personal identifiers' },
  { value: 'financial_data', label: 'Financial data' },
  { value: 'health_data', label: 'Health data' },
  { value: 'behavioral_data', label: 'Behavioral data' },
  { value: 'biometric_data', label: 'Biometric data' },
  { value: 'location_data', label: 'Location data' },
  { value: 'demographic_data', label: 'Demographic data' },
]

const regionOptions = [
  { value: 'eu', label: 'European Union' },
  { value: 'california', label: 'California' },
  { value: 'canada', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'australia', label: 'Australia' },
  { value: 'brazil', label: 'Brazil' },
  { value: 'asia_pacific', label: 'Asia-Pacific' },
  { value: 'other', label: 'Other regions' },
]

const securityMeasureOptions = [
  { value: 'encryption_at_rest', label: 'Encryption at rest' },
  { value: 'encryption_in_transit', label: 'Encryption in transit' },
  { value: 'access_controls', label: 'Role-based access controls' },
  { value: 'audit_logging', label: 'Audit logging' },
  { value: 'data_anonymization', label: 'Data anonymization and pseudonymization' },
  { value: 'backup_recovery', label: 'Backup and recovery plan' },
  { value: 'incident_response', label: 'Incident response plan' },
  { value: 'employee_training', label: 'Employee privacy training' },
]

const frameworkOptions = [
  { value: 'gdpr', label: 'GDPR (European Union)' },
  { value: 'ccpa', label: 'CCPA (California)' },
  { value: 'pipeda', label: 'PIPEDA (Canada)' },
  { value: 'lgpd', label: 'LGPD (Brazil)' },
  { value: 'pdpa_singapore', label: 'PDPA (Singapore)' },
  { value: 'privacy_act', label: 'Privacy Act (Australia)' },
  { value: 'popia', label: 'POPIA (South Africa)' },
  { value: 'none', label: 'Not yet implemented' },
]

const stepMeta = [
  {
    step: 1,
    title: 'Organization context',
    note: 'Industry, company size, and AI system scope',
    icon: Database,
  },
  {
    step: 2,
    title: 'Data handling',
    note: 'Data types, scale, and geographic footprint',
    icon: Eye,
  },
  {
    step: 3,
    title: 'Security and compliance',
    note: 'Controls, sharing model, and regulatory coverage',
    icon: Lock,
  },
  {
    step: 4,
    title: 'Risk posture',
    note: 'Budget, tolerance, and report generation',
    icon: BarChart3,
  },
]

const summaryStats = [
  { value: '4', label: 'assessment steps' },
  { value: '14', label: 'key inputs' },
  { value: '4', label: 'risk dimensions' },
  { value: '90 days', label: 'starter remediation plan' },
]

const relatedResources = [
  {
    href: '/ai-tools-risk-assessment-enterprise-2026',
    title: 'AI Risk Assessment Tool',
    description: 'Put privacy risk inside the broader AI risk matrix and prioritize both on the same scale.',
  },
  {
    href: '/ai-tools-security-compliance-checklist-2026',
    title: 'AI Security Compliance Checklist',
    description: 'Convert control requirements into an execution checklist so the assessment leads to concrete work.',
  },
  {
    href: '/enterprise-ai-implementation-best-practices-2026',
    title: 'Enterprise AI Implementation Best Practices',
    description: 'Reconnect privacy remediation to the implementation roadmap instead of treating compliance in isolation.',
  },
  {
    href: '/ai-tools-budget-planning-enterprise-2026',
    title: 'AI Budget Planning Tool',
    description: 'Align remediation cost with the annual budget cycle and reduce resourcing friction.',
  },
]

const riskToneClasses: Record<AssessmentResult['riskLevel'], string> = {
  LOW: 'border-indigo-200 bg-indigo-50 text-indigo-700',
  MEDIUM: 'border-amber-200 bg-amber-50 text-amber-700',
  HIGH: 'border-orange-200 bg-orange-50 text-orange-700',
  CRITICAL: 'border-rose-200 bg-rose-50 text-rose-700',
}

const priorityToneClasses: Record<string, string> = {
  CRITICAL: 'border-rose-200 bg-rose-50 text-rose-700',
  HIGH: 'border-orange-200 bg-orange-50 text-orange-700',
  MEDIUM: 'border-blue-200 bg-blue-50 text-blue-700',
}

const initialAssessmentData: AssessmentData = {
  companyName: '',
  industry: '',
  companySize: '',
  aiSystemType: '',
  dataTypes: [],
  dataVolume: '',
  dataSubjects: '',
  geographicScope: [],
  retentionPeriod: '',
  dataSharing: '',
  securityMeasures: [],
  complianceFrameworks: [],
  riskTolerance: '',
  budget: '',
}

function toggleArrayValue(items: string[], value: string) {
  return items.includes(value) ? items.filter((item) => item !== value) : [...items, value]
}

export default function DataPrivacyAssessment() {
  const [currentStep, setCurrentStep] = useState(1)
  const [assessmentData, setAssessmentData] = useState(initialAssessmentData)
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [loading, setLoading] = useState(false)

  const calculateAssessment = (): AssessmentResult => {
    let privacyRisk = 0
    let complianceRisk = 0
    let operationalRisk = 0
    let reputationalRisk = 0

    const highRiskDataTypes = ['personal_identifiers', 'financial_data', 'health_data', 'biometric_data']
    const riskDataCount = assessmentData.dataTypes.filter((type) => highRiskDataTypes.includes(type)).length
    privacyRisk += (riskDataCount / highRiskDataTypes.length) * 30

    const volumeRisk = {
      under_1k: 5,
      '1k_10k': 10,
      '10k_100k': 20,
      '100k_1m': 30,
      over_1m: 40,
    }
    privacyRisk += volumeRisk[assessmentData.dataVolume as keyof typeof volumeRisk] || 0

    const multiJurisdiction = assessmentData.geographicScope.length > 1
    if (multiJurisdiction) privacyRisk += 15
    if (assessmentData.geographicScope.includes('eu')) privacyRisk += 10
    if (assessmentData.geographicScope.includes('california')) privacyRisk += 8

    const requiredFrameworks = ['gdpr', 'ccpa', 'pipeda', 'lgpd']
    const implementedCount = assessmentData.complianceFrameworks.filter((framework) =>
      requiredFrameworks.includes(framework)
    ).length
    complianceRisk = Math.max(
      0,
      ((requiredFrameworks.length - implementedCount) / requiredFrameworks.length) * 40
    )

    const securityScore =
      assessmentData.securityMeasures.length >= 4
        ? 10
        : (4 - assessmentData.securityMeasures.length) * 10
    operationalRisk += securityScore

    if (assessmentData.dataSharing === 'third_parties') operationalRisk += 20
    if (assessmentData.dataSharing === 'international') operationalRisk += 30

    const highProfileIndustries = ['healthcare', 'finance', 'education', 'technology']
    if (highProfileIndustries.includes(assessmentData.industry)) {
      reputationalRisk += 20
    }
    if (assessmentData.companySize === 'large' || assessmentData.companySize === 'enterprise') {
      reputationalRisk += 15
    }

    const overallScore = Math.min(100, privacyRisk + complianceRisk + operationalRisk + reputationalRisk)

    let riskLevel: AssessmentResult['riskLevel'] = 'LOW'
    if (overallScore >= 75) riskLevel = 'CRITICAL'
    else if (overallScore >= 50) riskLevel = 'HIGH'
    else if (overallScore >= 25) riskLevel = 'MEDIUM'

    const recommendations: string[] = []
    if (riskDataCount > 2) {
      recommendations.push('Apply data minimization so teams only collect the personal data they truly need.')
      recommendations.push('Build a data classification and labeling system to flag high-risk data types early.')
    }
    if (complianceRisk > 20) {
      recommendations.push('Accelerate GDPR and CCPA controls where the operating footprint requires them.')
      recommendations.push('Create a formal workflow for responding to data subject rights requests.')
    }
    if (operationalRisk > 25) {
      recommendations.push('Strengthen data security controls and move critical flows to end-to-end encryption.')
      recommendations.push('Stand up a documented incident response plan for data leakage events.')
    }
    if (reputationalRisk > 15) {
      recommendations.push('Make privacy policies and user communications more transparent and easier to act on.')
      recommendations.push('Apply Privacy by Design principles throughout product development.')
    }

    const implementation = [
      {
        phase: 'Immediate actions',
        timeframe: '1-4 weeks',
        estimatedCost: '$25,000 - $75,000',
        priority: 'CRITICAL',
        actions: [
          'Run a full data audit and mapping exercise.',
          'Update privacy policies and consent flows.',
          'Deploy the highest-priority security controls.',
          'Form a dedicated data incident response team.',
        ],
      },
      {
        phase: 'Short-term improvements',
        timeframe: '1-3 months',
        estimatedCost: '$50,000 - $150,000',
        priority: 'HIGH',
        actions: [
          'Deploy a data protection management platform.',
          'Automate core data subject rights responses.',
          'Create a repeatable privacy impact assessment workflow.',
          'Launch employee privacy training.',
        ],
      },
      {
        phase: 'Long-term governance',
        timeframe: '3-12 months',
        estimatedCost: '$100,000 - $300,000',
        priority: 'MEDIUM',
        actions: [
          'Establish continuous monitoring and audit mechanisms.',
          'Introduce advanced encryption and anonymization controls.',
          'Create a vendor privacy management program.',
          'Pursue third-party privacy certification.',
        ],
      },
    ]

    const complianceGaps: string[] = []
    if (
      !assessmentData.complianceFrameworks.includes('gdpr') &&
      assessmentData.geographicScope.includes('eu')
    ) {
      complianceGaps.push('GDPR compliance requirements')
    }
    if (
      !assessmentData.complianceFrameworks.includes('ccpa') &&
      assessmentData.geographicScope.includes('california')
    ) {
      complianceGaps.push('CCPA compliance requirements')
    }
    if (assessmentData.securityMeasures.length < 3) {
      complianceGaps.push('Baseline data security controls')
    }

    return {
      overallScore,
      riskLevel,
      privacyRisk: Math.round(privacyRisk),
      complianceRisk: Math.round(complianceRisk),
      operationalRisk: Math.round(operationalRisk),
      reputationalRisk: Math.round(reputationalRisk),
      recommendations:
        recommendations.length > 0
          ? recommendations
          : ['No major gap stands out from the current input, but the team should still review privacy risk and controls every quarter.'],
      implementation,
      complianceGaps,
      nextSteps: [
        'Download the detailed privacy impact assessment report.',
        'Schedule a working session with privacy counsel or an external specialist.',
        'Build a 90-day privacy improvement plan.',
        'Start a monthly privacy risk review cadence.',
      ],
    }
  }

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setResult(calculateAssessment())
      setLoading(false)
    }, 1200)
  }

  const canMoveNext =
    (currentStep === 1 &&
      assessmentData.companyName &&
      assessmentData.industry &&
      assessmentData.companySize &&
      assessmentData.aiSystemType) ||
    (currentStep === 2 &&
      assessmentData.dataTypes.length > 0 &&
      assessmentData.dataVolume &&
      assessmentData.geographicScope.length > 0) ||
    (currentStep === 3 && assessmentData.retentionPeriod && assessmentData.dataSharing)

  const currentStepMeta = stepMeta[currentStep - 1] ?? stepMeta[0]

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-06"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[30rem] bg-[radial-gradient(circle_at_22%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_80%_14%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_55%_82%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 privacy impact assessment
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI data privacy impact assessment,
                <span className="brand-gradient-text block">identify the most expensive risks before you schedule remediation.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This tool is built for enterprise AI owners, compliance leads, and security teams. It does not try to cover every legal detail. It prioritizes the privacy gaps most likely to trigger fines, lawsuits, operating disruption, and reputational damage.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href={result ? '#assessment-results' : '#assessment-tool'} className="btn-brand">
                  {result ? 'View assessment results' : 'Start privacy assessment'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-enterprise-security-compliance" className="btn-secondary">
                  View enterprise security and compliance framework
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {summaryStats.map((stat) => (
                  <div key={stat.label} className="page-card p-4 bg-white/90">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-6 bg-white/95">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Assessment flow</div>
                      <div className="text-xl font-semibold text-slate-950">What the tool delivers</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      15-minute flow
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Risk scoring', 'Combine privacy, compliance, operational, and reputational risk in one decision view.'],
                      ['Gap detection', 'Surface high-risk data types, cross-region exposure, and weak control coverage.'],
                      ['Remediation roadmap', 'Break action into 1-4 week, 1-3 month, and longer-term governance stages.'],
                      ['Resource priority', 'Help the team point budget toward the places most likely to fail first.'],
                    ].map(([title, note]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
                        <div className="font-semibold text-slate-950">{title}</div>
                        <div className="text-sm text-slate-500 mt-1">{note}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/80 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If the team has already done a baseline compliance review, this page is best used to prioritize the business conversation, not to repeat legal training for counsel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        {!result ? (
          <>
            <section id="assessment-tool" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
              <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Assessment</div>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                      Get to a clear conclusion first,
                      <span className="block brand-gradient-text">then debate the controls.</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      Each step only asks for variables that materially change the risk model, so the assessment stays useful instead of becoming a bloated questionnaire.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {stepMeta.map((item) => {
                      const Icon = item.icon
                      const isActive = item.step === currentStep
                      const isDone = item.step < currentStep

                      return (
                        <div
                          key={item.step}
                          className={`rounded-2xl border px-4 py-4 transition ${
                            isActive
                              ? 'border-indigo-200 bg-indigo-50'
                              : isDone
                                ? 'border-indigo-200 bg-indigo-50/70'
                                : 'border-slate-200 bg-white'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                                isActive
                                  ? 'bg-indigo-600 text-white'
                                  : isDone
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-950">
                                Step {item.step} - {item.title}
                              </div>
                              <div className="text-sm text-slate-500 mt-1">{item.note}</div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="page-card-soft p-6">
                    <h3 className="text-xl font-semibold text-slate-950 mb-4">Current step focus</h3>
                    <div className="flex items-start gap-3 mb-4">
                      <currentStepMeta.icon className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600">{currentStepMeta.note}</p>
                    </div>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                        Use minimal input to isolate high-risk data, jurisdictions, and sharing patterns.
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                        After the result is generated, move directly into security, budget, and implementation resources.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-card-glow p-1.5">
                  <div className="page-card rounded-[2rem] p-8">
                    {currentStep === 1 && (
                      <div>
                        <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Step 1</div>
                        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">Organization and system context</h3>
                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Company name</label>
                            <input
                              className={inputClass}
                              value={assessmentData.companyName}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, companyName: e.target.value }))
                              }
                              placeholder="Enter company name"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Industry</label>
                            <select
                              className={inputClass}
                              value={assessmentData.industry}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, industry: e.target.value }))
                              }
                            >
                              <option value="">Select an industry</option>
                              {industryOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Company size</label>
                            <select
                              className={inputClass}
                              value={assessmentData.companySize}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, companySize: e.target.value }))
                              }
                            >
                              <option value="">Select company size</option>
                              {companySizeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">AI system type</label>
                            <select
                              className={inputClass}
                              value={assessmentData.aiSystemType}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, aiSystemType: e.target.value }))
                              }
                            >
                              <option value="">Select AI system type</option>
                              {aiSystemOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div>
                        <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Step 2</div>
                        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">Data collection and processing scope</h3>
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">Data types processed</label>
                            <div className="grid md:grid-cols-2 gap-3">
                              {dataTypeOptions.map((option) => (
                                <label key={option.value} className={checkboxCardClass}>
                                  <input
                                    type="checkbox"
                                    checked={assessmentData.dataTypes.includes(option.value)}
                                    onChange={() =>
                                      setAssessmentData((current) => ({
                                        ...current,
                                        dataTypes: toggleArrayValue(current.dataTypes, option.value),
                                      }))
                                    }
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#635bff] focus:ring-[#635bff]"
                                  />
                                  <span>{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-2">Data volume</label>
                              <select
                                className={inputClass}
                                value={assessmentData.dataVolume}
                                onChange={(e) =>
                                  setAssessmentData((current) => ({ ...current, dataVolume: e.target.value }))
                                }
                              >
                                <option value="">Select data volume</option>
                                <option value="under_1k">Under 1,000 records</option>
                                <option value="1k_10k">1,000-10,000 records</option>
                                <option value="10k_100k">10,000-100,000 records</option>
                                <option value="100k_1m">100,000-1,000,000 records</option>
                                <option value="over_1m">Over 1,000,000 records</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-2">Data subjects</label>
                              <textarea
                                className={`${inputClass} min-h-[112px]`}
                                value={assessmentData.dataSubjects}
                                onChange={(e) =>
                                  setAssessmentData((current) => ({ ...current, dataSubjects: e.target.value }))
                                }
                                placeholder="For example: customers, employees, candidates, visitors, patients"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">Operating geography</label>
                            <div className="grid md:grid-cols-2 gap-3">
                              {regionOptions.map((option) => (
                                <label key={option.value} className={checkboxCardClass}>
                                  <input
                                    type="checkbox"
                                    checked={assessmentData.geographicScope.includes(option.value)}
                                    onChange={() =>
                                      setAssessmentData((current) => ({
                                        ...current,
                                        geographicScope: toggleArrayValue(current.geographicScope, option.value),
                                      }))
                                    }
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#635bff] focus:ring-[#635bff]"
                                  />
                                  <span>{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div>
                        <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Step 3</div>
                        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">Security controls and compliance posture</h3>
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-2">Data retention period</label>
                              <select
                                className={inputClass}
                                value={assessmentData.retentionPeriod}
                                onChange={(e) =>
                                  setAssessmentData((current) => ({
                                    ...current,
                                    retentionPeriod: e.target.value,
                                  }))
                                }
                              >
                                <option value="">Select data retention period</option>
                                <option value="under_1year">Under 1 year</option>
                                <option value="1_3years">1-3 years</option>
                                <option value="3_5years">3-5 years</option>
                                <option value="5_10years">5-10 years</option>
                                <option value="over_10years">Over 10 years</option>
                                <option value="indefinite">Indefinite</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-2">Data sharing model</label>
                              <select
                                className={inputClass}
                                value={assessmentData.dataSharing}
                                onChange={(e) =>
                                  setAssessmentData((current) => ({ ...current, dataSharing: e.target.value }))
                                }
                              >
                                <option value="">Select data sharing model</option>
                                <option value="internal_only">Internal use only</option>
                                <option value="trusted_partners">Trusted partners</option>
                                <option value="third_parties">Third-party service providers</option>
                                <option value="international">International transfer</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">Security controls already in place</label>
                            <div className="grid md:grid-cols-2 gap-3">
                              {securityMeasureOptions.map((option) => (
                                <label key={option.value} className={checkboxCardClass}>
                                  <input
                                    type="checkbox"
                                    checked={assessmentData.securityMeasures.includes(option.value)}
                                    onChange={() =>
                                      setAssessmentData((current) => ({
                                        ...current,
                                        securityMeasures: toggleArrayValue(current.securityMeasures, option.value),
                                      }))
                                    }
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#635bff] focus:ring-[#635bff]"
                                  />
                                  <span>{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">Compliance frameworks in place</label>
                            <div className="grid md:grid-cols-2 gap-3">
                              {frameworkOptions.map((option) => (
                                <label key={option.value} className={checkboxCardClass}>
                                  <input
                                    type="checkbox"
                                    checked={assessmentData.complianceFrameworks.includes(option.value)}
                                    onChange={() =>
                                      setAssessmentData((current) => ({
                                        ...current,
                                        complianceFrameworks: toggleArrayValue(
                                          current.complianceFrameworks,
                                          option.value
                                        ),
                                      }))
                                    }
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#635bff] focus:ring-[#635bff]"
                                  />
                                  <span>{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div>
                        <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Step 4</div>
                        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">Budget and risk appetite</h3>
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Risk tolerance</label>
                            <select
                              className={inputClass}
                              value={assessmentData.riskTolerance}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, riskTolerance: e.target.value }))
                              }
                            >
                              <option value="">Select risk tolerance</option>
                              <option value="very_low">Very low - near zero tolerance</option>
                              <option value="low">Low - minimize risk</option>
                              <option value="medium">Medium - balance risk and return</option>
                              <option value="high">High - accept some risk</option>
                              <option value="very_high">Very high - aggressive posture</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Annual privacy improvement budget</label>
                            <select
                              className={inputClass}
                              value={assessmentData.budget}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, budget: e.target.value }))
                              }
                            >
                              <option value="">Select annual budget range</option>
                              <option value="under_50k">Under $50,000</option>
                              <option value="50k_100k">$50,000 - $100,000</option>
                              <option value="100k_250k">$100,000 - $250,000</option>
                              <option value="250k_500k">$250,000 - $500,000</option>
                              <option value="500k_1m">$500,000 - $1,000,000</option>
                              <option value="over_1m">Over $1,000,000</option>
                            </select>
                          </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                          <div className="text-sm font-semibold text-slate-950 mb-2">The result package includes</div>
                          <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-600">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />
                              Overall risk score with dimension-level breakdown
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />
                              Compliance gaps and urgent remediation guidance
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />
                              Phased implementation roadmap
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />
                              Related security, budget, and implementation resources
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => setCurrentStep((step) => Math.max(1, step - 1))}
                        disabled={currentStep === 1 || loading}
                      >
                        Previous step
                      </button>

                      {currentStep < 4 ? (
                        <button
                          type="button"
                          className="btn-brand"
                          onClick={() => setCurrentStep((step) => Math.min(4, step + 1))}
                          disabled={!canMoveNext}
                        >
                          Next step
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      ) : (
                        <button type="button" className="btn-brand" onClick={handleSubmit} disabled={loading}>
                          {loading ? 'Analyzing...' : 'Generate privacy impact assessment'}
                          {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="page-card-glow p-1.5 mb-16">
              <div className="page-card rounded-[2rem] p-8 md:p-10">
                <div className="max-w-3xl mb-8">
                  <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Coverage</div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                    What the assessment logic actually covers,
                    <span className="block brand-gradient-text">is where things are most likely to break, not how pretty the form looks.</span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {[
                    {
                      title: 'High-risk data',
                      note: 'Personal identifiers, financial records, health data, and biometric data materially increase privacy risk.',
                    },
                    {
                      title: 'Multi-jurisdiction operations',
                      note: 'Operating across the EU, California, and other regions increases governance complexity through overlapping regulation.',
                    },
                    {
                      title: 'Sharing and transfers',
                      note: 'Third-party service providers and cross-border transfers raise operational and incident-response complexity.',
                    },
                    {
                      title: 'Control maturity',
                      note: 'If control coverage is weak, remediation priority should move forward immediately.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="page-card-soft p-6">
                      <h3 className="text-xl font-semibold text-slate-950 mb-3">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section id="assessment-results" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Results</div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                    Privacy risk conclusions for {assessmentData.companyName || 'the current project'},
                    <span className="block brand-gradient-text">review severity first, then assign action.</span>
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    This is not a legal opinion. It is a decision-ready risk summary for project owners, compliance teams, and security leads.
                  </p>

                  <div
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${riskToneClasses[result.riskLevel]}`}
                  >
                    <Shield className="h-4 w-4" />
                    Overall risk level: {result.riskLevel}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    {[
                      ['Overall risk score', `${result.overallScore}/100`],
                      ['Privacy risk', `${result.privacyRisk}/40`],
                      ['Compliance risk', `${result.complianceRisk}/40`],
                      ['Operational risk', `${result.operationalRisk}/30`],
                      ['Reputational risk', `${result.reputationalRisk}/30`],
                    ].map(([label, value]) => (
                      <div key={label} className="page-card-soft p-4">
                        <div className="text-sm text-slate-500 mb-1">{label}</div>
                        <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="page-card-soft p-6">
                  <h3 className="text-2xl font-semibold text-slate-950 mb-5">Immediate recommendations</h3>
                  <div className="space-y-3">
                    {result.recommendations.map((recommendation) => (
                      <div key={recommendation} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                          <div className="text-sm text-slate-600 leading-relaxed">{recommendation}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {result.complianceGaps.length > 0 && (
                    <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-rose-700 mb-3">
                        <AlertTriangle className="h-4 w-4" />
                        Compliance gaps found
                      </div>
                      <div className="space-y-2">
                        {result.complianceGaps.map((gap) => (
                          <div key={gap} className="flex items-start gap-3 text-sm text-rose-700">
                            <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>{gap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="page-card-glow p-1.5 mb-16">
              <div className="page-card rounded-[2rem] p-8 md:p-10">
                <div className="max-w-3xl mb-8">
                  <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Roadmap</div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                    Break remediation into phases,
                    <span className="block brand-gradient-text">so budget, legal, and execution teams can actually absorb it.</span>
                  </h2>
                </div>

                <div className="space-y-6">
                  {result.implementation.map((phase) => (
                    <div key={phase.phase} className="page-card-soft p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-950">{phase.phase}</h3>
                          <p className="text-sm text-slate-500 mt-1">{phase.timeframe}</p>
                        </div>
                        <div className="text-right">
                          <div
                            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
                              priorityToneClasses[phase.priority] || 'border-slate-200 bg-slate-50 text-slate-700'
                            }`}
                          >
                            {phase.priority}
                          </div>
                          <div className="text-sm font-medium text-[#635bff] mt-2">{phase.estimatedCost}</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.actions.map((action) => (
                          <div key={action} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">
                            {action}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="page-card p-8 md:p-10 mb-16">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Next Steps</div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                    Once the result is in,
                    <span className="block brand-gradient-text">assign the next moves to the right owners.</span>
                  </h2>
                  <div className="space-y-3">
                    {result.nextSteps.map((step, index) => (
                      <div key={step} className="page-card-soft p-4 flex items-start gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#635bff] text-sm font-semibold text-white">
                          {index + 1}
                        </div>
                        <div className="text-sm text-slate-600">{step}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-8">
                    <button type="button" className="btn-brand">
                      <Download className="mr-2 h-4 w-4" />
                      Download full report
                    </button>
                    <Link href="/contact" className="btn-secondary">
                      <FileText className="mr-2 h-4 w-4" />
                      Get expert input
                    </Link>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        setResult(null)
                        setCurrentStep(1)
                      }}
                    >
                      Start a new assessment
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {relatedResources.map((resource) => (
                    <Link key={resource.href} href={resource.href} className="page-card-soft p-5 hover:border-slate-300 transition">
                      <div className="text-lg font-semibold text-slate-950 mb-2">{resource.title}</div>
                      <p className="text-sm text-slate-600 leading-relaxed">{resource.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}
