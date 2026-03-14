"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, ShieldCheck, Sparkles, Target, Info, ChevronRight, Beaker, HeartPulse } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const concerns = [
  "Fine lines and early ageing",
  "Loss of firmness",
  "Dull or tired-looking skin",
  "Uneven texture",
  "Enlarged pores",
  "Acne scarring",
  "Post-inflammatory marks",
  "Dehydrated or crepey skin"
]

const steps = [
  "A small blood sample is taken.",
  "The sample is processed in Regenlab’s FDA-approved centrifuge system.",
  "Platelet-rich plasma is separated and activated.",
  "PRP is injected or micro-needled into the skin.",
  "Growth factors stimulate collagen and repair over 2–12 weeks."
]

const prpFaqs = [
  {
    q: "Is PRP safe?",
    a: "Yes — especially with Regenlab, the only FDA-approved PRP system for clinical use."
  },
  {
    q: "Does it hurt?",
    a: "Mild discomfort may occur. Numbing cream is applied to ensure comfort."
  },
  {
    q: "When will I see results?",
    a: "Skin becomes brighter and firmer over 2–12 weeks."
  },
  {
    q: "Can PRP be combined with microneedling?",
    a: "Yes — microneedling with PRP enhances penetration and results."
  }
]

export default function PRPServicePage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-20">
      
      {/* 1. TOP NAVIGATION */}
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
            activeService="PRP Facial Rejuvenation" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  PRP <br />
                  <span className="italic font-serif text-zinc-500 font-light">Facial Rejuvenation</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: 375€ RegenLab PRP
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-zinc-400" /> Duration: 2 hours
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">What Is PRP Facial Rejuvenation?</h3>
                  <p>
                    PRP (Platelet-Rich Plasma) Facial Rejuvenation is a natural, regenerative treatment that uses your own platelets to improve skin quality, brightness, firmness and overall texture. PRP stimulates collagen, boosts hydration and enhances the skin’s natural repair processes.
                  </p>
                  <p>
                    At Gerka Clinic, we use <span className="text-zinc-900 font-medium">Regenlab</span>, the only FDA-approved PRP system for safe, sterile and consistent in-clinic preparation. This guarantees the highest medical standards and optimal platelet concentration for superior results.
                  </p>
                  <div className="bg-[#EAEAE6]/50 p-6 rounded-2xl border border-zinc-200">
                    <p className="text-sm italic text-zinc-600">Perfect for face, under-eyes, neck and décolletage.</p>
                  </div>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="/prp1.webp" alt="PRP Facial Procedure" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* WHY REGENLAB SECTION */}
            <section className="bg-zinc-900 text-white rounded-[3rem] p-10 md:p-16 space-y-12">
               <div className="max-w-2xl">
                  <h2 className="text-3xl font-light mb-4">Why We Use Regenlab <span className="text-zinc-500 font-serif italic">(FDA Approved)</span></h2>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">Unlike generic PRP kits, Regenlab is the only system approved by the FDA for PRP preparation performed inside a clinic. This means safer, more reliable and more effective PRP for your skin.</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    "Fully closed, sterile system",
                    "No contamination risk",
                    "Consistent platelet concentration",
                    "Proven safety and efficacy",
                    "Medical-grade tubes",
                    "Certified in-clinic preparation"
                  ].map(benefit => (
                    <div key={benefit} className="flex gap-3 items-center">
                       <ShieldCheck size={18} className="text-zinc-500 shrink-0" />
                       <span className="text-xs uppercase tracking-widest font-medium text-zinc-200">{benefit}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-10">
                  <h3 className="text-3xl font-light text-zinc-900">How PRP <span className="italic font-serif text-zinc-500">Works</span></h3>
                  <div className="space-y-6">
                    {steps.map((step, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <span className="text-xs font-bold text-zinc-300 border border-zinc-200 w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-colors">{i + 1}</span>
                        <p className="text-[15px] text-zinc-600 font-light leading-relaxed pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-zinc-900 pt-4 border-t border-zinc-100 italic">
                    PRP improves skin naturally, without chemicals or synthetic fillers.
                  </p>
               </div>
               <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100">
                  <img src="/prp2.webp" alt="PRP Lab Preparation" className="w-full h-full object-cover" />
               </div>
            </section>

            {/* SUITABILITY & CONCERNS GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-[3rem] border border-zinc-100 shadow-sm space-y-8">
                <h3 className="text-2xl font-light text-zinc-900">Who Is PRP Suitable For?</h3>
                <p className="text-sm text-zinc-500 font-light">PRP suits anyone wanting:</p>
                <ul className="space-y-4">
                  {[
                    "Natural rejuvenation",
                    "Improvement without fillers",
                    "A regenerative approach",
                    "Brighter, firmer, healthier skin",
                    "Treatment for pigmentation or scarring",
                    "Under-eye brightness"
                  ].map(text => (
                    <li key={text} className="flex items-center gap-4 text-sm text-zinc-600 font-light">
                       <CheckCircle2 size={18} className="text-zinc-900 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                   <span className="px-4 py-2 bg-[#F9F9F7] rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-zinc-100">Safe for all skin types</span>
                </div>
              </div>

              <div className="bg-[#EAEAE6] p-10 rounded-[3rem] space-y-8">
                <h3 className="text-2xl font-light text-zinc-900">What Skin Concerns Can PRP Treat?</h3>
                <ul className="space-y-3">
                  {concerns.map(item => (
                    <li key={item} className="text-sm text-zinc-600 flex gap-3 font-light leading-relaxed">
                       <span className="text-zinc-400">▪</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* BENTO GRID: BENEFITS & COURSE */}
            <section className="grid grid-cols-1 md:grid-cols-[0.6fr_0.4fr] gap-8">
               <div className="bg-zinc-900 text-white p-10 rounded-[3rem] space-y-8 shadow-xl">
                  <h3 className="text-2xl font-light">Benefits of PRP</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {[
                      "Natural collagen stimulation",
                      "Improved hydration and firmness",
                      "Brighter, more even skin tone",
                      "Reduced fine lines",
                      "Improved texture and pore visibility",
                      "Helps acne scarring",
                      "Safe, autologous and chemical-free",
                      "FDA-approved PRP system (Regenlab)"
                    ].map(text => (
                      <li key={text} className="text-xs uppercase tracking-widest leading-relaxed text-zinc-400 flex gap-2">
                        <Sparkles size={14} className="text-zinc-100 shrink-0" /> {text}
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="bg-white border border-zinc-200 p-10 rounded-[3rem] flex flex-col justify-center space-y-6">
                  <div className="space-y-2">
                     <h4 className="text-xl font-medium text-zinc-900 uppercase tracking-tight">Treatment Course</h4>
                     <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Most clients benefit from:</p>
                  </div>
                  <ul className="space-y-3 border-y border-zinc-100 py-6">
                    <li className="text-sm text-zinc-600 font-light flex gap-3">
                       <span className="font-bold text-zinc-900">▪</span> 3 sessions, spaced 3-4 weeks apart
                    </li>
                    <li className="text-sm text-zinc-600 font-light flex gap-3">
                       <span className="font-bold text-zinc-900">▪</span> Maintenance every 6-12 months
                    </li>
                  </ul>
                  <p className="text-xs italic text-zinc-500 font-light">Results start improving from 2 weeks and continue for months.</p>
               </div>
            </section>

            {/* FAQs */}
            <section className="space-y-12">
               <div className="space-y-2">
                  <h2 className="text-3xl font-light text-zinc-900 tracking-tight">FAQs</h2>
                  <div className="w-12 h-[1px] bg-zinc-300" />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                  {prpFaqs.map((faq, i) => (
                    <div key={i} className="space-y-3">
                       <h4 className="text-[13px] font-bold uppercase tracking-widest text-zinc-900 flex gap-3">
                          <span className="text-zinc-300 font-serif">{i + 1}.</span> {faq.q}
                       </h4>
                       <p className="text-[15px] text-zinc-500 font-light leading-relaxed pl-7">
                          {faq.a}
                       </p>
                    </div>
                  ))}
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Biological Regeneration</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a consultation</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
                  Book Now
                </button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}