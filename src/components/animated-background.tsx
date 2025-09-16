export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0 }} />
          </radialGradient>
          <style>
            {`
              @keyframes pulse {
                0%, 100% { r: 5%; opacity: 0; }
                50% { r: 30%; opacity: 0.8; }
              }
            `}
          </style>
        </defs>
        <rect width="100%" height="100%" fill="hsl(var(--background))" />
        
        <circle cx="20%" cy="30%" r="20%" fill="url(#grad1)">
          <animate attributeName="r" dur="15s" values="5%;30%;5%" repeatCount="indefinite" />
          <animate attributeName="opacity" dur="15s" values="0;0.5;0" repeatCount="indefinite" />
        </circle>
        <circle cx="80%" cy="70%" r="25%" fill="url(#grad1)">
           <animate attributeName="r" dur="20s" values="10%;35%;10%" begin="-5s" repeatCount="indefinite" />
           <animate attributeName="opacity" dur="20s" values="0;0.4;0" begin="-5s" repeatCount="indefinite" />
        </circle>
        <circle cx="50%" cy="50%" r="15%" fill="url(#grad1)">
            <animate attributeName="r" dur="12s" values="8%;25%;8%" begin="-10s" repeatCount="indefinite" />
            <animate attributeName="opacity" dur="12s" values="0;0.6;0" begin="-10s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
