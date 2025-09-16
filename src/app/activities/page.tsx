
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { activities } from '@/lib/constants';
import { recordActivityCompleted } from '@/lib/progress-tracker';
import { useToast } from '@/hooks/use-toast';
import { Activity, CheckCircle } from 'lucide-react';

export default function ActivitiesPage() {
  const { toast } = useToast();

  const handleCompleteActivity = (activityTitle: string) => {
    recordActivityCompleted();
    toast({
      title: 'ಅಭಿನಂದನೆಗಳು!',
      description: `"${activityTitle}" ಚಟುವಟಿಕೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ.`,
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Activity />
          ತಂತ್ರ ಚಟುವಟಿಕೆಗಳ ಮಾರ್ಗದರ್ಶಿ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಆರಂಭಿಕರಿಗಾಗಿ ಹಂತ-ಹಂತದ ಸೂಚನೆಗಳೊಂದಿಗೆ ವಿವಿಧ ತಂತ್ರ ಚಟುವಟಿಕೆಗಳನ್ನು ಕಲಿಯಿರಿ.
        </p>
      </header>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {activities.map((activity, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b-0 rounded-lg shadow-md bg-card/80 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-6 text-xl font-headline hover:no-underline text-accent">
              {activity.title}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">ಸೂಚನೆಗಳು:</h3>
                    <ol className="list-decimal list-inside space-y-3 text-base text-foreground/80">
                    {activity.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                    ))}
                    </ol>
                </div>
                <Button
                  onClick={() => handleCompleteActivity(activity.title)}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  ಪೂರ್ಣಗೊಂಡಿದೆ ಎಂದು ಗುರುತಿಸಿ
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
