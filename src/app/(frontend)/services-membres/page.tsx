import { ContentTwo } from "@/blocks/contents/ContentTwo"
import { ServiceGrid } from "@/components/ui/service-grid"
import { HeroSelector } from "@/sections/Hero"
import MapGirondeSection from "@/sections/map/map-gironde"

const Membres = () => {
  return (
    <div>
      <FeatureMembres />
    </div>
  )
}

export default Membres

function FeatureMembres() {
  return (
    <div>
      <HeroSelector
        variant="mini"
        title="Services membres"
        description="Les membres du Réseau Public Départemental d'Aide à Domicile de la Gironde"
      />
      <ContentTwo />
      <MapGirondeSection />
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-7xl py-16">
          <ServiceGrid
            colorBorder="primary"
            items={[
              {
                titre: "CCAS d'Arès",
                description:
                  "Service d'aide à domicile pour les habitants d'Arès et ses environs.",
                image:
                  "https://sandbox-tailwind-template.netlify.app/assets/img/photos/b7.jpg",
              },
              {
                titre: "CCAS de Bordeaux",
                description:
                  "Service d'accompagnement à domicile pour les personnes âgées et handicapées de Bordeaux.",
                image:
                  "https://sandbox-tailwind-template.netlify.app/assets/img/photos/b7.jpg",
              },
              {
                titre: "CIAS du Bassin d'Arcachon Sud",
                description:
                  "Service d'aide et de soins à domicile pour les communes du sud du Bassin d'Arcachon.",
                image:
                  "https://sandbox-tailwind-template.netlify.app/assets/img/photos/b7.jpg",
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
