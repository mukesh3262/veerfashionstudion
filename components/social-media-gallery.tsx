"use client"

import { useState } from "react"
import { Instagram, Facebook, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const socialPosts = [
  {
    id: 1,
    platform: "instagram",
    image: "/black-blazer-fashion.png",
    caption: "New arrival: Premium black blazer collection",
    likes: 245,
    url: "#",
  },
  {
    id: 2,
    platform: "facebook",
    image: "/white-silk-blouse-fashion.png",
    caption: "Elegant silk blouses for the modern woman",
    likes: 189,
    url: "#",
  },
  {
    id: 3,
    platform: "instagram",
    image: "/black-leather-handbag-fashion.png",
    caption: "Luxury leather accessories",
    likes: 312,
    url: "#",
  },
  {
    id: 4,
    platform: "facebook",
    image: "/elegant-bw-fashion-store.png",
    caption: "Visit our flagship store for exclusive collections",
    likes: 156,
    url: "#",
  },
  {
    id: 5,
    platform: "instagram",
    image: "/placeholder-r376k.png",
    caption: "Timeless watches for every occasion",
    likes: 278,
    url: "#",
  },
  {
    id: 6,
    platform: "facebook",
    image: "/kids-fashion-collection.png",
    caption: "Stylish kids collection now available",
    likes: 203,
    url: "#",
  },
]

export default function SocialMediaGallery() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-black mb-4">Follow Our Journey</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Stay connected with the latest fashion trends and behind-the-scenes moments from Veer Men Studio
          </p>

          {/* Social Media Buttons with Color Accents */}
          <div className="flex justify-center space-x-4">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              <Instagram className="w-5 h-5 mr-2" />
              Follow on Instagram
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              <Facebook className="w-5 h-5 mr-2" />
              Like on Facebook
            </Button>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPosts.map((post, index) => (
            <div
              key={post.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                index % 3 === 1 ? "md:mt-8" : ""
              } ${index % 2 === 1 ? "lg:mt-12" : ""}`}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Post Container */}
              <div className="relative overflow-hidden rounded-lg bg-white shadow-lg border-2 border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                      hoveredPost === post.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-3 left-3">
                    <div
                      className={`p-2 rounded-full ${
                        post.platform === "instagram" ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-blue-600"
                      }`}
                    >
                      {post.platform === "instagram" ? (
                        <Instagram className="w-4 h-4 text-white" />
                      ) : (
                        <Facebook className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-4 bg-white">
                  <p className="text-gray-800 text-sm mb-2 line-clamp-2">{post.caption}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{post.likes} likes</span>
                    <span className="text-gray-400 text-xs capitalize">{post.platform}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link href="/social">
            <Button
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-3 rounded-full bg-transparent"
            >
              View More Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
