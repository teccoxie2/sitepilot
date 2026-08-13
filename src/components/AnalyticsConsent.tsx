'use client'

import { useSyncExternalStore } from 'react'
import GoogleAnalytics from './GoogleAnalytics'

const consentKey = 'sitepilot-analytics-consent'
type Consent = 'accepted' | 'rejected' | null

function subscribe(onChange: () => void) {
  window.addEventListener('sitepilot-consent-change', onChange)
  return () => window.removeEventListener('sitepilot-consent-change', onChange)
}

function getSnapshot(): Consent {
  const value = window.localStorage.getItem(consentKey)
  return value === 'accepted' || value === 'rejected' ? value : null
}

function getServerSnapshot(): Consent {
  return null
}

function setConsent(value: Exclude<Consent, null>) {
  window.localStorage.setItem(consentKey, value)
  window.dispatchEvent(new Event('sitepilot-consent-change'))
}

export default function AnalyticsConsent({ measurementId }: { measurementId?: string }) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  if (!measurementId || consent === 'rejected') return null

  return (
    <>
      {consent === 'accepted' ? <GoogleAnalytics measurementId={measurementId} /> : null}
      {consent === null ? (
        <div
          role="dialog"
          aria-labelledby="analytics-consent-title"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h2 id="analytics-consent-title" className="font-semibold text-slate-950">Help us improve SitePilot</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Optional Google Analytics helps us understand aggregate page use. It only loads after you choose Allow.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button type="button" onClick={() => setConsent('rejected')} className="btn-secondary px-4 py-2 text-sm">
              Decline
            </button>
            <button type="button" onClick={() => setConsent('accepted')} className="btn-brand px-4 py-2 text-sm">
              Allow analytics
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
