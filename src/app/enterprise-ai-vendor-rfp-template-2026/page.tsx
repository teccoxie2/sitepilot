import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Enterprise AI Vendor RFP Template 2026 | SitePilot',
  description:
    'A practical enterprise AI vendor RFP template for procurement, security, architecture, legal, and business teams evaluating AI vendors in 2026.',
  keywords:
    'enterprise AI vendor RFP template, AI procurement template, AI vendor questionnaire, enterprise AI buying process, AI vendor selection',
}

const sections = [
  {
    title: '1. Vendor Profile',
    questions: [
      'Describe your legal entity, headquarters, ownership structure, and years in market.',
      'List your primary enterprise customer segments and three comparable customer references.',
      'Summarize product roadmap stability, funding position, and support organization.',
      'Identify all major subcontractors and subprocessors involved in service delivery.',
    ],
  },
  {
    title: '2. Product Scope & Use Cases',
    questions: [
      'Describe the exact AI use cases your platform supports in production today.',
      'Clarify where your product depends on third-party foundation models or external APIs.',
      'State current limitations, unsupported workflows, and known failure modes.',
      'Explain what customer-side controls are required for safe deployment.',
    ],
  },
  {
    title: '3. Security & Identity',
    questions: [
      'Provide details on SSO, MFA, RBAC, SCIM, audit logs, and session controls.',
      'Describe encryption standards, key management, secrets handling, and tenant isolation.',
      'Share available audit reports, penetration test summaries, and incident response process.',
      'Explain how privileged access is controlled, monitored, and reviewed.',
    ],
  },
  {
    title: '4. Data Governance & Privacy',
    questions: [
      'Specify what customer data is stored, where it is stored, and for how long.',
      'Confirm whether inputs, outputs, files, or telemetry are used for training or product improvement.',
      'Provide deletion, retention, backup, export, and data residency policies.',
      'Share your DPA, subprocessors list, and cross-border transfer mechanisms.',
    ],
  },
  {
    title: '5. Model Risk & Controls',
    questions: [
      'Explain how hallucination, harmful output, prompt injection, and data leakage risks are mitigated.',
      'Describe evaluation methods, benchmark process, and change-management for model updates.',
      'Clarify which guardrails are native versus customer-configured.',
      'State where human review is recommended or mandatory before external action.',
    ],
  },
  {
    title: '6. Architecture & Integration',
    questions: [
      'Describe deployment options: SaaS, private networking, VPC, on-prem, or regional isolation.',
      'Provide API, webhook, export, versioning, and rate-limit documentation.',
      'List supported integrations for identity, productivity, data, observability, and ticketing stacks.',
      'Explain portability and migration options if the customer exits the platform.',
    ],
  },
  {
    title: '7. Commercial & Legal',
    questions: [
      'Provide pricing model, minimum terms, renewal model, and overage rules.',
      'Clarify SLA, service credits, support tiers, and escalation commitments.',
      'Detail termination rights, data return process, and post-termination deletion commitments.',
      'Highlight any clauses related to AI output ownership, indemnity, and acceptable use.',
    ],
  },
]

const scoringRules = [
  'Mandatory requirements: pass/fail items that eliminate vendors immediately.',
  'Weighted scoring: security, data governance, architecture, business fit, and commercial terms.',
  'Evidence-first review: claims without documentation should score low, not “probably okay.”',
  'Pilot validation: final selection should depend on real workflow results, not slide decks.',
]

const redFlags = [
  'Refuses to state whether customer data is used for model training.',
  'Cannot support SSO, RBAC, or audit logging for enterprise admins.',
  'Provides vague security answers or only marketing-grade compliance claims.',
  'Makes export, deletion, or offboarding unclear.',
  'Pushes “standard terms only” while asking for production access to sensitive workflows.',
]

export default function EnterpriseAIVendorRFPTemplatePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6 border border-white/20">
              Procurement template
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Enterprise AI Vendor RFP Template 2026
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl">
              A practical RFP structure for buying teams that want real answers on security, data usage, integration,
              model risk, and commercial terms — not polished nonsense in a PDF.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Procurement</span>
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Security</span>
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Data governance</span>
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Commercial review</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to use this template</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Keep the first RFP short enough that good vendors will answer it properly, but sharp enough that weak vendors expose themselves fast.
              The goal is not paperwork volume. The goal is eliminating expensive ambiguity before pilot and contract work.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Use this template for longlist filtering, then carry the highest-risk questions into technical validation and legal review.
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Best practice</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Make vendors answer in writing, attach evidence, and map every response to a named owner. Otherwise the RFP turns into decorative admin theater.
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Core RFP sections</h2>
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.questions.map((question) => (
                    <li key={question} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1 h-5 w-5 rounded border border-slate-300 bg-slate-50 flex-shrink-0" />
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Suggested scoring rules</h2>
            <ul className="space-y-3 text-slate-700">
              {scoringRules.map((rule) => (
                <li key={rule} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl border border-red-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Red-flag responses</h2>
            <ul className="space-y-3 text-slate-700">
              {redFlags.map((flag) => (
                <li key={flag} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Recommended buying flow</h2>
            <ol className="space-y-3 text-blue-100 list-decimal list-inside">
              <li>Use the RFP to narrow the field to vendors worth piloting.</li>
              <li>Turn unresolved answers into pilot test cases and contract questions.</li>
              <li>Score with procurement, security, legal, and business owners in the same room.</li>
              <li>Do not grant production approval until controls and exit terms are explicit.</li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/ai-vendor-due-diligence-checklist-enterprise-2026"
                className="inline-flex items-center rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100 transition-colors"
              >
                Open due diligence checklist
              </Link>
              <Link
                href="/ai-vendor-risk-evaluation-tool-2026"
                className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 transition-colors"
              >
                Review vendor risk tool
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks
          title="Related enterprise AI procurement resources"
          links={[
            {
              title: 'AI Vendor Due Diligence Checklist 2026',
              href: '/ai-vendor-due-diligence-checklist-enterprise-2026',
              description: 'Cross-functional diligence checklist for procurement, legal, security, and architecture teams.',
              category: 'guide',
            },
            {
              title: 'AI Procurement Decision Matrix Tool 2026',
              href: '/ai-procurement-decision-matrix-tool-2026',
              description: 'A weighted framework for comparing shortlisted AI vendors.',
              category: 'tools',
            },
            {
              title: 'AI Vendor Risk Evaluation Tool 2026',
              href: '/ai-vendor-risk-evaluation-tool-2026',
              description: 'Assess operational, legal, security, and integration risk before signing.',
              category: 'tools',
            },
            {
              title: 'Enterprise AI Vendor Comparison Guide 2026',
              href: '/enterprise-ai-vendor-comparison-guide-2026',
              description: 'Compare major enterprise AI vendors across deployment, pricing, support, and compliance.',
              category: 'ai',
            },
          ]}
        />
      </section>
    </div>
  )
}
