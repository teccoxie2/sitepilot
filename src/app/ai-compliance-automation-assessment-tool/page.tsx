import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Compliance Automation Assessment Tool | Enterprise Risk Analysis | SitePilot.co'
const pageDescription =
  'Automated enterprise AI compliance risk assessment tool covering GDPR, CCPA, HIPAA, and SOX with risk scoring and mitigation guidance.'
const pageUrl = 'https://sitepilot.co/ai-compliance-automation-assessment-tool'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'AI compliance automation, enterprise compliance tool, GDPR compliance assessment, HIPAA AI compliance, SOX compliance automation, AI risk scoring, compliance automation tool',
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
  { value: '85%', label: 'Faster assessment', note: 'Manual review reduced from weeks to days.' },
  { value: '95%', label: 'Risk accuracy', note: 'Higher signal than manual-only compliance review.' },
  { value: '70%', label: 'Cost reduction', note: 'Lower legal and consulting overhead with better coverage.' },
  { value: '4', label: 'Core frameworks', note: 'GDPR, CCPA, HIPAA, and SOX in one workflow.' },
]

const orgFields = [
  {
    label: 'Industry sector',
    options: ['Financial Services', 'Healthcare', 'Manufacturing', 'Technology', 'Retail / E-commerce', 'Government', 'Education'],
  },
  {
    label: 'Company size',
    options: ['Fortune 500 (>$5B revenue)', 'Large Enterprise ($1-5B revenue)', 'Mid-market ($100M-1B revenue)', 'Small Enterprise (<$100M revenue)'],
  },
  {
    label: 'Geographic scope',
    checks: ['European Union (GDPR)', 'United States (CCPA, SOX, HIPAA)', 'Canada (PIPEDA)', 'Asia-Pacific (Various)'],
  },
]

const aiFields = [
  {
    label: 'Primary AI use case',
    options: ['Customer data analysis', 'Financial risk assessment', 'Medical diagnosis support', 'Predictive analytics', 'Process automation', 'Content generation', 'Security / fraud detection'],
  },
  {
    label: 'Data sensitivity level',
    options: ['Highly sensitive (PII, PHI, Financial)', 'Moderately sensitive (Business Data)', 'Low sensitivity (Public / Anonymous)'],
  },
  {
    label: 'AI model type',
    options: ['Large Language Model (LLM)', 'Machine Learning (Traditional)', 'Computer Vision', 'Natural Language Processing', 'Recommendation System', 'Predictive Analytics'],
  },
  {
    label: 'Data processing volume',
    options: ['>10M records/month', '1M-10M records/month', '100K-1M records/month', '<100K records/month'],
  },
]

const priorityActions = [
  { level: 'Critical', item: 'GDPR data processing agreement' },
  { level: 'High', item: 'Privacy impact assessment' },
  { level: 'Medium', item: 'AI ethics board review' },
]

const frameworkScores = [
  { name: 'GDPR', detail: 'EU General Data Protection Regulation', score: '8.5/10', width: '85%', tone: 'bg-rose-600' },
  { name: 'CCPA', detail: 'California Consumer Privacy Act', score: '7.0/10', width: '70%', tone: 'bg-orange-500' },
  { name: 'HIPAA', detail: 'Healthcare Information', score: '9.0/10', width: '90%', tone: 'bg-rose-600' },
  { name: 'SOX', detail: 'Sarbanes-Oxley Financial', score: '6.0/10', width: '60%', tone: 'bg-amber-500' },
]

const frameworks = [
  {
    title: 'GDPR assessment',
    subtitle: 'EU General Data Protection Regulation',
    checks: ['Lawful basis validation', 'Data minimization check', 'Consent management', 'Data transfer analysis'],
    risks: ['Personal data processing scope', 'Cross-border data transfers', 'Automated decision-making impact', 'Data subject rights compliance'],
  },
  {
    title: 'HIPAA assessment',
    subtitle: 'Healthcare information privacy',
    checks: ['PHI identification', 'Access control validation', 'Audit trail analysis', 'Business associate review'],
    risks: ['Protected health information scope', 'Minimum necessary standard', 'Administrative safeguards', 'Technical security measures'],
  },
  {
    title: 'CCPA assessment',
    subtitle: 'California Consumer Privacy Act',
    checks: ['Consumer rights mapping', 'Sale / sharing detection', 'Sensitive data classification', 'Third-party risk analysis'],
    risks: ['Personal information categories', 'Commercial purpose disclosure', 'Consumer request processing', 'Non-discrimination compliance'],
  },
  {
    title: 'SOX assessment',
    subtitle: 'Sarbanes-Oxley financial controls',
    checks: ['Financial data controls', 'Change management', 'Access governance', 'Audit documentation'],
    risks: ['Financial reporting accuracy', 'Internal control effectiveness', 'Process documentation', 'Management certification'],
  },
]

const benefits = [
  {
    title: '85% faster assessment',
    before: '4-6 weeks',
    after: '2-3 days',
    note: 'Automated scoring collapses manual compliance review cycles.',
  },
  {
    title: '95% risk accuracy',
    before: '72%',
    after: '95%',
    note: 'AI-assisted detection reduces false positives and missed gaps.',
  },
  {
    title: '70% cost reduction',
    before: '$850K',
    after: '$255K',
    note: 'Automation cuts recurring legal and consulting cost while improving coverage.',
  },
]

const roadmap = [
  {
    title: 'Assessment and discovery',
    timing: 'Weeks 1-2',
    items: ['Existing compliance framework audit', 'Data flow and processing mapping', 'Regulatory requirement identification', 'Risk tolerance definition'],
  },
  {
    title: 'Framework configuration',
    timing: 'Weeks 3-6',
    items: ['System integration assessment', 'Data source identification', 'Security infrastructure review', 'Performance baseline establishment'],
  },
  {
    title: 'Operational rollout',
    timing: 'Weeks 7+',
    items: ['Workflow automation', 'Policy tuning', 'Exception routing', 'Continuous monitoring and reporting'],
  },
]

export default function AIComplianceAutomationAssessmentPage() {
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
        <div className="absolute inset-x-0 top-[36rem] h-[26rem] bg-[radial-gradient(circle_at_18%_22%,rgba(239,68,68,0.05),transparent_24%),radial-gradient(circle_at_76%_16%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_52%_78%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Automated compliance assessment
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI compliance risk,
                <span className="brand-gradient-text block">scored before it bites.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This assessment tool maps enterprise AI implementations against GDPR, CCPA, HIPAA, and SOX requirements so teams can
                identify high-risk programs early, prioritize mitigation work, and reduce the cost of manual review.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#assessment-calculator" className="btn-brand">
                  Start assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#compliance-frameworks" className="btn-secondary">
                  Review frameworks
                </a>
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
                      <div className="text-sm text-slate-500 mb-1">Sample result</div>
                      <div className="text-xl font-semibold text-slate-950">Compliance risk snapshot</div>
                    </div>
                    <div className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                      High risk
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 text-center">
                      <div className="text-sm text-slate-500 mb-2">Overall risk score</div>
                      <div className="text-4xl font-semibold tracking-[-0.05em] text-rose-600 mb-2">7.3/10</div>
                      <div className="text-sm text-slate-500">Immediate action required</div>
                    </div>
                    <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                      <div className="text-sm font-semibold text-slate-900 mb-3">Priority actions</div>
                      <div className="space-y-3">
                        {priorityActions.map((action) => (
                          <div key={action.item} className="flex items-center gap-3 text-sm text-slate-600">
                            <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-700">
                              {action.level}
                            </span>
                            <span>{action.item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {frameworkScores.map((framework) => (
                      <div key={framework.name} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <div>
                            <div className="font-semibold text-slate-950">{framework.name}</div>
                            <div className="text-xs text-slate-500">{framework.detail}</div>
                          </div>
                          <div className="text-sm font-semibold text-slate-900">{framework.score}</div>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                          <div className={`${framework.tone} h-2.5 rounded-full`} style={{ width: framework.width }} />
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
        <section id="assessment-calculator" className="page-card p-8 md:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Assessment calculator</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Keep the intake simple,
              <span className="block brand-gradient-text">so risk routing can happen fast.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The calculator below stays intentionally lightweight: organization profile, AI implementation context, then a combined
              risk output that points teams toward the highest-priority compliance work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Organization profile</h3>
              {orgFields.map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{field.label}</label>
                  {field.options ? (
                    <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20">
                      {field.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <div className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                      {field.checks.map((check) => (
                        <label key={check} className="flex items-center gap-3 text-sm text-slate-600">
                          <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-[#635bff]" />
                          <span>{check}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">AI implementation details</h3>
              {aiFields.map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{field.label}</label>
                  <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]/20">
                    {field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="btn-brand">Calculate compliance risk score</button>
          </div>
        </section>

        <section className="page-card-glow p-8 md:p-10 surface-muted mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Framework scores</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Use one tool to compare
              <span className="block brand-gradient-text">framework-specific risk pressure.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The goal is not a generic “compliant / not compliant” label. Teams need to see which framework is carrying the highest exposure and why.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {frameworkScores.map((framework) => (
              <div key={framework.name} className="page-card p-6">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <div className="text-lg font-semibold text-slate-950">{framework.name}</div>
                    <div className="text-sm text-slate-500">{framework.detail}</div>
                  </div>
                  <div className="text-lg font-semibold text-slate-950">{framework.score}</div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className={`${framework.tone} h-3 rounded-full`} style={{ width: framework.width }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="compliance-frameworks" className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Framework guide</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Major compliance frameworks,
              <span className="block brand-gradient-text">mapped into one assessment surface.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Each framework keeps its own checks and risk categories. The tool works when those differences stay visible instead of being flattened into one blended score.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {frameworks.map((framework) => (
              <div key={framework.title} className="page-card p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#635bff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{framework.title}</h3>
                    <p className="text-sm text-slate-500">{framework.subtitle}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <div className="text-sm font-semibold text-slate-950 mb-3">Automated checks</div>
                    <ul className="space-y-3">
                      {framework.checks.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-950 mb-3">Risk factors assessed</div>
                    <ul className="space-y-3">
                      {framework.risks.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="page-card p-8">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-[#635bff]" />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{benefit.note}</p>
              <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                <div className="text-sm text-slate-500 mb-1">Before</div>
                <div className="text-2xl font-semibold text-slate-950 mb-3">{benefit.before}</div>
                <div className="text-sm text-slate-500 mb-1">After</div>
                <div className="text-2xl font-semibold text-indigo-700">{benefit.after}</div>
              </div>
            </div>
          ))}
        </section>

        <section className="page-card p-8 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Implementation roadmap</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Compliance automation still needs
              <span className="block brand-gradient-text">a rollout sequence.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The assessment tool is useful only if teams can operationalize it. This roadmap keeps discovery, configuration, and rollout in the right order.
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

        <section className="page-card-glow p-8 md:p-12 surface-muted">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Next steps</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Assessment is the first step.
                <span className="block brand-gradient-text">Governance and audit still follow.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Use the scoring tool to surface the highest-risk gaps, then route into governance design or a deeper compliance audit path.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/tools/ai-compliance-audit-2026" className="btn-brand">
                  Open compliance audit tool
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/apply-for-audit" className="btn-secondary">
                  Apply for audit review
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  href: '/ai-governance-compliance-framework-2026',
                  title: 'Governance compliance framework',
                  description: 'Move from risk scores into policy and control design.',
                },
                {
                  href: '/tools/ai-compliance-audit-2026',
                  title: 'AI compliance audit tool',
                  description: 'Run a broader audit workflow after the initial assessment.',
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
