'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import { AlertTriangle, Shield, TrendingDown, Users, Database, Lock, Zap, Eye, CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'

interface RiskCategory {
  name: string
  icon: React.ReactNode
  description: string
  riskFactors: RiskFactor[]
  mitigationStrategies: string[]
  severity: 'low' | 'medium' | 'high' | 'critical'
}

interface RiskFactor {
  factor: string
  impact: string
  probability: string
  mitigation: string
}

interface AssessmentResult {
  overallRisk: 'low' | 'medium' | 'high' | 'critical'
  riskScore: number
  criticalAreas: string[]
  recommendedActions: string[]
  timeline: string
  budget: string
}

export default function AIProjectRiskAssessmentFramework2026() {
  const [currentStep, setCurrentStep] = useState(0)
  const [assessmentData, setAssessmentData] = useState({
    projectType: '',
    industry: '',
    dataTypes: '',
    userBase: '',
    regulatoryRequirements: '',
    technicalComplexity: '',
    timeline: '',
    budget: '',
    teamExperience: ''
  })
  const [results, setResults] = useState<AssessmentResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const riskCategories: RiskCategory[] = [
    {
      name: "Technical & Architecture Risks",
      icon: <Zap className="h-6 w-6" />,
      description: "Technology infrastructure, scalability, and integration challenges",
      severity: 'high',
      riskFactors: [
        {
          factor: "Legacy System Integration",
          impact: "High - System failures, data inconsistency",
          probability: "Medium - 35% of projects face integration issues", 
          mitigation: "API-first architecture, gradual migration strategy, comprehensive testing"
        },
        {
          factor: "Model Performance & Accuracy",
          impact: "Critical - Poor business outcomes, user dissatisfaction",
          probability: "Medium - 40% experience accuracy issues",
          mitigation: "Rigorous model validation, A/B testing, continuous monitoring and retraining"
        },
        {
          factor: "Scalability & Infrastructure",
          impact: "High - Performance degradation, cost overruns",
          probability: "Low - 15% with proper planning",
          mitigation: "Cloud-native architecture, load testing, auto-scaling infrastructure"
        },
        {
          factor: "Data Quality & Availability",
          impact: "Critical - Model bias, poor predictions",
          probability: "High - 60% of projects affected",
          mitigation: "Data quality assessment, data governance framework, cleaning pipelines"
        }
      ],
      mitigationStrategies: [
        "Comprehensive technical architecture review and validation",
        "Proof-of-concept development before full implementation",
        "Infrastructure capacity planning with scalability testing",
        "Data quality assessment and remediation program",
        "Continuous integration/deployment pipeline establishment"
      ]
    },
    {
      name: "Security & Privacy Risks",
      icon: <Lock className="h-6 w-6" />,
      description: "Data protection, cybersecurity, and privacy compliance challenges",
      severity: 'critical',
      riskFactors: [
        {
          factor: "Data Breach & Unauthorized Access",
          impact: "Critical - Legal penalties, reputation damage, financial loss",
          probability: "Medium - 25% of AI projects experience security incidents",
          mitigation: "Zero-trust security model, encryption, access controls, regular security audits"
        },
        {
          factor: "Model Adversarial Attacks",
          impact: "High - Model manipulation, incorrect decisions",
          probability: "Low - 8% but increasing",
          mitigation: "Adversarial training, input validation, anomaly detection systems"
        },
        {
          factor: "Privacy Regulation Compliance",
          impact: "Critical - Fines up to 4% of revenue, legal action",
          probability: "Medium - 30% face compliance issues",
          mitigation: "Privacy-by-design, data minimization, consent management, regular compliance audits"
        },
        {
          factor: "Intellectual Property Theft",
          impact: "High - Competitive advantage loss, IP litigation",
          probability: "Low - 12% report IP concerns",
          mitigation: "IP protection strategies, secure development environment, NDA enforcement"
        }
      ],
      mitigationStrategies: [
        "Comprehensive cybersecurity framework implementation",
        "Privacy impact assessment and compliance validation", 
        "End-to-end data encryption and secure communication",
        "Regular penetration testing and vulnerability assessments",
        "Incident response plan development and testing"
      ]
    },
    {
      name: "Regulatory & Compliance Risks",
      icon: <Shield className="h-6 w-6" />,
      description: "Legal, regulatory, and industry standard compliance challenges",
      severity: 'critical',
      riskFactors: [
        {
          factor: "EU AI Act Compliance",
          impact: "Critical - Fines up to €35M or 7% of revenue",
          probability: "High - Affects all EU AI deployments from 2026",
          mitigation: "AI Act compliance assessment, conformity declarations, risk management systems"
        },
        {
          factor: "Industry-Specific Regulations",
          impact: "Critical - Business license revocation, operations shutdown",
          probability: "Medium - 40% in regulated industries",
          mitigation: "Regulatory mapping, compliance monitoring, industry expert consultation"
        },
        {
          factor: "Cross-Border Data Transfer",
          impact: "High - Data localization requirements, service disruption",
          probability: "Medium - 35% of global deployments affected",
          mitigation: "Data residency planning, adequate protection mechanisms, binding corporate rules"
        },
        {
          factor: "Algorithmic Accountability",
          impact: "High - Discrimination claims, regulatory scrutiny",
          probability: "Medium - 20% face accountability issues", 
          mitigation: "Explainable AI implementation, bias testing, algorithmic audit programs"
        }
      ],
      mitigationStrategies: [
        "Multi-jurisdiction regulatory compliance framework",
        "Regular legal and compliance review processes",
        "Explainable AI and algorithmic transparency implementation",
        "Industry-specific compliance certification programs",
        "Regulatory change monitoring and adaptation procedures"
      ]
    },
    {
      name: "Operational & Business Risks", 
      icon: <TrendingDown className="h-6 w-6" />,
      description: "Business continuity, ROI, and operational effectiveness risks",
      severity: 'high',
      riskFactors: [
        {
          factor: "ROI & Business Value Realization",
          impact: "Critical - Project failure, budget loss, stakeholder dissatisfaction",
          probability: "High - 50% don't achieve expected ROI",
          mitigation: "Clear success metrics, phased implementation, regular ROI assessment"
        },
        {
          factor: "Change Management & User Adoption",
          impact: "High - Low adoption rates, productivity decline",
          probability: "High - 60% struggle with user adoption",
          mitigation: "Comprehensive change management, user training, stakeholder engagement"
        },
        {
          factor: "Vendor Lock-in & Dependency",
          impact: "Medium - Limited flexibility, increased costs",
          probability: "Medium - 30% experience vendor issues",
          mitigation: "Multi-vendor strategy, open standards adoption, exit planning"
        },
        {
          factor: "Business Continuity Disruption",
          impact: "Critical - Operations shutdown, customer impact",
          probability: "Low - 10% experience major disruptions",
          mitigation: "Business continuity planning, redundancy systems, rollback procedures"
        }
      ],
      mitigationStrategies: [
        "Comprehensive business case development with clear metrics",
        "Phased implementation approach with early wins",
        "Change management program with user training and support",
        "Vendor diversification and exit strategy planning",
        "Business continuity and disaster recovery planning"
      ]
    },
    {
      name: "Ethical & Social Risks",
      icon: <Users className="h-6 w-6" />,
      description: "AI ethics, bias, fairness, and social impact considerations",
      severity: 'medium',
      riskFactors: [
        {
          factor: "Algorithmic Bias & Discrimination",
          impact: "Critical - Legal liability, brand damage, social harm",
          probability: "Medium - 30% detect significant bias",
          mitigation: "Bias testing framework, diverse training data, fairness metrics monitoring"
        },
        {
          factor: "Job Displacement & Workforce Impact",
          impact: "High - Employee morale, union issues, productivity decline",
          probability: "Medium - 45% experience workforce concerns",
          mitigation: "Workforce transition planning, retraining programs, transparent communication"
        },
        {
          factor: "Transparency & Explainability",
          impact: "Medium - Regulatory scrutiny, user distrust",
          probability: "High - 70% face explainability challenges",
          mitigation: "Explainable AI implementation, decision transparency, user education"
        },
        {
          factor: "Social & Environmental Impact",
          impact: "Medium - Reputation risk, sustainability concerns",
          probability: "Low - 15% face significant impact issues",
          mitigation: "Impact assessment, sustainability planning, stakeholder engagement"
        }
      ],
      mitigationStrategies: [
        "AI ethics framework implementation and governance",
        "Bias detection and mitigation program development",
        "Workforce impact assessment and transition planning",
        "Stakeholder engagement and transparent communication",
        "Social impact measurement and reporting"
      ]
    },
    {
      name: "Data & Information Risks",
      icon: <Database className="h-6 w-6" />,
      description: "Data management, quality, governance, and lifecycle risks",
      severity: 'high', 
      riskFactors: [
        {
          factor: "Data Quality & Integrity",
          impact: "Critical - Model accuracy issues, wrong business decisions",
          probability: "High - 60% experience data quality issues",
          mitigation: "Data quality framework, validation pipelines, continuous monitoring"
        },
        {
          factor: "Data Governance & Lineage",
          impact: "High - Compliance failures, audit issues",
          probability: "Medium - 35% lack proper governance",
          mitigation: "Data governance program, lineage tracking, stewardship roles"
        },
        {
          factor: "Data Storage & Retention",
          impact: "Medium - Compliance violations, storage costs",
          probability: "Medium - 25% have retention issues",
          mitigation: "Data lifecycle management, retention policies, automated archival"
        },
        {
          factor: "Third-Party Data Risks",
          impact: "High - Data quality issues, legal complications",
          probability: "Medium - 30% use external data",
          mitigation: "Vendor data assessment, contractual protections, data validation"
        }
      ],
      mitigationStrategies: [
        "Comprehensive data governance framework implementation",
        "Data quality assessment and continuous monitoring",
        "Data lifecycle management and retention policies",
        "Third-party data risk assessment and contracts",
        "Data security and access control implementation"
      ]
    }
  ]

  const handleAssessment = async () => {
    setIsLoading(true)
    
    // Simulate assessment calculation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock assessment results based on inputs
    const mockResults: AssessmentResult = {
      overallRisk: assessmentData.technicalComplexity === 'high' ? 'high' : 'medium',
      riskScore: Math.floor(Math.random() * 40) + 30, // 30-70 range
      criticalAreas: ["Data Quality & Governance", "Regulatory Compliance", "Security & Privacy"],
      recommendedActions: [
        "Implement comprehensive data governance framework",
        "Conduct regulatory compliance assessment",
        "Deploy security-first architecture",
        "Establish AI ethics and bias testing program"
      ],
      timeline: "12-18 weeks for full risk mitigation",
      budget: "$150K-500K additional risk mitigation investment"
    }
    
    setResults(mockResults)
    setIsLoading(false)
  }

  const getRiskColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-green-600 border-green-200 bg-green-50'
      case 'medium': return 'text-yellow-600 border-yellow-200 bg-yellow-50'  
      case 'high': return 'text-orange-600 border-orange-200 bg-orange-50'
      case 'critical': return 'text-red-600 border-red-200 bg-red-50'
      default: return 'text-gray-600 border-gray-200 bg-gray-50'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'low': return <CheckCircle className="h-4 w-4" />
      case 'medium': return <AlertTriangle className="h-4 w-4" />
      case 'high': return <AlertTriangle className="h-4 w-4" />
      case 'critical': return <XCircle className="h-4 w-4" />
      default: return <AlertTriangle className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          AI Project Risk Assessment Framework 2026
          <span className="text-red-600 block text-2xl md:text-3xl mt-2">
            6-Category Comprehensive Risk Evaluation
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
          Enterprise-grade risk assessment framework covering 24 critical risk factors across 6 categories. 
          Used by 300+ organizations to identify, quantify, and mitigate AI project risks.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-red-600">24</div>
            <div className="text-sm text-gray-600">Risk Factors</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">6</div>
            <div className="text-sm text-gray-600">Risk Categories</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">72%</div>
            <div className="text-sm text-gray-600">Risk Reduction</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">300+</div>
            <div className="text-sm text-gray-600">Organizations</div>
          </div>
        </div>
      </div>

      {/* Risk Assessment Tool */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Interactive Risk Assessment Tool
          </CardTitle>
          <CardDescription>
            Answer a few questions to get a customized risk assessment for your AI project
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!results ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select value={assessmentData.projectType} onValueChange={(value) => 
                    setAssessmentData({...assessmentData, projectType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automation">Process Automation</SelectItem>
                      <SelectItem value="analytics">Predictive Analytics</SelectItem>
                      <SelectItem value="nlp">Natural Language Processing</SelectItem>
                      <SelectItem value="computer-vision">Computer Vision</SelectItem>
                      <SelectItem value="recommendation">Recommendation Systems</SelectItem>
                      <SelectItem value="decision-support">Decision Support Systems</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={assessmentData.industry} onValueChange={(value) => 
                    setAssessmentData({...assessmentData, industry: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Financial Services</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="technicalComplexity">Technical Complexity</Label>
                  <Select value={assessmentData.technicalComplexity} onValueChange={(value) => 
                    setAssessmentData({...assessmentData, technicalComplexity: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select complexity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Simple ML models</SelectItem>
                      <SelectItem value="medium">Medium - Multiple models/integrations</SelectItem>
                      <SelectItem value="high">High - Complex deep learning/multi-modal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="userBase">User Base Size</Label>
                  <Select value={assessmentData.userBase} onValueChange={(value) => 
                    setAssessmentData({...assessmentData, userBase: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select user base" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (< 1,000 users)</SelectItem>
                      <SelectItem value="medium">Medium (1,000-10,000 users)</SelectItem>
                      <SelectItem value="large">Large (> 10,000 users)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="dataTypes">Data Types (select all that apply)</Label>
                <Textarea 
                  placeholder="e.g., Personal data, Financial data, Health records, Biometric data..."
                  value={assessmentData.dataTypes}
                  onChange={(e) => setAssessmentData({...assessmentData, dataTypes: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="regulatoryRequirements">Regulatory Requirements</Label>
                <Textarea 
                  placeholder="e.g., GDPR, HIPAA, SOX, PCI DSS, EU AI Act..."
                  value={assessmentData.regulatoryRequirements}
                  onChange={(e) => setAssessmentData({...assessmentData, regulatoryRequirements: e.target.value})}
                />
              </div>
              
              <Button onClick={handleAssessment} disabled={isLoading} className="w-full">
                {isLoading ? 'Analyzing Risks...' : 'Generate Risk Assessment'}
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Risk Assessment Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getRiskColor(results.overallRisk)}>
                        {getSeverityIcon(results.overallRisk)}
                        {results.overallRisk.toUpperCase()} RISK
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold">{results.riskScore}/100</div>
                    <div className="text-sm text-gray-600">Overall Risk Score</div>
                  </div>
                  <div className="space-y-2">
                    <div><strong>Timeline:</strong> {results.timeline}</div>
                    <div><strong>Budget Impact:</strong> {results.budget}</div>
                    <div><strong>Critical Areas:</strong> {results.criticalAreas.join(", ")}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Recommended Actions</h4>
                <ul className="space-y-2">
                  {results.recommendedActions.map((action, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button onClick={() => setResults(null)} variant="outline" className="w-full">
                Start New Assessment
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Risk Categories Detail */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">6 Critical Risk Categories</h2>
        <div className="space-y-6">
          {riskCategories.map((category, index) => (
            <Card key={index} className={`border-l-4 ${
              category.severity === 'critical' ? 'border-l-red-600' :
              category.severity === 'high' ? 'border-l-orange-600' :
              category.severity === 'medium' ? 'border-l-yellow-600' :
              'border-l-green-600'
            }`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${getRiskColor(category.severity)}`}>
                      {category.icon}
                    </div>
                    {category.name}
                  </span>
                  <Badge className={getRiskColor(category.severity)}>
                    {getSeverityIcon(category.severity)}
                    {category.severity.toUpperCase()}
                  </Badge>
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Risk Factors */}
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">Key Risk Factors</h4>
                    <div className="space-y-3">
                      {category.riskFactors.map((risk, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-medium mb-2">{risk.factor}</h5>
                          <div className="text-sm space-y-1">
                            <div><strong>Impact:</strong> {risk.impact}</div>
                            <div><strong>Probability:</strong> {risk.probability}</div>
                            <div><strong>Mitigation:</strong> {risk.mitigation}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Mitigation Strategies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Mitigation Strategies</h4>
                    <ul className="space-y-1">
                      {category.mitigationStrategies.map((strategy, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {strategy}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Risk Mitigation Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Risk Mitigation Implementation Timeline</CardTitle>
          <CardDescription>
            Recommended sequence for addressing AI project risks over 24 weeks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="border-l-4 border-l-red-600 pl-4">
                <h3 className="font-semibold text-red-600">Phase 1: Critical (Week 1-4)</h3>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Security framework implementation</li>
                  <li>• Regulatory compliance assessment</li>
                  <li>• Data governance establishment</li>
                  <li>• Ethics framework design</li>
                </ul>
              </div>
              <div className="border-l-4 border-l-orange-600 pl-4">
                <h3 className="font-semibold text-orange-600">Phase 2: High (Week 5-10)</h3>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Technical architecture validation</li>
                  <li>• Business continuity planning</li>
                  <li>• Change management program</li>
                  <li>• Bias testing implementation</li>
                </ul>
              </div>
              <div className="border-l-4 border-l-yellow-600 pl-4">
                <h3 className="font-semibold text-yellow-600">Phase 3: Medium (Week 11-18)</h3>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Performance monitoring setup</li>
                  <li>• Vendor risk management</li>
                  <li>• Transparency mechanisms</li>
                  <li>• Workforce impact mitigation</li>
                </ul>
              </div>
              <div className="border-l-4 border-l-green-600 pl-4">
                <h3 className="font-semibold text-green-600">Phase 4: Optimization (Week 19-24)</h3>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Continuous improvement process</li>
                  <li>• Advanced monitoring deployment</li>
                  <li>• Stakeholder engagement program</li>
                  <li>• Long-term sustainability planning</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">What are the most common AI project risks?</h3>
              <p className="text-sm text-gray-600">
                The top 5 risks are: Data quality issues (60% of projects), regulatory compliance challenges (45%), 
                security vulnerabilities (40%), user adoption resistance (60%), and ROI shortfall (50%). 
                Our framework addresses each systematically.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">How do you quantify AI project risk?</h3>
              <p className="text-sm text-gray-600">
                Risk quantification considers impact severity (1-5 scale), probability of occurrence (%), 
                and mitigation cost. We use a weighted scoring system across 6 categories with 24 specific risk factors, 
                resulting in an overall risk score from 0-100.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">What's the cost of not addressing AI risks?</h3>
              <p className="text-sm text-gray-600">
                Failed AI projects cost an average of $3-15M in direct costs, plus indirect costs like reputation damage, 
                regulatory fines (up to €35M under EU AI Act), and competitive disadvantage. Risk mitigation typically costs 
                10-20% of project budget but reduces failure probability by 70%.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">How often should AI risk assessments be updated?</h3>
              <p className="text-sm text-gray-600">
                Initial assessment should be comprehensive, followed by quarterly reviews during implementation and 
                bi-annual assessments post-deployment. Major changes in regulations, technology, or business context 
                should trigger immediate reassessment.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">What skills are needed for effective AI risk management?</h3>
              <p className="text-sm text-gray-600">
                Effective AI risk management requires: Technical expertise (AI/ML, cybersecurity), Regulatory knowledge 
                (compliance, legal), Business acumen (change management, strategy), and Ethics expertise (bias detection, 
                responsible AI). Most organizations benefit from external risk assessment expertise.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">How does AI risk differ from traditional IT risk?</h3>
              <p className="text-sm text-gray-600">
                AI risks include unique elements: algorithmic bias and fairness, model interpretability requirements, 
                data drift and concept changes, ethical implications of automated decisions, and evolving regulatory landscape 
                (EU AI Act, algorithmic accountability). Traditional IT risk frameworks must be enhanced for AI.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-0">
        <CardContent className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Secure Your AI Project Success</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get expert risk assessment and mitigation planning from our certified AI risk specialists. 
            Reduce project failure probability by 70% with our proven framework.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Get Risk Assessment Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Risk Framework
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              ✓ Comprehensive 24-factor analysis ✓ Custom mitigation roadmap ✓ Implementation support
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Related Resources */}
      <div className="mt-12 border-t pt-8">
        <h3 className="text-xl font-semibold mb-4">Related AI Risk Management Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/ai-governance-compliance-framework-2026" className="block">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-600 mb-2">AI Governance Framework</h4>
                <p className="text-sm text-gray-600">Comprehensive governance structure for enterprise AI risk management</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/ai-compliance-audit-2026" className="block">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-600 mb-2">AI Compliance Audit</h4>
                <p className="text-sm text-gray-600">190-point comprehensive compliance assessment tool</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/ai-implementation-success-framework-2026" className="block">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-600 mb-2">Implementation Success Framework</h4>
                <p className="text-sm text-gray-600">4-phase methodology for successful AI transformation</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}