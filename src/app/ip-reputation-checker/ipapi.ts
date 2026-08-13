import 'server-only'

const UPSTREAM_TIMEOUT_MS = 8_000

export type IpapiLookupResult = {
  ip: string
  city: string
  region: string
  countryName: string
  countryCode: string
  timezone: string
  currency: string
  latitude: number | null
  longitude: number | null
  asn: string
  org: string
  hostname: string | null
}

type IpapiResponse = {
  ip?: string
  city?: string
  region?: string
  country_name?: string
  country_code?: string
  timezone?: string
  currency?: string
  latitude?: number
  longitude?: number
  asn?: string
  org?: string
  hostname?: string | null
  error?: boolean
  reason?: string
}

function safe(value: string | null | undefined) {
  return value && value.trim() ? value.trim() : 'Unavailable'
}

export async function fetchIpapiResult(ip: string): Promise<IpapiLookupResult> {
  const response = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
    next: { revalidate: 300 },
    signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    headers: {
      'User-Agent': 'sitepilot-ip-reputation-checker/1.0',
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Context source request failed with ${response.status}.`)
  }

  const payload = (await response.json()) as IpapiResponse

  if (payload.error) {
    throw new Error(payload.reason || 'Context source returned an error.')
  }

  return {
    ip: safe(payload.ip),
    city: safe(payload.city),
    region: safe(payload.region),
    countryName: safe(payload.country_name),
    countryCode: safe(payload.country_code),
    timezone: safe(payload.timezone),
    currency: safe(payload.currency),
    latitude: typeof payload.latitude === 'number' ? payload.latitude : null,
    longitude: typeof payload.longitude === 'number' ? payload.longitude : null,
    asn: safe(payload.asn),
    org: safe(payload.org),
    hostname: payload.hostname && payload.hostname.trim() ? payload.hostname.trim() : null,
  }
}
