
'use client';

export default function KnowledgeFlowAnimation() {
  const lineCount = 12;
  const particleCount = 20;

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <radialGradient id="gradKnowledgeCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <filter id="knowledgeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Pulsating background */}
      <circle cx="150" cy="150" r="140" fill="url(#gradKnowledgeCenter)" className="animate-pulse-slow" />

      {/* Central Bindu */}
      <circle cx="150" cy="150" r="8" fill="hsl(var(--accent))" filter="url(#knowledgeGlow)" className="animate-pulse-glow"/>
      <text x="150" y="156" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="12" className="font-headline">
        ॐ
      </text>
      
      {/* Expanding Geometric Waves */}
      <g transform="translate(150, 150)">
        <circle r="30" stroke="hsl(var(--border))" strokeWidth="0.5" fill="none" className="animate-knowledge-wave" style={{ animationDelay: '0s' }} />
        <circle r="30" stroke="hsl(var(--border))" strokeWidth="0.5" fill="none" className="animate-knowledge-wave" style={{ animationDelay: '2s' }} />
        <circle r="30" stroke="hsl(var(--border))" strokeWidth="0.5" fill="none" className="animate-knowledge-wave" style={{ animationDelay: '4s' }} />
      </g>
      
      {/* Rotating Energy Lines */}
      <g transform="translate(150, 150)" className="animate-rotate-slow">
        {Array.from({ length: lineCount }).map((_, i) => (
          <path
            key={`line-${i}`}
            d={`M 0 0 L 120 0`}
            stroke="hsl(var(--primary))"
            strokeWidth="0.75"
            strokeDasharray="2 8"
            transform={`rotate(${(i * 360) / lineCount})`}
            className="animate-knowledge-line-flow"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </g>

      {/* Floating Particles */}
      <g>
        {Array.from({ length: particleCount }).map((_, i) => {
          const startAngle = Math.random() * 360;
          const startRadius = 20 + Math.random() * 30;
          const endRadius = 100 + Math.random() * 40;
          const duration = 5 + Math.random() * 5;
          
          const startX = 150 + startRadius * Math.cos((startAngle * Math.PI) / 180);
          const startY = 150 + startRadius * Math.sin((startAngle * Math.PI) / 180);
          const endX = 150 + endRadius * Math.cos(((startAngle + Math.random() * 60 - 30) * Math.PI) / 180);
          const endY = 150 + endRadius * Math.sin(((startAngle + Math.random() * 60 - 30) * Math.PI) / 180);

          return (
            <circle
              key={`particle-${i}`}
              cx={startX}
              cy={startY}
              r={1 + Math.random()}
              fill="hsl(var(--accent))"
              className="animate-knowledge-particle"
            >
              <animate
                attributeName="cx"
                from={startX}
                to={endX}
                dur={`${duration}s`}
                repeatCount="indefinite"
              />
               <animate
                attributeName="cy"
                from={startY}
                to={endY}
                dur={`${duration}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </g>
    </svg>
  );
}
