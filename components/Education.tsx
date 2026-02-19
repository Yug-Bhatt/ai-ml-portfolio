"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    year: "2024 – 2028",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    institute: "CHARUSAT University",
    details: "CGPA: 7.12",
  },
  {
    year: "2022 – 2024",
    title: "Higher Secondary (Science Stream)",
    institute: "Unique School of Science",
    details: "Board: 75% | PCM: 72%",
  },
  {
    year: "2014 – 2022",
    title: "Primary to Secondary School (2nd to 10th)",
    institute: "Vibrant International Academy (CBSE Board)",
    details: "10th Board: 78%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 py-32 px-6 text-gray-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-24
                     bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500
                     bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="relative">

          {/* Vertical Glowing Line */}
          <div
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2
                       top-0 h-full w-[3px]
                       bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600
                       opacity-40"
          ></div>

          <div className="space-y-20">

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0
                    ? "md:ml-auto pl-16 md:pl-12"
                    : "pl-16 md:pr-12"
                }`}
              >

                {/* Timeline Dot */}
                <div
                  className="absolute left-0 md:-left-3
                             w-6 h-6 rounded-full
                             bg-blue-500
                             shadow-[0_0_25px_rgba(59,130,246,0.8)]"
                ></div>

                {/* Glass Card */}
                <div
                  className="bg-white/5 backdrop-blur-xl
                             border border-white/10
                             rounded-3xl p-8
                             hover:border-blue-400
                             hover:shadow-2xl
                             hover:shadow-blue-500/20
                             transition-all duration-500"
                >

                  <p className="text-blue-400 font-semibold mb-2">
                    {item.year}
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {item.institute}
                  </p>

                  <p className="text-gray-500 mt-4 text-sm">
                    {item.details}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}