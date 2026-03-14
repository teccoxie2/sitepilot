"use client"

import { useState } from 'react';

export default function AIContentAuditTool() {
  const [auditData, setAuditData] = useState({
    contentVolume: '100',
    contentTypes: ['blog'],
    currentPerformance: '50',
    aiUsage: 'none',
    businessGoals: 'traffic'
  });

  const [results, setResults] = useState<{
    qualityScore: number;
    efficiencyGain: number;
    monthlyCostSavings: number;
    trafficIncrease: number;
    conversionIncrease: number;
    roi: number;
    recommendations: Array<{
      priority: string;
      action: string;
      impact: string;
      timeframe: string;
    }>;
  } | null>(null);

  const handleInputChange = (field: string, value: string | string[]) => {
    setAuditData({ ...auditData, [field]: value });
  };

  const calculateAudit = () => {
    const volume = parseInt(auditData.contentVolume);
    const performance = parseInt(auditData.currentPerformance);
    const aiMultiplier = auditData.aiUsage === 'none' ? 1 : auditData.aiUsage === 'basic' ? 1.3 : 2.2;
    const typeMultiplier = auditData.contentTypes.length * 0.3 + 0.7;

    // Content Quality Score
    const qualityScore = Math.min(95, performance * aiMultiplier * typeMultiplier);
    
    // Efficiency Gains
    const efficiencyGain = auditData.aiUsage === 'none' ? 40 : auditData.aiUsage === 'basic' ? 25 : 15;
    
    // Cost Savings (per month)
    const monthlyCostSavings = Math.round(volume * 15 * (efficiencyGain / 100));
    
    // Performance Improvements
    const trafficIncrease = Math.round(qualityScore * 0.8);
    const conversionIncrease = Math.round(qualityScore * 0.3);

    // ROI Calculation
    const monthlyAIToolCost = auditData.aiUsage === 'advanced' ? 500 : 200;
    const roi = Math.round(((monthlyCostSavings * 12) / (monthlyAIToolCost * 12)) * 100);

    setResults({
      qualityScore,
      efficiencyGain,
      monthlyCostSavings,
      trafficIncrease,
      conversionIncrease,
      roi,
      recommendations: generateRecommendations(auditData, qualityScore, efficiencyGain)
    });
  };

  const generateRecommendations = (data: any, quality: number, efficiency: number) => {
    const recommendations = [];

    if (data.aiUsage === 'none') {
      recommendations.push({
        priority: 'High',
        action: 'Start with AI content optimization',
        impact: 'Immediate 40% efficiency gain',
        timeframe: '1-2 weeks'
      });
    }

    if (quality < 70) {
      recommendations.push({
        priority: 'High', 
        action: 'Content quality assessment and improvement',
        impact: `Potential ${100 - quality}% quality increase`,
        timeframe: '2-4 weeks'
      });
    }

    if (data.contentTypes.length < 3) {
      recommendations.push({
        priority: 'Medium',
        action: 'Diversify content formats',
        impact: 'Reach broader audience segments',
        timeframe: '4-6 weeks'
      });
    }

    if (efficiency < 30) {
      recommendations.push({
        priority: 'High',
        action: 'Implement AI workflow automation',
        impact: 'Reduce production time by 50%',
        timeframe: '2-3 weeks'
      });
    }

    return recommendations;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Content Audit Tool 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Analyze your content strategy and discover AI optimization opportunities. 
            Get actionable insights to improve quality, efficiency, and ROI.
          </p>
          <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-yellow-800 font-medium">
              🚀 Enterprise Content Strategy Audit - Get professional insights in 5 minutes
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Content Audit Assessment</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Content Volume */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Content Volume
                </label>
                <select
                  value={auditData.contentVolume}
                  onChange={(e) => handleInputChange('contentVolume', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="50">1-50 pieces</option>
                  <option value="100">51-100 pieces</option>
                  <option value="200">101-200 pieces</option>
                  <option value="500">200+ pieces</option>
                </select>
              </div>

              {/* Content Types */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Types (Select All That Apply)
                </label>
                <div className="space-y-2">
                  {['blog', 'social', 'email', 'video', 'podcasts', 'whitepapers'].map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={auditData.contentTypes.includes(type)}
                        onChange={(e) => {
                          const types = e.target.checked 
                            ? [...auditData.contentTypes, type]
                            : auditData.contentTypes.filter(t => t !== type);
                          handleInputChange('contentTypes', types);
                        }}
                        className="mr-2"
                      />
                      <span className="capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Current Performance */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Content Performance Score (1-100)
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={auditData.currentPerformance}
                  onChange={(e) => handleInputChange('currentPerformance', e.target.value)}
                  className="w-full"
                />
                <div className="text-center text-lg font-bold text-blue-600 mt-2">
                  {auditData.currentPerformance}/100
                </div>
              </div>

              {/* AI Usage Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current AI Usage Level
                </label>
                <select
                  value={auditData.aiUsage}
                  onChange={(e) => handleInputChange('aiUsage', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="none">No AI tools currently</option>
                  <option value="basic">Basic AI assistance (ChatGPT, etc.)</option>
                  <option value="advanced">Advanced AI workflow integration</option>
                </select>
              </div>

              {/* Business Goals */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Business Goal
                </label>
                <select
                  value={auditData.businessGoals}
                  onChange={(e) => handleInputChange('businessGoals', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="traffic">Increase website traffic</option>
                  <option value="leads">Generate more leads</option>
                  <option value="brand">Build brand authority</option>
                  <option value="efficiency">Improve content efficiency</option>
                  <option value="revenue">Drive direct revenue</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculateAudit}
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors mt-6"
            >
              🔍 Generate Content Audit Report
            </button>
          </div>

          {/* Results */}
          {results && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Content Audit Results</h2>
              
              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {results.qualityScore}%
                  </div>
                  <div className="text-green-800 font-medium">Content Quality Score</div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {results.efficiencyGain}%
                  </div>
                  <div className="text-blue-800 font-medium">Potential Efficiency Gain</div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    ${results.monthlyCostSavings}
                  </div>
                  <div className="text-purple-800 font-medium">Monthly Cost Savings</div>
                </div>
              </div>

              {/* Performance Projections */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Performance Improvements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="font-semibold text-orange-800 mb-2">Traffic Increase</div>
                    <div className="text-2xl font-bold text-orange-600">{results.trafficIncrease}%</div>
                    <div className="text-sm text-orange-700">Expected within 6 months</div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="font-semibold text-teal-800 mb-2">Conversion Rate Improvement</div>
                    <div className="text-2xl font-bold text-teal-600">{results.conversionIncrease}%</div>
                    <div className="text-sm text-teal-700">Through better content quality</div>
                  </div>
                </div>
              </div>

              {/* ROI Analysis */}
              <div className="mb-8 p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-2">💰 ROI Analysis</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">{results.roi}% Annual ROI</div>
                <p className="text-green-700">
                  Based on efficiency gains and cost savings from AI content optimization
                </p>
              </div>

              {/* Recommendations */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">🚀 Priority Recommendations</h3>
                <div className="space-y-4">
                  {results.recommendations.map((rec, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-semibold text-gray-800">{rec.action}</div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          rec.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {rec.priority} Priority
                        </span>
                      </div>
                      <div className="text-gray-600 mb-2">{rec.impact}</div>
                      <div className="text-sm text-gray-500">Timeline: {rec.timeframe}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Ready to Optimize Your Content Strategy?</h3>
                <p className="text-blue-700 mb-4">
                  Get a personalized content optimization plan and AI implementation roadmap.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Schedule Free Strategy Consultation
                </button>
              </div>
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎯 Why Content Auditing Matters in 2026</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Current Market Reality</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 87% of businesses struggle with content ROI measurement</li>
                  <li>• Average content marketing costs up 35% year-over-year</li>
                  <li>• AI-optimized content performs 60% better than traditional</li>
                  <li>• 73% of marketers lack systematic content auditing</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">2026 Competitive Advantages</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI-powered personalization at scale</li>
                  <li>• Real-time content performance optimization</li>
                  <li>• Automated A/B testing and iteration</li>
                  <li>• Cross-platform content repurposing efficiency</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800">
                <strong>Pro Tip:</strong> Companies that conduct quarterly content audits see 45% better ROI 
                than those who don't track performance systematically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}