import type { Block } from 'payload'
import type { Config } from 'src/payload-types'
export const EmploiBlock: Block = {
  slug: 'emploiBlock',
  interfaceName: 'EmploiBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Titre principal',
      defaultValue: "Offres d'emploi",
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Sous-titre',
      defaultValue: "Retrouvez nos dernières offres d'emploi disponibles",
    },
    {
      name: 'badgeText',
      type: 'text',
      label: 'Texte du badge',
      defaultValue: 'Emploi',
    },
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'automatic',
      options: [
        {
          label: 'Automatique (dernières offres)',
          value: 'automatic',
        },
        {
          label: 'Sélection manuelle',
          value: 'selection',
        },
      ],
    },
    {
      name: 'limit',
      type: 'number',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'automatic',
        step: 1,
      },
      defaultValue: 6,
      label: "Nombre d'offres à afficher",
    },
    {
      name: 'selectedEmplois',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
      hasMany: true,
      label: 'Sélection des offres',
      relationTo: 'emplois' as keyof Config['collections'],
    },
    {
      name: 'categories',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'automatic',
      },
      hasMany: true,
      label: 'Filtrer par catégories',
      relationTo: 'categories',
    },
  ],
  labels: {
    plural: 'Blocs Emploi',
    singular: 'Bloc Emploi',
  },
}
