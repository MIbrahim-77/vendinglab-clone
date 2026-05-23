'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqItems = [
  {
    question: 'Q1. Tell me how to become your distributor.',
    answer:
      'We grow through partnerships with capable distributors worldwide. Distributors receive commissions on the units of CafeXbot that they purchase. Distributor should be able to maintain a technical staff and have user experience operating their CafeXbot. As such, we will require every distributor to purchase at least one CafeXbot and undergo training in our lab. If Distributor would like to be exclusive in their area they will need to purchase 3+ CafeXbots, depending on their area size.',
  },
  {
    question: 'Q2. How do VLT Robotics\' café solutions work technologically?',
    answer: '',
  },
  {
    question: 'Q3: Details About Coffee System',
    answer: '',
  },
  {
    question: 'Q4: Details About Ice Cream System',
    answer: '',
  },
  {
    question: 'Q5: Details About Cakes & Cookies Station',
    answer: '',
  },
  {
    question: 'Q6: Details About Milkshake System',
    answer: '',
  },
  {
    question: 'Q7: Details About Tea System',
    answer: '',
  },
]

const characteristicsItems = [
  {
    question: 'Robotic Cafe Provides Great Return on Investment!',
    answer:
      "Let\u2019s be frank. As an investor, you\u2019re purchasing CafeXbot because you love the technology and see it as a profitable business. Its unique set of products and features ensure excellent returns, especially when placed in the right location. These benefits make CafeXbot a standout choice among robotic cafes. Many of them are listed in points below. \n\nAnd hey, on contrary to any other company producing robotic cafes, we can prove that CafeXbot makes money by showing you life cases and their numbers as they continue serving even while you are reading this article.",
  },
  {
    question: 'More Product Options in CafeXbot Robotic Cafe',
    answer: '',
  },
  {
    question: 'CafeXbot is the only cafe in the WORLD(!) serving up to 3 cups in one order',
    answer: '',
  },
  {
    question: 'Control CafeXbot Robot Cafe With Your Mobile Device',
    answer: '',
  },
  {
    question: 'Enjoy Full Process Automation',
    answer: '',
  },
  {
    question: 'Multiple Payment Options',
    answer: '',
  },
  {
    question: 'Experienced Robotic Cafe Support Team',
    answer: '',
  },
  {
    question: 'Equipment Tested With Time',
    answer: '',
  },
  {
    question: 'Personalised Robotic Cafe Communication',
    answer: '',
  },
]

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="max-w-5xl mx-auto mb-2">
      <button
        type="button"
        onClick={onClick}
        className={`w-full flex justify-between items-center py-4 px-6 cursor-pointer text-left ${
          isOpen
            ? 'bg-yellow-600 text-gray-900 font-bold'
            : 'bg-[#1a1a1a] text-white font-semibold'
        }`}
      >
        <span className="text-base">{question}</span>
        {isOpen ? <ChevronUp size={20} className="shrink-0 ml-4" /> : <ChevronDown size={20} className="shrink-0 ml-4" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && answer && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="bg-white border border-t-0 border-gray-200 py-6 px-6 text-gray-700 text-base leading-relaxed whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function RoboticCafeFaqSection() {
  const [openFaq, setOpenFaq] = useState<number>(0)
  const [openChar, setOpenChar] = useState<number>(0)

  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-gray-900 font-bold text-4xl text-center mb-10">
        Frequently Asked Questions
      </h2>

      {faqItems.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question}
          answer={item.answer}
          isOpen={openFaq === i}
          onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
        />
      ))}

      <h2 className="text-gray-900 font-bold text-4xl text-center mt-16 mb-10">
        CafeXbot Characteristics
      </h2>

      {characteristicsItems.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question}
          answer={item.answer}
          isOpen={openChar === i}
          onClick={() => setOpenChar(openChar === i ? -1 : i)}
        />
      ))}
    </section>
  )
}
