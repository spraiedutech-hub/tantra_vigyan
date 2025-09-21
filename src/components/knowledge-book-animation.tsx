
'use client';

export default function KnowledgeBookAnimation() {
  const scriptLines = [
    { d: "M 30 65 Q 70 60, 110 65", delay: "0s" },
    { d: "M 30 75 Q 70 70, 110 75", delay: "0.5s" },
    { d: "M 30 85 Q 70 80, 110 85", delay: "1s" },
    { d: "M 30 95 Q 70 90, 110 95", delay: "1.5s" },
    { d: "M 140 65 Q 180 60, 220 65", delay: "2s" },
    { d: "M 140 75 Q 180 70, 220 75", delay: "2.5s" },
    { d: "M 140 85 Q 180 80, 220 85", delay: "3s" },
    { d: "M 140 95 Q 180 88, 220 95", delay: "3.5s" },
  ];

  return (
    <svg viewBox="0 0 250 200" className="w-full h-full">
      <defs>
        <filter id="tableGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Wooden Table */}
      <path
        d="M 10 180 L 240 180 L 220 110 L 30 110 Z"
        fill="hsl(var(--muted))"
        stroke="hsl(var(--border))"
        strokeWidth="1.5"
        filter="url(#tableGlow)"
      />

      {/* Open Book */}
      <g transform="translate(125, 120) rotate(-10)">
        {/* Book cover */}
        <path d="M 20 -70 L 110 -60 L 115 40 L 25 50 Z" fill="hsl(var(--primary))" />
        <path d="M -20 -70 L -110 -60 L -115 40 L -25 50 Z" fill="hsl(var(--primary))" />
        {/* Pages */}
        <path d="M 15 -65 L 105 -55 L 110 35 L 20 45 Z" fill="hsl(var(--card))" />
        <path d="M -15 -65 L -105 -55 L -110 35 L -20 45 Z" fill="hsl(var(--card))" />
        {/* Center line */}
        <line x1="0" y1="-62" x2="0" y2="40" stroke="hsl(var(--border))" strokeWidth="1" />
      </g>
      
      {/* Animated Sanskrit-like lines */}
      <g transform="translate(0, -10)">
        {scriptLines.map((line, index) => (
          <path
            key={index}
            d={line.d}
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            className="animate-script-fade"
            style={{ animationDelay: line.delay, animationDuration: '4s' }}
          />
        ))}
      </g>
    </svg>
  );
}
