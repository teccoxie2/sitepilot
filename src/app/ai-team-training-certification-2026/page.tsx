import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "AI Team Training & Certification Program 2026 | Enterprise Workforce Development",
  description: "Comprehensive AI training and certification program for enterprise teams. Build AI capabilities across organizations with structured learning paths and practical skills development.",
  keywords: "AI training, AI certification, enterprise AI education, AI skills development, AI workforce training 2026",
}

export default function AITeamTraining() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">Enterprise AI Education</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          AI Team Training & Certification Program 2026
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transform your workforce with comprehensive AI training programs. Build enterprise AI capabilities 
          through structured learning paths, hands-on experience, and industry-recognized certifications.
        </p>
      </div>

      {/* Learning Paths Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <div className="text-2xl mb-2">👥</div>
          <h3 className="text-lg font-semibold mb-2">Leadership Track</h3>
          <p className="text-sm text-muted-foreground mb-3">C-suite and senior managers</p>
          <ul className="text-xs space-y-1">
            <li>• AI strategy development</li>
            <li>• ROI and investment decisions</li>
            <li>• Risk management</li>
            <li>• Change leadership</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <div className="text-2xl mb-2">🛠️</div>
          <h3 className="text-lg font-semibold mb-2">Technical Track</h3>
          <p className="text-sm text-muted-foreground mb-3">IT and development teams</p>
          <ul className="text-xs space-y-1">
            <li>• AI implementation</li>
            <li>• Model deployment</li>
            <li>• Integration strategies</li>
            <li>• Performance monitoring</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
          <div className="text-2xl mb-2">📊</div>
          <h3 className="text-lg font-semibold mb-2">Business Track</h3>
          <p className="text-sm text-muted-foreground mb-3">Business analysts and managers</p>
          <ul className="text-xs space-y-1">
            <li>• AI use case identification</li>
            <li>• Process optimization</li>
            <li>• Data analysis</li>
            <li>• Project management</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
          <div className="text-2xl mb-2">🎯</div>
          <h3 className="text-lg font-semibold mb-2">End-User Track</h3>
          <p className="text-sm text-muted-foreground mb-3">General workforce</p>
          <ul className="text-xs space-y-1">
            <li>• AI tool utilization</li>
            <li>• Productivity enhancement</li>
            <li>• Safety and ethics</li>
            <li>• Basic troubleshooting</li>
          </ul>
        </div>
      </div>

      {/* Detailed Curriculum */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Comprehensive Training Curriculum</h2>
        
        {/* Leadership Track */}
        <div className="bg-card rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Leadership Track (40 hours)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Module 1: AI Strategy & Vision (10 hours)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>AI Landscape Overview</strong>
                    <p className="text-muted-foreground">Current state, trends, and future outlook</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>Strategic Planning Framework</strong>
                    <p className="text-muted-foreground">Developing enterprise AI strategy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>Competitive Analysis</strong>
                    <p className="text-muted-foreground">AI adoption in your industry</p>
                  </div>
                </li>
              </ul>
              
              <h4 className="font-semibold mb-3 mt-6">Module 2: Investment & ROI (10 hours)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>AI Investment Evaluation</strong>
                    <p className="text-muted-foreground">Cost-benefit analysis frameworks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>ROI Measurement</strong>
                    <p className="text-muted-foreground">Metrics and KPI development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>Budget Planning</strong>
                    <p className="text-muted-foreground">Multi-year AI investment strategies</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Module 3: Risk & Governance (10 hours)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>Risk Assessment</strong>
                    <p className="text-muted-foreground">Identifying and evaluating AI risks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>Governance Framework</strong>
                    <p className="text-muted-foreground">Building oversight structures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>Compliance Management</strong>
                    <p className="text-muted-foreground">Regulatory requirements and ethics</p>
                  </div>
                </li>
              </ul>
              
              <h4 className="font-semibold mb-3 mt-6">Module 4: Change Leadership (10 hours)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>Organizational Transformation</strong>
                    <p className="text-muted-foreground">Leading AI-driven change</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>Communication Strategies</strong>
                    <p className="text-muted-foreground">Stakeholder engagement and buy-in</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>Performance Management</strong>
                    <p className="text-muted-foreground">Measuring transformation success</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Track */}
        <div className="bg-card rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 text-green-600">Technical Track (60 hours)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Foundation Level (20 hours)</h4>
              <ul className="space-y-1 text-sm">
                <li>• AI/ML fundamentals and concepts</li>
                <li>• Data preparation and quality</li>
                <li>• Model selection and evaluation</li>
                <li>• Basic Python/R programming</li>
                <li>• Cloud platform overview</li>
              </ul>
              
              <h4 className="font-semibold mb-3 mt-4">Intermediate Level (20 hours)</h4>
              <ul className="space-y-1 text-sm">
                <li>• Advanced model development</li>
                <li>• API integration and deployment</li>
                <li>• Container orchestration</li>
                <li>• Monitoring and logging</li>
                <li>• Security implementation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Advanced Level (20 hours)</h4>
              <ul className="space-y-1 text-sm">
                <li>• MLOps pipeline development</li>
                <li>• Distributed computing</li>
                <li>• Model optimization techniques</li>
                <li>• A/B testing frameworks</li>
                <li>• Enterprise architecture patterns</li>
              </ul>
              
              <div className="mt-4 p-4 bg-green-50 rounded">
                <h5 className="font-semibold text-green-700 mb-2">Hands-on Projects</h5>
                <ul className="text-xs space-y-1 text-green-600">
                  <li>• End-to-end ML pipeline building</li>
                  <li>• Production deployment simulation</li>
                  <li>• Performance optimization challenge</li>
                  <li>• Real-world integration project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Business Track */}
        <div className="bg-card rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Business Track (30 hours)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Business Fundamentals (15 hours)</h4>
              <ul className="space-y-1 text-sm">
                <li>• AI business applications overview</li>
                <li>• Use case identification methodology</li>
                <li>• Data requirements assessment</li>
                <li>• Process mapping and optimization</li>
                <li>• Stakeholder analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Implementation Management (15 hours)</h4>
              <ul className="space-y-1 text-sm">
                <li>• Project planning and management</li>
                <li>• Vendor evaluation and selection</li>
                <li>• Change management strategies</li>
                <li>• Performance measurement</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Levels */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Certification Levels & Requirements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
              <h3 className="text-lg font-semibold">Foundation Certificate</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Basic AI literacy and awareness</p>
            <ul className="space-y-1 text-xs">
              <li>• 8-hour core curriculum</li>
              <li>• Multiple choice exam (70% pass)</li>
              <li>• Valid for 2 years</li>
              <li>• No prerequisites</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
              <h3 className="text-lg font-semibold">Professional Certificate</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Specialized track completion</p>
            <ul className="space-y-1 text-xs">
              <li>• Track-specific curriculum</li>
              <li>• Practical project submission</li>
              <li>• Valid for 3 years</li>
              <li>• Foundation certificate required</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
              <h3 className="text-lg font-semibold">Expert Certificate</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Advanced specialization and leadership</p>
            <ul className="space-y-1 text-xs">
              <li>• Advanced curriculum + capstone</li>
              <li>• Peer review process</li>
              <li>• Valid for 5 years</li>
              <li>• Professional certificate + experience</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Training Delivery Methods */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Training Delivery Options</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">In-Person Training</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Intensive Workshops</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 2-3 day intensive sessions</li>
                  <li>• Hands-on labs and exercises</li>
                  <li>• Expert instructor-led</li>
                  <li>• Group collaboration opportunities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Executive Seminars</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Half-day strategic sessions</li>
                  <li>• C-suite focused content</li>
                  <li>• Case study analysis</li>
                  <li>• Peer networking</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-600">Virtual Learning</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Self-Paced Modules</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Interactive online content</li>
                  <li>• Video lectures and demos</li>
                  <li>• Practice exercises</li>
                  <li>• Progress tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Virtual Classrooms</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Live instructor sessions</li>
                  <li>• Interactive Q&A</li>
                  <li>• Breakout room activities</li>
                  <li>• Recording available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="bg-card rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Training Program Implementation</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">W1</span>
            </div>
            <div>
              <h3 className="font-semibold">Assessment & Planning</h3>
              <p className="text-sm text-muted-foreground">Skills assessment, role mapping, and curriculum customization</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold">W2</span>
            </div>
            <div>
              <h3 className="font-semibold">Foundation Training Rollout</h3>
              <p className="text-sm text-muted-foreground">Organization-wide AI literacy program launch</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-purple-600 font-bold">W4</span>
            </div>
            <div>
              <h3 className="font-semibold">Specialized Track Training</h3>
              <p className="text-sm text-muted-foreground">Role-specific training programs for different teams</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-orange-600 font-bold">W8</span>
            </div>
            <div>
              <h3 className="font-semibold">Certification & Assessment</h3>
              <p className="text-sm text-muted-foreground">Skills validation and certification completion</p>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Metrics */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Training Program ROI Metrics</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">78%</div>
            <p className="text-sm font-semibold">Productivity Increase</p>
            <p className="text-xs text-muted-foreground">After 3 months</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">45%</div>
            <p className="text-sm font-semibold">Faster Implementation</p>
            <p className="text-xs text-muted-foreground">AI project delivery</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">92%</div>
            <p className="text-sm font-semibold">Employee Confidence</p>
            <p className="text-xs text-muted-foreground">In AI tool usage</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">$2.3M</div>
            <p className="text-sm font-semibold">Annual Savings</p>
            <p className="text-xs text-muted-foreground">Average enterprise</p>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-card rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Related Training Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/enterprise-ai-readiness-assessment-2026" className="block p-4 border rounded hover:border-blue-500 transition-colors">
            <h3 className="font-semibold mb-2">AI Readiness Assessment</h3>
            <p className="text-sm text-muted-foreground">Evaluate organizational AI capabilities</p>
          </Link>
          <Link href="/ai-change-management-strategy-2026" className="block p-4 border rounded hover:border-blue-500 transition-colors">
            <h3 className="font-semibold mb-2">Change Management</h3>
            <p className="text-sm text-muted-foreground">Navigate AI transformation challenges</p>
          </Link>
          <Link href="/ai-skills-gap-analysis-tool-2026" className="block p-4 border rounded hover:border-blue-500 transition-colors">
            <h3 className="font-semibold mb-2">Skills Gap Analysis</h3>
            <p className="text-sm text-muted-foreground">Identify training needs and priorities</p>
          </Link>
        </div>
      </div>
    </div>
  )
}