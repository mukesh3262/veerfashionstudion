import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { WishlistProvider } from "@/contexts/wishlist-context"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Veer Fashion - Style that defines you",
  description: "Premium fashion store offering the latest trends in Men, Women, Kids clothing and Watches",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body>
        <WishlistProvider>
         {children}
        </WishlistProvider>
      </body>
    </html>
  )
}
