// Types pour les icônes disponibles
export type IconType = 'arrow-right' | 'arrow-left' | 'external-link' | 'download' | 'none'

// Types pour les tailles de points
export type DotSize = 'sm' | 'md' | 'lg'

// Types pour les couleurs de points
export type DotColor = 'bg-flamingo' | 'bg-primary-dark' | 'bg-primary' | 'bg-secondary'

// Types pour l'espacement
export type GapSize = 'sm' | 'md' | 'lg'

// Types pour les variantes de motifs
export type DotPatternVariant = 'normal' | 'dense' | 'sparse'

// Interface pour un objet média PayloadCMS
export interface MediaObject {
  id: string
  url: string
  filename: string
  mimeType: string
  filesize: number
  width?: number
  height?: number
  alt?: string
}

// Interface pour une image du block
export interface ContentSectionImage {
  image: MediaObject | string
  alt: string
}

// Interface pour les informations de la carte
export interface CardInfo {
  value: string
  label: string
}

// Interface pour un paragraphe
export interface ContentParagraph {
  content: string
}

// Interface pour la configuration du bouton
export interface ButtonConfig {
  text: string
  href: string
  icon: IconType
}

// Interface pour la configuration d'un motif de points
export interface DotPatternConfig {
  enabled: boolean
  className?: string
  rows?: number
  cols?: number
  dotSize?: DotSize
  dotColor?: DotColor
  gap?: GapSize
  variant?: DotPatternVariant
}

// Interface pour les motifs de points (top et bottom)
export interface DotPatternsConfig {
  top: DotPatternConfig
  bottom: DotPatternConfig
}

// Interface principale pour le block ContentSection
export interface ContentSectionBlockData {
  blockType: 'contentSection'
  images: ContentSectionImage[]
  cardInfo: CardInfo
  title: string
  paragraphs: ContentParagraph[]
  highlight?: string
  button: ButtonConfig
  dotPatterns: DotPatternsConfig
  bgClass?: string
}

// Props pour le composant React ContentSection
export interface ContentSectionProps {
  images: Array<{
    src: string
    alt: string
  }>
  cardInfo: CardInfo
  title: string
  paragraphs: string[]
  highlight?: string
  buttonText: string
  buttonHref: string
  buttonIcon?: React.ReactNode
  dotPatternTop?: React.ReactNode
  dotPatternBottom?: React.ReactNode
  bgClass?: string
}

// Fonction utilitaire pour mapper les données PayloadCMS vers les props du composant
export type MapPayloadDataToProps = (blockData: ContentSectionBlockData) => ContentSectionProps
