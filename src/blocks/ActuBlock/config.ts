import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Actu: Block = {
  slug: 'actu',
  interfaceName: 'ActuBlock',
  imageURL: '/img/blocks/actu-evenement.jpeg',
  imageAltText: 'Actus & Événements',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titre principal',
      defaultValue: 'Les événements à ne pas louper....',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Sous-titre',
      defaultValue: 'Retrouvez les événements de nos 32 services membres partout en Gironde',
    },
    {
      name: 'badgeText',
      type: 'text',
      label: 'Texte du badge',
      defaultValue: 'Les évênements',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Texte du bouton',
      defaultValue: 'Voir tous les événements',
    },
    {
      name: 'introContent',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Intro Content',
    },
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      options: [
        {
          label: 'Collection',
          value: 'collection',
        },
        {
          label: 'Individual Selection',
          value: 'selection',
        },
        {
          label: 'Manual Events',
          value: 'manual',
        },
      ],
    },
    {
      name: 'relationTo',
      type: 'select',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      defaultValue: 'posts',
      label: 'Collections To Show',
      options: [
        {
          label: 'Posts',
          value: 'posts',
        },
      ],
    },
    {
      name: 'categories',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      hasMany: true,
      label: 'Categories To Show',
      relationTo: 'categories',
    },
    {
      name: 'limit',
      type: 'number',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        step: 1,
      },
      defaultValue: 3,
      label: 'Limit',
    },
    {
      name: 'selectedDocs',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
      hasMany: true,
      label: 'Selection',
      relationTo: ['posts'],
    },
    {
      name: 'manualEvents',
      type: 'array',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'manual',
      },
      label: 'Événements manuels',
      fields: [
        {
          name: 'month',
          type: 'text',
          label: 'Mois',
          required: true,
        },
        {
          name: 'day',
          type: 'text',
          label: 'Jour',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titre',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
      ],
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'flamingo',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Flamingo',
          value: 'flamingo',
        },
      ],
      label: 'Variante visuelle',
    },
  ],
  labels: {
    plural: 'Actus & Événements',
    singular: 'Actu & Événement',
  },
}
