"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, 
  ChevronLeft, 
  User, 
  CheckCircle2, 
  Stethoscope, 
  Sparkles, 
  ShieldCheck,
  Mail,
  Phone,
  ArrowRight,
  Lock,
  CreditCard
} from "lucide-react"

const services = [
  { 
    id: "womens-health", 
    title: "Women's Health", 
    fee: 100, 
    icon: <Stethoscope size={24} strokeWidth={1.5} />, 
    desc: "Specialist gynaecology, regenerative and functional health consultations.",
    tag: "Premium Medical"
  },
  { 
    id: "aesthetics", 
    title: "Aesthetics", 
    fee: 30, 
    icon: <Sparkles size={24} strokeWidth={1.5} />, 
    desc: "Aesthetic consultations for Face, Body, Hair and Hand rejuvenation.",
    tag: "Clinical Aesthetic"
  },
]

export default function AppointmentBooking() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    service: services[0],
    name: "",
    phone: "",
    email: "",
    message: ""
  })

  const handleNext = () => setStep(s => s + 1)
  const handleBack = () => setStep(s => s - 1)

  const handleStripePayment = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      alert("System error. Please contact the clinic directly.");
      setLoading(false);
    }
  }

  return (
    <section id="booking" className="py-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- HEADING SECTION --- */}
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400"
          >
            Clinical Access
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-zinc-900 tracking-tight"
          >
            Book Your <span className="italic font-serif text-zinc-500">Consultation.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Schedule your private assessment with Dr. Evelyn Alba. A secure deposit is required to confirm your clinical time.
          </motion.p>
        </div>

        {/* --- PROGRESS INDICATOR --- */}
        <div className="mb-12 flex justify-center items-center gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div className={`h-1.5 w-12 md:w-20 rounded-full transition-all duration-700 ${step >= i ? "bg-zinc-900" : "bg-zinc-200"}`} />
            </div>
          ))}
        </div>

        {/* --- MAIN BOOKING CARD --- */}
        <div className="bg-white border border-zinc-200 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 overflow-hidden flex flex-col min-h-[550px]">
          
          <div className="p-8 md:p-14 flex-1">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: SERVICE */}
              {step === 1 && (
                <motion.div 
                  key="step1" 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -20 }} 
                  className="space-y-10"
                >
                  <div className="space-y-1">
                    <h2 className="text-2xl font-light text-zinc-900">Select Clinical Department</h2>
                    <p className="text-zinc-400 text-sm font-light">Please choose the service category for your visit.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setFormData({ ...formData, service: s })}
                        className={`relative p-8 rounded-3xl text-left transition-all duration-500 border-2 group ${
                          formData.service.id === s.id 
                          ? "border-zinc-900 bg-[#FAF9F6] shadow-md" 
                          : "border-zinc-100 hover:border-zinc-200 bg-white"
                        }`}
                      >
                        <div className="mb-6 flex justify-between items-start">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${formData.service.id === s.id ? "bg-zinc-900 text-white" : "bg-zinc-50 text-zinc-400"}`}>
                            {s.icon}
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">{s.tag}</span>
                        </div>
                        <h3 className="text-xl font-medium text-zinc-900">{s.title}</h3>
                        <p className="text-xs text-zinc-500 mt-2 font-light leading-relaxed h-10">{s.desc}</p>
                        <div className="mt-8 flex items-baseline gap-1">
                           <span className="text-2xl font-bold text-zinc-900">€{s.fee}</span>
                           <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-tighter">Deposit</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DETAILS */}
              {step === 2 && (
                <motion.div 
                  key="step2" 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -20 }} 
                  className="space-y-8"
                >
                  <div className="space-y-1">
                    <h2 className="text-2xl font-light text-zinc-900">Patient Information</h2>
                    <p className="text-zinc-400 text-sm font-light">Securely provide your contact details.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={16} />
                        <input className="w-full pl-12 pr-4 py-4 rounded-2xl bg-zinc-50 border border-transparent focus:border-zinc-200 focus:bg-white outline-none transition-all text-sm" placeholder="e.g. Sarah Jennings" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}/>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Mobile Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={16} />
                        <input className="w-full pl-12 pr-4 py-4 rounded-2xl bg-zinc-50 border border-transparent focus:border-zinc-200 focus:bg-white outline-none transition-all text-sm" placeholder="+353" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}/>
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Clinical Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={16} />
                        <input type="email" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-zinc-50 border border-transparent focus:border-zinc-200 focus:bg-white outline-none transition-all text-sm" placeholder="name@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}/>
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Reason for consultation (Optional)</label>
                      <textarea className="w-full p-5 rounded-2xl bg-zinc-50 border border-transparent focus:border-zinc-200 focus:bg-white outline-none transition-all h-24 resize-none text-sm font-light" placeholder="Briefly describe your concerns..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}/>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CONFIRMATION */}
              {step === 3 && (
                <motion.div 
                  key="step3" 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="space-y-10 flex flex-col items-center"
                >
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-light text-zinc-900">Final Review</h2>
                    <p className="text-zinc-400 text-sm font-light">Confirm your details before clinical encryption.</p>
                  </div>

                  <div className="w-full max-w-lg bg-[#FAF9F6] border border-zinc-200 rounded-[2.5rem] p-8 md:p-10 space-y-8 relative">
                    <div className="flex justify-between items-start border-b border-zinc-200 pb-6">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Clinical Department</span>
                        <h4 className="text-xl font-medium text-zinc-900">{formData.service.title}</h4>
                      </div>
                      <div className="text-right">
                         <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Total Deposit</span>
                         <h4 className="text-3xl font-bold text-zinc-900">€{formData.service.fee}</h4>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 text-zinc-600 font-light text-sm">
                      <div className="flex items-center gap-3"><User size={14} className="text-zinc-400"/> {formData.name}</div>
                      <div className="flex items-center gap-3"><Phone size={14} className="text-zinc-400"/> {formData.phone}</div>
                      <div className="flex items-center gap-3"><Mail size={14} className="text-zinc-400"/> {formData.email}</div>
                    </div>
                    
                    <div className="bg-emerald-50 text-emerald-700 p-5 rounded-2xl border border-emerald-100 space-y-1">
                      <div className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-wider">
                        <ShieldCheck size={16} /> Deduction Policy
                      </div>
                      <p className="text-xs font-light opacity-90">100% of this fee will be credited towards your treatment cost.</p>
                    </div>

                    <div className="absolute -top-4 -right-4 bg-zinc-900 text-white p-3 rounded-full shadow-lg">
                      <Lock size={16} />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-zinc-400 text-[10px] uppercase tracking-widest">
                    <CreditCard size={14} /> Secured by Stripe Encryption
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* --- BOTTOM ACTIONS --- */}
          <div className="px-8 py-8 md:px-14 bg-[#FAF9F6] border-t border-zinc-200 flex justify-between items-center">
            {step > 1 ? (
              <button 
                onClick={handleBack} 
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                <ChevronLeft size={16}/> Previous
              </button>
            ) : <div className="text-[10px] text-zinc-300 uppercase tracking-widest italic">Step 1 of 3</div>}
            
            {step < 3 ? (
              <button 
                disabled={step === 2 && (!formData.name || !formData.email || !formData.phone)}
                onClick={handleNext} 
                className="bg-zinc-900 text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl hover:bg-zinc-800 disabled:bg-zinc-100 disabled:text-zinc-300 transition-all flex items-center gap-3 active:scale-95"
              >
                Next Step <ChevronRight size={16}/>
              </button>
            ) : (
              <button 
                onClick={handleStripePayment}
                disabled={loading}
                className="bg-zinc-900 text-white px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] shadow-2xl hover:bg-zinc-800 transition-all flex items-center gap-3 disabled:bg-zinc-300 active:scale-95"
              >
                {loading ? "Initializing..." : "Finalize & Pay"} <ArrowRight size={18}/>
              </button>
            )}
          </div>
        </div>

        {/* --- TRUST FOOTER --- */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 opacity-50">
           <div className="flex items-center gap-2">
             <ShieldCheck size={16} />
             <span className="text-[9px] uppercase font-bold tracking-widest">Encrypted Checkout</span>
           </div>
           <div className="flex items-center gap-2">
             <CreditCard size={16} />
             <span className="text-[9px] uppercase font-bold tracking-widest">No Card Data Stored</span>
           </div>
        </div>
      </div>
    </section>
  )
}