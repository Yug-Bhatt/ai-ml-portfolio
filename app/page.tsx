"use client";

import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <main
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-28"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Bigger Glow */}
              <div className="absolute -inset-8 bg-blue-500/20 blur-3xl rounded-full"></div>

              <motion.img
                src="/yug_1.jpg"
                alt="Yug Bhatt"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Badge */}
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm text-blue-400">
              B.Tech AIML @ CHARUSAT
            </span>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Engineering the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Intelligent
              </span>{" "}
              Future.
            </h1>

            {/* Typewriter */}
            <h2 className="mt-5 text-lg md:text-xl text-blue-400 min-h-[32px]">
              <Typewriter
                words={[
                  "AI Engineer",
                  "Machine Learning Developer",
                  "Deep Learning Explorer",
                  "Data Science Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-400 max-w-lg mx-auto md:mx-0">
              I build intelligent systems using Machine Learning,
              Deep Learning and Data Science to solve real-world problems.
            </p>

            {/* Internship Line */}
            <p className="mt-3 text-sm text-blue-400">
              🚀 Currently seeking AI/ML Internship Opportunities
            </p>

            {/* Buttons */}
            <div className="mt-10 flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                View Projects
              </a>

              <a
                href="/Yug_Bhatt_Resume.pdf"
                download
                className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

        </div>
      </main>

      {/* SECTIONS */}
      <div className="space-y-32 pb-32 relative z-10">
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </>
  );
}