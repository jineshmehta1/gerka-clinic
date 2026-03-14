"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Euro, CheckCircle2, ShieldCheck, Sparkles, Target, Info, ChevronRight, HelpCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { ServiceSidebar } from "@/components/ServiceSidebar"

const treatableAreas = [
  "Inner thighs",
  "Underarms",
  "Buttocks",
  "Groin folds",
  "Back and shoulders",
  "Chest",
  "Abdomen",
  "Post-acne marks (back/chest)",
  "Darkening caused by friction",
  "Intimate areas"
]

const methodology = [
  {
    title: "1. Chemical Peels (Body Peels)",
    desc: "Brightening agents such as lactic, mandelic or glycolic acid gently exfoliate and lighten deep pigment."
  },
  {
    title: "2. Laser Treatment",
    desc: "Targets deeper pigment and stimulates controlled regeneration for a clearer, more even tone."
  },
  {
    title: "3. Prescription Creams",
    desc: "Tailored formulas may include Retinoids, Azelaic acid, Kojic acid, or Tranexamic acid for stubborn or hormonal pigment."
  },
  {
    title: "4. PIH Protocols",
    desc: "Post-Inflammatory Hyperpigmentation protocols ideal for marks caused by acne, waxing, injury or inflammation."
  },
  {
    title: "5. Barrier Repair",
    desc: "Essential to prevent rebound hyperpigmentation in sensitive skin, ensuring results are both effective and safe."
  }
]

const pigmentationFaqs = [
  {
    q: "Is body pigmentation treatment safe?",
    a: "Yes — we use medical-grade ingredients and adjust the protocol to your skin sensitivity and area treated."
  },
  {
    q: "How long until I see results?",
    a: "Some brightening appears within 2-4 weeks. Deeper pigmentation may take longer."
  },
  {
    q: "Can this treat dark inner thighs and underarms?",
    a: "Absolutely. These are some of the most common areas we treat."
  },
  {
    q: "Can pigmentation come back?",
    a: "Yes, if friction or inflammation continues. We provide aftercare and prevention guidelines."
  }
]

export default function BodyPigmentationPage() {
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
            activeService="Body Pigmentation Treatment" 
            categoryTitle="Body Treatments" 
          />

          {/* 3. MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
            
            {/* HERO SECTION */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Body Pigmentation <br />
                  <span className="italic font-serif text-zinc-500 font-light">Treatment</span>
                </h1>
                <div className="flex flex-wrap gap-4 border-b border-zinc-200 pb-8">
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-2">
                    Customized Medical Approach
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">
                    Safe for all skin tones
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-[16px]">
                  <h3 className="text-2xl font-light text-zinc-900">What Is Body Pigmentation Treatment?</h3>
                  <p>
                    Body pigmentation refers to darkening of the skin caused by hormones, friction, inflammation, acne, injury or long-term rubbing in areas such as the inner thighs, underarms, groin, buttocks, back or chest.
                  </p>
                  <p>
                    At Gerka Clinic, we provide a personalised medical approach to body pigmentation using a combination of clinical protocols designed to safely lighten and even the tone while respecting the skin barrier.
                  </p>
                </div>
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="/pigment.webp" alt="Body Pigmentation Assessment" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            {/* METHODOLOGY SECTION: HOW IT WORKS */}
            <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-sm space-y-12">
               <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-light text-zinc-900">How Does the <span className="italic font-serif text-zinc-500 font-light">Treatment Work?</span></h2>
                  <p className="text-zinc-500 font-light">Our protocol combines multiple methods depending on your pigmentation depth and skin sensitivity:</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {methodology.map((item, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 space-y-3">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900">{item.title}</h4>
                       <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* AREAS TREATED SECTION */}
            <section className="space-y-12">
               <h3 className="text-3xl font-light text-zinc-900">What Areas <span className="italic font-serif text-zinc-500">Can Be Treated?</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
                  {treatableAreas.map(area => (
                    <div key={area} className="flex items-center gap-3 py-3 border-b border-zinc-100">
                       <Target size={16} className="text-zinc-300" />
                       <span className="text-[13px] text-zinc-700 font-light uppercase tracking-wide">{area}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* BENTO GRID: BENEFITS & SUITABILITY */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits Card */}
              <div className="bg-zinc-900 text-white p-12 rounded-[3rem] space-y-8 shadow-xl">
                <h3 className="text-2xl font-light">Benefits of Treatment</h3>
                <ul className="space-y-4">
                  {[
                    "Brighter and more even skin tone",
                    "Reduction of dark spots and patches",
                    "Improved texture and smoothness",
                    "Safe for intimate and friction-prone areas",
                    "Customised protocols for sensitive skin",
                    "Medical ingredients for effective results",
                    "Supports long-term maintenance"
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <CheckCircle2 size={18} className="text-zinc-500 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitability Card */}
              <div className="bg-[#EAEAE6] p-12 rounded-[3rem] space-y-8">
                <div className="space-y-4">
                   <h3 className="text-2xl font-light text-zinc-900">Who Is This For?</h3>
                   <p className="text-sm text-zinc-600 font-light">Ideal for those battling:</p>
                </div>
                <ul className="space-y-4">
                   {[
                     "Dark inner thighs due to friction",
                     "Underarm pigmentation",
                     "Post-acne marks on body areas",
                     "Pigmentation around bra lines",
                     "Ingrown hair pigmentation",
                     "Post-inflammatory marks from waxing/shaving",
                     "Hormonal or heat-induced pigmentation",
                     "Body areas darkened during pregnancy"
                   ].map(text => (
                     <li key={text} className="text-sm text-zinc-700 flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-1.5" /> 
                        <span className="font-light">{text}</span>
                     </li>
                   ))}
                </ul>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 pt-4 border-t border-zinc-200">
                  Suitable for all skin tones.
                </p>
              </div>
            </section>

            {/* TREATMENT COURSE & FAQs */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 border-t border-zinc-200">
               <div className="space-y-8">
                  <div className="space-y-2">
                     <h3 className="text-2xl font-light text-zinc-900 uppercase tracking-tight">Treatment Course</h3>
                     <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Clinical Timeline:</p>
                  </div>
                  <ul className="space-y-6">
                    {[
                      "A course of 3–6 peels (depending on pigmentation depth)",
                      "Weekly or monthly sessions",
                      "Prescription creams applied nightly (if suitable)",
                      "Laser sessions if indicated"
                    ].map(text => (
                      <li key={text} className="flex items-center gap-4">
                         <div className="w-2 h-2 bg-zinc-900 rotate-45 shrink-0" />
                         <p className="text-sm text-zinc-600 font-light">{text}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 bg-white border border-zinc-100 rounded-2xl">
                     <p className="text-xs italic text-zinc-400">Results improve progressively over 4–12 weeks.</p>
                  </div>
               </div>

               <div className="space-y-10">
                  <h3 className="text-2xl font-light text-zinc-900">FAQs</h3>
                  <div className="space-y-8">
                     {pigmentationFaqs.map((faq, i) => (
                       <div key={i} className="space-y-2">
                          <h4 className="text-[13px] font-bold uppercase tracking-widest text-zinc-900 flex gap-3">
                             <span className="text-zinc-300 font-serif">{i + 1}.</span> {faq.q}
                          </h4>
                          <p className="text-[15px] text-zinc-500 font-light leading-relaxed pl-7">
                             {faq.a}
                          </p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="space-y-3 text-center md:text-left relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Even Tone Clinical Care</p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Book a consultation</h2>
              </div>
              <Link href="/#contact" className="w-full md:w-auto relative z-10">
                <button className="w-full md:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-lg">
                  Check Availability
                </button>
              </Link>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}