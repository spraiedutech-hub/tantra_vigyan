
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const particleVariants = {
  initial: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: (Math.random() - 0.5) * 40,
    y: i * 20 - 100,
  }),
  animate: {
    opacity: 0,
    scale: [1, 0.5, 0],
    x: [null, (Math.random() - 0.5) * 80],
    y: [null, -150],
    transition: {
      duration: 3 + Math.random() * 2,
      ease: 'easeOut',
      delay: Math.random() * 2,
    },
  },
};

export default function PurificationAnimation() {
  const [isCleansing, setIsCleansing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCleansing((prev) => !prev);
    }, 5000); // Toggle cleansing state every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
             <linearGradient id="cleansingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
        </defs>
      <g transform="translate(100, 100)">
        {/* Silhouette */}
        <motion.path
            d="M 0,-60 C -30,-60 -40,-40 -40,-20 L -40,30 C -40,60 -30,80 0,80 C 30,80 40,60 40,30 L 40,-20 C 40,-40 30,-60 0,-60 Z"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1.5"
            initial={{ stroke: "hsl(var(--border))" }}
            animate={{ stroke: isCleansing ? "hsl(var(--primary))" : "hsl(var(--border))" }}
            transition={{ duration: 2 }}
        />
        <motion.circle cx="0" cy="-80" r="20" fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1.5"
            initial={{ stroke: "hsl(var(--border))" }}
            animate={{ stroke: isCleansing ? "hsl(var(--primary))" : "hsl(var(--border))" }}
            transition={{ duration: 2 }}
        />

        {/* Central Channel (Sushumna) */}
        <path d="M 0 -60 L 0 80" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="2 2" />

        {/* Dark particles (toxins) */}
        <AnimatePresence>
          {!isCleansing &&
            Array.from({ length: 10 }).map((_, i) => (
              <motion.circle
                key={`particle-${i}`}
                r={2 + Math.random() * 2}
                fill="hsl(var(--muted-foreground))"
                variants={particleVariants}
                initial="initial"
                exit="animate"
                custom={i}
              />
            ))}
        </AnimatePresence>

        {/* Cleansing Light */}
        <AnimatePresence>
            {isCleansing &&
                <motion.path 
                    d="M 0 80 L 0 -60"
                    stroke="url(#cleansingGradient)"
                    strokeWidth="8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{ pathLength: 0 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    style={{ filter: "drop-shadow(0 0 5px hsl(var(--primary)))" }}
                />
            }
        </AnimatePresence>

      </g>
    </svg>
  );
}
