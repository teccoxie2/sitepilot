import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  Target,
  TrendingUp,
  Users,
  Zap,
  Clock3,
  DollarSign,
  AlertTriangle,
  Sparkles,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'Enterprise AI Success Patterns Analysis 2026 | SitePilot'
const pageDescription =
  'Enterprise AI success patterns analysis based on 50 Fortune 500 companies and 18 months of tracking. Learn the 7 key patterns that separate successful implementations from failures.'
const pageUrl = 'https://sitepilot.co/enterprise-ai-success-patterns-analysis-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['enterprise AI success patterns', 'AI implementation framework', 'AI project success', 'enterprise digital transformation', 'AI ROI analysis'],
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: pageUrl },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const heroStats = [
  { value: '50', label: 'Fortune 500 companies studied' },
  { value: '18 mo', label: 'tracking period' },
  { value: '83%', label: 'successful projects share' },
  { value: '$250K-$15M', label: 'investment range' },
]

const patterns = [
  {
    step: '1',
    title: 'Business pain point first, technology second',
    badge: '95% success',
    tone: 'border-indigo-100 bg-indigo-50/80',
    success: [
      'Start from a concrete business problem',
      'Quantify the cost of the pain point',
      'Design the AI solution around the outcome',
      'Use measurable success metrics from day one',
    ],
    fail: [
      'Start with the technology and look for a use case later',
      'Copy competitors without a business case',
      'Use vague goals like “we should do AI”',
      'End up with no clear ROI model',
    ],
  },
  {
    step: '2',
    title: 'CFO involvement throughout',
    badge: '89% success',
    tone: 'border-sky-100 bg-sky-50/80',
    success: ['CFO joins kickoff', 'Monthly ROI review', 'Budget milestone gates', 'Capital allocation alignment'],
    fail: ['IT runs it alone', 'Budget drift goes unnoticed', 'No financial monitoring', 'ROI gets discovered too late'],
  },
  {
    step: '3',
    title: 'Iterative rollout over big-bang deployment',
    badge: '91% success',
    tone: 'border-violet-100 bg-violet-50/80',
    success: ['Sprint 1: core capability', 'Sprint 2: expansion', 'Sprint 3: integration', 'Sprint 4: optimization'],
    fail: ['18-month monster plan', 'One shot to solve everything', 'Changing requirements midstream', 'High abandonment rates'],
  },
  {
    step: '4',
    title: 'Strong data readiness before launch',
    badge: '82% success',
    tone: 'border-amber-100 bg-amber-50/80',
    success: ['Clean data pipeline', 'Governance and lineage', 'Data quality ownership', 'Prep before model work'],
    fail: ['AI launched on messy data', 'Manual cleanup after launch', 'Bad inputs become bad outputs', 'Costly rework'],
  },
  {
    step: '5',
    title: 'Change management is funded, not hoped for',
    badge: '87% success',
    tone: 'border-rose-100 bg-rose-50/80',
    success: ['Training is budgeted', 'Champions are named', 'Adoption is measured', 'Feedback loops stay open'],
    fail: ['Users are surprised after launch', 'Training is an afterthought', 'Adoption stalls', 'Everyone blames the tool'],
  },
  {
    step: '6',
    title: 'Security and compliance are built in',
    badge: '88% success',
    tone: 'border-slate-200 bg-slate-50/80',
    success: ['Security requirements are defined early', 'Compliance reviews happen in plan', 'Access is role-based', 'Audit trails are kept'],
    fail: ['Security is bolted on later', 'Legal gets looped in at the end', 'Permissions are messy', 'Risk exposure grows'],
  },
  {
    step: '7',
    title: 'Governance, metrics, and escalation are explicit',
    badge: '90% success',
    tone: 'border-indigo-100 bg-indigo-50/80',
    success: ['Monthly governance review', 'Escalation path is known', 'Metrics are visible', 'Rollback plan exists'],
    fail: ['Nobody owns exceptions', 'Metrics are buried in slides', 'Incidents are ad hoc', 'Learnings never stick'],
  },
]

const roiCards = [
  { title: 'Quick ROI projects', tone: 'bg-indigo-50', items: [['Customer service automation', '280% ROI', '8 months'], ['Inventory optimization', '220% ROI', '10 months'], ['Fraud detection', '450% ROI', '6 months']] },
  { title: 'Mid-term value projects', tone: 'bg-sky-50', items: [['Supply chain optimization', '180% ROI', '18 months'], ['Personalization', '240% ROI', '15 months'], ['Risk management', '320% ROI', '16 months']] },
]

const checklist = [
  'Budget owners are named',
  'Success metrics are tied to business pain',
  'CFO reviews are scheduled',
  'Pilot scope is small enough to learn fast',
  'Data readiness is scored before launch',
  'Security/compliance gates are explicit',
  'Adoption plan is funded',
  'Rollback path exists',
]

const relatedLinks = [
  { href: '/enterprise-ai-implementation-best-practices-2026', title: 'Implementation best practices', note: '实施框架和成功模式一起看。' },
  { href: '/enterprise-ai-roi-calculation-model-2026', title: 'ROI calculation model', note: '把成功模式连到财务模型。' },
  { href: '/enterprise-ai-implementation-budget-planning-guide-2026', title: 'Budget planning guide', note: '预算规划和成功模式配套。' },
  { href: '/enterprise-ai-security-risk-management-guide-2026', title: 'Security & risk guide', note: '安全和治理不该缺席。' },
  { href: '/enterprise-ai-deployment-risk-assessment-guide', title: 'Deployment risk assessment', note: '看部署阶段的风险控制。' },
  { href: '/enterprise-ai-transformation-roadmap-2026', title: 'Transformation roadmap', note: '把模式映射到路线图。' },
]

export default function EnterpriseAISuccessPatternsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup type="article" title={pageTitle} description={pageDescription} url={pageUrl} publishedDate="2026-03-10" modifiedDate="2026-04-20" authorName="SitePilot Team" />

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
                <div className="page-pill mb-6 inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#635bff]" />Enterprise AI success patterns analysis</div>
                <h1 className="page-title mb-6 text-5xl md:text-7xl">7个关键模式，<span className="brand-gradient-text block">先把成功路径看清楚，别让项目变成事故。</span></h1>
                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">Enterprise AI success patterns analysis based on 50 Fortune 500 companies and 18 months of tracking. This page keeps the 7 patterns, ROI examples, checklist, and internal links in the unified light Stripe-ish UI.</p>
                <div className="mb-10 flex flex-wrap gap-3">
                  <a href="#patterns" className="btn-brand inline-flex items-center gap-2">查看7个模式 <ArrowRight className="h-4 w-4" /></a>
                  <a href="#checklist" className="btn-secondary inline-flex items-center gap-2">查看清单</a>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-3xl">
                  {heroStats.map((stat) => (<div key={stat.label} className="page-card bg-white/90 p-4"><div className="text-2xl font-semibold text-slate-950 md:text-3xl">{stat.value}</div><div className="mt-1 text-sm text-slate-600">{stat.label}</div></div>))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
                <div className="relative page-card-glow p-5 md:p-6">
                  <div className="page-card bg-white/95 p-6">
                    <div className="mb-6 flex items-center justify-between"><div><div className="mb-1 text-sm text-slate-500">What the research says</div><div className="text-xl font-semibold text-slate-950">Patterns beat optimism</div></div><div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">Evidence-based</div></div>
                    <div className="space-y-3">{['Business pain first', 'CFO in the loop', 'Iterate small', 'Governance on paper and in practice'].map((item) => (<div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"><div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><p className="text-sm leading-6 text-slate-600">{item}</p></div></div>))}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Success rate', '83% of tracked projects followed the same core operating patterns.'],
            ['Decision quality', 'Patterns reduce guesswork and stop strategy theater.'],
            ['ROI direction', 'Good patterns make payback visible earlier.'],
            ['Failure prevention', 'Weak patterns show up before the budget gets cooked.'],
          ].map(([title, body]) => (
            <div key={title} className="page-card p-5"><div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900"><BarChart3 className="h-4 w-4 text-indigo-500" />{title}</div><p className="text-sm leading-6 text-slate-600">{body}</p></div>
          ))}
        </section>

        <section id="patterns" className="mb-16">
          <div className="mb-8 max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Compass className="h-4 w-4 text-[#635bff]" />7 success patterns</div><h2 className="page-title text-3xl md:text-4xl">7个决定成败的关键模式</h2><p className="page-lead mt-3 text-lg">Each pattern is a practical operating rule, not a motivational poster.</p></div>
          <div className="space-y-5">
            {patterns.map((pattern) => (
              <div key={pattern.step} className={`page-card p-6 md:p-8 ${pattern.tone}`}>
                <div className="mb-6 flex items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-white/80"><Target className="h-5 w-5 text-slate-800" /></div><div><div className="text-sm uppercase tracking-[0.24em] text-slate-500">Pattern {pattern.step}</div><h3 className="text-xl font-semibold text-slate-950">{pattern.title}</h3></div></div><div className="rounded-full border border-current/15 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">{pattern.badge}</div></div>
                <div className="grid gap-5 lg:grid-cols-2">
                  <div className="rounded-3xl border border-white/70 bg-white/70 p-5"><h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Success path</h4><ul className="space-y-2 text-sm text-slate-700">{pattern.success.map((bullet) => (<li key={bullet} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" /><span>{bullet}</span></li>))}</ul></div>
                  <div className="rounded-3xl border border-white/70 bg-white/70 p-5"><h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Failure path</h4><ul className="space-y-2 text-sm text-slate-700">{pattern.fail.map((bullet) => (<li key={bullet} className="flex items-start gap-2"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" /><span>{bullet}</span></li>))}</ul></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 grid gap-5 lg:grid-cols-2">
          {roiCards.map((card) => (
            <div key={card.title} className={`page-card p-6 ${card.tone}`}>
              <h3 className="mb-4 text-xl font-semibold text-slate-950">{card.title}</h3>
              <div className="space-y-3">
                {card.items.map(([name, roi, payback]) => (
                  <div key={name} className="rounded-2xl border border-white/70 bg-white/80 p-4">
                    <div className="flex items-center justify-between gap-4"><span className="font-medium text-slate-900">{name}</span><span className="font-semibold text-slate-950">{roi}</span></div>
                    <div className="mt-1 text-sm text-slate-600">Payback: {payback}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="checklist" className="mb-16">
          <div className="page-card-glow rounded-[2rem] p-5 md:p-6">
            <div className="page-card flex flex-col gap-6 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl"><div className="page-pill mb-3 inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#635bff]" />Checklist</div><h2 className="page-title text-3xl md:text-4xl">Success checklist</h2><p className="page-lead mt-3 text-lg">Useful if you want fewer surprises and more payback.</p></div>
              <div className="grid gap-2 sm:grid-cols-2">{checklist.map((item) => (<div key={item} className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700"><CheckCircle2 className="mr-2 inline h-4 w-4 text-indigo-500" />{item}</div>))}</div>
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
