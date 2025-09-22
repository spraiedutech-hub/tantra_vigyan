
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Ghost, AlertTriangle, UserCheck, Phone, Lightbulb } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import entitiesData from '@/lib/content/entities-explained.json';
import EnergyFormsAnimation from '@/components/energy-forms-animation';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ಶಕ್ತಿಗಳ ಸ್ವರೂಪದ ಬಗ್ಗೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function EntitiesExplainedPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Ghost />
          ದೈವಿಕ ಮತ್ತು ಇತರ ಶಕ್ತಿಗಳು
        </h1>
        <p className="text-lg text-muted-foreground">
          ದೇವತೆಗಳು, ಭೂತಗಳು ಮತ್ತು ಇತರ ಸೂಕ್ಷ್ಮ ಜೀವಿಗಳ ಅಸ್ತಿತ್ವದ ಬಗ್ಗೆ ತಾಂತ್ರಿಕ ಮತ್ತು ತಾರ್ಕಿಕ ವಿವರಣೆ.
        </p>
      </header>
      
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center my-4 overflow-hidden rounded-lg bg-muted/30">
        <EnergyFormsAnimation />
      </div>

      <ScrollAnimate delay={150}>
        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle className="font-bold">ಜ್ಞಾನದ ಉದ್ದೇಶ</AlertTitle>
          <AlertDescription>
            ಈ ಮಾಹಿತಿಯ ಉದ್ದೇಶವು ಭಯವನ್ನು ಸೃಷ್ಟಿಸುವುದಲ್ಲ, ಬದಲಿಗೆ ಅರಿವನ್ನು ಮೂಡಿಸುವುದಾಗಿದೆ. ಜ್ಞಾನವು ನಮ್ಮನ್ನು ಭಯದಿಂದ ಮುಕ್ತಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ನಮ್ಮ ಸುತ್ತಲಿನ ಬ್ರಹ್ಮಾಂಡವನ್ನು ಆಳವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{entitiesData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {entitiesData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <div className="space-y-6">
        {entitiesData.sections.map((item, index) => (
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

       <ScrollAnimate delay={400 + entitiesData.sections.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="text-primary"/>
              {entitiesData.conclusion.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {entitiesData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + entitiesData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ರಕ್ಷಣೆ
                </CardTitle>
                <CardDescription>
                  ನಿಮ್ಮ ಶಕ್ತಿ ಕ್ಷೇತ್ರವನ್ನು (Aura) ಬಲಪಡಿಸಲು ಮತ್ತು ಎಲ್ಲಾ ರೀತಿಯ ನಕಾರಾತ್ಮಕ ಪ್ರಭಾವಗಳಿಂದ ರಕ್ಷಣೆ ಪಡೆಯಲು ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                  ನೀವು ಯಾವುದೇ ರೀತಿಯ ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಯ ಪ್ರಭಾವವನ್ನು ಅನುಭವಿಸುತ್ತಿದ್ದರೆ, ಭಯಪಡುವ ಅಗತ್ಯವಿಲ್ಲ. ಗುರೂಜಿಯವರಿಂದ ನಿಮ್ಮ ಪರಿಸ್ಥಿತಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ನಿಮಗೆ ಸೂಕ್ತವಾದ ರಕ್ಷಾ ಮಂತ್ರಗಳು, ಯಂತ್ರಗಳು ಮತ್ತು ಪರಿಹಾರ ಕ್ರಮಗಳನ್ನು ತಿಳಿದುಕೊಂಡು, ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಶಾಂತಿ ಮತ್ತು ಸುರಕ್ಷತೆಯನ್ನು ಪುನಃಸ್ಥಾಪಿಸಿಕೊಳ್ಳಿ.
                </p>
                <p className="mt-4 font-semibold text-center text-lg">
                    ಸಂಪರ್ಕಿಸಿ: 7022070287
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
