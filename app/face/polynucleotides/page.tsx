"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, Target, Sparkles, ChevronRight, Info } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

export default function PolynucleotideServicePage() {
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
            activeService="Polynucleotide Skin Regeneration" 
            categoryTitle="Face Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Polynucleotide <br />
                  <span className="italic font-serif text-zinc-500">Skin Regeneration</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Euro size={14} className="text-zinc-400" /> Cost: 290€ 2 ml
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-zinc-400" /> Duration: 20-30 min
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <p>
                    At Gerka Clinic, we offer state-of-the-art polynucleotide treatments designed to deeply revitalise the skin. Polynucleotides stimulate tissue repair, boost hydration, enhance elasticity, and improve overall skin structure. They work by supporting cell regeneration, <span className="text-zinc-900 font-medium">increasing fibroblast activity</span>, and strengthening the skin’s natural healing response.
                  </p>
                  <p>
                    These treatments are ideal for patients seeking subtle yet powerful improvements in texture, fine lines, elasticity, and radiance—without altering facial shape or expression. Polynucleotides are biocompatible and suitable for most skin types.
                  </p>
                  <p>
                    During your consultation, our practitioner will assess your concerns and create a personalised treatment plan. Sessions usually take 20–30 minutes, and while mild swelling may appear initially, downtime is minimal. Results develop gradually over several weeks as the skin regenerates from within.
                  </p>
                </div>
                <div className="aspect-[5/6.5] rounded-[3rem] overflow-hidden shadow-2xl">
                  {/* Image of woman with syringe application from screenshot */}
                  <img src="/poly1.webp" alt="Polynucleotide Application" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* PRODUCT SHOT */}
            <section className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-sm border border-zinc-100">
               <img src="/poly2.webp" alt="Nucleofill Polynucleotide Technology" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/10 to-transparent" />
            </section>

            {/* AREAS WE TREAT SECTION */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm">
               <div className="space-y-12">
                  <h2 className="text-3xl font-light text-zinc-900">Areas We Treat <span className="italic font-serif text-zinc-500">with Polynucleotides</span></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Face */}
                    <div className="space-y-5">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <Target size={16} className="text-zinc-400" /> Face
                       </h4>
                       <ul className="space-y-3">
                          {[
                            "Under-eye rejuvenation (dark circles, hollowing, fine lines)",
                            "Full-face hydration and elasticity improvement",
                            "Cheek and mid-face texture enhancement",
                            "Fine lines around the mouth"
                          ].map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light leading-snug">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Neck & Décolletage */}
                    <div className="space-y-5">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <Target size={16} className="text-zinc-400" /> Neck & Décolletage
                       </h4>
                       <ul className="space-y-3">
                          {["Crepey skin", "Loss of elasticity", "Horizontal neck lines"].map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light leading-snug">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Hands */}
                    <div className="space-y-5">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                          <Target size={16} className="text-zinc-400" /> Hands
                       </h4>
                       <ul className="space-y-3">
                          {["Skin thinning", "Loss of firmness", "Texture irregularities"].map(item => (
                             <li key={item} className="text-sm text-zinc-500 flex gap-3 font-light leading-snug">
                                <span className="text-zinc-900">▪</span> {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                  </div>
               </div>
            </section>

            {/* BENTO GRID: INDICATIONS & CLINICAL NOTE */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Additional Indications Card */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8">
                <div className="space-y-2">
                   <h3 className="text-2xl font-light">Additional Indications</h3>
                   <div className="w-12 h-[1px] bg-zinc-700" />
                </div>
                <ul className="space-y-5">
                  {[
                    "Acne-prone or stressed skin",
                    "Post-procedure skin repair",
                    "Scarring support",
                    "General biorevitalisation"
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-4 text-sm text-zinc-400 font-light">
                      <CheckCircle2 size={18} className="text-zinc-100 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Protocol Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                   <h4 className="text-xl font-medium text-zinc-900 flex items-center gap-2">
                     Treatment Progress <Sparkles size={18} className="text-zinc-400" />
                   </h4>
                   <p className="text-sm text-zinc-600 font-light leading-relaxed">
                    Results develop gradually, with optimal improvement visible four to eight weeks after treatment as the skin regenerates from within.
                   </p>
                </div>
                <div className="p-6 bg-white/50 rounded-2xl border border-zinc-200 flex items-center justify-between">
                   <div>
                     <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Downtime</p>
                     <p className="text-[13px] text-zinc-800 font-medium">Minimal (initial mild swelling)</p>
                   </div>
                   <Info size={20} className="text-zinc-300" />
                </div>
              </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Ready For The Experience?</p>
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