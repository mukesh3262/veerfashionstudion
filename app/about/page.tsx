import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">About Veer Fashion</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Where style meets sophistication</p>
          </div>

          <div className="space-y-12">
            <div className="text-center">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Veer Fashion Store"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded with a passion for timeless elegance, Veer Fashion has been at the forefront of premium retail
                fashion for over a decade. Our commitment to quality, style, and exceptional customer service has made
                us a trusted destination for fashion enthusiasts who appreciate the finer things in life.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                At Veer Fashion, we believe that fashion is more than just clothing – it's a form of self-expression
                that defines who you are. Our carefully curated collections feature the latest trends alongside timeless
                classics, ensuring that every piece in our store meets our exacting standards for quality and style.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our team of fashion experts works tirelessly to bring you the best in men's, women's, and children's
                fashion, as well as a stunning collection of watches and accessories. We pride ourselves on offering
                personalized styling advice and exceptional customer service to help you find the perfect pieces for
                your wardrobe.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Visit our store today and discover why Veer Fashion is the preferred choice for discerning customers who
                demand nothing but the best. Experience the difference that quality, style, and exceptional service can
                make.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
