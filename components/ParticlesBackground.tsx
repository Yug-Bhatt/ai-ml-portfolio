"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#60a5fa",
          },
          links: {
            enable: true,
            color: "#60a5fa",
            distance: 120,
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 3,
          },
          opacity: {
            value: 0.6,
          },
        },
      }}
      className="fixed inset-0 z-0"
    />
  );
}