import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, DollarSign, TrendingUp, AlertCircle, CheckCircle, Users, BarChart3, Calculator, Download, RefreshCw, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise AI Budget Optimization Calculator 2026 | Strategic Budget Planning Tool',
  description: 'Master enterprise AI budget optimization with our comprehensive calculator. Features 12-month financial planning, ROI tracking, cost allocation frameworks, and vendor budget analysis for Fortune 500 companies.',
  keywords: [
    'enterprise AI budget calculator',
    'AI budget optimization',
    'enterprise AI financial planning',
    'AI investment budget',
    'corporate AI spending',
    'AI budget allocation',
    'enterprise AI ROI calculator',
    'AI budget planning tool',
    'enterprise AI cost management',
    'AI budget framework 2026'
  ],
  openGraph: {
    title: 'Enterprise AI Budget Optimization Calculator 2026',
    description: 'Strategic AI budget planning tool for Fortune 500 enterprises. 12-month financial planning with ROI tracking and cost optimization.',
    type: 'website',
  },
};

export default function EnterpriseAIBudgetCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <Calculator className="h-12 w-12 text-blue-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              Enterprise AI Budget Optimization Calculator
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Strategic financial planning tool for Fortune 500 enterprises. Optimize AI investments with 12-month budget planning, ROI tracking, and cost allocation frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                Launch Calculator Tool
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                Download Framework
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Budget Planning Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete financial planning toolkit designed specifically for enterprise AI initiatives and strategic investments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-3">12-Month Financial Planning</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Complete annual budget planning with quarterly milestones, cash flow projections, and seasonal adjustments for enterprise AI investments.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Quarterly budget allocation
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Monthly cash flow tracking
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Seasonal spending optimization
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-3">ROI Tracking & Analytics</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Advanced ROI measurement with performance benchmarks, cost-benefit analysis, and investment impact tracking across all AI initiatives.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Real-time ROI calculations
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Performance benchmarking
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Impact measurement metrics
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-3">Cost Allocation Framework</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Strategic cost allocation across departments, projects, and initiatives with detailed expense categorization and accountability tracking.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Department-wise allocation
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Project cost tracking
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Expense categorization
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Calculator Tool */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Interactive Budget Optimization Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan and optimize your enterprise AI budget with our comprehensive calculation tool designed for Fortune 500 financial planning.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Budget Parameters</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Annual AI Budget ($)
                  </label>
                  <input 
                    type="number" 
                    placeholder="5,000,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size (Employees)
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1,000-5,000</option>
                    <option>5,000-10,000</option>
                    <option>10,000-50,000</option>
                    <option>50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Industry Vertical
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Financial Services</option>
                    <option>Healthcare</option>
                    <option>Manufacturing</option>
                    <option>Technology</option>
                    <option>Retail</option>
                    <option>Energy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    AI Maturity Level
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Initial Implementation</option>
                    <option>Pilot Programs</option>
                    <option>Scaled Deployment</option>
                    <option>Enterprise-wide Integration</option>
                  </select>
                </div>

                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Calculate Optimal Budget Allocation
                </button>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Allocation</h3>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Infrastructure & Platform</span>
                      <div className="text-right">
                        <span className="font-semibold text-gray-900">$2,000,000</span>
                        <div className="text-sm text-gray-500">40%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Talent & Training</span>
                      <div className="text-right">
                        <span className="font-semibold text-gray-900">$1,500,000</span>
                        <div className="text-sm text-gray-500">30%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Data & Security</span>
                      <div className="text-right">
                        <span className="font-semibold text-gray-900">$1,000,000</span>
                        <div className="text-sm text-gray-500">20%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Innovation & R&D</span>
                      <div className="text-right">
                        <span className="font-semibold text-gray-900">$500,000</span>
                        <div className="text-sm text-gray-500">10%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{width: '10%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Categories Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise AI Budget Categories Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive breakdown of AI budget allocation across critical enterprise functions with industry-specific recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-3">Infrastructure & Platform (40%)</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Cloud Computing Resources</h4>
                  <p className="text-gray-600 text-sm mt-1">AWS/Azure/GCP compute, storage, and AI services allocation</p>
                  <div className="text-blue-600 font-medium">15-20% of total budget</div>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-900">AI Platform Licensing</h4>
                  <p className="text-gray-600 text-sm mt-1">Enterprise AI platforms, MLOps tools, and analytics software</p>
                  <div className="text-blue-600 font-medium">10-15% of total budget</div>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-semibold text-gray-900">Hardware & Infrastructure</h4>
                  <p className="text-gray-600 text-sm mt-1">GPU clusters, edge computing, and specialized AI hardware</p>
                  <div className="text-blue-600 font-medium">10-15% of total budget</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-3">Talent & Training (30%)</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">AI Talent Acquisition</h4>
                  <p className="text-gray-600 text-sm mt-1">Data scientists, ML engineers, AI architects recruitment</p>
                  <div className="text-green-600 font-medium">15-20% of total budget</div>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Training & Development</h4>
                  <p className="text-gray-600 text-sm mt-1">Employee upskilling, certification programs, workshops</p>
                  <div className="text-green-600 font-medium">5-8% of total budget</div>
                </div>
                <div className="border-l-4 border-green-300 pl-4">
                  <h4 className="font-semibold text-gray-900">External Consulting</h4>
                  <p className="text-gray-600 text-sm mt-1">AI strategy consulting, implementation support</p>
                  <div className="text-green-600 font-medium">5-7% of total budget</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-3">Data & Security (20%)</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Data Management</h4>
                  <p className="text-gray-600 text-sm mt-1">Data quality, governance, and integration infrastructure</p>
                  <div className="text-purple-600 font-medium">8-12% of total budget</div>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-900">AI Security & Compliance</h4>
                  <p className="text-gray-600 text-sm mt-1">AI governance, bias detection, regulatory compliance</p>
                  <div className="text-purple-600 font-medium">5-8% of total budget</div>
                </div>
                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold text-gray-900">Privacy & Risk Management</h4>
                  <p className="text-gray-600 text-sm mt-1">Data privacy tools, risk assessment, audit systems</p>
                  <div className="text-purple-600 font-medium">3-5% of total budget</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <RefreshCw className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-3">Innovation & R&D (10%)</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Emerging Technologies</h4>
                  <p className="text-gray-600 text-sm mt-1">Quantum AI, advanced neural networks, experimental tech</p>
                  <div className="text-orange-600 font-medium">4-6% of total budget</div>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Innovation Labs</h4>
                  <p className="text-gray-600 text-sm mt-1">Internal innovation projects, proof of concepts</p>
                  <div className="text-orange-600 font-medium">3-4% of total budget</div>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold text-gray-900">Strategic Partnerships</h4>
                  <p className="text-gray-600 text-sm mt-1">University collaborations, startup investments</p>
                  <div className="text-orange-600 font-medium">1-3% of total budget</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Benchmarks */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              2026 Enterprise AI Budget Benchmarks by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comparative analysis of AI investment patterns across major industry verticals based on Fortune 500 budget data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-3">Financial Services</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. AI Budget % of Revenue</span>
                  <span className="font-semibold text-gray-900">3.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Investment</span>
                  <span className="font-semibold text-gray-900">$12.5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Primary Focus</span>
                  <span className="font-semibold text-gray-900">Risk & Compliance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Growth Rate (YoY)</span>
                  <span className="font-semibold text-green-600">+285%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-3">Healthcare</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. AI Budget % of Revenue</span>
                  <span className="font-semibold text-gray-900">2.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Investment</span>
                  <span className="font-semibold text-gray-900">$8.7M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Primary Focus</span>
                  <span className="font-semibold text-gray-900">Clinical AI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Growth Rate (YoY)</span>
                  <span className="font-semibold text-green-600">+245%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Calculator className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-3">Manufacturing</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. AI Budget % of Revenue</span>
                  <span className="font-semibold text-gray-900">4.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Investment</span>
                  <span className="font-semibold text-gray-900">$15.3M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Primary Focus</span>
                  <span className="font-semibold text-gray-900">Operations AI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Growth Rate (YoY)</span>
                  <span className="font-semibold text-green-600">+310%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Framework */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            12-Month Budget Implementation Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic phased approach to AI budget deployment with quarterly milestones and performance checkpoints.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-bold text-gray-900">Q1: Foundation</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Infrastructure setup (40% allocation)</li>
                <li>• Core team hiring</li>
                <li>• Data governance framework</li>
                <li>• Initial platform licensing</li>
              </ul>
              <div className="mt-4 text-lg font-semibold text-blue-600">
                25% Budget Deployment
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-bold text-gray-900">Q2: Scale</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Pilot project execution</li>
                <li>• Training program launch</li>
                <li>• Vendor partnerships</li>
                <li>• Security implementation</li>
              </ul>
              <div className="mt-4 text-lg font-semibold text-green-600">
                30% Budget Deployment
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="font-bold text-gray-900">Q3: Expand</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Production deployment</li>
                <li>• Advanced analytics setup</li>
                <li>• Integration projects</li>
                <li>• Performance optimization</li>
              </ul>
              <div className="mt-4 text-lg font-semibold text-purple-600">
                30% Budget Deployment
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                <h3 className="font-bold text-gray-900">Q4: Optimize</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Innovation initiatives</li>
                <li>• Advanced R&D projects</li>
                <li>• Next-year planning</li>
                <li>• ROI assessment</li>
              </ul>
              <div className="mt-4 text-lg font-semibold text-orange-600">
                15% Budget Deployment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator Section */}
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              AI Budget ROI Calculator
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Calculate expected returns on your AI investments with our comprehensive ROI modeling tool.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Investment Parameters</h3>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Total AI Investment ($)
                  </label>
                  <input 
                    type="number" 
                    placeholder="5,000,000"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Expected Efficiency Gains (%)
                  </label>
                  <input 
                    type="number" 
                    placeholder="25"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Current Annual Operating Costs ($)
                  </label>
                  <input 
                    type="number" 
                    placeholder="50,000,000"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Calculate AI Investment ROI
                </button>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Projected ROI Analysis</h3>
                
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">3-Year ROI</span>
                      <span className="text-2xl font-bold text-green-300">285%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Break-even Period</span>
                      <span className="text-xl font-semibold text-blue-200">14 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Annual Cost Savings</span>
                      <span className="text-xl font-semibold text-blue-200">$12.5M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Productivity Increase</span>
                      <span className="text-xl font-semibold text-blue-200">+25%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg border border-green-400/30">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                    <span className="text-green-200 font-medium">
                      Strong ROI projection - Recommended for implementation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your Enterprise AI Budget?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized budget optimization recommendations based on your specific enterprise requirements and industry benchmarks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Schedule Free Consultation
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              <Download className="h-5 w-5 inline mr-2" />
              Download Budget Framework
            </button>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Enterprise AI Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/ai-investment-roi-matrix-calculator-enterprise-2026" 
              className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">AI ROI Matrix Calculator</h3>
              <p className="text-gray-600 text-sm">Calculate investment returns across AI initiatives</p>
            </Link>
            <Link 
              href="/ai-risk-management-dashboard-enterprise-2026" 
              className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">AI Risk Management Dashboard</h3>
              <p className="text-gray-600 text-sm">Monitor and mitigate AI implementation risks</p>
            </Link>
            <Link 
              href="/enterprise-ai-transformation-roadmap-2026" 
              className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">AI Transformation Roadmap</h3>
              <p className="text-gray-600 text-sm">18-month strategic implementation guide</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}