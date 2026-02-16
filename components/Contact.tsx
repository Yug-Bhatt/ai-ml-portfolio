"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-32 px-6 flex items-center justify-center text-center"
    >
      {/* Background Glow */}
      <div className="absolute -inset-32 bg-blue-500/10 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 shadow-xl"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
          Let’s Build Intelligent Systems Together
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          I am currently seeking AI/ML internship opportunities and
          collaborative projects where I can contribute and grow as an engineer.
        </p>

        {/* Contact Info */}
        <div className="mt-10 space-y-3 text-gray-300">
          <p>📍 Gujarat, India</p>
          <p>📧 yugbhatt75@gmail.com</p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/yugbhatt-ai"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Yug-Bhatt"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            GitHub
          </a>

          <a
            href="mailto:yugbhatt75@gmail.com"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            Email Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}