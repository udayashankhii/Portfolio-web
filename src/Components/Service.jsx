import React from "react";

const services = [
  {
    title: "Frontend Development",
    description: "Pixel-perfect UI development using React and TailwindCSS.",
  },
  {
    title: "Backend Development",
    description: "Robust REST APIs with Django or Node.js and MongoDB.",
  },
  {
    title: "SEO Optimization",
    description:
      "Optimizing site speed and discoverability for search engine rankings.",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-12">
        My Services
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-xl shadow"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
