'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getBreadcrumbs, siteUrl } from '@/lib/site-architecture'

// usePathname is available during static rendering; the links and JSON-LD are
// present in the initial HTML and also update on client-side navigation.
export default function SiteBreadcrumbs() {
  const pathname = usePathname()
  const crumbs = getBreadcrumbs(pathname ?? '')
  if (crumbs.length < 2) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((page, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: page.title,
      item: page.path === '/' ? siteUrl : `${siteUrl}${page.path}`,
    })),
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {crumbs.map((page, index) => (
            <li key={page.path} className="inline-flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === crumbs.length - 1
                ? <span aria-current="page">{page.title}</span>
                : <Link href={page.path} className="hover:text-indigo-700 underline-offset-4 hover:underline">{page.title}</Link>}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    </div>
  )
}
