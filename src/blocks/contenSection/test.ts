import type { ContentSectionBlockData } from './types'
import {
  getDefaultContentSectionData,
  mapPayloadDataToProps,
  validateContentSectionData,
} from './utils'

/**
 * Données de test pour le block ContentSection
 */
export const mockContentSectionData: ContentSectionBlockData = {
  blockType: 'contentSection',
  images: [
    {
      image: {
        id: '1',
        url: 'https://example.com/image1.jpg',
        filename: 'image1.jpg',
        mimeType: 'image/jpeg',
        filesize: 1024000,
        width: 800,
        height: 600,
        alt: 'Image principale',
      },
      alt: 'Image principale',
    },
    {
      image: {
        id: '2',
        url: 'https://example.com/image2.jpg',
        filename: 'image2.jpg',
        mimeType: 'image/jpeg',
        filesize: 512000,
        width: 400,
        height: 300,
        alt: 'Image secondaire',
      },
      alt: 'Image secondaire',
    },
  ],
  cardInfo: {
    value: '+ de 5 000',
    label: 'Personnes accompagnées',
  },
  title: 'Nos Services Membres',
  paragraphs: [
    {
      content:
        "Créé en 2010, le Réseau Public Départemental d'Aide à Domicile de la Gironde compte à ce jour 33 services membres au 1er janvier 2025.",
    },
    {
      content:
        "Il s'agit exclusivement de services publics de proximité : Centres Communaux d'Action Sociale (CCAS), Centres Intercommunaux d'Action Sociale (CIAS)",
    },
    {
      content:
        "Ces services, par leur présence sur 194 communes de Gironde et leur proximité, constituent d'incontournables acteurs de l'aide à domicile. Chaque service intervient sur un périmètre géographique clairement délimité.",
    },
  ],
  highlight: 'services membres',
  button: {
    text: 'Retrouvez notre réseau',
    href: '/services-membres',
    icon: 'arrow-right',
  },
  dotPatterns: {
    top: {
      enabled: true,
      className: 'absolute -top-10 left-5 hidden lg:flex',
      rows: 11,
      cols: 11,
      dotSize: 'md',
      dotColor: 'bg-flamingo',
      gap: 'md',
    },
    bottom: {
      enabled: true,
      className: 'absolute -bottom-30 left-70 hidden lg:flex',
      variant: 'dense',
      rows: 9,
      cols: 9,
      dotSize: 'sm',
      dotColor: 'bg-primary-dark',
    },
  },
  bgClass: 'py-16',
}

/**
 * Tests de validation
 */
export function runTests(): void {
  console.log('🧪 Tests du block ContentSection')

  // Test 1: Validation des données complètes
  const isValid = validateContentSectionData(mockContentSectionData)
  console.log(`✅ Validation des données complètes: ${isValid ? 'PASS' : 'FAIL'}`)

  // Test 2: Validation des données par défaut
  const defaultData = getDefaultContentSectionData()
  const isDefaultValid = validateContentSectionData(defaultData)
  console.log(
    `⚠️  Validation des données par défaut: ${isDefaultValid ? 'PASS' : 'FAIL (normal, données incomplètes)'}`,
  )

  // Test 3: Mapping des données
  try {
    const props = mapPayloadDataToProps(mockContentSectionData)
    const hasRequiredProps = !!(
      props.images &&
      props.cardInfo &&
      props.title &&
      props.paragraphs &&
      props.buttonText &&
      props.buttonHref
    )
    console.log(`✅ Mapping des données: ${hasRequiredProps ? 'PASS' : 'FAIL'}`)
  } catch (error) {
    console.log(`❌ Mapping des données: FAIL - ${error}`)
  }

  // Test 4: Vérification des types
  const typeChecks = {
    blockType: mockContentSectionData.blockType === 'contentSection',
    imagesArray: Array.isArray(mockContentSectionData.images),
    cardInfoObject: typeof mockContentSectionData.cardInfo === 'object',
    titleString: typeof mockContentSectionData.title === 'string',
    paragraphsArray: Array.isArray(mockContentSectionData.paragraphs),
    buttonObject: typeof mockContentSectionData.button === 'object',
    dotPatternsObject: typeof mockContentSectionData.dotPatterns === 'object',
  }

  const allTypesValid = Object.values(typeChecks).every(Boolean)
  console.log(`✅ Vérification des types: ${allTypesValid ? 'PASS' : 'FAIL'}`)

  if (!allTypesValid) {
    console.log('❌ Détails des erreurs de types:', typeChecks)
  }

  console.log('🎉 Tests terminés')
}

/**
 * Fonction pour exécuter les tests si ce fichier est exécuté directement
 */
if (require.main === module) {
  runTests()
}
