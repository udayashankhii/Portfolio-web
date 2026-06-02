import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95, icon: "🌐" },
  { name: "CSS / Tailwind", level: 90, icon: "🎨" },
  { name: "JavaScript", level: 90, icon: "⚡" },
  { name: "React", level: 85, icon: "⚛️" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "MongoDB", level: 75, icon: "🍃" },
  { name: "Express.js", level: 80, icon: "🚀" },
  { name: "Git / GitHub", level: 90, icon: "📚" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</span>
                </div>
                <span className="text-purple-600 dark:text-purple-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
