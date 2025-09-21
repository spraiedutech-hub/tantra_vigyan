
'use client';

export default function KarmaCycleAnimation() {
  const orbits = [
    {
      rx: 60,
      ry: 120,
      duration: '20s',
      particles: [
        { size: 1.5, offset: '0s', duration: '8s' },
        { size: 2, offset: '4s', duration: '8s' },
      ],
    },
    {
      rx: 120,
      ry: 60,
      duration: '25s',
      particles: [
        { size: 2.5, offset: '2s', duration: '10s' },
        { size: 1, offset: '7s', duration: '10s' },
      ],
    },
    {
      rx: 90,
      ry: 90,
      duration: '15s',
      particles: [{ size: 2, offset: '1s', duration: '6s' }],
    },
  ];

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
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
      <g transform="translate(150, 150)">
        {orbits.map((orbit, i) => (
          <g key={i}>
            <ellipse
              rx={orbit.rx}
              ry={orbit.ry}
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
              strokeDasharray="2 4"
              className="animate-karma-rotate"
              style={{ animationDuration: orbit.duration }}
            />
            {orbit.particles.map((particle, pIndex) => (
              <circle
                key={pIndex}
                r={particle.size}
                fill="hsl(var(--primary))"
                className="animate-karma-particle"
                style={{
                  animationDuration: particle.duration,
                  animationDelay: particle.offset,
                }}
              >
                <animateMotion
                  dur={`${particle.duration}s`}
                  begin={`${particle.offset}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#orbitPath${i}`} />
                </animateMotion>
              </circle>
            ))}
            <path id={`orbitPath${i}`} d={`M 0,${-orbit.ry} A ${orbit.rx},${orbit.ry} 0 1,0 0,${orbit.ry} A ${orbit.rx},${orbit.ry} 0 1,0 0,${-orbit.ry}`} fill="none" />
          </g>
        ))}
      </g>
    </svg>
  );
}
