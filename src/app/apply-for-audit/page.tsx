import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Landmark,
  LockKeyhole,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const standardAuditItems = [
  '20-hour technical deep-dive',
  'Performance benchmarking (TTFB / CWV)',
  'Dedicated review article with SEO packaging',
  'Master comparison table integration',
  "SitePilot 'Verified' badge license",
  '7-day turnaround',
]

const customAuditItems = [
  'Cluster-level or multi-region testing',
  'Geo-specific benchmark programs',
  'White-glove monitoring and follow-up',
  'Custom scoping for complex infrastructure platforms',
]

const trustSignals = [
  'Secure payments via Stripe or Wise Business',
  'Technical audit focus: data integrity, server-level benchmarking, transparency',
  'Direct invoice request path for standard audits',
]

const relatedLinks = [
  {
    href: '/contact',
    title: 'Contact the BD team',
    note: 'Use this path for custom scope or enterprise partnership discussions.',
  },
  {
    href: '/hosting/best-web-hosting',
    title: 'Best web hosting coverage',
    note: 'Review how current SitePilot hosting coverage is framed.',
  },
  {
    href: '/methodology',
    title: 'Methodology',
    note: 'Start here if you want the review standards and scoring method.',
  },
]

export default function ApplyForAudit() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="website"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-24 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  SitePilot technical partnerships
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  Infrastructure audit program,
                  <span className="brand-gradient-text block">for platforms that want the receipts.</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Apply for a technical audit to feature your platform on SitePilot.co. We keep the original offer intact: technical benchmarking, transparent review coverage, and a direct invoice path for standard audits, now in the current light Stripe-ish UI.
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a
                    href="mailto:office@xentech.co.nz?subject=Technical Audit Request - SitePilot"
                    className="btn-brand inline-flex items-center gap-2"
                  >
                    Request audit invoice
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
                    Contact BD team
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {trustSignals.map((item) => (
                    <div key={item} className="page-card flex items-start gap-3 bg-white/90 p-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                      <span className="text-sm leading-6 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="mb-1 text-sm text-slate-500">Program focus</div>
                        <div className="text-xl font-semibold text-slate-950">Technical proof, not vague hype</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Audit-ready
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        'Server-level benchmarking and performance transparency stay central.',
                        'The standard audit path still routes through an email invoice request.',
                        'Custom enterprise scope still goes through the BD/contact path.',
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4 text-sm leading-6 text-slate-600">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/80 px-4 py-4 text-sm leading-6 text-slate-700">
                      If a platform wants exposure without evidence, this program is probably not for them.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-2">
          <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="rounded-[1.5rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-sky-50 p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-2 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Standard technical audit</div>
                  <div className="flex items-end gap-2">
                    <span className="text-6xl font-semibold tracking-[-0.06em] text-slate-950">$800</span>
                    <span className="pb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">USD</span>
                  </div>
                </div>
                <div className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                  7-day turnaround
                </div>
              </div>

              <div className="space-y-3">
                {standardAuditItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-4 text-sm font-medium leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="mailto:office@xentech.co.nz?subject=Technical Audit Request - SitePilot"
                className="btn-brand mt-8 inline-flex w-full items-center justify-center gap-2"
              >
                Request audit invoice
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="mt-6 flex items-center justify-center gap-5 text-slate-500">
                <CreditCard className="h-5 w-5" />
                <Landmark className="h-5 w-5" />
                <Shield className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="page-card p-8 md:p-10">
            <div className="mb-6">
              <div className="mb-2 text-sm uppercase tracking-[0.22em] text-slate-500">Custom audit</div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">For platforms with messier requirements.</h2>
            </div>
            <p className="mb-6 text-base leading-7 text-slate-600">
              The original custom option stays: cluster-level testing, geo-specific benchmarks, or white-glove monitoring for infrastructure platforms that need more than the default package.
            </p>
            <div className="space-y-3">
              {customAuditItems.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-secondary mt-8 inline-flex w-full items-center justify-center gap-2">
              Contact BD team
            </Link>
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="page-card border border-sky-100 bg-sky-50/80 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-white/80">
              <Zap className="h-5 w-5 text-[#635bff]" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">What the program is designed to reward</h2>
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <div className="rounded-2xl border border-white/80 bg-white/90 px-4 py-4">Platforms willing to be benchmarked at the infrastructure level.</div>
              <div className="rounded-2xl border border-white/80 bg-white/90 px-4 py-4">Teams that care about transparent performance reporting and review integrity.</div>
              <div className="rounded-2xl border border-white/80 bg-white/90 px-4 py-4">Vendors who understand that a verified badge should mean something.</div>
            </div>
          </div>

          <div className="page-card p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
              <LockKeyhole className="h-5 w-5 text-[#635bff]" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Trust & payment</h2>
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Secure payments via Stripe and Wise Business remain the trust signal on this page.</div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Standard audits start with an invoice request, not a blind checkout flow.</div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">Custom scopes go through direct contact so expectations are set before work starts.</div>
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#7c3aed] p-8 text-white">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to be audited properly?</h3>
              <p className="mt-3 max-w-2xl text-white/85">
                If your platform can stand up to technical scrutiny, ask for the invoice. If the scope is unusual, talk to the BD team. Keep it simple and direct.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:office@xentech.co.nz?subject=Technical Audit Request - SitePilot"
                  className="btn-brand bg-white text-slate-950 hover:bg-slate-100"
                >
                  Request invoice
                </a>
                <Link href="/contact" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                  Contact BD
                </Link>
              </div>
            </div>
          </div>

          <div className="page-card p-8">
            <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Related internal resources</h2>
            <div className="space-y-3">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 transition hover:border-indigo-200 hover:bg-indigo-50/60">
                  <div className="font-semibold text-slate-950">{item.title}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">{item.note}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
