# LinkedIn Draft — Live metadata drift keeps killing BOFU extraction

The page can be correct in source and still fail in answer engines.

Today’s SitePilot audit found the same ugly pattern again. The proxy cluster still has factual 40–60 word openings. The topic path still closes cleanly. Internal route integrity is still intact. But four production URLs still ship the generic sitewide title instead of their page-specific BOFU titles.

That is not a cosmetic SEO bug. It is an answer-extraction bug.

When a comparison or setup page renders a generic brand title in production, the page becomes less specific exactly where ChatGPT, Perplexity, and other retrieval systems need commercial precision. Your repo can look clean. Your live answer object can still be muddy.

Current production state:
- Procurement cluster titles: aligned
- Proxy software title: aligned
- Proxy hub / setup / hardware / comparison: still drifting to the global title
- Hardware page H1: still showing the older production heading

AEO audit order should stay brutal:
1. Live title
2. Live H1
3. 40–60 word factual opening
4. BOFU fit
5. Topic-cluster closure
6. Internal link integrity

Answer engines read production truth, not developer intent. If the rendered metadata is wrong, the extraction layer pays for it.

#AEO #SEO #TechnicalSEO #AnswerEngineOptimization #ContentStrategy #B2BMarketing
