import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We'd love to hear from you. Visit us or get in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-black mb-2">Store Location</h3>
                      <p className="text-gray-600 leading-relaxed">
                        123 Fashion Street
                        <br />
                        Downtown District
                        <br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-black mb-2">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-black mb-2">Email</h3>
                      <p className="text-gray-600">info@veerfashionstudio.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-black mb-2">Opening Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Saturday: 10:00 AM - 9:00 PM</p>
                        <p>Sunday: 12:00 PM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="lg:sticky lg:top-8">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-96 bg-gray-100 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Store Location Map"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-xl font-semibold text-black mb-4">Visit Our Store</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Experience our premium fashion collections in person. Our knowledgeable staff is ready to help you
                      find the perfect pieces for your wardrobe.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
