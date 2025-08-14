"use client"

import { useWishlist } from "@/contexts/wishlist-context"
import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist()

  if (wishlistItems.length === 0) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="min-h-screen bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center space-y-6">
              <Heart className="h-16 w-16 text-gray-300 mx-auto" />
              <h1 className="text-3xl font-serif font-bold text-black">Your Wishlist is Empty</h1>
              <p className="text-gray-600 max-w-md mx-auto ">
                Start adding products to your wishlist to keep track of items you love.
              </p>
              <div className="mt-12">
                <Link href="/collections">
                  <Button className="bg-black text-white hover:bg-gray-800">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-black mb-4">My Wishlist</h1>
            <p className="text-gray-600">
              {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} saved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Heart className="h-4 w-4 fill-current" />
                  </button>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="font-serif font-semibold text-black group-hover:text-gray-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-black">{product.price}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">Visit Store to Purchase</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
