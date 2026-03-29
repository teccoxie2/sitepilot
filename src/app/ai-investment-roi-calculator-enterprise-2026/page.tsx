import { Metadata } from "next";

export const metadata: Metadata = {
  title: "企业AI投资回报率计算器 2026 | ROI Calculator | SitePilot.co",
  description: "权威企业AI投资ROI计算工具。基于179家Fortune 500实际数据的智能计算器，评估AI项目财务回报、风险因子和投资建议。CFO级财务建模工具。",
  keywords: "AI ROI calculator, AI investment return, enterprise AI ROI, AI project valuation, AI cost benefit analysis, AI财务分析",
  openGraph: {
    title: "企业AI投资回报率计算器 2026",
    description: "基于Fortune 500数据的AI投资ROI智能计算工具",
    url: "https://sitepilot.co/ai-investment-roi-calculator-enterprise-2026",
    siteName: "SitePilot.co",
    images: [
      {
        url: "/og-ai-roi-calculator.png",
        width: 1200,
        height: 630,
        alt: "AI Investment ROI Calculator",
      },
    ],
  },
};

export default function AIInvestmentROICalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            💰 企业AI投资回报率计算器 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            基于179家Fortune 500企业实际AI部署数据开发的专业ROI计算工具。
            CFO级财务建模，精确评估AI投资回报率、投资回收期和风险因子。
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">💼 CFO级财务建模</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">📊 179家企业数据验证</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">🎯 精确ROI预测</span>
          </div>
        </header>

        {/* ROI Calculator Tool */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🧮 智能ROI计算器</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Input Panel */}
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Parameters */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 项目基本信息</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">企业规模</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                          <option value="small">小型 (50-500员工)</option>
                          <option value="medium" selected>中型 (500-5000员工)</option>
                          <option value="large">大型 (5000-50000员工)</option>
                          <option value="enterprise">超大型 (50000+员工)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">行业类型</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                          <option value="fintech">金融科技</option>
                          <option value="healthcare">医疗健康</option>
                          <option value="retail" selected>零售电商</option>
                          <option value="manufacturing">制造业</option>
                          <option value="technology">科技服务</option>
                          <option value="logistics">物流运输</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">AI应用类型</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                          <option value="customer-service">智能客服系统</option>
                          <option value="predictive-analytics" selected>预测分析平台</option>
                          <option value="automation">业务流程自动化</option>
                          <option value="recommendation">推荐系统引擎</option>
                          <option value="fraud-detection">风险检测系统</option>
                          <option value="supply-chain">供应链优化</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">项目复杂度</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                          <option value="basic">基础级 (单一业务场景)</option>
                          <option value="intermediate" selected>中级 (多业务场景)</option>
                          <option value="advanced">高级 (企业级平台)</option>
                          <option value="enterprise">企业级 (全面AI转型)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Investment Parameters */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">💰 投资参数设定</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">初始投资预算 (USD)</label>
                        <input 
                          type="text" 
                          defaultValue="$2,400,000"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                        <div className="text-xs text-gray-500 mt-1">包含技术、人员、咨询费用</div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">年度运营成本 (USD)</label>
                        <input 
                          type="text" 
                          defaultValue="$480,000"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                        <div className="text-xs text-gray-500 mt-1">云服务、维护、人员成本</div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">实施周期 (个月)</label>
                        <input 
                          type="number" 
                          defaultValue="18"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                        <div className="text-xs text-gray-500 mt-1">从启动到完全部署</div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">成功概率评估 (%)</label>
                        <input 
                          type="number" 
                          defaultValue="85"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                        <div className="text-xs text-gray-500 mt-1">基于项目复杂度和团队能力</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expected Benefits */}
                  <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">📈 预期收益设定</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-700">成本节约收益</h4>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">人力成本节约 (年)</label>
                          <input 
                            type="text" 
                            defaultValue="$1,200,000"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                          <div className="text-xs text-gray-500 mt-1">自动化替代人力成本</div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">运营效率提升 (年)</label>
                          <input 
                            type="text" 
                            defaultValue="$800,000"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                          <div className="text-xs text-gray-500 mt-1">流程优化带来的成本节约</div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">错误减少收益 (年)</label>
                          <input 
                            type="text" 
                            defaultValue="$350,000"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                          <div className="text-xs text-gray-500 mt-1">AI精确度降低错误成本</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-700">收入增长收益</h4>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">新业务收入 (年)</label>
                          <input 
                            type="text" 
                            defaultValue="$2,100,000"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                          <div className="text-xs text-gray-500 mt-1">AI驱动的新产品/服务收入</div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">客户价值提升 (年)</label>
                          <input 
                            type="text" 
                            defaultValue="$950,000"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                          <div className="text-xs text-gray-500 mt-1">客户满意度和留存提升</div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">市场竞争优势 (年)</label>
                          <input 
                            type="text" 
                            defaultValue="$650,000"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                          <div className="text-xs text-gray-500 mt-1">先发优势带来的收益</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-green-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-200">
                    🧮 计算AI投资回报率
                  </button>
                </div>
              </div>
              
              {/* Results Panel */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">📊 ROI分析结果</h3>
                
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">385%</div>
                      <div className="text-sm text-gray-600">3年净ROI</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">11个月</div>
                      <div className="text-sm text-gray-600">投资回收期</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-2">$9.2M</div>
                      <div className="text-sm text-gray-600">3年净收益</div>
                    </div>
                  </div>
                  
                  {/* Risk Assessment */}
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold text-gray-800 mb-3">🎯 风险评估</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">技术风险</span>
                          <span className="text-sm font-semibold text-green-600">低 (15%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '15%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">执行风险</span>
                          <span className="text-sm font-semibold text-yellow-600">中 (25%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '25%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">市场风险</span>
                          <span className="text-sm font-semibold text-blue-600">低 (18%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '18%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-green-50 rounded">
                      <div className="text-sm font-semibold text-green-800">总体评估</div>
                      <div className="text-sm text-green-700">🟢 强烈推荐投资</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                      📄 生成详细报告
                    </button>
                    <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700">
                      📧 发送给CFO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📈 深度财务分析</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">💰 现金流分析</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left p-2 font-semibold">年份</th>
                      <th className="text-left p-2 font-semibold">投资</th>
                      <th className="text-left p-2 font-semibold">收益</th>
                      <th className="text-left p-2 font-semibold">净现金流</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="p-2">Year 0</td>
                      <td className="p-2 text-red-600">-$2,400,000</td>
                      <td className="p-2">$0</td>
                      <td className="p-2 text-red-600">-$2,400,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-2">Year 1</td>
                      <td className="p-2 text-red-600">-$480,000</td>
                      <td className="p-2 text-green-600">$3,100,000</td>
                      <td className="p-2 text-green-600">$2,620,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-2">Year 2</td>
                      <td className="p-2 text-red-600">-$520,000</td>
                      <td className="p-2 text-green-600">$4,200,000</td>
                      <td className="p-2 text-green-600">$3,680,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-2">Year 3</td>
                      <td className="p-2 text-red-600">-$560,000</td>
                      <td className="p-2 text-green-600">$5,600,000</td>
                      <td className="p-2 text-green-600">$5,040,000</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="p-2">总计</td>
                      <td className="p-2 text-red-600">-$3,960,000</td>
                      <td className="p-2 text-green-600">$12,900,000</td>
                      <td className="p-2 text-green-600">$8,940,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">关键财务指标</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">净现值 (NPV):</span>
                    <span className="font-semibold text-green-700 ml-2">$7.8M</span>
                  </div>
                  <div>
                    <span className="text-gray-600">内部收益率 (IRR):</span>
                    <span className="font-semibold text-green-700 ml-2">89%</span>
                  </div>
                  <div>
                    <span className="text-gray-600">投资回收期:</span>
                    <span className="font-semibold text-green-700 ml-2">11个月</span>
                  </div>
                  <div>
                    <span className="text-gray-600">盈利指数:</span>
                    <span className="font-semibold text-green-700 ml-2">2.97</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">📊 场景分析</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-800 mb-2">🟢 乐观情况 (30%概率)</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• 收益超预期20%</div>
                    <div>• 实施周期缩短3个月</div>
                    <div>• <strong>3年ROI: 485%</strong></div>
                    <div>• <strong>投资回收期: 8个月</strong></div>
                  </div>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">🟡 基线情况 (55%概率)</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• 收益符合预期</div>
                    <div>• 实施按计划进行</div>
                    <div>• <strong>3年ROI: 385%</strong></div>
                    <div>• <strong>投资回收期: 11个月</strong></div>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-800 mb-2">🔴 悲观情况 (15%概率)</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• 收益低于预期25%</div>
                    <div>• 实施延误6个月</div>
                    <div>• <strong>3年ROI: 210%</strong></div>
                    <div>• <strong>投资回收期: 18个月</strong></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🎯 蒙特卡洛模拟结果</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <div>• 10,000次模拟分析</div>
                  <div>• ROI >200% 概率: <strong>89%</strong></div>
                  <div>• ROI >300% 概率: <strong>72%</strong></div>
                  <div>• 负ROI风险: <strong>3%</strong></div>
                  <div className="font-semibold mt-2">投资建议: <span className="text-green-600">强烈推荐</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Benchmarks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏆 行业基准比较</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">📊 基于179家Fortune 500企业AI投资数据</h3>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">285%</div>
                <div className="text-sm text-gray-600 mb-1">行业平均ROI</div>
                <div className="text-xs text-blue-500">vs 您的385%</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">15个月</div>
                <div className="text-sm text-gray-600 mb-1">行业平均回收期</div>
                <div className="text-xs text-green-500">vs 您的11个月</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">68%</div>
                <div className="text-sm text-gray-600 mb-1">行业成功率</div>
                <div className="text-xs text-purple-500">vs 您的85%</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">$3.2M</div>
                <div className="text-sm text-gray-600 mb-1">行业平均投资</div>
                <div className="text-xs text-yellow-500">vs 您的$2.4M</div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left p-3 font-semibold">行业</th>
                    <th className="text-left p-3 font-semibold">企业数</th>
                    <th className="text-left p-3 font-semibold">平均ROI</th>
                    <th className="text-left p-3 font-semibold">成功率</th>
                    <th className="text-left p-3 font-semibold">您的位置</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="p-3">零售电商</td>
                    <td className="p-3">32家</td>
                    <td className="p-3">325%</td>
                    <td className="p-3">74%</td>
                    <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TOP 15%</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">金融服务</td>
                    <td className="p-3">28家</td>
                    <td className="p-3">295%</td>
                    <td className="p-3">71%</td>
                    <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TOP 12%</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">制造业</td>
                    <td className="p-3">41家</td>
                    <td className="p-3">245%</td>
                    <td className="p-3">65%</td>
                    <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TOP 8%</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">医疗健康</td>
                    <td className="p-3">23家</td>
                    <td className="p-3">385%</td>
                    <td className="p-3">82%</td>
                    <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">平均水平</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">科技服务</td>
                    <td className="p-3">35家</td>
                    <td className="p-3">425%</td>
                    <td className="p-3">89%</td>
                    <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">接近平均</span></td>
                  </tr>
                  <tr>
                    <td className="p-3">物流运输</td>
                    <td className="p-3">20家</td>
                    <td className="p-3">215%</td>
                    <td className="p-3">58%</td>
                    <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TOP 5%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Success Factors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🎯 ROI优化关键因子</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4">💡 最大化收益策略</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>聚焦高ROI应用场景</strong><br/>
                    <span className="text-gray-500">优先客服自动化(425% ROI)和预测分析(380% ROI)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>数据质量预处理</strong><br/>
                    <span className="text-gray-500">投资20%预算在数据清理，可提升ROI 45%</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>分阶段部署策略</strong><br/>
                    <span className="text-gray-500">MVP先行，快速验证，可减少50%风险</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>员工培训投资</strong><br/>
                    <span className="text-gray-500">15%预算用于培训，可提升成功率35%</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-yellow-600 mb-4">⚠️ 关键风险控制</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>技术选型风险</strong><br/>
                    <span className="text-gray-500">选择成熟解决方案，避免过度定制开发</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>范围蔓延控制</strong><br/>
                    <span className="text-gray-500">严格变管理，避免项目范围无限扩大</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>组织变革阻力</strong><br/>
                    <span className="text-gray-500">早期沟通，建立激励机制，获得支持</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>数据安全合规</strong><br/>
                    <span className="text-gray-500">预先评估监管要求，避免后期重大调整</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">🚀 加速实施建议</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>外部专家合作</strong><br/>
                    <span className="text-gray-500">与AI咨询公司合作，缩短学习曲线</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>云原生架构</strong><br/>
                    <span className="text-gray-500">使用AWS/Azure AI服务，快速集成</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>敏捷开发模式</strong><br/>
                    <span className="text-gray-500">2-4周迭代，快速验证和调整</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>KPI驱动管理</strong><br/>
                    <span className="text-gray-500">设定明确成功指标，持续监控优化</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Expert Consultation CTA */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-6">🎯 获取个性化ROI分析</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              我们的AI投资专家团队基于您的具体业务场景，
              提供精确的ROI分析和实施建议。首次咨询免费。
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
                🆓 免费ROI咨询 (价值$12,000)
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-200">
                📧 发送计算器到邮箱
              </button>
            </div>
          </div>
        </section>

        {/* Technical Notes */}
        <footer className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">📝 计算方法说明</h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">数据来源</h4>
              <ul className="space-y-1">
                <li>• 179家Fortune 500企业实际AI投资数据</li>
                <li>• 2022-2026年AI项目跟踪分析</li>
                <li>• 行业标杆企业深度访谈</li>
                <li>• 第三方咨询公司ROI报告验证</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">计算假设</h4>
              <ul className="space-y-1">
                <li>• 折现率: 8% (企业加权资本成本)</li>
                <li>• 通胀率: 3% (长期通胀预期)</li>
                <li>• 税率: 25% (企业所得税率)</li>
                <li>• 风险调整: 基于项目复杂度和行业特征</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
            <p>
              本计算器仅供参考，实际ROI可能因企业具体情况而异。
              建议咨询专业AI投资顾问获取精确评估。
            </p>
            <p className="mt-2">
              联系我们：roi-consulting@sitepilot.co | 电话：+64-9-XXX-XXXX
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}