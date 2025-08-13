"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Men",
    href: "/categories/men",
    image: "/mens-collection.jpg",
    gradient: "from-blue-600/80 to-purple-600/80",
  },
  {
    name: "Women",
    href: "/categories/women",
    image: "/women-collections.jpg",
    gradient: "from-pink-500/80 to-rose-600/80",
  },
  // {
  //   name: "Kids",
  //   href: "/categories/kids",
  //   image: "/colorful-kids-fashion.png",
  //   gradient: "from-green-500/80 to-teal-600/80",
  // },
]

export default function CategoryCards() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Collections</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of premium fashion for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-items-center">
          {categories.map((category, index) => (
            <Link key={category.name} href={category.href} className="group">
              <Card
                className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 group-hover:opacity-40 transition-all duration-500`}
                    ></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <h3 className="font-serif text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                        {category.name}
                      </h3>
                      <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Explore Collection
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
