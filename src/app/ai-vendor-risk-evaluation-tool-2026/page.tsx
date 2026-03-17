'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { AlertTriangle, Shield, TrendingUp, DollarSign, Calendar, Target, Zap, BarChart3, FileText, Download, Users, Globe, Lock, Check, X } from 'lucide-react'

interface VendorAssessment {
  vendorName: string
  industry: string
  companySize: string
  serviceType: string
  contractValue: string
  dataAccess: string
  complianceRequirements: string[]
  geographicRestrictions: string
  currentVendors: string
  riskTolerance: string
}

interface RiskScoring {
  securityScore: number
  complianceScore: number
  reliabilityScore: number
  dataPrivacyScore: number
  financialStabilityScore: number
  supportScore: number
  overallRisk: string
  riskLevel: 'Low' | 'Medium' | 'High'
}

interface VendorRecommendation {
  category: string
  priority: 'Immediate' | 'Short-term' | 'Long-term'
  recommendation: string
  impact: string
  cost: string
}

export default function AIVendorRiskEvaluationTool() {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [assessment, setAssessment] = useState<VendorAssessment>({
    vendorName: '',
    industry: '',
    companySize: '',
    serviceType: '',
    contractValue: '',
    dataAccess: '',
    complianceRequirements: [],
    geographicRestrictions: '',
    currentVendors: '',
    riskTolerance: ''
  })
  const [riskScoring, setRiskScoring] = useState<RiskScoring | null>(null)
  const [recommendations, setRecommendations] = useState<VendorRecommendation[]>([])

  const industries = [
    'Financial Services', 'Healthcare', 'Technology', 'Manufacturing', 'Retail',
    'Government', 'Education', 'Insurance', 'Legal', 'Media & Entertainment'
  ]

  const companySizes = [
    'Startup (1-50 employees)', 'Small Business (51-250 employees)',
    'Mid-market (251-1,000 employees)', 'Enterprise (1,001-5,000 employees)',
    'Large Enterprise (5,000+ employees)'
  ]

  const serviceTypes = [
    'Machine Learning Platform', 'Natural Language Processing', 'Computer Vision',
    'Robotic Process Automation', 'AI Analytics', 'Chatbot/Virtual Assistant',
    'AI-powered CRM', 'Predictive Analytics', 'Content Generation', 'AI Security'
  ]

  const contractValues = [
    'Under $50K', '$50K - $200K', '$200K - $500K', '$500K - $1M',
    '$1M - $5M', 'Over $5M'
  ]

  const dataAccessLevels = [
    'No Data Access', 'Public Data Only', 'Internal Business Data',
    'Customer Personal Data', 'Sensitive Financial Data', 'Confidential/Trade Secrets'
  ]

  const complianceOptions = [
    'GDPR', 'HIPAA', 'SOC 2', 'ISO 27001', 'PCI DSS', 'CCPA',
    'SOX', 'NIST Framework', 'FedRAMP', 'Industry-specific regulations'
  ]

  const calculateRiskScoring = (): RiskScoring => {
    let securityScore = 85
    let complianceScore = 80
    let reliabilityScore = 75
    let dataPrivacyScore = 70
    let financialStabilityScore = 80
    let supportScore = 85

    // Adjust scores based on assessment
    if (assessment.dataAccess === 'Sensitive Financial Data' || assessment.dataAccess === 'Confidential/Trade Secrets') {
      securityScore -= 20
      dataPrivacyScore -= 25
    }

    if (assessment.complianceRequirements.length > 3) {
      complianceScore -= 15
    }

    if (assessment.contractValue === 'Over $5M') {
      financialStabilityScore += 10
      supportScore += 10
    }

    if (assessment.companySize === 'Large Enterprise (5,000+ employees)') {
      reliabilityScore += 15
    }

    const averageScore = (securityScore + complianceScore + reliabilityScore + dataPrivacyScore + financialStabilityScore + supportScore) / 6
    
    let riskLevel: 'Low' | 'Medium' | 'High' = 'Low'
    let overallRisk = 'Acceptable Risk'

    if (averageScore < 60) {
      riskLevel = 'High'
      overallRisk = 'High Risk - Requires Mitigation'
    } else if (averageScore < 75) {
      riskLevel = 'Medium'
      overallRisk = 'Medium Risk - Monitor Closely'
    }

    return {
      securityScore,
      complianceScore,
      reliabilityScore,
      dataPrivacyScore,
      financialStabilityScore,
      supportScore,
      overallRisk,
      riskLevel
    }
  }

  const generateRecommendations = (scoring: RiskScoring): VendorRecommendation[] => {
    const recs: VendorRecommendation[] = []

    if (scoring.securityScore < 70) {
      recs.push({
        category: 'Security Enhancement',
        priority: 'Immediate',
        recommendation: 'Implement additional security controls and monitoring',
        impact: 'Critical security risk mitigation',
        cost: '$25K - $100K'
      })
    }

    if (scoring.complianceScore < 70) {
      recs.push({
        category: 'Compliance Strengthening',
        priority: 'Immediate',
        recommendation: 'Conduct compliance audit and gap analysis',
        impact: 'Regulatory compliance assurance',
        cost: '$15K - $50K'
      })
    }

    if (scoring.dataPrivacyScore < 75) {
      recs.push({
        category: 'Data Privacy Protection',
        priority: 'Short-term',
        recommendation: 'Implement data encryption and access controls',
        impact: 'Enhanced data protection',
        cost: '$20K - $75K'
      })
    }

    if (scoring.reliabilityScore < 80) {
      recs.push({
        category: 'Reliability Improvement',
        priority: 'Short-term',
        recommendation: 'Establish SLA monitoring and backup systems',
        impact: 'Improved system uptime',
        cost: '$10K - $40K'
      })
    }

    recs.push({
      category: 'Vendor Relationship Management',
      priority: 'Long-term',
      recommendation: 'Establish quarterly vendor review process',
      impact: 'Continuous improvement',
      cost: '$5K - $15K annually'
    })

    return recs
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      const scoring = calculateRiskScoring()
      const recs = generateRecommendations(scoring)
      setRiskScoring(scoring)
      setRecommendations(recs)
      setCurrentStep(5)
    }
  }

  const handleComplianceChange = (requirement: string, checked: boolean) => {
    if (checked) {
      setAssessment(prev => ({
        ...prev,
        complianceRequirements: [...prev.complianceRequirements, requirement]
      }))
    } else {
      setAssessment(prev => ({
        ...prev,
        complianceRequirements: prev.complianceRequirements.filter(req => req !== requirement)
      }))
    }
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'High': return 'text-red-600 bg-red-50'
      case 'Medium': return 'text-yellow-600 bg-yellow-50'
      case 'Low': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Immediate': return 'text-red-600 bg-red-100'
      case 'Short-term': return 'text-yellow-600 bg-yellow-100'
      case 'Long-term': return 'text-blue-600 bg-blue-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Vendor Risk Evaluation Tool 2026
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Comprehensive assessment framework for AI vendor selection and risk management
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Badge className="bg-blue-100 text-blue-800">Enterprise Security</Badge>
            <Badge className="bg-green-100 text-green-800">Compliance Ready</Badge>
            <Badge className="bg-purple-100 text-purple-800">Risk Management</Badge>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 text-blue-600" />
              Assessment Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Step {currentStep} of 5</span>
              <span className="text-sm font-medium">{Math.round((currentStep / 5) * 100)}% Complete</span>
            </div>
            <Progress value={(currentStep / 5) * 100} className="mb-4" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Vendor Info</span>
              <span>Service Details</span>
              <span>Compliance</span>
              <span>Risk Profile</span>
              <span>Results</span>
            </div>
          </CardContent>
        </Card>

        {/* Step 1: Vendor Information */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 text-blue-600" />
                Vendor Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="vendorName">Vendor/Company Name</Label>
                  <Input
                    id="vendorName"
                    value={assessment.vendorName}
                    onChange={(e) => setAssessment(prev => ({ ...prev, vendorName: e.target.value }))}
                    placeholder="Enter vendor name"
                  />
                </div>
                <div>
                  <Label htmlFor="industry">Your Industry</Label>
                  <Select value={assessment.industry} onValueChange={(value) => setAssessment(prev => ({ ...prev, industry: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="companySize">Your Company Size</Label>
                  <Select value={assessment.companySize} onValueChange={(value) => setAssessment(prev => ({ ...prev, companySize: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      {companySizes.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="serviceType">AI Service Type</Label>
                  <Select value={assessment.serviceType} onValueChange={(value) => setAssessment(prev => ({ ...prev, serviceType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={handleNext} disabled={!assessment.vendorName || !assessment.industry || !assessment.companySize || !assessment.serviceType}>
                  Next Step
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Service & Contract Details */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 text-green-600" />
                Service & Contract Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="contractValue">Annual Contract Value</Label>
                  <Select value={assessment.contractValue} onValueChange={(value) => setAssessment(prev => ({ ...prev, contractValue: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select contract value range" />
                    </SelectTrigger>
                    <SelectContent>
                      {contractValues.map((value) => (
                        <SelectItem key={value} value={value}>{value}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="dataAccess">Data Access Level</Label>
                  <Select value={assessment.dataAccess} onValueChange={(value) => setAssessment(prev => ({ ...prev, dataAccess: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select data access level" />
                    </SelectTrigger>
                    <SelectContent>
                      {dataAccessLevels.map((level) => (
                        <SelectItem key={level} value={level}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="geographicRestrictions">Geographic/Jurisdictional Requirements</Label>
                <Textarea
                  id="geographicRestrictions"
                  value={assessment.geographicRestrictions}
                  onChange={(e) => setAssessment(prev => ({ ...prev, geographicRestrictions: e.target.value }))}
                  placeholder="Describe any geographic restrictions or data residency requirements..."
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="currentVendors">Current AI Vendors (if any)</Label>
                <Textarea
                  id="currentVendors"
                  value={assessment.currentVendors}
                  onChange={(e) => setAssessment(prev => ({ ...prev, currentVendors: e.target.value }))}
                  placeholder="List existing AI vendors and their roles..."
                  rows={3}
                />
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>Previous</Button>
                <Button onClick={handleNext} disabled={!assessment.contractValue || !assessment.dataAccess}>
                  Next Step
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Compliance Requirements */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 text-purple-600" />
                Compliance & Regulatory Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg font-medium mb-4 block">
                  Select applicable compliance frameworks:
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {complianceOptions.map((requirement) => (
                    <div key={requirement} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={requirement}
                        checked={assessment.complianceRequirements.includes(requirement)}
                        onChange={(e) => handleComplianceChange(requirement, e.target.checked)}
                        className="rounded border-gray-300"
                      />
                      <Label htmlFor={requirement} className="text-sm">{requirement}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <Label htmlFor="riskTolerance">Enterprise Risk Tolerance</Label>
                <Select value={assessment.riskTolerance} onValueChange={(value) => setAssessment(prev => ({ ...prev, riskTolerance: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk tolerance level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Conservative">Conservative - Minimal risk acceptance</SelectItem>
                    <SelectItem value="Moderate">Moderate - Balanced risk approach</SelectItem>
                    <SelectItem value="Aggressive">Aggressive - Higher risk tolerance for innovation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>Previous</Button>
                <Button onClick={handleNext} disabled={assessment.complianceRequirements.length === 0 || !assessment.riskTolerance}>
                  Next Step
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Risk Profile Assessment */}
        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 text-red-600" />
                Risk Profile Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Assessment Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><strong>Vendor:</strong> {assessment.vendorName}</div>
                  <div><strong>Service:</strong> {assessment.serviceType}</div>
                  <div><strong>Contract Value:</strong> {assessment.contractValue}</div>
                  <div><strong>Data Access:</strong> {assessment.dataAccess}</div>
                  <div><strong>Industry:</strong> {assessment.industry}</div>
                  <div><strong>Company Size:</strong> {assessment.companySize}</div>
                  <div className="md:col-span-2">
                    <strong>Compliance Requirements:</strong> {assessment.complianceRequirements.join(', ')}
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center">
                  <AlertTriangle className="text-yellow-600 mr-2" />
                  <span className="font-medium">Ready for Risk Analysis</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Click "Generate Risk Assessment" to calculate comprehensive risk scores and recommendations.
                </p>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(3)}>Previous</Button>
                <Button onClick={handleNext} className="bg-red-600 hover:bg-red-700">
                  Generate Risk Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 5: Results */}
        {currentStep === 5 && riskScoring && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 text-green-600" />
                  Vendor Risk Assessment Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(riskScoring.riskLevel)}`}>
                      {riskScoring.riskLevel} Risk
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{riskScoring.overallRisk}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {Math.round((riskScoring.securityScore + riskScoring.complianceScore + riskScoring.reliabilityScore + riskScoring.dataPrivacyScore + riskScoring.financialStabilityScore + riskScoring.supportScore) / 6)}
                    </div>
                    <p className="text-sm text-gray-600">Overall Score</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{recommendations.length}</div>
                    <p className="text-sm text-gray-600">Recommendations</p>
                  </div>
                </div>

                <Tabs defaultValue="scores" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="scores">Risk Scores</TabsTrigger>
                    <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                    <TabsTrigger value="report">Full Report</TabsTrigger>
                  </TabsList>

                  <TabsContent value="scores" className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Detailed Risk Scoring</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Security & Infrastructure', score: riskScoring.securityScore, icon: Shield },
                        { label: 'Regulatory Compliance', score: riskScoring.complianceScore, icon: FileText },
                        { label: 'Service Reliability', score: riskScoring.reliabilityScore, icon: Zap },
                        { label: 'Data Privacy Protection', score: riskScoring.dataPrivacyScore, icon: Lock },
                        { label: 'Financial Stability', score: riskScoring.financialStabilityScore, icon: DollarSign },
                        { label: 'Support & Service', score: riskScoring.supportScore, icon: Users }
                      ].map((item) => (
                        <div key={item.label} className="flex items-center space-x-4">
                          <item.icon className="text-blue-600 w-5 h-5" />
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{item.label}</span>
                              <span className="text-sm">{item.score}%</span>
                            </div>
                            <Progress value={item.score} className="h-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="recommendations" className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Risk Mitigation Recommendations</h3>
                    <div className="space-y-4">
                      {recommendations.map((rec, index) => (
                        <Card key={index} className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold">{rec.category}</h4>
                              <Badge className={getPriorityColor(rec.priority)}>{rec.priority}</Badge>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium">{rec.cost}</div>
                              <div className="text-xs text-gray-500">Estimated Cost</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{rec.recommendation}</p>
                          <div className="text-xs text-gray-600">
                            <strong>Impact:</strong> {rec.impact}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="report" className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Executive Summary</h3>
                      <div className="space-y-4 text-sm">
                        <div>
                          <strong>Vendor Assessment:</strong> {assessment.vendorName} - {assessment.serviceType}
                        </div>
                        <div>
                          <strong>Overall Risk Level:</strong> {riskScoring.riskLevel} Risk ({riskScoring.overallRisk})
                        </div>
                        <div>
                          <strong>Key Compliance Areas:</strong> {assessment.complianceRequirements.join(', ')}
                        </div>
                        <div>
                          <strong>Contract Value:</strong> {assessment.contractValue}
                        </div>
                        <div>
                          <strong>Data Access Level:</strong> {assessment.dataAccess}
                        </div>
                        <div>
                          <strong>Immediate Actions Required:</strong> {recommendations.filter(r => r.priority === 'Immediate').length} items
                        </div>
                        <div>
                          <strong>Estimated Risk Mitigation Cost:</strong> $50K - $200K
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>
                    New Assessment
                  </Button>
                  <div className="space-x-2">
                    <Button variant="outline">
                      <Download className="mr-2 w-4 h-4" />
                      Download Report
                    </Button>
                    <Button>
                      <FileText className="mr-2 w-4 h-4" />
                      Generate PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}