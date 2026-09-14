# SitePilot SEO architecture

The architecture keeps existing article URLs and gives each page one primary topic parent. The initial HTML contains crawlable category links, visible breadcrumbs, and matching BreadcrumbList JSON-LD. These are also updated during client-side navigation.

## Topic map

- Home → web hosting → provider reviews / hosting guides / fit scorecard
- Home → website builders → platform comparisons / themes / publishing guides
- Home → domains → registrar comparisons / buying / ownership guides
- Home → AI tools → vendor selection / costs and ROI / implementation / governance / content and business tools
- Home → proxy infrastructure → comparisons / setup / hardware / IP tools

`src/data/site-architecture.json` is the reviewed URL, title, parent, and indexability registry. It drives topic directories, breadcrumbs, and the XML sitemap. A category lists all its indexable children; a leaf links back to its topic and offers related reading. The build check rejects unclassified pages, parent cycles, broken internal links, duplicate titles, incorrect canonicals, sitemap mismatches, and indexable pages more than three clicks from home.

## Indexing and migration

147 App Router pages are registered, including six new category pages and the existing `/tools/ai-risk-management-framework` moved from Pages Router at the same URL. 144 are indexable. Privacy, terms, and proxy recommendation retain their prior noindex/follow policy. Existing article and query-free tool canonicals remain self-referencing.

Two aliases already mapped in the content inventory now return permanent 308 redirects:

- `/hosting/best-web-hosting` → `/best-web-hosting-2026`
- `/hosting/cheap-hosting` → `/cheap-hosting`

The sitemap is built from the registry and no longer requires the source tree at runtime. It omits speculative lastmod dates and priority/changefreq hints. Hub titles distinguish category navigation from annual provider comparisons. No broad content deletion or speculative consolidation was applied.

## Maintenance and verification

For a new route, add its primary parent and a descriptive navigation title to the registry, set its canonical and metadata, and regenerate the content inventory. Use `npm run content:inventory` and `npm run content:review-signals`. A new Review entry also needs an honest evidence record; missing metrics stay null.

Run `npm run build`, `npm run seo:check`, `npm run seo:architecture`, and `npm run indexing:contract`. The architecture check inspects built HTML for static pages. Browser tests verify the two request-dependent IP tools over HTTP, category rendering without JavaScript, client navigation, shared-tool canonicals, redirects, and responsive navigation. Run them against the production build with `SITEPILOT_TEST_PRODUCTION=1 npm run test -- --project=chromium`.

## After deployment

Run `npm run production:seo` against the live site. Submit the existing `/sitemap.xml` endpoint in Search Console and inspect representative new hubs and the migrated risk tool. Compare query and landing-page performance over successive periods before merging similar AI articles. The repository contains a dated, partial Search Console snapshot for Review pages; it is not a current site-wide performance baseline. Rankings and traffic gains are not guaranteed by structural checks.

References: [Google internal linking guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), [breadcrumbs](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), and [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
