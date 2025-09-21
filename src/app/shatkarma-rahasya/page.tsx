
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Recycle, AlertTriangle, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import shatkarmaData from '@/lib/content/shatkarma-rahasya.json';

const WHATSAPP_NUMBER = "917022070287";
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
          ತಂತ್ರ ಶಾಸ್ತ್ರದಲ್ಲಿನ ಆರು ಶಕ್ತಿಶಾಲಿ ಕ್ರಿಯೆಗಳ ಜ್ಞಾನ.
        </p>
      </header>
      
      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{shatkarmaData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/ ৯০ text-justify leading-relaxed">
                {shatkarmaData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-destructive/50 text-destructive [&>svg]:text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">ಅತ್ಯಂತ ಪ್ರಮುಖ ಎಚ್ಚರಿಕೆ</AlertTitle>
          <AlertDescription>
            ಷಟ್ಕರ್ಮಗಳು ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಮತ್ತು ಅಪಾಯಕಾರಿ ತಾಂತ್ರಿಕ ಕ್ರಿಯೆಗಳಾಗಿವೆ. ಇವುಗಳ ಜ್ಞಾನವನ್ನು ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಕ್ಕಾಗಿ ನೀಡಲಾಗಿದೆ. ಇವುಗಳನ್ನು ದುರುಪಯೋಗಪಡಿಸಿಕೊಳ್ಳುವುದು ತಂತ್ರದ ಮೂಲ ತತ್ವಗಳಿಗೆ ವಿರುದ್ಧವಾಗಿದೆ ಮತ್ತು ಮಾಡುವವನಿಗೆ ಗಂಭೀರ ಕರ್ಮದ ಪರಿಣಾಮಗಳನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ. ಈ ಕ್ರಿಯೆಗಳನ್ನು ಎಂದಿಗೂ ಸ್ವಂತವಾಗಿ ಪ್ರಯತ್ನಿಸಬಾರದು. ಇವುಗಳ ಬಗ್ಗೆ ಆಳವಾದ ಜ್ಞಾನ ಮತ್ತು ಸಾಧನೆಗೆ ಅರ್ಹ ಗುರುವಿನ ಮಾರ್ಗದರ್ಶನ ಕಡ್ಡಾಯ.
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
                    ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ
                </CardTitle>
                <CardDescription>
                  ಈ ಶಕ್ತಿಶಾಲಿ ಜ್ಞಾನದ ನೈತಿಕ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಅಂಶಗಳ ಬಗ್ಗೆ ಸರಿಯಾದ ಮಾರ್ಗದರ್ಶನವನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                  ಷಟ್ಕರ್ಮಗಳ ಹಿಂದಿನ ನಿಜವಾದ ತತ್ವ ಮತ್ತು ಅವುಗಳ ಆಧ್ಯಾತ್ಮಿಕ ಉದ್ದೇಶವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು, ಮತ್ತು ಶಕ್ತಿಯನ್ನು ಜವಾಬ್ದಾರಿಯುತವಾಗಿ ಹೇಗೆ ಬಳಸುವುದು ಎಂಬುದನ್ನು ತಿಳಿಯಲು ಗುರೂಜಿಯವರಿಂದ ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆ ಪಡೆಯಿರಿ.
                </p>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row items-center gap-4">
                <p className="text-xl font-bold text-primary">ಶುಲ್ಕವು ಸಮಾಲೋಚನೆಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ</p>
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
