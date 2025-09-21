
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dices, AlertTriangle, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import gamblingData from '@/lib/content/gambling-astrology.json';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ವೈಯಕ್ತಿಕ ಅದೃಷ್ಟ ವರದಿಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function GamblingPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Dices />
          ಜೂಜು ಮತ್ತು ಅದೃಷ್ಟ ಪರೀಕ್ಷೆ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ದೃಷ್ಟಿಯಲ್ಲಿ ಅದೃಷ್ಟ ಮತ್ತು ಆಕಸ್ಮಿಕ ಲಾಭಗಳ ರಹಸ್ಯ.
        </p>
      </header>
      
      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">ಹಕ್ಕು ನಿರಾಕರಣೆ (Disclaimer)</AlertTitle>
          <AlertDescription>
            ಈ ಪುಟದಲ್ಲಿನ ಮಾಹಿತಿಯು ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಮಾಹಿತಿ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ನಾವು ಯಾವುದೇ ರೀತಿಯ ಜೂಜು ಅಥವಾ ಬೆಟ್ಟಿಂಗ್ ಅನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದಿಲ್ಲ. ಜೂಜು ಒಂದು ವ್ಯಸನಕಾರಿಯಾಗಬಲ್ಲದು ಮತ್ತು ಗಂಭೀರ ಆರ್ಥಿಕ ನಷ್ಟಗಳಿಗೆ ಕಾರಣವಾಗಬಹುದು. ದಯವಿಟ್ಟು ಜವಾಬ್ದಾರಿಯುತವಾಗಿರಿ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{gamblingData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {gamblingData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <div className="space-y-6">
        {gamblingData.sections.map((item, index) => (
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

      <ScrollAnimate delay={500 + gamblingData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ತಾಂತ್ರಿಕ ಮತ್ತು ಜ್ಯೋತಿಷ್ಯ ಸಲಹೆ
                </CardTitle>
                <CardDescription>
                ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯ ಆಧಾರದ ಮೇಲೆ ನಿಮ್ಮ ಅದೃಷ್ಟವನ್ನು ಹೆಚ್ಚಿಸಲು ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                ನಿಮ್ಮ ಜಾತಕವನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ನಿಮಗೆ ಯಾವ ಯಂತ್ರ (ಲಕ್ಷ್ಮೀ, ಕುಬೇರ), ಬೀಜ ಮಂತ್ರಗಳು (ಶ್ರೀಂ, ಕ್ಲೀಂ), ಮತ್ತು ರತ್ನಗಳು ಹೆಚ್ಚು ಅನುಕೂಲಕರವೆಂದು ತಿಳಿಯಿರಿ. ಗುರೂಜಿಯವರಿಂದ ವೈಯಕ್ತಿಕ ಸಲಹೆ ಪಡೆದು ನಿಮ್ಮ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿಗೆ ಸರಿಯಾದ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗವನ್ನು ಕಂಡುಕೊಳ್ಳಿ.
                </p>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row items-center gap-4">
                <p className="text-xl font-bold text-primary">ಶುಲ್ಕ: ₹1,111</p>
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
