// Export principal du block
export { ContentSectionBlock } from './config'

// Export des types
export type {
  ButtonConfig,
  CardInfo,
  ContentParagraph,
  ContentSectionBlockData,
  ContentSectionImage,
  ContentSectionProps,
  DotColor,
  DotPatternConfig,
  DotPatternVariant,
  DotPatternsConfig,
  DotSize,
  GapSize,
  IconType,
  MapPayloadDataToProps,
  MediaObject,
} from './types'

// Export des utilitaires
export {
  getDefaultContentSectionData,
  getIconComponent,
  getImageUrl,
  mapPayloadDataToProps,
  validateContentSectionData,
} from './utils'

// Export des exemples d'utilisation
export { PagesCollection, examplePayloadConfig } from './example-usage'
