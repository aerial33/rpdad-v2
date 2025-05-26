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
    <section className="py-12">
      <div className="center-element mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <FadeUp className="p-4">
          <Badge variant={'outline'} className="bg-flamingo-light text-md mb-4 text-white">
            {'les services membres'}
          </Badge>
          <h2 className="my-4 text-xl text-balance text-gray-800 md:text-3xl">
            {
              "Les CCAS et CIAS de vos communes ou intercommunalité vous proposent un service d'aide et d'accompagnement à domicile de qualité : "
            }
          </h2>
          <p className="text-balance feature-paragraph font-semibold">
            {
              "Le Réseau Public Départemental d'Aide à Domicile de la Gironde compte à ce jour 33 services membres. Il s'agit exclusivement de services publics de proximité :"
            }
          </p>
          <ul className="mt-4 list-disc pl-5 text-gray-500">
            <li>{"Centres Communaux d'Action Sociale (CCAS)"}</li>
            <li>{"Centres Intercommunaux d'Action Sociale (CIAS)"}</li>
          </ul>
          {selectedArea && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-flamingo-lightest mt-4 rounded-md p-3"
            >
              <p className="text-primary-dark">
                Ville sélectionnée: <strong>{selectedArea.name}</strong>
              </p>

              <div className="mt-2">
                <p className="text-primary-dark font-medium">Service disponible :</p>
                <div className="mt-1">
                  <Link
                    href={`/services-membres/${selectedArea.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-flamingo hover:text-flamingo-dark font-medium underline"
                  >
                    CCAS/CIAS de {selectedArea.name}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </FadeUp>
        <div className="p-4">
          <Arrondissement
            onMarkerClick={(marker) => {
              setSelectedArea({
                id: marker.name.toLowerCase().replace(/\s+/g, '-'),
                name: marker.name,
                villes: [marker.name], // Pour l'instant, on met juste le nom de la ville
              })
            }}
          />
          {/* <MapGironde
            highlightedAreaId={selectedArea?.id || null}
            onAreaClick={handleAreaClick}
            width={800}
            height={800}
            className="shadow"
          /> */}
        </div>
      </div>
    </section>
  )
}
