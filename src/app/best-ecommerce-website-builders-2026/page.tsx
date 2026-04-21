import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  Layers3,
  Lock,
  ShoppingCart,
  Sparkles,
  Store,
  Workflow,
  XCircle,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import RelatedLinks, { websiteBuilderRelatedLinks } from '@/components/RelatedLinks'

const pageTitle = 'Best Ecommerce Website Builders 2026 | SitePilot'
const pageDescription =
  'A practical 2026 comparison of ecommerce website builders. Evaluate Shopify, BigCommerce, and WooCommerce on checkout maturity, scaling path, flexibility, and operational fit.'
const pageUrl = 'https://sitepilot.co/best-ecommerce-website-builders-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'best ecommerce website builders 2026, online store builders, ecommerce platforms comparison, Shopify 2026 review, BigCommerce B2B',
  alternates: {
    canonical: pageUrl,
  },
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

const scorecard = [
  {
    label: 'Best default answer',
    value: 'Shopify',
    note: 'Strong checkout, strong ecosystem, less decision fatigue.',
  },
  {
    label: 'Best for flexibility',
    value: 'BigCommerce',
    note: 'Better when catalog, B2B, or integration needs get messy.',
  },
  {
    label: 'Best for ownership',
    value: 'WooCommerce',
    note: 'More control, more responsibility, and more maintenance.',
  },
  {
    label: 'What matters most',
    value: 'Operational fit',
    note: 'Pretty storefronts are easy. Running commerce well is the hard part.',
  },
]

const platforms = [
  {
    name: 'Shopify',
    badge: 'Best for most serious sellers',
    score: '9.6/10',
    description:
      'Shopify remains the cleanest answer when the site exists to sell. The platform removes a lot of self-inflicted complexity and gives teams a mature checkout, strong app ecosystem, and a path that scales without constant reinvention.',
    wins: ['Best checkout maturity', 'Fastest time to revenue', 'Strong app and partner ecosystem'],
    limits: ['Platform constraints remain real', 'Fees and app sprawl can add up'],
    summary: 'Use Shopify when the business needs a reliable commerce engine more than architectural freedom.',
    href: '/website-builders',
    cta: 'See builder hub',
  },
  {
    name: 'BigCommerce',
    badge: 'Best for complexity without full custom pain',
    score: '9.0/10',
    description:
      'BigCommerce makes more sense once the operation gets more layered: B2B requirements, multiple storefronts, more complicated catalogs, or stricter integration expectations. It gives teams more room without immediately forcing a full custom stack.',
    wins: ['Good multi-store and B2B story', 'More open posture for integrations', 'No forced transaction-fee narrative'],
    limits: ['Smaller ecosystem than Shopify', 'Less default momentum in the market'],
    summary: 'Choose BigCommerce when operational flexibility matters more than mainstream simplicity.',
    href: '/best-website-builders-2026',
    cta: 'Compare broader builder options',
  },
  {
    name: 'WooCommerce',
    badge: 'Best for maximum ownership',
    score: '8.2/10',
    description:
      'WooCommerce is not a builder-first answer so much as a WordPress commerce route. It can be powerful, especially for teams that want control over hosting, plugins, and implementation detail, but the maintenance burden is part of the deal.',
    wins: ['Maximum ownership', 'Flexible hosting choices', 'Good if WordPress is already the center of gravity'],
    limits: ['More maintenance', 'Performance depends on execution', 'Plugin debt is real'],
    summary: 'Pick WooCommerce when you want control and accept the operational tax that comes with it.',
    href: '/website-builder-vs-wordpress-2026',
    cta: 'Read builder vs WordPress',
  },
]

const buyingCriteria = [
  {
    title: 'Checkout maturity',
    body: 'If checkout is shaky, nothing else matters. Abandonment eats pretty design for breakfast.',
    icon: ShoppingCart,
  },
  {
    title: 'Operational scale',
    body: 'Catalog complexity, international sales, B2B logic, and team workflow matter more than launch-week cosmetics.',
    icon: Workflow,
  },
  {
    title: 'Platform control',
    body: 'Some teams want guardrails. Others want ownership. The wrong choice creates friction for years.',
    icon: Layers3,
  },
  {
    title: 'Security baseline',
    body: 'Commerce stacks should reduce risk by default, not require heroics to stay safe and compliant.',
    icon: Lock,
  },
]

const matrix = [
  {
    title: 'Checkout strength',
    shopify: 'Excellent',
    bc: 'Strong',
    woo: 'Depends on stack',
  },
  {
    title: 'B2B readiness',
    shopify: 'Good on upper tiers',
    bc: 'Strong default story',
    woo: 'Plugin-led',
  },
  {
    title: 'Ease of launch',
    shopify: 'Fastest',
    bc: 'Moderate',
    woo: 'Slowest',
  },
  {
    title: 'Ownership control',
    shopify: 'Limited',
    bc: 'Balanced',
    woo: 'Highest',
  },
  {
    title: 'Maintenance burden',
    shopify: 'Low',
    bc: 'Moderate',
    woo: 'High',
  },
  {
    title: 'Best fit',
    shopify: 'Most sellers',
    bc: 'Complex stores',
    woo: 'Control-first teams',
  },
]

export default function BestEcommerceWebsiteBuilders2026() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Best Ecommerce Website Builders 2026: Technical Platform Audit"
        description="Comprehensive 2026 technical guide comparing ecommerce infrastructure on speed, scalability, and API capabilities."
        url={pageUrl}
        publishedDate="2026-04-08"
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
                2026 ecommerce platform comparison
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Ecommerce builders,
                <span className="block brand-gradient-text">minus the vendor theatre.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                An ecommerce website builder comparison in 2026 should evaluate checkout maturity, catalog complexity, integration flexibility, operating overhead, and long-term ownership tradeoffs. Shopify, BigCommerce, and WooCommerce solve different problems, so the right platform depends less on demo polish and more on how the store actually sells, scales, and stays maintainable.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/website-builders" className="btn-brand">
                  Open builder hub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/best-website-builders-2026" className="btn-secondary">
                  Compare all builders
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {scorecard.map((item) => (
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
                      <div className="text-sm text-slate-500 mb-1">SitePilot perspective</div>
                      <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                        Retail stack selection matrix
                      </div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Focus on fit
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      'Shopify wins when speed, maturity, and checkout confidence matter most.',
                      'BigCommerce is stronger when structure gets more complex.',
                      'WooCommerce wins only if the team genuinely wants control and upkeep.',
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
                    <div className="text-sm text-slate-500 mb-2">What separates the serious options</div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Checkout trust</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Operations fit</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Integration posture</div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-700">Maintenance load</div>
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
            <div className="page-pill mb-4">How to judge ecommerce platforms</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">What actually matters after launch.</h2>
            <p className="page-lead text-lg">
              The store has to work on bad days too: promotions, payment weirdness, catalog sprawl, fulfillment complexity, and security pressure. That is where weak platform choices start billing you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {buyingCriteria.map((item) => {
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
            <div className="page-pill mb-4">Top platform choices</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Three serious routes, three different trade-offs.</h2>
            <p className="page-lead text-lg">
              There is no single universal winner. There is, however, a wrong choice for your actual operating model.
            </p>
          </div>

          <div className="space-y-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-7 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="max-w-3xl">
                      <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700 mb-4">
                        {platform.badge}
                      </div>
                      <div className="flex items-end gap-4 flex-wrap mb-4">
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950">{platform.name}</h3>
                        <span className="text-sm font-semibold text-slate-500">{platform.score}</span>
                      </div>
                      <p className="text-base md:text-lg leading-8 text-slate-600 mb-6">{platform.description}</p>

                      <div className="grid md:grid-cols-2 gap-5 mb-6">
                        <div className="rounded-2xl border border-indigo-200 bg-indigo-50/70 px-5 py-5">
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-800 mb-3">Where it wins</div>
                          <div className="space-y-3">
                            {platform.wins.map((win) => (
                              <div key={win} className="flex items-start gap-3 text-sm text-slate-900">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600 shrink-0" />
                                <span>{win}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-rose-200 bg-rose-50/70 px-5 py-5">
                          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-800 mb-3">What to watch</div>
                          <div className="space-y-3">
                            {platform.limits.map((limit) => (
                              <div key={limit} className="flex items-start gap-3 text-sm text-rose-950">
                                <XCircle className="h-4 w-4 mt-0.5 text-rose-600 shrink-0" />
                                <span>{limit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700">
                        <span className="font-semibold">Plain answer:</span> {platform.summary}
                      </div>
                    </div>

                    <div className="lg:w-60 shrink-0">
                      <div className="page-card-soft p-5 h-full flex flex-col justify-between">
                        <div>
                          <div className="text-sm text-slate-500 mb-2">Best fit</div>
                          <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950 mb-4">
                            Teams that want commerce to run well without pretending platform choice is only about aesthetics.
                          </div>
                        </div>
                        <Link href={platform.href} className="btn-brand w-full mt-6">
                          {platform.cta}
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

      <section className="page-section surface-warm border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Comparison matrix</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">A simpler way to read the options.</h2>
            <p className="page-lead text-lg">
              Here is the short version of the trade-off landscape for most teams choosing between the big ecommerce routes in 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {matrix.map((row) => (
              <div key={row.title} className="page-card p-6">
                <div className="text-sm uppercase tracking-[0.16em] text-slate-400 mb-5">{row.title}</div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="font-medium text-slate-600">Shopify</span>
                    <span className="font-semibold text-slate-950">{row.shopify}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="font-medium text-slate-600">BigCommerce</span>
                    <span className="font-semibold text-slate-950">{row.bc}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="font-medium text-slate-600">WooCommerce</span>
                    <span className="font-semibold text-slate-950">{row.woo}</span>
                  </div>
                </div>
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
                Final selection logic
              </div>
              <h2 className="page-title text-3xl md:text-5xl mb-5">Pick the platform that matches your operating model, not your launch mood.</h2>
              <p className="page-lead text-lg max-w-3xl mx-auto mb-8">
                Shopify is still the strongest default answer for most serious sellers. BigCommerce gets more interesting as complexity rises. WooCommerce is valid when the team truly wants control and can absorb the maintenance load.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/website-builders" className="btn-brand">
                  Return to builder hub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/website-builder-vs-wordpress-2026" className="btn-secondary">
                  Compare with WordPress
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="max-w-6xl mx-auto px-4">
          <RelatedLinks
            title="More platform and website guides"
            links={websiteBuilderRelatedLinks.filter((link) => link.href !== '/best-ecommerce-website-builders-2026')}
          />
        </div>
      </section>
    </div>
  )
}
