// blocks/BentoCard.ts
import { linkGroup } from '@/fields/linkGroup'
import type { Block } from 'payload'

export const BentoCard: Block = {
  slug: 'bentoCard',
  interfaceName: 'BentoCardBlock',
  imageURL: '/img/blocks/bento-preview.jpeg',
  imageAltText: 'Bento Card',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titre de la section',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cartes Bento',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Titre de la carte',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
        {
          name: 'tag',
          type: 'text',
          label: 'Tag (optionnel)',
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: {
            maxRows: 2,
          },
        }),
        {
          name: 'cta',
          type: 'text',
          required: true,
          label: 'Texte du bouton',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image (optionnel)',
        },
      ],
    },
  ],
}
