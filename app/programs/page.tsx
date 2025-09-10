"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Clock, Users, Trophy, Star, Calendar, CheckCircle, Award, BookOpen } from "lucide-react"

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const programs = [
    {
      id: 1,
      title: "Chess Foundations",
      level: "beginner",
      duration: "8 weeks",
      students: "Ages 6-12",
      rating: 4.9,
      image: "/foundation.webp",
      features: [
        "Learn basic piece movements",
        "Understanding the chessboard",
        "Simple tactics and strategies",
        "Fun games and puzzles",
        "Certificate upon completion",
        "Weekly progress reports",
      ],
      description:
        "Perfect for complete beginners aged 6-12. Learn the fundamentals in a fun, supportive environment with gamified learning.",
      gradient: "from-green-400 to-blue-500",
      popular: false,
    },
    {
      id: 2,
      title: "Strategic Mastery",
      level: "intermediate",
      duration: "12 weeks",
      students: "Ages 10+",
      rating: 4.8,
      image: "/starategy.jpeg",
      features: [
        "Advanced tactics training",
        "Opening principles & theory",
        "Endgame fundamentals",
        "Tournament preparation",
        "Rating improvement focus",
        "Personal mentorship in grandmaster path",
      ],
      description:
        "For players with basic knowledge ready to take their game to the competitive level with structured tournament preparation.",
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      id: 3,
      title: "Grandmaster Path",
      level: "advanced",
      duration: "16 weeks",
      students: "Serious Players",
      rating: 5.0,
      image: "/gm.jpg",
      features: [
        "Complex strategic concepts",
        "Deep opening analysis",
        "Advanced endgame theory",
        "Psychological aspects of chess",
        "Master-level insights",
        "Weekly 1-on-1 coaching",
      ],
      description:
        "Elite training for serious players aiming for competitive excellence and master-level understanding.",
      gradient: "from-orange-500 to-red-500",
      popular: false,
    },
    {
      id: 4,
      title: "Tournament Warrior",
      level: "intermediate",
      duration: "10 weeks",
      students: "Ages 12+",
      rating: 4.9,
      image: "/tounament.webp",
      features: [
        "Time management skills",
        "Pressure handling techniques",
        "Opening repertoire building",
        "Practical game analysis",
        "Mental preparation strategies",
        "Mock tournament practice",
      ],
      description:
        "Specialized program to prepare students for competitive tournament play with focus on mental strength.",
      gradient: "from-blue-500 to-purple-500",
      popular: false,
    },
    {
      id: 5,
      title: "Private Coaching",
      level: "all",
      duration: "Flexible",
      students: "1-on-1",
      rating: 5.0,
      image: "/private.webp",
      features: [
        "Personalized curriculum",
        "Flexible scheduling",
        "Rapid improvement focus",
        "Individual attention",
        "Customized learning pace",
        "Direct mentor access",
      ],
      description:
        "Personal mentorship in grandmaster path tailored to your specific needs and goals with personalized attention from expert instructors.",
      gradient: "from-yellow-500 to-orange-500",
      popular: false,
    },
    {
      id: 6,
      title: "Family Chess Program",
      level: "beginner",
      duration: "6 weeks",
      students: "Families",
      rating: 4.8,
      image: "/family.webp",
      features: [
        "Learn together as a family",
        "Age-appropriate instruction",
        "Family tournament events",
        "Bonding through chess",
        "Take-home materials",
        "Weekend special sessions",
      ],
      description:
        "A wonderful way for families to learn and bond through the game of chess with activities for all ages.",
      gradient: "from-pink-500 to-red-500",
      popular: false,
    },
  ]

  const filteredPrograms =
    activeTab === "all"
      ? programs
      : programs.filter((program) => program.level === activeTab || program.level === "all")

  const tabs = [
    { id: "all", label: "All Programs" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Our Chess{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Programs</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            From complete beginners to advanced players, we have the perfect program to elevate your chess journey with
            Kamlesh Choudhary's proven methodology
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg"
                    : "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <Card
                key={program.id}
                className={`bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden h-full flex flex-col ${program.popular ? "ring-2 ring-orange-500" : ""}`}
              >
                <div className="relative">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-20`}></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${program.gradient} text-white font-semibold`}>
                      {program.level === "all"
                        ? "All Levels"
                        : program.level.charAt(0).toUpperCase() + program.level.slice(1)}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold">{program.rating}</span>
                    </div>
                  </div>
                  {program.popular && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                </div>

                <CardContent className="p-6 flex-grow flex flex-col pt-8">
                  <h3 className="text-2xl font-black text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{program.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <Clock className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                      <div className="text-sm font-bold text-gray-800">{program.duration}</div>
                    </div>
                    <div>
                      <Users className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                      <div className="text-sm font-bold text-gray-800">{program.students}</div>
                    </div>
                    <div>
                      <Trophy className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                      <div className="text-sm font-bold text-gray-800">Expert Level</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-auto">
                    <Button
                      className={`w-full bg-gradient-to-r ${program.gradient} hover:opacity-90 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Programs Work */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Why Our Programs{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kamlesh Choudhary's proven methodology ensures every student achieves their chess goals
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Small Batch Sizes", description: "Maximum 6 students per batch ensures personalized attention and faster learning", gradient: "from-purple-500 to-blue-500" },
              { icon: Trophy, title: "Proven Results", description: "98% of students improve their rating within 3 months with measurable progress", gradient: "from-blue-500 to-cyan-500" },
              { icon: Award, title: "Expert Instruction", description: "Learn directly from experienced masters with 20+ years of teaching excellence", gradient: "from-cyan-500 to-green-500" },
              { icon: BookOpen, title: "Structured Curriculum", description: "Progressive learning path designed for optimal skill development and retention", gradient: "from-green-500 to-yellow-500" },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 text-center p-6 sm:p-8"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chess-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Chess Journey?
            </span>
          </h2>
          <p className="text-lg sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect program for your skill level and start learning with Kamlesh Choudhary's proven
            methodology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href = "/book-demo">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              Book Your FREE Demo Class
            </Button>
            </Link>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-transparent transition-all duration-300"
            >
              Compare All Programs
            </Button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}