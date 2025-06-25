import { ArrowLeft, ArrowRight, Download, ExternalLink } from 'lucide-react'

import { ContentSection } from '@/blocks/contenSection/ContentSection'
import { DotPattern } from '@/components/DotPattern'
import type { ContentSectionBlock as ContentSectionBlockType } from '@/payload-types'

const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case 'arrow-right':
      return <ArrowRight />
    case 'arrow-left':
      return <ArrowLeft />
    case 'external-link':
      return <ExternalLink />
    case 'download':
      return <Download />
    default:
      return null
  }
}

export const ContentSectionBlock: React.FC<ContentSectionBlockType> = ({
  images,
  cardInfo,
  title,
  content,
  button,
  dotPatterns,
  bgClass,
}) => {
  // Transform images data from PayloadCMS
  const transformedImages =
    images?.map((imageItem) => ({
      src: typeof imageItem.image === 'object' ? imageItem.image.url || '' : '',
      alt: imageItem.alt || '',
    })) || []

  // Create dot patterns
  const dotPatternTop = dotPatterns?.top?.enabled ? (
    <DotPattern
      className={dotPatterns.top.className || ''}
      rows={dotPatterns.top.rows || 11}
      cols={dotPatterns.top.cols || 11}
      dotSize={dotPatterns.top.dotSize || 'md'}
      dotColor={dotPatterns.top.dotColor || 'bg-flamingo'}
      gap={dotPatterns.top.gap || 'md'}
    />
  ) : null

  const dotPatternBottom = dotPatterns?.bottom?.enabled ? (
    <DotPattern
      className={dotPatterns.bottom.className || ''}
      variant={dotPatterns.bottom.variant as any}
      rows={dotPatterns.bottom.rows || 9}
      cols={dotPatterns.bottom.cols || 9}
      dotSize={dotPatterns.bottom.dotSize || 'sm'}
      dotColor={dotPatterns.bottom.dotColor || 'bg-primary-dark'}
    />
  ) : null

  return (
    <ContentSection
      images={transformedImages}
      cardInfo={cardInfo}
      dotPatternTop={dotPatternTop}
      dotPatternBottom={dotPatternBottom}
      title={title}
      content={content}
      buttonText={button?.text || undefined}
      buttonHref={button?.href || undefined}
      buttonIcon={button?.icon ? getIconComponent(button.icon) : undefined}
      bgClass={bgClass || 'bg-primary-lightest py-10'}
    />
  )
}
