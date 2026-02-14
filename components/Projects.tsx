"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="projects"
      className="relative z-10 py-24 px-6 bg-[#020617] text-gray-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-12">
          Projects
        </h2>

        {/* PROJECT CARD */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen(true)}
          className="cursor-pointer p-8 rounded-2xl border border-blue-900 bg-[#0f172a] 
          hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/30 
          transition-all duration-300 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-blue-300">
            Intelligent ML System
          </h3>

          <p className="mt-4 text-gray-400">
            Click to view detailed project description.
          </p>
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                className="bg-[#0f172a] p-8 rounded-2xl max-w-lg w-full border border-blue-800 shadow-2xl shadow-blue-500/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl text-blue-400 font-bold">
                  Intelligent ML System
                </h3>

                <p className="mt-4 text-gray-400">
                  This project focuses on preprocessing real-world datasets,
                  training ML models, evaluating performance metrics, and optimizing results.
                </p>

                <div className="mt-6 text-blue-400 text-sm">
                  Python · Scikit-Learn · Pandas · NumPy
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-8 px-6 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}