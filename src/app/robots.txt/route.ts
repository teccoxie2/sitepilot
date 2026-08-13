import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://sitepilot.co/sitemap.xml

Disallow: /admin/
Disallow: /api/
Disallow: /ip-reputation-checker/api/`

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // 24 hours
    },
  })
}
