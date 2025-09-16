
import { cn } from "@/lib/utils";

export default function ChakraPractitioner() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 300 400" className="w-full h-full max-w-sm max-h-full">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Practitioner Silhouette */}
        <path 
          d="M150 150 
             C 120 150, 110 180, 110 200 
             L 110 280 
             C 110 320, 100 350, 80 360 
             A 40 40 0 0 0 100 380 
             L 200 380 
             A 40 40 0 0 0 220 360 
             C 200 350, 190 320, 190 280 
             L 190 200 
             C 190 180, 180 150, 150 150 Z"
          fill="none" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5"
          className="opacity-50"
        />
        <circle cx="150" cy="120" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" className="opacity-50" />

        {/* Chakras */}
        {/* 7. Sahasrara (Crown) */}
        <g transform="translate(150, 75)" className="animate-chakra-spin-slow-reverse">
          <circle r="12" fill="#A468D3" className="animate-chakra-glow opacity-80" />
          <text textAnchor="middle" dy="4" fill="white" fontSize="12">ॐ</text>
        </g>
        <text x="180" y="80" className="text-xs fill-foreground animate-float-fade" style={{ animationDelay: '0s' }}>ಸಹಸ್ರಾರ</text>

        {/* 6. Ajna (Third Eye) */}
        <g transform="translate(150, 120)" className="animate-chakra-pulse">
          <circle r="10" fill="#4B0082" className="animate-chakra-glow opacity-80" />
        </g>
        <text x="180" y="125" className="text-xs fill-foreground animate-float-fade" style={{ animationDelay: '1s' }}>ಆಜ್ಞಾ</text>
        
        {/* 5. Vishuddha (Throat) */}
        <g transform="translate(150, 160)" className="animate-chakra-spin">
          <circle r="9" fill="#00BFFF" className="animate-chakra-glow opacity-80" />
        </g>
        <text x="180" y="165" className="text-xs fill-foreground animate-float-fade" style={{ animationDelay: '2s' }}>ವಿಶುದ್ಧ</text>
        
        {/* 4. Anahata (Heart) */}
        <g transform="translate(150, 205)" className="animate-chakra-pulse">
          <polygon points="0,-12 10,5 -10,5" fill="#00FF00" className="animate-chakra-glow opacity-80" />
          <polygon points="0,12 10,-5 -10,-5" fill="#00FF00" className="animate-chakra-glow opacity-80" />
        </g>
        <text x="180" y="210" className="text-xs fill-foreground animate-float-fade" style={{ animationDelay: '3s' }}>ಅನಾಹತ</text>
        
        {/* 3. Manipura (Solar Plexus) */}
        <g transform="translate(150, 255)" className="animate-chakra-spin-slow">
           <path d="M0 -10 L10 10 L-10 10 Z" fill="#FFFF00" className="animate-chakra-glow opacity-80" />
        </g>
        <text x="180" y="260" className="text-xs fill-foreground animate-float-fade" style={{ animationDelay: '4s' }}>ಮಣಿಪುರ</text>
        
        {/* 2. Svadhisthana (Sacral) */}
        <g transform="translate(150, 295)" className="animate-chakra-pulse">
          <circle r="11" fill="#FF8C00" className="animate-chakra-glow opacity-80" />
          <circle r="5" fill="none" stroke="white" strokeWidth="1" />
        </g>
        <text x="180" y="300" className="text-xs fill-foreground animate-float-fade" style={{ animationDelay: '5s' }}>ಸ್ವಾಧಿಷ್ಠಾನ</text>
        
        {/* 1. Muladhara (Root) */}
        <g transform="translate(150, 335)" className="animate-chakra-spin">
          <rect x="-8" y="-8" width="16" height="16" fill="#FF0000" className="animate-chakra-glow opacity-80" />
        </g>
        <text x="180" y="340" className="text-xs fill-foreground animate-float-fade" style={{ animationDelay: '6s' }}>ಮೂಲಾಧಾರ</text>
      </svg>
    </div>
  );
}
