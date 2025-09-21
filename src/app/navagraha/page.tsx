
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Stars, AlertTriangle, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NavagrahaSystem from '@/components/navagraha-system';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ವೈಯಕ್ತಿಕ ಜಾತಕ ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function NavagrahaPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Stars />
          ನವಗ್ರಹಗಳು ಮತ್ತು ಜೀವನ
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಮ್ಮ ಜೀವನದ ಮೇಲೆ ಒಂಬತ್ತು ಗ್ರಹಗಳು ಬೀರುವ ಪ್ರಭಾವದ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.
        </p>
      </header>
      
      <Card className="transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        <CardHeader>
          <CardTitle className="font-headline text-xl">ನವಗ್ರಹ ಮಂಡಲ</CardTitle>
          <CardDescription>ಗ್ರಹಗಳ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಅವುಗಳ ಪ್ರಭಾವದ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center">
                <NavagrahaSystem />
            </div>
        </CardContent>
      </Card>
      
      <ScrollAnimate delay={150}>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>ಗಮನಿಸಿ</AlertTitle>
          <AlertDescription>
            ಇಲ್ಲಿ ನೀಡಿರುವುದು ಗ್ರಹಗಳ ಸಾಮಾನ್ಯ ಗುಣಲಕ್ಷಣಗಳು. ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಜನ್ಮ ಕುಂಡಲಿಯಲ್ಲಿ ಅವುಗಳ ಸ್ಥಾನ, ದೃಷ್ಟಿ ಮತ್ತು ಸಂಯೋಗಗಳ ಆಧಾರದ ಮೇಲೆ ಅವುಗಳ ಪ್ರಭಾವವು ವಿಭಿನ್ನವಾಗಿರುತ್ತದೆ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate delay={500}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ಜಾತಕ ವಿಶ್ಲೇಷಣೆ
                </CardTitle>
                <CardDescription>
                  ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ನಿಮ್ಮ ಜೀವನದ ಮೇಲೆ ಗ್ರಹಗಳು ಹೇಗೆ ಪ್ರಭಾವ ಬೀರುತ್ತಿವೆ ಎಂಬುದರ ಕುರಿತು ಆಳವಾದ ಒಳನೋಟಗಳನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                  ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿ ಯಾವ ಗ್ರಹಗಳು ಬಲವಾಗಿವೆ, ಯಾವುವು ದುರ್ಬಲವಾಗಿವೆ, ಮತ್ತು ಅವುಗಳ ಪ್ರಭಾವವನ್ನು ಸಮತೋಲನಗೊಳಿಸಲು ಯಾವ ಪರಿಹಾರಗಳನ್ನು ಮಾಡಬೇಕು ಎಂಬುದರ ಕುರಿತು ಗುರೂಜಿಯವರಿಂದ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.
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
