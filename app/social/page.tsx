"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, ExternalLink, Heart, MessageCircle, Share } from "lucide-react"

const socialPosts = [
  {
    id: 1,
    platform: "instagram",
    image: "/colorful-fashion-post-1.png",
    caption: "New arrivals that define elegance ✨ #VeerFashion #NewCollection",
    likes: 245,
    comments: 18,
    date: "2 days ago",
  },
  {
    id: 2,
    platform: "facebook",
    image: "/vibrant-mens-fashion-post.png",
    caption: "Discover our premium men's collection - where sophistication meets style",
    likes: 189,
    comments: 12,
    date: "3 days ago",
  },
  {
    id: 3,
    platform: "instagram",
    image: "/colorful-womens-fashion-post.png",
    caption: "Vibrant colors for the modern woman 🌈 Shop now at Veer Fashion",
    likes: 312,
    comments: 24,
    date: "5 days ago",
  },
  {
    id: 4,
    platform: "facebook",
    image: "/kids-fashion-colorful-post.png",
    caption: "Adorable kids collection - comfort meets style for your little ones",
    likes: 156,
    comments: 8,
    date: "1 week ago",
  },
  {
    id: 5,
    platform: "instagram",
    image: "/luxury-accessories-post.png",
    caption: "Complete your look with our premium accessories collection 💎",
    likes: 278,
    comments: 15,
    date: "1 week ago",
  },
  {
    id: 6,
    platform: "facebook",
    image: "/fashion-lifestyle-post.png",
    caption: "Fashion is not just clothing, it's a lifestyle. Experience Veer Fashion",
    likes: 203,
    comments: 19,
    date: "2 weeks ago",
  },
]

export default function SocialMediaPage() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">Follow Our Journey</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay connected with Veer Fashion and discover the latest trends, behind-the-scenes moments, and style
            inspiration from our social media community.
          </p>

          {/* Social Media Buttons */}
          <div className="flex justify-center gap-6 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow on Instagram
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Like on Facebook
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-black text-center mb-12">Latest Posts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                {/* Post Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={`/placeholder_image.png?height=300&width=400&text=${encodeURIComponent("Fashion Post " + post.id)}`}
                    alt={`Social media post ${post.id}`}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />

                  {/* Platform Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${
                        post.platform === "instagram" ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-blue-600"
                      }`}
                    >
                      {post.platform === "instagram" ? (
                        <Instagram className="w-4 h-4 mr-1" />
                      ) : (
                        <Facebook className="w-4 h-4 mr-1" />
                      )}
                      {post.platform === "instagram" ? "Instagram" : "Facebook"}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredPost === post.id && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-100 rounded-full px-6">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Post
                      </Button>
                    </div>
                  )}
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <p className="text-gray-800 mb-4 line-clamp-3">{post.caption}</p>

                  {/* Post Stats */}
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </span>
                    </div>
                    <span>{post.date}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-200 hover:bg-gray-50 bg-transparent"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Like
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-200 hover:bg-gray-50 bg-transparent"
                    >
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-black mb-6">Join Our Fashion Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't miss out on the latest fashion trends, exclusive offers, and style inspiration. Follow us on social
            media and be part of the Veer Men Studio family.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @veermenstudio
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Veer Men Studio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
