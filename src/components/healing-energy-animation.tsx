
'use client';

import { motion } from 'framer-motion';

export default function HealingEnergyAnimation() {
  const particleCount = 25;
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const angle = (i / particleCount) * Math.PI * 2;
    const startRadius = 20;
    const endRadius = 130 + Math.random() * 20;

    return {
      cx: 150 + startRadius * Math.cos(angle),
      cy: 150 + startRadius * Math.sin(angle),
      path: `M ${150 + startRadius * Math.cos(angle)} ${150 + startRadius * Math.sin(angle)} Q ${150 + (endRadius / 2) * Math.cos(angle + (Math.random() - 0.5))} ${150 + (endRadius / 2) * Math.sin(angle + (Math.random() - 0.5))}, ${150 + endRadius * Math.cos(angle)} ${150 + endRadius * Math.sin(angle)}`,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 4,
    };
  });

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <filter id="healingGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="healingGradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      
      {/* Central Heart/Source of Energy */}
      <g filter="url(#healingGlow)">
        <motion.path
          d="M150 165 C 140 175, 120 175, 110 165 C 90 145, 110 120, 150 140 C 190 120, 210 145, 190 165 C 180 175, 160 175, 150 165 Z"
          fill="url(#healingGradient)"
          animate={{ scale: [1, 1.1, 1], y: [0, -5, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </g>

      {/* Radiating Energy Particles */}
      <g>
        {particles.map((p, i) => (
          <motion.circle
            key={i}
            r={1.5 + Math.random()}
            fill="url(#healingGradient)"
            initial={{ offsetDistance: "0%", opacity: 1 }}
            animate={{ offsetDistance: "100%", opacity: 0 }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <animateMotion dur={`${p.duration}s`} repeatCount="indefinite">
              <mpath href={`#particlePath${i}`} />
            </animateMotion>
          </motion.circle>
        ))}
        {/* Invisible paths for motion */}
        <g style={{ display: 'none' }}>
           {particles.map((p, i) => (
            <path id={`particlePath${i}`} d={p.path} key={i} />
           ))}
        </g>
      </g>
    </svg>
  );
}
