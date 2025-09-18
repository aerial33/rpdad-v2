'use client'

import MediaIcon, { MediaIconType } from '@/components/FeaturedMedia/MediaIcon'
import { Media as MediaComponent } from '@/components/Media'
import { FC } from 'react'
import type { EmploiItem } from '../types'
import MediaVideoEmploi from './MediaVideoEmploi'

export interface MediaDisplayEmploiProps {
  className?: string
  emploi: EmploiItem
  isHover?: boolean
}

const MediaDisplayEmploi: FC<MediaDisplayEmploiProps> = ({
  className = 'w-full h-full',
  emploi,
  isHover = false,
}) => {
  const { featuredImage } = emploi

  // Vérifier si featuredImage est un objet Media complet
  const isImagePopulated =
    featuredImage && typeof featuredImage === 'object' && 'url' in featuredImage

  // Vérifier si c'est une vidéo
  const isVideo =
    featuredImage &&
    typeof featuredImage === 'object' &&
    'mimeType' in featuredImage &&
    featuredImage.mimeType?.includes('video')

  // Vérifier si c'est une galerie (pour l'instant, on ne gère que les images simples)
  const isGallery = false // À implémenter si nécessaire

  // Déterminer le type de média
  const getMediaType = (): 'standard' | 'video' | 'audio' | 'gallery' => {
    if (isVideo) return 'video'
    if (isGallery) return 'gallery'
    return 'standard'
  }

  const mediaType = getMediaType()

  const getMediaIconType = (): MediaIconType | undefined => {
    if (mediaType === 'video' || mediaType === 'audio' || mediaType === 'gallery') {
      return mediaType as MediaIconType
    }
    return undefined
  }

  const renderContent = () => {
    // VIDEO - Affichage de la vidéo au hover
    if (mediaType === 'video' && isVideo && isHover) {
      return (
        <MediaVideoEmploi
          resource={featuredImage}
          isHover={isHover}
          className="absolute inset-0 z-20"
        />
      )
    }

    // ICON pour les vidéos (quand pas en hover) - Icône de lecture superposée
    if (mediaType === 'video' && !isHover) {
      return (
        <span className="absolute inset-0 flex items-center justify-center z-10">
          <MediaIcon
            className="hover:scale-105 transform cursor-pointer transition-transform"
            iconType="video"
          />
        </span>
      )
    }

    return null
  }

  // Si pas de média, afficher un placeholder
  if (!isImagePopulated && !isVideo) {
    return (
      <div className={`relative bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Aucune image</span>
      </div>
    )
  }

  return (
    <div className={`nc-MediaDisplayEmploi relative ${className}`}>
      {/* Image de fond - TOUJOURS affichée (même pour les vidéos comme image de présentation) */}
      {mediaType !== 'gallery' && isImagePopulated && (
        <MediaComponent resource={featuredImage} fill className="object-cover" />
      )}

      {/* Contenu superposé (vidéo, icônes, etc.) */}
      {renderContent()}

      {/* Overlay pour les images standard */}
      {mediaType === 'standard' && (
        <div className="absolute inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100" />
      )}

      {/* Overlay pour les vidéos (quand pas en hover) */}
      {mediaType === 'video' && !isHover && (
        <div className="absolute inset-0 bg-black/30 transition-opacity" />
      )}
    </div>
  )
}

export default MediaDisplayEmploi
