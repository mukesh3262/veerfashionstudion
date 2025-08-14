"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/contexts/wishlist-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { wishlistCount } = useWishlist()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="font-serif text-2xl font-bold text-black tracking-wide">VMS</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors font-medium pb-1 border-b-2 ${
                isActive("/")
                  ? "text-black border-black"
                  : "text-gray-600 hover:text-black border-transparent hover:border-gray-300"
              }`}
            >
              Home
            </Link>
            <Link
              href="/collections"
              className={`transition-colors font-medium pb-1 border-b-2 ${
                isActive("/collections")
                  ? "text-black border-black"
                  : "text-gray-600 hover:text-black border-transparent hover:border-gray-300"
              }`}
            >
              Collections
            </Link>
            <Link
              href="/watches"
              className={`transition-colors font-medium pb-1 border-b-2 ${
                isActive("/watches")
                  ? "text-black border-black"
                  : "text-gray-600 hover:text-black border-transparent hover:border-gray-300"
              }`}
            >
              Watches
            </Link>
            <Link
              href="/fragrances"
              className={`transition-colors font-medium pb-1 border-b-2 ${
                isActive("/fragrances")
                  ? "text-black border-black"
                  : "text-gray-600 hover:text-black border-transparent hover:border-gray-300"
              }`}
            >
              Fragrances
            </Link>
            {/* <Link
              href="/social"
              className={`transition-colors font-medium pb-1 border-b-2 ${
                isActive("/social")
                  ? "text-black border-black"
                  : "text-gray-600 hover:text-black border-transparent hover:border-gray-300"
              }`}
            >
              Social
            </Link> */}
            <Link
              href="/about"
              className={`transition-colors font-medium pb-1 border-b-2 ${
                isActive("/about")
                  ? "text-black border-black"
                  : "text-gray-600 hover:text-black border-transparent hover:border-gray-300"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`transition-colors font-medium pb-1 border-b-2 ${
                isActive("/contact")
                  ? "text-black border-black"
                  : "text-gray-600 hover:text-black border-transparent hover:border-gray-300"
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/wishlist"
              className={`relative transition-colors font-medium pb-1 border-b-2 ${
                isActive("/wishlist")
                  ? "text-black border-black"
                  : "text-gray-600 hover:text-black border-transparent hover:border-gray-300"
              }`}
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`transition-colors ${
                  isActive("/") ? "text-black font-bold" : "text-gray-600 hover:text-black font-medium"
                }`}
              >
                Home
              </Link>
              <Link
                href="/collections"
                className={`transition-colors ${
                  isActive("/collections") ? "text-black font-bold" : "text-gray-600 hover:text-black font-medium"
                }`}
              >
                Collections
              </Link>
              <Link
                href="/watches"
                className={`transition-colors ${
                  isActive("/watches") ? "text-black font-bold" : "text-gray-600 hover:text-black font-medium"
                }`}
              >
                Watches
              </Link>
              <Link
                href="/fragrances"
                className={`transition-colors ${
                  isActive("/fragrances") ? "text-black font-bold" : "text-gray-600 hover:text-black font-medium"
                }`}
              >
                Fragrances
              </Link>
              {/* <Link
                href="/social"
                className={`transition-colors ${
                  isActive("/social") ? "text-black font-bold" : "text-gray-600 hover:text-black font-medium"
                }`}
              >
                Social
              </Link> */}
              <Link
                href="/about"
                className={`transition-colors ${
                  isActive("/about") ? "text-black font-bold" : "text-gray-600 hover:text-black font-medium"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`transition-colors ${
                  isActive("/contact") ? "text-black font-bold" : "text-gray-600 hover:text-black font-medium"
                }`}
              >
                Contact Us
              </Link>
              <Link
                href="/wishlist"
                className={`flex items-center gap-2 transition-colors ${
                  isActive("/wishlist") ? "text-black font-bold" : "text-gray-600 hover:text-black font-medium"
                }`}
              >
                <Heart className="h-4 w-4" />
                Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
