import { Code, Users, Lightbulb, Target, Award, Coffee } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "3+ Years Experience",
    description: "Building scalable web applications",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working with cross-functional teams",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Creative solutions to complex challenges",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering quality results",
  },
];

const personalStats = [
  { label: "Projects Completed", value: "25+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Coffee Consumed", value: "∞", icon: Coffee },
  { label: "Lines of Code", value: "50K+" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the person behind the code - my journey, passion, and
            what drives me as a developer
          </p>
        </div>

        {/* Main Content: Photo Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Side - Photo */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/hero.jpg?height=600&width=500&text=Professional+Developer+Portrait"
                alt="Ramesh Kumar - Professional Developer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>

            {/* Floating achievement badge */}
            <div className="absolute top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-purple-100">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-purple-600 mr-2" />
                <div>
                  <p className="text-sm font-bold text-gray-900">3+ Years</p>
                  <p className="text-xs text-gray-600">Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Main Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Passionate{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  MERN Stack Developer
                </span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hello! I'm Ramesh Kumar, a dedicated MERN Stack Developer with
                over 3 years of hands-on experience in crafting robust,
                scalable, and user-friendly web applications. My journey in
                software development began with a curiosity about how things
                work on the web, and it has evolved into a passion for creating
                digital solutions that make a difference.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                What I Bring to the Table:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Full-Stack Expertise:</strong> Proficient in
                    React.js, Node.js, Express.js, and MongoDB
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>AI Integration:</strong> Experience with OpenAI,
                    Gemini, Assembly AI
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Security-First:</strong> JWT, OAuth, and modern
                    security practices
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Cloud & DevOps:</strong> AWS, Firebase, and modern
                    deployment
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed">
                Currently working as a Software Engineer at{" "}
                <strong>Capgemini Technology India</strong>, I've worked on
                diverse projects from e-commerce platforms to real-time
                messaging applications. I believe in writing clean, maintainable
                code and staying updated with industry trends.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Content Below - Full Width */}
        <div className="space-y-16">
          {/* Highlights Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              What Sets Me Apart
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Personal Stats */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">
              By the Numbers
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {personalStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {stat.icon && <stat.icon className="h-6 w-6 mr-2" />}
                    <span className="text-3xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-purple-100 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-600 mb-6">
                I'm always interested in new opportunities and challenging
                projects. Whether you have a project in mind or just want to
                connect, I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
