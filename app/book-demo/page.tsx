"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  Users,
  Trophy,
  CheckCircle,
  Star,
  Target,
  Heart,
  BookOpen,
  Video,
  MessageCircle,
} from "lucide-react"

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    program: "",
    preferredTime: "",
    preferredDay: "",
    sessionType: "online",
    goals: "",
    questions: "",
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)
  const totalSteps = 3

  const validateStep = (step: number): boolean => {
    if (step === 1) {
      return !!(
        formData.studentName &&
        formData.parentName &&
        formData.email &&
        formData.phone &&
        formData.age &&
        formData.experience
      )
    } else if (step === 2) {
      return !!(formData.program && formData.preferredDay && formData.preferredTime && formData.sessionType)
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      if (!validateStep(currentStep)) {
        setSubmitStatus("error")
        setError("Please fill out all required fields before proceeding.")
        setIsSubmitting(false)
        return
      }

      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1)
      } else {
        const formDataToSubmit = {
          studentName: formData.studentName,
          parentName: formData.parentName,
          email: formData.email,
          phone: formData.phone,
          age: formData.age,
          experience: formData.experience,
          program: programs.find((p) => p.id === formData.program)?.name || "",
          preferredTime: formData.preferredTime,
          preferredDay: formData.preferredDay,
          sessionType: formData.sessionType,
          goals: formData.goals,
          questions: formData.questions,
          timestamp: new Date().toISOString(),
        }

        await fetch("https://script.google.com/macros/s/AKfycbwPBxWXpnQ4ywqrdfmKvfFi7g5Uu6hjmaTFVDE5EiMI0YEyqjRNTCxionf65Q5Zqlg/exec", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSubmit),
        })

        // Since mode is 'no-cors', we can't read the response status reliably
        setSubmitStatus("success")
        console.log("Form submitted:", formDataToSubmit)
        setFormData({
          studentName: "",
          parentName: "",
          email: "",
          phone: "",
          age: "",
          experience: "",
          program: "",
          preferredTime: "",
          preferredDay: "",
          sessionType: "online",
          goals: "",
          questions: "",
        })
        setCurrentStep(1)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const programs = [
    { id: "chess-foundations", name: "Chess Foundations", level: "Beginner", age: "Ages 6-12" },
    { id: "strategic-mastery", name: "Strategic Mastery", level: "Intermediate", age: "Ages 10+" },
    { id: "grandmaster-path", name: "Grandmaster Path", level: "Advanced", age: "Serious Players" },
    { id: "tournament-warrior", name: "Tournament Warrior", level: "Intermediate", age: "Ages 12+" },
    { id: "private-coaching", name: "Private Coaching", level: "All Levels", age: "1-on-1" },
    { id: "family-program", name: "Family Chess Program", level: "Beginner", age: "Families" },
  ]

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
  ]

  const benefits = [
    {
      icon: Trophy,
      title: "Meet Kamesh Choudhary",
      description: "Personal introduction from our founder and master instructor",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Target,
      title: "Skill Assessment",
      description: "Comprehensive evaluation of current chess knowledge and potential",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      title: "Customized Learning Plan",
      description: "Personalized roadmap designed specifically for your chess journey",
      gradient: "from-cyan-500 to-green-500",
    },
    {
      icon: Heart,
      title: "Interactive Experience",
      description: "Hands-on chess puzzles and mini-lessons to experience our methodology",
      gradient: "from-green-500 to-yellow-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-black mb-6">
            Book Your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              FREE Demo Class
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Experience Kamesh Choudhary's revolutionary teaching methodology firsthand. Get personalized guidance, skill
            assessment, and a customized learning plan - absolutely free!
          </p>

          {/* Demo Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Star className="w-8 h-8 fill-white" />
              <span className="text-2xl font-black">100% FREE • No Commitment • Instant Value</span>
            </div>
            <p className="text-xl">
              Worth ₹2,000 - Get personalized chess assessment, meet our founder, and receive a custom learning plan
              tailored just for you!
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-4xl font-black text-gray-800 mb-4">
                  Book Your Demo in{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    3 Easy Steps
                  </span>
                </h2>

                {/* Progress Bar */}
                <div className="flex items-center space-x-4 mb-8">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          currentStep >= step
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                      </div>
                      {step < 3 && (
                        <div
                          className={`w-16 h-1 mx-2 ${
                            currentStep > step ? "bg-gradient-to-r from-purple-600 to-blue-600" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-purple-50/30">
                <CardContent className="p-10">
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl">
                      {error}
                    </div>
                  )}
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 text-green-600 rounded-xl">
                      Form submitted successfully!
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl">
                      Failed to submit. Please try again.
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Basic Information */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Step 1: Basic Information</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="studentName" className="block text-sm font-bold text-gray-800 mb-3">
                              Student Name *
                            </label>
                            <Input
                              id="studentName"
                              name="studentName"
                              type="text"
                              required
                              value={formData.studentName}
                              onChange={handleChange}
                              className="border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg"
                              placeholder="Enter student's name"
                            />
                          </div>
                          <div>
                            <label htmlFor="parentName" className="block text-sm font-bold text-gray-800 mb-3">
                              Parent/Guardian Name *
                            </label>
                            <Input
                              id="parentName"
                              name="parentName"
                              type="text"
                              required
                              value={formData.parentName}
                              onChange={handleChange}
                              className="border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg"
                              placeholder="Enter parent's name"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3">
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg"
                              placeholder="Enter email address"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-3">
                              Phone Number *
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg"
                              placeholder="Enter phone number"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="age" className="block text-sm font-bold text-gray-800 mb-3">
                              Student Age *
                            </label>
                            <Input
                              id="age"
                              name="age"
                              type="number"
                              required
                              value={formData.age}
                              onChange={handleChange}
                              className="border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg"
                              placeholder="Enter age"
                            />
                          </div>
                          <div>
                            <label htmlFor="experience" className="block text-sm font-bold text-gray-800 mb-3">
                              Chess Experience *
                            </label>
                            <select
                              id="experience"
                              name="experience"
                              required
                              value={formData.experience}
                              onChange={handleChange}
                              className="w-full border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg bg-white"
                            >
                              <option value="">Select experience level</option>
                              <option value="complete-beginner">Complete Beginner</option>
                              <option value="some-knowledge">Some Knowledge</option>
                              <option value="intermediate">Intermediate Player</option>
                              <option value="advanced">Advanced Player</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Program & Schedule */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                          Step 2: Program & Schedule Preferences
                        </h3>

                        <div>
                          <label className="block text-sm font-bold text-gray-800 mb-4">Interested Program *</label>
                          <div className="grid md:grid-cols-2 gap-4">
                            {programs.map((program) => (
                              <div
                                key={program.id}
                                className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                                  formData.program === program.id
                                    ? "border-purple-600 bg-purple-50"
                                    : "border-gray-200 hover:border-purple-300"
                                }`}
                                onClick={() => setFormData({ ...formData, program: program.id })}
                              >
                                <div className="flex items-center space-x-3">
                                  <input
                                    type="radio"
                                    name="program"
                                    value={program.id}
                                    checked={formData.program === program.id}
                                    onChange={handleChange}
                                    className="text-purple-600"
                                  />
                                  <div>
                                    <h4 className="font-bold text-gray-800">{program.name}</h4>
                                    <div className="flex space-x-2 mt-1">
                                      <Badge className="bg-purple-100 text-purple-800 text-xs">{program.level}</Badge>
                                      <Badge className="bg-gray-100 text-gray-800 text-xs">{program.age}</Badge>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="preferredDay" className="block text-sm font-bold text-gray-800 mb-3">
                              Preferred Day *
                            </label>
                            <select
                              id="preferredDay"
                              name="preferredDay"
                              required
                              value={formData.preferredDay}
                              onChange={handleChange}
                              className="w-full border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg bg-white"
                            >
                              <option value="">Select preferred day</option>
                              <option value="monday">Monday</option>
                              <option value="tuesday">Tuesday</option>
                              <option value="wednesday">Wednesday</option>
                              <option value="thursday">Thursday</option>
                              <option value="friday">Friday</option>
                              <option value="saturday">Saturday</option>
                              <option value="sunday">Sunday</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="preferredTime" className="block text-sm font-bold text-gray-800 mb-3">
                              Preferred Time *
                            </label>
                            <select
                              id="preferredTime"
                              name="preferredTime"
                              required
                              value={formData.preferredTime}
                              onChange={handleChange}
                              className="w-full border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg bg-white"
                            >
                              <option value="">Select preferred time</option>
                              {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                  {slot}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-800 mb-4">Session Type *</label>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div
                              className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                                formData.sessionType === "online"
                                  ? "border-purple-600 bg-purple-50"
                                  : "border-gray-200 hover:border-purple-300"
                              }`}
                              onClick={() => setFormData({ ...formData, sessionType: "online" })}
                            >
                              <div className="flex items-center space-x-3">
                                <input
                                  type="radio"
                                  name="sessionType"
                                  value="online"
                                  checked={formData.sessionType === "online"}
                                  onChange={handleChange}
                                  className="text-purple-600"
                                />
                                <Video className="w-6 h-6 text-purple-600" />
                                <div>
                                  <h4 className="font-bold text-gray-800">Online Demo</h4>
                                  <p className="text-sm text-gray-600">Join from anywhere via video call</p>
                                </div>
                              </div>
                            </div>
                            <div
                              className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                                formData.sessionType === "offline"
                                  ? "border-purple-600 bg-purple-50"
                                  : "border-gray-200 hover:border-purple-300"
                              }`}
                              onClick={() => setFormData({ ...formData, sessionType: "offline" })}
                            >
                              <div className="flex items-center space-x-3">
                                <input
                                  type="radio"
                                  name="sessionType"
                                  value="offline"
                                  checked={formData.sessionType === "offline"}
                                  onChange={handleChange}
                                  className="text-purple-600"
                                />
                                <Users className="w-6 h-6 text-purple-600" />
                                <div>
                                  <h4 className="font-bold text-gray-800">In-Person Demo</h4>
                                  <p className="text-sm text-gray-600">Visit our academy in New York</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Goals & Questions */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Step 3: Goals & Questions</h3>

                        <div>
                          <label htmlFor="goals" className="block text-sm font-bold text-gray-800 mb-3">
                            Chess Goals & Expectations
                          </label>
                          <Textarea
                            id="goals"
                            name="goals"
                            rows={4}
                            value={formData.goals}
                            onChange={handleChange}
                            className="border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg"
                            placeholder="What do you hope to achieve through chess? (e.g., tournament play, skill improvement, fun learning, etc.)"
                          />
                        </div>

                        <div>
                          <label htmlFor="questions" className="block text-sm font-bold text-gray-800 mb-3">
                            Questions for Kamesh Choudhary
                          </label>
                          <Textarea
                            id="questions"
                            name="questions"
                            rows={4}
                            value={formData.questions}
                            onChange={handleChange}
                            className="border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg"
                            placeholder="Any specific questions about our programs, teaching methodology, or chess learning in general?"
                          />
                        </div>

                        {/* Summary */}
                        <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
                          <CardContent className="p-6">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">Demo Session Summary</h4>
                            <div className="space-y-2 text-sm">
                              <p>
                                <strong>Student:</strong> {formData.studentName || "Not provided"}
                              </p>
                              <p>
                                <strong>Program:</strong>{" "}
                                {programs.find((p) => p.id === formData.program)?.name || "Not selected"}
                              </p>
                              <p>
                                <strong>Schedule:</strong>{" "}
                                {formData.preferredDay && formData.preferredTime
                                  ? `${formData.preferredDay} at ${formData.preferredTime}`
                                  : "Not selected"}
                              </p>
                              <p>
                                <strong>Type:</strong>{" "}
                                {formData.sessionType === "online" ? "Online Demo" : "In-Person Demo"}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      {currentStep > 1 && (
                        <Button
                          type="button"
                          onClick={() => setCurrentStep(currentStep - 1)}
                          variant="outline"
                          className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold px-8 py-3 rounded-xl"
                          disabled={isSubmitting}
                        >
                          Previous Step
                        </Button>
                      )}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                          currentStep === 1 ? "ml-auto" : ""
                        }`}
                      >
                        {isSubmitting ? "Submitting..." : currentStep === totalSteps ? (
                          <>
                            <Calendar className="w-5 h-5 mr-2" />
                            Book My FREE Demo
                          </>
                        ) : (
                          "Next Step"
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* What to Expect */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-purple-50/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">What to Expect</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Users, text: "Personal meeting with Kamesh Choudhary" },
                      { icon: Target, text: "Comprehensive skill assessment" },
                      { icon: BookOpen, text: "Sample lesson with our methodology" },
                      { icon: Trophy, text: "Customized learning roadmap" },
                      { icon: Clock, text: "60-minute interactive session" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-50 to-red-50">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "The demo class was incredible! Kamesh sir immediately identified my daughter's strengths and gave
                    us a clear path forward. She's been excited about chess ever since!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src="/placeholder.svg?height=40&width=40&text=PS"
                      alt="Parent"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-gray-800">Priya Sharma</p>
                      <p className="text-sm text-gray-600">Parent of Arjun (Age 10)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">WhatsApp: (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Available 9 AM - 8 PM</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-xl">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Join Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what students achieve after their demo class with Kamesh Choudhary
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Emma Johnson",
                age: 12,
                achievement: "School Champion in 6 months",
                image: "/placeholder.svg?height=200&width=200&text=Emma",
                quote: "The demo class changed everything for me!",
              },
              {
                name: "Alex Chen",
                age: 10,
                achievement: "State Qualifier in 8 months",
                image: "/placeholder.svg?height=200&width=200&text=Alex",
                quote: "Kamesh sir made chess so exciting!",
              },
              {
                name: "Sofia Rodriguez",
                age: 14,
                achievement: "National Competitor in 1 year",
                image: "/placeholder.svg?height=200&width=200&text=Sofia",
                quote: "Best decision we ever made!",
              },
            ].map((story, index) => (
              <Card
                key={index}
                className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0"
              >
                <CardContent className="p-8 text-center">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-purple-200"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-4">{story.achievement}</p>
                  <p className="text-gray-700 italic">"{story.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chess-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Don't Wait -{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Book Today!
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Limited demo slots available each week. Secure your spot and start your chess transformation journey with
            Kamesh Choudhary's proven methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => setCurrentStep(1)}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-6 h-6 mr-2" />
              Book FREE Demo Now
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-2xl px-12 py-6 rounded-full bg-transparent transition-all duration-300"
            >
              Call: (555) 123-CHESS
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}