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
  title: "Ramesh Kumar - MERN Stack Developer | React Developer Portfolio",
  description:
    "MERN Stack Developer with 3 years of experience building scalable web applications using React.js, Node.js, Express.js, and MongoDB. View my portfolio and projects.",
  keywords:
    "MERN Stack Developer, React Developer, Node.js, MongoDB, Express.js, Full Stack Developer, JavaScript Developer",
  authors: [{ name: "Ramesh Kumar" }],
  openGraph: {
    title: "Ramesh Kumar - MERN Stack Developer",
    description: "Professional MERN Stack Developer with 3 years of experience",
    type: "website",
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
