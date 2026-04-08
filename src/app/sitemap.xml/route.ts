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
    // Core category pages
    {
      url: `${baseUrl}/web-hosting`,
      lastModified: currentDate,
      changeFreq: 'weekly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/hosting`,
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
    },
    // In-depth guides and reviews
    {
      url: `${baseUrl}/best-web-hosting-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/best-ai-writing-tools-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/best-ai-seo-tools-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/best-website-builders-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/ai-content-generator-comparison`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/cheap-hosting`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/cloud-hosting-vs-traditional-hosting-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/website-builder-vs-wordpress-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/free-website-builders-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/ai-vendor-due-diligence-checklist-enterprise-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/enterprise-ai-vendor-rfp-template-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/enterprise-ai-vendor-shortlist-scorecard-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/enterprise-ai-vendor-pricing-guide-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/enterprise-ai-vendor-pilot-evaluation-checklist-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/tools/mobile-proxy-farm-setup-guide-2026`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.3'
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.3'
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.5'
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.6'
    },
    {
      url: `${baseUrl}/hosting/best-web-hosting`,
      lastModified: currentDate,
      changeFreq: 'weekly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/hosting/wordpress-hosting`,
      lastModified: currentDate,
      changeFreq: 'weekly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/hosting/cheap-hosting`,
      lastModified: currentDate,
      changeFreq: 'weekly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/hosting/siteground-review`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/hosting/hostinger-review`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/hosting/hostinger-vs-bluehost`,
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.7'
    }
  ]

  const sitemap = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">
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
