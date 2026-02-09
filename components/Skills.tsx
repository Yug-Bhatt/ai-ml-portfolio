"use client";
import { motion } from "framer-motion";

const skills = [
  "Python",
  "Machine Learning",
  "Data Analysis",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "TensorFlow (Learning)",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#020617] text-center px-6">
      <h2 className="text-3xl font-bold text-blue-400">Skills</h2>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-blue-900 p-4 text-gray-300 hover:border-blue-400 hover:text-white transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
