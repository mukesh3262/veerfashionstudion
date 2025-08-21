import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="relative h-64 bg-gradient-to-r from-black to-gray-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90">Discover the story behind Veer Fashion and our commitment to style.</p>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl font-bold text-black">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded with a passion for timeless elegance, Veer Fashion has been at the forefront of premium retail
                  fashion for over a decade. Our commitment to quality, style, and exceptional customer service has made
                  us a trusted destination for fashion enthusiasts who appreciate the finer things in life.
                </p>
                <p>
                  At Veer Fashion, we believe that fashion is more than just clothing – it's a form of self-expression
                  that defines who you are. Our carefully curated collections feature the latest trends alongside
                  timeless classics, ensuring that every piece in our store meets our exacting standards for quality and
                  style.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/elegant-bw-fashion-store.png"
                alt="Veer Fashion Store Interior"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-black mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Veer Fashion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-black">Quality Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Every piece in our collection is carefully selected to meet our exacting standards for quality and
                craftsmanship.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-black">Customer Care</h3>
              <p className="text-gray-700 leading-relaxed">
                We pride ourselves on offering personalized styling advice and exceptional customer service to every
                client.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-black">Style Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                We blend contemporary trends with timeless classics to create collections that define modern elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-black mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Our team of fashion experts works tirelessly to bring you the best in men's, women's, and children's
            fashion, as well as a stunning collection of watches and accessories. We're committed to delivering an
            exceptional fashion experience that celebrates your unique style journey.
          </p>
          <div className="bg-gray-50 rounded-lg p-12">
            <p className="text-2xl font-serif text-black mb-8">
              "Fashion is more than clothing – it's a form of self-expression that defines who you are."
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Visit our store today and discover why Veer Fashion is the preferred choice for discerning customers who
              demand nothing but the best. Experience the difference that quality, style, and exceptional service can
              make.
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Visit Our Store
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
