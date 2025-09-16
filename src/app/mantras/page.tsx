
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { mantras } from '@/lib/constants';
import { Music, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { recordMantraPracticed } from '@/lib/progress-tracker';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect, useRef, useCallback } from 'react';

const BATCH_SIZE = 6;

export default function MantrasPage() {
  const { toast } = useToast();
  const [displayedMantras, setDisplayedMantras] = useState<(typeof mantras)[0][]>([]);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver>();

  const loadMoreMantras = useCallback(() => {
    setDisplayedMantras((prev) => {
      const currentLength = prev.length;
      if (currentLength >= mantras.length) {
        setHasMore(false);
        return prev;
      }
      const nextBatch = mantras.slice(currentLength, currentLength + BATCH_SIZE);
      return [...prev, ...nextBatch];
    });
  }, []);
  
  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreMantras();
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, loadMoreMantras]
  );

  useEffect(() => {
    // Load initial batch
    setDisplayedMantras(mantras.slice(0, BATCH_SIZE));
  }, []);

  const handlePractice = (mantraName: string) => {
    recordMantraPracticed();
    toast({
      title: 'ಅಭಿನಂದನೆಗಳು!',
      description: `"${mantraName}" ಮಂತ್ರವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿದ್ದೀರಿ.`,
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Music />
          ಮಂತ್ರ ಸಂಗ್ರಹ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಸಾಂಪ್ರದಾಯಿಕ ತಂತ್ರ ಮಂತ್ರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ಇನ್ನಷ್ಟು ನೋಡಲು ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedMantras.map((mantra, index) => (
          <Card key={index} className="flex flex-col transform hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent">{mantra.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{mantra.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => handlePractice(mantra.name)}
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                ಅಭ್ಯಾಸ ಮಾಡಿದ್ದೇನೆ
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div ref={lastElementRef} className="h-10" />

      {hasMore && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
          <p className="ml-4 text-muted-foreground">ಇನ್ನಷ್ಟು ಮಂತ್ರಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...</p>
        </div>
      )}
    </div>
  );
}
