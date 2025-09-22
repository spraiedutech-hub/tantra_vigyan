
'use client';

import { motion } from 'framer-motion';

const Wave = ({ delay, duration }: { delay: number; duration: number }) => {
  return (
    <motion.circle
      cx="150"
      cy="150"
      r="20"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="1"
      initial={{ r: 20, opacity: 1 }}
      animate={{ r: 140, opacity: 0 }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
};

export default function MantraVibrationAnimation() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <filter id="mantraGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Pulsating Waves */}
      <g>
        <Wave delay={0} duration={4} />
        <Wave delay={1} duration={4} />
        <Wave delay={2} duration={4} />
        <Wave delay={3} duration={4} />
      </g>

      {/* Central Om Symbol */}
      <g filter="url(#mantraGlow)">
        <motion.text
          x="150"
          y="165"
          textAnchor="middle"
          fontSize="60"
          fill="hsl(var(--accent))"
          className="font-headline"
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          ॐ
        </motion.text>
      </g>
    </svg>
  );
}
