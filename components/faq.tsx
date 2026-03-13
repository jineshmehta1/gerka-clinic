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
    <section className="py-24 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* CENTERED HEADER WITH PILL */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 bg-zinc-50 border border-zinc-100 mb-6"
          >
            Concierge Support
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-zinc-900 tracking-tight"
          >
            Your Questions, <span className="italic font-serif text-zinc-500 underline decoration-zinc-200 underline-offset-8">Answered</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-20">
          
          {/* LEFT SIDE: THE ACCORDIONS */}
          <div className="w-full lg:w-[55%]">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group mb-4 overflow-hidden rounded-3xl transition-all duration-500 ${
                  openIndex === index ? "bg-[#F9F9F7] p-8" : "bg-transparent p-6 border-b border-zinc-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-[11px] font-bold tracking-widest ${
                      openIndex === index ? "text-zinc-900" : "text-zinc-300"
                    }`}>
                      {faq.id}
                    </span>
                    <span className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 ${
                      openIndex === index ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-900"
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`transition-transform duration-500 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                    <ChevronDown size={20} strokeWidth={1.5} className={openIndex === index ? "text-zinc-900" : "text-zinc-300"} />
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
                      <div className="pt-6 pl-10">
                        <p className="text-zinc-500 leading-relaxed text-lg font-light max-w-xl">
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
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Image with high-end framing */}
              <div className="relative aspect-[5/5] overflow-hidden  z-10">
                <img 
                  src="/faq.png" 
                  alt="Clinical Consultation" 
                  className="w-full h-full object-cover hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Decorative floating element */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#F9F9F7] rounded-full -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-zinc-100 rounded-full -z-10" />

              {/* Floating Information Card */}
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}