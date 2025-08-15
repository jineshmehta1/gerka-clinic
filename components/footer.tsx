import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">♔</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#C9A227]">Genius Chess</h3>
                <p className="text-sm opacity-70">Academy</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Transform your chess game with personalized coaching from a Grandmaster. Join 500+ successful students
              worldwide.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white bg-transparent"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white bg-transparent"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white bg-transparent"
              >
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#C9A227] mb-6">Quick Links</h4>
            <ul className="space-y-3">
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
            <h4 className="text-lg font-semibold text-[#C9A227] mb-6">Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/classes" className="text-white/80 hover:text-[#C9A227] transition-colors">
                  Beginner Classes
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-white/80 hover:text-[#C9A227] transition-colors">
                  Intermediate Training
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
              <li>
                <Link href="/classes" className="text-white/80 hover:text-[#C9A227] transition-colors">
                  Private Lessons
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#C9A227] mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C9A227] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">123 Chess Master Lane</p>
                  <p className="text-white/80">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C9A227]" />
                <p className="text-white/80">+91-9799253983</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C9A227]" />
                <p className="text-white/80">Geniuschessacademy12@gmail.com</p>
              </div>
              <Button className="bg-[#25D366] hover:bg-[#20B858] text-white w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Genius Chess Academy. All rights reserved. |
            <Link href="/privacy" className="hover:text-[#C9A227] ml-1">
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
