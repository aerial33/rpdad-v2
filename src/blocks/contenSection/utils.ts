import { ArrowLeft, ArrowRight, Download, ExternalLink } from 'lucide-react'
import React from 'react'
import type { ImageInfo } from './types'

export const ICON_MAP: Record<string, React.ReactElement> = {
  'arrow-right': React.createElement(ArrowRight),
  'arrow-left': React.createElement(ArrowLeft),
  'external-link': React.createElement(ExternalLink),
  download: React.createElement(Download),
}

export const getIconComponent = (iconType: string) => {
  return ICON_MAP[iconType] || null
}

export const transformImages = (images: any[]): ImageInfo[] => {
  return (
    images
      ?.map((imageItem) => {
        const src = typeof imageItem.image === 'object' ? imageItem.image.url || '' : ''
        const alt = imageItem.alt || ''

        // Ne pas inclure les images avec des src vides
        if (!src || src === '') {
          return null
        }

        return {
          src,
          alt,
        }
      })
      .filter((item): item is ImageInfo => item !== null) || []
  )
}

export const getImageByIndex = (images: ImageInfo[], index: number): ImageInfo | undefined => {
  return images[index]
}

export const DEFAULT_CONTAINER_CLASSES =
  'container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-28 lg:pb-20 xl:pt-28 xl:pb-20 2xl:px-0'
export const DEFAULT_BG_CLASSES = 'bg-primary-lightest py-10'
