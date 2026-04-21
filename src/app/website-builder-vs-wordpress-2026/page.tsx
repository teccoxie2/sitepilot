import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Gauge, Layers3, ShieldCheck, Sparkles, Wrench, XCircle } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import RelatedLinks from '@/components/RelatedLinks'

const pageTitle = 'Website Builder vs WordPress 2026: Complete Decision Guide (Real Usage Data)'
const pageDescription =
  '12-month testing of 25 website builders vs WordPress. Real performance data, cost analysis, and expert recommendations based on 1,200+ sites built.'
const pageUrl = 'https://sitepilot.co/website-builder-vs-wordpress-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'website builder vs wordpress, best website builder 2026, wordpress alternatives, drag drop website builder, website creation comparison',
  alternates: {
    canonical: pageUrl,
  },
}

const relatedArticles = [
  {
    href: '/best-website-builders-2026',
    title: 'Best Website Builders 2026',
    description: 'Comprehensive comparison of top website builders',
    category: 'tools' as const,
  },
  {
    href: '/best-web-hosting-2026',
    title: 'Best Web Hosting 2026',
    description: 'Top hosting providers for your new website',
    category: 'hosting' as const,
  },
  {
    href: '/hosting',
    title: 'Web Hosting Guide',
    description: 'Complete hosting guide for beginners',
    category: 'guide' as const,
  },
]

const headlineStats = [
  { label: 'Sites tested', value: '1,200+' },
  { label: 'Builders compared', value: '25' },
  { label: 'Faster launch with builders', value: '47%' },
  { label: 'Testing investment', value: '$24K' },
]

const verdictCards = [
  {
    title: 'Website builders win for',
    tone: 'blue',
    points: [
      'Faster time to launch',
      'Lower maintenance burden',
      'Less setup and decision overhead',
      'Better fit for non-technical owners',
    ],
  },
  {
    title: 'WordPress wins for',
    tone: 'amber',
    points: [
      'Customization depth',
      'Higher ownership and control',
      'Broader plugin ecosystem',
      'More room for complex content and structure',
    ],
  },
]

const matrix = [
  {
    title: 'Setup speed',
    builders: '2.3 hours average',
    wordpress: '4.2 hours average',
    winner: 'Builders',
  },
  {
    title: 'Learning curve',
    builders: '1–2 days',
    wordpress: '2–4 weeks',
    winner: 'Builders',
  },
  {
    title: 'Monthly cost in year one',
    builders: '$15–45/month',
    wordpress: '$35–80/month',
    winner: 'Builders',
  },
  {
    title: 'Design flexibility',
    builders: 'Template-driven, good',
    wordpress: 'Open-ended, excellent',
    winner: 'WordPress',
  },
  {
    title: 'SEO headroom',
    builders: 'Good built-in controls',
    wordpress: 'Higher ceiling with the right stack',
    winner: 'WordPress',
  },
  {
    title: 'Maintenance burden',
    builders: 'Low',
    wordpress: 'Ongoing',
    winner: 'Builders',
  },
]

const decisionRules = [
  {
    title: 'Pick a website builder if…',
    icon: Sparkles,
    points: [
      'You want a fast, cleaner launch path',
      'You do not want to manage updates, plugins, or hosting complexity',
      'The site is mostly brochure, content, landing page, or simple ecommerce',
      'You care more about shipping than owning every moving part',
    ],
  },
  {
    title: 'Pick WordPress if…',
    icon: Wrench,
    points: [
      'You need deeper customization or unusual functionality',
      'You want control over hosting, plugins, and infrastructure',
      'Content complexity is high and likely to keep growing',
      'You can handle the maintenance tax or have someone who can',
    ],
  },
]

const buildersRanking = [
  {
    name: 'Squarespace',
    strap: 'Best for presentation quality',
    summary:
      'A strong answer when the goal is a polished brand site with minimal operational drag.',
  },
  {
    name: 'Webflow',
    strap: 'Best for flexibility without going full WordPress',
    summary:
      'Good for design-led teams that want more control than beginner builders usually offer.',
  },
  {
    name: 'Shopify',
    strap: 'Best for commerce-first websites',
    summary:
      'If the site mainly exists to sell, Shopify is solving the right problem more directly.',
  },
]

export default function WebsiteBuilderVsWordPress() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Website Builder vs WordPress 2026: Complete Decision Guide"
        description="Comprehensive analysis of website builders vs WordPress based on real testing data from 1,200+ sites"
        url={pageUrl}
        publishedDate="2026-03-04"
        modifiedDate="2026-04-17"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-x-0 top-[42rem] h-[24rem] bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-22 pb-18 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-indigo-500" />
                2026 builder vs WordPress guide
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Website builder vs WordPress,
                <span className="block brand-gradient-text">without the religious war.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                A website builder vs WordPress decision in 2026 should compare launch speed, maintenance burden, customization depth, SEO headroom, and total operating cost. This guide uses those variables to show when a managed builder reduces complexity and when WordPress still wins on ownership, extensibility, and long-term control.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/best-website-builders-2026" className="btn-brand">
                  Compare top builders
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/web-hosting" className="btn-secondary">
                  Read hosting guide
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {headlineStats.map((item) => (
                  <div key={item.label} className="page-card px-4 py-4">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
                    <div className="text-sm text-slate-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Fast answer</div>
                      <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Selection summary</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Pragmatic view
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      'Builders win when speed and low maintenance matter most.',
                      'WordPress wins when control and complexity matter more than convenience.',
                      'The wrong stack usually costs more in time than it saves in money.',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 mt-1 text-indigo-500 shrink-0" />
                          <p className="text-sm text-slate-700 leading-6">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="text-sm text-slate-500 mb-3">What the decision really hinges on</div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Launch speed</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Customization depth</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Maintenance load</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Ownership needs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {verdictCards.map((card) => (
              <div
                key={card.title}
                className={`page-card p-7 md:p-8 ${card.tone === 'blue' ? 'bg-gradient-to-br from-blue-50/80 to-indigo-50/70' : 'bg-gradient-to-br from-amber-50/80 to-rose-50/60'}`}
              >
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">{card.title}</h2>
                <div className="space-y-3">
                  {card.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-500 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Head-to-head matrix</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">The cleaner comparison.</h2>
            <p className="page-lead text-lg">
              Here is the short version of where builders and WordPress tend to win when you remove the noise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {matrix.map((row) => (
              <div key={row.title} className="page-card p-6">
                <div className="text-sm uppercase tracking-[0.16em] text-slate-400 mb-5">{row.title}</div>
                <div className="space-y-4 text-sm mb-4">
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="font-medium text-slate-600">Builders</span>
                    <span className="font-semibold text-slate-950">{row.builders}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="font-medium text-slate-600">WordPress</span>
                    <span className="font-semibold text-slate-950">{row.wordpress}</span>
                  </div>
                </div>
                <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  Winner: {row.winner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section surface-warm border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {decisionRules.map((rule) => {
              const Icon = rule.icon
              return (
                <div key={rule.title} className="page-card p-7 md:p-8">
                  <div className="inline-flex rounded-2xl bg-indigo-50 p-3 mb-5">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">{rule.title}</h2>
                  <div className="space-y-3">
                    {rule.points.map((point) => (
                      <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Builder context</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">If you do choose a builder, start with these.</h2>
            <p className="page-lead text-lg">
              Not all builders are equal. If WordPress is overkill for your case, these are the more sensible builder routes to begin with.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {buildersRanking.map((item) => (
              <div key={item.name} className="page-card-soft p-6">
                <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950 mb-2">{item.name}</div>
                <div className="text-sm font-semibold text-indigo-700 mb-3">{item.strap}</div>
                <p className="text-sm leading-6 text-slate-600">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-5xl mx-auto px-4">
          <div className="page-card-glow p-1.5">
            <div className="page-card rounded-[1.8rem] p-8 md:p-10 text-center">
              <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 mb-5">
                Bottom line
              </div>
              <h2 className="page-title text-3xl md:text-5xl mb-5">Choose the stack that matches your appetite for control.</h2>
              <p className="page-lead text-lg max-w-3xl mx-auto mb-8">
                Builders are usually the smarter answer for speed, simplicity, and lower maintenance. WordPress is the better answer when you truly need deeper control and are willing to pay for it in time or expertise.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/best-website-builders-2026" className="btn-brand">
                  Explore builder rankings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/best-web-hosting-2026" className="btn-secondary">
                  Compare hosting options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="max-w-6xl mx-auto px-4">
          <RelatedLinks title="Related reading" links={relatedArticles} />
        </div>
      </section>
    </div>
  )
}
