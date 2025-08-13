"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    image: "/luxury-mens-fashion.jpg",
    title: "Men's Luxury Line",
    subtitle: "Sophisticated & Modern",
    description: "Crafted for the discerning gentleman",
    position: "right",
  },
  {
    image: "/designer-womens-collection.jpg",
    title: "Designer Women's Collection",
    subtitle: "Elegance Redefined",
    description: "Where fashion meets artistry",
    position: "left",
  },
  {
    image: "/premium-fashion-collection.jpg",
    title: "Premium Fashion Collection",
    subtitle: "Elevate Your Wardrobe",
    description: "Discover timeless elegance and contemporary style",
    position: "left",
  },
 
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
            </div>

            {/* Content */}
            <div
              className={`relative z-10 h-full flex items-center ${slide.position === "left" ? "justify-start pl-12 md:pl-20" : "justify-end pr-12 md:pr-20"}`}
            >
              <div className={`text-white max-w-2xl ${slide.position === "left" ? "text-left" : "text-right"}`}>
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wide text-white drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-2 font-light tracking-wide text-white/90 drop-shadow-xl">
                    {slide.subtitle}
                  </p>
                  <p
                    className={`text-base md:text-lg lg:text-xl mb-8 font-light text-white/80 drop-shadow-lg max-w-lg ${
                      slide.position === "right" ? "ml-auto" : ""
                    }`}
                  >
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-black hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-medium tracking-wide shadow-2xl border-0"
                  >
                    Explore Collections
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125 shadow-lg" : "bg-white/70 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center shadow-lg">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
