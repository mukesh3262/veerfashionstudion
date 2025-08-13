import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"

const menProducts = [
  {
    id: 1,
    name: "Classic Black Suit",
    description: "Premium tailored suit perfect for formal occasions",
    price: "$599",
    image: "/elegant-black-suit.png",
  },
  {
    id: 2,
    name: "White Dress Shirt",
    description: "Crisp cotton dress shirt with modern fit",
    price: "$89",
    image: "/placeholder-amqno.png",
  },
  {
    id: 3,
    name: "Black Leather Jacket",
    description: "Genuine leather jacket with contemporary styling",
    price: "$299",
    image: "/leather-jacket.png",
  },
  {
    id: 4,
    name: "Charcoal Wool Coat",
    description: "Luxurious wool coat for sophisticated style",
    price: "$449",
    image: "/charcoal-wool-coat.png",
  },
  {
    id: 5,
    name: "Black Dress Pants",
    description: "Tailored dress pants with perfect fit",
    price: "$129",
    image: "/black-dress-pants.png",
  },
  {
    id: 6,
    name: "White Polo Shirt",
    description: "Classic polo shirt in premium cotton",
    price: "$69",
    image: "/placeholder-zh4an.png",
  },
]

export default function MenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">Men's Collection</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover sophisticated menswear that combines classic elegance with contemporary style
            </p>
          </div>
          <ProductGrid products={menProducts} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
