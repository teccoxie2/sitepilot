import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import SchemaMarkup from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Best WordPress Themes 2026: 25+ Tested Themes for Every Website Type | SitePilot',
  description:
    'Discover the best WordPress themes for 2026. Detailed reviews of 25+ premium and free themes tested for speed, SEO, and design quality.',
  keywords:
    'wordpress themes, best wordpress themes 2026, premium wordpress themes, free wordpress themes, responsive themes, SEO optimized themes',
}

const relatedArticles = [
  {
    href: '/website-builder-vs-wordpress-2026',
    title: 'Website Builder vs WordPress 2026',
    description: 'Complete decision guide with real testing data',
  },
  {
    href: '/best-website-builders-2026',
    title: 'Best Website Builders 2026',
    description: 'Top website builders compared and tested',
  },
  {
    href: '/best-web-hosting-2026',
    title: 'Best Web Hosting 2026',
    description: 'Best hosting providers for WordPress sites',
  },
]

const stats = [
  { value: '25+', label: 'Themes tested' },
  { value: '0.8s', label: 'Fastest load time' },
  { value: '100+', label: 'Performance tests' },
  { value: '6', label: 'Months testing' },
]

const winners = [
  {
    label: 'Overall winner',
    name: 'Astra Pro',
    note: '0.8s load time',
    price: '$59/year',
  },
  {
    label: 'Best free',
    name: 'GeneratePress',
    note: '0.9s load time',
    price: '100% free',
  },
  {
    label: 'Best design',
    name: 'Divi',
    note: 'Visual builder',
    price: '$89/year',
  },
  {
    label: 'Best e-commerce',
    name: 'Flatsome',
    note: 'WooCommerce focused',
    price: '$59 one-time',
  },
]

const performanceGroups = [
  {
    title: 'Speed champions',
    items: [
      { name: 'Astra Pro', score: '0.8s', width: '95%' },
      { name: 'GeneratePress', score: '0.9s', width: '90%' },
      { name: 'Neve', score: '1.0s', width: '85%' },
    ],
  },
  {
    title: 'SEO scores',
    items: [
      { name: 'Schema Pro', score: '98/100', width: '98%' },
      { name: 'Astra Pro', score: '96/100', width: '96%' },
      { name: 'GeneratePress', score: '94/100', width: '94%' },
    ],
  },
  {
    title: 'Mobile scores',
    items: [
      { name: 'OceanWP', score: '95/100', width: '95%' },
      { name: 'Kadence', score: '93/100', width: '93%' },
      { name: 'Blocksy', score: '91/100', width: '91%' },
    ],
  },
]

const themeCategories = [
  {
    title: 'Business websites',
    themes: [
      {
        name: 'Astra Pro',
        description: 'The ultimate business theme with 200+ starter templates.',
        price: '$59/year',
        rating: '4.9/5',
        badges: ['Fast loading', 'WooCommerce ready', 'Page builder compatible'],
      },
      {
        name: 'OceanWP',
        description: 'Highly customizable with excellent header options.',
        price: 'Free + $39/year Pro',
        rating: '4.7/5',
        badges: ['SEO optimized', 'Free + premium', 'Header builder'],
      },
      {
        name: 'Kadence',
        description: 'Modern design with advanced customization options.',
        price: 'Free + $129/year Pro',
        rating: '4.8/5',
        badges: ['Gutenberg optimized', 'Mobile first', 'Typography control'],
      },
    ],
  },
  {
    title: 'Blog and content',
    themes: [
      {
        name: 'GeneratePress',
        description: 'Lightweight, fast, and perfect for content-heavy sites.',
        price: 'Free + $59/year Pro',
        rating: '4.9/5',
        badges: ['Fastest loading', 'Clean code', 'Accessibility ready'],
      },
      {
        name: 'Neve',
        description: 'AMP-ready theme perfect for speed-focused blogs.',
        price: 'Free + $69/year Pro',
        rating: '4.6/5',
        badges: ['AMP ready', 'Schema markup', 'Gutenberg blocks'],
      },
      {
        name: 'Blocksy',
        description: 'Modern block-based theme with excellent typography.',
        price: 'Free + $49/year Pro',
        rating: '4.7/5',
        badges: ['Block editor', 'Dynamic content', 'Custom post types'],
      },
    ],
  },
]

const freeVsPremium = [
  { feature: 'Design options', free: 'Limited', premium: 'Extensive' },
  { feature: 'Support', free: 'Community only', premium: 'Priority support' },
  { feature: 'Pre-built demos', free: '1-2', premium: '20-100+' },
  { feature: 'Premium plugins', free: 'Not included', premium: 'Included' },
]

const chooseFree = [
  'Personal blogs or hobby websites',
  'Limited budget projects',
  'Testing and learning WordPress',
  'Simple content-focused sites',
]

const choosePremium = [
  'Business or professional websites',
  'E-commerce stores',
  'Need advanced customization',
  'Require dedicated support',
]

const faqs = [
  {
    question: "What's the difference between free and premium WordPress themes?",
    answer:
      'Free themes offer basic functionality and limited customization, while premium themes include advanced features, more demos, premium plugins, and dedicated support. Premium themes are usually the better fit for businesses that need a stronger design and broader functionality.',
  },
  {
    question: 'Can I switch themes without losing content?',
    answer:
      'Posts, pages, and media remain intact when you switch themes, but you can lose theme-specific customizations, widgets, and custom post types. Backup the site first and expect to reconfigure parts of the design.',
  },
  {
    question: 'Which themes are best for SEO?',
    answer:
      'GeneratePress, Astra Pro, and Schema Pro are among the strongest SEO choices because they are lightweight, responsive, cleanly coded, and fast. Page speed still matters, so performance should be part of the decision.',
  },
  {
    question: 'How often should I update my theme?',
    answer:
      'Update whenever new versions are released, especially for security fixes and WordPress compatibility updates. Use backups and preferably test major updates on staging first.',
  },
]

export default function BestWordPressThemes2026() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="Best WordPress Themes 2026: 25+ Tested Themes for Every Website Type"
        description="Comprehensive review of the best WordPress themes based on 6 months of testing. Performance data, design analysis, and expert recommendations."
        url="https://sitepilot.co/best-wordpress-themes-2026"
        publishedDate="2026-03-05"
        modifiedDate="2026-03-05"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_22%,#ffffff_50%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[30rem] h-[24rem] bg-[radial-gradient(circle_at_18%_22%,rgba(99,91,255,0.05),transparent_24%),radial-gradient(circle_at_78%_20%,rgba(14,165,233,0.05),transparent_22%),radial-gradient(circle_at_52%_80%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 WordPress theme review
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Best WordPress themes 2026,
                <span className="brand-gradient-text block">for speed, SEO, and design quality.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                This guide covers 25+ themes tested across speed, mobile performance, SEO quality, and real-world usability. The goal is not to list everything. It is to show which themes actually make sense for business sites, content sites, and e-commerce builds.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/website-builder-vs-wordpress-2026" className="btn-brand">
                  WordPress vs website builders
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/best-web-hosting-2026" className="btn-secondary">
                  Best hosting for WordPress
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {stats.map((stat) => (
                  <div key={stat.label} className="page-card px-4 py-4">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
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
                      <div className="text-sm text-slate-500 mb-1">Quick read</div>
                      <div className="text-xl font-semibold text-slate-950">How to use this page</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Buy for fit
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Overall pick', 'Astra Pro remains the best default when you want speed, flexibility, and broad template support.'],
                      ['Best free option', 'GeneratePress is the strongest low-cost entry because performance stays excellent even without paying.'],
                      ['Design-first choice', 'Divi still matters when visual editing and layout flexibility matter more than absolute speed.'],
                      ['E-commerce fit', 'Flatsome remains the safer WooCommerce-first answer for stores that want a proven UI layer.'],
                    ].map(([title, note]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
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

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Top picks</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">The winners that matter most.</h2>
            <p className="page-lead text-lg">
              These are the shortest-path recommendations if you do not want to read the full matrix first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {winners.map((winner) => (
              <div key={winner.label} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-6 h-full">
                  <div className="text-xs uppercase tracking-[0.16em] text-indigo-500 mb-3">{winner.label}</div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-2">{winner.name}</h3>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="text-sm text-slate-700 mb-1">{winner.note}</div>
                    <div className="text-sm text-slate-500">{winner.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Performance data</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">What the testing showed.</h2>
            <p className="page-lead text-lg">
              We checked load times, SEO posture, and mobile responsiveness to separate themes that look good in demos from themes that behave well in production.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {performanceGroups.map((group) => (
              <div key={group.title} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-6 h-full">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">{group.title}</h3>
                  <div className="space-y-4">
                    {group.items.map((item) => (
                      <div key={item.name}>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-slate-700">{item.name}</span>
                          <span className="font-semibold text-slate-950">{item.score}</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-[#635bff] h-2 rounded-full" style={{ width: item.width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Theme categories</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Best themes by website type.</h2>
            <p className="page-lead text-lg">
              Not every site needs the same theme. These shortlists reflect the strongest fits for business sites and content-heavy sites.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {themeCategories.map((category) => (
              <div key={category.title} className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.8rem] p-7 md:p-8 h-full">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">{category.title}</h3>
                  <div className="space-y-6">
                    {category.themes.map((theme, index) => (
                      <div key={theme.name} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                        <div className="text-sm uppercase tracking-[0.14em] text-indigo-500 mb-2">#{index + 1}</div>
                        <h4 className="text-xl font-semibold text-slate-950 mb-2">{theme.name}</h4>
                        <p className="text-slate-600 leading-7 mb-4">{theme.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {theme.badges.map((badge) => (
                            <span key={badge} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                              {badge}
                            </span>
                          ))}
                        </div>
                        <div className="text-sm text-slate-500">
                          <span className="font-semibold text-slate-700">Price:</span> {theme.price}
                          <span className="mx-2">•</span>
                          <span className="font-semibold text-slate-700">Rating:</span> {theme.rating}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Pricing trade-off</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Free vs premium: what actually changes.</h2>
            <p className="page-lead text-lg">
              The right decision here is mostly about support, customization depth, and commercial risk rather than features in the abstract.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-6 py-4 text-left font-semibold text-slate-950 border-b border-slate-200">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold text-slate-950 border-b border-slate-200">Free themes</th>
                      <th className="px-6 py-4 text-center font-semibold text-indigo-700 border-b border-slate-200">Premium themes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {freeVsPremium.map((row) => (
                      <tr key={row.feature}>
                        <td className="px-6 py-4 font-medium border-b border-slate-200 text-slate-950">{row.feature}</td>
                        <td className="px-6 py-4 text-center border-b border-slate-200 text-slate-600">{row.free}</td>
                        <td className="px-6 py-4 text-center border-b border-slate-200 text-slate-700">{row.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <div className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">When to choose free themes</h3>
                  <div className="space-y-4">
                    {chooseFree.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="page-card-glow p-1.5">
                <div className="page-card rounded-[1.6rem] p-6 surface-muted">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-5">When to choose premium themes</h3>
                  <div className="space-y-4">
                    {choosePremium.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">FAQ</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Frequently asked questions.</h2>
            <p className="page-lead text-lg">
              These are the practical points that usually decide the purchase more than any demo gallery does.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="page-card p-6">
                <h3 className="text-xl font-semibold text-slate-950 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-5xl mx-auto px-4">
          <div className="page-card-glow p-8 md:p-12 surface-muted">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Final recommendation</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                Most sites should start with Astra Pro.
                <span className="block brand-gradient-text">GeneratePress is the best low-cost fallback, and Flatsome still leads for WooCommerce.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The best theme is the one that matches the site you are actually building, your technical comfort level, and the amount of support you expect to need. Start with the shortest-path recommendation, then refine from there instead of drowning in theme marketplace noise.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="page-card p-5 bg-white/90">
                  <div className="text-sm uppercase tracking-[0.14em] text-slate-500 mb-2">Best overall</div>
                  <div className="font-semibold text-slate-950">Astra Pro</div>
                </div>
                <div className="page-card p-5 bg-white/90">
                  <div className="text-sm uppercase tracking-[0.14em] text-slate-500 mb-2">Best free</div>
                  <div className="font-semibold text-slate-950">GeneratePress</div>
                </div>
                <div className="page-card p-5 bg-white/90">
                  <div className="text-sm uppercase tracking-[0.14em] text-slate-500 mb-2">Best e-commerce</div>
                  <div className="font-semibold text-slate-950">Flatsome</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Related reading</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Keep the broader site decision in view.</h2>
            <p className="page-lead text-lg">
              Theme choice is only one part of the stack. These follow-up pages help frame the larger platform and hosting decision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <Link key={article.href} href={article.href} className="page-card p-7 hover:-translate-y-0.5 transition-transform block">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{article.title}</h3>
                <p className="text-slate-600 leading-7 mb-5">{article.description}</p>
                <div className="inline-flex items-center font-semibold text-[#635bff]">
                  Open article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
