# LinkedIn Draft — SitePilot Proxy Cluster: Live Truth Beats Source Truth

Four proxy pages can have correct source metadata and still lose answer-engine precision if production keeps serving a generic title.

That is exactly the kind of mistake technical marketing teams miss.

This week we audited a proxy content cluster built around a BOFU path:
- residential vs mobile proxy comparison
- mobile proxy farm setup
- proxy farm hardware selection
- mobile proxy software comparison

The source content was already doing the right things:
- 40–60 word factual openings
- BOFU page intent instead of fluffy TOFU content
- strong internal path from methodology to comparison to setup to hardware to software

But production truth mattered more than source truth.

Live checks still showed four pages falling back to the global title instead of page-level titles. One hardware page also still served the old H1 in production.

That means the content can be structurally correct for AEO and still underperform in real answer extraction because the live page is what search systems and LLM retrievers actually read.

Three blunt lessons:
1. Build success is not SEO success.
2. Source metadata is not production metadata.
3. AEO audits have to test the live page, not just the repo.

If you want answer-engine visibility, audit pages like a retrieval system would:
- fetch the live URL
- check title and H1
- verify the factual opening is extractable
- confirm the BOFU internal path actually resolves

Marketing teams love reporting what the CMS says.
Operators should report what the internet sees.

That gap is where rankings and conversions quietly leak.
