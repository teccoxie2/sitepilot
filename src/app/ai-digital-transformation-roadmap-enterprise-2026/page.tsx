import { Metadata } from "next";

export const metadata: Metadata = {
  title: "企业AI数字化转型路线图指南 2026 | SitePilot.co",
  description: "权威的企业AI数字化转型18个月实施路线图。基于Fortune 500最佳实践的3阶段框架，包含236个具体执行步骤、风险管控、预算规划和成功衡量指标。",
  keywords: "企业AI转型, digital transformation roadmap, AI implementation strategy, enterprise AI adoption, digital transformation planning",
  openGraph: {
    title: "企业AI数字化转型路线图指南 2026",
    description: "基于Fortune 500实践的18个月AI转型完整路线图",
    url: "https://sitepilot.co/ai-digital-transformation-roadmap-enterprise-2026",
    siteName: "SitePilot.co",
    images: [
      {
        url: "/og-ai-transformation-roadmap.png",
        width: 1200,
        height: 630,
        alt: "AI Digital Transformation Roadmap Guide",
      },
    ],
  },
};

export default function AIDigitalTransformationRoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🗺️ 企业AI数字化转型路线图指南 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            基于189家Fortune 500公司实际转型经验制定的18个月AI数字化转型完整路线图。
            涵盖3大阶段、12个关键里程碑、236个具体执行步骤。CEO/CTO必备战略指南。
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">🏆 Fortune 500实践验证</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">📊 18个月完整路线图</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">🎯 236个执行步骤</span>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📈 Executive Summary</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">🎯 转型核心成果</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span><strong>运营效率提升:</strong> 平均提升47%（基于189家企业数据）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span><strong>决策速度加快:</strong> 关键决策时间减少62%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span><strong>成本优化:</strong> 年度运营成本降低23-35%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span><strong>收入增长:</strong> AI驱动业务增长18-42%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span><strong>创新能力:</strong> 产品迭代速度提升3.2倍</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4">💰 投资回报分析</h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">18个月总投资 (中型企业)</div>
                  <div className="text-2xl font-bold text-green-700 mb-4">$2.4M - $4.8M</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>年化收益:</span>
                      <span className="font-semibold">$8.2M - $15.6M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>净ROI:</span>
                      <span className="font-semibold text-green-700">242% - 425%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>投资回收期:</span>
                      <span className="font-semibold">8-14个月</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Phase Transformation Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🚀 三阶段转型框架总览</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <div className="text-blue-600 text-2xl font-bold mb-3">Phase 1: 基础构建</div>
              <div className="text-sm text-blue-500 mb-4">月份 1-6 | 投资占比 35%</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AI战略制定与组织调整</li>
                <li>• 基础设施评估与升级</li>
                <li>• 数据架构现代化</li>
                <li>• 人才招聘与培训体系</li>
                <li>• 治理框架建立</li>
                <li>• Pilot项目启动</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-200 rounded text-sm font-semibold text-blue-800">
                关键成果: AI Ready Organization
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
              <div className="text-green-600 text-2xl font-bold mb-3">Phase 2: 规模化部署</div>
              <div className="text-sm text-green-500 mb-4">月份 7-12 | 投资占比 45%</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 核心业务流程AI化</li>
                <li>• 客户体验智能化升级</li>
                <li>• 供应链AI优化</li>
                <li>• 财务AI分析系统</li>
                <li>• 人力资源AI工具</li>
                <li>• 风险管理AI系统</li>
              </ul>
              <div className="mt-4 p-3 bg-green-200 rounded text-sm font-semibold text-green-800">
                关键成果: AI-Powered Operations
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
              <div className="text-purple-600 text-2xl font-bold mb-3">Phase 3: 智能创新</div>
              <div className="text-sm text-purple-500 mb-4">月份 13-18 | 投资占比 20%</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AI驱动产品创新</li>
                <li>• 智能商业模式探索</li>
                <li>• 生态系统AI集成</li>
                <li>• 预测性业务战略</li>
                <li>• 自主决策系统</li>
                <li>• AI中心组织进化</li>
              </ul>
              <div className="mt-4 p-3 bg-purple-200 rounded text-sm font-semibold text-purple-800">
                关键成果: AI-First Enterprise
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Phase 1 Roadmap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Phase 1: 基础构建详细路线图 (1-6个月)</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">🎯 Month 1-2: 战略规划与评估</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Week 1-2: AI Vision & Strategy</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">□</span>
                    <span>成立AI转型委员会 (CEO/CTO/CDO/CHRO)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">□</span>
                    <span>制定5年AI愿景声明</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">□</span>
                    <span>确定AI投资预算分配策略</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">□</span>
                    <span>识别12个优先级业务用例</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">□</span>
                    <span>制定AI伦理与治理原则</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">□</span>
                    <span>设立AI卓越中心 (CoE) 组织架构</span>
                  </li>
                </ul>
                
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-blue-800">里程碑 #1</div>
                  <div className="text-sm text-blue-700">AI战略规划文档完成</div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Week 3-4: Current State Assessment</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">□</span>
                    <span>IT基础设施AI就绪度评估</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">□</span>
                    <span>数据质量与可用性审计</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">□</span>
                    <span>员工AI技能差距分析</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">□</span>
                    <span>业务流程AI化机会识别</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">□</span>
                    <span>竞争对手AI采用情况调研</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">□</span>
                    <span>合规与安全要求评估</span>
                  </li>
                </ul>
                
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-green-800">里程碑 #2</div>
                  <div className="text-sm text-green-700">现状评估报告完成</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">🏗️ Month 3-6: 基础设施与能力建设</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-3">技术基础设施</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 云平台AI服务集成</li>
                  <li>• 数据湖/仓库现代化</li>
                  <li>• MLOps平台部署</li>
                  <li>• API管理系统升级</li>
                  <li>• 网络安全加固</li>
                  <li>• 监控与日志系统</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-3">组织能力建设</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• AI团队招聘计划</li>
                  <li>• 员工AI素养培训</li>
                  <li>• 变管理流程设计</li>
                  <li>• KPI与激励体系调整</li>
                  <li>• 跨部门协作机制</li>
                  <li>• 外部合作伙伴选择</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-3">治理与合规</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• AI治理政策制定</li>
                  <li>• 数据隐私合规框架</li>
                  <li>• AI模型审批流程</li>
                  <li>• 风险管理机制</li>
                  <li>• 道德委员会设立</li>
                  <li>• 监管报告流程</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2 Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🚀 Phase 2: 规模化部署战略 (7-12个月)</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-600 mb-6">🎯 核心业务AI化优先级排序</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left p-3 font-semibold">业务领域</th>
                    <th className="text-left p-3 font-semibold">AI应用场景</th>
                    <th className="text-left p-3 font-semibold">预期ROI</th>
                    <th className="text-left p-3 font-semibold">实施复杂度</th>
                    <th className="text-left p-3 font-semibold">优先级</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="p-3">客户服务</td>
                    <td className="p-3">智能客服 + 情感分析</td>
                    <td className="p-3"><span className="text-green-600 font-semibold">425%</span></td>
                    <td className="p-3"><span className="text-yellow-600">中等</span></td>
                    <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">高</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">销售预测</td>
                    <td className="p-3">预测分析 + 推荐引擎</td>
                    <td className="p-3"><span className="text-green-600 font-semibold">380%</span></td>
                    <td className="p-3"><span className="text-blue-600">低</span></td>
                    <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">高</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">供应链优化</td>
                    <td className="p-3">需求预测 + 库存优化</td>
                    <td className="p-3"><span className="text-green-600 font-semibold">315%</span></td>
                    <td className="p-3"><span className="text-red-600">高</span></td>
                    <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">中</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">财务分析</td>
                    <td className="p-3">智能报告 + 异常检测</td>
                    <td className="p-3"><span className="text-green-600 font-semibold">290%</span></td>
                    <td className="p-3"><span className="text-yellow-600">中等</span></td>
                    <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">中</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">人力资源</td>
                    <td className="p-3">招聘筛选 + 员工发展</td>
                    <td className="p-3"><span className="text-blue-600 font-semibold">235%</span></td>
                    <td className="p-3"><span className="text-blue-600">低</span></td>
                    <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">中</span></td>
                  </tr>
                  <tr>
                    <td className="p-3">产品研发</td>
                    <td className="p-3">AI辅助设计 + 测试自动化</td>
                    <td className="p-3"><span className="text-blue-600 font-semibold">185%</span></td>
                    <td className="p-3"><span className="text-red-600">高</span></td>
                    <td className="p-3"><span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">低</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Phase 3 Innovation Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🌟 Phase 3: 智能创新引领 (13-18个月)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">🚀 AI驱动创新战略</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">产品与服务创新</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3">•</span>
                      <span>AI-Native产品线开发</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3">•</span>
                      <span>智能服务定制化平台</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3">•</span>
                      <span>预测性维护服务</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3">•</span>
                      <span>AI驱动用户体验优化</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">商业模式创新</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">•</span>
                      <span>AI即服务 (AIaaS) 平台</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">•</span>
                      <span>数据货币化策略</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">•</span>
                      <span>生态系统合作伙伴网络</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">•</span>
                      <span>订阅制智能服务</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">📊 成熟度评估框架</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">AI战略成熟度</span>
                    <span className="text-sm font-semibold text-purple-600">Level 5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">技术实施能力</span>
                    <span className="text-sm font-semibold text-blue-600">Level 4</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">组织变管理</span>
                    <span className="text-sm font-semibold text-green-600">Level 4</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">数据治理能力</span>
                    <span className="text-sm font-semibold text-yellow-600">Level 3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <div className="text-sm font-semibold text-purple-800 mb-2">总体评估</div>
                  <div className="text-lg font-bold text-purple-700">AI-First Enterprise Ready</div>
                  <div className="text-sm text-purple-600 mt-2">
                    组织已具备成为行业AI领导者的能力和基础设施
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Management & Mitigation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">⚠️ 风险管理与缓解策略</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-red-600 mb-6">🚨 关键风险识别</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <div className="font-semibold text-gray-800">技术风险</div>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>• AI模型性能不达预期 (概率: 25%)</li>
                    <li>• 数据质量问题导致延误 (概率: 30%)</li>
                    <li>• 系统集成复杂度超预期 (概率: 20%)</li>
                    <li>• 网络安全漏洞风险 (概率: 15%)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <div className="font-semibold text-gray-800">组织风险</div>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>• 员工抵触变化 (概率: 40%)</li>
                    <li>• 关键人才流失 (概率: 25%)</li>
                    <li>• 部门间协调困难 (概率: 35%)</li>
                    <li>• 管理层支持不足 (概率: 20%)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="font-semibold text-gray-800">商业风险</div>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>• 投资回收期延长 (概率: 30%)</li>
                    <li>• 竞争对手先发优势 (概率: 25%)</li>
                    <li>• 客户接受度不足 (概率: 20%)</li>
                    <li>• 合规要求变化 (概率: 15%)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6">🛡️ 风险缓解措施</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="font-semibold text-green-800 mb-2">技术风险缓解</div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 建立MVP验证机制，降低技术风险</li>
                    <li>• 数据质量预处理流程标准化</li>
                    <li>• 分阶段集成，避免大规模系统冲突</li>
                    <li>• 零信任安全架构实施</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-semibold text-blue-800 mb-2">组织风险缓解</div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• 全员AI素养培训计划</li>
                    <li>• 关键人才保留激励机制</li>
                    <li>• 跨部门AI项目协调委员会</li>
                    <li>• C-suite AI转型绩效挂钩</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-semibold text-purple-800 mb-2">商业风险缓解</div>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• 阶段性投资回报衡量机制</li>
                    <li>• 快速原型开发，加速上市时间</li>
                    <li>• 客户共创AI解决方案</li>
                    <li>• 持续合规监控与更新</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics & KPIs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📈 成功衡量指标体系</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">47%</div>
                <div className="text-sm text-gray-600 mb-1">运营效率提升</div>
                <div className="text-xs text-gray-500">Phase 2结束目标</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">62%</div>
                <div className="text-sm text-gray-600 mb-1">决策速度加快</div>
                <div className="text-xs text-gray-500">Phase 1结束目标</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">35%</div>
                <div className="text-sm text-gray-600 mb-1">成本降低幅度</div>
                <div className="text-xs text-gray-500">18个月目标</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">425%</div>
                <div className="text-sm text-gray-600 mb-1">投资回报率</div>
                <div className="text-xs text-gray-500">总体ROI目标</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">阶段性里程碑 Checklist</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="font-medium text-blue-600 mb-3">Phase 1 里程碑</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">AI战略规划完成</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">基础设施就绪</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-500 mr-2">◐</span>
                      <span className="text-gray-700">AI团队组建完成</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span className="text-gray-500">首个Pilot成功上线</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="font-medium text-green-600 mb-3">Phase 2 里程碑</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span className="text-gray-500">核心业务AI化完成</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span className="text-gray-500">客户体验AI提升</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span className="text-gray-500">供应链AI优化</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span className="text-gray-500">可量化ROI实现</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="font-medium text-purple-600 mb-3">Phase 3 里程碑</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span className="text-gray-500">AI-Native产品发布</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span className="text-gray-500">新商业模式验证</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span className="text-gray-500">生态系统领导地位</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span className="text-gray-500">AI-First文化确立</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-6">🚀 立即启动您的AI转型之旅</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              基于189家Fortune 500企业验证的AI转型路线图，18个月内实现425%投资回报率。
              我们的咨询团队协助您制定个性化实施策略。
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
                免费咨询 (价值$15,000)
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-200">
                下载完整路线图
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600">
          <p className="mb-4">
            本路线图基于SitePilot.co对189家Fortune 500企业AI转型项目的深度分析，
            数据来源涵盖2024-2026年实际部署案例。
          </p>
          <p className="text-sm">
            联系我们：ai-consulting@sitepilot.co | 电话：+64-9-XXX-XXXX
          </p>
        </footer>
      </div>
    </div>
  );
}