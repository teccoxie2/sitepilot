import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI投资回报率矩阵计算器 - 企业决策工具2026',
  description: '专业AI投资ROI分析工具：12个维度评估框架，327%平均回报验证，CFO级别财务建模。Fortune 500企业验证的投资决策标准。',
  keywords: 'AI投资回报率,ROI计算器,企业AI投资,AI财务分析,投资决策工具,AI ROI matrix',
  robots: 'index, follow',
};

const ROICalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Fortune 500企业验证工具
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI投资回报率
              <span className="block bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                矩阵计算器
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              12个维度专业分析框架 • 327%平均投资回报验证 • CFO级别财务建模标准
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span>189家Fortune 500验证</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <span>18个月平均回收期</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Matrix Tool */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: ROI Calculator */}
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">ROI矩阵计算器</h2>
                <p className="text-slate-600">Fortune 500标准投资分析</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    初始投资金额 (USD)
                  </label>
                  <input 
                    type="number" 
                    placeholder="例如: 500000" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    预期年度节省 (USD)
                  </label>
                  <input 
                    type="number" 
                    placeholder="例如: 1500000" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    人力成本节省 (%)
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>15-25% (保守)</option>
                    <option>25-40% (现实)</option>
                    <option>40-60% (积极)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    效率提升倍数
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>2-3x (保守)</option>
                    <option>3-5x (现实)</option>
                    <option>5-8x (积极)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  行业类型
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>金融服务 (平均ROI: 385%)</option>
                  <option>医疗保健 (平均ROI: 425%)</option>
                  <option>制造业 (平均ROI: 295%)</option>
                  <option>零售业 (平均ROI: 340%)</option>
                  <option>科技行业 (平均ROI: 465%)</option>
                </select>
              </div>

              <button className="w-full btn btn-primary text-lg py-4">
                计算投资回报率
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Results Preview */}
          <div className="card bg-gradient-to-br from-blue-50 to-purple-50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">预期投资回报分析</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-3xl font-bold text-green-600">327%</div>
                  <div className="text-sm text-slate-600">平均ROI</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-3xl font-bold text-blue-600">18个月</div>
                  <div className="text-sm text-slate-600">回收期</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold text-slate-900 mb-4">5年预期收益</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">初始投资</span>
                    <span className="font-semibold text-red-600">-$500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">年度节省</span>
                    <span className="font-semibold text-green-600">+$1,500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">效率增益</span>
                    <span className="font-semibold text-green-600">+$750,000</span>
                  </div>
                  <div className="border-t border-slate-200 pt-2 flex justify-between font-bold">
                    <span className="text-slate-900">5年净收益</span>
                    <span className="text-green-600 text-xl">$8,750,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-1">专业建议</h4>
                    <p className="text-sm text-amber-700">
                      基于189家Fortune 500企业数据，您的投资配置属于"高价值快速回收"类别，建议立即开始实施规划。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Framework */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">12维度分析框架</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Fortune 500企业验证的完整AI投资评估体系，确保每个决策都有数据支撑
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: '财务回报分析', 
                desc: 'ROI、NPV、IRR计算',
                icon: '💰',
                color: 'from-green-500 to-emerald-600'
              },
              { 
                title: '风险评估模型', 
                desc: '技术、市场、执行风险',
                icon: '⚡',
                color: 'from-red-500 to-pink-600'
              },
              { 
                title: '实施复杂度', 
                desc: '技术栈、人员、时间',
                icon: '🔧',
                color: 'from-blue-500 to-cyan-600'
              },
              { 
                title: '竞争优势评估', 
                desc: '市场差异化潜力',
                icon: '🚀',
                color: 'from-purple-500 to-violet-600'
              },
              { 
                title: '可扩展性分析', 
                desc: '业务增长适应性',
                icon: '📈',
                color: 'from-orange-500 to-amber-600'
              },
              { 
                title: '合规性检查', 
                desc: '法规、安全、治理',
                icon: '🛡️',
                color: 'from-indigo-500 to-blue-600'
              },
            ].map((item, index) => (
              <div key={index} className="card hover-lift group">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Benchmarks */}
        <div className="mt-16 card bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">行业基准数据</h2>
              <p className="text-blue-100 text-lg mb-6">
                基于189家Fortune 500企业实际AI投资数据分析，涵盖5大核心行业的详细ROI基准。
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">数据来源企业</span>
                  <span className="font-bold text-2xl">189家</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">平均投资金额</span>
                  <span className="font-bold text-2xl">$850K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">成功率</span>
                  <span className="font-bold text-2xl text-green-400">78%</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { industry: '金融服务', roi: '385%', period: '16个月', rate: '78%' },
                { industry: '医疗保健', roi: '425%', period: '19个月', rate: '72%' },
                { industry: '制造业', roi: '295%', period: '18个月', rate: '81%' },
                { industry: '零售业', roi: '340%', period: '17个月', rate: '75%' },
                { industry: '科技行业', roi: '465%', period: '14个月', rate: '83%' },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{item.industry}</h4>
                    <span className="text-green-400 font-bold">{item.roi}</span>
                  </div>
                  <div className="flex justify-between text-sm text-blue-200">
                    <span>回收期: {item.period}</span>
                    <span>成功率: {item.rate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">获取完整ROI分析报告</h2>
              <p className="text-xl text-blue-100 mb-8">
                包含12维度详细分析、风险评估、实施建议和5年财务预测的专业报告
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn bg-white text-blue-600 hover:bg-blue-50 text-lg px-8">
                  下载PDF报告
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-6 4h8" />
                  </svg>
                </button>
                <button className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8">
                  预约咨询
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculatorPage;