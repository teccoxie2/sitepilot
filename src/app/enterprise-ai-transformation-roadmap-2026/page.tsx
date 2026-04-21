import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  Clock3,
  Layers,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
  Shield,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Transformation Roadmap 2026 | SitePilot'
const pageDescription =
  'Complete enterprise AI transformation roadmap for 2026. 18-month strategic implementation framework, change management protocols, and $2M-50M ROI validation methods for Fortune 500 digital transformation.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-transformation-roadmap-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['enterprise AI transformation', 'AI transformation roadmap 2026', 'enterprise digital transformation', 'AI implementation strategy', 'AI change management'],
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: pageUrl },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const heroStats = [
  { value: '73%', label: 'fail due to poor change management' },
  { value: '$47M', label: 'average ROI in successful cases' },
  { value: '18 mo', label: 'optimal transformation timeline' },
  { value: '150+', label: 'enterprise implementations studied' },
]

const phases = [
  {
    title: 'Foundation phase',
    window: 'Months 1-6',
    tone: 'border-sky-100 bg-sky-50/80',
    icon: Target,
    bullets: ['Executive alignment workshop', 'AI readiness assessment', 'Use case prioritization', 'Vendor selection strategy', 'Change management design', 'Governance model setup'],
  },
  {
    title: 'Pilot implementation phase',
    window: 'Months 7-12',
    tone: 'border-indigo-100 bg-indigo-50/80',
    icon: TrendingUp,
    bullets: ['3-5 high-impact pilots', 'Performance monitoring', 'User feedback integration', 'Pilot success validation', 'Scale-up strategy development', 'ROI measurement update'],
  },
  {
    title: 'Enterprise scale phase',
    window: 'Months 13-18',
    tone: 'border-violet-100 bg-violet-50/80',
    icon: Layers,
    bullets: ['Department-by-department rollout', 'Cross-functional integration', 'Advanced use case expansion', 'AI-native process redesign', 'Optimization and scaling', 'Transformation completion review'],
  },
]

const contextCards = [
  { title: 'Why transformations fail', body: 'Cultural resistance, leadership split, technical debt, skills gaps, and vendor lock-in keep killing the program before value shows up.' },
  { title: 'Why transformations work', body: 'Aligned leadership, phased rollout, measurable checkpoints, and real change management keep the program alive long enough to produce ROI.' },
  { title: 'What the roadmap is for', body: 'Turn AI from one-off experiments into a repeatable operating model with a timeline that finance can actually sign off on.' },
]

const changeMgmt = [
  { title: 'Executive sponsorship', body: 'CEO/COO active championship with visible time allocation.' },
  { title: 'AI leadership council', body: 'Cross-functional steering with real decision authority.' },
  { title: 'Change champions', body: 'Network of internal advocates to keep adoption moving.' },
  { title: 'Training & enablement', body: 'Role-based learning paths and feedback loops.' },
]

const metrics = [
  { title: 'Foundation', items: ['>85% executive alignment', '>80% infrastructure readiness', '95% key staff trained'] },
  { title: 'Pilot', items: ['>200% pilot ROI', '>80% active usage', '>30% efficiency gains'] },
  { title: 'Scale', items: ['$20M-$100M 3-year ROI', 'Level 4/5 AI maturity', 'Top 10% adoption position'] },
]

const relatedLinks = [
  { href: '/enterprise-ai-implementation-best-practices-2026', title: 'Implementation best practices', note: '先看实施最佳实践。' },
  { href: '/enterprise-ai-implementation-budget-planning-guide-2026', title: 'Budget planning guide', note: '预算和路线图要一起走。' },
  { href: '/enterprise-ai-security-risk-management-guide-2026', title: 'Security & risk guide', note: '安全与治理不能掉队。' },
  { href: '/enterprise-ai-success-patterns-analysis-2026', title: 'Success patterns analysis', note: '成功模式和路线图是配套件。' },
  { href: '/enterprise-ai-roi-optimization-framework-2026', title: 'ROI optimization framework', note: 'ROI 框架补全财务逻辑。' },
  { href: '/enterprise-ai-vendor-comparison-guide-2026', title: 'Vendor comparison guide', note: '供应商选择放进路线图。' },
]

export default function EnterpriseAITransformationRoadmap() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} publishedDate="2026-03-09" modifiedDate="2026-04-20" authorName="SitePilot Team" />

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
                <div className="page-pill mb-6 inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#635bff]" />Enterprise AI transformation roadmap</div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">Enterprise AI transformation，<span className="brand-gradient-text block">别指望一年内“全员AI化”还能不翻车。</span></h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">Complete enterprise AI transformation roadmap for 2026. 18-month strategic implementation framework, change management protocols, and ROI validation methods — same content, cleaner shell.</p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#roadmap-framework" className="btn-brand inline-flex items-center gap-2">查看路线图 <ArrowRight className="h-4 w-4" /></a>
                  <a href="#change-management" className="btn-secondary inline-flex items-center gap-2">查看变革框架</a>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-3xl">
                  {heroStats.map((stat) => (<div key={stat.label} className="page-card bg-white/90 p-4"><div className="text-2xl font-semibold text-slate-950 md:text-3xl">{stat.value}</div><div className="mt-1 text-sm text-slate-600">{stat.label}</div></div>))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between"><div><div className="mb-1 text-sm text-slate-500">Roadmap logic</div><div className="text-xl font-semibold text-slate-950">Phased rollout beats wishful thinking</div></div><div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">18 months</div></div>
                    <div className="space-y-3">{['Foundation', 'Pilot implementation', 'Enterprise scale', 'Change management'].map((item) => (<div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"><div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><p className="text-sm leading-6 text-slate-600">{item}</p></div></div>))}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contextCards.map((card) => (<div key={card.title} className="page-card p-5"><div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900"><BarChart3 className="h-4 w-4 text-indigo-500" />{card.title}</div><p className="text-sm leading-6 text-slate-600">{card.body}</p></div>))}
        </section>

        <section id="roadmap-framework" className="mb-16">
          <div className="mb-8 max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Compass className="h-4 w-4 text-[#635bff]" />18-month framework</div><h2 className="page-title text-3xl md:text-4xl">18-Month Enterprise AI Transformation Framework</h2><p className="page-lead mt-3 text-lg">Three phases, real checkpoints, no magic wand required.</p></div>
          <div className="space-y-5">
            {phases.map((phase) => {
              const Icon = phase.icon
              return (
                <div key={phase.title} className={`page-card p-6 md:p-8 ${phase.tone}`}>
                  <div className="mb-6 flex items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-white/80"><Icon className="h-5 w-5 text-slate-800" /></div><div><div className="text-sm uppercase tracking-[0.24em] text-slate-500">{phase.window}</div><h3 className="text-xl font-semibold text-slate-950">{phase.title}</h3></div></div><div className="rounded-full border border-current/15 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">Phase</div></div>
                  <ul className="grid gap-2 md:grid-cols-2 text-sm text-slate-700">{phase.bullets.map((bullet) => (<li key={bullet} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>{bullet}</span></li>))}</ul>
                </div>
              )
            })}
          </div>
        </section>

        <section id="change-management" className="mb-16">
          <div className="mb-8 max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Users className="h-4 w-4 text-[#635bff]" />Change management</div><h2 className="page-title text-3xl md:text-4xl">Enterprise AI Change Management Framework</h2><p className="page-lead mt-3 text-lg">AI transformation dies in culture long before it dies in code.</p></div>
          <div className="grid gap-5 lg:grid-cols-2">
            {changeMgmt.map((item) => (<div key={item.title} className="page-card p-6"><h3 className="mb-3 text-xl font-semibold text-slate-950">{item.title}</h3><p className="text-sm leading-6 text-slate-600">{item.body}</p></div>))}
          </div>
        </section>

        <section className="mb-16">
          <div className="page-card-glow rounded-[2rem] p-5 md:p-6">
            <div className="page-card flex flex-col gap-6 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Shield className="h-4 w-4 text-[#635bff]" />Success metrics</div><h2 className="page-title text-3xl md:text-4xl">Transformation success metrics</h2><p className="page-lead mt-3 text-lg">If the metrics don’t move, the roadmap is just decoration.</p></div>
              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (<div key={metric.title} className="rounded-2xl border border-slate-200 bg-white/90 p-4"><div className="mb-2 text-sm font-semibold text-slate-900">{metric.title}</div><ul className="space-y-1 text-sm text-slate-600">{metric.items.map((item) => (<li key={item}>• {item}</li>))}</ul></div>))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="mb-8 max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Zap className="h-4 w-4 text-[#635bff]" />Related resources</div><h2 className="page-title text-3xl md:text-4xl">Internal links kept intact</h2><p className="page-lead mt-3 text-lg">Same cluster, same intent, cleaner UI.</p></div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{relatedLinks.map((link) => (<Link key={link.href} href={link.href} className="page-card group p-6 transition hover:-translate-y-0.5 hover:shadow-lg"><div className="mb-3 text-lg font-semibold text-slate-950 group-hover:text-[#635bff]">{link.title}</div><p className="text-sm leading-6 text-slate-600">{link.note}</p><div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#635bff]">Open resource <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></div></Link>))}</div>
        </section>
      </main>
    </div>
  )
}
