export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Ramesh Kumar</h3>
            <p className="text-gray-400">MERN Stack Developer</p>
          </div>

          <nav className="flex flex-wrap  space-x-6 mb-4 md:mb-0">
            <a
              href="#about"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Ramesh Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
