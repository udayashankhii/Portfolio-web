import React from "react";

const projects = [
  {
    title: "TutorNepal",
    description: "Frontend development for tuition matching platform connecting students with tutors across Nepal.",
    image: "/tutornepal.png",
    technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    github: "https://github.com/Axkratos/Tutor",
    live: "https://tutornepal.com"
  },
  {
    title: "AgroNepal",
    description: "Full-stack development for agriculture platform with complete MERN stack implementation and production deployment.",
    image: "/agronepal.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    github: "https://github.com/udayashankhii/AgroNepal",
    live: "https://agronepal.vercel.app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real-world projects showcasing full-stack development skills built for Nepal market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} // Change hover:scale-105 to hover:scale-102 or hover:scale-103
className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700 
hover:border-purple-500 transition-all duration-300 hover:scale-102">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a 
                      href={project.github}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.live}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
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
