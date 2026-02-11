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
      <main id="home" className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold tracking-tight"
>
        Yug Bhatt
      </motion.h1>


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-xl md:text-2xl text-blue-400"
>
          Aspiring AI & Machine Learning Engineer
        </motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 max-w-xl text-gray-400"
        >
          Turning data into intelligent solutions using Machine Learning & AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex gap-4"
        >
          <button className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 hover:scale-105 active:scale-95 transition-transform duration-300">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:scale-105 active:scale-95 transition-transform duration-300">
            Download Resume
          </button>

        </motion.div>
      </main>

      <About />
      <Skills />
      <Projects />
      <Contact />


    </>
  );
}
