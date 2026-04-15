# LinkedIn Draft — SitePilot route-level metadata hardening for proxy cluster

Answer engines do not rank your repo. They read production output.

That is why BOFU proxy pages can look perfect in source, pass local build checks, and still lose extraction quality when live titles collapse to a generic site-wide fallback.

Today we hardened the SitePilot proxy cluster by moving page metadata into dedicated route-level `metadata.ts` files for:
- `/proxies`
- `/proxies/mobile-proxy-farm-setup-guide-2026`
- `/proxies/proxy-farm-hardware-selection-guide`
- `/proxies/residential-vs-mobile-proxies-comparison-2026`
- `/proxies/mobile-proxy-software-comparison-2026`

Why this matters:
- factual 40–60 word openings are only part of AEO
- BOFU extraction also needs page-specific titles to survive production deployment
- topical authority is weakened when a cluster hub and child pages inherit the same vague global title

The blunt version: if four revenue-intent pages all render as `SitePilot | Global Digital Infrastructure Authority`, your answer extraction gets dumber fast.

AEO lesson:
1. Keep factual lead paragraphs tight.
2. Keep route titles specific.
3. Keep cluster paths obvious.
4. Audit live HTML, not just source code.

That last step is where most teams lie to themselves.
