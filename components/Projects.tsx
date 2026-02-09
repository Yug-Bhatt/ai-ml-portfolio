"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-[#020617] text-center px-6"
    >
      <h2 className="text-3xl font-bold text-blue-400">Projects</h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 max-w-xl mx-auto rounded-xl border border-blue-900 p-6 text-gray-300 
hover:border-blue-400 hover:shadow-blue-500/20 hover:shadow-lg transition"

      >
        <h3 className="text-xl font-semibold">
          🚧 Intelligent ML System <span className="text-blue-400">(Ongoing)</span>
        </h3>

        <p className="mt-4 text-gray-400">
          Developing a machine learning solution focused on data preprocessing,
          model training, and performance evaluation using real-world datasets.
        </p>

        <div className="mt-4 text-sm text-blue-400">
          Python · Machine Learning · Data Analysis
        </div>
      </motion.div>
    </section>
  );
}
