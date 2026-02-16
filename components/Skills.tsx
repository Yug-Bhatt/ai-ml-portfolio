"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 75 },
      { name: "C++", level: 80 },
      { name: "Java", level: 60 },
      { name: "SQL", level: 75 },
      { name: "Next.js / React", level: 60 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Artificial Intelligence", level: 80 },
      { name: "Deep Learning", level: 75 },
      { name: "Data Science", level: 85 },
      { name: "Data Analysis", level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [{ name: "GitHub", level: 85 }],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 py-32 px-6 text-gray-300"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-20"
        >
          Technical Skills
        </motion.h2>

        <div className="space-y-16">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-10">
                {category.title}
              </h3>

              <div className="space-y-8">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-3 text-sm md:text-base">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/40"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}