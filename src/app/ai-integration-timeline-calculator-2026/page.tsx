'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimelineData {
  companySize: string
  industry: string
  complexity: string
  budget: string
  experience: string
  timeline: number
  phases: Array<{
    name: string
    duration: number
    description: string
  }>
}

export default function AIIntegrationTimelineCalculator() {
  const [formData, setFormData] = useState({
    companySize: '',
    industry: '',
    complexity: '',
    budget: '',
    experience: ''
  })

  const [result, setResult] = useState<TimelineData | null>(null)
  const [currentPhase, setCurrentPhase] = useState(0)

  const calculateTimeline = () => {
    let baseWeeks = 12

    // Company size impact
    switch (formData.companySize) {
      case 'startup': baseWeeks *= 0.8; break
      case 'sme': baseWeeks *= 1.0; break
      case 'enterprise': baseWeeks *= 1.5; break
      case 'fortune500': baseWeeks *= 2.2; break
    }

    // Industry complexity
    switch (formData.industry) {
      case 'tech': baseWeeks *= 0.9; break
      case 'finance': baseWeeks *= 1.3; break
      case 'healthcare': baseWeeks *= 1.6; break
      case 'manufacturing': baseWeeks *= 1.2; break
      case 'retail': baseWeeks *= 1.0; break
    }

    // Implementation complexity
    switch (formData.complexity) {
      case 'simple': baseWeeks *= 0.7; break
      case 'moderate': baseWeeks *= 1.0; break
      case 'complex': baseWeeks *= 1.4; break
      case 'enterprise': baseWeeks *= 1.8; break
    }

    // Budget impact
    switch (formData.budget) {
      case 'under50k': baseWeeks *= 1.3; break
      case '50k-200k': baseWeeks *= 1.0; break
      case '200k-500k': baseWeeks *= 0.8; break
      case 'over500k': baseWeeks *= 0.6; break
    }

    // Team experience
    switch (formData.experience) {
      case 'none': baseWeeks *= 1.5; break
      case 'basic': baseWeeks *= 1.2; break
      case 'intermediate': baseWeeks *= 1.0; break
      case 'expert': baseWeeks *= 0.7; break
    }

    const totalWeeks = Math.round(baseWeeks)
    
    const phases = [
      {
        name: "Strategy & Planning",
        duration: Math.round(totalWeeks * 0.2),
        description: "Requirements gathering, vendor selection, team setup"
      },
      {
        name: "Pilot Development",
        duration: Math.round(totalWeeks * 0.3),
        description: "Initial implementation, testing, proof of concept"
      },
      {
        name: "Integration & Testing",
        duration: Math.round(totalWeeks * 0.25),
        description: "System integration, security testing, performance optimization"
      },
      {
        name: "Deployment & Training",
        duration: Math.round(totalWeeks * 0.15),
        description: "Go-live preparation, user training, support setup"
      },
      {
        name: "Optimization & Scale",
        duration: Math.round(totalWeeks * 0.1),
        description: "Performance tuning, scaling, continuous improvement"
      }
    ]

    setResult({
      companySize: formData.companySize,
      industry: formData.industry,
      complexity: formData.complexity,
      budget: formData.budget,
      experience: formData.experience,
      timeline: totalWeeks,
      phases
    })
  }

  useEffect(() => {
    if (result) {
      const interval = setInterval(() => {
        setCurrentPhase(prev => (prev + 1) % result.phases.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [result])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 AI Integration Timeline Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a realistic timeline for your AI implementation project based on your company profile, 
            industry requirements, and complexity factors. Used by Fortune 500 project managers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Parameters</h2>
            
            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Company Size</label>
                <select 
                  value={formData.companySize}
                  onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select company size</option>
                  <option value="startup">Startup (1-50 employees)</option>
                  <option value="sme">SME (51-500 employees)</option>
                  <option value="enterprise">Enterprise (501-5,000 employees)</option>
                  <option value="fortune500">Fortune 500 (5,000+ employees)</option>
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Industry</label>
                <select 
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select industry</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Financial Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail & E-commerce</option>
                </select>
              </div>

              {/* Complexity */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Implementation Complexity</label>
                <select 
                  value={formData.complexity}
                  onChange={(e) => setFormData({...formData, complexity: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select complexity</option>
                  <option value="simple">Simple (Single tool/process)</option>
                  <option value="moderate">Moderate (Multiple tools)</option>
                  <option value="complex">Complex (Custom integration)</option>
                  <option value="enterprise">Enterprise (Full transformation)</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Budget Range</label>
                <select 
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select budget range</option>
                  <option value="under50k">Under $50,000</option>
                  <option value="50k-200k">$50,000 - $200,000</option>
                  <option value="200k-500k">$200,000 - $500,000</option>
                  <option value="over500k">Over $500,000</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Team AI Experience</label>
                <select 
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select experience level</option>
                  <option value="none">No prior AI experience</option>
                  <option value="basic">Basic AI knowledge</option>
                  <option value="intermediate">Some AI implementations</option>
                  <option value="expert">Extensive AI experience</option>
                </select>
              </div>

              <button 
                onClick={calculateTimeline}
                disabled={!Object.values(formData).every(v => v)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Calculate Timeline
              </button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {result && (
              <>
                {/* Timeline Summary */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">📅 Your AI Implementation Timeline</h3>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">{result.timeline}</div>
                    <div className="text-lg text-gray-700">weeks estimated</div>
                    <div className="text-sm text-gray-500 mt-2">
                      Approximately {Math.round(result.timeline / 4.33)} months
                    </div>
                  </div>
                </div>

                {/* Phase Breakdown */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Implementation Phases</h3>
                  <div className="space-y-4">
                    {result.phases.map((phase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-4 rounded-lg border ${
                          currentPhase === index 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{phase.name}</h4>
                          <span className="text-sm font-medium text-blue-600">{phase.duration} weeks</span>
                        </div>
                        <p className="text-sm text-gray-600">{phase.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Factors */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Timeline Factors</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Company Size:</strong> {formData.companySize}</div>
                    <div><strong>Industry:</strong> {formData.industry}</div>
                    <div><strong>Complexity:</strong> {formData.complexity}</div>
                    <div><strong>Budget:</strong> {formData.budget}</div>
                    <div><strong>Experience:</strong> {formData.experience}</div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Next Steps</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Complete our Enterprise AI Risk Assessment</li>
                    <li>• Download our AI Implementation Checklist</li>
                    <li>• Book a strategy consultation call</li>
                    <li>• Join our AI Implementation Webinar</li>
                  </ul>
                </div>
              </>
            )}

            {!result && (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-6xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Calculate?</h3>
                <p className="text-gray-600">Fill out the form to get your personalized AI implementation timeline</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">Trusted by project managers at:</p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <span>Fortune 500</span>
            <span>•</span>
            <span>Enterprise Teams</span>
            <span>•</span>
            <span>AI Consultancies</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}