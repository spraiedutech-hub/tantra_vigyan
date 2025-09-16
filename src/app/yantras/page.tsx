
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { generateYantraText, type YantraTextOutput } from '@/ai/flows/generate-yantra-text';
import { YantraGeometry } from '@/components/yantra-geometry';
import { Shapes, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type YantraContent = {
  id: number;
  data: YantraTextOutput;
  animationClass: string;
};

const animations = [
  'animate-rotate-slow',
  'animate-pulse-glow',
  'animate-rotate-slow-reverse',
  'animate-glow',
];

export default function YantrasPage() {
  const [content, setContent] = useState<YantraContent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef<IntersectionObserver>();

  const loadMoreContent = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);

    let result: YantraTextOutput | null = null;
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts && !result) {
      try {
        attempts++;
        const previousYantras = content.map(item => item.data.name);
        
        const generatedResult = await generateYantraText({
          topic: 'Yantras and Mandalas',
          previousYantras: previousYantras,
        });

        // Check for duplicates before adding.
        if (!content.some(c => c.data.name === generatedResult.name)) {
          result = generatedResult;
        } else {
           console.warn("Duplicate yantra received, retrying...");
           // This counts as a failed attempt, so the loop will continue
        }

      } catch (error) {
        console.error(`Attempt ${attempts} failed to load more content:`, error);
        if (attempts >= maxAttempts) {
          // You could add a user-facing error message here
          console.error('Failed to load more content after multiple attempts.');
        } else {
          // Wait for a short period before retrying
          await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
        }
      }
    }

    if (result) {
      const animationClass = animations[content.length % animations.length];
      const newContent: YantraContent = {
        id: content.length,
        data: result,
        animationClass,
      };
      setContent((prev) => [...prev, newContent]);
    }

    setIsLoading(false);
  }, [isLoading, content]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreContent();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, loadMoreContent]
  );

  useEffect(() => {
     if (content.length === 0) {
        loadMoreContent();
     }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Shapes />
          ಯಂತ್ರಗಳು ಮತ್ತು ಮಂಡಲಗಳು
        </h1>
        <p className="text-lg text-muted-foreground">
          ಪವಿತ್ರ ರೇಖಾಗಣಿತದ ನಿರಂತರ ಹರಿವು. ಇನ್ನಷ್ಟು ನೋಡಲು ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ.
        </p>
      </header>

      <div className="space-y-12">
        {content.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg bg-card/80 backdrop-blur-sm shadow-md">
            <div className={cn("w-48 h-48 md:w-64 md:h-64 flex-shrink-0", item.animationClass)}>
              <YantraGeometry svgString={item.data.svgString} />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                <h2 className="text-2xl font-headline text-accent">{item.data.name}</h2>
                <p className="text-justify leading-relaxed">{item.data.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div ref={lastElementRef} className="h-10" />

      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
          <p className="ml-4 text-muted-foreground">ಇನ್ನಷ್ಟು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...</p>
        </div>
      )}
    </div>
  );
}
