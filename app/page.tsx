import type { Metadata } from "next";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Ramesh Choudhary - MERN Stack Developer",
  description:
    "MERN Stack Developer with 3 years of experience building scalable web applications using React.js, Node.js, Express.js, and MongoDB.",
  keywords:
    "Ramesh Kumar, Ramesh Kumar Software Engineer, Ramesh Kumar Software Developer, Ramesh Choudhary, Ramesh Choudhary Sayla, Ramesh Choudhary Software Enginneer, Ramesh Choudhary Software Developer, MERN Stack Developer, React Developer, Node.js, MongoDB, Express.js, Full Stack Developer, JavaScript Developer",
  authors: [{ name: "Ramesh Choudhary" }],
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
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
