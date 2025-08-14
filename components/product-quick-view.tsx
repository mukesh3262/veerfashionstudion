"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/contexts/wishlist-context"

interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
  images?: string[]
}

interface ProductQuickViewProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductQuickView({ product, isOpen, onClose }: ProductQuickViewProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  if (!isOpen || !product) return null

  const isWishlisted = isInWishlist(product.id)

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  // Generate multiple images for each product (main image + variations)
  const productImages = product.images || [
    product.image,
    product.image.replace(".png", "-front.png"),
    product.image.replace(".png", "-back.png"),
    product.image.replace(".png", "-detail.png"),
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-serif font-semibold">Quick View</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-gray-100">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={productImages[currentImageIndex] || "/placeholder.svg"}
                alt={`${product.name} - View ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              <button
                onClick={handleWishlistToggle}
                className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                  isWishlisted
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
                }`}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
              </button>

              {/* Navigation Arrows */}
              {productImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {currentImageIndex + 1} / {productImages.length}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                    currentImageIndex === index ? "border-black" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-serif font-bold text-black mb-2">{product.name}</h1>
              <p className="text-3xl font-bold text-black mb-4">{product.price}</p>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Product Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-black">Features:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Premium quality materials</li>
                <li>• Perfect fit and comfort</li>
                <li>• Available in multiple sizes</li>
                <li>• Easy care instructions</li>
              </ul>
            </div>

            {/* Size Guide */}
            <div className="space-y-3">
              <h3 className="font-semibold text-black">Available Sizes:</h3>
              <div className="flex gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="px-3 py-2 border border-gray-300 rounded hover:border-black transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button className="w-full bg-black text-white hover:bg-gray-800">Visit Store to Purchase</Button>
              <Button
                onClick={handleWishlistToggle}
                variant="outline"
                className={`w-full border-black transition-all duration-200 ${
                  isWishlisted
                    ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
                    : "text-black hover:bg-black hover:text-white bg-transparent"
                }`}
              >
                <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? "fill-current" : ""}`} />
                {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
