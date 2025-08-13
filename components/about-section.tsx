export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black">About Veer Men Studio</h2>
            <div className="w-20 h-1 bg-black"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded with a passion for timeless elegance, Veer Men Studio has been redefining style for the modern
              individual. Our curated collections blend contemporary trends with classic sophistication.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that fashion is more than clothing—it's a form of self-expression. Every piece in our
              collection is carefully selected to ensure the highest quality and style that truly defines you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From our flagship store to your wardrobe, we're committed to delivering an exceptional fashion experience
              that celebrates your unique style journey.
            </p>
          </div>
          <div className="relative">
            <img
              src="/elegant-bw-fashion-store.png"
              alt="Veer Men Studio Interior"
              className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
