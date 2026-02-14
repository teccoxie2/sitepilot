interface SchemaMarkupProps {
  type?: 'website' | 'article' | 'review'
  title?: string
  description?: string
  url?: string
  imageUrl?: string
  publishedDate?: string
  modifiedDate?: string
  authorName?: string
  reviewRating?: number
  reviewCount?: number
}

export default function SchemaMarkup({
  type = 'website',
  title = 'SitePilot - Your Guide to Building Websites That Work',
  description = 'Expert reviews and guides on web hosting, AI tools, and website builders.',
  url = 'https://sitepilot.co',
  imageUrl = 'https://sitepilot.co/og-image.jpg',
  publishedDate,
  modifiedDate,
  authorName = 'SitePilot Team',
  reviewRating,
  reviewCount
}: SchemaMarkupProps) {
  
  const getSchemaData = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type === 'website' ? 'WebSite' : type === 'article' ? 'Article' : 'Review',
      name: title,
      description,
      url,
      image: imageUrl,
      publisher: {
        '@type': 'Organization',
        name: 'SitePilot',
        url: 'https://sitepilot.co',
        logo: {
          '@type': 'ImageObject',
          url: 'https://sitepilot.co/logo.png'
        }
      }
    }

    if (type === 'article' || type === 'review') {
      return {
        ...baseSchema,
        headline: title,
        author: {
          '@type': 'Person',
          name: authorName
        },
        datePublished: publishedDate,
        dateModified: modifiedDate || publishedDate,
        ...(type === 'review' && reviewRating && {
          reviewRating: {
            '@type': 'Rating',
            ratingValue: reviewRating,
            bestRating: 5,
            worstRating: 1
          },
          ...(reviewCount && {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: reviewRating,
              reviewCount: reviewCount,
              bestRating: 5,
              worstRating: 1
            }
          })
        })
      }
    }

    if (type === 'website') {
      return {
        ...baseSchema,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://sitepilot.co/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      }
    }

    return baseSchema
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchemaData())
      }}
    />
  )
}