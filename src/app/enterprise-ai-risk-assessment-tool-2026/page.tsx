"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, DollarSign, TrendingUp, Users, Shield, Clock, BarChart3, Calculator, Target } from "lucide-react";

export default function EnterpriseAIRiskAssessmentTool() {
  const [assessmentData, setAssessmentData] = useState({
    company_size: '',
    ai_budget: '',
    implementation_timeline: '',
    current_ai_experience: '',
    data_readiness: '',
    change_management: '',
    technical_infrastructure: '',
    regulatory_compliance: '',
    roi_expectations: '',
    risk_tolerance: ''
  });

  const [results, setResults] = useState<{
    riskScore: number;
    riskLevel: string;
    recommendations: string[];
    expectedROI: number;
    mitigationStrategies: string[];
  } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setAssessmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateRiskScore = () => {
    let riskScore = 0;
    let recommendations = [];
    
    // Company size risk factor
    if (assessmentData.company_size === 'startup') riskScore += 20;
    else if (assessmentData.company_size === 'mid') riskScore += 10;
    else if (assessmentData.company_size === 'enterprise') riskScore += 5;

    // Budget risk factor
    const budget = parseInt(assessmentData.ai_budget);
    if (budget > 5000000) riskScore += 25; // Very high budget = high risk
    else if (budget > 1000000) riskScore += 15;
    else if (budget > 500000) riskScore += 10;
    else riskScore += 5;

    // Experience factor
    if (assessmentData.current_ai_experience === 'none') riskScore += 25;
    else if (assessmentData.current_ai_experience === 'limited') riskScore += 15;
    else if (assessmentData.current_ai_experience === 'moderate') riskScore += 10;

    // Data readiness
    if (assessmentData.data_readiness === 'poor') riskScore += 30;
    else if (assessmentData.data_readiness === 'fair') riskScore += 15;
    else if (assessmentData.data_readiness === 'good') riskScore += 5;

    // Generate recommendations based on risk factors
    if (assessmentData.current_ai_experience === 'none') {
      recommendations.push("Start with AI pilot project ($50K-100K) before major investment");
    }
    if (assessmentData.data_readiness === 'poor') {
      recommendations.push("Invest 20-30% of budget in data infrastructure before AI implementation");
    }
    if (parseInt(assessmentData.ai_budget) > 2000000) {
      recommendations.push("Implement phased approach with financial gates every 6 months");
    }

    const riskLevel = riskScore > 60 ? 'High' : riskScore > 30 ? 'Medium' : 'Low';
    
    setResults({
      riskScore,
      riskLevel,
      recommendations,
      expectedROI: calculateExpectedROI(riskScore),
      mitigationStrategies: generateMitigationStrategies(riskScore)
    });
  };

  const calculateExpectedROI = (riskScore: number) => {
    const baseROI = 25; // Base expected ROI percentage
    const riskPenalty = Math.floor(riskScore / 10) * 3;
    return Math.max(baseROI - riskPenalty, 5);
  };

  const generateMitigationStrategies = (riskScore: number) => {
    const strategies = [];
    if (riskScore > 60) {
      strategies.push("Reduce scope and focus on single high-impact use case");
      strategies.push("Extend timeline by 6-12 months for proper preparation");
      strategies.push("Hire external AI implementation consultant");
    } else if (riskScore > 30) {
      strategies.push("Implement robust change management program");
      strategies.push("Establish clear success metrics and monitoring");
    }
    strategies.push("Regular financial review gates every quarter");
    return strategies;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <h1 className="text-xl font-bold text-slate-900">SitePilot</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="/ai-tools" className="text-slate-600 hover:text-blue-600 transition-colors">AI Tools</Link>
              <Link href="/best-ai-tools-small-business-2026" className="text-slate-600 hover:text-blue-600 transition-colors">Business Tools</Link>
              <Link href="/enterprise-ai-implementation-best-practices-2026" className="text-slate-600 hover:text-blue-600 transition-colors">Enterprise</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Enterprise AI Risk Assessment
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            AI Investment Risk Calculator
            <span className="block text-blue-600">CFO-Grade Analysis</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Evaluate financial risks, hidden costs, and success probability for your enterprise AI investment. 
            Get CFO-ready risk assessment with mitigation strategies.
          </p>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Enterprise AI Investment Assessment</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Company Size */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Company Size</label>
                <select 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={assessmentData.company_size}
                  onChange={(e) => handleInputChange('company_size', e.target.value)}
                >
                  <option value="">Select company size</option>
                  <option value="startup">Startup (1-50 employees)</option>
                  <option value="mid">Mid-market (51-1000 employees)</option>
                  <option value="enterprise">Enterprise (1000+ employees)</option>
                </select>
              </div>

              {/* AI Budget */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Total AI Investment Budget</label>
                <select 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={assessmentData.ai_budget}
                  onChange={(e) => handleInputChange('ai_budget', e.target.value)}
                >
                  <option value="">Select budget range</option>
                  <option value="100000">$100K - $500K</option>
                  <option value="750000">$500K - $1M</option>
                  <option value="2000000">$1M - $3M</option>
                  <option value="5000000">$3M - $10M</option>
                  <option value="10000000">$10M+</option>
                </select>
              </div>

              {/* Implementation Timeline */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Implementation Timeline</label>
                <select 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={assessmentData.implementation_timeline}
                  onChange={(e) => handleInputChange('implementation_timeline', e.target.value)}
                >
                  <option value="">Select timeline</option>
                  <option value="3">3-6 months</option>
                  <option value="9">6-12 months</option>
                  <option value="18">12-24 months</option>
                  <option value="36">24+ months</option>
                </select>
              </div>

              {/* Current AI Experience */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Current AI Experience</label>
                <select 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={assessmentData.current_ai_experience}
                  onChange={(e) => handleInputChange('current_ai_experience', e.target.value)}
                >
                  <option value="">Select experience level</option>
                  <option value="none">No AI experience</option>
                  <option value="limited">Limited AI pilots</option>
                  <option value="moderate">Some AI implementations</option>
                  <option value="extensive">Extensive AI experience</option>
                </select>
              </div>

              {/* Data Readiness */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Data Infrastructure Readiness</label>
                <select 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={assessmentData.data_readiness}
                  onChange={(e) => handleInputChange('data_readiness', e.target.value)}
                >
                  <option value="">Select data readiness</option>
                  <option value="poor">Poor - Data silos, quality issues</option>
                  <option value="fair">Fair - Some integration, inconsistent quality</option>
                  <option value="good">Good - Integrated, clean data systems</option>
                  <option value="excellent">Excellent - AI-ready data infrastructure</option>
                </select>
              </div>

              {/* Change Management */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Change Management Capability</label>
                <select 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={assessmentData.change_management}
                  onChange={(e) => handleInputChange('change_management', e.target.value)}
                >
                  <option value="">Select capability level</option>
                  <option value="weak">Weak - High resistance to change</option>
                  <option value="moderate">Moderate - Some change experience</option>
                  <option value="strong">Strong - Proven change management</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculateRiskScore}
              className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Risk Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {results && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Risk Assessment Results</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <div className={`text-3xl font-bold mb-2 ${
                    results.riskLevel === 'High' ? 'text-red-600' :
                    results.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {results.riskScore}%
                  </div>
                  <div className="text-sm text-slate-600">Risk Score</div>
                  <div className={`text-lg font-semibold ${
                    results.riskLevel === 'High' ? 'text-red-600' :
                    results.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {results.riskLevel} Risk
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2 text-blue-600">
                    {results.expectedROI}%
                  </div>
                  <div className="text-sm text-slate-600">Expected ROI</div>
                  <div className="text-lg font-semibold text-slate-900">
                    12-Month Target
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2 text-green-600">
                    {Math.max(100 - results.riskScore, 20)}%
                  </div>
                  <div className="text-sm text-slate-600">Success Probability</div>
                  <div className="text-lg font-semibold text-slate-900">
                    Implementation
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Recommendations</h3>
                <div className="space-y-3">
                  {results.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mitigation Strategies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Risk Mitigation Strategies</h3>
                <div className="space-y-3">
                  {results.mitigationStrategies.map((strategy, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Need Detailed Financial Analysis?</h4>
                <p className="text-slate-600 mb-4">
                  Get a comprehensive CFO-grade risk assessment with detailed financial modeling, 
                  ROI projections, and implementation roadmap.
                </p>
                <Link 
                  href="/enterprise-ai-roi-optimization-framework-2026"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Enterprise ROI Framework
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Enterprise AI Investment Analysis</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Professional financial modeling and risk assessment for enterprise AI implementations. 
              CFO-grade analysis for Fortune 500 decision makers.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <Link href="/enterprise-ai-implementation-best-practices-2026" className="text-slate-400 hover:text-white transition-colors">
                Implementation Guide
              </Link>
              <Link href="/manufacturing-ai-roi-calculator-2026" className="text-slate-400 hover:text-white transition-colors">
                ROI Calculator
              </Link>
              <Link href="/enterprise-ai-success-patterns-analysis-2026" className="text-slate-400 hover:text-white transition-colors">
                Success Patterns
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}