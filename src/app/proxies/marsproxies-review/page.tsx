import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Sparkles, XCircle, Zap } from 'lucide-react'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import PartnerLink from '@/components/PartnerLink'
import SchemaMarkup from '@/components/SchemaMarkup'
import { normalizeMetadata } from '@/lib/seo'

const pageUrl = 'https://sitepilot.co/proxies/marsproxies-review'
const metadataConfig: Metadata = {
  title: 'MarsProxies Review: Pricing, Proxy Types and Buying Trade-offs',
  description:
    'A desk-based MarsProxies review covering published proxy types, pricing snapshots, workflow fit, and the questions to verify before buying.',
  keywords: 'MarsProxies review, MarsProxies pricing, residential proxy review, ISP proxy comparison, proxy buying guide',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'MarsProxies Review: Pricing, Proxy Types and Buying Trade-offs',
    description: 'Assess MarsProxies by proxy type, published pricing, workflow fit, and buying constraints.',
    type: 'article',
    url: pageUrl,
  },
}

export const metadata: Metadata = normalizeMetadata(metadataConfig)

const proxyTypes = [
  { name: 'Residential', price: 'Listed from $1.65/GB', fit: 'Location-sensitive collection, verification, and research workflows.', icon: Globe2 },
  { name: 'Datacenter', price: 'Listed from $0.99/proxy', fit: 'Throughput-heavy work where dedicated datacenter supply is sufficient.', icon: Zap },
  { name: 'ISP', price: 'Listed from $1.35/proxy', fit: 'Longer-lived sessions that need a static connection model.', icon: ShieldCheck },
  { name: 'Mobile', price: 'Listed from $8.49/day', fit: 'Mobile-network identity and app-oriented workflows that justify the cost.', icon: Globe2 },
]

const checks = [
  'Target country, city, or state coverage for the exact plan',
  'Rotation and sticky-session controls available to your workflow',
  'Authentication, concurrency, protocol, and support limits',
  'Whether residential traffic expires and how fair-use rules apply',
]

const strengths = [
  'A broad product menu makes it possible to match proxy type to the job instead of buying one default plan.',
  'The public site documents HTTP/HTTPS and SOCKS5 support plus API-oriented setup paths.',
  'Published entry prices make a small proof of concept easier to scope before a larger commitment.',
]

const tradeoffs = [
  'Published starting prices are not a quote for a particular country, traffic profile, or concurrency level.',
  'Proxy quality, latency, and success rate remain unverified by SitePilot in this assessment.',
  'The right choice can change substantially between residential, ISP, datacenter, and mobile products.',
]

export default function MarsProxiesReviewPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="MarsProxies Review: Pricing, Proxy Types and Buying Trade-offs"
        description="A desk-based assessment of MarsProxies published proxy types, pricing snapshots, workflow fit, and buying trade-offs."
        url={pageUrl}
        publishedDate="2026-09-14"
        modifiedDate="2026-09-14"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#ffffff_62%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-4xl">
            <div className="page-pill mb-6"><Sparkles className="h-4 w-4 text-[#635bff]" /> Proxy provider assessment</div>
            <h1 className="page-title text-5xl md:text-7xl mb-6">
              MarsProxies review,
              <span className="brand-gradient-text block">for buyers who need to defend the proxy choice.</span>
            </h1>
            <p className="page-lead text-lg md:text-xl max-w-3xl mb-8">
              MarsProxies publishes residential, datacenter, ISP, and mobile proxy products. This page turns those published options into a buying checklist: choose the connection model first, then verify the plan limits, target coverage, and operating cost that matter to your workflow.
            </p>
            <AffiliateDisclosure partner="marsproxies" />
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-4 text-sm leading-6 text-amber-950 mb-8 max-w-3xl">
              This is a desk-based assessment of published plans and documentation. SitePilot has not independently benchmarked proxy speed, latency, uptime, or success rates.
            </div>
            <div className="flex flex-wrap gap-3">
              <PartnerLink partner="marsproxies" source="marsproxies_review_pricing">Check current MarsProxies plans <ArrowRight className="ml-2 h-4 w-4" /></PartnerLink>
              <Link href="/proxies/best-residential-proxies-2026" className="btn-secondary">Compare residential options</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <div className="page-pill mb-4">Published product map</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">The product type matters more than the logo.</h2>
            <p className="page-lead text-lg">The public pricing page uses different units for each proxy model. That makes a direct “cheapest” claim misleading until the request volume and session requirements are known.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {proxyTypes.map((item) => {
              const Icon = item.icon
              return <div key={item.name} className="page-card p-6">
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-2 w-fit mb-5"><Icon className="h-5 w-5 text-indigo-600" /></div>
                <h3 className="text-xl font-semibold text-slate-950 mb-2">{item.name}</h3>
                <div className="text-sm font-semibold text-indigo-700 mb-3">{item.price}</div>
                <p className="text-slate-600 leading-7">{item.fit}</p>
              </div>
            })}
          </div>
          <p className="mt-6 text-sm text-slate-500">Prices are snapshots shown on the official pricing page when this assessment was prepared. Currency, taxes, location, usage, and plan terms can change.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4 grid gap-6 lg:grid-cols-2">
          <div className="page-card-glow p-1.5"><div className="page-card rounded-[1.8rem] p-7 h-full">
            <div className="page-pill mb-4">Where it may fit</div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-5">Potential strengths to verify.</h2>
            <div className="space-y-4">{strengths.map((item) => <div key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" /><span className="text-slate-700 leading-7">{item}</span></div>)}</div>
          </div></div>
          <div className="page-card-glow p-1.5"><div className="page-card rounded-[1.8rem] p-7 h-full">
            <div className="page-pill mb-4">Buying trade-offs</div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-5">Questions the public page cannot answer for you.</h2>
            <div className="space-y-4">{tradeoffs.map((item) => <div key={item} className="flex items-start gap-3"><XCircle className="h-5 w-5 text-rose-500 mt-0.5 shrink-0" /><span className="text-slate-700 leading-7">{item}</span></div>)}</div>
          </div></div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-5xl mx-auto px-4">
          <div className="page-card p-7 md:p-10">
            <div className="page-pill mb-4">How the shortlist changes</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-5">Compare the operating model, not only the entry price.</h2>
            <p className="text-slate-600 text-lg leading-8 mb-5">Our residential comparison describes Bright Data as the deeper enterprise option and Oxylabs as a fit for research-heavy extraction programs. MarsProxies presents a broader mix of residential, datacenter, ISP, and mobile products with listed entry prices, so it is better treated as a candidate for a controlled, plan-level trial than as a replacement claim for either provider.</p>
            <p className="text-slate-600 leading-8">That distinction keeps the comparison useful: verify the same target geography, protocol, concurrency, session behavior, and traffic window for each provider before drawing a conclusion.</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link href="/proxies/best-residential-proxies-2026" className="btn-brand">Read the full residential comparison <ArrowRight className="ml-2 h-4 w-4" /></Link>
              <Link href="/proxies/residential-vs-mobile-proxies-comparison-2026" className="btn-secondary">Compare proxy models</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-5xl mx-auto px-4">
          <div className="page-card-glow p-1.5"><div className="page-card rounded-[1.8rem] p-7 md:p-10">
            <div className="page-pill mb-4">Before you buy</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-5">Use a short proof-of-concept checklist.</h2>
            <div className="grid gap-4 md:grid-cols-2 mb-8">{checks.map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"><CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" /><span className="text-slate-700 leading-7">{item}</span></div>)}</div>
            <p className="text-slate-600 leading-8 mb-7">For a fair test, fix the country, protocol, concurrency, target type, and time window before comparing providers. Record the denominator for failed requests and the actual traffic consumed. A vendor’s published pool size or success claim is context, not a result from your workload.</p>
            <div className="flex flex-wrap gap-3">
              <PartnerLink partner="marsproxies" source="marsproxies_review_verdict">View the official MarsProxies site <ArrowRight className="ml-2 h-4 w-4" /></PartnerLink>
              <a href="https://marsproxies.com/pricing/" target="_blank" rel="noopener noreferrer" className="btn-secondary">View published pricing</a>
            </div>
          </div></div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="page-pill mb-4">SitePilot verdict</div>
            <h2 className="page-title text-3xl md:text-5xl mb-5">A candidate for a controlled proxy trial.</h2>
            <p className="page-lead text-lg mb-8">MarsProxies is worth putting on a shortlist when you need multiple proxy models and want to compare a small workload before scaling. The decision should remain conditional on plan-level coverage, session behavior, and measured results from your own permitted targets.</p>
            <div className="flex flex-wrap gap-3"><Link href="/proxies" className="btn-secondary">Back to proxy hub</Link><Link href="/proxies/residential-vs-mobile-proxies-comparison-2026" className="btn-secondary">Compare proxy models</Link><PartnerLink partner="marsproxies" source="marsproxies_review_verdict">Check current plans <ArrowRight className="ml-2 h-4 w-4" /></PartnerLink></div>
          </div>
        </div>
      </section>
    </div>
  )
}
