//todo: fix the card size
import { ArrowRight } from 'lucide-react'

import { EventCard } from '@/components/events/event-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export type ActuBlockProps = {
  title?: string
  subtitle?: string
  badgeText?: string
  buttonText?: string
  variant?: 'default' | 'flamingo'
  events?: Array<{
    month: string
    day: string
    title: string
    description: string
  }>
}

export function ActuBlock({
  title = 'Les événements à ne pas louper....',
  subtitle = 'Retrouvez les événements de nos 32 services membres partout en Gironde',
  badgeText = 'Les évênements',
  buttonText = 'Voir tous les événements',
  variant = 'flamingo',
  events = [
    {
      month: 'OCTOBRE',
      day: '30',
      title: "Table ronde sur la lute contre l'isolement des personnes âgées",
      description: 'De 14h00 à 16h00 Salle des cérémonies de la mairie de Lanton',
    },
    {
      month: 'OCTOBRE',
      day: '05',
      title: 'Forum sénior',
      description:
        "A partir de 9h30 Salle du Bateau Lyre du Barp Organisé par les CCAS du Val de l'Eyres",
    },
    {
      month: 'AVRIL',
      day: '29',
      title: 'Portes ouvertes du SAD du CIAS de Blaye',
      description:
        "A partir de 9h30 Salle du Bateau Lyre du Barp Organisé par les CCAS du Val de l'Eyres",
    },
  ],
}: ActuBlockProps) {
  return (
    <section className="bg-flamingo-lightest py-24">
      <div className="grid grid-cols-1 grid-rows-1 gap-4 lg:grid-cols-8 lg:grid-rows-3">
        {/* Left section with magenta background */}
        <div className="col-span-1 row-span-2 flex flex-col justify-between lg:col-span-3 lg:col-start-1 lg:row-span-3 lg:row-start-1">
          <div className="bg-primary h-2/3 rounded-r-2xl p-8 text-white lg:p-12">
            <Badge
              variant="outline"
              className="mb-6 font-medium tracking-wider text-white uppercase"
            >
              {badgeText}
            </Badge>
            <h2 className="mb-6 max-w-lg text-balance">{title}</h2>
            <p className="mt-4 max-w-md text-lg text-balance">{subtitle}</p>
          </div>

          <Button className="group my-12 w-fit text-lg lg:mb-0">
            {buttonText}
            <ArrowRight className="ml-2 text-lg transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Right section with event cards */}
        <div className="relative col-span-1 row-span-2 flex flex-col items-center justify-center gap-4 lg:col-span-6 lg:col-start-3 lg:row-start-2 lg:flex-row">
          {/* Decorative dots */}
          <div className="absolute -top-[50%] right-[5%] z-10 hidden flex-col gap-3 lg:flex">
            {[...Array(5)].map((_, i) => (
              <div key={`row-${i}`} className="flex gap-3">
                {[...Array(4)].map((_, j) => (
                  <div key={`dot-${i}-${j}`} className="bg-picton-blue h-2 w-2 rounded-full" />
                ))}
              </div>
            ))}
          </div>

          {events.map((event, index) => (
            <EventCard
              key={`event-${index}`}
              month={event.month}
              day={event.day}
              title={event.title}
              description={event.description}
              variant={index % 2 === 0 ? 'flamingo' : 'default'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
