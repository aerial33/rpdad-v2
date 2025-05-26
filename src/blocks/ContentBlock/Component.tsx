import { ContentBlock } from '@/payload-types'

// Composant pour le block de contenu
export const ContenuBlockComponent: React.FC<ContentBlock> = (props) => {
  const { alignment, backgroundColor, content, subtitle, title } = props
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment || 'left']

  const backgroundClass = {
    white: 'bg-white',
    'gray-light': 'bg-gray-100',
    'gray-dark': 'bg-gray-800 text-white',
    blue: 'bg-blue-600 text-white',
    transparent: 'bg-transparent',
  }[backgroundColor || 'white']

  return (
    <div className={`px-4 py-8 ${backgroundClass}`}>
      <div className={`container mx-auto ${alignmentClass}`}>
        <h2 className="mb-4 text-3xl font-bold">{title}</h2>
        {subtitle && <h3 className="mb-6 text-xl text-gray-600">{subtitle}</h3>}
        <div className="prose max-w-none">
          {/* Ici vous pouvez intégrer votre composant RichText */}
          {content && typeof content === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            // Utilisez votre composant RichText si le contenu est structuré
            <div>{JSON.stringify(content)}</div>
          )}
        </div>
      </div>
    </div>
  )
}
