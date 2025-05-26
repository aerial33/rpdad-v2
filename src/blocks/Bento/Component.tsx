import { Calendar, FileText, Globe, Mail } from 'lucide-react'

import { BentoCard, BentoGrid } from '@/components/bento/bento-grid'
import { BentoCardBlock } from '@/payload-types'

const features = [
  {
    Icon: Globe,
    name: 'Un Service public proche de chez vous',
    description: '33 services aides à domicile publics sur 198 communes de la Gironde',
    href: '/',
    cta: 'Découvrir nos engagements',
    tag: 'Le réseau en Gironde',
    background: <img className="absolute -top-20 -right-20 opacity-60" alt="" />,
    className:
      'lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3 bg-primary-light lg:rounded-tl-[300px] text-white',
  },
  {
    Icon: Mail,
    name: 'Aide à domicile',
    description:
      'Un service de qualité auprès de nos 5200 bénéficiaires agées et/ou en situation de handicap',
    href: '/le-rpdad',
    cta: 'En savoir plus',
    background: <img className="absolute -top-20 -right-20 opacity-60" alt="" />,
    className: 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 bg-flamingo-lighter',
  },
  {
    Icon: FileText,
    name: 'Accompagnement adapté à vos besoins',
    description:
      '1200 agents en Gironde dont 900 aides à domiciles, mais aussi des responsable de secteurs, agents administratifs et personnel de directrion',
    href: '/',
    cta: 'En savoir plus',
    background: <img className="absolute -top-20 -right-20 opacity-60" alt="" />,
    className: 'lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3 bg-yellow-lighter',
  },
  {
    Icon: Calendar,
    name: 'Service de qualité',
    description:
      'Un accompagnement adapté à vos besoins : 671 700 heures réalisées en 2024 (AMPA, AMPH)',
    href: '/',
    cta: 'En savoir plus',
    background: <img className="absolute -top-20 -right-20 opacity-60" alt="" />,
    className: 'lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2 bg-chateau-lighter',
  },
]

export const BentoGridBlock: React.FC<BentoCardBlock> = (props) => {
  return (
    <section className="bg-flamingo-lightest px-4 py-24 xl:px-0">
      {props.title && (
        <div className="center-element mb-12">
          <h2 className="text-3xl font-bold text-center lg:text-4xl">{props.title}</h2>
        </div>
      )}
      <BentoGrid
        className={`center-element ${props.gridLayout || 'lg:grid-cols-4'} lg:grid-rows-2`}
      >
        {features.map((feature, index) => (
          <BentoCard key={`${feature.name}-${index}`} {...feature} />
        ))}
      </BentoGrid>
    </section>
  )
}
