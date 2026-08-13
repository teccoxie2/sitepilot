'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Globe2,
  Play,
  RotateCcw,
  Search,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react'
import type { CheckApiResponse, LiveReputationResult, ResultField, SignalResult } from './types'

type Props = {
  initialTarget: string
}

const sampleTargets = ['8.8.8.8', '1.1.1.1', '185.199.108.153']

function signalStyles(status: SignalResult['status']) {
  if (status === 'clear') return 'border-emerald-200 bg-emerald-50 text-emerald-700'
  if (status === 'review') return 'border-amber-200 bg-amber-50 text-amber-700'
  return 'border-rose-200 bg-rose-50 text-rose-700'
}

function fieldStyles(tone: ResultField['tone'] = 'default') {
  if (tone === 'good') return 'border-emerald-100 bg-emerald-50/70'
  if (tone === 'watch') return 'border-amber-100 bg-amber-50/70'
  if (tone === 'bad') return 'border-rose-100 bg-rose-50/70'
  return 'border-slate-200 bg-white'
}

function isUnavailable(value: string | null | undefined) {
  return !value || !value.trim() || value === 'Unavailable'
}

function cleanOrNull(value: string | null | undefined) {
  return isUnavailable(value) ? null : value
}

function derivePurity(result: LiveReputationResult) {
  if (result.addressScope !== 'public routable IP') {
    return {
      label: 'Special-use',
      tone: 'watch' as const,
      summary: `This address is in ${result.addressScope}, so it is not judged like a normal public IP.`,
    }
  }

  if (result.proxycheck.status !== 'ready' || result.ipapi.status !== 'ready') {
    return {
      label: 'Needs review',
      tone: 'watch' as const,
      summary: 'One or more external sources are unavailable, so this result cannot be classified as high purity.',
    }
  }

  if (result.compromised || result.tor) {
    return {
      label: 'Low purity',
      tone: 'bad' as const,
      summary: 'Strong signals such as compromised or TOR are present, so purity cannot be considered high.',
    }
  }

  if (result.vpn && result.hosting && result.anonymous) {
    return {
      label: 'Medium-low purity',
      tone: 'bad' as const,
      summary: 'VPN, hosting, and anonymous signals are present together, which looks more like infrastructure or privacy-routed traffic.',
    }
  }

  if (result.vpn || result.hosting || result.anonymous || result.proxy) {
    return {
      label: 'Needs review',
      tone: 'watch' as const,
      summary: 'Privacy-routing or infrastructure signals are present, so this should not be treated as a high-purity public IP by default.',
    }
  }

  if (result.riskScore <= 24) {
    return {
      label: 'High purity',
      tone: 'good' as const,
      summary: 'No obvious proxy, anonymous, or compromised signal is currently exposed, so it looks closer to a normal public IP.',
    }
  }

  if (result.riskScore <= 59) {
    return {
      label: 'Moderate purity',
      tone: 'watch' as const,
      summary: 'There is no strong risk signal, but the score and context are not clean enough to call this high purity outright.',
    }
  }

  return {
    label: 'Needs review',
    tone: 'watch' as const,
    summary: 'The external score is elevated, but without enough explanation it should not be translated directly into a hard high-risk verdict.',
  }
}

async function requestCheck(target: string): Promise<LiveReputationResult> {
  const response = await fetch(`/ip-reputation-checker/api/check?target=${encodeURIComponent(target)}`, {
    cache: 'no-store',
  })
  const payload = (await response.json()) as CheckApiResponse

  if (!response.ok || !payload.ok) {
    throw new Error(payload.ok ? 'Risk engine request failed.' : payload.error)
  }

  return payload.result
}

function boolLabel(value: boolean) {
  return value ? 'Yes' : 'No'
}

export default function IPReputationCheckerClient({ initialTarget }: Props) {
  const [target, setTarget] = useState(initialTarget)
  const [checkedTarget, setCheckedTarget] = useState(initialTarget)
  const [checkRequestId, setCheckRequestId] = useState(0)
  const [result, setResult] = useState<LiveReputationResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    requestCheck(checkedTarget)
      .then((next) => {
        if (active) setResult(next)
      })
      .catch((nextError) => {
        if (active) {
          setResult(null)
          setError(nextError instanceof Error ? nextError.message : 'Unknown error')
        }
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [checkedTarget, checkRequestId])

  const startCheck = () => {
    setError(null)
    setLoading(true)
    setCheckedTarget(target.trim() || initialTarget)
    setCheckRequestId((value) => value + 1)
  }

  const headline = useMemo(() => {
    if (!result) {
      return {
        label: 'Waiting',
        tone: 'default' as const,
        summary: 'Fetching live network data.',
      }
    }

    return derivePurity(result)
  }, [result])

  const keyFacts: ResultField[] = useMemo(() => {
    if (!result) return []

    const organization = cleanOrNull(result.ipapi.organization) || cleanOrNull(result.proxycheck.organization)
    const location = cleanOrNull(result.ipapi.location) || cleanOrNull(result.proxycheck.location)
    const timezone = cleanOrNull(result.ipapi.timezone) || cleanOrNull(result.proxycheck.timezone)

    return [
      { label: 'IP address', value: result.resolvedIp },
      { label: 'Address scope', value: result.addressScope, tone: result.addressScope === 'public routable IP' ? 'good' : 'watch' },
      ...(location ? [{ label: 'Location', value: location }] : []),
      ...(cleanOrNull(result.proxycheck.asn) ? [{ label: 'ASN', value: result.proxycheck.asn }] : []),
      ...(organization ? [{ label: 'Organization', value: organization }] : []),
      ...(result.reverseDns.length ? [{ label: 'rDNS', value: result.reverseDns.slice(0, 3).join(', ') }] : []),
      ...(cleanOrNull(result.networkRange) ? [{ label: 'Network range', value: result.networkRange }] : []),
      ...(cleanOrNull(result.networkType) ? [{ label: 'Network type', value: result.networkType }] : []),
      ...(timezone ? [{ label: 'Timezone', value: timezone }] : []),
      ...(cleanOrNull(result.firstSeen) ? [{ label: 'First seen', value: result.firstSeen! }] : []),
      ...(cleanOrNull(result.updatedAt) ? [{ label: 'Last updated', value: result.updatedAt! }] : []),
    ]
  }, [result])

  const signalFacts: ResultField[] = useMemo(() => {
    if (!result) return []

    return [
      { label: 'Proxy', value: boolLabel(result.proxy), tone: result.proxy ? 'watch' : 'good' },
      { label: 'VPN', value: boolLabel(result.vpn), tone: result.vpn ? 'watch' : 'good' },
      { label: 'TOR', value: boolLabel(result.tor), tone: result.tor ? 'bad' : 'good' },
      { label: 'Hosting', value: boolLabel(result.hosting), tone: result.hosting ? 'watch' : 'good' },
      { label: 'Anonymous', value: boolLabel(result.anonymous), tone: result.anonymous ? 'watch' : 'good' },
      { label: 'Compromised', value: boolLabel(result.compromised), tone: result.compromised ? 'bad' : 'good' },
    ]
  }, [result])

  const advancedFacts: ResultField[] = useMemo(() => {
    if (!result) return []

    const purityNote = derivePurity(result).summary

    return [
      ...(cleanOrNull(result.ipapi.coordinates) || cleanOrNull(result.proxycheck.coordinates)
        ? [{ label: 'Coordinates', value: cleanOrNull(result.ipapi.coordinates) || result.proxycheck.coordinates }]
        : []),
      ...(cleanOrNull(result.ipapi.currency) || cleanOrNull(result.proxycheck.currency)
        ? [{ label: 'Currency', value: cleanOrNull(result.ipapi.currency) || result.proxycheck.currency }]
        : []),
      ...(result.confidence !== null ? [{ label: 'Confidence', value: `${result.confidence}%` }] : []),
      ...(cleanOrNull(result.lastSeen) ? [{ label: 'Last seen', value: result.lastSeen! }] : []),
      { label: 'Scraper', value: boolLabel(result.scraper) },
      ...(result.ipapi.status === 'degraded' && cleanOrNull(result.ipapi.note)
        ? [{ label: 'Context status', value: result.ipapi.note! }]
        : []),
      { label: 'Purity note', value: purityNote },
    ]
  }, [result])

  const visibleCrossChecks = useMemo(() => {
    return (result?.crossChecks || []).filter((signal) => !isUnavailable(signal.value))
  }, [result])

  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-3 md:p-4">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row">
            <label className="sr-only" htmlFor="ip-target">
              IP address, hostname, or endpoint
            </label>
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="ip-target"
                value={target}
                onChange={(event) => setTarget(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') startCheck()
                }}
                placeholder="Enter IP address, hostname, or endpoint"
                className="h-11 w-full rounded-md border border-slate-300 bg-white pl-10 pr-3 text-sm text-slate-950 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />
            </div>
            <button
              type="button"
              onClick={startCheck}
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#635bff] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#564ee8]"
            >
              <Play className="mr-2 h-4 w-4" />
              Check
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {sampleTargets.map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => {
                  setTarget(sample)
                  setCheckedTarget(sample)
                }}
                className="h-8 rounded-md border border-slate-200 bg-slate-50 px-2.5 text-xs font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                {sample}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setTarget(initialTarget)
                setCheckedTarget(initialTarget)
              }}
              className="inline-flex h-8 items-center rounded-md border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
            >
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        {error ? <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm leading-6 text-rose-800">{error}</div> : null}

        <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
          <div className={`rounded-xl border p-4 ${fieldStyles(headline.tone)}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Purity assessment</div>
                <div className="mt-2 flex items-end gap-3">
                  <span className="text-5xl font-semibold tracking-[-0.05em] text-slate-950">{loading || !result ? '—' : result.riskScore}</span>
                  <span className="pb-1 text-sm font-medium text-slate-500">signal</span>
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-950">{loading ? 'Loading' : headline.label}</div>
                <div className="mt-2 text-sm text-slate-600">{headline.summary}</div>
              </div>

              <div className="rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
                {checkedTarget}
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                <ShieldCheck className="h-3.5 w-3.5" />
                Key identity
              </div>
              <div className="mt-3 space-y-2 text-sm">
                {cleanOrNull(result?.proxycheck.asn) ? <div className="font-semibold text-slate-950">{result?.proxycheck.asn}</div> : null}
                {cleanOrNull(result?.ipapi.organization) || cleanOrNull(result?.proxycheck.organization) ? (
                  <div className="text-slate-600">{cleanOrNull(result?.ipapi.organization) || result?.proxycheck.organization}</div>
                ) : null}
                {cleanOrNull(result?.ipapi.location) || cleanOrNull(result?.proxycheck.location) ? (
                  <div className="text-slate-600">{cleanOrNull(result?.ipapi.location) || result?.proxycheck.location}</div>
                ) : null}
                {loading && !result ? <div className="text-slate-500">Loading identity...</div> : null}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                <ShieldAlert className="h-3.5 w-3.5" />
                Key signals
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {loading || !result ? (
                  <span className="text-sm text-slate-500">Loading signals...</span>
                ) : (
                  signalFacts.map((field) => (
                    <span key={field.label} className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${fieldStyles(field.tone)}`}>
                      {field.label}: {field.value}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
            <Globe2 className="h-4 w-4 text-slate-500" />
            Core facts
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {keyFacts.map((field) => (
              <div key={field.label} className="rounded-lg border border-slate-200 bg-white p-3">
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{field.label}</div>
                <div className="break-words text-sm font-semibold leading-5 text-slate-950">{field.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-2">
          <details className="group rounded-xl border border-slate-200 bg-white open:shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-slate-950">
              Detailed signals
              <ChevronDown className="h-4 w-4 text-slate-500 transition group-open:rotate-180" />
            </summary>
            <div className="border-t border-slate-200 divide-y divide-slate-100">
              {result?.signals.map((signal) => (
                <div key={signal.label} className="grid gap-2 px-4 py-3 text-sm sm:grid-cols-[160px_1fr_110px] sm:items-center">
                  <div className="font-semibold text-slate-950">{signal.label}</div>
                  <div className="text-slate-600">{signal.value}</div>
                  <div className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${signalStyles(signal.status)}`}>
                    {signal.status === 'clear' ? <CheckCircle2 className="h-3.5 w-3.5" /> : <AlertTriangle className="h-3.5 w-3.5" />}
                    {signal.status}
                  </div>
                </div>
              ))}
            </div>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white open:shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-slate-950">
              More details
              <ChevronDown className="h-4 w-4 text-slate-500 transition group-open:rotate-180" />
            </summary>
            <div className="border-t border-slate-200 p-4 space-y-4">
              {advancedFacts.length > 0 ? (
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                    <Clock3 className="h-3.5 w-3.5" />
                    Activity and coverage
                  </div>
                  <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {advancedFacts.map((field) => (
                      <div key={field.label} className="rounded-lg border border-slate-200 bg-white p-3">
                        <div className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{field.label}</div>
                        <div className="break-words text-sm font-semibold leading-5 text-slate-950">{field.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {visibleCrossChecks.length > 0 ? (
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Cross-check
                  </div>
                  <div className="space-y-2">
                    {visibleCrossChecks.map((signal) => (
                      <div key={signal.label} className="flex flex-col gap-1 rounded-lg border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <div className="text-sm font-semibold text-slate-950">{signal.label}</div>
                          <div className="text-sm text-slate-600">{signal.value}</div>
                        </div>
                        <div className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${signalStyles(signal.status)}`}>
                          {signal.status === 'clear' ? <CheckCircle2 className="h-3.5 w-3.5" /> : <AlertTriangle className="h-3.5 w-3.5" />}
                          {signal.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </details>
        </div>

        <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-3 text-sm leading-6 text-sky-900">
          Default view only shows the verdict, key signals, and core facts. Extra detail stays collapsed unless needed.
        </div>
      </div>
    </section>
  )
}
