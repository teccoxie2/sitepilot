'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { AlertTriangle, TrendingUp, DollarSign, Calendar, Target, Zap, Shield, BarChart3, FileText, Download } from 'lucide-react'

interface InvestmentArea {
  name: string
  currentBudget: number
  proposedBudget: number
  roi: number
  riskLevel: 'low' | 'medium' | 'high'
  timeline: number // months
  dependencies: string[]
}

interface PortfolioResult {
  totalInvestment: number
  expectedROI: number
  riskScore: number
  timeToValue: number
  recommendations: string[]
  allocations: InvestmentArea[]
}

export default function AIInvestmentPortfolioOptimizer() {
  const [currentStep, setCurrentStep] = useState(1)
  const [companySize, setCompanySize] = useState('')
  const [industry, setIndustry] = useState('')
  const [currentAIBudget, setCurrentAIBudget] = useState('')
  const [strategicGoals, setStrategicGoals] = useState<string[]>([])
  const [riskTolerance, setRiskTolerance] = useState('')
  const [timeHorizon, setTimeHorizon] = useState('')
  const [currentInvestments, setCurrentInvestments] = useState<InvestmentArea[]>([])
  const [result, setResult] = useState<PortfolioResult | null>(null)

  const industries = [
    'Technology', 'Financial Services', 'Healthcare', 'Manufacturing', 
    'Retail', 'Education', 'Government', 'Professional Services',
    'Media & Entertainment', 'Transportation'
  ]

  const companySizes = [
    'Startup (1-50 employees)', 
    'Small Business (51-200 employees)',
    'Mid-size (201-1000 employees)',
    'Enterprise (1001-5000 employees)',
    'Large Enterprise (5000+ employees)'
  ]

  const goalOptions = [
    'Cost Reduction', 'Revenue Growth', 'Operational Efficiency', 
    'Customer Experience', 'Innovation Leadership', 'Risk Mitigation',
    'Competitive Advantage', 'Digital Transformation'
  ]

  const defaultInvestmentAreas = [
    {
      name: 'Process Automation',
      currentBudget: 0,
      proposedBudget: 0,
      roi: 0,
      riskLevel: 'low' as const,
      timeline: 6,
      dependencies: ['Infrastructure', 'Training']
    },
    {
      name: 'Customer Analytics',
      currentBudget: 0,
      proposedBudget: 0,
      roi: 0,
      riskLevel: 'medium' as const,
      timeline: 9,
      dependencies: ['Data Infrastructure', 'Analytics Team']
    },
    {
      name: 'Predictive Maintenance',
      currentBudget: 0,
      proposedBudget: 0,
      roi: 0,
      riskLevel: 'medium' as const,
      timeline: 12,
      dependencies: ['IoT Infrastructure', 'Data Collection']
    },
    {
      name: 'AI-Powered Product Features',
      currentBudget: 0,
      proposedBudget: 0,
      roi: 0,
      riskLevel: 'high' as const,
      timeline: 18,
      dependencies: ['R&D Team', 'Product Integration']
    },
    {
      name: 'Intelligent Document Processing',
      currentBudget: 0,
      proposedBudget: 0,
      roi: 0,
      riskLevel: 'low' as const,
      timeline: 4,
      dependencies: ['Document Digitization']
    }
  ]

  useEffect(() => {
    setCurrentInvestments(defaultInvestmentAreas)
  }, [])

  const calculateOptimalPortfolio = () => {
    const totalBudget = parseFloat(currentAIBudget)
    if (!totalBudget) return

    // 基于公司规模、行业、目标和风险承受度的优化算法
    const sizeMultiplier = companySize.includes('Startup') ? 0.8 : 
                          companySize.includes('Small') ? 1.0 :
                          companySize.includes('Mid-size') ? 1.2 :
                          companySize.includes('Enterprise') ? 1.5 : 2.0

    const riskMultiplier = riskTolerance === 'conservative' ? 0.7 :
                          riskTolerance === 'balanced' ? 1.0 : 1.3

    // 基于战略目标调整投资分配
    const optimizedAllocations = currentInvestments.map(area => {
      let allocation = 0
      let expectedROI = 0

      // 根据战略目标调整分配
      if (strategicGoals.includes('Cost Reduction') && area.name === 'Process Automation') {
        allocation = totalBudget * 0.35 * sizeMultiplier * riskMultiplier
        expectedROI = 240
      } else if (strategicGoals.includes('Customer Experience') && area.name === 'Customer Analytics') {
        allocation = totalBudget * 0.25 * sizeMultiplier * riskMultiplier
        expectedROI = 180
      } else if (strategicGoals.includes('Operational Efficiency') && area.name === 'Predictive Maintenance') {
        allocation = totalBudget * 0.20 * sizeMultiplier * riskMultiplier
        expectedROI = 160
      } else if (strategicGoals.includes('Innovation Leadership') && area.name === 'AI-Powered Product Features') {
        allocation = totalBudget * 0.30 * sizeMultiplier * riskMultiplier
        expectedROI = 320
      } else if (strategicGoals.includes('Operational Efficiency') && area.name === 'Intelligent Document Processing') {
        allocation = totalBudget * 0.15 * sizeMultiplier * riskMultiplier
        expectedROI = 200
      } else {
        allocation = totalBudget * 0.10
        expectedROI = 120
      }

      return {
        ...area,
        proposedBudget: Math.round(allocation),
        roi: expectedROI
      }
    })

    // 规范化分配以确保总和等于预算
    const totalAllocated = optimizedAllocations.reduce((sum, area) => sum + area.proposedBudget, 0)
    const adjustmentFactor = totalBudget / totalAllocated

    const finalAllocations = optimizedAllocations.map(area => ({
      ...area,
      proposedBudget: Math.round(area.proposedBudget * adjustmentFactor)
    }))

    const avgROI = finalAllocations.reduce((sum, area) => sum + area.roi, 0) / finalAllocations.length
    const riskScore = finalAllocations.reduce((sum, area) => 
      sum + (area.riskLevel === 'low' ? 1 : area.riskLevel === 'medium' ? 2 : 3), 0
    ) / finalAllocations.length

    const recommendations = [
      `基于您的${strategicGoals.join('、')}目标，建议优先投资${finalAllocations.sort((a, b) => b.proposedBudget - a.proposedBudget)[0].name}`,
      `您的投资组合风险评分为${riskScore.toFixed(1)}/3，${riskScore < 2 ? '风险适中' : riskScore < 2.5 ? '风险较高' : '高风险投资'}`,
      `建议分阶段实施，从ROI最高且风险最低的项目开始`,
      `预期在${Math.min(...finalAllocations.map(a => a.timeline))}个月内看到初步成果`,
      industry === 'Financial Services' ? '考虑额外的合规和安全投资' :
      industry === 'Healthcare' ? '重点关注数据隐私和监管要求' :
      industry === 'Manufacturing' ? '优先考虑运营效率和预测性维护' : '建议定期评估ROI进展'
    ]

    setResult({
      totalInvestment: totalBudget,
      expectedROI: avgROI,
      riskScore,
      timeToValue: Math.min(...finalAllocations.map(a => a.timeline)),
      recommendations,
      allocations: finalAllocations
    })
  }

  const handleGoalToggle = (goal: string) => {
    setStrategicGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    )
  }

  const updateInvestmentBudget = (index: number, budget: string) => {
    const updatedInvestments = [...currentInvestments]
    updatedInvestments[index].currentBudget = parseFloat(budget) || 0
    setCurrentInvestments(updatedInvestments)
  }

  const generatePDFReport = () => {
    if (!result) return
    
    const reportData = {
      companyProfile: { size: companySize, industry, budget: currentAIBudget },
      strategy: { goals: strategicGoals, riskTolerance, timeHorizon },
      recommendations: result.recommendations,
      allocations: result.allocations,
      metrics: {
        totalInvestment: result.totalInvestment,
        expectedROI: result.expectedROI,
        riskScore: result.riskScore,
        timeToValue: result.timeToValue
      },
      generatedAt: new Date().toISOString()
    }

    // 创建可下载的JSON文件（实际应用中会生成PDF）
    const dataStr = JSON.stringify(reportData, null, 2)
    const dataBlob = new Blob([dataStr], {type: 'application/json'})
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `ai-investment-portfolio-optimization-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">
              AI投资组合优化器 2026
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            智能优化您的AI投资分配，最大化ROI并最小化风险。基于企业规模、行业特点和战略目标的专业级投资组合规划。
          </p>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Target className="h-4 w-4 mr-1" />
              投资优化
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <TrendingUp className="h-4 w-4 mr-1" />
              ROI最大化
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              <Shield className="h-4 w-4 mr-1" />
              风险管理
            </Badge>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">进度</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / 4) * 100)}%</span>
          </div>
          <Progress value={(currentStep / 4) * 100} className="h-2" />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span className={currentStep >= 1 ? "text-blue-600 font-medium" : ""}>公司概况</span>
            <span className={currentStep >= 2 ? "text-blue-600 font-medium" : ""}>战略目标</span>
            <span className={currentStep >= 3 ? "text-blue-600 font-medium" : ""}>投资配置</span>
            <span className={currentStep >= 4 ? "text-blue-600 font-medium" : ""}>优化结果</span>
          </div>
        </div>

        {/* Step 1: Company Profile */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="h-6 w-6 mr-2" />
                公司概况
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company-size">公司规模</Label>
                  <Select value={companySize} onValueChange={setCompanySize}>
                    <SelectTrigger>
                      <SelectValue placeholder="选择公司规模" />
                    </SelectTrigger>
                    <SelectContent>
                      {companySizes.map(size => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="industry">行业</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="选择行业" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map(ind => (
                        <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="ai-budget">年度AI预算 (USD)</Label>
                <Input
                  id="ai-budget"
                  type="number"
                  placeholder="例如: 500000"
                  value={currentAIBudget}
                  onChange={(e) => setCurrentAIBudget(e.target.value)}
                />
              </div>
              <Button 
                onClick={() => setCurrentStep(2)}
                disabled={!companySize || !industry || !currentAIBudget}
                className="w-full"
              >
                下一步：设定战略目标
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Strategic Goals */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-6 w-6 mr-2" />
                战略目标设定
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium">主要战略目标（可多选）</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                  {goalOptions.map(goal => (
                    <Button
                      key={goal}
                      variant={strategicGoals.includes(goal) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleGoalToggle(goal)}
                      className="justify-start h-auto py-2"
                    >
                      {goal}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="risk-tolerance">风险承受度</Label>
                  <Select value={riskTolerance} onValueChange={setRiskTolerance}>
                    <SelectTrigger>
                      <SelectValue placeholder="选择风险偏好" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conservative">保守型 - 稳定回报</SelectItem>
                      <SelectItem value="balanced">平衡型 - 适度风险</SelectItem>
                      <SelectItem value="aggressive">激进型 - 高收益追求</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="time-horizon">投资时间周期</Label>
                  <Select value={timeHorizon} onValueChange={setTimeHorizon}>
                    <SelectTrigger>
                      <SelectValue placeholder="选择时间周期" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">短期（6-12个月）</SelectItem>
                      <SelectItem value="medium">中期（1-2年）</SelectItem>
                      <SelectItem value="long">长期（2年以上）</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  上一步
                </Button>
                <Button 
                  onClick={() => setCurrentStep(3)}
                  disabled={strategicGoals.length === 0 || !riskTolerance || !timeHorizon}
                  className="flex-1"
                >
                  下一步：配置投资领域
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Investment Configuration */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-6 w-6 mr-2" />
                投资领域配置
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                配置各投资领域的当前预算（可选）。如果留空，系统将基于您的战略目标自动优化分配。
              </p>
              
              <div className="space-y-4">
                {currentInvestments.map((area, index) => (
                  <div key={area.name} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">{area.name}</h4>
                        <p className="text-sm text-gray-600">
                          预期时间线: {area.timeline}个月 • 风险级别: 
                          <Badge 
                            variant="secondary" 
                            className={`ml-1 ${
                              area.riskLevel === 'low' ? 'bg-green-100 text-green-800' :
                              area.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}
                          >
                            {area.riskLevel === 'low' ? '低' : area.riskLevel === 'medium' ? '中' : '高'}
                          </Badge>
                        </p>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor={`budget-${index}`}>当前预算 (USD)</Label>
                      <Input
                        id={`budget-${index}`}
                        type="number"
                        placeholder="例如: 50000"
                        value={area.currentBudget || ''}
                        onChange={(e) => updateInvestmentBudget(index, e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  上一步
                </Button>
                <Button 
                  onClick={() => {
                    calculateOptimalPortfolio()
                    setCurrentStep(4)
                  }}
                  className="flex-1"
                >
                  生成优化方案
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Results */}
        {currentStep === 4 && result && (
          <div className="space-y-6">
            {/* Summary Metrics */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <DollarSign className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">总投资</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${result.totalInvestment.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">预期ROI</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {result.expectedROI.toFixed(0)}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Shield className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">风险评分</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {result.riskScore.toFixed(1)}/3
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Calendar className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">见效时间</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {result.timeToValue}个月
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Results */}
            <Tabs defaultValue="allocations" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="allocations">投资分配</TabsTrigger>
                <TabsTrigger value="recommendations">专业建议</TabsTrigger>
                <TabsTrigger value="timeline">实施路线图</TabsTrigger>
              </TabsList>
              
              <TabsContent value="allocations" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>优化后的投资分配</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {result.allocations.map((area, index) => (
                        <div key={area.name} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium text-gray-900">{area.name}</h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge 
                                  variant="secondary" 
                                  className={`${
                                    area.riskLevel === 'low' ? 'bg-green-100 text-green-800' :
                                    area.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'
                                  }`}
                                >
                                  {area.riskLevel === 'low' ? '低风险' : area.riskLevel === 'medium' ? '中风险' : '高风险'}
                                </Badge>
                                <span className="text-sm text-gray-600">预期ROI: {area.roi}%</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-gray-900">
                                ${area.proposedBudget.toLocaleString()}
                              </p>
                              <p className="text-sm text-gray-600">
                                {((area.proposedBudget / result.totalInvestment) * 100).toFixed(1)}%
                              </p>
                            </div>
                          </div>
                          <Progress 
                            value={(area.proposedBudget / result.totalInvestment) * 100} 
                            className="h-2"
                          />
                          <div className="mt-2">
                            <p className="text-sm text-gray-600">
                              依赖项: {area.dependencies.join(', ')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="recommendations">
                <Card>
                  <CardHeader>
                    <CardTitle>专业建议</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {result.recommendations.map((recommendation, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                          <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
                          <p className="text-gray-700">{recommendation}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="timeline">
                <Card>
                  <CardHeader>
                    <CardTitle>实施路线图</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {result.allocations
                        .sort((a, b) => a.timeline - b.timeline)
                        .map((area, index) => (
                          <div key={area.name} className="flex items-center space-x-4 p-3 border rounded-lg">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-medium text-gray-900">{area.name}</h4>
                              <p className="text-sm text-gray-600">
                                预期完成时间: {area.timeline}个月 • 预算: ${area.proposedBudget.toLocaleString()}
                              </p>
                            </div>
                            <Badge variant="outline">
                              阶段 {index + 1}
                            </Badge>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setCurrentStep(3)}>
                返回修改
              </Button>
              <Button onClick={generatePDFReport} className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                下载详细报告
              </Button>
              <Button 
                onClick={() => {
                  setCurrentStep(1)
                  setResult(null)
                  setCompanySize('')
                  setIndustry('')
                  setCurrentAIBudget('')
                  setStrategicGoals([])
                  setRiskTolerance('')
                  setTimeHorizon('')
                }}
                variant="outline"
              >
                重新开始
              </Button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">需要专业的AI投资顾问服务？</h3>
            <p className="mb-4">我们提供完整的AI投资组合管理和实施支持服务</p>
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              联系AI投资专家
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            <p>© 2026 SitePilot AI Investment Solutions. 专业级AI投资组合优化工具。</p>
            <p className="mt-1">基于最新AI投资数据和行业最佳实践构建。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// 添加缺失的 Building2 图标
import { Building } from 'lucide-react'
const Building2 = Building