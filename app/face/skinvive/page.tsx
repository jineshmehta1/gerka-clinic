"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, Check, Info, Sparkles, ChevronRight } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const skinViveBenefits = [
  "Deep skin hydration",
  "Improved smoothness and texture",
  "Natural glow without volume",
  "Minimal downtime",
  "Suitable for all skin types"
]

const skinViveSuitable = [
  "Dehydrated or dull skin",
  "Uneven skin texture",
  "Loss of radiance",
  "Patients seeking natural results",
  "Preventative skin ageing"
]

export default function SkinVivePage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-20">
      
      {/* 1. NAVIGATION / BREADCRUMB */}
      <div className="pt-32 pb-8 px-6 md:px-10 max-w-7xl mx-auto">
        <Link href="/" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to services</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* 2. REUSABLE SIDEBAR */}
          <ServiceSidebar 
            activeService="SkinVive" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-8 order-2 md:order-1">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight">SkinVive</h1>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-2 bg-white border border-zinc-100 px-4 py-2 rounded-full text-xs font-medium text-zinc-600">
                      <Euro size={14} className="text-zinc-400" /> 1ml 375€
                    </span>
                    <span className="flex items-center gap-2 bg-white border border-zinc-100 px-4 py-2 rounded-full text-xs font-medium text-zinc-600">
                      <Clock size={14} className="text-zinc-400" /> 20–30 Minutes
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-light text-zinc-800 leading-tight">
                    Advanced Injectable <span className="italic font-serif text-zinc-500">hydration</span> to improve skin quality.
                  </h2>
                  <p className="text-zinc-500 font-light leading-relaxed text-lg">
                    The first and only hyaluronic acid microdroplet injectable indicated to improve cheek skin smoothness. SKINVIVE by JUVÉDERM® helps the skin retain its natural moisture and softness.
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
                >
                  <img src="/skinvive1.webp" alt="SkinVive Treatment" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </section>

            {/* PRODUCT SPOTLIGHT */}
            <section className="space-y-10">
               <div className="aspect-video md:aspect-[21/10] rounded-[3rem] overflow-hidden shadow-sm border border-zinc-100">
                  <img src="/skinvive2.webp" alt="SkinVive by Juvederm" className="w-full h-full object-cover" />
               </div>
               <div className="max-w-2xl">
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">What is Skinvive?</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">
                    SKINVIVE by JUVÉDERM® helps the skin retain its natural moisture and softness leading to an improvement in the skin smoothness of the cheeks. In clinical studies, patients reported high satisfaction with how glowing and hydrated their skin looked through 6 months.
                  </p>
               </div>
            </section>

            {/* BENTO GRID: BENEFITS & SUITABILITY */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2">
                  <Sparkles size={14} /> Key Benefits
                </h4>
                <ul className="space-y-4">
                  {skinViveBenefits.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-600 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900 text-white p-10 rounded-[2.5rem] space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Suitable For</h4>
                <ul className="space-y-4">
                  {skinViveSuitable.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-300 font-light">
                      <Check size={14} className="text-zinc-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* CLINICAL DETAILS: RESULTS & AFTERCARE */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-16 border-t border-zinc-200">
              <div className="space-y-6">
                <h4 className="text-2xl font-light text-zinc-900">Results</h4>
                <ul className="space-y-4">
                  {[
                    "Gradual skin improvement",
                    "Increased hydration",
                    "Smoother skin texture",
                    "Healthy, natural glow",
                    "Results visible within week",
                    "Results last up to 6 months",
                    "Maintenance treatments may be advised"
                  ].map((text) => (
                    <li key={text} className="flex gap-4 text-sm text-zinc-500 font-light">
                      <span className="text-zinc-900 font-bold">□</span> {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-light text-zinc-900">Aftercare</h4>
                <div className="bg-[#EAEAE6]/30 p-8 rounded-3xl border border-zinc-100">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                      <Info size={16} className="text-zinc-400 mt-0.5" /> Avoid exercise for 24 hours
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-600 font-light">
                      <Info size={16} className="text-zinc-400 mt-0.5" /> Avoid heat and sun exposure
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* RESPONSIVE BOOKING CTA */}
            <section className="bg-white border border-zinc-100 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2">Ready For The Experience?</p>
                <h2 className="text-3xl font-light text-zinc-900">Book a consultation</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-zinc-900 text-white px-10 py-5 rounded-full flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-95 group">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Book Now</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}