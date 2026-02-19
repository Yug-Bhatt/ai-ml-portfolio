"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-32 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold leading-tight">
            Transmit Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Signal
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Currently exploring AI/ML internship opportunities and ambitious
            projects focused on intelligent systems and predictive modeling.
            Let’s build something impactful.
          </p>

          <div className="mt-10 space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-400" size={20} />
              <span>yugbhatt75@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-400" size={20} />
              <span>+91 7600634214</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-400" size={20} />
              <span>Nadiad, Gujarat, India</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            p-10
            shadow-2xl
          "
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-8">
            Initiate Communication
          </h3>

          <div className="space-y-8">

            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                bg-transparent
                border-b border-white/20
                focus:border-blue-400
                outline-none
                pb-2
                text-white
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                bg-transparent
                border-b border-white/20
                focus:border-blue-400
                outline-none
                pb-2
                text-white
              "
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="
                w-full
                bg-transparent
                border-b border-white/20
                focus:border-blue-400
                outline-none
                pb-2
                text-white
                resize-none
              "
            />

            {/* WORKING BUTTON */}
            <a
              href="mailto:yugbhatt75@gmail.com?subject=AI%20Collaboration%20Opportunity&body=Hi%20Yug,%0D%0A%0D%0AI%20would%20like%20to%20connect..."
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                gap-3
                w-full
                px-6
                py-4
                rounded-xl
                bg-gradient-to-r from-blue-500 to-cyan-500
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                shadow-lg shadow-blue-500/30
                text-white
                font-semibold
              "
            >
              <Send size={18} />
              Send Transmission
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}