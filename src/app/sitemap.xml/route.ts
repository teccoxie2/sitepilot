import { NextResponse } from 'next/server'
import { sitePages, siteUrl } from '@/lib/site-architecture'

export const dynamic = 'force-static'

export async function GET() {
  const urls = sitePages.filter((page) => page.indexable).map((page) =>
    `<url><loc>${page.path === '/' ? siteUrl : `${siteUrl}${page.path}`}</loc></url>`,
  )
  // Omit lastmod until reliable editorial update dates are available.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('\n')}</urlset>`
  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=0, s-maxage=3600' },
  })
}
