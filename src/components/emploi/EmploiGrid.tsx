import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import type { EmploiGridProps } from './types'

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
                    {emploi.featuredImage &&
                    typeof emploi.featuredImage === 'object' &&
                    emploi.featuredImage.url ? (
                      <Image
                        src={emploi.featuredImage.url}
                        alt={emploi.featuredImage.alt || emploi.title}
                        width={emploi.featuredImage.width || 400}
                        height={emploi.featuredImage.height || 225}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    {emploi.categories && Array.isArray(emploi.categories) && emploi.categories.length > 0 && (
                      <Badge variant="outline" className="text-xs">
                        {typeof emploi.categories[0] === 'object' ? emploi.categories[0].title : emploi.categories[0]}
                      </Badge>
                    )}
                    {emploi.location && (
                      <span className="text-xs text-muted-foreground">{emploi.location}</span>
                    )}
                  </div>
                  <h3 className="text-xl tracking-tight font-medium group-hover:text-primary transition-colors">
                    {emploi.title}
                  </h3>
                  <p className="text-muted-foreground text-base">{emploi.subtitle}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
