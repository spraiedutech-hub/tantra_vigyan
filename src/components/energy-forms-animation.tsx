
'use client';

import { useMemo } from 'react';

export default function EnergyFormsAnimation() {
  const subtleBeings = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: `subtle-${i}`,
      rx: 60 + Math.random() * 30,
      ry: 60 + Math.random() * 30,
      duration: `${15 + Math.random() * 10}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  const negativeEntities = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => ({
      id: `neg-${i}`,
      startX: 10 + Math.random() * 80,
      startY: 85 + Math.random() * 15,
      endX: 10 + Math.random() * 80,
      endY: 85 + Math.random() * 15,
      duration: `${2 + Math.random() * 3}s`,
      delay: `${Math.random() * 4}s`,
    }));
  }, []);

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <radialGradient id="gradConsciousness" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </radialGradient>
        <filter id="energyGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Central Consciousness */}
      <circle cx="50" cy="50" r="8" fill="hsl(var(--accent))" className="animate-pulse-glow" />

      {/* Divine Energy Waves */}
      <g filter="url(#energyGlow)">
        <circle cx="50" cy="50" r="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-divine-wave" style={{ animationDelay: '0s' }}/>
        <circle cx="50" cy="50" r="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-divine-wave" style={{ animationDelay: '2s' }}/>
        <circle cx="50" cy="50" r="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-divine-wave" style={{ animationDelay: '4s' }}/>
      </g>
      
      {/* Subtle Beings */}
      <g>
        {subtleBeings.map(s => (
          <ellipse
            key={s.id}
            cx="50"
            cy="50"
            rx={s.rx}
            ry={s.ry}
            fill="none"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="0.3"
            strokeDasharray="3 5"
            className="animate-subtle-shimmer"
            style={{
              animationDuration: s.duration,
              animationDelay: s.delay,
              transformOrigin: '50px 50px'
            }}
          />
        ))}
      </g>

      {/* Negative Energies */}
      <g>
        {negativeEntities.map((n) => (
          <path
            key={n.id}
            d="M 0 0 L 5 2 L 2 5 L 0 0 Z"
            fill="hsl(var(--destructive))"
            className="animate-negative-jag"
            style={{
              '--start-x': `${n.startX}px`,
              '--start-y': `${n.startY}px`,
              '--end-x': `${n.endX}px`,
              '--end-y': `${n.endY}px`,
              animationDuration: n.duration,
              animationDelay: n.delay,
            } as React.CSSProperties}
          />
        ))}
      </g>
    </svg>
  );
}
