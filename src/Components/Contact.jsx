import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to work together? Let's discuss your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-400">udayashankhi@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-gray-400">+977 98XXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-400">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg focus:border-purple-500 focus:outline-none text-white transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg focus:border-purple-500 focus:outline-none text-white transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg focus:border-purple-500 focus:outline-none text-white transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
