import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, CheckCircle2, Palette, ShieldCheck, ShoppingCart, Sparkles, Workflow, XCircle } from 'lucide-react'
import RelatedLinks, { websiteBuilderRelatedLinks } from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Best Website Builders 2026: Complete Guide & Comparisons - SitePilot'
const pageDescription =
  'Compare the top website builders in 2026. Expert reviews of Webflow, Wix, Shopify, Squarespace, and more. Find the perfect builder for your needs.'
const pageUrl = 'https://sitepilot.co/best-website-builders-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'best website builders 2026, website builder comparison, Webflow vs Wix, Shopify review, Squarespace alternatives, drag and drop website builder',
  openGraph: {
    title: 'Best Website Builders 2026: Complete Expert Comparison',
    description:
      'Professional reviews and comparisons of top website builders. Find the right platform for your business needs.',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Website Builders 2026: Expert Comparison',
    description: 'Comprehensive guide to choosing the right website builder in 2026.',
  },
  alternates: {
    canonical: pageUrl,
  },
}

const quickPicks = [
  {
    label: 'Best overall for pros',
    value: 'Webflow',
    note: 'Still the strongest answer when design control and site quality matter more than beginner convenience.',
  },
  {
    label: 'Best for ease and speed',
    value: 'Wix',
    note: 'A practical option for teams that want a fast path from idea to publish.',
  },
  {
    label: 'Best for selling',
    value: 'Shopify',
    note: 'When the website exists to transact, Shopify still deserves the default spotlight.',
  },
  {
    label: 'Best simple presentation',
    value: 'Squarespace',
    note: 'Good for brands that care about polish and minimal maintenance.',
  },
]

const criteria = [
  {
    title: 'Design control',
    body: 'Templates are cheap. Real value comes from how far a platform lets you shape layout, hierarchy, and content without fighting the tool.',
    icon: Palette,
  },
  {
    title: 'AI usefulness',
    body: 'We care whether the builder shortens production time in a meaningful way, not whether it can spit out bland hero copy on command.',
    icon: Bot,
  },
  {
    title: 'Business fit',
    body: 'A brochure site, a portfolio, and an ecommerce operation do not need the same builder. Wrong fit becomes long-term friction.',
    icon: Workflow,
  },
  {
    title: 'Long-term trust',
    body: 'SEO control, content ownership, portability, and maintainability matter more than launch-week hype.',
    icon: ShieldCheck,
  },
]

const builders = [
  {
    rank: '01',
    name: 'Webflow',
    badge: 'Best overall for serious site quality',
    score: '9.8/10',
    description:
      'Webflow remains the most complete answer for teams that care about visual precision, cleaner output, and a more professional path between design and production. It asks more from the user, but gives more back.',
    bestFor: 'Design-led teams, agencies, advanced marketing sites',
    pros: ['Excellent design control', 'Strong CMS capabilities', 'Cleaner professional output'],
    cons: ['Steeper learning curve', 'More intimidating for beginners'],
    pricing: ['Free starter option', 'CMS plans for content-led sites', 'Higher tiers for business and scale'],
    href: 'https://webflow.com/',
    cta: 'Visit Webflow',
  },
  {
    rank: '02',
    name: 'Wix',
    badge: 'Best for speed and accessibility',
    score: '9.4/10',
    description:
      'Wix is still a strong pick for teams that want to move quickly without learning a more advanced production tool. The platform balances editing freedom, onboarding ease, and a large ecosystem well.',
    bestFor: 'Small businesses, creator sites, fast launches',
    pros: ['Easy to learn', 'Large template selection', 'Strong all-round starter value'],
    cons: ['Less elegant at the high end', 'Can feel heavier over time'],
    pricing: ['Free plan available', 'Paid plans unlock custom domains and fewer constraints'],
    href: 'https://www.wix.com/',
    cta: 'Visit Wix',
  },
  {
    rank: '03',
    name: 'Shopify',
    badge: 'Best for ecommerce-first sites',
    score: '9.6/10',
    description:
      'Shopify belongs on any builder ranking because it solves a different class of problem: revenue operations. If the site is primarily a store, Shopify is often the least foolish answer.',
    bestFor: 'Stores, product-led brands, revenue-focused teams',
    pros: ['Best checkout maturity', 'Strong app ecosystem', 'Reliable commerce scaling path'],
    cons: ['Less flexible outside commerce logic', 'Costs can stack as complexity grows'],
    pricing: ['Monthly plans start higher than generic builders', 'Worth it when selling is the core job'],
    href: '/best-ecommerce-website-builders-2026',
    cta: 'Read ecommerce guide',
  },
  {
    rank: '04',
    name: 'Squarespace',
    badge: 'Best for clean presentation',
    score: '8.9/10',
    description:
      'Squarespace stays relevant because not every site needs complexity. For presentation-first brands, consultants, and content-light sites, it offers a cleaner and calmer publishing experience.',
    bestFor: 'Service sites, portfolios, smaller polished brands',
    pros: ['Clean templates', 'Low-maintenance publishing', 'Good presentation quality'],
    cons: ['Less flexible for advanced structure', 'Can feel boxed in for larger projects'],
    pricing: ['Straightforward paid tiers', 'Good fit when simplicity matters more than expansion'],
    href: '/website-builders',
    cta: 'Open builder hub',
  },
]

export default function BestWebsiteBuilders2026() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Best Website Builders 2026: Complete Guide & Comparisons"
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-03T00:00:00Z"
        modifiedDate="2026-04-17T00:00:00Z"
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
                2026 builder rankings
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Best website builders,
                <span className="block brand-gradient-text">without the fake certainty.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                A website builder ranking in 2026 should compare design control, ecommerce fit, SEO ownership, operating overhead, and long-term flexibility. This guide evaluates Webflow, Wix, Shopify, and Squarespace against those decision variables so buyers can match platform choice to business model instead of picking the slickest demo.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/website-builders" className="btn-brand">
                  Open builder hub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/website-builder-vs-wordpress-2026" className="btn-secondary">
                  Compare with WordPress
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {quickPicks.map((item) => (
                  <div key={item.label} className="page-card px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-2">{item.label}</div>
                    <div className="font-semibold text-slate-950 mb-1">{item.value}</div>
                    <div className="text-sm text-slate-600 leading-6">{item.note}</div>
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
                      <div className="text-sm text-slate-500 mb-1">SitePilot lens</div>
                      <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                        Builder evaluation stack
                      </div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Fit over hype
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      'Webflow is the strongest pro-grade answer.',
                      'Wix is easier than Webflow without being useless.',
                      'Shopify belongs here because commerce is a different class of problem.',
                      'Squarespace still wins when the job is simple, polished publishing.',
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
                    <div className="text-sm text-slate-500 mb-3">What we reward</div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Cleaner hierarchy</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Business fit</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">SEO ownership</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Less long-term drag</div>
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
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Ranking methodology</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">What separates a decent builder from a good one.</h2>
            <p className="page-lead text-lg">
              The best builder is not the one with the loudest landing page. It is the one that best matches the site’s real job while creating the least strategic regret later.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {criteria.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="page-card-soft p-6">
                  <div className="inline-flex rounded-2xl bg-indigo-50 p-3 mb-5">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">2026 rankings</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">The builders worth taking seriously.</h2>
            <p className="page-lead text-lg">
              Different tools win for different reasons. What matters is not whether they are good in the abstract, but whether they are good for the specific site you are trying to build.
            </p>
          </div>

          <div className="space-y-6">
            {builders.map((builder) => (
              <div key={builder.rank} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="max-w-3xl">
                      <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700 mb-4">
                        #{builder.rank} · {builder.badge}
                      </div>
                      <div className="flex items-end gap-4 flex-wrap mb-4">
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950">{builder.name}</h3>
                        <span className="text-sm font-semibold text-slate-500">{builder.score}</span>
                      </div>
                      <p className="text-base md:text-lg leading-8 text-slate-600 mb-6">{builder.description}</p>

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700 mb-6">
                        <span className="font-semibold">Best for:</span> {builder.bestFor}
                      </div>

                      <div className="grid md:grid-cols-3 gap-5 mb-6">
                        <div className="rounded-2xl border border-indigo-200 bg-indigo-50/70 px-5 py-5 md:col-span-1">
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-800 mb-3">Pros</div>
                          <div className="space-y-3">
                            {builder.pros.map((pro) => (
                              <div key={pro} className="flex items-start gap-3 text-sm text-slate-900">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600 shrink-0" />
                                <span>{pro}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-rose-200 bg-rose-50/70 px-5 py-5 md:col-span-1">
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-800 mb-3">Cons</div>
                          <div className="space-y-3">
                            {builder.cons.map((con) => (
                              <div key={con} className="flex items-start gap-3 text-sm text-rose-950">
                                <XCircle className="h-4 w-4 mt-0.5 text-rose-600 shrink-0" />
                                <span>{con}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 md:col-span-1">
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 mb-3">Pricing feel</div>
                          <div className="space-y-3">
                            {builder.pricing.map((price) => (
                              <div key={price} className="text-sm text-slate-700 leading-6">
                                {price}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-56 shrink-0">
                      <div className="page-card-soft p-5 h-full flex flex-col justify-between">
                        <div>
                          <div className="text-sm text-slate-500 mb-2">Selection logic</div>
                          <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950 mb-4">
                            Pick the platform that best matches the site’s actual job, not the tool with the loudest marketing.
                          </div>
                        </div>
                        <Link href={builder.href} className="btn-brand w-full mt-6">
                          {builder.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section border-y border-slate-200/70 surface-warm">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 mb-5">
            Bottom line
          </div>
          <h2 className="page-title text-3xl md:text-5xl mb-5">Use-case first. Brand second. Hype last.</h2>
          <p className="page-lead text-lg max-w-3xl mx-auto mb-8">
            The right website builder depends on whether you need design control, speed, ecommerce infrastructure, or low-maintenance publishing. The best platform is the one that makes your next two years easier, not just launch week prettier.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/best-ecommerce-website-builders-2026" className="btn-brand">
              Compare ecommerce platforms
              <ShoppingCart className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/free-website-builders-2026" className="btn-secondary">
              See free builder trade-offs
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="max-w-6xl mx-auto px-4">
          <RelatedLinks
            title="More website builder guides"
            links={websiteBuilderRelatedLinks.filter((link) => link.href !== '/best-website-builders-2026')}
          />
        </div>
      </section>
    </div>
  )
}
