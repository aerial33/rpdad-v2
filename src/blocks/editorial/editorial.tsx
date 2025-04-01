import { Button } from '@/components/ui/button'
import { EditorialBlock as EditorialBlockType } from '@/payload-types'

export const EditorialBlock: React.FC<EditorialBlockType> = ({ title, description, image }) => {
  return (
    <section className="py-32">
      <div className="center-element">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-8 lg:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="lg:text-left">
              {title ?? "Découvrez nos services d'aide à domicile adaptés à vos besoins."}
            </h2>
            <div className="mt-8 flex space-x-4 lg:justify-start">
              <Button>En savoir plus</Button>
            </div>
          </div>
          <p className="mb-8 max-w-xl text-center text-zinc-600 lg:text-left">
            {description ??
              'Les agents de la fonction publique vous aident et vous accompagnent dans les actes de la vie quotidienne. Ils vous apportent un service dans un esprit de coopération avec vous et avec les autres acteurs qui interviennent auprès de vous….'}
          </p>
        </div>
      </div>
    </section>
  )
}
