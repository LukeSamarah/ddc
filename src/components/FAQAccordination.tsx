'use client'

import { useState } from 'react'

interface FAQData {
  id: number
  question: string
  answer: string
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQData, isOpen: boolean, onToggle: () => void }) {
  return (
<div className="border-b border-border last:border-b-0">
      <button
        className="w-full py-6 px-0 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors duration-200"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold text-foreground pr-4 font-canto-bold">
          {faq.question}
        </h3>
        <div className={`flex-shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-[#e88906]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pb-6 pr-8">
          <p className="text-muted-foreground leading-relaxed font-muli">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQAccordion({ faqData }: { faqData: FAQData[] }) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="space-y-0">
      {faqData.map((faq) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={openItems.includes(faq.id)}
          onToggle={() => toggleItem(faq.id)}
        />
      ))}
    </div>
  )
}
