
'use client';

import { useState, useEffect, useRef } from 'react';
import type { DailySadhanaOutput } from '@/ai/flows/generate-daily-sadhana';
import { generateSadhanaAudio } from '@/ai/flows/generate-sadhana-audio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Sunrise, AlertTriangle, PlayCircle, PauseCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { recordActivityCompleted } from '@/lib/progress-tracker';

const SADHANA_STORAGE_KEY = 'monthlySadhanaAudio';

// Pre-loaded Sadhana for consistency, as you suggested.
// To change this, you can simply edit the text below.
const monthlySadhana: DailySadhanaOutput = {
  intention: "ನಾನು ನನ್ನ ಆಂತರಿಕ ಶಕ್ತಿಯೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸುತ್ತೇನೆ ಮತ್ತು ನನ್ನ ಜೀವನದ ಪ್ರತಿಯೊಂದು ಕ್ಷಣವನ್ನು ಪೂರ್ಣ ಅರಿವಿನಿಂದ ಬದುಕುತ್ತೇನೆ.",
  mantra: "ಓಂ ಹ್ರೀಂ ಕ್ಲೀಂ ಚಾಮುಂಡಾಯೈ ವಿಚ್ಚೇ ನಮಃ",
  breathingExercise: "ಅನುಲೋಮ-ವಿಲೋಮ ಪ್ರಾಣಾಯಾಮ: ಬಲ ಮೂಗಿನ ಹೊಳ್ಳೆಯನ್ನು ಮುಚ್ಚಿ ಎಡದಿಂದ ಉಸಿರಾಡಿ. ನಂತರ ಎಡವನ್ನು ಮುಚ್ಚಿ ಬಲದಿಂದ ಉಸಿರು ಬಿಡಿ. ಇದೇ ರೀತಿ 10 ಸುತ್ತು ಮಾಡಿ.",
  meditationFocus: "ನಿಮ್ಮ ಆಜ್ಞಾ ಚಕ್ರದಲ್ಲಿ (ಹುಬ್ಬುಗಳ ಮಧ್ಯೆ) ಒಂದು ಪ್ರಕಾಶಮಾನವಾದ ಜ್ಯೋತಿಯನ್ನು ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ. ಆ ಜ್ಯೋತಿಯು ನಿಮ್ಮ ಸಂಪೂರ್ಣ ದೇಹ ಮತ್ತು ಮನಸ್ಸನ್ನು ಬೆಳಗುತ್ತಿದೆ ಎಂದು ಭಾವಿಸಿ."
};

type StoredAudio = {
  audioDataUri: string;
};

export default function SadhanaPage() {
  const [sadhana] = useState<DailySadhanaOutput>(monthlySadhana);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // On component mount, check if audio is already in localStorage.
    try {
      const storedItem = localStorage.getItem(SADHANA_STORAGE_KEY);
      if (storedItem) {
        const storedAudio: StoredAudio = JSON.parse(storedItem);
        setAudioDataUri(storedAudio.audioDataUri);
      }
    } catch (error) {
      console.error("Failed to load audio from localStorage:", error);
    }
  }, []);

  const handleGenerateAudio = async () => {
    if (!sadhana) return;
    setIsLoadingAudio(true);
    try {
      const fullText = `
        ಇಂದಿನ ಸಂಕಲ್ಪ: ${sadhana.intention}.
        ಮಂತ್ರ: ${sadhana.mantra}.
        ಪ್ರಾಣಾಯಾಮ: ${sadhana.breathingExercise}.
        ಧ್ಯಾನ: ${sadhana.meditationFocus}.
      `;
      const result = await generateSadhanaAudio(fullText);
      const audioUri = result.audioDataUri;
      setAudioDataUri(audioUri);

      // Save audio to local storage
      const newStoredAudio: StoredAudio = { audioDataUri: audioUri };
      localStorage.setItem(SADHANA_STORAGE_KEY, JSON.stringify(newStoredAudio));

      // Record the activity and notify the user
      recordActivityCompleted();
      toast({
        title: 'ಅಭ್ಯಾಸವನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ',
        description: 'ನಿಮ್ಮ ಇಂದಿನ ಸಾಧನಾ ಪ್ರಗತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ.',
      });

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
          if (audio.paused && isPlaying) {
            audio.play().catch(e => console.error("Audio play failed:", e));
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
          ನಿಮ್ಮ ದೈನಂದಿನ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸ.
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
          <CardTitle className="text-2xl font-headline text-accent">ದೈನಂದಿನ ಅಭ್ಯಾಸ</CardTitle>
          <CardDescription>ಈ ಅಭ್ಯಾಸವು ನಿಮ್ಮ ದಿನವನ್ನು ಚೈತನ್ಯ ಮತ್ತು ಶಾಂತಿಯಿಂದ ತುಂಬಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
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

          <Button onClick={audioDataUri ? handlePlayPause : handleGenerateAudio} disabled={isLoadingAudio} className="w-full">
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
