import Link from 'next/link'
import { AlertTriangle, ArrowRight, BarChart3, CheckCircle2, Compass, Lock, Shield, Sparkles, TrendingDown, Users, Zap } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'

const heroSignals = [
  '保留风险仪表板、监控指标、威胁记录、合规状态与 CTA',
  '保留 7 层防护体系与安全性能指标叙事',
  '统一到当前浅色 Stripe-ish 视觉系统',
  '保留所有内部链接和风险信息结构',
]

const statCards = [
  { value: '低风险', label: 'Risk Rating', note: '七日内无高风险事件。' },
  { value: '98.5%', label: 'Compliance', note: 'GDPR, SOX, HIPAA 追踪中。' },
  { value: '247', label: 'Assets Monitored', note: '模型与端点持续监控。' },
  { value: '1,247', label: 'Threat Blocks', note: '本月阻断次数。' },
]

const relatedLinks = [
  { href: '/ai-governance-compliance-framework-2026', title: 'AI Governance Framework', note: '治理和风险要一起管。' },
  { href: '/tools/ai-compliance-audit-2026', title: 'AI Compliance Audit', note: '更深的合规检查。' },
  { href: '/ai-implementation-success-framework-2026', title: 'Implementation Success Framework', note: '把风险控制接到实施流程。' },
  { href: '/ai-security-framework-enterprise-2026', title: 'AI Security Framework', note: '看安全框架的主线页。' },
  { href: '/apply-for-audit', title: 'Talk to SitePilot', note: '需要顾问式评估就直接约。' },
] as const

export default function AIRiskManagementDashboardPage() {
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
          <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />
          <section className="page-hero relative">
            <div className="page-hero-inner mx-auto pb-20 pt-12 md:pb-28 md:pt-16">
              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-3xl">
                  <div className="page-pill mb-6">
                    <Sparkles className="h-4 w-4 text-[#635bff]" />
                    Real-time risk monitoring
                  </div>

                  <h1 className="page-title mb-6 text-5xl md:text-7xl">
                    AI Risk Management Dashboard Enterprise 2026
                    <span className="brand-gradient-text block">把安全、合规和威胁状况一起看明白。</span>
                  </h1>

                  <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                    这页保留原始的风险评分、监控指标、告警列表、防护体系和 CTA，只把外观统一到当前浅色 Stripe-ish 系统。
                  </p>

                  <div className="mb-10 flex flex-wrap gap-3">
                    <a href="#risk-dashboard" className="btn-brand inline-flex items-center gap-2">
                      Open dashboard
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link href="/tools/ai-compliance-audit-2026" className="btn-secondary inline-flex items-center gap-2">
                      Compliance audit
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
                          <div className="mb-1 text-sm text-slate-500">What stays intact</div>
                          <div className="text-xl font-semibold text-slate-950">Same risk engine, better shell</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          7 layers
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {[
                          ['Metrics', '风险等级、合规状态、设备、拦截次数继续保留。'],
                          ['Threats', '实时威胁记录和状态更新仍然可见。'],
                          ['Controls', '快速操作和安全策略依旧在场。'],
                          ['UI system', '统一到当前浅色 Stripe-ish cards and gradients。'],
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
                          风险页应该像报警器，不应该像红色烟花秀。
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

          <section id="risk-dashboard" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="max-w-3xl">
              <div className="page-pill mb-4 inline-flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Monitoring dashboard
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                用一套干净的仪表盘，把 AI 风险讲清楚。
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                这不是换个皮肤而已，是把“谁在报警、谁在挨打、谁要负责”看得更清楚。
              </p>
            </div>

            <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="page-card-soft p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">Risk metrics snapshot</h3>
                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {[
                      ['Risk Rating', '低风险', '7日内无高风险事件'],
                      ['Compliance', '98.5%', 'GDPR, SOX, HIPAA'],
                      ['Assets Monitored', '247', 'AI 模型与端点'],
                      ['Threat Blocks', '1,247', '本月阻断次数'],
                    ].map(([label, value, note]) => (
                      <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                        <div className="text-sm text-slate-600">{label}</div>
                        <div className="mt-1 text-xl font-semibold text-slate-950">{value}</div>
                        <div className="mt-1 text-sm text-slate-500">{note}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="page-card-soft p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-slate-500">7-layer protection</div>
                      <h3 className="text-2xl font-semibold text-slate-950">7层防护体系</h3>
                    </div>
                    <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                      monitored
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {[
                      { title: '数据安全', desc: 'PII保护、加密传输、访问控制', icon: Lock },
                      { title: '模型安全', desc: '模型完整性、输出验证', icon: Shield },
                      { title: '基础设施', desc: '云环境、网络安全、端点防护', icon: Zap },
                      { title: '合规监管', desc: 'GDPR、SOX、HIPAA 合规', icon: Users },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                        <item.icon className="h-5 w-5 text-[#635bff]" />
                        <div className="mt-3 font-semibold text-slate-950">{item.title}</div>
                        <div className="mt-1 text-sm text-slate-600">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="page-card-glow p-1.5">
                  <div className="page-card-soft space-y-5 p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-slate-500">Latest events</div>
                        <div className="text-xl font-semibold text-slate-950">实时威胁监控</div>
                      </div>
                      <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                        live feed
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        ['数据访问模式异常', 'AI模型training-v2.3异常访问敏感数据集', '已自动隔离'],
                        ['API调用频率超限', 'third-party-connector超出每分钟1000次限制', '需要审查'],
                        ['模型输出数据泄露风险', 'customer-analysis-ai尝试输出PII数据', '紧急阻断'],
                        ['权限配置更新', 'user@company.com权限降级为只读', '已完成'],
                      ].map(([title, note, status]) => (
                        <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="font-semibold text-slate-950">{title}</div>
                            <div className="text-xs text-slate-500">14:2x</div>
                          </div>
                          <p className="mt-1 text-sm text-slate-600">{note}</p>
                          <div className="mt-2 inline-flex rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
                            {status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                    <Compass className="h-4 w-4 text-sky-600" />
                    Related internal resources
                  </div>
                  <div className="mt-5 space-y-3">
                    {relatedLinks.map((item) => (
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
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <TrendingDown className="h-4 w-4 text-orange-600" />
                Security performance
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  ['Threat detection rate', '99.8%'],
                  ['Average response time', '<30秒'],
                  ['24/7 monitoring', 'Always on'],
                  ['Data leakage events', '0'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-center">
                    <div className="text-2xl font-semibold text-slate-950">{value}</div>
                    <div className="mt-1 text-sm text-slate-600">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                Quick actions
              </div>
              <div className="mt-4 grid gap-3">
                {['生成风险报告', '更新安全策略', '配置告警规则'].map((label) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm font-medium text-slate-800">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="page-card-glow overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-r from-[#0f172a] via-[#635bff] to-[#7c3aed] p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">增强您的 AI 安全防护</h3>
                <p className="mx-auto mt-3 max-w-2xl text-white/85">
                  如果你要把这个风险管理仪表盘接到更大的治理、合规和安全流程里，SitePilot 可以继续往下接。
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/tools/ai-compliance-audit-2026" className="btn-brand bg-white text-slate-950 hover:bg-slate-100">
                    免费安全评估
                  </Link>
                  <Link href="/ai-security-framework-enterprise-2026" className="btn-secondary border-white/25 bg-white/10 text-white hover:bg-white/15">
                    Security framework
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <p>© 2026 SitePilot. Enterprise AI risk management dashboard.</p>
              <p className="mt-1">Protect your data, models, and business.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
