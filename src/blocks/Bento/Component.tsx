import { BentoCard, BentoGrid } from '@/components/bento/bento-grid'
import { BentoColor } from '@/components/ui/colorful-bento-grid'
import travailSocial from '@/graphics/BentoGraph/travail-social.png'
import type { Media } from '@/payload-types'
import { BentoCardBlock } from '@/payload-types'

// Données par défaut si pas de données CMS
const defaultFeatures = [
  {
    title: 'Un Service public proche de chez vous',
    description:
      '1200 agents en Gironde dont 900 aides à domiciles, mais aussi des responsable de secteurs, agents administratifs et personnel de directrion',
    href: '/',
    cta: 'Découvrir nos engagements',
    tag: 'Le réseau en Gironde',
    image: travailSocial,
    className:
      'lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3 bg-[#E9ACD4] lg:rounded-tl-[100px]  xl:rounded-tl-[300px] text-white xl:row-start-1 xl:row-end-3 xl:col-start-1 xl:col-end-3 flex flex-col items-center justify-center  gap-4',
  },
  {
    title: 'Aide à domicile',
    description:
      'Un service de qualité auprès de nos 5200 bénéficiaires agées et/ou en situation de handicap',
    href: '/le-rpdad',
    cta: 'En savoir plus',
    image: '',
    className:
      'xl:col-start-3 xl:col-end-5 xl:row-start-1 xl:row-end-2  bg-flamingo-lighter lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:row-end-4',
  },
  {
    title: 'Accompagnement adapté à vos besoins',
    description:
      '1200 agents en Gironde dont 900 aides à domiciles, mais aussi des responsable de secteurs, agents administratifs et personnel de directrion',
    href: '/',
    cta: 'En savoir plus',
    image: '',
    className:
      'xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3 bg-yellow-lighter lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2',
  },
  {
    title: 'Service de qualité',
    description:
      'Un accompagnement adapté à vos besoins : 671 700 heures réalisées en 2024 (AMPA, AMPH)',
    href: '/',
    cta: 'En savoir plus',
    image: '',
    className:
      'xl:col-start-4 xl:col-end-5 xl:row-start-2 xl:row-end-3 bg-chateau-lighter lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3',
  },
]

export const BentoGridBlock: React.FC<BentoCardBlock> = (props) => {
  // Transformation des données CMS en format attendu par BentoCard
  const cmsFeatures = props.cards?.map((card) => {
    // Récupération de l'URL de l'image si elle existe
    const imageUrl =
      card.image && typeof card.image === 'object' ? (card.image as Media).url : undefined

    // Récupération du href depuis links (généré par linkGroup)
    const href =
      card.links && card.links.length > 0 && card.links[0]?.link
        ? card.links[0].link.url || '/'
        : '/'

    return {
      title: card.title || '',
      description: card.description || '',
      href,
      cta: card.cta || '',
      tag: card.tag || undefined,
      image: imageUrl || undefined,
      className: card.className || '',
    }
  })

  // Utiliser les données CMS si disponibles, sinon les données par défaut
  const features = cmsFeatures && cmsFeatures.length > 0 ? cmsFeatures : defaultFeatures

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
