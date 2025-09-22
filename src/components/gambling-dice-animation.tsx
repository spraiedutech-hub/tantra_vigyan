
'use client';

import { motion } from 'framer-motion';

const Dice = ({
  initialX,
  initialY,
  delay,
}: {
  initialX: number;
  initialY: number;
  delay: number;
}) => {
  return (
    <motion.g
      initial={{ x: initialX, y: initialY, rotate: 0, scale: 0.5 }}
      animate={{
        x: [initialX, initialX + 20, initialX - 20, initialX],
        y: [initialY, initialY - 30, initialY + 30, initialY],
        rotate: [0, 180, -180, 0],
        scale: [0.5, 1, 1, 0.5],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <rect x="-20" y="-20" width="40" height="40" rx="5" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
      {/* Dice dots */}
      <circle cx="-10" cy="-10" r="3" fill="hsl(var(--primary))" />
      <circle cx="10" cy="10" r="3" fill="hsl(var(--primary))" />
      <circle cx="10" cy="-10" r="3" fill="hsl(var(--primary))" />
      <circle cx="-10" cy="10" r="3" fill="hsl(var(--primary))" />
    </motion.g>
  );
};

const symbols = [
    { text: '♃', x: 50, y: 50, size: 20 },   // Jupiter
    { text: '♀', x: 250, y: 80, size: 15 },  // Venus
    { text: '☿', x: 80, y: 220, size: 12 }, // Mercury
    { text: '♄', x: 220, y: 250, size: 18 }, // Saturn
    { text: '♂', x: 280, y: 150, size: 16 }  // Mars
];


export default function GamblingDiceAnimation() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <radialGradient id="gradCosmic" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="300" height="300" fill="transparent" />
      <circle cx="150" cy="150" r="150" fill="url(#gradCosmic)" className="animate-pulse-slow" />

      {/* Astrological Symbols */}
      <g>
        {symbols.map((s, i) => (
          <motion.text
            key={i}
            x={s.x}
            y={s.y}
            fontSize={s.size}
            fill="hsl(var(--primary))"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{
              duration: 6,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {s.text}
          </motion.text>
        ))}
      </g>

      {/* Tumbling Dice */}
      <Dice initialX={120} initialY={150} delay={0} />
      <Dice initialX={180} initialY={150} delay={2} />
    </svg>
  );
}
