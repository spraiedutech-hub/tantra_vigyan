export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="gradRed" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: 'hsl(0, 70%, 50%)', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(0, 70%, 50%)', stopOpacity: 0 }} />
          </radialGradient>
          <radialGradient id="gradOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: 'hsl(30, 80%, 55%)', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(30, 80%, 55%)', stopOpacity: 0 }} />
          </radialGradient>
          <radialGradient id="gradYellow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: 'hsl(60, 80%, 50%)', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(60, 80%, 50%)', stopOpacity: 0 }} />
          </radialGradient>
          <radialGradient id="gradGreen" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: 'hsl(120, 60%, 45%)', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(120, 60%, 45%)', stopOpacity: 0 }} />
          </radialGradient>
          <radialGradient id="gradBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: 'hsl(220, 70%, 50%)', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(220, 70%, 50%)', stopOpacity: 0 }} />
          </radialGradient>
           <radialGradient id="gradIndigo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: 'hsl(260, 80%, 60%)', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(260, 80%, 60%)', stopOpacity: 0 }} />
          </radialGradient>
          <radialGradient id="gradViolet" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: 'hsl(280, 65%, 60%)', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(280, 65%, 60%)', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="hsl(var(--background))" />
        
        {/* Muladhara (Red) */}
        <circle cx="20%" cy="80%" r="35%" fill="url(#gradRed)">
          <animate attributeName="r" dur="25s" values="20%;40%;20%" repeatCount="indefinite" />
          <animate attributeName="opacity" dur="25s" values="0;0.5;0" repeatCount="indefinite" />
        </circle>
        
        {/* Svadhisthana (Orange) */}
        <circle cx="80%" cy="90%" r="30%" fill="url(#gradOrange)">
           <animate attributeName="r" dur="22s" values="15%;35%;15%" begin="-2s" repeatCount="indefinite" />
           <animate attributeName="opacity" dur="22s" values="0;0.5;0" begin="-2s" repeatCount="indefinite" />
        </circle>
        
        {/* Manipura (Yellow) */}
        <circle cx="50%" cy="50%" r="25%" fill="url(#gradYellow)">
            <animate attributeName="r" dur="20s" values="10%;30%;10%" begin="-4s" repeatCount="indefinite" />
            <animate attributeName="opacity" dur="20s" values="0;0.6;0" begin="-4s" repeatCount="indefinite" />
        </circle>
        
        {/* Anahata (Green) */}
        <circle cx="10%" cy="20%" r="30%" fill="url(#gradGreen)">
            <animate attributeName="r" dur="23s" values="15%;35%;15%" begin="-6s" repeatCount="indefinite" />
            <animate attributeName="opacity" dur="23s" values="0;0.5;0" begin="-6s" repeatCount="indefinite" />
        </circle>

        {/* Vishuddha (Blue) */}
        <circle cx="90%" cy="10%" r="28%" fill="url(#gradBlue)">
            <animate attributeName="r" dur="26s" values="12%;32%;12%" begin="-8s" repeatCount="indefinite" />
            <animate attributeName="opacity" dur="26s" values="0;0.4;0" begin="-8s" repeatCount="indefinite" />
        </circle>

        {/* Ajna (Indigo) */}
        <circle cx="70%" cy="50%" r="25%" fill="url(#gradIndigo)">
            <animate attributeName="r" dur="21s" values="10%;28%;10%" begin="-10s" repeatCount="indefinite" />
            <animate attributeName="opacity" dur="21s" values="0;0.5;0" begin="-10s" repeatCount="indefinite" />
        </circle>

        {/* Sahasrara (Violet) */}
        <circle cx="30%" cy="40%" r="28%" fill="url(#gradViolet)">
            <animate attributeName="r" dur="24s" values="13%;33%;13%" begin="-12s" repeatCount="indefinite" />
            <animate attributeName="opacity" dur="24s" values="0;0.5;0" begin="-12s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
