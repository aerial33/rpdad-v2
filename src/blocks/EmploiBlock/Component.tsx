import { EmploiGrid, EmploiItem } from '@/components/emploi/EmploiGrid'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Config } from 'src/payload-types'

type EmploiBlockProps = {
  heading?: string
  subheading?: string
  badgeText?: string
  populateBy?: 'automatic' | 'selection'
  limit?: number
  selectedEmplois?: Array<{
    id: string
    title: string
    slug: string
    category: string
    location: string
    subtitle: string
    featuredImage: {
      url: string
      alt: string
      width: number
      height: number
    }
  }>
  categories?: Array<{
    id: string
  }>
}

async function getEmplois(props: EmploiBlockProps): Promise<EmploiItem[]> {
  const { populateBy, limit = 6, selectedEmplois = [], categories = [] } = props

  // Si nous avons déjà des emplois sélectionnés
  if (populateBy === 'selection' && selectedEmplois?.length > 0) {
    return selectedEmplois.map((emploi) => ({
      id: emploi.id,
      title: emploi.title,
      summary: emploi.subtitle,
      slug: emploi.slug,
      category: emploi.category,
      location: emploi.location,
      image: emploi.featuredImage
        ? {
            url: emploi.featuredImage.url,
            alt: emploi.featuredImage.alt,
            width: emploi.featuredImage.width,
            height: emploi.featuredImage.height,
          }
        : undefined,
    }))
  }

  // Sinon, nous récupérons les emplois de manière automatique
  const payload = await getPayload({ config: configPromise })

  const where: any = {
    status: {
      equals: 'active',
    },
  }

  // Ajouter un filtre par catégories si nécessaire
  if (categories?.length > 0) {
    where.category = {
      in: categories.map((cat) => cat.id),
    }
  }

  const emplois = await payload.find({
    collection: 'emplois' as keyof Config['collections'],
    depth: 1,
    limit,
    sort: '-publishedAt',
    where,
  })

  return emplois.docs.map((emploi: any) => {
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
    }
  })
}

export async function EmploiBlock(props: EmploiBlockProps) {
  const { heading, subheading, badgeText } = props
  const emplois = await getEmplois(props)

  return (
    <EmploiGrid heading={heading} subheading={subheading} badgeText={badgeText} emplois={emplois} />
  )
}
