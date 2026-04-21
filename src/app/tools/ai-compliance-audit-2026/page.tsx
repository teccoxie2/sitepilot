'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AlertTriangle, ArrowRight, CheckCircle2, Download, FileText, HelpCircle, Shield, Sparkles } from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

interface ComplianceArea {
  name: string
  description: string
  requirements: string[]
  score: number
  status: 'pass' | 'warning' | 'fail'
  recommendations: string[]
}

interface AuditResults {
  overallScore: number
  complianceAreas: ComplianceArea[]
  criticalIssues: string[]
  actionPriority: string[]
  timeline: string
  cost: string
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
}

const industries = [
  '金融服务',
  '医疗保健',
  '制造业',
  '零售电商',
  '科技软件',
  '电信通信',
  '能源公用事业',
  '交通物流',
  '教育',
  '政府公共部门',
]

const frameworks = [
  'GDPR (通用数据保护法)',
  'CCPA (加州消费者隐私法)',
  'SOX (萨班斯法案)',
  'HIPAA (健康保险便携法)',
  'PCI DSS (支付卡行业标准)',
  'ISO 27001 (信息安全)',
  'NIST Framework (网络安全框架)',
  'FedRAMP (联邦风险管理)',
  'SOC 2 (系统组织控制)',
]

const initialFormData = {
  companyName: '',
  industry: '',
  employeeCount: '',
  annualRevenue: '',
  aiSystems: '',
  dataTypes: '',
  geographicRegions: '',
  currentFrameworks: '',
  lastAuditDate: '',
  specificConcerns: '',
  regulatoryRequirements: '',
}

export default function AIComplianceAudit2026() {
  const [currentStep, setCurrentStep] = useState(0)
  const [results, setResults] = useState<AuditResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState(initialFormData)

  const handleInputChange = (field: keyof typeof initialFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleFramework = (framework: string) => {
    const current = formData.currentFrameworks
    const next = current.includes(framework)
      ? current
          .split(', ')
          .filter((item) => item !== framework)
          .join(', ')
      : current
        ? `${current}, ${framework}`
        : framework

    handleInputChange('currentFrameworks', next)
  }

  const calculateCompliance = () => {
    setIsLoading(true)

    setTimeout(() => {
      const complianceAreas: ComplianceArea[] = [
        {
          name: '数据隐私与保护',
          description: '个人数据处理的合规性评估',
          requirements: ['数据分类', '同意管理', '数据主体权利', '数据最小化原则'],
          score: formData.dataTypes.includes('个人') ? 65 : 85,
          status: formData.dataTypes.includes('敏感') ? 'warning' : 'pass',
          recommendations: ['实施数据发现工具', '建立同意管理系统', '定期进行隐私影响评估'],
        },
        {
          name: '算法公平性',
          description: 'AI决策系统的偏见检测与缓解',
          requirements: ['偏见测试', '公平性度量', '模型解释性', '持续监控'],
          score: formData.aiSystems.includes('决策') ? 55 : 75,
          status: formData.aiSystems.includes('招聘') ? 'fail' : 'warning',
          recommendations: ['部署偏见检测工具', '建立多样化测试数据集', '实施人类监督流程'],
        },
        {
          name: '模型透明度',
          description: 'AI系统的可解释性和可审计性',
          requirements: ['模型文档', '决策路径', '性能指标', '变更追踪'],
          score: 70,
          status: 'warning',
          recommendations: ['建立模型文档库', '实施可解释AI技术', '创建审计日志系统'],
        },
        {
          name: '数据安全',
          description: '训练数据和模型的安全保护',
          requirements: ['加密存储', '访问控制', '安全传输', '备份恢复'],
          score: 80,
          status: 'pass',
          recommendations: ['强化多因素认证', '实施零信任架构', '定期安全审计'],
        },
        {
          name: '监管合规',
          description: '特定行业法规的遵循情况',
          requirements: ['法规映射', '合规文档', '审计准备', '报告机制'],
          score: formData.industry === '金融服务' ? 60 : 75,
          status: formData.industry === '医疗保健' ? 'warning' : 'pass',
          recommendations: ['建立合规仪表板', '定期法规更新', '合规培训计划'],
        },
      ]

      const overallScore = Math.round(complianceAreas.reduce((acc, area) => acc + area.score, 0) / complianceAreas.length)
      const criticalIssues = complianceAreas.filter((area) => area.status === 'fail').map((area) => area.name)

      const getRiskLevel = (score: number): AuditResults['riskLevel'] => {
        if (score >= 85) return 'low'
        if (score >= 70) return 'medium'
        if (score >= 55) return 'high'
        return 'critical'
      }

      setResults({
        overallScore,
        complianceAreas,
        criticalIssues,
        actionPriority: ['修复高风险算法偏见问题', '完善数据隐私保护措施', '建立持续监控机制', '加强员工合规培训'],
        timeline: overallScore < 60 ? '6-12个月' : overallScore < 80 ? '3-6个月' : '1-3个月',
        cost: overallScore < 60 ? '$200K-$500K' : overallScore < 80 ? '$100K-$300K' : '$50K-$150K',
        riskLevel: getRiskLevel(overallScore),
      })
      setIsLoading(false)
      setCurrentStep(4)
    }, 1200)
  }

  const resetTool = () => {
    setCurrentStep(0)
    setResults(null)
    setIsLoading(false)
    setFormData(initialFormData)
  }

  const riskClasses: Record<AuditResults['riskLevel'], string> = {
    low: 'border-indigo-200 bg-indigo-50 text-indigo-700',
    medium: 'border-amber-200 bg-amber-50 text-amber-700',
    high: 'border-orange-200 bg-orange-50 text-orange-700',
    critical: 'border-rose-200 bg-rose-50 text-rose-700',
  }

  const stepLabels = ['企业信息', 'AI系统', '评估需求']

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SchemaMarkup
        type="article"
        title="企业AI合规审核工具 2026"
        description="基于190个评估点的企业AI合规审核工具，帮助团队识别数据、算法和监管风险。"
        url="https://sitepilot.co/tools/ai-compliance-audit-2026"
        publishedDate="2026-03-07"
        modifiedDate="2026-03-07"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(99,91,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,#f7f9ff_0%,#fbfcff_24%,#ffffff_54%,#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-[32rem] h-[26rem] bg-[radial-gradient(circle_at_24%_30%,rgba(99,91,255,0.05),transparent_26%),radial-gradient(circle_at_76%_34%,rgba(14,165,233,0.04),transparent_24%),radial-gradient(circle_at_52%_86%,rgba(244,114,182,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[24rem] -z-10 bg-[linear-gradient(180deg,rgba(248,250,255,0.95)_0%,rgba(255,255,255,0.92)_58%,rgba(255,252,248,0.55)_100%)]" />

      {currentStep === 0 && (
        <>
          <section className="page-hero relative">
            <div className="page-hero-inner max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
                <div className="max-w-3xl">
                  <div className="page-pill mb-6">
                    <Sparkles className="h-4 w-4 text-[#635bff]" />
                    2026 AI compliance audit
                  </div>

                  <h1 className="page-title text-5xl md:text-7xl mb-6">
                    企业AI合规审核工具，
                    <span className="brand-gradient-text block">把风险识别和整改优先级拉到台面上。</span>
                  </h1>

                  <p className="page-lead text-lg md:text-xl max-w-2xl mb-8">
                    这套评估基于 190 个检查点，覆盖数据隐私、算法公平性、模型透明度、数据安全和监管合规。目标不是展示术语，而是在 15 分钟内给出可执行的整改方向。
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    <button className="btn-brand" onClick={() => setCurrentStep(1)}>
                      开始免费评估
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <Link href="/enterprise-ai-vendor-comparison-guide-2026" className="btn-secondary">
                      查看供应商选择框架
                    </Link>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                    {[
                      { value: '190', label: '评估点' },
                      { value: '15分钟', label: '快速评估时间' },
                      { value: '7大领域', label: '合规覆盖范围' },
                      { value: '19:1', label: '投入与风险成本比' },
                    ].map((stat) => (
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
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div>
                          <div className="text-sm text-slate-500 mb-1">评估重点</div>
                          <div className="text-xl font-semibold text-slate-950">这套工具解决什么问题</div>
                        </div>
                        <div className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          风险优先级
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          '识别最可能触发罚款、诉讼或声誉问题的AI风险',
                          '根据行业、数据类型和系统用途调整风险权重',
                          '输出分领域整改建议、周期和投入级别',
                        ].map((item) => (
                          <div key={item} className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                              <span className="text-sm text-slate-600">{item}</span>
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

          <section className="page-section surface-muted">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-2xl mb-10">
                <div className="page-pill mb-4">评估框架</div>
                <h2 className="page-title text-3xl md:text-5xl mb-4">7 大 AI 合规评估领域。</h2>
                <p className="page-lead text-lg">这几个方向基本决定了合规审核的成本、整改周期和风险暴露面。</p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[
                  ['数据隐私保护', 'GDPR 合规、数据最小化、同意管理、权利响应'],
                  ['算法公平性', '偏见检测、公平性测试、多样化数据、人类监督'],
                  ['模型透明度', '可解释性、审计追踪、文档完整、变更管理'],
                  ['数据安全', '加密保护、访问控制、安全传输、备份恢复'],
                  ['监管合规', '法规映射、合规报告、审计准备、持续更新'],
                  ['伦理治理', '伦理准则、影响评估、责任分配、申诉机制'],
                ].map(([title, note]) => (
                  <div key={title} className="page-card p-7">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-3">{title}</h3>
                    <p className="text-slate-600 leading-7">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="page-section">
            <div className="max-w-5xl mx-auto px-4">
              <div className="page-card-glow p-8 md:p-12 surface-muted">
                <div className="max-w-3xl">
                  <div className="text-sm uppercase tracking-[0.22em] text-indigo-600/80 mb-3">常见问题</div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">
                    先回答最常见的合规疑问。
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      ['企业AI合规审核需要多久？', '使用这套工具可在 15 分钟内完成初评；传统人工审核通常需要 6-12 周。'],
                      ['AI合规审核成本是多少？', '外部审核往往在 $50K-$200K，整改投入会随着风险等级增加。'],
                      ['哪些行业必须做？', '金融、医疗、高风险决策类应用优先级最高。'],
                      ['不做有什么风险？', '可能面临罚款、客户流失、投资者压力和系统下线。'],
                    ].map(([q, a]) => (
                      <div key={q} className="page-card p-6 bg-white/90">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="h-5 w-5 text-indigo-500 mt-1 shrink-0" />
                          <div>
                            <h3 className="font-semibold text-slate-950 mb-2">{q}</h3>
                            <p className="text-slate-600 leading-7">{a}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {currentStep > 0 && currentStep < 4 && (
        <section className="page-section">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-center gap-3 mb-8">
              {stepLabels.map((label, index) => (
                <div key={label} className={`rounded-full px-4 py-2 text-sm font-medium ${currentStep >= index + 1 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {index + 1}. {label}
                </div>
              ))}
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-7 md:p-8">
                {currentStep === 1 && (
                  <>
                    <div className="page-pill mb-5">第一步</div>
                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">企业基本信息</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">企业名称</div>
                        <input className="w-full rounded-2xl border border-slate-200 px-4 py-3.5" value={formData.companyName} onChange={(e) => handleInputChange('companyName', e.target.value)} placeholder="请输入企业名称" />
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">所属行业</div>
                        <select className="w-full rounded-2xl border border-slate-200 px-4 py-3.5" value={formData.industry} onChange={(e) => handleInputChange('industry', e.target.value)}>
                          <option value="">请选择行业</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">员工规模</div>
                        <select className="w-full rounded-2xl border border-slate-200 px-4 py-3.5" value={formData.employeeCount} onChange={(e) => handleInputChange('employeeCount', e.target.value)}>
                          <option value="">请选择员工规模</option>
                          <option value="<100">少于100人</option>
                          <option value="100-500">100-500人</option>
                          <option value="500-1000">500-1000人</option>
                          <option value="1000-5000">1000-5000人</option>
                          <option value=">5000">超过5000人</option>
                        </select>
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">年营收规模</div>
                        <select className="w-full rounded-2xl border border-slate-200 px-4 py-3.5" value={formData.annualRevenue} onChange={(e) => handleInputChange('annualRevenue', e.target.value)}>
                          <option value="">请选择年营收规模</option>
                          <option value="<10M">少于1000万</option>
                          <option value="10M-50M">1000万-5000万</option>
                          <option value="50M-100M">5000万-1亿</option>
                          <option value="100M-1B">1亿-10亿</option>
                          <option value=">1B">超过10亿</option>
                        </select>
                      </label>
                    </div>
                    <label className="block mt-6">
                      <div className="text-sm font-semibold text-slate-700 mb-2">业务覆盖地区</div>
                      <textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 min-h-28" value={formData.geographicRegions} onChange={(e) => handleInputChange('geographicRegions', e.target.value)} placeholder="例如：中国大陆、香港、新加坡、美国、欧盟等" />
                    </label>
                    <div className="flex justify-between mt-8">
                      <button className="btn-secondary" onClick={() => setCurrentStep(0)}>返回介绍</button>
                      <button className="btn-brand" onClick={() => setCurrentStep(2)}>下一步</button>
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <div className="page-pill mb-5">第二步</div>
                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">AI系统现状</h2>
                    <div className="space-y-6">
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">AI系统类型与应用场景</div>
                        <textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 min-h-28" value={formData.aiSystems} onChange={(e) => handleInputChange('aiSystems', e.target.value)} placeholder="例如：客户服务聊天机器人、推荐系统、自动化决策系统等" />
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">处理的数据类型</div>
                        <textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 min-h-28" value={formData.dataTypes} onChange={(e) => handleInputChange('dataTypes', e.target.value)} placeholder="例如：个人身份信息、财务数据、健康记录、生物特征数据等" />
                      </label>
                      <div>
                        <div className="text-sm font-semibold text-slate-700 mb-3">当前使用的合规框架</div>
                        <div className="flex flex-wrap gap-2">
                          {frameworks.map((framework) => {
                            const active = formData.currentFrameworks.includes(framework)
                            return (
                              <button
                                key={framework}
                                className={`rounded-full border px-3 py-1.5 text-sm ${active ? 'border-indigo-200 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-600'}`}
                                onClick={() => toggleFramework(framework)}
                              >
                                {framework}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-8">
                      <button className="btn-secondary" onClick={() => setCurrentStep(1)}>上一步</button>
                      <button className="btn-brand" onClick={() => setCurrentStep(3)}>下一步</button>
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <div className="page-pill mb-5">第三步</div>
                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 mb-6">具体评估需求</h2>
                    <div className="space-y-6">
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">上次合规审核时间</div>
                        <select className="w-full rounded-2xl border border-slate-200 px-4 py-3.5" value={formData.lastAuditDate} onChange={(e) => handleInputChange('lastAuditDate', e.target.value)}>
                          <option value="">请选择审核时间</option>
                          <option value="never">从未进行过</option>
                          <option value="<6months">6个月内</option>
                          <option value="6-12months">6-12个月前</option>
                          <option value="1-2years">1-2年前</option>
                          <option value=">2years">2年以上</option>
                        </select>
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">具体关注的合规领域</div>
                        <textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 min-h-28" value={formData.specificConcerns} onChange={(e) => handleInputChange('specificConcerns', e.target.value)} placeholder="例如：算法偏见检测、数据隐私保护、模型可解释性等" />
                      </label>
                      <label className="block">
                        <div className="text-sm font-semibold text-slate-700 mb-2">特殊监管要求</div>
                        <textarea className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 min-h-28" value={formData.regulatoryRequirements} onChange={(e) => handleInputChange('regulatoryRequirements', e.target.value)} placeholder="例如：行业特定法规、国际标准要求、审计要求等" />
                      </label>
                    </div>
                    <div className="flex justify-between mt-8">
                      <button className="btn-secondary" onClick={() => setCurrentStep(2)}>上一步</button>
                      <button className="btn-brand" onClick={calculateCompliance} disabled={isLoading}>
                        {isLoading ? '分析中...' : '开始合规评估'}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {currentStep === 4 && results && (
        <section className="page-section">
          <div className="max-w-5xl mx-auto px-4 space-y-6">
            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-7 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="page-pill mb-4">评估结果</div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-slate-950">AI合规评估报告</h2>
                  </div>
                  <div className={`rounded-full border px-4 py-2 text-sm font-semibold ${riskClasses[results.riskLevel]}`}>
                    {results.riskLevel === 'low' && '低风险'}
                    {results.riskLevel === 'medium' && '中等风险'}
                    {results.riskLevel === 'high' && '高风险'}
                    {results.riskLevel === 'critical' && '严重风险'}
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: '综合得分', value: `${results.overallScore}` },
                    { label: '关键问题', value: `${results.criticalIssues.length}` },
                    { label: '整改周期', value: results.timeline },
                    { label: '预估成本', value: results.cost },
                  ].map((item) => (
                    <div key={item.label} className="page-card px-4 py-4 text-center">
                      <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 mb-1">{item.value}</div>
                      <div className="text-sm text-slate-500">{item.label}</div>
                    </div>
                  ))}
                </div>

                {results.criticalIssues.length > 0 && (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-5">
                    <div className="font-semibold text-rose-700 mb-3">需要立即关注的问题</div>
                    <div className="space-y-2">
                      {results.criticalIssues.map((issue) => (
                        <div key={issue} className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-rose-500 mt-0.5 shrink-0" />
                          <span className="text-rose-700">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="page-card-glow p-1.5">
              <div className="page-card rounded-[1.8rem] p-7 md:p-8">
                <div className="page-pill mb-4">分领域详情</div>
                <div className="space-y-4">
                  {results.complianceAreas.map((area) => (
                    <div key={area.name} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 mb-1">{area.name}</h3>
                          <p className="text-slate-600">{area.description}</p>
                        </div>
                        <div className="text-2xl font-semibold text-indigo-600">{area.score}/100</div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="font-semibold text-slate-950 mb-3">评估要求</div>
                          <div className="space-y-2">
                            {area.requirements.map((item) => (
                              <div key={item} className="text-sm text-slate-600">{item}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-950 mb-3">改进建议</div>
                          <div className="space-y-2">
                            {area.recommendations.map((item) => (
                              <div key={item} className="text-sm text-slate-600">{item}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_0.9fr] gap-6">
              <div className="page-card p-7">
                <div className="page-pill mb-4">优先行动计划</div>
                <div className="space-y-4">
                  {results.actionPriority.map((action, index) => (
                    <div key={action} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">{index + 1}</div>
                      <span className="text-slate-700">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="page-card p-7">
                <div className="page-pill mb-4">下一步</div>
                <div className="space-y-3">
                  <button className="btn-brand w-full justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    下载详细报告
                  </button>
                  <button className="btn-secondary w-full justify-center">
                    <FileText className="mr-2 h-4 w-4" />
                    咨询专家
                  </button>
                  <button className="btn-secondary w-full justify-center" onClick={resetTool}>
                    重新评估
                  </button>
                </div>
              </div>
            </div>

            <div className="page-card p-7">
              <div className="page-pill mb-4">相关企业AI工具</div>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/enterprise-ai-vendor-comparison-guide-2026" className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 hover:bg-white">
                  <h3 className="font-semibold text-slate-950 mb-2">AI供应商选择框架</h3>
                  <p className="text-sm text-slate-600">8维度评估矩阵，帮助团队选择更适合的 AI 供应商。</p>
                </Link>
                <Link href="/ai-governance-framework-enterprise-2026" className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 hover:bg-white">
                  <h3 className="font-semibold text-slate-950 mb-2">AI治理框架</h3>
                  <p className="text-sm text-slate-600">建立企业级 AI 治理体系和持续监控机制。</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
