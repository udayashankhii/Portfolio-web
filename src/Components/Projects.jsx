import React from "react";

const projects = [
  {
    title: "E-Commerce MERN Platform",
    description: "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard.",
    image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce+Platform",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com"
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Task+Manager",
    technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/taskmanager",
    live: "https://taskmanager-demo.com"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard with data visualization and real-time social media metrics.",
    image: "https://via.placeholder.com/400x250/ec4899/ffffff?text=Social+Dashboard",
    technologies: ["React", "Chart.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/dashboard",
    live: "https://dashboard-demo.com"
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
            Some of my recent work that showcases my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
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
