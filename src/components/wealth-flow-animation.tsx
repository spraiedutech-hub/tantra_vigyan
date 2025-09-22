
'use client';

export default function WealthFlowAnimation() {
  const coinCount = 30;

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
      <g transform="translate(150, 80)" className="animate-rotate-slow">
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
      
      {/* Pot of Gold */}
      <g transform="translate(150, 350)">
        <path d="M -60 0 C -60 -40, 60 -40, 60 0 Q 50 10, -50 10 Z" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
        <ellipse cx="0" cy="0" rx="60" ry="15" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
      </g>
      
      {/* Overflowing Coins */}
       <g fill="hsl(var(--primary))">
          <circle cx="150" cy="340" r="10" />
          <circle cx="130" cy="345" r="12" />
          <circle cx="170" cy="345" r="11" />
          <circle cx="155" cy="355" r="9" />
          <circle cx="115" cy="350" r="10" />
          <circle cx="185" cy="350" r="8" />
       </g>

      {/* Falling Coins */}
      <g>
        {Array.from({ length: coinCount }).map((_, i) => (
          <circle
            key={`coin-${i}`}
            r={4 + Math.random() * 4}
            fill="hsl(var(--primary))"
            className="animate-coin-fall"
            style={{
                '--start-x': `${150 + (Math.random() - 0.5) * 80}px`,
                '--end-y': `${350 + Math.random() * 20}px`,
                '--delay': `${Math.random() * 5}s`,
                '--duration': `${2 + Math.random() * 3}s`,
            } as React.CSSProperties}
          />
        ))}
      </g>
    </svg>
  );
}
