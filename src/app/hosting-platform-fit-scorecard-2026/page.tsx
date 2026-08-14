import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Cloud, Gauge, LifeBuoy, Server, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { normalizeMetadata } from '@/lib/seo'
import HostingPlatformFitScorecardClient from './HostingPlatformFitScorecardClient'

const pageTitle = 'Hosting Platform Fit Scorecard 2026 | SitePilot'
const pageDescription =
  'Score managed WordPress, shared, and cloud hosting by site type, traffic, migration complexity, SEO control, and support needs.'
const pageUrl = 'https://sitepilot.co/hosting-platform-fit-scorecard-2026'

const metadataConfig: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'hosting platform scorecard',
    'managed WordPress vs shared hosting',
    'cloud hosting fit',
    'hosting migration decision tool',
    'SEO hosting comparison',
  ],
  authors: [{ name: 'SitePilot Team' }],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
    siteName: 'SitePilot',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  robots: { index: true, follow: true },
}

export const metadata: Metadata = normalizeMetadata(metadataConfig)

const workflow = [
  {
    title: 'Describe the workload',
    text: 'Start with the site type and monthly traffic the platform must serve, not the vendor logo you already have in mind.',
    icon: Server,
  },
  {
    title: 'Expose the trade-offs',
    text: 'Migration complexity, SEO control, and support expectations change what “best value” actually means.',
    icon: Gauge,
  },
  {
    title: 'Take a defensible next step',
    text: 'Use the weighted result as a shortlist signal, then validate limits, quotes, migration scope, and support terms.',
    icon: LifeBuoy,
  },
] as const

export default function HostingPlatformFitScorecard2026Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="custom"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        data={{
          '@type': 'WebApplication',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          isAccessibleForFree: true,
        }}
      />

      <section className="page-hero relative">
        <div className="page-hero-inner mx-auto max-w-7xl px-4 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" /> Hosting decision support
              </div>
              <h1 className="page-title mb-6 text-5xl md:text-7xl">
                Pick a hosting shape
                <span className="brand-gradient-text block">that fits the workload, not the sales page.</span>
              </h1>
              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                This scorecard compares managed WordPress, shared, and cloud hosting against the constraints that usually decide a migration: site type, traffic, complexity, SEO control, and support expectations.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#scorecard" className="btn-brand inline-flex items-center gap-2">
                  Run the scorecard <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/web-hosting" className="btn-secondary">
                  Read hosting coverage
                </Link>
              </div>
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.7rem] bg-white/95 p-7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Three platform paths</div>
                    <div className="text-xl font-semibold tracking-[-0.03em] text-slate-950">Managed WordPress · Shared · Cloud</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm leading-6 text-slate-600">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">Weighted score across five buyer constraints.</div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">Every score stays visible so the recommendation can be challenged.</div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">Shareable URL and Markdown memo for the migration conversation.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="scorecard" className="relative mx-auto max-w-7xl px-4 py-14 md:py-18">
        <HostingPlatformFitScorecardClient />
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 md:pb-28">
        <div className="mb-10 max-w-3xl">
          <div className="page-pill mb-4">How to use the result</div>
          <h2 className="page-title mb-4 text-3xl md:text-5xl">Make the platform decision explainable.</h2>
          <p className="page-lead text-lg">
            The scorecard is a first-pass filter. Confirm the top option against real traffic, current hosting limits, migration access, redirect work, support response terms, and a dated quote before moving production.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {workflow.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="page-card p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-6 rounded-[1.7rem] border border-indigo-100 bg-indigo-50/70 p-6 text-sm leading-6 text-indigo-950">
          <div className="mb-2 flex items-center gap-2 font-semibold"><CheckCircle2 className="h-4 w-4" /> Evidence standard</div>
          Treat every result as an illustrative fit scenario. Replace assumptions with measured traffic, current uptime and support data, migration inventory, and vendor terms before approval.
        </div>
      </section>
    </div>
  )
}
