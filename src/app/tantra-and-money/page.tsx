
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Coins, AlertTriangle, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import tantraAndMoneyData from '@/lib/content/tantra-and-money.json';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ಸಂಪತ್ತಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function TantraAndMoneyPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Coins />
          ತಂತ್ರ ಮತ್ತು ಸಂಪತ್ತು
        </h1>
        <p className="text-lg text-muted-foreground">
          ಸಂಪತ್ತು ಮತ್ತು ಸಮೃದ್ಧಿಯ ಬಗ್ಗೆ ತಂತ್ರದ ಆಧ್ಯಾತ್ಮಿಕ ದೃಷ್ಟಿಕೋನ.
        </p>
      </header>
      
      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">ಹಕ್ಕು ನಿರಾಕರಣೆ (Disclaimer)</AlertTitle>
          <AlertDescription>
            ಈ ಪುಟದಲ್ಲಿನ ಮಾಹಿತಿಯು ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ಇದು ಯಾವುದೇ ರೀತಿಯ ಹಣಕಾಸು ಸಲಹೆಯಲ್ಲ. ತಾಂತ್ರಿಕ ಅಭ್ಯಾಸಗಳು ಶ್ರದ್ಧೆ ಮತ್ತು ವೈಯಕ್ತಿಕ ಪ್ರಯತ್ನವನ್ನು ಅವಲಂಬಿಸಿವೆ, ಮತ್ತು ಫಲಿತಾಂಶಗಳಿಗೆ ಯಾವುದೇ ಗ್ಯಾರಂಟಿ ಇಲ್ಲ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{tantraAndMoneyData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {tantraAndMoneyData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <div className="space-y-6">
        {tantraAndMoneyData.sections.map((item, index) => (
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

       <ScrollAnimate delay={400 + tantraAndMoneyData.sections.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="text-primary"/>
              {tantraAndMoneyData.conclusion.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {tantraAndMoneyData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + tantraAndMoneyData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ಆರ್ಥಿಕ ಮಾರ್ಗದರ್ಶನ
                </CardTitle>
                <CardDescription>
                  ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿ ಮತ್ತು ಪ್ರಸ್ತುತ ಶಕ್ತಿ ಕ್ಷೇತ್ರದ ಆಧಾರದ ಮೇಲೆ ನಿಮ್ಮ ಆರ್ಥಿಕ ಸ್ಥಿತಿಯನ್ನು ಸುಧಾರಿಸಲು ವೈಯಕ್ತಿಕ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನವನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                  ನಿಮ್ಮ ಆರ್ಥಿಕ ಅಡೆತಡೆಗಳ ಹಿಂದಿನ ಕರ್ಮದ ಅಥವಾ ಶಕ್ತಿಯ ಅಸಮತೋಲನದ ಕಾರಣಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ಗುರೂಜಿಯವರಿಂದ ವೈಯಕ್ತಿಕ ಸಲಹೆ ಪಡೆದು, ಸಮೃದ್ಧಿಯನ್ನು ಆಕರ್ಷಿಸಲು ಸೂಕ್ತವಾದ ಮಂತ್ರ, ಯಂತ್ರ ಮತ್ತು ಪರಿಹಾರ ಕ್ರಮಗಳನ್ನು ತಿಳಿಯಿರಿ.
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
