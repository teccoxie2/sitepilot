import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, CheckCircle2, Gauge, Sparkles, Workflow, Palette, ShieldCheck } from 'lucide-react'
import RelatedLinks, { websiteBuilderRelatedLinks } from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Readdy.ai Review 2026: AI-First Website Builder Evaluation | SitePilot'
const pageDescription =
  'Readdy.ai is an AI-first website builder focused on fast prompt-to-page generation, polished first drafts, and buyer-friendly launch speed. This review explains how SitePilot scored Readdy.ai, where it performs well, and what trade-offs buyers should understand before choosing it.'
const pageUrl = 'https://sitepilot.co/readdy-ai-review'

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

const scorecard = [
  {
    title: 'Ease of use',
    score: '8.4/10',
    body: 'Readdy.ai feels more approachable than a code-first AI tool and gives non-technical buyers a faster path to a usable draft.'
  },
  {
    title: 'First-pass design quality',
    score: '8.8/10',
    body: 'The strongest part of the product is its ability to generate visually credible first drafts quickly.'
  },
  {
    title: 'Speed to usable result',
    score: '8.8/10',
    body: 'Prompt-to-page speed is a major part of Readdy.ai’s appeal, especially for teams trying to validate concepts fast.'
  },
  {
    title: 'Customization depth',
    score: '7.4/10',
    body: 'Advanced iteration and fine-grained control still matter, but for many buyers the first-draft speed matters more.'
  },
]

const strengths = [
  'Fast prompt-to-page workflow',
  'Strong first-pass visual output',
  'Good fit for landing page ideation and AI-assisted concept validation',
  'More modern AI-first feel than old-school template-led builders',
]

const tradeoffs = [
  'Advanced iteration workflows are still evolving',
  'Power users may want clearer fine-grained steering controls',
  'Some feature boundaries are easier to understand after hands-on use',
  'Less ideal for teams that need maximum customization depth on day one',
]

export default function ReaddyAiReviewPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-23"
        modifiedDate="2026-04-23"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 pt-22 pb-20 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 mb-6 shadow-sm backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-indigo-500" />
                AI-first builder review
              </div>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.96] mb-6 text-slate-950">
                Readdy.ai review,
                <span className="block bg-gradient-to-r from-slate-950 via-indigo-700 to-sky-600 bg-clip-text text-transparent">
                  scored for real buyers.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
                Readdy.ai is an AI-first website builder focused on fast prompt-to-page generation, polished first drafts, and buyer-friendly launch speed. SitePilot scored it against practical builder criteria such as ease of use, first-pass output quality, speed to usable result, feature completeness, and launch readiness.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Link
                  href="/website-builders"
                  className="inline-flex items-center rounded-full bg-[#635bff] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(99,91,255,0.18)] hover:bg-[#564ee8] transition-colors"
                >
                  Back to builder hub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="https://readdy.ai/?via=ted"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  Visit Readdy.ai
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {[
                  'Public SitePilot score: 8.5/10',
                  'Best for AI-assisted first drafts',
                  'Stronger for launch speed than deep customization',
                  'Useful for teams validating pages quickly',
                ].map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 shadow-sm backdrop-blur-xl"
                  >
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
                    <span className="text-sm text-slate-700">{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/70 bg-white/75 p-5 backdrop-blur-2xl shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">SitePilot verdict</div>
                      <div className="text-2xl font-semibold text-slate-950">Strong AI-first builder</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                      8.5 / 10
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Fast prompt-to-page workflow',
                      'Polished first outputs',
                      'Good buyer fit when speed matters more than perfect editing depth',
                      'Worth consideration in the AI website builder category',
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="text-sm text-slate-700">{item}</div>
                          <Gauge className="h-5 w-5 text-indigo-500 shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative max-w-7xl mx-auto px-4 py-14 md:py-18">
        <section className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">How we scored it</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] mb-4 text-slate-950">
              Buyer-oriented builder criteria
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              For the public builder ranking, SitePilot scores Readdy.ai as a website builder for real buyers, not as a pure developer platform. That means we reward fast first drafts, visual polish, and buyer-friendly launch momentum more heavily than maximum long-term customization depth.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {scorecard.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200/90 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.035)]">
                <div className="text-sm text-slate-500 mb-3">{item.title}</div>
                <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-2">{item.score}</div>
                <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2 mb-16">
          <div className="rounded-[2rem] border border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#fcfdff_100%)] p-8 shadow-[0_14px_32px_rgba(15,23,42,0.035)]">
            <div className="max-w-2xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">What Readdy.ai does well</div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] mb-4 text-slate-950">Strengths</h2>
            </div>

            <div className="space-y-4">
              {strengths.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
                    <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#fbfcff_100%)] p-8 shadow-[0_14px_32px_rgba(15,23,42,0.035)]">
            <div className="max-w-2xl mb-8">
              <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Trade-offs buyers should understand</div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] mb-4 text-slate-950">Trade-offs</h2>
            </div>

            <div className="space-y-4">
              {tradeoffs.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-slate-500 mt-0.5 shrink-0" />
                    <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-4 mb-16">
          {[
            {
              title: 'AI usefulness',
              body: 'We judge whether the builder meaningfully shortens production time, not whether it can produce generic AI filler.',
              icon: Bot,
            },
            {
              title: 'Design quality',
              body: 'Visual quality matters because buyers want a usable draft, not a rough placeholder that still needs a full redesign.',
              icon: Palette,
            },
            {
              title: 'Business fit',
              body: 'A landing page workflow, a service site, and a commerce workflow are different jobs. Good builder reviews should respect that.',
              icon: Workflow,
            },
            {
              title: 'Launch trust',
              body: 'We also consider whether the product feels capable of supporting real publishable outcomes, not just demos.',
              icon: ShieldCheck,
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white mb-4 shadow-sm">
                  <Icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            )
          })}
        </section>

        <section className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">SitePilot verdict</h2>
          <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
            Readdy.ai earns an <strong className="text-indigo-600">8.5/10</strong> public builder score because it is strong where many buyers actually care: fast prompt-to-page motion, polished first drafts, and a modern AI-first builder feel. It is not the deepest platform for advanced customization, but it is a serious option for teams that value launch speed and AI-assisted creation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/website-builders" className="inline-flex items-center rounded-full bg-[#635bff] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(99,91,255,0.18)] hover:bg-[#564ee8] transition-colors">
              Back to builder hub
            </Link>
            <a href="https://readdy.ai/?via=ted" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
              Visit Readdy.ai
            </a>
          </div>
        </section>

        <RelatedLinks
          title="Related website builder guides"
          links={[
            { href: '/website-builders', title: 'Website builder hub', description: 'Compare the main builder categories and quick picks.' },
            { href: '/best-website-builders-2026', title: 'Best website builders 2026', description: 'Broader ranking across the main builder options.' },
            { href: '/best-ecommerce-website-builders-2026', title: 'Best ecommerce website builders', description: 'For buyers who care primarily about selling online.' },
            { href: '/website-builder-vs-wordpress-2026', title: 'Website builder vs WordPress', description: 'Understand the trade-off between managed builders and open CMS flexibility.' },
            ...websiteBuilderRelatedLinks.filter((link) => !['/website-builders', '/best-website-builders-2026', '/best-ecommerce-website-builders-2026', '/website-builder-vs-wordpress-2026'].includes(link.href)),
          ]}
        />
      </main>
    </div>
  )
}
