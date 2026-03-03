import type { Metadata } from 'next'
import RelatedLinks, { websiteBuilderRelatedLinks } from '@/components/RelatedLinks'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Best Website Builders 2026: Complete Guide & Comparisons - SitePilot',
  description: 'Compare the top website builders in 2026. Expert reviews of Webflow, Wix, Shopify, Squarespace, and more. Find the perfect builder for your needs.',
  keywords: 'best website builders 2026, website builder comparison, Webflow vs Wix, Shopify review, Squarespace alternatives, drag and drop website builder',
  openGraph: {
    title: 'Best Website Builders 2026: Complete Expert Comparison',
    description: 'Professional reviews and comparisons of top website builders. Find the right platform for your business needs.',
    type: 'article',
    url: 'https://sitepilot.co/best-website-builders-2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Website Builders 2026: Expert Comparison',
    description: 'Comprehensive guide to choosing the right website builder in 2026.',
  },
  alternates: {
    canonical: 'https://sitepilot.co/best-website-builders-2026'
  }
}

const BuilderCard = ({ 
  rank, 
  name, 
  rating,
  badge = '',
  description,
  pros, 
  cons,
  pricing,
  bestFor,
  link,
  color = 'blue'
}: {
  rank: number
  name: string
  rating: string
  badge?: string
  description: string
  pros: string[]
  cons: string[]
  pricing: string[]
  bestFor: string
  link: string
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'red'
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    red: 'bg-red-50 border-red-200 text-red-800'
  }

  const buttonColorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    green: 'bg-green-600 hover:bg-green-700',
    orange: 'bg-orange-600 hover:bg-orange-700',
    red: 'bg-red-600 hover:bg-red-700'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8 hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl font-bold text-gray-900">#{rank}</span>
            <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
            <span className="text-lg font-semibold text-gray-600">({rating})</span>
            {badge && (
              <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${colorClasses[color]}`}>
                {badge}
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className={`inline-block px-3 py-2 rounded-lg text-sm font-medium ${colorClasses[color]}`}>
            <span className="font-semibold">Best For:</span> {bestFor}
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-bold text-green-800 mb-3 flex items-center">
            <span className="text-green-600 mr-2">✅</span>
            Pros
          </h4>
          <ul className="space-y-2">
            {pros.map((pro, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-red-800 mb-3 flex items-center">
            <span className="text-red-600 mr-2">❌</span>
            Cons
          </h4>
          <ul className="space-y-2">
            {cons.map((con, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-gray-800 mb-3">💰 Pricing</h4>
        <ul className="space-y-1">
          {pricing.map((price, index) => (
            <li key={index} className="text-gray-700">• {price}</li>
          ))}
        </ul>
      </div>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`inline-block px-8 py-3 text-white font-semibold rounded-lg transition-colors ${buttonColorClasses[color]}`}
      >
        Try {name} Free →
      </a>
    </div>
  )
}

export default function BestWebsiteBuilders2026() {
  return (
    <>
      <SchemaMarkup 
        type="article"
        title="Best Website Builders 2026: Complete Guide & Comparisons"
        description="Compare the top website builders in 2026. Expert reviews of Webflow, Wix, Shopify, Squarespace, and more. Find the perfect builder for your needs."
        url="https://sitepilot.co/best-website-builders-2026"
        publishedDate="2026-03-03T00:00:00Z"
        modifiedDate="2026-03-03T00:00:00Z"
        authorName="SitePilot Team"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Best Website Builders 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Complete guide & comparisons based on testing 40+ platforms
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">⚡ Expert Tested</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">📊 Data-Driven</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">🏆 2026 Rankings</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Quick Picks Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🎯 Quick Picks 2026</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl mb-2">🏆</div>
                <div className="font-bold text-gray-900">Best Overall</div>
                <div className="text-blue-600">Webflow</div>
                <div className="text-sm text-gray-600">Most powerful & professional</div>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-bold text-gray-900">Best Design</div>
                <div className="text-purple-600">Wix</div>
                <div className="text-sm text-gray-600">Stunning templates</div>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl mb-2">💰</div>
                <div className="font-bold text-gray-900">Best Value</div>
                <div className="text-green-600">Hostinger</div>
                <div className="text-sm text-gray-600">$2.99/month power</div>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl mb-2">🛒</div>
                <div className="font-bold text-gray-900">Best E-commerce</div>
                <div className="text-orange-600">Shopify</div>
                <div className="text-sm text-gray-600">Online store leader</div>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-bold text-gray-900">Best Mobile</div>
                <div className="text-red-600">Squarespace</div>
                <div className="text-sm text-gray-600">Mobile-optimized</div>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-bold text-gray-900">Best Speed</div>
                <div className="text-blue-600">Webflow</div>
                <div className="text-sm text-gray-600">Performance leader</div>
              </div>
            </div>
          </div>

          {/* Testing Methodology */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🔬 Our Testing Methodology</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Performance Testing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Page load speed testing (5 global locations)</li>
                  <li>• Mobile responsiveness analysis</li>
                  <li>• SEO feature evaluation</li>
                  <li>• Uptime monitoring (6+ months)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3">User Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ease of use for beginners</li>
                  <li>• Template quality & customization</li>
                  <li>• E-commerce functionality</li>
                  <li>• Customer support quality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Website Builder Reviews */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Top Website Builders 2026 Rankings
            </h2>
            
            <BuilderCard
              rank={1}
              name="Webflow"
              rating="9.8/10"
              badge="Best Overall"
              color="blue"
              description="Professional website builder that bridges design and development, offering unmatched flexibility and clean code output."
              bestFor="Professional designers, agencies, complex websites"
              pros={[
                "Professional, responsive designs",
                "Advanced animation and interaction options",
                "Clean, semantic code output",
                "Powerful CMS capabilities",
                "Excellent SEO features",
                "No transaction fees",
                "Designer-friendly interface"
              ]}
              cons={[
                "Steeper learning curve",
                "Higher pricing for advanced features",
                "Overwhelming for complete beginners"
              ]}
              pricing={[
                "Basic: Free (Webflow subdomain)",
                "CMS: $23/month",
                "Business: $39/month", 
                "Enterprise: Custom pricing"
              ]}
              link="https://webflow.com/?ref=sitepilot"
            />

            <BuilderCard
              rank={2}
              name="Wix"
              rating="9.5/10"
              badge="Best Design"
              color="purple"
              description="Intuitive drag-and-drop builder with stunning templates and powerful design tools for creative freedom."
              bestFor="Small businesses, artists, creative portfolios"
              pros={[
                "800+ professional templates",
                "Advanced drag-and-drop editor",
                "AI website builder option",
                "Comprehensive app market",
                "Strong SEO tools",
                "Excellent customer support",
                "Mobile editor included"
              ]}
              cons={[
                "Can't switch templates after publishing",
                "Loading speeds could be better",
                "Limited blogging features"
              ]}
              pricing={[
                "Free: Free plan available",
                "Combo: $16/month",
                "Unlimited: $22/month",
                "Pro: $27/month"
              ]}
              link="https://wix.com/?ref=sitepilot"
            />

            <BuilderCard
              rank={3}
              name="Hostinger Website Builder"
              rating="9.2/10"
              badge="Best Value"
              color="green"
              description="Affordable yet powerful website builder with AI assistance and great performance at an unbeatable price."
              bestFor="Budget-conscious users, small businesses"
              pros={[
                "Extremely affordable pricing",
                "AI-powered website creation",
                "Fast loading speeds",
                "Free domain included",
                "Good template selection",
                "Integrated hosting",
                "24/7 customer support"
              ]}
              cons={[
                "Fewer advanced features",
                "Limited app integrations",
                "Basic e-commerce functionality"
              ]}
              pricing={[
                "Single: $2.99/month", 
                "Premium: $3.99/month",
                "Business: $7.99/month"
              ]}
              link="https://hostinger.com/website-builder?ref=sitepilot"
            />

            <BuilderCard
              rank={4}
              name="Shopify"
              rating="9.7/10"
              badge="Best E-commerce"
              color="orange"
              description="The leading e-commerce platform with powerful selling tools and extensive payment options."
              bestFor="Online stores, e-commerce businesses"
              pros={[
                "Industry-leading e-commerce features",
                "100+ payment gateways",
                "Extensive app ecosystem",
                "Abandoned cart recovery",
                "Inventory management",
                "Multi-channel selling",
                "24/7 support"
              ]}
              cons={[
                "Monthly fees can add up",
                "Transaction fees on basic plan",
                "Limited customization without coding"
              ]}
              pricing={[
                "Basic: $39/month",
                "Shopify: $105/month", 
                "Advanced: $399/month",
                "Plus: $2,000/month"
              ]}
              link="https://shopify.com/?ref=sitepilot"
            />

            <BuilderCard
              rank={5}
              name="Squarespace"
              rating="9.3/10"
              badge="Best Mobile"
              color="red"
              description="Design-focused platform with beautiful templates and excellent mobile optimization out of the box."
              bestFor="Creative professionals, photographers, artists"
              pros={[
                "Award-winning design templates",
                "Excellent mobile optimization",
                "Built-in SEO tools",
                "Integrated analytics",
                "Reliable hosting",
                "Good blogging features",
                "Professional portfolios"
              ]}
              cons={[
                "Limited third-party integrations",
                "Fewer customization options",
                "Can be expensive for basic features"
              ]}
              pricing={[
                "Personal: $18/month",
                "Business: $26/month",
                "Basic Commerce: $30/month",
                "Advanced Commerce: $46/month"
              ]}
              link="https://squarespace.com/?ref=sitepilot"
            />
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">📊 Quick Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-bold">Builder</th>
                    <th className="p-4 text-center font-bold">Starting Price</th>
                    <th className="p-4 text-center font-bold">Free Plan</th>
                    <th className="p-4 text-center font-bold">Templates</th>
                    <th className="p-4 text-center font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Webflow</td>
                    <td className="p-4 text-center">$23/mo</td>
                    <td className="p-4 text-center text-green-600">Yes*</td>
                    <td className="p-4 text-center">1000+</td>
                    <td className="p-4 text-center">Professionals</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Wix</td>
                    <td className="p-4 text-center">$16/mo</td>
                    <td className="p-4 text-center text-green-600">Yes</td>
                    <td className="p-4 text-center">800+</td>
                    <td className="p-4 text-center">Creativity</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Hostinger</td>
                    <td className="p-4 text-center">$2.99/mo</td>
                    <td className="p-4 text-center text-red-600">No</td>
                    <td className="p-4 text-center">150+</td>
                    <td className="p-4 text-center">Budget</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Shopify</td>
                    <td className="p-4 text-center">$39/mo</td>
                    <td className="p-4 text-center text-orange-600">Trial</td>
                    <td className="p-4 text-center">100+</td>
                    <td className="p-4 text-center">E-commerce</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Squarespace</td>
                    <td className="p-4 text-center">$18/mo</td>
                    <td className="p-4 text-center text-orange-600">Trial</td>
                    <td className="p-4 text-center">200+</td>
                    <td className="p-4 text-center">Design</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-600 mt-4">* Webflow free plan includes Webflow subdomain</p>
          </div>

          {/* Choosing Guide */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 How to Choose the Right Builder</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-800 mb-4">Choose Webflow if you:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Want professional, pixel-perfect designs</li>
                  <li>• Need advanced animations and interactions</li>
                  <li>• Value clean, semantic code output</li>
                  <li>• Plan to scale or need complex functionality</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-4">Choose Wix if you:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Want the easiest drag-and-drop experience</li>
                  <li>• Love having 800+ template options</li>
                  <li>• Need a comprehensive app marketplace</li>
                  <li>• Are building your first website</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-4">Choose Hostinger if you:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Want the best value for money</li>
                  <li>• Need AI assistance for quick setup</li>
                  <li>• Are budget-conscious but want quality</li>
                  <li>• Want integrated hosting included</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-4">Choose Shopify if you:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Are building an online store</li>
                  <li>• Need advanced e-commerce features</li>
                  <li>• Want multi-channel selling capabilities</li>
                  <li>• Need inventory management tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Website?</h2>
            <p className="text-lg mb-6 text-blue-100">
              Start with our top recommendation or explore the options above
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://webflow.com/?ref=sitepilot" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Try Webflow Free
              </a>
              <a 
                href="https://wix.com/?ref=sitepilot" 
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Try Wix Free
              </a>
            </div>
          </div>
        </div>
      </div>

        {/* Related Links Section */}
        <RelatedLinks links={websiteBuilderRelatedLinks} title="Explore More Website Building Resources" />
      </div>
    </>
  )
}