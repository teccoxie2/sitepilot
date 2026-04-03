import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Enterprise AI Vendor Due Diligence Checklist 2026 | SitePilot',
  description:
    'A practical enterprise AI vendor due diligence checklist covering security, legal, procurement, architecture, data governance, and rollout readiness.',
  keywords:
    'AI vendor due diligence, enterprise AI procurement checklist, AI vendor security checklist, AI vendor assessment, enterprise AI risk review',
}

const workstreams = [
  {
    title: '1. Company & Commercial Viability',
    items: [
      'Confirm legal entity, headquarters, ownership, and parent-company structure.',
      'Review funding history, profitability signals, and customer concentration risk.',
      'Validate reference customers in a similar industry, size, and compliance posture.',
      'Check contract flexibility: termination rights, price protections, renewal terms, and support SLAs.',
      'Document what happens if the vendor is acquired, shuts down, or materially changes pricing.',
    ],
  },
  {
    title: '2. Security & Access Controls',
    items: [
      'Request current security certifications or audit reports that actually exist.',
      'Verify SSO, MFA, RBAC, audit logging, and admin permission boundaries.',
      'Confirm encryption in transit and at rest, plus key-management approach.',
      'Review incident response process, breach notification windows, and escalation paths.',
      'Clarify whether subcontractors or subprocessors can access model inputs or outputs.',
    ],
  },
  {
    title: '3. Data Governance & Privacy',
    items: [
      'Identify exactly what data enters the platform: prompts, files, metadata, logs, analytics.',
      'Confirm whether customer data is used for model training, product improvement, or benchmarking.',
      'Map data residency, retention windows, deletion guarantees, and backup behavior.',
      'Check DPA terms, subprocessors list, and cross-border transfer mechanisms.',
      'Require clear controls for redaction, masking, and sensitive-data handling.',
    ],
  },
  {
    title: '4. Model Risk & Output Reliability',
    items: [
      'Define approved use cases and explicitly ban unsafe or high-risk use cases.',
      'Ask how the vendor measures hallucination, grounding, and response consistency.',
      'Verify guardrails for prompt injection, unsafe content, data leakage, and abuse detection.',
      'Test representative business workflows using your own acceptance criteria, not demo scripts.',
      'Document where human review is mandatory before any external or regulated action.',
    ],
  },
  {
    title: '5. Architecture & Integration',
    items: [
      'Check API maturity, rate limits, webhook support, and versioning policy.',
      'Review deployment options: SaaS, VPC, private networking, regional isolation, or hybrid.',
      'Validate integration effort with identity, data, workflow, ticketing, and observability stacks.',
      'Confirm logging, monitoring, and export capabilities for internal audit requirements.',
      'Identify lock-in risks: proprietary workflows, hidden migration costs, and data portability limits.',
    ],
  },
  {
    title: '6. Compliance & Governance',
    items: [
      'Map vendor capabilities against your actual obligations: privacy, industry, and internal policy.',
      'Confirm explainability, reviewability, and evidence collection for governed decisions.',
      'Review acceptable-use policy, prohibited content handling, and abuse response procedures.',
      'Ensure procurement, legal, security, and business owners all sign off on the same risk register.',
      'Create a formal go-live checklist with owner, due date, and approval evidence for each control.',
    ],
  },
]

const redFlags = [
  'Refuses to answer basic questions about data retention or training usage.',
  'Cannot name subprocessors or keeps changing answers during diligence.',
  'Offers only marketing PDFs instead of concrete security or architecture detail.',
  'Promises “enterprise readiness” but lacks RBAC, audit logs, or SSO.',
  'Pushes production rollout before pilot success criteria are agreed.',
  'Makes migration/export unnecessarily hard or contractually vague.',
]

const deliverables = [
  'Vendor risk register with owner and mitigation plan',
  'Security review summary',
  'Legal and privacy issue list',
  'Pilot success criteria and rollback plan',
  'Executive recommendation: approve, approve with conditions, or reject',
]

export default function AIVendorDueDiligenceChecklistPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6 border border-white/20">
              Enterprise procurement playbook
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Enterprise AI Vendor Due Diligence Checklist 2026
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl">
              A practical checklist for security, legal, procurement, and architecture teams evaluating AI vendors.
              No fluff, no demo-theater worship — just the questions that stop expensive mistakes.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Security review</span>
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Data governance</span>
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Procurement readiness</span>
              <span className="bg-white/10 border border-white/15 rounded-full px-3 py-1">Go-live controls</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What this page is for</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Most AI vendor evaluations fail for a boring reason: teams over-focus on the demo and under-focus on operations.
              Procurement sees pricing, security sees controls, legal sees clauses, and the business sees promised speed. If nobody ties that together, the mess shows up after signature.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Use this checklist during vendor shortlisting, pilot review, and final approval. It works best when every item gets an owner, an answer, and evidence.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Recommended outcome states</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li><strong>Approve:</strong> controls and contracts are acceptable for planned use.</li>
              <li><strong>Approve with conditions:</strong> gaps exist but have owners and deadlines.</li>
              <li><strong>Reject:</strong> unresolved issues create unacceptable security, legal, or delivery risk.</li>
            </ul>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Core due diligence checklist</h2>
          <div className="space-y-6">
            {workstreams.map((group) => (
              <div key={group.title} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1 h-5 w-5 rounded border border-slate-300 bg-slate-50 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 rounded-xl border border-red-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Red flags</h2>
            <ul className="space-y-3 text-slate-700">
              {redFlags.map((flag) => (
                <li key={flag} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Minimum decision pack</h2>
            <ul className="space-y-3 text-slate-700 mb-6">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-lg bg-slate-50 p-4 border border-slate-200 text-sm text-slate-700">
              If the vendor cannot support a clean pilot, clean audit trail, and clean exit path, the problem is not your checklist. The vendor is the checklist result.
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">How to use this in a real buying process</h2>
            <ol className="space-y-3 text-blue-100 list-decimal list-inside">
              <li>Use it to filter longlist vendors before wasting pilot time.</li>
              <li>Re-run it after the pilot using actual technical and operational evidence.</li>
              <li>Turn unresolved gaps into contract conditions, not hopeful Slack messages.</li>
              <li>Get one final cross-functional sign-off before production access is granted.</li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/ai-procurement-decision-matrix-tool-2026"
                className="inline-flex items-center rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100 transition-colors"
              >
                Review procurement matrix
              </Link>
              <Link
                href="/ai-vendor-risk-evaluation-tool-2026"
                className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 transition-colors"
              >
                Open vendor risk tool
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks
          title="Related enterprise AI guides"
          links={[
            {
              title: 'AI Procurement Decision Matrix Tool 2026',
              href: '/ai-procurement-decision-matrix-tool-2026',
              description: 'A structured framework for comparing shortlisted AI vendors.',
              category: 'tools',
            },
            {
              title: 'AI Vendor Risk Evaluation Tool 2026',
              href: '/ai-vendor-risk-evaluation-tool-2026',
              description: 'Score technical, legal, operational, and compliance risk before signing.',
              category: 'tools',
            },
            {
              title: 'AI Compliance Readiness Assessment 2026',
              href: '/ai-compliance-readiness-assessment-2026',
              description: 'Review regulatory readiness before rollout into governed environments.',
              category: 'guide',
            },
            {
              title: 'Enterprise AI Vendor RFP Template 2026',
              href: '/enterprise-ai-vendor-rfp-template-2026',
              description: 'Build a cleaner RFP process with mandatory requirements, scoring rules, and red-flag questions.',
              category: 'guide',
            },
            {
              title: 'Enterprise AI Security Risk Management Guide 2026',
              href: '/enterprise-ai-security-risk-management-guide-2026',
              description: 'Security architecture and control priorities for enterprise AI deployment.',
              category: 'ai',
            },
          ]}
        />
      </section>
    </div>
  )
}
