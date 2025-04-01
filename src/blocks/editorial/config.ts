import { Block } from 'payload'

export const editorial: Block = {
  slug: 'editorial',
  interfaceName: 'EditorialBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
