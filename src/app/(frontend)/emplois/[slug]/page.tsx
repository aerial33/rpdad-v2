import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import RichText from '@/components/RichText'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'

import { LivePreviewListener } from '@/components/LivePreviewListener'
import { EmploiHero } from '@/heros/EmploiHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const emplois = await payload.find({
    collection: 'emplois',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = emplois.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Emploi({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/emplois/' + slug
  const emploi = await queryEmploiBySlug({ slug })

  if (!emploi) return <PayloadRedirects url={url} />

  return (
    <article className="pt-16 pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <EmploiHero emploi={emploi} />

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">
          <div className="max-w-[48rem] mx-auto space-y-8">
            {/* Description du poste */}
            {emploi.description && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Description du poste</h2>
                <RichText data={emploi.description} enableGutter={false} />
              </div>
            )}

            {/* Compétences requises */}
            {emploi.requiredSkills && emploi.requiredSkills.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Compétences requises</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {emploi.requiredSkills.map((skill, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-semibold">{skill.skill}</h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                        Niveau {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Qualifications */}
            {emploi.qualifications && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Qualifications et expérience</h2>
                <RichText data={emploi.qualifications} enableGutter={false} />
              </div>
            )}

            {/* Avantages */}
            {emploi.benefits && emploi.benefits.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Avantages du poste</h2>
                <ul className="list-disc list-inside space-y-2">
                  {emploi.benefits.map((benefit, index) => (
                    <li key={index}>{benefit.benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Processus de candidature */}
            {emploi.applicationProcess && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Comment postuler</h2>
                <RichText data={emploi.applicationProcess} enableGutter={false} />
              </div>
            )}

            {/* Informations de contact */}
            {(emploi.contactEmail || emploi.contactPhone) && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <div className="space-y-2">
                  {emploi.contactEmail && (
                    <p>
                      <strong>Email :</strong>{' '}
                      <a
                        href={`mailto:${emploi.contactEmail}`}
                        className="text-blue-600 hover:underline dark:text-blue-400"
                      >
                        {emploi.contactEmail}
                      </a>
                    </p>
                  )}
                  {emploi.contactPhone && (
                    <p>
                      <strong>Téléphone :</strong>{' '}
                      <a
                        href={`tel:${emploi.contactPhone}`}
                        className="text-blue-600 hover:underline dark:text-blue-400"
                      >
                        {emploi.contactPhone}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const emploi = await queryEmploiBySlug({ slug })

  return generateMeta({ doc: emploi })
}

const queryEmploiBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'emplois',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
