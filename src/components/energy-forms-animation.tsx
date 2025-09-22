
'use client';

import { useMemo } from 'react';

export default function EnergyFormsAnimation() {
  const particles = useMemo(() => {
    const particleArray = [];
    // Divine particles (golden, upward float)
    for (let i = 0; i < 15; i++) {
      particleArray.push({
        type: 'divine',
        cx: 5 + Math.random() * 90,
        cy: 50 + Math.random() * 50,
        r: 1 + Math.random() * 1.5,
        duration: `${8 + Math.random() * 8}s`,
        delay: `${Math.random() * 10}s`,
        fill: 'hsl(var(--primary))',
        animationClass: 'animate-divine-float',
      });
    }
    // Subtle particles (silvery, whimsical drift)
    for (let i = 0; i < 15; i++) {
      particleArray.push({
        type: 'subtle',
        cx: 20 + Math.random() * 60,
        cy: 40 + Math.random() * 20,
        r: 0.8 + Math.random(),
        duration: `${10 + Math.random() * 10}s`,
        delay: `${Math.random() * 12}s`,
        fill: 'hsl(var(--muted-foreground))',
        animationClass: 'animate-subtle-drift',
      });
    }
    // Negative particles (dark, erratic darting)
    for (let i = 0; i < 10; i++) {
      particleArray.push({
        type: 'negative',
        cx: 10 + Math.random() * 80,
        cy: 90 + Math.random() * 5,
        r: 1 + Math.random() * 0.5,
        duration: `${4 + Math.random() * 4}s`,
        delay: `${Math.random() * 6}s`,
        fill: 'hsl(var(--destructive))',
        animationClass: 'animate-negative-dart',
      });
    }
    return particleArray;
  }, []);

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <radialGradient id="gradConsciousness" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Consciousness */}
      <circle cx="50" cy="50" r="10" fill="url(#gradConsciousness)" className="animate-pulse-glow" />
      <circle cx="50" cy="50" r="5" fill="hsl(var(--accent))" />

      {/* Energy Particles */}
      <g>
        {particles.map((p, i) => (
          <circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={p.fill}
            className={p.animationClass}
            style={{
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </g>
    </svg>
  );
}
