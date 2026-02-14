"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur border-b border-blue-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <span className="text-white font-bold text-lg whitespace-nowrap">
          Yug Bhatt
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#certifications" className="hover:text-blue-400 transition">Certifications</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#020617] text-gray-300 px-6 pb-4 space-y-3">
          <a href="#home" className="block hover:text-blue-400">Home</a>
          <a href="#about" className="block hover:text-blue-400">About</a>
          <a href="#skills" className="block hover:text-blue-400">Skills</a>
          <a href="#projects" className="block hover:text-blue-400">Projects</a>
          <a href="#certifications" className="block hover:text-blue-400">
            Certifications
          </a>
          <a href="#contact" className="block hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
}