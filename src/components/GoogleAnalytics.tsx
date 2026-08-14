'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string
}

type AnalyticsParamValue = string | number | boolean | undefined

export interface AnalyticsEventParams {
  category?: string
  label?: string
  value?: number
  [key: string]: AnalyticsParamValue
}

type GtagFunction = (command: string, target: string, parameters?: AnalyticsEventParams) => void

export const ANALYTICS_EVENTS = {
  TOOL_START: 'tool_start',
  TOOL_COMPLETE: 'tool_complete',
  REPORT_EXPORT: 'report_export',
  REPORT_SHARE: 'report_share',
  APPLY_SUBMIT: 'apply_submit',
  AFFILIATE_CLICK: 'affiliate_click',
} as const

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]

const eventCategories: Record<AnalyticsEventName, string> = {
  [ANALYTICS_EVENTS.TOOL_START]: 'tool',
  [ANALYTICS_EVENTS.TOOL_COMPLETE]: 'tool',
  [ANALYTICS_EVENTS.REPORT_EXPORT]: 'report',
  [ANALYTICS_EVENTS.REPORT_SHARE]: 'report',
  [ANALYTICS_EVENTS.APPLY_SUBMIT]: 'lead',
  [ANALYTICS_EVENTS.AFFILIATE_CLICK]: 'affiliate',
}

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

// Legacy positional arguments remain supported for existing callers.
export function trackEvent(action: string, category: string, label?: string, value?: number): void
export function trackEvent(action: AnalyticsEventName, params?: AnalyticsEventParams): void
export function trackEvent(
  action: string,
  categoryOrParams: string | AnalyticsEventParams = 'engagement',
  label?: string,
  value?: number,
) {
  if (typeof window === 'undefined' || !window.gtag) return

  const params: AnalyticsEventParams =
    typeof categoryOrParams === 'string'
      ? { category: categoryOrParams, label, value }
      : categoryOrParams
  const { category, label: eventLabel, value: eventValue, ...customParams } = params
  const eventParams = {
    ...customParams,
    event_category: category,
    event_label: eventLabel,
    value: eventValue,
  }
  const definedParams = Object.fromEntries(
    Object.entries(eventParams).filter(([, paramValue]) => paramValue !== undefined),
  ) as AnalyticsEventParams

  window.gtag('event', action, definedParams)
}

function trackNamedEvent(eventName: AnalyticsEventName, params: AnalyticsEventParams = {}) {
  trackEvent(eventName, { ...params, category: eventCategories[eventName] })
}

export function trackToolStart(toolId: string, params: AnalyticsEventParams = {}) {
  trackNamedEvent(ANALYTICS_EVENTS.TOOL_START, {
    ...params,
    label: params.label ?? toolId,
    tool_id: toolId,
  })
}

export function trackToolComplete(toolId: string, params: AnalyticsEventParams = {}) {
  trackNamedEvent(ANALYTICS_EVENTS.TOOL_COMPLETE, {
    ...params,
    label: params.label ?? toolId,
    tool_id: toolId,
  })
}

export function trackReportExport(reportType: string, format = 'unknown', params: AnalyticsEventParams = {}) {
  trackNamedEvent(ANALYTICS_EVENTS.REPORT_EXPORT, {
    ...params,
    label: params.label ?? reportType,
    report_type: reportType,
    format,
  })
}

export function trackReportShare(reportType: string, channel = 'unknown', params: AnalyticsEventParams = {}) {
  trackNamedEvent(ANALYTICS_EVENTS.REPORT_SHARE, {
    ...params,
    label: params.label ?? reportType,
    report_type: reportType,
    share_channel: channel,
  })
}

export function trackApplySubmit(formName: string, params: AnalyticsEventParams = {}) {
  trackNamedEvent(ANALYTICS_EVENTS.APPLY_SUBMIT, {
    ...params,
    label: params.label ?? formName,
    form_name: formName,
  })
}

// Helper function to track affiliate link clicks.
export function trackAffiliateClick(provider: string, plan: string, source: string) {
  trackEvent(ANALYTICS_EVENTS.AFFILIATE_CLICK, 'affiliate', `${provider}_${plan}_${source}`)
}
