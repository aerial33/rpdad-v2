import type { Block } from 'payload'

export const ContentSectionBlock: Block = {
  slug: 'contentSection',
  interfaceName: 'ContentSectionBlock',
  imageURL: '/api/blocks/content-section-preview.jpg',
  imageAltText: 'Aperçu du block Section de Contenu',
  labels: {
    singular: 'Section de Contenu',
    plural: 'Sections de Contenu',
  },
  fields: [
    // Images principales
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 1,
      maxRows: 2,
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          label: 'Texte alternatif',
          type: 'text',
          required: true,
        },
      ],
    },

    // Informations de la carte
    {
      name: 'cardInfo',
      label: 'Informations de la carte',
      type: 'group',
      fields: [
        {
          name: 'value',
          label: 'Valeur',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'ex: + de 5 000',
          },
        },
        {
          name: 'label',
          label: 'Libellé',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'ex: Personnes accompagnées',
          },
        },
      ],
    },

    // Titre principal
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'ex: Nos Services Membres',
      },
    },

    // Paragraphes de contenu
    {
      name: 'paragraphs',
      label: 'Paragraphes',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Paragraphe',
        plural: 'Paragraphes',
      },
      fields: [
        {
          name: 'content',
          label: 'Contenu',
          type: 'textarea',
          required: true,
        },
      ],
    },

    // Texte à mettre en évidence
    {
      name: 'highlight',
      label: 'Texte en évidence',
      type: 'text',
      admin: {
        description: 'Texte qui sera mis en évidence dans le contenu',
        placeholder: 'ex: services membres',
      },
    },

    // Configuration du bouton
    {
      name: 'button',
      label: 'Bouton',
      type: 'group',
      fields: [
        {
          name: 'text',
          label: 'Texte du bouton',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'ex: Retrouvez notre réseau',
          },
        },
        {
          name: 'href',
          label: 'Lien',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'ex: /services-membres',
          },
        },
        {
          name: 'icon',
          label: 'Icône',
          type: 'select',
          options: [
            {
              label: 'Flèche droite',
              value: 'arrow-right',
            },
            {
              label: 'Flèche gauche',
              value: 'arrow-left',
            },
            {
              label: 'Lien externe',
              value: 'external-link',
            },
            {
              label: 'Télécharger',
              value: 'download',
            },
            {
              label: 'Aucune',
              value: 'none',
            },
          ],
          defaultValue: 'arrow-right',
        },
      ],
    },

    // Configuration des motifs de points (Dot Patterns)
    {
      name: 'dotPatterns',
      label: 'Motifs de points',
      type: 'group',
      fields: [
        // Motif du haut
        {
          name: 'top',
          label: 'Motif du haut',
          type: 'group',
          fields: [
            {
              name: 'enabled',
              label: 'Activer',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'className',
              label: 'Classes CSS',
              type: 'text',
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
                placeholder: 'ex: absolute -top-10 left-5 hidden lg:flex',
              },
            },
            {
              name: 'rows',
              label: 'Nombre de lignes',
              type: 'number',
              defaultValue: 11,
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
              },
            },
            {
              name: 'cols',
              label: 'Nombre de colonnes',
              type: 'number',
              defaultValue: 11,
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
              },
            },
            {
              name: 'dotSize',
              label: 'Taille des points',
              type: 'select',
              options: [
                { label: 'Petit', value: 'sm' },
                { label: 'Moyen', value: 'md' },
                { label: 'Grand', value: 'lg' },
              ],
              defaultValue: 'md',
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
              },
            },
            {
              name: 'dotColor',
              label: 'Couleur des points',
              type: 'select',
              options: [
                { label: 'Flamingo', value: 'bg-flamingo' },
                { label: 'Primary Dark', value: 'bg-primary-dark' },
                { label: 'Primary', value: 'bg-primary' },
                { label: 'Secondary', value: 'bg-secondary' },
              ],
              defaultValue: 'bg-flamingo',
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
              },
            },
            {
              name: 'gap',
              label: 'Espacement',
              type: 'select',
              options: [
                { label: 'Petit', value: 'sm' },
                { label: 'Moyen', value: 'md' },
                { label: 'Grand', value: 'lg' },
              ],
              defaultValue: 'md',
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
              },
            },
          ],
        },

        // Motif du bas
        {
          name: 'bottom',
          label: 'Motif du bas',
          type: 'group',
          fields: [
            {
              name: 'enabled',
              label: 'Activer',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'className',
              label: 'Classes CSS',
              type: 'text',
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
                placeholder: 'ex: absolute -bottom-30 left-70 hidden lg:flex',
              },
            },
            {
              name: 'variant',
              label: 'Variante',
              type: 'select',
              options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Dense', value: 'dense' },
                { label: 'Sparse', value: 'sparse' },
              ],
              defaultValue: 'normal',
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
              },
            },
            {
              name: 'rows',
              label: 'Nombre de lignes',
              type: 'number',
              defaultValue: 9,
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
              },
            },
            {
              name: 'cols',
              label: 'Nombre de colonnes',
              type: 'number',
              defaultValue: 9,
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
              },
            },
            {
              name: 'dotSize',
              label: 'Taille des points',
              type: 'select',
              options: [
                { label: 'Petit', value: 'sm' },
                { label: 'Moyen', value: 'md' },
                { label: 'Grand', value: 'lg' },
              ],
              defaultValue: 'sm',
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
              },
            },
            {
              name: 'dotColor',
              label: 'Couleur des points',
              type: 'select',
              options: [
                { label: 'Flamingo', value: 'bg-flamingo' },
                { label: 'Primary Dark', value: 'bg-primary-dark' },
                { label: 'Primary', value: 'bg-primary' },
                { label: 'Secondary', value: 'bg-secondary' },
              ],
              defaultValue: 'bg-primary-dark',
              admin: {
                condition: (data, siblingData) => siblingData?.enabled,
              },
            },
          ],
        },
      ],
    },

    // Classe CSS pour le background
    {
      name: 'bgClass',
      label: 'Classes CSS du background',
      type: 'text',
      admin: {
        description: 'Classes CSS personnalisées pour le background de la section',
        placeholder: 'ex: py-16 bg-gray-50',
      },
      defaultValue: 'py-16',
    },
  ],
}

export default ContentSectionBlock
