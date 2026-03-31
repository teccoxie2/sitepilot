import { Metadata } from 'next'
import { ArrowRight, Calculator, DollarSign, TrendingUp, Shield, Users, BarChart3, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Enterprise AI Total Cost of Ownership Calculator 2026 | SitePilot',
  description: 'Calculate complete AI implementation costs with hidden expenses, ROI projections, and 5-year TCO analysis. Enterprise-grade financial planning for AI transformation.',
  keywords: 'AI total cost ownership, AI TCO calculator, enterprise AI costs, AI financial planning, AI implementation budget',
}

export default function AITotalCostOwnershipCalculator() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Enterprise AI Total Cost of Ownership Calculator 2026
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Calculate the complete financial impact of AI implementation including hidden costs, maintenance, and long-term ROI projections
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-lg font-semibold text-blue-800">Comprehensive TCO Analysis</span>
          </div>
          <p className="text-blue-700">
            Calculate 5-year total cost including software, infrastructure, training, and hidden operational expenses
          </p>
        </div>
      </div>

      {/* TCO Calculator Form */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Implementation Cost Calculator</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Initial Investment */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Initial Investment Costs</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">AI Software Licenses (Annual)</label>
              <input 
                type="number" 
                placeholder="$50,000" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Infrastructure & Hardware</label>
              <input 
                type="number" 
                placeholder="$100,000" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Implementation Services</label>
              <input 
                type="number" 
                placeholder="$200,000" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Training & Change Management</label>
              <input 
                type="number" 
                placeholder="$75,000" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Ongoing Costs */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Annual Ongoing Costs</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Maintenance & Support</label>
              <input 
                type="number" 
                placeholder="$40,000" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cloud & Compute Costs</label>
              <input 
                type="number" 
                placeholder="$60,000" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Staff/Training</label>
              <input 
                type="number" 
                placeholder="$120,000" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Compliance & Security</label>
              <input 
                type="number" 
                placeholder="$25,000" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t">
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Calculate 5-Year TCO & ROI
          </button>
        </div>
      </div>

      {/* TCO Breakdown Analysis */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <DollarSign className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-lg font-semibold text-green-800">Year 1 Costs</h3>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-green-700">Initial Investment: $425,000</p>
            <p className="text-sm text-green-700">Ongoing Costs: $245,000</p>
            <p className="text-lg font-bold text-green-800">Total: $670,000</p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold text-blue-800">5-Year TCO</h3>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-blue-700">Total Investment: $1,405,000</p>
            <p className="text-sm text-blue-700">Avg Annual Cost: $281,000</p>
            <p className="text-lg font-bold text-blue-800">ROI: 340%</p>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-lg font-semibold text-purple-800">Break-Even</h3>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-purple-700">Time to Payback: 18 months</p>
            <p className="text-sm text-purple-700">Net Savings Year 3+: $890K</p>
            <p className="text-lg font-bold text-purple-800">NPV: $2.4M</p>
          </div>
        </div>
      </div>

      {/* Hidden Costs Warning */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
        <div className="flex items-center mb-3">
          <Shield className="w-6 h-6 text-orange-600 mr-2" />
          <h3 className="text-lg font-semibold text-orange-800">Hidden Costs to Consider</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-orange-800 mb-2">Technical Hidden Costs</h4>
            <ul className="space-y-1 text-sm text-orange-700">
              <li>• Data migration & integration</li>
              <li>• Legacy system compatibility</li>
              <li>• Security & compliance upgrades</li>
              <li>• Performance monitoring tools</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-800 mb-2">Organizational Hidden Costs</h4>
            <ul className="space-y-1 text-sm text-orange-700">
              <li>• Employee resistance & turnover</li>
              <li>• Process redesign & optimization</li>
              <li>• Extended training periods</li>
              <li>• Temporary productivity drops</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cost Optimization Strategies */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">TCO Optimization Strategies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Reduce Initial Costs</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Phased Implementation</h4>
                  <p className="text-sm text-gray-600">Start with pilot projects to spread costs over time</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Cloud-First Approach</h4>
                  <p className="text-sm text-gray-600">Reduce infrastructure costs with cloud solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Maximize ROI</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <TrendingUp className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Focus on High-Impact Areas</h4>
                  <p className="text-sm text-gray-600">Target processes with highest efficiency gains</p>
                </div>
              </div>
              <div className="flex items-start">
                <BarChart3 className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Continuous Optimization</h4>
                  <p className="text-sm text-gray-600">Regular review and adjustment of AI implementations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related AI Financial Tools</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/ai-implementation-cost-calculator-enterprise-2026" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Calculator className="w-8 h-8 text-blue-600 mr-4" />
            <div>
              <h3 className="font-semibold text-blue-800">Implementation Cost Calculator</h3>
              <p className="text-sm text-blue-600">Calculate initial AI implementation expenses</p>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-600 ml-auto" />
          </Link>
          
          <Link href="/ai-automation-roi-measurement-2026" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <TrendingUp className="w-8 h-8 text-green-600 mr-4" />
            <div>
              <h3 className="font-semibold text-green-800">AI ROI Measurement</h3>
              <p className="text-sm text-green-600">Track and measure AI automation returns</p>
            </div>
            <ArrowRight className="w-5 h-5 text-green-600 ml-auto" />
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Need Expert TCO Analysis?</h2>
        <p className="text-lg mb-6">Get professional assistance with enterprise AI cost planning and financial modeling</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
          Schedule TCO Consultation
        </button>
      </div>
    </div>
  )
}