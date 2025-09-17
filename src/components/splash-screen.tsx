
'use client';

import { useState, useEffect } from 'react';
import { Logo } from '@/components/icons/logo';
import { cn } from '@/lib/utils';

export default function SplashScreen() {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000); // Start fading out before the component is removed

    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out',
        isFadingOut ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div className="animate-logo-fade-in">
        <Logo className="w-[240px] h-auto" />
      </div>
    </div>
  );
}
