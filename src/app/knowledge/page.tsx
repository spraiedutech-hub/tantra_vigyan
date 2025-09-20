
'use client';

import { BookOpen } from 'lucide-react';
import knowledgeData from '@/lib/content/knowledge-base.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function KnowledgePage() {

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <BookOpen />
          ಜ್ಞಾನ ಭಂಡಾರ
        </h1>
        <p className="text-lg text-muted-foreground">
          ತಂತ್ರ ಮತ್ತು ಮಂತ್ರಗಳ ಮೂಲಭೂತ ತತ್ವಗಳ ಬಗ್ಗೆ ಆಳವಾಗಿ ತಿಳಿಯಿರಿ.
        </p>
      </header>

      <Accordion type="single" collapsible className="w-full">
         {knowledgeData.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
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
         ))}
      </Accordion>
    </div>
  );
}
