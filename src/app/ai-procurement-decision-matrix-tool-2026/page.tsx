import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Columns3, FileText, Scale, Sparkles, Target, Workflow } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { metadata as pageMetadata, pageDescription, pageTitle, pageUrl } from './metadata'

export const metadata: Metadata = pageMetadata

const matrixRows = [
  ['Strategic fit', 'Does the vendor materially improve the business outcome the team is buying for?'],
  ['Security and governance', 'Are required controls proven, owned, and usable in the real operating model?'],
  ['Architecture and integration', 'Can the tool fit the stack without brittle workarounds or hidden dependencies?'],
  ['Commercial and contract risk', 'Do pricing, renewal, liability, and exit terms stay manageable after launch?'],
  ['Rollout readiness', 'Can the buyer deploy, govern, and adopt it without operational drag or surprise cost?'],
]

const guidance = [
  'Use the same weights across every finalist.',
  'Treat missing evidence as unresolved risk, not neutral.',
  'Separate hard blockers from weighted trade-offs.',
  'Turn the final score into an executive recommendation memo.',
]

const approvalQuestions = [
  'Which vendor still looks strongest after security, legal, and business owners score the same evidence?',
  'Where does the commercial paper weaken an otherwise strong product decision?',
  'Which gaps are true blockers versus conditions that can be remediated before signature?',
  'Can the buying team explain the outcome in plain English to leadership and finance?',
]

const decisionOutcomes = [
  {
    title: 'Approve',
    text: 'The leading vendor has the strongest weighted score and no unresolved blocker across security, legal, architecture, or rollout readiness.',
  },
  {
    title: 'Approve with conditions',
    text: 'The recommendation is directionally clear, but the buyer still needs named remediations, owner dates, or contract fixes before signature.',
  },
  {
    title: 'Hold or reject',
    text: 'The vendor may look good in demos, but the evidence, economics, or operating risk does not survive final comparison.',
  },
]

const nextStepLinks = [
  {
    href: '/enterprise-ai-vendor-rfp-template-2026',
    title: 'RFP template',
    description: 'Collect comparable vendor answers before scoring finalists.',
  },
  {
    href: '/ai-vendor-due-diligence-checklist-enterprise-2026',
    title: 'Due diligence checklist',
    description: 'Pressure-test controls, data use, governance, and vendor claims.',
  },
  {
    href: '/enterprise-ai-vendor-shortlist-scorecard-2026',
    title: 'Shortlist scorecard',
    description: 'Rank finalists before the decision matrix compresses the final call.',
  },
  {
    href: '/ai-vendor-contract-red-flags-2026',
    title: 'Contract red flags',
    description: 'Catch liability, deletion, export, and change-control risk before approval.',
  },
]

export default function AIProcurementDecisionMatrixToolPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" /> Procurement control sheet
              </div>
              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI procurement decision matrix tool 2026,
                <span className="brand-gradient-text block">for the final approval memo.</span>
              </h1>
              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                An AI procurement decision matrix is a weighted buyer tool used to compare finalists across business fit, security, architecture, commercial risk, and rollout readiness. It helps procurement, security, and budget owners convert scattered vendor evidence into an approval, conditional approval, hold, or rejection leadership can defend.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                  Open diligence checklist <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary">
                  Shortlist scorecard
                </Link>
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-secondary">
                  RFP template
                </Link>
                <Link href="/ai-vendor-contract-red-flags-2026" className="btn-secondary">
                  Contract red flags
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {guidance.map((item) => (
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
                      <div className="text-sm text-slate-500 mb-1">Matrix logic</div>
                      <div className="text-xl font-semibold text-slate-950">Rank, compare, decide</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">BOFU</div>
                  </div>
                  <div className="space-y-3">
                    {matrixRows.map(([title, note]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="font-semibold text-slate-950 mb-1">{title}</div>
                        <div className="text-sm text-slate-500">{note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] mb-6">
          <div className="page-card border border-slate-200 bg-slate-50/70 p-6 md:p-7 lg:col-span-2">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-500 mb-3">Questions the final matrix should settle</div>
            <div className="grid gap-3 md:grid-cols-2">
              {approvalQuestions.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="page-card-glow p-1.5">
            <div className="page-card rounded-[1.6rem] p-7 md:p-8">
              <div className="page-pill mb-4">How to use it</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">The matrix is the last filter before the executive memo.</h2>
              <p className="page-lead text-lg mb-4">
                Use this after the <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-[#635bff] hover:underline font-medium">RFP</Link>,{' '}
                <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-[#635bff] hover:underline font-medium">due diligence checklist</Link>,{' '}
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-[#635bff] hover:underline font-medium">shortlist scorecard</Link>, and final commercial review narrow the field to a real decision.
              </p>
              <p className="text-slate-600 leading-7 mb-4">
                This page exists to compress business fit, control evidence, contract exposure, and rollout reality into one view the buyer can defend. If the matrix cannot explain why one vendor wins, the team is not ready for approval yet.
              </p>
              <p className="text-slate-600 leading-7">
                Keep the loop tight with the <Link href="/methodology" className="text-[#635bff] hover:underline font-medium">methodology</Link>,{' '}
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-[#635bff] hover:underline font-medium">RFP template</Link>,{' '}
                <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-[#635bff] hover:underline font-medium">diligence checklist</Link>,{' '}
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-[#635bff] hover:underline font-medium">shortlist scorecard</Link>, and{' '}
                <Link href="/ai-vendor-contract-red-flags-2026" className="text-[#635bff] hover:underline font-medium">contract review</Link> so the final memo reflects evidence instead of escalation pressure.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="page-card p-6">
              <div className="text-sm text-slate-500 mb-2">Outcome</div>
              <div className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">Approve, conditionally approve, hold, or reject—nothing fuzzier.</div>
              <p className="text-sm text-slate-600 leading-6">A good matrix makes trade-offs visible before leadership has to ask for them.</p>
            </div>
            <div className="page-card-soft p-6">
              <div className="text-sm text-slate-500 mb-3">Decision dimensions</div>
              <ul className="space-y-3 text-sm text-slate-700 leading-6">
                <li className="flex items-start gap-3">
                  <Columns3 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                  <span>Weighted comparison across finalists, not isolated vendor narratives.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Workflow className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                  <span>Matches the actual buying workflow from RFP to contract review.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                  <span>Leads to a defendable executive recommendation with named conditions.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] mb-6">
          <div className="page-card p-8 md:p-10">
            <div className="max-w-4xl">
              <div className="page-pill mb-4">Decision rule</div>
              <h2 className="page-title text-3xl md:text-5xl mb-4">The winning vendor is the one with the fewest unresolved trade-offs.</h2>
              <div className="space-y-4 text-slate-600 leading-7">
                <p>
                  A decision matrix is not there to decorate the buying process. It is there to force one final comparison across the things that actually change approval risk: workflow value, control maturity, implementation reality, commercial exposure, and exit flexibility.
                </p>
                <p>
                  That means weak evidence should lower confidence, not disappear into meeting notes. If a vendor depends on future roadmap promises, contract clean-up later, or heroic change management to justify the score, the matrix should show that plainly.
                </p>
                <p>
                  The final memo should be easy to write from here: recommended vendor, score rationale, unresolved conditions, and what would change the recommendation. If that summary still feels vague, keep working the inputs before anyone signs.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="page-card-soft p-6">
              <div className="text-sm text-slate-500 mb-3">What strong buyers check</div>
              <ul className="space-y-3 text-sm text-slate-700 leading-6">
                <li className="flex items-start gap-3">
                  <Scale className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                  <span>Whether the score still holds after commercial and liability terms are added back in.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                  <span>Whether the approval memo can cite evidence, not just stakeholder preference.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                  <span>Whether unresolved conditions are named, owned, and time-bound before signature.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="page-card p-8 md:p-10">
          <div className="max-w-5xl">
            <div className="page-pill mb-4">Decision outputs</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Three outcomes the matrix should produce.</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {decisionOutcomes.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white px-5 py-5">
                  <div className="text-lg font-semibold text-slate-950 mb-2">{item.title}</div>
                  <p className="text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 page-card-glow p-1.5">
          <div className="page-card rounded-[1.6rem] p-7 md:p-8">
            <div className="page-pill mb-4">Complete the buyer loop</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Use the matrix as the endpoint, not the only artifact.</h2>
            <p className="text-slate-600 leading-7 mb-6 max-w-3xl">
              This page works best when it closes the same path the buyer already followed: gather answers, validate controls, rank finalists, clean up commercial risk, then make the final recommendation.
            </p>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {nextStepLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-3xl border border-slate-200 bg-white px-5 py-5 transition hover:border-indigo-200 hover:shadow-sm">
                  <div className="text-lg font-semibold text-slate-950 mb-2">{item.title}</div>
                  <div className="text-sm leading-6 text-slate-600">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
