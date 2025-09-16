'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { mantras } from '@/lib/constants';
import { PlayCircle, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MantrasPage() {
  const handlePlay = (audioUrl: string) => {
    // This is a placeholder for actual audio playback functionality
    alert(`Playing mantra from: ${audioUrl}`);
  };

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Music />
          ಮಂತ್ರ ಸಂಗ್ರಹ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಸಾಂಪ್ರದಾಯಿಕ ತಂತ್ರ ಮಂತ್ರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಅವುಗಳ ಉಚ್ಚಾರಣೆಯನ್ನು ಕೇಳಿ.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mantras.map((mantra, index) => (
          <Card key={index} className="flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
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
                onClick={() => handlePlay(mantra.audioUrl)}
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                ಕೇಳಿ
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
