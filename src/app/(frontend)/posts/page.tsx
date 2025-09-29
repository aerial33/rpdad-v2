import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { FadeLeft } from '@/components/motion/animations'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import { Badge } from '@/components/ui/badge'
import { getCachedSidebarProps } from '@/utilities/getSidebar'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      publishedAt: true,
      populatedAuthors: true,
      authors: true,
      heroImage: true,
    },
  })

  // Fetch sidebar data (featured posts + categories with count)
  const sidebarProps = await getCachedSidebarProps('posts')()

  return (
    <div className="mt-4">
      <PageClient />
      <header className="relative pt-16 z-10 md:py-20  shadow-xs  bg-gradient-to-tr from-flamingo-lighter to-flamingo-lightest">
        <div className="container mx-auto relative z-10  max-w-screen-md">
          <div className="max-w-screen-md">
            <FadeLeft delay={0.1} duration={0.3}>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Badge>
                  {' '}
                  <PageRange
                    collection="posts"
                    currentPage={posts.page}
                    limit={12}
                    totalDocs={posts.totalDocs}
                  />
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold  mb-10 text-balance leading-tight">
                {"L'Actualité du réseau en gironde"}
              </h1>
            </FadeLeft>
          </div>
        </div>
      </header>

      <div className="container mb-8"></div>

      <CollectionArchive posts={posts.docs} sidebarProps={sidebarProps} />

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
