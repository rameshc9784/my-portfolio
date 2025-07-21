import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech (Computer Science & Engineering)",
    institution: "Rajasthan Technical University",
    duration: "2017 – 2021",
    type: "Bachelor's Degree",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
    description:
      "Specialized in Computer Science with focus on software development, algorithms, and data structures.",
  },
  {
    degree: "12th Grade (Science - PCM)",
    institution: "Rajasthan Board of Secondary Education",
    duration: "2016 – 2017",
    type: "Higher Secondary",
    icon: BookOpen,
    color: "from-indigo-500 to-purple-500",
    description:
      "Physics, Chemistry, Mathematics with Computer Science as additional subject.",
  },
  {
    degree: "10th Grade",
    institution: "Rajasthan Board of Secondary Education",
    duration: "2014 – 2015",
    type: "Secondary Education",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-500",
    description:
      "Completed secondary education with distinction in Mathematics and Science.",
  },
];

const certifications = [
  "Java (SE & EE)",
  "React.js Development",
  "Web Technologies",
  "MongoDB Certification",
  "Node.js Fundamentals",
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional certifications that shaped my
            career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 text-purple-600 mr-3" />
              Educational Background
            </h3>

            {/* Timeline Container */}
            <div className="relative bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 shadow-lg border border-purple-100">
              {/* Timeline line - contained within the section */}
              <div className="absolute left-12 top-12 bottom-8 w-0.5 bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-600  hidden md:block"></div>

              <div className="space-y-8">
                {educationData.map((edu, index) => {
                  const IconComponent = edu.icon;
                  return (
                    <div key={index} className="relative">
                      {/* Timeline dot - positioned relative to container */}
                      <div
                        className={`absolute top-4 left-4 w-4 h-4 bg-gradient-to-r ${edu.color} rounded-full shadow-lg z-10 hidden md:block`}
                      ></div>

                      <div className="md:ml-20">
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 ">
                          <div className="flex flex-col md:flex-row gap-2 items-start justify-between mb-4">
                            <div className="flex items-center ">
                              <div
                                className={`p-2 bg-gradient-to-r ${edu.color} rounded-lg mr-3 hidden md:block`}
                              >
                                <IconComponent className="h-5 w-5 text-white hidden md:block" />
                              </div>
                              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium shadow-sm">
                                {edu.type}
                              </span>
                            </div>
                            <span className="text-sm text-gray-500 font-medium">
                              {edu.duration}
                            </span>
                          </div>

                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-purple-600 font-semibold mb-3">
                            {edu.institution}
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="h-6 w-6 text-purple-600 mr-3" />
              Certifications
            </h3>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg border border-purple-100">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <Trophy className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-purple-200">
                <p className="text-sm text-gray-600 text-center">
                  Continuously learning and staying updated with latest
                  technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
