
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Clock, AlertTriangle, Library, ArrowRight, Star, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ChariotWheelAnimation from '@/components/chariot-wheel-animation';

const prophecies = [
  {
    title: "ಜ್ಞಾನದ ಪ್ರಾಮುಖ್ಯತೆ",
    prophecy: "ಕಲಿಯುಗದ ಅಂತ್ಯದಲ್ಲಿ, ಜ್ಞಾನವು ಎಲ್ಲಕ್ಕಿಂತ ಮಿಗಿಲಾದ ಶಕ್ತಿಯಾಗುತ್ತದೆ. ಯಾರು ಜ್ಞಾನವನ್ನು ಹೊಂದಿರುವರೋ, ಅವರೇ ಜಗತ್ತನ್ನು ಆಳುವರು. ಭೌತಿಕ ಶಕ್ತಿಯು ಜ್ಞಾನದ ಮುಂದೆ ಮಂಡಿಯೂರಲಿದೆ.",
    source: "ಶ್ರೀ ಪೋತುಲೂರಿ ವೀರಬ್ರಹ್ಮೇಂದ್ರ ಸ್ವಾಮಿಗಳ ಕಾಲಜ್ಞಾನ"
  },
  {
    title: "ಪ್ರಕೃತಿಯ ಮುನಿಸು",
    prophecy: "ಮಾನವನು ಪ್ರಕೃತಿಯನ್ನು ಮರೆತು ಅಹಂಕಾರದಿಂದ ಮೆರೆದಾಗ, ಪ್ರಕೃತಿಯು ತನ್ನ रौद्र रूपವನ್ನು ತೋರಿಸುತ್ತದೆ. ಅಕಾಲಿಕ ಮಳೆ, ಭೂಕಂಪಗಳು ಮತ್ತು ವಿಚಿತ್ರ ರೋಗಗಳು ಸಾಮಾನ್ಯವಾಗುತ್ತವೆ.",
    source: "ಶ್ರೀ ಪೋತುಲೂರಿ ವೀರಬ್ರಹ್ಮೇಂದ್ರ ಸ್ವಾಮಿಗಳ ಕಾಲಜ್ಞಾನ"
  },
  {
    title: "ಮಹಾಯುದ್ಧಗಳು ಮತ್ತು ಜಾಗತಿಕ ಸಂಘರ್ಷ",
    prophecy: "ಪಶ್ಚಿಮದಲ್ಲಿ ಎರಡು ಮಹಾನ್ ಶಕ್ತಿಗಳು ಘರ್ಷಿಸುತ್ತವೆ, ಮತ್ತು ಅವರ ಯುದ್ಧವು ಪ್ರಪಂಚದಾದ್ಯಂತ ಹರಡುತ್ತದೆ. ಆಕಾಶದಿಂದ ಬೆಂಕಿ ಸುರಿಯುತ್ತದೆ ಮತ್ತು ಅನೇಕ ನಗರಗಳು ನಾಶವಾಗುತ್ತವೆ.",
    source: "ನಾಸ್ಟ್ರಾಡಾಮಸ್, 'ಲೆಸ್ ಪ್ರೊಫೆಟೀಸ್'"
  },
  {
    title: "ಸಾಮಾಜಿಕ ಮೌಲ್ಯಗಳ ಪತನ",
    prophecy: "ಕಲಿಯುಗದಲ್ಲಿ, ಕಳ್ಳರು ಮತ್ತು ವಂಚಕರು ಸಮಾಜದಲ್ಲಿ ಗೌರವವನ್ನು ಪಡೆಯುತ್ತಾರೆ. ಸತ್ಯವಂತರು ಮತ್ತು ಧರ್ಮಿಗಳು ಕಷ್ಟಪಡುತ್ತಾರೆ. ಸಂಬಂಧಗಳು ತಮ್ಮ ಪಾವಿತ್ರ್ಯವನ್ನು ಕಳೆದುಕೊಳ್ಳುತ್ತವೆ.",
    source: "ಶ್ರೀಮದ್ ಭಾಗವತ ಪುರಾಣ"
  },
  {
    title: "ಕಲ್ಕಿ ಅವತಾರ ಮತ್ತು ಧರ್ಮ ಸಂಸ್ಥಾಪನೆ",
    prophecy: "ಕಲಿಯುಗದ ಅಂತ್ಯದಲ್ಲಿ, ಜಗತ್ತಿನಲ್ಲಿ ಅಧರ್ಮವು ಹೆಚ್ಚಾದಾಗ, ಭಗವಾನ್ ವಿಷ್ಣುವು 'ಕಲ್ಕಿ'ಯಾಗಿ ಅವತರಿಸುತ್ತಾನೆ. ಅವನು ದುಷ್ಟರನ್ನು ನಾಶಮಾಡಿ, ಸತ್ಯ ಮತ್ತು ಧರ್ಮವನ್ನು ಪುನಃ ಸ್ಥಾಪಿಸಿ, ಹೊಸ ಸತ್ಯಯುಗಕ್ಕೆ ನಾಂದಿ ಹಾಡುತ್ತಾನೆ.",
    source: "ಭವಿಷ್ಯ ಮಾಳಿಕಾ"
  },
  {
    title: "ತಂತ್ರಜ್ಞಾನದ ಪ್ರಭಾವ",
    prophecy: "ಮಾನವನು ಯಂತ್ರಗಳನ್ನು ಸೃಷ್ಟಿಸಿ, ಅವುಗಳ ದಾಸನಾಗುತ್ತಾನೆ. ದೂರದಲ್ಲಿರುವವರೊಂದಿಗೆ ಮಾತನಾಡುತ್ತಾ, ಪಕ್ಕದಲ್ಲಿರುವವರನ್ನು ಮರೆಯುತ್ತಾನೆ. ಮಾಯೆಯು ಹೊಸ ರೂಪದಲ್ಲಿ ಜಗತ್ತನ್ನು ಆವರಿಸುತ್ತದೆ.",
    source: "ಆಧುನಿಕ ಯೋಗಿಗಳ ವ್ಯಾಖ್ಯಾನಗಳು"
  },
  {
    title: "ಆಧ್ಯಾತ್ಮಿಕ ಜಾಗೃತಿ",
    prophecy: "ಭೌತಿಕತೆಯ ಅತಿಯಾದ ನಂತರ, ಜನರ ಮನಸ್ಸಿನಲ್ಲಿ ಆಧ್ಯಾತ್ಮಿಕತೆಯ ಹುಡುಕಾಟ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ. ಪ್ರಾಚೀನ ಜ್ಞಾನ ಮತ್ತು ಗುರು ಪರಂಪರೆಗೆ ಮತ್ತೆ ಮಹತ್ವ ಬರುತ್ತದೆ. ಜನರು ಶಾಂತಿಗಾಗಿ ಆಂತರಿಕ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತಾರೆ.",
    source: "ವಿವಿಧ ಆಧ್ಯಾತ್ಮಿಕ ಸಂಪ್ರದಾಯಗಳು"
  }
];

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ವೈಯಕ್ತಿಕ ಕಾಲಜ್ಞಾನ ವರದಿಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


export default function KaalagnanaPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Clock />
          ಕಾಲಜ್ಞಾನ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಕಾಲದ ಜ್ಞಾನ ಮತ್ತು ಭವಿಷ್ಯದ ಬಗ್ಗೆ ವಿವಿಧ ಸಂಸ್ಕೃತಿಗಳ ಮಹಾಪುರುಷರು ನುಡಿದಿರುವ ಮಾತುಗಳು.
        </p>
      </header>
      
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center my-4 overflow-hidden rounded-lg">
          <ChariotWheelAnimation />
      </div>

      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>ಕಾಲಜ್ಞಾನ ಎಂದರೇನು?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                <p>
                ಕಾಲಜ್ಞಾನವೆಂದರೆ 'ಕಾಲದ ಜ್ಞಾನ'. ಇದು ಭೂತ, ವರ್ತಮಾನ ಮತ್ತು ಭವಿಷ್ಯದ ಬಗ್ಗೆ ಅತೀಂದ್ರಿಯ ಶಕ್ತಿಯ ಮೂಲಕ ಪಡೆದ ಜ್ಞಾನವಾಗಿದೆ. ಇದು ಕೇವಲ ಭವಿಷ್ಯ ನುಡಿಯುವುದಷ್ಟೇ ಅಲ್ಲ, ಅದೊಂದು ಆಳವಾದ ದಾರ್ಶನಿಕ ಚೌಕಟ್ಟಾಗಿದೆ. ಭಾರತೀಯ ಪರಂಪರೆಯಲ್ಲಿ, ಕಾಲವನ್ನು ಚಕ್ರೀಯವೆಂದು (cyclical) ಪರಿಗಣಿಸಲಾಗಿದೆ. ಸತ್ಯ, ತ್ರೇತಾ, ದ್ವಾಪರ ಮತ್ತು ಕಲಿಯುಗಗಳೆಂಬ ನಾಲ್ಕು ಯುಗಗಳು ನಿರಂತರವಾಗಿ ಪುನರಾವರ್ತನೆಯಾಗುತ್ತವೆ. ಪ್ರತಿಯೊಂದು ಯುಗಕ್ಕೂ ತನ್ನದೇ ಆದ ಗುಣಲಕ್ಷಣಗಳಿರುತ್ತವೆ. ನಾವು ಪ್ರಸ್ತುತ ಇರುವ ಕಲಿಯುಗವು ಅಧರ್ಮ, ಅಜ್ಞಾನ ಮತ್ತು ಸಂಘರ್ಷದಿಂದ ಕೂಡಿದೆ ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ.
                </p>
                <p>
                ಶ್ರೀ ಪೋತುಲೂರಿ ವೀರಬ್ರಹ್ಮೇಂದ್ರ ಸ್ವಾಮಿಗಳು, ಬಸವಣ್ಣನವರು, ಮತ್ತು 'ಭವಿಷ್ಯ ಮಾಳಿಕಾ'ದಂತಹ ಗ್ರಂಥಗಳು ಕಲಿಯುಗದ ಅಂತ್ಯದಲ್ಲಿ ನಡೆಯುವ ಘಟನೆಗಳನ್ನು ಮತ್ತು ಹೊಸ ಸತ್ಯಯುಗದ ಆರಂಭವನ್ನು ವಿವರವಾಗಿ ವರ್ಣಿಸುತ್ತವೆ. ಅಂತೆಯೇ, ನಾಸ್ಟ್ರಾಡಾಮಸ್‌ನಂತಹ ಪಾಶ್ಚಿಮಾತ್ಯ ದಾರ್ಶನಿಕರೂ ಸಹ ತಮ್ಮದೇ ಆದ ರೀತಿಯಲ್ಲಿ ಭವಿಷ್ಯದ ಬಗ್ಗೆ ಬರೆದಿದ್ದಾರೆ. ಈ ಭವಿಷ್ಯವಾಣಿಗಳ ಮುಖ್ಯ ಉದ್ದೇಶವು ಜನರನ್ನು ಭಯಭೀತರನ್ನಾಗಿಸುವುದಲ್ಲ, ಬದಲಿಗೆ ಮಾನವಕುಲಕ್ಕೆ ಎಚ್ಚರಿಕೆಗಳನ್ನು ನೀಡುವುದು, ಧರ್ಮದ ಮಾರ್ಗದಲ್ಲಿ ನಡೆಯಲು ಪ್ರೇರೇಪಿಸುವುದು ಮತ್ತು ಮುಂಬರುವ ಪರಿವರ್ತನೆಗೆ ಮಾನಸಿಕವಾಗಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕವಾಗಿ ಸಿದ್ಧರಾಗಲು ಸಹಾಯ ಮಾಡುವುದಾಗಿದೆ. ಇದು ನಮಗೆ ನಮ್ಮ ಕರ್ಮಗಳ ಬಗ್ಗೆ ಜಾಗೃತರಾಗಿರಲು ಮತ್ತು ಸಮಾಜದ ಒಳಿತಿಗಾಗಿ ಕೆಲಸ ಮಾಡಲು ಒಂದು ಸಂದೇಶವನ್ನು ನೀಡುತ್ತದೆ.
                </p>
            </CardContent>
        </Card>
      </ScrollAnimate>
      
      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
          <AlertDescription>
            ಇಲ್ಲಿ ನೀಡಲಾದ ಕಾಲಜ್ಞಾನದ ವಚನಗಳು ವ್ಯಾಖ್ಯಾನಕ್ಕೆ ಒಳಪಟ್ಟಿವೆ ಮತ್ತು ಮಾಹಿತಿ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ಇದನ್ನು ಯಾವುದೇ ರೀತಿಯಲ್ಲಿ ಅಂತಿಮ ಸತ್ಯವೆಂದು ಪರಿಗಣಿಸಬಾರದು. ಇದು ನಿಮ್ಮನ್ನು ಭಯಭೀತರನ್ನಾಗಿ ಮಾಡುವ ಉದ್ದೇಶವನ್ನು ಹೊಂದಿಲ್ಲ, ಬದಲಿಗೆ ಆತ್ಮಾವಲೋಕನಕ್ಕೆ ಪ್ರೇರೇಪಿಸುವುದಾಗಿದೆ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate delay={300}>
        <Card className="transform hover:scale-[1.01] transition-transform duration-300 ease-in-out bg-card/80 backdrop-blur-sm shadow-md">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                    <Star />
                    ಮುಂಬರುವ ವರ್ಷಗಳ ಕಾಲಜ್ಞಾನ (ನಮ್ಮ ಗುರುಗಳಿಂದ)
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                ಈ ವಿಭಾಗದಲ್ಲಿ, ನಮ್ಮ ಗುರುಗಳಾದ ಶ್ರೀ ನಾಗರಾಜ ಡಿ. ರವರು ಮುಂಬರುವ ವರ್ಷಗಳ ಬಗ್ಗೆ ನೀಡುವ ಕಾಲಜ್ಞಾನದ ಮಾಹಿತಿಯನ್ನು ಶೀಘ್ರದಲ್ಲೇ ನವೀಕರಿಸಲಾಗುವುದು. ನಿರೀಕ್ಷಿಸಿ...
                </p>
            </CardContent>
        </Card>
      </ScrollAnimate>

      <div className="space-y-6">
        {prophecies.map((item, index) => (
          <ScrollAnimate key={index} delay={450 + index * 150}>
            <Card className="transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">{item.title}</CardTitle>
                <CardDescription>ಮೂಲ: {item.source}</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/90 text-lg">
                    {item.prophecy}
                </blockquote>
              </CardContent>
            </Card>
          </ScrollAnimate>
        ))}
      </div>
      
      <ScrollAnimate delay={400 + prophecies.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Library className="text-primary"/>
              ಹೆಚ್ಚಿನ ಜ್ಞಾನಕ್ಕಾಗಿ
            </CardTitle>
            <CardDescription>
              ಈ ಪುಟದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾದ ಗ್ರಂಥಗಳು ಮತ್ತು ಇತರ ಪ್ರಾಚೀನ ತಂತ್ರ ಸಾಹಿತ್ಯದ ಬಗ್ಗೆ ಆಳವಾಗಿ ತಿಳಿಯಲು, ದಯವಿಟ್ಟು ನಮ್ಮ ಸಾಹಿತ್ಯ ವಿಭಾಗಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
                <Link href="/literature">
                    ಸಾಹಿತ್ಯ ವಿಭಾಗಕ್ಕೆ ಭೇಟಿ ನೀಡಿ
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </CardFooter>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + prophecies.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ಕಾಲಜ್ಞಾನ ವರದಿ
                </CardTitle>
                <CardDescription>
                ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿ ಮತ್ತು ಪ್ರಸ್ತುತ ಗ್ರಹಸ್ಥಿತಿಗಳ ಆಧಾರದ ಮೇಲೆ, ಮುಂಬರುವ ಸಮಯದ ಬಗ್ಗೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ವರದಿಯನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                ಕಾಲಜ್ಞಾನದ ಸಾಮಾನ್ಯ ಭವಿಷ್ಯವಾಣಿಗಳ ಆಚೆಗೆ, ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಜೀವನಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ ಮುಂಬರುವ ಅವಕಾಶಗಳು, ಸವಾಲುಗಳು ಮತ್ತು ತೆಗೆದುಕೊಳ್ಳಬೇಕಾದ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳ ಬಗ್ಗೆ ಆಳವಾದ ಒಳನೋಟಗಳನ್ನು ನೇರವಾಗಿ ಗುರೂಜಿಯವರಿಂದ ಪಡೆಯಿರಿ.
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

      <ScrollAnimate delay={600 + prophecies.length * 150}>
        <div className="text-center text-muted-foreground italic mt-8">
          <p>ಇನ್ನಷ್ಟು ಜ್ಞಾನ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ, ನಿರೀಕ್ಷಿಸಿ...</p>
        </div>
      </ScrollAnimate>
    </div>
  );
}
