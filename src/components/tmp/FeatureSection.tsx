// src/components/sections/FeatureSection.tsx
import { ReactNode } from 'react'

interface FeatureSectionProps {
  title: string
  mainText: string
  secondaryText: string[]
  icon?: ReactNode
  imageUrls: string[]
  bulletLists: string[][]
  bulletIcon?: ReactNode
}

export function FeatureSection({
  title,
  mainText,
  secondaryText,
  icon,
  imageUrls,
  bulletLists,
  bulletIcon,
}: FeatureSectionProps) {
  return (
    <div className="mx-[-15px] !mt-[-50px] !mb-[4.5rem] flex flex-wrap items-center md:!mb-[7rem] lg:mx-[-20px] lg:!mb-[7rem] xl:mx-[-35px] xl:!mb-[7rem]">
      {/* Images */}
      <div className="!relative !mt-[50px] w-full max-w-full flex-[0_0_auto]  !px-[15px] lg:!order-2 lg:w-6/12 lg:!px-[20px] xl:!order-2 xl:w-6/12 xl:!px-[35px]">
        <div className="overlap-grid-2 !relative flex flex-wrap">
          {imageUrls.map((url, i) => (
            <div
              key={i}
              className={
                i === 0
                  ? 'item md:z-[3] md:!mt-0 md:ml-[30%] md:w-[70%] lg:z-[3] lg:!mt-0 lg:ml-[30%] lg:w-[70%] xl:z-[3] xl:!mt-0 xl:ml-[30%] xl:w-[70%]'
                  : 'item md:z-[4] md:!mt-[-45%] md:ml-0 md:w-[55%] lg:z-[4] lg:!mt-[-45%] lg:ml-0 lg:w-[55%] xl:z-[4] xl:!mt-[-45%] xl:ml-0 xl:w-[55%]'
              }
            >
              <figure className="relative rounded-lg shadow-[0_0_1.25rem_rgba(30,34,40,0.04)]">
                <img className="rounded-lg" src={url} alt={`image-${i + 1}`} />
              </figure>
            </div>
          ))}
        </div>
      </div>
      {/* Texte et listes */}
      <div className="!mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-6/12 lg:!px-[20px] xl:w-6/12 xl:!px-[35px]">
        {icon && icon}
        <h2 className="!mb-3 !leading-[1.3] font-bold">{title}</h2>
        <p className="feature-paragraph mb-4 font-normal">{mainText}</p>
        {Array.isArray(secondaryText) ? (
          secondaryText.map((text, index) => (
            <p key={index} className="text-muted-foreground !mb-2">
              {text}
            </p>
          ))
        ) : (
          <p className="text-muted-foreground !mb-6">{secondaryText}</p>
        )}
        <div className="mx-[-15px] flex flex-wrap mt-4 xl:mx-[-20px]">
          {bulletLists.map((list, idx) => (
            <div
              key={idx}
              className="!mt-[15px] w-full max-w-full flex-[0_0_auto] !px-[15px] xl:w-6/12 xl:!px-[20px]"
            >
              <ul className="bullet-bg bullet-soft-primary !mb-0 list-none pl-0">
                {list.map((item, i) => (
                  <li key={i} className={`relative ${i > 0 ? '!mt-3' : ''} !pl-6`}>
                    <span>{bulletIcon}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
