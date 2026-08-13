import 'server-only'

import dns from 'node:dns/promises'
import { isIP } from 'node:net'
import type { IpapiLookupResult } from './ipapi'
import { LiveReputationResult, type SignalResult } from './types'

const UPSTREAM_TIMEOUT_MS = 8_000

type ProxycheckLocation = {
  city_name?: string | null
  region_name?: string | null
  country_name?: string | null
  country_code?: string | null
  latitude?: number | null
  longitude?: number | null
  timezone?: string | null
  currency?: {
    name?: string | null
    code?: string | null
    symbol?: string | null
  } | null
} | null

type ProxycheckNetwork = {
  asn?: string | null
  range?: string | null
  hostname?: string | null
  provider?: string | null
  organisation?: string | null
  type?: string | null
} | null

type ProxycheckDetections = {
  proxy?: boolean
  vpn?: boolean
  compromised?: boolean
  scraper?: boolean
  tor?: boolean
  hosting?: boolean
  anonymous?: boolean
  risk?: number
  confidence?: number | null
  first_seen?: string | null
  last_seen?: string | null
} | null

type ProxycheckNode = {
  last_updated?: string | null
  location?: ProxycheckLocation
  network?: ProxycheckNetwork
  detections?: ProxycheckDetections
}

function normalizeInput(input: string) {
  return input.trim()
}

function ipv4ToInt(ip: string) {
  const parts = ip.split('.').map((part) => Number(part))
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) {
    return null
  }

  return (((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3]) >>> 0
}

function inIpv4Range(ip: string, start: string, end: string) {
  const value = ipv4ToInt(ip)
  const from = ipv4ToInt(start)
  const to = ipv4ToInt(end)
  if (value === null || from === null || to === null) return false
  return value >= from && value <= to
}

function classifyNonPublicIp(ip: string) {
  if (ip.includes(':')) {
    const normalized = ip.toLowerCase()

    if (normalized === '::' || normalized === '0:0:0:0:0:0:0:0') return 'unspecified IPv6 range'
    if (normalized === '::1' || normalized === '0:0:0:0:0:0:0:1') return 'loopback IPv6 range'
    if (normalized.startsWith('fe80:') || normalized.startsWith('fe90:') || normalized.startsWith('fea0:') || normalized.startsWith('feb0:')) return 'link-local IPv6 range'
    if (normalized.startsWith('fc') || normalized.startsWith('fd')) return 'unique local IPv6 range'
    if (normalized.startsWith('ff')) return 'multicast IPv6 range'

    return null
  }

  if (inIpv4Range(ip, '10.0.0.0', '10.255.255.255')) return 'private IPv4 range (10.0.0.0/8)'
  if (inIpv4Range(ip, '172.16.0.0', '172.31.255.255')) return 'private IPv4 range (172.16.0.0/12)'
  if (inIpv4Range(ip, '192.168.0.0', '192.168.255.255')) return 'private IPv4 range (192.168.0.0/16)'
  if (inIpv4Range(ip, '127.0.0.0', '127.255.255.255')) return 'loopback IPv4 range'
  if (inIpv4Range(ip, '169.254.0.0', '169.254.255.255')) return 'link-local IPv4 range'
  if (inIpv4Range(ip, '224.0.0.0', '239.255.255.255')) return 'multicast IPv4 range'
  if (inIpv4Range(ip, '240.0.0.0', '255.255.255.254')) return 'reserved IPv4 range'
  if (ip === '255.255.255.255') return 'limited broadcast IPv4 address'
  if (ip === '0.0.0.0') return 'unspecified IPv4 address'
  if (inIpv4Range(ip, '100.64.0.0', '100.127.255.255')) return 'carrier-grade NAT IPv4 range'
  if (inIpv4Range(ip, '198.18.0.0', '198.19.255.255')) return 'benchmark/testing IPv4 range'

  return null
}

function stripDecorators(target: string) {
  const trimmed = target.trim()

  if (/^https?:\/\//i.test(trimmed)) {
    try {
      return new URL(trimmed).hostname
    } catch {
      return trimmed
    }
  }

  if (/^[^\s/:]+:\d{2,5}$/.test(trimmed) && !/^\d{1,3}(?:\.\d{1,3}){3}:\d{2,5}$/.test(trimmed)) {
    return trimmed.replace(/:\d{2,5}$/, '')
  }

  if (/^\d{1,3}(?:\.\d{1,3}){3}:\d{2,5}$/.test(trimmed)) {
    return trimmed.replace(/:\d{2,5}$/, '')
  }

  return trimmed
}

async function lookupReverseDns(ip: string) {
  try {
    const results = await dns.reverse(ip)
    return results.filter(Boolean)
  } catch {
    return []
  }
}

async function resolveTarget(input: string) {
  const normalizedTarget = stripDecorators(normalizeInput(input))
  if (!normalizedTarget) {
    throw new Error('Enter an IP address, hostname, or endpoint.')
  }

  if (isIP(normalizedTarget)) {
    const blockedRange = classifyNonPublicIp(normalizedTarget)

    return {
      normalizedTarget,
      resolvedIp: normalizedTarget,
      hostname: 'Unavailable',
      addressScope: blockedRange || 'public routable IP',
      isSpecialUse: Boolean(blockedRange),
    }
  }

  try {
    const lookup = await dns.lookup(normalizedTarget)
    const blockedRange = classifyNonPublicIp(lookup.address)

    return {
      normalizedTarget,
      resolvedIp: lookup.address,
      hostname: normalizedTarget,
      addressScope: blockedRange || 'public routable IP',
      isSpecialUse: Boolean(blockedRange),
    }
  } catch {
    throw new Error('Could not resolve that hostname or endpoint.')
  }
}

function formatLocation(location?: ProxycheckLocation) {
  if (!location) return 'Unavailable'
  const parts = [location.city_name, location.region_name, location.country_name].filter(Boolean)
  return parts.length ? parts.join(', ') : 'Unavailable'
}

function formatCoordinates(location?: ProxycheckLocation) {
  if (typeof location?.latitude === 'number' && typeof location?.longitude === 'number') {
    return `${location.latitude}, ${location.longitude}`
  }
  return 'Unavailable'
}

function formatCurrency(location?: ProxycheckLocation) {
  const currency = location?.currency
  if (!currency) return 'Unavailable'
  const parts = [currency.code, currency.name, currency.symbol].filter(Boolean)
  return parts.length ? parts.join(' · ') : 'Unavailable'
}

function buildSignals(node: ProxycheckNode): SignalResult[] {
  const detections = node.detections || {}
  const location = node.location || {}

  return [
    {
      label: 'Proxy',
      value: detections.proxy ? 'Detected' : 'Not detected',
      status: detections.proxy ? 'triggered' : 'clear',
    },
    {
      label: 'VPN',
      value: detections.vpn ? 'Detected' : 'Not detected',
      status: detections.vpn ? 'triggered' : 'clear',
    },
    {
      label: 'TOR',
      value: detections.tor ? 'Detected' : 'Not detected',
      status: detections.tor ? 'triggered' : 'clear',
    },
    {
      label: 'Hosting',
      value: detections.hosting ? 'Hosting signal present' : 'No hosting signal',
      status: detections.hosting ? 'review' : 'clear',
    },
    {
      label: 'Compromised',
      value: detections.compromised ? 'Compromised IP signal present' : 'No compromised signal',
      status: detections.compromised ? 'triggered' : 'clear',
    },
    {
      label: 'Geo coverage',
      value: location.country_code ? `${location.country_name || 'Country'} (${location.country_code})` : 'Unavailable',
      status: location.country_code ? 'clear' : 'review',
    },
  ]
}

export function buildCrossChecks(
  proxycheck: LiveReputationResult,
  ipapi: IpapiLookupResult,
): SignalResult[] {
  const checks: SignalResult[] = []

  const proxyAsn = (proxycheck.proxycheck.asn || '').trim().toUpperCase()
  const ipapiAsn = (ipapi.asn || '').trim().toUpperCase()
  checks.push({
    label: 'ASN match',
    value: proxyAsn && ipapiAsn ? `${proxycheck.proxycheck.asn} vs ${ipapi.asn}` : 'Unavailable',
    status: proxyAsn && ipapiAsn ? (proxyAsn === ipapiAsn ? 'clear' : 'triggered') : 'review',
  })

  const proxyOrg = (proxycheck.proxycheck.organization || '').trim().toLowerCase()
  const ipapiOrg = (ipapi.org || '').trim().toLowerCase()
  checks.push({
    label: 'Organization match',
    value: `${proxycheck.proxycheck.organization} vs ${ipapi.org}`,
    status: proxyOrg && ipapiOrg ? (proxyOrg === ipapiOrg ? 'clear' : 'review') : 'review',
  })

  const proxyLocation = proxycheck.proxycheck.location
  const ipapiLocation = [ipapi.city, ipapi.region, ipapi.countryName].filter((part) => part && part !== 'Unavailable').join(', ') || 'Unavailable'
  checks.push({
    label: 'Location match',
    value: `${proxyLocation} vs ${ipapiLocation}`,
    status: proxyLocation !== 'Unavailable' && ipapiLocation !== 'Unavailable' ? (proxyLocation === ipapiLocation ? 'clear' : 'review') : 'review',
  })

  return checks
}

export async function fetchProxycheckResult(input: string): Promise<LiveReputationResult> {
  const key = process.env.PROXYCHECK_API_KEY

  const { normalizedTarget, resolvedIp, hostname, addressScope, isSpecialUse } = await resolveTarget(input)
  const reverseDns = isIP(resolvedIp) ? await lookupReverseDns(resolvedIp) : []

  if (!key) {
    return {
      input: normalizeInput(input),
      normalizedTarget,
      resolvedIp,
      reverseDns,
      addressScope,
      networkType: isSpecialUse ? 'Special-use' : 'Unavailable',
      networkRange: 'Unavailable',
      riskScore: 0,
      confidence: null,
      proxy: false,
      vpn: false,
      tor: false,
      hosting: false,
      scraper: false,
      compromised: false,
      anonymous: false,
      firstSeen: null,
      lastSeen: null,
      updatedAt: null,
      signals: [
        {
          label: isSpecialUse ? 'Address scope' : 'Risk coverage',
          value: isSpecialUse ? addressScope : 'Risk engine temporarily unavailable.',
          status: 'review',
        },
      ],
      proxycheck: {
        source: 'risk',
        ip: resolvedIp,
        hostname,
        location: 'Unavailable',
        timezone: 'Unavailable',
        asn: 'Unavailable',
        organization: 'Unavailable',
        coordinates: 'Unavailable',
        currency: 'Unavailable',
        status: 'degraded',
        note: isSpecialUse
          ? `Special-use address detected: ${addressScope}. External reputation lookup skipped.`
          : 'Risk engine temporarily unavailable.',
      },
      ipapi: {
        source: 'context',
        ip: 'Unavailable',
        hostname: 'Unavailable',
        location: 'Unavailable',
        timezone: 'Unavailable',
        asn: 'Unavailable',
        organization: 'Unavailable',
        coordinates: 'Unavailable',
        currency: 'Unavailable',
      },
      crossChecks: isSpecialUse ? [{ label: 'Address scope', value: addressScope, status: 'review' }] : [],
      scopeNote: isSpecialUse ? `Special-use address detected: ${addressScope}.` : undefined,
    }
  }
  const params = new URLSearchParams({
    key,
    vpn: '1',
    risk: '1',
    asn: '1',
    inf: '1',
  })

  let node: ProxycheckNode | undefined

  if (!isSpecialUse) {
    const response = await fetch(`https://proxycheck.io/v3/${encodeURIComponent(resolvedIp)}?${params.toString()}`, {
      // The API key is part of this upstream URL; keep the credential-bearing request out of the Data Cache.
      cache: 'no-store',
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    })

    if (!response.ok) {
      throw new Error(`Risk engine request failed with ${response.status}.`)
    }

    const payload = (await response.json()) as Record<string, unknown>
    node = payload[resolvedIp] as ProxycheckNode | undefined

    if (!node || typeof node !== 'object') {
      throw new Error('Risk engine returned no result for that target.')
    }
  }

  const detections = node?.detections || {}
  const riskScore = typeof detections.risk === 'number' ? detections.risk : 0

  const proxyHostname = node?.network?.hostname || hostname
  const proxyLocation = formatLocation(node?.location)
  const proxyCoordinates = formatCoordinates(node?.location)
  const proxyTimezone = node?.location?.timezone || 'Unavailable'
  const proxyCurrency = formatCurrency(node?.location)
  const proxyAsn = node?.network?.asn || 'Unavailable'
  const proxyOrganization = node?.network?.organisation || 'Unavailable'

  return {
    input: normalizeInput(input),
    normalizedTarget,
    resolvedIp,
    reverseDns,
    addressScope,
    networkType: node?.network?.type || (isSpecialUse ? 'Special-use' : 'Unavailable'),
    networkRange: node?.network?.range || 'Unavailable',
    riskScore,
    confidence: typeof detections.confidence === 'number' ? detections.confidence : null,
    proxy: Boolean(detections.proxy),
    vpn: Boolean(detections.vpn),
    tor: Boolean(detections.tor),
    hosting: Boolean(detections.hosting),
    scraper: Boolean(detections.scraper),
    compromised: Boolean(detections.compromised),
    anonymous: Boolean(detections.anonymous),
    firstSeen: detections.first_seen || null,
    lastSeen: detections.last_seen || null,
    updatedAt: node?.last_updated || null,
    signals: isSpecialUse ? [{ label: 'Address scope', value: addressScope, status: 'review' }] : buildSignals(node as ProxycheckNode),
    proxycheck: {
      source: 'risk',
      ip: resolvedIp,
      hostname: proxyHostname,
      location: proxyLocation,
      timezone: proxyTimezone,
      asn: proxyAsn,
      organization: proxyOrganization,
      coordinates: proxyCoordinates,
      currency: proxyCurrency,
      status: isSpecialUse ? 'degraded' : 'ready',
      note: isSpecialUse ? `Special-use address detected: ${addressScope}. External reputation lookup skipped.` : undefined,
    },
    ipapi: {
      source: 'context',
      ip: 'Unavailable',
      hostname: 'Unavailable',
      location: 'Unavailable',
      timezone: 'Unavailable',
      asn: 'Unavailable',
      organization: 'Unavailable',
      coordinates: 'Unavailable',
      currency: 'Unavailable',
      status: isSpecialUse ? 'degraded' : undefined,
      note: isSpecialUse ? `Special-use address detected: ${addressScope}. External context lookup skipped.` : undefined,
    },
    crossChecks: isSpecialUse ? [{ label: 'Address scope', value: addressScope, status: 'review' }] : [],
    scopeNote: isSpecialUse ? `Special-use address detected: ${addressScope}.` : undefined,
  }
}
