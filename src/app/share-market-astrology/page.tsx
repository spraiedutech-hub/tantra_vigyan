
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LineChart, AlertTriangle, Lightbulb, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ಶೇರು ಮಾರುಕಟ್ಟೆ ಜ್ಯೋತಿಷ್ಯ ವರದಿಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const planetaryInfluences = [
    {
        title: "ಗುರು (Jupiter): ಸಂಪತ್ತು ಮತ್ತು ವಿಸ್ತರಣೆ",
        content: "ಗುರುವು ಜ್ಯೋತಿಷ್ಯದಲ್ಲಿ ಸಂಪತ್ತು, ಅದೃಷ್ಟ ಮತ್ತು ವಿಸ್ತರಣೆಯ ಕಾರಕ. ಜಾತಕದಲ್ಲಿ ಗುರುವಿನ ಬಲವಾದ ಸ್ಥಾನವು ಹೂಡಿಕೆಗಳಲ್ಲಿ ಯಶಸ್ಸು ಮತ್ತು ಆರ್ಥಿಕ ಬೆಳವಣಿಗೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಗುರುವಿನ ಅನುಕೂಲಕರ ಸಂಚಾರವು ದೀರ್ಘಾವಧಿಯ ಹೂಡಿಕೆಗಳಿಗೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆಯ ಸಕಾರಾತ್ಮಕ ಪ್ರವೃತ್ತಿಗಳಿಗೆ ಕಾರಣವಾಗಬಹುದು."
    },
    {
        title: "ಬುಧ (Mercury): ವ್ಯಾಪಾರ ಮತ್ತು ಸಂವಹನ",
        content: "ಬುಧನು ವ್ಯಾಪಾರ, ವಾಣಿಜ್ಯ, ಮತ್ತು ತ್ವರಿತ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಿಕೆಯ ಗ್ರಹ. ಶೇರು ಮಾರುಕಟ್ಟೆಯು ವೇಗದ ವಹಿವಾಟುಗಳನ್ನು ಒಳಗೊಂಡಿರುವುದರಿಂದ, ಬುಧನ ಬಲವಾದ ಸ್ಥಾನವು ಅಲ್ಪಾವಧಿಯ ವ್ಯಾಪಾರ (intraday trading) ಮತ್ತು ತ್ವರಿತ ಲಾಭಗಳಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಬುಧನ ವಕ್ರ ಸಂಚಾರದ ಸಮಯದಲ್ಲಿ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಗೊಂದಲ ಮತ್ತು ಅನಿರೀಕ್ಷಿತ ಏರಿಳಿತಗಳು ಉಂಟಾಗಬಹುದು."
    },
    {
        title: "ರಾಹು (Rahu): ಆಕಸ್ಮಿಕ ಲಾಭ ಮತ್ತು ಊಹಾಪೋಹ",
        content: "ರಾಹುವು ವಿದೇಶಿ ಅಂಶಗಳು, ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಆಕಸ್ಮಿಕ, ಅನಿರೀಕ್ಷಿತ ಘಟನೆಗಳ ಕಾರಕ. ಶೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ, ರಾಹುವು ಊಹಾಪೋಹ (speculation), ಆಕಸ್ಮಿಕ ಲಾಭ ಅಥವಾ ನಷ್ಟಗಳನ್ನು ಸೂಚಿಸುತ್ತಾನೆ. ಬಲವಾದ ರಾಹುವು ತಂತ್ರಜ್ಞಾನ ಸಂಬಂಧಿತ ಷೇರುಗಳಲ್ಲಿ ಮತ್ತು ವಿದೇಶಿ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ಲಾಭವನ್ನು ತರಬಲ್ಲದು, ಆದರೆ ಇದು ಅಪಾಯಕಾರಿಯೂ ಆಗಿರಬಹುದು."
    },
    {
        title: "ಶನಿ (Saturn): ಸ್ಥಿರತೆ ಮತ್ತು ವಿಳಂಬ",
        content: "ಶನಿಯು ಶಿಸ್ತು, ತಾಳ್ಮೆ ಮತ್ತು ದೀರ್ಘಾವಧಿಯ ರಚನೆಗಳ ಕಾರಕ. ಶನಿಯ ಪ್ರಭಾವವು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನಿಧಾನಗತಿಯ ಆದರೆ ಸ್ಥಿರವಾದ ಬೆಳವಣಿಗೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಕಬ್ಬಿಣ, ಕಲ್ಲಿದ್ದಲು ಮತ್ತು ರಿಯಲ್ ಎಸ್ಟೇಟ್‌ನಂತಹ ಕ್ಷೇತ್ರಗಳ ಮೇಲೆ ಶನಿಯು ಪ್ರಭಾವ ಬೀರುತ್ತಾನೆ. ಶನಿಯ ಅನುಕೂಲಕರ ಸ್ಥಾನವಿಲ್ಲದಿದ್ದರೆ, ಹೂಡಿಕೆಗಳಲ್ಲಿ ವಿಳಂಬ ಅಥವಾ ನಷ್ಟಗಳು ಉಂಟಾಗಬಹುದು."
    }
];

export default function ShareMarketAstrologyPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <LineChart />
          ಶೇರು ಮಾರುಕಟ್ಟೆ ಜ್ಯೋತಿಷ್ಯ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಗ್ರಹಗಳ ಚಲನೆಯು ಮಾರುಕಟ್ಟೆಯ ಮೇಲೆ ಹೇಗೆ ಪ್ರಭಾವ ಬೀರುತ್ತದೆ ಎಂಬುದನ್ನು ಅರಿಯಿರಿ.
        </p>
      </header>
      
      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>ಹಣಕಾಸು ಜ್ಯೋತಿಷ್ಯ ಎಂದರೇನು?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                <p>
                ಹಣಕಾಸು ಜ್ಯೋತಿಷ್ಯವು ಜ್ಯೋತಿಷ್ಯ ಶಾಸ್ತ್ರದ ಒಂದು ವಿಶೇಷ ಶಾಖೆಯಾಗಿದ್ದು, ಇದು ಗ್ರಹಗಳ ಸ್ಥಾನ ಮತ್ತು ಚಲನೆಯನ್ನು ಆಧರಿಸಿ ಆರ್ಥಿಕ ಪ್ರವೃತ್ತಿಗಳು, ಮಾರುಕಟ್ಟೆಯ ಏರಿಳಿತಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಹೂಡಿಕೆಗಳ ಭವಿಷ್ಯವನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ. ಪ್ರತಿಯೊಂದು ಗ್ರಹ, ರಾಶಿ ಮತ್ತು ನಕ್ಷತ್ರವು ನಿರ್ದಿಷ್ಟ ಆರ್ಥಿಕ ಕ್ಷೇತ್ರಗಳು ಮತ್ತು ಸರಕುಗಳ ಮೇಲೆ ತನ್ನ ಪ್ರಭಾವವನ್ನು ಬೀರುತ್ತದೆ. ಈ ಜ್ಞಾನವನ್ನು ಬಳಸಿಕೊಂಡು, ಒಬ್ಬ ವ್ಯಕ್ತಿಯ ಜಾತಕದ ಆಧಾರದ ಮೇಲೆ ಅವರಿಗೆ ಯಾವ ರೀತಿಯ ಹೂಡಿಕೆಗಳು (ದೀರ್ಘಾವಧಿ, ಅಲ್ಪಾವಧಿ, ಊಹಾಪೋಹ) ಲಾಭದಾಯಕವಾಗಬಹುದು ಮತ್ತು ಯಾವ ಸಮಯದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುವುದು ಅಥವಾ ಮಾರಾಟ ಮಾಡುವುದು ಉತ್ತಮ ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
                </p>
            </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>ಹಕ್ಕು ನಿರಾಕರಣೆ (Disclaimer)</AlertTitle>
          <AlertDescription>
            ಇಲ್ಲಿ ನೀಡಲಾದ ಮಾಹಿತಿಯು ಕೇವಲ ಜ್ಯೋತಿಷ್ಯದ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ಇದು ಯಾವುದೇ ರೀತಿಯ ಹಣಕಾಸು ಸಲಹೆ ಅಥವಾ ಹೂಡಿಕೆಯ ಶಿಫಾರಸು ಅಲ್ಲ. ಶೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುವುದು ಅಪಾಯಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ. ದಯವಿಟ್ಟು ಹೂಡಿಕೆ ಮಾಡುವ ಮೊದಲು ಅರ್ಹ ಹಣಕಾಸು ಸಲಹೆಗಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <div className="space-y-6">
        {planetaryInfluences.map((item, index) => (
          <ScrollAnimate key={index} delay={300 + index * 150}>
            <Card className="transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          </ScrollAnimate>
        ))}
      </div>
      
      <ScrollAnimate delay={400 + planetaryInfluences.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ಶೇರು ಮಾರುಕಟ್ಟೆ ಜ್ಯೋತಿಷ್ಯ ವರದಿ
                </CardTitle>
                <CardDescription>
                ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯ ಆಧಾರದ ಮೇಲೆ, ನಿಮಗೆ ಯಾವ ಕ್ಷೇತ್ರಗಳು ಮತ್ತು ಸಮಯಗಳು ಹೂಡಿಕೆಗೆ ಅನುಕೂಲಕರವಾಗಿವೆ ಎಂಬುದರ ಕುರಿತು ವೈಯಕ್ತಿಕ ವರದಿಯನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿನ ಧನ ಯೋಗಗಳು, ಗ್ರಹಗಳ ಬಲಾಬಲ ಮತ್ತು ಪ್ರಸ್ತುತ ದಶಾ-ಭುಕ್ತಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ಶೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನಿಮ್ಮ ಯಶಸ್ಸಿನ ಸಾಧ್ಯತೆಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಸಂಭಾವ್ಯ ನಷ್ಟಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಗುರೂಜಿಯವರಿಂದ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ.
                </p>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row items-center gap-4">
                <p className="text-xl font-bold text-primary">ಶುಲ್ಕ: ₹3,333</p>
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
