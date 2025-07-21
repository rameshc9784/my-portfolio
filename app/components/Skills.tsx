import { Code, Database, Shield, Wrench, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3"],
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Backend & API",
    icon: Database,
    skills: ["Node.js", "Express.js", "RESTful API Development", "Java"],
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "SQL"],
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Authentication & Security",
    icon: Shield,
    skills: ["JWT", "OAuth", "Bcrypt"],
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Dev Tools & Cloud",
    icon: Wrench,
    skills: ["Git", "Postman", "Firebase", "AWS (EC2, S3)", "Cloudinary"],
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Other",
    icon: Brain,
    skills: ["AI Integrations (OpenAI, Gemini, Assembly AI)"],
    color: "bg-indigo-100 text-indigo-600",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
