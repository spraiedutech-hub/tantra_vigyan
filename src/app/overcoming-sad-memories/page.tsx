
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { HeartCrack, AlertTriangle, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import contentData from '@/lib/content/overcoming-sad-memories.json';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ದುಃಖದ ನೆನಪುಗಳ ಬಗ್ಗೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function OvercomingSadMemoriesPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <HeartCrack />
          ದುಃಖದ ನೆನಪುಗಳಿಂದ ಮುಕ್ತಿ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಹಳೆಯ ನೋವಿನ ನೆನಪುಗಳನ್ನು ಶುದ್ಧೀಕರಿಸಿ, ಮಾನಸಿಕ ಶಾಂತಿಯನ್ನು ಪಡೆಯಲು ತಾಂತ್ರಿಕ ಮಾರ್ಗಗಳು.
        </p>
      </header>
      
      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-destructive/50 text-destructive [&>svg]:text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">ಅತ್ಯಂತ ಪ್ರಮುಖ ಹಕ್ಕು ನಿರಾಕರಣೆ (Disclaimer)</AlertTitle>
          <AlertDescription>
            ಈ ಪುಟದಲ್ಲಿನ ಮಾಹಿತಿಯು ಆಧ್ಯಾತ್ಮಿಕ ಬೆಂಬಲ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ಇದು ವೃತ್ತಿಪರ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಲಹೆ, ಚಿಕಿತ್ಸೆ ಅಥವಾ ರೋಗನಿರ್ಣಯಕ್ಕೆ ಪರ್ಯಾಯವಲ್ಲ. ನೀವು ತೀವ್ರವಾದ ದುಃಖ, ಖಿನ್ನತೆ, ಆತಂಕ ಅಥವಾ ಆಘಾತದಿಂದ ಬಳಲುತ್ತಿದ್ದರೆ, ದಯವಿಟ್ಟು ಅರ್ಹ ವೈದ್ಯರನ್ನು ಅಥವಾ ಮನೋಶಾಸ್ತ್ರಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{contentData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {contentData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <div className="space-y-6">
        {contentData.sections.map((item, index) => (
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

       <ScrollAnimate delay={400 + contentData.sections.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="text-primary"/>
              {contentData.conclusion.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {contentData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + contentData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಹೀಲಿಂಗ್
                </CardTitle>
                <CardDescription>
                  ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಪರಿಸ್ಥಿತಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು, ನಿಮ್ಮ ಭಾವನಾತ್ಮಕ ಗಾಯಗಳನ್ನು ಗುಣಪಡಿಸಲು ಸೂಕ್ತವಾದ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಹೀಲಿಂಗ್ ಸೆಷನ್‌ಗಳನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                  ಕೆಲವೊಮ್ಮೆ, ಆಳವಾದ ಗಾಯಗಳನ್ನು ಗುಣಪಡಿಸಲು ವೈಯಕ್ತಿಕ ಗಮನದ ಅಗತ್ಯವಿರುತ್ತದೆ. ಗುರೂಜಿಯವರು ನಿಮ್ಮ ಶಕ್ತಿ ಕ್ಷೇತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ನಿಮ್ಮ ನೋವಿನ ಮೂಲವನ್ನು ಗುರುತಿಸಲು ಮತ್ತು ಅದನ್ನು ಶುದ್ಧೀಕರಿಸಲು ಸೂಕ್ತವಾದ ಮಂತ್ರ, ಯಂತ್ರ ಮತ್ತು ಧ್ಯಾನದ ತಂತ್ರಗಳನ್ನು ಸೂಚಿಸುತ್ತಾರೆ.
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
