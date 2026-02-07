"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Camera, Award, Users, Trophy } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"


export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const images = [
    {
      id: 16,
      src: "/fide-manvendra.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },
    {
      id: 16,
      src: "/program1.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program2.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program3.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program4.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program5.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program6.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program7.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program8.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program9.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program10.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program11.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program12.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program13.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program14.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program15.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program16.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program17.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program18.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program19.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program20.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program22.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program23.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program24.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program25.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program26.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program27.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program28.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program29.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program30.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program31.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program32.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program33.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program34.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program35.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program36.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },{
      id: 16,
      src: "/program37.jpeg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },
    {
      id: 16,
      src: "/man-8.jpg",
      category: "acheivements",
      title: "Gold medalist",
      description: "Asian Youth Chess Championship 2025 Gold Medalist",
      achievement: "Kings of chess",
    },
    {
      id: 16,
      src: "/man-4.jpg",
      category: "academy",
      title: "Kamlesh sir",
      description: "Kamlesh sir with CM Madhvendra Pratap Sharma",
      achievement: "Kings of chess",
    },
    {
      id: 16,
      src: "/man-3.jpg",
      category: "academy",
      title: "Victory Parade",
      description: "CM Madhvendra Pratap Sharma being honored in victory parade",
      achievement: "Kings of chess",
    },
    {
      id: 16,
      src: "/man-9.jpg",
      category: "academy",
      title: "Gold Medalist",
      description: "commonwealth games gold medalist with genius chess academy guidance",
      achievement: "Kings of chess",
    },
    {
      id: 16,
      src: "/man-1.jpg",
      category: "academy",
      title: "Gold Medalist",
      description: "CM Madhvendra Pratap Sharma",
      achievement: "Kings of chess",
    },
    {
      id: 16,
      src: "/man-2.jpg",
      category: "academy",
      title: "Gold Medalist",
      description: "CM Madhvendra Pratap Sharma",
      achievement: "Kings of chess",
    },
    {
      id: 16,
      src: "/man-7.jpg",
      category: "academy",
      title: "Gold Medalist with Father and Coach",
      description: "CM Madhvendra Pratap Sharma",
      achievement: "Kings of chess",
    },
    {
      id: 16,
      src: "/man-10.jpg",
      category: "academy",
      title: "Gold Medalist with Coach Kamlesh Sir",
      description: "CM Madhvendra Pratap Sharma",
      achievement: "Kings of chess",
    },
    {
      id: 16,
      src: "/magnus.jpg",
      category: "academy",
      title: "Magnus",
      description: "Pravin thipsay sir with magnus carlson",
      achievement: "Kings of chess",
    },
    {
      id: 17,
      src: "/gukesh.jpg",
      category: "tournaments",
      title: "Gukesh",
      description: "Pravin thipsay sir sharing years of wisdom with gukesh",
      achievement: "wizards of chess",
    },
    {
      id: 18,
      src: "/im2.jpg",
      category: "acheivements",
      title: "National awards",
      description: "International Master Bhagyashree Thipsay Padma Shri and Arjuna Awardee",
      achievement: "Certified Masters",
    },
    {
      id: 1,
      src: "/gallery-1.jpg",
      category: "tournaments",
      title: "National Amature Chess Championship 2024",
      description: "Our students celebrating their victory at the Regional Chess Championship 2024",
      achievement: "1st Place Regional",
    },
    {
      id: 3,
      src: "/gallery-3.jpg",
      category: "achievements",
      title: "First Tournament Victory",
      description: "Himadri's emotional first tournament victory after 6 months of dedicated training",
      achievement: "Breakthrough Win",
    },
    {
      id: 4,
      src: "/gallery-4.jpg",
      category: "achievements",
      title: "Awarded By Mr. C.P. Joshi",
      description: "Three students awarded by M.P. sir at prestigious program.",
      achievement: "Big Stage",
    },
    {
      id: 5,
      src: "/gallery-5.jpg",
      category: "students",
      title: "Our Chess Family",
      description: "Students and parents celebrating another successful semester together",
      achievement: "Community Spirit",
    },
    {
      id: 6,
      src: "/gallery-6.jpg",
      category: "academy",
      title: "Grandmaster's in Action",
      description: "International Grandmaster's demonstrating advanced tactics to intermediate students",
      achievement: "Expert Guidance",
    },
    {
      id: 7,
      src: "/gallery-7.jpg",
      category: "academy",
      title: "Wall of Champions",
      description: "Champions Guiding new generation of champions",
      achievement: "20 Years Success",
    },
    {
      id: 8,
      src: "/gallery-8.jpg",
      category: "achievements",
      title: "Awarded at prestigious stage",
      description: "Students from our academy getting worldwide recognition.",
      achievement: "Global Reach",
    },
    {
      id: 9,
      src: "/gallery-9.jpg",
      category: "tournaments",
      title: "Tournament-Winners",
      description: "Professional chess sets and digital boards used in all our training sessions",
      achievement: "Premium Quality",
    },
    {
      id: 10,
      src: "/gallery-10.jpg",
      category: "achievements",
      title: "Young Champions",
      description: "Our students representing their states at the National Junior Championships",
      achievement: "National Level",
    },
    {
      id: 11,
      src: "/gallery-11.jpg",
      category: "students",
      title: "National Champions",
      description: "Stuudents are competing and winning National Tournaments.",
      achievement: "National Champions",
    },
    {
      id: 12,
      src: "/gallery-13.jpg",
      category: "achievements",
      title: "Graduation Ceremony",
      description: "Students receiving certificates after completing their chess mastery programs",
      achievement: "Certified Masters",
    },
    {
      id: 13,
      src: "/im1.jpg",
      category: "academy",
      title: "Masters",
      description: "International master Bhagyashree Thipsay",
      achievement: "Masters",
    },
    {
      id: 14,
      src: "/imchess.jpg",
      category: "academy",
      title: "Bhagyashree Mam",
      description: "Students learing from legends themselves.",
      achievement: "International masters",
    },
    {
      id: 15,
      src: "/gallery-14.jpg",
      category: "students",
      title: "Founder Guidence",
      description: "Students winning national tournaments after completing their chess mastery programs",
      achievement: "Certified Masters",
    }
  ]

  const filters = [
    { id: "all", label: "All Photos", icon: Camera },
    { id: "tournaments", label: "Tournaments", icon: Trophy },
    { id: "classes", label: "Classes", icon: Users },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "students", label: "Students", icon: Users },
    { id: "academy", label: "Academy", icon: Camera },
  ]

  const filteredImages = activeFilter === "all" ? images : images.filter((img) => img.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Photo{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Capturing moments of learning, achievement, and joy in our chess community over 20 years of excellence
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base">Memorable Moments</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base">Tournament Victories</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                  20+
                </div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base">Years Documented</div>
              </CardContent>
            </Card>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg"
                    : "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
                }`}
              >
                <filter.icon className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden">
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                        
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl mx-auto"
              />
              <Button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 text-white border-0 rounded-full h-10 w-10 p-2 backdrop-blur-sm"
                size="sm"
              >
                <X className="w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chess-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Create Your Own{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Success Story?
            </span>
          </h2>
          <p className="text-lg sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our community of champions and be part of our next gallery showcase
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href = "/book-demo">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              Book Your FREE Demo Class
            </Button>
            </Link>
            <Link href = "/sucess-stories">
            <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-transparent transition-all duration-300"
            >
              View Success Stories
            </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}