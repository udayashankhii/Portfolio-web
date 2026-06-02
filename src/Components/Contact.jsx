import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Ready to work together? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">udayashankhi123@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400">+977 98XXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">Koteshwor, Kathmandu</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:border-purple-500 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none text-gray-900 dark:text-white transition-all shadow-sm"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:border-purple-500 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none text-gray-900 dark:text-white transition-all shadow-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:border-purple-500 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none text-gray-900 dark:text-white transition-all shadow-sm resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
