import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'
import React from 'react'

import { CMSLink } from '../../components/Link'

// Interface temporaire pour le block Content
interface ContentBlockProps {
  columns?: Array<{
    size?: 'oneThird' | 'half' | 'twoThirds' | 'full'
    richText?: {
      root: {
        type: string
        children: any[]
        direction: ('ltr' | 'rtl') | null
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
        indent: number
        version: number
      }
      [k: string]: unknown
    } | null
    enableLink?: boolean | null
    link?: {
      type?: ('reference' | 'custom') | null
      newTab?: boolean | null
      reference?: any
      url?: string | null
      label: string
      appearance?: ('default' | 'outline') | null
    } | null
    id?: string | null
  }> | null
}

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses: Record<'full' | 'half' | 'oneThird' | 'twoThirds', string> = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index: number) => {
            const { enableLink, link, richText, size } = col
            const columnSize = size || 'oneThird'

            return (
              <div
                className={cn(`col-span-4 lg:col-span-${colsSpanClasses[columnSize]}`, {
                  'md:col-span-2': columnSize !== 'full',
                })}
                key={index}
              >
                {richText && <RichText data={richText} enableGutter={false} />}

                {enableLink && link && <CMSLink {...link} />}
              </div>
            )
          })}
      </div>
    </div>
  )
}
