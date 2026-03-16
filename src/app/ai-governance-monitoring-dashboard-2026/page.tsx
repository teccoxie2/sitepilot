'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ComplianceStatus {
  framework: string;
  status: 'compliant' | 'partial' | 'non-compliant';
  score: number;
  criticalIssues: number;
}

interface RiskAlert {
  type: 'high' | 'medium' | 'low';
  category: string;
  description: string;
  timestamp: string;
  status: 'active' | 'resolved';
}

interface GovernanceMetric {
  name: string;
  current: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  unit: string;
}

export default function AIGovernanceMonitoringDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('7d');
  const [complianceData, setComplianceData] = useState<ComplianceStatus[]>([]);
  const [riskAlerts, setRiskAlerts] = useState<RiskAlert[]>([]);
  const [governanceMetrics, setGovernanceMetrics] = useState<GovernanceMetric[]>([]);
  const [overallGovernanceScore, setOverallGovernanceScore] = useState<number>(0);

  useEffect(() => {
    // Simulate API data loading
    setComplianceData([
      { framework: 'GDPR', status: 'compliant', score: 92, criticalIssues: 0 },
      { framework: 'SOX', status: 'compliant', score: 89, criticalIssues: 0 },
      { framework: 'HIPAA', status: 'partial', score: 76, criticalIssues: 2 },
      { framework: 'CCPA', status: 'compliant', score: 94, criticalIssues: 0 },
      { framework: 'ISO 27001', status: 'partial', score: 82, criticalIssues: 1 },
      { framework: 'NIST Framework', status: 'compliant', score: 87, criticalIssues: 0 }
    ]);

    setRiskAlerts([
      {
        type: 'high',
        category: 'Data Privacy',
        description: 'Anomalous data access pattern detected in production AI models',
        timestamp: '2026-03-16 23:45',
        status: 'active'
      },
      {
        type: 'medium',
        category: 'Model Performance',
        description: 'Bias detection threshold exceeded in customer segmentation model',
        timestamp: '2026-03-16 23:15',
        status: 'active'
      },
      {
        type: 'medium',
        category: 'Compliance',
        description: 'HIPAA audit trail gaps identified in healthcare AI system',
        timestamp: '2026-03-16 22:30',
        status: 'active'
      },
      {
        type: 'low',
        category: 'Operations',
        description: 'Model training data lineage documentation incomplete',
        timestamp: '2026-03-16 21:45',
        status: 'resolved'
      }
    ]);

    setGovernanceMetrics([
      { name: 'AI Model Transparency Score', current: 87, target: 90, trend: 'up', unit: '%' },
      { name: 'Bias Testing Coverage', current: 94, target: 95, trend: 'up', unit: '%' },
      { name: 'Data Lineage Completeness', current: 78, target: 85, trend: 'stable', unit: '%' },
      { name: 'Compliance Automation Rate', current: 82, target: 90, trend: 'up', unit: '%' },
      { name: 'Governance Process Maturity', current: 3.8, target: 4.5, trend: 'up', unit: '/5' },
      { name: 'Risk Response Time', current: 4.2, target: 2.0, trend: 'down', unit: 'hrs' }
    ]);

    setOverallGovernanceScore(85);
  }, [selectedTimeframe]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'text-green-600 bg-green-100';
      case 'partial': return 'text-yellow-600 bg-yellow-100';
      case 'non-compliant': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-blue-500 bg-blue-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      case 'stable': return '→';
      default: return '→';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI Governance Monitoring Dashboard 2026</h1>
              <p className="text-gray-600 mt-1">Real-time AI governance, compliance, and risk monitoring for enterprise operations</p>
            </div>
            <div className="flex space-x-3">
              <select 
                value={selectedTimeframe} 
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1d">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overall Governance Score */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Overall AI Governance Score</h2>
              <span className="text-sm text-gray-500">Updated: March 16, 2026 11:52 PM</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">{overallGovernanceScore}</div>
                <div className="text-sm text-gray-500">Governance Score</div>
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" 
                  style={{ width: `${overallGovernanceScore}%` }}
                ></div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-green-600">Excellent</div>
                <div className="text-sm text-gray-500">Governance Health</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Status Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 lg:col-span-3">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Compliance Framework Status</h2>
          </div>
          {complianceData.map((framework, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-gray-900">{framework.framework}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(framework.status)}`}>
                  {framework.status === 'compliant' ? 'Compliant' : 
                   framework.status === 'partial' ? 'Partial' : 'Non-Compliant'}
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Compliance Score</span>
                    <span className="font-medium">{framework.score}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        framework.score >= 90 ? 'bg-green-500' :
                        framework.score >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${framework.score}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Critical Issues</span>
                  <span className={`font-medium ${framework.criticalIssues === 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {framework.criticalIssues}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Risk Alerts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Risk Alerts</h2>
            <div className="space-y-3">
              {riskAlerts.filter(alert => alert.status === 'active').map((alert, index) => (
                <div key={index} className={`border-l-4 rounded-lg p-4 ${getAlertColor(alert.type)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          alert.type === 'high' ? 'bg-red-600 text-white' :
                          alert.type === 'medium' ? 'bg-yellow-600 text-white' :
                          'bg-blue-600 text-white'
                        }`}>
                          {alert.type.toUpperCase()}
                        </span>
                        <span className="text-sm font-medium text-gray-700">{alert.category}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{alert.timestamp}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Governance Metrics</h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                {governanceMetrics.map((metric, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-gray-900">
                          {metric.current}{metric.unit}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                          {getTrendIcon(metric.trend)}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Target: {metric.target}{metric.unit}</span>
                      <span>{Math.round((metric.current / metric.target) * 100)}% of target</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          metric.current >= metric.target ? 'bg-green-500' :
                          metric.current >= metric.target * 0.8 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ 
                          width: `${Math.min(100, (metric.current / metric.target) * 100)}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Items & Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Governance Action Items</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
              <h4 className="font-medium text-yellow-800 mb-2">🔧 Immediate Actions (Next 24h)</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Investigate anomalous data access in production models</li>
                <li>• Complete HIPAA audit trail documentation</li>
                <li>• Review bias threshold configuration</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <h4 className="font-medium text-blue-800 mb-2">📋 Short-term (This Week)</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Enhance data lineage tracking coverage to 85%</li>
                <li>• Implement automated bias testing workflows</li>
                <li>• Update AI model transparency documentation</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <h4 className="font-medium text-green-800 mb-2">🎯 Long-term (This Month)</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Achieve 90% compliance automation rate</li>
                <li>• Reduce risk response time to under 2 hours</li>
                <li>• Implement predictive governance analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tool Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl text-white p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Enterprise AI Governance at Your Fingertips</h2>
            <p className="text-blue-100 mb-6">
              Monitor compliance, track risks, and ensure responsible AI deployment across your organization. 
              This dashboard provides real-time insights into your AI governance posture with automated 
              alerts and actionable recommendations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-100">Continuous Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold">6+</div>
                <div className="text-blue-100">Compliance Frameworks</div>
              </div>
              <div>
                <div className="text-3xl font-bold">&lt;2h</div>
                <div className="text-blue-100">Risk Response Time</div>
              </div>
            </div>
            <div className="mt-6 space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule Demo
              </button>
              <Link href="/enterprise-ai-risk-assessment-tool-2026" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block">
                Risk Assessment Tool →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Related AI Governance Tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/enterprise-ai-risk-assessment-tool-2026" className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Risk Assessment</h4>
              <p className="text-sm text-gray-600">Comprehensive AI risk evaluation framework</p>
            </Link>
            <Link href="/ai-investment-payback-period-calculator-2026" className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">ROI Calculator</h4>
              <p className="text-sm text-gray-600">Calculate AI investment returns and payback periods</p>
            </Link>
            <Link href="/ai-team-productivity-assessment-tool-2026" className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Team Assessment</h4>
              <p className="text-sm text-gray-600">Evaluate team readiness for AI adoption</p>
            </Link>
            <Link href="/enterprise-ai-vendor-comparison-guide-2026" className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Vendor Comparison</h4>
              <p className="text-sm text-gray-600">Compare enterprise AI solution providers</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}