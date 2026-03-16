import { useState, useEffect } from 'react'

interface RiskProfile {
  category: string
  riskLevel: number
  impact: number
  probability: number
  mitigationCost: number
  timeframe: string
}

interface ComplianceRequirement {
  framework: string
  criticality: 'low' | 'medium' | 'high' | 'critical'
  implementationCost: number
  timeToImplement: number
}

interface RiskAssessment {
  overallRiskScore: number
  totalMitigationCost: number
  criticalRisks: number
  highRisks: number
  mediumRisks: number
  lowRisks: number
  complianceGap: number
  recommendedActions: string[]
  budgetAllocation: {
    immediate: number
    shortTerm: number
    longTerm: number
  }
  expectedROI: number
}

const riskCategories = [
  'Data Privacy & Security',
  'Algorithmic Bias',
  'Regulatory Compliance',
  'Operational Risk',
  'Reputation Risk',
  'Third-party Vendor Risk',
  'Technology Infrastructure',
  'Human Resource Risk'
]

const complianceFrameworks = [
  { name: 'GDPR', criticality: 'critical' as const, baseCost: 150000, baseTime: 12 },
  { name: 'CCPA', criticality: 'high' as const, baseCost: 75000, baseTime: 8 },
  { name: 'SOX', criticality: 'high' as const, baseCost: 200000, baseTime: 18 },
  { name: 'HIPAA', criticality: 'critical' as const, baseCost: 100000, baseTime: 10 },
  { name: 'ISO 27001', criticality: 'medium' as const, baseCost: 80000, baseTime: 12 },
  { name: 'NIST Framework', criticality: 'high' as const, baseCost: 120000, baseTime: 15 }
]

export default function AIRiskManagementFramework() {
  const [companySize, setCompanySize] = useState<string>('')
  const [industry, setIndustry] = useState<string>('')
  const [aiMaturity, setAiMaturity] = useState<number>(3)
  const [currentBudget, setCurrentBudget] = useState<string>('')
  const [dataVolume, setDataVolume] = useState<string>('')
  const [regulatoryEnv, setRegulatoryEnv] = useState<string>('')
  
  const [riskProfiles, setRiskProfiles] = useState<RiskProfile[]>([])
  const [complianceReqs, setComplianceReqs] = useState<ComplianceRequirement[]>([])
  const [assessment, setAssessment] = useState<RiskAssessment | null>(null)
  const [currentStep, setCurrentStep] = useState<number>(1)

  // Initialize risk profiles
  useEffect(() => {
    const initialRisks = riskCategories.map(category => ({
      category,
      riskLevel: 5,
      impact: 5,
      probability: 5,
      mitigationCost: 50000,
      timeframe: '6-12 months'
    }))
    setRiskProfiles(initialRisks)

    const initialCompliance = complianceFrameworks.map(framework => ({
      framework: framework.name,
      criticality: framework.criticality,
      implementationCost: framework.baseCost,
      timeToImplement: framework.baseTime
    }))
    setComplianceReqs(initialCompliance)
  }, [])

  const updateRiskProfile = (index: number, field: keyof RiskProfile, value: any) => {
    const updated = [...riskProfiles]
    updated[index] = { ...updated[index], [field]: value }
    setRiskProfiles(updated)
  }

  const calculateRiskScore = (risk: RiskProfile): number => {
    return (risk.riskLevel * risk.impact * risk.probability) / 25
  }

  const generateAssessment = (): void => {
    if (!companySize || !industry || !currentBudget) return

    const totalRisks = riskProfiles.length
    const riskScores = riskProfiles.map(calculateRiskScore)
    const overallRiskScore = riskScores.reduce((a, b) => a + b, 0) / totalRisks

    // Risk categorization
    const criticalRisks = riskScores.filter(score => score >= 8).length
    const highRisks = riskScores.filter(score => score >= 6 && score < 8).length
    const mediumRisks = riskScores.filter(score => score >= 4 && score < 6).length
    const lowRisks = riskScores.filter(score => score < 4).length

    // Calculate total mitigation cost
    const totalMitigationCost = riskProfiles.reduce((sum, risk) => sum + risk.mitigationCost, 0)
    const complianceCost = complianceReqs.reduce((sum, req) => sum + req.implementationCost, 0)
    const totalCost = totalMitigationCost + complianceCost

    // Budget allocation
    const budget = parseInt(currentBudget.replace(/[^0-9]/g, ''))
    const immediate = Math.min(budget * 0.4, criticalRisks * 75000)
    const shortTerm = Math.min(budget * 0.35, highRisks * 50000)
    const longTerm = Math.min(budget * 0.25, (mediumRisks + lowRisks) * 25000)

    // Generate recommendations
    const recommendations: string[] = []
    
    if (criticalRisks > 0) {
      recommendations.push(`Address ${criticalRisks} critical risks immediately - allocate $${immediate.toLocaleString()} for emergency mitigation`)
    }
    if (highRisks > 2) {
      recommendations.push('Implement comprehensive risk monitoring dashboard for high-priority threats')
    }
    if (overallRiskScore > 6) {
      recommendations.push('Establish dedicated AI Ethics Committee and Risk Management Office')
    }
    if (aiMaturity < 5) {
      recommendations.push('Invest in AI governance training for leadership team - budget $50K for executive education')
    }
    if (industry === 'Healthcare' || industry === 'Financial Services') {
      recommendations.push('Prioritize regulatory compliance - consider external compliance consulting engagement')
    }

    // Compliance gap analysis
    const criticalCompliance = complianceReqs.filter(req => req.criticality === 'critical').length
    const complianceGap = criticalCompliance > 0 ? (criticalCompliance / complianceReqs.length) * 100 : 0

    // Expected ROI calculation
    const riskReduction = Math.max(0, (10 - overallRiskScore) / 10)
    const expectedROI = (riskReduction * budget * 0.3) - (totalCost * 0.8)

    setAssessment({
      overallRiskScore,
      totalMitigationCost: totalCost,
      criticalRisks,
      highRisks,
      mediumRisks,
      lowRisks,
      complianceGap,
      recommendedActions: recommendations,
      budgetAllocation: { immediate, shortTerm, longTerm },
      expectedROI
    })
  }

  const getRiskColor = (score: number): string => {
    if (score >= 8) return 'bg-red-100 text-red-800 border-red-200'
    if (score >= 6) return 'bg-orange-100 text-orange-800 border-orange-200'
    if (score >= 4) return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    return 'bg-green-100 text-green-800 border-green-200'
  }

  const getRiskLevel = (score: number): string => {
    if (score >= 8) return 'CRITICAL'
    if (score >= 6) return 'HIGH'
    if (score >= 4) return 'MEDIUM'
    return 'LOW'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-5xl">🛡️</span>
              <h1 className="text-4xl font-bold text-gray-900">
                Enterprise AI Risk Management Framework
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive risk assessment and mitigation planning for AI implementations. 
              Identify, quantify, and manage AI-related risks across your organization.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                ⚠️ Risk Assessment
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                🎯 Compliance Planning
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                💰 Budget Optimization
              </span>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="flex items-center space-x-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                      step <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                    }`}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={`w-16 h-1 mx-2 ${
                        step < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <div className="grid grid-cols-4 gap-8 text-sm text-center">
                <span>Company Profile</span>
                <span>Risk Assessment</span>
                <span>Compliance Review</span>
                <span>Framework Results</span>
              </div>
            </div>
          </div>

          {/* Step 1: Company Profile */}
          {currentStep === 1 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  🎯 Company Profile & AI Maturity
                </h2>
              </div>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                    <select 
                      value={companySize} 
                      onChange={(e) => setCompanySize(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select company size</option>
                      <option value="startup">Startup (1-50 employees)</option>
                      <option value="small">Small (51-200 employees)</option>
                      <option value="medium">Medium (201-1000 employees)</option>
                      <option value="large">Large (1001-5000 employees)</option>
                      <option value="enterprise">Enterprise (5000+ employees)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <select 
                      value={industry} 
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select industry</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Financial Services">Financial Services</option>
                      <option value="Technology">Technology</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Retail">Retail & E-commerce</option>
                      <option value="Government">Government</option>
                      <option value="Education">Education</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Risk Management Budget</label>
                    <select 
                      value={currentBudget} 
                      onChange={(e) => setCurrentBudget(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="50000">$50K - $100K</option>
                      <option value="200000">$100K - $500K</option>
                      <option value="750000">$500K - $1M</option>
                      <option value="2000000">$1M - $5M</option>
                      <option value="10000000">$5M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Data Volume & Sensitivity</label>
                    <select 
                      value={dataVolume} 
                      onChange={(e) => setDataVolume(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select data characteristics</option>
                      <option value="low">Low volume, non-sensitive</option>
                      <option value="medium">Medium volume, some PII</option>
                      <option value="high">High volume, extensive PII</option>
                      <option value="critical">Critical data, regulated industry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">AI Maturity Level (1 = Basic, 10 = Advanced)</label>
                  <div className="mt-2">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={aiMaturity}
                      onChange={(e) => setAiMaturity(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>Basic (1)</span>
                      <span className="font-medium">Current: {aiMaturity}</span>
                      <span>Advanced (10)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Regulatory Environment</label>
                  <select 
                    value={regulatoryEnv} 
                    onChange={(e) => setRegulatoryEnv(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select regulatory complexity</option>
                    <option value="minimal">Minimal regulation</option>
                    <option value="moderate">Moderate oversight</option>
                    <option value="high">High regulatory burden</option>
                    <option value="critical">Critical/heavily regulated</option>
                  </select>
                </div>

                <div className="flex justify-end">
                  <button 
                    onClick={() => setCurrentStep(2)}
                    disabled={!companySize || !industry || !currentBudget}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
                  >
                    Continue to Risk Assessment
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Risk Assessment */}
          {currentStep === 2 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  ⚠️ Risk Category Assessment
                </h2>
              </div>
              <div className="space-y-6">
                {riskProfiles.map((risk, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-lg">{risk.category}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(calculateRiskScore(risk))}`}>
                        {getRiskLevel(calculateRiskScore(risk))} ({calculateRiskScore(risk).toFixed(1)})
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Risk Level (1-10)</label>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={risk.riskLevel}
                          onChange={(e) => updateRiskProfile(index, 'riskLevel', parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-sm text-gray-600">Current: {risk.riskLevel}</span>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Impact (1-10)</label>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={risk.impact}
                          onChange={(e) => updateRiskProfile(index, 'impact', parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-sm text-gray-600">Current: {risk.impact}</span>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Probability (1-10)</label>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={risk.probability}
                          onChange={(e) => updateRiskProfile(index, 'probability', parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-sm text-gray-600">Current: {risk.probability}</span>
                      </div>
                    </div>

                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Mitigation Cost ($)</label>
                        <input
                          type="number"
                          value={risk.mitigationCost}
                          onChange={(e) => updateRiskProfile(index, 'mitigationCost', parseInt(e.target.value) || 0)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Implementation Timeframe</label>
                        <select 
                          value={risk.timeframe} 
                          onChange={(e) => updateRiskProfile(index, 'timeframe', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="0-3 months">0-3 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="6-12 months">6-12 months</option>
                          <option value="12+ months">12+ months</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <button 
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Continue to Compliance
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Compliance Review */}
          {currentStep === 3 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  ✅ Compliance Framework Review
                </h2>
              </div>
              <div className="space-y-4">
                {complianceReqs.map((req, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold">{req.framework}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        req.criticality === 'critical' ? 'bg-red-100 text-red-800' :
                        req.criticality === 'high' ? 'bg-orange-100 text-orange-800' :
                        req.criticality === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {req.criticality.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Implementation Cost ($)</label>
                        <input
                          type="number"
                          value={req.implementationCost}
                          onChange={(e) => {
                            const updated = [...complianceReqs]
                            updated[index].implementationCost = parseInt(e.target.value) || 0
                            setComplianceReqs(updated)
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time to Implement (months)</label>
                        <input
                          type="number"
                          value={req.timeToImplement}
                          onChange={(e) => {
                            const updated = [...complianceReqs]
                            updated[index].timeToImplement = parseInt(e.target.value) || 0
                            setComplianceReqs(updated)
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <button 
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => {
                    generateAssessment()
                    setCurrentStep(4)
                  }}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Generate Risk Framework
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {currentStep === 4 && assessment && (
            <div className="space-y-6">
              
              {/* Risk Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  📊 Risk Assessment Overview
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="text-2xl font-bold text-red-600">{assessment.criticalRisks}</div>
                    <div className="text-sm text-gray-600">Critical Risks</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="text-2xl font-bold text-orange-600">{assessment.highRisks}</div>
                    <div className="text-sm text-gray-600">High Risks</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="text-2xl font-bold text-yellow-600">{assessment.mediumRisks}</div>
                    <div className="text-sm text-gray-600">Medium Risks</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">{assessment.lowRisks}</div>
                    <div className="text-sm text-gray-600">Low Risks</div>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-xl font-bold text-blue-600">
                      {assessment.overallRiskScore.toFixed(1)}/10
                    </div>
                    <div className="text-sm text-gray-600">Overall Risk Score</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-xl font-bold text-purple-600">
                      ${assessment.totalMitigationCost.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Total Investment</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-xl font-bold text-green-600">
                      ${assessment.expectedROI.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Expected ROI</div>
                  </div>
                </div>
              </div>

              {/* Budget Allocation */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  💰 Recommended Budget Allocation
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg border-red-200 bg-red-50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-600">⚠️</span>
                      <span className="font-semibold">Immediate (0-3 months)</span>
                    </div>
                    <div className="text-2xl font-bold text-red-600">
                      ${assessment.budgetAllocation.immediate.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Critical risk mitigation</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg border-orange-200 bg-orange-50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-orange-600">🕒</span>
                      <span className="font-semibold">Short-term (3-12 months)</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">
                      ${assessment.budgetAllocation.shortTerm.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">High priority risks</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg border-blue-200 bg-blue-50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-blue-600">🎯</span>
                      <span className="font-semibold">Long-term (1-2 years)</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      ${assessment.budgetAllocation.longTerm.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Strategic improvements</p>
                  </div>
                </div>
              </div>

              {/* Action Plan */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  ✅ Recommended Action Plan
                </h2>
                <div className="space-y-3">
                  {assessment.recommendedActions.map((action, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-green-600 mt-0.5">✅</span>
                      <span className="text-gray-800">{action}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Compliance Gap Analysis</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-blue-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${100 - assessment.complianceGap}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-blue-900">
                      {(100 - assessment.complianceGap).toFixed(0)}% Compliant
                    </span>
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <div className="flex justify-center">
                <button 
                  onClick={() => {
                    setCurrentStep(1)
                    setAssessment(null)
                  }}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Start New Assessment
                </button>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  )
}