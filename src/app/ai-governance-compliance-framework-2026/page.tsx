import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Governance and Compliance Framework for Enterprises 2026',
  description: 'Complete enterprise AI governance framework ensuring regulatory compliance, ethical AI deployment, and risk mitigation. Updated for EU AI Act, NIST AI RMF, and global regulations.',
  keywords: 'AI governance framework, AI compliance, EU AI Act compliance, NIST AI RMF, AI ethics framework, enterprise AI governance, AI regulatory compliance',
}

export default function AIGovernanceComplianceFramework2026Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Governance & Compliance Framework 2026
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Enterprise-grade AI governance ensuring regulatory compliance with EU AI Act, NIST AI RMF, and emerging global standards
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-lg text-white font-semibold">
              🏛️ New: EU AI Act enforcement begins February 2026
            </p>
            <p className="text-blue-100">Non-compliance fines up to 7% of global annual revenue</p>
          </div>
        </div>
      </section>

      {/* Regulatory Landscape */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Global AI Regulatory Environment 2026
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="text-2xl font-bold text-blue-700 mb-3">EU AI Act</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">€35M</div>
              <p className="text-gray-700 mb-4">Maximum penalty or 7% global revenue</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High-risk AI system requirements</li>
                <li>• Prohibited AI practices</li>
                <li>• Foundation model obligations</li>
                <li>• CE marking compliance</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="text-2xl font-bold text-green-700 mb-3">NIST AI RMF</div>
              <div className="text-3xl font-bold text-green-600 mb-2">4 Functions</div>
              <p className="text-gray-700 mb-4">Govern, Map, Measure, Manage</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Risk-based approach</li>
                <li>• Continuous monitoring</li>
                <li>• Stakeholder engagement</li>
                <li>• Impact assessment</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="text-2xl font-bold text-purple-700 mb-3">Global Standards</div>
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <p className="text-gray-700 mb-4">National AI regulations active</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ISO/IEC 23053:2022</li>
                <li>• UK AI White Paper</li>
                <li>• Singapore Model AI Governance</li>
                <li>• Canada AIDA (pending)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Comprehensive AI Governance Framework
          </h2>
          
          {/* Framework Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-bold text-lg mb-2">Governance</h3>
              <p className="text-gray-600 text-sm">Leadership, oversight, and accountability structures</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-bold text-lg mb-2">Compliance</h3>
              <p className="text-gray-600 text-sm">Regulatory alignment and audit readiness</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-bold text-lg mb-2">Risk Management</h3>
              <p className="text-gray-600 text-sm">Continuous monitoring and mitigation</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="font-bold text-lg mb-2">Ethics</h3>
              <p className="text-gray-600 text-sm">Responsible AI principles and practices</p>
            </div>
          </div>

          {/* Detailed Framework */}
          <div className="space-y-12">
            {/* Pillar 1: Governance Structure */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                1. AI Governance Structure & Leadership
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-blue-700">Executive Leadership</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Chief AI Officer (CAIO)</strong> - Strategic AI oversight</li>
                    <li>• <strong>AI Steering Committee</strong> - Cross-functional governance</li>
                    <li>• <strong>AI Ethics Board</strong> - Ethical oversight and guidance</li>
                    <li>• <strong>Data Protection Officer</strong> - Privacy and data governance</li>
                  </ul>
                  
                  <h4 className="font-bold text-lg mb-3 mt-6 text-blue-700">Operational Teams</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>AI Risk Management Team</strong> - Day-to-day risk oversight</li>
                    <li>• <strong>Model Validation Team</strong> - AI system testing and validation</li>
                    <li>• <strong>AI Compliance Team</strong> - Regulatory alignment monitoring</li>
                    <li>• <strong>AI Operations Team</strong> - Deployment and monitoring</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-blue-700">Governance Artifacts</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <strong>AI Charter & Strategy</strong>
                      <p className="text-sm text-gray-600 mt-1">High-level AI vision, principles, and strategic objectives</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <strong>AI Risk Appetite Statement</strong>
                      <p className="text-sm text-gray-600 mt-1">Acceptable risk levels and tolerance thresholds</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <strong>AI Governance Policy</strong>
                      <p className="text-sm text-gray-600 mt-1">Comprehensive governance procedures and standards</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <strong>Decision Authority Matrix</strong>
                      <p className="text-sm text-gray-600 mt-1">Clear decision rights and escalation paths</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Regulatory Compliance */}
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                2. Multi-Jurisdiction Regulatory Compliance
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">EU AI Act Compliance</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <strong>Risk Classification</strong>
                      <ul className="text-sm text-gray-600 mt-1 ml-4">
                        <li>• Unacceptable risk (prohibited)</li>
                        <li>• High-risk AI systems</li>
                        <li>• Limited risk AI</li>
                        <li>• Minimal risk AI</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <strong>High-Risk Requirements</strong>
                      <ul className="text-sm text-gray-600 mt-1 ml-4">
                        <li>• Risk management system</li>
                        <li>• Data governance measures</li>
                        <li>• Technical documentation</li>
                        <li>• Record-keeping obligations</li>
                        <li>• Transparency and user info</li>
                        <li>• Human oversight measures</li>
                        <li>• Accuracy and robustness</li>
                        <li>• Cybersecurity measures</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">NIST AI RMF Implementation</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <strong>GOVERN Function</strong>
                      <ul className="text-sm text-gray-600 mt-1 ml-4">
                        <li>• Organizational AI strategy</li>
                        <li>• Risk tolerance and appetite</li>
                        <li>• Roles and responsibilities</li>
                        <li>• Policy and procedures</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <strong>MAP Function</strong>
                      <ul className="text-sm text-gray-600 mt-1 ml-4">
                        <li>• AI system context mapping</li>
                        <li>• Risk identification</li>
                        <li>• Impact assessment</li>
                        <li>• Stakeholder analysis</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <strong>MEASURE Function</strong>
                      <ul className="text-sm text-gray-600 mt-1 ml-4">
                        <li>• Performance monitoring</li>
                        <li>• Risk measurement</li>
                        <li>• Impact tracking</li>
                        <li>• Effectiveness assessment</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <strong>MANAGE Function</strong>
                      <ul className="text-sm text-gray-600 mt-1 ml-4">
                        <li>• Risk response planning</li>
                        <li>• Incident management</li>
                        <li>• Continuous improvement</li>
                        <li>• Change management</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">Additional Standards</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <strong>ISO/IEC Standards</strong>
                      <ul className="text-sm text-gray-600 mt-1 ml-4">
                        <li>• ISO/IEC 23053: AI use cases</li>
                        <li>• ISO/IEC 23094: AI risk management</li>
                        <li>• ISO/IEC 25059: AI quality</li>
                        <li>• ISO/IEC 27001: Security</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <strong>Industry Frameworks</strong>
                      <ul className="text-sm text-gray-600 mt-1 ml-4">
                        <li>• IEEE Ethical AI Standards</li>
                        <li>• Partnership on AI Guidelines</li>
                        <li>• AI Ethics Guidelines Global Inventory</li>
                        <li>• Responsible AI Practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Risk Management Framework */}
            <div className="bg-orange-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-800 mb-6">
                3. Comprehensive AI Risk Management
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-orange-700">Risk Categories & Assessment</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-orange-600 mb-2">Technical Risks</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Model bias and fairness</li>
                        <li>• Performance degradation</li>
                        <li>• Adversarial attacks</li>
                        <li>• Data quality issues</li>
                        <li>• Model explainability</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-orange-600 mb-2">Operational Risks</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• System availability and reliability</li>
                        <li>• Integration failures</li>
                        <li>• Scalability limitations</li>
                        <li>• Maintenance and updates</li>
                        <li>• Human-AI interaction errors</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-orange-600 mb-2">Business Risks</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ROI and value realization</li>
                        <li>• Strategic misalignment</li>
                        <li>• Competitive disadvantage</li>
                        <li>• Customer trust impact</li>
                        <li>• Brand reputation damage</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-orange-700">Risk Assessment Matrix</h4>
                  
                  <div className="bg-white p-4 rounded border mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Likelihood</th>
                          <th className="text-center py-2">Low Impact</th>
                          <th className="text-center py-2">Medium Impact</th>
                          <th className="text-center py-2">High Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-1 font-medium">High</td>
                          <td className="text-center py-1 bg-yellow-100">Medium</td>
                          <td className="text-center py-1 bg-orange-100">High</td>
                          <td className="text-center py-1 bg-red-100">Critical</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-medium">Medium</td>
                          <td className="text-center py-1 bg-green-100">Low</td>
                          <td className="text-center py-1 bg-yellow-100">Medium</td>
                          <td className="text-center py-1 bg-orange-100">High</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-medium">Low</td>
                          <td className="text-center py-1 bg-green-100">Low</td>
                          <td className="text-center py-1 bg-green-100">Low</td>
                          <td className="text-center py-1 bg-yellow-100">Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h5 className="font-semibold text-orange-600 mb-3">Risk Response Strategies</h5>
                  <div className="space-y-3">
                    <div className="bg-green-100 p-3 rounded border">
                      <strong className="text-green-800">Accept</strong>
                      <p className="text-sm text-green-700 mt-1">Low-impact risks within tolerance</p>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded border">
                      <strong className="text-yellow-800">Mitigate</strong>
                      <p className="text-sm text-yellow-700 mt-1">Implement controls to reduce likelihood/impact</p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded border">
                      <strong className="text-orange-800">Transfer</strong>
                      <p className="text-sm text-orange-700 mt-1">Insurance, third-party services, contracts</p>
                    </div>
                    <div className="bg-red-100 p-3 rounded border">
                      <strong className="text-red-800">Avoid</strong>
                      <p className="text-sm text-red-700 mt-1">Discontinue or redesign high-risk activities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 4: AI Ethics Framework */}
            <div className="bg-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">
                4. AI Ethics & Responsible AI Framework
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-purple-700">Core Ethical Principles</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-purple-600 mb-2">🎯 Human-Centric AI</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Human agency and oversight</li>
                        <li>• Meaningful human control</li>
                        <li>• Human-in-the-loop design</li>
                        <li>• User empowerment and choice</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-purple-600 mb-2">⚖️ Fairness & Non-Discrimination</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Algorithmic bias prevention</li>
                        <li>• Inclusive design practices</li>
                        <li>• Equal treatment assurance</li>
                        <li>• Diverse representation in data</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-purple-600 mb-2">🔍 Transparency & Explainability</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Clear AI decision explanations</li>
                        <li>• Model interpretability</li>
                        <li>• Open communication about AI use</li>
                        <li>• Accessible documentation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-purple-600 mb-2">🔒 Privacy & Data Protection</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Data minimization principles</li>
                        <li>• Consent management</li>
                        <li>• Privacy by design</li>
                        <li>• Secure data processing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-purple-700">Implementation Framework</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-purple-600 mb-2">Ethics Impact Assessment</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Stakeholder impact analysis</li>
                        <li>• Ethical risk identification</li>
                        <li>• Mitigation strategy development</li>
                        <li>• Ongoing monitoring plan</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-purple-600 mb-2">AI Ethics Review Process</h5>
                      <ol className="text-sm text-gray-600 space-y-1 ml-4 list-decimal">
                        <li>Initial ethics screening</li>
                        <li>Detailed impact assessment</li>
                        <li>Ethics board review</li>
                        <li>Stakeholder consultation</li>
                        <li>Mitigation implementation</li>
                        <li>Approval and documentation</li>
                        <li>Ongoing monitoring</li>
                      </ol>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-purple-600 mb-2">Training & Awareness</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• AI ethics training program</li>
                        <li>• Role-specific guidance</li>
                        <li>• Regular awareness sessions</li>
                        <li>• Ethical decision-making tools</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-purple-600 mb-2">Incident Response</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Ethics violation reporting</li>
                        <li>• Investigation procedures</li>
                        <li>• Remediation actions</li>
                        <li>• Lessons learned integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            12-Week AI Governance Implementation Roadmap
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-blue-600">Weeks 1-3: Foundation</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Establish AI governance team</li>
                <li>• Define AI strategy and charter</li>
                <li>• Conduct regulatory assessment</li>
                <li>• Develop governance policies</li>
                <li>• Create decision authority matrix</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-green-600">Weeks 4-6: Assessment</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI system inventory and mapping</li>
                <li>• Risk assessment execution</li>
                <li>• Compliance gap analysis</li>
                <li>• Ethics impact assessments</li>
                <li>• Stakeholder engagement</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-orange-600">Weeks 7-9: Implementation</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Deploy risk controls</li>
                <li>• Implement monitoring systems</li>
                <li>• Establish compliance processes</li>
                <li>• Launch ethics review board</li>
                <li>• Begin training programs</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-purple-600">Weeks 10-12: Optimization</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Test incident response procedures</li>
                <li>• Validate compliance readiness</li>
                <li>• Optimize governance processes</li>
                <li>• Conduct audit preparation</li>
                <li>• Plan continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools and Resources */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            AI Governance Tools & Resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-blue-600">Assessment Templates</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI Risk Assessment Questionnaire</li>
                <li>• EU AI Act Compliance Checklist</li>
                <li>• Ethics Impact Assessment Template</li>
                <li>• NIST AI RMF Implementation Guide</li>
                <li>• Data Governance Assessment Matrix</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-green-600">Policy Documents</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI Governance Policy Template</li>
                <li>• AI Ethics Code of Conduct</li>
                <li>• AI Risk Management Procedures</li>
                <li>• AI Incident Response Plan</li>
                <li>• AI Training and Awareness Program</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-purple-600">Monitoring Tools</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI Model Performance Dashboard</li>
                <li>• Bias Detection and Monitoring</li>
                <li>• Compliance Status Tracker</li>
                <li>• Risk Heat Map Visualization</li>
                <li>• Ethics Review Workflow System</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI and Business Value */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            AI Governance ROI & Business Value
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-700">Cost Avoidance</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <strong>Regulatory Fines Avoided</strong>
                    <span className="text-red-600 font-bold">Up to €35M</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">EU AI Act non-compliance penalties</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <strong>Reputation Risk Mitigation</strong>
                    <span className="text-orange-600 font-bold">$2-10M</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Brand damage from AI incidents</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <strong>Failed AI Project Costs</strong>
                    <span className="text-yellow-600 font-bold">$500K-5M</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Poor governance leading to project failure</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-700">Value Creation</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <strong>Faster AI Deployment</strong>
                    <span className="text-green-600 font-bold">30-50%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Reduced time-to-market through clear processes</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <strong>Improved AI ROI</strong>
                    <span className="text-blue-600 font-bold">25-40%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Better alignment and risk management</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <strong>Competitive Advantage</strong>
                    <span className="text-purple-600 font-bold">$1-5M</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Responsible AI as market differentiator</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-8 inline-block shadow-sm">
              <h4 className="text-xl font-bold mb-4">Total Annual Business Value</h4>
              <div className="text-4xl font-bold text-green-600 mb-2">$5-50M+</div>
              <p className="text-gray-600">Typical enterprise AI governance program ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Implement World-Class AI Governance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our enterprise AI governance experts help you build compliant, ethical, and high-performing AI programs
          </p>
          <div className="space-y-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">🎯 AI Governance Assessment</h3>
              <p className="text-blue-100">Complete governance maturity assessment and gap analysis</p>
              <p className="text-sm text-blue-200 mt-2">Starting at $25,000 • 2-week delivery</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">🚀 Full Framework Implementation</h3>
              <p className="text-blue-100">End-to-end AI governance program design and deployment</p>
              <p className="text-sm text-blue-200 mt-2">$75,000-250,000 • 12-week implementation</p>
            </div>
          </div>
          <div className="mt-8">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
              Schedule AI Governance Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}