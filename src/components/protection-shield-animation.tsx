
'use client';

import { motion } from 'framer-motion';

const Particle = ({ i }: { i: number }) => {
  const size = 10 + Math.random() * 8;
  const startAngle = Math.random() * 360;
  const startRadius = 140 + Math.random() * 20;
  const endRadius = 70 + Math.random() * 20;
  
  const startX = 150 + startRadius * Math.cos(startAngle * Math.PI / 180);
  const startY = 150 + startRadius * Math.sin(startAngle * Math.PI / 180);
  
  const endX = 150 + endRadius * Math.cos(startAngle * Math.PI / 180);
  const endY = 150 + endRadius * Math.sin(startAngle * Math.PI / 180);

  return (
    <motion.path
      d={`M -${size/2} 0 L 0 ${size/2} L ${size/2} 0 L 0 -${size/2} Z`}
      fill="hsl(var(--destructive))"
      initial={{ x: startX, y: startY, opacity: 0, rotate: Math.random() * 360 }}
      animate={{ x: [startX, endX, startX], y: [startY, endY, startY], opacity: [0, 0.7, 0] }}
      transition={{
        duration: 2 + Math.random() * 3,
        delay: i * 0.1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default function ProtectionShieldAnimation() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <filter id="shieldGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="shieldGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      
      {/* Particles Layer */}
      <g>
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} i={i} />
        ))}
      </g>
      
      {/* Shield Layer */}
      <g filter="url(#shieldGlow)">
        <motion.circle
          cx="150"
          cy="150"
          r="60"
          fill="url(#shieldGradient)"
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
            d="M 120 120 L 150 105 L 180 120 L 180 150 L 150 180 L 120 150 Z"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="2"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '150px 150px' }}
        />
        <text
            x="150" y="156"
            textAnchor="middle"
            fill="hsl(var(--primary-foreground))"
            fontSize="18"
            className="font-headline"
        >
            ॐ
        </text>
      </g>
    </svg>
  );
}
