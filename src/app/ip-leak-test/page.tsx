import Link from 'next/link'
import { headers } from 'next/headers'
import { Activity, ShieldAlert, ShieldCheck, Wifi, Orbit } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import IPLeakTestClient from './IPLeakTestClient'
import { pageDescription, pageTitle, pageUrl, metadata } from './metadata'

export { metadata }

async function pickVisitorTarget() {
  const headerList = await headers()
  const forwarded = headerList.get('x-forwarded-for')?.split(',')[0]?.trim()
  const realIp = headerList.get('x-real-ip')?.trim()
  const connectingIp = headerList.get('cf-connecting-ip')?.trim()
  return forwarded || realIp || connectingIp || '8.8.8.8'
}

const notes = [
  'WebRTC first-pass probe',
  'Reverse DNS from live IP checker',
  'No fake DNS-leak verdicts',
] as const

const relatedLinks = [
  { href: '/ip-reputation-checker', label: 'IP reputation checker' },
  { href: '/proxies/recommendation', label: 'Proxy recommendation path' },
  { href: '/proxies/residential-vs-mobile-proxies-comparison-2026', label: 'Proxy comparison' },
] as const

export default async function IPLeakTestPage() {
  const initialTarget = await pickVisitorTarget()

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-05-07"
        modifiedDate="2026-05-07"
        authorName="SitePilot Team"
      />

      <main className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        <section className="mb-4 flex flex-col gap-4 rounded-lg border border-slate-200 bg-white px-4 py-4 shadow-sm md:flex-row md:items-center md:justify-between md:px-5">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-sky-700">
              <Wifi className="h-3.5 w-3.5" />
              IP leak test
            </div>
            <h1 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
              Check whether your browser is exposing local or reflexive network candidates.
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
              An IP leak test checks whether your browser exposes local network candidates, reflexive public IP data, or other connection hints that weaken proxy privacy. Use it before trusting a VPN or proxy route, because one exposed candidate can invalidate the anonymity story fast.
            </p>
          </div>

          <div className="grid gap-2 text-xs text-slate-600 sm:grid-cols-3 md:max-w-xl">
            {notes.map((note) => (
              <div key={note} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                {note}
              </div>
            ))}
          </div>
        </section>

        <IPLeakTestClient initialTarget={initialTarget} />

        <section className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 text-sm font-semibold text-slate-950">Related tools</div>
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
              <Orbit className="h-4 w-4 text-indigo-600" />
              What this checks
            </div>
            <p className="text-sm leading-6 text-slate-600">
              A browser leak test can surface host candidates, public reflexive candidates, and the kind of network exposure your session is showing before you trust a route.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-950">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Verified bits only
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Reverse DNS comes from the live reputation checker. WebRTC candidates come from the browser. No pretend DNS-leak score is shown until a real probe exists.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-950">
              <ShieldAlert className="h-4 w-4 text-amber-600" />
              Current limitation
            </div>
            <p className="text-sm leading-6 text-slate-600">
              This first pass does not claim full DNS-leak coverage. It gives you the network exposure signals that are actually available in-browser.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
