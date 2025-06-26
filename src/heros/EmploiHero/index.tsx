import React from 'react'
import { formatDateTime } from 'src/utilities/formatDateTime'

import type { Emplois } from '@/payload-types'

import { DotPattern } from '@/components/DotPattern'
import { Media } from '@/components/Media'
import { FadeLeft, FadeUp } from '@/components/motion/animations'
import { Badge } from '@/components/ui/badge'

export const EmploiHero: React.FC<{
  emploi: Emplois
}> = ({ emploi }) => {
  const {
    category,
    featuredImage,
    location,
    organization,
    publishedAt,
    salary,
    title,
    workTime,
    status,
    startDate,
    endDate,
  } = emploi

  const getCategoryLabel = (category: string) => {
    const categoryMap = {
      cdi: 'CDI',
      cdd: 'CDD',
      stage: 'Stage',
      alternance: 'Alternance',
      benevolat: 'Bénévolat',
    }
    return categoryMap[category as keyof typeof categoryMap] || category
  }

  const getWorkTimeLabel = (workTime: string) => {
    const workTimeMap = {
      'full-time': 'Temps plein',
      'part-time': 'Temps partiel',
      flexible: 'Horaires flexibles',
    }
    return workTimeMap[workTime as keyof typeof workTimeMap] || workTime
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: 'Active', color: 'bg-green-500' },
      filled: { label: 'Pourvue', color: 'bg-gray-500' },
      expired: { label: 'Expirée', color: 'bg-red-500' },
    }
    const config = statusConfig[status as keyof typeof statusConfig] || {
      label: status,
      color: 'bg-gray-500',
    }
    return (
      <Badge variant="outline" className={`${config.color} text-white border-transparent`}>
        {config.label}
      </Badge>
    )
  }

  return (
    <section className="relative overflow-hidden min-h-[80vh] lg:min-h-[90vh]">
      {/* Version mobile/tablet - Image de fond complète */}
      <div className="lg:hidden">
        <div className="absolute inset-0 z-0">
          {featuredImage && typeof featuredImage !== 'string' && (
            <FadeUp duration={0.8}>
              <Media
                fill
                priority
                imgClassName="object-cover object-center"
                resource={featuredImage}
              />
            </FadeUp>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Patterns décoratifs mobile */}
        <div className="absolute top-4 left-4 z-10 opacity-30">
          <FadeUp delay={0.2} duration={0.6}>
            <DotPattern
              className="w-24 h-24"
              dotColor="bg-white"
              dotSize="sm"
              gap="sm"
              rows={6}
              cols={6}
            />
          </FadeUp>
        </div>

        {/* Contenu mobile */}
        <div className="relative z-20 flex items-center min-h-[80vh]">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl">
              {/* Badges de statut */}
              <FadeUp delay={0.1} duration={0.6}>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge
                    variant="outline"
                    className="bg-primary text-white border-transparent font-medium"
                  >
                    {getCategoryLabel(category)}
                  </Badge>
                  {workTime && (
                    <Badge
                      variant="outline"
                      className="bg-chateau-base text-white border-transparent"
                    >
                      {getWorkTimeLabel(workTime)}
                    </Badge>
                  )}
                  {status && getStatusBadge(status)}
                </div>
              </FadeUp>

              {/* Titre */}
              <FadeUp delay={0.3} duration={0.8}>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-balance leading-tight">
                  {title}
                </h1>
              </FadeUp>

              {/* Grille d'informations mobile */}
              <FadeUp delay={0.5} duration={0.6}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {location && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-sm text-white/80 mb-1">Lieu</p>
                      <p className="text-white font-medium">{location}</p>
                    </div>
                  )}
                  {organization && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-sm text-white/80 mb-1">Organisation</p>
                      <p className="text-white font-medium">{organization}</p>
                    </div>
                  )}
                  {salary && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-sm text-white/80 mb-1">Salaire</p>
                      <p className="text-white font-medium">{salary}</p>
                    </div>
                  )}
                  {startDate && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-sm text-white/80 mb-1">Date de début</p>
                      <p className="text-white font-medium">{formatDateTime(startDate)}</p>
                    </div>
                  )}
                  {endDate && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-sm text-white/80 mb-1">Date limite</p>
                      <p className="text-white font-medium">{formatDateTime(endDate)}</p>
                    </div>
                  )}
                  {publishedAt && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-sm text-white/80 mb-1">Publié le</p>
                      <time className="text-white font-medium" dateTime={publishedAt}>
                        {formatDateTime(publishedAt)}
                      </time>
                    </div>
                  )}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>

      {/* Version desktop - Split diagonal */}
      <div className="hidden lg:flex lg:min-h-[90vh]">
        {/* Section contenu (gauche) */}
        <div
          className="relative w-full lg:w-3/5 xl:w-2/3 bg-gradient-to-br from-primary to-primary-dark flex items-center shadow rounded-bl-4xl"
          style={{
            clipPath: 'polygon(0 0, 85% 0, 95% 100%, 0 100%)',
          }}
        >
          {/* Patterns décoratifs desktop */}
          <FadeUp delay={0.4} duration={0.6}>
            <div className="absolute top-8 left-8 z-10 opacity-20">
              <DotPattern
                className="w-32 h-32"
                dotColor="bg-flamingo-lighter"
                dotSize="sm"
                gap="sm"
                rows={8}
                cols={8}
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.6} duration={0.6}>
            <div className="absolute bottom-8 left-1/3 z-10 opacity-15">
              <DotPattern
                className="w-40 h-40"
                dotColor="bg-chateau-lighter"
                dotSize="md"
                gap="sm"
                rows={6}
                cols={6}
              />
            </div>
          </FadeUp>

          {/* Contenu principal avec animation */}
          <FadeLeft delay={0.2} duration={0.8}>
            <div className="relative z-20 w-full max-w-2xl ml-8 xl:ml-16 pr-16">
              {/* Badges de statut */}
              <FadeUp delay={0.3} duration={0.6}>
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <Badge
                    variant="outline"
                    className="bg-flamingo text-white border-flamingo font-medium backdrop-blur-sm"
                  >
                    {getCategoryLabel(category)}
                  </Badge>
                  {workTime && (
                    <Badge
                      variant="outline"
                      className="bg-chateau-base text-white border-chateau-base backdrop-blur-sm"
                    >
                      {getWorkTimeLabel(workTime)}
                    </Badge>
                  )}
                  {status && getStatusBadge(status)}
                </div>
              </FadeUp>

              {/* Titre principal */}

              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-10 text-balance leading-tight">
                {title}
              </h1>

              {/* Grille d'informations desktop */}
              <FadeUp delay={0.7} duration={0.6}>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {location && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-flamingo-lighter/20 transition-colors">
                      <p className="text-sm text-white/80 mb-2 font-medium">Lieu</p>
                      <p className="text-white font-semibold">{location}</p>
                    </div>
                  )}
                  {organization && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-flamingo-lighter/20 transition-colors">
                      <p className="text-sm text-white/80 mb-2 font-medium">Organisation</p>
                      <p className="text-white font-semibold">{organization}</p>
                    </div>
                  )}
                  {salary && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-flamingo-lighter/20 transition-colors">
                      <p className="text-sm text-white/80 mb-2 font-medium">Salaire</p>
                      <p className="text-white font-semibold">{salary}</p>
                    </div>
                  )}
                  {startDate && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-flamingo-lighter/20 transition-colors">
                      <p className="text-sm text-white/80 mb-2 font-medium">Date de début</p>
                      <p className="text-white font-semibold">{formatDateTime(startDate)}</p>
                    </div>
                  )}
                  {endDate && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-flamingo-lighter/20 transition-colors xl:col-span-2">
                      <p className="text-sm text-white/80 mb-2 font-medium">
                        Date limite de candidature
                      </p>
                      <p className="text-white font-semibold">{formatDateTime(endDate)}</p>
                    </div>
                  )}
                  {publishedAt && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-flamingo-lighter/20 transition-colors xl:col-span-2">
                      <p className="text-sm text-white/80 mb-2 font-medium">Publié le</p>
                      <time className="text-white font-semibold" dateTime={publishedAt}>
                        {formatDateTime(publishedAt)}
                      </time>
                    </div>
                  )}
                </div>
              </FadeUp>
            </div>
          </FadeLeft>
        </div>

        {/* Section image (droite) */}
        <div className="relative w-2/5 xl:w-1/3">
          <FadeUp delay={0.2} duration={0.8}>
            {featuredImage && typeof featuredImage !== 'string' && (
              <Media
                fill
                priority
                imgClassName="object-cover object-center"
                resource={featuredImage}
              />
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
