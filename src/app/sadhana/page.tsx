'use client';

import { useState, useEffect, useRef } from 'react';
import { generateDailySadhana, type DailySadhanaOutput } from '@/ai/flows/generate-daily-sadhana';
import { generateSadhanaAudio } from '@/ai/flows/generate-sadhana-audio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Sunrise, AlertTriangle, PlayCircle, PauseCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

export default function SadhanaPage() {
  const [sadhana, setSadhana] = useState<DailySadhanaOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const getSadhana = async () => {
      try {
        setIsLoading(true);
        const result = await generateDailySadhana();
        setSadhana(result);
      } catch (error) {
        console.error("Failed to generate daily sadhana:", error);
        toast({
          variant: 'destructive',
          title: 'ದೋಷ',
          description: 'ದೈನಂದಿನ ಸಾಧನವನ್ನು ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಪುಟವನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಿ.',
        });
      } finally {
        setIsLoading(false);
      }
    };
    getSadhana();
  }, [toast]);

  const handleGenerateAudio = async () => {
    if (!sadhana) return;
    setIsLoadingAudio(true);
    setAudioDataUri(null);
    try {
      const fullText = `
        ಇಂದಿನ ಸಂಕಲ್ಪ: ${sadhana.intention}.
        ಮಂತ್ರ: ${sadhana.mantra}.
        ಪ್ರಾಣಾಯಾಮ: ${sadhana.breathingExercise}.
        ಧ್ಯಾನ: ${sadhana.meditationFocus}.
      `;
      const result = await generateSadhanaAudio(fullText);
      setAudioDataUri(result.audioDataUri);
    } catch (err) {
      console.error('Failed to generate audio:', err);
      toast({
        variant: 'destructive',
        title: 'ಆಡಿಯೋ ದೋಷ',
        description: 'ಆಡಿಯೋ ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      });
    } finally {
      setIsLoadingAudio(false);
    }
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audioDataUri && audio) {
        audio.src = audioDataUri;
        if (isPlaying) {
            audio.play();
        }
    }
  }, [audioDataUri, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const onPlay = () => setIsPlaying(true);
      const onPause = () => setIsPlaying(false);
      const onEnded = () => setIsPlaying(false);
      audio.addEventListener('play', onPlay);
      audio.addEventListener('pause', onPause);
      audio.addEventListener('ended', onEnded);
      return () => {
        audio.removeEventListener('play', onPlay);
        audio.removeEventListener('pause', onPause);
        audio.removeEventListener('ended', onEnded);
      };
    }
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <audio ref={audioRef} />
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Sunrise />
          ನಿತ್ಯ ಸಾಧನಾ
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮಗಾಗಿ ಇಂದಿನ ದೈನಂದಿನ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸ.
        </p>
      </header>

      <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
        <AlertDescription>
          ಇಲ್ಲಿ ನೀಡಲಾದ ಶಿಫಾರಸುಗಳು ಸಾಮಾನ್ಯ ಮತ್ತು ಆರಂಭಿಕ ಮಾರ್ಗದರ್ಶನಗಳಾಗಿವೆ. ಮಂತ್ರ ಮತ್ತು ತಂತ್ರಗಳು ತಮ್ಮ ನಿಜವಾದ ಮತ್ತು ಸಂಪೂರ್ಣ ಪರಿಣಾಮವನ್ನು ಕರುಣಾಮಯಿ ಗುರುವಿನಿಂದ ದೀಕ್ಷೆ ಪಡೆದಾಗ ಮಾತ್ರ ತೋರಿಸುತ್ತವೆ.
        </AlertDescription>
      </Alert>

      <Card className="transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-accent">ಇಂದಿನ ಅಭ್ಯಾಸ</CardTitle>
          <CardDescription>ಈ ಅಭ್ಯಾಸವು ನಿಮ್ಮ ದಿನವನ್ನು ಚೈತನ್ಯ ಮತ್ತು ಶಾಂತಿಯಿಂದ ತುಂಬಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-full" />
            </div>
          ) : sadhana ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-primary">ಸಂಕಲ್ಪ (Intention)</h3>
                <p className="text-muted-foreground">{sadhana.intention}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">ಮಂತ್ರ (Mantra)</h3>
                <p className="text-muted-foreground">{sadhana.mantra}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">ಪ್ರಾಣಾಯಾಮ (Breathing)</h3>
                <p className="text-muted-foreground">{sadhana.breathingExercise}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">ಧ್ಯಾನ (Meditation)</h3>
                <p className="text-muted-foreground">{sadhana.meditationFocus}</p>
              </div>
            </div>
          ) : null}

          <Button onClick={audioDataUri ? handlePlayPause : handleGenerateAudio} disabled={isLoading || isLoadingAudio} className="w-full">
            {isLoadingAudio ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : isPlaying ? (
              <PauseCircle className="mr-2 h-4 w-4" />
            ) : (
              <PlayCircle className="mr-2 h-4 w-4" />
            )}
            {isLoadingAudio ? 'ಆಡಿಯೋ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...' : isPlaying ? 'ವಿರಾಮ' : audioDataUri ? 'ಕೇಳಿ' : 'ಮಾರ್ಗದರ್ಶಿ ಆಡಿಯೋ ರಚಿಸಿ'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
