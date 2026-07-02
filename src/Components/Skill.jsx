import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Layout, Database, Smartphone, GitBranch, 
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-400",
    shadow: "hover:shadow-blue-500/25",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend & DB",
    icon: <Database className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-400",
    shadow: "hover:shadow-emerald-500/25",
    skills: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Mobile Apps",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    shadow: "hover:shadow-purple-500/25",
    skills: ["React Native", "Expo", "Mobile UI/UX"]
  },
  {
    title: "Tools & DevOps",
    icon: <GitBranch className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    shadow: "hover:shadow-orange-500/25",
    skills: ["Git", "GitHub", "Vite", "REST APIs", "Postman"]
  }
];

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] -z-10 mix-blend-multiply dark:mix-blend-lighten animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] -z-10 mix-blend-multiply dark:mix-blend-lighten animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 px-5 py-2.5 rounded-full mb-6 border border-purple-200/50 dark:border-purple-700/50 shadow-sm">
            <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-bold text-purple-700 dark:text-purple-300 tracking-wider uppercase">
              My Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 dark:text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A carefully curated stack of modern technologies that empower me to build highly performant, scalable, and visually stunning applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`relative overflow-hidden group rounded-[2rem] p-8 lg:p-10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/40 dark:border-slate-800/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${category.shadow} ${hoveredCategory !== null && hoveredCategory !== index ? 'opacity-40 scale-[0.98] blur-[2px]' : 'opacity-100'}`}
            >
              {/* Ambient Hover Glow */}
              <div className={`absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-700 blur-[60px] bg-gradient-to-br ${category.color}`}></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
                <div className={`shrink-0 p-5 rounded-3xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 bg-gradient-to-br ${category.color} text-white`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                    {category.title}
                  </h3>
                  <div className="h-1.5 w-16 rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden">
                    <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r ${category.color}`}></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.08), duration: 0.4 }}
                    className={`px-5 py-2.5 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 bg-gray-50/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-200 border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl hover:-translate-y-1.5 cursor-default hover:text-white dark:hover:text-white hover:border-transparent hover:bg-gradient-to-r ${category.color}`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom Line */}
              <div className={`absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r ${category.color}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
