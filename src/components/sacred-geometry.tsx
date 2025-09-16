export default function SacredGeometry() {
  return (
    <div className="fixed top-6 right-6 z-50 pointer-events-none opacity-50">
      <div className="relative w-24 h-24 animate-rotate">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-pulse-slow"
        >
          {/* Outer Circles */}
          <circle cx="50" cy="50" r="48" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="42" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" />
          
          {/* Star of David */}
          <polygon points="50,10 90,75 10,75" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" />
          <polygon points="50,90 10,25 90,25" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" />
          
          {/* Inner circle */}
          <circle cx="50" cy="50" r="20" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-primary animate-pulse-slow">
            ॐ
          </span>
        </div>
      </div>
    </div>
  );
}
