
'use client';

import { useState, useMemo } from 'react';
import type { SpiritualStoryOutput } from '@/ai/flows/generate-spiritual-story';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Headphones, BookUp, AlertTriangle, PlayCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { weeklyStories } from '@/lib/constants';

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
  const [story, setStory] = useState<SpiritualStoryOutput | null>(null);
  
  const storyOfTheDay = useMemo(() => {
    // This creates a consistent story for each day of the week
    const dayOfWeek = new Date().getDay(); // 0 for Sunday, 1 for Monday, etc.
    return weeklyStories[dayOfWeek];
  }, []);


  const handleShowStory = () => {
    setStory(storyOfTheDay);
  };

  return (
    <div className="space-y-8 animate-fade-in">
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
          <CardTitle>ದಿನಕ್ಕೊಂದು ಕಥೆ (Story of the Day)</CardTitle>
          <CardDescription>
            ಹೊಸ, ಸ್ಪೂರ್ತಿದಾಯಕ ಆಧ್ಯಾತ್ಮಿಕ ಕಥೆಯನ್ನು ಓದಲು ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.
          </CardDescription>
        </CardHeader>
        <CardContent>
           <Alert variant="destructive" className="mb-6 border-accent/50 text-accent [&>svg]:text-accent">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>ಗಮನಿಸಿ</AlertTitle>
                <AlertDescription>
                    ಈ ಕಥೆಗಳನ್ನು ಸ್ಫೂರ್ತಿಗಾಗಿ ಸಂಗ್ರಹಿಸಲಾಗಿದೆ.
                </AlertDescription>
            </Alert>
          {!story && (
            <div className="text-center text-muted-foreground p-8">
                <p>ಇಂದಿನ ಕಥೆಯನ್ನು ಓದಲು ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.</p>
            </div>
          )}
          {story && (
            <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 animate-fade-in">
              <h3 className="text-accent font-headline">{story.title}</h3>
              <p>{story.story}</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
            <Button onClick={handleShowStory} className="w-full">
                <BookUp className="mr-2 h-4 w-4" />
                {story ? "ಇಂದಿನ ಕಥೆ" : "ಇಂದಿನ ಕಥೆಯನ್ನು ತೋರಿಸಿ"}
            </Button>
        </CardFooter>
      </Card>

    </div>
  );
}

    
