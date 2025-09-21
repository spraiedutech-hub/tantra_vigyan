
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Binary, AlertTriangle, UserCheck, Phone, ArrowRight } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import jatakaData from '@/lib/content/jataka-blueprint.json';
import JatakaBlueprintAnimation from '@/components/jataka-blueprint-animation';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ವೈಯಕ್ತಿಕ ಜಾತಕ ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function JatakaPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Binary />
          {jatakaData.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯು ನಿಮ್ಮ ಜೀವನದ ಬಗ್ಗೆ ಏನು ಹೇಳುತ್ತದೆ ಎಂಬುದನ್ನು ಅರಿಯಿರಿ.
        </p>
      </header>

      <div className="relative w-full h-80 md:h-96 flex items-center justify-center my-4 overflow-hidden rounded-lg">
          <JatakaBlueprintAnimation />
      </div>
      
      <ScrollAnimate delay={150}>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold">ಜ್ಞಾನದ ಮಾರ್ಗ</AlertTitle>
          <AlertDescription>
            ಜಾತಕವು ಸಂಭಾವ್ಯತೆಗಳನ್ನು ತೋರಿಸುತ್ತದೆ, ಅಂತಿಮ ವಿಧಿಯನ್ನಲ್ಲ. ನಿಮ್ಮ ಪ್ರಜ್ಞಾಪೂರ್ವಕ ಪ್ರಯತ್ನ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸಾಧನೆಯು ನಿಮ್ಮ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸುವ ಶಕ್ತಿಯನ್ನು ಹೊಂದಿದೆ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{jatakaData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {jatakaData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <div className="space-y-6">
        {jatakaData.sections.map((item, index) => (
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

       <ScrollAnimate delay={400 + jatakaData.sections.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="text-primary"/>
              {jatakaData.conclusion.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {jatakaData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + jatakaData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ನಿಮ್ಮ ಜಾತಕವನ್ನು ಆಳವಾಗಿ ಅರಿಯಿರಿ
                </CardTitle>
                <CardDescription>
                ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯ ಆಳವಾದ, ವೈಯಕ್ತಿಕ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಪರಿಹಾರಗಳಿಗಾಗಿ ನಮ್ಮ ಪರಿಣಿತರನ್ನು ಸಂಪರ್ಕಿಸಿ.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
                 <Button asChild size="lg">
                    <Link href="/astrology">
                    AI ಆಧಾರಿತ ಕುಂಡಲಿ ವಿಶ್ಲೇಷಣೆ ಪಡೆಯಿರಿ <ArrowRight className="ml-2" />
                    </Link>
                </Button>
                <p className="mt-4 font-semibold text-lg">
                ಸಂಪರ್ಕಿಸಿ: 7022070287
                </p>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row items-center gap-4 pt-4">
                <p className="text-xl font-bold text-primary">ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆಗೆ: ₹1,111</p>
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
