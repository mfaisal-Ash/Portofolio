import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // loadSlim sudah cukup untuk kebutuhan efek partikel di komponen ini,
      // dan menghasilkan bundle size yang jauh lebih kecil daripada loadFull/loadAll
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // jangan render sebelum engine tsParticles selesai di-init
  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            push: {
              distance: 200,
              duration: 15,
            },
            grab: {
              distance: 150,
            },
          },
        },
        particles: {
          color: {
            value: "#243642",
          },
          links: {
            color: "#243642",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 150,
          },
          opacity: {
            value: 1.0,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
