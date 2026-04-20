"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Check, 
  ShieldCheck, 
  Zap, 
  Target, 
  ArrowRight, 
  Activity, 
  Droplets,
  Sparkles,
  Heart,
  Dna,
  Clock,
  Search,
  RefreshCw
} from "lucide-react"
import Link from "next/link"
import { NaturalAestheticsHeroBanner } from "@/components/natural"

const regenerativeModalities = [
  {
    id: "prp",
    title: "PRP Therapy",
    subtitle: "The Gold Standard in Regeneration",
    image: "/natural-prp.jpg", // Ensure this exists
    description: "Platelet-Rich Plasma uses your own blood-derived growth factors to activate cellular repair. It is a 100% autologous treatment that works in harmony with your biology.",
    benefits: ["Stimulate collagen production", "Improve skin quality and texture", "Enhance hair growth", "Support intimate tissue health"],
    approach: "A biological trigger that signals your cells to behave like younger versions of themselves."
  },
  {
    id: "biostimulation",
    title: "Biostimulation",
    subtitle: "Regen Lab Protocols",
    image: "/bio-natural.webp",
    description: "Advanced regenerative protocols using autologous plasma and cellular matrix technology. These FDA-approved systems are used by leading global experts to restore tissue vitality.",
    benefits: ["Deep tissue regeneration", "Restore skin vitality", "Improve biological elasticity", "FDA-approved clinical safety"],
    approach: "Utilising advanced biostimulatory compounds to support the skin's structural integrity from within."
  },
  {
    id: "boosters",
    title: "Skin Boosters",
    subtitle: "Natural Hydration",
    image: "/skin-natural.webp",
    description: "Subtle hydration treatments designed to improve skin luminosity and maintain a fresh appearance without creating artificial volume or altering facial structure.",
    benefits: ["Intense deep-dermal hydration", "Improve skin luminosity", "Maintain structural naturalness", "Enhance surface elasticity"],
    approach: "Delivering pure hydration to the extracellular matrix to restore a 'glow' that looks entirely natural."
  },
  {
    id: "energy",
    title: "Energy-Based",
    subtitle: "Non-Invasive Tightening",
    image: "/tight-natural.jpg",
    description: "Utilising advanced technologies like radiofrequency to tighten the skin naturally. These treatments signal the body to produce new collagen over several weeks.",
    benefits: ["Tighten skin naturally", "Stimulate structural collagen", "No invasive intervention", "Zero downtime"],
    approach: "Using physics to trigger a biological healing response for sustainable, long-term firmness."
  }
]

export default function NaturalRegenerativePage() {
  const [activeTab, setActiveTab] = useState(regenerativeModalities[0])

  return (
    <main className="bg-white">
      <NaturalAestheticsHeroBanner />

      {/* SECTION 1: EDITORIAL INTRO */}
      <section className="relative py-16 md:py-24 lg:pt-48 lg:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 bg-white border border-zinc-200 shadow-sm">
                Conscious Ageing
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                Natural Regenerative <br className="hidden sm:block" />
                <span className="italic font-serif text-zinc-500 font-light text-4xl md:text-6xl">Aesthetics.</span>
              </h1>
              <div className="space-y-4 text-base md:text-xl text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p>
                  At Gerka Clinic, we understand that not everyone is seeking aggressive treatments or immediate artificial changes. Many are looking for a more conscious approach to ageing — one that respects the body.
                </p>
                <p>
                  Our approach is designed for those who prefer subtle, progressive and biologically harmonious results, working with the body rather than against it.
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-900 pb-1">
                  Prevent • Restore • Evolve
                </div>
                <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                  Clinical Consultation Required
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[7/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 relative">
                <img src="/natural.webp" alt="Conscious Ageing Philosophy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-100 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO IS THIS FOR (Icon Grid) */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Target Audience</span>
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900">Who Is This For?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Heart size={20} />, text: "Prefer natural-looking results" },
              { icon: <ShieldCheck size={20} />, text: "Avoid synthetic or foreign products" },
              { icon: <Target size={20} />, text: "Concerned about overfilled appearance" },
              { icon: <Activity size={20} />, text: "Do not want painful procedures" },
              { icon: <RefreshCw size={20} />, text: "Believe in prevention over correction" },
              { icon: <Clock size={20} />, text: "Want to start before visible ageing" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[1.5rem] bg-zinc-50 border border-zinc-100 flex flex-col items-start text-left space-y-4 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-zinc-900 shadow-sm border border-zinc-100">
                  {item.icon}
                </div>
                <p className="text-xs md:text-sm text-zinc-600 font-medium leading-relaxed uppercase tracking-tight">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TREATMENT TABS */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden sm:rounded-[3rem] md:rounded-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Clinical Options</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Natural <span className="italic font-serif text-zinc-400">Pathways.</span></h2>
              </div>

              <div className="flex flex-col space-y-3">
                {regenerativeModalities.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item)}
                    className={`text-left px-5 py-4 md:px-8 md:py-6 rounded-xl md:rounded-2xl transition-all duration-500 border flex justify-between items-center group ${
                      activeTab.id === item.id 
                      ? "bg-white border-white text-zinc-900 translate-x-1" 
                      : "bg-transparent border-white/10 text-zinc-500 hover:border-white/30"
                    }`}
                  >
                    <span className="text-base md:text-xl font-medium tracking-tight">{item.title}</span>
                    <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ${activeTab.id === item.id ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:opacity-100"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8 md:space-y-10"
                >
                  <div className="relative aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
                    <img src={activeTab.image} alt={activeTab.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-light">{activeTab.subtitle}</h3>
                    <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">{activeTab.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Biological Impact</span>
                        <ul className="grid grid-cols-1 gap-2">
                          {activeTab.benefits.map(b => (
                            <li key={b} className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                              <div className="w-1 h-1 rounded-full bg-zinc-500 mt-1.5 shrink-0" /> 
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-800 border border-white/5">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 block mb-3">Therapeutic Goal</span>
                        <p className="text-sm text-zinc-400 font-light italic leading-relaxed">{activeTab.approach}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PHILOSOPHY (Bento Style) */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-[#FAF9F6] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-zinc-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="p-8 md:p-16 lg:p-20 space-y-6 md:space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Our Ethos</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-zinc-900">
                  Regeneration over <span className="italic font-serif text-zinc-500">Replacement.</span>
                </h2>
              </div>
              <p className="text-base md:text-lg text-zinc-600 font-light leading-relaxed italic">
                "Instead of forcing change, we activate your body’s own repair and renewal mechanisms, allowing improvements to develop naturally over time."
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Stimulation over camouflage",
                  "Long-term skin health over instant gratification",
                  "Biological compatibility and safety",
                  "Aging intelligently and gracefully"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 py-3 border-b border-zinc-200">
                    <div className="w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-xs md:text-sm text-zinc-800 font-medium tracking-tight uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-[500px]">
              <img src="/regen.png" alt="Natural results philosophy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PREVENTATIVE APPROACH (The Gentle Path) */}
      <section className="py-16 md:py-32 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">The Preventive Approach</span>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 leading-tight">Start early. <br />Age <span className="italic font-serif text-zinc-500">intelligently.</span></h2>
            <p className="text-base md:text-xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto">
              By stimulating collagen early and maintaining hydration, future treatments become less invasive and skin structure is preserved. True beauty is cultivated with care, science and respect for your body.
            </p>
          </div>
          
          <div className="pt-6">
            <Link href="/#contact" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-zinc-900 text-white px-10 py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-200">
                Book Regenerative Consultation
              </button>
            </Link>
          </div>

          <div className="pt-12 flex justify-center gap-8 border-t border-zinc-100">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-zinc-300" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Ethical Aesthetics</span>
            </div>
            <div className="flex items-center gap-2">
              <Dna size={14} className="text-zinc-300" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Biological Safety</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}