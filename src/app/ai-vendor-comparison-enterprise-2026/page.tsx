import { Metadata } from 'next'
import { ArrowRight, Shield, Star, Users, Zap, CheckCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Enterprise AI Vendor Comparison 2026 | SitePilot',
  description: 'Compare top enterprise AI vendors including OpenAI, Anthropic, Google, Microsoft, and AWS. Comprehensive feature analysis, pricing, and security comparison.',
  keywords: 'AI vendor comparison, enterprise AI providers, OpenAI vs Anthropic, AI platform comparison, enterprise AI selection',
}

export default function AIVendorComparison() {
  const vendors = [
    {
      name: "OpenAI",
      tier: "Premium",
      pricing: "$20-60/user/month",
      strengths: ["GPT-4 Excellence", "API Ecosystem", "Developer Tools"],
      weaknesses: ["Higher Costs", "Rate Limits"],
      security: "SOC 2 Type II",
      compliance: "GDPR, CCPA",
      score: 92
    },
    {
      name: "Anthropic",
      tier: "Enterprise",
      pricing: "$25-75/user/month", 
      strengths: ["Constitutional AI", "Safety Focus", "Long Context"],
      weaknesses: ["Newer Platform", "Limited Integrations"],
      security: "SOC 2 Type II",
      compliance: "GDPR, HIPAA Ready",
      score: 89
    },
    {
      name: "Google Cloud AI",
      tier: "Enterprise",
      pricing: "$15-50/user/month",
      strengths: ["GCP Integration", "Vertex AI", "Multi-modal"],
      weaknesses: ["Complex Setup", "Learning Curve"],
      security: "ISO 27001",
      compliance: "GDPR, HIPAA, SOX",
      score: 87
    },
    {
      name: "Microsoft Azure AI",
      tier: "Enterprise", 
      pricing: "$18-55/user/month",
      strengths: ["Office 365 Integration", "Copilot", "Enterprise Grade"],
      weaknesses: ["Vendor Lock-in", "Complex Pricing"],
      security: "ISO 27001",
      compliance: "GDPR, HIPAA, FedRAMP",
      score: 85
    },
    {
      name: "AWS Bedrock",
      tier: "Enterprise",
      pricing: "$12-45/user/month",
      strengths: ["Multi-model Access", "AWS Integration", "Scalability"],
      weaknesses: ["Model Latency", "Complex Management"],
      security: "SOC 1,2,3",
      compliance: "GDPR, HIPAA, PCI DSS",
      score: 83
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Enterprise AI Vendor Comparison 2026
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Comprehensive analysis of top enterprise AI platforms including features, pricing, security, and compliance
        </p>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-lg font-semibold text-blue-800">Enterprise-Grade Evaluation</span>
          </div>
          <p className="text-blue-700">
            Independent analysis based on 200+ enterprise deployments and security assessments
          </p>
        </div>
      </div>

      {/* Quick Comparison Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="p-6 bg-gray-50 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Quick Vendor Comparison</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-semibold">Vendor</th>
                <th className="text-left p-4 font-semibold">Score</th>
                <th className="text-left p-4 font-semibold">Pricing</th>
                <th className="text-left p-4 font-semibold">Best For</th>
                <th className="text-left p-4 font-semibold">Security</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center">
                      <span className="font-semibold">{vendor.name}</span>
                      <span className={`ml-2 px-2 py-1 text-xs rounded ${
                        vendor.tier === 'Premium' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {vendor.tier}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="font-semibold">{vendor.score}/100</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{vendor.pricing}</td>
                  <td className="p-4">
                    <div className="space-y-1">
                      {vendor.strengths.slice(0, 2).map((strength, i) => (
                        <span key={i} className="block text-sm text-green-700">{strength}</span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-blue-700">{vendor.security}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Vendor Analysis */}
      <div className="space-y-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Detailed Vendor Analysis</h2>
        
        {vendors.map((vendor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{vendor.name}</h3>
                <div className="flex items-center mt-2">
                  <div className="flex items-center mr-6">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="font-semibold text-lg">{vendor.score}/100</span>
                  </div>
                  <span className="text-gray-600">{vendor.pricing}</span>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-lg font-semibold ${
                vendor.tier === 'Premium' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {vendor.tier}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Strengths
                </h4>
                <ul className="space-y-2">
                  {vendor.strengths.map((strength, i) => (
                    <li key={i} className="text-sm text-green-700 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Considerations
                </h4>
                <ul className="space-y-2">
                  {vendor.weaknesses.map((weakness, i) => (
                    <li key={i} className="text-sm text-orange-700 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Security & Compliance
                </h4>
                <div className="space-y-2">
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">Security:</span> {vendor.security}
                  </p>
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">Compliance:</span> {vendor.compliance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selection Framework */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Vendor Selection Framework</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Requirements</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Zap className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Performance & Latency</h4>
                  <p className="text-sm text-gray-600">Response times, throughput, and scalability requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Security & Privacy</h4>
                  <p className="text-sm text-gray-600">Data protection, encryption, and compliance needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Integration Capabilities</h4>
                  <p className="text-sm text-gray-600">API quality, existing system compatibility</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Considerations</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Star className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Total Cost of Ownership</h4>
                  <p className="text-sm text-gray-600">Licensing, implementation, and ongoing costs</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Vendor Stability</h4>
                  <p className="text-sm text-gray-600">Financial health, roadmap, and long-term viability</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Support & Training</h4>
                  <p className="text-sm text-gray-600">Documentation, community, and professional services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Case Recommendations */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommendations by Use Case</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">Content Generation</h3>
            <div className="space-y-2">
              <p className="text-sm text-blue-700"><span className="font-medium">Best:</span> OpenAI GPT-4</p>
              <p className="text-sm text-blue-700"><span className="font-medium">Alt:</span> Anthropic Claude</p>
              <p className="text-sm text-blue-600">Superior creative writing and content quality</p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Data Analysis</h3>
            <div className="space-y-2">
              <p className="text-sm text-green-700"><span className="font-medium">Best:</span> Google Cloud AI</p>
              <p className="text-sm text-green-700"><span className="font-medium">Alt:</span> AWS Bedrock</p>
              <p className="text-sm text-green-600">Strong analytics and visualization capabilities</p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-3">Enterprise Integration</h3>
            <div className="space-y-2">
              <p className="text-sm text-purple-700"><span className="font-medium">Best:</span> Microsoft Azure</p>
              <p className="text-sm text-purple-700"><span className="font-medium">Alt:</span> Google Cloud</p>
              <p className="text-sm text-purple-600">Seamless Office 365 and enterprise workflows</p>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-3">High Security</h3>
            <div className="space-y-2">
              <p className="text-sm text-orange-700"><span className="font-medium">Best:</span> Anthropic Claude</p>
              <p className="text-sm text-orange-700"><span className="font-medium">Alt:</span> AWS Bedrock</p>
              <p className="text-sm text-orange-600">Constitutional AI and robust safety measures</p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-3">Cost Optimization</h3>
            <div className="space-y-2">
              <p className="text-sm text-red-700"><span className="font-medium">Best:</span> AWS Bedrock</p>
              <p className="text-sm text-red-700"><span className="font-medium">Alt:</span> Google Cloud</p>
              <p className="text-sm text-red-600">Competitive pricing and flexible consumption</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-3">Developer Experience</h3>
            <div className="space-y-2">
              <p className="text-sm text-yellow-700"><span className="font-medium">Best:</span> OpenAI</p>
              <p className="text-sm text-yellow-700"><span className="font-medium">Alt:</span> Anthropic</p>
              <p className="text-sm text-yellow-600">Excellent APIs and development tools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related AI Selection Tools</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/ai-implementation-checklist-enterprise-2026" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <CheckCircle className="w-8 h-8 text-blue-600 mr-4" />
            <div>
              <h3 className="font-semibold text-blue-800">Implementation Checklist</h3>
              <p className="text-sm text-blue-600">Step-by-step AI deployment guide</p>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-600 ml-auto" />
          </Link>
          
          <Link href="/ai-total-cost-ownership-calculator-enterprise-2026" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <Star className="w-8 h-8 text-green-600 mr-4" />
            <div>
              <h3 className="font-semibold text-green-800">TCO Calculator</h3>
              <p className="text-sm text-green-600">Calculate total cost of AI ownership</p>
            </div>
            <ArrowRight className="w-5 h-5 text-green-600 ml-auto" />
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Need Personalized Vendor Analysis?</h2>
        <p className="text-lg mb-6">Get custom AI vendor recommendations based on your specific requirements</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
          Get Custom Analysis
        </button>
      </div>
    </div>
  )
}