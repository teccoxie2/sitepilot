'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AIInvestmentPaybackCalculator() {
  const [formData, setFormData] = useState({
    totalInvestment: '',
    monthlyLabourSavings: '',
    monthlyEfficiencyGains: '',
    monthlyRevenueIncrease: '',
    implementationTimeMonths: '',
    maintenanceCostPercentage: '',
    riskFactor: 'medium'
  });

  const [results, setResults] = useState<any>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const calculatePaybackPeriod = () => {
    const investment = parseFloat(formData.totalInvestment);
    const labourSavings = parseFloat(formData.monthlyLabourSavings) || 0;
    const efficiencyGains = parseFloat(formData.monthlyEfficiencyGains) || 0;
    const revenueIncrease = parseFloat(formData.monthlyRevenueIncrease) || 0;
    const implementationMonths = parseFloat(formData.implementationTimeMonths) || 0;
    const maintenanceRate = parseFloat(formData.maintenanceCostPercentage) / 100 || 0.02;
    
    if (investment <= 0) return;

    const monthlyBenefits = labourSavings + efficiencyGains + revenueIncrease;
    const monthlyMaintenance = (investment * maintenanceRate) / 12;
    const netMonthlySavings = monthlyBenefits - monthlyMaintenance;

    if (netMonthlySavings <= 0) {
      setResults({
        error: true,
        message: "Investment may not be viable - monthly costs exceed benefits"
      });
      return;
    }

    let riskMultiplier = 1;
    switch (formData.riskFactor) {
      case 'low':
        riskMultiplier = 0.95;
        break;
      case 'medium':
        riskMultiplier = 1.1;
        break;
      case 'high':
        riskMultiplier = 1.25;
        break;
    }

    const adjustedPaybackMonths = (investment / netMonthlySavings) * riskMultiplier + implementationMonths;
    const breakEvenMonth = Math.ceil(adjustedPaybackMonths);
    
    const yearOneROI = ((netMonthlySavings * 12) - investment) / investment * 100;
    const yearThreeROI = ((netMonthlySavings * 36) - investment) / investment * 100;
    const yearFiveROI = ((netMonthlySavings * 60) - investment) / investment * 100;

    setResults({
      paybackMonths: breakEvenMonth,
      paybackYears: (breakEvenMonth / 12).toFixed(1),
      netMonthlySavings: netMonthlySavings,
      yearOneROI: yearOneROI,
      yearThreeROI: yearThreeROI,
      yearFiveROI: yearFiveROI,
      totalFiveYearValue: (netMonthlySavings * 60) - investment,
      riskLevel: formData.riskFactor,
      implementationDelay: implementationMonths
    });

    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 2000);
  };

  const getRecommendation = () => {
    if (!results || results.error) return null;
    
    if (results.paybackMonths <= 12) {
      return {
        status: 'Excellent Investment',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        recommendation: 'Strong recommendation for immediate implementation. Fast payback period indicates high-value AI investment.'
      };
    } else if (results.paybackMonths <= 24) {
      return {
        status: 'Good Investment',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        recommendation: 'Recommended for implementation. Solid business case with reasonable payback timeline.'
      };
    } else if (results.paybackMonths <= 36) {
      return {
        status: 'Consider Carefully',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        recommendation: 'Moderate recommendation. Consider alternative implementations or enhanced benefit capture.'
      };
    } else {
      return {
        status: 'High Risk Investment',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        recommendation: 'Carefully evaluate alternatives. Long payback period may indicate suboptimal AI investment strategy.'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Investment Payback Period Calculator 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate precise payback timeline and ROI for your AI investments. 
            Enterprise-grade analysis for CFO-level decision making.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Parameters</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total AI Investment ($)
                </label>
                <input
                  type="number"
                  placeholder="500000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.totalInvestment}
                  onChange={(e) => setFormData({...formData, totalInvestment: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Labour Cost Savings ($)
                </label>
                <input
                  type="number"
                  placeholder="25000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.monthlyLabourSavings}
                  onChange={(e) => setFormData({...formData, monthlyLabourSavings: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Efficiency Gains ($)
                </label>
                <input
                  type="number"
                  placeholder="15000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.monthlyEfficiencyGains}
                  onChange={(e) => setFormData({...formData, monthlyEfficiencyGains: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Revenue Increase ($)
                </label>
                <input
                  type="number"
                  placeholder="10000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.monthlyRevenueIncrease}
                  onChange={(e) => setFormData({...formData, monthlyRevenueIncrease: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Time (Months)
                </label>
                <input
                  type="number"
                  placeholder="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.implementationTimeMonths}
                  onChange={(e) => setFormData({...formData, implementationTimeMonths: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Maintenance Cost (% of Investment)
                </label>
                <input
                  type="number"
                  placeholder="2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.maintenanceCostPercentage}
                  onChange={(e) => setFormData({...formData, maintenanceCostPercentage: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Risk Assessment
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.riskFactor}
                  onChange={(e) => setFormData({...formData, riskFactor: e.target.value})}
                >
                  <option value="low">Low Risk (Proven technology, clear processes)</option>
                  <option value="medium">Medium Risk (Standard implementation)</option>
                  <option value="high">High Risk (Complex integration, new processes)</option>
                </select>
              </div>

              <button
                onClick={calculatePaybackPeriod}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Payback Period
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {results && !results.error && (
              <div className={`bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 ${showAnimation ? 'scale-105 shadow-2xl' : ''}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payback Analysis</h2>
                
                {rec && (
                  <div className={`rounded-lg p-4 mb-6 border ${rec.bgColor} ${rec.borderColor}`}>
                    <h3 className={`text-lg font-bold ${rec.color} mb-2`}>
                      {rec.status}
                    </h3>
                    <p className="text-gray-700">{rec.recommendation}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Payback Period</h4>
                    <p className="text-2xl font-bold text-blue-600">
                      {results.paybackMonths} months
                    </p>
                    <p className="text-sm text-gray-500">({results.paybackYears} years)</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Net Monthly Savings</h4>
                    <p className="text-2xl font-bold text-green-600">
                      ${results.netMonthlySavings.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-gray-800">ROI Timeline</h4>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Year 1 ROI</span>
                    <span className={`font-bold ${results.yearOneROI > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {results.yearOneROI > 0 ? '+' : ''}{results.yearOneROI.toFixed(1)}%
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Year 3 ROI</span>
                    <span className="font-bold text-green-600">
                      +{results.yearThreeROI.toFixed(1)}%
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Year 5 ROI</span>
                    <span className="font-bold text-green-600">
                      +{results.yearFiveROI.toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-1">5-Year Total Value</h4>
                  <p className="text-2xl font-bold text-indigo-600">
                    ${results.totalFiveYearValue.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">Net value after investment recovery</p>
                </div>
              </div>
            )}

            {results && results.error && (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-red-600 mb-2">Investment Analysis Alert</h3>
                  <p className="text-gray-700">{results.message}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Consider reviewing the benefit estimates or exploring alternative AI implementation approaches.
                  </p>
                </div>
              </div>
            )}

            {/* Action Items */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h3>
              <div className="space-y-3">
                <Link href="/ai-integration-timeline-calculator-2026" 
                      className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <h4 className="font-semibold text-blue-900">Plan Implementation Timeline</h4>
                  <p className="text-sm text-blue-700">Calculate detailed project phases and milestones</p>
                </Link>
                
                <Link href="/enterprise-ai-risk-assessment-tool-2026"
                      className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <h4 className="font-semibold text-indigo-900">Assess Implementation Risk</h4>
                  <p className="text-sm text-indigo-700">Comprehensive risk analysis and mitigation strategies</p>
                </Link>
                
                <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900">Ready for Expert Consultation?</h4>
                  <p className="text-sm text-green-700 mb-2">
                    Get personalized AI investment strategy and implementation guidance
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700">
                    Schedule Strategic Consultation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Disclaimer</h3>
          <p className="text-sm text-gray-600">
            This calculator provides preliminary analysis based on provided inputs. Actual results may vary based on 
            implementation specifics, market conditions, and operational factors. For detailed financial planning and 
            risk assessment, consult with qualified AI strategy professionals and financial advisors.
          </p>
        </div>
      </div>
    </div>
  );
}