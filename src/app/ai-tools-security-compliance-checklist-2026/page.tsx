import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'
import Link from 'next/link'
import { marked } from 'marked'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Lock,
  Shield,
  Sparkles,
  Target,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = '企业AI工具安全合规审计清单 2026版 | SitePilot'
const pageDescription =
  '企业 AI 工具安全与合规审计要同时检查数据驻留、访问控制、监管义务、供应商尽调和部署治理，否则上线越快，出事也越快。这个 2026 检查清单保留原有 GDPR、SOX、HIPAA、供应商审计和实施路线图内容。'
const pageUrl = 'https://sitepilot.co/ai-tools-security-compliance-checklist-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI工具合规',
    '企业AI安全',
    'GDPR合规',
    'SOX审计',
    'HIPAA合规',
    '数据安全审计',
    'AI工具风险评估',
    '企业安全框架',
    '合规检查清单',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: '专业级 AI 工具安全合规框架，覆盖数据安全、监管义务、供应商尽调与部署治理。',
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: '企业 AI 工具安全合规检查清单：保留原有法规框架与审计逻辑，只统一到当前浅色 Stripe-ish UI。',
  },
}

marked.setOptions({ breaks: true, gfm: true })

const heroStats = [
  { value: '500+', label: '企业合规实施样本' },
  { value: '$1.2M', label: '年均违规损失风险' },
  { value: '15', label: '监管框架与机构要求' },
  { value: '90天', label: '企业治理落地节奏' },
]

const auditSignals = [
  '数据驻留、删除能力和审计日志没有确认前，别急着把业务数据喂进去。',
  '合规不是法务单兵作战，IT、安全、采购和业务负责人都得进场。',
  '供应商尽调没做透，后面补救通常更贵，而且还更狼狈。',
  '真正有用的清单，不是拿来装专业，是拿来拦下烂决策。',
]

const auditLevels = [
  {
    title: 'Level 1 · 数据安全审计',
    icon: Lock,
    tone: 'border-rose-100 bg-rose-50/80 text-rose-800',
    items: ['数据驻留与传输加密', '身份验证与访问控制', '数据备份与删除政策', 'API 安全与审计日志'],
    note: '任一关键项不达标，就不是“有点风险”，而是高风险。',
  },
  {
    title: 'Level 2 · 法规合规审计',
    icon: Shield,
    tone: 'border-amber-100 bg-amber-50/80 text-amber-800',
    items: ['GDPR 数据主体权利', 'SOX 内控与审计要求', 'HIPAA 健康信息保护', '行业特定监管义务'],
    note: '合规状态至少要能区分完全、部分和违规，别只写“基本符合”。',
  },
  {
    title: 'Level 3 · 企业整合适配',
    icon: Target,
    tone: 'border-sky-100 bg-sky-50/80 text-sky-800',
    items: ['IT 基础设施兼容性', '数据治理体系整合', '供应商尽职调查', '部署实施最佳实践'],
    note: '真正上线难的，通常不是模型，而是整合和治理。',
  },
]

const riskExamples = [
  'GDPR 罚款案例：制造业数据泄露，损失 $2.3M',
  'SOX 整改案例：金融服务企业额外成本 $850K',
  'HIPAA 处罚案例：医疗机构违规成本 $420K',
  '供应商中断案例：72 小时停摆造成 $420K 业务损失',
]

const relatedLinks = [
  {
    href: '/ai-tools-risk-assessment-enterprise-2026',
    title: 'AI 工具风险评估框架',
    description: '先评风险，再决定谁能进企业环境。',
  },
  {
    href: '/ai-tools-usage-tracking-dashboard-2026',
    title: 'AI 工具使用追踪看板',
    description: '上线之后要盯使用率、权限和异常活动。',
  },
  {
    href: '/ai-roi-calculator',
    title: 'AI ROI 计算器',
    description: '安全、合规和 ROI 要一起算，不要各玩各的。',
  },
]

export default function AIToolsSecurityComplianceChecklistPage() {
  const contentPath = join(process.cwd(), 'content', 'ai-tools-security-compliance-checklist-2026.md')
  const fileContent = readFileSync(contentPath, 'utf-8')
  const htmlContent = marked.parse(fileContent) as string

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-11"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_56%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[34rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
        <section className="page-hero relative">
          <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="max-w-3xl">
                <div className="page-pill mb-6">
                  <Sparkles className="h-4 w-4 text-[#635bff]" />
                  Enterprise AI security compliance 2026
                </div>

                <h1 className="page-title mb-6 text-5xl md:text-7xl">
                  AI 工具安全合规，
                  <span className="brand-gradient-text block">别等出事了才想起审计。</span>
                </h1>

                <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                  企业 AI 工具安全与合规审计要同时检查数据驻留、访问控制、监管义务、供应商尽调和部署治理，否则上线越快，翻车也越快。这个页面保留原有 GDPR、SOX、HIPAA、供应商审计和实施路线图内容，只把视觉统一到当前浅色 Stripe-ish 系统。
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <Link href="/ai-tools-risk-assessment-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                    先做风险评估
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/ai-tools" className="btn-secondary inline-flex items-center gap-2">
                    返回 AI tools hub
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  {heroStats.map((item) => (
                    <div key={item.label} className="page-card bg-white/90 p-4">
                      <div className="mb-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{item.value}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
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
                        <div className="mb-1 text-sm text-slate-500">Audit baseline</div>
                        <div className="text-xl font-semibold text-slate-950">四个硬判断</div>
                      </div>
                      <div className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                        合规不是装饰
                      </div>
                    </div>

                    <div className="space-y-3">
                      {auditSignals.map((item) => (
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

        <section className="mb-16 page-card-glow overflow-hidden rounded-[2rem] border border-rose-100 bg-gradient-to-r from-rose-50/90 via-orange-50/80 to-white p-1.5">
          <div className="rounded-[1.8rem] border border-rose-100/80 bg-white/90 p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="page-pill mb-4 inline-flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-rose-500" />
                  风险警示
                </div>
                <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                  87% 的企业不是没买工具，
                  <span className="brand-gradient-text block">是买了以后根本没把风险关上。</span>
                </h2>
                <p className="text-lg leading-8 text-slate-600">
                  原页里的风险告警、罚款案例和监管压力都保留。因为这些东西不是恐吓文案，是你不做治理时迟早会收到的账单。
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {riskExamples.map((item) => (
                  <div key={item} className="page-card rounded-2xl border border-rose-100 bg-rose-50/60 p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm uppercase tracking-[0.22em] text-indigo-600/80">Three-level audit model</div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              先分层审，
              <span className="brand-gradient-text block">再决定能不能进生产环境。</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              这三层结构就是这页的骨架：先查数据安全，再查法规义务，最后看企业整合和供应商治理。顺序错了，判断就容易变味。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {auditLevels.map((level) => {
              const Icon = level.icon
              return (
                <div key={level.title} className="page-card p-8">
                  <div className={`mb-5 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${level.tone}`}>
                    {level.title}
                  </div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                    <Icon className="h-5 w-5 text-[#635bff]" />
                  </div>
                  <div className="space-y-3">
                    {level.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-600">
                    {level.note}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr] mb-16">
          <div className="page-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                <ClipboardCheck className="h-5 w-5 text-[#635bff]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">完整审计正文</h2>
            </div>

            <div
              className="prose prose-lg max-w-none
              prose-headings:text-slate-950 prose-headings:font-semibold
              prose-h1:text-4xl prose-h1:tracking-[-0.04em]
              prose-h2:text-2xl prose-h2:tracking-[-0.03em] prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:text-slate-900 prose-h3:mt-8 prose-h3:mb-3
              prose-h4:text-base prose-h4:text-slate-900 prose-h4:mt-6 prose-h4:mb-2
              prose-p:text-slate-600 prose-p:leading-8
              prose-strong:text-slate-950
              prose-a:text-[#635bff] hover:prose-a:text-[#4f46e5]
              prose-ul:text-slate-600 prose-ol:text-slate-600
              prose-li:my-1
              prose-blockquote:border-l-[#635bff] prose-blockquote:bg-indigo-50/50 prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:text-slate-700
              prose-code:text-[#635bff] prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-2xl
              prose-table:block prose-table:overflow-x-auto prose-th:bg-slate-50 prose-th:text-slate-900 prose-td:text-slate-600 prose-th:border prose-td:border prose-th:border-slate-200 prose-td:border-slate-200"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>

          <div className="space-y-6">
            <div className="page-card p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                  <Shield className="h-5 w-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">实施提醒</h2>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">只看功能不看审计日志，通常等于给未来事故写邀请函。</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">合规框架要在采购前卡口，不要等签完合同才让法务进场。</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4">季度 review 不能省。工具、条款、模型能力和监管要求都会变。</div>
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
                  <BarChart3 className="h-5 w-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">相关内部资源</h2>
              </div>
              <div className="space-y-3">
                {relatedLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="page-card-soft block rounded-2xl border border-slate-200 bg-slate-50/90 p-4 transition hover:border-sky-200 hover:bg-sky-50/70"
                  >
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="page-card-glow p-8 surface-muted">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                  <Target className="h-5 w-5 text-[#635bff]" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">下一步动作</h2>
              </div>
              <p className="mb-6 text-slate-600 leading-7">
                真要把这页用起来，就把现有 AI 工具列成清单：供应商、处理数据类型、权限模型、审计日志、合同条款、退出路径。没有这张表，所谓“合规治理”多半只是会议纪要文学。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ai-tools-risk-assessment-enterprise-2026" className="btn-brand inline-flex items-center gap-2">
                  去做风险评估
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ai-tools-usage-tracking-dashboard-2026" className="btn-secondary">
                  查看使用追踪
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
