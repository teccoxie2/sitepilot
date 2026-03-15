'use client'

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AIPerformanceMonitoringDashboard() {
  const [formData, setFormData] = useState({
    employees: '',
    currentToolCount: '',
    monthlyAISpend: '',
    productivityGains: '',
    errorRate: '',
    userSatisfaction: '',
    timeToValue: ''
  });

  const [results, setResults] = useState<any>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculatePerformance = () => {
    const employees = parseInt(formData.employees) || 0;
    const toolCount = parseInt(formData.currentToolCount) || 0;
    const monthlySpend = parseFloat(formData.monthlyAISpend) || 0;
    const productivity = parseFloat(formData.productivityGains) || 0;
    const errorRate = parseFloat(formData.errorRate) || 0;
    const satisfaction = parseFloat(formData.userSatisfaction) || 0;
    const timeToValue = parseInt(formData.timeToValue) || 0;

    // Performance calculations
    const costPerEmployee = monthlySpend / employees;
    const productivityRatio = productivity / 100;
    const qualityScore = (100 - errorRate) / 100;
    const adoptionScore = satisfaction / 10;
    const efficiencyScore = Math.max(1, (180 - timeToValue) / 180);

    // Composite performance index (0-100)
    const performanceIndex = Math.round(
      (productivityRatio * 25 + qualityScore * 25 + adoptionScore * 25 + efficiencyScore * 25) * 100
    );

    // ROI calculations
    const costSavingsPerEmployee = (costPerEmployee * productivityRatio) * 12;
    const annualSavings = costSavingsPerEmployee * employees;
    const roi = ((annualSavings - (monthlySpend * 12)) / (monthlySpend * 12)) * 100;

    // Benchmarks and recommendations
    let performanceGrade = 'D';
    let recommendations = [];
    
    if (performanceIndex >= 90) {
      performanceGrade = 'A+';
      recommendations.push('Exceptional performance! Consider scaling to additional departments.');
      recommendations.push('Document best practices for company-wide adoption.');
    } else if (performanceIndex >= 80) {
      performanceGrade = 'A';
      recommendations.push('Strong performance. Focus on optimizing user workflows.');
      recommendations.push('Consider advanced AI features for power users.');
    } else if (performanceIndex >= 70) {
      performanceGrade = 'B';
      recommendations.push('Good foundation. Improve training and change management.');
      recommendations.push('Address user satisfaction concerns through better support.');
    } else if (performanceIndex >= 60) {
      performanceGrade = 'C';
      recommendations.push('Average performance. Review tool selection and usage patterns.');
      recommendations.push('Implement structured training programs.');
    } else {
      performanceGrade = 'D';
      recommendations.push('Performance below expectations. Consider strategy reassessment.');
      recommendations.push('Focus on change management and user adoption.');
    }

    // Risk assessment
    const risks = [];
    if (errorRate > 15) risks.push('High error rate indicates quality issues');
    if (satisfaction < 6) risks.push('Low user satisfaction threatens adoption');
    if (timeToValue > 120) risks.push('Slow time-to-value may impact ROI');
    if (costPerEmployee > 500) risks.push('High cost per employee requires justification');

    setResults({
      performanceIndex,
      performanceGrade,
      costPerEmployee: costPerEmployee.toFixed(2),
      annualSavings: annualSavings.toFixed(0),
      roi: roi.toFixed(1),
      recommendations,
      risks,
      qualityScore: (qualityScore * 100).toFixed(1),
      adoptionScore: (adoptionScore * 10).toFixed(1),
      efficiencyScore: (efficiencyScore * 100).toFixed(1)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Performance Monitoring Dashboard 2026
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Track, measure, and optimize your enterprise AI implementations with real-time performance analytics
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <p className="text-blue-800">
                <strong>Enterprise Intelligence:</strong> Get comprehensive insights into AI tool performance, 
                user adoption, and ROI optimization opportunities across your organization.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Current AI Implementation Metrics</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Employees Using AI Tools
                  </label>
                  <input
                    type="number"
                    value={formData.employees}
                    onChange={(e) => handleInputChange('employees', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 150"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of AI Tools Currently Deployed
                  </label>
                  <input
                    type="number"
                    value={formData.currentToolCount}
                    onChange={(e) => handleInputChange('currentToolCount', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 8"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly AI Tools Spending ($)
                  </label>
                  <input
                    type="number"
                    value={formData.monthlyAISpend}
                    onChange={(e) => handleInputChange('monthlyAISpend', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 25000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Average Productivity Gains (%)
                  </label>
                  <input
                    type="number"
                    value={formData.productivityGains}
                    onChange={(e) => handleInputChange('productivityGains', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 25"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Error/Quality Issues Rate (%)
                  </label>
                  <input
                    type="number"
                    value={formData.errorRate}
                    onChange={(e) => handleInputChange('errorRate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 8"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    User Satisfaction Score (1-10)
                  </label>
                  <input
                    type="number"
                    value={formData.userSatisfaction}
                    onChange={(e) => handleInputChange('userSatisfaction', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 7.5"
                    step="0.1"
                    min="1"
                    max="10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Average Time to Value (Days)
                  </label>
                  <input
                    type="number"
                    value={formData.timeToValue}
                    onChange={(e) => handleInputChange('timeToValue', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 45"
                  />
                </div>
              </div>

              <button
                onClick={calculatePerformance}
                className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
              >
                Analyze AI Performance
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              {results ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Performance Analysis Results</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Overall Performance Grade</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-blue-600">{results.performanceGrade}</span>
                        <span className="text-2xl font-semibold text-gray-700">{results.performanceIndex}/100</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h4 className="font-semibold text-gray-800">Annual Savings</h4>
                        <p className="text-2xl font-bold text-green-600">${results.annualSavings}</p>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                        <h4 className="font-semibold text-gray-800">ROI</h4>
                        <p className="text-2xl font-bold text-purple-600">{results.roi}%</p>
                      </div>

                      <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                        <h4 className="font-semibold text-gray-800">Cost/Employee</h4>
                        <p className="text-2xl font-bold text-yellow-600">${results.costPerEmployee}</p>
                      </div>

                      <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                        <h4 className="font-semibold text-gray-800">Quality Score</h4>
                        <p className="text-2xl font-bold text-indigo-600">{results.qualityScore}%</p>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Recommendations</h3>
                      <ul className="space-y-2">
                        {results.recommendations.map((rec: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-600 mr-2">•</span>
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {results.risks.length > 0 && (
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Risk Alerts</h3>
                        <ul className="space-y-2">
                          {results.risks.map((risk: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red-600 mr-2">⚠</span>
                              <span className="text-gray-700">{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">
                    Enter your AI implementation metrics to receive a comprehensive performance analysis
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AI Performance Monitoring Matters</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance Visibility</h3>
                <p className="text-gray-600">Track real-time metrics across all AI implementations</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">ROI Optimization</h3>
                <p className="text-gray-600">Maximize returns on AI investments with data-driven insights</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid Optimization</h3>
                <p className="text-gray-600">Identify and address performance bottlenecks quickly</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Enterprise-Grade Analytics Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Real-time performance dashboards
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    User adoption tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Quality & accuracy monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Cost-per-outcome analysis
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Predictive performance modeling
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Automated alerting system
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Benchmark comparisons
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Executive reporting suite
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-blue-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your AI Performance?</h3>
              <p className="text-xl mb-6">
                Get professional guidance on implementing enterprise AI performance monitoring
              </p>
              <a 
                href="mailto:hello@sitepilot.co" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule AI Performance Consultation
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}