'use client'

import { motion } from 'framer-motion'

import { useState } from 'react'

import Link from 'next/link'

import { Arrondissement } from '@/components/geomap/arrondissement'
import { FadeUp } from '@/components/motion/animations'
import { Badge } from '@/components/ui/badge'

// Définir une interface pour les propriétés du canton
export interface CantonProperties {
  code: string
  nom: string
  villes?: string[]
  // Ajoutez d'autres propriétés si nécessaire
}

export function MapBlock() {
  const [selectedArea, setSelectedArea] = useState<{
    id: string
    name: string
    villes?: string[]
  } | null>(null)

  const handleAreaClick = (areaId: string, areaName: string, extraData?: CantonProperties) => {
    console.log(extraData)
    if (selectedArea?.id === areaId) {
      setSelectedArea(null)
    } else {
      setSelectedArea({
        id: areaId,
        name: areaName,
        villes: extraData?.villes || [],
      })
    }
  }

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-flamingo-lightest via-pink-50 to-flamingo-lighter relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-gradient-to-r from-flamingo-lightest/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-flamingo-lighter/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-flamingo-light/10 rounded-full blur-2xl"></div>

      <div className="center-element mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10">
        <FadeUp className="p-2 md:p-4">
          <Badge
            variant={'outline'}
            className="bg-flamingo-light text-sm md:text-md mb-2 md:mb-4 text-white px-2 md:px-4 py-1 md:py-2"
          >
            {'les services membres'}
          </Badge>
          <h2 className="my-2 md:my-4 text-lg md:text-3xl text-balance text-gray-800">
            {
              "Les CCAS et CIAS de vos communes ou intercommunalité vous proposent un service d'aide et d'accompagnement à domicile de qualité : "
            }
          </h2>
          <p className="text-balance feature-paragraph font-semibold text-sm md:text-base">
            {
              "Le Réseau Public Départemental d'Aide à Domicile de la Gironde compte à ce jour 33 services membres. Il s'agit exclusivement de services publics de proximité :"
            }
          </p>
          <ul className="mt-2 md:mt-4 list-disc pl-5 text-gray-500 text-xs md:text-base">
            <li>{"Centres Communaux d'Action Sociale (CCAS)"}</li>
            <li>{"Centres Intercommunaux d'Action Sociale (CIAS)"}</li>
          </ul>
          {selectedArea && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-sm mt-2 md:mt-4 rounded-xl p-2 md:p-3 shadow-lg border border-flamingo-lighter/30"
            >
              <p className="text-primary-dark text-sm md:text-base">
                Ville sélectionnée: <strong>{selectedArea.name}</strong>
              </p>

              <div className="mt-1 md:mt-2">
                <p className="text-primary-dark font-medium text-xs md:text-base">
                  Service disponible :
                </p>
                <div className="mt-1">
                  <Link
                    href={`/services-membres/${selectedArea.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-flamingo hover:text-flamingo-dark font-medium underline text-xs md:text-base"
                  >
                    CCAS/CIAS de {selectedArea.name}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </FadeUp>

        {/* Container de la carte avec effet d'ombre et fond */}
        <div className="relative p-2 md:p-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-4 md:p-6 relative overflow-hidden">
            {/* Effet de brillance */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>

            {/* La carte */}
            <div className="-mx-4 md:mx-0 overflow-x-auto">
              <div className="min-w-[380px] md:min-w-0 w-full md:w-[800px] max-w-full filter drop-shadow-sm">
                <Arrondissement
                  onMarkerClick={(marker) => {
                    setSelectedArea({
                      id: marker.name.toLowerCase().replace(/\s+/g, '-'),
                      name: marker.name,
                      villes: [marker.name],
                    })
                  }}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>

          {/* Ombre décorative */}
          <div className="absolute inset-2 md:inset-4 rounded-2xl bg-flamingo-light/10 blur-xl -z-10"></div>
        </div>
      </div>
    </section>
  )
}
