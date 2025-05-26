// src/components/sections/SectionHeader.tsx
import { ReactNode } from 'react'

import { cn } from '@/utilities/ui'

interface SectionHeaderProps {
  icon?: ReactNode
  title: string
  className?: string
  iconClassName?: string
}

export function SectionHeader({
  icon,
  title,
  className = '',
  iconClassName = '',
}: SectionHeaderProps) {
  return (
    <div className={cn('mx-[-15px] !mb-5 flex flex-wrap', className)}>
      <div className="xxl:w-/12 !mx-auto w-full max-w-full flex-[0_0_auto] !px-[15px] !text-center md:w-10/12 lg:w-10/12 xl:w-8/12">
        {icon && <span className={iconClassName}>{icon}</span>}
        <h2 className="mx-auto mb-4 text-4xl !leading-[1.3] font-semibold text-balance md:text-5xl">
          {title}
        </h2>
      </div>
    </div>
  )
}
