import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  HelpCircle,
  Shield,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = '企业AI治理框架2026 | 完整实施指南 | SitePilot'
const pageDescription =
  '基于 Fortune 500 公司实践的企业 AI 治理框架，涵盖政策模板、合规清单、风险控制和 12 个月实施路线图，帮助团队负责任地部署 AI 系统。'
const pageUrl = 'https://sitepilot.co/ai-governance-framework-enterprise-2026'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AI治理框架',
    '企业AI政策',
    'AI合规',
    'AI伦理',
    'AI风险管理',
    '企业AI治理',
    'AI监管框架',
  ],
  authors: [{ name: 'SitePilot Team' }],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
    siteName: 'SitePilot',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const quickNav = [
  { href: '#overview', title: '治理定义', note: '为什么企业现在就要建立 AI 治理' },
  { href: '#framework', title: '框架模块', note: '政策、风险、合规与组织架构' },
  { href: '#roadmap', title: '12个月路线图', note: '从盘点到规模化治理' },
  { href: '#practices', title: '最佳实践', note: '组织、技术与文化建设' },
  { href: '#faq', title: '常见问题', note: '委员会、成本、周期与 KPI' },
] as const

const summaryCards = [
  { value: '15+', label: '可直接落地的政策模板' },
  { value: '12', label: '个月实施路线图' },
  { value: '95%', label: '目标合规成功率' },
  { value: '$2.5M', label: '平均年度风险缓释价值' },
] as const

const coreGoals = [
  {
    title: '公平与无偏见',
    description: '用测试、审查和升级路径减少模型偏见与不一致决策。',
    icon: Target,
    accent: 'text-indigo-600',
  },
  {
    title: '隐私与数据保护',
    description: '把数据最小化、使用边界、保留策略和访问控制纳入日常流程。',
    icon: Shield,
    accent: 'text-sky-600',
  },
  {
    title: '透明与可解释',
    description: '为内部运营、法务审计和终端用户提供足够的解释能力。',
    icon: FileText,
    accent: 'text-indigo-600',
  },
  {
    title: '风险与声誉控制',
    description: '避免监管处罚、舆论事件和高价值 AI 项目的失控扩散。',
    icon: AlertTriangle,
    accent: 'text-amber-600',
  },
] as const

const riskDrivers = [
  {
    title: '法律风险',
    tone: 'border-rose-200 bg-rose-50 text-rose-900',
    note: '欧盟 AI 法案、美国州级监管和行业规则都在抬高企业 AI 失误成本。',
  },
  {
    title: '声誉风险',
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
    note: '算法偏见、错误自动化和不透明决策会直接侵蚀客户信任与品牌估值。',
  },
  {
    title: '运营风险',
    tone: 'border-sky-200 bg-sky-50 text-sky-900',
    note: '没有治理的 AI 项目更容易出现故障、漂移、返工和维护成本失控。',
  },
  {
    title: '商业机会',
    tone: 'border-indigo-200 bg-indigo-50 text-indigo-900',
    note: '治理成熟的团队通常能更快通过审批、更稳交付，并把 ROI 讲清楚。',
  },
] as const

const frameworkComponents = [
  {
    title: 'AI 伦理与原则',
    description: '把企业价值观翻译成 AI 使用原则、升级规则和审查标准。',
    icon: Shield,
    columns: [
      {
        heading: '伦理指南',
        items: [
          '公平性与偏见预防协议',
          '透明度与可解释性要求',
          '隐私保护与数据最小化',
          '人工监督与决策干预机制',
        ],
      },
      {
        heading: '政策模板',
        items: [
          'AI 伦理宪章模板',
          '算法问责政策',
          'AI 决策准则',
          '偏见检测与缓释流程',
        ],
      },
    ],
  },
  {
    title: '风险管理框架',
    description: '把高风险场景识别、监控、应对和回滚机制嵌入 AI 生命周期。',
    icon: AlertTriangle,
    columns: [
      {
        heading: '风险评估',
        items: [
          '高/中/低风险分级方法',
          '影响评估与业务容忍度',
          '持续监控与异常告警',
          'AI 事件响应预案',
        ],
      },
      {
        heading: '缓释策略',
        items: [
          '技术防护与验证措施',
          '人工复核与审批门槛',
          '测试、上线和回滚机制',
          '供应商与第三方责任控制',
        ],
      },
    ],
  },
  {
    title: '合规与法律控制',
    description: '面向多司法辖区构建证据链、文档标准和审计准备度。',
    icon: FileText,
    columns: [
      {
        heading: '监管对齐',
        items: [
          'EU AI Act 合规清单',
          'GDPR 的 AI 专项要求',
          '美国 AI 政策与行政命令对齐',
          '金融、医疗等行业监管映射',
        ],
      },
      {
        heading: '文档要求',
        items: [
          'AI 系统说明文档模板',
          '数据血缘与来源追踪',
          '审计轨迹保留流程',
          '合规报告与例外说明模板',
        ],
      },
    ],
  },
] as const

const operatingModel = [
  {
    title: 'Policy foundation',
    detail: '以伦理、数据使用、问责和风险容忍度为核心的政策底座。',
    icon: FileText,
  },
  {
    title: 'Compliance tools',
    detail: '清单、审计模版、监控规则和跨法域控制映射。',
    icon: Shield,
  },
  {
    title: 'Implementation guide',
    detail: '明确季度里程碑、责任人、培训动作和 KPI。',
    icon: Clock,
  },
] as const

const governancePractices = [
  {
    title: '组织架构最佳实践',
    items: [
      '设立 AI 伦理官或同等责任角色',
      '建立跨部门 AI 治理委员会并形成固定会议节奏',
      '在业务单元设 AI 治理联络人',
      '定义清晰的权限矩阵与升级流程',
      '建立技术、业务、伦理三级审查机制',
    ],
  },
  {
    title: '技术实施最佳实践',
    items: [
      '部署自动化偏见检测与公平性监控',
      '建立模型性能与伦理指标仪表板',
      '落地可解释 AI 技术和记录机制',
      '把版本控制、变更审批与回滚流程制度化',
      '配置实时告警与异常处理流程',
    ],
  },
  {
    title: '文化建设最佳实践',
    items: [
      '为所有员工提供 AI 伦理和使用培训',
      '建立治理举报与反馈机制',
      '把 AI 治理指标纳入绩效考核',
      '定期复盘案例并沉淀经验',
      '持续分享治理成功故事与失败教训',
    ],
  },
] as const

const trendGroups = [
  {
    title: '监管加强',
    items: [
      '欧盟 AI 法案进入更强执行阶段，高风险系统要求更明确',
      '美国联邦与州级 AI 规则逐步细化',
      '中国 AI 算法备案与内容治理要求持续演进',
      '金融、医疗、教育等行业专项标准继续增加',
    ],
  },
  {
    title: '技术发展',
    items: [
      '可解释 AI 逐渐从加分项变成基础配置',
      '联邦学习和隐私增强技术加速普及',
      '自动化合规监控工具更容易进入日常运营',
      '一体化 AI 治理平台开始替代分散式脚本与手工检查',
    ],
  },
] as const

const roadmapPhases = [
  {
    phase: 'Q1',
    timing: '1-3个月',
    title: '基础搭建与盘点',
    items: [
      '组建 AI 治理委员会',
      '梳理现有 AI 资产与风险画像',
      '完成关键利益相关方访谈与培训',
      '把通用框架定制成企业内部政策底稿',
    ],
  },
  {
    phase: 'Q2',
    timing: '4-6个月',
    title: '政策落地与监控启动',
    items: [
      '发布伦理宪章与问责政策',
      '上线风险管理和审批流程',
      '部署基础监控与合规检查机制',
      '启动员工培训与认证计划',
    ],
  },
  {
    phase: 'Q3',
    timing: '7-9个月',
    title: '系统集成与流程固化',
    items: [
      '把治理要求嵌入开发与采购流程',
      '上线自动化监控和异常预警',
      '更新供应商管理与第三方控制条款',
      '建立 KPI 与经营层汇报机制',
    ],
  },
  {
    phase: 'Q4',
    timing: '10-12个月',
    title: '优化评估与规模化',
    items: [
      '完成治理成熟度审计与差距分析',
      '优化流程并压缩审查周期',
      '形成年度成效报告',
      '建立持续改进和复盘机制',
    ],
  },
] as const

const impactGroups = [
  {
    title: '风险缓释价值',
    icon: Shield,
    accent: 'text-indigo-600',
    rows: [
      ['监管合规成本', '-60%'],
      ['AI 相关事故', '-85%'],
      ['审计准备时间', '-70%'],
      ['法律暴露风险', '-90%'],
    ],
  },
  {
    title: '运营效率提升',
    icon: BarChart3,
    accent: 'text-indigo-600',
    rows: [
      ['AI 项目审批速度', '+40%'],
      ['利益相关方信心', '+65%'],
      ['部署成功率', '+50%'],
      ['AI 投资 ROI', '+35%'],
    ],
  },
] as const

const economicImpact = [
  { value: '$2.5M', label: '平均风险缓释价值' },
  { value: '$1.8M', label: '年度效率收益' },
  { value: '320%', label: '三年平均 ROI' },
] as const

const faqs = [
  {
    question: '企业 AI 治理框架应该包含哪些核心要素？',
    answer:
      '完整框架通常包括治理组织架构、伦理原则、风险管理流程、技术标准、数据治理政策、合规监督机制和持续改进闭环。关键不是写出大而全文件，而是让每个要素都能落到责任人、证据和决策流程上。',
  },
  {
    question: 'AI 治理委员会应该由哪些人组成？',
    answer:
      '典型成员包括高管代表、业务负责人、AI 工程与数据科学负责人、法务合规、风险管理、人力资源，以及必要时的外部顾问。规模通常控制在 7 到 9 人，既要覆盖关键职能，也要保证决策效率。',
  },
  {
    question: '如何评估 AI 系统的伦理风险？',
    answer:
      '建议从公平性、透明度、隐私、人类监督和社会影响五个维度打分，再结合业务影响和触达人群确定是否需要更高等级审查。低分项必须对应整改动作，而不是只做一次性评估。',
  },
  {
    question: 'AI 治理框架通常需要多长时间落地？',
    answer:
      '企业通常需要 3 到 6 个月完成基础搭建，6 到 12 个月把流程嵌入主要项目，12 到 24 个月进入成熟运营状态。大型企业往往更慢，因为跨部门协同和供应商治理会成为主要瓶颈。',
  },
  {
    question: 'AI 治理需要投入多少预算？',
    answer:
      '成本通常由人员、监控工具、咨询审计和日常运营构成。中型企业常见年度投入在 50 万到 150 万美元之间，大型企业可能达到 200 万到 500 万美元，但避免的损失和提高的交付成功率通常远高于投入本身。',
  },
  {
    question: '如何衡量 AI 治理是否有效？',
    answer:
      '可以跟踪 AI 事故数量、合规违规次数、项目审批周期、部署成功率、培训覆盖率、客户信任度和治理相关 ROI。最重要的一条是：关键控制项在审计时能否快速出示证据。',
  },
] as const

const relatedResources = [
  {
    href: '/ai-ethics-compliance-checklist-enterprise-2026',
    title: 'AI 伦理与合规清单',
    description: '把治理原则翻译成逐项检查动作与优先级。',
    icon: CheckCircle2,
  },
  {
    href: '/ai-governance-compliance-framework-2026',
    title: 'AI Governance & Compliance Framework',
    description: '查看英文版治理与监管框架，适合跨区域团队对齐。',
    icon: Shield,
  },
  {
    href: '/ai-security-framework-enterprise-2026',
    title: '企业 AI 安全框架',
    description: '把治理要求继续下沉到安全控制、检测与响应。',
    icon: AlertTriangle,
  },
  {
    href: '/ai-data-privacy-impact-assessment-2026',
    title: 'AI 隐私影响评估',
    description: '在数据敏感、跨境或高风险用例上线前完成隐私评估。',
    icon: FileText,
  },
] as const

export default function AIGovernanceFrameworkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-10"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_20%,#ffffff_42%,#fffdfb_72%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner mx-auto max-w-7xl px-4 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                企业 AI 治理框架 2026
              </div>

              <h1 className="page-title mb-6 text-5xl md:text-7xl">
                企业 AI 治理不是写政策，
                <span className="brand-gradient-text block">而是把责任、证据和升级路径真正跑起来。</span>
              </h1>

              <p className="page-lead mb-8 max-w-2xl text-lg md:text-xl">
                这套框架基于 Fortune 500 企业实践，覆盖伦理原则、风险管理、合规控制和 12 个月实施路线图，
                目标是让 AI 系统在扩大部署前就具备清晰的规则、审查机制和问责结构。
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <a href="#framework" className="btn-brand">
                  查看框架模块
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-ethics-compliance-checklist-enterprise-2026" className="btn-secondary">
                  配套合规清单
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {summaryCards.map((card) => (
                  <div key={card.label} className="page-card p-4 bg-white/90">
                    <div className="mb-1 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{card.value}</div>
                    <div className="text-sm text-slate-500">{card.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-sky-50/35 to-white blur-2xl" />
              <div className="relative page-card-glow p-5 md:p-6">
                <div className="page-card space-y-6 bg-white/95 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="mb-1 text-sm text-slate-500">治理导航</div>
                      <div className="text-xl font-semibold text-slate-950">先看哪些模块</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Framework map
                    </div>
                  </div>

                  <div className="space-y-3">
                    {quickNav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 transition hover:border-indigo-200 hover:bg-indigo-50/50"
                      >
                        <div>
                          <div className="font-semibold text-slate-950">{item.title}</div>
                          <div className="text-sm text-slate-500">{item.note}</div>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 text-slate-400" />
                      </a>
                    ))}
                  </div>

                  <div className="rounded-[1.5rem] border border-indigo-200 bg-indigo-50/80 p-5">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
                      <CheckCircle2 className="h-4 w-4" />
                      框架交付物
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-slate-700">
                        15+ 政策模板
                      </div>
                      <div className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-slate-700">
                        合规检查清单
                      </div>
                      <div className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-slate-700">
                        风险评估方法
                      </div>
                      <div className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-slate-700">
                        12 个月实施路线图
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">执行原则</div>
                    <p className="text-sm leading-6 text-slate-700">
                      治理文件只有在能被审批、审计、培训和事故响应团队真正调用时才算生效。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="page-card-soft p-8">
              <div className="page-pill mb-4">
                <Shield className="h-4 w-4 text-[#635bff]" />
                什么是企业 AI 治理
              </div>
              <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                AI 治理是一套管理 AI 开发、部署和运营的政策、流程与控制系统。
              </h2>
              <p className="page-lead mb-6 text-base md:text-lg">
                它的目标不是拖慢创新，而是确保 AI 的使用符合法律要求、伦理标准和业务目标，同时提升可解释性、
                降低失误成本，并让高价值项目更容易通过内部审批和外部审查。
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {coreGoals.map((goal) => {
                  const Icon = goal.icon
                  return (
                    <div key={goal.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                      <Icon className={`mb-3 h-6 w-6 ${goal.accent}`} />
                      <h3 className="mb-2 font-semibold text-slate-950">{goal.title}</h3>
                      <p className="text-sm leading-6 text-slate-600">{goal.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">为什么现在要做</div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">治理驱动因素</h2>
                </div>
                <AlertTriangle className="h-7 w-7 text-amber-600" />
              </div>

              <div className="space-y-4">
                {riskDrivers.map((risk) => (
                  <div key={risk.title} className={`rounded-[1.5rem] border p-4 ${risk.tone}`}>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em]">{risk.title}</div>
                    <p className="mt-2 text-sm leading-6">{risk.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="framework" className="page-section relative border-t border-slate-200/70 bg-white/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Target className="h-4 w-4 text-[#635bff]" />
              核心框架
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              用三组核心模块把政策、风险、合规和执行串成一个系统。
            </h2>
            <p className="page-lead text-base md:text-lg">
              这部分保留原始页面的核心内容，但把旧式深色分段改成当前统一的治理框架布局，便于直接给管理层、
              法务和 AI 项目团队共用。
            </p>
          </div>

          <div className="space-y-6">
            {frameworkComponents.map((component) => {
              const Icon = component.icon
              return (
                <div key={component.title} className="page-card p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        <Icon className="h-4 w-4" />
                        Framework module
                      </div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{component.title}</h3>
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{component.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {component.columns.map((column) => (
                      <div key={column.heading} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
                        <h4 className="mb-4 font-semibold text-slate-950">{column.heading}</h4>
                        <ul className="space-y-3">
                          {column.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="page-card-soft p-8">
              <div className="page-pill mb-4">
                <Users className="h-4 w-4 text-[#635bff]" />
                框架总览
              </div>
              <h3 className="mb-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                企业治理框架不仅是原则集合，还要有真正可交付的工作包。
              </h3>
              <p className="mb-6 text-sm leading-6 text-slate-600">
                原始页面中的框架总览被保留为三个落地面向：政策底座、合规工具和实施指南。这样更接近团队在季度里真正交付的成果。
              </p>
              <div className="space-y-4">
                {operatingModel.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-[1.5rem] border border-white/80 bg-white p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2">
                          <Icon className="h-5 w-5 text-indigo-600" />
                        </div>
                        <h4 className="font-semibold text-slate-950">{item.title}</h4>
                      </div>
                      <p className="text-sm leading-6 text-slate-600">{item.detail}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="page-card p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm text-slate-500">管理层摘要</div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">治理执行检查点</h3>
                </div>
                <BarChart3 className="h-7 w-7 text-indigo-600" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">组织</div>
                  <p className="text-sm leading-6 text-slate-700">是否已经明确 AI 决策权、例外审批和事件升级责任人。</p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">文档</div>
                  <p className="text-sm leading-6 text-slate-700">是否能在审计时快速拿出模型说明、风险记录和数据来源证据。</p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">监控</div>
                  <p className="text-sm leading-6 text-slate-700">是否有持续监测、告警和回滚机制，而不是只做一次上线评审。</p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">培训</div>
                  <p className="text-sm leading-6 text-slate-700">是否让业务、法务和技术团队使用同一套治理语言和升级规则。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Clock className="h-4 w-4 text-[#635bff]" />
              12 个月实施路线图
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              用四个季度完成从盘点、落地到规模化优化的治理建设。
            </h2>
            <p className="page-lead text-base md:text-lg">
              保留原有 Q1-Q4 路线图，但改成统一的阶段卡片和里程碑结构，方便直接映射到项目组合管理和季度 OKR。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roadmapPhases.map((phase) => (
              <div key={phase.phase} className="page-card p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                    {phase.phase}
                  </div>
                  <div className="text-sm text-slate-500">{phase.timing}</div>
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.04em] text-slate-950">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="practices" className="page-section relative border-t border-slate-200/70 bg-white/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <Sparkles className="h-4 w-4 text-[#635bff]" />
              最佳实践与趋势
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              组织、技术和文化要一起建设，治理框架才不会停留在文档层。
            </h2>
            <p className="page-lead text-base md:text-lg">
              这部分延续原页面的最佳实践和 2026 趋势判断，但统一到当前内容系统的卡片节奏与信息层级。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {governancePractices.map((group) => (
              <div key={group.title} className="page-card-soft p-8">
                <h3 className="mb-5 text-xl font-semibold tracking-[-0.04em] text-slate-950">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 page-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <div className="text-sm text-slate-500">2026 关键变化</div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">治理门槛在上升，自动化能力也在变成熟。</h3>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {trendGroups.map((group) => (
                <div key={group.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h4 className="mb-4 font-semibold text-slate-950">{group.title}</h4>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="page-section relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <HelpCircle className="h-4 w-4 text-[#635bff]" />
              常见问题
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              围绕委员会、周期、预算与 KPI 的关键问题。
            </h2>
            <p className="page-lead text-base md:text-lg">
              这里保留原页面的 FAQ 主题，并用当前知识型页面结构重排，方便直接作为企业内部沟通素材使用。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="page-card p-6">
                <div className="mb-4 flex items-start gap-3">
                  <HelpCircle className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section relative border-t border-slate-200/70 bg-white/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <div className="page-pill mb-4">
              <DollarSign className="h-4 w-4 text-[#635bff]" />
              业务影响与相关资源
            </div>
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              治理成熟度最终要体现在风险降低、交付效率和内部信心上。
            </h2>
            <p className="page-lead text-base md:text-lg">
              除了原页面的业务影响指标，这里也补上同主题内部链接，保持 cluster 页面之间的互联完整性。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {impactGroups.map((group) => {
                  const Icon = group.icon
                  return (
                    <div key={group.title} className="page-card p-6">
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <div>
                          <div className="mb-1 text-sm text-slate-500">Impact block</div>
                          <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950">{group.title}</h3>
                        </div>
                        <Icon className={`h-6 w-6 ${group.accent}`} />
                      </div>
                      <div className="space-y-4">
                        {group.rows.map(([label, value]) => (
                          <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <span className="text-sm text-slate-600">{label}</span>
                            <span className="font-semibold text-slate-950">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="page-card-glow p-1">
                <div className="page-card bg-slate-950 p-8 text-white">
                  <div className="mb-6">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Total economic impact</div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">治理框架成熟后，价值来自风险回避和执行效率的双重提升。</h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {economicImpact.map((item) => (
                      <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                        <div className="mb-2 text-3xl font-semibold tracking-[-0.04em] text-white">{item.value}</div>
                        <div className="text-sm text-slate-300">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="page-card p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="mb-1 text-sm text-slate-500">Related resources</div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">继续推进治理集群</h3>
                  </div>
                  <ArrowRight className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="space-y-4">
                  {relatedResources.map((resource) => {
                    const Icon = resource.icon
                    return (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/50"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="rounded-2xl border border-white/80 bg-white p-2">
                            <Icon className="h-5 w-5 text-indigo-600" />
                          </div>
                          <h4 className="font-semibold text-slate-950">{resource.title}</h4>
                        </div>
                        <p className="text-sm leading-6 text-slate-600">{resource.description}</p>
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className="page-card-soft p-8">
                <div className="page-pill mb-4">
                  <Users className="h-4 w-4 text-[#635bff]" />
                  下一步
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  如果你已经有 AI 项目在跑，下一步不是再写一份原则，而是做治理盘点和责任映射。
                </h3>
                <p className="mb-6 text-sm leading-6 text-slate-600">
                  先识别高风险项目、关键数据流、审批断点和证据缺口，再决定哪些政策、监控和培训动作要优先落地。
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-brand">
                    预约治理咨询
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="/ai-governance-compliance-framework-2026" className="btn-secondary">
                    查看配套框架
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
