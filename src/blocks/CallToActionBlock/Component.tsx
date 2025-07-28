import { CallToActionBlock, Media } from '@/payload-types'

// Composant pour le block Call to Action
export const CallToActionBlockComponent: React.FC<CallToActionBlock> = (props) => {
  const { title, description, buttons, backgroundImage } = props

  // Vérifier si l'image est un objet Media complet ou juste un ID
  const isImagePopulated =
    backgroundImage && typeof backgroundImage === 'object' && 'url' in backgroundImage
  const imageData = isImagePopulated ? (backgroundImage as Media) : null

  const buttonStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  }

  return (
    <div className="relative overflow-hidden px-4 py-16">
      {backgroundImage && (
        <div className="bg-opacity-50 absolute inset-0 bg-gradient-to-tr from-gray-600 to-gray-700">
          <img
            src={imageData?.url as string}
            alt={imageData?.alt || ''}
            className="h-full w-full object-cover mix-blend-overlay"
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">{title}</h2>
        {description && (
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100">{description}</p>
        )}

        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
                  buttonStyles[button.style || 'primary']
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
