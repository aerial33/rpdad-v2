import { EmploiGrid, EmploiItem } from './EmploiGrid'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Config } from 'src/payload-types'

// Définition du type pour un emploi dans la collection
type EmploiDocument = {
  id: string
  title: string
  subtitle?: string
  slug?: string
  category?: string
  location?: string
  featuredImage?: {
    url: string
    alt: string
    width: number
    height: number
  }
}

async function getEmplois(limit = 6) {
  const payload = await getPayload({ config: configPromise })

  const emplois = await payload.find({
    collection: 'emplois' as keyof Config['collections'],
    depth: 1,
    limit,
    sort: '-publishedAt',
    where: {
      status: {
        equals: 'active',
      },
    },
  })

  // Utiliser une assertion de type pour les documents retournés
  return (emplois.docs as unknown as EmploiDocument[]).map((emploi) => {
    const featuredImage = emploi.featuredImage

    return {
      id: emploi.id,
      title: emploi.title,
      summary: emploi.subtitle,
      slug: emploi.slug,
      category: emploi.category,
      location: emploi.location,
      image: featuredImage
        ? {
            url: featuredImage.url,
            alt: featuredImage.alt,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        : undefined,
    } as EmploiItem
  })
}

type EmploiListProps = {
  limit?: number
  heading?: string
  subheading?: string
  badgeText?: string
}

export async function EmploiList({ limit = 6, heading, subheading, badgeText }: EmploiListProps) {
  const emplois = await getEmplois(limit)

  return (
    <EmploiGrid heading={heading} subheading={subheading} badgeText={badgeText} emplois={emplois} />
  )
}
