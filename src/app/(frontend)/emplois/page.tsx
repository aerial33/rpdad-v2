import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const emplois = await payload.find({
    collection: 'emplois',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      category: true,
      location: true,
      organization: true,
      status: true,
      publishedAt: true,
      meta: true,
    },
    where: {
      status: {
        equals: 'active',
      },
    },
    sort: '-publishedAt',
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Offres d'emploi</h1>
          <p>Découvrez les dernières opportunités professionnelles dans le réseau RPDAD en Gironde.</p>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="emplois"
          currentPage={emplois.page}
          limit={12}
          totalDocs={emplois.totalDocs}
        />
      </div>

      <CollectionArchive posts={emplois.docs} relationTo="emplois" />

      <div className="container">
        {emplois.totalPages > 1 && emplois.page && (
          <Pagination
            page={emplois.page}
            totalPages={emplois.totalPages}
            collection="emplois"
          />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Offres d\'emploi - RPDAD Gironde',
    description: 'Découvrez les dernières opportunités professionnelles dans le réseau RPDAD en Gironde.',
  }
}
