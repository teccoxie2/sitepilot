import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldAlert, FileText, CheckCircle2, Scale, Target } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Vendor Contract Red Flags Before You Sign? Procurement Checklist (2026)'
const pageDescription =
  'Spot AI vendor contract red flags before signing by checking training-use language, deletion rights, export terms, security obligations, liability caps, and model-change clauses.'
const pageUrl = 'https://sitepilot.co/ai-vendor-contract-red-flags-2026'

const metadataConfig: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description:
      'Review AI vendor contract red flags before approval: training-use ambiguity, deletion weakness, export lock-in, security gaps, liability mismatch, and one-sided model changes.',
    url: pageUrl,
    type: 'article',
    siteName: 'SitePilot',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description:
      'A buyer-focused AI vendor contract checklist covering data rights, deletion, export, security, liability, and change-control language.',
  },
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
const relatedLinks = [
  {
    href: '/ai-vendor-due-diligence-checklist-enterprise-2026',
    title: 'AI Vendor Due Diligence Checklist 2026',
    description: 'Use the operational checklist alongside the contract review before pilot approval.',
    category: 'guide',
  },
  {
    href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
    title: 'Enterprise AI Vendor Shortlist Scorecard 2026',
    description: 'Score vendors using the same commercial and risk criteria.',
    category: 'tools',
  },
  {
    href: '/enterprise-ai-vendor-rfp-template-2026',
    title: 'Enterprise AI Vendor RFP Template 2026',
    description: 'Collect answers that make contract review faster and less noisy.',
    category: 'guide',
  },
  {
    href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026',
    title: 'Enterprise AI Vendor Pilot Evaluation Checklist 2026',
    description: 'Turn contract risk into pilot tests, acceptance criteria, and rollback conditions.',
    category: 'tools',
  },
  {
    href: '/methodology',
    title: 'Methodology',
    description: 'Review the SitePilot buyer-first methodology behind the content cluster.',
    category: 'guide',
  },
]

const contractRiskSections = [
  {
    title: '1. Training-use language is vague',
    body:
      'If the contract does not clearly state whether prompts, files, outputs, logs, or metadata can be used for model training, product improvement, or benchmarking, that is a red flag. “We may use service data to improve the platform” is not good enough when regulated or commercially sensitive data is involved.',
  },
  {
    title: '2. Deletion rights are soft or undefined',
    body:
      'If the vendor cannot state retention windows, backup behavior, deletion timing, and what survives account closure, the team does not really control the data lifecycle. A DPA without operational deletion detail is theater.',
  },
  {
    title: '3. Export and exit terms are weak',
    body:
      'If workflow configuration, scoring logic, prompt assets, logs, or evaluation history cannot be exported in a usable format, the vendor is selling lock-in disguised as convenience. Exit friction should be treated as a cost, not an afterthought.',
  },
  {
    title: '4. Security promises are generic',
    body:
      'Words like “enterprise-grade security” mean nothing without explicit obligations around SSO, MFA, RBAC, audit logs, incident notice, subprocessors, and breach handling windows. Procurement should score contractual controls, not sales-deck adjectives.',
  },
  {
    title: '5. Liability is misaligned with actual risk',
    body:
      'If the contract limits liability so aggressively that a data leak, outage, or compliance failure leaves the buyer carrying the real loss, the risk transfer is fake. AI vendors love upside pricing and downside disclaimers.',
  },
  {
    title: '6. Model-change rights are one-sided',
    body:
      'If the vendor can materially change models, pricing, rate limits, retention terms, or feature access without a meaningful customer remedy, the operating model is unstable. Teams buying AI capability are also buying change risk.',
  },
]

const approvalRequests = [
  'A plain-language data-use schedule covering prompts, files, logs, outputs, and training rights.',
  'A retention and deletion schedule with backup handling and closure timelines.',
  'A subprocessor list and notice process for changes.',
  'Security-control mapping for SSO, audit logs, role boundaries, and incident response.',
  'Export definitions for prompts, workflows, scores, logs, and evaluation evidence.',
  'Commercial terms covering renewal caps, support SLAs, termination rights, and change notice periods.',
]

const procurementQuestions = [
  'Can you contractually exclude prompts, uploads, outputs, and logs from model training or product tuning by default?',
  'What are the exact retention, deletion, backup, and account-closure timelines for customer data and telemetry?',
  'Which assets can we export in usable form if we exit: prompts, workflows, logs, evaluation history, and admin settings?',
  'Which security controls are obligations in the contract today, not roadmap promises in a sales deck?',
  'What customer remedy applies if model changes, pricing shifts, or feature removals materially alter the operating model?',
]

const snippetCandidates = [
  'AI vendor contract red flags usually appear in data-use clauses, deletion terms, export rights, security obligations, liability caps, and one-sided model-change language. Teams should review these terms before pilot approval or procurement sign-off because contract wording often decides whether operational and compliance risk is actually controllable.',
  'A strong AI vendor contract should define training-use boundaries, deletion timing, subprocessor visibility, audit and access controls, export rights, support obligations, and termination remedies. If those details are vague, the buyer is accepting platform and compliance risk that the sales process probably hid.',
]

export default function AIVendorContractRedFlagsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description="Checklist for reviewing AI vendor contract red flags around training use, deletion, export, security, liability, and change-control language."
        url={pageUrl}
        publishedDate="2026-04-29"
        modifiedDate="2026-05-16"
        authorName="SitePilot Team"
      />

      <section className="relative page-hero">
        <div className="page-hero-inner mx-auto max-w-7xl px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <ShieldAlert className="h-4 w-4 text-[#635bff]" />
                Procurement contract review
              </div>

              <h1 className="page-title mb-6 text-5xl md:text-7xl">
                AI vendor contract red flags before you sign?
                <span className="brand-gradient-text block">Use this procurement checklist in 2026.</span>
              </h1>

              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                An AI vendor contract review checks whether training-use rights, deletion terms, export clauses, security obligations, liability limits, and model-change remedies are explicit before approval. Use it after diligence and before signature so the commercial paper matches the real operational, legal, and rollout risk.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                  Open due diligence checklist
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary inline-flex items-center gap-2">
                  Review shortlist scorecard
                </Link>
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-secondary inline-flex items-center gap-2">
                  Open RFP template
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 max-w-3xl">
                <div className="page-card bg-white/90 p-4">
                  <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">6</div>
                  <div className="text-sm text-slate-600">contract risk areas</div>
                </div>
                <div className="page-card bg-white/90 p-4">
                  <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">5</div>
                  <div className="text-sm text-slate-600">related decision pages</div>
                </div>
                <div className="page-card bg-white/90 p-4">
                  <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">BOFU</div>
                  <div className="text-sm text-slate-600">approval-stage framing</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card bg-white/95 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="mb-1 text-sm text-slate-500">What to score first</div>
                      <div className="text-xl font-semibold text-slate-950">Paper beats demo when the paper is clean.</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Evidence first
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Training-use and retention language',
                      'Deletion, export, and exit rights',
                      'Security, liability, and change control',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                          <p className="text-sm leading-6 text-slate-600">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <FileText className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                      <p className="text-sm leading-6 text-slate-600">
                        If the clause set is vague, the risk is not vague. It just gets pushed onto the buyer after signature.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-14 md:py-18">
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] mb-16">
          <div className="page-card border border-slate-200 bg-slate-50/70 p-6 md:p-7 lg:col-span-2">
            <div className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">Questions procurement should send before legal redlines</div>
            <div className="grid gap-3 md:grid-cols-2">
              {procurementQuestions.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="page-card-glow p-1.5">
            <div className="page-card rounded-[1.6rem] p-7 md:p-8">
              <div className="page-pill mb-4">How to use it</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">Contract review is the buyer&apos;s last clean checkpoint.</h2>
              <p className="page-lead text-lg mb-4">
                Use this page after the <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-[#635bff] hover:underline font-medium">RFP</Link> and <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-[#635bff] hover:underline font-medium">diligence checklist</Link>, then carry the unresolved terms into the <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-[#635bff] hover:underline font-medium">shortlist scorecard</Link> and <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="text-[#635bff] hover:underline font-medium">pilot checklist</Link>. That keeps commercial risk visible instead of letting it disappear between procurement, legal, and rollout owners.
              </p>
              <p className="text-slate-600 leading-7 mb-4">
                If the contract language is vague, score it as unresolved risk until the vendor fixes the clause or accepts a buyer-friendly remedy. Signature should follow clarity, not pressure.
              </p>
              <p className="text-slate-600 leading-7">
                The clean path is <Link href="/methodology" className="text-[#635bff] hover:underline font-medium">methodology</Link> to <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-[#635bff] hover:underline font-medium">RFP</Link> to <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-[#635bff] hover:underline font-medium">diligence</Link> to <Link href="/ai-vendor-contract-red-flags-2026" className="text-[#635bff] hover:underline font-medium">contract review</Link> to <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="text-[#635bff] hover:underline font-medium">pilot validation</Link> to <Link href="/ai-procurement-decision-matrix-tool-2026" className="text-[#635bff] hover:underline font-medium">decision matrix</Link>.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="page-card p-6">
              <div className="text-sm text-slate-500 mb-2">Decision rule</div>
              <div className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">If a clause changes the operating risk, it needs explicit language or a remedy.</div>
              <p className="text-sm text-slate-600 leading-6">Do not let the buyer absorb risk that the vendor refuses to define in writing.</p>
            </div>
            <div className="page-card-soft p-6">
              <div className="text-sm text-slate-500 mb-3">Contract review lenses</div>
              <ul className="space-y-3 text-sm text-slate-700 leading-6">
                <li className="flex items-start gap-3"><FileText className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Data use, retention, deletion, and export rights</span></li>
                <li className="flex items-start gap-3"><Scale className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Liability allocation, remedies, and change control</span></li>
                <li className="flex items-start gap-3"><Target className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Whether the paper supports the rollout model you plan to run</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="page-card p-8 md:p-10">
          <div className="max-w-4xl space-y-10">
            <div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">The contract red flags that matter</h2>
              <div className="space-y-6">
                {contractRiskSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="mb-2 text-xl font-semibold text-slate-950">{section.title}</h3>
                    <p className="text-base leading-8 text-slate-700">{section.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">What to request before approval</h2>
              <div className="space-y-4">
                {approvalRequests.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-indigo-500" />
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Recommended snippet candidates</h2>
              <div className="space-y-4">
                {snippetCandidates.map((item) => (
                  <p key={item} className="text-base leading-8 text-slate-700">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 page-card border border-slate-200 bg-slate-50/70 p-8 md:p-10">
          <div className="max-w-3xl">
            <h2 className="mb-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Use this page with the diligence stack</h2>
            <p className="mb-5 text-lg leading-8 text-slate-600">
              Contract red flags are only useful when they flow into due diligence, shortlist scoring, pilot testing, and the final decision memo. Otherwise you have a clever note, not a controlled buying process.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                Open due diligence checklist
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="btn-secondary inline-flex items-center gap-2">
                Open pilot evaluation checklist
              </Link>
              <Link href="/ai-procurement-decision-matrix-tool-2026" className="btn-secondary inline-flex items-center gap-2">
                Open decision matrix
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-6 max-w-3xl">
            <div className="page-pill mb-4">Related enterprise AI guides</div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">Close the loop from contract terms to rollout control.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="page-card p-5 transition-transform hover:-translate-y-0.5">
                <div className="mb-2 text-sm uppercase tracking-[0.18em] text-slate-500">{link.category ?? 'guide'}</div>
                <div className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{link.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}
