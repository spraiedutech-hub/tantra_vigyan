
'use client';

import { YantraGeometry } from '@/components/yantra-geometry';
import { Shapes, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { preloadedYantras } from '@/lib/preloaded-yantras';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type YantraContent = {
  id: number;
  data: (typeof preloadedYantras)[0];
  animationClass: string;
};

const animations = [
  'animate-rotate-slow',
  'animate-pulse-glow',
  'animate-rotate-slow-reverse',
  'animate-glow',
];

const initialContent: YantraContent[] = preloadedYantras.map((yantra, index) => ({
  id: index,
  data: yantra,
  animationClass: animations[index % animations.length],
}));

export default function YantrasPage() {

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Shapes />
          ಯಂತ್ರಗಳು ಮತ್ತು ಮಂಡಲಗಳು
        </h1>
        <p className="text-lg text-muted-foreground">
          ಪವಿತ್ರ ರೇಖಾಗಣಿತವನ್ನು ಅನ್ವೇಷಿಸಿ.
        </p>
      </header>
      
      <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>ಗಮನಿಸಿ</AlertTitle>
        <AlertDescription>
            ಈ ರೇಖಾಚಿತ್ರಗಳು ಕೇವಲ ಪ್ರದರ್ಶನ ಉದ್ದೇಶಕ್ಕಾಗಿವೆ, ನಿಜವಾದ ರೇಖಾಚಿತ್ರಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುವುದಿಲ್ಲ. ನಿಜವಾದ ಯಂತ್ರಗಳಿಗಾಗಿ, ದಯವಿಟ್ಟು ನಿಮ್ಮ ಗುರುಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ.
        </AlertDescription>
      </Alert>

      <div className="space-y-12">
        {initialContent.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg bg-card/80 backdrop-blur-sm shadow-md">
            <div className={cn("w-48 h-48 md:w-64 md:h-64 flex-shrink-0", item.animationClass)}>
              <YantraGeometry svgString={item.data.svgString} />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                <h2 className="text-2xl font-headline text-accent">{item.data.name}</h2>
                <p className="text-justify leading-relaxed">{item.data.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center text-muted-foreground italic mt-8">
        <p>ಇನ್ನಷ್ಟು ಯಂತ್ರಗಳು ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ, ನಿರೀಕ್ಷಿಸಿ...</p>
      </div>
    </div>
  );
}
