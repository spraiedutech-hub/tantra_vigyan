
'use client';

export default function ShreeYantraAnimation() {
  const particleCount = 40;

  // Function to generate random positions for particles
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const angle = Math.random() * 2 * Math.PI;
    const startRadius = 5;
    const endRadius = 130 + Math.random() * 10;
    
    const startX = 150 + startRadius * Math.cos(angle);
    const startY = 150 + startRadius * Math.sin(angle);
    const endX = 150 + endRadius * Math.cos(angle);
    const endY = 150 + endRadius * Math.sin(angle);

    return {
      startX,
      startY,
      endX,
      endY,
      r: Math.random() * 1.5 + 0.5,
      delay: `${Math.random() * 5}s`,
      duration: `${4 + Math.random() * 4}s`,
    };
  });

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <filter id="yantraGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Yantra Geometry */}
      <g stroke="hsl(var(--primary))" fill="none" strokeWidth="0.75" filter="url(#yantraGlow)">
        {/* Outer Square (Bhupura) */}
        <rect x="10" y="10" width="280" height="280" className="animate-yantra-pulse" style={{ animationDelay: '1s' }} />

        {/* Lotus Petals */}
        <circle cx="150" cy="150" r="110" />
        <circle cx="150" cy="150" r="90" />

        {/* Interlocking Triangles */}
        <g className="animate-yantra-pulse">
          {/* Downward (Shakti) */}
          <path d="M 150 25 L 50 190 L 250 190 Z" />
          <path d="M 150 55 L 75 180 L 225 180 Z" />
          <path d="M 150 78 L 95 175 L 205 175 Z" />
          <path d="M 150 100 L 118 168 L 182 168 Z" />
          {/* Upward (Shiva) */}
          <path d="M 150 275 L 50 110 L 250 110 Z" />
          <path d="M 150 240 L 80 125 L 220 125 Z" />
          <path d="M 150 220 L 100 135 L 200 135 Z" />
          <path d="M 150 200 L 120 142 L 180 142 Z" />
        </g>
        
        {/* Bindu (Center Point) */}
        <circle cx="150" cy="150" r="3" fill="hsl(var(--primary))" className="animate-pulse-glow-strong" />
      </g>

      {/* Floating Energy Particles */}
      <g>
        {particles.map((p, i) => (
          <circle
            key={i}
            r={p.r}
            fill="hsl(var(--accent))"
            className="animate-particle-flow"
            style={
              {
                '--start-x': `${p.startX}px`,
                '--start-y': `${p.startY}px`,
                '--end-x': `${p.endX}px`,
                '--end-y': `${p.endY}px`,
                animationDelay: p.delay,
                animationDuration: p.duration,
              } as React.CSSProperties
            }
          />
        ))}
      </g>
    </svg>
  );
}
