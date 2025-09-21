
'use client';

export default function KarmaCycleAnimation() {
  const orbits = [
    {
      id: "orbit1",
      rx: 80,
      ry: 130,
      duration: "22s",
      particles: [
        { size: 2, offset: "0s", duration: "11s" },
        { size: 1.5, offset: "5.5s", duration: "11s" },
      ],
    },
    {
      id: "orbit2",
      rx: 130,
      ry: 80,
      duration: "28s",
      particles: [
        { size: 2.5, offset: "2s", duration: "14s" },
        { size: 1.8, offset: "9s", duration: "14s" },
      ],
    },
    {
      id: "orbit3",
      rx: 110,
      ry: 110,
      duration: "18s",
      particles: [{ size: 2.2, offset: "1s", duration: "9s" }],
    },
  ];

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        {orbits.map((orbit) => (
             <path 
                key={orbit.id} 
                id={orbit.id} 
                d={`M ${150 + orbit.rx},150 A ${orbit.rx},${orbit.ry} 0 1,1 ${150 - orbit.rx},150 A ${orbit.rx},${orbit.ry} 0 1,1 ${150 + orbit.rx},150`} 
                fill="none" 
            />
        ))}
        <radialGradient id="gradKarmaCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <filter id="karmaGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx="150" cy="150" r="140" fill="url(#gradKarmaCenter)" className="animate-pulse-slow" />

      {/* Central Soul (Jivatma) */}
      <circle cx="150" cy="150" r="10" fill="hsl(var(--accent))" filter="url(#karmaGlow)" />

      {/* Orbits and Karmic Particles */}
      <g>
        {orbits.map((orbit) => (
          <g key={orbit.id}>
            <ellipse
              cx="150"
              cy="150"
              rx={orbit.rx}
              ry={orbit.ry}
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
              strokeDasharray="2 4"
              className="animate-karma-rotate"
              style={{ animationDuration: orbit.duration, transformOrigin: '150px 150px' }}
            />
            {orbit.particles.map((particle, pIndex) => (
              <circle
                key={pIndex}
                r={particle.size}
                fill="hsl(var(--primary))"
                className="animate-karma-particle"
                style={{
                  '--size': `${particle.size}px`
                } as React.CSSProperties}
              >
                <animateMotion
                  dur={particle.duration}
                  begin={particle.offset}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#${orbit.id}`} />
                </animateMotion>
              </circle>
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}
