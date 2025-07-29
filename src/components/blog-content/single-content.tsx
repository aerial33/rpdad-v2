'use client'

import RichText from '@/components/RichText'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import { Post } from '@/payload-types'
import { ArrowUp } from 'lucide-react'
import { FC, RefObject, useEffect, useRef, useState } from 'react'
import NcImage from '../Media/NcImage/NcImage'
import ArticleMeta from './ArticleMeta'
import SingleTitle from './SingleTitle'

export interface SingleContentProps {
  post: Post
  hiddenDesc?: boolean
}
export interface SingleHeaderProps {
  hiddenDesc?: boolean
  titleMainClass?: string
  className?: string
}

const SingleContent: FC<SingleContentProps> = ({ post, hiddenDesc }: SingleContentProps) => {
  const endedAnchorRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLButtonElement>(null)
  //
  const [isShowScrollToTop, setIsShowScrollToTop] = useState<boolean>(false)
  //

  const endedAnchorEntry = useIntersectionObserver(endedAnchorRef as RefObject<HTMLDivElement>, {
    threshold: 0,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: false,
  })
  console.log('POst:', post)
  useEffect(() => {
    const handleProgressIndicator = () => {
      const entryContent = contentRef.current
      const progressBarContent = progressRef.current

      if (!entryContent || !progressBarContent) {
        return
      }

      const totalEntryH = entryContent.offsetTop + entryContent.offsetHeight
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop
      let scrolled = (winScroll / totalEntryH) * 100

      progressBarContent.innerText = scrolled.toFixed(0) + '%'

      if (scrolled >= 100) {
        setIsShowScrollToTop(true)
      } else {
        setIsShowScrollToTop(false)
      }
    }

    const handleProgressIndicatorHeadeEvent = () => {
      window?.requestAnimationFrame(handleProgressIndicator)
    }
    handleProgressIndicator()
    window?.addEventListener('scroll', handleProgressIndicatorHeadeEvent)
    return () => {
      window?.removeEventListener('scroll', handleProgressIndicatorHeadeEvent)
    }
  }, [])

  const showLikeAndCommentSticky =
    !endedAnchorEntry?.intersectionRatio && (endedAnchorEntry?.boundingClientRect.top || 0) > 0

  return (
    <div className="relative">
      <div className={`nc-PageSingle pt-8 py-4`}>
        <header className="container rounded-xl">
          <div className="max-w-screen-md mx-auto">
            <div className="space-y-2">
              {/* <CategoryBadgeList 
                itemClass="!px-3" 
                categories={[DEMO_CATEGORIES[1]]} 
              /> */}
              <SingleTitle title={post.title} />
              {!hiddenDesc && (
                <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis tempora
                  obcaecati error ipsum voluptatibus sed adipisci ut maiores nesciunt quam.
                </span>
              )}
              <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse mb-4">
                {/* <PostMeta2
                  size="large"
                  className="leading-none flex-shrink-0"
                  hiddenCategories
                  avatarRounded="rounded-full shadow-inner"
                /> */}
                {/* <SingleMetaAction2 /> */}
                <ArticleMeta
                  author={{ name: 'Marion M.', avatar: '' }}
                  date="May 20, 2021"
                  readTime="2 min read"
                  likes={34}
                  comments={110}
                />
              </div>
            </div>
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <NcImage
          alt="single"
          containerClassName="container my-10 sm:my-12"
          className="w-full rounded-xl"
          //@ts-ignore
          src={post.heroImage?.url || null}
          width={1260}
          height={750}
          sizes="(max-width: 1024px) 100vw, 1280px"
        />
      </div>
      <div className="nc-SingleContent space-y-10">
        {/* ENTRY CONTENT */}
        <div
          id="single-entry-content"
          className="prose lg:prose-lg !max-w-screen-md mx-auto dark:prose-invert"
          ref={contentRef}
        >
          <RichText data={post.content} enableGutter={false} />
        </div>
        <div className="max-w-screen-md mx-auto">
          <div ref={endedAnchorRef}></div>
        </div>
      </div>
      <div className={`sticky mt-8 bottom-8 z-40 justify-end rounded-full w-12 h-12 ml-auto mr-4`}>
        <div className="bg-white dark:bg-neutral-800 shadow-lg rounded-full ring-1 ring-offset-1 ring-neutral-900/5 p-1.5 flex items-center justify-center space-x-2 rtl:space-x-reverse text-xs">
          <button
            className={`w-9 h-9 items-center justify-center bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 rounded-full ${
              isShowScrollToTop ? 'flex' : 'hidden'
            }`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          <button
            ref={progressRef}
            className={`w-9 h-9 items-center justify-center ${
              isShowScrollToTop ? 'hidden' : 'flex'
            }`}
            title="Go to top"
          >
            %
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleContent
