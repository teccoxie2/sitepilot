import { Metadata } from 'next'
import { ArrowRight, Users, TrendingUp, Shield, CheckCircle, AlertTriangle, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Enterprise AI Change Management Framework 2026 | SitePilot',
  description: 'Comprehensive AI change management framework for enterprise adoption. Manage employee resistance, training programs, and organizational transformation.',
  keywords: 'AI change management, enterprise AI adoption, employee training, organizational change, AI transformation framework',
}

export default function AIChangeManagementFramework() {
  const phases = [
    {
      phase: "Assessment & Planning",
      duration: "2-4 weeks",
      activities: ["Current State Analysis", "Stakeholder Mapping", "Change Readiness Assessment", "Communication Planning"],
      deliverables: ["Change Strategy", "Stakeholder Matrix", "Training Plan", "Communication Timeline"],
      risks: ["Incomplete Analysis", "Stakeholder Resistance"]
    },
    {
      phase: "Foundation Building",
      duration: "4-6 weeks", 
      activities: ["Leadership Alignment", "Champion Network", "Skill Gap Analysis", "Quick Wins Identification"],
      deliverables: ["Executive Sponsor Plan", "Change Agent Network", "Skills Matrix", "Pilot Project Plan"],
      risks: ["Leadership Misalignment", "Inadequate Champions"]
    },
    {
      phase: "Pilot Implementation",
      duration: "6-8 weeks",
      activities: ["Pilot Group Training", "AI Tool Deployment", "Performance Monitoring", "Feedback Collection"],
      deliverables: ["Pilot Results", "Lessons Learned", "Success Metrics", "Scaling Strategy"],
      risks: ["Poor Pilot Results", "Technology Issues"]
    },
    {
      phase: "Scaled Rollout",
      duration: "12-16 weeks",
      activities: ["Department-by-Department Rollout", "Continuous Training", "Support Systems", "Culture Integration"],
      deliverables: ["Adoption Metrics", "Training Materials", "Support Documentation", "Culture Assessment"],
      risks: ["Adoption Resistance", "Training Gaps"]
    },
    {
      phase: "Sustainment",
      duration: "Ongoing",
      activities: ["Performance Monitoring", "Continuous Improvement", "Advanced Training", "Culture Reinforcement"],
      deliverables: ["ROI Reports", "Best Practices", "Advanced Certifications", "Culture Metrics"],
      risks: ["Momentum Loss", "Skill Decay"]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Enterprise AI Change Management Framework 2026
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Systematic approach to managing organizational transformation during AI adoption
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-lg font-semibold text-blue-800">Human-Centered AI Adoption</span>
          </div>
          <p className="text-blue-700">
            Proven framework used by 500+ enterprises to achieve 85% successful AI adoption rates
          </p>
        </div>
      </div>

      {/* Framework Overview */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">5-Phase Change Management Framework</h2>
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Phase {index + 1}: {phase.phase}
                </h3>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{phase.duration}</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Key Activities</h4>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle className="w-3 h-3 mr-2 mt-1 text-green-500" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Deliverables</h4>
                  <ul className="space-y-1">
                    {phase.deliverables.map((deliverable, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <TrendingUp className="w-3 h-3 mr-2 mt-1 text-blue-500" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Risk Factors</h4>
                  <ul className="space-y-1">
                    {phase.risks.map((risk, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <AlertTriangle className="w-3 h-3 mr-2 mt-1 text-orange-500" />
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Success Metrics</h4>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">Stakeholder Engagement</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-purple-600 h-2 rounded-full`} style={{width: `${75 + index * 5}%`}}></div>
                    </div>
                    <div className="text-xs text-purple-600">{75 + index * 5}% target</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stakeholder Management */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Stakeholder Mapping</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Champions (High Influence, High Support)</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• C-Suite Executives</li>
                <li>• IT Leadership</li>
                <li>• Early Adopters</li>
                <li>• Innovation Teams</li>
              </ul>
              <div className="mt-2 text-xs bg-green-100 text-green-800 p-2 rounded">
                Strategy: Leverage as change advocates
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Resisters (High Influence, Low Support)</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Traditional Department Heads</li>
                <li>• Senior Staff (Risk Averse)</li>
                <li>• Union Representatives</li>
                <li>• Compliance Officers</li>
              </ul>
              <div className="mt-2 text-xs bg-orange-100 text-orange-800 p-2 rounded">
                Strategy: Address concerns, provide evidence
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-900 mb-4">Communication Strategy</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Multi-Channel Approach</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-700">Town Halls</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Monthly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-700">Email Updates</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Weekly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-700">Team Meetings</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Bi-weekly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-700">Success Stories</span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Ongoing</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Key Messages</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• AI enhances human capabilities</li>
                <li>• Job transformation, not replacement</li>
                <li>• Competitive advantage necessity</li>
                <li>• Continuous learning opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Training & Development */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Training Framework</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Leadership Training</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-800">Executive Workshop</span>
              </div>
              <ul className="text-sm text-blue-700 space-y-2 ml-7">
                <li>• AI Strategy & Vision</li>
                <li>• Change Leadership</li>
                <li>• Risk Management</li>
                <li>• ROI Measurement</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-100 rounded text-xs text-blue-800">
                Duration: 2-day intensive + quarterly updates
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-900 mb-4">Manager Training</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <span className="font-semibold text-green-800">Team Leader Certification</span>
              </div>
              <ul className="text-sm text-green-700 space-y-2 ml-7">
                <li>• Team Communication</li>
                <li>• Performance Coaching</li>
                <li>• AI Tool Management</li>
                <li>• Resistance Handling</li>
              </ul>
              <div className="mt-4 p-3 bg-green-100 rounded text-xs text-green-800">
                Duration: 1-day workshop + monthly coaching
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-purple-900 mb-4">Employee Training</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                <span className="font-semibold text-purple-800">Skills Development</span>
              </div>
              <ul className="text-sm text-purple-700 space-y-2 ml-7">
                <li>• AI Literacy Basics</li>
                <li>• Tool-Specific Training</li>
                <li>• Workflow Integration</li>
                <li>• Best Practices</li>
              </ul>
              <div className="mt-4 p-3 bg-purple-100 rounded text-xs text-purple-800">
                Duration: 4-hour modules + hands-on practice
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Learning Pathways by Role</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-lg mb-2">
                <span className="font-semibold text-blue-800">Technical Staff</span>
              </div>
              <div className="text-sm text-gray-600">
                AI Development<br/>API Integration<br/>Data Science
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-lg mb-2">
                <span className="font-semibold text-green-800">Business Analysts</span>
              </div>
              <div className="text-sm text-gray-600">
                AI for Analytics<br/>Process Automation<br/>Reporting Tools
              </div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-lg mb-2">
                <span className="font-semibold text-purple-800">Content Teams</span>
              </div>
              <div className="text-sm text-gray-600">
                AI Writing Tools<br/>Content Strategy<br/>Quality Control
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-lg mb-2">
                <span className="font-semibold text-orange-800">Customer Service</span>
              </div>
              <div className="text-sm text-gray-600">
                AI Chatbots<br/>Response Assistance<br/>Escalation Protocols
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resistance Management */}
      <div className="bg-orange-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-orange-900 mb-6">Managing Resistance to AI</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Common Resistance Sources</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                  <span className="font-semibold text-red-800">Job Security Fears</span>
                </div>
                <p className="text-sm text-red-700 mb-2">Employees worry AI will replace their roles</p>
                <div className="text-xs bg-red-100 text-red-800 p-2 rounded">
                  <strong>Response:</strong> Emphasize job enhancement, reskilling opportunities, and new role creation
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="font-semibold text-orange-800">Skill Inadequacy</span>
                </div>
                <p className="text-sm text-orange-700 mb-2">Feeling unprepared for new technology</p>
                <div className="text-xs bg-orange-100 text-orange-800 p-2 rounded">
                  <strong>Response:</strong> Comprehensive training, mentoring, and gradual skill building
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="font-semibold text-yellow-800">Change Fatigue</span>
                </div>
                <p className="text-sm text-yellow-700 mb-2">Overwhelmed by constant organizational changes</p>
                <div className="text-xs bg-yellow-100 text-yellow-800 p-2 rounded">
                  <strong>Response:</strong> Phased implementation, clear benefits communication, and support systems
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Mitigation Strategies</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Early Engagement</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Involve employees in AI tool selection</li>
                  <li>• Create feedback channels and act on input</li>
                  <li>• Establish AI ambassador programs</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Transparent Communication</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Share AI strategy and rationale</li>
                  <li>• Provide regular progress updates</li>
                  <li>• Address concerns openly and honestly</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Success Demonstration</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Showcase quick wins and pilot results</li>
                  <li>• Share employee success stories</li>
                  <li>• Quantify benefits and improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Change Management Success Metrics</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 p-6 rounded-lg mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-800">85%</div>
              <div className="text-sm text-blue-600">Adoption Rate</div>
            </div>
            <p className="text-xs text-gray-600">Target: &gt;80% within 6 months</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 p-6 rounded-lg mb-4">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-800">92%</div>
              <div className="text-sm text-green-600">Employee Satisfaction</div>
            </div>
            <p className="text-xs text-gray-600">Target: &gt;85% satisfaction with AI tools</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 p-6 rounded-lg mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-800">78%</div>
              <div className="text-sm text-purple-600">Training Completion</div>
            </div>
            <p className="text-xs text-gray-600">Target: &gt;75% complete all modules</p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 p-6 rounded-lg mb-4">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-800">4.2m</div>
              <div className="text-sm text-orange-600">Time to Proficiency</div>
            </div>
            <p className="text-xs text-gray-600">Target: &lt;6 months average</p>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Change Management Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/ai-implementation-checklist-enterprise-2026" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <CheckCircle className="w-8 h-8 text-blue-600 mr-4" />
            <div>
              <h3 className="font-semibold text-blue-800">Implementation Checklist</h3>
              <p className="text-sm text-blue-600">Step-by-step AI deployment guide</p>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-600 ml-auto" />
          </Link>
          
          <Link href="/ai-governance-framework-enterprise-2026" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <Shield className="w-8 h-8 text-green-600 mr-4" />
            <div>
              <h3 className="font-semibold text-green-800">Governance Framework</h3>
              <p className="text-sm text-green-600">AI governance and policy structure</p>
            </div>
            <ArrowRight className="w-5 h-5 text-green-600 ml-auto" />
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Expert Change Management Support</h2>
        <p className="text-lg mb-6">Get professional guidance for your AI transformation journey</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
          Schedule Consultation
        </button>
      </div>
    </div>
  )
}