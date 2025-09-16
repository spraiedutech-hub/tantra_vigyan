import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { activities } from '@/lib/constants';
import { Activity } from 'lucide-react';

export default function ActivitiesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
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
          <AccordionItem key={index} value={`item-${index}`} className="border-b-0 rounded-lg shadow-md bg-card/80 backdrop-blur-sm">
            <AccordionTrigger className="p-6 text-xl font-headline hover:no-underline text-accent">
              {activity.title}
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <ol className="list-decimal list-inside space-y-3 text-base text-foreground/80">
                {activity.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
