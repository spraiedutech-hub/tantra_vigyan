import { cn } from '@/lib/utils';

type YantraGeometryProps = {
  variant: 'sri' | 'star' | 'lotus' | 'cosmos';
  className?: string;
};

const variants = {
  sri: (
    <g>
      {/* Outer square (Bhupura) */}
      <rect x="2" y="2" width="96" height="96" strokeWidth="0.5" />
      <rect x="4" y="4" width="92" height="92" strokeWidth="0.5" />
      {/* Petals */}
      <circle cx="50" cy="50" r="38" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
      {[...Array(16)].map((_, i) => (
        <path
          key={i}
          d={`M50 12 A 20 20 0 0 1 61.75 19.5`}
          transform={`rotate(${i * (360 / 16)}, 50, 50)`}
          strokeWidth="0.5"
        />
      ))}
      {[...Array(8)].map((_, i) => (
        <path
          key={i}
          d={`M50 20 A 15 15 0 0 1 60.6 24.6`}
          transform={`rotate(${i * (360 / 8) + 10}, 50, 50)`}
          strokeWidth="0.5"
        />
      ))}
      {/* Upward Triangles - rotating clockwise */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="25s" repeatCount="indefinite" />
        <polygon points="50,25 72,65 28,65" strokeWidth="0.5" />
        <polygon points="50,30 68,60 32,60" strokeWidth="0.5" />
        <polygon points="50,35 64,55 36,55" strokeWidth="0.5" />
      </g>
      {/* Downward Triangles - rotating counter-clockwise */}
      <g>
         <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="25s" repeatCount="indefinite" />
        <polygon points="50,75 28,35 72,35" strokeWidth="0.5" />
        <polygon points="50,70 32,40 68,40" strokeWidth="0.5" />
        <polygon points="50,65 36,45 64,45" strokeWidth="0.5" />
      </g>
      {/* Bindu */}
      <circle cx="50" cy="50" r="1.5" className="fill-current" />
    </g>
  ),
  star: (
    <g>
      <circle cx="50" cy="50" r="48" strokeWidth="0.5" />
      {[...Array(6)].map((_, i) => (
        <g key={i} transform={`rotate(${i * 60}, 50, 50)`}>
          <polygon points="50,10 90,75 10,75" strokeWidth="0.5" />
          <polygon points="50,90 10,25 90,25" strokeWidth="0.5" />
        </g>
      ))}
    </g>
  ),
  lotus: (
    <g>
      <circle cx="50" cy="50" r="48" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="20" strokeWidth="0.5" />
       {[...Array(12)].map((_, i) => (
         <path key={i} d={`M50,4 A35,35 0 0,1 80,25 A35,35 0 0,1 50,4`} transform={`rotate(${i * 30} 50 50)`} strokeWidth="0.5" />
      ))}
       {[...Array(8)].map((_, i) => (
         <path key={i} d={`M50,18 A20,20 0 0,1 68,28 A20,20 0 0,1 50,18`} transform={`rotate(${i * 45 + 15} 50 50)`} strokeWidth="0.5" />
      ))}
      <circle cx="50" cy="50" r="8" strokeWidth="0.5" />
    </g>
  ),
  cosmos: (
     <g>
      {[...Array(10)].map((_, i) => (
        <circle key={i} cx="50" cy="50" r={4.5 * (i + 1)} strokeWidth="0.5">
            <animate attributeName="r" values={`${4.5 * (i + 1)};${4.5 * (i + 1) * 1.1};${4.5 * (i + 1)}`} dur={`${5 + i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
       {[...Array(8)].map((_, i) => (
         <line key={i} x1="50" y1="2" x2="50" y2="98" transform={`rotate(${i * 22.5}, 50, 50)`} strokeWidth="0.5" />
       ))}
    </g>
  ),
};

export function YantraGeometry({
  variant,
  className,
}: YantraGeometryProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'w-full h-full text-primary fill-none stroke-current',
        className
      )}
    >
      {variants[variant]}
    </svg>
  );
}
