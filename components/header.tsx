"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="font-serif text-2xl font-bold text-black tracking-wide">VFS</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-gray-600 transition-colors font-medium">
              Home
            </Link>

            {/* <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-black hover:text-gray-600 transition-colors font-medium">
                Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200">
                <DropdownMenuItem>
                  <Link href="/categories/men" className="w-full">
                    Men
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/categories/women" className="w-full">
                    Women
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/categories/kids" className="w-full">
                    Kids
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/categories/watches" className="w-full">
                    Watches
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <Link href="/categories/men" className="text-black hover:text-gray-600 transition-colors font-medium">
              Mens
            </Link>
            <Link href="/categories/women" className="text-black hover:text-gray-600 transition-colors font-medium">
              Womens
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/social" className="text-black hover:text-gray-600 transition-colors font-medium">
              Social
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors font-medium">
              Contact Us
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
              <Link href="/" className="text-black hover:text-gray-600 transition-colors font-medium">
                Home
              </Link>
              <div className="space-y-2">
                <p className="text-black font-medium">Categories</p>
                <div className="pl-4 space-y-2">
                  <Link href="/categories/men" className="block text-gray-600 hover:text-black transition-colors">
                    Men
                  </Link>
                  <Link href="/categories/women" className="block text-gray-600 hover:text-black transition-colors">
                    Women
                  </Link>
                  <Link href="/categories/kids" className="block text-gray-600 hover:text-black transition-colors">
                    Kids
                  </Link>
                  <Link href="/categories/watches" className="block text-gray-600 hover:text-black transition-colors">
                    Watches
                  </Link>
                </div>
              </div>
              <Link href="/about" className="text-black hover:text-gray-600 transition-colors font-medium">
                About Us
              </Link>
              <Link href="/social" className="text-black hover:text-gray-600 transition-colors font-medium">
                Social Media
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-600 transition-colors font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
