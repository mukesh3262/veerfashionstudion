import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"

const womenProducts = [
  {
    id: 1,
    name: "Black Evening Dress",
    description: "Elegant evening dress perfect for special occasions",
    price: "$299",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "White Silk Blouse",
    description: "Luxurious silk blouse with timeless appeal",
    price: "$149",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "Black Pencil Skirt",
    description: "Classic pencil skirt for professional elegance",
    price: "$89",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "White Blazer",
    description: "Sophisticated blazer for modern businesswoman",
    price: "$199",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    name: "Black Cocktail Dress",
    description: "Chic cocktail dress for evening events",
    price: "$249",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    name: "White Summer Dress",
    description: "Flowing summer dress in premium fabric",
    price: "$129",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function WomenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">Women's Collection</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Embrace your femininity with our curated selection of elegant and contemporary pieces
            </p>
          </div>
          <ProductGrid products={womenProducts} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
