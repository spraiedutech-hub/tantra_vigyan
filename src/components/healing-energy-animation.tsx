
'use client';

export default function HealingEnergyAnimation() {
  const particleCount = 50;

  return (
    <svg viewBox="0 0 300 400" className="w-full h-full">
      <defs>
        <radialGradient id="gradHealthy" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gradBlockage" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--destructive))" stopOpacity="0" />
        </radialGradient>
        <filter id="auraGlow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Practitioner Silhouette */}
      <path
        d="M150 150 C 120 150, 110 180, 110 200 L 110 280 C 110 320, 100 350, 80 360 A 40 40 0 0 0 100 380 L 200 380 A 40 40 0 0 0 220 360 C 200 350, 190 320, 190 280 L 190 200 C 190 180, 180 150, 150 150 Z"
        fill="hsl(var(--muted))"
        className="opacity-20"
      />
      <circle cx="150" cy="120" r="30" fill="hsl(var(--muted))" className="opacity-20" />
      
      {/* Aura */}
      <ellipse cx="150" cy="250" rx="90" ry="140" fill="url(#gradHealthy)" className="animate-aura-pulse" filter="url(#auraGlow)" />

      {/* Prana Flow Particles */}
      <g>
        {Array.from({ length: particleCount }).map((_, i) => (
          <circle
            key={`particle-${i}`}
            r={1 + Math.random()}
            fill="hsl(var(--primary))"
            className="animate-prana-particle"
            style={{
                '--start-x': `${150 + (Math.random() - 0.5) * 100}px`,
                '--start-y': `${380 + Math.random() * 50}px`,
                '--end-x': `${150 + (Math.random() - 0.5) * 100}px`,
                '--end-y': `${50 - Math.random() * 50}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
            } as React.CSSProperties}
          />
        ))}
      </g>
      
      {/* Energy Blockage */}
      <ellipse cx="170" cy="220" rx="20" ry="30" fill="url(#gradBlockage)" className="animate-blockage-pulse" />
      
       {/* Healing Light */}
       <g className="animate-healing-light-appear">
        <circle cx="150" cy="50" r="15" fill="hsl(var(--accent))" filter="url(#auraGlow)" />
        <path d="M 150 65 L 170 220 L 130 220 Z" fill="hsl(var(--accent))" opacity="0.5" />
      </g>
    </svg>
  );
}
