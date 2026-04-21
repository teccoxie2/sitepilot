# LinkedIn Draft — Answer engines read production, not your repo

If your live title tag is wrong, your source code does not matter.

This morning’s SitePilot audit confirmed a familiar AEO failure pattern. The proxy cluster still has correct 40–60 word factual openings in source, the BOFU path still closes properly, and internal route integrity is still clean. But four live proxy URLs still render a generic sitewide title in production.

That matters because answer engines extract from rendered production truth, not local intent. When a BOFU comparison page ships a generic brand title, retrieval specificity drops exactly where commercial queries need precision.

Current state:
- Procurement cluster: live titles aligned
- Proxy software page: live title aligned
- Proxy hub, setup, hardware, residential-vs-mobile: live title drift persists
- Hardware page: live H1 still shows the older heading in production

AEO audit order should be brutal:
1. Live title and H1 alignment
2. 40–60 word factual opening
3. BOFU query fit
4. Topic-cluster closure
5. Internal link integrity

Pretty source code does not win answer share. Rendered production truth does.

#AEO #SEO #TechnicalSEO #AnswerEngineOptimization #ContentStrategy #SiteArchitecture
