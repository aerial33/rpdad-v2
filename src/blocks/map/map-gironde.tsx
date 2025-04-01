'use client'

import { motion } from 'framer-motion'

import { useState } from 'react'

import Link from 'next/link'

import { MapGironde } from '@/components/geomap/gironde'
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
          <p className="text-balance text-gray-500">
            {
              "Le Réseau Public Départemental d'Aide à Domicile de la Gironde compte à ce jour 32 services membres. Il s'agit exclusivement de services publics de proximité :"
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
                Zone sélectionnée: <strong>{selectedArea.name}</strong>
              </p>

              {selectedArea.villes && selectedArea.villes.length > 0 && (
                <div className="mt-2">
                  <p className="text-primary-dark font-medium">Services disponibles :</p>
                  <ul className="mt-1 list-disc pl-5 text-gray-700">
                    {selectedArea.villes.map((ville, index) => (
                      <li key={index}>
                        {' '}
                        <Link href={`/services-membres/${ville}`}>{ville}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </FadeUp>
        <div className="p-4">
          <MapGironde
            highlightedAreaId={selectedArea?.id || null}
            onAreaClick={handleAreaClick}
            width={800}
            height={800}
            className="shadow"
          />
        </div>
      </div>
    </section>
  )
}
