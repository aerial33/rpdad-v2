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
        {
          name: 'className',
          type: 'textarea',
          label: 'Classes CSS Tailwind personnalisées',
          admin: {
            description:
              'Classes Tailwind pour le style et le positionnement de la carte (ex: bg-flamingo-lighter lg:col-start-1 lg:col-end-3)',
          },
        },
      ],
    },
  ],
}
