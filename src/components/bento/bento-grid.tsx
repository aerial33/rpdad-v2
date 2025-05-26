import { ArrowRight, LucideIcon } from 'lucide-react'

import { ReactNode } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn('grid w-full auto-rows-[22rem] grid-cols-3 gap-4', className)}>
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  tag,
}: {
  name: string
  className: string
  background: ReactNode
  Icon: LucideIcon
  description: string
  href: string
  cta: string
  tag?: string
}) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col items-center justify-center overflow-hidden rounded-xl',
      // light styles
      'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      // dark styles
      'transform-gpu dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]',
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-4 p-6 transition-all duration-300 group-hover:-translate-y-10 lg:pl-24">
      <Icon className="h-12 w-12 origin-left transform-gpu text-gray-400 transition-all duration-300 ease-in-out group-hover:scale-75" />
      {tag && (
        <Badge variant={'outline'} className="text-left text-white uppercase lg:text-lg">
          {tag}
        </Badge>
      )}
      <h3 className="text-3xl font-bold text-balance text-gray-800 lg:text-4xl dark:text-neutral-300">
        {name}
      </h3>
      <p className="text-balance text-neutral-700">{description}</p>
    </div>

    <div
      className={cn(
        'pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
)

export { BentoCard, BentoGrid }
