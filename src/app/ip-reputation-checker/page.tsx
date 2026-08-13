import Link from 'next/link'
import { headers } from 'next/headers'
import { Activity, DatabaseZap, ShieldCheck } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import IPReputationCheckerClient from './IPReputationCheckerClient'
import { pageDescription, pageTitle, pageUrl, metadata } from './metadata'

export { metadata }

async function pickVisitorTarget() {
  const headerList = await headers()
  const forwarded = headerList.get('x-forwarded-for')?.split(',')[0]?.trim()
  const realIp = headerList.get('x-real-ip')?.trim()
  const connectingIp = headerList.get('cf-connecting-ip')?.trim()
  return forwarded || realIp || connectingIp || '8.8.8.8'
}

const notes = ['Live risk engine', 'Live context engine', 'No synthetic enrichment or fake labels'] as const

const relatedLinks = [
  {
    href: '/proxies/mobile-proxy-software-comparison-2026',
    label: 'Mobile proxy software comparison',
  },
  {
    href: '/proxies/residential-vs-mobile-proxies-comparison-2026',
    label: 'Residential vs mobile proxies',
  },
  {
    href: '/hosting',
    label: 'Hosting hub',
  },
  {
    href: '/proxies/recommendation',
    label: 'Proxy recommendation path',
  },
] as const

export default async function IPReputationCheckerPage({
  searchParams,
}: {
  searchParams?: Promise<{ target?: string }>
}) {
  const resolvedSearchParams = await searchParams
  const initialTarget = resolvedSearchParams?.target?.trim() || (await pickVisitorTarget())

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-05-06"
        modifiedDate="2026-05-06"
        authorName="SitePilot Team"
      />

      <section className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        <section className="mb-4 flex flex-col gap-4 rounded-lg border border-slate-200 bg-white px-4 py-4 shadow-sm md:flex-row md:items-center md:justify-between md:px-5">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-indigo-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              IP reputation checker
            </div>
            <h1 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
              Inspect live IP reputation, ownership, and network context.
            </h1>
          </div>

          <div className="grid gap-2 text-xs text-slate-600 sm:grid-cols-3 md:max-w-xl">
            {notes.map((note) => (
              <div key={note} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                {note}
              </div>
            ))}
          </div>
        </section>

        <IPReputationCheckerClient initialTarget={initialTarget} />

        <section className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 text-sm font-semibold text-slate-950">Keep the decision loop moving</div>
          <div className="flex flex-wrap gap-2">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-950">
              <DatabaseZap className="h-4 w-4 text-indigo-600" />
              Data handoff
            </div>
            <p className="text-sm leading-6 text-slate-600">
              An IP reputation checker helps operators assess proxy signals, VPN signals, hosting likelihood, ASN ownership, and geolocation consistency before routing logins, checkout traffic, scraping sessions, or automation workloads through an address that could trigger blocks, fraud reviews, or account trust loss.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-950">
              <Activity className="h-4 w-4 text-sky-600" />
              Best use
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Use the result as first-pass triage for IP pools, login risk, checkout review, proxy selection, and automation workflows.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-950">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Decision model
            </div>
            <p className="text-sm leading-6 text-slate-600">
              The checker separates risk signals from context fields so supplier verdicts stay traceable instead of being blended into a fake single truth.
            </p>
          </div>
        </section>
      </section>
    </div>
  )
}
