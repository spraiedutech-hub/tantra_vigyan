
'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2, Info, PlayCircle, PauseCircle } from 'lucide-react';
import type { DailySadhanaOutput } from '@/ai/flows/generate-daily-sadhana';
import { generateSadhanaAudio } from '@/ai/flows/generate-sadhana-audio';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { monthlySadhana } from '@/lib/constants';

const SADHANA_STORAGE_KEY = 'monthlySadhanaAudio';
type StoredAudio = {
  audioDataUri: string;
};

export default function SadhanaPreview() {
  const { toast } = useToast();
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sadhana, setSadhana] = useState<DailySadhanaOutput | null>(null);
  const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const generateAndPreloadAudio = async (sadhanaData: DailySadhanaOutput) => {
    // First, check if audio already exists in localStorage
    try {
      const storedItem = localStorage.getItem(SADHANA_STORAGE_KEY);
      if (storedItem) {
        const storedAudio: StoredAudio = JSON.parse(storedItem);
        setAudioDataUri(storedAudio.audioDataUri);
        return; // Exit if we found cached audio
      }
    } catch (error) {
      console.error("Failed to load audio from localStorage:", error);
    }
    
    // If no cached audio, generate it
    setIsLoadingAudio(true);
    setAudioDataUri(null);
    try {
      const fullText = `
        ಇಂದಿನ ಸಂಕಲ್ಪ: ${sadhanaData.intention}.
        ಮಂತ್ರ: ${sadhanaData.mantra}.
        ಪ್ರಾಣಾಯಾಮ: ${sadhanaData.breathingExercise}.
        ಧ್ಯಾನ: ${sadhanaData.meditationFocus}.
      `;
      const result = await generateSadhanaAudio(fullText);
      setAudioDataUri(result.audioDataUri);
      
      // Save the newly generated audio to localStorage
      const newStoredAudio: StoredAudio = { audioDataUri: result.audioDataUri };
      localStorage.setItem(SADHANA_STORAGE_KEY, JSON.stringify(newStoredAudio));

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
  
  const handleTogglePreview = () => {
    if (sadhana) {
      setSadhana(null);
      setAudioDataUri(null);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsPlaying(false);
    } else {
      setSadhana(monthlySadhana);
      generateAndPreloadAudio(monthlySadhana);
    }
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
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
  
  useEffect(() => {
    if (audioDataUri && audioRef.current) {
        audioRef.current.src = audioDataUri;
    }
  }, [audioDataUri]);


  return (
    <Card className="mt-8 border-primary/50 shadow-lg transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
       <audio ref={audioRef} />
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl font-headline text-primary">
          <Wand2 />
          ನಿತ್ಯ ಸಾಧನಾ (ದೈನಂದಿನ ಅಭ್ಯಾಸ)
        </CardTitle>
        <CardDescription>
          ದೀಕ್ಷೆ ಪಡೆದ ಸಾಧಕರಿಗೆ ಪ್ರತಿದಿನ ಹೊಸ, ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸವನ್ನು ನೀಡಲಾಗುತ್ತದೆ. ಕೆಳಗಿನ ಬಟನ್ ಒತ್ತುವ ಮೂಲಕ ಅದರ ಒಂದು ಸಣ್ಣ ಮುನ್ನೋಟವನ್ನು ಪಡೆಯಿರಿ.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!sadhana && (
             <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>ಇದು ಒಂದು ಮುನ್ನೋಟ</AlertTitle>
                <AlertDescription>
                ಪೂರ್ಣ ವೈಶಿಷ್ಟ್ಯ ಮತ್ತು ದೈನಂದಿನ ಮಾರ್ಗದರ್ಶನವು ದೀಕ್ಷೆಯ ನಂತರ ಲಭ್ಯವಿರುತ್ತದೆ.
                </AlertDescription>
            </Alert>
        )}
       
        {sadhana && (
          <div className="space-y-6 p-4 border rounded-md bg-background/50 animate-fade-in">
            <div className="space-y-3">
                <div>
                    <h4 className="font-headline text-lg text-accent">ಸಂಕಲ್ಪ (Intention)</h4>
                    <p className="text-foreground/80">{sadhana.intention}</p>
                </div>
                <div>
                    <h4 className="font-headline text-lg text-accent">ಮಂತ್ರ (Mantra)</h4>
                    <p className="text-foreground/80">{sadhana.mantra}</p>
                </div>
                <div>
                    <h4 className="font-headline text-lg text-accent">ಪ್ರಾಣಾಯಾಮ (Breathing)</h4>
                    <p className="text-foreground/80">{sadhana.breathingExercise}</p>
                </div>
                <div>
                    <h4 className="font-headline text-lg text-accent">ಧ್ಯಾನ (Meditation)</h4>
                    <p className="text-foreground/80">{sadhana.meditationFocus}</p>
                </div>
            </div>
            <Button onClick={handlePlayPause} disabled={isLoadingAudio || !audioDataUri} variant="outline" className="w-full">
                {isLoadingAudio ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : isPlaying ? (
                    <PauseCircle className="mr-2 h-4 w-4" />
                ) : (
                    <PlayCircle className="mr-2 h-4 w-4" />
                )}
                {isLoadingAudio ? 'ಆಡಿಯೋ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...' : isPlaying ? 'ವಿರಾಮ' : 'ಕೇಳಿ'}
            </Button>
          </div>
        )}

      </CardContent>
      <CardFooter>
        <Button onClick={handleTogglePreview} className="w-full">
          <Wand2 className="mr-2 h-4 w-4" />
          {sadhana ? 'ಮುನ್ನೋಟವನ್ನು ಮರೆಮಾಡಿ' : 'ಸಾಧನಾ ಮುನ್ನೋಟವನ್ನು ತೋರಿಸಿ'}
        </Button>
      </CardFooter>
    </Card>
  );
}
