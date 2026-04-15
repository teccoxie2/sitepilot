'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

// Hardcoded recommendations logic for the MVP instead of AI vector DB
const recommend = (budget: string, useCase: string, scale: string) => {
  if (useCase === 'social') {
    if (scale === 'massive') return { title: 'DIY Mobile Farm', url: '/proxies/mobile-proxy-farm-setup-guide-2026', type: 'mobile' }
    return { title: 'NodeMaven Mobile', url: '/proxies/best-mobile-proxies-2026', type: 'mobile' }
  }
  
  if (useCase === 'seo') {
    if (budget === 'low') return { title: 'Rayobyte Datacenter', url: '/proxies/best-datacenter-proxies-2026', type: 'datacenter' }
    return { title: 'Oxylabs Residential', url: '/proxies/best-residential-proxies-2026', type: 'residential' }
  }
  
  if (useCase === 'ecommerce' || useCase === 'ai_training') {
    if (budget === 'high') return { title: 'Bright Data', url: '/proxies/best-residential-proxies-2026', type: 'residential' }
    return { title: 'Decodo', url: '/proxies/best-residential-proxies-2026', type: 'residential' }
  }

  // default fallback
  return { title: 'Decodo Residential', url: '/proxies/best-residential-proxies-2026', type: 'residential' }
}

export default function ProxyRecommendationTool() {
  const [budget, setBudget] = useState('medium')
  const [useCase, setUseCase] = useState('ecommerce')
  const [scale, setScale] = useState('small')
  const [result, setResult] = useState<{ title: string, url: string, type: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResult(recommend(budget, useCase, scale))
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-white border-b border-slate-200 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 mb-6">
            Interactive workflow mapping
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Find the right proxy network
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Stop guessing. Select your use case, scale, and budget to get a direct vendor recommendation based on our 2026 market evaluation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {!result ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-8">
              
              <div>
                <label className="block text-lg font-bold text-slate-900 mb-4">What is your primary use case?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'ecommerce', label: 'E-commerce & Retail Pricing' },
                    { id: 'social', label: 'Social Media Automation' },
                    { id: 'seo', label: 'SEO & SERP Scraping' },
                    { id: 'ai_training', label: 'AI Dataset Collection' }
                  ].map((opt) => (
                    <label key={opt.id} className={`cursor-pointer rounded-2xl border-2 p-4 transition-colors ${useCase === opt.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                      <input type="radio" name="useCase" value={opt.id} checked={useCase === opt.id} onChange={(e) => setUseCase(e.target.value)} className="sr-only" />
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-800">{opt.label}</span>
                        {useCase === opt.id && <CheckCircle2 className="w-5 h-5 text-blue-500" />}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-bold text-slate-900 mb-4">What is your monthly budget?</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'low', label: '< $500 / month' },
                    { id: 'medium', label: '$500 - $2,000' },
                    { id: 'high', label: 'Enterprise ($2k+)' }
                  ].map((opt) => (
                    <label key={opt.id} className={`cursor-pointer rounded-2xl border-2 p-4 text-center transition-colors ${budget === opt.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                      <input type="radio" name="budget" value={opt.id} checked={budget === opt.id} onChange={(e) => setBudget(e.target.value)} className="sr-only" />
                      <span className="font-semibold text-slate-800">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-bold text-slate-900 mb-4">What scale of traffic are you running?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'small', label: 'Light scraping / Testing' },
                    { id: 'massive', label: 'High concurrency bulk extraction' }
                  ].map((opt) => (
                    <label key={opt.id} className={`cursor-pointer rounded-2xl border-2 p-4 transition-colors ${scale === opt.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                      <input type="radio" name="scale" value={opt.id} checked={scale === opt.id} onChange={(e) => setScale(e.target.value)} className="sr-only" />
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-800">{opt.label}</span>
                        {scale === opt.id && <CheckCircle2 className="w-5 h-5 text-blue-500" />}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-colors text-lg mt-8">
                Get Recommendation
              </button>
            </form>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Based on your workflow</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">{result.title}</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                We matched your {useCase.replace('_', ' ')} requirements against pricing, rotation features, and trust levels. This is the optimal architecture for your budget.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={result.url} className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-colors text-lg">
                  Read full review <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button onClick={() => setResult(null)} className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-colors text-lg">
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
