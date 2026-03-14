'use client';

import React, { useState } from 'react';

interface ResultsType {
  currentProductivity: number;
  newProductivity: number;
  productivityBoost: number;
  timesSaved: number;
  monthlySavings: number;
  yearlyValue: number;
  roiPercentage: number;
  riskLevel: string;
  riskFactors: string[];
  recommendations: string[];
  implementationScore: number;
  paybackPeriod: number;
}

const AITeamProductivityAssessmentTool = () => {
  const [formData, setFormData] = useState({
    teamSize: 10,
    currentProductivity: 75,
    repetitiveTasks: 40,
    aiToolsBudget: 50000,
    implementationTimeframe: 'moderate',
    teamTechSkills: 'average',
    workflowComplexity: 'medium',
    dataAvailability: 'some',
    aiReadiness: 'exploring'
  });

  const [results, setResults] = useState<ResultsType | null>(null);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateProductivityMetrics = () => {
    const { 
      teamSize, 
      currentProductivity, 
      repetitiveTasks, 
      aiToolsBudget,
      implementationTimeframe,
      teamTechSkills,
      workflowComplexity,
      dataAvailability,
      aiReadiness
    } = formData;

    // Base productivity boost calculation
    let productivityBoost = repetitiveTasks * 0.5 + 15;
    
    // Team skills multiplier
    const skillsMultiplier = {
      'beginner': 0.7,
      'average': 1.0,
      'advanced': 1.3,
      'expert': 1.5
    }[teamTechSkills] || 1.0;
    
    // Implementation speed factor
    const timeframeFactor = {
      'fast': 1.2,
      'moderate': 1.0,
      'slow': 0.8
    }[implementationTimeframe] || 1.0;
    
    // Workflow complexity impact
    const complexityFactor = {
      'simple': 1.1,
      'medium': 1.0,
      'complex': 0.9,
      'very_complex': 0.75
    }[workflowComplexity] || 1.0;
    
    // Data availability bonus
    const dataBonus = {
      'none': 0,
      'some': 5,
      'good': 10,
      'excellent': 20
    }[dataAvailability] || 0;
    
    // AI readiness multiplier
    const readinessMultiplier = {
      'skeptical': 0.6,
      'exploring': 0.8,
      'planning': 1.0,
      'implementing': 1.2,
      'optimizing': 1.4
    }[aiReadiness] || 1.0;

    productivityBoost = (productivityBoost + dataBonus) * 
                       skillsMultiplier * 
                       timeframeFactor * 
                       complexityFactor * 
                       readinessMultiplier;

    // Calculate final metrics
    const newProductivity = Math.min(95, currentProductivity + productivityBoost);
    const timesSaved = Math.round((productivityBoost / 100) * 40 * teamSize * 4); // Hours per month
    const monthlySavings = timesSaved * 75; // $75 per hour average cost
    const yearlyValue = monthlySavings * 12;
    const roiPercentage = ((yearlyValue - aiToolsBudget) / aiToolsBudget * 100);
    
    // Implementation risk assessment
    let riskLevel = 'Low';
    let riskFactors = [];
    
    if (teamTechSkills === 'beginner') {
      riskLevel = 'Medium';
      riskFactors.push('Limited technical skills');
    }
    
    if (workflowComplexity === 'very_complex') {
      riskLevel = 'High';
      riskFactors.push('Complex workflow integration');
    }
    
    if (aiReadiness === 'skeptical') {
      riskLevel = riskLevel === 'High' ? 'Very High' : 'High';
      riskFactors.push('Team resistance to change');
    }
    
    if (dataAvailability === 'none') {
      riskLevel = riskLevel.includes('High') ? 'Very High' : 'Medium';
      riskFactors.push('Limited data for AI training');
    }

    // Priority recommendations
    const recommendations = [];
    
    if (repetitiveTasks > 60) {
      recommendations.push('Start with automation tools for repetitive tasks');
    }
    
    if (teamTechSkills === 'beginner') {
      recommendations.push('Invest in team training and AI literacy programs');
    }
    
    if (aiToolsBudget < 25000) {
      recommendations.push('Consider phased implementation with budget-friendly tools');
    } else if (aiToolsBudget > 100000) {
      recommendations.push('Explore enterprise-grade AI solutions with comprehensive support');
    }
    
    if (dataAvailability === 'excellent') {
      recommendations.push('Leverage machine learning for predictive analytics');
    }

    return {
      currentProductivity,
      newProductivity,
      productivityBoost: Math.round(productivityBoost),
      timesSaved,
      monthlySavings,
      yearlyValue,
      roiPercentage: Math.round(roiPercentage),
      riskLevel,
      riskFactors,
      recommendations,
      implementationScore: Math.round((productivityBoost * 2) + (skillsMultiplier * 20)),
      paybackPeriod: Math.round(aiToolsBudget / monthlySavings)
    };
  };

  const handleCalculate = () => {
    const calculatedResults = calculateProductivityMetrics();
    setResults(calculatedResults);
  };

  const getRiskColor = (level: string) => {
    const colors: { [key: string]: string } = {
      'Low': 'text-green-600',
      'Medium': 'text-yellow-600', 
      'High': 'text-orange-600',
      'Very High': 'text-red-600'
    };
    return colors[level] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Team Productivity Assessment Tool 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evaluate your team's productivity potential with AI integration and get personalized implementation strategies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Team Assessment</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Size (number of people)
                </label>
                <input
                  type="number"
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="1"
                  max="1000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Team Productivity Level: {formData.currentProductivity}%
                </label>
                <input
                  type="range"
                  min="20"
                  max="95"
                  value={formData.currentProductivity}
                  onChange={(e) => handleInputChange('currentProductivity', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Repetitive Tasks in Workflow: {formData.repetitiveTasks}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={formData.repetitiveTasks}
                  onChange={(e) => handleInputChange('repetitiveTasks', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual AI Tools Budget ($)
                </label>
                <input
                  type="number"
                  value={formData.aiToolsBudget}
                  onChange={(e) => handleInputChange('aiToolsBudget', parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="1000"
                  max="1000000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Timeframe
                </label>
                <select
                  value={formData.implementationTimeframe}
                  onChange={(e) => handleInputChange('implementationTimeframe', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="fast">Fast (1-3 months)</option>
                  <option value="moderate">Moderate (3-6 months)</option>
                  <option value="slow">Slow (6+ months)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Technical Skills
                </label>
                <select
                  value={formData.teamTechSkills}
                  onChange={(e) => handleInputChange('teamTechSkills', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="beginner">Beginner</option>
                  <option value="average">Average</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Workflow Complexity
                </label>
                <select
                  value={formData.workflowComplexity}
                  onChange={(e) => handleInputChange('workflowComplexity', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="simple">Simple</option>
                  <option value="medium">Medium</option>
                  <option value="complex">Complex</option>
                  <option value="very_complex">Very Complex</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data Availability for AI
                </label>
                <select
                  value={formData.dataAvailability}
                  onChange={(e) => handleInputChange('dataAvailability', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="none">None/Limited</option>
                  <option value="some">Some Data Available</option>
                  <option value="good">Good Data Quality</option>
                  <option value="excellent">Excellent Data Infrastructure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team AI Readiness
                </label>
                <select
                  value={formData.aiReadiness}
                  onChange={(e) => handleInputChange('aiReadiness', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="skeptical">Skeptical</option>
                  <option value="exploring">Exploring</option>
                  <option value="planning">Planning</option>
                  <option value="implementing">Implementing</option>
                  <option value="optimizing">Optimizing</option>
                </select>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Analyze Team Productivity Potential
              </button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Productivity Analysis</h2>
            
            {results ? (
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-sm text-blue-600 font-medium">Current Productivity</div>
                    <div className="text-2xl font-bold text-blue-800">{results.currentProductivity}%</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="text-sm text-green-600 font-medium">Projected Productivity</div>
                    <div className="text-2xl font-bold text-green-800">{results.newProductivity}%</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="text-sm text-purple-600 font-medium">Productivity Boost</div>
                    <div className="text-2xl font-bold text-purple-800">+{results.productivityBoost}%</div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-xl">
                    <div className="text-sm text-indigo-600 font-medium">Implementation Score</div>
                    <div className="text-2xl font-bold text-indigo-800">{results.implementationScore}/100</div>
                  </div>
                </div>

                {/* Financial Impact */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Impact</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Time Saved (hours/month)</span>
                      <span className="font-semibold">{results.timesSaved.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly Cost Savings</span>
                      <span className="font-semibold text-green-600">${results.monthlySavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Annual Value</span>
                      <span className="font-semibold text-green-600">${results.yearlyValue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">ROI</span>
                      <span className={`font-semibold ${results.roiPercentage > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {results.roiPercentage > 0 ? '+' : ''}{results.roiPercentage}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Payback Period</span>
                      <span className="font-semibold">{results.paybackPeriod} months</span>
                    </div>
                  </div>
                </div>

                {/* Risk Assessment */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600">Risk Level</span>
                    <span className={`font-semibold ${getRiskColor(results.riskLevel)}`}>
                      {results.riskLevel}
                    </span>
                  </div>
                  {results.riskFactors.length > 0 && (
                    <div>
                      <div className="text-sm text-gray-600 mb-2">Key Risk Factors:</div>
                      <ul className="text-sm space-y-1">
                        {results.riskFactors.map((factor, index) => (
                          <li key={index} className="text-orange-600">• {factor}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Recommendations */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Strategic Recommendations</h3>
                  <ul className="space-y-2">
                    {results.recommendations.map((rec, index) => (
                      <li key={index} className="text-blue-700 text-sm">
                        • {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready for Enterprise AI Implementation?</h3>
                  <p className="text-gray-700 mb-4">
                    Get a personalized AI strategy consultation to optimize your team's productivity transformation.
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Schedule Expert Consultation
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <div className="text-6xl mb-4">🤖</div>
                <p>Complete the assessment form to analyze your team's AI productivity potential</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITeamProductivityAssessmentTool;