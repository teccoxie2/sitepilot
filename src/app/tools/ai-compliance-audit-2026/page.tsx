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
import { AlertTriangle, CheckCircle, XCircle, FileText, Download, Shield, BarChart3 } from 'lucide-react'
import Link from 'next/link'

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

export default function AIComplianceAudit2026() {
  const [currentStep, setCurrentStep] = useState(1)
  const [results, setResults] = useState<AuditResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
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
    regulatoryRequirements: ''
  })

  const industries = [
    "金融服务", "医疗保健", "制造业", "零售电商", "科技软件",
    "电信通信", "能源公用事业", "交通物流", "教育", "政府公共部门"
  ]

  const frameworks = [
    "GDPR (通用数据保护法)", "CCPA (加州消费者隐私法)", "SOX (萨班斯法案)",
    "HIPAA (健康保险便携法)", "PCI DSS (支付卡行业标准)", "ISO 27001 (信息安全)",
    "NIST Framework (网络安全框架)", "FedRAMP (联邦风险管理)", "SOC 2 (系统组织控制)"
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculateCompliance = () => {
    setIsLoading(true)
    
    // 模拟复杂的合规分析
    setTimeout(() => {
      const complianceAreas: ComplianceArea[] = [
        {
          name: "数据隐私与保护",
          description: "个人数据处理的合规性评估",
          requirements: ["数据分类", "同意管理", "数据主体权利", "数据最小化原则"],
          score: formData.dataTypes.includes('个人') ? 65 : 85,
          status: formData.dataTypes.includes('敏感') ? 'warning' : 'pass',
          recommendations: ["实施数据发现工具", "建立同意管理系统", "定期进行隐私影响评估"]
        },
        {
          name: "算法公平性",
          description: "AI决策系统的偏见检测与缓解",
          requirements: ["偏见测试", "公平性度量", "模型解释性", "持续监控"],
          score: formData.aiSystems.includes('决策') ? 55 : 75,
          status: formData.aiSystems.includes('招聘') ? 'fail' : 'warning',
          recommendations: ["部署偏见检测工具", "建立多样化测试数据集", "实施人类监督流程"]
        },
        {
          name: "模型透明度",
          description: "AI系统的可解释性和可审计性",
          requirements: ["模型文档", "决策路径", "性能指标", "变更追踪"],
          score: 70,
          status: 'warning',
          recommendations: ["建立模型文档库", "实施可解释AI技术", "创建审计日志系统"]
        },
        {
          name: "数据安全",
          description: "训练数据和模型的安全保护",
          requirements: ["加密存储", "访问控制", "安全传输", "备份恢复"],
          score: 80,
          status: 'pass',
          recommendations: ["强化多因素认证", "实施零信任架构", "定期安全审计"]
        },
        {
          name: "监管合规",
          description: "特定行业法规的遵循情况",
          requirements: ["法规映射", "合规文档", "审计准备", "报告机制"],
          score: formData.industry === '金融服务' ? 60 : 75,
          status: formData.industry === '医疗保健' ? 'warning' : 'pass',
          recommendations: ["建立合规仪表板", "定期法规更新", "合规培训计划"]
        }
      ]

      const overallScore = Math.round(complianceAreas.reduce((acc, area) => acc + area.score, 0) / complianceAreas.length)
      const criticalIssues = complianceAreas
        .filter(area => area.status === 'fail')
        .map(area => area.name)

      const getRiskLevel = (score: number): 'low' | 'medium' | 'high' | 'critical' => {
        if (score >= 85) return 'low'
        if (score >= 70) return 'medium'
        if (score >= 55) return 'high'
        return 'critical'
      }

      const auditResults: AuditResults = {
        overallScore,
        complianceAreas,
        criticalIssues,
        actionPriority: [
          "修复高风险的算法偏见问题",
          "完善数据隐私保护措施",
          "建立持续监控机制",
          "加强员工合规培训"
        ],
        timeline: overallScore < 60 ? "6-12个月" : overallScore < 80 ? "3-6个月" : "1-3个月",
        cost: overallScore < 60 ? "$200K-$500K" : overallScore < 80 ? "$100K-$300K" : "$50K-$150K",
        riskLevel: getRiskLevel(overallScore)
      }

      setResults(auditResults)
      setIsLoading(false)
      setCurrentStep(4)
    }, 2000)
  }

  const resetTool = () => {
    setCurrentStep(1)
    setResults(null)
    setFormData({
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
      regulatoryRequirements: ''
    })
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'high': return 'bg-orange-100 text-orange-800'
      case 'critical': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'fail': return <XCircle className="w-5 h-5 text-red-600" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">AI合规审核工具 2026</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            全面评估您的AI系统合规状况，识别风险，获得专业整改建议
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Badge variant="outline" className="px-3 py-1">15分钟完整评估</Badge>
            <Badge variant="outline" className="px-3 py-1">7大合规框架</Badge>
            <Badge variant="outline" className="px-3 py-1">专业整改计划</Badge>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                  currentStep >= step ? 'bg-blue-600' : 'bg-gray-300'
                }`}>
                  {step}
                </div>
                {step < 4 && <div className={`w-16 h-1 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-300'}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: 基本信息 */}
        {currentStep === 1 && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                第一步：企业基本信息
              </CardTitle>
              <CardDescription>
                为您提供定制化的合规评估
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="companyName">企业名称</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="请输入企业名称"
                  />
                </div>
                <div>
                  <Label htmlFor="industry">所属行业</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择行业" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="employeeCount">员工规模</Label>
                  <Select value={formData.employeeCount} onValueChange={(value) => handleInputChange('employeeCount', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择员工规模" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<100">少于100人</SelectItem>
                      <SelectItem value="100-500">100-500人</SelectItem>
                      <SelectItem value="500-1000">500-1000人</SelectItem>
                      <SelectItem value="1000-5000">1000-5000人</SelectItem>
                      <SelectItem value=">5000">超过5000人</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="annualRevenue">年营收规模</Label>
                  <Select value={formData.annualRevenue} onValueChange={(value) => handleInputChange('annualRevenue', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择年营收规模" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<10M">少于1000万</SelectItem>
                      <SelectItem value="10M-50M">1000万-5000万</SelectItem>
                      <SelectItem value="50M-100M">5000万-1亿</SelectItem>
                      <SelectItem value="100M-1B">1亿-10亿</SelectItem>
                      <SelectItem value=">1B">超过10亿</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="geographicRegions">业务覆盖地区</Label>
                <Textarea
                  id="geographicRegions"
                  value={formData.geographicRegions}
                  onChange={(e) => handleInputChange('geographicRegions', e.target.value)}
                  placeholder="例如：中国大陆、香港、新加坡、美国、欧盟等"
                  rows={2}
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setCurrentStep(2)} className="px-8">下一步</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: AI系统信息 */}
        {currentStep === 2 && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-6 h-6 mr-2 text-blue-600" />
                第二步：AI系统现状
              </CardTitle>
              <CardDescription>
                评估您的AI系统使用情况和数据处理方式
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="aiSystems">AI系统类型与应用场景</Label>
                <Textarea
                  id="aiSystems"
                  value={formData.aiSystems}
                  onChange={(e) => handleInputChange('aiSystems', e.target.value)}
                  placeholder="例如：客户服务聊天机器人、推荐系统、风险评估模型、人脸识别系统、自动化决策系统等"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="dataTypes">处理的数据类型</Label>
                <Textarea
                  id="dataTypes"
                  value={formData.dataTypes}
                  onChange={(e) => handleInputChange('dataTypes', e.target.value)}
                  placeholder="例如：个人身份信息、财务数据、健康记录、生物特征数据、行为数据等"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="currentFrameworks">当前使用的合规框架</Label>
                <Textarea
                  id="currentFrameworks"
                  value={formData.currentFrameworks}
                  onChange={(e) => handleInputChange('currentFrameworks', e.target.value)}
                  placeholder="请选择或输入当前已实施的合规框架"
                  rows={2}
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {frameworks.map((framework) => (
                    <Badge
                      key={framework}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50"
                      onClick={() => {
                        const current = formData.currentFrameworks
                        const newValue = current.includes(framework) 
                          ? current.replace(framework, '').replace(/,\s*,/g, ',').replace(/^,\s*|,\s*$/g, '')
                          : current ? `${current}, ${framework}` : framework
                        handleInputChange('currentFrameworks', newValue)
                      }}
                    >
                      {framework}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>上一步</Button>
                <Button onClick={() => setCurrentStep(3)} className="px-8">下一步</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: 具体需求 */}
        {currentStep === 3 && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-blue-600" />
                第三步：具体评估需求
              </CardTitle>
              <CardDescription>
                帮助我们了解您的重点关注领域
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="lastAuditDate">上次合规审核时间</Label>
                <Select value={formData.lastAuditDate} onValueChange={(value) => handleInputChange('lastAuditDate', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择上次审核时间" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">从未进行过</SelectItem>
                    <SelectItem value="<6months">6个月内</SelectItem>
                    <SelectItem value="6-12months">6-12个月前</SelectItem>
                    <SelectItem value="1-2years">1-2年前</SelectItem>
                    <SelectItem value=">2years">2年以上</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="specificConcerns">具体关注的合规领域</Label>
                <Textarea
                  id="specificConcerns"
                  value={formData.specificConcerns}
                  onChange={(e) => handleInputChange('specificConcerns', e.target.value)}
                  placeholder="例如：算法偏见检测、数据隐私保护、模型可解释性、监管合规报告等"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="regulatoryRequirements">特殊监管要求</Label>
                <Textarea
                  id="regulatoryRequirements"
                  value={formData.regulatoryRequirements}
                  onChange={(e) => handleInputChange('regulatoryRequirements', e.target.value)}
                  placeholder="例如：行业特定法规、国际标准要求、审计要求等"
                  rows={3}
                />
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>上一步</Button>
                <Button onClick={calculateCompliance} disabled={isLoading} className="px-8">
                  {isLoading ? "分析中..." : "开始合规评估"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: 结果展示 */}
        {currentStep === 4 && results && (
          <div className="space-y-6">
            {/* 总体结果卡片 */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-blue-600" />
                    AI合规评估报告
                  </span>
                  <Badge className={`text-lg px-4 py-2 ${getRiskColor(results.riskLevel)}`}>
                    {results.riskLevel === 'low' && '低风险'}
                    {results.riskLevel === 'medium' && '中等风险'}
                    {results.riskLevel === 'high' && '高风险'}
                    {results.riskLevel === 'critical' && '严重风险'}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{results.overallScore}</div>
                    <div className="text-gray-600">综合得分</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">{results.criticalIssues.length}</div>
                    <div className="text-gray-600">关键问题</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600 mb-2">{results.timeline}</div>
                    <div className="text-gray-600">整改周期</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600 mb-2">{results.cost}</div>
                    <div className="text-gray-600">预估成本</div>
                  </div>
                </div>

                {results.criticalIssues.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-red-800 mb-2">⚠️ 需要立即关注的问题：</h4>
                    <ul className="text-red-700 space-y-1">
                      {results.criticalIssues.map((issue, index) => (
                        <li key={index}>• {issue}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 详细评估结果 */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>分领域评估详情</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {results.complianceAreas.map((area, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          {getStatusIcon(area.status)}
                          <h4 className="font-semibold text-lg ml-2">{area.name}</h4>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">{area.score}/100</div>
                      </div>
                      <p className="text-gray-600 mb-3">{area.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">评估要求：</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {area.requirements.map((req, reqIndex) => (
                              <li key={reqIndex}>• {req}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">改进建议：</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {area.recommendations.map((rec, recIndex) => (
                              <li key={recIndex}>• {rec}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 行动计划 */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>优先行动计划</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {results.actionPriority.map((action, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-3">
                        {index + 1}
                      </div>
                      <span className="text-gray-800">{action}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 行动按钮 */}
            <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
              <Button className="flex items-center px-6">
                <Download className="w-4 h-4 mr-2" />
                下载详细报告
              </Button>
              <Button variant="outline" className="flex items-center px-6">
                <FileText className="w-4 h-4 mr-2" />
                咨询专家
              </Button>
              <Button variant="outline" onClick={resetTool} className="px-6">
                重新评估
              </Button>
            </div>

            {/* 相关工具推荐 */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>相关企业AI工具</CardTitle>
                <CardDescription>完善您的AI治理体系</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/tools/ai-risk-management-framework" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-blue-600 mb-2">AI风险管理框架</h4>
                    <p className="text-sm text-gray-600">企业级风险评估与缓解策略</p>
                  </Link>
                  <Link href="/tools/ai-governance-monitoring-dashboard" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-blue-600 mb-2">AI治理监控仪表板</h4>
                    <p className="text-sm text-gray-600">实时AI系统治理状态监控</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>本工具基于最新的AI治理最佳实践和国际合规标准开发</p>
          <p className="mt-1">如需定制化合规咨询服务，请联系我们的专家团队</p>
        </div>
      </div>
    </div>
  )
}