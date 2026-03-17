'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { AlertTriangle, CheckCircle, XCircle, FileText, Download, Shield, BarChart3, Database, Eye, Lock } from 'lucide-react'
import Link from 'next/link'

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

const DataPrivacyAssessment = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
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
    budget: ''
  })
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [loading, setLoading] = useState(false)

  const calculateAssessment = (): AssessmentResult => {
    // 基于输入数据计算隐私风险评分
    let privacyRisk = 0
    let complianceRisk = 0
    let operationalRisk = 0
    let reputationalRisk = 0

    // 数据类型风险评估
    const highRiskDataTypes = ['personal_identifiers', 'financial_data', 'health_data', 'biometric_data']
    const riskDataCount = assessmentData.dataTypes.filter(type => highRiskDataTypes.includes(type)).length
    privacyRisk += (riskDataCount / highRiskDataTypes.length) * 30

    // 数据量风险
    const volumeRisk = {
      'under_1k': 5,
      '1k_10k': 10,
      '10k_100k': 20,
      '100k_1m': 30,
      'over_1m': 40
    }
    privacyRisk += volumeRisk[assessmentData.dataVolume as keyof typeof volumeRisk] || 0

    // 地理范围风险
    const multiJurisdiction = assessmentData.geographicScope.length > 1
    if (multiJurisdiction) privacyRisk += 15
    if (assessmentData.geographicScope.includes('eu')) privacyRisk += 10
    if (assessmentData.geographicScope.includes('california')) privacyRisk += 8

    // 合规框架覆盖
    const requiredFrameworks = ['gdpr', 'ccpa', 'pipeda', 'lgpd']
    const implementedCount = assessmentData.complianceFrameworks.filter(f => requiredFrameworks.includes(f)).length
    complianceRisk = Math.max(0, (requiredFrameworks.length - implementedCount) / requiredFrameworks.length * 40)

    // 安全措施评估
    const securityScore = assessmentData.securityMeasures.length >= 4 ? 10 : (4 - assessmentData.securityMeasures.length) * 10
    operationalRisk += securityScore

    // 数据共享风险
    if (assessmentData.dataSharing === 'third_parties') operationalRisk += 20
    if (assessmentData.dataSharing === 'international') operationalRisk += 30

    // 声誉风险基于行业和公司规模
    const highProfileIndustries = ['healthcare', 'finance', 'education', 'technology']
    if (highProfileIndustries.includes(assessmentData.industry)) {
      reputationalRisk += 20
    }
    if (assessmentData.companySize === 'large' || assessmentData.companySize === 'enterprise') {
      reputationalRisk += 15
    }

    const overallScore = Math.min(100, privacyRisk + complianceRisk + operationalRisk + reputationalRisk)
    
    let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'LOW'
    if (overallScore >= 75) riskLevel = 'CRITICAL'
    else if (overallScore >= 50) riskLevel = 'HIGH'
    else if (overallScore >= 25) riskLevel = 'MEDIUM'

    // 生成建议
    const recommendations: string[] = []
    if (riskDataCount > 2) {
      recommendations.push('实施数据最小化原则，仅收集必需的个人数据')
      recommendations.push('建立数据分类和标记系统，识别高风险数据类型')
    }
    if (complianceRisk > 20) {
      recommendations.push('紧急实施GDPR和CCPA合规措施')
      recommendations.push('建立数据主体权利响应流程')
    }
    if (operationalRisk > 25) {
      recommendations.push('加强数据安全措施，实施端到端加密')
      recommendations.push('建立数据泄露事件响应计划')
    }
    if (reputationalRisk > 15) {
      recommendations.push('建立透明的隐私政策和用户沟通机制')
      recommendations.push('实施隐私设计原则在产品开发中')
    }

    // 实施建议
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
          '建立数据泄露响应团队'
        ]
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
          '员工隐私培训计划'
        ]
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
          '获得第三方隐私认证'
        ]
      }
    ]

    const complianceGaps = []
    if (!assessmentData.complianceFrameworks.includes('gdpr') && assessmentData.geographicScope.includes('eu')) {
      complianceGaps.push('GDPR合规要求')
    }
    if (!assessmentData.complianceFrameworks.includes('ccpa') && assessmentData.geographicScope.includes('california')) {
      complianceGaps.push('CCPA合规要求')
    }
    if (assessmentData.securityMeasures.length < 3) {
      complianceGaps.push('基础数据安全措施')
    }

    const nextSteps = [
      '下载详细的隐私影响评估报告',
      '与隐私法律专家安排咨询会议',
      '制定90天隐私改进计划',
      '建立月度隐私风险回顾流程'
    ]

    return {
      overallScore,
      riskLevel,
      privacyRisk: Math.round(privacyRisk),
      complianceRisk: Math.round(complianceRisk),
      operationalRisk: Math.round(operationalRisk),
      reputationalRisk: Math.round(reputationalRisk),
      recommendations,
      implementation,
      complianceGaps,
      nextSteps
    }
  }

  const handleSubmit = () => {
    setLoading(true)
    // 模拟API调用延迟
    setTimeout(() => {
      const assessmentResult = calculateAssessment()
      setResult(assessmentResult)
      setLoading(false)
    }, 2000)
  }

  const renderStep1 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5 text-blue-600" />
          公司和数据基本信息
        </CardTitle>
        <CardDescription>
          请提供您的组织和AI系统的基本信息
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="company">公司名称</Label>
          <Input
            id="company"
            value={assessmentData.companyName}
            onChange={(e) => setAssessmentData({...assessmentData, companyName: e.target.value})}
            placeholder="输入公司名称"
          />
        </div>
        
        <div>
          <Label htmlFor="industry">行业类型</Label>
          <Select value={assessmentData.industry} onValueChange={(value) => setAssessmentData({...assessmentData, industry: value})}>
            <SelectTrigger>
              <SelectValue placeholder="选择行业" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">科技</SelectItem>
              <SelectItem value="finance">金融服务</SelectItem>
              <SelectItem value="healthcare">医疗保健</SelectItem>
              <SelectItem value="education">教育</SelectItem>
              <SelectItem value="retail">零售</SelectItem>
              <SelectItem value="manufacturing">制造业</SelectItem>
              <SelectItem value="other">其他</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="size">公司规模</Label>
          <Select value={assessmentData.companySize} onValueChange={(value) => setAssessmentData({...assessmentData, companySize: value})}>
            <SelectTrigger>
              <SelectValue placeholder="选择公司规模" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="startup">初创企业 (1-50人)</SelectItem>
              <SelectItem value="small">小型企业 (51-200人)</SelectItem>
              <SelectItem value="medium">中型企业 (201-1000人)</SelectItem>
              <SelectItem value="large">大型企业 (1000-5000人)</SelectItem>
              <SelectItem value="enterprise">企业级 (5000+人)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="ai-type">AI系统类型</Label>
          <Select value={assessmentData.aiSystemType} onValueChange={(value) => setAssessmentData({...assessmentData, aiSystemType: value})}>
            <SelectTrigger>
              <SelectValue placeholder="选择AI系统类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="customer_analytics">客户分析</SelectItem>
              <SelectItem value="recommendation">推荐系统</SelectItem>
              <SelectItem value="automated_decision">自动决策系统</SelectItem>
              <SelectItem value="chatbot">聊天机器人</SelectItem>
              <SelectItem value="computer_vision">计算机视觉</SelectItem>
              <SelectItem value="nlp">自然语言处理</SelectItem>
              <SelectItem value="predictive_analytics">预测分析</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )

  const renderStep2 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-green-600" />
          数据收集和处理详情
        </CardTitle>
        <CardDescription>
          详细描述您的AI系统如何收集和处理个人数据
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>处理的数据类型 (可多选)</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              {value: 'contact_info', label: '联系信息'},
              {value: 'personal_identifiers', label: '个人标识符'},
              {value: 'financial_data', label: '财务数据'},
              {value: 'health_data', label: '健康数据'},
              {value: 'behavioral_data', label: '行为数据'},
              {value: 'biometric_data', label: '生物识别数据'},
              {value: 'location_data', label: '位置数据'},
              {value: 'demographic_data', label: '人口统计数据'}
            ].map((type) => (
              <label key={type.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={assessmentData.dataTypes.includes(type.value)}
                  onChange={(e) => {
                    const newTypes = e.target.checked
                      ? [...assessmentData.dataTypes, type.value]
                      : assessmentData.dataTypes.filter(t => t !== type.value)
                    setAssessmentData({...assessmentData, dataTypes: newTypes})
                  }}
                />
                <span className="text-sm">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="volume">数据处理量</Label>
          <Select value={assessmentData.dataVolume} onValueChange={(value) => setAssessmentData({...assessmentData, dataVolume: value})}>
            <SelectTrigger>
              <SelectValue placeholder="选择数据处理量级" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under_1k">少于1,000条记录</SelectItem>
              <SelectItem value="1k_10k">1,000 - 10,000条记录</SelectItem>
              <SelectItem value="10k_100k">10,000 - 100,000条记录</SelectItem>
              <SelectItem value="100k_1m">100,000 - 1,000,000条记录</SelectItem>
              <SelectItem value="over_1m">超过1,000,000条记录</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="subjects">数据主体</Label>
          <Textarea
            id="subjects"
            value={assessmentData.dataSubjects}
            onChange={(e) => setAssessmentData({...assessmentData, dataSubjects: e.target.value})}
            placeholder="描述您的数据主体（如：客户、员工、访客等）"
          />
        </div>

        <div>
          <Label>运营地理范围 (可多选)</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              {value: 'eu', label: '欧盟'},
              {value: 'california', label: '加州'},
              {value: 'canada', label: '加拿大'},
              {value: 'uk', label: '英国'},
              {value: 'australia', label: '澳大利亚'},
              {value: 'brazil', label: '巴西'},
              {value: 'asia_pacific', label: '亚太地区'},
              {value: 'other', label: '其他地区'}
            ].map((region) => (
              <label key={region.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={assessmentData.geographicScope.includes(region.value)}
                  onChange={(e) => {
                    const newScope = e.target.checked
                      ? [...assessmentData.geographicScope, region.value]
                      : assessmentData.geographicScope.filter(s => s !== region.value)
                    setAssessmentData({...assessmentData, geographicScope: newScope})
                  }}
                />
                <span className="text-sm">{region.label}</span>
              </label>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderStep3 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-purple-600" />
          安全和合规措施
        </CardTitle>
        <CardDescription>
          评估您当前的数据保护和合规措施
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="retention">数据保留期</Label>
          <Select value={assessmentData.retentionPeriod} onValueChange={(value) => setAssessmentData({...assessmentData, retentionPeriod: value})}>
            <SelectTrigger>
              <SelectValue placeholder="选择数据保留期" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under_1year">少于1年</SelectItem>
              <SelectItem value="1_3years">1-3年</SelectItem>
              <SelectItem value="3_5years">3-5年</SelectItem>
              <SelectItem value="5_10years">5-10年</SelectItem>
              <SelectItem value="over_10years">超过10年</SelectItem>
              <SelectItem value="indefinite">无限期</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="sharing">数据共享方式</Label>
          <Select value={assessmentData.dataSharing} onValueChange={(value) => setAssessmentData({...assessmentData, dataSharing: value})}>
            <SelectTrigger>
              <SelectValue placeholder="选择数据共享方式" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="internal_only">仅内部使用</SelectItem>
              <SelectItem value="trusted_partners">信任合作伙伴</SelectItem>
              <SelectItem value="third_parties">第三方服务商</SelectItem>
              <SelectItem value="international">国际传输</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>已实施的安全措施 (可多选)</Label>
          <div className="grid grid-cols-1 gap-2 mt-2">
            {[
              {value: 'encryption_at_rest', label: '静态数据加密'},
              {value: 'encryption_in_transit', label: '传输中数据加密'},
              {value: 'access_controls', label: '基于角色的访问控制'},
              {value: 'audit_logging', label: '审计日志记录'},
              {value: 'data_anonymization', label: '数据匿名化/假名化'},
              {value: 'backup_recovery', label: '备份和恢复计划'},
              {value: 'incident_response', label: '事件响应计划'},
              {value: 'employee_training', label: '员工隐私培训'}
            ].map((measure) => (
              <label key={measure.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={assessmentData.securityMeasures.includes(measure.value)}
                  onChange={(e) => {
                    const newMeasures = e.target.checked
                      ? [...assessmentData.securityMeasures, measure.value]
                      : assessmentData.securityMeasures.filter(m => m !== measure.value)
                    setAssessmentData({...assessmentData, securityMeasures: newMeasures})
                  }}
                />
                <span className="text-sm">{measure.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <Label>当前合规框架 (可多选)</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              {value: 'gdpr', label: 'GDPR (欧盟)'},
              {value: 'ccpa', label: 'CCPA (加州)'},
              {value: 'pipeda', label: 'PIPEDA (加拿大)'},
              {value: 'lgpd', label: 'LGPD (巴西)'},
              {value: 'pdpa_singapore', label: 'PDPA (新加坡)'},
              {value: 'privacy_act', label: 'Privacy Act (澳大利亚)'},
              {value: 'popia', label: 'POPIA (南非)'},
              {value: 'none', label: '暂未实施'}
            ].map((framework) => (
              <label key={framework.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={assessmentData.complianceFrameworks.includes(framework.value)}
                  onChange={(e) => {
                    const newFrameworks = e.target.checked
                      ? [...assessmentData.complianceFrameworks, framework.value]
                      : assessmentData.complianceFrameworks.filter(f => f !== framework.value)
                    setAssessmentData({...assessmentData, complianceFrameworks: newFrameworks})
                  }}
                />
                <span className="text-sm">{framework.label}</span>
              </label>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderStep4 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-orange-600" />
          风险偏好和预算
        </CardTitle>
        <CardDescription>
          最后，告诉我们您的风险承受能力和改进预算
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="risk-tolerance">风险承受能力</Label>
          <Select value={assessmentData.riskTolerance} onValueChange={(value) => setAssessmentData({...assessmentData, riskTolerance: value})}>
            <SelectTrigger>
              <SelectValue placeholder="选择风险承受能力" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="very_low">非常低 - 零容忍</SelectItem>
              <SelectItem value="low">较低 - 最小风险</SelectItem>
              <SelectItem value="medium">中等 - 平衡风险收益</SelectItem>
              <SelectItem value="high">较高 - 接受一定风险</SelectItem>
              <SelectItem value="very_high">很高 - 激进策略</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="budget">隐私改进预算 (年度)</Label>
          <Select value={assessmentData.budget} onValueChange={(value) => setAssessmentData({...assessmentData, budget: value})}>
            <SelectTrigger>
              <SelectValue placeholder="选择年度预算范围" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under_50k">少于$50,000</SelectItem>
              <SelectItem value="50k_100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k_250k">$100,000 - $250,000</SelectItem>
              <SelectItem value="250k_500k">$250,000 - $500,000</SelectItem>
              <SelectItem value="500k_1m">$500,000 - $1,000,000</SelectItem>
              <SelectItem value="over_1m">超过$1,000,000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-4">
          <Button 
            onClick={handleSubmit} 
            className="w-full" 
            disabled={loading}
            size="lg"
          >
            {loading ? '分析中...' : '生成隐私影响评估报告'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const renderResults = () => {
    if (!result) return null

    const getRiskColor = (level: string) => {
      switch (level) {
        case 'LOW': return 'text-green-600 bg-green-50'
        case 'MEDIUM': return 'text-yellow-600 bg-yellow-50'
        case 'HIGH': return 'text-orange-600 bg-orange-50'
        case 'CRITICAL': return 'text-red-600 bg-red-50'
        default: return 'text-gray-600 bg-gray-50'
      }
    }

    const getRiskIcon = (level: string) => {
      switch (level) {
        case 'LOW': return <CheckCircle className="h-5 w-5" />
        case 'MEDIUM': return <AlertTriangle className="h-5 w-5" />
        case 'HIGH': return <XCircle className="h-5 w-5" />
        case 'CRITICAL': return <XCircle className="h-5 w-5" />
        default: return <AlertTriangle className="h-5 w-5" />
      }
    }

    return (
      <div className="space-y-6">
        {/* 总体风险评分 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              隐私影响评估结果
            </CardTitle>
            <CardDescription>
              基于您提供的信息，我们为 {assessmentData.companyName} 生成了全面的隐私风险评估
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {result.overallScore}/100
                </div>
                <div className="text-sm text-gray-600 mb-4">总体风险评分</div>
                <Badge className={`${getRiskColor(result.riskLevel)} border-none px-4 py-2`}>
                  <span className="flex items-center gap-2">
                    {getRiskIcon(result.riskLevel)}
                    {result.riskLevel} 风险
                  </span>
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">隐私风险</span>
                  <span className="font-bold">{result.privacyRisk}/40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">合规风险</span>
                  <span className="font-bold">{result.complianceRisk}/40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">运营风险</span>
                  <span className="font-bold">{result.operationalRisk}/30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">声誉风险</span>
                  <span className="font-bold">{result.reputationalRisk}/30</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 关键建议 */}
        <Card>
          <CardHeader>
            <CardTitle>立即行动建议</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {result.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{rec}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 实施路线图 */}
        <Card>
          <CardHeader>
            <CardTitle>改进实施路线图</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {result.implementation.map((phase, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{phase.phase}</h4>
                      <p className="text-sm text-gray-600">{phase.timeframe}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={phase.priority === 'CRITICAL' ? 'destructive' : 
                                   phase.priority === 'HIGH' ? 'default' : 'secondary'}>
                        {phase.priority}
                      </Badge>
                      <p className="text-sm font-medium mt-1">{phase.estimatedCost}</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {phase.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="text-sm flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 合规缺口 */}
        {result.complianceGaps.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <XCircle className="h-5 w-5" />
                发现的合规缺口
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.complianceGaps.map((gap, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <span className="text-sm">{gap}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 下一步行动 */}
        <Card>
          <CardHeader>
            <CardTitle>下一步行动</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {result.nextSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-sm rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
            
            <Separator className="my-6" />
            
            <div className="flex gap-4">
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                下载完整报告
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                获得专家咨询
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 相关工具链接 */}
        <Card className="bg-gray-50">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">相关企业AI工具</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/ai-tools-risk-assessment-enterprise-2026" className="text-blue-600 hover:underline text-sm">
                → AI风险评估工具
              </Link>
              <Link href="/ai-tools-security-compliance-checklist-2026" className="text-blue-600 hover:underline text-sm">
                → AI安全合规检查清单
              </Link>
              <Link href="/enterprise-ai-implementation-best-practices-2026" className="text-blue-600 hover:underline text-sm">
                → 企业AI实施最佳实践
              </Link>
              <Link href="/ai-tools-budget-planning-enterprise-2026" className="text-blue-600 hover:underline text-sm">
                → AI预算规划工具
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AI数据隐私影响评估工具 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            全面评估您的AI系统数据隐私风险，确保合规性，保护企业和用户数据安全
          </p>
        </div>

        {result ? (
          renderResults()
        ) : (
          <>
            {/* 步骤指示器 */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                      ${currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={`w-16 h-1 mx-2 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-200'}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}

            {currentStep < 4 && (
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  上一步
                </Button>
                <Button 
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  disabled={
                    (currentStep === 1 && (!assessmentData.companyName || !assessmentData.industry || !assessmentData.companySize || !assessmentData.aiSystemType)) ||
                    (currentStep === 2 && (assessmentData.dataTypes.length === 0 || !assessmentData.dataVolume || assessmentData.geographicScope.length === 0)) ||
                    (currentStep === 3 && (!assessmentData.retentionPeriod || !assessmentData.dataSharing))
                  }
                >
                  下一步
                </Button>
              </div>
            )}
          </>
        )}

        {/* 特色说明 */}
        {!result && (
          <Card className="mt-8 bg-blue-50">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">全面数据评估</h3>
                  <p className="text-sm text-gray-600">涵盖8种数据类型和5个风险维度的专业评估</p>
                </div>
                <div>
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">多框架合规</h3>
                  <p className="text-sm text-gray-600">支持GDPR、CCPA、PIPEDA等主流隐私法规</p>
                </div>
                <div>
                  <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">可行动建议</h3>
                  <p className="text-sm text-gray-600">提供详细的改进路线图和成本估算</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default DataPrivacyAssessment