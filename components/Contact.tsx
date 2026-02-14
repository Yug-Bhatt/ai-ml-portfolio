"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-28 px-6 flex flex-col items-center text-center"
    >
      {/* Glow background */}
      <div className="absolute -inset-20 bg-blue-500/10 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl"
      >
        <h2 className="text-4xl font-bold text-blue-400">
          Contact
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Let’s connect and build something impactful.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/yugbhatt-ai"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Yug-Bhatt"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            GitHub
          </a>

          <a
            href="mailto:yugbhatt75@gmail.com"
            className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}