'use client'

import React, { useState, useEffect } from 'react'
import Head from 'next/head'

// Define types
type RiskDimension = {
  name: string
  weight: number
  description: string
  criteria: string[]
}

type VendorData = {
  name: string
  category: string
  businessCriticality: string
  dimensions: { [key: string]: number }
}

type RiskAssessment = {
  overallScore: number
  riskLevel: string
  recommendations: string[]
  criticalFindings: string[]
  complianceStatus: string
}

const AIVendorRiskEvaluationTool2026: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [vendorData, setVendorData] = useState<VendorData>({
    name: '',
    category: '',
    businessCriticality: '',
    dimensions: {}
  })
  const [assessment, setAssessment] = useState<RiskAssessment | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  // Risk dimensions with weights based on enterprise requirements
  const riskDimensions: RiskDimension[] = [
    {
      name: 'Technical Architecture & Performance',
      weight: 15,
      description: 'Model accuracy, scalability, integration complexity, API stability',
      criteria: ['Model accuracy >95%', 'API response time <200ms', 'Enterprise integration capabilities', 'Scalability under load']
    },
    {
      name: 'Security & Data Protection',
      weight: 20,
      description: 'Cybersecurity posture, data handling, access controls, incident response',
      criteria: ['SOC 2 Type II certification', 'AES-256 encryption', 'Multi-factor authentication', '24/7 security monitoring']
    },
    {
      name: 'Regulatory & Legal Compliance',
      weight: 18,
      description: 'GDPR, CCPA compliance, industry regulations, AI ethics, legal frameworks',
      criteria: ['GDPR Article 22 compliance', 'Industry-specific certifications', 'AI bias prevention measures', 'Legal liability framework']
    },
    {
      name: 'Financial Stability & Pricing',
      weight: 12,
      description: 'Vendor financial health, pricing transparency, contract terms, TCO analysis',
      criteria: ['Revenue growth >20% YoY', 'Transparent pricing model', 'Favorable contract terms', 'Predictable TCO']
    },
    {
      name: 'Operational Excellence',
      weight: 10,
      description: 'Service availability, customer support, change management, disaster recovery',
      criteria: ['99.9% uptime SLA', 'Enterprise support tier', 'Change management process', 'Business continuity plan']
    },
    {
      name: 'Innovation & Roadmap',
      weight: 8,
      description: 'Product development, technology roadmap, R&D investment, market position',
      criteria: ['Active R&D investment', 'Clear product roadmap', 'Technology leadership', 'Market differentiation']
    },
    {
      name: 'Governance & Transparency',
      weight: 10,
      description: 'Algorithmic transparency, audit trails, governance structure, stakeholder communication',
      criteria: ['Algorithm explainability', 'Comprehensive audit logs', 'Strong governance structure', 'Regular reporting']
    },
    {
      name: 'Strategic Partnership Potential',
      weight: 7,
      description: 'Cultural alignment, integration capabilities, partnership viability, knowledge transfer',
      criteria: ['Cultural fit assessment', 'Integration readiness', 'Long-term partnership potential', 'Training and support']
    }
  ]

  const vendorCategories = [
    'Machine Learning Platform',
    'AI-Powered Analytics',
    'Natural Language Processing',
    'Computer Vision',
    'Robotic Process Automation',
    'Conversational AI',
    'Predictive Analytics',
    'AI Development Tools',
    'Data Management & Processing',
    'AI Security & Governance'
  ]

  const criticalityLevels = [
    'Mission Critical - Core business process dependency',
    'Business Critical - Important business function',
    'Operational - Supporting business operations',
    'Development - Testing or development use only'
  ]

  const handleDimensionScore = (dimensionName: string, score: number) => {
    setVendorData(prev => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        [dimensionName]: score
      }
    }))
  }

  const calculateRiskAssessment = () => {
    setIsCalculating(true)
    
    setTimeout(() => {
      let weightedSum = 0
      let totalWeight = 0
      
      riskDimensions.forEach(dimension => {
        const score = vendorData.dimensions[dimension.name] || 1
        weightedSum += (score * dimension.weight)
        totalWeight += dimension.weight
      })
      
      const overallScore = weightedSum / totalWeight
      
      let riskLevel = ''
      let recommendations: string[] = []
      let criticalFindings: string[] = []
      let complianceStatus = ''
      
      if (overallScore >= 4.0) {
        riskLevel = 'LOW RISK'
        recommendations = [
          'Approved for critical business processes',
          'Implement standard monitoring procedures',
          'Schedule annual risk reassessment',
          'Consider for strategic partnership expansion'
        ]
        complianceStatus = 'COMPLIANT - Ready for enterprise deployment'
      } else if (overallScore >= 3.0) {
        riskLevel = 'MODERATE RISK'
        recommendations = [
          'Approved with enhanced monitoring requirements',
          'Implement quarterly risk reviews',
          'Develop contingency plans for critical dependencies',
          'Negotiate improved SLA terms'
        ]
        complianceStatus = 'CONDITIONAL COMPLIANCE - Requires ongoing monitoring'
      } else if (overallScore >= 2.0) {
        riskLevel = 'HIGH RISK'
        recommendations = [
          'Requires significant risk mitigation measures',
          'Not recommended for critical business processes',
          'Implement continuous monitoring and controls',
          'Develop detailed exit strategy'
        ]
        criticalFindings = [
          'Multiple compliance gaps identified',
          'Security controls below enterprise standards',
          'Financial or operational stability concerns'
        ]
        complianceStatus = 'NON-COMPLIANT - Requires remediation'
      } else {
        riskLevel = 'CRITICAL RISK'
        recommendations = [
          'NOT APPROVED for enterprise use',
          'Immediate discontinuation recommended',
          'Seek alternative vendor solutions',
          'Legal review of existing contracts required'
        ]
        criticalFindings = [
          'Severe compliance violations detected',
          'Unacceptable security posture',
          'High probability of regulatory penalties',
          'Significant operational or financial risks'
        ]
        complianceStatus = 'CRITICAL NON-COMPLIANCE - Immediate action required'
      }
      
      // Add specific findings based on low-scoring dimensions
      riskDimensions.forEach(dimension => {
        const score = vendorData.dimensions[dimension.name] || 1
        if (score <= 2) {
          criticalFindings.push(`${dimension.name}: Below acceptable standards`)
        }
      })
      
      setAssessment({
        overallScore: Math.round(overallScore * 10) / 10,
        riskLevel,
        recommendations,
        criticalFindings,
        complianceStatus
      })
      
      setIsCalculating(false)
      setCurrentStep(4)
    }, 2000)
  }

  const resetAssessment = () => {
    setCurrentStep(1)
    setVendorData({ name: '', category: '', businessCriticality: '', dimensions: {} })
    setAssessment(null)
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'LOW RISK': return 'text-green-600 bg-green-50'
      case 'MODERATE RISK': return 'text-yellow-600 bg-yellow-50'
      case 'HIGH RISK': return 'text-orange-600 bg-orange-50'
      case 'CRITICAL RISK': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 4) return 'text-green-600'
    if (score >= 3) return 'text-yellow-600'
    if (score >= 2) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Enterprise AI Vendor Risk Evaluation Tool 2026 | SitePilot</title>
        <meta name="description" content="Comprehensive AI vendor risk assessment tool with 8-dimensional scoring framework. Evaluate security, compliance, financial stability, and operational risks for enterprise AI vendors." />
        <meta name="keywords" content="AI vendor risk assessment, enterprise AI security, vendor evaluation tool, AI compliance, vendor risk management" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Vendor Risk Evaluation Tool 2026
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Enterprise-Grade 8-Dimensional Risk Assessment Framework
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Trusted by 150+ Fortune 1000 companies</strong> for comprehensive AI vendor risk analysis. 
                    Evaluate security, compliance, financial stability, and operational risks with our proven methodology.
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-12 h-0.5 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-300'}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2 max-w-md mx-auto">
              <span>Vendor Info</span>
              <span>Risk Assessment</span>
              <span>Scoring</span>
              <span>Results</span>
            </div>
          </div>

          {/* Step 1: Vendor Information */}
          {currentStep === 1 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vendor Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vendor Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., OpenAI, Microsoft Cognitive Services, etc."
                    value={vendorData.name}
                    onChange={(e) => setVendorData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    AI Solution Category
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={vendorData.category}
                    onChange={(e) => setVendorData(prev => ({ ...prev, category: e.target.value }))}
                  >
                    <option value="">Select a category...</option>
                    {vendorCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Criticality Level
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={vendorData.businessCriticality}
                    onChange={(e) => setVendorData(prev => ({ ...prev, businessCriticality: e.target.value }))}
                  >
                    <option value="">Select criticality level...</option>
                    {criticalityLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-8">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!vendorData.name || !vendorData.category || !vendorData.businessCriticality}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Continue to Risk Assessment
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Risk Dimension Overview */}
          {currentStep === 2 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8-Dimensional Risk Assessment Framework</h2>
              
              <div className="space-y-6 mb-8">
                {riskDimensions.map((dimension, index) => (
                  <div key={dimension.name} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {dimension.name} ({dimension.weight}% Weight)
                        </h3>
                        <p className="text-gray-600 mb-3">{dimension.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {dimension.criteria.map((criterion, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {criterion}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Scoring Scale</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">1</div>
                    <div className="text-sm font-medium">Critical Risk</div>
                    <div className="text-xs text-gray-500">Unacceptable</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">2</div>
                    <div className="text-sm font-medium">High Risk</div>
                    <div className="text-xs text-gray-500">Needs Mitigation</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">3</div>
                    <div className="text-sm font-medium">Moderate Risk</div>
                    <div className="text-xs text-gray-500">Acceptable</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">4</div>
                    <div className="text-sm font-medium">Low Risk</div>
                    <div className="text-xs text-gray-500">Good</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">5</div>
                    <div className="text-sm font-medium">Minimal Risk</div>
                    <div className="text-xs text-gray-500">Excellent</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Start Risk Scoring
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Risk Scoring */}
          {currentStep === 3 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Dimension Scoring</h2>
              <p className="text-gray-600 mb-8">Rate each dimension from 1 (Critical Risk) to 5 (Minimal Risk) based on your assessment of <strong>{vendorData.name}</strong>.</p>
              
              <div className="space-y-8">
                {riskDimensions.map((dimension, index) => (
                  <div key={dimension.name} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {dimension.name} ({dimension.weight}% Weight)
                    </h3>
                    <p className="text-gray-600 mb-4">{dimension.description}</p>
                    
                    <div className="grid grid-cols-5 gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map((score) => (
                        <button
                          key={score}
                          onClick={() => handleDimensionScore(dimension.name, score)}
                          className={`p-3 text-center border-2 rounded-lg transition-all ${
                            vendorData.dimensions[dimension.name] === score
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-1 text-white ${
                            score === 1 ? 'bg-red-500' :
                            score === 2 ? 'bg-orange-500' :
                            score === 3 ? 'bg-yellow-500' :
                            score === 4 ? 'bg-blue-500' : 'bg-green-500'
                          }`}>
                            {score}
                          </div>
                          <div className="text-xs text-gray-600">
                            {score === 1 ? 'Critical' :
                             score === 2 ? 'High' :
                             score === 3 ? 'Moderate' :
                             score === 4 ? 'Low' : 'Minimal'}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex space-x-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={calculateRiskAssessment}
                  disabled={Object.keys(vendorData.dimensions).length < riskDimensions.length}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Calculate Risk Assessment
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {currentStep === 4 && (
            <div className="space-y-8">
              {isCalculating ? (
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculating Risk Assessment...</h3>
                  <p className="text-gray-600">Analyzing 8 risk dimensions and generating comprehensive report...</p>
                </div>
              ) : assessment && (
                <div className="space-y-6">
                  {/* Overall Risk Score */}
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="text-center mb-6">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Risk Assessment Results</h2>
                      <p className="text-gray-600">Vendor: <strong>{vendorData.name}</strong> | Category: <strong>{vendorData.category}</strong></p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className={`text-4xl font-bold ${getScoreColor(assessment.overallScore)} mb-2`}>
                          {assessment.overallScore}
                        </div>
                        <div className="text-sm text-gray-500">Overall Score</div>
                        <div className="text-xs text-gray-400">(out of 5.0)</div>
                      </div>
                      
                      <div className="text-center">
                        <div className={`inline-block px-4 py-2 rounded-lg font-semibold ${getRiskColor(assessment.riskLevel)}`}>
                          {assessment.riskLevel}
                        </div>
                        <div className="text-sm text-gray-500 mt-2">Risk Classification</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900 mb-2">
                          {assessment.complianceStatus.split(' - ')[0]}
                        </div>
                        <div className="text-sm text-gray-500">Compliance Status</div>
                      </div>
                    </div>
                  </div>

                  {/* Dimension Breakdown */}
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Dimension Score Breakdown</h3>
                    <div className="space-y-4">
                      {riskDimensions.map((dimension) => {
                        const score = vendorData.dimensions[dimension.name] || 0
                        return (
                          <div key={dimension.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">{dimension.name}</div>
                              <div className="text-sm text-gray-600">Weight: {dimension.weight}%</div>
                            </div>
                            <div className="text-center">
                              <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                                {score}
                              </div>
                              <div className="text-xs text-gray-500">/ 5</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Recommendations</h3>
                    <ul className="space-y-3">
                      {assessment.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                          <span className="text-gray-700">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Critical Findings */}
                  {assessment.criticalFindings.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                      <h3 className="text-xl font-bold text-red-900 mb-6">Critical Findings</h3>
                      <ul className="space-y-3">
                        {assessment.criticalFindings.map((finding, index) => (
                          <li key={index} className="flex items-start">
                            <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                            <span className="text-red-700">{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h3>
                    <p className="text-gray-600 mb-6">
                      Save this assessment for your vendor governance records and share with stakeholders as needed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => window.print()}
                        className="bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
                      >
                        Save/Print Report
                      </button>
                      <button
                        onClick={resetAssessment}
                        className="bg-gray-600 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-700 transition-colors"
                      >
                        Assess Another Vendor
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AIVendorRiskEvaluationTool2026