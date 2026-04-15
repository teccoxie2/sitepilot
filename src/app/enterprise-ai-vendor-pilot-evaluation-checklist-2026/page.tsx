import { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Vendor Pilot Evaluation Checklist 2026 | SitePilot'
const pageDescription = 'A structured evaluation checklist to validate enterprise AI vendors during the pilot phase using measurable acceptance criteria.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-vendor-pilot-evaluation-checklist-2026'

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

const pilotWorkstreams = [
  {
    title: '1. Business Workflow Validation',
    items: [
      'Test the top 3-5 production workflows the business actually wants to improve, not generic demo prompts.',
      'Define pass/fail criteria for accuracy, completeness, escalation behavior, and required human review.',
      'Measure time saved per workflow and compare it against current-state effort, not vendor assumptions.',
      'Log every failure mode: hallucinations, missing citations, broken handoffs, and policy violations.',
    ],
  },
  {
    title: '2. Security & Governance Controls',
    items: [
      'Validate SSO, MFA, RBAC, and admin-role boundaries in the real pilot environment.',
      'Test prompt injection resistance, data exfiltration controls, and logging of privileged actions.',
      'Confirm audit logs are exportable and useful for internal review, not just technically present.',
      'Prove redaction, retention, deletion, and approval controls using actual pilot data paths.',
    ],
  },
  {
    title: '3. Technical Integration & Reliability',
    items: [
      'Measure latency, uptime, retry behavior, and rate-limit performance under representative load.',
      'Test integration points with identity, ticketing, knowledge, or CRM systems that matter in production.',
      'Verify versioning, rollback, and failure alerts before any workflow is treated as reliable.',
      'Document which issues are vendor defects versus customer-side implementation mistakes.',
    ],
  },
  {
    title: '4. Adoption, Cost & Exit Readiness',
    items: [
      'Track weekly active pilot users, task completion rate, and reasons users abandon the workflow.',
      'Compare real pilot usage against quoted pricing assumptions to expose overage or seat waste early.',
      'Validate data export, deletion, and workflow portability before calling the pilot successful.',
      'Require an executive recommendation: approve, approve with conditions, extend pilot, or reject.',
    ],
  },
]

const scorecardRows = [
  ['Accuracy and grounding', '≥ agreed benchmark on live workflows', 'Failed outputs with examples and severity'],
  ['Latency and reliability', 'Within SLA under test load', 'Response times, errors, retry behavior'],
  ['Security controls', 'All required controls proven', 'Screenshots, logs, admin test notes'],
  ['Integration fit', 'Critical systems work without brittle workarounds', 'API logs, sync success, fallback gaps'],
  ['Adoption and usability', 'Pilot group completes priority tasks consistently', 'Usage trends and qualitative blockers'],
  ['Commercial fit', 'Real usage aligns with budget model', 'Pilot burn, seat waste, overage exposure'],
]

const rollbackTriggers = [
  'Critical security control fails or cannot be demonstrated in the pilot environment.',
  'Model quality misses agreed thresholds on core workflows with no credible remediation path.',
  'Real pilot costs materially exceed the commercial case used for shortlist approval.',
  'Export, deletion, or operational portability remains vague at the end of validation.',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should an enterprise AI pilot evaluate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An enterprise AI pilot should evaluate workflow accuracy, latency, security controls, integration reliability, user adoption, and real commercial behavior. A pilot that only confirms the demo experience is not a procurement-quality validation.'
      }
    },
    {
      '@type': 'Question',
      name: 'When should an AI pilot fail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI pilot should fail when the vendor cannot meet pass/fail security controls, misses agreed workflow-quality thresholds, creates unacceptable cost exposure, or leaves export and rollback conditions unclear.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do pilot results connect to final vendor selection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pilot results should feed back into the shortlist scorecard, pricing review, and procurement decision matrix so final approval reflects measured evidence instead of unresolved claims from the RFP stage.'
      }
    }
  ]
}

export default function PilotEvaluationChecklistPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6 border border-white/20">
            Pilot Validation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise AI Vendor Pilot Evaluation Checklist 2026</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            An enterprise AI vendor pilot evaluation checklist defines acceptance criteria, rollback conditions, and evidence requirements before a shortlisted tool receives production approval. This 2026 model helps buying teams test workflow accuracy, security controls, integration reliability, adoption, and commercial behavior against live use cases so weak vendors fail before contract signature.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-10">
        <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
        <SchemaMarkup type="custom" data={faqSchema} />

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to use this checklist</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Use this page after the{' '}
            <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-blue-700 font-medium hover:underline">
              RFP template
            </Link>{' '}
            and{' '}
            <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-blue-700 font-medium hover:underline">
              due diligence checklist
            </Link>{' '}
            narrow the field to vendors worth testing. Every unresolved claim should become a measurable pilot test, not a verbal promise.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Final pilot outputs should feed back into the{' '}
            <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-blue-700 font-medium hover:underline">
              shortlist scorecard
            </Link>{' '}
            and the{' '}
            <Link href="/enterprise-ai-vendor-pricing-guide-2026" className="text-blue-700 font-medium hover:underline">
              pricing guide
            </Link>{' '}
            so production approval reflects real evidence, actual cost behavior, and verified operational fit.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Use the{' '}
            <Link href="/methodology" className="text-blue-700 font-medium hover:underline">
              SitePilot methodology
            </Link>{' '}
            to separate pass/fail controls from weighted differentiators before a pilot result is treated as procurement evidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Core pilot workstreams</h2>
            <div className="space-y-6">
              {pilotWorkstreams.map((group) => (
                <div key={group.title} className="border-t border-slate-100 pt-6 first:border-t-0 first:pt-0">
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
          </div>

          <aside className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Pilot rule</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                If the pilot cannot disqualify a weak vendor, it is theater. Good pilots create evidence, not optimism.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Decision outcomes</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li><strong>Approve:</strong> controls, quality, and economics hold up under live conditions.</li>
                <li><strong>Approve with conditions:</strong> remediations are clear, owned, and time-bound.</li>
                <li><strong>Extend pilot:</strong> evidence is incomplete but the remaining questions are still worth resolving.</li>
                <li><strong>Reject:</strong> the vendor fails pass/fail controls, economics, or workflow fit.</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8 overflow-x-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Minimum scoring table</h2>
          <table className="w-full text-sm text-left text-slate-700 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900">
                <th className="py-3 pr-4 font-semibold">Dimension</th>
                <th className="py-3 pr-4 font-semibold">Pass threshold</th>
                <th className="py-3 font-semibold">Evidence required</th>
              </tr>
            </thead>
            <tbody>
              {scorecardRows.map(([dimension, threshold, evidence]) => (
                <tr key={dimension} className="border-b border-slate-100 align-top">
                  <td className="py-3 pr-4 font-medium text-slate-900">{dimension}</td>
                  <td className="py-3 pr-4">{threshold}</td>
                  <td className="py-3">{evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Pilot acceptance criteria</h2>
            <ul className="space-y-4 text-slate-700">
              <li><strong>Accuracy & grounding:</strong> Output must meet agreed thresholds on live business tasks without leaning on vendor-prepared demo prompts.</li>
              <li><strong>Latency & SLA:</strong> Response times and failure handling must meet the operational needs of the target workflow.</li>
              <li><strong>Security guardrails:</strong> RBAC, masking, logging, and prompt-injection defenses must block test violations in the real environment.</li>
              <li><strong>User adoption:</strong> The pilot group should complete meaningful work with the tool, not just log in and click around once.</li>
              <li><strong>Commercial realism:</strong> Pilot usage must not expose hidden overages, support minimums, or implementation costs that break the business case.</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl border border-red-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Rollback triggers</h2>
            <ul className="space-y-4 text-slate-700">
              {rollbackTriggers.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-white/70 p-4 border border-red-100 text-sm text-slate-700">
              A rollback condition is not a negotiation tactic. It is the line that prevents a bad pilot from becoming a bad contract.
            </div>
          </div>
        </div>

        <RelatedLinks links={[
          { title: 'Enterprise AI Vendor RFP Template 2026', href: '/enterprise-ai-vendor-rfp-template-2026', description: 'Turn unresolved RFP answers into explicit pilot test cases.', category: 'guide' },
          { title: 'AI Vendor Due Diligence Checklist 2026', href: '/ai-vendor-due-diligence-checklist-enterprise-2026', description: 'Address underlying security risks before running the pilot.', category: 'guide' },
          { title: 'Enterprise AI Vendor Shortlist Scorecard 2026', href: '/enterprise-ai-vendor-shortlist-scorecard-2026', description: 'Score the final pilot results against your initial expectations.', category: 'tools' },
          { title: 'Enterprise AI Vendor Pricing Guide 2026', href: '/enterprise-ai-vendor-pricing-guide-2026', description: 'Check whether pilot usage patterns change the commercial picture.', category: 'guide' },
          { title: 'AI Procurement Decision Matrix Tool 2026', href: '/ai-procurement-decision-matrix-tool-2026', description: 'Quantify pilot outcomes across cost, risk, and implementation fit.', category: 'tools' }
        ]} />
      </main>
    </div>
  )
}
