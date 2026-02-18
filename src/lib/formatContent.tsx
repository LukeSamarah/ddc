import React from 'react'

/**
 * Renders a paragraph string with **bold** markdown syntax as safe JSX.
 * Replaces dangerouslySetInnerHTML to prevent XSS vulnerabilities.
 */
export function renderFormattedParagraph(paragraph: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  const boldRegex = /\*\*(.*?)\*\*/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = boldRegex.exec(paragraph)) !== null) {
    if (match.index > lastIndex) {
      parts.push(paragraph.slice(lastIndex, match.index))
    }
    parts.push(<strong key={match.index}>{match[1]}</strong>)
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < paragraph.length) {
    parts.push(paragraph.slice(lastIndex))
  }

  return parts
}

/**
 * Splits content by double newlines and renders each paragraph with bold formatting.
 */
export function FormattedContent({ content }: { content: string }) {
  return (
    <>
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index}>{renderFormattedParagraph(paragraph)}</p>
      ))}
    </>
  )
}
