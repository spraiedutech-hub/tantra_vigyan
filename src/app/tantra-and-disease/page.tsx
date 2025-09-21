
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { HeartPulse, AlertTriangle, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import tantraAndDiseaseData from '@/lib/content/tantra-and-disease.json';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ಆರೋಗ್ಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function TantraAndDiseasePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <HeartPulse />
          ತಂತ್ರ ಮತ್ತು ರೋಗ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಆರೋಗ್ಯ ಮತ್ತು ಅನಾರೋಗ್ಯದ ಬಗ್ಗೆ ತಂತ್ರದ ಆಧ್ಯಾತ್ಮಿಕ ದೃಷ್ಟಿಕೋನ.
        </p>
      </header>
      
      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-destructive/50 text-destructive [&>svg]:text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">ಅತ್ಯಂತ ಪ್ರಮುಖ ಹಕ್ಕು ನಿರಾಕರಣೆ (Disclaimer)</AlertTitle>
          <AlertDescription>
            ಈ ಪುಟದಲ್ಲಿನ ಮಾಹಿತಿಯು ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ದೃಷ್ಟಿಕೋನವನ್ನು ಒದಗಿಸುವ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ಇದು ಯಾವುದೇ ರೀತಿಯ ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ. ಯಾವುದೇ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗೆ, ದಯವಿಟ್ಟು ಅರ್ಹ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ. ತಾಂತ್ರಿಕ ಅಭ್ಯಾಸಗಳನ್ನು ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆಗೆ ಪೂರಕವಾಗಿ ಮಾತ್ರ ಪರಿಗಣಿಸಬೇಕು, ಬದಲಿಯಾಗಿ ಅಲ್ಲ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{tantraAndDiseaseData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {tantraAndDiseaseData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <div className="space-y-6">
        {tantraAndDiseaseData.sections.map((item, index) => (
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

       <ScrollAnimate delay={400 + tantraAndDiseaseData.sections.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="text-primary"/>
              {tantraAndDiseaseData.conclusion.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {tantraAndDiseaseData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + tantraAndDiseaseData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನ
                </CardTitle>
                <CardDescription>
                  ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿ ಮತ್ತು ಪ್ರಸ್ತುತ ಶಕ್ತಿ ಕ್ಷೇತ್ರದ ಆಧಾರದ ಮೇಲೆ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ಸುಧಾರಿಸಲು ವೈಯಕ್ತಿಕ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನವನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                  ನಿಮ್ಮ ದೀರ್ಘಕಾಲದ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳ ಹಿಂದಿನ ಕರ್ಮದ ಅಥವಾ ಶಕ್ತಿಯ ಅಸಮತೋಲನದ ಕಾರಣಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ಗುರೂಜಿಯವರಿಂದ ವೈಯಕ್ತಿಕ ಸಲಹೆ ಪಡೆದು, ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ಸುಧಾರಿಸಲು ಮತ್ತು ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸಲು ಸೂಕ್ತವಾದ ಮಂತ್ರ, ಯಂತ್ರ ಮತ್ತು ಜೀವನಶೈಲಿಯ ಬದಲಾವಣೆಗಳನ್ನು ತಿಳಿಯಿರಿ.
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
