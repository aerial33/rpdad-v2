// src/components/sections/ContentSection.tsx
import { ReactNode } from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'

interface CardInfo {
  value: string
  label: string
  className?: string
}

interface ImageInfo {
  src: string
  alt: string
  className?: string
}

interface DotPatternProps {
  className?: string
  rows: number
  cols: number
  dotSize?: string
  dotColor?: string
  gap?: string
  variant?: string
}

interface ContentSectionProps {
  bgClass?: string
  containerClass?: string
  images: ImageInfo[]
  cardInfo: CardInfo
  dotPatternTop?: ReactNode
  dotPatternBottom?: ReactNode
  title: string
  paragraphs: string[]
  highlight?: string
  highlightClass?: string
  buttonText?: string
  buttonHref?: string
  buttonIcon?: ReactNode
}

export function ContentSection({
  bgClass = 'bg-primary-lightest py-10',
  containerClass = 'container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-28 lg:pb-20 xl:pt-28 xl:pb-20 2xl:px-0',
  images,
  cardInfo,
  dotPatternTop,
  dotPatternBottom,
  title,
  paragraphs,
  highlight,
  highlightClass = 'highlight-underline highlight-underline-flamingo',
  buttonText,
  buttonHref,
  buttonIcon,
}: ContentSectionProps) {
  return (
    <section className={bgClass}>
      <div className={containerClass}>
        <div className="mx-[-15px] !mt-[-50px] flex flex-wrap items-center lg:mx-[-20px] xl:mx-[-35px]">
          {/* Colonne images + card */}
          <div className="!relative !mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-7/12 lg:!px-[20px] xl:w-7/12 xl:!px-[35px]">
            {/* DotPattern décoratif en haut */}
            {dotPatternTop}
            <div className="mx-[-15px] !mt-[-25px] flex flex-wrap md:mx-[-12.5px] lg:mx-[-12.5px] xl:mx-[-12.5px]">
              <div className="!mt-[25px] w-full max-w-full flex-[0_0_auto] px-[12.5px] md:w-6/12 lg:w-6/12 xl:w-6/12">
                <figure className="!relative rounded-xl md:!mt-10 lg:!mt-10 xl:!mt-10">
                  {images.find((image, index) => index === 0) && (
                    <img
                      className="rounded-xl"
                      src={images.find((image, index) => index === 0)?.src}
                      srcSet={images.find((image, index) => index === 0)?.src}
                      alt={images.find((image, index) => index === 0)?.alt}
                    />
                  )}
                </figure>
              </div>
              {/* /column */}
              <div className="!mt-[25px] w-full max-w-full flex-[0_0_auto] px-[12.5px] md:w-6/12 lg:w-6/12 xl:w-6/12">
                <div className="mx-[-15px] !mt-[-25px] flex flex-wrap md:mx-[-12.5px] lg:mx-[-12.5px] xl:mx-[-12.5px]">
                  <div className="!mt-[25px] w-full max-w-full flex-[0_0_auto] px-[12.5px] md:!order-2 lg:!order-2 xl:!order-2">
                    <figure className="rounded-xl">
                      {images.find((image, index) => index === 1) && (
                        <img
                          className="rounded-xl"
                          src={images.find((image, index) => index === 1)?.src}
                          srcSet={images.find((image, index) => index === 1)?.src}
                          alt={images.find((image, index) => index === 1)?.alt}
                        />
                      )}
                    </figure>
                  </div>
                  {/* /column */}
                  <div className="!mt-[25px] w-full max-w-full flex-[0_0_auto] px-[12.5px] md:w-10/12 lg:w-10/12 xl:w-10/12">
                    <div className="card from-chateau-lighter to-chateau-lightest rounded-xl bg-gradient-to-bl !text-center">
                      <div className="card-body counter-wrapper !px-[2rem] !py-12">
                        <h3 className="!mb-2 !text-[calc(1.325rem_+_0.9vw)] !leading-none font-semibold !tracking-[normal] !whitespace-nowrap xl:!text-[2rem]">
                          {cardInfo.value}
                        </h3>
                        <p className="!mb-0 text-sm font-medium">{cardInfo.label}</p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}
              </div>
              {/* /column */}
            </div>
          </div>
          {/* Colonne texte */}
          <div className="relative !mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-5/12 lg:!px-[20px] xl:w-5/12 xl:!px-[35px]">
            <h2 className="!mb-3 !leading-[1.3] font-bold">{title}</h2>
            {paragraphs.map((text, i) =>
              i === 0 && highlight ? (
                <p className="feature-paragraph" key={i}>
                  {text.split(highlight)[0]}
                  <span className={highlightClass}>{highlight}</span>
                  {text.split(highlight)[1]}
                </p>
              ) : (
                <p
                  className={cn(
                    i === 0 ? 'feature-paragraph' : 'text-muted-foreground',
                    i === paragraphs.length - 1 && 'mb-8',
                  )}
                  key={i}
                >
                  {text}
                </p>
              ),
            )}
            {buttonText && buttonHref && (
              <Button className="group !mt-8">
                <Link href={buttonHref}>{buttonText}</Link>
                {buttonIcon && (
                  <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">
                    {buttonIcon}
                  </span>
                )}
              </Button>
            )}
            {/* DotPattern décoratif en bas */}
            {dotPatternBottom}
          </div>
        </div>
      </div>
    </section>
  )
}
