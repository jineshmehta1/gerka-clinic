"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Star } from "lucide-react"

export function SuccessMoments() {
  // Placeholder data - Replace src with your actual image paths
  const moments = [
    {
      id: 1,
      src: "/man-10.jpg", // Replace with your first image
      alt: "Award Ceremony Stage",
      caption: "Victory celebration with CM Madhvendra Pratap Sharma",
      tag: "Gold Medal"
    },
    {
      id: 2,
      src: "/man-7.jpg", // Replace with your second image
      alt: "Holding the Trophy",
      caption: "Proud Moment for India",
      tag: "Winner"
    },
    {
      id: 3,
      src: "/man-8.jpg", // Replace with your third image
      alt: "Flag Ceremony",
      caption: "Representing the Nation",
      tag: "Team India"
    }
  ]

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Camera className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Moments of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Success</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Glimpses from the Asian Youth Chess Championship and Commonwealth Competition.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full">
                <CardContent className="p-0 relative h-80 md:h-96">
                  {/* Image */}
                  <img
                    src={moment.src}
                    alt={moment.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay (Visible on Hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full w-fit mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {moment.tag}
                    </span>
                    <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                      {moment.caption}
                    </h3>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}