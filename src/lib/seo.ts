import type { Metadata } from 'next'

const SITE_URL = 'https://sitepilot.co'
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`
const MAX_TITLE_LENGTH = 60
const MAX_DESCRIPTION_LENGTH = 155

function trimToWordBoundary(value: string, maxLength: number) {
  const normalized = value.replace(/\s+/g, ' ').trim()
  if (normalized.length <= maxLength) return normalized

  const sentence = normalized.slice(0, maxLength).match(/^.*[.!?](?=\s|$)/)?.[0]?.trim()
  if (sentence && sentence.length >= Math.floor(maxLength * 0.65)) return sentence

  const truncated = normalized.slice(0, maxLength - 1).replace(/\s+\S*$/, '').trim()
  const clean = truncated.replace(/[,:;|&–—-]+$/, '').trim()
  return `${clean}…`
}

export function normalizeSeoText(value: string, maxLength: number) {
  return trimToWordBoundary(value, maxLength)
}

export function normalizeMetadata(metadata: Metadata): Metadata {
  const title = typeof metadata.title === 'string'
    ? normalizeSeoText(metadata.title, MAX_TITLE_LENGTH)
    : metadata.title
  const description = typeof metadata.description === 'string'
    ? normalizeSeoText(metadata.description, MAX_DESCRIPTION_LENGTH)
    : metadata.description

  const openGraph = metadata.openGraph && typeof metadata.openGraph === 'object'
    ? {
        ...metadata.openGraph,
        ...(typeof title === 'string' ? { title } : {}),
        ...(typeof description === 'string' ? { description } : {}),
        images: [DEFAULT_OG_IMAGE],
      }
    : {
        images: [DEFAULT_OG_IMAGE],
      }

  const twitter = metadata.twitter && typeof metadata.twitter === 'object'
    ? {
        ...metadata.twitter,
        card: 'summary_large_image' as const,
        ...(typeof title === 'string' ? { title } : {}),
        ...(typeof description === 'string' ? { description } : {}),
        images: [DEFAULT_OG_IMAGE],
      }
    : {
        card: 'summary_large_image' as const,
        ...(typeof title === 'string' ? { title } : {}),
        ...(typeof description === 'string' ? { description } : {}),
        images: [DEFAULT_OG_IMAGE],
      }

  return {
    ...metadata,
    ...(title !== undefined ? { title } : {}),
    ...(description !== undefined ? { description } : {}),
    openGraph,
    twitter,
  }
}

export const seoLimits = {
  title: MAX_TITLE_LENGTH,
  description: MAX_DESCRIPTION_LENGTH,
}
