"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image";

const accessories = [
  {
    name: "Luxury Watches",
    price: "₹2,000 - ₹10,000",
    image: "/luxury-colorful-watches.png",
    description: "Premium timepieces for every occasion",
  },
  {
    name: "Designer Perfumes",
    price: "₹2,500 - ₹8,000",
    image: "/fragrances-collections.jpg",
    description: "Captivating fragrances that define you",
  },
  {
    name: "Sunglasses",
    price: "₹1,500 - ₹8,000",
    image: "/trendy-colorful-sunglasses.jpg",
    description: "Trendy eyewear for the fashion-forward",
  },
]

export default function AccessoriesLifestyle() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleItems((prev) => {
              const newVisible = [...prev]
              newVisible[index] = entry.isIntersecting
              return newVisible
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Accessories & Lifestyle
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete your look with our curated collection of premium accessories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((item, index) => (
            <div
              key={item.name}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 ${
                visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                {/* <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  loading="lazy" // <-- Lazy loading added
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  priority={false}
                  quality={50}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-black transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">{item.price}</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Visit Store to Purchase
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
