import type { CollectionConfig } from 'payload'

import { slugField } from '@/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
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
    defaultColumns: ['title', 'category', 'location', 'status', 'publishedAt'],
    group: 'Contenus',
    hideAPIURL: false,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: "Titre de l'offre",
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Informations générales',
          fields: [
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
              name: 'workTime',
              type: 'select',
              label: 'Temps de travail',
              options: [
                {
                  label: 'Temps plein',
                  value: 'full-time',
                },
                {
                  label: 'Temps partiel',
                  value: 'part-time',
                },
                {
                  label: 'Horaires flexibles',
                  value: 'flexible',
                },
              ],
              defaultValue: 'full-time',
            },
            {
              name: 'location',
              type: 'text',
              required: true,
              label: 'Lieu',
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
              required: true,
            },
          ],
        },
        {
          label: 'Profil recherché',
          fields: [
            {
              name: 'requiredSkills',
              type: 'array',
              label: 'Compétences requises',
              fields: [
                {
                  name: 'skill',
                  type: 'text',
                  required: true,
                  label: 'Compétence',
                },
                {
                  name: 'level',
                  type: 'select',
                  label: 'Niveau requis',
                  options: [
                    {
                      label: 'Débutant',
                      value: 'beginner',
                    },
                    {
                      label: 'Intermédiaire',
                      value: 'intermediate',
                    },
                    {
                      label: 'Expérimenté',
                      value: 'experienced',
                    },
                    {
                      label: 'Expert',
                      value: 'expert',
                    },
                  ],
                  defaultValue: 'intermediate',
                },
              ],
              admin: {
                initCollapsed: true,
              },
            },
            {
              name: 'qualifications',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                  ]
                },
              }),
              label: 'Qualifications et expérience requises',
            },
            {
              name: 'benefits',
              type: 'array',
              label: 'Avantages du poste',
              fields: [
                {
                  name: 'benefit',
                  type: 'text',
                  required: true,
                  label: 'Avantage',
                },
              ],
              admin: {
                initCollapsed: true,
              },
            },
          ],
        },
        {
          label: 'Informations pratiques',
          fields: [
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
              name: 'applicationProcess',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                  ]
                },
              }),
              label: 'Processus de candidature',
              admin: {
                description: 'Décrivez comment postuler (documents requis, étapes, etc.)',
              },
            },
          ],
        },
        {
          label: 'SEO',
          name: 'meta',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaDescriptionField({}),
            MetaImageField({
              relationTo: 'media',
            }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'featuredJobs',
      type: 'group',
      label: 'Section emplois en vedette',
      admin: {
        position: 'sidebar',
      },
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
      admin: {
        position: 'sidebar',
      },
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
