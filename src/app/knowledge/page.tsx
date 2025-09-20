
'use client';

import { BookOpen, AlertTriangle } from 'lucide-react';
import knowledgeData from '@/lib/content/knowledge-base.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScrollAnimate } from '@/components/ui/scroll-animate';


export default function KnowledgePage() {

  return (
    <div className="space-y-8">
      <header className="space-y-2 p-4 rounded-lg animated-border animate-fade-in">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <BookOpen />
          ಜ್ಞಾನ ಭಂಡಾರ
        </h1>
        <p className="text-lg text-muted-foreground">
          ತಂತ್ರ ಮತ್ತು ಮಂತ್ರಗಳ ಮೂಲಭೂತ ತತ್ವಗಳ ಬಗ್ಗೆ ఆಳವಾಗಿ ತಿಳಿಯಿರಿ.
        </p>
      </header>

      <ScrollAnimate>
        <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>ಪ್ರಮುಖ ಸೂಚನೆ: ತಂತ್ರದ ಗೋಪ್ಯತೆ</AlertTitle>
          <AlertDescription>
            ತಂತ್ರದಲ್ಲಿನ ಗೋಪ್ಯತೆಯ ತತ್ವದ ಕಾರಣ, ನಾವು ಸಾಮಾನ್ಯ ಜನರಿಗೆ ಅರ್ಥವಾಗುವಂತಹ ವಿಷಯವನ್ನು ಮಾತ್ರ ಪ್ರದರ್ಶಿಸುತ್ತಿದ್ದೇವೆ. ತಂತ್ರದ ಪ್ರತಿಯೊಂದು ತತ್ವದ ಆಳವಾದ ಸತ್ಯಗಳನ್ನು ತಿಳಿಯಲು, ದಯವಿಟ್ಟು ಗುರುವನ್ನು ಭೇಟಿ ಮಾಡಿ. ನಾವು ತಂತ್ರದ ತತ್ವಗಳನ್ನು ಗೌರವಿಸಬೇಕು.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <Accordion type="single" collapsible className="w-full">
         {knowledgeData.map((item, index) => (
           <ScrollAnimate key={index} delay={index * 100}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-headline text-accent hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                    <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 space-y-6 text-justify leading-relaxed">
                        {item.content.split('\n\n').map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                        ))}
                    </div>
                </AccordionContent>
              </AccordionItem>
           </ScrollAnimate>
         ))}
      </Accordion>

      <ScrollAnimate delay={knowledgeData.length * 100}>
        <div className="text-center text-muted-foreground italic mt-8">
          <p>ಇನ್ನಷ್ಟು ಜ್ಞಾನ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ, ನಿರೀಕ್ಷಿಸಿ...</p>
        </div>
      </ScrollAnimate>
    </div>
  );
}
