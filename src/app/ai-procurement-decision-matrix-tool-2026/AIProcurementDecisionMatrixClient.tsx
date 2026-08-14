'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, Clipboard, Download, FileText, Printer, Share2 } from 'lucide-react'
import Link from 'next/link'
import {
  trackReportExport,
  trackReportShare,
  trackToolComplete,
  trackToolStart,
} from '@/components/GoogleAnalytics'

const dimensions = [
  {
    id: 'fit',
    label: 'Strategic fit',
    weight: 25,
    description: 'Business outcome and workflow value',
  },
  {
    id: 'security',
    label: 'Security and governance',
    weight: 25,
    description: 'Control maturity, privacy, and auditability',
  },
  {
    id: 'architecture',
    label: 'Architecture and integration',
    weight: 20,
    description: 'Stack fit, data flow, and dependencies',
  },
  {
    id: 'commercial',
    label: 'Commercial and contract risk',
    weight: 15,
    description: 'Pricing, renewal, liability, and exit terms',
  },
  {
    id: 'rollout',
    label: 'Rollout readiness',
    weight: 15,
    description: 'Implementation, adoption, and operating overhead',
  },
] as const

type DimensionId = (typeof dimensions)[number]['id']
type Scores = Record<DimensionId, { a: number; b: number }>

const defaultScores: Scores = {
  fit: { a: 0, b: 0 },
  security: { a: 0, b: 0 },
  architecture: { a: 0, b: 0 },
  commercial: { a: 0, b: 0 },
  rollout: { a: 0, b: 0 },
}

function clampScore(value: string) {
  const score = Number(value)
  if (!Number.isFinite(score)) return 0
  return Math.min(5, Math.max(0, Math.round(score)))
}

function escapeCsv(value: string | number) {
  return `"${String(value).replaceAll('"', '""')}"`
}

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

function buildShareUrl(vendorA: string, vendorB: string, scores: Scores, blockers: { a: boolean; b: boolean }) {
  const params = new URLSearchParams({
    a: vendorA,
    b: vendorB,
    scores: JSON.stringify(scores),
    blockers: JSON.stringify(blockers),
  })
  return `${window.location.origin}${window.location.pathname}?${params.toString()}`
}

export default function AIProcurementDecisionMatrixClient() {
  const [vendorA, setVendorA] = useState('Vendor A')
  const [vendorB, setVendorB] = useState('Vendor B')
  const [scores, setScores] = useState<Scores>(defaultScores)
  const [blockers, setBlockers] = useState({ a: false, b: false })
  const [notice, setNotice] = useState('')
  const startedRef = useRef(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search)
      const sharedScores = params.get('scores')
      const sharedBlockers = params.get('blockers')

      if (params.get('a')) setVendorA(params.get('a') ?? 'Vendor A')
      if (params.get('b')) setVendorB(params.get('b') ?? 'Vendor B')

      if (sharedScores) {
        try {
          const parsedScores = JSON.parse(sharedScores) as Scores
          setScores({ ...defaultScores, ...parsedScores })
        } catch {
          setNotice('The shared link could not load its score data. Start a fresh matrix below.')
        }
      }

      if (sharedBlockers) {
        try {
          setBlockers(JSON.parse(sharedBlockers) as { a: boolean; b: boolean })
        } catch {
          setBlockers({ a: false, b: false })
        }
      }
    }, 0)

    return () => window.clearTimeout(timer)
  }, [])

  const totals = useMemo(() => {
    return dimensions.reduce(
      (result, dimension) => {
        result.a += (scores[dimension.id].a / 5) * dimension.weight
        result.b += (scores[dimension.id].b / 5) * dimension.weight
        return result
      },
      { a: 0, b: 0 },
    )
  }, [scores])

  const hasInput = dimensions.some((dimension) => scores[dimension.id].a > 0 || scores[dimension.id].b > 0)
  const leadingVendor = totals.a === totals.b ? 'Tie — investigate the unresolved evidence' : totals.a > totals.b ? vendorA : vendorB
  const leadingSide = totals.a === totals.b ? null : totals.a > totals.b ? 'a' : 'b'
  const recommendation = !hasInput
    ? 'Enter evidence scores to generate a recommendation.'
    : blockers.a && blockers.b
      ? 'Hold both vendors: each has an unresolved blocker.'
      : blockers.a
        ? `Hold ${vendorA}; ${vendorB} leads only after the blocker is resolved.`
        : blockers.b
          ? `Hold ${vendorB}; ${vendorA} leads only after the blocker is resolved.`
          : `${leadingVendor} is the current weighted leader. Validate the remaining evidence before approval.`

  function startTracking() {
    if (startedRef.current) return
    startedRef.current = true
    trackToolStart('ai_procurement_decision_matrix')
  }

  function updateScore(id: DimensionId, vendor: 'a' | 'b', value: string) {
    startTracking()
    setScores((current) => ({
      ...current,
      [id]: { ...current[id], [vendor]: clampScore(value) },
    }))
    setNotice('')
  }

  function updateVendor(setter: (value: string) => void, value: string) {
    startTracking()
    setter(value)
    setNotice('')
  }

  function handleShare() {
    startTracking()
    const url = buildShareUrl(vendorA, vendorB, scores, blockers)
    if (navigator.clipboard) {
      void navigator.clipboard.writeText(url).catch(() => undefined)
    }
    window.history.replaceState(null, '', url)
    setNotice('Share link copied. Anyone with the link can review this matrix.')
    trackReportShare('ai_procurement_decision_matrix', 'clipboard')
  }

  function handleExportCsv() {
    startTracking()
    const rows = [
      ['Dimension', 'Weight', vendorA, vendorB],
      ...dimensions.map((dimension) => [dimension.label, `${dimension.weight}%`, scores[dimension.id].a, scores[dimension.id].b]),
      ['Weighted total', '100%', `${totals.a.toFixed(1)}%`, `${totals.b.toFixed(1)}%`],
      ['Recommendation', '', recommendation, ''],
    ]
    downloadFile(
      'sitepilot-ai-procurement-matrix.csv',
      rows.map((row) => row.map(escapeCsv).join(',')).join('\n'),
      'text/csv;charset=utf-8',
    )
    setNotice('CSV decision matrix exported.')
    trackReportExport('ai_procurement_decision_matrix', 'csv')
  }

  function handleExportMemo() {
    startTracking()
    const memo = [
      '# AI Procurement Decision Memo',
      '',
      `Compared vendors: ${vendorA} vs ${vendorB}`,
      `Weighted score: ${vendorA} ${totals.a.toFixed(1)}% | ${vendorB} ${totals.b.toFixed(1)}%`,
      `Unresolved blockers: ${vendorA} ${blockers.a ? 'yes' : 'no'} | ${vendorB} ${blockers.b ? 'yes' : 'no'}`,
      '',
      `Recommendation: ${recommendation}`,
      '',
      '## Evidence scores',
      ...dimensions.map(
        (dimension) => `- ${dimension.label} (${dimension.weight}%): ${vendorA} ${scores[dimension.id].a}/5; ${vendorB} ${scores[dimension.id].b}/5`,
      ),
      '',
      'This report is a planning aid. Validate scores against dated vendor evidence, pilot results, legal review, and your own operating costs before approval.',
    ].join('\n')
    downloadFile('sitepilot-ai-procurement-decision-memo.md', memo, 'text/markdown;charset=utf-8')
    setNotice('Decision memo exported.')
    trackReportExport('ai_procurement_decision_matrix', 'markdown_memo')
  }

  function handleComplete() {
    startTracking()
    trackToolComplete('ai_procurement_decision_matrix')
    setNotice('Matrix marked complete. Export or share the result with the buying team.')
  }

  return (
    <section className="page-card-glow p-1.5" aria-labelledby="matrix-builder-title">
      <div className="page-card rounded-[1.6rem] p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="page-pill mb-4">Run the matrix</div>
            <h2 id="matrix-builder-title" className="page-title text-3xl md:text-5xl">Turn evidence into a shareable decision.</h2>
            <p className="page-lead mt-4 max-w-3xl text-base md:text-lg">
              Score each finalist from 0–5. The weighted result is a planning aid, not a vendor endorsement. Missing evidence should stay visible as unresolved risk.
            </p>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              Evidence standard v1.0 · checked 2026-08-14 · editorial scores must be replaced with dated vendor evidence, pilot results, and legal review.
            </p>
          </div>
          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/80 px-4 py-3 text-sm text-indigo-900">
            Weights: 25 / 25 / 20 / 15 / 15
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">
            Finalist A
            <input
              value={vendorA}
              onChange={(event) => updateVendor(setVendorA, event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-950 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              maxLength={80}
            />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Finalist B
            <input
              value={vendorB}
              onChange={(event) => updateVendor(setVendorB, event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-950 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              maxLength={80}
            />
          </label>
        </div>

        <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.15em] text-slate-500">
              <tr>
                <th className="px-5 py-4">Dimension</th>
                <th className="px-5 py-4">Weight</th>
                <th className="px-5 py-4">{vendorA} <span className="font-normal normal-case tracking-normal">(0–5)</span></th>
                <th className="px-5 py-4">{vendorB} <span className="font-normal normal-case tracking-normal">(0–5)</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {dimensions.map((dimension) => (
                <tr key={dimension.id}>
                  <th className="px-5 py-4 align-top">
                    <div className="font-semibold text-slate-950">{dimension.label}</div>
                    <div className="mt-1 text-sm font-normal leading-5 text-slate-500">{dimension.description}</div>
                  </th>
                  <td className="px-5 py-4 align-top text-sm font-semibold text-slate-600">{dimension.weight}%</td>
                  <td className="px-5 py-4 align-top">
                    <input
                      aria-label={`${vendorA} ${dimension.label} score`}
                      type="number"
                      min="0"
                      max="5"
                      step="1"
                      value={scores[dimension.id].a}
                      onChange={(event) => updateScore(dimension.id, 'a', event.target.value)}
                      className="w-24 rounded-xl border border-slate-200 px-3 py-2 text-center font-semibold text-slate-950 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </td>
                  <td className="px-5 py-4 align-top">
                    <input
                      aria-label={`${vendorB} ${dimension.label} score`}
                      type="number"
                      min="0"
                      max="5"
                      step="1"
                      value={scores[dimension.id].b}
                      onChange={(event) => updateScore(dimension.id, 'b', event.target.value)}
                      className="w-24 rounded-xl border border-slate-200 px-3 py-2 text-center font-semibold text-slate-950 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 grid gap-3 rounded-3xl border border-amber-200 bg-amber-50/80 p-5 text-sm text-amber-950 md:grid-cols-2">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={blockers.a}
              onChange={(event) => {
                startTracking()
                setBlockers((current) => ({ ...current, a: event.target.checked }))
              }}
              className="mt-1 h-4 w-4 accent-indigo-600"
            />
            <span><strong>{vendorA}</strong> has an unresolved blocker.</span>
          </label>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={blockers.b}
              onChange={(event) => {
                startTracking()
                setBlockers((current) => ({ ...current, b: event.target.checked }))
              }}
              className="mt-1 h-4 w-4 accent-indigo-600"
            />
            <span><strong>{vendorB}</strong> has an unresolved blocker.</span>
          </label>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className={`rounded-3xl border p-5 ${leadingSide === 'a' ? 'border-indigo-200 bg-indigo-50/70' : 'border-slate-200 bg-slate-50/70'}`}>
            <div className="text-sm text-slate-500">{vendorA}</div>
            <div className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-slate-950">{totals.a.toFixed(1)}%</div>
            {leadingSide === 'a' && <div className="mt-2 text-sm font-semibold text-indigo-700">Current weighted leader</div>}
          </div>
          <div className={`rounded-3xl border p-5 ${leadingSide === 'b' ? 'border-indigo-200 bg-indigo-50/70' : 'border-slate-200 bg-slate-50/70'}`}>
            <div className="text-sm text-slate-500">{vendorB}</div>
            <div className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-slate-950">{totals.b.toFixed(1)}%</div>
            {leadingSide === 'b' && <div className="mt-2 text-sm font-semibold text-indigo-700">Current weighted leader</div>}
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <div className="text-sm text-slate-500">Recommendation</div>
            <div className="mt-2 text-lg font-semibold leading-7 text-slate-950">{recommendation}</div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={handleComplete} className="btn-secondary gap-2">
            <Check className="h-4 w-4" /> Mark complete
          </button>
          <button type="button" onClick={handleShare} className="btn-secondary gap-2">
            <Share2 className="h-4 w-4" /> Copy share link
          </button>
          <button type="button" onClick={handleExportCsv} className="btn-secondary gap-2">
            <Download className="h-4 w-4" /> Export CSV
          </button>
          <button type="button" onClick={handleExportMemo} className="btn-secondary gap-2">
            <FileText className="h-4 w-4" /> Export memo
          </button>
          <button type="button" onClick={() => { startTracking(); window.print(); trackReportExport('ai_procurement_decision_matrix', 'print_pdf') }} className="btn-secondary gap-2">
            <Printer className="h-4 w-4" /> Print / save PDF
          </button>
          <button
            type="button"
            onClick={() => {
              void navigator.clipboard?.writeText(recommendation).catch(() => undefined)
              setNotice('Recommendation copied.')
              trackReportExport('ai_procurement_decision_matrix', 'clipboard')
            }}
            className="btn-secondary gap-2"
          >
            <Clipboard className="h-4 w-4" /> Copy recommendation
          </button>
          <Link href="/apply-for-audit" className="btn-brand gap-2">
            Request a tailored audit
          </Link>
        </div>

        {(notice || !hasInput) && (
          <p className="mt-4 text-sm leading-6 text-slate-500" role="status">
            {notice || 'Scores start at zero so the first result reflects the evidence your team enters.'}
          </p>
        )}
      </div>
    </section>
  )
}
