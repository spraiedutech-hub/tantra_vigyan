
'use client';

import { useState } from 'react';
import { chakraData, type Chakra } from '@/lib/constants';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function ChakraPractitioner() {
  const [selectedChakra, setSelectedChakra] = useState<Chakra | null>(null);

  const ChakraInfoDialog = ({ chakra, children }: { chakra: Chakra; children: React.ReactNode }) => (
    <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedChakra(null)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl" style={{ color: chakra.color }}>
            {chakra.name} ({chakra.englishName})
          </DialogTitle>
          <DialogDescription>{chakra.meaning}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-foreground/90">{chakra.description}</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-semibold text-muted-foreground">ಬೀಜ ಮಂತ್ರ:</div>
            <div className="font-bold">{chakra.bijaMantra}</div>
            <div className="font-semibold text-muted-foreground">ತತ್ವ:</div>
            <div>{chakra.element}</div>
            <div className="font-semibold text-muted-foreground">ಸ್ಥಳ:</div>
            <div>{chakra.location}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <svg viewBox="0 0 300 400" className="w-full h-full max-h-full">
      {/* Practitioner Silhouette */}
      <path
        d="M150 150 C 120 150, 110 180, 110 200 L 110 280 C 110 320, 100 350, 80 360 A 40 40 0 0 0 100 380 L 200 380 A 40 40 0 0 0 220 360 C 200 350, 190 320, 190 280 L 190 200 C 190 180, 180 150, 150 150 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        className="opacity-50"
      />
      <circle cx="150" cy="120" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" className="opacity-50" />

      {/* Chakras */}
      {chakraData.map((chakra, index) => (
        <ChakraInfoDialog key={chakra.id} chakra={chakra}>
          <g transform={`translate(${chakra.position.x}, ${chakra.position.y})`} className="cursor-pointer group">
            <circle r="20" fill="transparent" />
            <g className={chakra.animationClass}>
              {chakra.id === 7 && ( // Sahasrara
                <>
                  <circle r="12" fill={chakra.color} className="animate-chakra-glow opacity-80 group-hover:opacity-100 transition-opacity" />
                  <text textAnchor="middle" dy="4" fill="white" fontSize="12">ॐ</text>
                </>
              )}
              {chakra.id === 6 && ( // Ajna
                <circle r="10" fill={chakra.color} className="animate-chakra-glow opacity-80 group-hover:opacity-100 transition-opacity" />
              )}
              {chakra.id === 5 && ( // Vishuddha
                <circle r="9" fill={chakra.color} className="animate-chakra-glow opacity-80 group-hover:opacity-100 transition-opacity" />
              )}
              {chakra.id === 4 && ( // Anahata
                <>
                  <polygon points="0,-12 10,5 -10,5" fill={chakra.color} className="animate-chakra-glow opacity-80 group-hover:opacity-100 transition-opacity" />
                  <polygon points="0,12 10,-5 -10,-5" fill={chakra.color} className="animate-chakra-glow opacity-80 group-hover:opacity-100 transition-opacity" />
                </>
              )}
              {chakra.id === 3 && ( // Manipura
                <path d="M0 -10 L10 10 L-10 10 Z" fill={chakra.color} className="animate-chakra-glow opacity-80 group-hover:opacity-100 transition-opacity" />
              )}
              {chakra.id === 2 && ( // Svadhisthana
                <>
                  <circle r="11" fill={chakra.color} className="animate-chakra-glow opacity-80 group-hover:opacity-100 transition-opacity" />
                  <circle r="5" fill="none" stroke="white" strokeWidth="1" />
                </>
              )}
              {chakra.id === 1 && ( // Muladhara
                <rect x="-8" y="-8" width="16" height="16" fill={chakra.color} className="animate-chakra-glow opacity-80 group-hover:opacity-100 transition-opacity" />
              )}
            </g>
            <text x="30" y="5" className="text-xs fill-foreground animate-float-fade group-hover:fill-primary transition-colors" style={{ animationDelay: `${index}s` }}>
              {chakra.name}
            </text>
          </g>
        </ChakraInfoDialog>
      ))}
    </svg>
  );
}
