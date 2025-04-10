import type { CollectionConfig } from 'payload'

import { slugField } from '@/fields/slug'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const Emploi: CollectionConfig = {
  slug: 'emplois',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt'],
    group: 'Contenus',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: "Titre de l'offre",
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Sous-titre',
    },
    {
      name: 'badgeText',
      type: 'text',
      label: 'Texte du badge',
      defaultValue: 'Emploi',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Image principale',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'CDI',
          value: 'cdi',
        },
        {
          label: 'CDD',
          value: 'cdd',
        },
        {
          label: 'Stage',
          value: 'stage',
        },
        {
          label: 'Alternance',
          value: 'alternance',
        },
        {
          label: 'Bénévolat',
          value: 'benevolat',
        },
      ],
      label: 'Catégorie',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Lieu',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Description du poste',
    },
    {
      name: 'featuredJobs',
      type: 'group',
      label: 'Section emplois en vedette',
      fields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: "Offres d'emploi",
          label: 'Titre principal',
        },
        {
          name: 'subheading',
          type: 'text',
          defaultValue: "Retrouvez nos dernières offres d'emploi disponibles",
          label: 'Sous-titre',
        },
        {
          name: 'badgeText',
          type: 'text',
          defaultValue: 'Emploi',
          label: 'Texte du badge',
        },
        {
          name: 'featuredJobs',
          type: 'array',
          label: 'Emplois en vedette',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Titre du poste',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
            },
            {
              name: 'summary',
              type: 'textarea',
              label: 'Résumé',
            },
          ],
          admin: {
            initCollapsed: false,
            description: "Vous pouvez ajouter jusqu'à 6 offres d'emploi en vedette",
          },
        },
      ],
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'Date de début',
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'Date de fin de candidature',
    },
    {
      name: 'salary',
      type: 'text',
      label: 'Salaire',
    },
    {
      name: 'organization',
      type: 'text',
      label: 'Organisation',
    },
    {
      name: 'contactEmail',
      type: 'email',
      label: 'Email de contact',
    },
    {
      name: 'contactPhone',
      type: 'text',
      label: 'Téléphone de contact',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Pourvue',
          value: 'filled',
        },
        {
          label: 'Expirée',
          value: 'expired',
        },
      ],
      label: 'Statut',
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Date de publication',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    ...slugField(),
  ],
}

export default Emploi
