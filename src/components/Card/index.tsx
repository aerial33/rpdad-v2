'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post, Emplois } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'> | Pick<Emplois, 'slug' | 'category' | 'meta' | 'title' | 'location' | 'organization' | 'status'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts' | 'emplois'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  // Handle categories for posts and category for emplois
  const categories = doc && 'categories' in doc ? doc.categories : undefined
  const category = doc && 'category' in doc ? doc.category : undefined
  const location = doc && 'location' in doc ? doc.location : undefined
  const organization = doc && 'organization' in doc ? doc.organization : undefined
  const status = doc && 'status' in doc ? doc.status : undefined

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  const getCategoryLabel = (category: string) => {
    const categoryMap = {
      cdi: 'CDI',
      cdd: 'CDD',
      stage: 'Stage',
      alternance: 'Alternance',
      benevolat: 'Bénévolat',
    }
    return categoryMap[category as keyof typeof categoryMap] || category
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: 'Active', color: 'bg-green-500' },
      filled: { label: 'Pourvue', color: 'bg-gray-500' },
      expired: { label: 'Expirée', color: 'bg-red-500' },
    }
    const config = statusConfig[status as keyof typeof statusConfig] || {
      label: status,
      color: 'bg-gray-500',
    }
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${config.color}`}>
        {config.label}
      </span>
    )
  }

  return (
    <article
      className={cn(
        'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full ">
        {!metaImage && <div className="">No image</div>}
        {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
      </div>
      <div className="p-4">
        {/* Categories for posts */}
        {relationTo === 'posts' && showCategories && hasCategories && (
          <div className="uppercase text-sm mb-4">
            <div>
              {categories?.map((category, index) => {
                if (typeof category === 'object') {
                  const { title: titleFromCategory } = category

                  const categoryTitle = titleFromCategory || 'Untitled category'

                  const isLast = index === categories.length - 1

                  return (
                    <Fragment key={index}>
                      {categoryTitle}
                      {!isLast && <Fragment>, &nbsp;</Fragment>}
                    </Fragment>
                  )
                }

                return null
              })}
            </div>
          </div>
        )}
        
        {/* Category and status for emplois */}
        {relationTo === 'emplois' && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {category && (
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {getCategoryLabel(category)}
              </span>
            )}
            {status && getStatusBadge(status)}
          </div>
        )}
        
        {titleToUse && (
          <div className="prose">
            <h3>
              <Link className="not-prose" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        
        {/* Additional info for emplois */}
        {relationTo === 'emplois' && (
          <div className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            {location && (
              <div className="flex items-center gap-1">
                <span className="font-medium">📍</span>
                <span>{location}</span>
              </div>
            )}
            {organization && (
              <div className="flex items-center gap-1">
                <span className="font-medium">🏢</span>
                <span>{organization}</span>
              </div>
            )}
          </div>
        )}
        
        {description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>}
      </div>
    </article>
  )
}
