'use client';

import { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Factory, DollarSign, Clock, Target, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ManufacturingAIROICalculator() {
  const [inputs, setInputs] = useState({
    annualRevenue: 100000000,
    currentDowntimeCost: 50000,
    currentDefectRate: 3,
    currentEnergyEfficiency: 75,
    currentInventoryTurnover: 6,
    aiInvestment: 3200000,
    projectTimeline: 16,
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    roi: 0,
    paybackPeriod: 0,
    totalProjectCost: 0,
    riskAdjustedROI: 0,
  });

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const {
      annualRevenue,
      currentDowntimeCost,
      currentDefectRate,
      currentEnergyEfficiency,
      currentInventoryTurnover,
      aiInvestment,
      projectTimeline,
    } = inputs;

    // Calculate expected improvements based on industry benchmarks
    const downtimeReduction = 0.35; // 35% average improvement
    const defectReduction = 0.68; // 68% average improvement
    const energyEfficiencyGain = 0.25; // 25% average improvement
    const inventoryOptimization = 0.20; // 20% average improvement

    // Calculate annual savings
    const downtimeSavings = currentDowntimeCost * 12 * downtimeReduction;
    const qualitySavings = (annualRevenue * currentDefectRate / 100) * defectReduction;
    const energySavings = (annualRevenue * 0.05) * (energyEfficiencyGain); // Assume 5% energy cost of revenue
    const inventorySavings = (annualRevenue * 0.30) * (inventoryOptimization * 0.10); // 30% inventory, 10% carrying cost

    const totalAnnualSavings = downtimeSavings + qualitySavings + energySavings + inventorySavings;

    // Calculate total project cost (including hidden costs)
    const hiddenCostMultiplier = 1.40; // 40% hidden costs
    const totalProjectCost = aiInvestment * hiddenCostMultiplier;

    // Calculate ROI metrics
    const basicROI = ((totalAnnualSavings - (totalProjectCost * 0.20)) / totalProjectCost) * 100; // 20% annual maintenance
    const riskAdjustedROI = basicROI * 0.80; // 80% achievement rate
    const paybackPeriod = totalProjectCost / totalAnnualSavings;

    setResults({
      annualSavings: Math.round(totalAnnualSavings),
      roi: Math.round(basicROI),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      totalProjectCost: Math.round(totalProjectCost),
      riskAdjustedROI: Math.round(riskAdjustedROI),
    });
  };

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getROIColor = (roi: number) => {
    if (roi >= 60) return 'text-green-600';
    if (roi >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Factory className="h-12 w-12 text-blue-600 mr-4" />
            <Calculator className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            制造业AI投资ROI计算器
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            基于15家企业实际数据，计算您的制造业AI投资预期收益。包含隐性成本和风险调整的专业财务建模。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-6 w-6 text-blue-600 mr-2" />
              企业参数输入
            </h2>

            <div className="space-y-6">
              {/* Annual Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  年营业收入 (USD)
                </label>
                <input
                  type="number"
                  value={inputs.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="100000000"
                />
                <p className="text-xs text-gray-500 mt-1">典型范围: $50M - $500M</p>
              </div>

              {/* Downtime Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  月均设备停机损失 (USD)
                </label>
                <input
                  type="number"
                  value={inputs.currentDowntimeCost}
                  onChange={(e) => handleInputChange('currentDowntimeCost', Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="50000"
                />
                <p className="text-xs text-gray-500 mt-1">AI预测维护可减少35%停机时间</p>
              </div>

              {/* Defect Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  当前产品缺陷率 (%)
                </label>
                <input
                  type="number"
                  value={inputs.currentDefectRate}
                  onChange={(e) => handleInputChange('currentDefectRate', Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="3"
                  step="0.1"
                />
                <p className="text-xs text-gray-500 mt-1">AI质量检测可降低68%缺陷率</p>
              </div>

              {/* Energy Efficiency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  当前能源效率 (%)
                </label>
                <input
                  type="number"
                  value={inputs.currentEnergyEfficiency}
                  onChange={(e) => handleInputChange('currentEnergyEfficiency', Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="75"
                />
                <p className="text-xs text-gray-500 mt-1">AI优化可提升25%能源效率</p>
              </div>

              {/* AI Investment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  计划AI投资 (USD)
                </label>
                <input
                  type="number"
                  value={inputs.aiInvestment}
                  onChange={(e) => handleInputChange('aiInvestment', Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="3200000"
                />
                <p className="text-xs text-gray-500 mt-1">不包含隐性成本，系统将自动计算</p>
              </div>

              {/* Project Timeline */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  项目时间线 (月)
                </label>
                <input
                  type="number"
                  value={inputs.projectTimeline}
                  onChange={(e) => handleInputChange('projectTimeline', Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="16"
                />
                <p className="text-xs text-gray-500 mt-1">典型制造业AI项目: 14-18个月</p>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* ROI Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                ROI分析结果
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                  <div className="text-sm text-green-700 font-medium">年度节省</div>
                  <div className="text-2xl font-bold text-green-900">
                    {formatCurrency(results.annualSavings)}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                  <div className="text-sm text-blue-700 font-medium">投资回报率</div>
                  <div className={`text-2xl font-bold ${getROIColor(results.roi)}`}>
                    {results.roi}%
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
                  <div className="text-sm text-purple-700 font-medium">回报周期</div>
                  <div className="text-2xl font-bold text-purple-900">
                    {results.paybackPeriod} 个月
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4">
                  <div className="text-sm text-orange-700 font-medium">总项目成本</div>
                  <div className="text-2xl font-bold text-orange-900">
                    {formatCurrency(results.totalProjectCost)}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="font-medium text-gray-900">风险调整后ROI</span>
                </div>
                <div className={`text-3xl font-bold ${getROIColor(results.riskAdjustedROI)}`}>
                  {results.riskAdjustedROI}%
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  基于行业平均80%实现率调整
                </p>
              </div>
            </div>

            {/* Industry Benchmarks */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                行业基准对比
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">汽车制造业</span>
                  <span className="font-semibold text-gray-900">55-85% ROI</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">食品加工业</span>
                  <span className="font-semibold text-gray-900">40-70% ROI</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">电子制造业</span>
                  <span className="font-semibold text-gray-900">45-75% ROI</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">平均回报期</span>
                  <span className="font-semibold text-gray-900">14-18 个月</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <div className="font-medium text-blue-900">您的项目评估</div>
                    <div className="text-sm text-blue-700 mt-1">
                      {results.roi >= 60 && '优秀：ROI超出行业平均水平，建议立即投资'}
                      {results.roi >= 40 && results.roi < 60 && '良好：ROI符合行业标准，可以考虑投资'}
                      {results.roi < 40 && '需要优化：ROI低于预期，建议重新评估或延期投资'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Items */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                建议下一步
              </h3>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">数据质量审计</div>
                    <div className="text-sm text-gray-600">评估现有数据质量，确定清理和标准化需求</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">制定实施路线图</div>
                    <div className="text-sm text-gray-600">规划6个月pilot + 12个月全面部署</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                    <Target className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">变更管理计划</div>
                    <div className="text-sm text-gray-600">制定员工培训和adoption策略</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  获取详细实施方案
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            * 此计算器基于15家制造业企业实际数据建模。实际结果可能因企业具体情况而异。
            建议咨询专业AI投资顾问获取详细分析。
          </p>
        </div>
      </div>
    </div>
  );
}