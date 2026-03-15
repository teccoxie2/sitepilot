'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRight, GraduationCap, TrendingUp, DollarSign, Clock, Users, BookOpen, Target, Brain, BarChart3, Award, CheckCircle, Calendar, Download } from 'lucide-react'
import Link from 'next/link'

interface TrainingFormData {
  employeeCount: string
  industry: string
  annualTrainingBudget: string
  averageTrainingHours: string
  currentCompletionRate: string
  averageEmployeeSalary: string
  trainingMethods: string[]
  currentChallenges: string[]
  aiReadiness: string
  targetOutcomes: string[]
}

interface TrainingResults {
  currentCost: number
  annualSavings: number
  implementationCost: number
  roi: number
  paybackPeriod: number
  efficiencyGain: number
  completionImprovement: number
  timeReduction: number
  productivityIncrease: number
  engagementIncrease: number
  learningSpeedIncrease: number
  retentionImprovement: number
  riskLevel: string
  timeframe: string
}

export default function AITrainingROICalculator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<TrainingFormData>({
    employeeCount: '',
    industry: '',
    annualTrainingBudget: '',
    averageTrainingHours: '',
    currentCompletionRate: '',
    averageEmployeeSalary: '',
    trainingMethods: [],
    currentChallenges: [],
    aiReadiness: '',
    targetOutcomes: []
  })
  const [results, setResults] = useState<TrainingResults | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const industryOptions = [
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'education', label: 'Education' },
    { value: 'government', label: 'Government' },
    { value: 'other', label: 'Other' }
  ]

  const trainingMethodOptions = [
    { value: 'classroom', label: 'Traditional Classroom Training' },
    { value: 'elearning', label: 'E-learning Platforms' },
    { value: 'webinars', label: 'Live Webinars/Virtual Sessions' },
    { value: 'onthejob', label: 'On-the-Job Training' },
    { value: 'mentoring', label: 'Mentoring/Coaching' },
    { value: 'microlearning', label: 'Microlearning Modules' },
    { value: 'simulation', label: 'Simulations/VR Training' },
    { value: 'conferences', label: 'External Conferences/Workshops' }
  ]

  const challengeOptions = [
    { value: 'engagement', label: 'Low learner engagement' },
    { value: 'completion', label: 'Poor completion rates' },
    { value: 'relevance', label: 'Content not relevant to roles' },
    { value: 'tracking', label: 'Difficulty tracking progress' },
    { value: 'personalization', label: 'One-size-fits-all approach' },
    { value: 'cost', label: 'High training costs' },
    { value: 'time', label: 'Limited time for training' },
    { value: 'measurement', label: 'Measuring training effectiveness' }
  ]

  const outcomeOptions = [
    { value: 'efficiency', label: 'Improve training efficiency' },
    { value: 'personalization', label: 'Personalize learning paths' },
    { value: 'completion', label: 'Increase completion rates' },
    { value: 'skills', label: 'Accelerate skill development' },
    { value: 'retention', label: 'Improve knowledge retention' },
    { value: 'compliance', label: 'Streamline compliance training' },
    { value: 'costs', label: 'Reduce training costs' },
    { value: 'analytics', label: 'Better learning analytics' }
  ]

  const readinessOptions = [
    { value: 'beginner', label: 'No AI training experience' },
    { value: 'basic', label: 'Basic AI tools (ChatGPT for content)' },
    { value: 'intermediate', label: 'Some AI-powered learning tools' },
    { value: 'advanced', label: 'Comprehensive AI learning strategy' }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleMultiSelect = (field: keyof Pick<TrainingFormData, 'trainingMethods' | 'currentChallenges' | 'targetOutcomes'>, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter(item => item !== value)
        : [...(prev[field] as string[]), value]
    }))
  }

  const calculateROI = () => {
    setIsCalculating(true)
    
    setTimeout(() => {
      const employees = parseFloat(formData.employeeCount) || 500
      const trainingBudget = parseFloat(formData.annualTrainingBudget) || 200000
      const trainingHours = parseFloat(formData.averageTrainingHours) || 40
      const completionRate = parseFloat(formData.currentCompletionRate) || 65
      const avgSalary = parseFloat(formData.averageEmployeeSalary) || 75000

      // Industry multipliers for AI impact
      const industryMultipliers = {
        technology: 1.4,
        finance: 1.3,
        healthcare: 1.2,
        consulting: 1.35,
        manufacturing: 1.15,
        retail: 1.1,
        education: 1.25,
        government: 1.05,
        other: 1.0
      }

      const industryMultiplier = industryMultipliers[formData.industry as keyof typeof industryMultipliers] || 1.0

      // Calculate AI improvements
      const efficiencyGain = Math.min(50, 25 + (formData.targetOutcomes.length * 3)) // 25-50% efficiency
      const completionImprovement = Math.min(95, completionRate + (95 - completionRate) * 0.6) // Up to 95%
      const timeReduction = Math.min(60, trainingHours * 0.4) // 30-60% time reduction
      const costSavingsRate = 0.3 + (formData.aiReadiness === 'advanced' ? 0.1 : 0)

      // ROI calculations
      const currentTrainingCost = (avgSalary / 2080) * trainingHours * employees + trainingBudget
      const timeValueSaved = ((avgSalary / 2080) * timeReduction * employees) * industryMultiplier
      const efficiencyValue = (currentTrainingCost * (efficiencyGain / 100)) * industryMultiplier
      const completionValue = ((completionImprovement - completionRate) / 100) * trainingBudget
      
      const totalBenefits = timeValueSaved + efficiencyValue + completionValue
      const implementationCost = Math.max(50000, trainingBudget * 0.25)
      const annualSavings = totalBenefits * 0.8 // Conservative estimate
      const roi = ((annualSavings - implementationCost) / implementationCost) * 100

      // Additional metrics
      const productivityIncrease = Math.round((efficiencyGain / 2) + (formData.targetOutcomes.length * 2))
      const engagementIncrease = Math.round(30 + (formData.aiReadiness === 'advanced' ? 15 : 0))

      setResults({
        currentCost: Math.round(currentTrainingCost),
        annualSavings: Math.round(annualSavings),
        implementationCost: Math.round(implementationCost),
        roi: Math.round(roi),
        paybackPeriod: Math.round((implementationCost / (annualSavings / 12)) * 10) / 10,
        efficiencyGain: Math.round(efficiencyGain),
        completionImprovement: Math.round(completionImprovement),
        timeReduction: Math.round(timeReduction),
        productivityIncrease,
        engagementIncrease,
        learningSpeedIncrease: Math.round(25 + (industryMultiplier - 1) * 20),
        retentionImprovement: Math.round(35 + (formData.targetOutcomes.length * 3)),
        riskLevel: roi > 150 ? 'Low' : roi > 75 ? 'Medium' : 'High',
        timeframe: employees > 1000 ? '12-18 months' : '6-12 months'
      })
      
      setIsCalculating(false)
    }, 2500)
  }

  const stepTitles = [
    'Organization Details',
    'Current Training Program', 
    'Challenges & Goals',
    'ROI Analysis Results'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Training ROI Calculator</h1>
              <p className="mt-2 text-lg text-gray-600">Calculate the ROI impact of AI-powered learning and development programs</p>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                8 minutes
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <GraduationCap className="h-4 w-4 mr-1" />
                L&D Focused
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
              {/* Step 1: Organization Details */}
              {currentStep === 1 && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Organization Details</h2>
                    <p className="text-gray-600">Tell us about your organization to customize the L&D analysis</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Employees
                        </label>
                        <input
                          type="number"
                          value={formData.employeeCount}
                          onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                          placeholder="500"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Total full-time employees requiring training</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Annual Training Budget (USD)
                        </label>
                        <input
                          type="number"
                          value={formData.annualTrainingBudget}
                          onChange={(e) => handleInputChange('annualTrainingBudget', e.target.value)}
                          placeholder="200000"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Total annual L&D budget including tools and content</p>
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
                      disabled={!formData.employeeCount || !formData.industry || !formData.annualTrainingBudget}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      Continue <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Current Training Program */}
              {currentStep === 2 && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Current Training Program</h2>
                    <p className="text-gray-600">Help us understand your existing L&D setup and performance</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Average Training Hours per Employee (Annual)
                        </label>
                        <input
                          type="number"
                          value={formData.averageTrainingHours}
                          onChange={(e) => handleInputChange('averageTrainingHours', e.target.value)}
                          placeholder="40"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Hours of formal training per employee per year</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Completion Rate (%)
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={formData.currentCompletionRate}
                          onChange={(e) => handleInputChange('currentCompletionRate', e.target.value)}
                          placeholder="65"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Percentage of employees completing assigned training</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Average Employee Salary (USD)
                      </label>
                      <input
                        type="number"
                        value={formData.averageEmployeeSalary}
                        onChange={(e) => handleInputChange('averageEmployeeSalary', e.target.value)}
                        placeholder="75000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Used to calculate opportunity cost of training time</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Current Training Methods (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {trainingMethodOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleMultiSelect('trainingMethods', option.value)}
                            className={`p-3 text-left border rounded-lg transition-all ${
                              formData.trainingMethods.includes(option.value)
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

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-gray-600 px-6 py-2 rounded-lg hover:text-gray-800"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      disabled={!formData.averageTrainingHours || !formData.currentCompletionRate || formData.trainingMethods.length === 0}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      Continue <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Challenges & Goals */}
              {currentStep === 3 && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Challenges & Goals</h2>
                    <p className="text-gray-600">Identify your current training challenges and desired outcomes</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Current Training Challenges (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {challengeOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleMultiSelect('currentChallenges', option.value)}
                            className={`p-3 text-left border rounded-lg transition-all ${
                              formData.currentChallenges.includes(option.value)
                                ? 'border-red-500 bg-red-50 text-red-900'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">AI Readiness Level</label>
                      <div className="space-y-3">
                        {readinessOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleInputChange('aiReadiness', option.value)}
                            className={`w-full p-4 text-left border rounded-lg transition-all ${
                              formData.aiReadiness === option.value
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
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Target Outcomes (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {outcomeOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleMultiSelect('targetOutcomes', option.value)}
                            className={`p-3 text-left border rounded-lg transition-all ${
                              formData.targetOutcomes.includes(option.value)
                                ? 'border-green-500 bg-green-50 text-green-900'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {option.label}
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
                      disabled={!formData.aiReadiness || formData.targetOutcomes.length === 0}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      Calculate ROI <BarChart3 className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Results */}
              {currentStep === 4 && (
                <div className="p-8">
                  {isCalculating ? (
                    <div className="text-center py-16">
                      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Your L&D Optimization Potential</h3>
                      <p className="text-gray-600">Processing training metrics and AI learning impact projections...</p>
                    </div>
                  ) : results && (
                    <div>
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your AI Training ROI Analysis</h2>
                        <p className="text-gray-600">Comprehensive impact assessment for AI-powered learning transformation</p>
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

                      {/* Learning Impact Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{results.efficiencyGain}%</div>
                          <div className="text-sm text-gray-600">Training Efficiency</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{results.completionImprovement}%</div>
                          <div className="text-sm text-gray-600">Completion Rate</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{results.timeReduction}%</div>
                          <div className="text-sm text-gray-600">Time Reduction</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">{results.productivityIncrease}%</div>
                          <div className="text-sm text-gray-600">Productivity Gain</div>
                        </div>
                      </div>

                      {/* Detailed Benefits */}
                      <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Impact Breakdown</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Learning Speed Increase</span>
                              <span className="font-medium text-gray-900">{results.learningSpeedIncrease}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Engagement Improvement</span>
                              <span className="font-medium text-gray-900">{results.engagementIncrease}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Knowledge Retention</span>
                              <span className="font-medium text-gray-900">{results.retentionImprovement}%</span>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Current Training Cost</span>
                              <span className="font-medium text-gray-900">${results.currentCost.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Implementation Investment</span>
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

                      {/* AI-Powered Features */}
                      <div className="bg-blue-50 p-6 rounded-lg mb-8">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">AI Training Transformation Features</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Personalized learning paths based on role, skill level, and learning style</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Real-time adaptive content delivery and difficulty adjustment</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Intelligent knowledge gap identification and targeted recommendations</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Automated compliance tracking and certification management</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Predictive analytics for learning outcomes and business impact</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                            <span className="text-gray-700">Expected implementation timeframe: {results.timeframe}</span>
                          </div>
                        </div>
                      </div>

                      {/* Next Steps */}
                      <div className="border-t pt-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Transform Your L&D Program?</h3>
                        <p className="text-gray-600 mb-6">
                          Schedule a personalized AI learning strategy consultation with our L&D transformation experts. 
                          We'll help you create a detailed implementation roadmap and identify the highest-impact AI tools for your training programs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link href="/ai-tools-implementation-strategy-2026" className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule Strategy Session
                          </Link>
                          <Link href="/ai-training-roi-calculator-2026" className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <Download className="h-4 w-4 mr-2" />
                            Download L&D Transformation Guide
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

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-900 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Proven Results from L&D Leaders</h2>
            <p className="text-gray-300">Join hundreds of learning professionals who've revolutionized their training programs with AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">68%</div>
              <p className="text-gray-300">Average increase in learning completion rates</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">45%</div>
              <p className="text-gray-300">Reduction in training delivery time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">280%</div>
              <p className="text-gray-300">Average ROI within first year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}