import { Metadata } from 'next'
import { 
  BanknotesIcon,
  CalculatorIcon,
  ChartBarIcon,
  ClockIcon,
  CogIcon,
  UsersIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'AI Budget Template for Enterprise 2026 | Complete Financial Planning',
  description: 'Comprehensive AI budget template for enterprise organizations. Includes cost categories, ROI calculations, and financial projections. Based on 500+ enterprise AI implementations.',
  keywords: 'AI budget template, enterprise AI costs, AI investment planning, digital transformation budget, AI ROI calculator, enterprise AI financial planning'
}

const budgetCategories = [
  {
    category: "Technology & Infrastructure",
    percentage: "40-50%",
    color: "bg-blue-50 border-blue-200",
    icon: <CogIcon className="w-6 h-6 text-blue-600" />,
    items: [
      { item: "AI Platform Licenses", range: "$50K - $500K", description: "Core AI tools and platform subscriptions" },
      { item: "Cloud Infrastructure", range: "$30K - $300K", description: "Computing, storage, and networking resources" },
      { item: "Data Infrastructure", range: "$25K - $200K", description: "Data pipelines, warehouses, and processing" },
      { item: "Integration Costs", range: "$20K - $150K", description: "API development and system integration" },
      { item: "Security & Compliance", range: "$15K - $100K", description: "Security tools and compliance frameworks" }
    ]
  },
  {
    category: "Human Resources",
    percentage: "30-40%", 
    color: "bg-green-50 border-green-200",
    icon: <UsersIcon className="w-6 h-6 text-green-600" />,
    items: [
      { item: "AI Talent Acquisition", range: "$100K - $800K", description: "Data scientists, ML engineers, AI specialists" },
      { item: "Training & Development", range: "$20K - $150K", description: "Upskilling existing workforce" },
      { item: "Change Management", range: "$30K - $200K", description: "Consulting and change management support" },
      { item: "External Consultants", range: "$50K - $300K", description: "Specialized AI implementation consultants" }
    ]
  },
  {
    category: "Operations & Maintenance",
    percentage: "15-25%",
    color: "bg-orange-50 border-orange-200", 
    icon: <BuildingOfficeIcon className="w-6 h-6 text-orange-600" />,
    items: [
      { item: "Ongoing Support", range: "$25K - $200K", description: "Technical support and maintenance" },
      { item: "Monitoring & Analytics", range: "$15K - $100K", description: "Performance monitoring and reporting tools" },
      { item: "Continuous Improvement", range: "$20K - $150K", description: "Model optimization and enhancement" },
      { item: "Vendor Management", range: "$10K - $50K", description: "Vendor relationship and contract management" }
    ]
  },
  {
    category: "Risk & Contingency", 
    percentage: "10-15%",
    color: "bg-red-50 border-red-200",
    icon: <ShieldCheckIcon className="w-6 h-6 text-red-600" />,
    items: [
      { item: "Implementation Overruns", range: "10-20% of total", description: "Buffer for unexpected costs" },
      { item: "Technology Pivot", range: "5-10% of total", description: "Contingency for technology changes" },
      { item: "Compliance Changes", range: "$10K - $100K", description: "Regulatory and compliance adaptations" }
    ]
  }
]

const budgetByCompanySize = [
  {
    size: "Small Enterprise",
    employees: "500-1,000",
    totalBudget: "$500K - $2M",
    breakdown: [
      { category: "Technology", amount: "$200K - $900K", percentage: "40-45%" },
      { category: "Human Resources", amount: "$150K - $700K", percentage: "30-35%" },
      { category: "Operations", amount: "$100K - $400K", percentage: "20-25%" },
      { category: "Risk Buffer", amount: "$50K - $200K", percentage: "10%" }
    ]
  },
  {
    size: "Medium Enterprise", 
    employees: "1,000-5,000",
    totalBudget: "$2M - $10M",
    breakdown: [
      { category: "Technology", amount: "$800K - $4.5M", percentage: "40-45%" },
      { category: "Human Resources", amount: "$600K - $3.5M", percentage: "30-35%" },
      { category: "Operations", amount: "$400K - $2M", percentage: "20-25%" },
      { category: "Risk Buffer", amount: "$200K - $1M", percentage: "10%" }
    ]
  },
  {
    size: "Large Enterprise",
    employees: "5,000+", 
    totalBudget: "$10M - $50M+",
    breakdown: [
      { category: "Technology", amount: "$4M - $22.5M", percentage: "40-45%" },
      { category: "Human Resources", amount: "$3M - $17.5M", percentage: "30-35%" }, 
      { category: "Operations", amount: "$2M - $12.5M", percentage: "20-25%" },
      { category: "Risk Buffer", amount: "$1M - $5M", percentage: "10%" }
    ]
  }
]

const phasedInvestment = [
  {
    phase: "Year 1: Foundation",
    percentage: "50-60%",
    description: "Infrastructure setup, initial tools, team building",
    activities: ["Platform setup", "Core team hiring", "Initial training", "Pilot projects"]
  },
  {
    phase: "Year 2: Expansion", 
    percentage: "25-35%",
    description: "Scale deployment, advanced tools, additional use cases",
    activities: ["Scaled deployment", "Advanced features", "Department expansion", "Process optimization"]
  },
  {
    phase: "Year 3+: Optimization",
    percentage: "15-25%", 
    description: "Continuous improvement, innovation, emerging technologies",
    activities: ["Innovation projects", "Emerging tech", "Continuous optimization", "Strategic expansion"]
  }
]

const roiCalculator = {
  benefits: [
    { category: "Productivity Gains", calculation: "25-40% improvement × employee costs", example: "$500K annual savings for 100 employees" },
    { category: "Cost Reduction", calculation: "15-30% operational cost savings", example: "$300K annual savings in operations" },
    { category: "Revenue Growth", calculation: "5-15% revenue increase", example: "$1M additional revenue annually" },
    { category: "Risk Mitigation", calculation: "Avoided costs from errors/delays", example: "$200K in avoided compliance costs" }
  ],
  timeline: [
    { period: "Month 1-6", roi: "Negative ROI", description: "Investment phase with minimal returns" },
    { period: "Month 7-12", roi: "0-50% ROI", description: "Initial productivity gains emerge" },
    { period: "Month 13-24", roi: "100-200% ROI", description: "Significant productivity and cost savings" },
    { period: "Month 25+", roi: "200-400% ROI", description: "Optimized operations and innovation benefits" }
  ]
}

const budgetTemplate = [
  {
    category: "TECHNOLOGY INFRASTRUCTURE",
    items: [
      { line: "AI Platform Licenses", q1: "$50,000", q2: "$25,000", q3: "$25,000", q4: "$25,000", annual: "$125,000" },
      { line: "Cloud Computing (AWS/Azure/GCP)", q1: "$30,000", q2: "$40,000", q3: "$45,000", q4: "$50,000", annual: "$165,000" },
      { line: "Data Infrastructure & Storage", q1: "$25,000", q2: "$15,000", q3: "$15,000", q4: "$15,000", annual: "$70,000" },
      { line: "Integration & API Development", q1: "$40,000", q2: "$20,000", q3: "$10,000", q4: "$5,000", annual: "$75,000" },
      { line: "Security & Compliance Tools", q1: "$20,000", q2: "$5,000", q3: "$5,000", q4: "$5,000", annual: "$35,000" }
    ],
    subtotal: { q1: "$165,000", q2: "$105,000", q3: "$100,000", q4: "$100,000", annual: "$470,000" }
  },
  {
    category: "HUMAN RESOURCES",
    items: [
      { line: "AI Team Salaries & Benefits", q1: "$150,000", q2: "$150,000", q3: "$150,000", q4: "$150,000", annual: "$600,000" },
      { line: "Training & Skill Development", q1: "$25,000", q2: "$15,000", q3: "$10,000", q4: "$10,000", annual: "$60,000" },
      { line: "External Consultants", q1: "$50,000", q2: "$30,000", q3: "$20,000", q4: "$10,000", annual: "$110,000" },
      { line: "Change Management Support", q1: "$30,000", q2: "$20,000", q3: "$15,000", q4: "$10,000", annual: "$75,000" }
    ],
    subtotal: { q1: "$255,000", q2: "$215,000", q3: "$195,000", q4: "$180,000", annual: "$845,000" }
  },
  {
    category: "OPERATIONS & MAINTENANCE", 
    items: [
      { line: "Ongoing Support & Maintenance", q1: "$15,000", q2: "$25,000", q3: "$30,000", q4: "$35,000", annual: "$105,000" },
      { line: "Monitoring & Analytics", q1: "$10,000", q2: "$15,000", q3: "$15,000", q4: "$15,000", annual: "$55,000" },
      { line: "Performance Optimization", q1: "$5,000", q2: "$15,000", q3: "$20,000", q4: "$25,000", annual: "$65,000" }
    ],
    subtotal: { q1: "$30,000", q2: "$55,000", q3: "$65,000", q4: "$75,000", annual: "$225,000" }
  }
]

export default function AIBudgetTemplatePage() {
  const grandTotal = {
    q1: "$450,000",
    q2: "$375,000", 
    q3: "$360,000",
    q4: "$355,000",
    annual: "$1,540,000"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise AI Budget Template 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Complete financial planning framework for AI implementation
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">✓ CFO-Approved Framework</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">✓ ROI Calculator</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">✓ 3-Year Projections</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Executive Summary */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BanknotesIcon className="w-6 h-6 mr-2 text-green-600" />
            Investment Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">$500K - $50M</div>
              <div className="text-gray-600 text-sm">Total Investment Range</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">12-24</div>
              <div className="text-gray-600 text-sm">Months to Positive ROI</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">200-400%</div>
              <div className="text-gray-600 text-sm">3-Year ROI Target</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">40-50%</div>
              <div className="text-gray-600 text-sm">Technology Allocation</div>
            </div>
          </div>
        </div>

        {/* Budget Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Budget Categories</h2>
          <div className="space-y-6">
            {budgetCategories.map((category, index) => (
              <div key={index} className={`border rounded-lg p-6 ${category.color}`}>
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-2">{category.category}</h3>
                  <span className="ml-auto bg-white px-3 py-1 rounded-full text-sm font-semibold">
                    {category.percentage}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white p-4 rounded-lg">
                      <div className="font-semibold mb-1">{item.item}</div>
                      <div className="text-lg font-bold text-green-600 mb-2">{item.range}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget by Company Size */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BuildingOfficeIcon className="w-6 h-6 mr-2 text-blue-600" />
            Budget by Company Size
          </h2>
          <div className="space-y-6">
            {budgetByCompanySize.map((size, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{size.size}</h3>
                    <p className="text-gray-600">{size.employees} employees</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{size.totalBudget}</div>
                    <div className="text-sm text-gray-500">Total Annual Budget</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {size.breakdown.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-center p-3 bg-gray-50 rounded">
                      <div className="font-semibold text-sm mb-1">{item.category}</div>
                      <div className="text-lg font-bold">{item.amount}</div>
                      <div className="text-xs text-gray-500">{item.percentage}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Budget Template */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <CalculatorIcon className="w-6 h-6 mr-2 text-blue-600" />
            Sample Annual Budget Template
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Category / Line Item</th>
                  <th className="text-center p-3 font-semibold">Q1</th>
                  <th className="text-center p-3 font-semibold">Q2</th>
                  <th className="text-center p-3 font-semibold">Q3</th>
                  <th className="text-center p-3 font-semibold">Q4</th>
                  <th className="text-center p-3 font-semibold bg-blue-50">Annual Total</th>
                </tr>
              </thead>
              <tbody>
                {budgetTemplate.map((section, sectionIndex) => (
                  <React.Fragment key={sectionIndex}>
                    <tr>
                      <td colSpan={6} className="p-3 bg-gray-50 font-bold text-gray-700 uppercase text-xs tracking-wide border-t">
                        {section.category}
                      </td>
                    </tr>
                    {section.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="border-b border-gray-100">
                        <td className="p-3 font-medium">{item.line}</td>
                        <td className="p-3 text-center">{item.q1}</td>
                        <td className="p-3 text-center">{item.q2}</td>
                        <td className="p-3 text-center">{item.q3}</td>
                        <td className="p-3 text-center">{item.q4}</td>
                        <td className="p-3 text-center font-bold bg-blue-50">{item.annual}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <td className="p-3 font-bold">Subtotal</td>
                      <td className="p-3 text-center font-bold">{section.subtotal.q1}</td>
                      <td className="p-3 text-center font-bold">{section.subtotal.q2}</td>
                      <td className="p-3 text-center font-bold">{section.subtotal.q3}</td>
                      <td className="p-3 text-center font-bold">{section.subtotal.q4}</td>
                      <td className="p-3 text-center font-bold bg-blue-100">{section.subtotal.annual}</td>
                    </tr>
                  </React.Fragment>
                ))}
                <tr className="bg-gray-900 text-white">
                  <td className="p-3 font-bold text-lg">GRAND TOTAL</td>
                  <td className="p-3 text-center font-bold text-lg">{grandTotal.q1}</td>
                  <td className="p-3 text-center font-bold text-lg">{grandTotal.q2}</td>
                  <td className="p-3 text-center font-bold text-lg">{grandTotal.q3}</td>
                  <td className="p-3 text-center font-bold text-lg">{grandTotal.q4}</td>
                  <td className="p-3 text-center font-bold text-xl bg-green-600">{grandTotal.annual}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ChartBarIcon className="w-6 h-6 mr-2 text-green-600" />
            ROI Calculation Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Expected Benefits</h3>
              <div className="space-y-4">
                {roiCalculator.benefits.map((benefit, index) => (
                  <div key={index} className="border border-gray-200 p-4 rounded">
                    <div className="font-semibold mb-2">{benefit.category}</div>
                    <div className="text-sm text-gray-600 mb-2">{benefit.calculation}</div>
                    <div className="text-sm font-medium text-green-600">{benefit.example}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">ROI Timeline</h3>
              <div className="space-y-4">
                {roiCalculator.timeline.map((period, index) => (
                  <div key={index} className="border border-gray-200 p-4 rounded">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold">{period.period}</div>
                      <div className="font-bold text-green-600">{period.roi}</div>
                    </div>
                    <div className="text-sm text-gray-600">{period.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phased Investment */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ClockIcon className="w-6 h-6 mr-2 text-orange-600" />
            Phased Investment Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phasedInvestment.map((phase, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{phase.phase}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">{phase.percentage}</div>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <ul className="space-y-1">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="text-sm text-gray-700">• {activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="w-6 h-6 text-amber-600 mr-3 mt-1" />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">Budget Planning Considerations</h3>
              <ul className="text-amber-700 space-y-1 text-sm">
                <li>• Add 15-25% contingency for unexpected costs and scope changes</li>
                <li>• Factor in opportunity costs during transition periods</li>
                <li>• Consider phased rollout to spread costs and reduce risk</li>
                <li>• Include change management and training costs often underestimated</li>
                <li>• Plan for ongoing optimization and maintenance costs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Download Complete Budget Template</h2>
          <p className="text-gray-300 mb-6">Get the detailed Excel template with formulas, scenarios, and ROI calculator</p>
          <div className="space-y-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors mr-4">
              Download Excel Template
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Custom Budget Analysis
            </button>
            <p className="text-sm text-gray-400">Includes 3-year projections and sensitivity analysis</p>
          </div>
        </div>

      </div>
    </div>
  )
}

// Add React import
import React from 'react'