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
            value: 120, // MORE particles
            density: {
              enable: true,
              area: 800,
            },
          },

          color: {
            value: ["#3b82f6", "#60a5fa", "#2563eb"], // multi-tone blue
          },

          links: {
            enable: true,
            color: "#3b82f6",
            distance: 130,
            opacity: 0.6, // brighter lines
            width: 1.5,
          },

          move: {
            enable: true,
            speed: 1.5, // slightly faster
          },

          size: {
            value: 3.5, // bigger dots
          },

          opacity: {
            value: 0.8, // less dull
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 1,
              },
            },
          },
        },
      }}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}