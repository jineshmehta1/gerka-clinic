"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Plus } from "lucide-react"
import Link from "next/link" // Import Link

const treatments = [
  {
    title: "BTL Emsella",
    description: "Strengthen your pelvic floor and regain confidence with our non-invasive treatment.",
    image: "/emsella.jpeg",
    href: "/womens-health/emsella", // Add the destination URL
  },
  {
    title: "BTL Vanquish",
    description: "Contactless fat reduction technology for permanent results and a refined silhouette.",
    image: "/vanquish.jpeg",
    href: "/body/vanquish",
  },
  {
    title: "Skin Lesions",
    description: "Precision removal of skin tags and lesions using advanced medical techniques.",
    image: "/skin.jpeg",
    href: "/body/lesion-removal",
  },
  {
    title: "PRP Intimate",
    description: "Platelet-Rich Plasma therapy designed for natural tissue rejuvenation.",
    image: "/prp.jpeg",
    href: "/womens-health/prp",
  },
  {
    title: "Labiaplasty",
    description: "Specialized feminine surgery performed by expert aesthetic consultants.",
    image: "/labi.webp",
    href: "/womens-health/labiaplasty",
  },
  {
    title: "Exilis Ultra 360",
    description: "Head-to-toe skin tightening and intimate rejuvenation in a single device.",
    image: "/exillis.jpeg",
    href: "/face/exilis",
  },
]

export function TreatmentGrid() {
  return (
    <section className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm mb-6"
          >
            Exclusive Care
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight"
          >
            Our Most Popular <span className="italic font-serif font-light text-zinc-500">Treatments</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-zinc-900 mt-6 rounded-full"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {treatments.map((item, index) => (
            // Wrap the card in a Link component
            <Link key={item.title} href={item.href} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative aspect-[6/5] w-full overflow-hidden rounded-[2rem] mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl font-semibold text-zinc-900 tracking-tight">
                      {item.title}
                    </h3>
                    <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-500/10" />
                  </div>
                  
                  <p className="text-zinc-500 text-[15px] leading-relaxed mb-8 line-clamp-2 font-light">
                    {item.description}
                  </p>

                  {/* Footer Section */}
                  <div className="flex items-center justify-between pt-2 border-t border-zinc-50">
                     <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Status</span>
                        <span className="text-xs font-medium text-zinc-900">Certified Clinic</span>
                     </div>
                     
                     {/* Button now acts visually since the whole card is a link */}
                     <div className="flex items-center gap-2 bg-[#F1F1F1] group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300 px-7 py-3.5 rounded-2xl text-[12px] font-bold tracking-wider text-zinc-800 uppercase shadow-sm">
                       Book <Plus size={16} strokeWidth={3} />
                     </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}