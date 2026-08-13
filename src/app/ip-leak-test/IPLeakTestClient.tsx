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
  Wifi,
} from 'lucide-react'
import type { CheckApiResponse, LiveReputationResult, ResultField, SignalResult } from '../ip-reputation-checker/types'

type Props = {
  initialTarget: string
}

type WebRtcProbe = {
  supported: boolean
  candidates: string[]
  privateCandidates: string[]
  publicCandidates: string[]
  mdnsCandidates: string[]
  status: 'idle' | 'running' | 'done' | 'unsupported' | 'timeout'
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

function boolLabel(value: boolean) {
  return value ? 'Yes' : 'No'
}

function isPrivateIpv4(ip: string) {
  const parts = ip.split('.').map((part) => Number(part))
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) return false
  if (parts[0] === 10) return true
  if (parts[0] === 127) return true
  if (parts[0] === 169 && parts[1] === 254) return true
  if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true
  if (parts[0] === 192 && parts[1] === 168) return true
  if (parts[0] === 100 && parts[1] >= 64 && parts[1] <= 127) return true
  return false
}

function classifyCandidate(line: string) {
  const lower = line.toLowerCase()
  const typeMatch = lower.match(/ typ ([a-z]+)/)
  const ipMatches = line.match(/\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g) || []
  const publicIps = ipMatches.filter((ip) => !isPrivateIpv4(ip))
  const privateIps = ipMatches.filter(isPrivateIpv4)
  const mdns = line.includes('.local') || line.includes('mdns')
  return {
    type: typeMatch?.[1] || 'unknown',
    privateIps,
    publicIps,
    mdns,
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

async function probeWebRtc(timeoutMs = 1800): Promise<WebRtcProbe> {
  if (typeof RTCPeerConnection === 'undefined') {
    return {
      supported: false,
      candidates: [],
      privateCandidates: [],
      publicCandidates: [],
      mdnsCandidates: [],
      status: 'unsupported',
    }
  }

  const pc = new RTCPeerConnection({ iceServers: [] })
  const candidates: string[] = []
  let finished = false

  const result = await new Promise<WebRtcProbe>((resolve) => {
    const finish = (status: WebRtcProbe['status']) => {
      if (finished) return
      finished = true
      pc.close()
      const privateCandidates = candidates.filter((line) => classifyCandidate(line).privateIps.length > 0)
      const publicCandidates = candidates.filter((line) => classifyCandidate(line).publicIps.length > 0)
      const mdnsCandidates = candidates.filter((line) => classifyCandidate(line).mdns)
      resolve({
        supported: true,
        candidates,
        privateCandidates,
        publicCandidates,
        mdnsCandidates,
        status,
      })
    }

    pc.onicecandidate = (event) => {
      if (event.candidate?.candidate) {
        candidates.push(event.candidate.candidate)
        return
      }
      finish('done')
    }

    pc.createDataChannel('probe')
    pc
      .createOffer()
      .then((offer) => pc.setLocalDescription(offer))
      .catch(() => finish('timeout'))

    window.setTimeout(() => finish('timeout'), timeoutMs)
  })

  return result
}

function deriveLeakVerdict(result: WebRtcProbe) {
  if (!result.supported) {
    return {
      label: 'Unsupported',
      tone: 'watch' as const,
      summary: 'This browser did not expose WebRTC probing.',
    }
  }

  if (result.privateCandidates.length) {
    return {
      label: 'Local candidate exposed',
      tone: 'bad' as const,
      summary: 'The browser exposed private/local ICE candidates, which is the leak signal you actually care about here.',
    }
  }

  if (result.publicCandidates.length) {
    return {
      label: 'Public candidate exposed',
      tone: 'watch' as const,
      summary: 'The browser exposed a public reflexive candidate, so the session is not fully hidden from peer discovery.',
    }
  }

  if (result.mdnsCandidates.length) {
    return {
      label: 'mDNS masked',
      tone: 'good' as const,
      summary: 'Only mDNS-style host candidates were observed, which is better than raw private IP leakage.',
    }
  }

  return {
    label: 'No obvious leak',
    tone: 'good' as const,
    summary: 'No obvious private or reflexive candidates were collected during this pass.',
  }
}

export default function IPLeakTestClient({ initialTarget }: Props) {
  const [target, setTarget] = useState(initialTarget)
  const [checkedTarget, setCheckedTarget] = useState(initialTarget)
  const [result, setResult] = useState<LiveReputationResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [probe, setProbe] = useState<WebRtcProbe>({
    supported: true,
    candidates: [],
    privateCandidates: [],
    publicCandidates: [],
    mdnsCandidates: [],
    status: 'idle',
  })

  useEffect(() => {
    let active = true
    const timerId = window.setTimeout(() => {
      if (!active) return

      setLoading(true)
      setError(null)
      requestCheck(checkedTarget)
        .then((next) => {
          if (active) setResult(next)
        })
        .catch((nextError) => {
          if (active) setError(nextError instanceof Error ? nextError.message : 'Unknown error')
        })
        .finally(() => {
          if (active) setLoading(false)
        })
    }, 0)

    return () => {
      active = false
      window.clearTimeout(timerId)
    }
  }, [checkedTarget])

  useEffect(() => {
    let active = true
    const timerId = window.setTimeout(() => {
      if (!active) return

      setProbe((current) => ({ ...current, status: 'running' }))
      probeWebRtc()
        .then((next) => {
          if (active) setProbe(next)
        })
        .catch(() => {
          if (active) {
            setProbe({
              supported: false,
              candidates: [],
              privateCandidates: [],
              publicCandidates: [],
              mdnsCandidates: [],
              status: 'unsupported',
            })
          }
        })
    }, 0)

    return () => {
      active = false
      window.clearTimeout(timerId)
    }
  }, [])

  const headline = useMemo(() => {
    if (!result) {
      return {
        label: 'Waiting',
        tone: 'default' as const,
        summary: 'Fetching live network data.',
      }
    }

    if (result.addressScope !== 'public routable IP') {
      return {
        label: 'Special-use',
        tone: 'watch' as const,
        summary: `This target is ${result.addressScope}, so it should not be treated as a normal public endpoint.`,
      }
    }

    return {
      label: 'Public target',
      tone: 'default' as const,
      summary: 'Live reputation and browser exposure are being checked separately.',
    }
  }, [result])

  const leakVerdict = useMemo(() => deriveLeakVerdict(probe), [probe])

  const keyFacts: ResultField[] = useMemo(() => {
    if (!result) return []

    const organization = cleanOrNull(result.ipapi.organization) || cleanOrNull(result.proxycheck.organization)
    const location = cleanOrNull(result.ipapi.location) || cleanOrNull(result.proxycheck.location)
    const timezone = cleanOrNull(result.ipapi.timezone) || cleanOrNull(result.proxycheck.timezone)

    return [
      { label: 'IP address', value: result.resolvedIp },
      ...(cleanOrNull(result.reverseDns.join(', ')) ? [{ label: 'rDNS', value: result.reverseDns.join(', ') }] : []),
      { label: 'Address scope', value: result.addressScope, tone: result.addressScope === 'public routable IP' ? 'good' : 'watch' },
      ...(location ? [{ label: 'Location', value: location }] : []),
      ...(cleanOrNull(result.proxycheck.asn) ? [{ label: 'ASN', value: result.proxycheck.asn }] : []),
      ...(organization ? [{ label: 'Organization', value: organization }] : []),
      ...(cleanOrNull(result.networkRange) ? [{ label: 'Network range', value: result.networkRange }] : []),
      ...(cleanOrNull(result.networkType) ? [{ label: 'Network type', value: result.networkType }] : []),
      ...(timezone ? [{ label: 'Timezone', value: timezone }] : []),
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

  const browserFacts: ResultField[] = useMemo(() => {
    return [
      { label: 'WebRTC support', value: probe.supported ? 'Yes' : 'No', tone: probe.supported ? 'good' : 'watch' },
      { label: 'Probe status', value: probe.status },
      { label: 'Candidate count', value: String(probe.candidates.length) },
      { label: 'Private candidates', value: String(probe.privateCandidates.length), tone: probe.privateCandidates.length ? 'bad' : 'good' },
      { label: 'Public candidates', value: String(probe.publicCandidates.length), tone: probe.publicCandidates.length ? 'watch' : 'good' },
      { label: 'mDNS candidates', value: String(probe.mdnsCandidates.length), tone: probe.mdnsCandidates.length ? 'good' : 'default' },
    ]
  }, [probe])

  const browserCandidateList = useMemo(() => probe.candidates.slice(0, 8), [probe])
  const visibleCrossChecks = useMemo(() => (result?.crossChecks || []).filter((signal) => !isUnavailable(signal.value)), [result])

  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-3 md:p-4">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row">
            <label className="sr-only" htmlFor="ip-leak-target">
              IP address, hostname, or endpoint
            </label>
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="ip-leak-target"
                value={target}
                onChange={(event) => setTarget(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') setCheckedTarget(target.trim() || initialTarget)
                }}
                placeholder="Enter IP address, hostname, or endpoint"
                className="h-11 w-full rounded-md border border-slate-300 bg-white pl-10 pr-3 text-sm text-slate-950 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />
            </div>
            <button
              type="button"
              onClick={() => setCheckedTarget(target.trim() || initialTarget)}
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
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Leak verdict</div>
                <div className="mt-2 flex items-end gap-3">
                  <span className="text-5xl font-semibold tracking-[-0.05em] text-slate-950">{loading || !result ? '—' : result.riskScore}</span>
                  <span className="pb-1 text-sm font-medium text-slate-500">signal</span>
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-950">{loading ? 'Loading' : leakVerdict.label}</div>
                <div className="mt-2 text-sm text-slate-600">{loading ? 'Fetching live data and probing the browser.' : leakVerdict.summary}</div>
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
                Server-visible target
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
                <Wifi className="h-3.5 w-3.5" />
                Browser exposure
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {browserFacts.map((field) => (
                  <span key={field.label} className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${fieldStyles(field.tone)}`}>
                    {field.label}: {field.value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
              <Globe2 className="h-4 w-4 text-slate-500" />
              Live reputation + rDNS
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {keyFacts.map((field) => (
                <div key={field.label} className="rounded-lg border border-slate-200 bg-white p-3">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{field.label}</div>
                  <div className="break-words text-sm font-semibold leading-5 text-slate-950">{field.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
              <ShieldAlert className="h-4 w-4 text-slate-500" />
              Browser candidate preview
            </div>
            {browserCandidateList.length ? (
              <div className="space-y-2">
                {browserCandidateList.map((candidate) => {
                  const classified = classifyCandidate(candidate)
                  return (
                    <div key={candidate} className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <span className="font-semibold text-slate-950">{classified.type}</span>
                        <span className="text-xs text-slate-500">{classified.mdns ? 'mDNS' : classified.privateIps.length ? 'private' : classified.publicIps.length ? 'public' : 'unknown'}</span>
                      </div>
                      <div className="break-all font-mono text-xs leading-5 text-slate-600">{candidate}</div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-sm text-slate-500">No candidate lines collected yet.</div>
            )}
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
              {signalFacts.length > 0 ? (
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                    <Clock3 className="h-3.5 w-3.5" />
                    Risk coverage
                  </div>
                  <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {signalFacts.map((field) => (
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
          Default view only shows what the browser and live lookup actually expose. DNS leak scoring is not invented here.
        </div>
      </div>
    </section>
  )
}
