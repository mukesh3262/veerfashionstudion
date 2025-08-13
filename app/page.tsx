import Header from "@/components/header"
import Hero from "@/components/hero"
import CategoryCards from "@/components/category-cards"
import AccessoriesLifestyle from "@/components/accessories-lifestyle"
import AboutSection from "@/components/about-section"
import NewArrivals from "@/components/new-arrivals"
import WhyChooseUs from "@/components/why-choose-us"
import SocialMediaGallery from "@/components/social-media-gallery"
import ContactCTA from "@/components/contact-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CategoryCards />
      <AccessoriesLifestyle />
      <AboutSection />
      <NewArrivals />
      <WhyChooseUs />
      <SocialMediaGallery />
      <ContactCTA />
      <Footer />
    </main>
  )
}
