"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Camera, Award, Users, Trophy } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const images = [
    {
      id: 1,
      src: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/TarjeiJS/phpbgZJn0.jpg",
      category: "tournaments",
      title: "Regional Championship Winners",
      description: "Our students celebrating their victory at the Regional Chess Championship 2024",
      achievement: "1st Place Regional",
    },
    {
      id: 2,
      src: "https://www.englishchess.org.uk/NSCC/wp-content/uploads/2024/01/IMG_1229-scaled.jpg",
      category: "classes",
      title: "Interactive Learning Session",
      description: "Students engaged in Kamesh Choudhary's innovative teaching methodology",
      achievement: "Master Class",
    },
    {
      id: 3,
      src: "https://i.ytimg.com/vi/fX9zjgqDQsM/maxresdefault.jpg",
      category: "achievements",
      title: "First Tournament Victory",
      description: "Emma's emotional first tournament victory after 6 months of dedicated training",
      achievement: "Breakthrough Win",
    },
    {
      id: 4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uUFZ81g_CASwUvsBu3nE00Ct4O4seNpDibNV5zxu6E-nlsrOF1EP6YyAyNi9gE89pZ4&usqp=CAU",
      category: "academy",
      title: "Our Beautiful Academy",
      description: "State-of-the-art facilities designed for optimal chess learning experience",
      achievement: "Premium Facility",
    },
    {
      id: 5,
      src: "https://cbin.b-cdn.net/img/PR/Pranav%20Venkatesh_4REAR_1000x666.jpeg",
      category: "students",
      title: "Our Chess Family",
      description: "Students and parents celebrating another successful semester together",
      achievement: "Community Spirit",
    },
    {
      id: 6,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAWeCWR5lftrS9xBKzIw8N0g9AbW1frKKNzxh6yMXgWV0OFLUJiH9yJDsWzVntI4-lIw&usqp=CAU",
      category: "classes",
      title: "Founder in Action",
      description: "Kamesh Choudhary demonstrating advanced tactics to intermediate students",
      achievement: "Expert Guidance",
    },
    {
      id: 7,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVREO9gT5_rhNN7f2fYkpD7GpRgnoLB03uJCzIXNxssXlXrfu9qYJ0y1rJo5DrZk3mNg&usqp=CAU",
      category: "achievements",
      title: "Wall of Champions",
      description: "Awards and trophies won by our students over two decades of excellence",
      achievement: "20 Years Success",
    },
    {
      id: 8,
      src: "https://images.squarespace-cdn.com/content/v1/5075895f84ae84c1f4ec0443/00e66189-f670-4868-b7d3-b7099a920699/Screen+Shot+2022-02-23+at+9.21.35+AM.png",
      category: "classes",
      title: "Global Online Learning",
      description: "Students from 45+ countries joining our innovative virtual chess classes",
      achievement: "Global Reach",
    },
    {
      id: 9,
      src: "https://npr.brightspotcdn.com/dims4/default/fdf3d80/2147483647/strip/true/crop/799x419+0+57/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F90%2Fe0%2Ffcf2474b4cefb43873d8d8f4a0e0%2F080420-provided-turkeytangochess.jpg",
      category: "academy",
      title: "Tournament-Grade Equipment",
      description: "Professional chess sets and digital boards used in all our training sessions",
      achievement: "Premium Quality",
    },
    {
      id: 10,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSodTonnG6CzDfrfhbcoeAkwT4DJXgddejGwPXqjNWSJ2uiWa_ws27fxnZYhhV1EqnXsg&usqp=CAU",
      category: "tournaments",
      title: "National Championship",
      description: "Our students representing their states at the National Junior Championships",
      achievement: "National Level",
    },
    {
      id: 11,
      src: "https://cdn.shopify.com/s/files/1/0520/9138/8064/files/kids_playing_chess_480x480.jpg?v=1698154438",
      category: "students",
      title: "Family Chess Program",
      description: "Families learning and bonding together through our special family programs",
      achievement: "Family Bonding",
    },
    {
      id: 12,
      src: "https://bloximages.chicago2.vip.townnews.com/somdnews.com/content/tncms/assets/v3/editorial/2/7f/27f87ad0-e7de-11ef-8518-47f42e7cb6db/67aa47da0a334.image.jpg?resize=758%2C500",
      category: "achievements",
      title: "Graduation Ceremony",
      description: "Students receiving certificates after completing their chess mastery programs",
      achievement: "Certified Masters",
    },
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
                        <div className="text-white">
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-2">
                            {image.achievement}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold mb-1 line-clamp-2">{image.title}</h3>
                          <p className="text-xs sm:text-sm opacity-90 line-clamp-2">{image.description}</p>
                        </div>
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
            <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              Book Your FREE Demo Class
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-transparent transition-all duration-300"
            >
              View Success Stories
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}