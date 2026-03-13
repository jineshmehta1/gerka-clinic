"use client"

import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* CENTERED HEADER & PILL */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm mb-6"
          >
            The Heart of Gerka
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight"
          >
            Our Mission
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* LEFT SIDE: THE LAYERED IMAGE COMPOSITION (Matches your screenshot) */}
          <div className="w-full lg:w-1/2 relative h-[450px] md:h-[550px] flex items-center justify-center">
            
            {/* Background Image 1: Top Left (Grayscale Floral) */}
            <motion.div 
              initial={{ opacity: 0, x: -40, y: -40 }}
              whileInView={{ opacity: 0.4, x: 0, y: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 grayscale opacity-40 z-0"
            >
              <img src="/floral-1.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>

            {/* Background Image 2: Middle Left (Grayscale Floral) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 0.3, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute bottom-10 -left-10 w-48 h-72 grayscale opacity-30 z-0 hidden md:block"
            >
              <img src="/floral-2.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>

            {/* MAIN IMAGE: The Staff (Colored, Centered) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              /* Aspect Ratio 3:2 to match your screenshot dimensions */
              className="relative z-10 w-full max-w-[550px] aspect-[3/2] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[12px] border-white"
            >
              <img 
                src="/gerka.avif" 
                alt="Gerka Clinic Team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Background Decoration: Bottom Right (Subtle shadow or element) */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F9F9F7] rounded-full -z-10" />
          </div>

          {/* RIGHT SIDE: TEXT SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-zinc-900 leading-[1.3] tracking-tight">
                Our mission at <span className="font-semibold text-black">Gerka Clinic</span> is to restore <span className="italic font-serif text-zinc-500">confidence</span> and wellbeing in areas of health that have too often been ignored.
              </p>

              <div className="h-[1px] w-20 bg-zinc-900" />

              <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed">
                We unite <span className="text-zinc-900 font-medium">cutting-edge</span> medical technology with thoughtful <span className="italic font-serif text-zinc-400">personalised</span> care.
              </p>
              
              <div className="pt-6">
                <button className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-900 border-b-2 border-zinc-900 pb-2 hover:text-zinc-500 hover:border-zinc-300 transition-all">
                  Our Specialists
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}