"use client"

import { motion } from "framer-motion"
import { Home, ChevronRight } from "lucide-react"
import Link from "next/link"

export function NailHeroBanner() {
  // Filenames optimized for the Nail Treatment department
  const backgroundImages = [
    "/nail1.webp",
    "/infection.jpg",
    "/pys.webp",
    "/ony.jpg",
    "/onyc.webp",
    "/nail4.jpg",
    "/nail2.webp",
    "/nail3.webp"
  ]

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-40 pb-20">
      
      {/* 1. BACKGROUND IMAGE COLLAGE */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-[0.8] grayscale p-4">
          {backgroundImages.map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="aspect-square rounded-3xl bg-zinc-100 overflow-hidden"
            >
              <img 
                src={src} 
                alt="Clinical Detail" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Top Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-[0.4em] px-6 py-2.5 rounded-full mb-10 shadow-xl shadow-zinc-200"
        >
          Medical Podiatry
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-zinc-900 tracking-tighter leading-none mb-8"
        >
          NAIL <span className="italic font-serif text-zinc-900 font-light">Disorders</span>
        </motion.h1>

        {/* Sub-description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-zinc-600 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-12 uppercase tracking-wide"
        >
          Advanced clinical assessment and <br className="hidden md:block" />
          <span className="font-medium text-zinc-900">Lunula® Cold Laser</span> technology for total recovery.
        </motion.p>

        {/* Breadcrumb Navigation Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/80 backdrop-blur-md border border-zinc-100 shadow-sm px-8 py-4 rounded-full flex items-center gap-4"
        >
          <Link href="/" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={12} className="text-zinc-300" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Nail Treatment</span>
        </motion.div>
      </div>

    </section>
  )
}