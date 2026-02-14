import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://sitepilot.co'
  const currentDate = new Date().toISOString()
  
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFreq: 'daily',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/web-hosting`,
      lastModified: currentDate,
      changeFreq: 'weekly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/ai-tools`,
      lastModified: currentDate,
      changeFreq: 'weekly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/website-builders`,
      lastModified: currentDate,
      changeFreq: 'weekly',
      priority: '0.9'
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // 24 hours
    },
  })
}