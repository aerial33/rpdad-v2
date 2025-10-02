import type { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

import type { BentoCardBlock } from '@/payload-types'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import { Media } from '../Media'
import { Badge } from '../ui/badge'

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn('grid w-full grid-cols-3 gap-4', className)}>{children}</div>
}

// Type d'une carte individuelle depuis PayloadCMS
type SingleCard = NonNullable<BentoCardBlock['cards']>[number]

// Extension du type PayloadCMS pour BentoCard
interface BentoCardProps extends Omit<SingleCard, 'links' | 'image' | 'id'> {
  href?: string // calculé depuis links
  image?: string | StaticImageData // étendu pour supporter StaticImageData (fallback)
}

const BentoCard = ({ title, className, image, description, href, cta, tag }: BentoCardProps) => {
  return (
    <div
      className={cn('relative col-span-4 rounded-[40px] p-6 h-full border border-foret', className)}
    >
      <div className="w-full max-w-md ml-4 flex-1 flex flex-col items-center justify-center gap-6">
        <div>
          {tag && (
            <Badge variant="outline" className="text-xs font-medium mb-2 ml-auto block">
              {tag}
            </Badge>
          )}
          <h3 className="text-xl lg:text-2xl font-bold  mb-2 text-balance text-gray-700  ">
            {title}
          </h3>
          <p className=" text-balance text-white">{description}</p>
        </div>
        {image && (
          <Media
            src={image}
            alt={title || 'Image'}
            className="max-w-md mt-4 "
            imgClassName="w-full h-full object-cover"
            fill
            loading="lazy"
          />
        )}
      </div>
      {href && cta && (
        <Link href={href} className="font-medium hover:text-primary mt-4">
          {`${cta} →`}
        </Link>
      )}
    </div>
  )
}

export { BentoCard, BentoGrid }
