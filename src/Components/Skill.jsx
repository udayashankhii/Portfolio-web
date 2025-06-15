import React from "react";

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg font-medium text-white">{skill.name}</span>
                </div>
                <span className="text-purple-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
