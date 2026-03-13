"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ShieldCheck, Target, Microscope, Zap, CheckCircle2, ChevronRight, Eye, AlertTriangle, Activity } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const benignLesions = [
  {
    title: "Skin Tags (Acrochordons)",
    desc: "Soft, flesh-coloured or slightly pigmented growths that commonly appear on the neck, eyelids, underarms and groin. Removal is quick and usually leaves minimal marks when performed correctly."
  },
  {
    title: "Sebaceous Hyperplasia",
    desc: "Small yellowish or skin-coloured papules caused by enlarged sebaceous glands. They are completely benign but may resemble other lesions, so accurate diagnosis is important."
  },
  {
    title: "Dark Papular Lesions (DPN)",
    desc: "Dermatosis papulosa nigra consists of multiple small dark papules. Removal requires expertise to minimise the risk of pigmentation changes, especially in darker skin types."
  },
  {
    title: "Warts (Verrucae)",
    desc: "Benign skin growths caused by the human papillomavirus (HPV). They may appear as rough, raised or flat lesions and can occur on various parts of the body."
  },
  {
    title: "Seborrhoeic Keratoses",
    desc: "Very common benign lesions that appear as brown, black or skin-coloured plaques with a 'stuck-on' appearance. They increase with age and are harmless."
  }
]

const techniques = [
  "Medical electrosurgery",
  "Radiofrequency techniques",
  "Precision excision",
  "Other lesion-specific methods"
]

export default function SkinLesionRemovalPage() {
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
            activeService="Skin Lesion Removal" 
            categoryTitle="Women's Health" 
          />

          {/* 3. MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Cosmetic Skin Lesion <br />
                  <span className="italic font-serif text-zinc-500 font-light">Removal – Expert Care in Dublin</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={14} className="text-zinc-400" /> Benign Lesions Only
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">
                    Precision & Safety Focus
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    At Gerka Clinic, Dublin, we offer cosmetic skin lesion removal for a wide range of benign skin lesions, focusing on safety, precision and optimal aesthetic outcomes.
                  </p>
                  <p>
                    Lesions are removed for <span className="text-zinc-900 font-medium">cosmetic reasons only</span>, following a thorough clinical assessment to confirm their benign nature. When clinically indicated, removed lesions can be sent for histopathological analysis.
                  </p>
                  <div className="p-6 bg-white border border-zinc-100 rounded-2xl italic text-sm text-zinc-500 leading-relaxed shadow-sm">
                    "We are particularly experienced in the removal of lesions on delicate areas, including eyelids and periocular skin, where precision and expertise are essential."
                  </div>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-white border-8">
                  {/* Image showing finger pointing to lesions on the neck from your screenshot */}
                  <img src="/skin.jpeg" alt="Skin Lesion Removal Assessment" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* EYELID SPECIALIZATION SECTION */}
            <section className="bg-zinc-900 text-white rounded-[3rem] p-10 md:p-16 overflow-hidden relative shadow-2xl">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                  <div className="space-y-8">
                     <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Delicate Area Care</span>
                        <h2 className="text-3xl font-light">Eyelid & Periocular Lesion Removal</h2>
                     </div>
                     <p className="text-zinc-400 font-light leading-relaxed">
                        These areas require advanced skill and delicate techniques to protect eye structures and achieve the best cosmetic result. We specialise in the removal of:
                     </p>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                        {["Skin tags", "Seborrhoeic keratoses", "Papular lesions", "Sebaceous hyperplasia"].map(item => (
                          <li key={item} className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-200">
                             <div className="w-1 h-1 rounded-full bg-zinc-500" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-lg">
                     {/* Image showing eye with lesions from your screenshot */}
                     <img src="/lision1.webp" alt="Periocular Lesion Example" className="w-full h-full object-cover" />
                  </div>
               </div>
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-zinc-800/40 blur-[100px] rounded-full" />
            </section>

            {/* BENIGN LESIONS WE TREAT */}
            <section className="space-y-12">
               <div className="space-y-4">
                  <h3 className="text-3xl font-light text-zinc-900">Benign Skin Lesions <span className="italic font-serif text-zinc-500">We Treat</span></h3>
                  <div className="w-16 h-[1px] bg-zinc-300" />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {benignLesions.map((lesion) => (
                    <div key={lesion.title} className="p-8 bg-white border border-zinc-100 rounded-3xl space-y-4 shadow-sm group hover:border-zinc-300 transition-all">
                       <h4 className="text-xl font-medium text-zinc-900 flex items-center justify-between">
                          {lesion.title}
                          <Activity size={18} className="text-zinc-100 group-hover:text-zinc-300 transition-colors" />
                       </h4>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed">
                          {lesion.desc}
                       </p>
                    </div>
                  ))}
               </div>
            </section>

            {/* TECHNIQUES SECTION */}
            <section className="bg-[#EAEAE6]/50 rounded-[3rem] p-10 md:p-16 space-y-10">
               <div className="max-w-2xl space-y-4">
                  <h3 className="text-3xl font-light text-zinc-900">Techniques Used</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">
                    Different lesions require different approaches. The chosen technique is always based on <span className="text-zinc-900 font-medium">clinical assessment</span> and aesthetic considerations.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {techniques.map(t => (
                    <div key={t} className="p-6 bg-white rounded-2xl border border-zinc-100 flex flex-col items-center text-center space-y-3">
                       <Zap size={20} className="text-zinc-400" />
                       <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-900">{t}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* BEFORE & AFTER SHOT */}
            <section className="space-y-10">
               <div className="space-y-4 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Clinical Results</span>
                  <h2 className="text-3xl font-light text-zinc-900 italic font-serif">Aesthetic Outcomes</h2>
               </div>
               <div className="max-w-2xl mx-auto aspect-video rounded-[3rem] overflow-hidden shadow-xl border-white border-8">
                  <img src="/lesion-before-after.webp" alt="Lesion Removal Comparison" className="w-full h-full object-cover" />
               </div>
            </section>

            {/* IMPORTANT MEDICAL INFORMATION */}
            <section className="p-10 md:p-16 bg-white border border-zinc-100 rounded-[3rem] space-y-10 shadow-sm">
               <div className="flex items-center gap-4">
                  <AlertTriangle size={32} strokeWidth={1.5} className="text-zinc-300" />
                  <h3 className="text-2xl md:text-3xl font-light text-zinc-900 tracking-tight">Important Medical Information</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Only clinically benign-appearing lesions are removed for cosmetic reasons",
                    "A consultation is required prior to treatment",
                    "Not all lesions are suitable for cosmetic removal",
                    "Suspicious lesions are referred for further medical evaluation"
                  ].map((info) => (
                    <div key={info} className="flex gap-4 items-start">
                       <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2 shrink-0" />
                       <p className="text-[15px] text-zinc-500 font-light leading-relaxed">{info}</p>
                    </div>
                  ))}
               </div>
               <div className="pt-6 border-t border-zinc-50">
                  <p className="text-xs text-zinc-400 italic">When clinically indicated, removed lesions can be sent for histopathological analysis.</p>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Begin Your Clinical Assessment</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a lesion consultation</h2>
              </div>
              <Link href="/contact" className="w-full md:w-auto relative z-10">
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