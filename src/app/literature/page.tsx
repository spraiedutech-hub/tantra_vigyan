
'use client';

import { Library, AlertTriangle } from 'lucide-react';
import literatureData from '@/lib/content/literature-base.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function LiteraturePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Library />
          ಪ್ರಾಚೀನ ತಂತ್ರ ಸಾಹಿತ್ಯ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಪ್ರಾಚೀನ ಮತ್ತು ಮಹತ್ವಪೂರ್ಣ ತಂತ್ರ ಗ್ರಂಥಗಳ ಬಗ್ಗೆ ಪರಿಚಯ ಮತ್ತು ವಿವರಣೆಗಳನ್ನು ಇಲ್ಲಿ ಓದಿ.
        </p>
      </header>

      <div className="space-y-6">
        {literatureData.map((item, index) => (
          <Card key={index} className="transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
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
        ))}
      </div>

      <Alert variant="default" className="mt-8 border-accent/30 text-accent [&>svg]:text-accent">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle className="font-bold">ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
        <AlertDescription>
          ತಂತ್ರ ಸಾಹಿತ್ಯದ ಗ್ರಂಥಗಳನ್ನು ಗುರುಗಳು ದೀಕ್ಷೆ ಪಡೆದ ಶಿಷ್ಯರಿಗೆ ಮಾತ್ರ ನೀಡುತ್ತಾರೆ. ಹೆಚ್ಚಿನ ಜ್ಞಾನವನ್ನು ಪಡೆಯಲು ಮತ್ತು ಸತ್ಯ ಜ್ಞಾನದ ಸಾರವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಗುರುವಿನ ಮಾರ್ಗದರ್ಶನ ಅತ್ಯಗತ್ಯ.
        </AlertDescription>
      </Alert>

    </div>
  );
}
