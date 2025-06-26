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
      minRows: 1,
      maxRows: 4, // Maximum 4 éléments
      fields: [
        {
          name: 'titre',
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
          name: 'icon',
          type: 'select',
          required: true,
          label: 'Icône',
          options: [
            { label: 'Globe', value: 'Globe' },
            { label: 'Mail', value: 'Mail' },
            { label: 'FileText', value: 'FileText' },
            { label: 'Calendar', value: 'Calendar' },
            // ... autres icônes
          ],
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
          name: 'tag',
          type: 'text',
          label: 'Tag (optionnel)',
        },
        {
          name: 'backgroundStyle',
          type: 'select',
          label: 'Style de fond',
          options: [
            { label: 'Couleur primaire', value: 'bg-primary-light' },
            { label: 'Couleur flamingo', value: 'bg-flamingo-lighter' },
            { label: 'Couleur pomme', value: 'bg-chateau-lighter' },
            { label: 'Couleur jaune', value: 'bg-yellow-lighter' },
          ],
        },
      ],
    },
    {
      name: 'gridLayout',
      type: 'select',
      label: 'Disposition',
      defaultValue: 'grid-cols-4',
      options: [
        { label: '3 colonnes', value: 'grid-cols-3' },
        { label: '4 colonnes', value: 'grid-cols-4' },
      ],
    },
  ],
}
