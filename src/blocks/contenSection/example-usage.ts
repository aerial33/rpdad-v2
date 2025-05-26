import type { CollectionConfig, Config } from 'payload'
import { ContentSectionBlock } from './config'

// Exemple d'utilisation du block ContentSection dans une collection
export const PagesCollection: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Titre de la page',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      label: 'Mise en page',
      type: 'blocks',
      minRows: 1,
      blocks: [
        ContentSectionBlock,
        // Vous pouvez ajouter d'autres blocks ici
      ],
    },
    {
      name: 'status',
      label: 'Statut',
      type: 'select',
      options: [
        {
          label: 'Brouillon',
          value: 'draft',
        },
        {
          label: 'Publié',
          value: 'published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

// Exemple d'utilisation dans la configuration principale de Payload
export const examplePayloadConfig: Config = {
  collections: [
    PagesCollection,
    // Collection pour les médias (nécessaire pour les uploads)
    {
      slug: 'media',
      labels: {
        singular: 'Média',
        plural: 'Médias',
      },
      upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'centre',
          },
          {
            name: 'card',
            width: 768,
            height: 1024,
            position: 'centre',
          },
          {
            name: 'tablet',
            width: 1024,
            height: undefined,
            position: 'centre',
          },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          label: 'Texte alternatif',
          type: 'text',
        },
      ],
    },
  ],
  // Vous pouvez aussi définir le block globalement pour le réutiliser
  blocks: [ContentSectionBlock],
}

export default PagesCollection
