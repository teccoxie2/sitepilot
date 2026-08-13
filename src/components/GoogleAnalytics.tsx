'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string
}

type GtagFunction = (command: string, target: string, parameters?: Record<string, string | number | undefined>) => void

declare global {
  interface Window {
    gtag?: GtagFunction
  }
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const normalizedMeasurementId = measurementId.trim()

  if (!/^G-[A-Z0-9]+$/.test(normalizedMeasurementId)) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${normalizedMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${normalizedMeasurementId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

// Helper function to track custom events
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Helper function to track affiliate link clicks
export function trackAffiliateClick(provider: string, plan: string, source: string) {
  trackEvent('affiliate_click', 'affiliate', `${provider}_${plan}_${source}`)
}
