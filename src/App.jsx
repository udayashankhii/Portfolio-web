import About from "./Components/About";
import Contact from "./Components/Contact";
// import Experience from "./Components/Expereince";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skill";
import React from "react";
function App() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a] text-[#111111] dark:text-[#eaeaea] transition-colors duration-300">
      <Header />
      <main className="pt-24 px-6 md:px-12 max-w-5xl mx-auto space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
