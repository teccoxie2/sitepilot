import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles, Target, Wrench } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { metadata as pageMetadata } from './metadata'

export const metadata: Metadata = pageMetadata

const tools = [
  ['Comparison guide', '/enterprise-ai-vendor-comparison-guide-2026'],
  ['Vendor RFP template', '/enterprise-ai-vendor-rfp-template-2026'],
  ['Due diligence checklist', '/ai-vendor-due-diligence-checklist-enterprise-2026'],
  ['Shortlist scorecard', '/enterprise-ai-vendor-shortlist-scorecard-2026'],
  ['Contract red flags', '/ai-vendor-contract-red-flags-2026'],
  ['Decision matrix', '/ai-procurement-decision-matrix-tool-2026'],
  ['Evidence benchmark', '/ai-procurement-evidence-benchmark-2026'],
  ['Implementation cost + ROI', '/ai-implementation-cost-calculator-enterprise-2026'],
  ['Pilot evaluation checklist', '/enterprise-ai-vendor-pilot-evaluation-checklist-2026'],
]

const notes = [
  'Start with comparison, then force every claim into evidence.',
  'Move down the chain only after the previous step has real evidence.',
  'Use the hub to keep the process consistent across vendors.',
  'Do not let any single tool become the whole process.',
]

export default function EvaluationToolsHubPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="custom"
        title="AI Vendor Evaluation Tools: RFP, Due Diligence, Scorecard & Decision Matrix (2026)"
        description={pageMetadata.description as string}
        url="https://sitepilot.co/tools/evaluation-tools-2026"
        data={{ '@type': 'CollectionPage' }}
      />
      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6"><Sparkles className="h-4 w-4 text-[#635bff]" /> Evaluation hub</div>
              <h1 className="page-title text-5xl md:text-7xl mb-6">AI vendor evaluation tools 2026,<span className="brand-gradient-text block">for approve-or-reject decisions.</span></h1>
              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">AI vendor evaluation tools are approval-stage buyer controls used to review RFP responses, verify diligence evidence, score finalists, test pilot conditions, and catch contract risk before signature. This hub gives procurement, security, and business owners one BOFU path from comparison to approve, hold, or reject.</p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-procurement-decision-matrix-tool-2026" className="btn-brand inline-flex items-center gap-2">Run the decision matrix <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-secondary">RFP template</Link>
                <Link href="/ai-vendor-contract-red-flags-2026" className="btn-secondary">Contract red flags</Link>
                <Link href="/ai-procurement-decision-matrix-tool-2026" className="btn-secondary">Decision matrix</Link>
                <Link href="/apply-for-audit" className="btn-secondary">Request an audit</Link>
              </div>
              <p className="mb-6 text-xs leading-5 text-slate-500">
                Editorial owner: SitePilot Team · procurement workflow checked 2026-08-14 · <Link href="/methodology" className="text-[#635bff] hover:underline">open evidence methodology</Link>
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">{notes.map((item) => <div key={item} className="page-card flex items-start gap-3 px-4 py-4"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span className="text-sm leading-6 text-slate-700">{item}</span></div>)}</div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6"><div className="page-card p-6 bg-white/95">
                <div className="flex items-center justify-between mb-6"><div><div className="text-sm text-slate-500 mb-1">Core flow</div><div className="text-xl font-semibold text-slate-950">One path, no detours</div></div><div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">Hub</div></div>
                <div className="space-y-3">{tools.map(([title, href]) => <Link key={title} href={href} className="block rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4 hover:border-indigo-200 transition-colors"><div className="font-semibold text-slate-950 mb-1">{title}</div><div className="text-sm text-slate-500">Open tool</div></Link>)}</div>
              </div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="page-card-glow p-1.5"><div className="page-card rounded-[1.6rem] p-7 md:p-8">
            <div className="page-pill mb-4">How to use it</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Keep the whole vendor decision loop together.</h2>
            <p className="page-lead text-lg mb-4">Use this page as the top-level entry point for procurement, security, and business stakeholders. It keeps the core BOFU assets in one place so the team does not wander off into generic content.</p>
            <p className="text-slate-600 leading-7 mb-4">The sequence should stay consistent: <Link href="/enterprise-ai-vendor-comparison-guide-2026" className="text-[#635bff] hover:underline font-medium">comparison</Link>, <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-[#635bff] hover:underline font-medium">RFP</Link>, <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-[#635bff] hover:underline font-medium">diligence</Link>, <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-[#635bff] hover:underline font-medium">scorecard</Link>, <Link href="/ai-vendor-contract-red-flags-2026" className="text-[#635bff] hover:underline font-medium">contract review</Link>, <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="text-[#635bff] hover:underline font-medium">pilot</Link>, then <Link href="/ai-procurement-decision-matrix-tool-2026" className="text-[#635bff] hover:underline font-medium">decision matrix</Link>.</p>
            <p className="text-slate-600 leading-7">If any step disappears, the process gets sloppy fast. This hub is here to stop that and keep topical authority tied to a real buyer workflow instead of a random tool list.</p>
          </div></div>
          <div className="space-y-4">
            <div className="page-card p-6"><div className="text-sm text-slate-500 mb-2">Rule</div><div className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">Keep the buyer path linear.</div></div>
            <div className="page-card-soft p-6"><div className="text-sm text-slate-500 mb-3">Tools inside</div><ul className="space-y-3 text-sm text-slate-700 leading-6"><li className="flex items-start gap-3"><Wrench className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Practical, evidence-first procurement tools.</span></li><li className="flex items-start gap-3"><Target className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Designed for final decisions, not discovery theater.</span></li></ul></div>
          </div>
        </section>
      </section>
    </div>
  )
}
