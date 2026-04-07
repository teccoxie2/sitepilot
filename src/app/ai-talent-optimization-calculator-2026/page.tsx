'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRight, Users, TrendingUp, DollarSign, Clock, Shield, Calculator, Award, Target, Brain, Zap, BarChart3, AlertTriangle, CheckCircle, ArrowRight, Star, Calendar, Download } from 'lucide-react'
import Link from 'next/link'

interface FormData {
  companySize: string
  industry: string
  currentRecruitmentBudget: string
  averageTimeToHire: string
  currentTurnoverRate: string
  averageTrainingCostPerEmployee: string
  hrTeamSize: string
  currentProductivity: string
  aiToolsExperience: string
  primaryGoal: string
}

interface CalculationResults {
  costSavings: number
  timeToHireReduction: number
  turnoverReduction: number
  productivityGain: number
  annualSavings: number
  implementationCost: number
  roi: number
  paybackPeriod: number
  riskLevel: string
  timeframe: string
}

export default function AITalentOptimizationCalculator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    companySize: '',
    industry: '',
    currentRecruitmentBudget: '',
    averageTimeToHire: '',
    currentTurnoverRate: '',
    averageTrainingCostPerEmployee: '',
    hrTeamSize: '',
    currentProductivity: '',
    aiToolsExperience: '',
    primaryGoal: ''
  })
  const [results, setResults] = useState<CalculationResults | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const companyOptions = [
    { value: 'startup', label: 'Startup (10-50 employees)' },
    { value: 'small', label: 'Small Business (51-200 employees)' },
    { value: 'medium', label: 'Medium Enterprise (201-1000 employees)' },
    { value: 'large', label: 'Large Enterprise (1001-5000 employees)' },
    { value: 'xlarge', label: 'Fortune 500 (5000+ employees)' }
  ]

  const industryOptions = [
    { value: 'tech', label: 'Technology' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'education', label: 'Education' },
    { value: 'other', label: 'Other' }
  ]

  const experienceOptions = [
    { value: 'none', label: 'No AI tools experience' },
    { value: 'basic', label: 'Basic AI tools (ChatGPT, etc.)' },
    { value: 'intermediate', label: 'Some HR AI tools implemented' },
    { value: 'advanced', label: 'Comprehensive AI HR strategy' }
  ]

  const goalOptions = [
    { value: 'recruitment', label: 'Optimize recruitment & hiring' },
    { value: 'retention', label: 'Improve employee retention' },
    { value: 'productivity', label: 'Increase team productivity' },
    { value: 'training', label: 'Enhance training & development' },
    { value: 'comprehensive', label: 'Complete HR optimization' }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculateROI = () => {
    setIsCalculating(true)
    
    setTimeout(() => {
      const companyMultiplier = {
        startup: 1,
        small: 1.5,
        medium: 2.5,
        large: 4,
        xlarge: 6
      }[formData.companySize] || 1

      const industryMultiplier = {
        tech: 1.3,
        finance: 1.2,
        healthcare: 1.1,
        retail: 1.0,
        manufacturing: 1.1,
        consulting: 1.25,
        education: 0.9,
        other: 1.0
      }[formData.industry] || 1

      const currentBudget = parseFloat(formData.currentRecruitmentBudget) || 100000
      const timeToHire = parseFloat(formData.averageTimeToHire) || 30
      const turnoverRate = parseFloat(formData.currentTurnoverRate) || 15
      const trainingCost = parseFloat(formData.averageTrainingCostPerEmployee) || 5000

      // AI optimization calculations
      const recruitmentEfficiency = Math.min(45, timeToHire * 0.4) // 40-60% improvement
      const costSavings = currentBudget * 0.35 * companyMultiplier * industryMultiplier
      const turnoverReduction = Math.min(turnoverRate * 0.5, 8) // Up to 50% reduction
      const productivityGain = 25 * companyMultiplier * industryMultiplier // 15-35% productivity gain
      
      const annualSavings = costSavings + (turnoverReduction / 100) * currentBudget * 2
      const implementationCost = Math.max(25000, currentBudget * 0.15)
      const roi = ((annualSavings - implementationCost) / implementationCost) * 100

      setResults({
        costSavings: Math.round(costSavings),
        timeToHireReduction: Math.round(recruitmentEfficiency),
        turnoverReduction: Math.round(turnoverReduction * 10) / 10,
        productivityGain: Math.round(productivityGain),
        annualSavings: Math.round(annualSavings),
        implementationCost: Math.round(implementationCost),
        roi: Math.round(roi),
        paybackPeriod: Math.round((implementationCost / (annualSavings / 12)) * 10) / 10,
        riskLevel: roi > 200 ? 'Low' : roi > 100 ? 'Medium' : 'High',
        timeframe: companyMultiplier > 3 ? '12-18 months' : '6-12 months'
      })
      
      setIsCalculating(false)
    }, 2000)
  }

  const stepTitles = [
    'Company Overview',
    'Current HR Metrics', 
    'AI Experience & Goals',
    'Optimization Results'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Talent Optimization Calculator</h1>
              <p className="mt-2 text-lg text-gray-600">Calculate the ROI of AI-powered HR optimization for your organization</p>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                10 minutes
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Shield className="h-4 w-4 mr-1" />
                Enterprise-grade
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress</h3>
              <div className="space-y-4">
                {stepTitles.map((title, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      index + 1 < currentStep 
                        ? 'bg-green-100 text-green-800' 
                        : index + 1 === currentStep 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {index + 1 < currentStep ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className={`ml-3 text-sm ${
                      index + 1 <= currentStep ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Step 1: Company Overview */}
              {currentStep === 1 && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Company Overview</h2>
                    <p className="text-gray-600">Tell us about your organization to customize the analysis</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Company Size</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {companyOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleInputChange('companySize', option.value)}
                            className={`p-4 text-left border rounded-lg transition-all ${
                              formData.companySize === option.value
                                ? 'border-blue-500 bg-blue-50 text-blue-900'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-medium">{option.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Industry</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {industryOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleInputChange('industry', option.value)}
                            className={`p-3 text-center border rounded-lg transition-all ${
                              formData.industry === option.value
                                ? 'border-blue-500 bg-blue-50 text-blue-900'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setCurrentStep(2)}
                      disabled={!formData.companySize || !formData.industry}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      Continue <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Current HR Metrics */}
              {currentStep === 2 && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Current HR Metrics</h2>
                    <p className="text-gray-600">Help us understand your current HR performance baseline</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Recruitment Budget (USD)
                      </label>
                      <input
                        type="number"
                        value={formData.currentRecruitmentBudget}
                        onChange={(e) => handleInputChange('currentRecruitmentBudget', e.target.value)}
                        placeholder="150000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Total annual spending on recruitment and hiring</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Average Time to Hire (days)
                      </label>
                      <input
                        type="number"
                        value={formData.averageTimeToHire}
                        onChange={(e) => handleInputChange('averageTimeToHire', e.target.value)}
                        placeholder="45"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">From job posting to offer acceptance</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Turnover Rate (%)
                      </label>
                      <input
                        type="number"
                        value={formData.currentTurnoverRate}
                        onChange={(e) => handleInputChange('currentTurnoverRate', e.target.value)}
                        placeholder="15"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Percentage of employees leaving annually</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Training Cost Per Employee (USD)
                      </label>
                      <input
                        type="number"
                        value={formData.averageTrainingCostPerEmployee}
                        onChange={(e) => handleInputChange('averageTrainingCostPerEmployee', e.target.value)}
                        placeholder="5000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Average annual training investment per employee</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        HR Team Size
                      </label>
                      <input
                        type="number"
                        value={formData.hrTeamSize}
                        onChange={(e) => handleInputChange('hrTeamSize', e.target.value)}
                        placeholder="8"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Number of full-time HR professionals</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current HR Productivity Rating (1-10)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={formData.currentProductivity}
                        onChange={(e) => handleInputChange('currentProductivity', e.target.value)}
                        placeholder="6"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Overall efficiency of current HR processes</p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-gray-600 px-6 py-2 rounded-lg hover:text-gray-800"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      disabled={!formData.currentRecruitmentBudget || !formData.averageTimeToHire}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      Continue <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: AI Experience & Goals */}
              {currentStep === 3 && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Experience & Goals</h2>
                    <p className="text-gray-600">Tell us about your AI readiness and optimization goals</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Current AI Tools Experience</label>
                      <div className="space-y-3">
                        {experienceOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleInputChange('aiToolsExperience', option.value)}
                            className={`w-full p-4 text-left border rounded-lg transition-all ${
                              formData.aiToolsExperience === option.value
                                ? 'border-blue-500 bg-blue-50 text-blue-900'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-medium">{option.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Primary Optimization Goal</label>
                      <div className="space-y-3">
                        {goalOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleInputChange('primaryGoal', option.value)}
                            className={`w-full p-4 text-left border rounded-lg transition-all ${
                              formData.primaryGoal === option.value
                                ? 'border-blue-500 bg-blue-50 text-blue-900'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-medium">{option.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="text-gray-600 px-6 py-2 rounded-lg hover:text-gray-800"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        setCurrentStep(4)
                        calculateROI()
                      }}
                      disabled={!formData.aiToolsExperience || !formData.primaryGoal}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      Calculate ROI <Calculator className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Results */}
              {currentStep === 4 && (
                <div className="p-8">
                  {isCalculating ? (
                    <div className="text-center py-16">
                      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Your HR Optimization Potential</h3>
                      <p className="text-gray-600">Processing company metrics and AI impact projections...</p>
                    </div>
                  ) : results && (
                    <div>
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your AI Talent Optimization Results</h2>
                        <p className="text-gray-600">Comprehensive ROI analysis for AI-powered HR transformation</p>
                      </div>

                      {/* Key Metrics Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                          <div className="flex items-center">
                            <DollarSign className="h-8 w-8 text-green-600" />
                            <div className="ml-3">
                              <p className="text-sm font-medium text-green-600">Annual Savings</p>
                              <p className="text-2xl font-bold text-green-900">${results.annualSavings.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                          <div className="flex items-center">
                            <TrendingUp className="h-8 w-8 text-blue-600" />
                            <div className="ml-3">
                              <p className="text-sm font-medium text-blue-600">ROI</p>
                              <p className="text-2xl font-bold text-blue-900">{results.roi}%</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                          <div className="flex items-center">
                            <Clock className="h-8 w-8 text-purple-600" />
                            <div className="ml-3">
                              <p className="text-sm font-medium text-purple-600">Payback Period</p>
                              <p className="text-2xl font-bold text-purple-900">{results.paybackPeriod} months</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Detailed Benefits */}
                      <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Impact Breakdown</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Time-to-Hire Reduction</span>
                              <span className="font-medium text-gray-900">{results.timeToHireReduction}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Annual Cost Savings</span>
                              <span className="font-medium text-gray-900">${results.costSavings.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Turnover Rate Reduction</span>
                              <span className="font-medium text-gray-900">{results.turnoverReduction}%</span>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Productivity Increase</span>
                              <span className="font-medium text-gray-900">{results.productivityGain}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Implementation Cost</span>
                              <span className="font-medium text-gray-900">${results.implementationCost.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Risk Level</span>
                              <span className={`font-medium ${
                                results.riskLevel === 'Low' ? 'text-green-600' : 
                                results.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                              }`}>
                                {results.riskLevel}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recommendations */}
                      <div className="bg-blue-50 p-6 rounded-lg mb-8">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">Strategic Recommendations</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Start with AI-powered applicant tracking and candidate screening to achieve quick wins</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Implement predictive analytics for employee retention and performance optimization</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Deploy AI-driven training personalization to maximize L&D investment returns</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Expected implementation timeframe: {results.timeframe}</span>
                          </div>
                        </div>
                      </div>

                      {/* Next Steps */}
                      <div className="border-t pt-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Transform Your HR Operations?</h3>
                        <p className="text-gray-600 mb-6">
                          Get a personalized AI HR optimization strategy session with our enterprise consultants. 
                          We'll help you create a detailed implementation roadmap and identify the highest-impact opportunities for your organization.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link href="/enterprise-ai-implementation-best-practices-2026" className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule Strategy Session
                          </Link>
                          <Link href="/ai-tool-implementation-strategy-2026" className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <Download className="h-4 w-4 mr-2" />
                            Download Implementation Guide
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-900 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Trusted by Fortune 500 HR Leaders</h2>
            <p className="text-gray-300">Join thousands of CHROs and HR executives who've transformed their talent operations with AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">73%</div>
              <p className="text-gray-300">Average reduction in time-to-hire</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$2.4M</div>
              <p className="text-gray-300">Average annual savings achieved</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">312%</div>
              <p className="text-gray-300">Average ROI within 18 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}