import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pb-8 lg:pb-0"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-xs md:text-base text-purple-700 font-medium">
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Ramesh Kumar
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium mb-6">
              MERN Stack / React Developer
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              I craft scalable and performant full-stack web applications using
              the MERN stack with modern UI/UX design principles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <a
                  href="Ramesh_Kumar_Resume.pdf"
                  download={true}
                  className="flex items-center gap-2 "
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white px-8 py-3 text-lg bg-transparent transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Contact Links with Icons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="mailto:rameshc9784@gmail.com"
                className="group flex items-center justify-center w-12 h-12 bg-white bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110"
                title="Send Email"
              >
                <Mail className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="tel:+919784339093"
                className="group flex items-center justify-center w-12 h-12 bg-white bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                title="Call Now"
              >
                <Phone className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/ramesh-choudhary-ba5590180"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-white bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://github.com/rameshc9784"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-white bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                title="GitHub Profile"
              >
                <Github className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              <img
                src="hero.jpg?height=500&width=500"
                alt="Ramesh Kumar - MERN Stack Developer"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-purple-600" />
        </div>
      </div>
    </section>
  );
}
