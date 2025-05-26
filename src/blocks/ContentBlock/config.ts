// blocks/ContentBlock.ts
import type { Block } from 'payload'

export const ContenuBlock: Block = {
  slug: 'contenuBlock',
  imageURL:
    'https://www.hubspot.com/hs-fs/hubfs/Knowledge_Base_2021/add-a-layout-to-content.png?width=1293&height=1476&name=add-a-layout-to-content.png',
  imageAltText: 'Block de contenu avec titre et texte',
  interfaceName: 'ContentBlock', // Pour la génération de types TypeScript
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Titre principal du block de contenu',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      admin: {
        description: 'Sous-titre optionnel',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description: 'Contenu principal en rich text',
      },
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'left',
      options: [
        {
          label: 'Gauche',
          value: 'left',
        },
        {
          label: 'Centre',
          value: 'center',
        },
        {
          label: 'Droite',
          value: 'right',
        },
      ],
      admin: {
        description: 'Alignement du contenu',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'white',
      options: [
        {
          label: 'Blanc',
          value: 'white',
        },
        {
          label: 'Gris clair',
          value: 'gray-light',
        },
        {
          label: 'Gris foncé',
          value: 'gray-dark',
        },
        {
          label: 'Bleu',
          value: 'blue',
        },
        {
          label: 'Transparent',
          value: 'transparent',
        },
      ],
    },
  ],
}
