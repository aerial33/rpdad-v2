import React from 'react'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

// Interface temporaire pour le block CTA
interface CTABlockProps {
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
  links?: Array<{
    link: {
      type?: ('reference' | 'custom') | null
      newTab?: boolean | null
      reference?: any
      url?: string | null
      label: string
      appearance?: ('default' | 'outline') | null
    }
    id?: string | null
  }> | null
}

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="max-w-[48rem] flex items-center">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i: number) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </div>
  )
}
