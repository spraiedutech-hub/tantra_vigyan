'use client';

import { useEffect, useState } from 'react';

const name = "Nagaraja D";

export default function AppFooter() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="w-full py-4 mt-auto text-center text-sm text-muted-foreground">
      <div className="flex justify-center items-center h-6">
        {isMounted ? (
          name.split('').map((letter, index) => (
            <span
              key={index}
              className="animate-random-letter-fade"
              style={{ animationDelay: `${Math.random() * 5}s` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))
        ) : (
          <p>{name}</p>
        )}
      </div>
    </footer>
  );
}
