import Link from 'next/link'

interface RelatedLink {
  title: string
  href: string
  description: string
  category?: string
}

interface RelatedLinksProps {
  title?: string
  links: RelatedLink[]
}

export default function RelatedLinks({ 
  title = "You might also like", 
  links 
}: RelatedLinksProps) {
  if (links.length === 0) return null

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        {title}
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {links.map((link, index) => (
          <Link 
            key={index}
            href={link.href}
            className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors group"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0 mt-1">
                {link.category === 'hosting' && '🏠'}
                {link.category === 'ai' && '🤖'}
                {link.category === 'tools' && '🔧'}
                {link.category === 'guide' && '📚'}
                {!link.category && '📄'}
              </span>
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-blue-700 mb-1">
                  {link.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {link.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// Pre-defined link sets for common use cases
export const hostingRelatedLinks: RelatedLink[] = [
  {
    title: "Best Web Hosting 2026",
    href: "/best-web-hosting-2026",
    description: "Comprehensive comparison of top hosting providers",
    category: "hosting"
  },
  {
    title: "Cheap Web Hosting",
    href: "/cheap-hosting", 
    description: "Quality hosting on a budget - tested recommendations",
    category: "hosting"
  },
  {
    title: "Website Builders",
    href: "/website-builders",
    description: "Easy website creation tools comparison",
    category: "tools"
  }
]

export const aiToolsRelatedLinks: RelatedLink[] = [
  {
    title: "Best AI SEO Tools 2026",
    href: "/best-ai-seo-tools-2026",
    description: "AI-powered SEO tools that actually work",
    category: "ai"
  },
  {
    title: "AI Content Generator Comparison",
    href: "/ai-content-generator-comparison",
    description: "Detailed comparison of AI writing tools",
    category: "ai"
  },
  {
    title: "Web Hosting Guide",
    href: "/web-hosting",
    description: "Complete guide to choosing web hosting",
    category: "guide"
  }
]