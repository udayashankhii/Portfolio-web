import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Expereince";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skill";
import React from "react";
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
