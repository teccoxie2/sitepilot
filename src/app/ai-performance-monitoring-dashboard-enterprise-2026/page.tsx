import { Metadata } from 'next'
import { ArrowRight, BarChart3, TrendingUp, AlertTriangle, Shield, Zap, Clock, Target } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Enterprise AI Performance Monitoring Dashboard 2026 | SitePilot',
  description: 'Comprehensive AI performance monitoring and analytics dashboard for enterprise deployments. Track KPIs, ROI, and operational metrics.',
  keywords: 'AI performance monitoring, AI analytics dashboard, enterprise AI metrics, AI KPI tracking, AI ROI measurement',
}

export default function AIPerformanceMonitoringDashboard() {
  const kpiMetrics = [
    { name: "Model Accuracy", value: "94.2%", change: "+2.1%", status: "good" },
    { name: "Response Time", value: "0.8s", change: "-0.2s", status: "good" },
    { name: "API Uptime", value: "99.97%", change: "+0.02%", status: "good" },
    { name: "Cost Per Query", value: "$0.003", change: "-$0.001", status: "good" },
    { name: "User Adoption", value: "87%", change: "+12%", status: "good" },
    { name: "Error Rate", value: "0.08%", change: "-0.05%", status: "good" }
  ]

  const usageMetrics = [
    { department: "Sales", requests: "45K", growth: "+15%", satisfaction: "92%" },
    { department: "Marketing", requests: "38K", growth: "+22%", satisfaction: "89%" },
    { department: "Customer Support", requests: "67K", growth: "+8%", satisfaction: "94%" },
    { department: "Operations", requests: "23K", growth: "+28%", satisfaction: "87%" },
    { department: "Finance", requests: "12K", growth: "+35%", satisfaction: "91%" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Enterprise AI Performance Monitoring Dashboard 2026
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Real-time monitoring and analytics for enterprise AI deployments
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-lg font-semibold text-blue-800">Real-Time AI Analytics</span>
          </div>
          <p className="text-blue-700">
            Monitor performance, costs, and user adoption across all AI implementations
          </p>
        </div>
      </div>

      {/* Executive Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8" />
            <span className="text-green-100 text-sm">This Month</span>
          </div>
          <div className="text-3xl font-bold mb-2">$2.4M</div>
          <div className="text-green-100">AI-Generated ROI</div>
          <div className="text-sm text-green-200 mt-1">+18% vs last month</div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <Zap className="w-8 h-8" />
            <span className="text-blue-100 text-sm">Last 24h</span>
          </div>
          <div className="text-3xl font-bold mb-2">1.2M</div>
          <div className="text-blue-100">API Requests</div>
          <div className="text-sm text-blue-200 mt-1">+5% daily avg</div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <Target className="w-8 h-8" />
            <span className="text-purple-100 text-sm">Current</span>
          </div>
          <div className="text-3xl font-bold mb-2">94.2%</div>
          <div className="text-purple-100">Avg Accuracy</div>
          <div className="text-sm text-purple-200 mt-1">+2.1% improvement</div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <Clock className="w-8 h-8" />
            <span className="text-orange-100 text-sm">P95</span>
          </div>
          <div className="text-3xl font-bold mb-2">1.2s</div>
          <div className="text-orange-100">Response Time</div>
          <div className="text-sm text-orange-200 mt-1">-15% faster</div>
        </div>
      </div>

      {/* Core KPI Metrics */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Core AI Performance Metrics</h2>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {kpiMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">{metric.name}</div>
              <div className="text-xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className={`text-sm flex items-center ${
                metric.status === 'good' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className="w-3 h-3 mr-1" />
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-Time Performance Chart */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Real-Time Performance</h2>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm">24H</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm">7D</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm">30D</button>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800">98.5%</div>
              <div className="text-sm text-blue-600">Success Rate</div>
              <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '98.5%'}}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-800">0.8s</div>
              <div className="text-sm text-green-600">Avg Response</div>
              <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-800">156</div>
              <div className="text-sm text-purple-600">RPS Current</div>
              <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '62%'}}></div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-orange-800">$847</div>
              <div className="text-sm text-orange-600">Hourly Cost</div>
              <div className="w-full bg-orange-200 rounded-full h-2 mt-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mock Chart Placeholder */}
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <div className="text-lg font-medium">Interactive Performance Charts</div>
            <div className="text-sm">Real-time AI metrics visualization</div>
          </div>
        </div>
      </div>

      {/* Department Usage Analysis */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage by Department</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Department</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Monthly Requests</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Growth Rate</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">User Satisfaction</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Top Use Cases</th>
              </tr>
            </thead>
            <tbody>
              {usageMetrics.map((dept, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <span className="font-medium text-gray-900">{dept.department}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-blue-700 font-semibold">{dept.requests}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-green-700 font-semibold">{dept.growth}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span className="text-purple-700 font-semibold mr-2">{dept.satisfaction}</span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{width: dept.satisfaction}}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-sm text-gray-600">
                      {dept.department === 'Sales' && 'Lead Scoring, Proposal Gen'}
                      {dept.department === 'Marketing' && 'Content Creation, SEO'}
                      {dept.department === 'Customer Support' && 'Chatbots, Ticket Routing'}
                      {dept.department === 'Operations' && 'Process Automation'}
                      {dept.department === 'Finance' && 'Report Analysis, Forecasting'}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alerts and Issues */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
            <h3 className="text-lg font-bold text-gray-900">Active Alerts</h3>
            <span className="ml-auto bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">3 Active</span>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-400 pl-4 py-2">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-yellow-800">High Latency Detected</span>
                <span className="text-xs text-yellow-600">2 min ago</span>
              </div>
              <p className="text-sm text-yellow-700">Model response time exceeded 2s threshold in EU region</p>
            </div>

            <div className="border-l-4 border-orange-400 pl-4 py-2">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-orange-800">Cost Spike Warning</span>
                <span className="text-xs text-orange-600">15 min ago</span>
              </div>
              <p className="text-sm text-orange-700">Marketing department usage 25% above monthly budget</p>
            </div>

            <div className="border-l-4 border-blue-400 pl-4 py-2">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-blue-800">Model Update Available</span>
                <span className="text-xs text-blue-600">1 hour ago</span>
              </div>
              <p className="text-sm text-blue-700">New version 2.1.3 with 3% accuracy improvement</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-lg font-bold text-gray-900">Security & Compliance</h3>
            <span className="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded text-sm">All Clear</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-green-800 font-medium">Data Encryption</span>
              <span className="text-green-600 text-sm">✓ Active</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-green-800 font-medium">Access Logs</span>
              <span className="text-green-600 text-sm">✓ Monitored</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-green-800 font-medium">Compliance Check</span>
              <span className="text-green-600 text-sm">✓ GDPR Ready</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-blue-800 font-medium">Audit Trail</span>
              <span className="text-blue-600 text-sm">✓ Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Analysis */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Analysis & Optimization</h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-800">$47K</div>
            <div className="text-sm text-blue-600">Monthly Spend</div>
            <div className="text-xs text-blue-500 mt-1">↓ $3K vs budget</div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-800">$0.003</div>
            <div className="text-sm text-green-600">Cost Per Query</div>
            <div className="text-xs text-green-500 mt-1">↓ 15% optimization</div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-800">340%</div>
            <div className="text-sm text-purple-600">ROI Current</div>
            <div className="text-xs text-purple-500 mt-1">↑ 18% vs Q3</div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-800">18m</div>
            <div className="text-sm text-orange-600">Payback Period</div>
            <div className="text-xs text-orange-500 mt-1">3m ahead of plan</div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-gray-900 mb-4">Cost Optimization Recommendations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Quick Wins</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Implement request caching (est. 15% savings)</li>
                <li>• Optimize model selection per use case</li>
                <li>• Enable auto-scaling for peak hours</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Long-term Strategies</h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Negotiate enterprise pricing tiers</li>
                <li>• Consider fine-tuned models for repetitive tasks</li>
                <li>• Implement usage quotas by department</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Monitoring Tools</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/ai-automation-roi-measurement-2026" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <TrendingUp className="w-8 h-8 text-blue-600 mr-4" />
            <div>
              <h3 className="font-semibold text-blue-800">ROI Measurement</h3>
              <p className="text-sm text-blue-600">Calculate AI investment returns</p>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-600 ml-auto" />
          </Link>
          
          <Link href="/ai-governance-monitoring-dashboard-2026" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <Shield className="w-8 h-8 text-green-600 mr-4" />
            <div>
              <h3 className="font-semibold text-green-800">Governance Monitoring</h3>
              <p className="text-sm text-green-600">AI compliance and risk tracking</p>
            </div>
            <ArrowRight className="w-5 h-5 text-green-600 ml-auto" />
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Advanced AI Analytics Platform</h2>
        <p className="text-lg mb-6">Get deeper insights with our enterprise AI monitoring solution</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
          Schedule Demo
        </button>
      </div>
    </div>
  )
}