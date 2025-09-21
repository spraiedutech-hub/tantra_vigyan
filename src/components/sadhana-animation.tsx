
'use client';

export default function SadhanaAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="gradLotus" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Pulsating background glow */}
      <circle cx="100" cy="100" r="80" fill="url(#gradLotus)" className="animate-pulse-slow" />

      <g transform="translate(100, 100)" filter="url(#glow)">
        {/* Outer Lotus Petals - Rotating */}
        <g className="animate-sadhana-rotate">
            {Array.from({ length: 12 }).map((_, i) => (
            <path
                key={`outer-${i}`}
                d="M 0 -80 C 20 -60, 20 -20, 0 0 C -20 -20, -20 -60, 0 -80 Z"
                transform={`rotate(${i * 30})`}
                fill="hsl(var(--primary))"
                className="opacity-50 animate-sadhana-breathe-outer"
                style={{ transformOrigin: '0 0', animationDelay: `${i * 100}ms` }}
            />
            ))}
        </g>

        {/* Inner Lotus Petals - Counter-Rotating */}
        <g className="animate-sadhana-rotate-reverse">
            {Array.from({ length: 8 }).map((_, i) => (
            <path
                key={`inner-${i}`}
                d="M 0 -50 C 15 -40, 15 -15, 0 0 C -15 -15, -15 -40, 0 -50 Z"
                transform={`rotate(${i * 45 + 22.5})`}
                fill="hsl(var(--accent))"
                className="opacity-70 animate-sadhana-breathe-inner"
                style={{ transformOrigin: '0 0', animationDelay: `${i * 150}ms` }}
            />
            ))}
        </g>

        {/* Center */}
        <circle cx="0" cy="0" r="10" fill="hsl(var(--accent))" className="animate-pulse-glow" />
         <text x="0" y="4" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="12" className="font-headline">
            ॐ
        </text>
      </g>
    </svg>
  );
}
