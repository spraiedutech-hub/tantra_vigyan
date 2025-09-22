
'use client';

import { motion } from 'framer-motion';

export default function JatakaBlueprintAnimation() {
  const planets = [
    { cx: 150, cy: 55 },
    { cx: 200, cy: 75 },
    { cx: 245, cy: 150 },
    { cx: 200, cy: 225 },
    { cx: 150, cy: 245 },
    { cx: 100, cy: 225 },
    { cx: 55, cy: 150 },
    { cx: 100, cy: 75 },
    { cx: 150, cy: 150 },
  ];

  const totalDuration = 8; // Total duration for one cycle

  const drawVariant = (delay: number, duration: number = 2) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, duration, ease: "easeInOut", repeat: Infinity, repeatDelay: totalDuration - duration - delay },
        opacity: { delay, duration: 0.1, repeat: Infinity, repeatDelay: totalDuration - 0.1 - delay }
      }
    }
  });
  
  const planetVariant = (delay: number) => ({
      hidden: { opacity: 0, scale: 0 },
      visible: { 
        opacity: [0, 1, 1, 0], 
        scale: [0, 1, 1, 0],
        transition: {
            delay,
            duration: totalDuration - delay,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
        }
    },
  });
  
  const structureVariant = (delay: number, duration: number = 1.5) => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: [0, 1, 1, 0],
        y: [20, 0, 0, 20],
        transition: {
            delay,
            duration,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: totalDuration - duration - delay
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
        <motion.path d="M 50 50 L 250 50 L 250 250 L 50 250 Z" variants={drawVariant(0.5, 1.5)} initial="hidden" animate="visible" />
        <motion.path d="M 50 50 L 250 250" variants={drawVariant(1, 1.5)} initial="hidden" animate="visible" />
        <motion.path d="M 250 50 L 50 250" variants={drawVariant(1, 1.5)} initial="hidden" animate="visible" />
        <motion.path d="M 150 50 L 50 150 L 150 250 L 250 150 Z" variants={drawVariant(1.5, 2)} initial="hidden" animate="visible" />
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
            variants={planetVariant(2.5 + i * 0.2)}
            initial="hidden"
            animate="visible"
          />
        ))}
      </g>
      
      {/* Temple structure building */}
      <g stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <motion.path d="M 100 220 L 200 220" variants={drawVariant(4.5, 1)} initial="hidden" animate="visible" />
        <motion.path d="M 110 220 L 110 160" variants={drawVariant(5, 1)} initial="hidden" animate="visible" />
        <motion.path d="M 190 220 L 190 160" variants={drawVariant(5, 1)} initial="hidden" animate="visible" />
        <motion.path d="M 100 160 L 200 160" variants={drawVariant(5.5, 1)} initial="hidden" animate="visible" />
        <motion.path d="M 90 160 L 150 110 L 210 160 Z" variants={drawVariant(6, 1)} initial="hidden" animate="visible" />
      </g>

      {/* Shivalingam appearing at the end */}
       <motion.g 
        transform="translate(150, 195) scale(0.6)" 
        fill="hsl(var(--accent))" 
        stroke="hsl(var(--accent))" 
        strokeWidth="2" 
        variants={structureVariant(6.5, 1.5)}
        initial="hidden"
        animate="visible"
       >
        <path d="M -25,20 A 25,10 0 0,0 25,20 Z" />
        <path d="M -15,20 Q 0,30 15,20 L 15,5 Q 0,-20 -15,5 Z" />
      </motion.g>
    </svg>
  );
}
