import type { Metadata, Viewport } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "For My Favorite Person",
  description: "A special valentine message just for you",
}

export const viewport: Viewport = {
  themeColor: "#FFF8F0",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} font-serif`}>{children}</body>
    </html>
  )
}
