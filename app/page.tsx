"use client";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-6 relative"
      >
        <div className="relative">
          {/* Glow background */}
          <div className="absolute -inset-10 bg-blue-500/10 blur-3xl rounded-full"></div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="relative z-10"
          >
            {/* Name */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
            >
              Yug Bhatt
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-4 text-xl md:text-2xl text-blue-400"
            >
              Aspiring AI & Machine Learning Engineer
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-6 max-w-xl mx-auto text-gray-400"
            >
              Turning data into intelligent solutions using Machine Learning & AI.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-10 flex justify-center gap-4"
            >
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
            </motion.div>
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