
'use client';

import { useState, useRef, useEffect } from 'react';
import { generateSpiritualStory, type SpiritualStoryOutput } from '@/ai/flows/generate-spiritual-story';
import { generateSadhanaAudio } from '@/ai/flows/generate-sadhana-audio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Headphones, Loader2, PlayCircle, PauseCircle, BookUp, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Placeholder for professionally recorded tracks
const guidedSessions = [
  {
    title: '5-ನಿಮಿಷದ ಶಾಂತಿ ಧ್ಯಾನ',
    description: 'ದಿನದ ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಮನಸ್ಸನ್ನು ಶಾಂತಗೊಳಿಸಲು ತ್ವರಿತ ಧ್ಯಾನ.',
    // In a real app, this would point to a professionally recorded MP3 file.
    // For now, we leave it empty and disable the play button.
    audioSrc: '', 
  },
  {
    title: 'ಬೆಳಗಿನ ಪ್ರಾಣಾಯಾಮ',
    description: 'ದಿನವನ್ನು ಶಕ್ತಿಯುತವಾಗಿ ಪ್ರಾರಂಭಿಸಲು ಸರಳವಾದ ಉಸಿರಾಟದ ವ್ಯಾಯಾಮಗಳು.',
    audioSrc: '',
  },
];

export default function AudioLibraryPage() {
  const { toast } = useToast();
  const [story, setStory] = useState<SpiritualStoryOutput | null>(null);
  const [isLoadingStory, setIsLoadingStory] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleGenerateStory = async () => {
    setIsLoadingStory(true);
    setStory(null);
    setAudioDataUri(null);
    setIsPlaying(false);
    if(audioRef.current) audioRef.current.src = '';

    try {
      const result = await generateSpiritualStory();
      setStory(result);
    } catch (error) {
      console.error('Error generating story:', error);
      toast({
        variant: 'destructive',
        title: 'ದೋಷ',
        description: 'ಕಥೆಯನ್ನು ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      });
    } finally {
      setIsLoadingStory(false);
    }
  };

  const handleGenerateAudio = async () => {
    if (!story) return;
    setIsLoadingAudio(true);
    try {
      const fullText = `${story.title}. ${story.story}`;
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
        audio.play();
    }
  }, [audioDataUri]);
  
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
          <Headphones />
          ಆಡಿಯೋ ಲೈಬ್ರರಿ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಮಾರ್ಗದರ್ಶಿ ಧ್ಯಾನಗಳು, ಮಂತ್ರ ಪಠಣಗಳು ಮತ್ತು ಸ್ಪೂರ್ತಿದಾಯಕ ಕಥೆಗಳನ್ನು ಕೇಳಿ.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>ಮಾರ್ಗದರ್ಶಿ ಅವಧಿಗಳು</CardTitle>
          <CardDescription>
            ನಿಮ್ಮ ಅಭ್ಯಾಸಕ್ಕೆ ಸಹಾಯ ಮಾಡಲು ವೃತ್ತಿಪರವಾಗಿ ರೆಕಾರ್ಡ್ ಮಾಡಲಾದ ಆಡಿಯೋ ಟ್ರ್ಯಾಕ್‌ಗಳು. (ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {guidedSessions.map((session, index) => (
            <Card key={index} className="flex items-center justify-between p-4 bg-muted/50">
              <div>
                <p className="font-semibold">{session.title}</p>
                <p className="text-sm text-muted-foreground">{session.description}</p>
              </div>
              <Button size="icon" variant="outline" disabled={!session.audioSrc}>
                <PlayCircle />
              </Button>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI-ರಚಿತ ಆಧ್ಯಾತ್ಮಿಕ ಕಥೆ</CardTitle>
          <CardDescription>
            ಹೊಸ, ಸ್ಪೂರ್ತಿದಾಯಕ ಆಧ್ಯಾತ್ಮಿಕ ಕಥೆಯನ್ನು ಕೇಳಲು ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.
          </CardDescription>
        </CardHeader>
        <CardContent>
           <Alert variant="destructive" className="mb-6 border-accent/50 text-accent [&>svg]:text-accent">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>ಗಮನಿಸಿ</AlertTitle>
                <AlertDescription>
                    ಈ ಕಥೆಗಳನ್ನು ಸುಧಾರಿತ ತಂತ್ರಜ್ಞಾನದಿಂದ ರಚಿಸಲಾಗಿದೆ ಮತ್ತು ಸ್ಫೂರ್ತಿಗಾಗಿ ಉದ್ದೇಶಿಸಲಾಗಿದೆ.
                </AlertDescription>
            </Alert>
          {isLoadingStory && (
            <div className="space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          )}
          {story && (
            <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 animate-fade-in">
              <h3 className="text-accent font-headline">{story.title}</h3>
              <p>{story.story}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
            <Button onClick={handleGenerateStory} disabled={isLoadingStory} className="w-full">
                <BookUp className="mr-2 h-4 w-4" />
                {isLoadingStory ? 'ರಚಿಸಲಾಗುತ್ತಿದೆ...' : 'ಹೊಸ ಕಥೆಯನ್ನು ರಚಿಸಿ'}
            </Button>
             <Button 
                onClick={audioDataUri ? handlePlayPause : handleGenerateAudio} 
                disabled={!story || isLoadingAudio} 
                className="w-full"
                variant="outline"
            >
                {isLoadingAudio ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : isPlaying ? (
                <PauseCircle className="mr-2 h-4 w-4" />
                ) : (
                <PlayCircle className="mr-2 h-4 w-4" />
                )}
                {isLoadingAudio ? 'ಆಡಿಯೋ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...' : isPlaying ? 'ವಿರಾಮ' : 'ಕಥೆಯನ್ನು ಕೇಳಿ'}
          </Button>
        </CardFooter>
      </Card>

    </div>
  );
}
