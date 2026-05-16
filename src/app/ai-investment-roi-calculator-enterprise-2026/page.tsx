import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, DollarSign, Sparkles, Target, TrendingUp } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { metadata as pageMetadata, pageDescription, pageTitle, pageUrl } from './metadata'

export const metadata: Metadata = pageMetadata

const signals = [
  'Tie every ROI claim to a named workflow and a real cost baseline.',
  'Include implementation cost, change effort, and ongoing support spend.',
  'Model payback by scenario, not by marketing-grade averages.',
  'Use the result to decide invest, delay, or reject.',
]

const assumptions = [
  ['Labor cost baseline', 'What the current process already costs.' ],
  ['Adoption rate', 'How many people will actually use the tool.' ],
  ['Efficiency gain', 'How much time or work the tool truly removes.' ],
  ['Operating cost', 'Licensing, support, and rollout spend.'],
]

export default function EnterpriseAIRoiCalculatorPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6"><Sparkles className="h-4 w-4 text-[#635bff]" /> Financial case builder</div>
              <h1 className="page-title text-5xl md:text-7xl mb-6">Enterprise AI investment ROI calculator 2026,<span className="brand-gradient-text block">for the money question.</span></h1>
              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">An enterprise AI investment ROI calculator is a financial model used to compare expected savings, implementation cost, payback timing, adoption assumptions, and support burden before funding approval. It helps teams decide whether a proposed AI initiative is worth the capital, operational, and change-management risk.</p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-tools" className="btn-brand inline-flex items-center gap-2">Explore AI tools <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="btn-secondary">Shortlist scorecard</Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">{signals.map((item) => <div key={item} className="page-card flex items-start gap-3 px-4 py-4"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span className="text-sm leading-6 text-slate-700">{item}</span></div>)}</div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6"><div className="page-card p-6 bg-white/95">
                <div className="flex items-center justify-between mb-6"><div><div className="text-sm text-slate-500 mb-1">ROI lens</div><div className="text-xl font-semibold text-slate-950">Spend only when payback is real</div></div><div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">CFO view</div></div>
                <div className="space-y-3">{assumptions.map(([title, note]) => <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"><div className="font-semibold text-slate-950 mb-1">{title}</div><div className="text-sm text-slate-500">{note}</div></div>)}</div>
              </div></div>
            </div>
          </div>
        </div>
      </section>
      <main className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="page-card-glow p-1.5"><div className="page-card rounded-[1.6rem] p-7 md:p-8">
            <div className="page-pill mb-4">How to use it</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">ROI without assumptions is just arithmetic.</h2>
            <p className="page-lead text-lg mb-4">Use this page when you need a CFO-ready cost-benefit view for enterprise AI spend. Pair it with the vendor scorecard and decision matrix so the financial case matches the actual shortlist, not a fantasy implementation.</p>
            <p className="text-slate-600 leading-7 mb-4">Keep the chain tight with the <Link href="/enterprise-ai-vendor-shortlist-scorecard-2026" className="text-[#635bff] hover:underline font-medium">shortlist scorecard</Link>, <Link href="/ai-procurement-decision-matrix-tool-2026" className="text-[#635bff] hover:underline font-medium">decision matrix</Link>, and <Link href="/enterprise-ai-vendor-pilot-evaluation-checklist-2026" className="text-[#635bff] hover:underline font-medium">pilot checklist</Link>.</p>
            <p className="text-slate-600 leading-7">If the numbers only work with aggressive assumptions, the answer is not yes. It is slower no.</p>
          </div></div>
          <div className="space-y-4">
            <div className="page-card p-6"><div className="text-sm text-slate-500 mb-2">Decision rule</div><div className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">Model real spend before approving real spend.</div></div>
            <div className="page-card-soft p-6"><div className="text-sm text-slate-500 mb-3">ROI assumptions</div><ul className="space-y-3 text-sm text-slate-700 leading-6"><li className="flex items-start gap-3"><DollarSign className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Cost baseline and implementation burden.</span></li><li className="flex items-start gap-3"><TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Efficiency gain and payback timing.</span></li><li className="flex items-start gap-3"><Target className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Investment decision aligned to the business case.</span></li></ul></div>
          </div>
        </section>
      </main>
    </div>
  )
}
