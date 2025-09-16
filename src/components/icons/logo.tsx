import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 50"
      width="150"
      height="30"
      {...props}
    >
      <g className="fill-primary" fill="hsl(var(--primary))">
        <g transform="rotate(180, 20, 25)">
          <path d="M20 10 Q 22 15, 20 22 L 20 40 L 18 40 L 18 22 Q 16 15, 18 10 Z" />
          <path d="M14 12 Q 15 16, 14 20 L 14 25 L 12 25 L 12 20 Q 11 16, 12 12 Z" />
          <path d="M26 12 Q 25 16, 26 20 L 26 25 L 28 25 L 28 20 Q 29 16, 28 12 Z" />
          <path d="M14 12 A 6 6 0 0 1 26 12 L 24 12 A 4 4 0 0 0 16 12 Z" />
        </g>
      </g>
      <text
        x="40"
        y="35"
        fontFamily="'Literata', serif"
        fontSize="30"
        fontWeight="bold"
        fill="hsl(var(--primary))"
        className="fill-primary"
      >
        ತಂತ್ರ ವಿಜ್ಞಾನ
      </text>
    </svg>
  );
}
