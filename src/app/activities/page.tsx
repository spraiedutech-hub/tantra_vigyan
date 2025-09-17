
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { activities } from '@/lib/constants';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { recordActivityCompleted } from '@/lib/progress-tracker';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function ActivitiesPage() {
  const { toast } = useToast();

  const handlePractice = (activityTitle: string) => {
    recordActivityCompleted();
    toast({
      title: 'ಅಭ್ಯಾಸವನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ',
      description: `"${activityTitle}" ಚಟುವಟಿಕೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ.`,
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <CheckCircle />
          ತಾಂತ್ರಿಕ ಚಟುವಟಿಕೆಗಳು
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸವನ್ನು ಹೆಚ್ಚಿಸಲು ಸರಳವಾದ ತಾಂತ್ರಿಕ ಕ್ರಿಯೆಗಳು ಮತ್ತು ಆಚರಣೆಗಳು.
        </p>
      </header>
      
      <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
        <AlertDescription>
          ಇಲ್ಲಿ ನೀಡಲಾದ ಶಿಫಾರಸುಗಳು ಸಾಮಾನ್ಯ ಮತ್ತು ಆರಂಭಿಕ ಮಾರ್ಗದರ್ಶನಗಳಾಗಿವೆ. ಮಂತ್ರ ಮತ್ತು ತಂತ್ರಗಳು ತಮ್ಮ ನಿಜವಾದ ಮತ್ತು ಸಂಪೂರ್ಣ ಪರಿಣಾಮವನ್ನು ಕರುಣಾಮಯಿ ಗುರುವಿನಿಂದ ದೀಕ್ಷೆ ಪಡೆದಾಗ ಮಾತ್ರ ತೋರಿಸುತ್ತವೆ.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <Card key={index} className="flex flex-col transform hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent">{activity.title}</CardTitle>
              {activity.subtitle && <CardDescription>{activity.subtitle}</CardDescription>}
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-muted-foreground">{activity.description}</p>
              <div className="space-y-2">
                {activity.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">{stepIndex + 1}</Badge>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => handlePractice(activity.title)}
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
