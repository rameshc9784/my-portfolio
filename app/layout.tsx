import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramesh Choudhary - MERN Stack Developer",
  description:
    "Professional MERN Stack Developer with 3 years of experience in React.js, Node.js, Express.js, and MongoDB.",
  keywords:
    "MERN Stack Developer, React Developer, Node.js, MongoDB, Express.js, Full Stack Developer, JavaScript Developer, Portfolio",
  authors: [{ name: "Ramesh Choudhary" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Ramesh Choudhary - MERN Stack Developer",
    description:
      "Professional MERN Stack Developer with 3 years of experience in React.js, Node.js, Express.js, and MongoDB.",
    type: "website",
    locale: "en_US",
    siteName: "Ramesh Choudhary",
    images: [
      {
        url: "https://rameshchoudhary.vercel.app/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ramesh Choudhary - React Developer",
      },
    ],
    url: "https://rameshchoudhary.vercel.app",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta
        name="google-site-verification"
        content="6QUycUgZZP37fuSzYpaVDnfGCoKGnTtJYnHqRfknJk8"
      />

      <meta
        property="og:title"
        content="Ramesh Choudhary - MERN Stack Developer | React Developer Portfolio"
      />
      <meta
        property="og:description"
        content="MERN Stack Developer with 3 years of experience building scalable web applications using React.js, Node.js, Express.js, and MongoDB. View my portfolio and projects."
      />
      <meta
        property="og:image"
        content="https://rameshchoudhary.vercel.app/hero.jpg"
      />
      <link rel="canonical" href="https://rameshchoudhary.vercel.app/" />
      <meta property="og:url" content="https://rameshchoudhary.vercel.app" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="https://rameshchoudhary.vercel.app/hero.jpg" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
