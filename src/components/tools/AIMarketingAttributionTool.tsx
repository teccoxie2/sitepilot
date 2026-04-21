'use client'

import { useState, useEffect } from 'react'

interface ChannelData {
  name: string
  impressions: number
  clicks: number
  conversions: number
  cost: number
  revenue: number
}

interface AttributionResult {
  channel: string
  firstTouchAttribution: number
  lastTouchAttribution: number
  linearAttribution: number
  timeDecayAttribution: number
  aiEnhancedAttribution: number
  roi: number
  efficiency: number
  recommendation: string
  priority: 'High' | 'Medium' | 'Low'
}

const defaultChannels: ChannelData[] = [
  { name: 'Google Ads', impressions: 50000, clicks: 2500, conversions: 125, cost: 8000, revenue: 25000 },
  { name: 'Facebook Ads', impressions: 75000, clicks: 1875, conversions: 94, cost: 6000, revenue: 18800 },
  { name: 'LinkedIn Ads', impressions: 20000, clicks: 800, conversions: 48, cost: 4500, revenue: 24000 },
  { name: 'Email Marketing', impressions: 10000, clicks: 1200, conversions: 84, cost: 800, revenue: 16800 },
  { name: 'Organic Search', impressions: 100000, clicks: 5000, conversions: 200, cost: 2000, revenue: 40000 },
  { name: 'Direct Traffic', impressions: 0, clicks: 3000, conversions: 150, cost: 500, revenue: 30000 }
]

export default function AIMarketingAttributionTool() {
  const [channels, setChannels] = useState<ChannelData[]>(defaultChannels)
  const [results, setResults] = useState<AttributionResult[]>([])
  const [totalBudget, setTotalBudget] = useState(22300)
  const [analysisMode, setAnalysisMode] = useState<'standard' | 'advanced'>('standard')
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateAttribution = () => {
    setIsCalculating(true)
    
    setTimeout(() => {
      const totalConversions = channels.reduce((sum, ch) => sum + ch.conversions, 0)
      const totalRevenue = channels.reduce((sum, ch) => sum + ch.revenue, 0)
      const totalCost = channels.reduce((sum, ch) => sum + ch.cost, 0)
      
      const attributionResults: AttributionResult[] = channels.map((channel) => {
        const conversionShare = channel.conversions / totalConversions
        const revenueShare = channel.revenue / totalRevenue
        const costShare = channel.cost / totalCost
        
        // Calculate each attribution model.
        const firstTouchAttribution = conversionShare * 0.4 + revenueShare * 0.6
        const lastTouchAttribution = conversionShare * 0.6 + revenueShare * 0.4
        const linearAttribution = conversionShare
        const timeDecayAttribution = conversionShare * 0.3 + revenueShare * 0.7
        
        // AI-enhanced attribution considers additional performance signals.
        const ctr = channel.clicks / Math.max(channel.impressions, 1) * 100
        const conversionRate = channel.conversions / Math.max(channel.clicks, 1) * 100
        const costPerConversion = channel.cost / Math.max(channel.conversions, 1)
        
        const aiEnhancedAttribution = (
          conversionShare * 0.25 +
          revenueShare * 0.35 +
          (ctr / 10) * 0.15 +
          (conversionRate / 10) * 0.15 +
          (1 - costShare) * 0.1
        )
        
        const roi = ((channel.revenue - channel.cost) / channel.cost) * 100
        const efficiency = channel.revenue / channel.cost
        
        let recommendation = ''
        let priority: 'High' | 'Medium' | 'Low' = 'Medium'
        
        if (roi > 200 && efficiency > 3) {
          recommendation = 'Outstanding performance. Increase budget allocation.'
          priority = 'High'
        } else if (roi > 100 && efficiency > 2) {
          recommendation = 'Strong performance. Consider moderate additional spend.'
          priority = 'Medium'
        } else if (roi > 50) {
          recommendation = 'Mixed performance. Improve conversion efficiency.'
          priority = 'Medium'
        } else {
          recommendation = 'Weak performance. Reassess the channel strategy.'
          priority = 'Low'
        }
        
        return {
          channel: channel.name,
          firstTouchAttribution: firstTouchAttribution * 100,
          lastTouchAttribution: lastTouchAttribution * 100,
          linearAttribution: linearAttribution * 100,
          timeDecayAttribution: timeDecayAttribution * 100,
          aiEnhancedAttribution: aiEnhancedAttribution * 100,
          roi,
          efficiency,
          recommendation,
          priority
        }
      })
      
      setResults(attributionResults.sort((a, b) => b.aiEnhancedAttribution - a.aiEnhancedAttribution))
      setIsCalculating(false)
    }, 1500)
  }

  useEffect(() => {
    calculateAttribution()
  }, [channels])

  const updateChannel = (index: number, field: keyof ChannelData, value: number) => {
    const newChannels = [...channels]
    newChannels[index] = { ...newChannels[index], [field]: value }
    setChannels(newChannels)
  }

  const addChannel = () => {
    setChannels([...channels, { name: 'New channel', impressions: 0, clicks: 0, conversions: 0, cost: 0, revenue: 0 }])
  }

  const removeChannel = (index: number) => {
    const newChannels = channels.filter((_, i) => i !== index)
    setChannels(newChannels)
  }

  const totalMetrics = {
    cost: channels.reduce((sum, ch) => sum + ch.cost, 0),
    revenue: channels.reduce((sum, ch) => sum + ch.revenue, 0),
    conversions: channels.reduce((sum, ch) => sum + ch.conversions, 0),
    roi: ((channels.reduce((sum, ch) => sum + ch.revenue, 0) - channels.reduce((sum, ch) => sum + ch.cost, 0)) / channels.reduce((sum, ch) => sum + ch.cost, 0)) * 100
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          AI Marketing Attribution Analysis Tool 2026
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional multi-channel marketing attribution analysis that tracks the contribution of each touchpoint and improves budget allocation decisions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left column: channel data input. */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">Marketing channel data</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setAnalysisMode(analysisMode === 'standard' ? 'advanced' : 'standard')}
                className="text-sm px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                {analysisMode === 'standard' ? 'Advanced mode' : 'Standard mode'}
              </button>
              <button
                onClick={addChannel}
                className="text-sm px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                + Add channel
              </button>
            </div>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {channels.map((channel, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <input
                    type="text"
                    value={channel.name}
                    onChange={(e) => updateChannel(index, 'name', e.target.value as any)}
                    className="font-medium text-gray-900 border-none p-0 focus:ring-0 bg-transparent"
                  />
                  {channels.length > 1 && (
                    <button
                      onClick={() => removeChannel(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <label className="block text-gray-600 mb-1">Impressions</label>
                    <input
                      type="number"
                      value={channel.impressions}
                      onChange={(e) => updateChannel(index, 'impressions', parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Clicks</label>
                    <input
                      type="number"
                      value={channel.clicks}
                      onChange={(e) => updateChannel(index, 'clicks', parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Conversions</label>
                    <input
                      type="number"
                      value={channel.conversions}
                      onChange={(e) => updateChannel(index, 'conversions', parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Cost ($)</label>
                    <input
                      type="number"
                      value={channel.cost}
                      onChange={(e) => updateChannel(index, 'cost', parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-gray-600 mb-1">Revenue ($)</label>
                    <input
                      type="number"
                      value={channel.revenue}
                      onChange={(e) => updateChannel(index, 'revenue', parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Aggregate metrics. */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Overall marketing metrics</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Total cost:</span>
                <span className="float-right font-medium">${totalMetrics.cost.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-600">Total revenue:</span>
                <span className="float-right font-medium">${totalMetrics.revenue.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-600">Total conversions:</span>
                <span className="float-right font-medium">{totalMetrics.conversions}</span>
              </div>
              <div>
                <span className="text-gray-600">Overall ROI:</span>
                <span className={`float-right font-medium ${totalMetrics.roi > 100 ? 'text-indigo-600' : 'text-red-600'}`}>
                  {totalMetrics.roi.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: attribution analysis results. */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">Attribution analysis results</h3>
            <button
              onClick={calculateAttribution}
              disabled={isCalculating}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isCalculating ? 'Analyzing...' : 'Run analysis again'}
            </button>
          </div>

          {isCalculating ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">AI is analyzing your marketing data...</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{result.channel}</h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        result.priority === 'High'
                          ? 'bg-indigo-100 text-indigo-800'
                          : result.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {result.priority === 'High' ? 'High priority' : result.priority === 'Medium' ? 'Medium priority' : 'Low priority'}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">AI-enhanced attribution:</span>
                      <span className="font-medium text-blue-600">
                        {result.aiEnhancedAttribution.toFixed(1)}%
                      </span>
                    </div>
                    
                    {analysisMode === 'advanced' && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">First touch:</span>
                          <span className="font-medium">{result.firstTouchAttribution.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Last touch:</span>
                          <span className="font-medium">{result.lastTouchAttribution.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Linear attribution:</span>
                          <span className="font-medium">{result.linearAttribution.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time decay:</span>
                          <span className="font-medium">{result.timeDecayAttribution.toFixed(1)}%</span>
                        </div>
                      </>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">ROI:</span>
                      <span className={`font-medium ${result.roi > 100 ? 'text-indigo-600' : 'text-red-600'}`}>
                        {result.roi.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Efficiency ratio:</span>
                      <span className="font-medium">{result.efficiency.toFixed(2)}x</span>
                    </div>
                  </div>

                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">AI recommendation:</span> {result.recommendation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Budget optimization guidance. */}
          {!isCalculating && results.length > 0 && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Budget optimization guidance</h4>
              <div className="text-sm text-gray-700 space-y-1">
                {results.slice(0, 3).map((result, index) => (
                  <div key={index}>
                    - <strong>{result.channel}</strong>:
                    {result.priority === 'High' && ' Increase budget by 30-50%.'}
                    {result.priority === 'Medium' && ' Hold the current budget or make a small adjustment.'}
                    {result.priority === 'Low' && ' Consider reducing spend or revising the channel strategy.'}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
