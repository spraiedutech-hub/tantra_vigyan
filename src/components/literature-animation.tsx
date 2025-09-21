
'use client';

export default function LiteratureAnimation() {
  const symbols = [
    { text: "ॐ", x: 125, y: 70, delay: "1s" },
    { text: "श्रीं", x: 125, y: 100, delay: "2.5s" },
    { text: "ह्रीं", x: 125, y: 130, delay: "4s" },
    { text: "क्लीं", x: 125, y: 160, delay: "5.5s" },
  ];

  return (
    <svg viewBox="0 0 250 250" className="w-full h-full">
      <defs>
        <filter id="scrollGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.7 0" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--muted))" />
            <stop offset="50%" stopColor="hsl(var(--card))" />
            <stop offset="100%" stopColor="hsl(var(--muted))" />
        </linearGradient>
      </defs>

      {/* Unfurling Scroll */}
      <g transform="translate(125, 125) rotate(-10)">
        <path
          d="M -70 -100 L 70 -100 L 70 100 L -70 100 Z"
          fill="url(#scrollGradient)"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          className="animate-unfurl"
          style={{ transformOrigin: 'top' }}
          filter="url(#scrollGlow)"
        />
      </g>
      
      {/* Glowing Symbols */}
      <g>
        {symbols.map((symbol, index) => (
          <text
            key={index}
            x={symbol.x}
            y={symbol.y}
            textAnchor="middle"
            fill="hsl(var(--primary))"
            fontSize="24"
            className="font-headline animate-script-glow"
            style={{ animationDelay: symbol.delay, animationDuration: '4s' }}
          >
            {symbol.text}
          </text>
        ))}
      </g>
    </svg>
  );
}
