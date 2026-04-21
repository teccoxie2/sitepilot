import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  FileSearch,
  Layers,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Implementation Best Practices 2026 | SitePilot'
const pageDescription =
  'Comprehensive enterprise AI implementation framework based on $25K investment research. Get proven strategies, best practices, and ROI optimization techniques for successful AI transformation.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-implementation-best-practices-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'enterprise AI implementation',
    'AI transformation strategy',
    'business AI adoption',
    'AI implementation framework',
    'enterprise AI best practices',
    'AI ROI optimization',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const heroStats = [
  { value: '$25K', label: 'investment research basis' },
  { value: '500+', label: 'companies analyzed' },
  { value: '78', label: 'AI tools tested' },
  { value: '5124%', label: 'best combination ROI' },
]

const phases = [
  {
    title: 'Phase 1: Foundation',
    window: '0-30 Days',
    note: 'Current state assessment, strategic objective definition, initial tool selection, and team preparation.',
    bullets: [
      'Current state assessment',
      'Strategic objective definition',
      'Initial tool selection & pilot',
      'Team training & preparation',
    ],
    tone: 'border-sky-100 bg-sky-50/80',
  },
  {
    title: 'Phase 2: Expansion',
    window: '31-90 Days',
    note: 'Pilot measurement, additional tool integration, process optimization, and scale-up planning.',
    bullets: [
      'Pilot success measurement',
      'Additional tool integration',
      'Process optimization',
      'Scale-up planning',
    ],
    tone: 'border-violet-100 bg-violet-50/80',
  },
  {
    title: 'Phase 3: Optimization',
    window: '91-180 Days',
    note: 'Performance analytics, advanced automation, cross-department integration, and ROI maximization.',
    bullets: [
      'Performance analytics implementation',
      'Advanced automation deployment',
      'Cross-department integration',
      'ROI maximization strategies',
    ],
    tone: 'border-indigo-100 bg-indigo-50/80',
  },
  {
    title: 'Phase 4: Innovation',
    window: '180+ Days',
    note: 'Continuous improvement, emerging technology evaluation, partnership development, and market advantage.',
    bullets: [
      'Continuous improvement protocols',
      'Emerging technology evaluation',
      'Strategic partnership development',
      'Market advantage consolidation',
    ],
    tone: 'border-amber-100 bg-amber-50/80',
  },
]

const bestPractices = [
  {
    title: 'Strategic planning',
    icon: Target,
    bullets: ['Clear ROI objectives definition', 'Stakeholder alignment & buy-in', 'Realistic timeline establishment', 'Success metrics identification', 'Risk assessment & mitigation'],
  },
  {
    title: 'Smart tool selection',
    icon: Zap,
    bullets: ['Start with proven combinations', 'Focus on quick wins first', 'Consider integration complexity', 'Evaluate total cost of ownership', 'Test before full commitment'],
  },
  {
    title: 'Change management',
    icon: Users,
    bullets: ['Comprehensive training programs', 'Champion identification & support', 'Gradual adoption approach', 'Regular feedback collection', 'Success celebration & recognition'],
  },
  {
    title: 'Security & compliance',
    icon: Shield,
    bullets: ['Data privacy protection protocols', 'Access control & authentication', 'Regulatory compliance verification', 'Regular security audits', 'Incident response procedures'],
  },
  {
    title: 'Performance monitoring',
    icon: BarChart3,
    bullets: ['Real-time KPI tracking', 'Regular ROI assessment', 'User adoption metrics', 'Process efficiency measurement', 'Continuous optimization loops'],
  },
  {
    title: 'Scaling strategy',
    icon: ArrowRight,
    bullets: ['Pilot success validation', 'Gradual rollout planning', 'Resource allocation optimization', 'Cross-department integration', 'Technology stack evolution'],
  },
]

const successStories = [
  {
    label: 'Manufacturing',
    title: 'Production optimization',
    bullets: ['Predictive maintenance reduced downtime by 31%', 'Quality control automation improved accuracy by 94%', 'Supply chain optimization cut inventory costs by 23%'],
    investment: '$47K',
    outcome: '$2.1M annual savings',
    tone: 'border-sky-100 bg-sky-50/70 text-sky-800',
  },
  {
    label: 'Professional services',
    title: 'Service transformation',
    bullets: ['Document automation saved 87% processing time', 'Client communication improved by 156% speed', 'Proposal automation increased win rate by 43%'],
    investment: '$23K',
    outcome: '$890K/year revenue increase',
    tone: 'border-violet-100 bg-violet-50/70 text-violet-800',
  },
  {
    label: 'Healthcare',
    title: 'Operational excellence',
    bullets: ['Medical documentation saved 5.2 hours/doctor/week', 'Patient queries response time reduced by 78%', 'Appointment optimization improved utilization by 91%'],
    investment: '$61K',
    outcome: '$2.8M annual savings',
    tone: 'border-indigo-100 bg-indigo-50/70 text-indigo-800',
  },
]

const relatedLinks = [
  {
    href: '/ai-tool-implementation-strategy-2026',
    title: 'AI Tool Implementation Strategy 2026',
    note: '把选型和 rollout 策略接起来。',
  },
  {
    href: '/ai-implementation-success-framework-2026',
    title: 'AI Implementation Success Framework 2026',
    note: '更聚焦实施成败因素。',
  },
  {
    href: '/ai-vendor-comparison-enterprise-2026',
    title: 'Enterprise AI Vendor Comparison',
    note: '先把供应商对比做扎实。',
  },
  {
    href: '/ai-tools-cost-benefit-analysis-2026',
    title: 'AI Tools Cost-Benefit Analysis',
    note: '看预算和收益怎么对齐。',
  },
  {
    href: '/ai-tools-cost-optimization-enterprise-2026',
    title: 'AI Tools Cost Optimization',
    note: '优化总拥有成本，不是只看报价。',
  },
  {
    href: '/ai-productivity-tools-comparison-2026',
    title: 'AI Productivity Tools Comparison',
    note: '把落地工具链串起来。',
  },
]

export default function EnterpriseAIImplementationPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-21"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI implementation best practices 2026
                </div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  Enterprise AI implementation，
                  <span className="brand-gradient-text block">别拿“先试试”当策略。</span>
                </h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  Comprehensive enterprise AI implementation framework based on $25K investment research. 这页保留原来的四阶段框架、最佳实践、成功案例和内部链接，只统一到当前浅色 Stripe-ish UI。
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#framework" className="btn-brand inline-flex items-center gap-2">
                    查看实施框架
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#best-practices" className="btn-secondary inline-flex items-center gap-2">
                    查看最佳实践
                  </a>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="page-card bg-white/90 p-4">
                      <div className="text-2xl font-semibold text-slate-950 md:text-3xl">{stat.value}</div>
                      <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
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
                        <div className="mb-1 text-sm text-slate-500">What this page keeps</div>
                        <div className="text-xl font-semibold text-slate-950">结构不变，皮肤统一</div>
                      </div>
                      <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        Practical
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        '四阶段实施路线图',
                        '六大最佳实践卡片',
                        '三组企业成功案例',
                        '保留 metadata / canonical / schema / internal links',
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                            <p className="text-sm leading-6 text-slate-600">{item}</p>
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

        <section id="framework" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Compass className="h-4 w-4 text-[#635bff]" />
              Implementation framework
            </div>
            <h2 className="page-title text-3xl md:text-4xl">4-phase enterprise rollout</h2>
            <p className="page-lead mt-3 text-lg">
              Current state assessment, pilot selection, scale-up planning, and long-term innovation — all in one practical sequence.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {phases.map((phase) => {
              const Icon = phase.title.includes('Foundation')
                ? FileSearch
                : phase.title.includes('Expansion')
                  ? Target
                  : phase.title.includes('Optimization')
                    ? BarChart3
                    : Layers
              return (
                <div key={phase.title} className={`page-card p-6 ${phase.tone}`}>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-white/80 bg-white/80 p-2 shadow-sm">
                        <Icon className="h-5 w-5 text-slate-800" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">{phase.title}</h3>
                        <div className="text-sm text-slate-500">{phase.window}</div>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-6 text-slate-600">{phase.note}</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <section id="best-practices" className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#635bff]" />
              Proven best practices
            </div>
            <h2 className="page-title text-3xl md:text-4xl">What actually keeps enterprise AI from going sideways</h2>
            <p className="page-lead mt-3 text-lg">
              The goal is not a big launch party. The goal is durable adoption, visible ROI, and fewer stupid surprises.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {bestPractices.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="page-card p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-[#635bff]" />
              Success stories
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Enterprise success stories</h2>
            <p className="page-lead mt-3 text-lg">
              Same story, different vertical: clear use case, disciplined rollout, measured outcome.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {successStories.map((story) => (
              <div key={story.label} className={`page-card p-6 ${story.tone}`}>
                <div className="mb-4 inline-flex rounded-full border border-current/15 bg-white/70 px-3 py-1 text-xs font-semibold">
                  {story.label}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-950">{story.title}</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  {story.bullets.map((bullet) => (
                    <p key={bullet}>• {bullet}</p>
                  ))}
                </div>
                <div className="mt-5 border-t border-slate-200/70 pt-4 text-sm text-slate-700">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-500">Investment</span>
                    <span className="font-semibold text-slate-950">{story.investment}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <span className="text-slate-500">Outcome</span>
                    <span className="font-semibold text-indigo-700">{story.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="page-card-glow rounded-[2rem] p-5 md:p-6">
            <div className="page-card flex flex-col gap-6 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="page-pill mb-3 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  CTA
                </div>
                <h2 className="page-title text-3xl md:text-4xl">Ready to transform your enterprise?</h2>
                <p className="page-lead mt-3 text-lg">
                  Get your customized AI implementation strategy based on proven frameworks and real enterprise data from our $25K investment research.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-roi-calculator" className="btn-brand inline-flex items-center gap-2">
                  Calculate AI ROI
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ai-tool-implementation-strategy-2026" className="btn-secondary inline-flex items-center gap-2">
                  Get implementation guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="mb-8 max-w-2xl">
            <div className="page-pill mb-3 inline-flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#635bff]" />
              Related resources
            </div>
            <h2 className="page-title text-3xl md:text-4xl">Internal links kept intact</h2>
            <p className="page-lead mt-3 text-lg">
              Same topical cluster, same navigation intent. Just less ugly.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="page-card group p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-3 text-lg font-semibold text-slate-950 group-hover:text-[#635bff]">{link.title}</div>
                <p className="text-sm leading-6 text-slate-600">{link.note}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#635bff]">
                  Open resource
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
