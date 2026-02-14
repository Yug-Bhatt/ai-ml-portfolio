"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: "transparent",
          },
          particles: {
            number: {
              value: 80,
            },
            color: {
              value: "#3b82f6",
            },
            links: {
              enable: true,
              color: "#3b82f6",
              distance: 140,
              opacity: 0.4,
              width: 1,
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
      />
    </div>
  );
}