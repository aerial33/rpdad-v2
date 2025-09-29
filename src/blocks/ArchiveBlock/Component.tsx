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

    let whereClause = {}

    // Handle filtering based on collection type
    if (categories && categories.length > 0) {
      const flattenedCategories = categories.map((category) => {
        if (typeof category === 'object') return category.id
        else return category
      })

      if (relationTo === 'posts') {
        whereClause = {
          categories: {
            in: flattenedCategories,
          },
        }
      } else if (relationTo === 'emplois') {
        // For emplois, we need to filter by categories as well
        // assuming the emploi collection will be updated to use categories relationship
        whereClause = {
          categories: {
            in: flattenedCategories,
          },
        }
      }
    }

    const fetchedDocs = await payload.find({
      collection: relationTo,
      depth: 1,
      limit,
      ...(Object.keys(whereClause).length > 0 ? { where: whereClause } : {}),
    })

    documents = fetchedDocs.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedDocs = selectedDocs.map((doc) => {
        if (typeof doc.value === 'object') return doc.value
      }).filter(Boolean) as (Post | Emplois)[]

      documents = filteredSelectedDocs
    }
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
