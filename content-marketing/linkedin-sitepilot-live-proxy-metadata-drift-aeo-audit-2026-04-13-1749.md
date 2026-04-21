# LinkedIn Draft — Live proxy metadata drift is still sabotaging BOFU extraction

Source truth does not matter if production truth is wrong.

This afternoon’s SitePilot audit found the same pattern again in the proxy cluster. The pages still open with 40–60 word factual definitions. The BOFU path still closes correctly. Internal route integrity is still clean. But four live URLs still render the generic sitewide title instead of the page-specific decision title.

That is not just an SEO nit. It weakens answer-engine extraction.

Current live state:
- `/proxies` → generic global title
- `/proxies/mobile-proxy-farm-setup-guide-2026` → generic global title
- `/proxies/proxy-farm-hardware-selection-guide` → generic global title + old H1 still live
- `/proxies/residential-vs-mobile-proxies-comparison-2026` → generic global title
- `/proxies/mobile-proxy-software-comparison-2026` → correct BOFU title still live

If ChatGPT, Perplexity, or Claude reads production output, a generic title reduces commercial specificity exactly where comparison and setup pages should be clearest.

The ugly rule is simple:
1. Audit live title first
2. Audit live H1 second
3. Audit factual opening third
4. Then check cluster closure and internal links

Answer engines do not care what your repo intended. They read what your production site actually shipped.

#AEO #SEO #TechnicalSEO #AnswerEngineOptimization #B2BMarketing #ContentStrategy
