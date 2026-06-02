import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated and creative full-stack developer with a strong
            passion for building performant, user-friendly web applications.
            With a solid understanding of both frontend and backend
            technologies, I enjoy bringing digital ideas to life — from sleek
            landing pages to scalable APIs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { metric: "3+", label: "Years of Experience" },
            { metric: "5+", label: "Projects Completed" },
            { metric: "100%", label: "Client Satisfaction" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors duration-300"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">{item.metric}</div>
              <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 font-medium"
          >
            <span className="mr-2">📄</span>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
