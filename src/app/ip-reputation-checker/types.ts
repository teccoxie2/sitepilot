export type SignalStatus = 'clear' | 'review' | 'triggered'

export type SignalResult = {
  label: string
  value: string
  status: SignalStatus
}

export type ResultField = {
  label: string
  value: string
  tone?: 'default' | 'good' | 'watch' | 'bad'
}

export type DualSourceSnapshot = {
  source: 'risk' | 'context'
  ip: string
  hostname: string
  location: string
  timezone: string
  asn: string
  organization: string
  coordinates: string
  currency: string
  status?: 'ready' | 'degraded'
  note?: string
}

export type LiveReputationResult = {
  input: string
  normalizedTarget: string
  resolvedIp: string
  addressScope: string
  networkType: string
  networkRange: string
  riskScore: number
  confidence: number | null
  proxy: boolean
  vpn: boolean
  tor: boolean
  hosting: boolean
  scraper: boolean
  compromised: boolean
  anonymous: boolean
  firstSeen: string | null
  lastSeen: string | null
  updatedAt: string | null
  signals: SignalResult[]
  proxycheck: DualSourceSnapshot
  ipapi: DualSourceSnapshot
  crossChecks: SignalResult[]
  scopeNote?: string
}

export type CheckApiResponse =
  | { ok: true; result: LiveReputationResult }
  | { ok: false; error: string }
