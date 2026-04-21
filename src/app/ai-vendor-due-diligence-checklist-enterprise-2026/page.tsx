import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Shield,
  Sparkles,
} from 'lucide-react'

const pageTitle = 'Enterprise AI Vendor Due Diligence Checklist 2026 | SitePilot'
const pageDescription =
  'A practical enterprise AI vendor due diligence checklist covering security, legal, procurement, architecture, data governance, and rollout readiness.'
const pageUrl = 'https://sitepilot.co/ai-vendor-due-diligence-checklist-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'AI vendor due diligence, enterprise AI procurement checklist, AI vendor security checklist, AI vendor assessment, enterprise AI risk review',
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

const outcomeStates = [
  'Approve: controls and contracts are acceptable for planned use.',
  'Approve with conditions: gaps exist but have owners and deadlines.',
  'Reject: unresolved issues create unacceptable security, legal, or delivery risk.',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI vendor due diligence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI vendor due diligence is the structured review of a vendor’s security, privacy, commercial viability, model risk, integration capability, and compliance readiness before pilot approval or production rollout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should be involved in AI vendor due diligence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Procurement, security, legal, architecture, data governance, and the business owner should all be involved. A single-team review misses risks that show up later in rollout or contract negotiation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are common AI vendor due diligence red flags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common red flags include vague answers on training usage, missing SSO or audit logging, unclear subprocessors, weak deletion/export terms, and pressure to launch before pilot evidence and control sign-off are complete.',
      },
    },
  ],
}

export default function AIVendorDueDiligenceChecklistPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-04"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_54%_82%,rgba(251,191,36,0.05),transparent_28%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise procurement playbook
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI vendor due diligence，
                  <span className="brand-gradient-text block">别把 demo 当审计报告。</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  A practical enterprise AI vendor due diligence checklist covering security, legal, procurement, architecture, data governance, and rollout readiness. 这页保留原来的 checklist、FAQ schema、RelatedLinks、canonical 和内部链接，只统一到当前浅色 Stripe-ish UI。
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#checklist" className="btn-brand inline-flex items-center gap-2">
                    查看尽调清单
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary inline-flex items-center gap-2">
                    打开 shortlist scorecard
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 max-w-3xl">
                  <div className="page-card bg-white/90 p-4">
                    <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">6</div>
                    <div className="text-sm text-slate-600">workstreams to verify</div>
                  </div>
                  <div className="page-card bg-white/90 p-4">
                    <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">3</div>
                    <div className="text-sm text-slate-600">recommended outcome states</div>
                  </div>
                  <div className="page-card bg-white/90 p-4">
                    <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">5</div>
                    <div className="text-sm text-slate-600">minimum decision-pack outputs</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">Review discipline</div>
                        <div className="text-xl font-semibold text-slate-950">三种结果，别装糊涂</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Evidence first
                      </div>
                    </div>
                    <div className="space-y-3">
                      {outcomeStates.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                            <p className="text-sm leading-6 text-slate-600">{item}</p>
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

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr] mb-16">
          <div className="page-card p-8 md:p-10">
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">What this page is for</h2>
            <div className="space-y-4 text-lg leading-8 text-slate-600">
              <p>
                Most AI vendor evaluations fail for a boring reason: teams over-focus on the demo and under-focus on operations. Procurement sees pricing, security sees controls, legal sees clauses, and the business sees promised speed. If nobody ties that together, the mess shows up after signature.
              </p>
              <p>
                Use this checklist during vendor shortlisting, pilot review, and final approval. It works best when every item gets an owner, an answer, and evidence. Pair it with the{' '}
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="font-medium text-[#635bff] hover:underline">
                  enterprise AI vendor RFP template
                </Link>{' '}
                and the{' '}
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="font-medium text-[#635bff] hover:underline">
                  vendor shortlist scorecard
                </Link>{' '}
                so diligence, scoring, and approval all use the same facts.
              </p>
            </div>
          </div>

          <div className="page-card border border-sky-100 bg-sky-50/80 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-white/80">
              <ClipboardCheck className="h-5 w-5 text-[#635bff]" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Recommended outcome states</h2>
            <div className="space-y-3">
              {outcomeStates.map((item) => (
                <div key={item} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Core due diligence checklist</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              尽调不是打钩游戏，
              <span className="brand-gradient-text block">是把风险逼出水面。</span>
            </h2>
          </div>
          <div className="space-y-6">
            {workstreams.map((group, index) => (
              <div key={group.title} className="page-card p-8 md:p-10">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-500">Workstream {index + 1}</div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{group.title}</h3>
                  </div>
                  <div className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    Evidence required
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm leading-6 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2 mb-16">
          <div className="page-card border border-rose-100 bg-rose-50/80 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-100 bg-white/80">
              <AlertTriangle className="h-5 w-5 text-rose-600" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Red flags</h2>
            <div className="space-y-3">
              {redFlags.map((flag) => (
                <div key={flag} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4 text-sm leading-6 text-slate-700">
                  {flag}
                </div>
              ))}
            </div>
          </div>

          <div className="page-card p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
              <Shield className="h-5 w-5 text-[#635bff]" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Minimum decision pack</h2>
            <div className="space-y-3 mb-6">
              {deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white px-5 py-5 text-sm leading-6 text-slate-700">
              If the vendor cannot support a clean pilot, clean audit trail, and clean exit path, the problem is not your checklist. The vendor is the checklist result.
            </div>
          </div>
        </section>

        <section className="mb-16 page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Buying process</div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                真正的采购流程里，
                <span className="brand-gradient-text block">这张表该怎么用。</span>
              </h2>
              <div className="space-y-3 text-lg leading-8 text-slate-600">
                <p>Use it to filter longlist vendors before wasting pilot time.</p>
                <p>Re-run it after the pilot using actual technical and operational evidence.</p>
                <p>Turn unresolved gaps into contract conditions, not hopeful Slack messages.</p>
                <p>Get one final cross-functional sign-off before production access is granted.</p>
              </div>
            </div>
            <div className="space-y-4">
              <Link
                href="/enterprise-ai-vendor-shortlist-scorecard-2026"
                className="btn-brand inline-flex items-center gap-2"
              >
                Review shortlist scorecard
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/enterprise-ai-vendor-rfp-template-2026"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Open RFP template
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16 page-card border border-indigo-100 bg-indigo-50/80 p-8 md:p-10">
          <div className="max-w-3xl">
            <h2 className="mb-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Need a reusable checklist for internal review?</h2>
            <p className="mb-5 text-lg leading-8 text-slate-600">
              If your team needs a version you can circulate in procurement, security, legal, and architecture review, request the downloadable checklist and use it alongside your RFP and pilot scoring pack.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:contact@sitepilot.co?subject=Downloadable%20AI%20Vendor%20Due%20Diligence%20Checklist"
                className="btn-brand inline-flex items-center gap-2"
              >
                Request downloadable checklist
              </a>
              <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-secondary inline-flex items-center gap-2">
                Open RFP template
              </Link>
              <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="btn-secondary inline-flex items-center gap-2">
                Open pilot evaluation checklist
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16 page-card p-8 md:p-10">
          <h2 className="mb-6 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Frequently asked questions</h2>
          <div className="space-y-5 text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="mb-2 font-semibold text-slate-950">What is AI vendor due diligence?</h3>
              <p>
                It is the structured review of a vendor’s security, privacy, commercial viability, model risk, integration capability, and compliance readiness before pilot approval or production rollout.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="mb-2 font-semibold text-slate-950">Who should be involved?</h3>
              <p>
                Procurement, security, legal, architecture, data governance, and the business owner. One-team diligence usually misses something expensive.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="mb-2 font-semibold text-slate-950">What are the main red flags?</h3>
              <p>
                Weak identity controls, vague training usage, unclear subprocessors, poor deletion/export commitments, and pressure to move into production before pilot evidence is complete.
              </p>
            </div>
          </div>
        </section>

        <RelatedLinks
          title="Related enterprise AI guides"
          links={[
            {
              title: 'Enterprise AI Vendor Shortlist Scorecard 2026',
              href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
              description: 'A practical scoring sheet for comparing shortlisted AI vendors after RFP and diligence review.',
              category: 'tools',
            },
            {
              title: 'Enterprise AI Vendor RFP Template 2026',
              href: '/enterprise-ai-vendor-rfp-template-2026',
              description: 'Use an evidence-first RFP to collect clean answers before shortlist scoring and pilot review.',
              category: 'guide',
            },
            {
              title: 'Enterprise AI Vendor Pilot Evaluation Checklist 2026',
              href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026',
              description: 'Convert diligence concerns into pilot tests, acceptance criteria, and rollback conditions.',
              category: 'tools',
            },
            {
              title: 'AI Governance Framework Enterprise 2026',
              href: '/ai-governance-framework-enterprise-2026',
              description: 'Review governance and control requirements before rollout into regulated environments.',
              category: 'guide',
            },
          ]}
        />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </main>
    </div>
  )
}
