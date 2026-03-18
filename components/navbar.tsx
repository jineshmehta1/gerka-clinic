"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

const navItems = [
  { href: "/about", label: "About us" },
  { 
    href: "#", 
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
    href: "#", 
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
  { href: "/earlobe-rejuvenation-lobuloplasty", label: "Earlobe Rejuvenation" },
  { 
    href: "#", 
    label: "Women's Health",
    isSectioned: true,
    sections: [
      {
        title: "Medical / Vulval Health",
        items: [
          { label: "Vulval Lichen Specialist Care", href: "/womens-health/vulval-lichen" },
          { label: "Vaginal Dryness & Genitourinary Syndrome Support", href: "/womens-health/vaginal-dryness" }
        ]
      },
      {
        title: "Functional",
        items: [
          { label: "Emsella® Chair Pelvic Floor Treatment", href: "/womens-health/emsella" },
          { label: "Vaginal PRP Treatment", href: "/womens-health/prp" },
          { label: "Vaginismus: Advanced Specialist Treatment", href: "/womens-health/vaginismus" }
        ]
      },
      {
        title: "Aesthetic / Surgical",
        items: [
          { label: "Postpartum Scar Treatment", href: "/womens-health/postpartum-scar" },
          { label: "Skin Lesion Removal", href: "/womens-health/skin-lesion-removal" },
          { label: "Exilis Ultra Femme® Vaginal Tightening", href: "/womens-health/exilis-ultra-femme" },
          { label: "Hymenoplasty (Surgical)", href: "/womens-health/hymenoplasty" },
          { label: "Labiaplasty (Surgical)", href: "/womens-health/labiaplasty" },
          { label: "Intimate Lesion Removal", href: "/womens-health/intimate-lesion-removal" },
        ]
      }
    ]
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav
      onMouseLeave={() => setActiveDropdown(null)}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled || activeDropdown || isOpen
          ? "bg-white border-b border-zinc-100 py-3 shadow-md" 
          : "bg-white/95 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image
              src="/gerkalogo.png"
              alt="Gerka Clinic"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-lg lg:text-xl font-light tracking-[0.15em] text-zinc-800 uppercase leading-tight">
              Gerka Clinic
            </span>
            <span className="text-[6px] md:text-[8px] lg:text-[9px] tracking-[0.2em] text-zinc-400 uppercase font-medium">
              Women&apos;s Wellness
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV - Triggering mobile menu earlier (xl) to handle long titles */}
        <div className="hidden xl:flex items-center space-x-3 2xl:space-x-6">
          {navItems.map((item) => {
            const hasDropdown = item.dropdown || item.sections
            const isActive = pathname === item.href

            return (
              <div 
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => hasDropdown ? setActiveDropdown(item.label) : setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="group flex items-center gap-1 whitespace-nowrap"
                >
                  <span className={`text-[10px] 2xl:text-[12px] font-semibold tracking-widest transition-colors duration-300 uppercase ${
                    isActive || activeDropdown === item.label ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
                  }`}>
                    {/* Special handling for the long Earlobe title on standard desktops */}
                    {item.label === "Earlobe Rejuvenation" ? (
                      <>
                        <span className="2xl:hidden">Earlobe</span>
                        <span className="hidden 2xl:inline">Earlobe Rejuvenation</span>
                      </>
                    ) : item.label}
                  </span>
                  {hasDropdown && <ChevronDown size={10} className="text-zinc-300" />}
                </Link>

                {/* DESKTOP DROPDOWN */}
                <AnimatePresence>
                  {activeDropdown === item.label && hasDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-white border border-zinc-100 shadow-2xl rounded-2xl p-6 min-w-[280px] max-h-[70vh] overflow-y-auto custom-scrollbar">
                        {item.isSectioned ? (
                          <div className="space-y-6">
                            {item.sections?.map((section) => (
                              <div key={section.title}>
                                <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-3 border-b pb-1">
                                  {section.title}
                                </h4>
                                <ul className="space-y-2">
                                  {section.items.map((sub) => (
                                    <li key={sub.label}>
                                      <Link href={sub.href} className="text-[12px] text-zinc-600 hover:text-zinc-900 block py-1">
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-2">
                            {item.dropdown?.map((sub) => (
                              <li key={sub.label}>
                                <Link href={sub.href} className="text-[12px] text-zinc-600 hover:text-zinc-900 block py-1">
                                  {sub.label}
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

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Link href="/#contact">
              <button className="bg-zinc-900 hover:bg-zinc-800 text-white text-[9px] 2xl:text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2.5 2xl:px-7 2xl:py-3.5 rounded-full transition-all shadow-md active:scale-95">
                Contact
              </button>
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="xl:hidden p-2 text-zinc-800 hover:bg-zinc-50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[60px] md:top-[80px] bg-white z-50 xl:hidden flex flex-col overflow-y-auto no-scrollbar"
          >
            <div className="p-6 space-y-2 pb-32">
              {navItems.map((item) => {
                const hasSub = item.dropdown || item.sections
                const isExpanded = mobileExpanded === item.label

                return (
                  <div key={item.label} className="border-b border-zinc-50 last:border-0">
                    {hasSub ? (
                      <button 
                        onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                        className="w-full flex justify-between items-center py-4 text-left"
                      >
                        <span className="text-sm font-medium tracking-widest text-zinc-900 uppercase">
                           {item.label}
                        </span>
                        <ChevronRight className={`transition-transform duration-300 text-zinc-400 ${isExpanded ? "rotate-90" : ""}`} size={16} />
                      </button>
                    ) : (
                      <Link href={item.href} className="block py-4 text-sm font-medium tracking-widest text-zinc-900 uppercase">
                        {/* Full label used for mobile */}
                        {item.label === "Earlobe Rejuvenation" ? "Earlobe Rejuvenation & Lobuloplasty" : item.label}
                      </Link>
                    )}

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pl-4 space-y-4">
                            {item.isSectioned ? (
                              item.sections?.map(sec => (
                                <div key={sec.title} className="space-y-3">
                                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{sec.title}</p>
                                  <div className="flex flex-col gap-3 border-l border-zinc-100 pl-3">
                                    {sec.items.map(sub => (
                                      <Link key={sub.label} href={sub.href} className="text-xs text-zinc-600 active:text-zinc-900">
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="flex flex-col gap-4 border-l border-zinc-100 pl-3">
                                {item.dropdown?.map(sub => (
                                  <Link key={sub.label} href={sub.href} className="text-xs text-zinc-600 active:text-zinc-900">
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
              
              <div className="pt-8">
                <Link href="/#contact">
                  <button className="w-full bg-zinc-900 text-white py-4 rounded-full tracking-[0.2em] uppercase text-xs font-bold shadow-lg">
                    Book Consultation
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}