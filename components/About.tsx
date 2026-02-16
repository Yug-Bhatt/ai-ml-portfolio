"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-32 px-6 text-gray-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-20"
        >
          About Me
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-xl"
          >
            <p className="text-lg leading-relaxed text-gray-400">
              I am a{" "}
              <span className="text-blue-400 font-semibold">
                B.Tech Artificial Intelligence & Machine Learning student
              </span>{" "}
              passionate about designing intelligent systems that learn from data
              and solve real-world problems.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              My interests lie in Machine Learning, Deep Learning, and Data Science.
              I enjoy transforming raw data into meaningful insights and building
              scalable AI-driven solutions through hands-on projects.
            </p>

            <p className="mt-6 text-gray-500 text-sm">
              Currently focused on strengthening my fundamentals in model development,
              data preprocessing, and performance optimization.
            </p>
          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-8"
          >
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-blue-300 font-semibold text-lg">
                🚀 Continuous Learner
              </h3>
              <p className="text-gray-400 mt-2">
                Actively building AI projects, exploring research concepts, and earning certifications.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-blue-300 font-semibold text-lg">
                🤖 AI & ML Focused
              </h3>
              <p className="text-gray-400 mt-2">
                Strong interest in Deep Learning, NLP, and building data-driven intelligent systems.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-blue-300 font-semibold text-lg">
                💡 Problem Solver
              </h3>
              <p className="text-gray-400 mt-2">
                Focused on applying Machine Learning to practical challenges with measurable impact.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}