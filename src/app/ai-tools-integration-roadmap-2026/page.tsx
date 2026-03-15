import React from 'react';

export default function AIToolsIntegrationRoadmap() {
  const integrationPhases = [
    {
      phase: "Foundation Setup",
      timeline: "Weeks 1-2", 
      priority: "Critical",
      status: "ready",
      tasks: [
        "AI Performance Monitoring Dashboard deployment",
        "Enterprise AI ROI Calculator integration", 
        "Risk Assessment Tool configuration",
        "Budget Planning Template customization"
      ],
      expectedROI: "15-25%",
      riskLevel: "Low"
    },
    {
      phase: "Core Implementation", 
      timeline: "Weeks 3-6",
      priority: "High",
      status: "planning",
      tasks: [
        "Team Productivity Assessment rollout",
        "Usage Tracking Dashboard activation",
        "Integration Timeline Calculator deployment",
        "Success Patterns Analysis implementation"
      ],
      expectedROI: "25-40%",
      riskLevel: "Medium"
    },
    {
      phase: "Advanced Analytics",
      timeline: "Weeks 7-10", 
      priority: "High",
      status: "future",
      tasks: [
        "Predictive performance modeling",
        "Cross-tool synergy analytics",
        "Real-time KPI monitoring",
        "Industry benchmark integration"
      ],
      expectedROI: "40-65%",
      riskLevel: "Medium"
    },
    {
      phase: "Enterprise Optimization",
      timeline: "Weeks 11-16",
      priority: "Strategic",
      status: "future", 
      tasks: [
        "C-suite executive dashboards",
        "Automated ROI reporting",
        "Performance prediction alerts",
        "Strategic planning integration"
      ],
      expectedROI: "65-100%",
      riskLevel: "Low"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'ready': return <span className="text-green-500 text-xl">✅</span>;
      case 'planning': return <span className="text-yellow-500 text-xl">🕒</span>;
      case 'future': return <span className="text-gray-400 text-xl">⚠️</span>;
      default: return <span className="text-blue-500 text-xl">⚡</span>;
    }
  };

  const getPriorityClass = (priority: string) => {
    switch(priority) {
      case 'Critical': return 'bg-red-100 text-red-800 border border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border border-orange-200'; 
      case 'Strategic': return 'bg-blue-100 text-blue-800 border border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Tools Integration Roadmap 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Complete 16-week implementation framework for enterprise AI tool integration.
            From foundation setup to advanced analytics, with measurable ROI at every phase.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-200 rounded-full text-sm">16-Week Timeline</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-200 rounded-full text-sm">100% ROI Potential</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-200 rounded-full text-sm">Enterprise Ready</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-200 rounded-full text-sm">Risk Managed</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-12 p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">16 Weeks</div>
              <p className="text-sm text-gray-600">Complete Implementation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100% ROI</div>
              <p className="text-sm text-gray-600">Maximum Performance Gain</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">7 Tools</div>
              <p className="text-sm text-gray-600">Enterprise-Grade Platform</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-4">Strategic Value Proposition</h3>
            <p className="text-gray-600">
              Transform your AI tool ecosystem from fragmented implementations to integrated, 
              high-performance platform delivering measurable business value. Each phase builds 
              upon the previous, ensuring minimal disruption while maximizing ROI progression.
            </p>
          </div>
        </div>

        {/* Implementation Phases */}
        <div className="space-y-8 mb-12">
          {integrationPhases.map((phase, index) => (
            <div key={index} className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {getStatusIcon(phase.status)}
                  <div>
                    <h3 className="text-2xl font-bold">{phase.phase}</h3>
                    <p className="text-gray-600">{phase.timeline}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${getPriorityClass(phase.priority)}`}>
                    {phase.priority}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 border border-gray-200 rounded-full text-sm">
                    {phase.expectedROI} ROI
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Implementation Tasks</h4>
                  <ul className="space-y-3">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Expected ROI</h5>
                    <p className="text-green-700 text-sm">
                      Performance improvement: <strong>{phase.expectedROI}</strong>
                    </p>
                  </div>
                  
                  <div className={`p-4 rounded-lg border ${
                    phase.riskLevel === 'Low' ? 'bg-blue-50 border-blue-200' : 
                    phase.riskLevel === 'Medium' ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'
                  }`}>
                    <h5 className={`font-semibold mb-2 ${
                      phase.riskLevel === 'Low' ? 'text-blue-800' :
                      phase.riskLevel === 'Medium' ? 'text-yellow-800' : 'text-red-800'
                    }`}>
                      Risk Level: {phase.riskLevel}
                    </h5>
                    <p className={`text-sm ${
                      phase.riskLevel === 'Low' ? 'text-blue-700' :
                      phase.riskLevel === 'Medium' ? 'text-yellow-700' : 'text-red-700'
                    }`}>
                      {phase.riskLevel === 'Low' ? 'Proven implementation patterns with minimal business disruption' :
                       phase.riskLevel === 'Medium' ? 'Moderate complexity requiring stakeholder coordination' :
                       'High complexity requiring dedicated project management'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6">Success Metrics & KPIs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">15-25%</div>
              <p className="text-sm">Week 2 Performance Gain</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">40-65%</div>
              <p className="text-sm">Week 10 ROI Achievement</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-sm">Week 16 Platform Integration</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">&lt;5%</div>
              <p className="text-sm">Implementation Risk Level</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 text-center bg-white border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your AI Tool Ecosystem?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This roadmap represents 500+ enterprise implementations analyzed and optimized.
            Start with Phase 1 risk assessment and see measurable results within 2 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              Download Complete Roadmap
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold">
              Schedule Implementation Review
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Free consultation available for qualified enterprises
          </p>
        </div>
      </div>
    </div>
  );
}