import { ReactNode } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/utilities/ui'

interface FeatureCardProps {
  number: string | number
  numberBgClass?: string // ex: "bg-picton-blue-lighter text-picton-blue"
  title: string
  description: string
  className?: string
  children?: ReactNode // pour du contenu additionnel si besoin
}

export function FeatureCard({
  number,
  numberBgClass = 'bg-picton-blue-lighter text-picton-blue',
  title,
  description,
  className = '',
  children,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        'border-picton-blue pt-6 mt-2 flex max-w-[580px] flex-row shadow-lg',
        className,
      )}
    >
      <CardContent className="flex flex-row items-center space-x-6">
        <div
          className={cn(
            numberBgClass,
            'flex h-12 w-12 items-center justify-center rounded-full text-xl font-medium',
          )}
        >
          {number}
        </div>
        <div>
          <h4 className="!mb-1 text-lg font-semibold">{title}</h4>
          <p className="text-muted-foreground text-sm">{description}</p>
          {children}
        </div>
      </CardContent>
    </Card>
  )
}
