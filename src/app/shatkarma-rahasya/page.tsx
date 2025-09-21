
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Recycle, AlertTriangle, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import shatkarmaData from '@/lib/content/shatkarma-rahasya.json';

const WHATSAPP_NUMBER = "917204676465";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ಷಟ್ಕರ್ಮಗಳ ಬಗ್ಗೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function ShatkarmaRahasyaPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Recycle />
          ಷಟ್ಕರ್ಮ ರಹಸ್ಯ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಹಠ ಯೋಗದ ಆರು ಶುದ್ಧೀಕರಣ ಕ್ರಿಯೆಗಳ ಆಳವಾದ ಜ್ಞಾನ.
        </p>
      </header>
      
      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{shatkarmaData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {shatkarmaData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-destructive/50 text-destructive [&>svg]:text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">ಅತ್ಯಂತ ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
          <AlertDescription>
            ಷಟ್ಕರ್ಮಗಳು ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಕ್ರಿಯೆಗಳಾಗಿವೆ. ಇವುಗಳನ್ನು ತಪ್ಪಾಗಿ ಅಭ್ಯಾಸ ಮಾಡಿದರೆ ದೈಹಿಕ ಮತ್ತು ಮಾನಸಿಕ ಹಾನಿ ಉಂಟಾಗಬಹುದು. ದಯವಿಟ್ಟು ಈ ಕ್ರಿಯೆಗಳನ್ನು ಪುಸ್ತಕ ಅಥವಾ ವೀಡಿಯೊ ನೋಡಿ ಕಲಿಯಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ. ಯಾವಾಗಲೂ ಅರ್ಹ ಮತ್ತು ಅನುಭವಿ ಗುರುವಿನ ನೇರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಮಾತ್ರ ಕಲಿಯಿರಿ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <div className="space-y-6">
        {shatkarmaData.sections.map((item, index) => (
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

       <ScrollAnimate delay={400 + shatkarmaData.sections.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="text-primary"/>
              {shatkarmaData.conclusion.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {shatkarmaData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + shatkarmaData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ತರಬೇತಿ
                </CardTitle>
                <CardDescription>
                ನಿಮ್ಮ ದೇಹ ಪ್ರಕೃತಿಗೆ ಅನುಗುಣವಾಗಿ ಷಟ್ಕರ್ಮಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಕಲಿಯಲು ಮತ್ತು ಅಭ್ಯಾಸ ಮಾಡಲು ನೇರ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                ನಿಮ್ಮ ಆರೋಗ್ಯ, ವಯಸ್ಸು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಗುರಿಗಳನ್ನು ಪರಿಗಣಿಸಿ, ನಿಮಗೆ ಯಾವ ಷಟ್ಕರ್ಮವು ಹೆಚ್ಚು ಸೂಕ್ತ ಮತ್ತು ಅದನ್ನು ಹೇಗೆ ಸರಿಯಾಗಿ ಮಾಡುವುದು ಎಂಬುದರ ಕುರಿತು ಗುರೂಜಿಯವರಿಂದ ವೈಯಕ್ತಿಕ ತರಬೇತಿ ಪಡೆಯಿರಿ.
                </p>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row items-center gap-4">
                <p className="text-xl font-bold text-primary">ಶುಲ್ಕವು ತರಬೇತಿಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ</p>
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
