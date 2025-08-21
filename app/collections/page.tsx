"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductQuickView from "@/components/product-quick-view"
import { Button } from "@/components/ui/button"
import { Eye, Filter, X, ChevronLeft } from "lucide-react"
import menProductsData from "@/data/collections.json"

interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: number
}

interface Category {
  id: number
  name: string
  count: number
}

export default function MenPage() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [sortBy, setSortBy] = useState("name")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const products = menProductsData.products as Product[]
    let filtered = products

    if (activeCategory !== 0) {
      filtered = filtered.filter((product) => product.category === activeCategory)
    }

    filtered = filtered.filter((product) => {
      const price = Number.parseInt(product.price.replace("$", ""))
      return price >= priceRange.min && price <= priceRange.max
    })

    setFilteredProducts(filtered)
  }, [activeCategory, priceRange])

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return Number.parseInt(a.price.replace("$", "")) - Number.parseInt(b.price.replace("$", ""))
    }
    if (sortBy === "price-high") {
      return Number.parseInt(b.price.replace("$", "")) - Number.parseInt(a.price.replace("$", ""))
    }
    return a.name.localeCompare(b.name)
  })

  const openQuickView = (product: Product) => {
    setSelectedProduct(product)
    setIsQuickViewOpen(true)
  }

  const closeQuickView = () => {
    setIsQuickViewOpen(false)
    setSelectedProduct(null)
  }

  const resetFilters = () => {
    setActiveCategory(0)
    setPriceRange({ min: 0, max: 1000 })
    setSortBy("name")
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">Men's Collection</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover sophisticated menswear that combines classic elegance with contemporary style
            </p>
          </div>

          <div className="lg:hidden mb-6">
            <Button
              onClick={() => setMobileFiltersOpen(true)}
              className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center py-3 text-base font-medium"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filter & Sort ({sortedProducts.length} products)
            </Button>
          </div>

          <div className="flex gap-8">
            <div
              className={`hidden lg:block ${sidebarOpen ? "w-80" : "w-16"} transition-all duration-300 flex-shrink-0`}
            >
              <div className="sticky top-24">
                <Button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="mb-4 w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center"
                  size="sm"
                >
                  {sidebarOpen ? (
                    <>
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Hide Filters
                    </>
                  ) : (
                    <>
                      <Filter className="h-4 w-4" />
                    </>
                  )}
                </Button>

                {sidebarOpen && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-semibold text-lg text-black">Filters</h2>
                      <Button
                        onClick={resetFilters}
                        variant="outline"
                        size="sm"
                        className="border-gray-300 text-gray-600 hover:bg-gray-100 bg-transparent"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Reset
                      </Button>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-medium text-black mb-4">Categories</h3>
                      <div className="space-y-2">
                        {(menProductsData.categories as Category[]).map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 flex items-center justify-between ${
                              activeCategory === category.id ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            <span className="text-sm">{category.name}</span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                activeCategory === category.id ? "bg-white text-black" : "bg-gray-200 text-gray-600"
                              }`}
                            >
                              {category.count}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-medium text-black mb-4">Price Range</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <label className="block text-xs text-gray-600 mb-1">Min Price</label>
                            <input
                              type="number"
                              value={priceRange.min}
                              onChange={(e) => setPriceRange((prev) => ({ ...prev, min: Number(e.target.value) }))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                              min="0"
                              placeholder="$0"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-xs text-gray-600 mb-1">Max Price</label>
                            <input
                              type="number"
                              value={priceRange.max}
                              onChange={(e) => setPriceRange((prev) => ({ ...prev, max: Number(e.target.value) }))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                              min="0"
                              placeholder="$1000"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 text-center">
                        {sortedProducts.length} of {menProductsData.products.length} products
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              {sortedProducts.length > 0 ? (
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 ${sidebarOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-6`}
                >
                  {sortedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                      onClick={() => openQuickView(product)}
                    >
                      <div className="aspect-[3/4] overflow-hidden relative">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <Button
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black hover:bg-gray-100"
                            size="sm"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Quick View
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-lg text-black">{product.price}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Visit Store
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg mb-4">No products found matching your filters.</p>
                  <Button onClick={resetFilters} className="bg-black text-white hover:bg-gray-800">
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-60" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-xl max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <h2 className="font-semibold text-xl text-black">Filters & Sort</h2>
                <Button
                  onClick={() => setMobileFiltersOpen(false)}
                  variant="outline"
                  size="sm"
                  className="border-gray-300 text-gray-600 hover:bg-gray-100 bg-transparent rounded-full p-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="mb-8">
                <h3 className="font-medium text-black mb-4 text-lg">Categories</h3>
                <div className="grid grid-cols-2 gap-3">
                  {(menProductsData.categories as Category[]).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                        activeCategory === category.id
                          ? "bg-black text-white"
                          : "text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      <span className="text-sm font-medium">{category.name}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          activeCategory === category.id ? "bg-white text-black" : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-medium text-black mb-4 text-lg">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-2 font-medium">Min Price</label>
                      <input
                        type="number"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange((prev) => ({ ...prev, min: Number(e.target.value) }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        min="0"
                        placeholder="$0"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-2 font-medium">Max Price</label>
                      <input
                        type="number"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange((prev) => ({ ...prev, max: Number(e.target.value) }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        min="0"
                        placeholder="$1000"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full font-medium">
                      ${priceRange.min} - ${priceRange.max}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-medium text-black mb-4 text-lg">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm font-medium"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-100 bg-transparent py-3 text-base font-medium"
                >
                  Reset All
                </Button>
                <Button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex-1 bg-black text-white hover:bg-gray-800 py-3 text-base font-medium"
                >
                  Apply Filters ({sortedProducts.length})
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ProductQuickView product={selectedProduct} isOpen={isQuickViewOpen} onClose={closeQuickView} />

      <Footer />
    </main>
  )
}
