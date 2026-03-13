"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    // Full width, no container constraints to allow the image to be full-bleed
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#F9F9F7]">
      
      {/* LEFT SIDE: Full-Bleed Image (Matches reference layout) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen"
      >
        <img 
          // Using a high-end aesthetic image that mimics the soft lighting of your reference
          src="/hero.png" 
          alt="Aesthetic Wellness" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle artistic overlay */}
        <div className="absolute inset-0 bg-zinc-900/10 mix-blend-multiply opacity-20" />
      </motion.div>

      {/* RIGHT SIDE: Content Section (Your requested text) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-[#F9F9F7]">
        <div className="max-w-xl flex flex-col space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[11px] tracking-[0.4em] uppercase text-zinc-400 font-semibold mb-6 block">
              Welcome to Gerka Clinic
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-zinc-800 leading-[1.1]">
              Elevating your <br />
              <span className="italic font-serif text-zinc-500">natural</span> beauty.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-zinc-500 font-light leading-relaxed max-w-md"
          >
            A premium wellness sanctuary dedicated to modern aesthetics and 
            specialized women's health. Experience personalized care in the 
            heart of the city.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-6"
          >
            <Link href="/#services">
              <button className="group relative bg-zinc-900 text-white px-10 py-5 rounded-full overflow-hidden transition-all duration-300 hover:pr-14 active:scale-95">
                <span className="relative z-10 text-[12px] tracking-[0.2em] uppercase font-medium">
                  Explore Services
                </span>
                <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-4 h-4" />
              </button>
            </Link>
            
            <Link href="/about" className="group flex items-center gap-3">
              <span className="text-[11px] tracking-[0.25em] uppercase text-zinc-400 group-hover:text-zinc-800 transition-colors duration-300">
                Our Philosophy
              </span>
              <div className="w-8 h-[1px] bg-zinc-200 group-hover:w-12 group-hover:bg-zinc-800 transition-all duration-500" />
            </Link>
          </motion.div>

       
        </div>
      </div>

      
    </section>
  )
}