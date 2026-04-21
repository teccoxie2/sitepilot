import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Security & Compliance Framework | SitePilot'
const pageDescription =
  'Comprehensive enterprise AI security and compliance framework covering GDPR, SOX, HIPAA, ISO 27001, and practical security architecture controls.'
const pageUrl = 'https://sitepilot.co/ai-enterprise-security-compliance'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'enterprise AI security',
    'AI compliance',
    'GDPR AI',
    'SOX compliance',
    'HIPAA AI',
    'ISO 27001 AI',
    'enterprise AI governance',
    'AI risk management',
  ],
  alternates: {
    canonical: pageUrl,
  },
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

const quickNav = [
  { href: '#overview', title: 'Executive summary', note: 'What the framework is for' },
  { href: '#frameworks', title: 'Compliance frameworks', note: 'GDPR, SOX, HIPAA, ISO 27001, PCI DSS' },
  { href: '#architecture', title: 'Security architecture', note: 'Protection, access, and monitoring' },
  { href: '#risk', title: 'Risk matrix', note: 'Where programs usually break' },
  { href: '#checklist', title: 'Implementation checklist', note: 'Before and after launch' },
]

const summaryStats = [
  { value: '5', label: 'Core regulatory and control domains' },
  { value: '99.9%', label: 'Target compliance coverage posture' },
  { value: 'Zero', label: 'Target tolerance for preventable incidents' },
  { value: '24/7', label: 'Expected monitoring rhythm' },
]

const executiveHighlights = [
  'Enterprise AI security needs to protect both data and model behavior, not just the infrastructure around them.',
  'Compliance is rarely one framework at a time. Most enterprise programs face overlapping GDPR, sector-specific, financial, and security-control obligations.',
  'The fastest way to create AI risk is to scale access, data sharing, and automation before governance, logging, and incident response are mature.',
  'Security and compliance should be embedded into implementation design, not bolted on after deployment.',
]

const complianceCards = [
  {
    title: 'GDPR compliance',
    accent: 'text-blue-600',
    items: [
      ['Data Protection Impact Assessment', 'Assess AI systems that process personal data with elevated privacy risk.'],
      ['Consent management', 'Define consent logic for training data and automated decision-making.'],
      ['Right to explanation', 'Support explainability for automated decisions affecting individuals.'],
      ['Data minimization', 'Reduce personal-data exposure during training and inference.'],
    ],
  },
  {
    title: 'SOX compliance',
    accent: 'text-indigo-600',
    items: [
      ['AI model governance', 'Apply controls to models influencing financial reporting and material processes.'],
      ['Audit trail requirements', 'Log model decisions, overrides, and control changes in regulated workflows.'],
      ['Change management', 'Control deployment and retraining for financially material systems.'],
      ['Risk assessment', 'Continuously review AI-related risks to reporting integrity.'],
    ],
  },
  {
    title: 'HIPAA compliance',
    accent: 'text-violet-600',
    items: [
      ['PHI protection', 'Secure training and inference involving protected health information.'],
      ['Minimum necessary standard', 'Limit data access to only what a workflow requires.'],
      ['Business Associate Agreements', 'Govern AI vendors that handle healthcare data.'],
      ['Breach notification', 'Detect and report AI-related PHI exposure quickly.'],
    ],
  },
  {
    title: 'ISO 27001 and PCI DSS',
    accent: 'text-amber-600',
    items: [
      ['Information security management', 'Run AI security as part of the broader ISMS, not a separate exception.'],
      ['Risk management framework', 'Continuously evaluate and treat AI security risks.'],
      ['Security controls', 'Apply technical and organizational safeguards to models, data, and integrations.'],
      ['Continuous improvement', 'Use incident reviews, audits, and control testing to tighten posture.'],
    ],
  },
]

const architectureCards = [
  {
    title: 'Data protection',
    items: [
      'Encryption at rest and in transit',
      'Data anonymization and pseudonymization',
      'Differential privacy where appropriate',
      'Secure multi-party computation for sensitive workflows',
      'Data lineage tracking and provenance',
    ],
  },
  {
    title: 'Access control',
    items: [
      'Zero-trust architecture',
      'Role-based access control (RBAC)',
      'Multi-factor authentication',
      'Privileged access management',
      'Just-in-time access provisioning',
    ],
  },
  {
    title: 'Monitoring and audit',
    items: [
      'Real-time security monitoring',
      'Model drift detection',
      'Compliance audit trails',
      'Incident response automation',
      'Security metrics dashboards',
    ],
  },
]

const riskMatrix = [
  ['Data privacy', 'High', 'AI systems touching personal or sensitive data create immediate regulatory exposure.'],
  ['Model security', 'Medium', 'Prompt abuse, model leakage, and manipulation rise with broader adoption.'],
  ['Regulatory compliance', 'High', 'Multi-framework obligations make control gaps expensive and visible.'],
  ['Operational impact', 'Medium', 'Poorly governed AI can disrupt workflows and decision quality before teams notice.'],
]

const checklistGroups = [
  {
    title: 'Pre-implementation',
    items: [
      'Conduct comprehensive risk assessment',
      'Define data-governance policies',
      'Establish security architecture framework',
      'Configure access-control systems',
      'Implement monitoring and logging',
      'Train security and AI teams',
    ],
  },
  {
    title: 'Post-implementation',
    items: [
      'Run continuous security monitoring',
      'Perform regular compliance audits',
      'Test incident response routines',
      'Monitor model drift and policy drift',
      'Report security metrics to leadership',
      'Maintain ongoing training and policy refreshes',
    ],
  },
]

const relatedResources = [
  {
    href: '/ai-data-privacy-impact-assessment-2026',
    title: 'AI Data Privacy Impact Assessment',
    description: 'Use this when privacy risk needs to be quantified before framework work is prioritized.',
  },
  {
    href: '/ai-governance-compliance-framework-2026',
    title: 'AI Governance & Compliance Framework',
    description: 'Connect security controls to ownership, governance, and policy structures.',
  },
  {
    href: '/ai-tools-security-compliance-checklist-2026',
    title: 'AI Security Compliance Checklist',
    description: 'Turn the framework into an execution checklist for operational teams.',
  },
  {
    href: '/enterprise-ai-security-risk-management-guide-2026',
    title: 'Enterprise AI Security Risk Management',
    description: 'Go deeper on risk-response design and operating-model decisions.',
  },
]

export default function EnterpriseAISecurityCompliancePage() {
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
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Enterprise AI security framework
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Enterprise AI security and compliance,
                <span className="brand-gradient-text block">for teams that need controls to scale with adoption.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This framework covers the security architecture, audit posture, and regulatory-control expectations that
                enterprise AI programs need across GDPR, SOX, HIPAA, ISO 27001, and adjacent security standards.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#frameworks" className="btn-brand">
                  View compliance guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#architecture" className="btn-secondary">
                  Security architecture
                </a>
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
                      <div className="text-sm text-slate-500 mb-1">Guide map</div>
                      <div className="text-xl font-semibold text-slate-950">What to review first</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Controls first
                    </div>
                  </div>

                  <div className="space-y-3">
                    {quickNav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
                        <div className="font-semibold text-slate-950 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.note}</div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/80 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Start with the compliance framework section if your challenge is regulatory exposure. Start with architecture if the team already knows the standards but lacks an implementation model.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section id="overview" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Executive Summary</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Enterprise-grade AI security,
                <span className="block brand-gradient-text">means governing systems, data, and decisions together.</span>
              </h2>
              <div className="space-y-4">
                {executiveHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card-soft p-7">
              <h3 className="text-2xl font-semibold text-slate-950 mb-5">Compliance coverage</h3>
              <div className="space-y-4">
                {[
                  ['GDPR (EU)', 'Complete'],
                  ['SOX (US)', 'Complete'],
                  ['HIPAA (Healthcare)', 'Complete'],
                  ['ISO 27001', 'Complete'],
                  ['PCI DSS', 'Complete'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                    <span className="text-slate-600">{label}</span>
                    <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="frameworks" className="page-card-glow p-1.5 mb-16 scroll-mt-28">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Compliance Frameworks</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Regulatory coverage,
                <span className="block brand-gradient-text">grouped by the controls teams actually need to run.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {complianceCards.map((card) => (
                <div key={card.title} className="page-card-soft p-6">
                  <h3 className={`text-2xl font-semibold mb-5 ${card.accent}`}>{card.title}</h3>
                  <div className="space-y-4">
                    {card.items.map(([title, note]) => (
                      <div key={title}>
                        <div className="font-semibold text-slate-950 mb-1">{title}</div>
                        <div className="text-sm text-slate-600">{note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="architecture" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Security Architecture</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              Security architecture for enterprise AI,
              <span className="block brand-gradient-text">from protection to auditability.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {architectureCards.map((card) => (
              <div key={card.title} className="page-card-soft p-6">
                <h3 className="text-2xl font-semibold text-slate-950 mb-5">{card.title}</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  {card.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="risk" className="page-card-glow p-1.5 mb-16 scroll-mt-28">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="max-w-3xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Risk Matrix</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                The risk areas that demand
                <span className="block brand-gradient-text">attention before scale.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {riskMatrix.map(([area, level, note]) => (
                <div key={area} className="page-card-soft p-6">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-slate-950">{area}</h3>
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                      {level}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="checklist" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Implementation Checklist</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
              The operating checklist,
              <span className="block brand-gradient-text">before and after AI systems go live.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {checklistGroups.map((group) => (
              <div key={group.title} className="page-card-soft p-6">
                <h3 className="text-2xl font-semibold text-slate-950 mb-5">{group.title}</h3>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                      <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-card-glow p-1.5">
          <div className="page-card rounded-[2rem] p-8 md:p-10">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                  Need to turn the framework
                  <span className="block brand-gradient-text">into an execution plan?</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Use the related privacy, governance, and security resources below to move from policy language into tooling, controls, and ownership decisions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-brand">
                    Get security consultation
                  </Link>
                  <Link href="/ai-tools" className="btn-secondary">
                    Browse AI security tools
                  </Link>
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
          </div>
        </section>
      </main>
    </div>
  )
}
