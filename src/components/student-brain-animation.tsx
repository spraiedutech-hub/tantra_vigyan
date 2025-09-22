
'use client';

export default function StudentBrainAnimation() {
  const particleCount = 20;

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <filter id="brainGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <path
          id="brainPath1"
          d="M 100 150 C 120 100, 180 100, 200 150"
          fill="none"
        />
        <path
          id="brainPath2"
          d="M 200 150 C 180 200, 120 200, 100 150"
          fill="none"
        />
      </defs>

      {/* Brain Outline */}
      <path
        d="M150,50 C50,50 50,250 150,250 C250,250 250,50 150,50 Z M150,50 C180,80 180,120 150,150 M150,50 C120,80 120,120 150,150 M150,250 C180,220 180,180 150,150 M150,250 C120,220 120,180 150,150"
        fill="hsl(var(--muted))"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        className="opacity-40"
      />

      {/* Focus Point (Ajna Chakra) */}
      <circle
        cx="150"
        cy="150"
        r="10"
        fill="hsl(var(--accent))"
        filter="url(#brainGlow)"
        className="animate-focus-pulse"
      />
       <text x="150" y="156" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="12" className="font-headline animate-mantra-fade">
        ऐं
      </text>

      {/* Flowing Thought Particles */}
      <g>
        {Array.from({ length: particleCount / 2 }).map((_, i) => (
          <circle
            key={`p1-${i}`}
            r={1.5 + Math.random()}
            fill="hsl(var(--primary))"
            className="animate-thought-flow"
          >
            <animateMotion dur={`${4 + Math.random() * 4}s`} begin={`${i * 0.4}s`} repeatCount="indefinite">
                <mpath href="#brainPath1" />
            </animateMotion>
          </circle>
        ))}
        {Array.from({ length: particleCount / 2 }).map((_, i) => (
           <circle
            key={`p2-${i}`}
            r={1.5 + Math.random()}
            fill="hsl(var(--primary))"
            className="animate-thought-flow"
          >
             <animateMotion dur={`${4 + Math.random() * 4}s`} begin={`${i * 0.4}s`} repeatCount="indefinite">
                <mpath href="#brainPath2" />
            </animateMotion>
          </circle>
        ))}
      </g>
    </svg>
  );
}
