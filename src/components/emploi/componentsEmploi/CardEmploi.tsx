'use client'

import { FC, useState } from 'react'

import { Media as MediaComponent } from '@/components/Media'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import type { EmploiItem } from '../types'
import MediaVideoEmploi from './MediaVideoEmploi'

export interface Card11Props {
  className?: string
  post: EmploiItem
  ratio?: string
  hiddenAuthor?: boolean
}

const formatDate = (dateString: string | null | undefined) => {
  if (!dateString) return 'Date non spécifiée'

  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const Card11: FC<Card11Props> = ({
  className = 'h-full',
  post,
  hiddenAuthor = false,
  ratio = 'aspect-video',
}) => {
  const { title, category, id, location, slug, publishedAt, meta, featuredImage } = post

  // Vérifier si featuredImage est un objet Media complet
  const isImagePopulated =
    featuredImage && typeof featuredImage === 'object' && 'url' in featuredImage

  // Vérifier si c'est une vidéo
  const isVideo =
    featuredImage &&
    typeof featuredImage === 'object' &&
    'mimeType' in featuredImage &&
    featuredImage.mimeType?.includes('video')

  const [isHover, setIsHover] = useState(false)

  return (
    <div
      className={`nc-Card11 relative flex flex-col h-full group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      //
    >
      <div
        className={`block flex-shrink-0 relative w-full h-48 rounded-t-3xl overflow-hidden z-10 ${ratio}`}
      >
        {isVideo ? (
          <MediaVideoEmploi resource={featuredImage} isHover={isHover} className="w-full h-full" />
        ) : isImagePopulated ? (
          <MediaComponent resource={featuredImage} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Aucune image</span>
          </div>
        )}
      </div>
      <Link href={`/emplois/${slug || '#'}`} className="absolute inset-0"></Link>
      <span className="absolute top-3  left-4  z-10">
        <Badge variant="outline" className="text-xs text-white">
          {category}
        </Badge>
        {/* <CategoryBadgeList categories={category} /> */}
      </span>

      <div className="p-4 flex flex-col flex-1 space-y-3">
        <span className="text-xs text-neutral-500">{formatDate(publishedAt)}</span>

        <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 flex-1">
          <span className="line-clamp-2" title={title}>
            {title}
          </span>
        </h3>

        <div className="flex items-end justify-between mt-auto">
          <p className="text-sm text-neutral-500">Voir l'offre</p>
        </div>
      </div>
    </div>
  )
}

export default Card11
