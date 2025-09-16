'use client';

import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2, Volume2, Info, AlertTriangle } from 'lucide-react';
import type { DailySadhanaOutput } from '@/ai/flows/generate-daily-sadhana';
import { generateSadhanaAudio } from '@/ai/flows/generate-sadhana-audio';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const preloadedSadhana: DailySadhanaOutput = {
  intention: "ಇಂದು ನಾನು ನನ್ನ ಆಂತರಿಕ ಶಾಂತಿಯನ್ನು ಕಂಡುಕೊಳ್ಳುತ್ತೇನೆ ಮತ್ತು ನನ್ನ ಸುತ್ತಲೂ ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿಯನ್ನು ಪ್ರಸರಿಸುತ್ತೇನೆ.",
  mantra: "ಓಂ ಶಾಂತಿ ಮಂತ್ರ (ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ)",
  breathingExercise: "ಸಮವೃತ್ತಿ ಪ್ರಾಣಾಯಾಮ: 4 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಉಸಿರನ್ನು ಒಳಗೆ ತೆಗೆದುಕೊಳ್ಳಿ, 4 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳಿ, ಮತ್ತು 4 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಹೊರಗೆ ಬಿಡಿ. 5-7 ಬಾರಿ ಪುನರಾವರ್ತಿಸಿ.",
  meditationFocus: "ನಿಮ್ಮ ಹೃದಯದ ಮಧ್ಯದಲ್ಲಿ ಬೆಳಗುತ್ತಿರುವ ಚಿನ್ನದ ಬಣ್ಣದ ಬೆಳಕನ್ನು ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ. ಪ್ರತಿ ಉಸಿರಿನೊಂದಿಗೆ, ಆ ಬೆಳಕು ಪ್ರಕಾಶಮಾನವಾಗಿ ಮತ್ತು ವಿಸ್ತಾರವಾಗಿ ಹರಡುತ್ತಿರುವುದನ್ನು ಅನುಭವಿಸಿ."
};


export default function SadhanaPreview() {
  const { toast } = useToast();
  const [isListening, setIsListening] = useState(false);
  const [sadhana, setSadhana] = useState<DailySadhanaOutput | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTogglePreview = () => {
    // This will toggle the visibility of the preloaded sadhana
    if (sadhana) {
      setSadhana(null);
    } else {
      setSadhana(preloadedSadhana);
    }
  };
  
  const handleListen = async () => {
    if (!sadhana) return;
    setIsListening(true);
    try {
      const fullText = `
        ಇಂದಿನ ಸಂಕಲ್ಪ: ${sadhana.intention}.
        ಮಂತ್ರ: ${sadhana.mantra}.
        ಪ್ರಾಣಾಯಾಮ: ${sadhana.breathingExercise}.
        ಧ್ಯಾನ: ${sadhana.meditationFocus}.
      `;
      const { audioDataUri } = await generateSadhanaAudio(fullText);
      
      if (audioRef.current) {
        audioRef.current.src = audioDataUri;
        audioRef.current.play();
      }

    } catch (err) {
        console.error('Failed to generate audio:', err);
        toast({
            variant: 'destructive',
            title: 'ಆಡಿಯೋ ದೋಷ',
            description: 'ಆಡಿಯೋ ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
        });
    } finally {
        setIsListening(false);
    }
  };


  return (
    <Card className="mt-8 border-primary/50 shadow-lg transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
       <audio ref={audioRef} onEnded={() => setIsListening(false)} />
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
            <Button onClick={handleListen} disabled={isListening} variant="outline" className="w-full">
                {isListening ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Volume2 className="mr-2 h-4 w-4" />
                )}
                ಕೇಳಿ
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
