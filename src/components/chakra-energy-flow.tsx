
'use client';

import { chakraData } from '@/lib/constants';

export default function ChakraEnergyFlow() {
  const nadis = [
    // Ida (Left, Lunar)
    {
      id: 'ida',
      path: 'M 150 335 C 100 295, 100 205, 150 160 C 200 115, 200 85, 150 85',
      color: 'hsl(var(--secondary-foreground))',
      duration: '10s',
      delay: '0s',
    },
    // Pingala (Right, Solar)
    {
      id: 'pingala',
      path: 'M 150 335 C 200 295, 200 205, 150 160 C 100 115, 100 85, 150 85',
      color: 'hsl(var(--accent))',
      duration: '10s',
      delay: '1s',
    },
  ];

  return (
    <svg viewBox="0 0 300 400" className="w-full h-full max-h-full">
      <defs>
        {nadis.map(nadi => (
          <path key={nadi.id} id={nadi.id} d={nadi.path} fill="none" />
        ))}
      </defs>

      {/* Practitioner Silhouette */}
      <path
        d="M150 150 C 120 150, 110 180, 110 200 L 110 280 C 110 320, 100 350, 80 360 A 40 40 0 0 0 100 380 L 200 380 A 40 40 0 0 0 220 360 C 200 350, 190 320, 190 280 L 190 200 C 190 180, 180 150, 150 150 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        className="opacity-20"
      />
      <circle cx="150" cy="120" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" className="opacity-20" />

      {/* Sushumna Nadi (Central Channel) */}
      <line x1="150" y1="335" x2="150" y2="85" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-50" />

      {/* Ida and Pingala Nadis with energy flow */}
      {nadis.map(nadi => (
        <g key={nadi.id}>
          <path d={nadi.path} stroke={nadi.color} strokeWidth="1" fill="none" className="opacity-40" />
          <circle r="1.5" fill={nadi.color} className="animate-prana-flow">
            <animateMotion dur={nadi.duration} begin={nadi.delay} repeatCount="indefinite">
              <mpath href={`#${nadi.id}`} />
            </animateMotion>
          </circle>
           <circle r="1.5" fill={nadi.color} className="animate-prana-flow">
            <animateMotion dur={nadi.duration} begin={`${parseFloat(nadi.delay) + parseFloat(nadi.duration) / 2}s`} repeatCount="indefinite">
              <mpath href={`#${nadi.id}`} />
            </animateMotion>
          </circle>
        </g>
      ))}

      {/* Chakras */}
      {chakraData.map(chakra => (
        <g key={chakra.id} transform={`translate(${chakra.position.x}, ${chakra.position.y})`} className="group">
          <circle r="15" fill="transparent" />
          <circle
            r={5 + chakra.id}
            fill={chakra.color}
            className="animate-chakra-glow opacity-70 group-hover:opacity-100 transition-opacity"
            style={{ animationDelay: `${chakra.id * 100}ms` }}
          />
          <text textAnchor="middle" dy="4" fill="white" fontSize="10" className="font-bold opacity-80 pointer-events-none">
            {chakra.bijaMantra.charAt(0)}
          </text>
        </g>
      ))}
    </svg>
  );
}
