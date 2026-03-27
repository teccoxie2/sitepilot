'use client'

import React, { useState, useEffect } from 'react'
import { Search, Filter, Star, TrendingUp, DollarSign, Shield, Users, Clock, ChevronDown, ChevronRight, CheckCircle, X, Award, BarChart3, Globe, Zap, Calendar, Brain, HelpCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

interface Filters {
  priceRange: string
  deploymentType: string
  companySize: string
  integration: string
}

interface Vendor {
  id: string
  name: string
  category: string
  logo: string
  rating: number
  pricing: string
  priceRange: string
  deployment: string
  companySize: string
  description: string
  keyFeatures: string[]
  pros: string[]
  cons: string[]
  integrations: string[]
  support: string
  implementation: string
  roi: string
  riskLevel: string
  marketShare: string
  customerBase: string
  useCase: string
  compliance: string[]
}

export default function EnterpriseAIVendorComparison() {
  const [showIntro, setShowIntro] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    priceRange: 'all',
    deploymentType: 'all',
    companySize: 'all',
    integration: 'all'
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedVendor, setExpandedVendor] = useState<string | null>(null)
  const [showComparison, setShowComparison] = useState(false)
  const [selectedVendors, setSelectedVendors] = useState<string[]>([])

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'generative-ai', name: 'Generative AI', icon: Brain },
    { id: 'analytics', name: 'AI Analytics', icon: BarChart3 },
    { id: 'automation', name: 'Process Automation', icon: Zap },
    { id: 'customer-service', name: 'Customer Service', icon: Users },
    { id: 'security', name: 'AI Security', icon: Shield },
    { id: 'hr-talent', name: 'HR & Talent', icon: Award }
  ]

  const vendors: Vendor[] = [
    {
      id: 'openai-enterprise',
      name: 'OpenAI Enterprise',
      category: 'generative-ai',
      logo: '/api/placeholder/48/48',
      rating: 4.8,
      pricing: '$$$',
      priceRange: 'enterprise',
      deployment: 'cloud',
      companySize: 'large',
      description: 'Leading generative AI platform with GPT-4 and advanced language models for enterprise applications.',
      keyFeatures: [
        'GPT-4 Turbo API access',
        'Advanced fine-tuning capabilities',
        'Enterprise-grade security',
        'Custom model training',
        'Multi-modal AI (text, image, code)',
        'SOC 2 Type II compliance'
      ],
      pros: [
        'Industry-leading model performance',
        'Comprehensive API ecosystem',
        'Strong developer community',
        'Regular model updates',
        'Excellent documentation'
      ],
      cons: [
        'High usage costs for large deployments',
        'API rate limits',
        'Limited customization options',
        'Dependency on external service'
      ],
      integrations: ['Salesforce', 'Microsoft 365', 'Slack', 'Custom APIs'],
      support: '24/7 Enterprise Support',
      implementation: '2-4 weeks',
      roi: 'High',
      riskLevel: 'Low',
      marketShare: '35%',
      customerBase: 'Fortune 500, Tech companies',
      useCase: 'Content generation, code assistance, customer support automation',
      compliance: ['SOC 2', 'GDPR', 'HIPAA (BAA available)']
    },
    {
      id: 'microsoft-ai',
      name: 'Microsoft Azure AI',
      category: 'analytics',
      logo: '/api/placeholder/48/48',
      rating: 4.7,
      pricing: '$$$',
      priceRange: 'enterprise',
      deployment: 'hybrid',
      companySize: 'large',
      description: 'Comprehensive AI platform integrated with Microsoft ecosystem, offering cognitive services and ML tools.',
      keyFeatures: [
        'Azure Cognitive Services',
        'Azure Machine Learning Studio',
        'Power BI AI integration',
        'Azure OpenAI Service',
        'Pre-built AI models',
        'Enterprise integration'
      ],
      pros: [
        'Deep Microsoft ecosystem integration',
        'Hybrid cloud capabilities',
        'Extensive pre-built models',
        'Strong enterprise security',
        'Familiar interface for Microsoft users'
      ],
      cons: [
        'Complex pricing structure',
        'Steep learning curve',
        'Vendor lock-in concerns',
        'Resource-intensive setup'
      ],
      integrations: ['Office 365', 'Dynamics 365', 'Power Platform', 'Teams'],
      support: 'Premier Support Available',
      implementation: '4-8 weeks',
      roi: 'High',
      riskLevel: 'Low',
      marketShare: '28%',
      customerBase: 'Enterprise, Government, Healthcare',
      useCase: 'Business intelligence, document processing, predictive analytics',
      compliance: ['SOC 1/2', 'ISO 27001', 'FedRAMP', 'HIPAA']
    },
    {
      id: 'google-cloud-ai',
      name: 'Google Cloud AI',
      category: 'analytics',
      logo: '/api/placeholder/48/48',
      rating: 4.6,
      pricing: '$$',
      priceRange: 'mid-enterprise',
      deployment: 'cloud',
      companySize: 'medium',
      description: 'Advanced AI and machine learning platform with Google\'s cutting-edge research and infrastructure.',
      keyFeatures: [
        'Vertex AI platform',
        'AutoML capabilities',
        'TensorFlow integration',
        'BigQuery ML',
        'Pre-trained APIs',
        'Explainable AI'
      ],
      pros: [
        'Leading AI research foundation',
        'Strong AutoML capabilities',
        'Excellent for data scientists',
        'Scalable infrastructure',
        'Open-source friendly'
      ],
      cons: [
        'Complex for non-technical users',
        'Steeper learning curve',
        'Limited industry-specific solutions',
        'Less enterprise sales support'
      ],
      integrations: ['Google Workspace', 'BigQuery', 'Kubernetes', 'TensorFlow'],
      support: 'Cloud Support Plans',
      implementation: '3-6 weeks',
      roi: 'Medium-High',
      riskLevel: 'Medium',
      marketShare: '18%',
      customerBase: 'Tech companies, Startups, Research institutions',
      useCase: 'Custom ML models, data analytics, computer vision',
      compliance: ['SOC 1/2/3', 'ISO 27001', 'GDPR', 'PCI DSS']
    },
    {
      id: 'salesforce-einstein',
      name: 'Salesforce Einstein',
      category: 'customer-service',
      logo: '/api/placeholder/48/48',
      rating: 4.5,
      pricing: '$$$',
      priceRange: 'enterprise',
      deployment: 'cloud',
      companySize: 'large',
      description: 'CRM-integrated AI platform designed for sales, marketing, and customer service optimization.',
      keyFeatures: [
        'Einstein Analytics',
        'Einstein Discovery',
        'Einstein Bot Builder',
        'Predictive Lead Scoring',
        'Automated Email Marketing',
        'Voice of Customer Analysis'
      ],
      pros: [
        'Seamless Salesforce integration',
        'Industry-specific solutions',
        'Strong customer service focus',
        'User-friendly interface',
        'Proven ROI in CRM use cases'
      ],
      cons: [
        'Limited outside Salesforce ecosystem',
        'High licensing costs',
        'Requires Salesforce expertise',
        'Customization complexity'
      ],
      integrations: ['Salesforce CRM', 'Marketing Cloud', 'Service Cloud', 'Commerce Cloud'],
      support: 'Premier Success Plans',
      implementation: '6-12 weeks',
      roi: 'High',
      riskLevel: 'Low',
      marketShare: '12%',
      customerBase: 'Salesforce customers, Enterprise sales/marketing teams',
      useCase: 'Sales forecasting, customer service automation, marketing optimization',
      compliance: ['SOC 1/2', 'ISO 27001', 'GDPR', 'CCPA']
    },
    {
      id: 'aws-ai',
      name: 'Amazon Web Services AI',
      category: 'automation',
      logo: '/api/placeholder/48/48',
      rating: 4.6,
      pricing: '$$',
      priceRange: 'mid-enterprise',
      deployment: 'cloud',
      companySize: 'medium',
      description: 'Comprehensive cloud AI services including machine learning, natural language processing, and computer vision.',
      keyFeatures: [
        'Amazon SageMaker',
        'Amazon Rekognition',
        'Amazon Comprehend',
        'Amazon Lex',
        'Amazon Forecast',
        'Amazon Personalize'
      ],
      pros: [
        'Extensive service portfolio',
        'Strong infrastructure reliability',
        'Pay-as-you-go pricing',
        'Good for developers',
        'Global availability'
      ],
      cons: [
        'Complex service landscape',
        'Requires cloud expertise',
        'Cost can escalate quickly',
        'Limited industry specialization'
      ],
      integrations: ['AWS ecosystem', 'Third-party APIs', 'Open source tools'],
      support: 'AWS Support Plans',
      implementation: '4-8 weeks',
      roi: 'Medium-High',
      riskLevel: 'Medium',
      marketShare: '15%',
      customerBase: 'AWS customers, Cloud-native companies',
      useCase: 'Custom AI applications, document processing, recommendation systems',
      compliance: ['SOC 1/2/3', 'ISO 27001', 'FedRAMP', 'HIPAA']
    },
    {
      id: 'ibm-watson',
      name: 'IBM Watson',
      category: 'analytics',
      logo: '/api/placeholder/48/48',
      rating: 4.3,
      pricing: '$$$',
      priceRange: 'enterprise',
      deployment: 'hybrid',
      companySize: 'large',
      description: 'Enterprise-focused AI platform with strong emphasis on industry solutions and hybrid deployment.',
      keyFeatures: [
        'Watson Assistant',
        'Watson Discovery',
        'Watson Machine Learning',
        'Industry-specific solutions',
        'Hybrid cloud deployment',
        'Explainable AI'
      ],
      pros: [
        'Strong industry expertise',
        'Hybrid deployment options',
        'Mature enterprise features',
        'Good consulting support',
        'Regulatory compliance focus'
      ],
      cons: [
        'Complex pricing model',
        'Slower innovation pace',
        'Interface can feel outdated',
        'Higher implementation costs'
      ],
      integrations: ['IBM Cloud Pak', 'Red Hat OpenShift', 'Legacy IBM systems'],
      support: 'Enterprise Support',
      implementation: '8-16 weeks',
      roi: 'Medium',
      riskLevel: 'Low',
      marketShare: '8%',
      customerBase: 'Traditional enterprises, Government, Financial services',
      useCase: 'Regulatory compliance, knowledge management, legacy system modernization',
      compliance: ['SOC 1/2', 'ISO 27001', 'FedRAMP', 'FISMA']
    }
  ]

  const filteredVendors = vendors.filter(vendor => {
    const matchesCategory = selectedCategory === 'all' || vendor.category === selectedCategory
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPriceRange = selectedFilters.priceRange === 'all' || vendor.priceRange === selectedFilters.priceRange
    const matchesDeployment = selectedFilters.deploymentType === 'all' || vendor.deployment === selectedFilters.deploymentType
    const matchesCompanySize = selectedFilters.companySize === 'all' || vendor.companySize === selectedFilters.companySize
    
    return matchesCategory && matchesSearch && matchesPriceRange && matchesDeployment && matchesCompanySize
  })

  const toggleVendorSelection = (vendorId: string) => {
    setSelectedVendors(prev => 
      prev.includes(vendorId) 
        ? prev.filter(id => id !== vendorId)
        : prev.length < 3 ? [...prev, vendorId] : prev
    )
  }

  const getSelectedVendorData = () => {
    return vendors.filter(vendor => selectedVendors.includes(vendor.id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      
      {/* GEO优化：介绍页面 */}
      {showIntro && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                企业AI供应商选择指南 2026
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                基于8维度评估矩阵的全面AI供应商对比分析。帮助企业决策者从50+供应商中选择最适合的AI解决方案，
                包含ROI分析、实施时间、风险评估和合规要求。
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-8">
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  50+ 供应商分析
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1" />
                  8维度评估框架
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  合规性验证
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  ROI基准测试
                </div>
              </div>
            </div>

            {/* GEO优化：AI供应商选择框架 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">8维度AI供应商评估框架</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    dimension: "技术能力",
                    weight: "25%",
                    criteria: ["模型准确性", "API稳定性", "扩展性", "创新速度"],
                    scoreRange: "0-100分"
                  },
                  {
                    dimension: "成本效益",
                    weight: "20%", 
                    criteria: ["初始投入", "运营成本", "ROI周期", "隐性成本"],
                    scoreRange: "$/用户/月"
                  },
                  {
                    dimension: "实施复杂度",
                    weight: "15%",
                    criteria: ["部署时间", "技术要求", "培训需求", "集成难度"],
                    scoreRange: "1-10级"
                  },
                  {
                    dimension: "供应商稳定性",
                    weight: "15%",
                    criteria: ["市场地位", "财务状况", "客户满意度", "技术路线"],
                    scoreRange: "A-D等级"
                  },
                  {
                    dimension: "安全合规",
                    weight: "10%",
                    criteria: ["数据保护", "访问控制", "审计能力", "认证标准"],
                    scoreRange: "合规项数量"
                  },
                  {
                    dimension: "支持服务",
                    weight: "8%",
                    criteria: ["响应时间", "专业水平", "文档质量", "社区活跃度"],
                    scoreRange: "1-5星"
                  },
                  {
                    dimension: "生态集成",
                    weight: "4%",
                    criteria: ["API开放性", "第三方集成", "开发工具", "合作伙伴"],
                    scoreRange: "集成数量"
                  },
                  {
                    dimension: "未来发展",
                    weight: "3%",
                    criteria: ["技术路线图", "研发投入", "市场策略", "行业趋势"],
                    scoreRange: "前瞻性评分"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-lg text-blue-900">{item.dimension}</h4>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">{item.weight}</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1 mb-3">
                      {item.criteria.map((criterion, i) => (
                        <li key={i}>• {criterion}</li>
                      ))}
                    </ul>
                    <div className="text-xs text-gray-500 font-medium">{item.scoreRange}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* GEO优化：AI供应商常见问题 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI供应商选择常见问题</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    q: "如何评估AI供应商的技术实力？",
                    a: "关键指标：1) 模型性能基准测试结果 2) API响应时间和稳定性 3) 客户案例和参考架构 4) 技术文档质量 5) 开源贡献和研究论文发表数量 6) 行业认证和标准合规情况。建议要求POC演示和试用期验证。"
                  },
                  {
                    q: "企业AI供应商的典型成本结构是什么？",
                    a: "成本构成：1) 许可费用($10K-$500K年度) 2) 实施服务($50K-$200K) 3) 培训成本($10K-$50K) 4) 运营费用($5K-$100K/月) 5) 集成开发($20K-$100K) 6) 维护支持(年费的15-25%)。总体TCO通常为初始投资的3-5倍。"
                  },
                  {
                    q: "AI供应商的实施周期通常是多长？",
                    a: "实施时间线：1) 简单集成：2-4周 2) 中等复杂度：1-3个月 3) 企业级部署：3-9个月 4) 复杂定制：6-18个月。影响因素包括数据准备时间、系统集成复杂度、定制开发需求、用户培训规模、合规审核要求。"
                  },
                  {
                    q: "如何降低AI供应商锁定风险？",
                    a: "风险缓解策略：1) 选择支持开放标准的供应商 2) 要求数据导出功能和API 3) 避免过度定制化 4) 建立多供应商策略 5) 保留核心IP和数据控制权 6) 制定供应商迁移预案 7) 定期评估替代方案。"
                  },
                  {
                    q: "AI供应商的安全合规要求有哪些？",
                    a: "核心要求：1) SOC 2 Type II认证 2) ISO 27001信息安全 3) GDPR/CCPA数据保护 4) 行业特定认证(HIPAA/PCI等) 5) 数据加密和访问控制 6) 审计日志和监控 7) 事件响应流程 8) 数据本地化选项。"
                  },
                  {
                    q: "如何比较不同AI供应商的ROI？",
                    a: "ROI计算方法：1) 量化收益(效率提升、成本节省、收入增长) 2) 计算总投资(TCO) 3) 设定评估周期(通常3年) 4) 考虑风险因素 5) 进行敏感性分析 6) 对比基准情况。典型ROI范围：150%-400%，回收周期12-24个月。"
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GEO优化：2026年AI供应商市场趋势 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">2026年AI供应商市场趋势</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">市场整合加速</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 大型科技公司收购AI初创企业增加40%</li>
                      <li>• 独立AI供应商从200+家减少至80家</li>
                      <li>• 行业专用AI解决方案成为主流</li>
                      <li>• 中小型供应商面临生存压力</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">技术标准化</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 开放AI框架(OpenAI, Anthropic)普及</li>
                      <li>• 模型互操作性标准制定</li>
                      <li>• 企业级AI治理框架统一</li>
                      <li>• 多模态AI成为标准配置</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">成本优化</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• AI推理成本下降60-80%</li>
                      <li>• 边缘计算减少云端依赖</li>
                      <li>• 按需付费模式普及</li>
                      <li>• ROI周期缩短至6-12个月</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-3">⚠️ 2026年供应商选择关键决策因素</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                    <div>• 多模态AI能力(文本+图像+语音)</div>
                    <div>• 边缘计算部署支持</div>
                    <div>• 自动化模型优化</div>
                    <div>• 实时监控和可观测性</div>
                    <div>• 低代码/无代码开发平台</div>
                    <div>• 行业特定预训练模型</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 开始比较按钮 */}
            <div className="text-center">
              <button 
                onClick={() => setShowIntro(false)}
                className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                开始供应商比较分析
              </button>
              <p className="text-gray-500 text-sm mt-3">基于8维度评估框架，3分钟获得专业建议</p>
            </div>
          </div>
        </div>
      )}

      {/* 原有的比较工具界面 */}
      {!showIntro && (
        <>
          {/* Header */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Enterprise AI Vendor Comparison Guide 2026
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                  Comprehensive analysis of leading AI platforms, tools, and solutions for enterprise decision-makers. 
                  Make informed choices with detailed vendor comparisons, ROI analysis, and implementation insights.
                </p>
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    50+ Vendors Analyzed
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-1" />
                    ROI Benchmarked
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    Security Audited
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Filter Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Vendors</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by vendor name or technology..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select
                    value={selectedFilters.priceRange}
                    onChange={(e) => setSelectedFilters(prev => ({...prev, priceRange: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Ranges</option>
                    <option value="startup">Startup ($)</option>
                    <option value="mid-enterprise">Mid-Enterprise ($$)</option>
                    <option value="enterprise">Enterprise ($$$)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deployment</label>
                  <select
                    value={selectedFilters.deploymentType}
                    onChange={(e) => setSelectedFilters(prev => ({...prev, deploymentType: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Types</option>
                    <option value="cloud">Cloud Only</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="on-premise">On-Premise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                  <select
                    value={selectedFilters.companySize}
                    onChange={(e) => setSelectedFilters(prev => ({...prev, companySize: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Sizes</option>
                    <option value="small">Small (&lt; 200)</option>
                    <option value="medium">Medium (200-1000)</option>
                    <option value="large">Large (1000+)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {category.name}
                  </button>
                )
              })}
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredVendors.length} Vendors Found
                </h2>
                <p className="text-gray-600">
                  {selectedCategory !== 'all' && `Showing ${categories.find(c => c.id === selectedCategory)?.name} vendors`}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowComparison(!showComparison)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    showComparison
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Compare Selected ({selectedVendors.length})
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Vendor List */}
              <div className="lg:col-span-2 space-y-6">
                {filteredVendors.map((vendor) => (
                  <div key={vendor.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-lg font-bold text-gray-600">
                              {vendor.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{vendor.name}</h3>
                            <div className="flex items-center mt-1">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(vendor.rating) 
                                        ? 'text-yellow-400 fill-current' 
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">{vendor.rating}</span>
                              </div>
                              <span className="mx-2 text-gray-300">•</span>
                              <span className="text-sm text-gray-600">{vendor.pricing}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => toggleVendorSelection(vendor.id)}
                            className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                              selectedVendors.includes(vendor.id)
                                ? 'bg-blue-600 text-white'
                                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                            disabled={!selectedVendors.includes(vendor.id) && selectedVendors.length >= 3}
                          >
                            {selectedVendors.includes(vendor.id) ? 'Selected' : 'Compare'}
                          </button>
                          <button
                            onClick={() => setExpandedVendor(expandedVendor === vendor.id ? null : vendor.id)}
                            className="p-1 text-gray-400 hover:text-gray-600"
                          >
                            {expandedVendor === vendor.id ? (
                              <ChevronDown className="h-5 w-5" />
                            ) : (
                              <ChevronRight className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{vendor.description}</p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">{vendor.marketShare}</div>
                          <div className="text-xs text-gray-600">Market Share</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-green-600">{vendor.roi}</div>
                          <div className="text-xs text-gray-600">ROI Potential</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-purple-600">{vendor.implementation}</div>
                          <div className="text-xs text-gray-600">Setup Time</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className={`text-lg font-bold ${
                            vendor.riskLevel === 'Low' ? 'text-green-600' : 
                            vendor.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {vendor.riskLevel}
                          </div>
                          <div className="text-xs text-gray-600">Risk Level</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {vendor.keyFeatures.slice(0, 3).map((feature, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                        {vendor.keyFeatures.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{vendor.keyFeatures.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Expanded Details */}
                      {expandedVendor === vendor.id && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {vendor.keyFeatures.map((feature, index) => (
                                  <li key={index} className="flex items-center">
                                    <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Pros & Cons</h4>
                              <div className="space-y-2">
                                {vendor.pros.slice(0, 3).map((pro, index) => (
                                  <div key={index} className="flex items-start text-sm">
                                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5" />
                                    <span className="text-gray-600">{pro}</span>
                                  </div>
                                ))}
                                {vendor.cons.slice(0, 2).map((con, index) => (
                                  <div key={index} className="flex items-start text-sm">
                                    <X className="h-3 w-3 text-red-500 mr-2 mt-0.5" />
                                    <span className="text-gray-600">{con}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-gray-700">Best For:</span>
                                <p className="text-gray-600 mt-1">{vendor.customerBase}</p>
                              </div>
                              <div>
                                <span className="font-medium text-gray-700">Use Case:</span>
                                <p className="text-gray-600 mt-1">{vendor.useCase}</p>
                              </div>
                              <div>
                                <span className="font-medium text-gray-700">Support:</span>
                                <p className="text-gray-600 mt-1">{vendor.support}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Quick Analysis */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Analysis</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>OpenAI/GPT</span>
                          <span>35%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '35%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Microsoft Azure</span>
                          <span>28%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '28%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Google Cloud</span>
                          <span>18%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '18%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Others</span>
                          <span>19%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-600 h-2 rounded-full" style={{width: '19%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Free Resources */}
                  <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Free Resources</h3>
                    <div className="space-y-3">
                      <Link href="/ai-roi-calculator" className="block text-sm text-blue-700 hover:text-blue-800">
                        → AI ROI Calculator
                      </Link>
                      <Link href="/enterprise-ai-implementation-best-practices-2026" className="block text-sm text-blue-700 hover:text-blue-800">
                        → Implementation Guide
                      </Link>
                      <Link href="/ai-tools-security-compliance-checklist-2026" className="block text-sm text-blue-700 hover:text-blue-800">
                        → Security Checklist
                      </Link>
                      <Link href="/ai-tools-cost-benefit-analysis-2026" className="block text-sm text-blue-700 hover:text-blue-800">
                        → Cost-Benefit Analysis
                      </Link>
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-gray-900 rounded-lg p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">Need Expert Guidance?</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Get personalized AI vendor recommendations based on your specific requirements.
                    </p>
                    <button className="w-full bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Calendar className="h-4 w-4 inline mr-2" />
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Modal */}
            {showComparison && selectedVendors.length > 0 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">Vendor Comparison</h2>
                      <button
                        onClick={() => setShowComparison(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-4 px-2 font-medium text-gray-700">Feature</th>
                            {getSelectedVendorData().map((vendor) => (
                              <th key={vendor.id} className="text-left py-4 px-4 font-medium text-gray-700">
                                {vendor.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr className="border-b">
                            <td className="py-3 px-2 font-medium">Rating</td>
                            {getSelectedVendorData().map((vendor) => (
                              <td key={vendor.id} className="py-3 px-4">{vendor.rating}/5</td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-2 font-medium">Price Range</td>
                            {getSelectedVendorData().map((vendor) => (
                              <td key={vendor.id} className="py-3 px-4">{vendor.pricing}</td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-2 font-medium">Implementation Time</td>
                            {getSelectedVendorData().map((vendor) => (
                              <td key={vendor.id} className="py-3 px-4">{vendor.implementation}</td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-2 font-medium">ROI Potential</td>
                            {getSelectedVendorData().map((vendor) => (
                              <td key={vendor.id} className="py-3 px-4">{vendor.roi}</td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-2 font-medium">Market Share</td>
                            {getSelectedVendorData().map((vendor) => (
                              <td key={vendor.id} className="py-3 px-4">{vendor.marketShare}</td>
                            ))}
                          </tr>
                          <tr>
                            <td className="py-3 px-2 font-medium">Risk Level</td>
                            {getSelectedVendorData().map((vendor) => (
                              <td key={vendor.id} className={`py-3 px-4 font-medium ${
                                vendor.riskLevel === 'Low' ? 'text-green-600' : 
                                vendor.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                              }`}>
                                {vendor.riskLevel}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}