import { Metadata } from 'next'
import { ArrowRight, Shield, CheckCircle, AlertTriangle, Scale, Eye, Users, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Enterprise AI Ethics & Compliance Checklist 2026 | SitePilot',
  description: 'Comprehensive AI ethics and compliance checklist for enterprise deployments. GDPR, CCPA, AI Act compliance framework and ethical AI guidelines.',
  keywords: 'AI ethics checklist, AI compliance framework, GDPR AI compliance, ethical AI guidelines, AI governance checklist',
}

export default function AIEthicsComplianceChecklist() {
  const complianceAreas = [
    {
      category: "Data Protection & Privacy",
      regulation: "GDPR, CCPA, AI Act",
      items: [
        { task: "Data minimization principles implemented", status: "complete", priority: "high" },
        { task: "User consent mechanisms for AI processing", status: "complete", priority: "high" },
        { task: "Right to explanation procedures", status: "in-progress", priority: "high" },
        { task: "Data retention policies defined", status: "complete", priority: "medium" },
        { task: "Cross-border data transfer safeguards", status: "pending", priority: "medium" }
      ]
    },
    {
      category: "Algorithmic Transparency",
      regulation: "AI Act, FTC Guidelines",
      items: [
        { task: "Model interpretability documentation", status: "complete", priority: "high" },
        { task: "Decision-making process transparency", status: "in-progress", priority: "high" },
        { task: "Bias detection and mitigation procedures", status: "complete", priority: "high" },
        { task: "Automated decision-making disclosure", status: "complete", priority: "medium" },
        { task: "Algorithm audit trail maintenance", status: "in-progress", priority: "medium" }
      ]
    },
    {
      category: "Fairness & Non-Discrimination",
      regulation: "Equal Credit Opportunity Act, Fair Housing Act",
      items: [
        { task: "Protected class impact assessment", status: "complete", priority: "high" },
        { task: "Bias testing across demographics", status: "in-progress", priority: "high" },
        { task: "Fairness metrics monitoring", status: "complete", priority: "high" },
        { task: "Adverse impact analysis", status: "pending", priority: "medium" },
        { task: "Remediation procedures for bias", status: "complete", priority: "medium" }
      ]
    },
    {
      category: "Human Oversight",
      regulation: "AI Act, Industry Best Practices",
      items: [
        { task: "Human-in-the-loop processes", status: "complete", priority: "high" },
        { task: "Override mechanisms implemented", status: "complete", priority: "high" },
        { task: "Appeal procedures established", status: "in-progress", priority: "medium" },
        { task: "Staff training on AI systems", status: "complete", priority: "medium" },
        { task: "Escalation pathways defined", status: "complete", priority: "low" }
      ]
    }
  ]

  const ethicsFramework = [
    {
      principle: "Beneficence",
      description: "AI systems should benefit humanity and minimize harm",
      checks: [
        "Impact assessment completed",
        "Risk mitigation strategies in place",
        "Stakeholder benefit analysis",
        "Long-term societal impact considered"
      ]
    },
    {
      principle: "Non-maleficence",
      description: "AI systems should not cause harm or be used for harmful purposes",
      checks: [
        "Harmful use case prevention",
        "Security safeguards implemented",
        "Misuse monitoring systems",
        "Incident response procedures"
      ]
    },
    {
      principle: "Autonomy",
      description: "Respect human agency and decision-making capabilities",
      checks: [
        "User control mechanisms",
        "Informed consent processes",
        "Opt-out capabilities",
        "Human final decision rights"
      ]
    },
    {
      principle: "Justice",
      description: "Fair distribution of AI benefits and burdens",
      checks: [
        "Equitable access policies",
        "Fair resource allocation",
        "Inclusive design practices",
        "Bias prevention measures"
      ]
    },
    {
      principle: "Explicability",
      description: "AI decisions should be understandable and explainable",
      checks: [
        "Decision explanation systems",
        "Transparency documentation",
        "User-friendly explanations",
        "Technical documentation complete"
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Enterprise AI Ethics & Compliance Checklist 2026
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Comprehensive framework ensuring ethical AI deployment and regulatory compliance
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center mb-4">
            <Scale className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-lg font-semibold text-blue-800">Regulatory Compliance Framework</span>
          </div>
          <p className="text-blue-700">
            Aligned with GDPR, CCPA, EU AI Act, and emerging global AI regulations
          </p>
        </div>
      </div>

      {/* Compliance Overview Dashboard */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance Status Overview</h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-800">78%</div>
            <div className="text-sm text-green-600">Complete</div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-800">15%</div>
            <div className="text-sm text-yellow-600">In Progress</div>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg text-center">
            <FileText className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-800">7%</div>
            <div className="text-sm text-red-600">Pending</div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-800">High</div>
            <div className="text-sm text-blue-600">Risk Level</div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-gray-900 mb-4">Next Priority Actions</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white p-3 rounded-lg">
              <span className="text-gray-800">Complete bias testing across demographics</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Due in 3 days</span>
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded-lg">
              <span className="text-gray-800">Establish cross-border data transfer safeguards</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Overdue</span>
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded-lg">
              <span className="text-gray-800">Finalize right to explanation procedures</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">In review</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Compliance Checklist */}
      <div className="space-y-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Detailed Compliance Checklist</h2>
        
        {complianceAreas.map((area, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{area.category}</h3>
                <p className="text-sm text-gray-600">Regulations: {area.regulation}</p>
              </div>
              <div className="flex items-center">
                <div className="text-right mr-4">
                  <div className="text-sm text-gray-600">Completion</div>
                  <div className="font-semibold text-blue-800">
                    {Math.round((area.items.filter(item => item.status === 'complete').length / area.items.length) * 100)}%
                  </div>
                </div>
                <div className="w-16 bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full" 
                    style={{
                      width: `${(area.items.filter(item => item.status === 'complete').length / area.items.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {area.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    {item.status === 'complete' && <CheckCircle className="w-5 h-5 text-green-600 mr-3" />}
                    {item.status === 'in-progress' && <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3" />}
                    {item.status === 'pending' && <FileText className="w-5 h-5 text-red-600 mr-3" />}
                    <span className="text-gray-800">{item.task}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.priority === 'high' ? 'bg-red-100 text-red-800' :
                      item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.priority} priority
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      item.status === 'complete' ? 'bg-green-100 text-green-800' :
                      item.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.status === 'complete' ? 'Complete' :
                       item.status === 'in-progress' ? 'In Progress' :
                       'Pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Ethics Framework */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Ethics Framework</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ethicsFramework.map((principle, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-bold text-purple-900">{principle.principle}</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">{principle.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm">Implementation Checks:</h4>
                {principle.checks.map((check, checkIndex) => (
                  <div key={checkIndex} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-700">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Assessment Matrix */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Risk Assessment Matrix</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Risk Category</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Probability</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Impact</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Risk Level</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Mitigation Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Algorithmic Bias</td>
                <td className="py-3 px-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Medium</span></td>
                <td className="py-3 px-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span></td>
                <td className="py-3 px-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span></td>
                <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">In Progress</span></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Data Privacy Breach</td>
                <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Low</span></td>
                <td className="py-3 px-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span></td>
                <td className="py-3 px-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Medium</span></td>
                <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Mitigated</span></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Regulatory Non-compliance</td>
                <td className="py-3 px-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Medium</span></td>
                <td className="py-3 px-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Medium</span></td>
                <td className="py-3 px-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Medium</span></td>
                <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">In Progress</span></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Lack of Transparency</td>
                <td className="py-3 px-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">High</span></td>
                <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Low</span></td>
                <td className="py-3 px-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Medium</span></td>
                <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Mitigated</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Implementation Roadmap */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance Implementation Roadmap</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <div className="text-lg font-bold text-blue-800 mb-2">Phase 1</div>
            <div className="text-sm text-gray-600 mb-3">Weeks 1-4</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Data protection audit</li>
              <li>• Privacy impact assessment</li>
              <li>• Basic transparency measures</li>
              <li>• Initial bias testing</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="text-lg font-bold text-blue-800 mb-2">Phase 2</div>
            <div className="text-sm text-gray-600 mb-3">Weeks 5-8</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Algorithmic accountability</li>
              <li>• Fairness testing framework</li>
              <li>• Human oversight processes</li>
              <li>• Documentation standards</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="text-lg font-bold text-blue-800 mb-2">Phase 3</div>
            <div className="text-sm text-gray-600 mb-3">Weeks 9-12</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Advanced monitoring</li>
              <li>• Continuous compliance</li>
              <li>• Risk management</li>
              <li>• Stakeholder training</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="text-lg font-bold text-blue-800 mb-2">Phase 4</div>
            <div className="text-sm text-gray-600 mb-3">Ongoing</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Regular audits</li>
              <li>• Policy updates</li>
              <li>• Best practice evolution</li>
              <li>• Regulatory tracking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Compliance Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/ai-governance-framework-enterprise-2026" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Shield className="w-8 h-8 text-blue-600 mr-4" />
            <div>
              <h3 className="font-semibold text-blue-800">Governance Framework</h3>
              <p className="text-sm text-blue-600">AI governance structure and policies</p>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-600 ml-auto" />
          </Link>
          
          <Link href="/ai-data-privacy-impact-assessment-2026" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <Eye className="w-8 h-8 text-green-600 mr-4" />
            <div>
              <h3 className="font-semibold text-green-800">Privacy Impact Assessment</h3>
              <p className="text-sm text-green-600">GDPR-compliant privacy analysis</p>
            </div>
            <ArrowRight className="w-5 h-5 text-green-600 ml-auto" />
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Expert Compliance Consultation</h2>
        <p className="text-lg mb-6">Get professional guidance on AI ethics and regulatory compliance</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
          Schedule Compliance Review
        </button>
      </div>
    </div>
  )
}