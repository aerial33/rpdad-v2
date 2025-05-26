import React from 'react'
import type { ContentSectionBlockData, ContentSectionProps, IconType, MediaObject } from './types'

/**
 * Fonction pour obtenir le composant d'icône correspondant
 */
export function getIconComponent(iconType: IconType): React.ReactNode {
  // Cette fonction devra être adaptée selon votre système d'icônes
  // Exemple avec lucide-react :
  switch (iconType) {
    case 'arrow-right':
      // return <ArrowRight />
      return null // Remplacez par votre composant d'icône
    case 'arrow-left':
      // return <ArrowLeft />
      return null
    case 'external-link':
      // return <ExternalLink />
      return null
    case 'download':
      // return <Download />
      return null
    case 'none':
    default:
      return null
  }
}

/**
 * Fonction pour obtenir l'URL d'une image depuis un objet média PayloadCMS
 */
export function getImageUrl(image: MediaObject | string): string {
  if (typeof image === 'string') {
    return image
  }
  return image.url
}

/**
 * Fonction pour mapper les données PayloadCMS vers les props du composant ContentSection
 */
export function mapPayloadDataToProps(blockData: ContentSectionBlockData): ContentSectionProps {
  return {
    images: blockData.images.map((img) => ({
      src: getImageUrl(img.image),
      alt: img.alt,
    })),
    cardInfo: blockData.cardInfo,
    title: blockData.title,
    paragraphs: blockData.paragraphs.map((p) => p.content),
    highlight: blockData.highlight,
    buttonText: blockData.button.text,
    buttonHref: blockData.button.href,
    buttonIcon: getIconComponent(blockData.button.icon),
    dotPatternTop: blockData.dotPatterns.top.enabled
      ? createDotPatternElement(blockData.dotPatterns.top)
      : null,
    dotPatternBottom: blockData.dotPatterns.bottom.enabled
      ? createDotPatternElement(blockData.dotPatterns.bottom)
      : null,
    bgClass: blockData.bgClass,
  }
}

/**
 * Fonction pour créer un élément DotPattern (à adapter selon votre composant)
 */
function createDotPatternElement(config: any): React.ReactNode {
  // Cette fonction devra être adaptée selon votre composant DotPattern
  // Exemple :
  /*
  return (
    <DotPattern
      className={config.className}
      rows={config.rows}
      cols={config.cols}
      dotSize={config.dotSize}
      dotColor={config.dotColor}
      gap={config.gap}
      variant={config.variant}
    />
  )
  */
  return null // Remplacez par votre logique de création du composant DotPattern
}

/**
 * Fonction de validation pour vérifier si les données du block sont valides
 */
export function validateContentSectionData(data: Partial<ContentSectionBlockData>): boolean {
  return !!(
    data.images &&
    data.images.length > 0 &&
    data.cardInfo &&
    data.title &&
    data.paragraphs &&
    data.paragraphs.length > 0 &&
    data.button
  )
}

/**
 * Fonction pour obtenir les valeurs par défaut du block
 */
export function getDefaultContentSectionData(): Partial<ContentSectionBlockData> {
  return {
    blockType: 'contentSection',
    images: [],
    cardInfo: {
      value: '',
      label: '',
    },
    title: '',
    paragraphs: [],
    button: {
      text: '',
      href: '',
      icon: 'arrow-right',
    },
    dotPatterns: {
      top: {
        enabled: false,
        rows: 11,
        cols: 11,
        dotSize: 'md',
        dotColor: 'bg-flamingo',
        gap: 'md',
      },
      bottom: {
        enabled: false,
        rows: 9,
        cols: 9,
        dotSize: 'sm',
        dotColor: 'bg-primary-dark',
        variant: 'normal',
      },
    },
    bgClass: 'py-16',
  }
}
