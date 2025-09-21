
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Zap, AlertTriangle, Activity } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import chakrasData from '@/lib/content/chakras-powerhouses.json';
import ChakraPractitioner from '@/components/chakra-practitioner';

export default function ChakrasInfoPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Zap />
          {chakrasData.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ದೇಹದಲ್ಲಿರುವ ಏಳು ಪ್ರಮುಖ ಶಕ್ತಿ ಕೇಂದ್ರಗಳ ರಹಸ್ಯವನ್ನು ಅನ್ವೇಷಿಸಿ.
        </p>
      </header>
      
      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-destructive/50 text-destructive [&>svg]:text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">ಅತ್ಯಂತ ಪ್ರಮುಖ ಎಚ್ಚರಿಕೆ!</AlertTitle>
          <AlertDescription>
            ಚಕ್ರಗಳನ್ನು ಜಾಗೃತಗೊಳಿಸುವುದು ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿಯಾದ ಪ್ರಕ್ರಿಯೆ. ಇದನ್ನು ತಜ್ಞ ಗುರುವಿನ ನೇರ ಮಾರ್ಗದರ್ಶನವಿಲ್ಲದೆ ಅಭ್ಯಾಸ ಮಾಡುವುದು ಅಪಾಯಕಾರಿ. ಸರಿಯಾದ ಜ್ಞಾನವಿಲ್ಲದೆ ಚಕ್ರಗಳೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವುದು, ವಿದ್ಯುತ್ ಜ್ಞಾನವಿಲ್ಲದ ಸಾಮಾನ್ಯ ವ್ಯಕ್ತಿ ಪವರ್ ಸ್ಟೇಷನ್‌ನಲ್ಲಿ ಕೆಲಸ ಮಾಡಿದಂತೆ. ಇದು ಗಂಭೀರ ದೈಹಿಕ ಮತ್ತು ಮಾನಸಿಕ ಅಸಮತೋಲನಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು. ದಯವಿಟ್ಟು ಸ್ವಯಂ-ಪ್ರಯೋಗ ಮಾಡಬೇಡಿ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{chakrasData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {chakrasData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>
      
      <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center my-8">
        <div className="relative w-full h-full max-w-[450px] md:max-w-none md:max-h-[500px]">
            <ChakraPractitioner />
        </div>
      </div>

      <div className="space-y-6">
        {chakrasData.sections.map((item, index) => (
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

       <ScrollAnimate delay={400 + chakrasData.sections.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="text-primary"/>
              {chakrasData.conclusion.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {chakrasData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

    </div>
  );
}
