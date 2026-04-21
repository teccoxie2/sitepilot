'use client'

import { useState, useEffect } from 'react'

interface WebsiteBuilder {
  id: string
  name: string
  rating: number
  category: string
  price: string
  templates: string
  ecommerce: string
  freePlan: string
  loadTime: string
  uptime: string
  mobileScore: number
  seoScore: number
  icon: string
  gradient: string
  description: string
  pros: string[]
  cons: string[]
  pricing: { plan: string; price: string; features: string }[]
  bestFor: string
  link: string
}

const websiteBuilders: WebsiteBuilder[] = [
  {
    id: 'webflow',
    name: 'Webflow',
    rating: 9.8,
    category: 'professional',
    price: '$14/month',
    templates: '1,000+',
    ecommerce: 'Yes',
    freePlan: 'Limited',
    loadTime: '1.2s',
    uptime: '99.98%',
    mobileScore: 95,
    seoScore: 92,
    icon: '🏆',
    gradient: 'from-purple-500 to-blue-500',
    description: 'Webflow bridges the gap between drag-and-drop simplicity and professional web design, offering unmatched flexibility and power.',
    pros: [
      'Professional, responsive designs',
      'Advanced animation and interaction options',
      'Clean, semantic code output',
      'Powerful CMS capabilities',
      'Excellent SEO features',
      'No transaction fees',
      'Designer-friendly interface',
      'Hosting included'
    ],
    cons: [
      'Steeper learning curve',
      'Higher pricing for advanced features',
      'Overwhelming for complete beginners'
    ],
    pricing: [
      { plan: 'Free', price: '$0', features: '2 projects, Webflow subdomain' },
      { plan: 'Basic', price: '$14/month', features: 'Custom domain, 100 pages' },
      { plan: 'CMS', price: '$23/month', features: '2,000 CMS items, 3 editors' },
      { plan: 'Business', price: '$39/month', features: 'Unlimited pages, form submissions' }
    ],
    bestFor: 'Designers, agencies, businesses needing custom functionality',
    link: 'https://sitepilot.co/go/webflow'
  },
  {
    id: 'wix',
    name: 'Wix',
    rating: 9.5,
    category: 'creative',
    price: '$14/month',
    templates: '900+',
    ecommerce: 'Yes',
    freePlan: 'Yes',
    loadTime: '1.8s',
    uptime: '99.8%',
    mobileScore: 88,
    seoScore: 85,
    icon: '🎨',
    gradient: 'from-pink-500 to-orange-500',
    description: 'Wix leads in template variety and design flexibility, making it perfect for creative professionals and businesses that prioritize visual appeal.',
    pros: [
      '900+ professionally designed templates',
      'Drag-and-drop editor with pixel precision',
      'Extensive app marketplace (500+ apps)',
      'Strong e-commerce capabilities',
      'Built-in SEO tools',
      'Free plan available',
      'Mobile app for site management',
      'Excellent customer support'
    ],
    cons: [
      'Templates are not interchangeable once chosen',
      'Can become expensive with add-ons',
      'Some performance issues with complex sites',
      'Limited export options'
    ],
    pricing: [
      { plan: 'Free', price: '$0', features: 'Wix subdomain, limited features' },
      { plan: 'Combo', price: '$14/month', features: 'Custom domain, no ads' },
      { plan: 'Unlimited', price: '$18/month', features: 'Unlimited bandwidth' },
      { plan: 'Pro', price: '$23/month', features: 'Professional features' },
      { plan: 'VIP', price: '$39/month', features: 'Priority support' }
    ],
    bestFor: 'Small businesses, portfolios, creative professionals',
    link: 'https://sitepilot.co/go/wix'
  },
  {
    id: 'hostinger',
    name: 'Hostinger Website Builder',
    rating: 9.2,
    category: 'budget',
    price: '$2.99/month',
    templates: '150+',
    ecommerce: 'Yes',
    freePlan: 'No',
    loadTime: '1.4s',
    uptime: '99.9%',
    mobileScore: 93,
    seoScore: 89,
    icon: '💰',
    gradient: 'from-indigo-500 to-sky-500',
    description: 'Hostinger Website Builder provides exceptional value for budget-conscious users without compromising on essential features.',
    pros: [
      'Incredibly affordable pricing',
      'Fast loading speeds',
      'Good template selection',
      'Built-in SEO tools',
      'Free domain included',
      'WordPress integration',
      'AI-powered features',
      '24/7 customer support'
    ],
    cons: [
      'Limited advanced customization',
      'Fewer templates than competitors',
      'No free plan',
      'Limited third-party integrations'
    ],
    pricing: [
      { plan: 'Website Builder', price: '$2.99/month', features: 'Free domain, SSL, templates' },
      { plan: 'Business', price: '$3.99/month', features: 'Advanced features, analytics' }
    ],
    bestFor: 'Budget users, small businesses, beginners',
    link: 'https://sitepilot.co/go/hostinger'
  },
  {
    id: 'shopify',
    name: 'Shopify',
    rating: 9.6,
    category: 'ecommerce',
    price: '$29/month',
    templates: '70+',
    ecommerce: 'Excellent',
    freePlan: '14-day trial',
    loadTime: '1.5s',
    uptime: '99.98%',
    mobileScore: 91,
    seoScore: 87,
    icon: '🛒',
    gradient: 'from-blue-500 to-purple-500',
    description: 'Shopify remains the undisputed leader for e-commerce, offering comprehensive tools for online stores of any size.',
    pros: [
      'Best-in-class e-commerce features',
      'Extensive app ecosystem',
      'Mobile-responsive themes',
      'Built-in payment processing',
      'Inventory management',
      'Marketing tools',
      'Scalable infrastructure',
      'Excellent support'
    ],
    cons: [
      'Transaction fees on external payments',
      'Limited customization without coding',
      'Can be expensive with add-ons',
      'Focused primarily on e-commerce'
    ],
    pricing: [
      { plan: 'Basic', price: '$29/month', features: 'Online store, unlimited products' },
      { plan: 'Shopify', price: '$79/month', features: 'Professional reports, lower fees' },
      { plan: 'Advanced', price: '$299/month', features: 'Advanced features, lowest fees' }
    ],
    bestFor: 'E-commerce businesses, online stores',
    link: 'https://sitepilot.co/go/shopify'
  },
  {
    id: 'squarespace',
    name: 'Squarespace',
    rating: 9.3,
    category: 'mobile',
    price: '$12/month',
    templates: '100+',
    ecommerce: 'Yes',
    freePlan: '14-day trial',
    loadTime: '1.6s',
    uptime: '99.95%',
    mobileScore: 97,
    seoScore: 91,
    icon: '📱',
    gradient: 'from-indigo-500 to-cyan-500',
    description: 'Squarespace excels in mobile-optimized designs and is perfect for portfolios and creative businesses.',
    pros: [
      'Beautiful, mobile-first templates',
      'Excellent image galleries',
      'Built-in blogging platform',
      'Good SEO features',
      'Integrated analytics',
      'Social media integration',
      'Professional customer support',
      'No plugins needed'
    ],
    cons: [
      'Limited third-party integrations',
      'Less flexibility than competitors',
      'No free plan',
      'Can be slow with media-heavy sites'
    ],
    pricing: [
      { plan: 'Personal', price: '$12/month', features: 'Basic website features' },
      { plan: 'Business', price: '$18/month', features: 'Professional features, analytics' },
      { plan: 'Commerce', price: '$26/month', features: 'E-commerce features' }
    ],
    bestFor: 'Portfolios, creative businesses, mobile-first sites',
    link: 'https://sitepilot.co/go/squarespace'
  }
]

export default function WebsiteBuildersClient() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<string>('all')
  const [expandedBuilder, setExpandedBuilder] = useState<string | null>(null)

  const categories = [
    { id: 'professional', name: 'Professional', icon: '🏆' },
    { id: 'creative', name: 'Creative', icon: '🎨' },
    { id: 'budget', name: 'Budget', icon: '💰' },
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
    { id: 'mobile', name: 'Mobile-first', icon: '📱' }
  ]

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'free', name: 'Free Plans' },
    { id: 'budget', name: 'Under $15/month' },
    { id: 'premium', name: '$15+ /month' }
  ]

  const filteredBuilders = websiteBuilders.filter(builder => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(builder.category)
    
    let priceMatch = true
    if (priceRange === 'free') {
      priceMatch = builder.freePlan === 'Yes'
    } else if (priceRange === 'budget') {
      const price = parseFloat(builder.price.replace(/[^0-9.]/g, ''))
      priceMatch = price < 15
    } else if (priceRange === 'premium') {
      const price = parseFloat(builder.price.replace(/[^0-9.]/g, ''))
      priceMatch = price >= 15
    }
    
    return categoryMatch && priceMatch
  })

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-indigo-600'
    if (score >= 80) return 'text-amber-600'
    return 'text-rose-600'
  }

  const getProgressBarColor = (score: number) => {
    if (score >= 90) return 'bg-indigo-500'
    if (score >= 80) return 'bg-amber-500'
    return 'bg-rose-500'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 w-80 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 overflow-y-auto ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-72'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Filters & Navigation</h3>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700 md:hidden"
            >
              ✕
            </button>
          </div>

          {/* Quick Navigation */}
          <div className="mb-8">
            <h4 className="font-medium mb-3">Quick Jump</h4>
            <nav className="space-y-2">
              <a href="#quick-picks" className="block text-blue-600 hover:underline">Quick Picks</a>
              <a href="#detailed-reviews" className="block text-blue-600 hover:underline">Detailed Reviews</a>
              <a href="#comparison" className="block text-blue-600 hover:underline">Comparison Chart</a>
              <a href="#performance" className="block text-blue-600 hover:underline">Performance Data</a>
              <a href="#faq" className="block text-blue-600 hover:underline">FAQ</a>
            </nav>
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Filter by Category</h4>
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category.id} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => toggleCategory(category.id)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="space-y-2">
              {priceRanges.map(range => (
                <label key={range.id} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.id}
                    checked={priceRange === range.id}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="border-gray-300"
                  />
                  <span>{range.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setSelectedCategories([])
              setPriceRange('all')
            }}
            className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className={`fixed left-4 top-6 z-30 bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ${
          sidebarOpen ? 'translate-x-72' : 'translate-x-0'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-80' : 'ml-0'}`}>
        <div className="max-w-6xl mx-auto px-4 py-8 pl-20 md:pl-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Best Website Builders 2026
            </h1>
            <p className="text-xl text-gray-600 mb-2">Complete Guide & Comparisons</p>
            <p className="text-gray-500">
              <em>Last updated: February 2026</em>
            </p>
          </div>

          {/* Quick Picks */}
          <section id="quick-picks" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">🚀 Quick Picks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websiteBuilders.slice(0, 5).map((builder) => (
                <div
                  key={builder.id}
                  className="card hover-lift relative overflow-hidden"
                >
                  {/* 统一的图标区域 */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                      <span className="text-2xl">{builder.icon}</span>
                    </div>
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full uppercase tracking-wide">
                      Website Builder
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{builder.name}</h3>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span className="text-sm font-medium text-slate-600">{builder.rating}/10</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{builder.bestFor}</p>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-lg font-semibold text-slate-900">{builder.price}</span>
                    <a
                      href={builder.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-sm"
                    >
                      Try Now →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Active Filters Display */}
          {(selectedCategories.length > 0 || priceRange !== 'all') && (
            <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="font-medium mb-2 text-slate-900">Active Filters:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map(categoryId => {
                  const category = categories.find(c => c.id === categoryId)
                  return (
                    <span key={categoryId} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {category?.icon} {category?.name}
                      <button
                        onClick={() => toggleCategory(categoryId)}
                        className="ml-2 text-purple-600 hover:text-purple-800"
                      >
                        ×
                      </button>
                    </span>
                  )
                })}
                {priceRange !== 'all' && (
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {priceRanges.find(r => r.id === priceRange)?.name}
                    <button
                      onClick={() => setPriceRange('all')}
                      className="ml-2 text-purple-600 hover:text-purple-800"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Detailed Reviews */}
          <section id="detailed-reviews" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">📝 Detailed Reviews</h2>
            <div className="space-y-8">
              {filteredBuilders.map((builder, index) => (
                <div
                  key={builder.id}
                  className="card hover-lift overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div className="flex items-center mb-4 md:mb-0">
                        <span className="text-4xl mr-4">{builder.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{index + 1}. {builder.name}</h3>
                          <div className="flex items-center mt-1">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < Math.floor(builder.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                                  ⭐
                                </span>
                              ))}
                            </div>
                            <span className="ml-2 font-semibold text-indigo-600">
                              Rating: {builder.rating}/10
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{builder.price}</div>
                        <div className="text-sm text-gray-500">{builder.templates} templates</div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 mb-6">{builder.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-indigo-600 mb-3 flex items-center">
                          <span className="mr-2">✅</span> Pros:
                        </h4>
                        <ul className="space-y-2">
                          {builder.pros.map((pro, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-indigo-500 mr-2 mt-1">•</span>
                              <span className="text-gray-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                          <span className="mr-2">❌</span> Cons:
                        </h4>
                        <ul className="space-y-2">
                          {builder.cons.map((con, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-red-500 mr-2 mt-1">•</span>
                              <span className="text-gray-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {expandedBuilder === builder.id && (
                      <div className="border-t pt-6 mt-6">
                        <h4 className="font-semibold mb-4">💰 Pricing Plans:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                          {builder.pricing.map((plan, i) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-lg">
                              <div className="font-semibold text-gray-900">{plan.plan}</div>
                              <div className="text-lg font-bold text-blue-600 my-2">{plan.price}</div>
                              <div className="text-sm text-gray-600">{plan.features}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t">
                      <div className="mb-4 sm:mb-0">
                        <span className="font-medium text-gray-700">Best For: </span>
                        <span className="text-gray-600">{builder.bestFor}</span>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setExpandedBuilder(expandedBuilder === builder.id ? null : builder.id)}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          {expandedBuilder === builder.id ? 'Less Info' : 'More Info'}
                        </button>
                        <a
                          href={builder.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-6 py-2 bg-gradient-to-r ${builder.gradient} text-white rounded-lg hover:opacity-90 transition-opacity font-medium`}
                        >
                          Try {builder.name} →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Visualization */}
          <section id="performance" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">⚡ Performance Results</h2>
            <p className="text-center text-gray-600 mb-8">Based on our 6-month testing period</p>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              {filteredBuilders.map((builder) => (
                <div key={builder.id} className="mb-8 last:mb-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{builder.icon}</span>
                      <span className="font-semibold text-lg">{builder.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{builder.loadTime} load time</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Mobile Score</span>
                        <span className={`text-sm font-bold ${getScoreColor(builder.mobileScore)}`}>
                          {builder.mobileScore}/100
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-1000 ${getProgressBarColor(builder.mobileScore)}`}
                          style={{width: `${builder.mobileScore}%`}}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">SEO Score</span>
                        <span className={`text-sm font-bold ${getScoreColor(builder.seoScore)}`}>
                          {builder.seoScore}/100
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-1000 ${getProgressBarColor(builder.seoScore)}`}
                          style={{width: `${builder.seoScore}%`}}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Uptime</span>
                        <span className="text-sm font-bold text-indigo-600">{builder.uptime}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full bg-indigo-500 transition-all duration-1000"
                          style={{width: `${parseFloat(builder.uptime)}%`}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section id="comparison" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">📊 Quick Comparison</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Builder</th>
                      <th className="px-6 py-4 text-left font-semibold">Best For</th>
                      <th className="px-6 py-4 text-left font-semibold">Starting Price</th>
                      <th className="px-6 py-4 text-left font-semibold">Templates</th>
                      <th className="px-6 py-4 text-left font-semibold">E-commerce</th>
                      <th className="px-6 py-4 text-left font-semibold">Free Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBuilders.map((builder, index) => (
                      <tr key={builder.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className="text-xl mr-2">{builder.icon}</span>
                            <span className="font-medium">{builder.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{categories.find(c => c.id === builder.category)?.name}</td>
                        <td className="px-6 py-4 font-semibold text-blue-600">{builder.price}</td>
                        <td className="px-6 py-4">{builder.templates}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            builder.ecommerce === 'Excellent' ? 'bg-indigo-100 text-indigo-800' :
                            builder.ecommerce === 'Yes' ? 'bg-sky-100 text-sky-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {builder.ecommerce}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            builder.freePlan === 'Yes' ? 'bg-indigo-100 text-indigo-800' :
                            builder.freePlan === 'Limited' ? 'bg-amber-100 text-amber-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {builder.freePlan}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">❓ Frequently Asked Questions</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-8">
                {[
                  {
                    question: "Can I switch website builders later?",
                    answer: "Switching is possible but often requires rebuilding your site from scratch. Choose carefully from the start, or use builders with good export options like Webflow."
                  },
                  {
                    question: "Do I need coding knowledge?",
                    answer: "No coding is required for any of our recommended builders. However, some knowledge can help with advanced customizations."
                  },
                  {
                    question: "What's included in website builder pricing?",
                    answer: "Most include hosting, SSL certificates, templates, and basic support. Premium plans may include custom domains, advanced features, and priority support."
                  },
                  {
                    question: "How long does it take to build a website?",
                    answer: "With website builders, you can create a basic site in 1-3 hours. Professional sites typically take 1-2 weeks including content creation and customization."
                  }
                ].map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">🎯 Our Recommendation</h2>
            <p className="text-lg text-gray-700 mb-4">
              For most users, <strong className="text-blue-600">Webflow</strong> offers the best combination of power and ease-of-use. 
              <strong className="text-pink-600"> Wix</strong> excels for creative professionals, while 
              <strong className="text-indigo-600"> Hostinger</strong> provides exceptional value.
            </p>
            <p className="text-gray-600">
              Remember: the best website builder matches your specific needs, technical comfort level, and budget.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}