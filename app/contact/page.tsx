"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Award, Users, Trophy } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    program: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Replace with your Google Apps Script Web App URL
      const scriptUrl = "https://script.google.com/macros/s/AKfycbymi8K9-aKZMJbBxNAnRvGRW8Jc2OlXVu72-8FlFtGV2nuINxXHPSwsfZPrCgCLIW7y/exec"
      
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      })

      // Since mode is 'no-cors', we can't read the response status reliably
      setSubmitStatus("success")
      console.log("Form submitted:", formData)
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        experience: "",
        program: "",
        message: "",
      })
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-black mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Ready to start your chess journey with Kamesh Choudhary's proven methodology? Get in touch with us today and
            let's discuss how we can help you achieve your goals
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  20+
                </div>
                <div className="text-gray-600 font-semibold">Years of Excellence</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                  5000+
                </div>
                <div className="text-gray-600 font-semibold">Happy Students</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <div className="text-3xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-semibold">Champions Created</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-black text-gray-800 mb-8">
                Send us a{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-purple-50/30">
                <CardContent className="p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-3">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg"
                          placeholder="Enter your full name"
                        />
                      </div>
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
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="age" className="block text-sm font-bold text-gray-800 mb-3">
                          Age (Student)
                        </label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          value={formData.age}
                          onChange={handleChange}
                          className="border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg"
                          placeholder="Student's age"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="experience" className="block text-sm font-bold text-gray-800 mb-3">
                          Chess Experience
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg bg-white"
                        >
                          <option value="">Select experience level</option>
                          <option value="complete-beginner">Complete Beginner</option>
                          <option value="some-knowledge">Some Knowledge</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="program" className="block text-sm font-bold text-gray-800 mb-3">
                          Interested Program
                        </label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg bg-white"
                        >
                          <option value="">Select a program</option>
                          <option value="chess-foundations">Chess Foundations</option>
                          <option value="strategic-mastery">Strategic Mastery</option>
                          <option value="grandmaster-path">Grandmaster Path</option>
                          <option value="tournament-warrior">Tournament Warrior</option>
                          <option value="private-coaching">Private Coaching</option>
                          <option value="family-program">Family Chess Program</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="border-2 border-gray-200 focus:border-purple-600 focus:ring-purple-600 rounded-xl py-3 px-4 text-lg"
                        placeholder="Tell us about your chess goals, preferred schedule, and any specific questions you have..."
                      />
                    </div>

                    {submitStatus === "success" && (
                      <p className="text-green-600 font-semibold">Form submitted successfully!</p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-600 font-semibold">Error submitting form. Please try again.</p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Submitting..." : "Send Message & Book Demo"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-gray-800 mb-8">
                  Get in{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're here to answer your questions and help you start your chess journey with Kamesh Choudhary's
                  proven methodology. Reach out to us through any of the methods below, and we'll get back to you within
                  24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-gray-800 mb-3">Visit Our Academy</h3>
                        <p className="text-gray-600 leading-relaxed">
                          123 Chess Master Lane
                          <br />
                          New York, NY 10001
                          <br />
                          United States
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          Easily accessible by public transport • Free parking available
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-gray-800 mb-3">Call Us</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Main: (555) 123-CHESS
                          <br />
                          WhatsApp: (555) 123-4567
                          <br />
                          Emergency: (555) 123-9999
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Available 9 AM - 8 PM EST • 7 days a week</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-gray-800 mb-3">Email Us</h3>
                        <p className="text-gray-600 leading-relaxed">
                          General: info@geniuschess.com
                          <br />
                          Admissions: admissions@geniuschess.com
                          <br />
                          Kamesh: kamesh@geniuschess.com
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Response within 24 hours guaranteed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-gray-800 mb-3">WhatsApp Chat</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          Get instant answers to your questions via WhatsApp. Perfect for quick inquiries, scheduling,
                          and urgent support.
                        </p>
                        <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Chat on WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Office Hours */}
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-gray-800 mb-6">Office Hours</h3>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Monday - Friday:</span>
                          <span className="font-black text-purple-600">9:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Saturday:</span>
                          <span className="font-black text-purple-600">10:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Sunday:</span>
                          <span className="font-black text-purple-600">12:00 PM - 5:00 PM</span>
                        </div>
                        <div className="pt-3 border-t border-purple-200">
                          <p className="text-sm text-gray-600">
                            <strong>Emergency Support:</strong> Available 24/7 for enrolled students
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Find{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of New York, easily accessible by public transport with ample parking
            </p>
          </div>
          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-20 h-20 text-purple-600 mx-auto mb-6" />
                <p className="text-2xl font-black text-gray-800 mb-2">Interactive Map</p>
                <p className="text-gray-600 text-lg">123 Chess Master Lane, New York, NY 10001</p>
                <Button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-3 rounded-xl">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chess-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Begin Your{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Chess Journey?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't wait! Contact us today and take the first step towards chess mastery with Kamesh Choudhary's proven
            methodology
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              Book FREE Demo Class
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-2xl px-12 py-6 rounded-full bg-transparent transition-all duration-300"
            >
              Call Now: (555) 123-CHESS
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}