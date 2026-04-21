# LinkedIn Draft — SitePilot proxy cluster AEO vs production caching

Answer engines read production HTML, not your local repo. 

After hardening the SitePilot proxy cluster with dedicated route-level `metadata.ts` files, local builds confirm the correct specific titles for our BOFU proxy guides. But a live AEO audit shows the production server is still returning the fallback global title.

Why this matters for Answer Engine Optimization (AEO):
- If your 40-60 word factual snippet is perfect, but the page title is generic, LLMs lose the exact context of what the page serves.
- Caching layers (like Next.js router cache or Vercel edge cache) can hold onto stale metadata longer than your source code suggests.
- True Topical Authority requires the cluster path to be visible in the deployed `<title>` and `<h1>` tags.

AEO lesson: Deployments aren't finished when the pipeline turns green. They are finished when the live HTML matches your Answer Engine intent. Validate your live metadata.