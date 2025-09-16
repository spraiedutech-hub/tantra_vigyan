'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { generateLiteratureText } from '@/ai/flows/generate-literature-text';
import { Library, Loader2 } from 'lucide-react';

export default function LiteraturePage() {
  const [content, setContent] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef<IntersectionObserver>();

  const loadMoreContent = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const lastTextName = content.length > 0 ? content[content.length - 1].split(' ')[0] : undefined;
      
      const result = await generateLiteratureText({
        topic: 'Ancient Tantra Texts',
        previousText: lastTextName,
      });

      // Simple client-side check to prevent adding duplicates
      if (!content.includes(result.text)) {
        setContent((prev) => [...prev, result.text]);
      }
    } catch (error) {
      console.error('Failed to load more content:', error);
    } finally {
      setIsLoading(false);
    }
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
    // Load the initial content when the component mounts
    if (content.length === 0) {
        loadMoreContent();
    }
  }, [loadMoreContent, content.length]);

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Library />
          ಪ್ರಾಚೀನ ತಂತ್ರ ಸಾಹಿತ್ಯ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಪ್ರಾಚೀನ ತಂತ್ರ ಗ್ರಂಥಗಳ ನಿರಂತರ ಜ್ಞಾನ ಸಾಗರ. ಇನ್ನಷ್ಟು ತಿಳಿಯಲು ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 space-y-6">
        {content.map((paragraph, index) => (
          <div key={index} className="p-6 rounded-lg bg-card/80 backdrop-blur-sm shadow-md">
            <p className="text-justify leading-relaxed">
              {paragraph}
            </p>
          </div>
        ))}
      </div>

      <div ref={lastElementRef} className="h-10" />

      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
          <p className="ml-4 text-muted-foreground">ಇನ್ನಷ್ಟು ಸಾಹಿತ್ಯವನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...</p>
        </div>
      )}
    </div>
  );
}
