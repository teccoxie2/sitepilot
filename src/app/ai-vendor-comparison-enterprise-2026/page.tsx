import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles, Target } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import ComparisonTool from './ComparisonTool'

const pageTitle = 'AI Vendor Comparison Tool 2026 | SitePilot'
const pageDescription =
  'Compare two AI vendors side by side on workflow fit, risk, cost, support, and proof, then get a live recommendation that shows which one should win.'
const pageUrl = 'https://sitepilot.co/ai-vendor-comparison-enterprise-2026'

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

const launchNotes = [
  'Compare two vendors in the browser.',
  'See the winner change as scores change.',
  'Use the same criteria across every deal.',
  'Keep the recommendation explicit.',
]

export default function EnterpriseAIVendorComparisonPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        data={{
          headline: pageTitle,
          description: pageDescription,
          url: pageUrl,
          datePublished: '2026-05-03',
          dateModified: '2026-05-03',
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative border-b border-slate-200/80">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                Interactive vendor comparison
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI vendor comparison tool,
                <span className="brand-gradient-text block">built to show the winner live.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                Compare two AI vendors side by side on workflow fit, risk, cost, support, and implementation proof. Enter scores and the tool will tell you which vendor wins, why it wins, and whether the deal should be approved.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="#comparison-tool" className="btn-brand">
                  Open comparison tool
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/tools/evaluation-tools-2026" className="btn-secondary">
                  Back to hub
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {launchNotes.map((note) => (
                  <div key={note} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 shadow-sm backdrop-blur-xl">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
                    <span className="text-sm text-slate-700">{note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-6 bg-white/95">
                  <div className="flex items-center justify-between mb-6 gap-4">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">What this tool does</div>
                      <div className="text-xl font-semibold text-slate-950">Winner, risk, and recommendation</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Live output
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Compare', 'Use the same scoring model for both vendors.'],
                      ['Rank', 'See the total score update instantly.'],
                      ['Explain', 'Read the reason for the current winner.'],
                      ['Decide', 'Approve, approve with conditions, or reject.'],
                    ].map(([title, note]) => (
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

      <main className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
        <ComparisonTool />

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 mb-4">
            <Target className="h-4 w-4 text-indigo-600" />
            Tool focus
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">This page is a working comparison tool, not an article.</h2>
          <p className="text-base md:text-lg leading-7 text-slate-600 max-w-3xl">
            Change the vendor names and scores, and the page will re-rank them instantly. That gives buyers a live recommendation they can use during vendor review.
          </p>
        </section>
      </main>
    </div>
  )
}
