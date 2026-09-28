import React, { useEffect, useState } from 'react';

export default function AmbientPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate 18 floating petal elements with random speeds, sizes, delays, and petal styles
    const types = ['marigold', 'rose', 'mogra'];
    const generated = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      type: types[i % types.length],
      left: Math.random() * 100, // percentage across width
      size: 14 + Math.random() * 16, // px
      duration: 9 + Math.random() * 8, // seconds
      delay: Math.random() * 8, // seconds
      sway: 15 + Math.random() * 30, // px
      rotation: Math.random() * 360
    }));

    setPetals(generated);
  }, []);

  return (
    <div className="ambient-petals-system" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className={`floating-petal petal-${petal.type}`}
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotation}deg)`
          }}
        />
      ))}

      <style>{`
        .ambient-petals-system {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999;
          overflow: hidden;
        }

        .floating-petal {
          position: absolute;
          top: -40px;
          border-radius: 50% 0 50% 50%;
          opacity: 0.72;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
          animation-name: petalFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .petal-marigold {
          background: radial-gradient(circle, #FFA500 20%, #E67E22 100%);
        }

        .petal-rose {
          background: radial-gradient(circle, #E4007C 20%, #A3004C 100%);
          border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
        }

        .petal-mogra {
          background: radial-gradient(circle, #FFFFF0 40%, #FFE4B5 100%);
          border-radius: 50% 50% 50% 0;
          opacity: 0.6;
        }

        @keyframes petalFall {
          0% {
            top: -40px;
            transform: translateX(0) rotate(0deg) scale(0.9);
            opacity: 0;
          }
          10% {
            opacity: 0.75;
          }
          90% {
            opacity: 0.75;
          }
          100% {
            top: 105vh;
            transform: translateX(50px) rotate(360deg) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
