
'use client';

export default function WealthFlowAnimation() {
  const particleCount = 40;

  return (
    <svg viewBox="0 0 300 400" className="w-full h-full">
      <defs>
        <radialGradient id="gradWealthSource" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <filter id="wealthGlow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Wealth Source (Shreem Bija Mantra) */}
      <g transform="translate(150, 80)">
        <circle r="40" fill="url(#gradWealthSource)" className="animate-pulse-slow" />
        <text
          x="0"
          y="12"
          textAnchor="middle"
          fill="hsl(var(--primary-foreground))"
          fontSize="32"
          className="font-headline animate-pulse-glow"
          filter="url(#wealthGlow)"
        >
          श्रीं
        </text>
      </g>
      
      {/* Flowing Wealth Particles */}
      <g>
        {Array.from({ length: particleCount }).map((_, i) => (
          <circle
            key={`particle-${i}`}
            r={1.5 + Math.random() * 2}
            fill="hsl(var(--primary))"
            className="animate-wealth-flow"
            style={{
                '--start-x': `${150 + (Math.random() - 0.5) * 80}px`,
                '--start-y': '80px',
                '--end-x': `${150 + (Math.random() - 0.5) * 250}px`,
                '--end-y': '400px',
                '--control-x1': `${150 + (Math.random() - 0.5) * 150}px`,
                '--control-y1': `${150 + Math.random() * 50}px`,
                '--control-x2': `${150 + (Math.random() - 0.5) * 200}px`,
                '--control-y2': `${250 + Math.random() * 50}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
            } as React.CSSProperties}
          />
        ))}
      </g>
    </svg>
  );
}
