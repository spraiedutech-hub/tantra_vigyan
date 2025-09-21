
'use client';

import { useState } from 'react';
import navagrahaData from '@/lib/content/navagraha-impact.json';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import type { Planet } from '@/lib/content/navagraha-impact.json';

// Define fixed positions and sizes for planets for a visually pleasing layout
const planetLayout = {
  sun: { cx: 200, cy: 200, r: 25, color: '#FFD700' },
  planets: [
    { orbitR: 50, planetR: 5, color: '#C0C0C0', duration: '10s', name: 'ಚಂದ್ರ' },
    { orbitR: 75, planetR: 6, color: '#E34234', duration: '18s', name: 'ಮಂಗಳ' },
    { orbitR: 100, planetR: 4, color: '#90EE90', duration: '8s', name: 'ಬುಧ' },
    { orbitR: 125, planetR: 12, color: '#FBCEB1', duration: '30s', name: 'ಗುರು' },
    { orbitR: 150, planetR: 8, color: '#FFFFFF', duration: '40s', name: 'ಶುಕ್ರ' },
    { orbitR: 175, planetR: 10, color: '#A9A9A9', duration: '50s', name: 'ಶನಿ' },
    // Rahu and Ketu are shadow planets and don't have orbits, placed symbolically
    { cx: 50, cy: 50, r: 7, color: '#808080', name: 'ರಾಹು' },
    { cx: 350, cy: 350, r: 7, color: '#808080', name: 'ಕೇತು' },
  ]
};

const PlanetInfoDialog = ({ planet, children }: { planet: Planet; children: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="font-headline text-2xl" style={{ color: planet.color }}>
          {planet.title}
        </DialogTitle>
        <DialogDescription>{planet.englishTitle}</DialogDescription>
      </DialogHeader>
      <div className="space-y-4">
        <p className="text-foreground/90 text-justify leading-relaxed">{planet.content}</p>
      </div>
    </DialogContent>
  </Dialog>
);

export default function NavagrahaSystem() {
  const getPlanetData = (name: string): Planet | undefined => {
    return navagrahaData.planets.find(p => p.title.startsWith(name));
  };
  
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full max-h-full">
      {/* Background with stars */}
      <defs>
        <radialGradient id="gradSun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: 'hsl(45, 100%, 50%)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(45, 100%, 50%)', stopOpacity: 0 }} />
        </radialGradient>
        {Array.from({ length: 100 }).map((_, i) => (
          <circle id={`star${i}`} key={i} cx="0" cy="0" r={Math.random() * 1.2 + 0.5} fill="hsl(var(--primary))" />
        ))}
      </defs>
      <rect width="400" height="400" fill="transparent" />
      {Array.from({ length: 100 }).map((_, i) => (
          <use key={i} href={`#star${i}`} x={Math.random() * 400} y={Math.random() * 400} className="animate-pulse-slow" style={{ animationDelay: `${Math.random() * 5}s` }} />
      ))}

      {/* Orbits and Planets */}
      {planetLayout.planets.map((p, index) => {
        if ('orbitR' in p) { // Orbital planets
          const planetData = getPlanetData(p.name);
          if (!planetData) return null;
          
          return (
            <PlanetInfoDialog key={index} planet={{...planetData, color: p.color}}>
              <g className="cursor-pointer group">
                <circle cx={planetLayout.sun.cx} cy={planetLayout.sun.cy} r={p.orbitR} fill="none" stroke="hsl(var(--primary))" strokeWidth="0.2" strokeDasharray="2 2" className="opacity-30 group-hover:opacity-60 transition-opacity" />
                <g className="animate-orbit" style={{ animationDuration: p.duration, transformOrigin: `${planetLayout.sun.cx}px ${planetLayout.sun.cy}px` }}>
                  <circle cx={planetLayout.sun.cx + p.orbitR} cy={planetLayout.sun.cy} r={p.planetR} fill={p.color} className="group-hover:stroke-2 group-hover:stroke-white transition-all" />
                  <text x={planetLayout.sun.cx + p.orbitR + p.planetR + 2} y={planetLayout.sun.cy + 4} fontSize="10" fill="hsl(var(--muted-foreground))" className="group-hover:fill-primary transition-colors">{p.name}</text>
                </g>
              </g>
            </PlanetInfoDialog>
          );
        }
        return null; // Skip non-orbital for this map
      })}
      
       {/* Rahu and Ketu (Stationary/Symbolic) */}
      {planetLayout.planets.map((p, index) => {
        if ('cx' in p) { // Stationary planets
          const planetData = getPlanetData(p.name);
          if (!planetData) return null;
          return (
             <PlanetInfoDialog key={index} planet={{...planetData, color: p.color}}>
                <g className="cursor-pointer group">
                    <circle cx={p.cx} cy={p.cy} r={p.r} fill={p.color} className="animate-pulse-glow group-hover:stroke-2 group-hover:stroke-white" style={{ animationDuration: '6s' }}/>
                    <text x={p.cx + p.r + 5} y={p.cy + 4} fontSize="10" fill="hsl(var(--muted-foreground))" className="group-hover:fill-primary">{p.name}</text>
                </g>
             </PlanetInfoDialog>
          )
        }
        return null;
      })}
      

      {/* Sun */}
      {(() => {
        const sunData = getPlanetData('ಸೂರ್ಯ');
        if (!sunData) return null;
        return (
          <PlanetInfoDialog planet={{...sunData, color: planetLayout.sun.color}}>
            <g className="cursor-pointer group">
              <circle cx={planetLayout.sun.cx} cy={planetLayout.sun.cy} r={planetLayout.sun.r} fill="url(#gradSun)" className="animate-pulse-glow" />
              <circle cx={planetLayout.sun.cx} cy={planetLayout.sun.cy} r={planetLayout.sun.r} fill={planetLayout.sun.color} className="opacity-80" />
               <text x={planetLayout.sun.cx} y={planetLayout.sun.cy + 4} textAnchor="middle" fontSize="12" fontWeight="bold" fill="black">ಸೂರ್ಯ</text>
            </g>
          </PlanetInfoDialog>
        );
      })()}
    </svg>
  );
}
