
'use client';

import { motion } from 'framer-motion';

const Coin = ({ i }: { i: number }) => {
  const x = 5 + i * 10;
  const duration = 2 + Math.random() * 3;
  const delay = Math.random() * 5;

  return (
    <motion.g
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 280,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
      transform={`translate(${x})`}
    >
      <circle r="4" fill="hsl(var(--primary))" className="opacity-70" />
      <text y="2" textAnchor="middle" fontSize="5" fill="hsl(var(--primary-foreground))">
        ₹
      </text>
    </motion.g>
  );
};


export default function WealthFlowAnimation() {
  const coinCount = 28;
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <filter id="yantraGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Yantra Geometry */}
      <g stroke="hsl(var(--primary))" fill="none" strokeWidth="0.75" filter="url(#yantraGlow)" transform="translate(0 30) scale(0.6)">
        <g className="animate-yantra-pulse">
          {/* Downward (Shakti) */}
          <path d="M 150 25 L 50 190 L 250 190 Z" />
          <path d="M 150 55 L 75 180 L 225 180 Z" />
          <path d="M 150 78 L 95 175 L 205 175 Z" />
          <path d="M 150 100 L 118 168 L 182 168 Z" />
          {/* Upward (Shiva) */}
          <path d="M 150 275 L 50 110 L 250 110 Z" />
          <path d="M 150 240 L 80 125 L 220 125 Z" />
          <path d="M 150 220 L 100 135 L 200 135 Z" />
          <path d="M 150 200 L 120 142 L 180 142 Z" />
        </g>
        
        {/* Bindu (Center Point) */}
        <circle cx="150" cy="150" r="3" fill="hsl(var(--primary))" className="animate-pulse-glow-strong" />
      </g>

      {/* Falling Coins */}
      <g>
        {Array.from({ length: coinCount }).map((_, i) => (
          <Coin key={i} i={i} />
        ))}
      </g>

    </svg>
  );
}
