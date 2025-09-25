'use client'

import { Card, CardPostData } from '@/components/Card'
import { cn } from '@/utilities/ui'
import React from 'react'

export type Props = {
  posts: CardPostData[]
  relationTo?: 'posts' | 'emplois'
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts, relationTo = 'posts' } = props
  console.log('posts from CollectionArchive', posts)

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8')}>
      {/* <Masonry
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
      </Masonry> */}

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

        <aside className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full sidebar !mt-8 xl:!mt-6 lg:!mt-6">
          <div className="widget">
            <form className="search-form relative before:content-['\eca5'] before:block before:absolute before:-translate-y-2/4 before:text-[0.9rem] before:!text-[#959ca9] before:z-[9] before:right-3 before:top-2/4 font-Unicons">
              <div className="form-floating relative !mb-0">
                <input
                  id="search-form"
                  type="text"
                  className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                  placeholder=""
                />
                <label
                  htmlFor="search-form"
                  className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                >
                  Recherche
                </label>
              </div>
            </form>
          </div>

          <div className="widget !mt-[40px]">
            <h4 className="text-2xl font-bold !mb-3">{'À propos de nous'}</h4>
            <p>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum.
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget
              metus.
            </p>
            <nav className="nav social">
              <a
                className=" text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                href="#"
              >
                <i className=" text-[1rem] !text-[#5daed5] before:content-['\ed59'] uil uil-twitter"></i>
              </a>
              <a
                className=" text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                href="#"
              >
                <i className=" text-[1rem] !text-[#4470cf] before:content-['\eae2'] uil uil-facebook-f"></i>
              </a>
              <a
                className=" text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                href="#"
              >
                <i className=" text-[1rem] !text-[#e94d88] before:content-['\eaa2'] uil uil-dribbble"></i>
              </a>
              <a
                className=" text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                href="#"
              >
                <i className=" text-[1rem] !text-[#d53581] before:content-['\eb9c'] uil uil-instagram"></i>
              </a>
              <a
                className=" text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                href="#"
              >
                <i className=" text-[1rem] !text-[#c8312b] before:content-['\edb5'] uil uil-youtube"></i>
              </a>
            </nav>
          </div>

          <div className="widget !mt-[40px]">
            <h4 className="text-2xl font-bold !mb-3">{'Articles populaires'}</h4>
            <ul className="m-0 p-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible">
              <li className=" clear-both block overflow-hidden">
                <figure className="!rounded-[.4rem] float-left w-14 !h-[4.5rem]">
                  <a href="./blog-post.html">
                    <img
                      className="!rounded-[.4rem]"
                      src="./assets/img/photos/a1.jpg"
                      alt="image"
                    />
                  </a>
                </figure>
                <div className="!relative !ml-[4.25rem] !mb-0">
                  <h6 className="!mb-2">
                    <a className="!text-[#343f52] hover:!text-[#3f78e0]" href="./blog-post.html">
                      Magna Mollis Ultricies
                    </a>
                  </h6>
                  <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                    <li className="post-date inline-block">
                      <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                      <span>26 Mar 2022</span>
                    </li>
                    <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <a
                        className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']"></i>
                        3
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" clear-both block overflow-hidden !mt-4">
                <figure className="!rounded-[.4rem] float-left w-14 !h-[4.5rem]">
                  <a href="./blog-post.html">
                    <img
                      className="!rounded-[.4rem]"
                      src="./assets/img/photos/a2.jpg"
                      alt="image"
                    />
                  </a>
                </figure>
                <div className="!relative !ml-[4.25rem] !mb-0">
                  <h6 className="!mb-2">
                    <a className="!text-[#343f52] hover:!text-[#3f78e0]" href="./blog-post.html">
                      Ornare Nullam Risus
                    </a>
                  </h6>
                  <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                    <li className="post-date inline-block">
                      <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                      <span>16 Feb 2022</span>
                    </li>
                    <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <a
                        className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']"></i>
                        6
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" clear-both block overflow-hidden !mt-4">
                <figure className="!rounded-[.4rem] float-left w-14 !h-[4.5rem]">
                  <a href="./blog-post.html">
                    <img
                      className="!rounded-[.4rem]"
                      src="./assets/img/photos/a3.jpg"
                      alt="image"
                    />
                  </a>
                </figure>
                <div className="!relative !ml-[4.25rem] !mb-0">
                  <h6 className="!mb-2">
                    <a className="!text-[#343f52] hover:!text-[#3f78e0]" href="./blog-post.html">
                      Euismod Nullam Fusce
                    </a>
                  </h6>
                  <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                    <li className="post-date inline-block">
                      <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                      <span>8 Jan 2022</span>
                    </li>
                    <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                      <a
                        className="!text-[#aab0bc] hover:!text-[#3f78e0] hover:!border-[#3f78e0]"
                        href="#"
                      >
                        <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']"></i>
                        5
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="widget !mt-[40px]">
            <h4 className="text-2xl font-bold  !mb-3">Categories</h4>
            <ul className="pl-0 list-none bullet-primary !text-inherit">
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
                <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                  Teamwork (21)
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                  Ideas (19)
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                  Workspace (16)
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                  Coding (7)
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                  Meeting (12)
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                  Business Tips (14)
                </a>
              </li>
            </ul>
          </div>

          <div className="widget !mt-[40px]">
            <h4 className="text-2xl font-bold !mb-3">Archive</h4>
            <ul className="pl-0 list-none bullet-primary !text-inherit">
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
                <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                  February 2019
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                  January 2019
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                  December 2018
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                  November 2018
                </a>
              </li>
              <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
                <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
                  October 2018
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
