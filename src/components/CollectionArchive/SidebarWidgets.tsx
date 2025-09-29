import React from 'react'
import { SearchWidget } from './SearchWidget'

export type SidebarWidgetsProps = {
  aboutTitle?: string
  aboutContent?: string
  popularPosts?: Array<{
    id: string
    title: string
    slug: string
    image?: string
    date: string
    commentsCount: number
  }>
  categories?: Array<{
    id: string
    name: string
    count: number
  }>
}

export const SidebarWidgets: React.FC<SidebarWidgetsProps> = ({
  aboutTitle = 'À propos de nous',
  aboutContent = 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
  popularPosts = [],
  categories = [],
}) => {
  return (
    <aside className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full sidebar !mt-8 xl:!mt-6 lg:!mt-6 self-start lg:sticky lg:top-7">
      <SearchWidget />

      {/* À propos */}
      <div className="widget !mt-[40px]">
        <h4 className="text-2xl font-bold !mb-3">{aboutTitle}</h4>
        <p>{aboutContent}</p>
      </div>

      {/* Articles Populaires */}
      {popularPosts.length > 0 && (
        <div className="widget !mt-[40px]">
          <h4 className="text-2xl font-bold !mb-3">Articles populaires</h4>
          <ul className="m-0 p-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible">
            {popularPosts.map((post, index) => (
              <li
                key={post.id}
                className={`clear-both block overflow-hidden ${index > 0 ? '!mt-4' : ''}`}
              >
                {post.image && (
                  <figure className="!rounded-[.4rem] float-left w-14 !h-[4.5rem]">
                    <a href={`/posts/${post.slug}`}>
                      <img className="!rounded-[.4rem]" src={post.image} alt={post.title} />
                    </a>
                  </figure>
                )}
                <div className="!relative !ml-[4.25rem] !mb-0">
                  <h6 className="!mb-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#3f78e0]"
                      href={`/blog/${post.slug}`}
                    >
                      {post.title}
                    </a>
                  </h6>
                  <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                    <li className="post-date inline-block">
                      <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                      <span>{post.date}</span>
                    </li>
                    <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <a
                        className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']"></i>
                        {post.commentsCount}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <div className="widget !mt-[40px]">
          <h4 className="text-2xl font-bold !mb-3">Categories</h4>
          <ul className="pl-0 list-none bullet-primary !text-inherit">
            {categories.map((category, index) => (
              <li
                key={category.id}
                className={`relative !pl-[1.5rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['✔️'] before:left-0 before:font-SansSerif ${
                  index > 0 ? '!mt-[.35rem]' : ''
                }`}
              >
                <a className="!text-muted-foreground hover:!text-gray-870" href="#">
                  {category.name} ({category.count})
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  )
}
