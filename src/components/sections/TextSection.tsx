interface TextSectionProps {
  title: string
  content: string
  centered?: boolean
  backgroundColor?: 'white' | 'gray'
}

export default function TextSection({ 
  title, 
  content, 
  centered = false,
  backgroundColor = 'white'
}: TextSectionProps) {
  const bgClass = backgroundColor === 'gray' ? 'bg-secondary' : 'bg-card'
  const alignmentClass = centered ? 'text-center' : 'text-left'

  return (
    <div className={`${bgClass} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl ${alignmentClass}`}>
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-canto-bold">
              {title}
            </h2>
          )}
          {content && (
            <div className="mt-8 text-base leading-7 text-muted-foreground space-y-4 sm:text-lg sm:leading-8 font-muli">
              {content.split('\n\n').map((paragraph, index) => {
                // Handle bold text
                const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                return (
                  <p key={index} dangerouslySetInnerHTML={{ __html: formattedParagraph }} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
