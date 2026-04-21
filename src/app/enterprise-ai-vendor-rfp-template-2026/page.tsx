import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ClipboardList, FileCheck2, Shield, Sparkles, Target, TriangleAlert } from 'lucide-react'
import RelatedLinks from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Vendor RFP Template 2026 | SitePilot'
const pageDescription =
  'A practical enterprise AI vendor RFP template for procurement, security, architecture, legal, and business teams evaluating AI vendors in 2026.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-vendor-rfp-template-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'enterprise AI vendor RFP template, AI procurement template, AI vendor questionnaire, enterprise AI buying process, AI vendor selection',
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

const checklistSteps = [
  'Keep the first RFP short enough that serious vendors answer it properly.',
  'Require written evidence and named owners for every response.',
  'Move unresolved claims into pilot tests, legal review, or security validation.',
  'Use the same questions across all shortlisted vendors so comparisons stay clean.',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should an enterprise AI vendor RFP include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An enterprise AI vendor RFP should cover vendor profile, supported use cases, security controls, data governance, model risk, architecture and integration, commercial terms, and decision scoring rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should review AI vendor RFP responses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Procurement, security, legal, architecture, and business owners should review responses together. AI buying breaks when each team reviews in isolation and unresolved gaps are left vague.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are common red flags in AI vendor RFP responses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common red flags include vague answers about data retention, refusal to state training usage, weak identity controls, unclear audit logging, unsupported export or deletion paths, and pressure to skip formal control review.',
      },
    },
  ],
}

export default function EnterpriseAIVendorRFPTemplatePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-04"
        modifiedDate="2026-04-04"
        authorName="SitePilot Team"
      />
      <SchemaMarkup type="custom" data={faqSchema} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_22%,#ffffff_50%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[24rem] bg-[radial-gradient(circle_at_22%_22%,rgba(99,91,255,0.05),transparent_24%),radial-gradient(circle_at_76%_26%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_50%_82%,rgba(244,114,182,0.04),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Procurement template
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Enterprise AI Vendor RFP Template 2026,
                <span className="brand-gradient-text block">for buyers who want proof.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                An enterprise AI vendor RFP template is a structured questionnaire designed to evaluate solution providers across security, data governance, and technical architecture. SitePilot’s 2026 procurement framework helps buying teams eliminate ambiguity by requesting evidence-based responses on model risk, integration capabilities, and commercial terms before moving to the pilot or contract negotiation phase.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                  Open due diligence checklist
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ai-procurement-decision-matrix-tool-2026" className="btn-secondary">
                  Procurement matrix
                </Link>
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary">
                  Shortlist scorecard
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {[
                  'Write questions once and force comparable answers.',
                  'Make evidence mandatory instead of optional gloss.',
                  'Move unresolved claims into pilot and legal review.',
                  'Use the RFP to kill ambiguity early, not to create admin theater.',
                ].map((item) => (
                  <div key={item} className="page-card flex items-start gap-3 px-4 py-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
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
                      <div className="text-sm text-slate-500 mb-1">RFP operating model</div>
                      <div className="text-xl font-semibold text-slate-950">Decision-quality questionnaire</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Evidence first
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Scope', 'Ask only what changes pilot, contract, or risk posture.'],
                      ['Ownership', 'Map every answer to procurement, security, legal, or architecture.'],
                      ['Validation', 'Convert weak answers into test cases instead of wishful thinking.'],
                      ['Selection', 'Shortlist vendors based on proof, not presentation quality.'],
                    ].map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="font-semibold text-slate-950">{title}</div>
                            <div className="text-sm text-slate-500 mt-1">{note}</div>
                          </div>
                          <ClipboardList className="h-5 w-5 shrink-0 text-indigo-500" />
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

      <main className="relative">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="page-section surface-muted">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 items-start">
              <div className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8">
                  <div className="page-pill mb-4">How to use it</div>
                  <h2 className="page-title text-3xl md:text-5xl mb-4">Short enough to answer, sharp enough to expose weak vendors.</h2>
                  <p className="page-lead text-lg mb-4">
                    Keep the first RFP short enough that good vendors will answer it properly, but sharp enough that weak vendors expose themselves fast. The goal is not paperwork volume. The goal is eliminating expensive ambiguity before pilot and contract work.
                  </p>
                  <p className="text-slate-600 leading-7 mb-4">
                    Use this template for longlist filtering, then carry the highest-risk questions into technical validation and legal review. Pair it with the{' '}
                    <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-[#635bff] hover:underline font-medium">
                      due diligence checklist
                    </Link>{' '}
                    and the{' '}
                    <Link href="/ai-procurement-decision-matrix-tool-2026" className="text-[#635bff] hover:underline font-medium">
                      procurement decision matrix
                    </Link>{' '}
                    so the RFP feeds directly into selection instead of becoming dead paperwork.
                  </p>
                  <p className="text-slate-600 leading-7">
                    If you want a buying system rather than a form, connect this page to the{' '}
                    <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-[#635bff] hover:underline font-medium">
                      shortlist scorecard
                    </Link>{' '}
                    and the{' '}
                    <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="text-[#635bff] hover:underline font-medium">
                      pilot evaluation checklist
                    </Link>{' '}
                    before anyone talks about production approval.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="page-card p-6">
                  <div className="text-sm text-slate-500 mb-2">Best practice</div>
                  <div className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">Make vendors answer in writing, attach evidence, and name owners.</div>
                  <p className="text-sm text-slate-600 leading-6">Otherwise the RFP turns into decorative admin theater.</p>
                </div>
                <div className="page-card-soft p-6">
                  <div className="text-sm text-slate-500 mb-3">Execution checklist</div>
                  <ul className="space-y-3 text-sm text-slate-700 leading-6">
                    {checklistSteps.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-10">
              <div className="page-pill mb-4">Core sections</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">The seven blocks every serious AI RFP should cover.</h2>
              <p className="page-lead text-lg">
                These sections keep procurement, security, privacy, architecture, and commercial review aligned around the same reality instead of separate wish lists.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {sections.map((section, index) => (
                <div key={section.title} className="page-card-glow p-1.5">
                  <div className="page-card rounded-[1.6rem] p-7 md:p-8 h-full">
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">0{index + 1}</div>
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-slate-950">{section.title}</h3>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 whitespace-nowrap">
                        Required
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {section.questions.map((question) => (
                        <li key={question} className="flex items-start gap-3 text-slate-600 leading-7">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#635bff] flex-shrink-0" />
                          <span>{question}</span>
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
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="page-card p-7 md:p-8">
                <div className="page-pill mb-4">Suggested scoring rules</div>
                <h2 className="page-title text-3xl md:text-5xl mb-4">Separate hard-stop controls from weighted comparisons.</h2>
                <ul className="space-y-4 text-slate-600 leading-7">
                  {scoringRules.map((rule) => (
                    <li key={rule} className="flex items-start gap-3">
                      <Target className="mt-1 h-4 w-4 shrink-0 text-indigo-500" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="page-card-soft border border-rose-100 p-7 md:p-8">
                <div className="page-pill mb-4">
                  <TriangleAlert className="h-4 w-4 text-rose-500" />
                  Red flags
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">These answers should make you suspicious fast.</h2>
                <ul className="space-y-4 text-slate-600 leading-7">
                  {redFlags.map((flag) => (
                    <li key={flag} className="flex items-start gap-3">
                      <span className="mt-1 text-rose-500 font-bold">⚠</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="max-w-6xl mx-auto px-4">
            <div className="page-card-glow p-8 md:p-12 surface-muted">
              <div className="max-w-3xl">
                <div className="page-pill mb-4">
                  <Shield className="h-4 w-4 text-[#635bff]" />
                  Recommended buying flow
                </div>
                <h2 className="page-title text-3xl md:text-5xl mb-4">RFP, then diligence, then scorecard, then pilot.</h2>
                <ol className="space-y-3 text-slate-600 leading-7 list-decimal list-inside">
                  <li>Use the RFP to narrow the field to vendors worth piloting.</li>
                  <li>Turn unresolved answers into pilot test cases and contract questions.</li>
                  <li>Score with procurement, security, legal, and business owners in the same room.</li>
                  <li>Do not grant production approval until controls and exit terms are explicit.</li>
                </ol>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                    Open due diligence checklist
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary">
                    Review shortlist scorecard
                  </Link>
                  <Link href="/enterprise-ai-vendor-pricing-guide-2026" className="btn-secondary">
                    Review pricing guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section surface-muted">
          <div className="max-w-6xl mx-auto px-4">
            <div className="page-card p-7 md:p-8">
              <div className="page-pill mb-4">Reusable version</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">Need this in a working format for your team?</h2>
              <p className="page-lead text-lg mb-6 max-w-3xl">
                If you want this RFP in a reusable working format instead of copying questions out of a web page, request the downloadable version and use it with your procurement, security, legal, and architecture reviewers.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:contact@sitepilot.co?subject=Downloadable%20AI%20Vendor%20RFP%20Template"
                  className="btn-brand inline-flex items-center gap-2"
                >
                  Request downloadable RFP template
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary">
                  Open shortlist scorecard
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="max-w-6xl mx-auto px-4">
            <div className="page-card-glow p-8 md:p-12 surface-muted">
              <div className="max-w-3xl">
                <div className="page-pill mb-4">FAQ</div>
                <h2 className="page-title text-3xl md:text-5xl mb-4">The questions that matter after the sales deck ends.</h2>
                <div className="space-y-5 text-slate-600 leading-7">
                  <p><strong className="text-slate-900">What should an enterprise AI vendor RFP include?</strong> Vendor profile, supported use cases, security controls, data governance, model risk, architecture and integration, commercial terms, and decision scoring rules.</p>
                  <p><strong className="text-slate-900">Who should review AI vendor RFP responses?</strong> Procurement, security, legal, architecture, and business owners should review responses together. Splitting review across silos is how weak vendors sneak through.</p>
                  <p><strong className="text-slate-900">What are the biggest red flags?</strong> Vague training usage, weak identity controls, unclear deletion and export terms, marketing-only security answers, and pressure to skip formal control review.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section surface-muted">
          <div className="max-w-6xl mx-auto px-4">
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
                  title: 'Enterprise AI Vendor Shortlist Scorecard 2026',
                  href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
                  description: 'A practical scorecard for ranking shortlisted AI vendors after RFP and diligence review.',
                  category: 'tools',
                },
                {
                  title: 'Enterprise AI Vendor Pricing Guide 2026',
                  href: '/enterprise-ai-vendor-pricing-guide-2026',
                  description: 'Understand enterprise AI pricing models, pilot costs, and contract traps before shortlist decisions.',
                  category: 'guide',
                },
                {
                  title: 'Enterprise AI Vendor Pilot Evaluation Checklist 2026',
                  href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026',
                  description: 'Turn unresolved RFP answers into measurable pilot tests before production approval.',
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
          </div>
        </section>
      </main>
    </div>
  )
}
