import { EmploiGrid, EmploiItem } from './EmploiGrid'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

async function getEmplois(limit = 6) {
  const payload = await getPayload({ config: configPromise })

  const emplois = await payload.find({
    collection: 'emplois',
    depth: 1,
    limit,
    sort: '-publishedAt',
    where: {
      status: {
        equals: 'active',
      },
    },
  })

  return emplois.docs.map((emploi) => {
    const featuredImage = emploi.featuredImage as any

    return {
      id: emploi.id,
      title: emploi.title as string,
      summary: emploi.subtitle as string,
      slug: emploi.slug as string,
      category: emploi.category as string,
      location: emploi.location as string,
      image: featuredImage
        ? {
            url: featuredImage.url as string,
            alt: featuredImage.alt as string,
            width: featuredImage.width as number,
            height: featuredImage.height as number,
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
