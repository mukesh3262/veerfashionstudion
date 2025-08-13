import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"

const watchProducts = [
  {
    id: 1,
    name: "Classic Black Watch",
    description: "Timeless black leather strap watch",
    price: "$299",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "Silver Dress Watch",
    description: "Sophisticated silver watch for formal occasions",
    price: "$399",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "Black Sport Watch",
    description: "Modern sport watch with advanced features",
    price: "$249",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "White Ceramic Watch",
    description: "Elegant ceramic watch with minimalist design",
    price: "$349",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    name: "Black Chronograph",
    description: "Professional chronograph with precision timing",
    price: "$499",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    name: "Silver Bracelet Watch",
    description: "Luxurious bracelet watch in polished silver",
    price: "$449",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function WatchesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">Fragrances Collection</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Precision timepieces that combine functionality with sophisticated style
            </p>
          </div>
          <ProductGrid products={watchProducts} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
