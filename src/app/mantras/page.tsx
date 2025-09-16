
'use client';

import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { mantras } from '@/lib/constants';
import { Music, CheckCircle, PlayCircle, PauseCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { recordMantraPracticed } from '@/lib/progress-tracker';
import { useToast } from '@/hooks/use-toast';

export default function MantrasPage() {
  const { toast } = useToast();
  const [playingMantra, setPlayingMantra] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePractice = (mantraName: string) => {
    recordMantraPracticed();
    toast({
      title: 'ಅಭಿನಂದನೆಗಳು!',
      description: `"${mantraName}" ಮಂತ್ರವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿದ್ದೀರಿ.`,
    });
  };

  const handlePlayAudio = (mantraName: string, audioUrl: string) => {
    if (playingMantra === mantraName) {
      audioRef.current?.pause();
      setPlayingMantra(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play();
      setPlayingMantra(mantraName);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Music />
          ಮಂತ್ರ ಸಂಗ್ರಹ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಸಾಂಪ್ರದಾಯಿಕ ತಂತ್ರ ಮಂತ್ರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಅವುಗಳ ಉಚ್ಚಾರಣೆಯನ್ನು ಕೇಳಿ.
        </p>
      </header>
      
      <audio ref={audioRef} onEnded={() => setPlayingMantra(null)} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mantras.map((mantra, index) => (
          <Card key={index} className="flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent">{mantra.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{mantra.description}</CardDescription>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handlePlayAudio(mantra.name, mantra.audioUrl)}
              >
                {playingMantra === mantra.name ? (
                  <PauseCircle className="mr-2 h-5 w-5" />
                ) : (
                  <PlayCircle className="mr-2 h-5 w-5" />
                )}
                ಕೇಳಿ
              </Button>
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
    </div>
  );
}
