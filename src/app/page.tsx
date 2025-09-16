
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { dailyAffirmations } from '@/lib/constants';
import { Heart } from 'lucide-react';

export default function Home() {
  const [affirmation, setAffirmation] = useState('');
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-home');

  useEffect(() => {
    // Select a random affirmation on client-side to avoid hydration mismatch
    const randomAffirmation =
      dailyAffirmations[Math.floor(Math.random() * dailyAffirmations.length)];
    setAffirmation(randomAffirmation);
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold font-headline text-primary">
          ತಂತ್ರ ವಿಜ್ಞಾನಕ್ಕೆ ಸುಸ್ವಾಗತ
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಪಯಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸಹಾಯ ಮಾಡುವ ತಂತ್ರ ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ಮಂತ್ರ ಅಭ್ಯಾಸಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.
        </p>
      </header>

      {heroImage && (
        <div className="relative w-full h-96 md:h-[600px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            data-ai-hint={heroImage.imageHint}
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )}

      <section>
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-inner">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Heart className="text-primary" />
              ದಿನದ ದೃಢೀಕರಣ
            </CardTitle>
          </CardHeader>
          <CardContent>
            {affirmation ? (
               <blockquote className="text-xl italic text-foreground border-l-4 border-primary pl-4">
                {affirmation}
              </blockquote>
            ) : (
                <div className="h-8 bg-muted rounded animate-pulse"></div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
