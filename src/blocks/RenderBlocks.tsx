import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ActuBlock } from '@/blocks/ActuBlock/Component'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { EditorialBlock } from '@/blocks/editorial/editorial'
import { MapBlock } from '@/blocks/map/map-gironde'
import { BentoGridBlock } from './Bento/Component'
import { CallToActionBlock } from './CallToAction/Component'
import { CallToActionBlockComponent } from './CallToActionBlock/Component'
import { ContenuBlockComponent } from './ContentBlock/Component'
import { ContentWithImage } from './ContentWithImage/Component'

const blockComponents = {
  archive: ArchiveBlock,
  contenu: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  editorial: EditorialBlock,
  bentoCard: BentoGridBlock,
  callToAction: CallToActionBlockComponent,
  contenuBlock: ContenuBlockComponent,
  contentWithImage: ContentWithImage,
  map: MapBlock,
  actu: ActuBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
