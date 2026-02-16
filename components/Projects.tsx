"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="projects"
      className="relative z-10 py-32 px-6 text-gray-300"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-20">
          Selected Project
        </h2>

        {/* Project Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen(true)}
          className="
            cursor-pointer 
            p-10
            rounded-3xl 
            border border-white/10
            bg-white/5
            backdrop-blur-md
            hover:border-blue-400 
            hover:shadow-2xl 
            hover:shadow-blue-500/30
            transition-all duration-300
          "
        >
          <h3 className="text-2xl font-semibold text-blue-300">
            SmartFlare: The Financial Nervous System
          </h3>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A bio-digital risk intelligence system that transforms static loan
            data into a live financial health network using multi-model AI analysis.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">
              Machine Learning
            </span>
            <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">
              Risk Modeling
            </span>
            <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">
              Financial Analytics
            </span>
            <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">
              Data Visualization
            </span>
          </div>

          <p className="mt-6 text-sm text-blue-400">
            Click to explore the Intelligence Engine →
          </p>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                className="
                  bg-[#0f172a]/95
                  backdrop-blur-xl
                  p-10
                  rounded-3xl 
                  max-w-3xl 
                  w-full 
                  border border-blue-500/30
                  shadow-2xl shadow-blue-500/30
                  overflow-y-auto
                  max-h-[85vh]
                "
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-3xl text-blue-400 font-bold">
                  SmartFlare: The Financial Nervous System
                </h3>

                <p className="mt-6 text-gray-400 leading-relaxed">
                  SmartFlare transforms a bank’s rigid loan data into a living
                  Financial Nervous System. Instead of simply labeling a loan
                  as "risky", it identifies and visualizes the root cause using
                  a Neural Risk Source Tree.
                </p>

                <p className="mt-6 text-gray-400 leading-relaxed">
                  The system integrates a 6-Node Intelligence Engine that
                  aggregates signals from transaction logs, industry market
                  indices, anomaly detection, default prediction models,
                  compliance text mining, and owner resilience profiling.
                </p>

                <p className="mt-6 text-gray-400 leading-relaxed">
                  This transforms bankers from reactive debt collectors into
                  strategic decision-makers by clearly distinguishing:
                  fraud, market downturn, operational stress, or structural instability.
                </p>

                <div className="mt-8 text-blue-400 text-sm">
                  ML Models · Risk Velocity Score · Anomaly Detection · NLP ·
                  Financial Indicators · Market Data Integration
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-10 px-6 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
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