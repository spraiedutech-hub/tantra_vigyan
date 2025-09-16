import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      {...props}
    >
      <defs>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Literata:wght@700&display=swap');
          `}
        </style>
      </defs>
      <text
        x="10"
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
