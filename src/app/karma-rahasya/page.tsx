
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Orbit, AlertTriangle, Lightbulb, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import karmaData from '@/lib/content/karma-rahasya.json';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ವೈಯಕ್ತಿಕ ಕರ್ಮ ರಹಸ್ಯ ವರದಿಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {karmaData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + karmaData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ಕರ್ಮ ರಹಸ್ಯ ವರದಿ
                </CardTitle>
                <CardDescription>
                ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯ ಆಳವಾದ ವಿಶ್ಲೇಷಣೆಯ ಮೂಲಕ ನಿಮ್ಮ ಸಂಚಿತ ಕರ್ಮವನ್ನು ಅರಿಯಿರಿ ಮತ್ತು ಪ್ರಸ್ತುತ ಸಮಸ್ಯೆಗಳಿಗೆ ನಿಖರವಾದ ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                ನಿಮ್ಮ ಹಿಂದಿನ ಕರ್ಮಗಳ ಯಾವ ಪ್ರಭಾವವು ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಜೀವನದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತಿದೆ ಎಂಬುದನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ. ಗುರೂಜಿಯವರಿಂದ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಪಡೆದು, ನಿಮ್ಮ ಕರ್ಮದ ಬಂಧನಗಳನ್ನು ನಿವಾರಿಸಲು ಸರಿಯಾದ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗವನ್ನು ಕಂಡುಕೊಳ್ಳಿ.
                </p>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row items-center gap-4">
                <p className="text-xl font-bold text-primary">ಶುಲ್ಕ: ₹2,222</p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href={WHATSAPP_URL} target="_blank">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp ಮೂಲಕ ವಿನಂತಿಸಿ
                    </Link>
                </Button>
            </CardFooter>
        </Card>
      </ScrollAnimate>
    </div>
  );
}
