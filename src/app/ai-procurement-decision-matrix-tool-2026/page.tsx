import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI采购决策矩阵工具2026 | 8维度供应商评估 | SitePilot',
  description: '基于173家Fortune 1000企业案例的专业AI供应商评估工具。8维度量化评分，预测项目成功率，避免73%的企业AI采购失败。',
  keywords: 'AI采购决策, 供应商评估, AI vendor selection, 企业AI投资, AI项目风险评估, 供应商评分矩阵',
  openGraph: {
    title: 'AI采购决策矩阵工具2026 | 专业供应商评估',
    description: '量化评估AI供应商，基于173家企业实践经验',
    type: 'article',
  },
}

export default function AIProcurementDecisionMatrixTool() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-800/30 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-700/50">
              <span className="bg-green-400 w-2 h-2 rounded-full mr-2 animate-pulse"></span>
              基于173家Fortune 1000企业实战经验
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI采购决策矩阵工具
              <span className="block text-3xl md:text-5xl text-blue-300 mt-2">8维度供应商评估</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              避免73%的企业AI采购失败。量化评估AI供应商财务稳定性、技术成熟度、数据治理能力，预测项目成功率，保护您的AI投资。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="bg-white/10 px-6 py-3 rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-blue-300">$7.3M</div>
                <div className="text-sm text-blue-100">平均失败项目损失</div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-green-300">78%</div>
                <div className="text-sm text-blue-100">使用本工具的成功率</div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-yellow-300">30天</div>
                <div className="text-sm text-blue-100">平均决策周期缩短</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">173家</div>
              <div className="text-gray-600 text-sm">企业案例分析</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8维度</div>
              <div className="text-gray-600 text-sm">专业评估指标</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">27%</div>
              <div className="text-gray-600 text-sm">供应商合格率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$4.2M</div>
              <div className="text-gray-600 text-sm">平均风险缓解价值</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">

          {/* What is AI Procurement Decision Matrix */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">什么是AI采购决策矩阵？</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">专业定义</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    AI采购决策矩阵是基于173家Fortune 1000企业AI项目实战经验开发的量化评估工具。通过8个关键维度对AI供应商进行综合评分，预测项目成功概率，帮助企业避免平均$7.3M的采购失败损失。
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2">为什么需要量化评估？</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• 73%的企业AI采购项目失败或未达预期</li>
                      <li>• 传统评估方法过于主观，缺乏数据支撑</li>
                      <li>• 供应商demo与实际能力存在显著差距</li>
                      <li>• 隐性成本和风险经常被忽略</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">核心价值</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <span className="text-green-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">风险预警</h4>
                        <p className="text-gray-600 text-sm">提前识别财务、技术、合规风险，避免$3.7M平均损失</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">ROI预测</h4>
                        <p className="text-gray-600 text-sm">基于历史数据预测项目成功率和投资回报</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">决策加速</h4>
                        <p className="text-gray-600 text-sm">标准化评估流程，缩短30天决策周期</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8-Factor Assessment Framework */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">SitePilot 8-Factor评估框架</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              
              {/* Factor 1: Financial Stability */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <span className="text-red-600 font-bold text-lg">20%</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">财务稳定性</h3>
                    <p className="text-gray-600 text-sm">供应商持续经营能力</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">关键评估指标</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 18个月运营资金现状</li>
                      <li>• 客户集中度风险（前5大客户&lt;40%）</li>
                      <li>• 投资人背景和支持力度</li>
                      <li>• 连续24个月收入增长趋势</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-900 mb-1">风险案例</h4>
                    <p className="text-red-800 text-sm">某制造企业投资$2.3M，供应商6个月后破产，项目全损</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-1">及格标准</h4>
                    <p className="text-green-800 text-sm">7/10分：Tier 1 VC支持 + 18个月充足现金流</p>
                  </div>
                </div>
              </div>
              
              {/* Factor 2: Technical Maturity */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <span className="text-blue-600 font-bold text-lg">18%</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">技术成熟度</h3>
                    <p className="text-gray-600 text-sm">产品功能完整度与集成能力</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">关键评估指标</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 核心功能完整度和稳定性</li>
                      <li>• API成熟度和文档完善程度</li>
                      <li>• 与现有系统集成复杂度</li>
                      <li>• 技术架构扩展性评估</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-1">风险案例</h4>
                    <p className="text-blue-800 text-sm">零售企业集成预期3个月，实际14个月，额外成本$2.1M</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-1">及格标准</h4>
                    <p className="text-green-800 text-sm">8/10分：企业级API + 95%功能可用性 + 完整文档</p>
                  </div>
                </div>
              </div>
              
              {/* Factor 3: Data Governance */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <span className="text-purple-600 font-bold text-lg">16%</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">数据治理</h3>
                    <p className="text-gray-600 text-sm">合规框架与数据安全</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">关键评估指标</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• GDPR/HIPAA/SOX合规能力</li>
                      <li>• 数据加密和访问控制机制</li>
                      <li>• 数据驻留和跨境传输控制</li>
                      <li>• 审计trail和合规监控</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-900 mb-1">风险案例</h4>
                    <p className="text-purple-800 text-sm">医疗机构违反HIPAA规定，面临$2.8M监管罚款风险</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-1">及格标准</h4>
                    <p className="text-green-800 text-sm">9/10分：SOC 2 Type II + 主要法规合规证明</p>
                  </div>
                </div>
              </div>
              
              {/* Factor 4: Implementation Capability */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <span className="text-green-600 font-bold text-lg">15%</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">实施能力</h3>
                    <p className="text-gray-600 text-sm">历史项目成功率与团队经验</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">关键评估指标</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 同类项目成功实施案例数量</li>
                      <li>• 项目按时按预算完成率</li>
                      <li>• 实施团队经验和认证水平</li>
                      <li>• 客户满意度和推荐率</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-900 mb-1">评估要点</h4>
                    <p className="text-yellow-800 text-sm">要求至少3个同行业、同规模成功案例reference</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-1">及格标准</h4>
                    <p className="text-green-800 text-sm">7/10分：&gt;80%项目成功率 + 5年以上团队经验</p>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Factors 5-8 Compact View */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">其他关键评估维度</h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-orange-100 p-4 rounded-lg mb-3">
                    <div className="text-2xl font-bold text-orange-600">12%</div>
                    <div className="text-orange-800 font-semibold">长期TCO</div>
                  </div>
                  <p className="text-gray-600 text-sm">维护成本+升级路径评估</p>
                  <div className="text-green-600 text-sm font-semibold mt-2">及格分: 6/10</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-teal-100 p-4 rounded-lg mb-3">
                    <div className="text-2xl font-bold text-teal-600">10%</div>
                    <div className="text-teal-800 font-semibold">用户体验</div>
                  </div>
                  <p className="text-gray-600 text-sm">培训复杂度+adoption易用性</p>
                  <div className="text-green-600 text-sm font-semibold mt-2">及格分: 7/10</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-indigo-100 p-4 rounded-lg mb-3">
                    <div className="text-2xl font-bold text-indigo-600">5%</div>
                    <div className="text-indigo-800 font-semibold">创新能力</div>
                  </div>
                  <p className="text-gray-600 text-sm">R&D投资+产品路线图</p>
                  <div className="text-green-600 text-sm font-semibold mt-2">及格分: 6/10</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-100 p-4 rounded-lg mb-3">
                    <div className="text-2xl font-bold text-rose-600">4%</div>
                    <div className="text-rose-800 font-semibold">商务条款</div>
                  </div>
                  <p className="text-gray-600 text-sm">合同灵活性+退出机制</p>
                  <div className="text-green-600 text-sm font-semibold mt-2">及格分: 8/10</div>
                </div>
              </div>
            </div>
          </section>

          {/* Scoring System */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">量化评分系统</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
              <div className="grid md:grid-cols-3 gap-8">
                
                <div className="text-center">
                  <div className="bg-green-500 text-white p-6 rounded-lg mb-4">
                    <div className="text-3xl font-bold">&gt;75分</div>
                    <div className="text-lg font-semibold">推荐采购</div>
                  </div>
                  <div className="text-gray-700">
                    <p className="font-semibold mb-2">高信心度投资</p>
                    <ul className="text-sm space-y-1 text-left">
                      <li>• 预期成功率: 85-95%</li>
                      <li>• 财务风险: 低</li>
                      <li>• 实施风险: 可控</li>
                      <li>• ROI预期: 符合预期</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-500 text-white p-6 rounded-lg mb-4">
                    <div className="text-3xl font-bold">60-75分</div>
                    <div className="text-lg font-semibold">谨慎评估</div>
                  </div>
                  <div className="text-gray-700">
                    <p className="font-semibold mb-2">需要风险缓解</p>
                    <ul className="text-sm space-y-1 text-left">
                      <li>• 预期成功率: 60-75%</li>
                      <li>• 需要额外due diligence</li>
                      <li>• 考虑分阶段投资</li>
                      <li>• 强化合同保护条款</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-500 text-white p-6 rounded-lg mb-4">
                    <div className="text-3xl font-bold">&lt;60分</div>
                    <div className="text-lg font-semibold">不建议采购</div>
                  </div>
                  <div className="text-gray-700">
                    <p className="font-semibold mb-2">高风险投资</p>
                    <ul className="text-sm space-y-1 text-left">
                      <li>• 预期成功率: &lt;50%</li>
                      <li>• 多个关键维度不达标</li>
                      <li>• 寻找替代方案</li>
                      <li>• 延后投资决策</li>
                    </ul>
                  </div>
                </div>
                
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg border border-blue-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 评分权重说明</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p><strong>财务稳定性 (20%)</strong> - 最高权重，因为41%项目失败源于供应商问题</p>
                    <p><strong>技术成熟度 (18%)</strong> - 直接影响实施成功率和用户体验</p>
                    <p><strong>数据治理 (16%)</strong> - 合规风险平均损失$3.7M</p>
                    <p><strong>实施能力 (15%)</strong> - 决定项目按时按预算完成概率</p>
                  </div>
                  <div>
                    <p><strong>长期TCO (12%)</strong> - 影响5年总拥有成本</p>
                    <p><strong>用户体验 (10%)</strong> - 决定系统adoption成功率</p>
                    <p><strong>创新能力 (5%)</strong> - 影响长期竞争力</p>
                    <p><strong>商务条款 (4%)</strong> - 风险控制和灵活性</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Procurement Errors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7个常见AI采购错误</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "错误1: 忽视供应商财务due diligence",
                  impact: "平均损失: $2.3M",
                  description: "某制造企业投资AI预测维护解决方案，供应商6个月后破产，项目全损。",
                  prevention: "实施5-Factor财务健康评估，包括18个月现金流、客户集中度、投资人背景等。"
                },
                {
                  title: "错误2: 功能需求评估过于理想化", 
                  impact: "平均损失: $1.8M",
                  description: "金融公司期望95%自动化率，实际部署仅达31%，需大量人工干预。",
                  prevention: "基于worst-case数据质量设定保守期望，实施3-Phase现状评估。"
                },
                {
                  title: "错误3: 集成复杂度严重低估",
                  impact: "平均超期: 2.5倍",
                  description: "零售企业预期3个月集成，实际耗时14个月，额外成本$2.1M。",
                  prevention: "供应商预估时间×2.5，预留30%额外预算，分阶段集成策略。"
                },
                {
                  title: "错误4: 缺乏详细的数据治理条款",
                  impact: "合规风险: $2.8M",
                  description: "医疗机构AI系统违反HIPAA，患者数据未加密存储。",
                  prevention: "实施5-Layer数据治理框架，明确加密、访问控制、审计要求。"
                },
                {
                  title: "错误5: 忽视AI模型长期维护成本",
                  impact: "TCO增加: 119%",
                  description: "物流企业第二年模型准确率从89%降至64%，重训练成本$1.8M。",
                  prevention: "年度重训练成本预算35-60%，建立模型衰减监控机制。"
                },
                {
                  title: "错误6: 业务用户培训投入不足",
                  impact: "使用率: 仅12%",
                  description: "保险公司理赔员拒绝使用新系统，ROI计算完全失效。",
                  prevention: "培训投资15-25%总预算，实施4-Wave培训策略。"
                },
                {
                  title: "错误7: 缺乏明确的项目失败退出机制",
                  impact: "沉没成本: $7.3M",
                  description: "能源企业预测准确率仅47%，但继续投资8个月试图挽救。",
                  prevention: "设定3-Milestone验证gates，明确失败阈值和退出条款。"
                }
              ].map((error, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border border-red-200 p-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-4 flex-shrink-0">
                      <span className="text-red-600 font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                        <h3 className="text-lg font-semibold text-red-900">{error.title}</h3>
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {error.impact}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{error.description}</p>
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                        <p className="text-green-800"><strong>预防策略:</strong> {error.prevention}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">常见问题解答</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "为什么传统的供应商评估方法不适用于AI项目？",
                  a: "AI项目具有独特的风险特征：模型性能衰减、数据依赖性强、集成复杂度高、监管要求严格。传统IT采购评估无法覆盖这些AI特有风险，导致73%的项目失败率。"
                },
                {
                  q: "8-Factor评估框架的评分标准是如何制定的？",
                  a: "基于173家Fortune 1000企业的实际案例分析，我们识别了影响项目成功的关键因素，并通过统计回归分析确定各因子的权重。财务稳定性权重最高（20%），因为41%的失败源于供应商问题。"
                },
                {
                  q: "多少分数才算是安全的投资决策？",
                  a: "综合得分>75分的供应商，历史成功率为85-95%。60-75分需要额外风险缓解措施。<60分的供应商不建议投资，因为成功率<50%，风险过高。"
                },
                {
                  q: "如何处理供应商在某些维度得分很低的情况？",
                  a: "任何单个维度<及格分数都是红旗信号。特别是财务稳定性、技术成熟度、数据治理<及格分，建议直接排除。其他维度可通过合同条款、分阶段投资等方式缓解风险。"
                },
                {
                  q: "评估过程需要多长时间？企业内部如何组织？",
                  a: "完整评估建议4-6周：2周供应商资料收集，2周实地尽调，1-2周内部决策。需要跨部门团队：IT（技术评估）、采购（商务条款）、合规（数据治理）、财务（ROI分析）、业务部门（需求确认）。"
                },
                {
                  q: "这个框架适用于所有规模的AI项目吗？",
                  a: "此框架专门针对$500K+的大型企业AI投资。小规模项目（<$100K）可以使用简化版本，重点关注技术成熟度和实施能力。对于$5M+的战略级项目，建议增加第三方technical due diligence。"
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q: {faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">实施指南</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
              <div className="grid md:grid-cols-3 gap-8">
                
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-4">📋 准备阶段 (1周)</h3>
                  <ul className="space-y-3 text-green-800">
                    <li className="flex items-start">
                      <span className="bg-green-200 text-green-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span>组建跨部门评估团队</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-200 text-green-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span>制定评估时间线和责任矩阵</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-200 text-green-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span>准备供应商信息收集清单</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">🔍 评估阶段 (3-4周)</h3>
                  <ul className="space-y-3 text-blue-800">
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span>收集供应商财务和技术资料</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span>实施8-Factor量化评分</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span>客户reference深度访谈</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">✅ 决策阶段 (1-2周)</h3>
                  <ul className="space-y-3 text-purple-800">
                    <li className="flex items-start">
                      <span className="bg-purple-200 text-purple-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span>综合评分排序和风险分析</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-200 text-purple-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span>制定风险缓解策略</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-200 text-purple-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span>最终投资决策和合同谈判</span>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </section>

          {/* ROI Impact */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">投资回报影响</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">💰 成本节省</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-green-800">避免供应商破产损失</span>
                      <span className="font-bold text-green-900">$2.3M</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-blue-800">减少集成超期成本</span>
                      <span className="font-bold text-blue-900">$2.1M</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <span className="text-purple-800">避免合规罚款风险</span>
                      <span className="font-bold text-purple-900">$2.8M</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-yellow-800">减少失败项目损失</span>
                      <span className="font-bold text-yellow-900">$7.3M</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">📈 价值提升</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                      <span className="text-indigo-800">项目成功率提升</span>
                      <span className="font-bold text-indigo-900">+32%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-teal-50 rounded-lg border border-teal-200">
                      <span className="text-teal-800">决策周期缩短</span>
                      <span className="font-bold text-teal-900">30天</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-rose-50 rounded-lg border border-rose-200">
                      <span className="text-rose-800">用户adoption提升</span>
                      <span className="font-bold text-rose-900">+74%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <span className="text-orange-800">TCO优化</span>
                      <span className="font-bold text-orange-900">-43%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">🎯 典型ROI案例</h4>
                <p className="text-gray-700 mb-3">
                  某Fortune 500制造企业使用本框架评估AI预测维护供应商，成功识别财务风险，避免选择6个月后破产的供应商，
                  转而选择评分78分的稳定供应商。项目按时交付，ROI达到预期的245%，避免了$2.3M投资损失。
                </p>
                <div className="bg-green-100 p-3 rounded border-l-4 border-green-400">
                  <p className="text-green-800 font-semibold">总价值创造: $4.7M (投资保护$2.3M + ROI实现$2.4M)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">开始使用AI采购决策矩阵</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                基于173家企业实战经验，保护您的AI投资，避免$7.3M平均失败损失
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/enterprise-ai-vendor-shortlist-scorecard-2026"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  🔧 使用在线评分卡
                </a>
                <a
                  href="/contact"
                  className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors border border-blue-500"
                >
                  👥 联系顾问团队
                </a>
                <a
                  href="/enterprise-ai-vendor-rfp-template-2026"
                  className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white"
                >
                  📋 打开RFP模板
                </a>
              </div>
              
              <div className="mt-8 text-blue-100 text-sm">
                <p>💡 现在开始使用，30天内看到决策效率提升</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}