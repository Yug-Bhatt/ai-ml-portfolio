"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "Artificial Intelligence", level: 80 },
  { name: "Deep Learning", level: 75 },
  { name: "Data Science", level: 85 },
  { name: "Data Analysis", level: 80 },
  { name: "SQL", level: 75 },
  { name: "GitHub", level: 85 },
  { name: "Next.js / React", level: 70 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 text-gray-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-12">
          Technical Skills
        </h2>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-blue-900/30 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg shadow-blue-500/30"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}