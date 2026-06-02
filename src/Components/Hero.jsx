import React from "react";
import {  ArrowRight } from "lucide-react";
import { animate, motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="flex items-center min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8 w-full"
      >
        <div className="space-y-6">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 uppercase tracking-widest text-sm font-medium"
          >
            Hello
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Udaya Shankhi.</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-4xl text-gray-500 font-light"
          >
            MERN Stack Developer
          </motion.h2>
        </div>

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-12 h-[2px] bg-purple-500 my-8 origin-left"
        ></motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-light"
        >
          I build high-quality digital experiences with clean code and minimal design. 
          Passionate about performance, accessibility, and modern web architecture.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-8 pt-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 border-b border-gray-400 dark:border-gray-600 pb-1 hover:border-purple-500 dark:hover:border-purple-400 transition-colors text-sm uppercase tracking-widest font-medium w-max text-gray-800 dark:text-gray-200"
          >
            View Work
            <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:text-purple-500 transition-all" />
          </a>
          <a 
            href="#contact"
            className="group flex items-center gap-2 border-b border-gray-400 dark:border-gray-600 pb-1 hover:border-pink-500 dark:hover:border-pink-400 transition-colors text-sm uppercase tracking-widest font-medium w-max text-gray-800 dark:text-gray-200"
          >
            Get in touch
            <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:text-pink-500 transition-all" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
