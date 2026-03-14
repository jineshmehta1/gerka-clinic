"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap } from "lucide-react"

const specialists = [
  {
    name: "Giselle Gerka",
    role: "Founder & Clinical Director",
    image: "/1.webp",
    credentials: "University of Seville",
    specialties: "Regenerative Gynaecology • Pelvic Floor Health",
    bio: [
      "Giselle Gerka is the founder of Gerka Clinic, where regenerative gynaecology, pelvic floor health and aesthetic dermatology are integrated within a refined, medically grounded environment.",
      "Graduated as a Pelvic Floor Physiotherapist from the University of Seville, she has dedicated her career to advancing women’s intimate health. Since 2010, she has developed recognised expertise in benign skin lesion removal and advanced energy-based technologies.",
      "A pioneer in Barcelona, Spain, introducing BTL Emsella and Exilis Ultra Femme in 2018, Giselle remains committed to clinical excellence through continuous international training and advanced anatomical practice."
    ]
  },
  {
    name: "Dr. Evelyn Alba",
    role: "Gynaecology & Obstetrics Specialist",
    image: "/2.webp",
    credentials: "Universitat de Barcelona",
    specialties: "Gynaecological Oncology • Breast Pathology",
    bio: [
      "Specialist in Gynaecology and Obstetrics, Dr Alba holds advanced postgraduate training from the Universitat de Barcelona. She is a dedicated member of SEGERF and AEEM.",
      "Her approach combines scientific rigour with compassionate care, addressing sexual dysfunction, urinary incontinence and menopausal symptoms through innovative, personalised treatments.",
      "She ensures every patient receives informed, individualised support at every stage of life, ensuring clinical excellence remains at the heart of the patient journey."
    ]
  }
]

export function SpecialistsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 bg-zinc-50 border border-zinc-100 mb-4 md:mb-6"
          >
            Our Leadership
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-light text-zinc-900 tracking-tight"
          >
            The <span className="italic font-serif text-zinc-500">Specialists</span>
          </motion.h2>
        </div>

        {/* SPECIALISTS LIST */}
        <div className="space-y-20 md:space-y-32">
          {specialists.map((pro, index) => (
            <div 
              key={pro.name}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 md:gap-16 lg:gap-24`}
            >
              {/* IMAGE SIDE */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl group">
                  <img 
                    src={pro.image} 
                    alt={pro.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Floating Info Tag - Visible on hover (desktop) and tap (mobile) */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/20 shadow-lg lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 md:gap-3 text-zinc-800">
                      <GraduationCap size={16} className="text-zinc-400 md:w-5 md:h-5" />
                      <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest">{pro.credentials}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* TEXT SIDE */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 space-y-6 md:space-y-8"
              >
                <div className="space-y-2 md:space-y-3 text-center lg:text-left">
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-400">
                    {pro.role}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight">
                    {pro.name}
                  </h3>
                </div>

                {/* Highlight Boxes */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                  <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                    <Award size={12} className="text-zinc-400 md:w-3.5 md:h-3.5" />
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-600">Pioneer in Excellence</span>
                  </div>
                </div>

                {/* Bio Paragraphs */}
                <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                  {pro.bio.map((para, i) => (
                    <p key={i} className="text-base md:text-lg text-zinc-500 font-light leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Technical Skills Row */}
                <div className="pt-6 border-t border-zinc-100 text-center lg:text-left">
                   <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2 md:mb-3">Core Expertise</p>
                   <p className="text-xs md:text-sm text-zinc-900 font-medium tracking-wide">
                     {pro.specialties}
                   </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}