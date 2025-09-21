
'use client';

export default function HomaAnimation() {
  const starCount = 30;
  const sparkCount = 15;

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <radialGradient id="gradMoon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gradFullMoon" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="hsl(60, 80%, 95%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(60, 80%, 95%)" stopOpacity="0" />
        </radialGradient>
        <filter id="fireGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="300" height="300" fill="hsl(var(--background))" />
      <rect width="300" height="300" fill="url(#gradMoon)" className="opacity-30" />
      
      {/* Stars */}
      <g>
        {Array.from({ length: starCount }).map((_, i) => (
          <circle
            key={`star-${i}`}
            cx={Math.random() * 300}
            cy={Math.random() * 150} // only in the upper half
            r={Math.random() * 0.8 + 0.2}
            fill="hsl(var(--primary))"
            className="animate-star-twinkle"
            style={{ animationDelay: `${Math.random() * 5}s` }}
          />
        ))}
      </g>
      
      {/* Full Moon */}
      <g transform="translate(250, 50)" className="animate-pulse-slow">
        <circle cx="0" cy="0" r="25" fill="url(#gradFullMoon)" />
        <circle cx="0" cy="0" r="18" fill="hsl(60, 50%, 90%)" />
      </g>
      
      {/* Graveyard elements */}
      <g fill="hsl(var(--border))" className="opacity-40">
        <path d="M 50 250 L 50 180 Q 55 175, 60 180 L 60 250 Z" />
        <path d="M 80 250 L 80 200 Q 85 190, 90 200 L 90 250 Z" />
        <path d="M 220 250 L 220 190 A 10 10 0 0 1 240 190 L 240 250 Z" />
      </g>
      
      {/* Ground */}
      <path d="M 0 250 Q 150 230, 300 250 L 300 300 L 0 300 Z" fill="hsl(var(--muted))" />

      {/* Homa Kunda */}
      <g transform="translate(150, 220)">
        <path d="M -50 30 L 50 30 L 40 0 L -40 0 Z" fill="hsl(var(--primary))" stroke="hsl(var(--border))" strokeWidth="1" />
        <rect x="-35" y="5" width="70" height="5" fill="hsl(var(--border))" className="opacity-30" />
      </g>
      
      {/* Fire */}
      <g transform="translate(150, 210)" filter="url(#fireGlow)">
        {/* Flames Layer 1 (Back, Yellow) */}
        <path 
            d="M 0 0 Q -10 -20, -5 -40 Q 0 -60, 5 -40 Q 10 -20, 0 0 Z" 
            fill="hsl(var(--primary))" 
            className="animate-fire-flicker" 
            style={{ animationDelay: '0s', animationDuration: '0.9s' }}
        />
        {/* Flames Layer 2 (Middle, Orange) */}
        <path 
            d="M -10 0 Q -20 -15, -15 -30 Q -10 -45, 0 -30 Q 5 -20, -10 0 Z" 
            fill="hsl(var(--accent))" 
            className="animate-fire-flicker" 
            style={{ animationDelay: '0.2s', animationDuration: '0.7s' }}
        />
        {/* Flames Layer 3 (Front, Red) */}
        <path 
            d="M 10 0 Q 20 -10, 15 -25 Q 10 -40, 0 -25 Q -5 -15, 10 0 Z" 
            fill="hsl(var(--destructive))" 
            className="animate-fire-flicker" 
            style={{ animationDelay: '0.1s', animationDuration: '1s' }}
        />
      </g>
      
      {/* Sparks */}
      <g transform="translate(150, 200)">
        {Array.from({ length: sparkCount }).map((_, i) => (
            <circle
                key={`spark-${i}`}
                cx={(Math.random() - 0.5) * 30}
                cy={Math.random() * 10}
                r={Math.random() * 1.2 + 0.5}
                fill="hsl(var(--accent))"
                className="animate-sparks-fly"
                style={{
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                }}
            />
        ))}
      </g>
    </svg>
  );
}
