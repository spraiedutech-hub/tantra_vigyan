
'use client';

import { useState } from 'react';
import { generateRemedyRitual, type RemedyRitualOutput } from '@/ai/flows/generate-remedy-ritual';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, HeartHandshake, AlertTriangle, Wand2, Badge } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

const commonProblems = [
    { id: 'financial', label: 'ಆರ್ಥಿಕ ಸ್ಥಿರತೆ', problem: 'Financial problems and stability' },
    { id: 'business', label: 'ವ್ಯಾಪಾರದಲ್ಲಿ ಯಶಸ್ಸು', problem: 'Success in business' },
    { id: 'obstacles', label: 'ಅಡೆತಡೆಗಳ ನಿವಾರಣೆ', problem: 'Removal of obstacles' },
    { id: 'peace', label: 'ಮನೆಯಲ್ಲಿ ಶಾಂತಿ', problem: 'Peace and harmony at home' },
];

export default function RemediesPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [ritual, setRitual] = useState<RemedyRitualOutput | null>(null);
  const [currentProblem, setCurrentProblem] = useState<string | null>(null);

  const handleGenerateRitual = async (problem: string, label: string) => {
    setIsLoading(true);
    setRitual(null);
    setCurrentProblem(label);
    try {
      const result = await generateRemedyRitual(problem);
      setRitual(result);
    } catch (error) {
      console.error('Error generating ritual:', error);
      toast({
        variant: 'destructive',
        title: 'ದೋಷ',
        description: 'ಪರಿಹಾರವನ್ನು ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ನಿಮ್ಮ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <HeartHandshake />
          ದೈನಂದಿನ ಜೀವನದ ಪರಿಹಾರಗಳು
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಸಮಸ್ಯೆಗಳಿಗೆ ಸರಳ ಮತ್ತು ಶಕ್ತಿಯುತವಾದ ತಾಂತ್ರಿಕ ಪರಿಹಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.
        </p>
      </header>

      <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>ಅತ್ಯಂತ ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
        <AlertDescription>
          ಈ ಪರಿಹಾರಗಳು ಶ್ರದ್ಧೆ ಮತ್ತು ನಂಬಿಕೆಯ ಆಧಾರದ ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ. ಇದು ಯಾವುದೇ ರೀತಿಯ ವೈಜ್ಞಾನಿಕ ಅಥವಾ ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ. ನಿಜವಾದ ಮತ್ತು ಸಂಪೂರ್ಣ ಪರಿಣಾಮವನ್ನು ಕರುಣಾಮಯಿ ಗುರುವಿನಿಂದ ದೀಕ್ಷೆ ಪಡೆದಾಗ ಮಾತ್ರ ಪಡೆಯಲು ಸಾಧ್ಯ.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ</CardTitle>
          <CardDescription>
            ಕೆಳಗಿನವುಗಳಿಂದ ಒಂದು ಸಮಸ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ನಿಮಗೆ ಬೇಕಾದ ಪರಿಹಾರವನ್ನು ಹುಡುಕಿ.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {commonProblems.map((problem) => (
            <Button
              key={problem.id}
              variant="outline"
              size="lg"
              className="justify-start text-left h-auto py-3"
              onClick={() => handleGenerateRitual(problem.problem, problem.label)}
              disabled={isLoading}
            >
              <Wand2 className="mr-3 h-5 w-5 flex-shrink-0" />
              <span>{problem.label}</span>
            </Button>
          ))}
        </CardContent>
      </Card>
      
      {(isLoading || ritual) && (
        <Card className="animate-fade-in">
          <CardHeader>
            {isLoading ? (
                <Skeleton className="h-8 w-3/4" />
            ) : (
                <CardTitle className="font-headline text-2xl text-accent">{ritual?.ritualName}</CardTitle>
            )}
            {isLoading ? (
                <Skeleton className="h-4 w-1/2 mt-2" />
            ) : (
                 <CardDescription>
                    {currentProblem} - ಈ ಸರಳ ಪೂಜಾ ವಿಧಾನವನ್ನು ಅನುಸರಿಸಿ
                </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-muted-foreground">{ritual?.description}</p>
                 <div className="space-y-3">
                    {ritual?.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-1 bg-primary/10 border-primary text-primary">{stepIndex + 1}</Badge>
                        <p className="text-foreground/90">{step}</p>
                      </div>
                    ))}
                  </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

    </div>
  );
}
