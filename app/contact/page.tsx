"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="relative h-64 bg-gradient-to-r from-black to-gray-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">We'd love to hear from you. Visit us or get in touch.</p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-black mb-4">Get In Touch</h2>
                <div className="w-16 h-1 bg-black"></div>
              </div>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-black/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-black mb-2">Store Location</h3>
                      <p className="text-gray-600 leading-relaxed">
                        123 Fashion Street
                        <br />
                        Downtown District
                        <br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-black/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-black mb-2">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-black/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-black mb-2">Email</h3>
                      <p className="text-gray-600">info@veerfashion.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-black/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-black mb-2">Opening Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Saturday: 10:00 AM - 9:00 PM</p>
                        <p>Sunday: 12:00 PM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-black mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-600 p-3 rounded-full text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-400 p-3 rounded-full text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="border-0 shadow-xl overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <div className="h-80 bg-gray-100 relative overflow-hidden">
                    <img
                      src="/elegant-bw-fashion-store.png"
                      alt="Veer Fashion Store Interior"
                      className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-black mb-3">Visit Our Store</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Experience our premium fashion collections in person. Our knowledgeable staff is ready to help you
                      find the perfect pieces for your wardrobe.
                    </p>
                    <button
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/?q=123+Fashion+Street,+Downtown+District,+City,+State+12345",
                          "_blank",
                        )
                      }
                      className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
