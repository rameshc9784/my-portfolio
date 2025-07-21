import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ramesh Kumar - MERN Stack Developer Portfolio",
  description:
    "Professional MERN Stack Developer with 3 years of experience in React.js, Node.js, Express.js, and MongoDB. View my portfolio, projects, and experience.",
  keywords:
    "MERN Stack Developer, React Developer, Node.js, MongoDB, Express.js, Full Stack Developer, JavaScript Developer, Portfolio",
  authors: [{ name: "Ramesh Kumar" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Ramesh Kumar - MERN Stack Developer",
    description: "Professional MERN Stack Developer with 3 years of experience",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
