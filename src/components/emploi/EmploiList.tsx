import { EmploiGrid } from './EmploiGrid'
import type { EmploiItem, EmploiListProps } from './types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Config } from 'src/payload-types'

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

  return emplois.docs.map((emploi: any) => {
    const featuredImage = emploi.featuredImage

    return {
      id: emploi.id,
      title: emploi.title,
      subtitle: emploi.subtitle,
      slug: emploi.slug,
      category: emploi.category,
      location: emploi.location,
      organization: emploi.organization,
      publishedAt: emploi.publishedAt,
      image: featuredImage
        ? {
            url: featuredImage.url,
            alt: featuredImage.alt,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        : undefined,
      meta: {
        description: emploi.subtitle
      }
    } as EmploiItem
  })
}


export async function EmploiList({ limit = 6, heading, subheading, badgeText }: EmploiListProps) {
  const emplois = await getEmplois(limit)

  return (
    <EmploiGrid heading={heading} subheading={subheading} badgeText={badgeText} emplois={emplois} />
  )
}
