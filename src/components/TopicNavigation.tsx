'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getChildren, getSitePage } from '@/lib/site-architecture'

export default function TopicNavigation() {
  const pathname = usePathname()
  const page = getSitePage(pathname ?? '')
  if (!page || !page.indexable) return null
  const children = getChildren(page.path)
  const parent = page.parent ? getSitePage(page.parent) : undefined
  // A category lists its complete collection. Articles offer their category
  // and nearby reading, so every indexable page has an inbound topic link.
  const links = children.length ? children : page.parent && page.parent !== '/'
    ? getChildren(page.parent).filter((item) => item.path !== page.path).slice(0, 4)
    : []
  if (!links.length) return null

  return (
    <section data-topic-directory={page.path} aria-labelledby="topic-navigation-title" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="border-t border-slate-200 pt-8">
        <h2 id="topic-navigation-title" className="text-2xl font-semibold text-slate-950">
          {children.length ? page.path === '/' ? 'Browse all topics' : `Explore ${page.title.toLowerCase()}` : 'Continue exploring'}
        </h2>
        {!children.length && parent && <p className="mt-3 text-slate-600">Browse the full <Link href={parent.path} className="font-medium text-indigo-700 underline">{parent.title.toLowerCase()}</Link> collection.</p>}
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((item) => (
            <li key={item.path}><Link href={item.path} className="block h-full rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800 hover:border-indigo-400 hover:text-indigo-700">{item.title}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
