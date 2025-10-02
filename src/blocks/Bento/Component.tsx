import { BentoCard, BentoGrid } from '@/components/bento/bento-grid'
import { BentoColor } from '@/components/ui/colorful-bento-grid'
import type { Media } from '@/payload-types'
import { BentoCardBlock } from '@/payload-types'

// Design fixe : classes CSS pour chaque position (index 0-3)
const DESIGN_CLASSES = [
  'lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3 bg-[#E9ACD4] lg:rounded-tl-[100px]  xl:rounded-tl-[300px] text-white xl:row-start-1 xl:row-end-3 xl:col-start-1 xl:col-end-3 flex flex-col items-center justify-center  gap-4',
  'xl:col-start-3 xl:col-end-5 xl:row-start-1 xl:row-end-2  bg-flamingo-lighter lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:row-end-4',
  'xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3 bg-yellow-lighter lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2',
  'xl:col-start-4 xl:col-end-5 xl:row-start-2 xl:row-end-3 bg-chateau-lighter lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3',
]

// Contenu par défaut si pas de données CMS
const DEFAULT_CONTENT = [
  {
    title: 'Un Service public proche de chez vous',
    description:
      '1200 agents en Gironde dont 900 aides à domiciles, mais aussi des responsable de secteurs, agents administratifs et personnel de directrion',
    href: '/',
    cta: 'Découvrir nos engagements',
    tag: 'Le réseau en Gironde',
  },
  {
    title: 'Aide à domicile',
    description:
      'Un service de qualité auprès de nos 5200 bénéficiaires agées et/ou en situation de handicap',
    href: '/le-rpdad',
    cta: 'En savoir plus',
  },
  {
    title: 'Accompagnement adapté à vos besoins',
    description:
      '1200 agents en Gironde dont 900 aides à domiciles, mais aussi des responsable de secteurs, agents administratifs et personnel de directrion',
    href: '/',
    cta: 'En savoir plus',
  },
  {
    title: 'Service de qualité',
    description:
      'Un accompagnement adapté à vos besoins : 671 700 heures réalisées en 2024 (AMPA, AMPH)',
    href: '/',
    cta: 'En savoir plus',
  },
]

export const BentoGridBlock: React.FC<BentoCardBlock> = (props) => {
  // Merger les données CMS avec les designs fixes
  const features = (props.cards && props.cards.length > 0 ? props.cards : DEFAULT_CONTENT).map(
    (card, index) => {
      // Déterminer si c'est une donnée CMS ou DEFAULT_CONTENT
      const isCMSData = 'links' in card

      // Récupération du href
      const href = isCMSData && card.links && card.links.length > 0 && card.links[0]?.link
        ? card.links[0].link.url || '/'
        : 'href' in card
          ? card.href
          : '/'

      // Récupération de l'image (Media object ou string ID)
      const imageResource = isCMSData && card.image ? card.image : undefined

      return {
        title: card.title || '',
        description: card.description || '',
        href,
        cta: card.cta || '',
        tag: 'tag' in card ? card.tag || undefined : undefined,
        image: imageResource,
        // Design fixe selon la position (index)
        className: DESIGN_CLASSES[index] || '',
      }
    },
  )

  return (
    <>
      <section className="bg-flamingo-lightest rounded-[40px] px-4 py-24 xl:px-0">
        {props.title && (
          <div className="center-element mb-12">
            <h2 className="text-3xl font-bold text-center lg:text-4xl">{props.title}</h2>
          </div>
        )}
        <BentoGrid
          className={
            'max-w-7xl mx-auto lg:grid-cols-4 lg:grid-rows-3 xl:grid-rows-2 px-0 max-h-[722px] min-h-[345px] '
          }
        >
          {features?.map((feature, index) => (
            <BentoCard key={`${feature.title}-${index}`} {...feature} />
          ))}
        </BentoGrid>
      </section>
      <section>
        <BentoColor />
      </section>
    </>
  )
}
