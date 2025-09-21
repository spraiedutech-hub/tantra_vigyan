
'use client';

export default function JatakaBlueprintAnimation() {
  const planets = [
    { cx: 150, cy: 55, delay: "3s" },
    { cx: 200, cy: 75, delay: "3.2s" },
    { cx: 245, cy: 150, delay: "3.4s" },
    { cx: 200, cy: 225, delay: "3.6s" },
    { cx: 150, cy: 245, delay: "3.8s" },
    { cx: 100, cy: 225, delay: "4s" },
    { cx: 55, cy: 150, delay: "4.2s" },
    { cx: 100, cy: 75, delay: "4.4s" },
    { cx: 150, cy: 150, delay: "4.6s" },
  ];

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <linearGradient id="gradBlueprint" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--muted))" />
          <stop offset="100%" stopColor="hsl(var(--background))" />
        </linearGradient>
        <filter id="blueprintGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>

      {/* Blueprint background */}
      <rect width="300" height="300" fill="url(#gradBlueprint)" />
      
      {/* Grid Lines */}
      <g stroke="hsl(var(--border))" strokeWidth="0.2" strokeOpacity="0.5">
        {Array.from({ length: 15 }).map((_, i) => (
          <path key={`grid-v-${i}`} d={`M ${i * 20} 0 L ${i * 20} 300`} className="animate-blueprint-draw" style={{ animationDelay: `${i * 0.05}s`, animationDuration: '1s' }} />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <path key={`grid-h-${i}`} d={`M 0 ${i * 20} L 300 ${i * 20}`} className="animate-blueprint-draw" style={{ animationDelay: `${i * 0.05 + 0.5}s`, animationDuration: '1s' }} />
        ))}
      </g>
      
      {/* Horoscope Chart Lines */}
      <g stroke="hsl(var(--primary))" strokeWidth="1" filter="url(#blueprintGlow)">
        <path d="M 50 50 L 250 50 L 250 250 L 50 250 Z" className="animate-blueprint-draw" style={{ animationDelay: '1s', animationDuration: '2s' }}/>
        <path d="M 50 50 L 250 250" className="animate-blueprint-draw" style={{ animationDelay: '1.5s', animationDuration: '2s' }} />
        <path d="M 250 50 L 50 250" className="animate-blueprint-draw" style={{ animationDelay: '1.5s', animationDuration: '2s' }} />
        <path d="M 150 50 L 50 150 L 150 250 L 250 150 Z" className="animate-blueprint-draw" style={{ animationDelay: '2s', animationDuration: '2s' }} />
      </g>

      {/* Planets appearing */}
      <g>
        {planets.map((planet, i) => (
          <circle key={i} cx={planet.cx} cy={planet.cy} r="4" fill="hsl(var(--accent))" className="animate-blueprint-glow" style={{ animationDelay: planet.delay, animationDuration: '3s' }}/>
        ))}
      </g>
      
      {/* Temple structure building */}
      <g stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Base */}
        <path d="M 100 220 L 200 220" className="animate-blueprint-draw" style={{ animationDelay: '5s', animationDuration: '1.5s' }} />
        {/* Pillars */}
        <path d="M 110 220 L 110 160" className="animate-blueprint-draw" style={{ animationDelay: '5.5s', animationDuration: '1.5s' }} />
        <path d="M 190 220 L 190 160" className="animate-blueprint-draw" style={{ animationDelay: '5.5s', animationDuration: '1.5s' }} />
        {/* Roof */}
        <path d="M 100 160 L 200 160" className="animate-blueprint-draw" style={{ animationDelay: '6s', animationDuration: '1.5s' }} />
        <path d="M 90 160 L 150 110 L 210 160 Z" className="animate-blueprint-draw" style={{ animationDelay: '6.5s', animationDuration: '1.5s' }} />
      </g>

      {/* Shivalingam appearing at the end */}
      <g transform="translate(150, 195) scale(0.6)" fill="hsl(var(--accent))" stroke="hsl(var(--accent))" strokeWidth="2" className="animate-shivalingam-appear" style={{ animationDelay: '7.5s' }}>
        <path d="M -25,20 A 25,10 0 0,0 25,20 Z" />
        <path d="M -15,20 Q 0,30 15,20 L 15,5 Q 0,-20 -15,5 Z" />
      </g>
    </svg>
  );
}
