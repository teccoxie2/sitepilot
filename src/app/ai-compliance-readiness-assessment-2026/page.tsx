import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Compliance Readiness Assessment 2026 | Enterprise AI Regulatory Framework'
const pageDescription =
  'Comprehensive AI compliance readiness assessment with regulatory framework evaluation, risk scoring, and remediation planning for enterprise AI governance.'
const pageUrl = 'https://sitepilot.co/ai-compliance-readiness-assessment-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
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
  { value: '$4.2M', label: 'Average compliance cost', note: 'Per major violation event' },
  { value: '73%', label: 'Non-compliance rate', note: 'Enterprise AI systems in the market' },
  { value: '8', label: 'Major frameworks', note: 'Active compliance regimes in 2026' },
  { value: '18 months', label: 'Typical timeline', note: 'Average path to stronger readiness' },
]

const frameworks = [
  {
    title: 'EU AI Act',
    subtitle: '2026 enforcement focus',
    risk: 'High',
    penalty: 'Up to 7% of global turnover',
    note: 'Comprehensive risk-based AI regulation.',
    width: '100%',
    tone: 'bg-rose-600',
  },
  {
    title: 'GDPR Data Protection',
    subtitle: 'Personal data processing',
    risk: 'High',
    penalty: 'Up to 4% of global turnover',
    note: 'Controls for personal data inside AI systems.',
    width: '83%',
    tone: 'bg-orange-500',
  },
  {
    title: 'SOX Compliance',
    subtitle: 'US financial controls',
    risk: 'Medium',
    penalty: 'Criminal liability plus fines',
    note: 'Financial reporting accuracy and AI decision transparency.',
    width: '50%',
    tone: 'bg-amber-500',
  },
  {
    title: 'HIPAA Healthcare',
    subtitle: 'Protected health information',
    risk: 'High',
    penalty: 'Up to $1.5M per incident',
    note: 'Medical AI and health-data processing controls.',
    width: '67%',
    tone: 'bg-rose-600',
  },
]

const scoringCards = [
  { label: 'Overall compliance score', value: '67/100', note: 'Moderate risk level' },
  { label: 'EU AI Act', value: '42/100', note: 'High risk' },
  { label: 'GDPR', value: '74/100', note: 'Medium risk' },
  { label: 'ISO27001', value: '85/100', note: 'Low risk' },
]

const priorityRisks = [
  {
    title: 'Critical gaps',
    timing: 'Immediate action',
    items: [
      'AI system risk classification missing',
      'Algorithmic impact assessments absent',
      'Human oversight mechanisms inadequate',
    ],
  },
  {
    title: 'High priority',
    timing: '90-day timeline',
    items: [
      'Data governance framework gaps',
      'Documentation standards non-compliant',
      'Bias testing protocols missing',
    ],
  },
  {
    title: 'Medium priority',
    timing: '180-day timeline',
    items: [
      'Audit trail improvements needed',
      'Staff training programs incomplete',
      'Third-party vendor assessments',
    ],
  },
]

const riskTiers = [
  {
    title: 'High-risk AI systems',
    status: '38/100',
    note: 'Immediate remediation required',
    items: [
      'Credit scoring AI: prohibited/high-risk territory in the EU AI Act',
      'Recruitment AI: bias exposure is critical',
      'Healthcare diagnostics: HIPAA and medical-device pressure',
    ],
    tone: 'border-rose-100 bg-rose-50/70 text-rose-800',
  },
  {
    title: 'Medium-risk AI systems',
    status: '71/100',
    note: 'Improvements needed within 90 days',
    items: [
      'Customer service AI: privacy and disclosure controls',
      'Fraud detection AI: false positive and explainability pressure',
      'Marketing AI: consent and personalization boundaries',
    ],
    tone: 'border-amber-100 bg-amber-50/70 text-amber-800',
  },
  {
    title: 'Low-risk AI systems',
    status: '89/100',
    note: 'Mostly compliant, minor updates',
    items: [
      'Content generation AI: lighter regulatory burden',
      'Process optimization AI: mostly internal controls',
      'Analytics AI: lower privacy pressure when data is aggregated',
    ],
    tone: 'border-indigo-100 bg-indigo-50/80 text-indigo-800',
  },
]

const gapAnalysis = [
  { label: 'Critical gaps', value: '12', note: 'Immediate action' },
  { label: 'High priority', value: '27', note: '90-day timeline' },
  { label: 'Medium priority', value: '34', note: '180-day timeline' },
  { label: 'Total cost', value: '$12.8M', note: 'Remediation budget' },
]

const roadmap = [
  {
    title: 'Critical remediation',
    timing: 'Weeks 1-4',
    investment: '$2.1M',
    items: [
      'AI system inventory and risk classification',
      'High-risk AI impact assessments',
      'Emergency compliance documentation',
      'Legal risk mitigation measures',
    ],
  },
  {
    title: 'High-priority implementation',
    timing: 'Months 2-4',
    investment: '$5.4M',
    items: [
      'Data governance framework deployment',
      'Bias testing and monitoring systems',
      'Human oversight implementation',
      'Audit-ready documentation systems',
    ],
  },
  {
    title: 'Optimization and continuous compliance',
    timing: 'Months 5-12',
    investment: '$5.3M',
    items: [
      'Advanced monitoring and alerting',
      'Staff training and certification',
      'Third-party vendor assessments',
      'Continuous compliance automation',
    ],
  },
]

const investmentCards = [
  {
    title: 'Technology and infrastructure',
    value: '$5.2M',
    note: 'Compliance monitoring systems and data-governance platforms.',
  },
  {
    title: 'Professional services and training',
    value: '$4.1M',
    note: 'Legal consultation, staff training, and process redesign.',
  },
  {
    title: 'Documentation and processes',
    value: '$2.3M',
    note: 'Policy development, procedures, and audit preparation.',
  },
  {
    title: 'Ongoing compliance operations',
    value: '$1.2M annually',
    note: 'Recurring monitoring, updates, and reassessments.',
  },
]

const riskValueCards = [
  {
    title: 'Regulatory penalty avoidance',
    value: '$127M',
    note: 'Potential exposure across EU AI Act, GDPR, and sector regimes.',
  },
  {
    title: 'Litigation risk reduction',
    value: '$45M',
    note: 'Bias claims, privacy violations, and discrimination exposure.',
  },
  {
    title: 'Operational trust preservation',
    value: 'Reputation',
    note: 'Harder to quantify, but often more damaging than the fine itself.',
  },
]

export default function AIComplianceReadinessAssessment2026() {
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
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.07),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[28rem] bg-[radial-gradient(circle_at_20%_22%,rgba(239,68,68,0.05),transparent_24%),radial-gradient(circle_at_76%_16%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_52%_78%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Enterprise AI regulatory readiness
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI compliance readiness,
                <span className="brand-gradient-text block">measured before enforcement hits.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This assessment maps enterprise AI systems against the regulatory frameworks most likely to create serious exposure in
                2026, then translates that exposure into risk scores, priority gaps, and a staged remediation plan.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-compliance-automation-assessment-tool" className="btn-brand">
                  Open automation assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/ai-governance-compliance-framework-2026" className="btn-secondary">
                  Review governance framework
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {summaryCards.map((item) => (
                  <div key={item.label} className="page-card p-4 bg-white/90">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
                    <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-500 mt-1">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-rose-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-6 bg-white/95">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Readiness score</div>
                      <div className="text-xl font-semibold text-slate-950">Current posture snapshot</div>
                    </div>
                    <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      Moderate risk
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {scoringCards.map((item) => (
                      <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                        <div className="text-sm text-slate-500 mb-2">{item.label}</div>
                        <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
                        <div className="text-sm text-slate-500">{item.note}</div>
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
        <section className="grid lg:grid-cols-[1.04fr_0.96fr] gap-6 mb-16">
          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Multi-framework assessment</h2>
            </div>
            <div className="space-y-4">
              {frameworks.map((framework) => (
                <div key={framework.title} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">{framework.title}</h3>
                      <p className="text-sm text-slate-500">{framework.subtitle}</p>
                    </div>
                    <div className="text-sm font-semibold text-slate-900">{framework.risk} risk</div>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{framework.note}</p>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 mb-3">
                    <div className={`${framework.tone} h-2.5 rounded-full`} style={{ width: framework.width }} />
                  </div>
                  <div className="text-xs font-semibold text-slate-500">{framework.penalty}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Priority risk areas</h2>
            </div>
            <div className="space-y-4">
              {priorityRisks.map((risk) => (
                <div key={risk.title} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="font-semibold text-slate-950">{risk.title}</h3>
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                      {risk.timing}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {risk.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-16">
          {riskTiers.map((tier) => (
            <div key={tier.title} className={`rounded-[1.75rem] border p-7 ${tier.tone}`}>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] mb-3">{tier.title}</h2>
              <div className="text-sm font-semibold mb-1">Compliance status: {tier.status}</div>
              <div className="text-sm mb-5">{tier.note}</div>
              <ul className="space-y-3">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="page-card-glow p-8 md:p-10 surface-muted mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Gap analysis</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Readiness becomes actionable
              <span className="block brand-gradient-text">when the gap count is explicit.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              This section turns general risk into a budgetable backlog: critical issues first, then the 90-day and 180-day layers.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {gapAnalysis.map((item) => (
              <div key={item.label} className="page-card p-6 text-center">
                <div className="text-sm font-semibold text-slate-900 mb-2">{item.label}</div>
                <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
                <div className="text-sm text-slate-500">{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card p-8 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Remediation roadmap</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Compliance remediation needs
              <span className="block brand-gradient-text">sequencing, not panic.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The roadmap below stages enterprise work so the most dangerous regulatory exposure is reduced first, then operationalized.
            </p>
          </div>

          <div className="grid gap-5">
            {roadmap.map((phase, index) => (
              <div key={phase.title} className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{phase.title}</h3>
                  <div className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {phase.timing}
                  </div>
                  <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                    Investment: {phase.investment}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {phase.items.map((item) => (
                    <div key={item} className="page-card p-4 flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="page-card p-8">
            <div className="text-sm uppercase tracking-[0.18em] text-indigo-600/80 mb-3">Investment</div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">Remediation spend</h2>
            <div className="space-y-4">
              {investmentCards.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                  <h3 className="font-semibold text-slate-950 mb-2">{item.title}</h3>
                  <div className="text-2xl font-semibold tracking-[-0.04em] text-indigo-700 mb-2">{item.value}</div>
                  <p className="text-sm text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8">
            <div className="text-sm uppercase tracking-[0.18em] text-rose-600/80 mb-3">Risk value</div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">What the program is protecting against</h2>
            <div className="space-y-4">
              {riskValueCards.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-rose-100 bg-rose-50/60 p-5">
                  <h3 className="font-semibold text-rose-900 mb-2">{item.title}</h3>
                  <div className="text-2xl font-semibold tracking-[-0.04em] text-rose-700 mb-2">{item.value}</div>
                  <p className="text-sm text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-12 surface-muted">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Next steps</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Readiness scoring should lead
                <span className="block brand-gradient-text">into governance and audit work.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Once the enterprise knows where the gaps are, the next move is formal governance design or a deeper compliance audit workflow.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-compliance-automation-assessment-tool" className="btn-brand">
                  Open automation tool
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/tools/ai-compliance-audit-2026" className="btn-secondary">
                  Open audit workflow
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  href: '/ai-governance-compliance-framework-2026',
                  title: 'Governance compliance framework',
                  description: 'Translate the assessment into policy, controls, and monitoring design.',
                },
                {
                  href: '/tools/ai-compliance-audit-2026',
                  title: 'AI compliance audit tool',
                  description: 'Run a broader audit path after the initial readiness assessment.',
                },
              ].map((item) => (
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
          </div>
        </section>
      </main>
    </div>
  )
}
