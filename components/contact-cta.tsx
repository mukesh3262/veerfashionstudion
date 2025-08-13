"use client"

import type React from "react"
import { useState } from "react"

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Background with Map Image */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img
            src="/fashion-store-location.png"
            alt="Store Location Map"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        {/* Black and white overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
        <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-white to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-black">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-black">Visit Our Store</h2>
            <div className="w-20 h-1 bg-black mb-8"></div>
            <p className="text-xl mb-8 leading-relaxed text-gray-700">
              Experience Veer Fashion Studio in person. Our flagship store offers a curated shopping experience where style
              meets sophistication.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="bg-black/10 p-2 rounded-full group-hover:bg-black/20 transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-6 h-6 flex-shrink-0 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">Store Address</h3>
                  <p className="text-gray-600">
                    123 Fashion Avenue
                    <br />
                    Downtown District
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-black/10 p-2 rounded-full group-hover:bg-black/20 transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-6 h-6 flex-shrink-0 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">Opening Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 10:00 AM - 8:00 PM
                    <br />
                    Sunday: 12:00 PM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-black/10 p-2 rounded-full group-hover:bg-black/20 transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-6 h-6 flex-shrink-0 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">Contact</h3>
                  <p className="text-gray-600">
                    Phone: (555) 123-4567
                    <br />
                    Email: info@veerfashionstudio.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-300 shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-black mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
