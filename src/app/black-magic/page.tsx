
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldOff, AlertTriangle, UserCheck, Phone, ShieldCheck } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import blackMagicData from '@/lib/content/black-magic.json';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ಮಾಟ ಮಂತ್ರ ಮತ್ತು ರಕ್ಷಣೆಯ ಬಗ್ಗೆ ವೈಯಕ್ತಿಕ ಸಲಹೆಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function BlackMagicPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <ShieldOff />
          ಮಾಟ ಮಂತ್ರ ಮತ್ತು ರಕ್ಷಣೆ
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳ ಸ್ವರೂಪ, ಅವುಗಳ ಪ್ರಭಾವ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ರಕ್ಷಣಾ ವಿಧಾನಗಳು.
        </p>
      </header>
      
      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-destructive/50 text-destructive [&>svg]:text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">ಹಕ್ಕು ನಿರಾಕರಣೆ (Disclaimer)</AlertTitle>
          <AlertDescription>
            ಈ ಪುಟದಲ್ಲಿನ ಮಾಹಿತಿಯು ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಜಾಗೃತಿ ಮೂಡಿಸುವ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ನಾವು ಯಾವುದೇ ರೀತಿಯ ಮಾಟ ಮಂತ್ರದಂತಹ ಹಾನಿಕಾರಕ ಆಚರಣೆಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದಿಲ್ಲ ಅಥವಾ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ. ಶಕ್ತಿಯನ್ನು ದುರುಪಯೋಗಪಡಿಸಿಕೊಳ್ಳುವುದು ತಂತ್ರದ ತತ್ವಗಳಿಗೆ ವಿರುದ್ಧವಾಗಿದೆ. ನೀವು ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳಿಂದ ತೊಂದರೆಗೊಳಗಾಗಿದ್ದೀರಿ ಎಂದು ಭಾವಿಸಿದರೆ, ದಯವಿಟ್ಟು ಸ್ವಯಂ-ಚಿಕಿತ್ಸೆ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ. ತಕ್ಷಣವೇ ಅರ್ಹ ಮತ್ತು ಅನುಭವಿ ಗುರುಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{blackMagicData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {blackMagicData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <div className="space-y-6">
        {blackMagicData.sections.map((item, index) => (
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

       <ScrollAnimate delay={400 + blackMagicData.sections.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="text-primary"/>
              {blackMagicData.conclusion.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {blackMagicData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + blackMagicData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ರಕ್ಷಣೆ ಮತ್ತು ಪರಿಹಾರಕ್ಕಾಗಿ ಸಮಾಲೋಚನೆ
                </CardTitle>
                <CardDescription>
                ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಪರಿಸ್ಥಿತಿ ಮತ್ತು ಶಕ್ತಿ ಕ್ಷೇತ್ರವನ್ನು (Aura) ವಿಶ್ಲೇಷಿಸಿ, ನಿಮಗಾಗಿ ವಿಶೇಷವಾದ ರಕ್ಷಣಾ ಕವಚ ಮತ್ತು ಪರಿಹಾರ ಕ್ರಮಗಳನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                ನೀವು ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಯ ಪ್ರಭಾವಕ್ಕೆ ಒಳಗಾಗಿದ್ದೀರಿ ಎಂದು ನಿಮಗೆ ಅನುಮಾನವಿದ್ದರೆ, ಅದನ್ನು ನಿರ್ಲಕ್ಷಿಸಬೇಡಿ. ಗುರೂಜಿಯವರಿಂದ ನೇರ ಮಾರ್ಗದರ್ಶನ ಪಡೆದು, ನಿಮ್ಮ ಸುತ್ತಲೂ ಒಂದು ಶಕ್ತಿಶಾಲಿ ಆಧ್ಯಾತ್ಮಿಕ ರಕ್ಷಾ ಕವಚವನ್ನು ನಿರ್ಮಿಸಿಕೊಳ್ಳಿ ಮತ್ತು ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಶಾಂತಿ, ಆರೋಗ್ಯ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ಪುನಃಸ್ಥಾಪಿಸಿಕೊಳ್ಳಿ.
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
