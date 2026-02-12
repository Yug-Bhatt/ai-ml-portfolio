"use client";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "@/components/ParticlesBackground";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <Navbar />
      <CursorGlow />

      {/* Particle Background */}
      <ParticlesBackground />

      {/* MAIN HERO */}
      <main
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full"></div>

              <motion.img
                src="/yug_1.jpg"
                alt="Yug Bhatt"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="relative w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
              />
            </div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Yug Bhatt
            </h1>

            <h2 className="mt-4 text-xl text-blue-400">
              <Typewriter
                words={[
                  "AI Engineer",
                  "Machine Learning Developer",
                  "Data Science Enthusiast",
                  "Deep Learning Explorer"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            <p className="mt-6 text-gray-400 max-w-lg">
              Turning data into intelligent solutions using Machine Learning & AI.
            </p>

            <div className="mt-10 flex gap-4 justify-center md:justify-start">
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

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}