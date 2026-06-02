import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EverTrek Nepal",
    description: "Full-stack trek booking platform connecting adventurers with authentic Himalayan trekking experiences across Nepal.",
    image: "/evertreknepal.png",
    technologies: ["React", "Django", "PostgreSQL", "Tailwind CSS", "Vite", "Cloudinary"],
    github: "https://github.com/udayashankhi/trek-nepal",
    live: "https://evertreknepal.com"
  },
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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Real-world projects showcasing full-stack development skills built for Nepal market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 
              hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors text-sm font-medium"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed min-h-[60px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 dark:bg-purple-500/20 text-gray-700 dark:text-purple-300 rounded-full text-xs font-medium border border-gray-200 dark:border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
