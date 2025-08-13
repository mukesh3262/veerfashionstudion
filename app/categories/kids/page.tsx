import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"

const kidsProducts = [
  {
    id: 1,
    name: "Black School Uniform",
    description: "Smart school uniform set for young scholars",
    price: "$79",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "White Party Dress",
    description: "Adorable party dress for special occasions",
    price: "$69",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "Black Formal Suit",
    description: "Mini formal suit for young gentlemen",
    price: "$99",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "White Casual Shirt",
    description: "Comfortable casual shirt for everyday wear",
    price: "$39",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    name: "Black Jeans",
    description: "Stylish jeans for active kids",
    price: "$49",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    name: "White Sneakers",
    description: "Comfortable sneakers for daily adventures",
    price: "$59",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function KidsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">Kids Collection</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stylish and comfortable clothing for the next generation of fashion enthusiasts
            </p>
          </div>
          <ProductGrid products={kidsProducts} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
