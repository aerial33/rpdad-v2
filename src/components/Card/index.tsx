'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Emplois, Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { Calendar, UserRound } from 'lucide-react'

export type CardPostData =
  | Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'publishedAt' | 'populatedAuthors'>
  | Pick<
      Emplois,
      | 'slug'
      | 'categories'
      | 'meta'
      | 'title'
      | 'location'
      | 'organization'
      | 'status'
      | 'publishedAt'
    >

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts' | 'emplois'
  showCategories?: boolean
  title?: string
  variant?: 'default' | 'featured' | 'grid'
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps, variant = 'default' } = props

  const { slug, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  // Handle categories for both posts and emplois
  const categories = doc && 'categories' in doc ? doc.categories : undefined
  const location = doc && 'location' in doc ? doc.location : undefined
  const organization = doc && 'organization' in doc ? doc.organization : undefined
  const status = doc && 'status' in doc ? doc.status : undefined
  const publishedAt = doc && 'publishedAt' in doc ? doc.publishedAt : undefined
  const populateAuthors = doc && 'populatedAuthors' in doc ? doc.populatedAuthors : undefined

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
      <span
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${config.color}`}
      >
        {config.label}
      </span>
    )
  }

  const getCardBodyPadding = () => {
    switch (variant) {
      case 'featured':
        return 'p-[40px] xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem] max-md:pb-4'
      case 'grid':
        return 'p-[40px] xl:!p-[1.75rem_1.75rem_1rem_1.75rem] lg:!p-[1.75rem_1.75rem_1rem_1.75rem] md:!p-[1.75rem_1.75rem_1rem_1.75rem] max-md:pb-4'
      default:
        return 'p-[40px] xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem] max-md:pb-4'
    }
  }

  const getCardFooterPadding = () => {
    switch (variant) {
      case 'featured':
        return 'xl:!p-[1.25rem_2.5rem_1.25rem] lg:!p-[1.25rem_2.5rem_1.25rem] md:!p-[1.25rem_2.5rem_1.25rem] p-[18px_40px]'
      case 'grid':
        return 'xl:!p-[1.25rem_1.75rem_1.25rem] lg:!p-[1.25rem_1.75rem_1.25rem] md:!p-[1.25rem_1.75rem_1.25rem] p-[18px_40px]'
      default:
        return 'xl:!p-[1.25rem_2.5rem_1.25rem] lg:!p-[1.25rem_2.5rem_1.25rem] md:!p-[1.25rem_2.5rem_1.25rem] p-[18px_40px]'
    }
  }

  const getImageClasses = () => {
    switch (variant) {
      case 'featured':
        return 'w-full object-cover !transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 hover:brightness-50'
      case 'grid':
        return 'h-48 object-cover !transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 hover:brightness-50'
      default:
        return 'h-48 object-cover !transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 hover:brightness-50'
    }
  }

  return (
    <article
      className={cn(
        'card shadow-card rounded-xl relative hover:cursor-pointer overflow-hidden',
        className,
      )}
      ref={card.ref}
    >
      <figure className="rounded-t-xl overlay overlay-1 hover-scale group">
        <Link href={href} className="hover:text-primary">
          {!metaImage && (
            <div className={`bg-gray-200 flex items-center justify-center ${variant === 'featured' ? 'h-64' : 'h-48'}`}>No image 📷</div>
          )}
          {metaImage && typeof metaImage !== 'string' && (
            <Media
              resource={metaImage}
              className={getImageClasses()}
            />
          )}
        </Link>
        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
          <span className="absolute text-xl font-medium text-white left-0 top-1/2 w-full -translate-y-[80%] opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-1/2 !mb-0 p-[.75rem_1rem]">
            {relationTo === 'posts' ? 'Lire notre article' : "Voir l'offre"}
          </span>
        </figcaption>
      </figure>
      <div className={`card-body flex-[1_1_auto] ${getCardBodyPadding()}`}>
        <div className="post-header !mb-[.9rem]">
          {/* Categories for posts */}
          {relationTo === 'posts' && showCategories && hasCategories && (
            <div className="inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
              {categories?.map((category, index) => {
                if (typeof category === 'object') {
                  const { title: titleFromCategory } = category
                  const categoryTitle = titleFromCategory || 'Untitled category'
                  const isLast = index === categories.length - 1

                  return (
                    <Fragment key={index}>
                      <Link href={`#`} className="hover" rel="category">
                        {categoryTitle}
                      </Link>
                      {!isLast && <Fragment>, &nbsp;</Fragment>}
                    </Fragment>
                  )
                }
                return null
              })}
            </div>
          )}

          {/* Categories and status for emplois */}
          {relationTo === 'emplois' && (
            <div className="inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
              {categories && Array.isArray(categories) && categories.length > 0 && (
                <>
                  {categories.map((category, index) => {
                    const categoryTitle = typeof category === 'object' ? category.title : category
                    const isLast = index === categories.length - 1
                    return (
                      <Fragment key={index}>
                        <Link href={`#`} className="hover" rel="category">
                          {categoryTitle}
                        </Link>
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    )
                  })}
                </>
              )}
              <div className="flex items-center gap-2 ml-2">{status && getStatusBadge(status)}</div>
            </div>
          )}

          {titleToUse && (
            <h3 className="post-title text-3xl font-bold !mt-1 !leading-[1.35] !mb-0">
              <Link className="text-gray-700 hover:text-primary" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          )}
        </div>

        <div className="!relative">
          {description && <p className="line-clamp-5">{sanitizedDescription}</p>}

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
        </div>
      </div>

      {/* Card footer */}
      <div className={`card-footer ${getCardFooterPadding()}`}>
        <ul className=" m-0 p-0 list-none flex gap-2 !mb-0 text-xs text-muted-foreground">
          {publishedAt && (
            <li className="flex items-center gap-1">
              <Calendar size={16} />
              <span>
                {new Date(publishedAt).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </li>
          )}
          <span> | </span>
          {relationTo === 'posts' &&
            populateAuthors &&
            Array.isArray(populateAuthors) &&
            populateAuthors.length > 0 && (
              <li className="flex items-center gap-1">
                <UserRound size={16} />
                <span>
                  Par{' '}
                  {typeof populateAuthors[0] === 'object'
                    ? populateAuthors[0].name
                    : populateAuthors[0]}
                </span>
              </li>
            )}
        </ul>
      </div>
    </article>
  )
}
