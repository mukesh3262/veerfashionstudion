export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Classic Black Blazer",
      description: "Tailored perfection for the modern professional",
      price: "$299",
      image: "/black-blazer-fashion.png",
    },
    {
      id: 2,
      name: "White Silk Blouse",
      description: "Elegant simplicity meets contemporary style",
      price: "$189",
      image: "/white-silk-blouse-fashion.png",
    },
    {
      id: 3,
      name: "Designer Watch",
      description: "Timeless elegance for every occasion",
      price: "$449",
      image: "/placeholder-v2hil.png",
    },
    {
      id: 4,
      name: "Premium Leather Bag",
      description: "Crafted luxury that complements your style",
      price: "$359",
      image: "/black-leather-handbag-fashion.png",
    },
    {
      id: 5,
      name: "Minimalist Dress",
      description: "Effortless elegance in monochrome",
      price: "$249",
      image: "/minimalist-black-dress.png",
    },
    {
      id: 6,
      name: "Classic Trench Coat",
      description: "Timeless outerwear for the discerning individual",
      price: "$399",
      image: "/black-trench-coat-fashion.png",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">New Arrivals</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of carefully curated pieces that embody modern elegance and timeless style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-black mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-black">{product.price}</span>
                  <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                    Visit Store to Purchase
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
