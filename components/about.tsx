"use client"

import { motion } from "framer-motion"

export function AboutIntro() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* TOP HEADING AREA */}
        <div className="flex flex-col mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 bg-zinc-50 border border-zinc-100 mb-6 w-fit"
          >
            Since 2018
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-light text-zinc-900 tracking-tight leading-[1.1]"
          >
            A legacy of <br />
            <span className="italic font-serif text-zinc-500">regenerative</span> excellence.
          </motion.h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: STAGGERED IMAGE COLLAGE */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] md:min-h-[650px]">
            {/* Main Image: The Clinic/Exterior/Barcelona Vibe */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 w-[75%] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl z-20"
            >
              <img 
                src="/about-barcelona.jpg" 
                alt="Barcelona Roots" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Second Image: Medical Detail/Research */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute right-0 top-12 w-[50%] aspect-square rounded-[2.5rem] overflow-hidden shadow-xl z-30 border-[12px] border-white"
            >
              <img 
                src="/about-science.jpg" 
                alt="Scientific Foundation" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Third Image: Soft Interior/Wellness */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute right-4 bottom-0 w-[55%] h-[35%] rounded-[2rem] overflow-hidden shadow-2xl z-10"
            >
              <img 
                src="/about-dublin.jpg" 
                alt="Dublin Clinic" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE: YOUR PROVIDED TEXT (OPTIMIZED) */}
          <div className="w-full lg:w-1/2 space-y-12 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl md:text-3xl font-light text-zinc-900 leading-relaxed">
                Gerka Clinic is a leading aesthetic and regenerative medicine clinic in Dublin, 
                founded in 2018 with the opening of our first centre in <span className="font-medium">Barcelona</span>.
              </h3>
              
              <p className="text-lg text-zinc-500 font-light leading-relaxed">
                Built on a strong scientific and medical foundation, we pioneered 
                <span className="text-zinc-800 font-normal"> regenerative aesthetic gynaecology</span> and today 
                continue to set new standards in Ireland.
              </p>

              <div className="h-[1px] w-20 bg-zinc-200" />

              <p className="text-lg text-zinc-500 font-light leading-relaxed">
                We specialise in advanced aesthetic medicine, intimate health and wellness, using exclusively 
                <span className="italic font-serif text-zinc-800"> FDA-approved</span> medical technology and 
                evidence-based protocols. Continuous professional training and clinical research remain at 
                the heart of our practice.
              </p>

              <p className="text-lg text-zinc-500 font-light leading-relaxed">
                At Gerka Clinic, we combine <span className="text-zinc-900 font-medium">innovation, safety and compassion</span> 
                to enhance natural beauty, restore intimate health and support overall wellbeing.
              </p>

              {/* Founder Signature or Trust Quote */}
              <div className="pt-8 border-t border-zinc-50 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Dublin | Barcelona</span>
                  <span className="text-sm font-medium text-zinc-900">Excellence in Regenerative Care</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Decorative Text - Large & Subtle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none -z-10 select-none">
        <span className="text-[25vw] font-light text-zinc-50 opacity-[0.03] uppercase whitespace-nowrap">
          Barcelona 2018
        </span>
      </div>
    </section>
  )
}