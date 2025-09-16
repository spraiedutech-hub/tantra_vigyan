'use client';

import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2, Volume2, Info, AlertTriangle } from 'lucide-react';
import { generateDailySadhana, type DailySadhanaOutput } from '@/ai/flows/generate-daily-sadhana';
import { generateSadhanaAudio } from '@/ai/flows/generate-sadhana-audio';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export default function SadhanaPreview() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [sadhana, setSadhana] = useState<DailySadhanaOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    setSadhana(null);
    try {
      const result = await generateDailySadhana();
      setSadhana(result);
    } catch (err) {
      console.error('Failed to generate Sadhana:', err);
      setError('ದೈನಂದಿನ ಸಾಧನವನ್ನು ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.');
      toast({
        variant: 'destructive',
        title: 'ದೋಷ',
        description: 'ಸಾಧನವನ್ನು ರಚಿಸುವಲ್ಲಿ ದೋಷ ಕಂಡುಬಂದಿದೆ.',
      });
    } finally {
      setIsLoading(false);
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
        {!sadhana && !isLoading && (
             <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>ಇದು ಒಂದು ಮುನ್ನೋಟ</AlertTitle>
                <AlertDescription>
                ಪೂರ್ಣ ವೈಶಿಷ್ಟ್ಯ ಮತ್ತು ದೈನಂದಿನ ಮಾರ್ಗದರ್ಶನವು ದೀಕ್ಷೆಯ ನಂತರ ಲಭ್ಯವಿರುತ್ತದೆ.
                </AlertDescription>
            </Alert>
        )}
       
        {isLoading && (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4 text-muted-foreground">ನಿಮಗಾಗಿ ಇಂದಿನ ಸಾಧನವನ್ನು ರಚಿಸಲಾಗುತ್ತಿದೆ...</p>
          </div>
        )}

        {error && (
             <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>ದೋಷ</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {sadhana && (
          <div className="space-y-6 p-4 border rounded-md bg-background/50">
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
        <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          {sadhana ? 'ಇನ್ನೊಂದು ಮುನ್ನೋಟವನ್ನು ರಚಿಸಿ' : 'ಇಂದಿನ ಸಾಧನಾ ಮುನ್ನೋಟವನ್ನು ರಚಿಸಿ'}
        </Button>
      </CardFooter>
    </Card>
  );
}
