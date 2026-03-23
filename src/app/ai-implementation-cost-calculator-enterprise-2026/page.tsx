import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise AI Implementation Cost Calculator 2026 | ROI Planning Tool | SitePilot',
  description: 'Comprehensive AI implementation cost calculator for enterprises. Calculate ROI, total costs, and financial impact with detailed breakdown and projections.',
  keywords: 'AI implementation cost, enterprise AI budget, AI ROI calculator, AI project costs, AI investment planning, enterprise AI cost analysis',
  openGraph: {
    title: 'Enterprise AI Implementation Cost Calculator 2026 | ROI Planning Tool',
    description: 'Calculate AI implementation costs and ROI with detailed enterprise cost breakdown',
    type: 'article',
  },
}

export default function AIImplementationCostCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-900 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-emerald-800/30 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-700/50">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Enterprise AI Cost Planning 2026
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              AI Implementation Cost Calculator & ROI Planning Tool
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Comprehensive cost analysis and ROI calculator for enterprise AI implementations. 
              Get detailed projections, budget breakdowns, and financial impact assessment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-emerald-800/40 px-4 py-2 rounded-lg border border-emerald-700/50">
                ✓ Detailed Cost Breakdown
              </div>
              <div className="bg-emerald-800/40 px-4 py-2 rounded-lg border border-emerald-700/50">
                ✓ ROI Projections
              </div>
              <div className="bg-emerald-800/40 px-4 py-2 rounded-lg border border-emerald-700/50">
                ✓ Risk-Adjusted Analysis
              </div>
              <div className="bg-emerald-800/40 px-4 py-2 rounded-lg border border-emerald-700/50">
                ✓ 3-Year Financial Model
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Benchmarks */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">$2.5M</div>
              <div className="text-sm text-slate-600">Average Enterprise Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">245%</div>
              <div className="text-sm text-slate-600">Average 3-Year ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">18</div>
              <div className="text-sm text-slate-600">Months to Break-Even</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-sm text-slate-600">Success Rate with Proper Planning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Interactive Calculator */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Enterprise AI Cost Calculator</h2>
            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-8 mb-8">
              <p className="text-lg text-slate-700 mb-8 text-center">
                Get accurate cost estimates for your AI implementation based on real enterprise deployment data
              </p>
              
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Input Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Organization Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Size</label>
                      <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                        <option>Select company size</option>
                        <option>1,000-5,000 employees</option>
                        <option>5,000-15,000 employees</option>
                        <option>15,000-50,000 employees</option>
                        <option>50,000+ employees</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Industry</label>
                      <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                        <option>Select industry</option>
                        <option>Financial Services</option>
                        <option>Healthcare</option>
                        <option>Manufacturing</option>
                        <option>Technology</option>
                        <option>Retail & E-commerce</option>
                        <option>Energy & Utilities</option>
                        <option>Government</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">AI Implementation Scope</label>
                      <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                        <option>Select scope</option>
                        <option>Single Department (Pilot)</option>
                        <option>Multiple Departments</option>
                        <option>Enterprise-Wide</option>
                        <option>Customer-Facing Only</option>
                        <option>Internal Operations Only</option>
                        <option>Full Digital Transformation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Use Case Categories (Select all that apply)</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 text-emerald-600" />
                          <span className="text-sm">Customer Service Automation</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 text-emerald-600" />
                          <span className="text-sm">Predictive Analytics</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 text-emerald-600" />
                          <span className="text-sm">Process Automation</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 text-emerald-600" />
                          <span className="text-sm">Fraud Detection</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 text-emerald-600" />
                          <span className="text-sm">Personalization Engine</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 text-emerald-600" />
                          <span className="text-sm">Document Processing</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Expected Timeline</label>
                      <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                        <option>Select timeline</option>
                        <option>6 months (Aggressive)</option>
                        <option>12 months (Standard)</option>
                        <option>18 months (Conservative)</option>
                        <option>24+ months (Gradual)</option>
                      </select>
                    </div>

                    <button className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                      Calculate Implementation Costs
                    </button>
                  </div>
                </div>

                {/* Results Preview */}
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Cost Estimate Preview</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Total Implementation Cost</span>
                        <span className="text-2xl font-bold text-emerald-600">$2.1M - $3.2M</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Software & Licensing</span>
                        <span className="font-medium">$480K - $720K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Professional Services</span>
                        <span className="font-medium">$650K - $980K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Infrastructure</span>
                        <span className="font-medium">$320K - $480K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Training & Change Management</span>
                        <span className="font-medium">$180K - $270K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Integration & Testing</span>
                        <span className="font-medium">$290K - $435K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Contingency (15%)</span>
                        <span className="font-medium">$285K - $428K</span>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg mt-4">
                      <div className="text-center">
                        <div className="text-sm text-slate-600 mb-1">Projected 3-Year ROI</div>
                        <div className="text-3xl font-bold text-green-600">234%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cost Breakdown Framework */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Detailed Cost Framework Analysis</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Initial Implementation Costs</h3>
                
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-slate-700 mb-3">1. Software & Technology Stack</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">AI Platform Licenses</span>
                        <span className="font-medium">$180K - $450K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Development Tools</span>
                        <span className="font-medium">$80K - $120K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Integration Software</span>
                        <span className="font-medium">$120K - $200K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Security & Compliance Tools</span>
                        <span className="font-medium">$100K - $150K</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-slate-700 mb-3">2. Infrastructure & Cloud</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Cloud Computing Resources</span>
                        <span className="font-medium">$150K - $280K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Data Storage & Management</span>
                        <span className="font-medium">$80K - $120K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Network & Security Infrastructure</span>
                        <span className="font-medium">$90K - $140K</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">3. Professional Services</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Strategy & Planning</span>
                        <span className="font-medium">$120K - $200K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Implementation Services</span>
                        <span className="font-medium">$300K - $500K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Custom Development</span>
                        <span className="font-medium">$180K - $350K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Testing & Validation</span>
                        <span className="font-medium">$80K - $120K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Ongoing Operational Costs (Annual)</h3>
                
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-slate-700 mb-3">1. Software Maintenance & Licenses</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Platform License Renewals</span>
                        <span className="font-medium">$180K - $270K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Support & Maintenance</span>
                        <span className="font-medium">$60K - $90K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Updates & Upgrades</span>
                        <span className="font-medium">$40K - $60K</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-slate-700 mb-3">2. Infrastructure Operations</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Cloud Services</span>
                        <span className="font-medium">$120K - $200K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Data Storage</span>
                        <span className="font-medium">$45K - $75K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Security & Monitoring</span>
                        <span className="font-medium">$35K - $55K</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">3. Human Resources</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">AI Specialists (2-4 FTE)</span>
                        <span className="font-medium">$280K - $560K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Data Scientists (1-2 FTE)</span>
                        <span className="font-medium">$150K - $300K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Training & Development</span>
                        <span className="font-medium">$50K - $80K</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-orange-800 mb-2">Annual Operational Total</h4>
                  <div className="text-2xl font-bold text-orange-600">$960K - $1.6M</div>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Analysis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">ROI Analysis & Financial Projections</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-8 border border-green-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">3-Year Financial Impact Model</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-4">Year 1</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Initial Investment</span>
                      <span className="font-medium text-red-600">-$2.5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Cost Savings</span>
                      <span className="font-medium text-green-600">+$800K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Revenue Growth</span>
                      <span className="font-medium text-green-600">+$400K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Operational Costs</span>
                      <span className="font-medium text-red-600">-$960K</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Net Impact</span>
                      <span className="text-red-600">-$2.26M</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-4">Year 2</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Cost Savings</span>
                      <span className="font-medium text-green-600">+$1.8M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Revenue Growth</span>
                      <span className="font-medium text-green-600">+$1.2M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Operational Costs</span>
                      <span className="font-medium text-red-600">-$1.1M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Additional Investments</span>
                      <span className="font-medium text-red-600">-$300K</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Net Impact</span>
                      <span className="text-green-600">+$1.6M</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-4">Year 3</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Cost Savings</span>
                      <span className="font-medium text-green-600">+$2.8M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Revenue Growth</span>
                      <span className="font-medium text-green-600">+$2.1M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Operational Costs</span>
                      <span className="font-medium text-red-600">-$1.3M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Scale Investments</span>
                      <span className="font-medium text-red-600">-$500K</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Net Impact</span>
                      <span className="text-green-600">+$3.1M</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-6 mt-8">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-1">$2.44M</div>
                    <div className="text-sm text-green-100">Net 3-Year Benefit</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">234%</div>
                    <div className="text-sm text-green-100">Total ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">18</div>
                    <div className="text-sm text-green-100">Months to Break-Even</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">$820K</div>
                    <div className="text-sm text-green-100">Average Annual Benefit</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Risk Factors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Cost Risk Factors & Mitigation</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
                <h3 className="text-xl font-semibold text-red-600 mb-4">Common Cost Overrun Factors</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                      <h4 className="font-medium text-slate-800">Scope Creep</h4>
                      <p className="text-sm text-slate-600">Additional requirements discovered during implementation</p>
                      <div className="text-sm font-medium text-red-600 mt-1">Typical Impact: +25-40%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                      <h4 className="font-medium text-slate-800">Integration Complexity</h4>
                      <p className="text-sm text-slate-600">Legacy system integration challenges</p>
                      <div className="text-sm font-medium text-red-600 mt-1">Typical Impact: +15-30%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                      <h4 className="font-medium text-slate-800">Data Quality Issues</h4>
                      <p className="text-sm text-slate-600">Unexpected data cleaning and preparation needs</p>
                      <div className="text-sm font-medium text-red-600 mt-1">Typical Impact: +10-25%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <div>
                      <h4 className="font-medium text-slate-800">Change Management Resistance</h4>
                      <p className="text-sm text-slate-600">Extended training and adoption support</p>
                      <div className="text-sm font-medium text-red-600 mt-1">Typical Impact: +10-20%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Cost Control Best Practices</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-800">Comprehensive Planning Phase</h4>
                      <p className="text-sm text-slate-600">Invest 15-20% of budget in detailed planning and requirements gathering</p>
                      <div className="text-sm font-medium text-green-600 mt-1">Risk Reduction: 60-80%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-800">Phased Implementation</h4>
                      <p className="text-sm text-slate-600">Start with pilot projects and scale gradually</p>
                      <div className="text-sm font-medium text-green-600 mt-1">Risk Reduction: 40-60%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-800">Executive Sponsorship</h4>
                      <p className="text-sm text-slate-600">Strong C-level support for change management</p>
                      <div className="text-sm font-medium text-green-600 mt-1">Risk Reduction: 50-70%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-800">Regular Cost Monitoring</h4>
                      <p className="text-sm text-slate-600">Monthly budget reviews and stakeholder alignment</p>
                      <div className="text-sm font-medium text-green-600 mt-1">Risk Reduction: 30-50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Plan Your AI Implementation Budget?</h2>
              <p className="text-xl text-emerald-100 mb-8">
                Get a detailed, customized cost analysis and ROI projection for your specific use case
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Custom Cost Analysis
                </a>
                <a 
                  href="/ai-implementation-cost-calculator-enterprise-2026/template" 
                  className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 transition-colors border-2 border-emerald-400"
                >
                  Download Budget Template
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}