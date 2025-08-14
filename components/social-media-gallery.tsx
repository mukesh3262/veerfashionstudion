"use client"

import { useState } from "react"
import {  Heart, MessageCircle, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Instagram } from "@/components/ui/custom-icons/instagram";
import { Facebook } from "@/components/ui/custom-icons/facebook";

const socialAccounts = [
  {
    id: 1,
    platform: "Instagram",
    handle: "@VeerFashion",
    description: "Daily fashion inspiration & new arrivals",
    url: "https://instagram.com/veerfashion",
    icon: Instagram,
    gradient: "from-purple-600 to-pink-600",
    hoverGradient: "hover:from-purple-700 hover:to-pink-700",
  },
  {
    id: 2,
    platform: "Facebook",
    handle: "Veer Fashion Store",
    description: "Latest collections & fashion tips",
    url: "https://facebook.com/veerfashion",
    icon: Facebook,
    gradient: "from-blue-600 to-blue-700",
    hoverGradient: "hover:from-blue-700 hover:to-blue-800",
  },
]

export default function SocialMediaGallery() {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">Connect With Us</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Join our fashion community and stay updated with the latest trends, exclusive offers, and behind-the-scenes
            content.
          </p>
        </div>

        {/* Social Media Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {socialAccounts.map((account) => {
            const IconComponent = account.icon
            return (
              <div
                key={account.id}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${account.gradient} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-black">{account.platform}</h3>
                    <p className="text-gray-600">{account.handle}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 text-lg">{account.description}</p>
                </div>

                <Button
                  onClick={() => handleSocialClick(account.url)}
                  className={`w-full bg-gradient-to-r ${account.gradient} ${account.hoverGradient} text-white py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group`}
                >
                  <IconComponent className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Follow on {account.platform}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
