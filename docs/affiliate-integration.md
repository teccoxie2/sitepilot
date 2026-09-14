# Affiliate integration

SitePilot keeps partner links behind a small, public-safe configuration in `src/data/affiliate-partners.ts`. The initial configuration is intentionally `pending` for every new partner and points readers to the verified official site. This allows content and SEO work to ship before a commercial relationship is enabled.

## Enabling a partner

1. Confirm the current partner agreement and promotion rules outside the repository.
2. Copy the complete HTTPS tracking URL from the partner network's link builder. Do not invent a tracking ID, add a visitor-controlled destination, or paste a password/token into the URL.
3. Set `trackingUrl` and `partnershipStatus: 'active'` for that partner in `src/data/affiliate-partners.ts`.
4. Run the checks below and inspect the generated HTML. Keep the URL out of public evidence notes and screenshots.
5. Deploy only after the link destination, disclosure, and partner rules have been reviewed.

If a partnership is paused or its tracking URL is no longer valid, set `partnershipStatus: 'paused'` (or clear `trackingUrl`). `PartnerLink` will fall back to the official URL and will not emit `affiliate_click`.

## Link behavior

`PartnerLink` renders the existing `AffiliateLink` component only for an active partner with a valid HTTPS tracking URL. Those links retain `sponsored nofollow noopener noreferrer` and the existing consent-gated `affiliate_click` event. Pending and paused partners render a regular external link with `noopener noreferrer`, and the click is not presented as commissionable.

Use a stable source value that identifies the page and placement, such as `marsproxies_review_pricing` or `email_marketing_list_hygiene`. Do not send email addresses, complete tracking URLs, account IDs, or query strings in analytics parameters.

## Verification

```sh
npm run lint
npm run typecheck
npm run analytics:contract
npm run build
npm run seo:check
npm run seo:architecture
SITEPILOT_TEST_PRODUCTION=1 npm run test -- --project=chromium
```

The tests should verify that pending links remain navigable with JavaScript disabled, active links use the affiliate component and rel attributes, and no `#affiliate-*` placeholder is present. Never use a production tracking URL in an automated test or test it by creating a real order.
