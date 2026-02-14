"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Certificate = {
  title: string;
  category: string;
  image: string;
  pdf: string;
};

const certificates: Certificate[] = [
  {
    title: "NVIDIA Certificate",
    category: "AI",
    image: "/certificates/nvidia_certificate.jpg",
    pdf: "/certificates/nvidia_certificate.pdf",
  },
  {
    title: "NPTEL Certificate",
    category: "AI",
    image: "/certificates/nptel_certificate.jpg",
    pdf: "/certificates/nptel_certificate.pdf",
  },
  {
    title: "Coursera Google",
    category: "AI",
    image: "/certificates/coursera_google.jpg",
    pdf: "/certificates/coursera_google.pdf",
  },
  {
    title: "Google Cloud",
    category: "Cloud",
    image: "/certificates/google_cloud.jpg",
    pdf: "/certificates/google_cloud.pdf",
  },
  {
    title: "Java Certificate",
    category: "Programming",
    image: "/certificates/java_certificate.jpg",
    pdf: "/certificates/java_certificate.pdf",
  },
  {
    title: "FDSA Certificate",
    category: "Programming",
    image: "/certificates/fdsa_certi.jpg",
    pdf: "/certificates/fdsa_certi.pdf",
  },
  {
    title: "NVIDIA Workshop",
    category: "Workshop",
    image: "/certificates/nvidia_workshop.jpg",
    pdf: "/certificates/nvidia_workshop.pdf",
  },
];

const categories = ["All", "AI", "Cloud", "Programming", "Workshop"];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Certificate | null>(null);

  const filtered =
    activeCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === activeCategory);

  return (
    <section
      id="certifications"
      className="relative py-28 px-6 text-gray-300 overflow-hidden"
    >
      {/* Subtle Radial Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-400 mb-12">
          Certifications
        </h2>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-blue-400">07+</h3>
            <p className="text-gray-400 text-sm">Total</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-400">03</h3>
            <p className="text-gray-400 text-sm">AI Focused</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-400">01</h3>
            <p className="text-gray-400 text-sm">Cloud</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-400">03</h3>
            <p className="text-gray-400 text-sm">Programming & Workshop</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "border-blue-500 text-blue-400 hover:bg-blue-500/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filtered.map((cert) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(cert)}
                className="relative cursor-pointer rounded-2xl overflow-hidden border border-blue-800 bg-[#0f172a] group transition-all duration-500 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
              >
                {/* Neon Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-400/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="relative w-full h-56 object-cover"
                />

                <div className="relative p-5 text-left">
                  <h3 className="text-blue-300 font-semibold text-lg">
                    {cert.title}
                  </h3>

                  <div className="flex mt-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Glass Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-[#0f172a]/80 backdrop-blur-xl p-8 rounded-2xl max-w-3xl w-full border border-blue-500/30 shadow-[0_0_60px_rgba(59,130,246,0.3)]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl text-blue-400 font-bold mb-6">
                {selected.title}
              </h3>

              <img
                src={selected.image}
                alt={selected.title}
                className="w-full rounded-xl mb-8"
              />

              <div className="flex justify-between items-center">
                <a
                  href={selected.pdf}
                  target="_blank"
                  className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
                >
                  View PDF
                </a>

                <button
                  onClick={() => setSelected(null)}
                  className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}