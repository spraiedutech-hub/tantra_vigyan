
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { generateYantraText, type YantraTextOutput } from '@/ai/flows/generate-yantra-text';
import { YantraGeometry } from '@/components/yantra-geometry';
import { Shapes, Loader2, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { preloadedYantras } from '@/lib/preloaded-yantras';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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

const initialContent: YantraContent[] = preloadedYantras.map((yantra, index) => ({
  id: index,
  data: yantra,
  animationClass: animations[index % animations.length],
}));

export default function YantrasPage() {
  const [content, setContent] = useState<YantraContent[]>(initialContent);
  const [isLoading, setIsLoading] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const observer = useRef<IntersectionObserver>();

  const loadMoreContent = useCallback(async () => {
    if (isLoading || !canLoadMore) return;
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
          setCanLoadMore(false); // Stop trying if it fails consistently
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
  }, [isLoading, content, canLoadMore]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && canLoadMore) {
          loadMoreContent();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, loadMoreContent, canLoadMore]
  );

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
      
      <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>ಗಮನಿಸಿ</AlertTitle>
        <AlertDescription>
            ಈ ರೇಖಾಚಿತ್ರಗಳು ಕೇವಲ ಪ್ರದರ್ಶನ ಉದ್ದೇಶಕ್ಕಾಗಿವೆ, ನಿಜವಾದ ರೇಖಾಚಿತ್ರಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುವುದಿಲ್ಲ. ನಿಜವಾದ ಯಂತ್ರಗಳಿಗಾಗಿ, ದಯವಿಟ್ಟು ನಿಮ್ಮ ಗುರುಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ.
        </AlertDescription>
      </Alert>

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
