import React from "react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Evertrek Nepal",
    period: "2023 - Present",
    description: "Developed a scalable travel booking platform with React, TailwindCSS, Django, and MongoDB. Handled frontend UI/UX and backend API integration.",
    technologies: ["React", "Django", "MongoDB", "TailwindCSS"]
  },
  {
    role: "Frontend Developer",
    company: "HikeTech",
    period: "2022 - 2023",
    description: "Built interactive UI components and improved website performance using React and TailwindCSS.",
    technologies: ["React", "TailwindCSS", "JavaScript"]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey and key achievements
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
              
              <div className="ml-20 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 font-semibold text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-400 bg-slate-700 px-4 py-2 rounded-full text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
