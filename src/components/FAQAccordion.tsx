'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqData: FAQItem[]
}

export default function FAQAccordion({ faqData }: FAQAccordionProps) {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <div className="w-full space-y-4">
      {faqData.map((faq) => (
        <div
          key={faq.id}
          className="border border-border rounded-lg bg-card shadow-sm overflow-hidden"
        >
          <button
            type="button"
            onClick={() => toggleItem(faq.id)}
            className="flex w-full items-center justify-between px-6 py-6 text-left text-lg font-semibold text-foreground hover:text-[#e88906] transition-colors font-canto-bold"
          >
            {faq.question}
            <ChevronDown
              className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                openItem === faq.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-200 ease-in-out ${
              openItem === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-6 text-muted-foreground font-muli leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
