import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertCircle, ArrowRight, Eye, HardDrive, Shield, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Website Security Checklist 2026 | SitePilot'
const pageDescription =
  'A website security checklist in 2026 should verify web application firewall coverage, enforced multi-factor authentication, encrypted off-site backups, TLS hardening, malware detection, least-privilege admin access, patch discipline, and tested incident recovery so the site can keep payments, customer data, and backend systems resilient under routine attack pressure.'
const pageUrl = 'https://sitepilot.co/website-security-checklist-2026'

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

const stats = [
  { label: 'Checkpoints', value: '20 points' },
  { label: 'Threat intel', value: 'Live' },
  { label: 'SSL standard', value: 'TLS 1.3' },
  { label: 'Compliance', value: 'GDPR/SOC2' },
]

const defenseLayers = [
  {
    title: 'WAF protection',
    desc: 'Every site needs a web application firewall that filters malicious traffic before it reaches the origin.',
    icon: Shield,
  },
  {
    title: 'Encrypted backups',
    desc: 'Off-site, encrypted daily backups are the real recovery path after a successful breach.',
    icon: HardDrive,
  },
  {
    title: 'Identity audit',
    desc: 'Multi-factor authentication should be enforced for every administrative login without exceptions.',
    icon: Eye,
  },
]

const auditLinks = [
  {
    title: 'Compare secure hosts',
    href: '/best-web-hosting-2026',
    desc: 'Shortlist hosting stacks with stronger patching, isolation, backup, and response posture.',
  },
  {
    title: 'Audit hosting posture',
    href: '/web-hosting',
    desc: 'Review hosting controls before you trust uptime claims or pricing pages.',
  },
  {
    title: 'Review TLS options',
    href: '/best-free-ssl-certificates-2026',
    desc: 'Check certificate choices, renewal burden, and TLS deployment tradeoffs.',
  },
  {
    title: 'Assess platform exposure',
    href: '/website-builder-vs-wordpress-2026',
    desc: 'Compare builder convenience against plugin risk, patching overhead, and admin surface area.',
  },
]

export default function SecurityChecklist2026() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative border-b border-slate-200/80">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 security audit
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                Website security checklist 2026,
                <span className="brand-gradient-text block">for hardening the parts that actually fail first.</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">{pageDescription}</p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/web-hosting" className="btn-brand">
                  Hosting audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/best-free-ssl-certificates-2026" className="btn-secondary">
                  SSL certificate options
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
                      <div className="text-sm text-slate-500 mb-1">Audit focus</div>
                      <div className="text-xl font-semibold text-slate-950">What belongs on the checklist</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Defense before drama
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Traffic filtering', 'Start with WAF coverage before assuming the origin can absorb bad traffic safely.'],
                      ['Identity controls', 'MFA and least-privilege access are still mandatory because admin abuse is a simpler failure mode than zero-days.'],
                      ['Recovery path', 'Backups, restore testing, and incident readiness matter more than status-page optimism.'],
                      ['Patch discipline', 'The cleanest stack still fails if plugins, CMS layers, and hosting controls drift out of date.'],
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

      <section className="page-section surface-muted relative">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <div className="page-pill mb-4">Core defense layers</div>
            <h2 className="page-title text-3xl md:text-5xl mb-4">Non-negotiable protocols for 2026.</h2>
            <p className="page-lead text-lg">
              Security starts with boring controls that are continuously maintained, not with one-time hardening theater.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {defenseLayers.map((layer) => {
              const Icon = layer.icon

              return (
                <div key={layer.title} className="page-card-glow p-1.5">
                  <div className="page-card rounded-[1.8rem] p-8 h-full">
                    <div className="w-12 h-12 rounded-2xl border border-indigo-100 bg-indigo-50 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#635bff]" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{layer.title}</h3>
                    <p className="text-slate-600 leading-7">{layer.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-4xl mx-auto px-4">
          <div className="page-card-glow p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 rounded-2xl border border-rose-100 bg-rose-50 flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-7 h-7 text-rose-500" />
              </div>
              <div className="text-sm uppercase tracking-[0.22em] text-rose-600/80 mb-3">2026 warning</div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">
                The AI-attack problem is no longer theoretical.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Bot traffic is more adaptive than it used to be. Static filtering alone is no longer enough for higher-risk sites. Behavioral analysis, stronger hosting posture, and a tested response path matter much more than generic “secure by default” marketing copy.
              </p>
              <Link href="/web-hosting" className="btn-brand">
                Audit my host&apos;s security
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {auditLinks.map((item) => (
              <Link key={item.href} href={item.href} className="page-card p-7 hover:-translate-y-0.5 transition-transform block">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                  <ArrowRight className="h-5 w-5 text-[#635bff]" />
                </div>
                <p className="text-sm leading-7 text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
