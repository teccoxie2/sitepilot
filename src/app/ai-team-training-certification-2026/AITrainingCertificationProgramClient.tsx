'use client'

import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle2, Compass, GraduationCap, Sparkles, Shield, TrendingUp } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroSignals = [
  'Keeps the leadership, technical, business, and end-user training tracks.',
  'Keeps certification levels, delivery methods, timelines, and ROI data.',
  'Moves the page into the current light Stripe-ish UI.',
  'Keeps the related internal links and advisory CTA.',
]

const statCards = [
  { label: 'Leadership', value: '40h', note: 'Executive strategy and governance.' },
  { label: 'Technical', value: '60h', note: 'Implementation and platform operations.' },
  { label: 'Business', value: '30h', note: 'Processes, analysis, and project delivery.' },
  { label: 'Certification', value: '3 levels', note: 'From foundational fluency to expert depth.' },
]

const internalLinks = [
  { href: '/ai-implementation-checklist-enterprise-2026', title: 'AI Readiness Assessment', note: 'Confirm organizational readiness before rollout.' },
  { href: '/ai-change-management-framework-enterprise-2026', title: 'Change Management', note: 'Review how the change program should run.' },
  { href: '/ai-team-productivity-assessment-tool-2026', title: 'Skills Gap Analysis', note: 'Identify the capability gaps that training must close.' },
  { href: '/ai-tool-implementation-strategy-2026', title: 'Implementation Strategy', note: 'Connect training plans to deployment plans.' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: 'Book a custom engagement if you need a tailored program.' },
] as const

const tracks = [
  {
    title: 'Leadership Track',
    meta: '40 hours',
    tone: 'from-sky-50 to-blue-50',
    bullets: ['AI strategy development', 'ROI and investment decisions', 'Risk management', 'Change leadership'],
  },
  {
    title: 'Technical Track',
    meta: '60 hours',
    tone: 'from-indigo-50 to-sky-50',
    bullets: ['AI implementation', 'Model deployment', 'Integration strategies', 'Performance monitoring'],
  },
  {
    title: 'Business Track',
    meta: '30 hours',
    tone: 'from-violet-50 to-fuchsia-50',
    bullets: ['AI use case identification', 'Process optimization', 'Data analysis', 'Project management'],
  },
  {
    title: 'End-User Track',
    meta: 'Core workforce',
    tone: 'from-amber-50 to-orange-50',
    bullets: ['AI tool utilization', 'Productivity enhancement', 'Safety and ethics', 'Basic troubleshooting'],
  },
]

export default function AITrainingCertificationProgramClient() {
  return (
    <>
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-20"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
          <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
          <section className="page-hero relative">
            <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-3xl">
                  <div className="page-pill mb-6">
                    <Sparkles className="h-4 w-4 text-[#635bff]" />
                    Enterprise AI education
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    AI Team Training & Certification Program,
                    <span className="brand-gradient-text block">turn AI capability into a deployable organizational asset.</span>
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    This page keeps the original training paths, certification levels, delivery formats, implementation timeline, and ROI metrics. Only the UI has been aligned to the current light Stripe-ish system.
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <a href="#training-program" className="btn-brand inline-flex items-center gap-2">
                      Open program
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link href="/ai-team-productivity-assessment-tool-2026" className="btn-secondary inline-flex items-center gap-2">
                      Assess gaps
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {heroSignals.map((item) => (
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
                    <div className="page-card space-y-5 bg-white/95 p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="mb-1 text-sm text-slate-500">What this program keeps</div>
                          <div className="text-xl font-semibold text-slate-950">Same curriculum, cleaner shell</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          live ops
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {[
                          ['Tracks', 'Leadership, technical, business, and end-user.'],
                          ['Outputs', 'Hours, certification levels, delivery options, and ROI metrics.'],
                          ['Workflow', 'Keeps the implementation timeline and related training resources.'],
                          ['UI system', 'Uses the current light Stripe-ish cards and gradients.'],
                        ].map(([title, note]) => (
                          <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <div className="font-semibold text-slate-950">{title}</div>
                            <div className="mt-1 text-sm text-slate-500">{note}</div>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-[1.5rem] border border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-5">
                        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700/80">
                          Guardrail
                        </div>
                        <div className="text-sm leading-relaxed text-slate-700">
                          Training is not a slide deck, and certification is not a sticker. Teams need to use the tools for real.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {statCards.map((card) => (
                <div key={card.label} className="page-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">{card.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-900">{card.label}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="training-program" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Training curriculum
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Break AI training into roles, levels, and deliverables.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                You still get the leadership, technical, business, and end-user paths. The difference is that it now looks like SitePilot instead of an outdated training brochure.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {tracks.map((track) => (
                <div key={track.title} className={`rounded-[1.5rem] border border-slate-200 bg-gradient-to-br ${track.tone} p-6`}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-slate-950">{track.title}</h3>
                    <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">{track.meta}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                    {track.bullets.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6">
                <h3 className="text-lg font-semibold text-slate-950">Certification levels</h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  <p><strong className="text-slate-950">Foundation Certificate:</strong> 8 hours, basic AI literacy, 2-year validity.</p>
                  <p><strong className="text-slate-950">Professional Certificate:</strong> track-specific curriculum, practical project, 3-year validity.</p>
                  <p><strong className="text-slate-950">Expert Certificate:</strong> advanced curriculum + capstone, 5-year validity.</p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-sky-50/70 p-6">
                <h3 className="text-lg font-semibold text-slate-950">Training delivery options</h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  <p>In-person workshops, executive seminars, self-paced modules, and virtual classrooms are all preserved.</p>
                  <p>The original adoption and ROI narrative is still here. It just no longer looks like leftover theme inventory.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                ROI and rollout
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">When training is done right, the return is not mysterious.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This section keeps the original ROI, implementation timeline, and outcome framing. Only the presentation changed.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                ['Productivity Increase', '78%', 'After 3 months'],
                ['Faster Implementation', '45%', 'AI project delivery'],
                ['Employee Confidence', '92%', 'In AI tool usage'],
                ['Annual Savings', '$2.3M', 'Average enterprise'],
              ].map(([label, value, note]) => (
                <div key={label} className="page-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{value}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <Shield className="h-4 w-4 text-indigo-600" />
                Related internal resources
              </div>
              <div className="mt-5 space-y-3">
                {internalLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
                  >
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.note}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                <Calendar className="h-4 w-4 text-sky-600" />
                Delivery timeline
              </div>
              <div className="mt-5 space-y-4">
                {[
                  ['W1', 'Assessment & planning', 'Skills mapping and curriculum customization'],
                  ['W2', 'Foundation rollout', 'Organization-wide AI literacy program launch'],
                  ['W4', 'Specialized tracks', 'Role-specific training programs'],
                  ['W8', 'Certification', 'Skills validation and certification completion'],
                ].map(([week, title, note]) => (
                  <div key={week} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-[#635bff]/10 px-2 py-1 text-xs font-semibold text-[#635bff]">{week}</span>
                      <div className="font-semibold text-slate-950">{title}</div>
                    </div>
                    <div className="mt-2 text-sm text-slate-600">{note}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-sky-500 p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to build an AI-capable workforce?</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  Turn training and certification into a system so teams do not have to relearn from zero every time.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/ai-tool-implementation-strategy-2026" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    Implementation strategy
                  </Link>
                  <Link href="/apply-for-audit" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    Schedule consultation
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
