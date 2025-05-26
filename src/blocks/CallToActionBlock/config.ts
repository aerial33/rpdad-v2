// blocks/CallToActionBlock.ts
import type { Block } from 'payload'

export const CallToActionBlock: Block = {
  slug: 'callToAction',
  imageURL: 'https://via.placeholder.com/300x200?text=CTA+Block',
  imageAltText: "Block d'appel à l'action",
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'buttons',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'style',
          type: 'select',
          defaultValue: 'primary',
          options: [
            {
              label: 'Principal',
              value: 'primary',
            },
            {
              label: 'Secondaire',
              value: 'secondary',
            },
            {
              label: 'Outline',
              value: 'outline',
            },
          ],
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
