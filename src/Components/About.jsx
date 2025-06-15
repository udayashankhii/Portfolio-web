import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated and creative full-stack developer with a strong
            passion for building performant, user-friendly web applications.
            With a solid understanding of both frontend and backend
            technologies, I enjoy bringing digital ideas to life — from sleek
            landing pages to scalable APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors duration-300">
            <div className="text-5xl font-bold text-emerald-400 mb-2">3+</div>
            <p className="text-gray-400">Years of Experience</p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors duration-300">
            <div className="text-5xl font-bold text-emerald-400 mb-2">5+</div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors duration-300">
            <div className="text-5xl font-bold text-emerald-400 mb-2">100%</div>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform duration-200 font-medium"
          >
            <span className="mr-2">📄</span>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
