# Block ContentSection pour PayloadCMS

Ce block PayloadCMS a été créé pour correspondre au composant React `ContentSection` existant. Il permet aux éditeurs de contenu de créer des sections riches avec images, texte, boutons et motifs décoratifs.

## Structure du Block

Le block `ContentSection` comprend les champs suivants :

### 🖼️ Images

- **Type** : Array (1-2 images maximum)
- **Champs** :
  - Image (upload vers collection 'media')
  - Texte alternatif (obligatoire)

### 📊 Informations de la carte

- **Type** : Group
- **Champs** :
  - Valeur (ex: "+ de 5 000")
  - Libellé (ex: "Personnes accompagnées")

### 📝 Contenu textuel

- **Titre** : Titre principal de la section
- **Paragraphes** : Array de paragraphes de contenu
- **Highlight** : Texte à mettre en évidence

### 🔗 Bouton d'action

- **Type** : Group
- **Champs** :
  - Texte du bouton
  - Lien (href)
  - Icône (sélection parmi plusieurs options)

### 🎨 Motifs décoratifs (Dot Patterns)

- **Motif du haut** et **Motif du bas**
- Chaque motif peut être activé/désactivé
- Configuration complète : position, taille, couleur, espacement

### 🎨 Styling

- **Classes CSS** : Classes personnalisées pour le background

## Installation

1. **Importez le block dans votre configuration PayloadCMS** :

```typescript
import { ContentSectionBlock } from './src/blocks/contenSection/config'
import type { Config } from 'payload'

export default buildConfig({
  // ... autres configurations
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            ContentSectionBlock,
            // ... autres blocks
          ],
        },
      ],
    },
  ],
}) satisfies Config
```

2. **Assurez-vous d'avoir une collection 'media'** pour les uploads d'images :

```typescript
import type { CollectionConfig } from 'payload'

export const MediaCollection: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    // ... configuration upload
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
```

## Utilisation dans le composant React

Une fois les données récupérées de PayloadCMS, vous pouvez les utiliser avec votre composant `ContentSection` existant :

```tsx
import React from 'react'
import { ContentSection } from '@/components/ContentSection'
import { DotPattern } from '@/components/DotPattern'
import type { ContentSectionBlockData } from './types'
import { mapPayloadDataToProps } from './utils'

// Utilisation directe avec la fonction utilitaire
function renderContentSection(blockData: ContentSectionBlockData): React.ReactElement {
  const props = mapPayloadDataToProps(blockData)
  return <ContentSection {...props} />
}

// Ou si vous préférez une approche plus personnalisée :
function renderContentSectionCustom(blockData: ContentSectionBlockData): React.ReactElement {
  return (
    <ContentSection
      images={blockData.images.map((img) => ({
        src: typeof img.image === 'string' ? img.image : img.image.url,
        alt: img.alt,
      }))}
      cardInfo={blockData.cardInfo}
      title={blockData.title}
      paragraphs={blockData.paragraphs.map((p) => p.content)}
      highlight={blockData.highlight}
      buttonText={blockData.button.text}
      buttonHref={blockData.button.href}
      buttonIcon={getIconComponent(blockData.button.icon)}
      dotPatternTop={
        blockData.dotPatterns.top.enabled ? (
          <DotPattern
            className={blockData.dotPatterns.top.className}
            rows={blockData.dotPatterns.top.rows}
            cols={blockData.dotPatterns.top.cols}
            dotSize={blockData.dotPatterns.top.dotSize}
            dotColor={blockData.dotPatterns.top.dotColor}
            gap={blockData.dotPatterns.top.gap}
          />
        ) : null
      }
      dotPatternBottom={
        blockData.dotPatterns.bottom.enabled ? (
          <DotPattern
            className={blockData.dotPatterns.bottom.className}
            variant={blockData.dotPatterns.bottom.variant}
            rows={blockData.dotPatterns.bottom.rows}
            cols={blockData.dotPatterns.bottom.cols}
            dotSize={blockData.dotPatterns.bottom.dotSize}
            dotColor={blockData.dotPatterns.bottom.dotColor}
          />
        ) : null
      }
      bgClass={blockData.bgClass}
    />
  )
}
```

## Fonctionnalités avancées

### Conditions d'affichage

Les champs des motifs de points utilisent des conditions pour ne s'afficher que lorsque le motif est activé :

```typescript
admin: {
  condition: (data: any, siblingData: any) => siblingData?.enabled,
}
```

### Validation

- Les images et leurs textes alternatifs sont obligatoires
- Le titre et les informations de la carte sont obligatoires
- Au moins un paragraphe est requis

### Personnalisation

Vous pouvez facilement étendre ce block en :

- Ajoutant de nouvelles options d'icônes
- Modifiant les couleurs disponibles pour les motifs
- Ajoutant de nouveaux champs selon vos besoins

## Types TypeScript

### Types inclus

Ce block est entièrement typé avec TypeScript et inclut :

- **Types de base** : `IconType`, `DotSize`, `DotColor`, `GapSize`, `DotPatternVariant`
- **Interfaces de données** : `ContentSectionBlockData`, `CardInfo`, `ButtonConfig`, etc.
- **Props du composant** : `ContentSectionProps`
- **Utilitaires** : `MapPayloadDataToProps`

### Utilisation des types

```typescript
import type {
  ContentSectionBlockData,
  ContentSectionProps,
  IconType,
} from './src/blocks/contenSection'

// Fonction typée pour le rendu
function renderContentSection(data: ContentSectionBlockData): React.ReactElement {
  // ...
}

// Fonction typée pour obtenir une icône
function getIcon(iconType: IconType): React.ReactNode {
  // ...
}
```

### Génération automatique des types PayloadCMS

Si vous utilisez PayloadCMS avec TypeScript, vous pouvez générer les types automatiquement :

```bash
npx payload generate:types
```

Cela créera les interfaces TypeScript correspondantes dans votre fichier de types généré.

### Tests de validation

Un fichier de test est inclus pour valider la configuration :

```typescript
import { runTests } from './src/blocks/contenSection/test'

// Exécuter les tests de validation
runTests()
```

## Support

Ce block a été conçu pour être compatible avec :

- PayloadCMS 3.x
- React 18+
- TypeScript (optionnel)

Pour toute question ou amélioration, consultez la documentation officielle de PayloadCMS sur les blocks : https://payloadcms.com/docs/fields/blocks
