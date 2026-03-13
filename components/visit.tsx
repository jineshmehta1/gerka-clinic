"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Coffee, ShieldCheck } from "lucide-react"

const visitSteps = [
  {
    icon: <MapPin size={20} />,
    title: "Arrival & Parking",
    desc: "Located in the quiet Priory Office Park. We offer complimentary private parking directly at our entrance for a stress-free arrival."
  },
  {
    icon: <Clock size={20} />,
    title: "Timely Reception",
    desc: "We value your time. Please arrive 5 minutes early to settle in. Our reception team will be ready to welcome you immediately."
  },
  {
    icon: <Coffee size={20} />,
    title: "The Sanctuary",
    desc: "Wait in our refined, calming lounge. Enjoy a selection of refreshments while you prepare for your personalized consultation."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Private Care",
    desc: "Your journey is handled with absolute discretion. Our clinical environment is designed for your comfort and total privacy."
  }
]

export function PlanningVisit() {
  return (
    <section className="py-24 md:py-32 bg-[#EAEAE6]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm mb-6"
          >
            Your Journey
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight"
          >
            Planning <span className="italic font-serif font-light text-zinc-500">Your Visit</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: THE CLINIC MOSAIC (Enhanced UI version of your images) */}
          <div className="w-full lg:w-1/2 relative h-[600px] md:h-[700px]">
            {/* Image 1: Tall Exterior */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute left-0 top-0 w-[55%] h-[60%] rounded-[2.5rem] overflow-hidden shadow-2xl z-20"
            >
              <img src="/b1.webp" alt="Clinic Exterior" className="w-full h-full object-cover" />
            </motion.div>

            {/* Image 2: Square Entrance */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute right-0 top-20 w-[50%] aspect-square rounded-[2rem] overflow-hidden shadow-xl z-30 border-[10px] border-[#EAEAE6]"
            >
              <img src="/b2.webp" alt="Clinic Entrance" className="w-full h-full object-cover" />
            </motion.div>

            {/* Image 3: Wide Reception (Your bottom image) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute left-10 bottom-0 w-[80%] h-[35%] rounded-[2rem] overflow-hidden shadow-2xl z-10"
            >
              <img src="/b3.webp" alt="Reception Area" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* RIGHT SIDE: THE VISIT GUIDE */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="grid grid-cols-1 gap-8">
              {visitSteps.map((step, index) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="space-y-2 pt-1">
                    <h3 className="text-xl font-semibold text-zinc-900 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA / Quick Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="p-8 rounded-[2.5rem] bg-zinc-900 text-white mt-12 relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 mb-1">Location Details</p>
                  <p className="text-sm font-light text-zinc-200">1 Priory Office Park, Stillorgan Rd</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-900 transition-all duration-500">
                  <MapPin size={20} />
                </div>
              </div>
              {/* Background Glow */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}