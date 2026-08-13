import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

type RouteEntry = {
  url: string
  changeFreq: 'daily' | 'weekly' | 'monthly'
  priority: string
}

export const revalidate = 3600

const baseUrl = 'https://sitepilot.co'
const appDir = path.join(process.cwd(), 'src', 'app')
const excludedSegments = new Set(['sitemap.xml', 'robots.txt'])

function isIgnorableSegment(segment: string) {
  return segment.startsWith('(') || segment.startsWith('_') || excludedSegments.has(segment)
}

async function collectPageRoutes(dir: string, segments: string[] = []): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const routes: string[] = []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (isIgnorableSegment(entry.name)) continue
      routes.push(...(await collectPageRoutes(path.join(dir, entry.name), [...segments, entry.name])))
      continue
    }

    if (entry.isFile() && entry.name === 'page.tsx') {
      routes.push(segments.length === 0 ? '/' : `/${segments.join('/')}`)
    }
  }

  return routes
}

function getPriority(pathname: string) {
  if (pathname === '/') return '1.0'
  if (['/ai-tools', '/web-hosting', '/website-builders', '/proxies', '/hosting', '/methodology'].includes(pathname)) return '0.9'
  if (pathname.startsWith('/proxies/') || pathname.startsWith('/hosting/') || pathname.startsWith('/tools/')) return '0.8'
  if (pathname.startsWith('/ai-') || pathname.startsWith('/enterprise-ai-') || pathname.startsWith('/best-')) return '0.8'
  if (['/privacy', '/terms'].includes(pathname)) return '0.3'
  if (pathname === '/contact') return '0.5'
  return '0.7'
}

function getChangeFreq(pathname: string): RouteEntry['changeFreq'] {
  if (pathname === '/') return 'daily'
  if (['/ai-tools', '/web-hosting', '/website-builders', '/proxies', '/hosting'].includes(pathname)) return 'weekly'
  if (pathname.startsWith('/proxies/') || pathname.startsWith('/hosting/')) return 'weekly'
  return 'monthly'
}

async function buildRoutes(): Promise<RouteEntry[]> {
  const pathnames = Array.from(new Set(await collectPageRoutes(appDir))).sort((a, b) => {
    if (a === '/') return -1
    if (b === '/') return 1
    return a.localeCompare(b)
  })

  return pathnames.map((pathname) => ({
    url: pathname === '/' ? baseUrl : `${baseUrl}${pathname}`,
    changeFreq: getChangeFreq(pathname),
    priority: getPriority(pathname),
  }))
}

export async function GET() {
  const routes = await buildRoutes()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${route.url}</loc>
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('')}
</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
