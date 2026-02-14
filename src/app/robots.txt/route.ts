import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://sitepilot.co/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin paths (if any in future)
Disallow: /admin/
Disallow: /api/

# Allow all important pages
Allow: /web-hosting
Allow: /ai-tools
Allow: /website-builders`

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // 24 hours
    },
  })
}