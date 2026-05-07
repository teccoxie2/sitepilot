import { NextRequest, NextResponse } from 'next/server'
import { fetchIpapiResult } from '../../ipapi'
import { buildCrossChecks, fetchProxycheckResult } from '../../proxycheck'
import type { CheckApiResponse } from '../../types'

export async function GET(request: NextRequest) {
  const target = request.nextUrl.searchParams.get('target')?.trim()

  if (!target) {
    return NextResponse.json<CheckApiResponse>(
      { ok: false, error: 'Missing target query parameter.' },
      { status: 400 },
    )
  }

  try {
    const riskSnapshot = await fetchProxycheckResult(target)

    if (riskSnapshot.addressScope !== 'public routable IP') {
      const result = {
        ...riskSnapshot,
        ipapi: {
          source: 'context' as const,
          status: 'degraded' as const,
          note: `Special-use address detected: ${riskSnapshot.addressScope}. External context lookup skipped.`,
          ip: 'Unavailable',
          hostname: 'Unavailable',
          location: 'Unavailable',
          timezone: 'Unavailable',
          asn: 'Unavailable',
          organization: 'Unavailable',
          coordinates: 'Unavailable',
          currency: 'Unavailable',
        },
        crossChecks: [
          {
            label: 'Address scope',
            value: riskSnapshot.addressScope,
            status: 'review' as const,
          },
        ],
      }

      return NextResponse.json<CheckApiResponse>({ ok: true, result }, { status: 200 })
    }

    try {
      const contextSnapshot = await fetchIpapiResult(riskSnapshot.resolvedIp)

      const result = {
        ...riskSnapshot,
        ipapi: {
          source: 'context' as const,
          status: 'ready' as const,
          ip: contextSnapshot.ip,
          hostname: contextSnapshot.hostname || 'Unavailable',
          location:
            [contextSnapshot.city, contextSnapshot.region, contextSnapshot.countryName]
              .filter((part) => part && part !== 'Unavailable')
              .join(', ') || 'Unavailable',
          timezone: contextSnapshot.timezone,
          asn: contextSnapshot.asn,
          organization: contextSnapshot.org,
          coordinates:
            typeof contextSnapshot.latitude === 'number' && typeof contextSnapshot.longitude === 'number'
              ? `${contextSnapshot.latitude}, ${contextSnapshot.longitude}`
              : 'Unavailable',
          currency: contextSnapshot.currency,
        },
        crossChecks: buildCrossChecks(riskSnapshot, contextSnapshot),
      }

      return NextResponse.json<CheckApiResponse>({ ok: true, result }, { status: 200 })
    } catch (contextError) {
      const note = contextError instanceof Error ? contextError.message : 'Context source unavailable.'
      const degraded = {
        ...riskSnapshot,
        ipapi: {
          source: 'context' as const,
          status: 'degraded' as const,
          note,
          ip: 'Unavailable',
          hostname: 'Unavailable',
          location: 'Unavailable',
          timezone: 'Unavailable',
          asn: 'Unavailable',
          organization: 'Unavailable',
          coordinates: 'Unavailable',
          currency: 'Unavailable',
        },
        crossChecks: [
          {
            label: 'Context coverage',
            value: note,
            status: 'review' as const,
          },
        ],
      }

      return NextResponse.json<CheckApiResponse>({ ok: true, result: degraded }, { status: 200 })
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected risk engine error.'
    const status =
      message.includes('Could not resolve that hostname or endpoint.') ||
      message.includes('Enter an IP address, hostname, or endpoint.')
        ? 400
        : 500

    return NextResponse.json<CheckApiResponse>({ ok: false, error: message }, { status })
  }
}
