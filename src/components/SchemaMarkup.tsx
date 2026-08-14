interface SchemaMarkupProps {
  type?: 'website' | 'article' | 'review' | 'custom'
  title?: string
  description?: string
  url?: string
  imageUrl?: string
  publishedDate?: string
  modifiedDate?: string
  authorName?: string
  reviewRating?: number
  reviewCount?: number
  data?: Record<string, unknown>
}

export default function SchemaMarkup({
  type = 'website',
  title = 'SitePilot - Your Guide to Building Websites That Work',
  description = 'Expert reviews and guides on web hosting, AI tools, and website builders.',
  url = 'https://sitepilot.co',
  imageUrl,
  publishedDate,
  modifiedDate,
  authorName = 'SitePilot Team',
  reviewRating,
  reviewCount,
  data,
}: SchemaMarkupProps) {
  
  const schemaType = type === 'website'
    ? 'WebSite'
    : type === 'article'
      ? 'Article'
      : type === 'review'
        ? 'Review'
        : typeof data?.['@type'] === 'string'
          ? data['@type']
          : 'WebPage'

  const getSchemaData = () => {
    if (data) {
      const customSchema = {
        '@context': 'https://schema.org',
        '@type': schemaType,
        name: title,
        description,
        url,
        ...(imageUrl ? { image: imageUrl } : {}),
        ...data,
      }

      if (schemaType === 'Article' || schemaType === 'Review') {
        return {
          ...customSchema,
          author: data.author || {
            '@type': 'Person',
            name: authorName,
          },
          publisher: data.publisher || {
            '@type': 'Organization',
            name: 'SitePilot',
            url: 'https://sitepilot.co',
          },
        }
      }

      return customSchema
    }

    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: title,
      description,
      url,
      ...(imageUrl ? { image: imageUrl } : {}),
      publisher: {
        '@type': 'Organization',
        name: 'SitePilot',
        url: 'https://sitepilot.co',
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
