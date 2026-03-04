import { Metadata } from 'next'
import WebsiteBuildersClient from './WebsiteBuildersClient'

export const metadata: Metadata = {
  title: 'Best Website Builders 2026: Complete Guide & Comparisons | SitePilot',
  description: 'Compare the best website builders for creating professional websites. Detailed reviews of Webflow, Wix, Squarespace, and more with performance tests.',
  keywords: 'website builders, Webflow, Wix, Squarespace, best website builder 2026, drag and drop builder'
}

export default function WebsiteBuildersPage() {
  return <WebsiteBuildersClient />
}