import { normalizeMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, BarChart3, Sparkles, Target, Trophy } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Vendor Shortlist Scorecard 2026 | SitePilot'
const pageDescription =
  'An enterprise AI vendor shortlist scorecard for ranking finalists across fit, security, governance, pricing, and rollout risk before final approval.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-vendor-shortlist-scorecard-2026'

const metadataConfig: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, type: 'article' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
};

export const metadata: Metadata = normalizeMetadata(metadataConfig);
const dimensions = [
  ['Business fit', 'Does the tool remove a real workflow bottleneck?'],
  ['Security and governance', 'SSO, MFA, RBAC, logs, retention, and deletion.'],
  ['Architecture and integration', 'Can it fit the stack without brittle glue?'],
  ['Commercial risk', 'Pricing, overages, renewal, exit, and support terms.'],
  ['Rollout readiness', 'Can the team deploy and adopt it without chaos?'],
]

const guidance = [
  'Use the same rubric across every finalist.',
  'Separate hard-stop issues from weighted differentiators.',
  'Score evidence, not demo confidence.',
  'Do not approve a vendor until the owner can defend the number.',
]

export default function EnterpriseAIVendorShortlistScorecardPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />
      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6"><Sparkles className="h-4 w-4 text-[#635bff]" /> Final ranking tool</div>
              <h1 className="page-title text-5xl md:text-7xl mb-6">Enterprise AI vendor shortlist scorecard 2026,<span className="brand-gradient-text block">for the final decision.</span></h1>
              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">An enterprise AI vendor shortlist scorecard is a weighted evaluation sheet used after due diligence and pilot testing to rank finalists on business fit, security, governance, pricing, rollout risk, and implementation readiness before final approval. It turns vendor noise into a defendable purchase decision.</p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="btn-brand inline-flex items-center gap-2">Open diligence checklist <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/enterprise-ai-vendor-rfp-template-2026" className="btn-secondary">RFP template</Link>
                <Link href="/ai-vendor-contract-red-flags-2026" className="btn-secondary">Contract red flags</Link>
                <Link href="/ai-procurement-decision-matrix-tool-2026" className="btn-secondary">Decision matrix</Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">{guidance.map((item) => <div key={item} className="page-card flex items-start gap-3 px-4 py-4"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span className="text-sm leading-6 text-slate-700">{item}</span></div>)}</div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6"><div className="page-card p-6 bg-white/95">
                <div className="flex items-center justify-between mb-6"><div><div className="text-sm text-slate-500 mb-1">Score model</div><div className="text-xl font-semibold text-slate-950">Rank finalists with evidence</div></div><div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">BOFU</div></div>
                <div className="space-y-3">{dimensions.map(([title, note]) => <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"><div className="font-semibold text-slate-950 mb-1">{title}</div><div className="text-sm text-slate-500">{note}</div></div>)}</div>
              </div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="page-card-glow p-1.5"><div className="page-card rounded-[1.6rem] p-7 md:p-8">
            <div className="page-pill mb-4">How to use it</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">A scorecard is the last stop before yes or no.</h2>
            <p className="page-lead text-lg mb-4">This page sits after the RFP, diligence checklist, and pilot review. It exists to compress the decision into one weighted view so procurement, security, and business owners can agree without hand-wavy politics.</p>
            <p className="text-slate-600 leading-7 mb-4">Use the <Link href="/ai-tool-shortlist-scorecard-template-2026" className="text-[#635bff] hover:underline font-medium">template</Link> if you want a reusable framework, then pair it with the <Link href="/enterprise-ai-vendor-rfp-template-2026" className="text-[#635bff] hover:underline font-medium">RFP</Link>, <Link href="/ai-vendor-due-diligence-checklist-enterprise-2026" className="text-[#635bff] hover:underline font-medium">diligence checklist</Link>, <Link href="/ai-vendor-contract-red-flags-2026" className="text-[#635bff] hover:underline font-medium">contract review</Link>, and <Link href="/ai-procurement-decision-matrix-tool-2026" className="text-[#635bff] hover:underline font-medium">decision matrix</Link>.</p>
            <p className="text-slate-600 leading-7">If the final winner cannot justify its score in plain English, the shortlist is not done. It is just dressed up.</p>
          </div></div>
          <div className="space-y-4">
            <div className="page-card p-6"><div className="text-sm text-slate-500 mb-2">Decision rule</div><div className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">The strongest vendor is the one with the fewest unresolved trade-offs.</div></div>
            <div className="page-card-soft p-6"><div className="text-sm text-slate-500 mb-3">Weighted lens</div><ul className="space-y-3 text-sm text-slate-700 leading-6"><li className="flex items-start gap-3"><BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Use weights, not vibes.</span></li><li className="flex items-start gap-3"><Target className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Map fit against the actual business outcome.</span></li><li className="flex items-start gap-3"><Trophy className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>Choose the vendor that survives rollout.</span></li></ul></div>
          </div>
        </section>
      </section>
    </div>
  )
}
