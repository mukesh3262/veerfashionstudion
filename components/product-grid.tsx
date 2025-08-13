import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold text-black mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-2xl text-black">{product.price}</span>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center mb-3">Online orders not available</p>
                <Button
                  className="w-full bg-black text-white hover:bg-gray-800 transition-colors duration-300"
                  size="lg"
                >
                  Visit Store to Purchase
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
