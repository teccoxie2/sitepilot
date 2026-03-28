import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI风险管理仪表板 - 企业安全监控平台2026',
  description: '全面AI风险监控平台：实时威胁检测，合规性追踪，安全事件分析。Fortune 500企业级风险管理标准工具。',
  keywords: 'AI风险管理,企业安全监控,AI合规,风险仪表板,AI安全工具,enterprise risk management',
  robots: 'index, follow',
};

const RiskDashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
              实时风险监控中
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI风险管理
              <span className="block bg-gradient-to-r from-orange-200 to-red-200 bg-clip-text text-transparent">
                智能仪表板
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto mb-8">
              7层防护体系 • 实时威胁检测 • 189个安全事件分析验证 • Fortune 500企业标准
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span>零信任架构</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <span>24/7监控</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <span>合规自动化</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Risk Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">风险评级</p>
                <p className="text-3xl font-bold text-green-700">低风险</p>
                <p className="text-xs text-green-500">7日内无高风险事件</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">合规状态</p>
                <p className="text-3xl font-bold text-blue-700">98.5%</p>
                <p className="text-xs text-blue-500">GDPR, SOX, HIPAA</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.827 9.173a4 4 0 105.656 0" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-yellow-50 to-amber-50 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-600">监控设备</p>
                <p className="text-3xl font-bold text-yellow-700">247</p>
                <p className="text-xs text-yellow-500">AI模型 & 端点</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-purple-50 to-violet-50 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">威胁阻断</p>
                <p className="text-3xl font-bold text-purple-700">1,247</p>
                <p className="text-xs text-purple-500">本月拦截次数</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Real-time Threats */}
          <div className="lg:col-span-2 card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">实时威胁监控</h2>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-600">实时更新</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  time: '14:23',
                  level: 'low',
                  color: 'green',
                  title: '数据访问模式异常',
                  desc: 'AI模型training-v2.3异常访问敏感数据集',
                  action: '已自动隔离'
                },
                {
                  time: '14:21',
                  level: 'medium',
                  color: 'yellow',
                  title: 'API调用频率超限',
                  desc: 'third-party-connector超出每分钟1000次限制',
                  action: '需要审查'
                },
                {
                  time: '14:18',
                  level: 'high',
                  color: 'red',
                  title: '模型输出数据泄露风险',
                  desc: 'customer-analysis-ai尝试输出PII数据',
                  action: '紧急阻断'
                },
                {
                  time: '14:15',
                  level: 'low',
                  color: 'green',
                  title: '权限配置更新',
                  desc: 'user@company.com权限降级为只读',
                  action: '已完成'
                },
              ].map((threat, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 border-${threat.color}-500 bg-${threat.color}-50`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xs font-mono text-slate-500">{threat.time}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-${threat.color}-100 text-${threat.color}-800`}>
                          {threat.level === 'high' ? '高危' : threat.level === 'medium' ? '中等' : '低危'}
                        </span>
                      </div>
                      <h4 className="font-semibold text-slate-900">{threat.title}</h4>
                      <p className="text-sm text-slate-600 mb-2">{threat.desc}</p>
                      <span className={`text-xs px-2 py-1 rounded bg-${threat.color}-100 text-${threat.color}-700`}>
                        {threat.action}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button className="btn btn-secondary">查看全部威胁记录</button>
            </div>
          </div>

          {/* Risk Assessment Panel */}
          <div className="space-y-6">
            
            {/* Risk Score */}
            <div className="card">
              <h3 className="text-lg font-bold text-slate-900 mb-4">风险评分</h3>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle 
                      cx="60" 
                      cy="60" 
                      r="50" 
                      fill="transparent" 
                      stroke="#e2e8f0" 
                      strokeWidth="8"
                    />
                    <circle 
                      cx="60" 
                      cy="60" 
                      r="50" 
                      fill="transparent" 
                      stroke="#10b981" 
                      strokeWidth="8" 
                      strokeDasharray={`${2.4 * 75} 314`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-green-600">75</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-2">风险评分</p>
                <p className="font-semibold text-green-600">良好状态</p>
              </div>
            </div>

            {/* Compliance Status */}
            <div className="card">
              <h3 className="text-lg font-bold text-slate-900 mb-4">合规状态</h3>
              <div className="space-y-3">
                {[
                  { name: 'GDPR', status: '100%', color: 'green' },
                  { name: 'SOX', status: '98%', color: 'green' },
                  { name: 'HIPAA', status: '96%', color: 'yellow' },
                  { name: 'ISO27001', status: '100%', color: 'green' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">{item.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold">{item.status}</span>
                      <div className={`w-3 h-3 bg-${item.color}-500 rounded-full`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-lg font-bold text-slate-900 mb-4">快速操作</h3>
              <div className="space-y-2">
                <button className="w-full btn btn-primary text-sm py-2">
                  生成风险报告
                </button>
                <button className="w-full btn btn-secondary text-sm py-2">
                  更新安全策略
                </button>
                <button className="w-full btn border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm py-2">
                  配置告警规则
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Categories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">7层防护体系</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '数据安全',
                desc: 'PII保护、加密传输、访问控制',
                icon: '🔒',
                risks: ['数据泄露', '未授权访问', '传输安全'],
                status: 'secure'
              },
              {
                title: '模型安全',
                desc: 'AI模型完整性、输出验证',
                icon: '🤖',
                risks: ['模型中毒', '对抗攻击', '输出偏差'],
                status: 'secure'
              },
              {
                title: '基础设施',
                desc: '云环境、网络安全、端点防护',
                icon: '🏗️',
                risks: ['基础设施漏洞', '网络入侵', '端点威胁'],
                status: 'warning'
              },
              {
                title: '合规监管',
                desc: 'GDPR、SOX、HIPAA合规性',
                icon: '📋',
                risks: ['合规违规', '审计失败', '法规更新'],
                status: 'secure'
              },
            ].map((category, index) => (
              <div key={index} className="card hover-lift group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div className={`w-3 h-3 rounded-full ${
                    category.status === 'secure' ? 'bg-green-500' : 
                    category.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{category.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{category.desc}</p>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">主要风险</p>
                  {category.risks.map((risk, riskIndex) => (
                    <div key={riskIndex} className="text-xs text-slate-600">• {risk}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Metrics */}
        <div className="mt-16 card bg-gradient-to-r from-slate-900 to-indigo-900 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">安全性能指标</h2>
              <p className="text-indigo-100 text-lg mb-6">
                基于189个AI安全事件分析，为您的企业提供最全面的风险防护体系。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-400">99.8%</div>
                  <div className="text-indigo-200">威胁检测率</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">&lt;30秒</div>
                  <div className="text-indigo-200">平均响应时间</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-indigo-200">全天候监控</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">0</div>
                  <div className="text-indigo-200">数据泄露事件</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">最新安全更新</h3>
              {[
                { 
                  time: '2小时前', 
                  event: '新增对抗性攻击检测规则',
                  impact: 'high'
                },
                { 
                  time: '6小时前', 
                  event: '更新GDPR合规检查项目',
                  impact: 'medium'
                },
                { 
                  time: '1天前', 
                  event: '部署新版本异常行为分析引擎',
                  impact: 'high'
                },
                { 
                  time: '2天前', 
                  event: '优化模型输出过滤策略',
                  impact: 'medium'
                },
              ].map((update, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">{update.event}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      update.impact === 'high' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {update.impact === 'high' ? '高影响' : '中影响'}
                    </span>
                  </div>
                  <div className="text-sm text-indigo-200">
                    {update.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">增强您的AI安全防护</h2>
              <p className="text-xl text-red-100 mb-8">
                获取完整的企业级AI风险管理解决方案，保护您的数据、模型和业务
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn bg-white text-red-600 hover:bg-red-50 text-lg px-8">
                  免费安全评估
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </button>
                <button className="btn border-2 border-white text-white hover:bg-white hover:text-red-600 text-lg px-8">
                  联系安全专家
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDashboardPage;