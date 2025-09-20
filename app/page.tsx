"use client"

import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import {
  Trophy,
  Users,
  Globe,
  Target,
  Award,
  BookOpen,
  Clock,
  Heart,
  CheckCircle,
  Play,
  ChevronDown,
  ChevronUp,
  Star,
  Quote,
} from "lucide-react"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Chess Decorations
function ChessDecorations() {
  return (
    <div className="hidden lg:block">
      <div className="absolute left-12 top-40 opacity-10">
        <motion.div
          animate={{ rotate: 360, y: [-10, 10, -10] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-purple-300" aria-hidden="true">
            <path
              d="M60 15 L70 30 L65 40 L55 40 Z M55 40 L65 40 L65 100 L55 100 Z M50 100 L70 100 L70 110 L50 110 Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </div>
      <div className="absolute left-32 top-96 opacity-15">
        <motion.div
          animate={{ rotate: -360, x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-orange-300" aria-hidden="true">
            <circle cx="40" cy="20" r="12" fill="currentColor" />
            <path d="M28 32 L52 32 L48 70 L32 70 Z" fill="currentColor" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute right-16 top-32 opacity-12">
        <motion.div
          animate={{ rotate: 180, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg width="140" height="140" viewBox="0 0 140 140" className="text-blue-300" aria-hidden="true">
            <path
              d="M70 10 L80 35 L85 30 L90 40 L85 45 L80 40 L75 45 L70 40 L65 45 L60 40 L55 45 L50 40 L55 30 L60 35 Z M50 45 L90 45 L85 120 L55 120 Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </div>
      <div className="absolute right-8 top-80 opacity-20">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <svg width="90" height="90" viewBox="0 0 90 90" className="text-red-300" aria-hidden="true">
            <path
              d="M45 5 L50 20 L55 15 L60 30 L55 35 L50 30 L45 35 L40 30 L35 35 L30 30 L35 15 L40 20 Z M30 35 L60 35 L57 80 L33 80 Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </div>
      <div className="absolute left-0 top-72 opacity-30">
        <div className="grid grid-cols-10 gap-3">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
      <div className="absolute right-24 top-16 opacity-40">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
        />
      </div>
      <div className="absolute right-8 bottom-40 opacity-25">
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full"
        />
      </div>
      <div className="absolute left-8 bottom-32 opacity-30">
        <motion.div
          animate={{ rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360] }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg"
        />
      </div>
    </div>
  )
}

// FAQ Component
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What age groups do you teach?",
      answer:
        "We offer chess training for students from age 5 to adults. Our programs are tailored for Kids (5-12), Teens (13-17), and Adults (18+), designed to match each group's learning style and attention span.",
    },
    {
      question: "Do I need prior chess knowledge to start?",
      answer:
        "No prior knowledge is required! Our beginner programs teach the basics, including piece movements, rules, and simple strategies. Many of our students have gone from beginners to tournament champions within a year.",
    },
    {
      question: "Are classes conducted online or offline?",
      answer:
        "We provide both online and offline chess classes. Online sessions feature interactive digital chess boards, while offline classes are held at our state-of-the-art academy. Hybrid learning options are also available.",
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer:
        "We ensure personalized attention with small batch sizes. Group classes have a maximum of 6 students per instructor, and we offer 1-on-1 private coaching for intensive learning.",
    },
    {
      question: "How do you track student progress?",
      answer:
        "Our comprehensive progress tracking includes regular assessments, tournament participation, rating improvements, and monthly feedback reports shared with parents.",
    },
    {
      question: "What makes your teaching methodology unique?",
      answer:
        "Our unique methodology blends traditional chess wisdom with modern teaching techniques, using gamification, interactive puzzles, storytelling, and technology for an engaging learning experience.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our chess training programs and how they work
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <article>
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      aria-expanded={openFAQ === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 pr-4">{faq.question}</h3>
                      {openFAQ === index ? (
                        <ChevronUp className="w-6 h-6 text-purple-600 flex-shrink-0" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-purple-600 flex-shrink-0" aria-hidden="true" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 sm:px-6 pb-4 sm:pb-6"
                        id={`faq-answer-${index}`}
                      >
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Parent Reviews Component
function ParentReviews() {
  const [currentReview, setCurrentReview] = useState(0)
  const reviewsRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const reviews = [
    {
      name: "Mrs. Reena Paliwal",
      child: "Himadri Paliwal (Age 15)",
      rating: 5,
      review:
        "Our daughter, Himadri Paliwal, became the SGFI State U-19 Champion and represented Rajasthan at the National SGFI. The academy’s coaching refined her skills and boosted her confidence, leading to remarkable growth in focus and performance.",
      image: "/parent-1.jpg",
      achievement: "SGFI State U-19 Champion",
    },
    {
      name: "Mr. Lalit & Mrs. Renu Munet",
      child: "Suhani (Age 18)",
      rating: 5,
      review:
        "Thanks to the academy’s dedicated coaching, our daughter Suhani became an SGFI National Bronze Medalist (2023-24) and represented India at the Chess Olympiad (2022). She’s grown into a confident individual.",
      image: "/parent-2.jpg",
      achievement: "SGFI National Bronze Medalist (2023-24)",
    },
    {
      name: "Mr. Nilesh Bangar",
      child: "Anshul Bangar (Age 21)",
      rating: 5,
      review:
        "Our son, Anshul, is a two-time West Zone Winner and competed in CBSE and University Nationals. The academy’s guidance instilled discipline, confidence, and a fighting spirit in him.",
      image: "/parent-3.jpg",
      achievement: "CBSE & University Nationals",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [reviews.length])

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(null)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const minSwipeDistance = 50
      const distance = touchStart - touchEnd
      if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) {
          setCurrentReview((prev) => (prev + 1) % reviews.length)
        } else {
          setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
        }
      }
    }
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            What{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Parents Say
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from families who’ve witnessed transformative chess journeys
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden touch-pan-x"
            ref={reviewsRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <article key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <Card className="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 shadow-2xl border-0 overflow-hidden">
                    <CardContent className="p-6 sm:p-12 text-center">
                      <div className="mb-6 sm:mb-8">
                        <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-purple-300 mx-auto mb-4 sm:mb-6" aria-hidden="true" />
                        <p className="text-base sm:text-xl text-gray-700 leading-relaxed italic mb-6">
                          "{review.review}"
                        </p>
                        <div className="flex justify-center mb-4 sm:mb-6">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <img
                          src={review.image}
                          alt={`Photo of ${review.name}, parent of ${review.child}`}
                          className="w-24 h-24 sm:w-40 sm:h-28 border-4 border-purple-200"
                          loading="lazy"
                        />
                        <div className="text-center sm:text-left">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800">{review.name}</h3>
                          <p className="text-gray-600 mb-2">Parent of {review.child}</p>
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full inline-block">
                            {review.achievement}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </motion.div>
          </div>
          <div className="flex justify-center mt-6 sm:mt-8 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentReview === index
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 w-6 sm:w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Genius Chess Academy (International School of Chess)",
    url: "https://www.thegeniuschessacademy.com",
    logo: "/genius.png",
    description: "World-class chess training programs led by Grandmaster Pravin Mahadeo Thipsay and International Master Bhagyashree Thipsay, offering personalized coaching for all ages and skill levels.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9799253983",
      contactType: "Customer Service",
      contactOption: "WhatsApp",
      areaServed: "Global",
    },
    sameAs: [
      "https://www.facebook.com/share/1CrebozWXz/",
      "https://www.instagram.com/geniuschessacademy2025?utm_source=qr&igsh=MWJybzBnejRwN3VyMw==",
      "https://youtube.com/@geniuschessacademy?si=ejNj6kL3k9asYnBK",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Mrs. Reena Paliwal" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "Our daughter became the SGFI State U-19 Champion thanks to the academy’s coaching.",
      },
    ],
    faqPage: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What age groups do you teach?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer chess training for students from age 5 to adults, with programs tailored for Kids (5-12), Teens (13-17), and Adults (18+).",
          },
        },
        {
          "@type": "Question",
          name: "Do I need prior chess knowledge to start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No prior knowledge is required! Our beginner programs teach the basics, including piece movements, rules, and simple strategies.",
          },
        },
      ],
    },
  }

  return (
    <>
      <Head>
        <title>Genius Chess Academy | World-Class Chess Training with Grandmaster Pravin Thipsay</title>
        <meta
          name="description"
          content="Join Genius Chess Academy for expert chess coaching by Grandmaster Pravin Mahadeo Thipsay and International Master Bhagyashree Thipsay. Learn chess from beginner to advanced levels with personalized training programs."
        />
        <meta
          name="keywords"
          content="chess academy, chess coaching, learn chess, grandmaster training, Pravin Thipsay, Bhagyashree Thipsay, chess classes online, chess for kids, chess tournaments"
        />
        <meta name="author" content="Genius Chess Academy (International School of Chess)" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Genius Chess Academy (International School of Chess) | World-Class Chess Training" />
        <meta
          property="og:description"
          content="Master chess with personalized coaching from Grandmaster Pravin Thipsay and International Master Bhagyashree Thipsay. Join our programs for all skill levels."
        />
        <meta property="og:image" content="/logo.webp" />
        <meta property="og:url" content="https://www.thegeniuschessacademy.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Genius Chess Academy (International School of Chess) | Expert Chess Coaching" />
        <meta
          name="twitter:description"
          content="Learn chess from Grandmaster Pravin Thipsay and International Master Bhagyashree Thipsay. Join our world-class programs today!"
        />
        <meta name="twitter:image" content="/logo.webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <div className="min-h-screen bg-white">
        <header>
          <Navbar />
        </header>
        <main>
          {/* Video Background Section */}
          <section className="relative flex items-center justify-center w-full h-screen max-h-[600px] sm:max-h-[700px] md:max-h-[800px] lg:max-h-[90vh] overflow-hidden bg-black">
            <video
              poster="/video-poster.webp"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute top-0 left-0 w-full h-full object-cover"
              aria-hidden="true"
            >
              <source src="/video.webm" type="video/webm" />
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
            <div className="relative z-10 text-center text-white p-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                Join Genius Chess Academy
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Join our world-class chess training programs to unlock your strategic potential.
              </p>
              <Link href="/book-demo">
                <Button
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  aria-label="Book a free demo class"
                >
                  Book Your FREE Demo
                </Button>
              </Link>
            </div>
          </section>

          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 overflow-hidden pt-20 pb-16">
            <ChessDecorations />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="space-y-4"
                >
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Master Chess
                    </span>
                    <br />
                    <span className="text-gray-800">Like a True</span>
                    <br />
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      Grandmaster!
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Transform your chess journey with world-class training, proven strategies, and personalized coaching from expert instructors.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: [-3, 3, -3] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      >
                        <svg viewBox="0 0 80 80" className="text-gradient w-16 h-16 sm:w-20 sm:h-20" aria-hidden="true">
                          <defs>
                            <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#F59E0B" />
                              <stop offset="50%" stopColor="#EF4444" />
                              <stop offset="100%" stopColor="#DC2626" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M25 12 L28 12 L28 15 L31 15 L31 18 L28 18 L28 30 L33 40 L33 65 L17 65 L17 40 L22 30 L22 18 L19 18 L19 15 L22 15 L22 12 Z M55 12 L58 12 L58 15 L61 15 L61 18 L58 18 L58 30 L63 40 L63 65 L47 65 L47 40 L52 30 L52 18 L49 18 L49 15 L52 15 L52 12 Z"
                            fill="url(#crownGradient)"
                          />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="space-y-4 text-center sm:text-left">
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-700 font-semibold mb-1">Taught by</p>
                        <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          Pravin Mahadeo Thipsay
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">Chess Grandmaster & Visionary Educator</p>
                      </div>
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                        {[
                          { year: "1984", achievement: "First Indian To Earn A Grandmaster Norm" },
                          { year: "1985", achievement: "First Indian Commonwealth Chess Champion" },
                          { year: "1982-94", achievement: "7 Times Indian National Chess Champion" },
                          { year: "1984", achievement: "Arjuna Award For Contribution In Chess" },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                            className="text-center"
                          >
                            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                              {item.year}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">{item.achievement}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link href="/book-demo">
                    <Button
                      className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-base sm:text-lg font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                      aria-label="Start your chess journey"
                    >
                      Start Your Chess Journey
                    </Button>
                  </Link>
                  <Link href="/success-stories">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-base sm:text-lg font-bold px-6 py-3 rounded-full bg-transparent transition-all duration-300"
                      aria-label="Watch success stories"
                    >
                      Watch Success Stories
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative w-full max-w-md mx-auto lg:max-w-none"
              >
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/pravin-sir.jpg"
                      alt="Grandmaster Pravin Mahadeo Thipsay, chess coach"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-gray-100"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Trophy className="w-4 h-4 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-lg font-bold text-gray-800">1500+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Students</div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-gray-100"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-lg font-bold text-gray-800">50+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Years Teaching</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Bhagyashree Thipsay Section */}
          <section className="relative bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 overflow-hidden py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-8 text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: [-3, 3, -3] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      >
                        <svg viewBox="0 0 80 80" className="text-gradient w-16 h-16 sm:w-20 sm:h-20" aria-hidden="true">
                          <defs>
                            <linearGradient id="crownGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#EC4899" />
                              <stop offset="50%" stopColor="#F43F5E" />
                              <stop offset="100%" stopColor="#BE123C" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M25 12 L28 12 L28 15 L31 15 L31 18 L28 18 L28 30 L33 40 L33 65 L17 65 L17 40 L22 30 L22 18 L19 18 L19 15 L22 15 L22 12 Z M55 12 L58 12 L58 15 L61 15 L61 18 L58 18 L58 30 L63 40 L63 65 L47 65 L47 40 L52 30 L52 18 L49 18 L49 15 L52 15 L52 12 Z"
                            fill="url(#crownGradient2)"
                          />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="space-y-4 text-center sm:text-left">
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-700 font-semibold mb-1">Coached by</p>
                        <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          Bhagyashree Thipsay
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">International Master & Esteemed Coach</p>
                      </div>
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                        {[
                          { year: "1990", achievement: "Woman International Master Title" },
                          { year: "1986-88", achievement: "Multiple National Women's Champion" },
                          { year: "1991", achievement: "Asian Women's Chess Championship Medalist" },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                            className="text-center"
                          >
                            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                              {item.year}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">{item.achievement}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative w-full max-w-[300px] mx-auto"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full">
                  <img
                    src="/improfile.jpg"
                    alt="International Master Bhagyashree Thipsay, chess coach"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center"
              >
                {[
                  { number: 1500, suffix: "+", label: "Students Trained", icon: Users },
                  { number: 50000, suffix: "+", label: "Training Hours", icon: Clock },
                  { number: 10, suffix: "+", label: "Countries Reached", icon: Globe },
                  { number: 50, suffix: "+", label: "Champions Created", icon: Trophy },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <p className="text-white/90 font-semibold text-xs sm:text-base">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* GM Video Section */}
          <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
                  Meet Our{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Grandmaster
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover Grandmaster Pravin Mahadeo Thipsay’s vision and teaching philosophy
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative max-w-5xl mx-auto"
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/ZjSDh6q0JSo?si=L-CRR_fqPOnRVqFS"
                    title="Grandmaster Pravin Thipsay Introduction Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    onError={() => {
                      console.error("YouTube video failed to load")
                      const fallback = document.createElement("div")
                      fallback.innerHTML = "Video failed to load. Please check your internet connection or try again later."
                      fallback.className = "text-white text-center p-4"
                      document.querySelector(".aspect-video")?.appendChild(fallback)
                    }}
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Success Stories Preview */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                  Join Our{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Success Stories
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover the achievements of students trained by Grandmaster Pravin Thipsay
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Umasankar Datta",
                    age: 16,
                    achievement: "Three Times State Champion",
                    image: "/uma.jpg",
                    quote: "Chess opened doors I never knew existed. It’s a life skill that changed everything!",
                  },
                  {
                    name: "Candidate Master Madvendra Pratap Sharma",
                    age: 10,
                    achievement: "Gold Medal in Asian Youth Chess Championship 2022 (U-10) in Indonesia",
                    image: "/student-1.jpg",
                    quote: "The demo class changed everything for me!",
                  },
                  {
                    name: "Suhani Munet",
                    age: 17,
                    achievement: "SGFI National Bronze Medalist (2023-24) and Chess Olympiad Participant (2022)",
                    image: "/student-2.jpg",
                    quote: "Best decision we ever made!",
                  },
                  {
                    name: "Anshul Bangar",
                    age: 21,
                    achievement: "School and University Level National Participant",
                    image: "/anshulAcheivement.jpg",
                    quote: "Kamlesh sir made chess so exciting!",
                  },
                  {
                    name: "Himadri Paliwal",
                    age: 15,
                    achievement: "SGFI State U-19 Chess Champion (Kolkata)",
                    image: "/himadri.jpg",
                    quote: "Chess is like magic! I can make my pieces dance and create beautiful patterns on the board!",
                  },
                ].map((story, index) => (
                  <article key={index}>
                    <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                      <CardContent className="p-8 text-center">
                        <img
                          src={story.image}
                          alt={`Photo of ${story.name}, chess student`}
                          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-purple-200"
                          loading="lazy"
                        />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{story.name}</h3>
                        <p className="text-gray-600 mb-4">{story.achievement}</p>
                        <p className="text-gray-700 italic">"{story.quote}"</p>
                      </CardContent>
                    </Card>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Genius Chess Academy?
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover why our chess training programs are trusted by thousands worldwide
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: Target,
                    title: "Proven Results",
                    description: "98% of our students improve their chess rating within 3 months with our structured training.",
                    gradient: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: BookOpen,
                    title: "World-Class Curriculum",
                    description: "Comprehensive chess courses from beginner to master level, aligned with international standards.",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Users,
                    title: "Expert Instructors",
                    description: "Learn from Grandmaster Pravin Thipsay and International Master Bhagyashree Thipsay with decades of experience.",
                    gradient: "from-purple-500 to-violet-500",
                  },
                  {
                    icon: Trophy,
                    title: "Weekly Tournaments",
                    description: "Participate in competitive chess tournaments every Sunday to hone your skills.",
                    gradient: "from-yellow-500 to-orange-500",
                  },
                  {
                    icon: Clock,
                    title: "Flexible Learning",
                    description: "Choose online or offline chess classes with recorded sessions to fit your schedule.",
                    gradient: "from-pink-500 to-rose-500",
                  },
                  {
                    icon: Heart,
                    title: "Passionate Community",
                    description: "Join a vibrant community of chess enthusiasts and lifelong learners.",
                    gradient: "from-red-500 to-pink-500",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden group h-full">
                      <CardContent className="p-6 sm:p-8 text-center relative">
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Programs Preview Section */}
          <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
                  Our{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Chess Programs
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore structured chess courses for every skill level and ambition
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Chess Foundations",
                    level: "Beginner",
                    duration: "8 weeks",
                    students: "Ages 6-12",
                    features: ["Basic piece movements", "Simple tactics", "Fun chess puzzles", "Online games"],
                    gradient: "from-green-400 to-blue-500",
                    popular: false,
                  },
                  {
                    title: "Strategic Mastery",
                    level: "Intermediate",
                    duration: "12 weeks",
                    students: "Ages 10+",
                    features: ["Opening principles", "Tactical combinations", "Endgame basics", "Tournament prep"],
                    gradient: "from-purple-500 to-pink-500",
                    popular: true,
                  },
                  {
                    title: "Grandmaster Path",
                    level: "Advanced",
                    duration: "16 weeks",
                    students: "Serious Players",
                    features: ["Advanced strategy", "Master-level analysis", "Competition training", "1-on-1 sessions"],
                    gradient: "from-orange-500 to-red-500",
                    popular: false,
                  },
                ].map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {program.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <Card
                      className={`bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden h-full ${program.popular ? "ring-2 ring-orange-500" : ""}`}
                    >
                      <div className={`h-2 bg-gradient-to-r ${program.gradient}`}></div>
                      <CardContent className="p-6 sm:p-8">
                        <div className="text-center mb-6">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                          <div
                            className={`inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${program.gradient} text-white`}
                          >
                            {program.level}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                          <div>
                            <div className="text-sm text-gray-500">Duration</div>
                            <div className="font-semibold text-gray-800">{program.duration}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">For</div>
                            <div className="font-semibold text-gray-800">{program.students}</div>
                          </div>
                        </div>
                        <ul className="space-y-3 mb-8">
                          {program.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="text-center">
                          <Link href="/book-demo">
                            <Button
                              className={`w-full bg-gradient-to-r ${program.gradient} hover:opacity-90 text-white font-bold py-3 rounded-full transition-all duration-300`}
                              aria-label={`Enroll in ${program.title} program`}
                            >
                              Enroll Now
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Parent Reviews Section */}
          <ParentReviews />

          {/* FAQ Section */}
          <FAQSection />

          {/* Final CTA Section */}
          <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/chess-pattern.svg')] opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                  Ready to Become a{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Chess Master?
                  </span>
                </h2>
                <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
                  Join thousands of successful students and start your chess journey today.
                  <br />
                  <span className="font-bold text-orange-400">Your first lesson is completely FREE!</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <Link href="/book-demo">
                    <Button
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-base sm:text-xl px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                      aria-label="Book a free demo class"
                    >
                      Book Your FREE Demo Class
                    </Button>
                  </Link>
                  <Link href="/programs">
                    <Button
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-base sm:text-xl px-8 py-4 rounded-full bg-transparent transition-all duration-300"
                      aria-label="View all chess programs"
                    >
                      View All Programs
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Floating CTA Button */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            >
              <Link href="/book-demo">
                <Button
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-5 py-3 sm:px-6 sm:py-3 rounded-full shadow-2xl hover:shadow-3xl text-sm sm:text-base"
                  aria-label="Book a free demo class"
                >
                  Book FREE Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating WhatsApp Button */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="fixed bottom-16 right-4 sm:bottom-20 sm:right-6 z-40"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            >
              <a
                href="https://wa.me/919799253983"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold px-5 py-3 sm:px-6 sm:py-3 rounded-full shadow-2xl hover:shadow-3xl text-sm sm:text-base flex items-center space-x-2"
                aria-label="Contact Genius Chess Academy on WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.71 11.71 0 0012 0C5.37 0 .008 5.37 0 12a11.66 11.66 0 002 6L0 24l6-2a11.96 11.96 0 006 2c6.62 0 12-5.37 12-12 0-3.21-1.24-6.22-3.48-8.52zm-8.48 16.3a7.06 7.06 0 01-3.6-1l-.25-.15-2.1.56.56-2.03-.16-.26a7.06 7.06 0 011-3.56c.42-.73.95-1.22 1.48-1.4.12-.05.3-.1.6-.1.3 0 .5.04.7.1.17.06.7.27.85.32.1.04.17.07.26.11a.72.72 0 01.27.19.8.8 0 01.18.27c.03.1.09.2.1.3.02.1 0 .18 0 .3a.564.564 0 01-.12.35c-.07.1-.14.15-.2.22l-.14.17a1.66 1.66 0 01-.9.53c-.07 0-.15 0-.23-.04a.246.246 0 01-.1-.08.798.798 0 01-.12-.15c-.05-.1-.1-.2-.1-.35s0-.17.03-.25.05-.13.07-.14a.132.132 0 01.1-.04h.07a.52.52 0 01.4.18.528.528 0 01.18.4.519.519 0 01-.1.32.44.44 0 01-.22.2c-.02 0-.04 0-.07-.01s-.04 0-.05-.02c-.02-.02-.03-.05-.03-.07s0-.1.03-.14a.38.38 0 01.1-.14z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Video Modal */}
          {isVideoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setIsVideoOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-2xl p-2 sm:p-4 max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video bg-black rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 opacity-50" aria-hidden="true" />
                    <p className="text-lg sm:text-xl">Video Player Placeholder</p>
                    <p className="text-sm opacity-70 mt-2">Kamlesh Choudhary's Introduction Video</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </main>
        <Footer/>
      </div>
    </>
  )
}