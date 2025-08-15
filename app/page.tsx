"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link" // Import the Link component
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
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

// Enhanced Chess Decorations - Hidden on smaller screens for better performance and less clutter
function ChessDecorations() {
  return (
    <div className="hidden lg:block">
      {/* Floating Chess Pieces */}
      <div className="absolute left-12 top-40 opacity-10">
        <motion.div
          animate={{ rotate: 360, y: [-10, 10, -10] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-purple-300">
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
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-orange-300">
            <circle cx="40" cy="20" r="12" fill="currentColor" />
            <path d="M28 32 L52 32 L48 70 L32 70 Z" fill="currentColor" />
          </svg>
        </motion.div>
      </div>

      {/* Right side decorations */}
      <div className="absolute right-16 top-32 opacity-12">
        <motion.div
          animate={{ rotate: 180, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg width="140" height="140" viewBox="0 0 140 140" className="text-blue-300">
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
          <svg width="90" height="90" viewBox="0 0 90 90" className="text-red-300">
            <path
              d="M45 5 L50 20 L55 15 L60 30 L55 35 L50 30 L45 35 L40 30 L35 35 L30 30 L35 15 L40 20 Z M30 35 L60 35 L57 80 L33 80 Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </div>

      {/* Geometric patterns */}
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

      {/* Floating geometric shapes */}
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
          "We teach students from age 5 to adults. Our programs are specially designed for different age groups: Kids (5-12), Teens (13-17), and Adults (18+). Each program is tailored to the learning style and attention span of the respective age group.",
      },
      {
        question: "Do I need any prior chess knowledge to start?",
        answer:
          "Not at all! Our beginner programs start from the very basics - how pieces move, basic rules, and simple strategies. We have successfully taught complete beginners who became tournament champions within a year.",
      },
      {
        question: "Are classes conducted online or offline?",
        answer:
          "We offer both online and offline classes to suit your convenience. Our online classes are interactive with digital chess boards, and offline classes are conducted at our state-of-the-art academy. You can also choose hybrid learning.",
      },
      {
        question: "What is the student-to-teacher ratio?",
        answer:
          "We maintain small batch sizes to ensure personalized attention. For group classes, we have maximum 6 students per instructor. We also offer 1-on-1 private coaching for intensive learning.",
      },
      {
        question: "How do you track student progress?",
        answer:
          "We use a comprehensive progress tracking system that includes regular assessments, tournament participation, rating improvements, and detailed feedback reports shared with parents monthly.",
      },
      {
        question: "What makes your teaching methodology unique?",
        answer:
          "Our methodology combines traditional chess wisdom with modern teaching techniques. We use gamification, interactive puzzles, storytelling, and technology to make learning engaging and effective.",
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
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to know about our chess programs</p>
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
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 pr-4">{faq.question}</h3>
                      {openFAQ === index ? (
                        <ChevronUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 sm:px-6 pb-4 sm:pb-6"
                      >
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

// Parent Reviews Slider
function ParentReviews() {
    const [currentReview, setCurrentReview] = useState(0)

    const reviews = [
      {
        name: "Priya Sharma",
        child: "Arjun (Age 10)",
        rating: 5,
        review:
          "Arjun has transformed completely! From a shy kid to a confident chess player who won his school championship. The instructors are amazing and really understand how to teach children.",
        image: "/placeholder.svg?height=80&width=80&text=PS",
        achievement: "School Champion",
      },
      {
        name: "Rajesh Kumar",
        child: "Ananya (Age 12)",
        rating: 5,
        review:
          "Best decision we made for Ananya's development. Her analytical thinking has improved not just in chess but in academics too. She's now participating in state-level tournaments!",
        image: "/placeholder.svg?height=80&width=80&text=RK",
        achievement: "State Player",
      },
      {
        name: "Meera Patel",
        child: "Dev (Age 8)",
        rating: 5,
        review:
          "Dev was initially reluctant, but the way they teach here is magical. He now spends hours practicing and has developed such patience and focus. Highly recommend!",
        image: "/placeholder.svg?height=80&width=80&text=MP",
        achievement: "District Winner",
      },
      {
        name: "Amit Singh",
        child: "Kavya (Age 14)",
        rating: 5,
        review:
          "Kavya's chess rating has improved from 800 to 1400 in just 8 months! The personalized attention and structured curriculum really works. She's now eyeing national tournaments.",
        image: "/placeholder.svg?height=80&width=80&text=AS",
        achievement: "Rating Expert",
      },
      {
        name: "Sunita Gupta",
        child: "Rohan (Age 11)",
        rating: 5,
        review:
          "The online classes are so well conducted that Rohan never misses a session. His concentration and problem-solving skills have improved dramatically. Thank you team!",
        image: "/placeholder.svg?height=80&width=80&text=SG",
        achievement: "Online Champion",
      },
    ]

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length)
      }, 5000)
      return () => clearInterval(timer)
    }, [reviews.length])

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
              Real testimonials from families who've seen incredible transformations
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <Card className="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 shadow-2xl border-0 overflow-hidden">
                      <CardContent className="p-6 sm:p-12 text-center">
                        <div className="mb-6 sm:mb-8">
                          <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-purple-300 mx-auto mb-4 sm:mb-6" />
                          <p className="text-base sm:text-xl text-gray-700 leading-relaxed italic mb-6">
                            "{review.review}"
                          </p>
                          <div className="flex justify-center mb-4 sm:mb-6">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                          <img
                            src={review.image || "/placeholder.svg"}
                            alt={review.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-purple-200"
                          />
                          <div className="text-center sm:text-left">
                            <h4 className="text-lg sm:text-xl font-bold text-gray-800">{review.name}</h4>
                            <p className="text-gray-600 mb-2">Parent of {review.child}</p>
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full inline-block">
                              {review.achievement}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation dots */}
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      // Make sure you have this import at the top of your file:
import Link from 'next/link';

// Inside your component's return statement:

{/* START: Optimized Responsive Video Background Section */}
<div className="relative flex items-center justify-center w-full h-screen max-h-[600px] sm:max-h-[700px] md:max-h-[800px] lg:max-h-[90vh] overflow-hidden bg-black">
  
  {/* The Video Player */}
  <video
    // 1. The Poster Image: THIS IS THE KEY TO PERCEIVED SPEED
    // It's a lightweight image of the first frame of your video. It loads instantly.
    // Create this by taking a screenshot of your video and saving it as an optimized JPG.
    poster="/video-poster.jpg" // IMPORTANT: Replace with your poster image path

    autoPlay
    loop
    muted
    playsInline
    // 2. Preload Hint: Tells the browser this video is important and to start loading it ASAP.
    preload="auto"
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    {/* 3. Video Sources: Provide modern WebM first, then MP4 as a fallback. */}
    {/* The browser will automatically pick the first format it supports. */}
    <source src="/video.webm" type="video/webm" /> 
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay for Text Readability */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

  {/* Your Content */}
  <div className="relative z-10 text-center text-white p-4">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
      Become a Chess Grandmaster
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
      Join our world-class training programs and unlock your strategic potential.
    </p>
    
    <Link href="/book-demo">
      <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        Book Your FREE Demo
      </button>
    </Link>
    
  </div>

</div>
{/* END: Optimized Responsive Video Background Section */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 overflow-hidden pt-20 pb-16">
        <ChessDecorations />

        {/* Changed to flex-col and lg:grid for mobile-first stacking */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Master Chess
                </span>
                <br />
                <span className="text-gray-800">Like a True</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Grandmaster!
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Transform your chess journey with world-class training, proven strategies, and personalized coaching
                that creates champions.
              </p>
            </motion.div>

            {/* Achievement Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                
                {/* THIS IS THE MODIFIED SVG SECTION */}
                <div className="flex-shrink-0">
                  <motion.div
                    animate={{ rotate: [-3, 3, -3] }} // A subtle "clash" or "face-off" animation
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <svg viewBox="0 0 80 80" className="text-gradient w-16 h-16 sm:w-20 sm:h-20">
                      <defs>
                        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F59E0B" />
                          <stop offset="50%" stopColor="#EF4444" />
                          <stop offset="100%" stopColor="#DC2626" />
                        </linearGradient>
                      </defs>
                      {/* Fighting Kings SVG Path */}
                      <path
                        d="M25 12 L28 12 L28 15 L31 15 L31 18 L28 18 L28 30 L33 40 L33 65 L17 65 L17 40 L22 30 L22 18 L19 18 L19 15 L22 15 L22 12 Z M55 12 L58 12 L58 15 L61 15 L61 18 L58 18 L58 30 L63 40 L63 65 L47 65 L47 40 L52 30 L52 18 L49 18 L49 15 L52 15 L52 12 Z"
                        fill="url(#crownGradient)"
                      />
                    </svg>
                  </motion.div>
                </div>

                <div className="space-y-4 text-center sm:text-left">
                  
                  {/* GM Credentials */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 font-semibold mb-1">Taught by</p>
                    <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Pravin Mahadeo Thipsay
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 font-medium">Chess Master & Visionary Educator</p>
                  </div>

                  {/* Grid now stacks on very small screens */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                    {[
                      { year: "1984", achievement: "First Indian To Earn A Grandmaster Norm" },
                      { year: "1985", achievement: "Frist Indian Commonwealth Chess Champion" },
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

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/book-demo">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-base sm:text-lg font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Start Your Chess Journey
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-base sm:text-lg font-bold px-6 py-3 rounded-full bg-transparent transition-all duration-300"
              >
                Watch Success Stories
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - GM Image (Now visible on all screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/pravin-sir.jpg"
                  alt="Pravin Mahadeo Thipsay"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating achievement badges with responsive positioning */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg font-bold text-gray-800">5000+</div>
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
                    <Award className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg font-bold text-gray-800">20+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years Teaching</div>
                  </div>
                </div>
              </motion.div>
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
              { number: 5000, suffix: "+", label: "Students Trained", icon: Users },
              { number: 250000, suffix: "+", label: "Training Hours", icon: Clock },
              { number: 45, suffix: "+", label: "Countries Reached", icon: Globe },
              { number: 500, suffix: "+", label: "Champions Created", icon: Trophy },
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
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
                Grand Master
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Watch Pravin Mahadeo Thipsay share his vision and teaching philosophy
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
                src="https://www.youtube.com/embed/a3cCNBja8vY?autoplay=0&mute=0&controls=1&rel=0"
                title="Grand Master Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                onError={() => {
                  console.error("YouTube video failed to load");
                  const fallback = document.createElement("div");
                  fallback.innerHTML = "Video failed to load. Please check your internet connection or try again later.";
                  fallback.className = "text-white text-center p-4";
                  document.querySelector(".aspect-video")?.appendChild(fallback);
                }}
              ></iframe>
              {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md sm:w-auto sm:left-8 sm:right-auto sm:translate-x-0 sm:bottom-8 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left">
                <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">A Message from Grand Master</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  "Chess is not just a game, it's a life skill that teaches patience, strategy, and critical thinking."
                </p>
              </div> */}
            </div>
          </motion.div>
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
                Genius Chess?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference of world-class chess education with proven results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Target,
                title: "Proven Results",
                description: "98% of our students improve their rating within 3 months with our structured approach",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: BookOpen,
                title: "World-Class Curriculum",
                description: "Comprehensive learning path from beginner to master level with international standards",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Users,
                title: "Expert Instructors",
                description: "Learn from experienced masters and certified instructors with decades of experience",
                gradient: "from-purple-500 to-violet-500",
              },
              {
                icon: Trophy,
                title: "Tournament Success",
                description: "Our students regularly win local, national, and international competitions",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                icon: Clock,
                title: "Flexible Learning",
                description: "Online and offline classes that fit your schedule with recorded sessions",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: Heart,
                title: "Passionate Community",
                description: "Join a supportive community of chess enthusiasts and lifelong learners",
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
                      <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
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
                Programs
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Structured learning paths designed for every skill level and ambition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chess Foundations",
                level: "Beginner",
                duration: "8 weeks",
                students: "Ages 6-12",
                features: ["Basic piece movements", "Simple tactics", "Fun puzzles", "Online games"],
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
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="text-center">
                      {/* THIS IS THE MODIFIED BUTTON */}
                      <Link href="/book-demo">
                        <Button
                          className={`w-full bg-gradient-to-r ${program.gradient} hover:opacity-90 text-white font-bold py-3 rounded-full transition-all duration-300`}
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
              Join thousands of successful students and start your transformation today.
              <br />
              <span className="font-bold text-orange-400">First lesson is completely FREE!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/book-demo">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-base sm:text-xl px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  Book Your FREE Demo Class
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-base sm:text-xl px-8 py-4 rounded-full bg-transparent transition-all duration-300"
              >
                View All Programs
              </Button>
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
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-5 py-3 sm:px-6 sm:py-3 rounded-full shadow-2xl hover:shadow-3xl text-sm sm:text-base">
              Book FREE Demo
            </Button>
          </Link>
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
                <Play className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 opacity-50" />
                <p className="text-lg sm:text-xl">Video Player Placeholder</p>
                <p className="text-sm opacity-70 mt-2">Kamesh Choudhary's Introduction Video</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}