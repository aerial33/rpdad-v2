'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Emplois, Media } from '@/payload-types'
import { ArrowRight, Building2, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { FAQSection } from './FAQSection'
import { TestimonialSection } from './TestimonialSection'

type EmploiItem = {
  id: string
  title: string
  slug?: string | null
  category?: Emplois['category']
  location?: string | null
  organization?: string | null
  status?: Emplois['status']
  publishedAt?: string | null
  meta?: {
    title?: string | null
    description?: string | null
    image?: (string | null) | Media
  } | null
}

type EmploiShowcaseProps = {
  emplois: EmploiItem[]
  totalDocs: number | undefined
}

export function EmploiShowcase({ emplois, totalDocs = 0 }: EmploiShowcaseProps) {
  const [isRendered, setIsRendered] = useState(false)

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

  const getCategoryLabel = (category: Emplois['category'] | undefined) => {
    const categoryLabels = {
      cdi: 'CDI',
      cdd: 'CDD',
      stage: 'Stage',
      alternance: 'Alternance',
      benevolat: 'Bénévolat',
    }
    return category ? categoryLabels[category] : undefined
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
    <div className="w-full">
      {/* Section Hero */}
      {/* <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6" variant="outline">
              Carrières • RPDAD Gironde
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Aide à Domicile
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Un métier qui change des vies.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">La vôtre aussi.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="gap-2">
                Voir les offres
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section À propos du RPDAD */}
      {/* <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                À propos
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Le Réseau Public Départemental d'Aide à Domicile de la Gironde
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nous accompagnons près de 5000 personnes âgées et personnes en situation de handicap
                qui choisissent de vivre à domicile. Grâce à nos agents de la fonction publique,
                nous aidons et soutenons nos bénéficiaires dans les actes de la vie quotidienne.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">1200 agents</h3>
                    <p className="text-sm text-muted-foreground">Professionnels qualifiés</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">5000 personnes</h3>
                    <p className="text-sm text-muted-foreground">Accompagnées quotidiennement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden">
                <Image src="/img/hero.webp" alt="Équipe RPDAD" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <header className="container relative py-14 lg:py-20 flex flex-col lg:flex-row lg:items-center">
        <div className="nc-PageSingleVideo__headerWrap absolute inset-y-0 transform translate-x-1/2 end-1/2 w-screen lg:translate-x-0 lg:w-[calc(100vw/2)]  bg-gradient-to-br lg:from-primary to-primary-dark lg:rounded-e-[40px]" />
        <div className="pb-10 lg:pb-0 lg:pr-10 relative">
          <p>presentation</p>
        </div>
        <div className="relative lg:w-8/12 flex-shrink-0">
          <div className="relative w-full aspect-video border-4 border-neutral-300 dark:border-neutral-800 shadow-2xl bg-neutral-800 rounded-3xl overflow-hidden z-0">
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
          </div>
        </div>
      </header>

      {/* Section Offres d'emploi */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              {totalDocs} offres disponibles
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Nos Offres d'Emploi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rejoignez une équipe engagée et donnez du sens à votre carrière dans l'aide à
              domicile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emplois.map((emploi) => (
              <Card
                key={emploi.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    {getCategoryLabel(emploi.category) && (
                      <Badge variant="secondary" className="text-xs">
                        {getCategoryLabel(emploi.category)}
                      </Badge>
                    )}
                    {emploi.status === 'active' ? (
                      <Badge variant="default" className="text-xs bg-green-500">
                        Actif
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-xs">
                        {emploi.status}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {emploi.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="mb-4 line-clamp-3">
                    {emploi.meta?.description ||
                      'Découvrez cette opportunité professionnelle au sein de notre réseau.'}
                  </CardDescription>

                  <div className="space-y-2 mb-6">
                    {emploi.organization && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span className="truncate">{emploi.organization}</span>
                      </div>
                    )}
                    {emploi.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="truncate">{emploi.location}</span>
                      </div>
                    )}
                    {emploi.publishedAt && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(emploi.publishedAt)}</span>
                      </div>
                    )}
                  </div>

                  <Button asChild className="w-full group-hover:shadow-md transition-all">
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
