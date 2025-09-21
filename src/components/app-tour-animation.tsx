
'use client';

import { navGroups } from '@/lib/nav-items';
import { useMemo } from 'react';

export default function AppTourAnimation() {
  const nodes = useMemo(() => {
    const allItems = navGroups.flatMap(g => g.items.filter(item => item.href !== '/' && item.href !== '/tour'));
    const totalNodes = allItems.length;
    const angleStep = (2 * Math.PI) / totalNodes;
    
    return allItems.map((item, i) => {
      const angle = i * angleStep;
      const radius = 90 + (i % 3) * 10;
      const x = 125 + radius * Math.cos(angle);
      const y = 125 + radius * Math.sin(angle);
      const Icon = item.icon;
      
      return {
        x,
        y,
        Icon,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
      };
    });
  }, []);

  return (
    <svg viewBox="0 0 250 250" className="w-full h-full">
      <defs>
        <radialGradient id="gradCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      {/* Center element */}
      <circle cx="125" cy="125" r="100" fill="url(#gradCenter)" className="animate-pulse-slow" />
      <circle cx="125" cy="125" r="25" fill="hsl(var(--primary))" className="animate-pulse-glow" />
      <text x="125" y="132" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="18" className="font-headline">
        ಜ್ಞಾನ
      </text>

      {/* Nodes and Icons */}
      {nodes.map((node, i) => (
        <g key={i}>
          {/* Pulsating energy lines */}
          <line
            x1="125"
            y1="125"
            x2={node.x}
            y2={node.y}
            stroke="hsl(var(--accent))"
            strokeWidth="0.5"
            className="animate-line-draw"
            style={{ animationDelay: `${node.delay}s`, animationDuration: `${node.duration}s` }}
          />
          {/* Icon nodes */}
          <g transform={`translate(${node.x - 10}, ${node.y - 10})`} className="animate-float-fade" style={{ animationDelay: `${node.delay}s`, animationDuration: `${node.duration}s`}}>
            <circle cx="10" cy="10" r="12" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
            <node.Icon x="4" y="4" width="12" height="12" className="text-accent" />
          </g>
        </g>
      ))}
    </svg>
  );
}
