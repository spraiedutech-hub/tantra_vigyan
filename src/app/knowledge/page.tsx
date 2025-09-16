'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { generateKnowledgeText } from '@/ai/flows/generate-knowledge-text';
import { BookOpen, Loader2 } from 'lucide-react';

export default function KnowledgePage() {
  const [content, setContent] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef<IntersectionObserver>();
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
    [isLoading]
  );

  const loadMoreContent = async () => {
    setIsLoading(true);
    try {
      const lastParagraph = content.length > 0 ? content[content.length - 1] : undefined;
      const lastSentences = lastParagraph ? lastParagraph.split('.').slice(-2).join('.') : '';
      
      const result = await generateKnowledgeText({
        topic: 'Tantra and Mantra',
        previousText: lastSentences,
      });
      setContent((prev) => [...prev, result.text]);
    } catch (error) {
      console.error('Failed to load more content:', error);
      // You could add a user-facing error message here
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Load the initial content when the component mounts
    loadMoreContent();
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <BookOpen />
          ಜ್ಞಾನ ಭಂಡಾರ
        </h1>
        <p className="text-lg text-muted-foreground">
          ತಂತ್ರ ಮತ್ತು ಮಂತ್ರಗಳ ನಿರಂತರ ಜ್ಞಾನದ ಹರಿವು. ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 space-y-6">
        {content.map((paragraph, index) => (
          <p key={index} className="text-justify leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div ref={lastElementRef} className="h-10" />

      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
          <p className="ml-4 text-muted-foreground">ಇನ್ನಷ್ಟು ಜ್ಞಾನವನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...</p>
        </div>
      )}
    </div>
  );
}
