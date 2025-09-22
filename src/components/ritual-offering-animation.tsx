
'use client';

import { motion } from 'framer-motion';

const petalVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (i: number) => ({
    opacity: [0, 1, 1, 0],
    scale: [0.5, 1, 1, 0.5],
    transition: {
      duration: 4,
      ease: "easeInOut",
      delay: i * 0.4,
      repeat: Infinity,
      repeatDelay: 8,
    },
  }),
};

export default function RitualOfferingAnimation() {
  const petalCount = 8;
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <filter id="offeringGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Central Light */}
      <motion.circle
        cx="100"
        cy="100"
        r="8"
        fill="hsl(var(--accent))"
        filter="url(#offeringGlow)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Unfurling Petals */}
      <g transform="translate(100, 100)">
        {Array.from({ length: petalCount }).map((_, i) => (
          <motion.path
            key={i}
            d="M 0 0 C 20 -30, 40 -60, 0 -80 C -40 -60, -20 -30, 0 0"
            fill="hsl(var(--primary))"
            transform={`rotate(${(i * 360) / petalCount})`}
            variants={petalVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          />
        ))}
      </g>
    </svg>
  );
}
