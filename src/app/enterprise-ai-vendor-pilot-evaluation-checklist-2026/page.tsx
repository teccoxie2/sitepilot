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
    title: 'Business workflow validation',
    items: [
      'Test the top 3-5 production workflows the business actually wants to improve, not generic demo prompts.',
      'Define pass/fail criteria for accuracy, completeness, escalation behavior, and required human review.',
      'Measure time saved per workflow and compare it against current-state effort, not vendor assumptions.',
      'Log every failure mode: hallucinations, missing citations, broken handoffs, and policy violations.',
    ],
  },
  {
    title: 'Security and governance controls',
    items: [
      'Validate SSO, MFA, RBAC, and admin-role boundaries in the real pilot environment.',
      'Test prompt injection resistance, data exfiltration controls, and logging of privileged actions.',
      'Confirm audit logs are exportable and useful for internal review, not just technically present.',
      'Prove redaction, retention, deletion, and approval controls using actual pilot data paths.',
    ],
  },
  {
    title: 'Technical integration and reliability',
    items: [
      'Measure latency, uptime, retry behavior, and rate-limit performance under representative load.',
      'Test integration points with identity, ticketing, knowledge, or CRM systems that matter in production.',
      'Verify versioning, rollback, and failure alerts before any workflow is treated as reliable.',
      'Document which issues are vendor defects versus customer-side implementation mistakes.',
    ],
  },
  {
    title: 'Adoption, cost, and exit readiness',
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
        text: 'An enterprise AI pilot should evaluate workflow accuracy, latency, security controls, integration reliability, user adoption, and real commercial behavior. A pilot that only confirms the demo experience is not a procurement-quality validation.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should an AI pilot fail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI pilot should fail when the vendor cannot meet pass/fail security controls, misses agreed workflow-quality thresholds, creates unacceptable cost exposure, or leaves export and rollback conditions unclear.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do pilot results connect to final vendor selection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pilot results should feed back into the shortlist scorecard, pricing review, and procurement decision matrix so final approval reflects measured evidence instead of unresolved claims from the RFP stage.',
      },
    },
  ],
}

const checklistHighlights = [
  {
    title: 'What a real pilot proves',
    text: 'A pilot should prove the tool works on live workflows, under real permissions, with measurable evidence. Everything else is demo cosplay.',
  },
  {
    title: 'Where pilots fail',
    text: 'Most pilots die on governance gaps, vague success criteria, or economics that fall apart once actual usage shows up.',
  },
  {
    title: 'What to do with the result',
    text: 'Feed the result into the shortlist scorecard and pricing guide before anyone starts talking about production approval.',
  },
]

export default function PilotEvaluationChecklistPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
      <SchemaMarkup type="custom" data={faqSchema} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">Pilot validation</div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Enterprise AI vendor pilot evaluation checklist 2026,
                <span className="brand-gradient-text block">for evidence, not theater.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This checklist turns an enterprise AI pilot into a procurement-grade test: define measurable acceptance criteria, force rollback conditions, and prove whether the vendor can survive real workflows, real controls, and real economics.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-brand">
                  RFP template
                </Link>
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary">
                  Shortlist scorecard
                </Link>
                <Link href="/enterprise-ai-vendor-pricing-guide-2026" className="btn-secondary">
                  Pricing guide
                </Link>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
                {checklistHighlights.map((item) => (
                  <div key={item.title} className="page-card px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">{item.title}</div>
                    <div className="text-sm text-slate-600 leading-6">{item.text}</div>
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
                      <div className="text-sm text-slate-500 mb-1">Decision model</div>
                      <div className="text-xl font-semibold text-slate-950">Pilot scorecard snapshot</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Pass / fail first
                    </div>
                  </div>

                  <div className="space-y-3">
                    {scorecardRows.slice(0, 4).map(([dimension, threshold, evidence]) => (
                      <div key={dimension} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-center justify-between gap-3 mb-1">
                          <div className="font-semibold text-slate-950">{dimension}</div>
                          <div className="text-[11px] uppercase tracking-[0.14em] text-slate-400">{threshold}</div>
                        </div>
                        <div className="text-sm text-slate-500">{evidence}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative">
        <section className="page-section surface-muted">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
              <div className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8">
                  <div className="page-pill mb-4">How to use it</div>
                  <h2 className="page-title text-3xl md:text-5xl mb-4">Turn every unresolved claim into a test.</h2>
                  <p className="page-lead text-lg mb-4">
                    Use this page after the{' '}
                    <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-[#635bff] hover:underline font-medium">
                      RFP template
                    </Link>{' '}
                    and{' '}
                    <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-[#635bff] hover:underline font-medium">
                      due diligence checklist
                    </Link>{' '}
                    narrow the field to vendors worth testing.
                  </p>
                  <p className="text-slate-600 leading-7 mb-4">
                    Pilot outputs should feed back into the{' '}
                    <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-[#635bff] hover:underline font-medium">
                      shortlist scorecard
                    </Link>{' '}
                    and the{' '}
                    <Link href="/enterprise-ai-vendor-pricing-guide-2026" className="text-[#635bff] hover:underline font-medium">
                      pricing guide
                    </Link>{' '}
                    so the final decision reflects live evidence, real cost behavior, and verified operational fit.
                  </p>
                  <p className="text-slate-600 leading-7">
                    Use the{' '}
                    <Link href="/methodology" className="text-[#635bff] hover:underline font-medium">
                      SitePilot methodology
                    </Link>{' '}
                    to separate pass/fail controls from weighted differentiators before the pilot gets treated as procurement evidence.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="page-card p-6">
                  <div className="text-sm text-slate-500 mb-2">Pilot rule</div>
                  <div className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">If the pilot cannot disqualify a weak vendor, it is theater.</div>
                  <p className="text-sm text-slate-600 leading-6">Good pilots create evidence, not optimism.</p>
                </div>
                <div className="page-card-soft p-6">
                  <div className="text-sm text-slate-500 mb-3">Decision outcomes</div>
                  <ul className="space-y-3 text-sm text-slate-700 leading-6">
                    <li><strong>Approve:</strong> controls, quality, and economics hold up under live conditions.</li>
                    <li><strong>Approve with conditions:</strong> remediations are clear, owned, and time-bound.</li>
                    <li><strong>Extend pilot:</strong> evidence is incomplete but the remaining questions are worth resolving.</li>
                    <li><strong>Reject:</strong> the vendor fails pass/fail controls, economics, or workflow fit.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-10">
              <div className="page-pill mb-4">Core workstreams</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">The four buckets that decide whether a pilot means anything.</h2>
              <p className="page-lead text-lg">
                If a vendor survives all four, you have evidence. If it only looks good in one of them, you have a demo with a budget request attached.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {pilotWorkstreams.map((group, index) => (
                <div key={group.title} className="page-card-glow p-1.5">
                  <div className="page-card rounded-[1.6rem] p-7 md:p-8 h-full">
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">0{index + 1}</div>
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-slate-950">{group.title}</h3>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 whitespace-nowrap">
                        Required
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-600 leading-7">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#635bff] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section surface-muted">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-8 items-start">
              <div className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8 overflow-x-auto">
                  <div className="page-pill mb-4">Minimum scoring table</div>
                  <h2 className="page-title text-3xl md:text-5xl mb-4">Set thresholds before the pilot starts.</h2>
                  <table className="w-full text-sm text-left text-slate-700 border-collapse min-w-[680px]">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-900">
                        <th className="py-3 pr-4 font-semibold">Dimension</th>
                        <th className="py-3 pr-4 font-semibold">Pass threshold</th>
                        <th className="py-3 font-semibold">Evidence required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scorecardRows.map(([dimension, threshold, evidence]) => (
                        <tr key={dimension} className="border-b border-slate-100 align-top last:border-b-0">
                          <td className="py-3 pr-4 font-medium text-slate-900">{dimension}</td>
                          <td className="py-3 pr-4">{threshold}</td>
                          <td className="py-3">{evidence}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card p-6 md:p-7">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">Pilot acceptance criteria</h3>
                  <ul className="space-y-4 text-slate-600 leading-7">
                    <li><strong className="text-slate-900">Accuracy and grounding:</strong> Output must meet agreed thresholds on live business tasks without leaning on vendor-prepared demo prompts.</li>
                    <li><strong className="text-slate-900">Latency and SLA:</strong> Response times and failure handling must meet the operational needs of the target workflow.</li>
                    <li><strong className="text-slate-900">Security guardrails:</strong> RBAC, masking, logging, and prompt-injection defenses must block test violations in the real environment.</li>
                    <li><strong className="text-slate-900">User adoption:</strong> The pilot group should complete meaningful work with the tool, not just log in and click around once.</li>
                    <li><strong className="text-slate-900">Commercial realism:</strong> Pilot usage must not expose hidden overages, support minimums, or implementation costs that break the business case.</li>
                  </ul>
                </div>

                <div className="page-card-soft border border-rose-100 p-6 md:p-7">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-4">Rollback triggers</h3>
                  <ul className="space-y-4 text-slate-600 leading-7">
                    {rollbackTriggers.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 text-rose-500 font-bold">⚠</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border border-rose-100 bg-white px-4 py-4 text-sm text-slate-600 leading-6">
                    A rollback condition is not a negotiation tactic. It is the line that stops a bad pilot from becoming a bad contract.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="max-w-6xl mx-auto px-4">
            <div className="page-card-glow p-8 md:p-12 surface-muted">
              <div className="max-w-3xl">
                <div className="page-pill mb-4">FAQ</div>
                <h2 className="page-title text-3xl md:text-5xl mb-4">The questions buyers keep asking after the deck slides are over.</h2>
                <div className="space-y-5 text-slate-600 leading-7">
                  <p><strong className="text-slate-900">What should an enterprise AI pilot evaluate?</strong> Workflow accuracy, latency, security controls, integration reliability, user adoption, and real commercial behavior.</p>
                  <p><strong className="text-slate-900">When should an AI pilot fail?</strong> When the vendor cannot meet pass/fail security controls, misses agreed workflow-quality thresholds, creates unacceptable cost exposure, or leaves export and rollback conditions unclear.</p>
                  <p><strong className="text-slate-900">How do pilot results connect to final vendor selection?</strong> Feed them back into the shortlist scorecard, pricing review, and procurement decision matrix so final approval reflects measured evidence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section surface-muted">
          <div className="max-w-6xl mx-auto px-4">
            <RelatedLinks
              links={[
                { title: 'Enterprise AI Vendor RFP Template 2026', href: '/enterprise-ai-vendor-rfp-template-2026', description: 'Turn unresolved RFP answers into explicit pilot test cases.', category: 'guide' },
                { title: 'AI Vendor Due Diligence Checklist 2026', href: '/ai-vendor-due-diligence-checklist-enterprise-2026', description: 'Address underlying security risks before running the pilot.', category: 'guide' },
                { title: 'Enterprise AI Vendor Shortlist Scorecard 2026', href: '/enterprise-ai-vendor-shortlist-scorecard-2026', description: 'Score the final pilot results against your initial expectations.', category: 'tools' },
                { title: 'Enterprise AI Vendor Pricing Guide 2026', href: '/enterprise-ai-vendor-pricing-guide-2026', description: 'Check whether pilot usage patterns change the commercial picture.', category: 'guide' },
                { title: 'AI Procurement Decision Matrix Tool 2026', href: '/ai-procurement-decision-matrix-tool-2026', description: 'Quantify pilot outcomes across cost, risk, and implementation fit.', category: 'tools' },
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  )
}
