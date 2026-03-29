import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Enterprise AI Security & Compliance Framework | SitePilot.co',
  description: 'Comprehensive enterprise AI security and compliance framework covering GDPR, SOX, HIPAA, and ISO 27001 requirements for safe AI implementation.',
  keywords: 'enterprise AI security, AI compliance, GDPR AI, SOX compliance, HIPAA AI, ISO 27001 AI, enterprise AI governance, AI risk management',
}

export default function EnterpriseAISecurityCompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-8 leading-tight">
              Enterprise AI Security & Compliance Framework
            </h1>
            <p className="text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Comprehensive security and compliance guidance for enterprise AI implementation across GDPR, SOX, HIPAA, and ISO 27001 requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#compliance-frameworks" 
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                View Compliance Guide
              </a>
              <a 
                href="#security-architecture" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors"
              >
                Security Architecture
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Enterprise-Grade AI Security & Compliance
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Navigate complex regulatory requirements while maintaining AI innovation velocity. Our comprehensive framework addresses security, privacy, and compliance challenges across all major standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-700">Compliance Coverage</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">Zero</div>
                  <div className="text-gray-700">Security Incidents</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance Coverage</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">GDPR (EU)</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">SOX (US)</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">HIPAA (Healthcare)</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">ISO 27001</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">PCI DSS</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Frameworks */}
      <div id="compliance-frameworks" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Regulatory Compliance Frameworks
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* GDPR */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">GDPR Compliance</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Data Protection Impact Assessment (DPIA)</h4>
                  <p className="text-gray-600">Mandatory assessment framework for AI systems processing personal data with high privacy risks.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Consent Management</h4>
                  <p className="text-gray-600">Dynamic consent frameworks for AI training data and automated decision-making.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Right to Explanation</h4>
                  <p className="text-gray-600">Explainable AI requirements for automated decision-making affecting individuals.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Data Minimization</h4>
                  <p className="text-gray-600">Techniques for AI model training with minimal personal data exposure.</p>
                </div>
              </div>
            </div>

            {/* SOX */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SOX Compliance</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">AI Model Governance</h4>
                  <p className="text-gray-600">Internal controls for AI models affecting financial reporting and business processes.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Audit Trail Requirements</h4>
                  <p className="text-gray-600">Comprehensive logging and monitoring of AI decision-making in financial processes.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Change Management</h4>
                  <p className="text-gray-600">Controlled deployment procedures for AI models in financial reporting systems.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Risk Assessment</h4>
                  <p className="text-gray-600">Continuous monitoring of AI-related risks to financial reporting accuracy.</p>
                </div>
              </div>
            </div>

            {/* HIPAA */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">HIPAA Compliance</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">PHI Protection</h4>
                  <p className="text-gray-600">AI model training and inference with protected health information safeguards.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Minimum Necessary Standard</h4>
                  <p className="text-gray-600">AI access controls ensuring minimal PHI exposure for legitimate purposes.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Associate Agreements</h4>
                  <p className="text-gray-600">Contractual requirements for AI vendors handling healthcare data.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Breach Notification</h4>
                  <p className="text-gray-600">Automated detection and reporting of AI-related PHI breaches.</p>
                </div>
              </div>
            </div>

            {/* ISO 27001 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ISO 27001 Compliance</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Information Security Management</h4>
                  <p className="text-gray-600">Systematic approach to managing AI-related information security risks.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Risk Management Framework</h4>
                  <p className="text-gray-600">Continuous assessment and treatment of AI security risks.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Security Controls</h4>
                  <p className="text-gray-600">Technical and organizational controls for AI system security.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Continuous Improvement</h4>
                  <p className="text-gray-600">Iterative enhancement of AI security management processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Architecture */}
      <div id="security-architecture" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Enterprise AI Security Architecture
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Protection</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Encryption at rest and in transit
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Data anonymization techniques
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Differential privacy implementation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Secure multi-party computation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Data lineage tracking
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Access Control</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Zero-trust architecture
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Role-based access control (RBAC)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Multi-factor authentication
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Privileged access management
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Just-in-time access provisioning
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Monitoring & Audit</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Real-time security monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  AI model drift detection
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Compliance audit trails
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Incident response automation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Security metrics dashboard
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Assessment Framework */}
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            AI Risk Assessment Framework
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Comprehensive Risk Matrix
                </h3>
                <p className="text-xl text-gray-700 mb-8">
                  Enterprise-grade risk assessment covering technical, operational, and regulatory dimensions of AI implementation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">High Risk: Immediate attention required</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Medium Risk: Mitigation planning needed</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Low Risk: Monitor and maintain</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Risk Categories</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Data Privacy</span>
                      <span className="text-sm text-red-600 font-medium">High</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Model Security</span>
                      <span className="text-sm text-yellow-600 font-medium">Medium</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Regulatory Compliance</span>
                      <span className="text-sm text-red-600 font-medium">High</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Operational Impact</span>
                      <span className="text-sm text-yellow-600 font-medium">Medium</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '55%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Checklist */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Security Implementation Checklist
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pre-Implementation</h3>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Conduct comprehensive risk assessment</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Define data governance policies</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Establish security architecture framework</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Configure access control systems</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Implement monitoring and logging</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Train security and AI teams</span>
                </label>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Post-Implementation</h3>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Continuous security monitoring</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Regular compliance audits</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Security incident response testing</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">AI model drift monitoring</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Security metrics reporting</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Ongoing security training</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">
            Implement Enterprise-Grade AI Security Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get comprehensive security and compliance guidance for your enterprise AI initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get Security Consultation
            </Link>
            <Link 
              href="/ai-tools"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors"
            >
              Browse AI Security Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}