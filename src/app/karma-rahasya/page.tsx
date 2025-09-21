
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Orbit, AlertTriangle, Lightbulb } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import karmaData from '@/lib/content/karma-rahasya.json';

export default function KarmaRahasyaPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Orbit />
          ಕರ್ಮ ರಹಸ್ಯ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಕರ್ಮದ ನಿಯಮಗಳು, ಅದರ ವಿಧಗಳು ಮತ್ತು ಪರಿಣಾಮಗಳ ಆಳವಾದ ಜ್ಞಾನ.
        </p>
      </header>
      
      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{karmaData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                {karmaData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>ಗಮನಿಸಿ</AlertTitle>
          <AlertDescription>
            ಕರ್ಮದ ನಿಯಮಗಳು ಅತ್ಯಂತ ಸಂಕೀರ್ಣ. ಇಲ್ಲಿ ನೀಡಿರುವುದು ಸರಳೀಕೃತ ವಿವರಣೆ. ಸಂಪೂರ್ಣ ಜ್ಞಾನಕ್ಕಾಗಿ ಗುರುವಿನ ಮಾರ್ಗದರ್ಶನ ಅತ್ಯಗತ್ಯ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <div className="space-y-6">
        {karmaData.sections.map((item, index) => (
          <ScrollAnimate key={index} delay={300 + index * 150}>
            <Card className="transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 space-y-4 text-justify leading-relaxed">
                  {item.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimate>
        ))}
      </div>
      
      <ScrollAnimate delay={400 + karmaData.sections.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="text-primary"/>
              ಕರ್ಮವನ್ನು ಮೀರುವ ದಾರಿ
            </CardTitle>
            <CardDescription>
                {karmaData.conclusion.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {karmaData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + karmaData.sections.length * 150}>
        <div className="text-center text-muted-foreground italic mt-8">
          <p>ಇನ್ನಷ್ಟು ಜ್ಞಾನ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ, ನಿರೀಕ್ಷಿಸಿ...</p>
        </div>
      </ScrollAnimate>
    </div>
  );
}

