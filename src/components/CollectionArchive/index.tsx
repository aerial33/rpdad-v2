import { Card, CardPostData } from '@/components/Card'
import { cn } from '@/utilities/ui'
import React from 'react'
import { SidebarWidgets, type SidebarWidgetsProps } from './SidebarWidgets'

export type Props = {
  posts: CardPostData[]
  relationTo?: 'posts' | 'emplois'
  sidebarProps?: SidebarWidgetsProps
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts, relationTo = 'posts', sidebarProps } = props

  return (
    <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8')}>
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px]">
        <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px]">
          <div className="blog classic-view">
            <article className="post !mb-8">
              {posts && posts.length > 0 && (
                <Card
                  doc={posts[0]}
                  relationTo={relationTo}
                  showCategories
                  variant="featured"
                  className="shadow-card"
                />
              )}
            </article>
          </div>

          <div className="blog itemgrid grid-view">
            <div className="flex flex-wrap mx-[-15px] isotope xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-40px] !mb-8">
              {posts?.slice(1).map((result, index) => {
                if (typeof result === 'object' && result !== null) {
                  return (
                    <article
                      key={index + 1}
                      className="item post xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] !px-[15px] max-w-full"
                    >
                      <Card doc={result} relationTo={relationTo} showCategories variant="grid" />
                    </article>
                  )
                }
                return null
              })}
            </div>
          </div>
        </div>

        <SidebarWidgets {...sidebarProps} />
      </div>
    </div>
  )
}
