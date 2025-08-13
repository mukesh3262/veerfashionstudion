"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

const menCategories = [
  { id: "all", name: "All Items", count: 24 },
  { id: "tshirts", name: "T-Shirts", count: 8 },
  { id: "shirts", name: "Shirts", count: 6 },
  { id: "jeans", name: "Jeans", count: 5 },
  { id: "cargo", name: "Cargo Pants", count: 4 },
  { id: "formal", name: "Formal Wear", count: 7 },
  { id: "casual", name: "Casual Wear", count: 6 },
  { id: "accessories", name: "Accessories", count: 3 },
]

const menProducts = {
  all: [
    {
      id: 1,
      name: "Classic Black Suit",
      description: "Premium tailored suit perfect for formal occasions",
      price: "$599",
      image: "/elegant-black-suit.png",
      category: "formal",
    },
    {
      id: 2,
      name: "White Dress Shirt",
      description: "Crisp cotton dress shirt with modern fit",
      price: "$89",
      image: "/placeholder-tl3i6.png",
      category: "shirts",
    },
    {
      id: 3,
      name: "Black Leather Jacket",
      description: "Genuine leather jacket with contemporary styling",
      price: "$299",
      image: "/leather-jacket.png",
      category: "casual",
    },
    {
      id: 4,
      name: "Charcoal Wool Coat",
      description: "Luxurious wool coat for sophisticated style",
      price: "$449",
      image: "/charcoal-wool-coat.png",
      category: "formal",
    },
    {
      id: 5,
      name: "Black Dress Pants",
      description: "Tailored dress pants with perfect fit",
      price: "$129",
      image: "/black-dress-pants.png",
      category: "formal",
    },
    {
      id: 6,
      name: "White Polo Shirt",
      description: "Classic polo shirt in premium cotton",
      price: "$69",
      image: "/white-polo-shirt.png",
      category: "casual",
    },
    {
      id: 7,
      name: "Blue Denim Jeans",
      description: "Classic fit denim jeans in premium wash",
      price: "$149",
      image: "/blue-denim-jeans.png",
      category: "jeans",
    },
    {
      id: 8,
      name: "Black T-Shirt",
      description: "Essential cotton t-shirt with perfect fit",
      price: "$39",
      image: "/black-t-shirt.png",
      category: "tshirts",
    },
    {
      id: 9,
      name: "Khaki Cargo Pants",
      description: "Utility cargo pants with multiple pockets",
      price: "$89",
      image: "/khaki-cargo-pants.png",
      category: "cargo",
    },
    {
      id: 10,
      name: "Navy Blazer",
      description: "Sophisticated navy blazer for business casual",
      price: "$349",
      image: "/navy-blazer.png",
      category: "formal",
    },
    {
      id: 11,
      name: "Grey Hoodie",
      description: "Comfortable cotton hoodie for casual wear",
      price: "$79",
      image: "/grey-hoodie.png",
      category: "casual",
    },
    {
      id: 12,
      name: "Leather Belt",
      description: "Premium leather belt with silver buckle",
      price: "$59",
      image: "/leather-belt.png",
      category: "accessories",
    },
  ],
  tshirts: [
    {
      id: 8,
      name: "Black T-Shirt",
      description: "Essential cotton t-shirt with perfect fit",
      price: "$39",
      image: "/black-t-shirt.png",
      category: "tshirts",
    },
    {
      id: 13,
      name: "White V-Neck Tee",
      description: "Classic v-neck t-shirt in soft cotton",
      price: "$35",
      image: "/placeholder-il9de.png",
      category: "tshirts",
    },
    {
      id: 14,
      name: "Grey Graphic Tee",
      description: "Trendy graphic t-shirt with modern design",
      price: "$45",
      image: "/placeholder-e27q6.png",
      category: "tshirts",
    },
    {
      id: 15,
      name: "Navy Crew Neck",
      description: "Premium crew neck t-shirt in navy blue",
      price: "$42",
      image: "/navy-crew-neck-tee.png",
      category: "tshirts",
    },
  ],
  shirts: [
    {
      id: 2,
      name: "White Dress Shirt",
      description: "Crisp cotton dress shirt with modern fit",
      price: "$89",
      image: "/placeholder-tl3i6.png",
      category: "shirts",
    },
    {
      id: 16,
      name: "Blue Oxford Shirt",
      description: "Classic oxford shirt in light blue",
      price: "$79",
      image: "/blue-oxford-shirt.png",
      category: "shirts",
    },
    {
      id: 17,
      name: "Checkered Flannel",
      description: "Cozy flannel shirt with checkered pattern",
      price: "$69",
      image: "/checkered-flannel-shirt.png",
      category: "shirts",
    },
    {
      id: 18,
      name: "Black Casual Shirt",
      description: "Versatile black shirt for casual occasions",
      price: "$65",
      image: "/placeholder-k0y51.png",
      category: "shirts",
    },
  ],
  jeans: [
    {
      id: 7,
      name: "Blue Denim Jeans",
      description: "Classic fit denim jeans in premium wash",
      price: "$149",
      image: "/blue-denim-jeans.png",
      category: "jeans",
    },
    {
      id: 19,
      name: "Black Skinny Jeans",
      description: "Modern skinny fit jeans in black wash",
      price: "$139",
      image: "/black-skinny-jeans.png",
      category: "jeans",
    },
    {
      id: 20,
      name: "Light Wash Jeans",
      description: "Relaxed fit jeans in light blue wash",
      price: "$129",
      image: "/light-wash-jeans.png",
      category: "jeans",
    },
    {
      id: 21,
      name: "Dark Indigo Jeans",
      description: "Premium dark indigo straight fit jeans",
      price: "$159",
      image: "/dark-indigo-jeans.png",
      category: "jeans",
    },
  ],
  cargo: [
    {
      id: 9,
      name: "Khaki Cargo Pants",
      description: "Utility cargo pants with multiple pockets",
      price: "$89",
      image: "/khaki-cargo-pants.png",
      category: "cargo",
    },
    {
      id: 22,
      name: "Black Cargo Shorts",
      description: "Tactical cargo shorts for summer",
      price: "$69",
      image: "/black-cargo-shorts.png",
      category: "cargo",
    },
    {
      id: 23,
      name: "Olive Green Cargos",
      description: "Military-inspired cargo pants in olive",
      price: "$95",
      image: "/placeholder-8bd33.png",
      category: "cargo",
    },
    {
      id: 24,
      name: "Grey Tactical Pants",
      description: "Professional tactical pants with utility pockets",
      price: "$109",
      image: "/placeholder.svg?height=400&width=300",
      category: "cargo",
    },
  ],
  formal: [
    {
      id: 1,
      name: "Classic Black Suit",
      description: "Premium tailored suit perfect for formal occasions",
      price: "$599",
      image: "/elegant-black-suit.png",
      category: "formal",
    },
    {
      id: 4,
      name: "Charcoal Wool Coat",
      description: "Luxurious wool coat for sophisticated style",
      price: "$449",
      image: "/charcoal-wool-coat.png",
      category: "formal",
    },
    {
      id: 5,
      name: "Black Dress Pants",
      description: "Tailored dress pants with perfect fit",
      price: "$129",
      image: "/black-dress-pants.png",
      category: "formal",
    },
    {
      id: 10,
      name: "Navy Blazer",
      description: "Sophisticated navy blazer for business casual",
      price: "$349",
      image: "/navy-blazer.png",
      category: "formal",
    },
  ],
  casual: [
    {
      id: 3,
      name: "Black Leather Jacket",
      description: "Genuine leather jacket with contemporary styling",
      price: "$299",
      image: "/leather-jacket.png",
      category: "casual",
    },
    {
      id: 6,
      name: "White Polo Shirt",
      description: "Classic polo shirt in premium cotton",
      price: "$69",
      image: "/white-polo-shirt.png",
      category: "casual",
    },
    {
      id: 11,
      name: "Grey Hoodie",
      description: "Comfortable cotton hoodie for casual wear",
      price: "$79",
      image: "/grey-hoodie.png",
      category: "casual",
    },
  ],
  accessories: [
    {
      id: 12,
      name: "Leather Belt",
      description: "Premium leather belt with silver buckle",
      price: "$59",
      image: "/leather-belt.png",
      category: "accessories",
    },
    {
      id: 25,
      name: "Black Wallet",
      description: "Genuine leather wallet with card slots",
      price: "$79",
      image: "/placeholder.svg?height=400&width=300",
      category: "accessories",
    },
    {
      id: 26,
      name: "Silver Watch",
      description: "Classic silver watch with leather strap",
      price: "$199",
      image: "/placeholder.svg?height=400&width=300",
      category: "accessories",
    },
  ],
}

export default function MenPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const currentProducts = menProducts[activeCategory as keyof typeof menProducts] || menProducts.all

  const sortedProducts = [...currentProducts].sort((a, b) => {
    if (sortBy === "price") {
      return Number.parseInt(a.price.replace("$", "")) - Number.parseInt(b.price.replace("$", ""))
    }
    return a.name.localeCompare(b.name)
  })

  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">Men's Collection</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Discover sophisticated menswear that combines classic elegance with contemporary style
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {menCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-white text-black border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <span className="text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                    >
                      Visit Store
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
