
'use client';

import { motion } from 'framer-motion';

export default function MarketGraphAnimation() {
  const planets = [
    { cx: 150, cy: 70, r: 8, duration: '12s', color: 'hsl(var(--primary))' },
    { cx: 230, cy: 150, r: 5, duration: '20s', color: 'hsl(var(--accent))' },
    { cx: 70, cy: 150, r: 6, duration: '15s', color: 'hsl(var(--muted-foreground))' },
  ];

  return (
    <svg viewBox="0 0 300 250" className="w-full h-full">
      <defs>
        <linearGradient id="gridGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--border))" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(var(--border))" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="graphGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background Grid */}
      <g>
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" x2="300" y1={100 + i * 15} y2={100 + i * 15} stroke="url(#gridGradient)" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 15} x2={i * 15} y1="100" y2="250" stroke="url(#gridGradient)" strokeWidth="0.5" />
        ))}
      </g>

      {/* Graph line and area */}
      <g>
        <motion.path
          d="M 0 200 C 50 150, 80 220, 120 180 S 180 120, 220 160 S 270 200, 300 170"
          fill="url(#graphGradient)"
          stroke="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.path
          d="M 0 200 C 50 150, 80 220, 120 180 S 180 120, 220 160 S 270 200, 300 170"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
      </g>
      
      {/* Planets and Orbits */}
      <g>
        {planets.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill={p.color}
              className="animate-market-planet-pulse"
              style={{ animationDelay: `${i * 1}s` }}
            />
            <circle
              cx={p.cx}
              cy={p.cy}
              r={p.r + 15}
              fill="none"
              stroke={p.color}
              strokeWidth="0.5"
              strokeDasharray="2 3"
              className="animate-orbit"
              style={{ transformOrigin: `${p.cx}px ${p.cy}px`, animationDuration: p.duration }}
            />
          </g>
        ))}
      </g>

      {/* Connecting lines */}
      <g>
         <motion.line
            x1="150" y1="70" x2="160" y2="150"
            stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="2 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
         />
          <motion.line
            x1="230" y1="150" x2="220" y2="160"
            stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="2 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
         />
      </g>
    </svg>
  );
}
