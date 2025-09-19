"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* KEY CHANGE: grid-cols-2 on mobile, sm:grid-cols-2, lg:grid-cols-4 for responsiveness */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          
          {/* Company Info - Spans 2 columns on mobile */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 space-y-6 flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">♔</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#C9A227]">The Genius Chess</h3>
                <p className="text-sm opacity-70">Academy</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-xs mx-auto sm:mx-0 text-sm">
              Transform your chess game with personalized coaching from a Grandmaster.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/1CrebozWXz/" className="text-white/80 hover:text-[#C9A227] transition-colors">
              <Button
                size="icon"
                variant="outline"
                className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white bg-transparent rounded-full"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              </Link>
              <Link href="https://www.instagram.com/geniuschessacademy2025?utm_source=qr&igsh=MWJybzBnejRwN3VyMw==" className="text-white/80 hover:text-[#C9A227] transition-colors">
              <Button
                size="icon"
                variant="outline"
                className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white bg-transparent rounded-full"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              </Link>
              <Link href="https://youtube.com/@geniuschessacademy?si=ejNj6kL3k9asYnBK" className="text-white/80 hover:text-[#C9A227] transition-colors">
              <Button
                size="icon"
                variant="outline"
                className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white bg-transparent rounded-full"
              >
                <Youtube className="w-4 h-4" />
              </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-[#C9A227] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/classes", label: "Classes" },
                { href: "/gallery", label: "Gallery" },
                { href: "/success-stories", label: "Success Stories" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-[#C9A227] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-[#C9A227] mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/classes" className="text-white/80 hover:text-[#C9A227] transition-colors">
                  Beginner Classes
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-white/80 hover:text-[#C9A227] transition-colors">
                  Intermediate
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-white/80 hover:text-[#C9A227] transition-colors">
                  Advanced Coaching
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-white/80 hover:text-[#C9A227] transition-colors">
                  Tournament Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Spans 2 columns on mobile */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-[#C9A227] mb-4">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C9A227] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Ghanta ghar, barisadri, dist. chittorgarh Raj 312403</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="w-4 h-4 text-[#C9A227]" />
                <p className="text-white/80">+91-9799253983</p>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="w-4 h-4 text-[#C9A227]" />
                <p className="text-white/80 break-all">Geniuschessacademy12@gmail.com</p>
              </div>
              <Button
                asChild
                className="bg-[#25D366] hover:bg-[#20B858] text-white w-full max-w-xs mx-auto sm:max-w-none sm:mx-0"
              >
                <a
                  href="https://wa.me/919799253983?text=Hello%20Genius%20Chess%20Academy!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>

            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-xs sm:text-sm">
            © 2025 The Genius Chess Academy (INTERNATIONAL SCHOOL OF CHESS). All rights reserved.
            <span className="hidden sm:inline"> |</span>
            <br className="sm:hidden" />
            <Link href="/privacy" className="hover:text-[#C9A227] sm:ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-[#C9A227] ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}