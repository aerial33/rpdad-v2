import { Block } from 'payload'

export const map: Block = {
  slug: 'map',
  interfaceName: 'MapBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
}
