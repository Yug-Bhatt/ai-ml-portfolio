"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-28 px-6 text-gray-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-400 text-center mb-16"
        >
          About Me
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0f172a]/70 backdrop-blur-md border border-blue-900 rounded-2xl p-8 shadow-xl shadow-blue-500/10"
          >
            <p className="text-lg leading-relaxed text-gray-400">
              I am an aspiring{" "}
              <span className="text-blue-400 font-semibold">
                AI & Machine Learning Engineer
              </span>{" "}
              passionate about building intelligent systems that learn from data.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              I enjoy solving real-world ML problems, exploring data-driven
              insights, and continuously improving my skills through hands-on
              projects.
            </p>
          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="bg-[#0f172a]/60 backdrop-blur-md border border-blue-900 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-blue-300 font-semibold text-lg">
                🚀 Continuous Learner
              </h3>
              <p className="text-gray-400 mt-2">
                Actively building AI projects and earning certifications.
              </p>
            </div>

            <div className="bg-[#0f172a]/60 backdrop-blur-md border border-blue-900 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-blue-300 font-semibold text-lg">
                🤖 AI Enthusiast
              </h3>
              <p className="text-gray-400 mt-2">
                Interested in Deep Learning, Data Science & Intelligent Systems.
              </p>
            </div>

            <div className="bg-[#0f172a]/60 backdrop-blur-md border border-blue-900 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-blue-300 font-semibold text-lg">
                💡 Problem Solver
              </h3>
              <p className="text-gray-400 mt-2">
                Focused on applying ML to real-world impactful challenges.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}