'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Building2, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import MediaDisplayEmploi from './componentsEmploi/MediaDisplayEmploi'
import { FAQSection } from './FAQSection'
import { TestimonialSection } from './TestimonialSection'
import type { EmploiShowcaseProps } from './types'

export function EmploiShowcase({ emplois, totalDocs = 0 }: EmploiShowcaseProps) {
  const [isRendered, setIsRendered] = useState(false)
  const [hoveredEmploi, setHoveredEmploi] = useState<string | null>(null)

  useEffect(() => {
    setIsRendered(true)
  }, [])

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return 'Date non spécifiée'
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const renderMainVideo = () => (
    <div>
      {isRendered ? (
        <ReactPlayer
          //@ts-ignore
          url="https://youtu.be/VgYf32lPqo8?si=PlyNjXZIAKJG18fU"
          className="absolute inset-0"
          playing={true}
          width="100%"
          height="100%"
          controls
          muted
        />
      ) : null}
    </div>
  )

  return (
    <div className="">
      {/* HEADER */}
      <div className=" w-full h-120 px-2 xl:max-w-screen-2xl mx-auto pt-12">
        <div className="relative h-full aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
          <Image
            alt="archive"
            fill
            src="https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="object-cover w-full h-full rounded-3xl md:rounded-[40px] brightness-70"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
          <div className="absolute inset-0  text-white bg-opacity-30 flex flex-col items-center justify-center">
            <Badge className="mb-4 text-white" variant="outline">
              {totalDocs} offres disponibles
            </Badge>
            <h1 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
              Aide à Domicile
            </h1>
            <p className="mt-4 text-neutral-50 font-semibold text-xl">
              Un métier qui change des vies. La vôtre aussi.
            </p>
            <span className="block mt-4 text-neutral-50 max-w-lg text-center">
              Rejoignez une équipe engagée et donnez du sens à votre carrière dans l'aide à
              domicile.
            </span>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      {/* Section Offres d'emploi */}
      <section className="py-20  bg-muted/30">
        <div className="container mx-auto px-4 text-left lg:text-center">
          <div className=" mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {"Le Réseau Public Départemental d'Aide à Domicile de la Gironde"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {
                "Nous accompagnons près de 5000 personnes âgées et personnes en situation de handicap qui choisissent de vivre à domicile. Grâce à nos agents de la fonction publique, nous aidons et soutenons nos bénéficiaires dans les actes de la vie quotidienne, en favorisant une coopération étroite avec l'ensemble des acteurs intervenant à leurs côtés."
              }
            </p>
          </div>

          {/* LOOP ITEMS */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10 mb-8 items-stretch">
            {emplois.map((emploi) => (
              <Card11 key={emploi.id} post={emploi} />
            ))}
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emplois.map((emploi) => (
              <Card
                key={emploi.id}
                className="group border-none transition-all duration-300   bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden flex flex-col h-full"
                onMouseEnter={() => setHoveredEmploi(emploi.id)}
                onMouseLeave={() => setHoveredEmploi(null)}
              >
                <CardHeader className="p-0 pb-4 flex-shrink-0">
                  <div
                    className={`block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-video`}
                  >
                    <MediaDisplayEmploi
                      emploi={emploi}
                      isHover={hoveredEmploi === emploi.id}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="absolute top-3 left-4 z-10">
                    {emploi.categories && Array.isArray(emploi.categories) && emploi.categories.length > 0 && (
                      <Badge variant="default" className="text-xs bg-primary-lighter text-primary">
                        {typeof emploi.categories[0] === 'object' ? emploi.categories[0].title : emploi.categories[0]}
                      </Badge>
                    )}
                  </span>
                  <CardTitle className="text-xl mt-4 line-clamp-2">{emploi.title}</CardTitle>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col">
                  <CardDescription className="mb-4 line-clamp-3 text-left flex-1">
                    {emploi.meta?.description ||
                      'Découvrez cette opportunité professionnelle au sein de notre réseau.'}
                  </CardDescription>

                  <div className="space-y-2 my-6 flex-shrink-0">
                    {emploi.organization && (
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          <span className="truncate">{emploi.organization}</span>
                        </div>
                        {emploi.publishedAt && (
                          <>
                            <span className="text-muted-foreground mx-[6px] font-medium">·</span>
                            <span className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {formatDate(emploi.publishedAt)}
                            </span>
                          </>
                        )}
                      </div>
                    )}
                    {emploi.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="truncate">{emploi.location}</span>
                      </div>
                    )}
                  </div>

                  <Button
                    asChild
                    className="w-full group-hover:shadow-md transition-all mt-auto rounded-2xl"
                  >
                    <Link href={`/emplois/${emploi.slug || '#'}`}>
                      Voir l'offre
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {emplois.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Aucune offre d'emploi disponible pour le moment.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Revenez bientôt pour découvrir de nouvelles opportunités !
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Notre mission</h3>
              <p className="text-muted-foreground text-sm">
                Nous soutenons nos bénéficiaires au quotidien grâce à nos agents de la fonction
                publique.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service centré sur vous</h3>
              <p className="text-muted-foreground text-sm">
                Nous simplifions le parcours de soins en élaborant des solutions individuelles.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation et qualité</h3>
              <p className="text-muted-foreground text-sm">
                Nos projets innovants modernisent l'organisation et rehaussent la qualité de vie au
                travail.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partenariats locaux</h3>
              <p className="text-muted-foreground text-sm">
                En collaboration avec le CD33 et divers organismes pour un accompagnement de
                proximité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <TestimonialSection />

      {/* Section FAQ */}
      <FAQSection />

      {/* Section Call to Action */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Prêt à rejoindre votre équipe ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Découvrez nos offres d'emploi et donnez du sens à votre carrière dans l'aide à
              domicile.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                Voir toutes les offres
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
