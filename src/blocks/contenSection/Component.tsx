import { ArrowRight } from 'lucide-react'

import { ContentSection } from '@/components/ContentSection'
import { DotPattern } from '@/components/DotPattern'
import type { ContentSectionBlock as ContentSectionBlockType } from '@/payload-types'

export const ContentSectionBlock: React.FC<ContentSectionBlockType> = ({
  images,
  cardInfo,
  title,
}) => {
  console.log('from content section', images, cardInfo, title)
  return (
    <>
      <ContentSection
        images={[
          {
            src: 'https://sandbox-tailwind-template.netlify.app/assets/img/photos/g5@2x.jpg',
            alt: 'image principale',
          },
          {
            src: 'https://sandbox-tailwind-template.netlify.app/assets/img/photos/g6@2x.jpg',
            alt: 'image secondaire',
          },
        ]}
        cardInfo={{
          value: '+ de 5 000',
          label: 'Personnes accompagnées',
        }}
        dotPatternTop={
          <DotPattern
            className="absolute -top-10 left-5 hidden lg:flex"
            rows={11}
            cols={11}
            dotSize="md"
            dotColor="bg-flamingo"
            gap="md"
          />
        }
        dotPatternBottom={
          <DotPattern
            className="absolute -bottom-30 left-70 hidden lg:flex"
            variant="dense"
            rows={9}
            cols={9}
            dotSize="sm"
            dotColor="bg-primary-dark"
          />
        }
        title="Nos Services Membres"
        paragraphs={[
          "Créé en 2010, le Réseau Public Départemental d'Aide à Domicile de la Gironde compte à ce jour 33 services membres au 1er janvier 2025.",
          "Il s'agit exclusivement de services publics de proximité : Centres Communaux d'Action Sociale (CCAS), Centres Intercommunaux d'Action Sociale (CIAS)",
          "Ces services, par leur présence sur 194 communes de Gironde et leur proximité, constituent d'incontournables acteurs de l'aide à domicile. Chaque service intervient sur un périmètre géographique clairement délimité.",
        ]}
        highlight="services membres"
        buttonText="Retrouvez notre réseau"
        buttonHref="/services-membres"
        buttonIcon={<ArrowRight />}
        bgClass=" py-16"
      />
    </>
  )
}
