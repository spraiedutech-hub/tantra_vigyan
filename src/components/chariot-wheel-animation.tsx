
'use client';

export default function ChariotWheelAnimation() {
  const spokeCount = 16;
  
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="gradWheel" cx="50%" cy="50%" r="50%">
          <stop offset="85%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <filter id="wheelGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx="100" cy="100" r="95" fill="url(#gradWheel)" className="animate-pulse-slow" />

      <g>
         <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="20s"
            repeatCount="indefinite"
        />
        {/* Outer Rim */}
        <circle cx="100" cy="100" r="90" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" filter="url(#wheelGlow)" />
        <circle cx="100" cy="100" r="85" stroke="hsl(var(--border))" strokeWidth="0.5" fill="none" />
        
        {/* Decorative elements on the rim */}
        {Array.from({ length: spokeCount * 2 }).map((_, i) => (
             <circle 
                key={i}
                cx="100"
                cy="100"
                r="1.5"
                fill="hsl(var(--primary))"
                transform={`rotate(${(i * 360) / (spokeCount * 2)}, 100, 100) translate(87.5, 0)`}
             />
        ))}

        {/* Spokes */}
        {Array.from({ length: spokeCount }).map((_, i) => (
          <path
            key={i}
            d={`M 100 100 L ${100 + 75 * Math.cos(2 * Math.PI * i / spokeCount)} ${100 + 75 * Math.sin(2 * Math.PI * i / spokeCount)}`}
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            strokeLinecap="round"
          />
        ))}

        {/* Inner Hub */}
        <circle cx="100" cy="100" r="20" stroke="hsl(var(--primary))" strokeWidth="1" fill="hsl(var(--card))" />
        <circle cx="100" cy="100" r="15" stroke="hsl(var(--border))" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="5" fill="hsl(var(--primary))" />
      </g>
    </svg>
  );
}
