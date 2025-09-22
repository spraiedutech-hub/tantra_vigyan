
'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

const symbols = [
  // Vashikarana (Control) - Spiral
  { d: "M 0 0 C 5 -5, -5 -10, 0 -15 C 5 -20, -5 -25, 0 -30", transform: "translate(150, 40)" },
  // Mohana (Attraction) - Heart/Lotus
  { d: "M 0 0 C -10 -10, 10 -10, 0 0 M -5 -5 C -15 -15, 0 -25, 5 -15", transform: "translate(225, 95)" },
  // Stambhana (Immobilization) - Square
  { d: "M -5 -5 L 5 -5 L 5 5 L -5 5 Z", transform: "translate(225, 205)" },
  // Vidveshana (Separation) - Two opposing arrows
  { d: "M -5 0 L 5 0 M 0 -5 L 0 5", transform: "translate(150, 260) rotate(45)" },
  // Uchhatana (Banishment) - Upward arrow
  { d: "M 0 5 L 0 -5 M -4 -2 L 0 -5 L 4 -2", transform: "translate(75, 205)" },
  // Marana (Destruction) - Downward triangle
  { d: "M 0 5 L -5 -5 L 5 -5 Z", transform: "translate(75, 95)" },
];

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.3, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.3, duration: 0.1 },
    },
  }),
};

// A custom component to handle the path animation for each particle
function AnimatedParticle({ path, index }: { path: string; index: number }) {
  const pathRef = React.useRef<SVGPathElement>(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    const animation = animate(progress, [0, 1], {
      delay: index * 0.5 + 1.5,
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    });
    return () => animation.stop();
  }, [progress, index]);

  const x = useTransform(progress, (value) => {
    return pathRef.current?.getPointAtLength(value * pathRef.current.getTotalLength()).x;
  });
  const y = useTransform(progress, (value) => {
    return pathRef.current?.getPointAtLength(value * pathRef.current.getTotalLength()).y;
  });

  return (
    <>
      <path d={path} ref={pathRef} style={{ display: 'none' }} />
      <motion.circle
        r="2"
        fill="hsl(var(--accent))"
        style={{ x, y }}
      />
    </>
  );
}


export default function ShatkarmaAnimation() {
  return (
    <div className="relative w-full h-80 md:h-96 flex items-center justify-center my-4 overflow-hidden rounded-lg bg-muted/30">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        <defs>
            <filter id="shatkarmaGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Central Orb */}
        <motion.circle
          cx="150"
          cy="150"
          r="15"
          fill="hsl(var(--primary))"
          filter="url(#shatkarmaGlow)"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Radiating Paths and Symbols */}
        {symbols.map((symbol, i) => {
          const [tx, ty] = symbol.transform.match(/-?\d+/g)!.map(Number);
          const linePath = `M 150 150 L ${tx} ${ty}`;
          return (
            <g key={i}>
              <motion.line
                x1="150"
                y1="150"
                x2={tx}
                y2={ty}
                stroke="hsl(var(--accent))"
                strokeWidth="0.5"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              />
              <motion.path
                d={symbol.d}
                transform={symbol.transform}
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                fill="none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.3 + 1, duration: 0.8 }}
              />
               <AnimatedParticle path={linePath} index={i} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
