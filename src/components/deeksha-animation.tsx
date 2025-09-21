
'use client';

export default function DeekshaAnimation() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <filter id="guruGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="gradGuru" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gradDisciple" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Guru Figure (Larger) */}
      <g transform="translate(60, 100) scale(1.2)">
        <circle cx="0" cy="-20" r="15" fill="hsl(var(--primary))" />
        <path
          d="M -25 0 C -25 30, 25 30, 25 0 Z"
          fill="hsl(var(--primary))"
        />
        <circle cx="0" cy="0" r="40" fill="url(#gradGuru)" className="animate-pulse-slow" />
        {/* Open Palm */}
        <path d="M 20 -5 C 25 -10, 35 -5, 35 5 C 35 15, 25 20, 20 15 Z" fill="hsl(var(--primary))" />
      </g>
      
      {/* Disciple Figure (Smaller) */}
      <g transform="translate(240, 110) scale(0.8)">
        <circle cx="0" cy="-20" r="15" fill="hsl(var(--accent))" />
        <path
          d="M -25 0 C -25 30, 25 30, 25 0 Z"
          fill="hsl(var(--accent))"
        />
         <circle cx="0" cy="0" r="40" fill="url(#gradDisciple)" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }}/>
      </g>
      
      {/* Energy Transfer Path */}
      <path
        id="energyPath"
        d="M 100 85 C 150 50, 170 150, 232 94"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="0.5"
        strokeDasharray="2 2"
      />

      {/* Energy Particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <circle
          key={i}
          r="2.5"
          fill="hsl(var(--primary))"
          className="animate-pulse-glow-strong"
          style={{ animationDelay: `${i * 0.6}s` }}
        >
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M 100 85 C 150 50, 170 150, 232 94"
          />
        </circle>
      ))}

      {/* Sahasrara glow on disciple */}
      <circle cx="240" cy="94" r="10" fill="hsl(var(--primary))" className="animate-pulse-glow-strong" style={{ animationDuration: '4s' }} />

    </svg>
  );
}
