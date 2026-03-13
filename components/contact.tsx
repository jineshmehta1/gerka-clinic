"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Loader2 } from "lucide-react"
import { sendGerkaInquiry } from "@/app/actions/sendEmail" // Adjust path as needed

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")

    const formData = new FormData(event.currentTarget)
    const result = await sendGerkaInquiry(formData)

    if (result.success) {
      setStatus("success")
      ;(event.target as HTMLFormElement).reset()
    } else {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight"
          >
            Get in <span className="italic font-serif text-zinc-500">Touch</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: HERO IMAGE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <img 
              src="/contact.jpg" 
              alt="Gerka Clinic Office" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            
            <div className="absolute bottom-8 left-8 space-y-4">
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Phone size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[13px] tracking-[0.2em] font-light">0878888087</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Mail size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[13px] tracking-[0.2em] font-light lowercase">hello@gerkaclinic.com</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <MapPin size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[13px] tracking-[0.2em] font-light uppercase">STILLORGAN RD, A94NH31</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: LUXURY FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Full Name</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    placeholder="Sophie"
                    className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 placeholder:text-zinc-200 font-light"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Email Address</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="sophie@example.com"
                    className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 placeholder:text-zinc-200 font-light"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Desired Treatment</label>
                <select name="treatment" className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 font-light cursor-pointer appearance-none">
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="BTL Emsella">BTL Emsella</option>
                  <option value="BTL Vanquish">BTL Vanquish ME</option>
                  <option value="Skin Lesion Removal">Skin Lesion Removal</option>
                  <option value="PRP Intimate">PRP Intimate</option>
                  <option value="Exilis Ultra 360">Exilis Ultra 360</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Message</label>
                <textarea 
                  required
                  name="message"
                  rows={3}
                  placeholder="How can we help you?"
                  className="bg-transparent border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-800 placeholder:text-zinc-200 font-light resize-none"
                />
              </div>

              <div className="pt-4">
                <button 
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full md:w-auto group relative bg-zinc-900 text-white px-10 py-5 rounded-full flex items-center justify-center gap-4 transition-all hover:bg-zinc-800 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="text-[11px] tracking-[0.3em] uppercase font-bold">
                    {status === "loading" ? "Sending..." : "Send Inquiry"}
                  </span>
                  {status === "loading" ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </button>

                {status === "success" && (
                  <p className="mt-4 text-green-600 text-[12px] font-medium tracking-wide">
                    Thank you! Your inquiry has been sent successfully.
                  </p>
                )}
                
                {status === "error" && (
                  <p className="mt-4 text-red-500 text-[12px] font-medium tracking-wide">
                    Something went wrong. Please try again later.
                  </p>
                )}
                
                <p className="text-[10px] text-zinc-400 mt-8 tracking-widest leading-relaxed max-w-[280px]">
                  By submitting this form, you agree to our privacy policy and data protection guidelines.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}