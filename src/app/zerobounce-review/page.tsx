import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ClipboardCheck, MailCheck, ShieldCheck, Sparkles, XCircle } from 'lucide-react'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import PartnerLink from '@/components/PartnerLink'
import SchemaMarkup from '@/components/SchemaMarkup'
import { normalizeMetadata } from '@/lib/seo'

const pageUrl = 'https://sitepilot.co/zerobounce-review'
const metadataConfig: Metadata = {
  title: 'ZeroBounce Review: Email Verification Costs and Workflow Fit',
  description:
    'A desk-based ZeroBounce review covering published email verification pricing, list-cleaning workflow fit, and what to verify before migration.',
  keywords: 'ZeroBounce review, ZeroBounce pricing, email verification, email list cleaning, email deliverability tools',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'ZeroBounce Review: Email Verification Costs and Workflow Fit',
    description: 'Assess ZeroBounce as a list-cleaning companion to email marketing platforms.',
    type: 'article',
    url: pageUrl,
  },
}

export const metadata: Metadata = normalizeMetadata(metadataConfig)

const workflow = [
  { title: 'Export a controlled segment', body: 'Start with a representative, permissioned segment and preserve the source list so every decision can be audited.', icon: ClipboardCheck },
  { title: 'Validate before import or send', body: 'Use verification results to decide which addresses need review, suppression, or a separate re-permission flow.', icon: MailCheck },
  { title: 'Keep the sending platform separate', body: 'Email verification improves list hygiene; it is not a replacement for a sending, automation, CRM, or inbox-placement platform.', icon: ShieldCheck },
]

const decisionFactors = [
  'How often lists change and whether one-time credits or a subscription better matches that cadence',
  'How your team handles invalid, unknown, catch-all, role-based, and duplicate addresses',
  'Whether API, file upload, or an existing marketing workflow is the least risky operating path',
  'What retention, data-processing, and deletion controls your organisation requires',
]

const cautions = [
  'Verification results are classifications, not a guarantee that a message reaches the inbox.',
  'Pricing is usage-sensitive; compare the expected number of credits with your actual list cadence.',
  'Do not upload a customer list without checking your permissions, privacy obligations, and the provider terms.',
]

export default function ZeroBounceReviewPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="ZeroBounce Review: Email Verification Costs and Workflow Fit"
        description="A desk-based assessment of ZeroBounce published email verification pricing, list-cleaning workflow fit, and buying considerations."
        url={pageUrl}
        publishedDate="2026-09-14"
        modifiedDate="2026-09-14"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden"><div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#ffffff_62%)]" /></div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-4xl">
            <div className="page-pill mb-6"><Sparkles className="h-4 w-4 text-[#635bff]" /> Email workflow assessment</div>
            <h1 className="page-title text-5xl md:text-7xl mb-6">
              ZeroBounce review,
              <span className="brand-gradient-text block">for teams cleaning a list before they send.</span>
            </h1>
            <p className="page-lead text-lg md:text-xl max-w-3xl mb-8">ZeroBounce is an email verification service that can sit before a sending platform in a list hygiene workflow. This assessment focuses on when that extra step is useful, how to reason about published pricing, and what evidence you still need before moving a real list.</p>
            <AffiliateDisclosure partner="zerobounce" />
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-4 text-sm leading-6 text-amber-950 mb-8 max-w-3xl">This assessment uses published product documentation and pricing. SitePilot has not measured changes in bounce rates, inbox placement, or verification accuracy.</div>
            <div className="flex flex-wrap gap-3"><PartnerLink partner="zerobounce" source="zerobounce_review_pricing">Check the official ZeroBounce site <ArrowRight className="ml-2 h-4 w-4" /></PartnerLink><Link href="/best-email-marketing-tools-2026" className="btn-secondary">Compare sending platforms</Link></div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-10"><div className="page-pill mb-4">What it solves</div><h2 className="page-title text-3xl md:text-5xl mb-4">Treat verification as a workflow gate.</h2><p className="page-lead text-lg">The useful question is not whether a tool can label an address. It is whether your team can make a clear, repeatable decision from those labels before a campaign or import.</p></div>
          <div className="grid gap-5 md:grid-cols-3">{workflow.map((item) => { const Icon = item.icon; return <div key={item.title} className="page-card p-6"><div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-2 w-fit mb-5"><Icon className="h-5 w-5 text-indigo-600" /></div><h3 className="text-xl font-semibold text-slate-950 mb-3">{item.title}</h3><p className="text-slate-600 leading-7">{item.body}</p></div> })}</div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4 grid gap-6 lg:grid-cols-2">
          <div className="page-card-glow p-1.5"><div className="page-card rounded-[1.8rem] p-7 h-full"><div className="page-pill mb-4">Published pricing snapshot</div><h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-5">Compare cost to your list cadence.</h2><p className="text-slate-600 leading-8 mb-5">The public pricing information lists pay-as-you-go credits from $39 for 2,000 addresses and a ZeroBounce ONE subscription at $99 per month, with a lower annual monthly price shown on the pricing and FAQ pages. Treat these as snapshots, confirm current terms, and model the number of addresses you actually verify.</p><a href="https://www.zerobounce.net/pricing" target="_blank" rel="noopener noreferrer" className="btn-secondary">View official pricing <ArrowRight className="ml-2 h-4 w-4" /></a></div></div>
          <div className="page-card-glow p-1.5"><div className="page-card rounded-[1.8rem] p-7 h-full"><div className="page-pill mb-4">Decision factors</div><h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-5">Questions to answer before procurement.</h2><div className="space-y-4">{decisionFactors.map((item) => <div key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" /><span className="text-slate-700 leading-7">{item}</span></div>)}</div><a href="https://www.zerobounce.net/privacy-policy" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center font-semibold text-indigo-700 underline underline-offset-4">Review the official privacy policy <ArrowRight className="ml-2 h-4 w-4" /></a></div></div>
        </div>
      </section>

      <section className="page-section surface-muted"><div className="max-w-5xl mx-auto px-4"><div className="page-card-glow p-1.5"><div className="page-card rounded-[1.8rem] p-7 md:p-10"><div className="page-pill mb-4">Control points</div><h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-5">Keep the decision defensible.</h2><div className="grid gap-4 md:grid-cols-3 mb-8">{cautions.map((item) => <div key={item} className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5"><XCircle className="h-5 w-5 text-rose-600 mb-3" /><p className="text-sm text-rose-950 leading-7">{item}</p></div>)}</div><p className="text-slate-600 leading-8 mb-7">For a pilot, record the source segment, verification date, result categories, suppressed addresses, and any subsequent delivery signal your sending platform provides. That creates an evidence trail without claiming that verification alone caused an inbox outcome.</p><div className="flex flex-wrap gap-3"><PartnerLink partner="zerobounce" source="zerobounce_review_verdict">View the official ZeroBounce site <ArrowRight className="ml-2 h-4 w-4" /></PartnerLink><Link href="/best-email-marketing-tools-2026" className="btn-secondary">Return to email tools</Link></div></div></div></div></section>

      <section className="page-section"><div className="max-w-5xl mx-auto px-4"><div className="max-w-3xl"><div className="page-pill mb-4">SitePilot verdict</div><h2 className="page-title text-3xl md:text-5xl mb-5">A useful add-on when list hygiene is the bottleneck.</h2><p className="page-lead text-lg mb-8">ZeroBounce deserves consideration when a team needs a repeatable verification step before campaigns or migrations. It should be evaluated alongside data handling, cost per verified address, workflow effort, and measurable campaign outcomes. If your sending platform already includes the checks you need or your permissioned list is small and stable, a separate verification subscription may add little value; compare current alternatives only after verifying their capabilities and terms.</p><div className="flex flex-wrap gap-3"><Link href="/ai-tools/content-and-marketing" className="btn-secondary">Back to content tools</Link><Link href="/best-email-marketing-tools-2026" className="btn-secondary">Compare email platforms</Link><PartnerLink partner="zerobounce" source="zerobounce_review_verdict">Check current plans <ArrowRight className="ml-2 h-4 w-4" /></PartnerLink></div></div></div></section>
    </div>
  )
}
