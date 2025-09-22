
'use client';

import { motion } from 'framer-motion';

export default function JatakaBlueprintAnimation() {
  const planets = [
    { cx: 150, cy: 55, delay: "3s" },
    { cx: 200, cy: 75, delay: "3.2s" },
    { cx: 245, cy: 150, delay: "3.4s" },
    { cx: 200, cy: 225, delay: "3.6s" },
    { cx: 150, cy: 245, delay: "3.8s" },
    { cx: 100, cy: 225, delay: "4s" },
    { cx: 55, cy: 150, delay: "4.2s" },
    { cx: 100, cy: 75, delay: "4.4s" },
    { cx: 150, cy: 150, delay: "4.6s" },
  ];

  const drawVariant = (delay: number, duration: number = 2) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, duration, ease: "easeInOut" },
        opacity: { delay, duration: 0.1 }
      }
    }
  });

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <linearGradient id="gradBlueprint" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--muted))" />
          <stop offset="100%" stopColor="hsl(var(--background))" />
        </linearGradient>
        <filter id="blueprintGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>

      {/* Blueprint background */}
      <rect width="300" height="300" fill="url(#gradBlueprint)" />
      
      {/* Horoscope Chart Lines */}
      <g stroke="hsl(var(--primary))" strokeWidth="1" filter="url(#blueprintGlow)">
        <motion.path d="M 50 50 L 250 50 L 250 250 L 50 250 Z" variants={drawVariant(0.5)} initial="hidden" animate="visible" />
        <motion.path d="M 50 50 L 250 250" variants={drawVariant(1)} initial="hidden" animate="visible" />
        <motion.path d="M 250 50 L 50 250" variants={drawVariant(1)} initial="hidden" animate="visible" />
        <motion.path d="M 150 50 L 50 150 L 150 250 L 250 150 Z" variants={drawVariant(1.5)} initial="hidden" animate="visible" />
      </g>

      {/* Planets appearing */}
      <g>
        {planets.map((planet, i) => (
          <motion.circle 
            key={i} 
            cx={planet.cx} 
            cy={planet.cy} 
            r="4" 
            fill="hsl(var(--accent))" 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5 + i * 0.2 }}
          />
        ))}
      </g>
      
      {/* Temple structure building */}
      <g stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <motion.path d="M 100 220 L 200 220" variants={drawVariant(4)} initial="hidden" animate="visible" />
        <motion.path d="M 110 220 L 110 160" variants={drawVariant(4.5)} initial="hidden" animate="visible" />
        <motion.path d="M 190 220 L 190 160" variants={drawVariant(4.5)} initial="hidden" animate="visible" />
        <motion.path d="M 100 160 L 200 160" variants={drawVariant(5)} initial="hidden" animate="visible" />
        <motion.path d="M 90 160 L 150 110 L 210 160 Z" variants={drawVariant(5.5)} initial="hidden" animate="visible" />
      </g>

      {/* Shivalingam appearing at the end */}
       <motion.g 
        transform="translate(150, 195) scale(0.6)" 
        fill="hsl(var(--accent))" 
        stroke="hsl(var(--accent))" 
        strokeWidth="2" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 6.5 }}
       >
        <path d="M -25,20 A 25,10 0 0,0 25,20 Z" />
        <path d="M -15,20 Q 0,30 15,20 L 15,5 Q 0,-20 -15,5 Z" />
      </motion.g>
    </svg>
  );
}
