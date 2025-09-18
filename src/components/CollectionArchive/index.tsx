'use client'

import { Card, CardPostData } from '@/components/Card'
import { cn } from '@/utilities/ui'
import React from 'react'
import Masonry from 'react-masonry-css'

export type Props = {
  posts: CardPostData[]
  relationTo?: 'posts' | 'emplois'
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts, relationTo = 'posts' } = props

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8 border border-primary')}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <Card
                key={index}
                doc={result}
                relationTo={relationTo}
                showCategories
                className="w-full"
              />
            )
          }

          return null
        })}
      </Masonry>
    </div>
  )
}
