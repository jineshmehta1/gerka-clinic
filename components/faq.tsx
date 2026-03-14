"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: "01",
    question: "Do you have a payment plan?",
    answer: "We believe wellness should be accessible. We offer bespoke payment arrangements and partner with flexible finance providers to spread the cost of your transformation over manageable monthly installments."
  },
  {
    id: "02",
    question: "Is there a parking available?",
    answer: "For your convenience, we provide complimentary private parking directly at the clinic entrance. You will receive a secure access code and arrival instructions within your booking confirmation."
  },
  {
    id: "03",
    question: "What is your cancellation policy?",
    answer: "To maintain our standard of care, we require 48 hours notice for all cancellations. This allows us to reallocate our specialists' time to other patients on our curated waiting list."
  },
  {
    id: "04",
    question: "Do you accept insurance?",
    answer: "While aesthetic procedures are typically private, many of our women's health medical services are recognized by major providers. We provide full documentation to assist with your claims process."
  },
  {
    id: "05",
    question: "What Payment Do You Accept?",
    answer: "We accept all major international credit cards, including American Express, alongside secure digital payments and bank transfers for your convenience."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* CENTERED HEADER WITH PILL */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-zinc-400 bg-zinc-50 border border-zinc-100 mb-4 md:mb-6"
          >
            Concierge Support
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-light text-zinc-900 tracking-tight leading-tight"
          >
            Your Questions, <span className="italic font-serif text-zinc-500 underline decoration-zinc-200 underline-offset-4 md:underline-offset-8">Answered</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* LEFT SIDE: THE ACCORDIONS */}
          <div className="w-full lg:w-[55%] order-2 lg:order-1">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group mb-2 md:mb-4 overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-500 ${
                  openIndex === index ? "bg-[#F9F9F7] p-5 md:p-8" : "bg-transparent p-5 md:p-6 border-b border-zinc-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className={`text-[10px] md:text-[11px] font-bold tracking-widest ${
                      openIndex === index ? "text-zinc-900" : "text-zinc-300"
                    }`}>
                      {faq.id}
                    </span>
                    <span className={`text-base md:text-xl font-medium tracking-tight transition-colors duration-300 ${
                      openIndex === index ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-900"
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`flex-shrink-0 transition-transform duration-500 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                    <ChevronDown size={18} strokeWidth={1.5} className={openIndex === index ? "text-zinc-900" : "text-zinc-300"} />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="pt-4 md:pt-6 pl-8 md:pl-10">
                        <p className="text-zinc-500 leading-relaxed text-sm md:text-lg font-light max-w-xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE: THE EDITORIAL IMAGE */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative px-4 md:px-0"
            >
              {/* Image with high-end framing */}
              <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl z-10">
                <img 
                  src="/faq.png" 
                  alt="Clinical Consultation" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative floating elements - Hidden on smallest mobile to prevent overflow */}
              <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 w-24 h-24 md:w-40 md:h-40 bg-[#F9F9F7] rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 w-40 h-40 md:w-64 md:h-64 border border-zinc-100 rounded-full -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}