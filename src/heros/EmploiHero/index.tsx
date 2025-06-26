import React from 'react'
import { formatDateTime } from 'src/utilities/formatDateTime'

import type { Emplois } from '@/payload-types'

import { Media } from '@/components/Media'

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
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${config.color}`}>
        {config.label}
      </span>
    )
  }

  return (
    <div className="relative -mt-[30.4rem] flex items-end">
      <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="uppercase text-sm bg-blue-600 px-3 py-1 rounded-full">
              {getCategoryLabel(category)}
            </span>
            {workTime && (
              <span className="uppercase text-sm bg-gray-600 px-3 py-1 rounded-full">
                {getWorkTimeLabel(workTime)}
              </span>
            )}
            {status && getStatusBadge(status)}
          </div>

          <div className="">
            <h1 className="mb-6 text-balance text-3xl md:text-5xl lg:text-6xl text-left">
              {title}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {location && (
              <div className="flex flex-col gap-1">
                <p className="text-sm opacity-80">Lieu</p>
                <p className="font-medium">{location}</p>
              </div>
            )}
            {organization && (
              <div className="flex flex-col gap-1">
                <p className="text-sm opacity-80">Organisation</p>
                <p className="font-medium">{organization}</p>
              </div>
            )}
            {salary && (
              <div className="flex flex-col gap-1">
                <p className="text-sm opacity-80">Salaire</p>
                <p className="font-medium">{salary}</p>
              </div>
            )}
            {startDate && (
              <div className="flex flex-col gap-1">
                <p className="text-sm opacity-80">Date de début</p>
                <p className="font-medium">{formatDateTime(startDate)}</p>
              </div>
            )}
            {endDate && (
              <div className="flex flex-col gap-1">
                <p className="text-sm opacity-80">Date limite de candidature</p>
                <p className="font-medium">{formatDateTime(endDate)}</p>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-1">
                <p className="text-sm opacity-80">Publié le</p>
                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {featuredImage && typeof featuredImage !== 'string' && (
          <Media fill priority imgClassName="-z-10 object-cover object-center" resource={featuredImage} />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  )
}
