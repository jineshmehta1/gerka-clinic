"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, Variants } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/contact", label: "Contact Us" },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const mobileMenuVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3 },
    },
  }

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative flex items-center">
                <img
                  src="/genius.png"
                  alt="The Genius Chess Academy Logo"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                {/* THIS IS THE CORRECTED LINE */}
                <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-tight whitespace-nowrap">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    The GENIUS
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-1 sm:ml-2">CHESS</span>
                </h1>
                <p className="hidden sm:block text-[10px] text-gray-900 tracking-widest font-medium leading-tight mt-0.5">
                  Academy & International School of Chess
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-semibold transition-all duration-300 relative group ${
                      isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link href="/book-demo">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Book FREE Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors z-50 relative"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-40"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
              {navItems.map((item) => {
                 const isActive = pathname === item.href
                 return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-semibold text-2xl transition-colors ${
                      isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                 )
              })}
              <div className="pt-8">
                <Link href="/book-demo">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 text-lg rounded-full"
                  >
                    Book FREE Demo Class
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}