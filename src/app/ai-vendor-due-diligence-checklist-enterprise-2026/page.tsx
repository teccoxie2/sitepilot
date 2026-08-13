import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileSearch, Shield, Sparkles, Target } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI Vendor Due Diligence Checklist (2026): Security, Data Rights, Pricing, Contract Risk'
const pageDescription =
  'Use this AI vendor due diligence checklist to verify security controls, data rights, pricing, architecture, and contract risk before shortlist approval, legal review, or procurement sign-off.'
const pageUrl = 'https://sitepilot.co/ai-vendor-due-diligence-checklist-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, type: 'article' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const checks = [
  'Confirm the vendor can prove identity controls, audit logging, and role boundaries in writing.',
  'Ask whether customer data, prompts, files, or telemetry are used for model training or product tuning.',
  'Verify retention, deletion, export, and backup behavior before anyone treats the platform as safe.',
  'Document integration dependencies, vendor lock-in risks, and the operational owner for every control gap.',
]

const diligenceAreas = [
  {
    title: 'Security and access',
    note: 'SSO, MFA, RBAC, audit logs, incident response, admin review paths.',
  },
  {
    title: 'Data governance',
    note: 'Training usage, retention, deletion, export, residency, subprocessors.',
  },
  {
    title: 'Architecture and reliability',
    note: 'Deployment model, latency, rollback, rate limits, failure handling.',
  },
  {
    title: 'Commercial discipline',
    note: 'Pricing model, overages, support minimums, renewal and exit terms.',
  },
]

const procurementQuestions = [
  'Can you contractually confirm whether prompts, uploaded files, outputs, logs, and metadata are excluded from model training by default?',
  'What are the exact retention, deletion, backup, and account-closure timelines for customer content and telemetry?',
  'Which controls are native today for SSO, MFA, RBAC, audit logs, API tokens, and admin approval workflows?',
  'What happens to workflows, prompts, evaluation history, and exported data if we terminate in year one?',
  'Which price levers can change after signature: seats, usage, model tiers, support, rate limits, or overage terms?',
]

const diligenceSequence = [
  ['1. Validate the claim', 'Ask the vendor to answer in plain language first so the real control or gap is visible.'],
  ['2. Request proof', 'Push for policy text, product screenshots, admin settings, or contract language instead of promises.'],
  ['3. Score the exposure', 'Mark the issue as pass, gap, workaround, or escalation so the shortlist stays comparable.'],
  ['4. Route the next step', 'Move clean answers to the scorecard and unresolved items to contract review or pilot conditions.'],
]

const evidenceStandards = [
  ['Security proof', 'Identity controls, logs, approvals, and incident ownership should be documented and reviewable.'],
  ['Data-rights proof', 'Training usage, retention, deletion, export, and residency need explicit written confirmation.'],
  ['Commercial proof', 'Pricing mechanics, support limits, renewal logic, and exit terms should be contract-ready before approval.'],
]

const nextStepLinks = [
  { href: '/enterprise-ai-vendor-shortlist-scorecard-2026', title: 'Shortlist scorecard', note: 'Move validated answers into a weighted finalist ranking.' },
  { href: '/ai-vendor-contract-red-flags-2026', title: 'Contract red flags', note: 'Escalate unresolved commercial or legal exposure before signature.' },
  { href: '/enterprise-ai-vendor-pilot-evaluation-checklist-2026', title: 'Pilot evaluation checklist', note: 'Turn open diligence items into test conditions instead of assumptions.' },
  { href: '/ai-procurement-decision-matrix-tool-2026', title: 'Decision matrix', note: 'Convert the full buyer record into an approve, hold, or reject call.' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: 'Get outside help if the review is stalling or the evidence is weak.' },
]

export default function AIVendorDueDiligenceChecklistPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6"><Sparkles className="h-4 w-4 text-[#635bff]" /> Enterprise diligence checklist</div>
              <h1 className="page-title text-5xl md:text-7xl mb-6">AI vendor due diligence checklist 2026,<span className="brand-gradient-text block">for buyers who need proof.</span></h1>
              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                An AI vendor due diligence checklist is a buyer-side review framework used to verify security controls, data rights, architecture, pricing, and contract risk before shortlist approval or legal sign-off. Use it after initial comparison so weak vendors are removed on evidence instead of sales confidence.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-brand inline-flex items-center gap-2">Open shortlist scorecard <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-secondary">RFP template</Link>
                <Link href="/ai-vendor-contract-red-flags-2026" className="btn-secondary">Contract red flags</Link>
                <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="btn-secondary">Pilot checklist</Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {checks.map((item) => <div key={item} className="page-card flex items-start gap-3 px-4 py-4"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span className="text-sm leading-6 text-slate-700">{item}</span></div>)}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6"><div className="page-card p-6 bg-white/95">
                <div className="flex items-center justify-between mb-6"><div><div className="text-sm text-slate-500 mb-1">Why this exists</div><div className="text-xl font-semibold text-slate-950">Stop bad vendors early</div></div><div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">BOFU</div></div>
                <div className="space-y-3">{diligenceAreas.map((row) => <div key={row.title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"><div className="font-semibold text-slate-950 mb-1">{row.title}</div><div className="text-sm text-slate-500">{row.note}</div></div>)}</div>
              </div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] mb-16">
          <div className="page-card border border-slate-200 bg-slate-50/70 p-6 md:p-7 lg:col-span-2">
            <div className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">Questions procurement should send before the next call</div>
            <div className="grid gap-3 md:grid-cols-2">
              {procurementQuestions.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="page-card-glow p-1.5"><div className="page-card rounded-[1.6rem] p-7 md:p-8">
            <div className="page-pill mb-4">How to use it</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Ask hard questions before the vendor gets comfortable.</h2>
            <p className="page-lead text-lg mb-4">This checklist sits between the <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-[#635bff] hover:underline font-medium">RFP</Link> and the <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-[#635bff] hover:underline font-medium">final scorecard</Link>. It gives procurement, security, and business owners one shared review layer so every answer gets tested against evidence instead of sales language.</p>
            <p className="text-slate-600 leading-7 mb-4">The buyer path should stay consistent: <Link href="/methodology" className="text-[#635bff] hover:underline font-medium">methodology</Link>, <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-[#635bff] hover:underline font-medium">RFP</Link>, diligence, <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-[#635bff] hover:underline font-medium">shortlist scorecard</Link>, <Link href="/ai-vendor-contract-red-flags-2026" className="text-[#635bff] hover:underline font-medium">contract review</Link>, <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="text-[#635bff] hover:underline font-medium">pilot validation</Link>, then <Link href="/ai-procurement-decision-matrix-tool-2026" className="text-[#635bff] hover:underline font-medium">decision matrix</Link>. That loop keeps teams from treating diligence as an isolated worksheet.</p>
            <p className="text-slate-600 leading-7">If a vendor cannot answer clearly here, do not assume the pilot will rescue the deal. Move unresolved terms into contract review, turn operational uncertainty into pilot test conditions, and keep weak answers visible in the final score.</p>
          </div></div>
          <div className="space-y-4">
            <div className="page-card p-6"><div className="text-sm text-slate-500 mb-2">Rule</div><div className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">Evidence beats confidence every time.</div><p className="text-sm text-slate-600 leading-6">If the answer is vague, score it as risk until proven otherwise.</p></div>
            <div className="page-card-soft p-6"><div className="text-sm text-slate-500 mb-3">Diligence dimensions</div><ul className="space-y-3 text-sm text-slate-700 leading-6"><li className="flex items-start gap-3"><Shield className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Security and access controls</span></li><li className="flex items-start gap-3"><FileSearch className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Data handling and privacy</span></li><li className="flex items-start gap-3"><Target className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Architecture, integration, and rollout risk</span></li></ul></div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] mb-16">
          <div className="page-card-glow p-1.5"><div className="page-card rounded-[1.6rem] p-7 md:p-8">
            <div className="page-pill mb-4">Review sequence</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Run diligence like a gate, not a meeting.</h2>
            <p className="page-lead text-lg mb-6">Strong teams do not collect answers and hope someone remembers them later. They force each claim into proof, mark unresolved risk clearly, and route every outcome to the next buyer control.</p>
            <div className="grid gap-4">
              {diligenceSequence.map(([title, note]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-5">
                  <div className="font-semibold text-slate-950 mb-2">{title}</div>
                  <div className="text-sm leading-6 text-slate-600">{note}</div>
                </div>
              ))}
            </div>
          </div></div>
          <div className="space-y-4">
            <div className="page-card p-6 md:p-7">
              <div className="text-sm text-slate-500 mb-3">What counts as enough evidence</div>
              <div className="space-y-3">
                {evidenceStandards.map(([title, note]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                    <div className="font-semibold text-slate-950 mb-1">{title}</div>
                    <div className="text-sm leading-6 text-slate-600">{note}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="page-card-soft p-6">
              <div className="text-sm text-slate-500 mb-2">Buyer reminder</div>
              <p className="text-sm leading-6 text-slate-700">A clean diligence pass does not mean the vendor wins. It means the vendor has earned the right to be compared fairly in the <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-[#635bff] hover:underline font-medium">shortlist scorecard</Link> and challenged again in the <Link href="/ai-procurement-decision-matrix-tool-2026" className="text-[#635bff] hover:underline font-medium">decision matrix</Link>.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="page-card p-7 md:p-8">
            <div className="page-pill mb-4">Next step</div>
            <h2 className="page-title text-3xl md:text-4xl mb-4">Keep the buyer flow moving after diligence.</h2>
            <p className="text-slate-600 leading-7 mb-6">Once the checklist is complete, the team should either move validated evidence into ranking, escalate unresolved risk into legal review, or convert open operational questions into pilot conditions. Do not let the work disappear into notes.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-brand inline-flex items-center gap-2">Open shortlist scorecard <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/apply-for-audit" className="btn-secondary">Talk to SitePilot</Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {nextStepLinks.map((item) => (
              <Link key={item.href} href={item.href} className="page-card rounded-[1.5rem] p-6 hover:border-indigo-200 transition-colors">
                <div className="font-semibold text-slate-950 mb-2">{item.title}</div>
                <div className="text-sm leading-6 text-slate-600">{item.note}</div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}
