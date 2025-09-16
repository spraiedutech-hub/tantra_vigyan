import { cn } from "@/lib/utils";

type SacredGeometryProps = {
  className?: string;
  mantra?: string;
};

export default function SacredGeometry({ className, mantra = "ॐ" }: SacredGeometryProps) {
  return (
    <div className={cn("fixed z-50 pointer-events-none", className)}>
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
            {mantra}
          </span>
        </div>
      </div>
    </div>
  );
}
