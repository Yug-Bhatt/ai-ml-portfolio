"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 35, // ↓ less particles
          },
          color: {
            value: "#3b82f6",
          },
          links: {
            enable: true,
            color: "#3b82f6",
            distance: 160,
            opacity: 0.15, // ↓ softer
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6, // ↓ slower = premium
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 0.25, // ↓ much softer
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}