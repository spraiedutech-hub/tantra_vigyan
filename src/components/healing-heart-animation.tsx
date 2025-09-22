
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const particleVariants = {
  initial: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
  },
  animate: (i: number) => ({
    opacity: 0,
    scale: [1, 1.5, 0.5],
    x: (Math.random() - 0.5) * 200,
    y: [0, -50, -150 - Math.random() * 50],
    transition: {
      duration: 2 + Math.random() * 2,
      ease: 'easeOut',
      delay: i * 0.05,
    },
  }),
};

export default function HealingHeartAnimation() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const sequence = [
      () => setStage(1), // Show cracked heart
      () => setStage(2), // Release particles
      () => setStage(3), // Show healing
      () => setStage(4), // Show healed heart
      () => setStage(0), // Reset
    ];
    let currentIndex = 0;
    const interval = setInterval(() => {
      sequence[currentIndex]();
      currentIndex = (currentIndex + 1) % sequence.length;
    }, 3000); // Change stage every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-48 h-48">
        <defs>
            <linearGradient id="healedGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
             <filter id="heartGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        <g transform="translate(100, 100)">
            {/* Base Heart Shape */}
             <motion.path
                d="M0 20 L-30 -10 C-60 -40, -30 -70, 0 -50 C30 -70, 60 -40, 30 -10 Z"
                initial={{ fill: "hsl(var(--muted))" }}
                animate={{
                    fill: stage >= 3 ? "url(#healedGradient)" : "hsl(var(--muted))"
                }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                filter="url(#heartGlow)"
            />
            
            {/* Crack Animation */}
            <AnimatePresence>
            {stage === 1 && (
                <motion.path
                    d="M 0 -50 L -5 -20 L 5 0 L 0 20"
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                />
            )}
            </AnimatePresence>

            {/* Particle Release */}
             <AnimatePresence>
                {stage === 2 && Array.from({ length: 15 }).map((_, i) => (
                    <motion.circle
                        key={i}
                        cx="0"
                        cy="-10"
                        r={2 + Math.random() * 2}
                        fill="hsl(var(--destructive))"
                        variants={particleVariants}
                        initial="initial"
                        animate="animate"
                        custom={i}
                    />
                ))}
            </AnimatePresence>

             {/* Healing Light / Healed state glow */}
             <AnimatePresence>
             {stage >= 3 && (
                 <motion.circle
                    r="30"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
                    transition={{ duration: 2, ease: 'circOut' }}
                    className="fill-primary/50"
                 />
             )}
             </AnimatePresence>

        </g>
      </svg>
    </div>
  );
}
