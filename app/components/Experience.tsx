import { Calendar, MapPin, Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Capgemini Technology India",
    position: "Software Engineer",
    duration: "Oct 2022 – Present",
    location: "India",
    type: "Full-time",
    responsibilities: [
      "Built scalable REST APIs using Node.js and Express",
      "Developed reusable UI components with React.js + Tailwind CSS",
      "Integrated OpenAI APIs for intelligent features",
      "Implemented secure login flows using JWT and OAuth",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    company: "Lara Technology",
    position: "Full Stack Developer Intern",
    duration: "Dec 2021 – Sep 2022",
    location: "India",
    type: "Internship",
    responsibilities: [
      "Created full-stack web apps using Java, Spring Boot & MERN",
      "Optimized API performance, managed SQL integrations",
      "Handled secure auth and AWS/Firebase deployment",
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development and the impact I've
            made
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative bg-white rounded-2xl p-8 shadow-lg">
          {/* Timeline line - contained within the section */}
          <div className="absolute left-12 top-16 bottom-16 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - positioned relative to container */}
                <div className="absolute left-2 top-4 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hidden md:block shadow-lg z-10"></div>

                <div className="md:ml-20">
                  <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div
                            className={`p-2 bg-gradient-to-r ${exp.color} rounded-lg mr-3`}
                          >
                            <Briefcase className="h-5 w-5 text-white" />
                          </div>
                          <span className="px-3 py-1 bg-white text-purple-700 rounded-full text-sm font-medium shadow-sm">
                            {exp.type}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                          {exp.company}
                        </h4>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 text-gray-600 lg:text-right">
                        <div className="flex items-center lg:justify-end">
                          <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center lg:justify-end">
                          <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-start group">
                          <ChevronRight className="h-5 w-5 text-purple-600 mr-3 mt-0.5 group-hover:translate-x-1 transition-transform" />
                          <span className="text-gray-700 leading-relaxed">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
