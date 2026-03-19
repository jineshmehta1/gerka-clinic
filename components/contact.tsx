"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Loader2 } from "lucide-react"
import { sendGerkaInquiry } from "@/app/actions/sendEmail"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (status === "loading") return
    setStatus("loading")

    try {
      const formData = new FormData(event.currentTarget)

      const result = await sendGerkaInquiry(formData)

      if (result?.success) {
        setStatus("success")
        event.currentTarget.reset()

        // reset UI after 3s
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-zinc-900 tracking-tight"
          >
            Get in <span className="italic font-serif text-zinc-500">Touch</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-start">
          
          {/* LEFT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group order-2 lg:order-1"
          >
            <img 
              src="/b2.webp" 
              alt="Gerka Clinic Office" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 space-y-3 md:space-y-4 w-[calc(100%-48px)]">
              <div className="flex items-center gap-3 md:gap-4 text-white">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <span className="text-[11px] md:text-[13px] tracking-[0.2em]">0878888087</span>
              </div>

              <div className="flex items-center gap-3 md:gap-4 text-white">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Mail size={14} />
                </div>
                <span className="text-[11px] md:text-[13px] tracking-[0.2em] lowercase truncate">
                  info@gerkaclinic.com
                </span>
              </div>

              <div className="flex items-center gap-3 md:gap-4 text-white">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span className="text-[11px] md:text-[13px] tracking-[0.2em] uppercase">
                  STILLORGAN RD, A94NH31
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">

              {/* 🔥 Honeypot */}
              <input type="text" name="company" className="hidden" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Full Name</label>
                  <input required name="name" type="text"
                    className="w-full border-b py-2 focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Email</label>
                  <input required name="email" type="email"
                    className="w-full border-b py-2 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Treatment</label>
                <select name="treatment" className="w-full border-b py-2 text-sm">
                  <option>General Inquiry</option>
                  <option>BTL Emsella</option>
                  <option>BTL Vanquish ME</option>
                  <option>Skin Lesion Removal</option>
                  <option>PRP Intimate</option>
                  <option>Exilis Ultra 360</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Message</label>
                <textarea required name="message" rows={3}
                  className="w-full border-b py-2 text-sm resize-none"
                />
              </div>

              <button
                disabled={status === "loading"}
                className="w-full bg-black text-white py-4 rounded-full flex justify-center items-center gap-2"
              >
                {status === "loading" ? <Loader2 className="animate-spin" /> : <Send />}
                {status === "loading" ? "Sending..." : "Send Inquiry"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-sm mt-3">
                  Inquiry sent successfully
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-sm mt-3">
                  Something went wrong
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}