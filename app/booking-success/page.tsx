"use client"
import { motion } from "framer-motion";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white p-10 rounded-[3rem] shadow-xl text-center space-y-6 border border-zinc-100"
      >
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="text-emerald-500" size={40} />
        </div>
        <h1 className="text-3xl font-light text-zinc-900">Booking Confirmed</h1>
        <p className="text-zinc-500 font-light leading-relaxed">
          Thank you. Your clinical deposit has been received. Our team will contact you within 24 hours to finalize your appointment time.
        </p>
        <div className="pt-6 border-t border-zinc-50 flex flex-col gap-3">
          <Link href="/" className="bg-zinc-900 text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            Return Home <ArrowRight size={14}/>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}