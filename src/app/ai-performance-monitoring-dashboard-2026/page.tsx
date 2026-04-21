import SchemaMarkup from '@/components/SchemaMarkup'
import { pageDescription, pageTitle, pageUrl } from './metadata'
import AIPerformanceMonitoringDashboardClient from './AIPerformanceMonitoringDashboardClient'

export { metadata } from './metadata'

export default function AIPerformanceMonitoringDashboardPage() {
  return (
    <>
      <SchemaMarkup
        type="article"
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedDate="2026-04-20"
        modifiedDate="2026-04-20"
        authorName="SitePilot Team"
      />
      <AIPerformanceMonitoringDashboardClient />
    </>
  )
}
