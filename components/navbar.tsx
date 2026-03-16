"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
 {/* LOGO */}
        import Image from "next/image";

// Navigation Data with specific links for every item
const navItems = [
  { href: "/about", label: "About us" },
  { 
    href: "/", 
    label: "Face",
    dropdown: [
      { label: "SkinVive", href: "/face/skinvive" },
      { label: "Exilis® Radiofrequency Facial Tightening", href: "/face/exilis" },
      { label: "Sunekos® Skin Booster", href: "/face/sunekos" },
      { label: "Profhilo® Skin Booster", href: "/face/profhilo" },
      { label: "Polynucleotides", href: "/face/polynucleotides" },
      { label: "Cosmelan – Professional Melasma Treatment", href: "/face/cosmelan" },
      { label: "HydraFacial – Deep Cleansing & Skin Renewal", href: "/face/hydrafacial" },
      { label: "Chemical Peels – Medical Skin Resurfacing", href: "/face/peels" },
      { label: "PRP Facial Rejuvenation", href: "/face/prp-facial" },
      { label: "Anti-Wrinkle Neuromodulator Treatments", href: "/face/anti-wrinkle" }
    ]
  },
  { 
    href: "/", 
    label: "Body",
    dropdown: [
      { label: "Vanquish ME® Body Contouring", href: "/body/vanquish" },
      { label: "Fat Reduction – DesoBody Injectables", href: "/body/desobody" },
      { label: "Cellulite Treatment – Subcision & Sunekos Cell 15", href: "/body/cellulite" },
      { label: "Pigmentation Treatment", href: "/body/pigmentation" },
      { label: "Exilis Body Skin Tightening", href: "/body/exilis-body" },
      { label: "Postpartum Scar Treatment", href: "/body/postpartum-scar" },
      { label: "Skin Lesion Removal", href: "/body/lesion-removal" }
    ]
  },
  { href: "/nail", label: "Nail Disorders" },
  { href: "/hand-rejuvenation", label: "Hands Treatment" },
  { href: "/hair-loss-treatments", label: "Hair Loss" },
  { 
    href: "/", 
    label: "Women's Health",
    isSectioned: true,
    sections: [
      {
        title: "Functional",
        items: [
          { label: "Emsella® Chair Pelvic Floor Treatment", href: "/womens-health/emsella" },
          { label: "Vaginal PRP Treatment", href: "/womens-health/prp" },
          { label: "Vaginismus: Advanced Specialist Treatment", href: "/womens-health/vaginismus" }
        ]
      },
      {
        title: "Aesthetic",
        items: [
          { label: "Postpartum Scar Treatment", href: "/womens-health/postpartum-scar" },
          { label: "Skin Lesion Removal", href: "/womens-health/skin-lesion-removal" },
          { label: "Exilis Ultra Femme® Vaginal Tightening", href: "/womens-health/exilis-ultra-femme" },
          { label: "Hymenoplasty (Surgical)", href: "/womens-health/hymenoplasty" },
{ label: "Labiaplasty (Surgical)", href: "/womens-health/labiaplasty" }
        ]
      }
    ]
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      onMouseLeave={() => setActiveDropdown(null)}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || activeDropdown
          ? "bg-white border-b border-zinc-100 py-3 shadow-sm" 
          : "bg-white py-6"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
       

<Link href="/" className="flex items-center gap-2 group shrink-0">

  {/* Icon / Logo */}
  <Image
    src="/gerkalogo.png"
    alt="Gerka Clinic"
    width={60}
    height={40}
    className="object-contain"
  />

  {/* Text */}
  <div className="flex flex-col">
    <span className="text-xl md:text-2xl font-light tracking-[0.2em] text-zinc-800 uppercase leading-tight">
      Gerka Clinic
    </span>
    <span className="text-[9px] tracking-[0.4em] text-zinc-400 uppercase font-medium -mt-0.5">
      Women&apos;s Wellness
    </span>
  </div>

</Link>

        {/* CENTER NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const hasDropdown = item.dropdown || item.sections

            return (
              <div 
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => hasDropdown ? setActiveDropdown(item.label) : setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="group flex items-center gap-1"
                >
                  <span className={`text-[13px] font-medium tracking-widest transition-colors duration-300 ${
                    isActive || activeDropdown === item.label ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
                  }`}>
                    {item.label}
                  </span>
                  
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-zinc-900 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>

                {/* DESKTOP DROPDOWN MENU */}
                <AnimatePresence>
                  {activeDropdown === item.label && hasDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-4"
                    >
                      <div className="bg-white border border-zinc-100 shadow-xl rounded-2xl p-6 min-w-[320px]">
                        {item.isSectioned ? (
                          <div className="space-y-6">
                            {item.sections?.map((section) => (
                              <div key={section.title}>
                                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900 mb-3">
                                  {section.title}
                                </h4>
                                <ul className="space-y-2.5">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.label}>
                                      <Link href={subItem.href} className="text-[13px] text-zinc-600 hover:text-zinc-900 transition-colors block leading-tight">
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-3">
                            {item.dropdown?.map((subItem) => (
                              <li key={subItem.label}>
                                <Link href={subItem.href} className="text-[13px] text-zinc-600 hover:text-zinc-900 transition-colors block leading-tight">
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* RIGHT ACTION - LINK TO CONTACT SECTION */}
        <div className="hidden lg:block">
          <Link href="/#contact">
            <button className="bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-3.5 rounded-full transition-all duration-300 active:scale-95 shadow-lg shadow-zinc-200">
              Contact
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-zinc-800">
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-[64px] bg-white z-40 lg:hidden flex flex-col p-8 overflow-y-auto"
          >
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-zinc-50 py-4">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-light tracking-widest text-zinc-800 block mb-2"
                >
                  {item.label}
                </Link>
                {/* Mobile Sub-items */}
                {(item.dropdown || item.sections) && (
                  <div className="pl-4 space-y-3 mt-4">
                    {item.isSectioned 
                      ? item.sections?.flatMap(s => s.items).map(i => (
                          <Link key={i.label} href={i.href} onClick={() => setIsOpen(false)} className="text-zinc-500 text-sm block">
                            {i.label}
                          </Link>
                        ))
                      : item.dropdown?.map(i => (
                          <Link key={i.label} href={i.href} onClick={() => setIsOpen(false)} className="text-zinc-500 text-sm block">
                            {i.label}
                          </Link>
                        ))
                    }
                  </div>
                )}
              </div>
            ))}
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="mt-8">
              <button className="w-full bg-zinc-900 text-white py-5 rounded-full tracking-[0.2em] uppercase text-sm font-semibold">
                Contact Us
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}