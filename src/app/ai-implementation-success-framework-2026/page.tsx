'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

type ImplementationPhase = {
  phase: string
  duration: string
  keyActivities: string[]
  successCriteria: string[]
  commonChallenges: string[]
  mitigationStrategies: string[]
}

type SuccessMetric = {
  category: string
  metrics: string[]
  targets: string[]
  measurementMethod: string
}

const pageTitle = 'AI Implementation Success Framework 2026 | SitePilot'
const pageDescription =
  'Proven 4-phase enterprise AI implementation framework with industry benchmarks, success metrics, risk mitigation guidance, and ROI planning.'
const pageUrl = 'https://sitepilot.co/ai-implementation-success-framework-2026'

const implementationPhases: ImplementationPhase[] = [
  {
    phase: 'Phase 1: Foundation & Strategy (Week 1-4)',
    duration: '4 weeks',
    keyActivities: [
      'AI readiness assessment across 12 dimensions',
      'Executive alignment and governance structure',
      'Technology infrastructure evaluation',
      'Change management framework design',
      'Initial team formation and training',
    ],
    successCriteria: [
      '100% C-suite alignment on AI vision',
      'AI governance board established',
      'Technology gaps identified and prioritized',
      'Change champions identified in each department',
      'Security and compliance baseline established',
    ],
    commonChallenges: ['Executive resistance to change', 'Unclear ROI expectations', 'Technology skill gaps', 'Data quality concerns'],
    mitigationStrategies: [
      'Executive education workshops with industry case studies',
      'Pilot project with clear business impact metrics',
      'Phased training program with external expertise',
      'Data governance framework implementation',
    ],
  },
  {
    phase: 'Phase 2: Pilot Implementation (Week 5-12)',
    duration: '8 weeks',
    keyActivities: [
      'High-impact use case selection and prioritization',
      'Pilot project deployment with success metrics',
      'Cross-functional team training and enablement',
      'Initial AI system integration and testing',
      'Continuous monitoring and optimization',
    ],
    successCriteria: [
      'Pilot achieving 15-25% efficiency improvement',
      '90% user adoption rate in pilot departments',
      'Zero critical security or compliance incidents',
      'Documented process improvements and learnings',
      'Stakeholder satisfaction >80% in quarterly survey',
    ],
    commonChallenges: [
      'User resistance and training gaps',
      'Integration complexity with legacy systems',
      'Data quality and availability issues',
      'Unrealistic timeline expectations',
    ],
    mitigationStrategies: [
      'Comprehensive change management and user training',
      'API-first integration approach with gradual migration',
      'Data quality improvement sprint before AI deployment',
      'Agile methodology with regular stakeholder check-ins',
    ],
  },
  {
    phase: 'Phase 3: Scale & Optimize (Week 13-26)',
    duration: '14 weeks',
    keyActivities: [
      'Enterprise-wide rollout planning and execution',
      'Advanced AI capabilities integration',
      'Performance optimization and model fine-tuning',
      'Advanced analytics and reporting implementation',
      'Continuous improvement process establishment',
    ],
    successCriteria: [
      '80% of target departments using AI tools',
      '25-40% productivity improvement organization-wide',
      'ROI positive within first 6 months',
      'AI governance processes fully operational',
      'Knowledge sharing and best practices documented',
    ],
    commonChallenges: [
      'Scaling challenges and performance issues',
      'Complex organizational change management',
      'Advanced skill development needs',
      'Measuring and demonstrating ROI',
    ],
    mitigationStrategies: [
      'Infrastructure scaling plan with cloud-native architecture',
      'Executive sponsorship and change agent network',
      'Partnership with AI training providers',
      'Comprehensive ROI tracking dashboard',
    ],
  },
  {
    phase: 'Phase 4: Excellence & Innovation (Week 27-52)',
    duration: '26 weeks',
    keyActivities: [
      'AI center of excellence establishment',
      'Advanced use case development and deployment',
      'AI ethics and responsible AI practices integration',
      'Competitive advantage optimization',
      'Industry thought leadership development',
    ],
    successCriteria: [
      '50-75% productivity improvement sustained',
      'New AI-driven revenue streams established',
      'Industry recognition for AI innovation',
      'AI ethics framework fully implemented',
      'Self-sustaining AI innovation culture',
    ],
    commonChallenges: [
      'Innovation momentum sustainability',
      'Advanced AI talent acquisition',
      'Ethical AI implementation',
      'Competitive response management',
    ],
    mitigationStrategies: [
      'Innovation lab with dedicated resources',
      'Strategic partnerships with AI research institutions',
      'Ethical AI certification and training program',
      'Continuous competitive intelligence and adaptation',
    ],
  },
]

const successMetrics: SuccessMetric[] = [
  {
    category: 'Productivity & Efficiency',
    metrics: ['Task completion time reduction', 'Process automation percentage', 'Employee satisfaction scores', 'Quality improvement metrics'],
    targets: ['25-50% time savings on routine tasks', '60-80% process automation rate', '85%+ employee satisfaction with AI tools', '90%+ quality consistency improvement'],
    measurementMethod: 'Time tracking, workflow analysis, employee surveys, quality audits',
  },
  {
    category: 'Financial Impact',
    metrics: ['Return on Investment (ROI)', 'Cost reduction achievements', 'Revenue growth attribution', 'Time to value realization'],
    targets: ['200-400% ROI within 18 months', '$500K-5M annual cost savings', '10-25% AI-attributed revenue growth', 'Break-even within 6-12 months'],
    measurementMethod: 'Financial reporting, cost center analysis, revenue attribution modeling',
  },
  {
    category: 'Innovation & Capability',
    metrics: ['New AI use case development', 'Technology adoption rates', 'Skill development progress', 'Innovation pipeline strength'],
    targets: ['5-10 new use cases per quarter', '90%+ adoption rate for core AI tools', 'Certified AI practitioners in each department', '3-5 breakthrough innovations annually'],
    measurementMethod: 'Use case tracking, adoption analytics, certification completion, innovation metrics',
  },
]

const industryBenchmarks = {
  healthcare: {
    label: 'Healthcare & Life Sciences',
    avgROI: '250-350%',
    timeToValue: '8-14 months',
    keySuccessFactors: ['Regulatory compliance', 'Patient safety', 'Clinical workflow integration'],
    commonChallenges: ['HIPAA compliance', 'Clinical validation', 'Change resistance'],
  },
  finance: {
    label: 'Financial Services',
    avgROI: '300-450%',
    timeToValue: '6-10 months',
    keySuccessFactors: ['Risk management', 'Regulatory compliance', 'Customer experience'],
    commonChallenges: ['Regulatory scrutiny', 'Data security', 'Legacy system integration'],
  },
  manufacturing: {
    label: 'Manufacturing',
    avgROI: '200-400%',
    timeToValue: '9-15 months',
    keySuccessFactors: ['Predictive maintenance', 'Quality control', 'Supply chain optimization'],
    commonChallenges: ['Equipment integration', 'Workforce training', 'Safety protocols'],
  },
  retail: {
    label: 'Retail & E-commerce',
    avgROI: '180-320%',
    timeToValue: '4-8 months',
    keySuccessFactors: ['Customer personalization', 'Inventory optimization', 'Market responsiveness'],
    commonChallenges: ['Customer data privacy', 'Seasonal variations', 'Multi-channel complexity'],
  },
  technology: {
    label: 'Technology',
    avgROI: '260-420%',
    timeToValue: '5-9 months',
    keySuccessFactors: ['Developer enablement', 'Product integration', 'Data platform maturity'],
    commonChallenges: ['Tool sprawl', 'Fast-moving priorities', 'Model governance'],
  },
  energy: {
    label: 'Energy & Utilities',
    avgROI: '220-360%',
    timeToValue: '8-16 months',
    keySuccessFactors: ['Asset monitoring', 'Safety compliance', 'Operational efficiency'],
    commonChallenges: ['Legacy infrastructure', 'Regulation', 'Field adoption'],
  },
  government: {
    label: 'Government & Public Sector',
    avgROI: '150-280%',
    timeToValue: '10-18 months',
    keySuccessFactors: ['Public trust', 'Procurement alignment', 'Policy governance'],
    commonChallenges: ['Procurement friction', 'Change management', 'Public accountability'],
  },
} as const

const criticalSuccessFactors = [
  ['Executive Commitment & Vision', 'C-suite sponsorship with clear AI strategy and measurable business outcomes.'],
  ['Data Quality & Governance', 'High-quality, well-governed data foundation with proper security and privacy controls.'],
  ['Change Management Excellence', 'Comprehensive change management with user training and adoption support.'],
  ['Technology Infrastructure', 'Scalable, cloud-native infrastructure capable of supporting enterprise AI workloads.'],
  ['Skills & Talent Development', 'Strategic talent acquisition and upskilling programs for AI capabilities.'],
  ['Governance & Ethics Framework', 'Robust AI governance, ethics, and responsible AI practices implementation.'],
  ['Continuous Innovation Culture', 'Culture of continuous learning, experimentation, and AI-driven innovation.'],
]

const faqs = [
  ['What is the typical timeline for enterprise AI implementation?', 'Most enterprises achieve meaningful results within 6-12 months using this four-phase framework. Full transformation usually extends across the full 52-week model.'],
  ['How do you measure success in AI implementation?', 'Success is measured across productivity, financial impact, and innovation capability. This page keeps those KPI groups explicit so the rollout is judged on more than tool adoption.'],
  ['What are the most common reasons AI implementations fail?', 'The biggest failure points are lack of executive commitment, poor data quality, weak change management, inadequate infrastructure, and skills gaps. Each phase includes mitigation strategies for those risks.'],
  ['How much should organizations budget for AI implementation?', 'Typical enterprise investments range from roughly $500K to $5M depending on scope, integration complexity, and internal capability. Many mid-size programs aim for payback within 6-18 months.'],
  ['What skills and team structure are needed?', 'High-performing teams usually combine AI/ML engineering, data science, change management, architecture, security, and business operations leadership, often coordinated through a center of excellence model.'],
  ['How do you ensure AI implementations are ethical and compliant?', 'Ethics and compliance should be enforced at each phase gate through governance review, privacy controls, bias testing, explainability requirements, and regulator-specific checks.'],
]

const relatedResources = [
  {
    href: '/ai-governance-compliance-framework-2026',
    title: 'AI Governance Framework',
    description: 'Use this when you need the governance model that should sit beside the implementation plan.',
  },
  {
    href: '/ai-transformation-roi-calculation-framework-2026',
    title: 'ROI Calculation Framework',
    description: 'Extend this page into executive-grade ROI tracking and reporting logic.',
  },
  {
    href: '/tools/ai-compliance-audit-2026',
    title: 'AI Compliance Audit',
    description: 'Run a compliance assessment before scaling into regulated or high-risk functions.',
  },
]

export default function AIImplementationSuccessFramework2026() {
  const [selectedIndustry, setSelectedIndustry] = useState<keyof typeof industryBenchmarks | ''>('')
  const [organizationSize, setOrganizationSize] = useState('')
  const [currentPhase, setCurrentPhase] = useState('')

  const selectedBenchmark = useMemo(
    () => (selectedIndustry ? industryBenchmarks[selectedIndustry] : null),
    [selectedIndustry]
  )

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-20"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Enterprise AI transformation framework
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI implementation success,
                <span className="brand-gradient-text block">built as a four-phase operating model.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This framework translates enterprise AI transformation into a staged rollout with industry benchmarks,
                measurable success criteria, failure-mode mitigation, and the governance links needed to scale responsibly.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#customize" className="btn-brand">
                  Customize framework
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-implementation-cost-calculator-enterprise-2026" className="btn-secondary">
                  Cost planning
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {[
                  ['78%', 'Success rate across benchmarked enterprise implementations'],
                  ['6-18M', 'Average time to ROI depending on scope and industry'],
                  ['$2.5M', 'Average annual savings for mid-size enterprise programs'],
                  ['52W', 'Full transformation horizon in the complete framework'],
                ].map(([value, note]) => (
                  <div key={value} className="page-card p-4 bg-white/90">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{value}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{note}</p>
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
                      <div className="text-sm text-slate-500 mb-1">Quick read</div>
                      <div className="text-xl font-semibold text-slate-950">What this page covers</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Interactive view
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Industry benchmark selector for ROI, time-to-value, and success factors',
                      'Four implementation phases with activities, criteria, challenges, and mitigations',
                      'Success metrics across productivity, financial impact, and innovation capability',
                      'Direct links to governance, ROI, and compliance resources for adjacent planning',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                          <div className="text-sm text-slate-600">{item}</div>
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

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section id="customize" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Customization</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Start with your benchmark context,
              <span className="block brand-gradient-text">then judge the rollout against the right constraints.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Industry</label>
              <select
                value={selectedIndustry}
                onChange={(event) => setSelectedIndustry(event.target.value as keyof typeof industryBenchmarks | '')}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
              >
                <option value="">Select your industry</option>
                {Object.entries(industryBenchmarks).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Organization size</label>
              <select
                value={organizationSize}
                onChange={(event) => setOrganizationSize(event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
              >
                <option value="">Select organization size</option>
                <option value="small">Small (50-500 employees)</option>
                <option value="medium">Medium (500-5,000 employees)</option>
                <option value="large">Large (5,000+ employees)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Current phase</label>
              <select
                value={currentPhase}
                onChange={(event) => setCurrentPhase(event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20"
              >
                <option value="">Where are you now?</option>
                <option value="planning">Planning stage</option>
                <option value="pilot">Pilot implementation</option>
                <option value="scaling">Scaling phase</option>
                <option value="optimizing">Optimization phase</option>
              </select>
            </div>
          </div>

          {selectedBenchmark ? (
            <div className="page-card-soft p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-5">
                <div>
                  <div className="text-sm uppercase tracking-[0.16em] text-slate-500 mb-2">Expected ROI</div>
                  <div className="text-2xl font-semibold text-slate-950">{selectedBenchmark.avgROI}</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.16em] text-slate-500 mb-2">Time to value</div>
                  <div className="text-2xl font-semibold text-slate-950">{selectedBenchmark.timeToValue}</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.16em] text-slate-500 mb-2">Context fit</div>
                  <div className="text-sm text-slate-600">
                    {organizationSize ? `${organizationSize} organization selected` : 'Size not selected yet'}
                    {currentPhase ? `, ${currentPhase} phase` : ''}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="font-semibold text-slate-950 mb-3">Key success factors</div>
                  <ul className="space-y-2 text-slate-600">
                    {selectedBenchmark.keySuccessFactors.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-slate-950 mb-3">Common challenges</div>
                  <ul className="space-y-2 text-slate-600">
                    {selectedBenchmark.commonChallenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
        </section>

        <section className="page-card-glow p-1.5 mb-16">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Implementation Methodology</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                The four implementation phases,
                <span className="block brand-gradient-text">sequenced for enterprise adoption.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {implementationPhases.map((phase, index) => (
                <div key={phase.phase} className="page-card-soft p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#635bff] text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-950">{phase.phase}</h3>
                        <p className="text-slate-500 mt-1">{phase.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6 text-sm">
                    <div className="space-y-5">
                      <div>
                        <div className="font-semibold text-indigo-700 mb-3">Key activities</div>
                        <ul className="space-y-2 text-slate-600">
                          {phase.keyActivities.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-700 mb-3">Success criteria</div>
                        <ul className="space-y-2 text-slate-600">
                          {phase.successCriteria.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <div className="font-semibold text-amber-700 mb-3">Common challenges</div>
                        <ul className="space-y-2 text-slate-600">
                          {phase.commonChallenges.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold text-violet-700 mb-3">Mitigation strategies</div>
                        <ul className="space-y-2 text-slate-600">
                          {phase.mitigationStrategies.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-card p-8 md:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Success Metrics</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Measure success across three layers,
              <span className="block brand-gradient-text">not just implementation activity.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {successMetrics.map((metric) => (
              <div key={metric.category} className="page-card-soft p-6">
                <h3 className="text-2xl font-semibold text-slate-950 mb-5">{metric.category}</h3>
                <div className="space-y-5 text-sm">
                  <div>
                    <div className="font-semibold text-slate-950 mb-3">Key metrics</div>
                    <ul className="space-y-2 text-slate-600">
                      {metric.metrics.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-950 mb-3">Target outcomes</div>
                    <ul className="space-y-2 text-slate-600">
                      {metric.targets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-950 mb-2">Measurement method</div>
                    <p className="text-slate-600">{metric.measurementMethod}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card p-8 md:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Critical Factors</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              The seven factors that decide
              <span className="block brand-gradient-text">whether enterprise AI sticks.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {criticalSuccessFactors.map(([title, note]) => (
              <div key={title} className="page-card-soft p-6">
                <h3 className="text-xl font-semibold text-slate-950 mb-3">{title}</h3>
                <p className="text-sm text-slate-600">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card p-8 md:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">FAQ</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              The questions that usually block rollout,
              <span className="block brand-gradient-text">answered directly.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map(([question, answer]) => (
              <div key={question} className="page-card-soft p-6">
                <h3 className="text-lg font-semibold text-slate-950 mb-3">{question}</h3>
                <p className="text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted mb-16">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Next Step</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Ready to move from framework
              <span className="block brand-gradient-text">to implementation planning?</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Use the linked governance, ROI, and compliance resources to turn this success framework into a working rollout plan for your organization.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/apply-for-audit" className="btn-brand">
                Get implementation consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/ai-implementation-cost-calculator-enterprise-2026" className="btn-secondary">
                Open cost calculator
              </Link>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {relatedResources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="page-card p-8 hover:-translate-y-0.5 transition-transform">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{resource.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{resource.description}</p>
              <div className="inline-flex items-center text-[#635bff] font-semibold">
                Open resource
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
