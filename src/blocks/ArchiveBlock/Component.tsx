import type { ArchiveBlock as ArchiveBlockProps, Post, Emplois } from '@/payload-types'

import RichText from '@/components/RichText'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { CollectionArchive } from '@/components/CollectionArchive'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const {
    id,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    relationTo = 'posts',
    selectedDocs
  } = props

  const limit = limitFromProps || 3

  let documents: (Post | Emplois)[] = []

  if (populateBy === 'collection' && relationTo) {
    const payload = await getPayload({ config: configPromise })

    // Build where clause for category filtering
    const flattenedCategories = categories && categories.length > 0
      ? categories.map((category) =>
          typeof category === 'object' ? category.id : category
        )
      : []

    const fetchedDocs = await payload.find({
      collection: relationTo,
      depth: 1,
      limit,
      ...(flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    documents = fetchedDocs.docs
  } else if (selectedDocs?.length) {
    documents = selectedDocs
      .map((doc) => typeof doc.value === 'object' ? doc.value : null)
      .filter((doc): doc is Post | Emplois => doc !== null)
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText className="ms-0 max-w-[32rem]" data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionArchive posts={documents} relationTo={relationTo || 'posts'} />
    </div>
  )
}
