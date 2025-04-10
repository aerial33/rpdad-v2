import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'

export type EmploiItem = {
  id: string
  title: string
  summary?: string
  image?: {
    url: string
    alt: string
    width: number
    height: number
  }
  slug?: string
  category?: string
  location?: string
}

type EmploiGridProps = {
  heading?: string
  subheading?: string
  badgeText?: string
  emplois: EmploiItem[]
}

export function EmploiGrid({
  heading = "Offres d'emploi",
  subheading = "Retrouvez nos dernières offres d'emploi disponibles",
  badgeText = 'Emploi',
  emplois = [],
}: EmploiGridProps) {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{badgeText}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                {heading}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                {subheading}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {emplois.map((emploi) => (
              <div key={emploi.id} className="flex flex-col gap-2 group">
                <Link href={`/emplois/${emploi.slug}`} className="block">
                  <div className="bg-muted rounded-md aspect-video mb-2 overflow-hidden">
                    {emploi.image?.url ? (
                      <Image
                        src={emploi.image.url}
                        alt={emploi.image.alt || emploi.title}
                        width={emploi.image.width || 400}
                        height={emploi.image.height || 225}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    {emploi.category && (
                      <Badge variant="outline" className="text-xs">
                        {emploi.category}
                      </Badge>
                    )}
                    {emploi.location && (
                      <span className="text-xs text-muted-foreground">{emploi.location}</span>
                    )}
                  </div>
                  <h3 className="text-xl tracking-tight font-medium group-hover:text-primary transition-colors">
                    {emploi.title}
                  </h3>
                  <p className="text-muted-foreground text-base">{emploi.summary}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
