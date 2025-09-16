import { cn } from '@/lib/utils';
import { memo } from 'react';

type YantraGeometryProps = {
  svgString?: string;
  className?: string;
};

// Memoize the component to prevent re-renders when the parent state changes,
// unless the svgString itself changes.
export const YantraGeometry = memo(function YantraGeometry({
  svgString,
  className,
}: YantraGeometryProps) {
  if (!svgString) {
    // Return a placeholder or null if no SVG string is provided
    return (
      <div className={cn("w-full h-full bg-muted rounded-lg animate-pulse", className)} />
    );
  }

  return (
    <div
      className={cn(
        'w-full h-full text-primary fill-none stroke-current',
        className
      )}
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
});
