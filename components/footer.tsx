import { Facebook, Instagram, Twitter, MapPin, Clock, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold">Veer Fashion Studio</h3>
            <p className="text-gray-300 leading-relaxed">
              Your destination for premium fashion that defines your unique style. Experience elegance, quality, and
              sophistication in every piece.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Store Information */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-semibold">Visit Our Store</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Fashion Street</p>
                  <p className="text-gray-300">Downtown District</p>
                  <p className="text-gray-300">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <p className="text-gray-300">info@veerfashionstudio.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-semibold">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-gray-300">Monday - Saturday</p>
                  <p className="text-white font-medium">10:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-gray-300">Sunday</p>
                  <p className="text-white font-medium">12:00 PM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Veer Fashion Studio. All rights reserved. | Style that defines you.</p>
        </div>
      </div>
    </footer>
  )
}
