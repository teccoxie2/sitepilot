import SchemaMarkup from '@/components/SchemaMarkup'
import AIInvestmentPortfolioOptimizerClient from './AIInvestmentPortfolioOptimizerClient'
import { pageDescription, pageTitle, pageUrl } from './metadata'

export { metadata } from './metadata'

export default function AIInvestmentPortfolioOptimizerPage() {
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
      <AIInvestmentPortfolioOptimizerClient />
    </>
  )
}
