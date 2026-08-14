'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { Check, Clipboard, Download, FileText, Printer, Share2 } from 'lucide-react'
import { trackReportExport, trackReportShare, trackToolComplete, trackToolStart } from '@/components/GoogleAnalytics'
import toolModel from '@/data/evidence/sitepilot-tool-model-v1.json'

type SiteType = 'brochure' | 'wordpress' | 'commerce' | 'application'
type Traffic = 'under-10k' | '10k-100k' | '100k-500k' | 'over-500k'
type Migration = 'low' | 'medium' | 'high'
type SeoControl = 'standard' | 'advanced'
type Support = 'self-serve' | 'guided' | 'managed'
type PlatformId = 'managed-wordpress' | 'shared' | 'cloud'

const siteTypes: { value: SiteType; label: string }[] = [
  { value: 'brochure', label: 'Brochure or marketing site' },
  { value: 'wordpress', label: 'WordPress publishing site' },
  { value: 'commerce', label: 'E-commerce site' },
  { value: 'application', label: 'Web application or API' },
]

const trafficOptions: { value: Traffic; label: string }[] = [
  { value: 'under-10k', label: 'Under 10,000 visits/month' },
  { value: '10k-100k', label: '10,000–100,000 visits/month' },
  { value: '100k-500k', label: '100,000–500,000 visits/month' },
  { value: 'over-500k', label: 'Over 500,000 visits/month' },
]

const migrationOptions: { value: Migration; label: string }[] = [
  { value: 'low', label: 'Low — simple site and clean export' },
  { value: 'medium', label: 'Medium — several integrations or redirects' },
  { value: 'high', label: 'High — complex data, traffic, or legacy stack' },
]

const seoOptions: { value: SeoControl; label: string }[] = [
  { value: 'standard', label: 'Standard controls are enough' },
  { value: 'advanced', label: 'Advanced control over caching, redirects, and deployment' },
]

const supportOptions: { value: Support; label: string }[] = [
  { value: 'self-serve', label: 'Self-serve is fine' },
  { value: 'guided', label: 'I want guided support during changes' },
  { value: 'managed', label: 'I need managed operational support' },
]

const platformLabels: Record<PlatformId, string> = {
  'managed-wordpress': 'Managed WordPress',
  shared: 'Shared hosting',
  cloud: 'Cloud hosting',
}

const platformDescriptions: Record<PlatformId, string> = {
  'managed-wordpress': 'A managed CMS path with publishing safeguards and less server maintenance.',
  shared: 'A low-complexity, lower-cost path for stable sites with modest operational demands.',
  cloud: 'A more flexible path for traffic sensitivity, custom stacks, and higher operational control.',
}

type DimensionId = 'workload' | 'headroom' | 'migration' | 'seo' | 'support'
type Dimension = { id: DimensionId; label: string; weight: number }
const hostingModel = toolModel.tools.hosting_platform_fit_scorecard
const dimensions = hostingModel.dimensions as readonly Dimension[]
type Scores = Record<PlatformId, Record<DimensionId, number>>
type AdjustmentMap = Record<string, Record<string, Partial<Record<PlatformId, Partial<Record<DimensionId, number>>>>>>

const platformDefaults = hostingModel.platform_defaults as Scores
const adjustments = hostingModel.adjustments as AdjustmentMap

const defaultState = {
  siteType: 'wordpress' as SiteType,
  traffic: '10k-100k' as Traffic,
  migration: 'medium' as Migration,
  seoControl: 'standard' as SeoControl,
  support: 'guided' as Support,
}

function clamp(value: number) {
  return Math.min(5, Math.max(1, Math.round(value)))
}

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.style.display = 'none'
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function escapeCsv(value: string | number) {
  return `"${String(value).replaceAll('"', '""')}"`
}

export default function HostingPlatformFitScorecardClient() {
  const [state, setState] = useState(defaultState)
  const [notice, setNotice] = useState('')
  const startedRef = useRef(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search)
      const next = { ...defaultState }
      const siteType = params.get('siteType')
      const traffic = params.get('traffic')
      const migration = params.get('migration')
      const seoControl = params.get('seoControl')
      const support = params.get('support')
      if (siteType && siteType in { brochure: true, wordpress: true, commerce: true, application: true }) next.siteType = siteType as SiteType
      if (traffic && traffic in { 'under-10k': true, '10k-100k': true, '100k-500k': true, 'over-500k': true }) next.traffic = traffic as Traffic
      if (migration && migration in { low: true, medium: true, high: true }) next.migration = migration as Migration
      if (seoControl && seoControl in { standard: true, advanced: true }) next.seoControl = seoControl as SeoControl
      if (support && support in { 'self-serve': true, guided: true, managed: true }) next.support = support as Support
      setState(next)
    }, 0)
    return () => window.clearTimeout(timer)
  }, [])

  const scores = useMemo<Scores>(() => {
    const result = Object.fromEntries(
      Object.entries(platformDefaults).map(([platform, values]) => [platform, { ...values }]),
    ) as Scores

    function applyAdjustments(group: string, key: string) {
      const updates = adjustments[group]?.[key] ?? {}
      for (const [platform, dimensionsForPlatform] of Object.entries(updates) as [PlatformId, Partial<Record<DimensionId, number>>][]) {
        for (const [dimension, adjustment] of Object.entries(dimensionsForPlatform) as [DimensionId, number][]) {
          result[platform][dimension] += adjustment
        }
      }
    }

    applyAdjustments('site_type', state.siteType)
    applyAdjustments('traffic', state.traffic)
    applyAdjustments('migration', state.migration)
    applyAdjustments('seo_control', state.seoControl)
    applyAdjustments('support', state.support)

    for (const platform of Object.keys(result) as PlatformId[]) {
      for (const dimension of dimensions) result[platform][dimension.id] = clamp(result[platform][dimension.id])
    }
    return result
  }, [state])

  const totals = useMemo(() => {
    return (Object.keys(platformLabels) as PlatformId[]).reduce<Record<PlatformId, number>>((result, platform) => {
      result[platform] = dimensions.reduce((total, dimension) => total + (scores[platform][dimension.id] / 5) * dimension.weight, 0)
      return result
    }, { 'managed-wordpress': 0, shared: 0, cloud: 0 })
  }, [scores])

  const rankedPlatforms = useMemo(() => (Object.keys(platformLabels) as PlatformId[]).sort((a, b) => totals[b] - totals[a]), [totals])
  const leadingPlatform = rankedPlatforms[0]

  function startTracking() {
    if (startedRef.current) return
    startedRef.current = true
    trackToolStart('hosting_platform_fit_scorecard')
  }

  function updateField<K extends keyof typeof defaultState>(field: K, value: (typeof defaultState)[K]) {
    startTracking()
    setState((current) => ({ ...current, [field]: value }))
    setNotice('')
  }

  function buildShareUrl() {
    const params = new URLSearchParams(state)
    return `${window.location.origin}${window.location.pathname}?${params.toString()}`
  }

  async function handleShare() {
    startTracking()
    const url = buildShareUrl()
    const copied = navigator.clipboard
      ? await navigator.clipboard.writeText(url).then(() => true).catch(() => false)
      : false
    window.history.replaceState(null, '', url)
    setNotice(copied
      ? 'Share link copied. Anyone with the link can review this scenario.'
      : 'Share URL prepared in the address bar. Copy it manually to share this scenario.')
    trackReportShare('hosting_platform_fit_scorecard', copied ? 'clipboard' : 'address_bar')
  }

  function handleExportMemo() {
    startTracking()
    const memo = [
      '# Hosting Platform Fit Memo',
      '',
      `Site type: ${siteTypes.find((item) => item.value === state.siteType)?.label}`,
      `Traffic: ${trafficOptions.find((item) => item.value === state.traffic)?.label}`,
      `Migration complexity: ${state.migration}`,
      `SEO/deployment control: ${state.seoControl}`,
      `Support preference: ${state.support}`,
      '',
      `Recommendation: ${platformLabels[leadingPlatform]} (${totals[leadingPlatform].toFixed(1)} / 100)`,
      '',
      '## Platform scores',
      ...rankedPlatforms.map((platform) => `- ${platformLabels[platform]}: ${totals[platform].toFixed(1)} / 100 — ${platformDescriptions[platform]}`),
      '',
      'Validate this illustrative fit scenario against measured traffic, uptime, migration inventory, support terms, and a dated quote before moving production.',
    ].join('\n')
    downloadFile('sitepilot-hosting-platform-fit-memo.md', memo, 'text/markdown;charset=utf-8')
    setNotice('Hosting fit memo exported.')
    trackReportExport('hosting_platform_fit_scorecard', 'markdown_memo')
  }

  function handleExportCsv() {
    startTracking()
    const rows = [
      ['Platform', ...dimensions.map((dimension) => `${dimension.label} (${dimension.weight}%)`), 'Weighted total'],
      ...rankedPlatforms.map((platform) => [platformLabels[platform], ...dimensions.map((dimension) => scores[platform][dimension.id]), totals[platform].toFixed(1)]),
    ]
    downloadFile('sitepilot-hosting-platform-fit-scorecard.csv', rows.map((row) => row.map(escapeCsv).join(',')).join('\n'), 'text/csv;charset=utf-8')
    setNotice('Hosting fit scorecard exported.')
    trackReportExport('hosting_platform_fit_scorecard', 'csv')
  }

  function handleComplete() {
    startTracking()
    trackToolComplete('hosting_platform_fit_scorecard')
    setNotice('Scorecard marked complete. Share or export the result for the migration conversation.')
  }

  return (
    <div className="space-y-6" aria-labelledby="hosting-scorecard-title">
      <div className="page-card-glow p-1.5">
        <div className="page-card rounded-[1.6rem] p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="page-pill mb-4">Run the scorecard</div>
              <h2 id="hosting-scorecard-title" className="page-title text-3xl md:text-5xl">Make hosting fit explainable.</h2>
              <p className="page-lead mt-4 max-w-3xl text-base md:text-lg">Choose the workload constraints first. The weighted result is an illustrative shortlist signal, not a provider endorsement.</p>
              <p className="mt-3 text-xs leading-5 text-slate-500">Evidence standard v1.0 · decision model v{toolModel.version}.0 · checked {toolModel.checked_at} · validate with measured traffic, migration inventory, and current vendor terms.</p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/80 px-4 py-3 text-sm text-indigo-900">Weights: {dimensions.map((dimension) => dimension.weight).join(' / ')}</div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <label htmlFor="hosting-site-type" className="text-sm font-semibold text-slate-700">Site type
              <select id="hosting-site-type" value={state.siteType} onChange={(event) => updateField('siteType', event.target.value as SiteType)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-950 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100">
                {siteTypes.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
            </label>
            <label htmlFor="hosting-traffic" className="text-sm font-semibold text-slate-700">Monthly traffic
              <select id="hosting-traffic" value={state.traffic} onChange={(event) => updateField('traffic', event.target.value as Traffic)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-950 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100">
                {trafficOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
            </label>
            <label htmlFor="hosting-migration" className="text-sm font-semibold text-slate-700">Migration complexity
              <select id="hosting-migration" value={state.migration} onChange={(event) => updateField('migration', event.target.value as Migration)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-950 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100">
                {migrationOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
            </label>
            <label htmlFor="hosting-seo-control" className="text-sm font-semibold text-slate-700">SEO and deployment control
              <select id="hosting-seo-control" value={state.seoControl} onChange={(event) => updateField('seoControl', event.target.value as SeoControl)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-950 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100">
                {seoOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
            </label>
            <label htmlFor="hosting-support" className="text-sm font-semibold text-slate-700 md:col-span-2">Support preference
              <select id="hosting-support" value={state.support} onChange={(event) => updateField('support', event.target.value as Support)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-950 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100">
                {supportOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
            </label>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {rankedPlatforms.map((platform, index) => (
              <div key={platform} className={`rounded-2xl border p-5 ${index === 0 ? 'border-indigo-300 bg-indigo-50/70' : 'border-slate-200 bg-slate-50/70'}`}>
                <div className="flex items-start justify-between gap-3"><div><div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{index === 0 ? 'Current leader' : `Option ${index + 1}`}</div><h3 className="mt-2 text-xl font-semibold text-slate-950">{platformLabels[platform]}</h3></div><div className="text-2xl font-semibold text-indigo-700">{totals[platform].toFixed(0)}</div></div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{platformDescriptions[platform]}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-left text-sm"><thead className="bg-slate-50 text-slate-600"><tr><th className="px-4 py-3 font-semibold">Dimension</th>{rankedPlatforms.map((platform) => <th key={platform} className="px-4 py-3 font-semibold">{platformLabels[platform]}</th>)}</tr></thead><tbody>{dimensions.map((dimension) => <tr key={dimension.id} className="border-t border-slate-100"><th className="px-4 py-3 font-medium text-slate-700">{dimension.label} <span className="text-xs text-slate-400">({dimension.weight}%)</span></th>{rankedPlatforms.map((platform) => <td key={platform} className="px-4 py-3 text-slate-950">{scores[platform][dimension.id]}/5</td>)}</tr>)}</tbody></table>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={handleComplete} className="btn-brand inline-flex items-center gap-2"><Check className="h-4 w-4" /> Mark complete</button>
            <button type="button" onClick={handleShare} className="btn-secondary inline-flex items-center gap-2"><Share2 className="h-4 w-4" /> Copy share link</button>
            <button type="button" onClick={handleExportCsv} className="btn-secondary inline-flex items-center gap-2"><Download className="h-4 w-4" /> Export CSV</button>
            <button type="button" onClick={handleExportMemo} className="btn-secondary inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Export memo</button>
            <button type="button" onClick={() => { startTracking(); trackReportExport('hosting_platform_fit_scorecard', 'print_pdf'); window.print() }} className="btn-secondary inline-flex items-center gap-2"><Printer className="h-4 w-4" /> Print / save PDF</button>
          </div>
          {notice ? <p role="status" className="mt-4 flex items-center gap-2 text-sm text-emerald-700"><Clipboard className="h-4 w-4" />{notice}</p> : null}
        </div>
      </div>

      <div className="page-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div><div className="text-sm text-slate-500">Current recommendation</div><div className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{platformLabels[leadingPlatform]} · {totals[leadingPlatform].toFixed(1)} / 100</div><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Confirm the result against a migration plan, real support terms, and a dated quote before moving production.</p></div>
        <Link href="/apply-for-audit?source=hosting_platform_fit_scorecard" className="btn-brand inline-flex shrink-0 items-center gap-2">Request a tailored audit <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  )
}
