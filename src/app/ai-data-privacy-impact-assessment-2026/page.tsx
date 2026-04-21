'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Download,
  Eye,
  FileText,
  Lock,
  Shield,
  Sparkles,
  XCircle,
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

const pageTitle = 'AI数据隐私影响评估工具 2026 | SitePilot'
const pageDescription =
  '全面评估企业 AI 系统的数据隐私风险，输出合规缺口、整改优先级和实施路线图。'
const pageUrl = 'https://sitepilot.co/ai-data-privacy-impact-assessment-2026'

interface AssessmentData {
  companyName: string
  industry: string
  companySize: string
  aiSystemType: string
  dataTypes: string[]
  dataVolume: string
  dataSubjects: string
  geographicScope: string[]
  retentionPeriod: string
  dataSharing: string
  securityMeasures: string[]
  complianceFrameworks: string[]
  riskTolerance: string
  budget: string
}

interface AssessmentResult {
  overallScore: number
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  privacyRisk: number
  complianceRisk: number
  operationalRisk: number
  reputationalRisk: number
  recommendations: string[]
  implementation: {
    phase: string
    timeframe: string
    estimatedCost: string
    priority: string
    actions: string[]
  }[]
  complianceGaps: string[]
  nextSteps: string[]
}

const inputClass =
  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm outline-none transition focus:border-[#635bff] focus:ring-4 focus:ring-[#635bff]/10'

const checkboxCardClass =
  'flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-50'

const industryOptions = [
  { value: 'technology', label: '科技' },
  { value: 'finance', label: '金融服务' },
  { value: 'healthcare', label: '医疗保健' },
  { value: 'education', label: '教育' },
  { value: 'retail', label: '零售' },
  { value: 'manufacturing', label: '制造业' },
  { value: 'other', label: '其他' },
]

const companySizeOptions = [
  { value: 'startup', label: '初创企业 (1-50人)' },
  { value: 'small', label: '小型企业 (51-200人)' },
  { value: 'medium', label: '中型企业 (201-1000人)' },
  { value: 'large', label: '大型企业 (1000-5000人)' },
  { value: 'enterprise', label: '企业级 (5000+人)' },
]

const aiSystemOptions = [
  { value: 'customer_analytics', label: '客户分析' },
  { value: 'recommendation', label: '推荐系统' },
  { value: 'automated_decision', label: '自动决策系统' },
  { value: 'chatbot', label: '聊天机器人' },
  { value: 'computer_vision', label: '计算机视觉' },
  { value: 'nlp', label: '自然语言处理' },
  { value: 'predictive_analytics', label: '预测分析' },
]

const dataTypeOptions = [
  { value: 'contact_info', label: '联系信息' },
  { value: 'personal_identifiers', label: '个人标识符' },
  { value: 'financial_data', label: '财务数据' },
  { value: 'health_data', label: '健康数据' },
  { value: 'behavioral_data', label: '行为数据' },
  { value: 'biometric_data', label: '生物识别数据' },
  { value: 'location_data', label: '位置数据' },
  { value: 'demographic_data', label: '人口统计数据' },
]

const regionOptions = [
  { value: 'eu', label: '欧盟' },
  { value: 'california', label: '加州' },
  { value: 'canada', label: '加拿大' },
  { value: 'uk', label: '英国' },
  { value: 'australia', label: '澳大利亚' },
  { value: 'brazil', label: '巴西' },
  { value: 'asia_pacific', label: '亚太地区' },
  { value: 'other', label: '其他地区' },
]

const securityMeasureOptions = [
  { value: 'encryption_at_rest', label: '静态数据加密' },
  { value: 'encryption_in_transit', label: '传输中数据加密' },
  { value: 'access_controls', label: '基于角色的访问控制' },
  { value: 'audit_logging', label: '审计日志记录' },
  { value: 'data_anonymization', label: '数据匿名化/假名化' },
  { value: 'backup_recovery', label: '备份和恢复计划' },
  { value: 'incident_response', label: '事件响应计划' },
  { value: 'employee_training', label: '员工隐私培训' },
]

const frameworkOptions = [
  { value: 'gdpr', label: 'GDPR (欧盟)' },
  { value: 'ccpa', label: 'CCPA (加州)' },
  { value: 'pipeda', label: 'PIPEDA (加拿大)' },
  { value: 'lgpd', label: 'LGPD (巴西)' },
  { value: 'pdpa_singapore', label: 'PDPA (新加坡)' },
  { value: 'privacy_act', label: 'Privacy Act (澳大利亚)' },
  { value: 'popia', label: 'POPIA (南非)' },
  { value: 'none', label: '暂未实施' },
]

const stepMeta = [
  {
    step: 1,
    title: '组织背景',
    note: '行业、规模与 AI 系统范围',
    icon: Database,
  },
  {
    step: 2,
    title: '数据处理',
    note: '数据类型、规模与地域范围',
    icon: Eye,
  },
  {
    step: 3,
    title: '安全与合规',
    note: '控制措施、共享方式与法规覆盖',
    icon: Lock,
  },
  {
    step: 4,
    title: '风险偏好',
    note: '预算与容忍度，生成报告',
    icon: BarChart3,
  },
]

const summaryStats = [
  { value: '4', label: '评估步骤' },
  { value: '14', label: '关键输入变量' },
  { value: '4类', label: '风险维度' },
  { value: '90天', label: '整改起步计划' },
]

const relatedResources = [
  {
    href: '/ai-tools-risk-assessment-enterprise-2026',
    title: 'AI风险评估工具',
    description: '把隐私问题和更广泛的 AI 风险矩阵放在同一优先级框架里。',
  },
  {
    href: '/ai-tools-security-compliance-checklist-2026',
    title: 'AI安全合规检查清单',
    description: '将控制项落成执行清单，避免评估完却没有交付动作。',
  },
  {
    href: '/enterprise-ai-implementation-best-practices-2026',
    title: '企业AI实施最佳实践',
    description: '把隐私整改接回实施路线图，而不是孤立看待合规。',
  },
  {
    href: '/ai-tools-budget-planning-enterprise-2026',
    title: 'AI预算规划工具',
    description: '把整改成本与年度预算节奏对齐，减少执行时的资源摩擦。',
  },
]

const riskToneClasses: Record<AssessmentResult['riskLevel'], string> = {
  LOW: 'border-indigo-200 bg-indigo-50 text-indigo-700',
  MEDIUM: 'border-amber-200 bg-amber-50 text-amber-700',
  HIGH: 'border-orange-200 bg-orange-50 text-orange-700',
  CRITICAL: 'border-rose-200 bg-rose-50 text-rose-700',
}

const priorityToneClasses: Record<string, string> = {
  CRITICAL: 'border-rose-200 bg-rose-50 text-rose-700',
  HIGH: 'border-orange-200 bg-orange-50 text-orange-700',
  MEDIUM: 'border-blue-200 bg-blue-50 text-blue-700',
}

const initialAssessmentData: AssessmentData = {
  companyName: '',
  industry: '',
  companySize: '',
  aiSystemType: '',
  dataTypes: [],
  dataVolume: '',
  dataSubjects: '',
  geographicScope: [],
  retentionPeriod: '',
  dataSharing: '',
  securityMeasures: [],
  complianceFrameworks: [],
  riskTolerance: '',
  budget: '',
}

function toggleArrayValue(items: string[], value: string) {
  return items.includes(value) ? items.filter((item) => item !== value) : [...items, value]
}

export default function DataPrivacyAssessment() {
  const [currentStep, setCurrentStep] = useState(1)
  const [assessmentData, setAssessmentData] = useState(initialAssessmentData)
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [loading, setLoading] = useState(false)

  const calculateAssessment = (): AssessmentResult => {
    let privacyRisk = 0
    let complianceRisk = 0
    let operationalRisk = 0
    let reputationalRisk = 0

    const highRiskDataTypes = ['personal_identifiers', 'financial_data', 'health_data', 'biometric_data']
    const riskDataCount = assessmentData.dataTypes.filter((type) => highRiskDataTypes.includes(type)).length
    privacyRisk += (riskDataCount / highRiskDataTypes.length) * 30

    const volumeRisk = {
      under_1k: 5,
      '1k_10k': 10,
      '10k_100k': 20,
      '100k_1m': 30,
      over_1m: 40,
    }
    privacyRisk += volumeRisk[assessmentData.dataVolume as keyof typeof volumeRisk] || 0

    const multiJurisdiction = assessmentData.geographicScope.length > 1
    if (multiJurisdiction) privacyRisk += 15
    if (assessmentData.geographicScope.includes('eu')) privacyRisk += 10
    if (assessmentData.geographicScope.includes('california')) privacyRisk += 8

    const requiredFrameworks = ['gdpr', 'ccpa', 'pipeda', 'lgpd']
    const implementedCount = assessmentData.complianceFrameworks.filter((framework) =>
      requiredFrameworks.includes(framework)
    ).length
    complianceRisk = Math.max(
      0,
      ((requiredFrameworks.length - implementedCount) / requiredFrameworks.length) * 40
    )

    const securityScore =
      assessmentData.securityMeasures.length >= 4
        ? 10
        : (4 - assessmentData.securityMeasures.length) * 10
    operationalRisk += securityScore

    if (assessmentData.dataSharing === 'third_parties') operationalRisk += 20
    if (assessmentData.dataSharing === 'international') operationalRisk += 30

    const highProfileIndustries = ['healthcare', 'finance', 'education', 'technology']
    if (highProfileIndustries.includes(assessmentData.industry)) {
      reputationalRisk += 20
    }
    if (assessmentData.companySize === 'large' || assessmentData.companySize === 'enterprise') {
      reputationalRisk += 15
    }

    const overallScore = Math.min(100, privacyRisk + complianceRisk + operationalRisk + reputationalRisk)

    let riskLevel: AssessmentResult['riskLevel'] = 'LOW'
    if (overallScore >= 75) riskLevel = 'CRITICAL'
    else if (overallScore >= 50) riskLevel = 'HIGH'
    else if (overallScore >= 25) riskLevel = 'MEDIUM'

    const recommendations: string[] = []
    if (riskDataCount > 2) {
      recommendations.push('实施数据最小化原则，仅收集必需的个人数据')
      recommendations.push('建立数据分类和标记系统，识别高风险数据类型')
    }
    if (complianceRisk > 20) {
      recommendations.push('紧急实施 GDPR 和 CCPA 合规措施')
      recommendations.push('建立数据主体权利响应流程')
    }
    if (operationalRisk > 25) {
      recommendations.push('加强数据安全措施，实施端到端加密')
      recommendations.push('建立数据泄露事件响应计划')
    }
    if (reputationalRisk > 15) {
      recommendations.push('建立透明的隐私政策和用户沟通机制')
      recommendations.push('在产品开发中实施 Privacy by Design 原则')
    }

    const implementation = [
      {
        phase: '立即行动',
        timeframe: '1-4周',
        estimatedCost: '$25,000 - $75,000',
        priority: 'CRITICAL',
        actions: [
          '进行完整的数据审计和映射',
          '更新隐私政策和用户同意流程',
          '实施关键安全控制措施',
          '建立数据泄露响应团队',
        ],
      },
      {
        phase: '短期改进',
        timeframe: '1-3个月',
        estimatedCost: '$50,000 - $150,000',
        priority: 'HIGH',
        actions: [
          '部署数据保护管理平台',
          '实施自动化数据主体权利响应',
          '建立隐私影响评估流程',
          '员工隐私培训计划',
        ],
      },
      {
        phase: '长期治理',
        timeframe: '3-12个月',
        estimatedCost: '$100,000 - $300,000',
        priority: 'MEDIUM',
        actions: [
          '建立持续监控和审计机制',
          '实施高级数据加密和匿名化',
          '建立供应商隐私管理程序',
          '获得第三方隐私认证',
        ],
      },
    ]

    const complianceGaps: string[] = []
    if (
      !assessmentData.complianceFrameworks.includes('gdpr') &&
      assessmentData.geographicScope.includes('eu')
    ) {
      complianceGaps.push('GDPR 合规要求')
    }
    if (
      !assessmentData.complianceFrameworks.includes('ccpa') &&
      assessmentData.geographicScope.includes('california')
    ) {
      complianceGaps.push('CCPA 合规要求')
    }
    if (assessmentData.securityMeasures.length < 3) {
      complianceGaps.push('基础数据安全措施')
    }

    return {
      overallScore,
      riskLevel,
      privacyRisk: Math.round(privacyRisk),
      complianceRisk: Math.round(complianceRisk),
      operationalRisk: Math.round(operationalRisk),
      reputationalRisk: Math.round(reputationalRisk),
      recommendations:
        recommendations.length > 0
          ? recommendations
          : ['当前输入下未发现显著缺口，但仍建议每季度复盘一次隐私风险与控制措施。'],
      implementation,
      complianceGaps,
      nextSteps: [
        '下载详细的隐私影响评估报告',
        '与隐私法律专家安排咨询会议',
        '制定 90 天隐私改进计划',
        '建立月度隐私风险回顾流程',
      ],
    }
  }

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setResult(calculateAssessment())
      setLoading(false)
    }, 1200)
  }

  const canMoveNext =
    (currentStep === 1 &&
      assessmentData.companyName &&
      assessmentData.industry &&
      assessmentData.companySize &&
      assessmentData.aiSystemType) ||
    (currentStep === 2 &&
      assessmentData.dataTypes.length > 0 &&
      assessmentData.dataVolume &&
      assessmentData.geographicScope.length > 0) ||
    (currentStep === 3 && assessmentData.retentionPeriod && assessmentData.dataSharing)

  const currentStepMeta = stepMeta[currentStep - 1] ?? stepMeta[0]

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-03-06"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[34rem] h-[30rem] bg-[radial-gradient(circle_at_22%_18%,rgba(14,165,233,0.05),transparent_24%),radial-gradient(circle_at_80%_14%,rgba(99,91,255,0.05),transparent_22%),radial-gradient(circle_at_55%_82%,rgba(244,114,182,0.04),transparent_28%)]" />
      </div>

      <section className="page-hero relative">
        <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="page-pill mb-6">
                <Sparkles className="h-4 w-4 text-[#635bff]" />
                2026 privacy impact assessment
              </div>

              <h1 className="page-title text-5xl md:text-7xl mb-6">
                AI 数据隐私影响评估，
                <span className="brand-gradient-text block">先识别最贵的风险，再安排整改。</span>
              </h1>

              <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                这套工具面向企业 AI 项目负责人、合规团队和安全负责人。它不会试图覆盖所有法律细节，而是优先找出最可能带来罚款、诉讼、运营中断和声誉损失的隐私缺口。
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href={result ? '#assessment-results' : '#assessment-tool'} className="btn-brand">
                  {result ? '查看评估结果' : '开始隐私评估'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link href="/ai-enterprise-security-compliance" className="btn-secondary">
                  查看企业安全合规框架
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {summaryStats.map((stat) => (
                  <div key={stat.label} className="page-card p-4 bg-white/90">
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
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Assessment flow</div>
                      <div className="text-xl font-semibold text-slate-950">输出什么，怎么用</div>
                    </div>
                    <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      15 分钟完成
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['风险评分', '把隐私、合规、运营和声誉四类风险放进一个决策视图里'],
                      ['缺口识别', '直接指出高风险数据类型、跨区域运营和控制薄弱点'],
                      ['整改路线图', '把措施拆成 1-4 周、1-3 月和长期治理三个阶段'],
                      ['资源优先级', '帮助团队把预算投向最容易出事的地方'],
                    ].map(([title, note]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4"
                      >
                        <div className="font-semibold text-slate-950">{title}</div>
                        <div className="text-sm text-slate-500 mt-1">{note}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/80 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600 leading-relaxed">
                        如果你已经做过基础合规盘点，这一页最适合拿来给业务负责人排优先级，而不是给法务团队重复做法规条文教育。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-14 md:py-18">
        {!result ? (
          <>
            <section id="assessment-tool" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
              <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Assessment</div>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                      先拿到清晰结论，
                      <span className="block brand-gradient-text">再讨论控制措施。</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      每一步只问会影响风险模型的核心变量，避免把评估做成冗长问卷。
                    </p>
                  </div>

                  <div className="space-y-3">
                    {stepMeta.map((item) => {
                      const Icon = item.icon
                      const isActive = item.step === currentStep
                      const isDone = item.step < currentStep

                      return (
                        <div
                          key={item.step}
                          className={`rounded-2xl border px-4 py-4 transition ${
                            isActive
                              ? 'border-indigo-200 bg-indigo-50'
                              : isDone
                                ? 'border-indigo-200 bg-indigo-50/70'
                                : 'border-slate-200 bg-white'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                                isActive
                                  ? 'bg-indigo-600 text-white'
                                  : isDone
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-950">
                                Step {item.step} · {item.title}
                              </div>
                              <div className="text-sm text-slate-500 mt-1">{item.note}</div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="page-card-soft p-6">
                    <h3 className="text-xl font-semibold text-slate-950 mb-4">当前步骤重点</h3>
                    <div className="flex items-start gap-3 mb-4">
                      <currentStepMeta.icon className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600">{currentStepMeta.note}</p>
                    </div>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                        用最少输入，锁定高风险数据、辖区和共享方式。
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                        输出结果后，可继续跳转到安全、预算和实施资源页面。
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-card-glow p-1.5">
                  <div className="page-card rounded-[2rem] p-8">
                    {currentStep === 1 && (
                      <div>
                        <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Step 1</div>
                        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">组织和系统背景</h3>
                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">公司名称</label>
                            <input
                              className={inputClass}
                              value={assessmentData.companyName}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, companyName: e.target.value }))
                              }
                              placeholder="输入公司名称"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">行业类型</label>
                            <select
                              className={inputClass}
                              value={assessmentData.industry}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, industry: e.target.value }))
                              }
                            >
                              <option value="">选择行业</option>
                              {industryOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">公司规模</label>
                            <select
                              className={inputClass}
                              value={assessmentData.companySize}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, companySize: e.target.value }))
                              }
                            >
                              <option value="">选择公司规模</option>
                              {companySizeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">AI系统类型</label>
                            <select
                              className={inputClass}
                              value={assessmentData.aiSystemType}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, aiSystemType: e.target.value }))
                              }
                            >
                              <option value="">选择AI系统类型</option>
                              {aiSystemOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div>
                        <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Step 2</div>
                        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">数据收集与处理范围</h3>
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">处理的数据类型</label>
                            <div className="grid md:grid-cols-2 gap-3">
                              {dataTypeOptions.map((option) => (
                                <label key={option.value} className={checkboxCardClass}>
                                  <input
                                    type="checkbox"
                                    checked={assessmentData.dataTypes.includes(option.value)}
                                    onChange={() =>
                                      setAssessmentData((current) => ({
                                        ...current,
                                        dataTypes: toggleArrayValue(current.dataTypes, option.value),
                                      }))
                                    }
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#635bff] focus:ring-[#635bff]"
                                  />
                                  <span>{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-2">数据处理量</label>
                              <select
                                className={inputClass}
                                value={assessmentData.dataVolume}
                                onChange={(e) =>
                                  setAssessmentData((current) => ({ ...current, dataVolume: e.target.value }))
                                }
                              >
                                <option value="">选择数据处理量级</option>
                                <option value="under_1k">少于1,000条记录</option>
                                <option value="1k_10k">1,000 - 10,000条记录</option>
                                <option value="10k_100k">10,000 - 100,000条记录</option>
                                <option value="100k_1m">100,000 - 1,000,000条记录</option>
                                <option value="over_1m">超过1,000,000条记录</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-2">数据主体</label>
                              <textarea
                                className={`${inputClass} min-h-[112px]`}
                                value={assessmentData.dataSubjects}
                                onChange={(e) =>
                                  setAssessmentData((current) => ({ ...current, dataSubjects: e.target.value }))
                                }
                                placeholder="如：客户、员工、候选人、访客、患者等"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">运营地理范围</label>
                            <div className="grid md:grid-cols-2 gap-3">
                              {regionOptions.map((option) => (
                                <label key={option.value} className={checkboxCardClass}>
                                  <input
                                    type="checkbox"
                                    checked={assessmentData.geographicScope.includes(option.value)}
                                    onChange={() =>
                                      setAssessmentData((current) => ({
                                        ...current,
                                        geographicScope: toggleArrayValue(current.geographicScope, option.value),
                                      }))
                                    }
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#635bff] focus:ring-[#635bff]"
                                  />
                                  <span>{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div>
                        <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Step 3</div>
                        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">安全措施与合规现状</h3>
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-2">数据保留期</label>
                              <select
                                className={inputClass}
                                value={assessmentData.retentionPeriod}
                                onChange={(e) =>
                                  setAssessmentData((current) => ({
                                    ...current,
                                    retentionPeriod: e.target.value,
                                  }))
                                }
                              >
                                <option value="">选择数据保留期</option>
                                <option value="under_1year">少于1年</option>
                                <option value="1_3years">1-3年</option>
                                <option value="3_5years">3-5年</option>
                                <option value="5_10years">5-10年</option>
                                <option value="over_10years">超过10年</option>
                                <option value="indefinite">无限期</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-2">数据共享方式</label>
                              <select
                                className={inputClass}
                                value={assessmentData.dataSharing}
                                onChange={(e) =>
                                  setAssessmentData((current) => ({ ...current, dataSharing: e.target.value }))
                                }
                              >
                                <option value="">选择数据共享方式</option>
                                <option value="internal_only">仅内部使用</option>
                                <option value="trusted_partners">信任合作伙伴</option>
                                <option value="third_parties">第三方服务商</option>
                                <option value="international">国际传输</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">已实施的安全措施</label>
                            <div className="grid md:grid-cols-2 gap-3">
                              {securityMeasureOptions.map((option) => (
                                <label key={option.value} className={checkboxCardClass}>
                                  <input
                                    type="checkbox"
                                    checked={assessmentData.securityMeasures.includes(option.value)}
                                    onChange={() =>
                                      setAssessmentData((current) => ({
                                        ...current,
                                        securityMeasures: toggleArrayValue(current.securityMeasures, option.value),
                                      }))
                                    }
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#635bff] focus:ring-[#635bff]"
                                  />
                                  <span>{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">当前合规框架</label>
                            <div className="grid md:grid-cols-2 gap-3">
                              {frameworkOptions.map((option) => (
                                <label key={option.value} className={checkboxCardClass}>
                                  <input
                                    type="checkbox"
                                    checked={assessmentData.complianceFrameworks.includes(option.value)}
                                    onChange={() =>
                                      setAssessmentData((current) => ({
                                        ...current,
                                        complianceFrameworks: toggleArrayValue(
                                          current.complianceFrameworks,
                                          option.value
                                        ),
                                      }))
                                    }
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#635bff] focus:ring-[#635bff]"
                                  />
                                  <span>{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div>
                        <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Step 4</div>
                        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">预算与风险偏好</h3>
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">风险承受能力</label>
                            <select
                              className={inputClass}
                              value={assessmentData.riskTolerance}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, riskTolerance: e.target.value }))
                              }
                            >
                              <option value="">选择风险承受能力</option>
                              <option value="very_low">非常低 - 零容忍</option>
                              <option value="low">较低 - 最小风险</option>
                              <option value="medium">中等 - 平衡风险收益</option>
                              <option value="high">较高 - 接受一定风险</option>
                              <option value="very_high">很高 - 激进策略</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">隐私改进预算 (年度)</label>
                            <select
                              className={inputClass}
                              value={assessmentData.budget}
                              onChange={(e) =>
                                setAssessmentData((current) => ({ ...current, budget: e.target.value }))
                              }
                            >
                              <option value="">选择年度预算范围</option>
                              <option value="under_50k">少于$50,000</option>
                              <option value="50k_100k">$50,000 - $100,000</option>
                              <option value="100k_250k">$100,000 - $250,000</option>
                              <option value="250k_500k">$250,000 - $500,000</option>
                              <option value="500k_1m">$500,000 - $1,000,000</option>
                              <option value="over_1m">超过$1,000,000</option>
                            </select>
                          </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                          <div className="text-sm font-semibold text-slate-950 mb-2">生成结果后会包含</div>
                          <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-600">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />
                              总体风险评分与分项拆解
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />
                              合规缺口与紧急整改建议
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />
                              分阶段实施路线图
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />
                              相关安全、预算与实施资源
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => setCurrentStep((step) => Math.max(1, step - 1))}
                        disabled={currentStep === 1 || loading}
                      >
                        上一步
                      </button>

                      {currentStep < 4 ? (
                        <button
                          type="button"
                          className="btn-brand"
                          onClick={() => setCurrentStep((step) => Math.min(4, step + 1))}
                          disabled={!canMoveNext}
                        >
                          下一步
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      ) : (
                        <button type="button" className="btn-brand" onClick={handleSubmit} disabled={loading}>
                          {loading ? '分析中...' : '生成隐私影响评估报告'}
                          {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="page-card-glow p-1.5 mb-16">
              <div className="page-card rounded-[2rem] p-8 md:p-10">
                <div className="max-w-3xl mb-8">
                  <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Coverage</div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                    评估逻辑覆盖的重点，
                    <span className="block brand-gradient-text">不是表单好不好看，而是哪里最可能出问题。</span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {[
                    {
                      title: '高风险数据',
                      note: '个人标识符、财务、健康和生物识别数据会明显抬高隐私风险。',
                    },
                    {
                      title: '多辖区运营',
                      note: '跨 EU、加州及其他地区运营时，法规叠加会提高治理复杂度。',
                    },
                    {
                      title: '共享与传输',
                      note: '第三方服务商和跨境传输会推高运营与事件响应难度。',
                    },
                    {
                      title: '控制成熟度',
                      note: '安全措施与合规框架覆盖不足时，整改优先级应前置。',
                    },
                  ].map((item) => (
                    <div key={item.title} className="page-card-soft p-6">
                      <h3 className="text-xl font-semibold text-slate-950 mb-3">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section id="assessment-results" className="page-card p-8 md:p-10 mb-16 scroll-mt-28">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Results</div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                    {assessmentData.companyName || '当前项目'} 的隐私风险结论，
                    <span className="block brand-gradient-text">先看严重度，再排动作。</span>
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    这不是法律意见书，而是给项目负责人、合规团队和安全负责人看的决策版风险摘要。
                  </p>

                  <div
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${riskToneClasses[result.riskLevel]}`}
                  >
                    <Shield className="h-4 w-4" />
                    总体风险等级：{result.riskLevel}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    {[
                      ['总体风险评分', `${result.overallScore}/100`],
                      ['隐私风险', `${result.privacyRisk}/40`],
                      ['合规风险', `${result.complianceRisk}/40`],
                      ['运营风险', `${result.operationalRisk}/30`],
                      ['声誉风险', `${result.reputationalRisk}/30`],
                    ].map(([label, value]) => (
                      <div key={label} className="page-card-soft p-4">
                        <div className="text-sm text-slate-500 mb-1">{label}</div>
                        <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="page-card-soft p-6">
                  <h3 className="text-2xl font-semibold text-slate-950 mb-5">立即行动建议</h3>
                  <div className="space-y-3">
                    {result.recommendations.map((recommendation) => (
                      <div key={recommendation} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                          <div className="text-sm text-slate-600 leading-relaxed">{recommendation}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {result.complianceGaps.length > 0 && (
                    <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-rose-700 mb-3">
                        <AlertTriangle className="h-4 w-4" />
                        发现的合规缺口
                      </div>
                      <div className="space-y-2">
                        {result.complianceGaps.map((gap) => (
                          <div key={gap} className="flex items-start gap-3 text-sm text-rose-700">
                            <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>{gap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="page-card-glow p-1.5 mb-16">
              <div className="page-card rounded-[2rem] p-8 md:p-10">
                <div className="max-w-3xl mb-8">
                  <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Roadmap</div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                    把整改动作拆成阶段，
                    <span className="block brand-gradient-text">这样预算、法务和执行团队才接得住。</span>
                  </h2>
                </div>

                <div className="space-y-6">
                  {result.implementation.map((phase) => (
                    <div key={phase.phase} className="page-card-soft p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-950">{phase.phase}</h3>
                          <p className="text-sm text-slate-500 mt-1">{phase.timeframe}</p>
                        </div>
                        <div className="text-right">
                          <div
                            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
                              priorityToneClasses[phase.priority] || 'border-slate-200 bg-slate-50 text-slate-700'
                            }`}
                          >
                            {phase.priority}
                          </div>
                          <div className="text-sm font-medium text-[#635bff] mt-2">{phase.estimatedCost}</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.actions.map((action) => (
                          <div key={action} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">
                            {action}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="page-card p-8 md:p-10 mb-16">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">Next Steps</div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-4">
                    结果出来以后，
                    <span className="block brand-gradient-text">下一步应该让谁做什么。</span>
                  </h2>
                  <div className="space-y-3">
                    {result.nextSteps.map((step, index) => (
                      <div key={step} className="page-card-soft p-4 flex items-start gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#635bff] text-sm font-semibold text-white">
                          {index + 1}
                        </div>
                        <div className="text-sm text-slate-600">{step}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-8">
                    <button type="button" className="btn-brand">
                      <Download className="mr-2 h-4 w-4" />
                      下载完整报告
                    </button>
                    <Link href="/contact" className="btn-secondary">
                      <FileText className="mr-2 h-4 w-4" />
                      获得专家咨询
                    </Link>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        setResult(null)
                        setCurrentStep(1)
                      }}
                    >
                      重新评估
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {relatedResources.map((resource) => (
                    <Link key={resource.href} href={resource.href} className="page-card-soft p-5 hover:border-slate-300 transition">
                      <div className="text-lg font-semibold text-slate-950 mb-2">{resource.title}</div>
                      <p className="text-sm text-slate-600 leading-relaxed">{resource.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}
