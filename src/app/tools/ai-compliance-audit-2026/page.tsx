'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AlertTriangle, ArrowRight, CheckCircle2, Download, FileText, HelpCircle, Shield, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

interface ComplianceArea {
  name: string
  description: string
  requirements: string[]
  score: number
  status: 'pass' | 'warning' | 'fail'
  recommendations: string[]
}

interface AuditResults {
  overallScore: number
  complianceAreas: ComplianceArea[]
  criticalIssues: string[]
  actionPriority: string[]
  timeline: string
  cost: string
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
}

const industries = [
  'Financial services',
  'Healthcare',
  'Manufacturing',
  'Retail and ecommerce',
  'Technology and software',
  'Telecommunications',
  'Energy and utilities',
  'Transportation and logistics',
  'Education',
  'Government and public sector',
]

const frameworks = [
  'GDPR (General Data Protection Regulation)',
  'CCPA (California Consumer Privacy Act)',
  'SOX (Sarbanes-Oxley Act)',
  'HIPAA (Health Insurance Portability and Accountability Act)',
  'PCI DSS (Payment Card Industry Data Security Standard)',
  'ISO 27001 (Information Security)',
  'NIST Framework (Cybersecurity Framework)',
  'FedRAMP (Federal Risk and Authorization Management Program)',
  'SOC 2 (System and Organization Controls)',
]

const initialFormData = {
  companyName: '',
  industry: '',
  employeeCount: '',
  annualRevenue: '',
  aiSystems: '',
  dataTypes: '',
  geographicRegions: '',
  currentFrameworks: '',
  lastAuditDate: '',
  specificConcerns: '',
  regulatoryRequirements: '',
}

export default function AIComplianceAudit2026() {
  const [currentStep, setCurrentStep] = useState(0)
  const [results, setResults] = useState<AuditResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState(initialFormData)

  const handleInputChange = (field: keyof typeof initialFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleFramework = (framework: string) => {
    const current = formData.currentFrameworks
    const next = current.includes(framework)
      ? current
          .split(', ')
          .filter((item) => item !== framework)
          .join(', ')
      : current
        ? `${current}, ${framework}`
        : framework

    handleInputChange('currentFrameworks', next)
  }

  const calculateCompliance = () => {
    setIsLoading(true)

    setTimeout(() => {
      const dataTypesText = formData.dataTypes.toLowerCase()
      const aiSystemsText = formData.aiSystems.toLowerCase()

      const complianceAreas: ComplianceArea[] = [
        {
          name: 'Data privacy and protection',
          description: 'Compliance review of personal data handling practices',
          requirements: ['Data classification', 'Consent management', 'Data subject rights', 'Data minimization'],
          score: dataTypesText.includes('personal') ? 65 : 85,
          status: dataTypesText.includes('sensitive') ? 'warning' : 'pass',
          recommendations: ['Deploy data discovery tools', 'Build a consent management workflow', 'Run recurring privacy impact assessments'],
        },
        {
          name: 'Algorithmic fairness',
          description: 'Bias detection and mitigation for AI decision systems',
          requirements: ['Bias testing', 'Fairness metrics', 'Model explainability', 'Continuous monitoring'],
          score: aiSystemsText.includes('decision') ? 55 : 75,
          status: aiSystemsText.includes('hiring') ? 'fail' : 'warning',
          recommendations: ['Deploy bias detection tooling', 'Build more diverse test datasets', 'Introduce human oversight workflows'],
        },
        {
          name: 'Model transparency',
          description: 'Explainability and auditability of AI systems',
          requirements: ['Model documentation', 'Decision pathways', 'Performance metrics', 'Change tracking'],
          score: 70,
          status: 'warning',
          recommendations: ['Create a model documentation library', 'Implement explainable AI techniques', 'Stand up an audit logging system'],
        },
        {
          name: 'Data security',
          description: 'Security controls for training data and models',
          requirements: ['Encrypted storage', 'Access controls', 'Secure transport', 'Backup recovery'],
          score: 80,
          status: 'pass',
          recommendations: ['Expand multi-factor authentication', 'Adopt zero-trust controls', 'Run recurring security audits'],
        },
        {
          name: 'Regulatory compliance',
          description: 'Alignment with sector-specific requirements',
          requirements: ['Regulation mapping', 'Compliance evidence', 'Audit readiness', 'Reporting workflows'],
          score: formData.industry === 'Financial services' ? 60 : 75,
          status: formData.industry === 'Healthcare' ? 'warning' : 'pass',
          recommendations: ['Build a compliance dashboard', 'Track regulatory updates', 'Run compliance enablement programs'],
        },
      ]

      const overallScore = Math.round(complianceAreas.reduce((acc, area) => acc + area.score, 0) / complianceAreas.length)
      const criticalIssues = complianceAreas.filter((area) => area.status === 'fail').map((area) => area.name)

      const getRiskLevel = (score: number): AuditResults['riskLevel'] => {
        if (score >= 85) return 'low'
        if (score >= 70) return 'medium'
        if (score >= 55) return 'high'
        return 'critical'
      }

      setResults({
        overallScore,
        complianceAreas,
        criticalIssues,
        actionPriority: [
          'Fix high-risk algorithmic bias exposures',
          'Strengthen data privacy safeguards',
          'Stand up continuous monitoring',
          'Expand employee compliance training',
        ],
        timeline: overallScore < 60 ? '6-12 months' : overallScore < 80 ? '3-6 months' : '1-3 months',
        cost: overallScore < 60 ? '$200K-$500K' : overallScore < 80 ? '$100K-$300K' : '$50K-$150K',
        riskLevel: getRiskLevel(overallScore),
      })
      setIsLoading(false)
      setCurrentStep(4)
    }, 1200)
  }

  const resetTool = () => {
    setCurrentStep(0)
    setResults(null)
    setIsLoading(false)
    setFormData(initialFormData)
  }

  const riskClasses: Record<AuditResults['riskLevel'], string> = {
    low: 'border-indigo-200 bg-indigo-50 text-indigo-700',
    medium: 'border-amber-200 bg-amber-50 text-amber-700',
    high: 'border-orange-200 bg-orange-50 text-orange-700',
    critical: 'border-rose-200 bg-rose-50 text-rose-700',
  }

  const stepLabels = ['Company profile', 'AI systems', 'Assessment goals']

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Enterprise AI Compliance Audit Tool 2026"
        description="Enterprise AI compliance audit tool built on 190 checkpoints to surface data, model, and regulatory risk."
        url="https://sitepilot.co/tools/ai-compliance-audit-2026"
        publishedDate="2026-03-07"
        modifiedDate="2026-03-07"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />

      {currentStep === 0 && (
        <>
          <section className="page-hero relative">
            <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
                <div className="max-w-3xl">
                  <div className="page-pill mb-6">
                    <Sparkles className="h-4 w-4 text-[#635bff]" />
                    2026 AI compliance audit
                  </div>

                  <h1 className="page-title text-5xl md:text-7xl mb-6">
                    Enterprise AI compliance audit,
                    <span className="brand-gradient-text block">bringing risk exposure and remediation priorities into one view.</span>
                  </h1>

                  <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                    This assessment uses 190 checkpoints across data privacy, algorithmic fairness, model transparency, data security, and regulatory readiness. The goal is not to showcase terminology. It is to give teams an actionable remediation direction in about 15 minutes.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    <button className="btn-brand" onClick={() => setCurrentStep(1)}>
                      Start free assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <Link href="/enterprise-ai-vendor-comparison-guide-2026" className="btn-secondary">
                      View vendor selection framework
                    </Link>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                    {[
                      { value: '190', label: 'Assessment checkpoints' },
                      { value: '15 min', label: 'Rapid assessment time' },
                      { value: '7 domains', label: 'Compliance coverage' },
                      { value: '19:1', label: 'Risk-to-investment ratio' },
                    ].map((stat) => (
                      <div key={stat.label} className="page-card px-4 py-4">
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
                          <div className="text-sm text-slate-500 mb-1">Assessment focus</div>
                          <div className="text-xl font-semibold text-slate-950">What this tool helps you answer</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          Risk priority
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          'Identify the AI risks most likely to trigger fines, litigation, or reputational damage',
                          'Adjust risk weightings by industry, data type, and system use case',
                          'Produce domain-level remediation guidance, timing, and investment ranges',
                        ].map((item) => (
                          <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                              <span className="text-sm text-slate-600">{item}</span>
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

          <section className="page-section surface-muted">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-2xl mb-10">
                <div className="page-pill mb-4">Assessment framework</div>
                <h2 className="page-title text-3xl md:text-5xl mb-4">Seven core AI compliance domains.</h2>
                <p className="page-lead text-lg">These areas typically define audit cost, remediation effort, and how much risk exposure remains on the table.</p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[
                  ['Data privacy', 'GDPR alignment, data minimization, consent flows, and rights response'],
                  ['Algorithmic fairness', 'Bias detection, fairness testing, diverse datasets, and human oversight'],
                  ['Model transparency', 'Explainability, audit trails, documentation depth, and change management'],
                  ['Data security', 'Encryption, access controls, secure transport, and recovery planning'],
                  ['Regulatory compliance', 'Rule mapping, reporting, audit readiness, and recurring updates'],
                  ['Ethics governance', 'Principles, impact reviews, ownership models, and escalation paths'],
                ].map(([title, note]) => (
                  <div key={title} className="page-card p-7">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{title}</h3>
                    <p className="text-slate-600 leading-7">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="page-section">
            <div className="max-w-5xl mx-auto px-4">
              <div className="page-card-glow p-8 md:p-12 surface-muted">
                <div className="max-w-3xl">
                  <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">FAQ</div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">
                    Start with the most common compliance questions.
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      ['How long does an enterprise AI compliance audit take?', 'This tool can generate an initial review in about 15 minutes. A traditional manual audit often takes 6 to 12 weeks.'],
                      ['What does an AI compliance audit cost?', 'External audits often land between $50K and $200K, and remediation spend rises with the risk tier.'],
                      ['Which industries should prioritize this first?', 'Financial services, healthcare, and high-risk decision systems usually need the earliest attention.'],
                      ['What happens if we skip it?', 'Teams risk fines, customer churn, investor pressure, and forced system changes or shutdowns.'],
                    ].map(([q, a]) => (
                      <div key={q} className="page-card p-6 bg-white/90">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="h-5 w-5 text-indigo-500 mt-1 shrink-0" />
                          <div>
                            <h3 className="font-semibold text-slate-950 mb-2">{q}</h3>
                            <p className="text-slate-600 leading-7">{a}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {currentStep > 0 && currentStep < 4 && (
        <section className="page-section">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-center gap-3 mb-8">
              {stepLabels.map((label, index) => (
                <div key={label} className={`rounded-full px-4 py-2 text-sm font-medium ${currentStep >= index + 1 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {index + 1}. {label}
                </div>
              ))}
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-7 md:p-8">
                {currentStep === 1 && (
                  <>
                    <div className="page-pill mb-5">Step 1</div>
                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">Company profile</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">Company name</div>
                        <input className="w-full rounded-2xl border border-slate-200 px-4 py-3.5" value={formData.companyName} onChange={(e) => handleInputChange('companyName', e.target.value)} placeholder="Enter company name" />
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">Industry</div>
                        <select className="w-full rounded-2xl border border-slate-200 px-4 py-3.5" value={formData.industry} onChange={(e) => handleInputChange('industry', e.target.value)}>
                          <option value="">Select an industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">Employee count</div>
                        <select className="w-full rounded-2xl border border-slate-200 px-4 py-3.5" value={formData.employeeCount} onChange={(e) => handleInputChange('employeeCount', e.target.value)}>
                          <option value="">Select employee count</option>
                          <option value="<100">Fewer than 100</option>
                          <option value="100-500">100-500</option>
                          <option value="500-1000">500-1,000</option>
                          <option value="1000-5000">1,000-5,000</option>
                          <option value=">5000">More than 5,000</option>
                        </select>
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">Annual revenue</div>
                        <select className="w-full rounded-2xl border border-slate-200 px-4 py-3.5" value={formData.annualRevenue} onChange={(e) => handleInputChange('annualRevenue', e.target.value)}>
                          <option value="">Select annual revenue</option>
                          <option value="<10M">Under $10M</option>
                          <option value="10M-50M">$10M-$50M</option>
                          <option value="50M-100M">$50M-$100M</option>
                          <option value="100M-1B">$100M-$1B</option>
                          <option value=">1B">Over $1B</option>
                        </select>
                      </label>
                    </div>
                    <label className="block mt-6">
                      <div className="text-sm font-semibold text-slate-700 mb-2">Geographic footprint</div>
                      <textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 min-h-28" value={formData.geographicRegions} onChange={(e) => handleInputChange('geographicRegions', e.target.value)} placeholder="For example: Mainland China, Hong Kong, Singapore, United States, European Union" />
                    </label>
                    <div className="flex justify-between mt-8">
                      <button className="btn-secondary" onClick={() => setCurrentStep(0)}>Back to overview</button>
                      <button className="btn-brand" onClick={() => setCurrentStep(2)}>Next step</button>
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <div className="page-pill mb-5">Step 2</div>
                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">Current AI systems</h2>
                    <div className="space-y-6">
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">AI systems and use cases</div>
                        <textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 min-h-28" value={formData.aiSystems} onChange={(e) => handleInputChange('aiSystems', e.target.value)} placeholder="For example: customer service chatbot, recommendation engine, automated decisioning system" />
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">Data types processed</div>
                        <textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 min-h-28" value={formData.dataTypes} onChange={(e) => handleInputChange('dataTypes', e.target.value)} placeholder="For example: personal identifiers, financial data, health records, biometric data" />
                      </label>
                      <div>
                        <div className="text-sm font-semibold text-slate-700 mb-3">Compliance frameworks in place</div>
                        <div className="flex flex-wrap gap-2">
                          {frameworks.map((framework) => {
                            const active = formData.currentFrameworks.includes(framework)
                            return (
                              <button
                                key={framework}
                                className={`rounded-full border px-3 py-1.5 text-sm ${active ? 'border-indigo-200 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-600'}`}
                                onClick={() => toggleFramework(framework)}
                              >
                                {framework}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-8">
                      <button className="btn-secondary" onClick={() => setCurrentStep(1)}>Previous step</button>
                      <button className="btn-brand" onClick={() => setCurrentStep(3)}>Next step</button>
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <div className="page-pill mb-5">Step 3</div>
                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">Assessment priorities</h2>
                    <div className="space-y-6">
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">Most recent compliance audit</div>
                        <select className="w-full rounded-2xl border border-slate-200 px-4 py-3.5" value={formData.lastAuditDate} onChange={(e) => handleInputChange('lastAuditDate', e.target.value)}>
                          <option value="">Select audit timing</option>
                          <option value="never">Never completed</option>
                          <option value="<6months">Within 6 months</option>
                          <option value="6-12months">6-12 months ago</option>
                          <option value="1-2years">1-2 years ago</option>
                          <option value=">2years">More than 2 years ago</option>
                        </select>
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">Priority compliance concerns</div>
                        <textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 min-h-28" value={formData.specificConcerns} onChange={(e) => handleInputChange('specificConcerns', e.target.value)} placeholder="For example: bias detection, data privacy controls, model explainability" />
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">Special regulatory requirements</div>
                        <textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 min-h-28" value={formData.regulatoryRequirements} onChange={(e) => handleInputChange('regulatoryRequirements', e.target.value)} placeholder="For example: sector-specific regulations, international standards, audit requirements" />
                      </label>
                    </div>
                    <div className="flex justify-between mt-8">
                      <button className="btn-secondary" onClick={() => setCurrentStep(2)}>Previous step</button>
                      <button className="btn-brand" onClick={calculateCompliance} disabled={isLoading}>
                        {isLoading ? 'Analyzing...' : 'Run compliance assessment'}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {currentStep === 4 && results && (
        <section className="page-section">
          <div className="max-w-5xl mx-auto px-4 space-y-6">
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-7 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="page-pill mb-4">Results</div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950">AI compliance assessment report</h2>
                  </div>
                  <div className={`rounded-full border px-4 py-2 text-sm font-semibold ${riskClasses[results.riskLevel]}`}>
                    {results.riskLevel === 'low' && 'Low risk'}
                    {results.riskLevel === 'medium' && 'Moderate risk'}
                    {results.riskLevel === 'high' && 'High risk'}
                    {results.riskLevel === 'critical' && 'Critical risk'}
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Overall score', value: `${results.overallScore}` },
                    { label: 'Critical issues', value: `${results.criticalIssues.length}` },
                    { label: 'Remediation timeline', value: results.timeline },
                    { label: 'Estimated cost', value: results.cost },
                  ].map((item) => (
                    <div key={item.label} className="page-card px-4 py-4 text-center">
                      <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
                      <div className="text-sm text-slate-500">{item.label}</div>
                    </div>
                  ))}
                </div>

                {results.criticalIssues.length > 0 && (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-5">
                    <div className="font-semibold text-rose-700 mb-3">Issues needing immediate attention</div>
                    <div className="space-y-2">
                      {results.criticalIssues.map((issue) => (
                        <div key={issue} className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-rose-500 mt-0.5 shrink-0" />
                          <span className="text-rose-700">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-7 md:p-8">
                <div className="page-pill mb-4">Domain details</div>
                <div className="space-y-4">
                  {results.complianceAreas.map((area) => (
                    <div key={area.name} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-1">{area.name}</h3>
                          <p className="text-slate-600">{area.description}</p>
                        </div>
                        <div className="text-2xl font-semibold text-indigo-600">{area.score}/100</div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="font-semibold text-slate-950 mb-3">Review requirements</div>
                          <div className="space-y-2">
                            {area.requirements.map((item) => (
                              <div key={item} className="text-sm text-slate-600">{item}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-950 mb-3">Recommended improvements</div>
                          <div className="space-y-2">
                            {area.recommendations.map((item) => (
                              <div key={item} className="text-sm text-slate-600">{item}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_0.9fr] gap-6">
              <div className="page-card p-7">
                <div className="page-pill mb-4">Priority action plan</div>
                <div className="space-y-4">
                  {results.actionPriority.map((action, index) => (
                    <div key={action} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">{index + 1}</div>
                      <span className="text-slate-700">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="page-card p-7">
                <div className="page-pill mb-4">Next steps</div>
                <div className="space-y-3">
                  <button className="btn-brand w-full justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download detailed report
                  </button>
                  <button className="btn-secondary w-full justify-center">
                    <FileText className="mr-2 h-4 w-4" />
                    Talk to an expert
                  </button>
                  <button className="btn-secondary w-full justify-center" onClick={resetTool}>
                    Start over
                  </button>
                </div>
              </div>
            </div>

            <div className="page-card p-7">
              <div className="page-pill mb-4">Related enterprise AI tools</div>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/enterprise-ai-vendor-comparison-guide-2026" className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 hover:bg-white">
                  <h3 className="font-semibold text-slate-950 mb-2">AI vendor selection framework</h3>
                  <p className="text-sm text-slate-600">Eight scoring dimensions to help teams choose the right AI vendor.</p>
                </Link>
                <Link href="/ai-governance-framework-enterprise-2026" className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 hover:bg-white">
                  <h3 className="font-semibold text-slate-950 mb-2">AI governance framework</h3>
                  <p className="text-sm text-slate-600">Build enterprise AI governance and continuous monitoring.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
