
'use client';

import { useMemo } from 'react';

export default function EnergyFormsAnimation() {
  const divineOrbits = useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => ({
      id: `divine-${i}`,
      radius: 20 + i * 15,
      duration: `${8 + i * 4}s`,
      delay: `${i * 0.5}s`,
    }));
  }, []);

  const subtleOrbits = useMemo(() => {
    return Array.from({ length: 2 }).map((_, i) => ({
      id: `subtle-${i}`,
      rx: 80 + i * 10,
      ry: 40 + i * 5,
      duration: `${20 + i * 5}s`,
      delay: `${i * 1}s`,
    }));
  }, []);

  const negativePaths = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: `neg-${i}`,
      path: `M ${10 + Math.random() * 80},95 Q ${50 + (Math.random() - 0.5) * 40},80 ${10 + Math.random() * 80},95`,
      duration: `${3 + Math.random() * 3}s`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);


  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="gradCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
         <filter id="energyGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Define paths for motion */}
        {divineOrbits.map(o => (
            <path key={o.id} id={o.id} d={`M ${100 - o.radius},100 a ${o.radius},${o.radius} 0 1,0 ${o.radius * 2},0 a ${o.radius},${o.radius} 0 1,0 -${o.radius * 2},0`} fill="none" />
        ))}
         {subtleOrbits.map(o => (
            <path key={o.id} id={o.id} d={`M ${100 - o.rx},100 a ${o.rx},${o.ry} 0 1,0 ${o.rx * 2},0 a ${o.rx},${o.ry} 0 1,0 -${o.rx * 2},0`} fill="none" />
        ))}
        {negativePaths.map(p => (
            <path key={p.id} id={p.id} d={p.path} fill="none" />
        ))}

      </defs>

      {/* Background glow */}
      <circle cx="100" cy="100" r="100" fill="url(#gradCenterGlow)" className="animate-pulse-slow"/>

      {/* Central Consciousness */}
      <circle cx="100" cy="100" r="8" fill="hsl(var(--primary))" filter="url(#energyGlowFilter)" />

      {/* Divine Energies */}
      <g>
        {divineOrbits.map(orbit => (
          <circle key={orbit.id} r="2" fill="hsl(var(--accent))" filter="url(#energyGlowFilter)">
            <animateMotion dur={orbit.duration} begin={orbit.delay} repeatCount="indefinite">
              <mpath href={`#${orbit.id}`} />
            </animateMotion>
          </circle>
        ))}
      </g>
      
      {/* Subtle Beings */}
      <g>
        {subtleOrbits.map(orbit => (
           <circle key={orbit.id} r="1.5" fill="hsl(var(--muted-foreground))" className="opacity-70">
            <animateMotion dur={orbit.duration} begin={orbit.delay} repeatCount="indefinite">
              <mpath href={`#${orbit.id}`} />
            </animateMotion>
          </circle>
        ))}
      </g>
      
      {/* Negative Energies */}
      <g>
        {negativePaths.map(p => (
            <path key={p.id} d="M -2,-2 L 2,2 M 2,-2 L -2,2" stroke="hsl(var(--destructive))" strokeWidth="1" className="opacity-80">
                 <animateMotion dur={p.duration} begin={p.delay} repeatCount="indefinite">
                    <mpath href={`#${p.id}`} />
                </animateMotion>
            </path>
        ))}
      </g>
    </svg>
  );
}
