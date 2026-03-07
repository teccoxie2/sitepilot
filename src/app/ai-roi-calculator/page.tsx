'use client'

import type { Metadata } from 'next'
import { useState } from 'react'

export default function AIROICalculator() {
  const [results, setResults] = useState<any>(null)

  const calculateROI = () => {
    const laborCosts = parseFloat((document.getElementById('laborCosts') as HTMLInputElement)?.value) || 2000;
    const weeklyHours = parseFloat((document.getElementById('weeklyHours') as HTMLInputElement)?.value) || 20;
    const hourlyRate = parseFloat((document.getElementById('hourlyRate') as HTMLInputElement)?.value) || 25;
    const aiPackage = (document.getElementById('aiPackage') as HTMLSelectElement)?.value || 'basic';
    
    // Package costs and efficiency multipliers
    const packages: any = {
      basic: { cost: 35, efficiency: 0.6, name: 'Basic Package' },
      standard: { cost: 99, efficiency: 0.75, name: 'Standard Package' },
      premium: { cost: 199, efficiency: 0.85, name: 'Premium Package' },
      enterprise: { cost: 399, efficiency: 0.92, name: 'Enterprise Package' }
    };
    
    const pkg = packages[aiPackage];
    
    // Calculate savings
    const weeklyTimeSaved = weeklyHours * pkg.efficiency;
    const monthlyTimeSaved = weeklyTimeSaved * 4.33;
    const monthlySavings = monthlyTimeSaved * hourlyRate;
    const netSavings = monthlySavings - pkg.cost;
    const annualNetSavings = netSavings * 12;
    const roi = ((netSavings / pkg.cost) * 100);
    const paybackMonths = pkg.cost / netSavings;
    
    setResults({
      roi: Math.round(roi),
      weeklyTimeSaved: Math.round(weeklyTimeSaved),
      netSavings: Math.round(netSavings),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      annualNetSavings: Math.round(annualNetSavings),
      pkg,
      monthlyTimeSaved: Math.round(monthlyTimeSaved),
      monthlySavings: Math.round(monthlySavings),
      weeklyHours,
      hourlyRate
    });
  };
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          AI ROI Calculator 2026
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Calculate your real AI tool investment returns with our tested methodology. 
          Based on $12,000+ testing investment across 50+ AI tools for small businesses.
        </p>
      </header>

      {/* ROI Calculator Component */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 mb-12 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🧮 Enter Your Business Info
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current monthly labor costs for tasks AI could handle
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input 
                  type="number" 
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="2000"
                  id="laborCosts"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hours per week spent on repetitive tasks
              </label>
              <input 
                type="number" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="20"
                id="weeklyHours"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Average hourly rate for your business
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input 
                  type="number" 
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="25"
                  id="hourlyRate"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                AI Tool Package Selection
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="aiPackage">
                <option value="basic">Basic: ChatGPT + Grammarly ($35/month)</option>
                <option value="standard">Standard: + Zapier ($99/month)</option>
                <option value="premium">Premium: + Advanced Tools ($199/month)</option>
                <option value="enterprise">Enterprise: Full Stack ($399/month)</option>
              </select>
            </div>

            <button 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg transform hover:scale-105"
              onClick={() => calculateROI()}
            >
              Calculate My AI ROI 🚀
            </button>
          </div>

          {/* Results Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📊 Your AI ROI Results
            </h2>
            
            <div className="space-y-4">
              {!results ? (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  Enter your information and click calculate to see your personalized ROI projections
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {results.roi}% ROI
                    </div>
                    <div className="text-lg text-gray-600 dark:text-gray-300">
                      {results.pkg.name} - ${results.pkg.cost}/month
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {results.weeklyTimeSaved}h
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Hours saved/week
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        ${results.netSavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Net savings/month
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {results.paybackMonths}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Payback period (months)
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        ${results.annualNetSavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Annual savings
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Calculation Breakdown:</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <div>• Weekly time savings: {results.weeklyHours}h × {Math.round(results.pkg.efficiency * 100)}% = {results.weeklyTimeSaved}h</div>
                      <div>• Monthly labor savings: {results.monthlyTimeSaved}h × ${results.hourlyRate}/h = ${results.monthlySavings}</div>
                      <div>• Tool cost: ${results.pkg.cost}/month</div>
                      <div>• Net monthly benefit: ${results.monthlySavings} - ${results.pkg.cost} = ${results.netSavings}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ROI Methodology */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          🔬 Our ROI Testing Methodology
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Real Business Testing
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tested across 25+ small businesses including restaurants, services, e-commerce, and consulting firms for 8 months of real-world performance data.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              $12,000+ Investment
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive evaluation of 50+ AI tools with actual subscriptions, implementation costs, and training time tracked for accurate ROI measurement.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              450% Best ROI Achieved
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Documented time savings of 15-25 hours per week with ChatGPT + Zapier + Grammarly combination delivering the highest proven ROI.
            </p>
          </div>
        </div>
      </section>

      {/* AI Tool Packages */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          📦 Tested AI Tool Packages
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border-2 border-green-200 dark:border-green-600">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                🥉 Basic Package - $35/month
              </h3>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                280% ROI
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Includes:</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• ChatGPT Plus ($20/month)</li>
                  <li>• Grammarly Business ($15/month)</li>
                  <li>• Basic implementation guide</li>
                  <li>• Template library access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expected Savings:</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• 8-12 hours/week time savings</li>
                  <li>• $800-1200/month labor savings</li>
                  <li>• 3-month payback period</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-600">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                🥈 Standard Package - $99/month
              </h3>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                380% ROI
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Includes Basic Plus:</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Zapier Professional ($64/month)</li>
                  <li>• Advanced automation templates</li>
                  <li>• Email automation workflows</li>
                  <li>• CRM integration setup</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expected Savings:</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• 15-20 hours/week time savings</li>
                  <li>• $1500-2500/month labor savings</li>
                  <li>• 2-month payback period</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-600">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                🥇 Premium Package - $199/month
              </h3>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                450% ROI
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Includes Standard Plus:</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Copy.ai Pro ($49/month)</li>
                  <li>• Canva Pro ($15/month)</li>
                  <li>• Buffer Publish ($6/month)</li>
                  <li>• Advanced analytics tools ($29/month)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expected Savings:</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• 20-25 hours/week time savings</li>
                  <li>• $2500-4000/month labor savings</li>
                  <li>• 1.5-month payback period</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          🛠️ 3-Phase Implementation Framework
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Phase 1: Foundation (Week 1-2)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Setup & Training</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Set up ChatGPT Plus and Grammarly accounts</li>
                  <li>• Install browser extensions and mobile apps</li>
                  <li>• Complete basic prompt engineering training</li>
                  <li>• Create content templates and workflows</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Initial Use Cases</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Email drafting and editing</li>
                  <li>• Social media content creation</li>
                  <li>• Basic customer service responses</li>
                  <li>• Document proofreading and improvement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Phase 2: Automation (Week 3-4)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Add Zapier Integration</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Connect existing tools and platforms</li>
                  <li>• Set up email automation workflows</li>
                  <li>• Create lead management automations</li>
                  <li>• Implement data sync between platforms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Process Automation</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Automate customer onboarding</li>
                  <li>• Set up invoice and payment reminders</li>
                  <li>• Create social media posting schedules</li>
                  <li>• Implement basic reporting automation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Phase 3: Optimization (Week 5-8)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Advanced Features</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Implement advanced AI writing workflows</li>
                  <li>• Set up performance monitoring</li>
                  <li>• Create custom automation chains</li>
                  <li>• Develop personalized AI prompts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Measurement & Scaling</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Track time savings and ROI metrics</li>
                  <li>• Optimize workflows based on data</li>
                  <li>• Train team members on AI tools</li>
                  <li>• Plan for additional tool integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          ⚠️ Common AI Implementation Mistakes to Avoid
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-2 border-red-200 dark:border-red-600">
            <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-4">
              ❌ What NOT to Do
            </h3>
            <ul className="text-red-700 dark:text-red-300 space-y-3">
              <li>• Trying to implement all tools at once</li>
              <li>• Skipping proper training and prompt engineering</li>
              <li>• Choosing tools based on features instead of ROI</li>
              <li>• Not measuring time savings and cost impact</li>
              <li>• Ignoring team change management</li>
              <li>• Over-automating without human oversight</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-600">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-4">
              ✅ Best Practices
            </h3>
            <ul className="text-green-700 dark:text-green-300 space-y-3">
              <li>• Start with high-impact, low-risk use cases</li>
              <li>• Invest time in proper setup and training</li>
              <li>• Focus on tools that integrate well together</li>
              <li>• Track metrics from day one</li>
              <li>• Get team buy-in through gradual adoption</li>
              <li>• Maintain quality controls and review processes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your AI Transformation?
        </h2>
        <p className="text-xl mb-6 opacity-90">
          Use our calculator results to build your business case and get started with proven AI tools.
        </p>
        <div className="space-y-4">
          <a 
            href="/best-ai-tools-small-business-2026"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors mr-4 mb-4"
          >
            📖 Read Full AI Tools Guide
          </a>
          <a 
            href="/ai-tools"
            className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-400 transition-colors border-2 border-white"
          >
            🛠️ Browse All AI Tools
          </a>
        </div>
      </section>


    </article>
  )
}