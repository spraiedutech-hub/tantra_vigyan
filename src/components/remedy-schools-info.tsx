
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import remedySchools from '@/lib/content/remedy-schools.json';
import { BookOpen } from 'lucide-react';

export default function RemedySchoolsInfo() {
  return (
    <section className="space-y-4 mt-12">
      <h2 className="text-3xl font-bold font-headline text-primary flex items-center gap-2">
        <BookOpen />
        ಪರಿಹಾರ ಶಾಸ್ತ್ರಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {remedySchools.map((item, index) => (
          <ScrollAnimate key={index} delay={index * 100}>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-headline text-accent hover:no-underline text-left">
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
    </section>
  );
}
