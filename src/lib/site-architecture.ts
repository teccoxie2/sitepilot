import architecture from '@/data/site-architecture.json'

export const sitePages = architecture.pages
export type SitePage = (typeof sitePages)[number]
export const siteUrl = 'https://sitepilot.co'

export function getSitePage(pathname: string) {
  return sitePages.find((page) => page.path === pathname)
}

export function getChildren(pathname: string) {
  return sitePages.filter((page) => page.parent === pathname && page.indexable)
}

export function getBreadcrumbs(pathname: string): SitePage[] {
  const page = getSitePage(pathname)
  if (!page) return []
  return page.parent ? [...getBreadcrumbs(page.parent), page] : [page]
}
