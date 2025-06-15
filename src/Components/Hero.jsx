import React from "react";
import FloatingElements from "./FloatingElemts";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <FloatingElements />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-gray-400 text-lg">Hi, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Udaya Shankhi
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
              MERN Stack Developer
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Building exceptional digital experiences with the MERN stack.
            Passionate about creating scalable web applications that make a difference.
          </p>

          {/* Stats */}
          <div className="flex space-x-12">
            <div className="text-center">
              <AnimatedCounter end={5} duration={2000} />
              <p className="text-gray-500 text-sm uppercase tracking-wide mt-1">Projects</p>
            </div>
            <div className="text-center">
              {/* <AnimatedCounter end={30} duration={2000} /> */}
              {/* <p className="text-gray-500 text-sm uppercase tracking-wide mt-1">Clients</p> */}
            </div>
            <div className="text-center">
              <AnimatedCounter end={3} duration={2000} />
              <p className="text-gray-500 text-sm uppercase tracking-wide mt-1">Years</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-200 text-center"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-purple-500 hover:text-white transition-colors duration-200 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Visual Elements */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main Circle */}
            <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-80"></div>

            {/* Dark Circle Overlay */}
            <div className="absolute top-16 left-16 w-48 h-48 bg-slate-800 rounded-full"></div>

            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center animate-float shadow-lg">
              <span className="text-2xl">⚛️</span>
            </div>

            <div className="absolute top-20 -left-8 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center animate-float-delay-1 shadow-lg">
              <span className="text-2xl">⚡</span>
            </div>

            <div className="absolute bottom-8 -right-8 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center animate-float-delay-2 shadow-lg">
              <span className="text-2xl">🟢</span>
            </div>

            <div className="absolute -bottom-4 left-8 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center animate-float shadow-lg">
              <span className="text-2xl">🍃</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
