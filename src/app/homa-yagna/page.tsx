
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Flame, AlertTriangle, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import homaYagnaData from '@/lib/content/homa-yagna.json';
import HomaAnimation from '@/components/homa-animation';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ಹೋಮ ಮತ್ತು ಯಜ್ಞದ ಬಗ್ಗೆ ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function HomaYagnaPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Flame />
          {homaYagnaData.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          ಬ್ರಹ್ಮಾಂಡದ ಶಕ್ತಿಗಳೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸುವ ಪವಿತ್ರ ಅಗ್ನಿ ಆಚರಣೆಗಳು.
        </p>
      </header>
      
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center my-4 overflow-hidden rounded-lg bg-muted/30">
        <HomaAnimation />
      </div>

      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-destructive/50 text-destructive [&>svg]:text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">ಅತ್ಯಂತ ಪ್ರಮುಖ ಎಚ್ಚರಿಕೆ</AlertTitle>
          <AlertDescription>
            ಹೋಮ ಮತ್ತು ಯಜ್ಞಗಳು ಅತ್ಯಂತ ಸಂಕೀರ್ಣ ಮತ್ತು ಶಕ್ತಿಶಾಲಿಯಾದ ವೈದಿಕ ಮತ್ತು ತಾಂತ್ರಿಕ ಕ್ರಿಯೆಗಳಾಗಿವೆ. ಇವುಗಳಿಗೆ ಮಂತ್ರಗಳ ನಿಖರವಾದ ಉಚ್ಚಾರಣೆ, ಕ್ರಿಯೆಗಳ ಸರಿಯಾದ ಕ್ರಮ ಮತ್ತು ಆಳವಾದ ಜ್ಞಾನದ ಅಗತ್ಯವಿರುತ್ತದೆ. ದಯವಿಟ್ಟು ಈ ಆಚರಣೆಗಳನ್ನು ಸ್ವಂತವಾಗಿ ಅಥವಾ ಅನನುಭವಿಗಳಿಂದ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ. ಯಾವಾಗಲೂ ಅರ್ಹ ಮತ್ತು ಅನುಭವಿ ಪುರೋಹಿತರ ಅಥವಾ ಗುರುಗಳ ನೇರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಮಾತ್ರ ನಡೆಸಬೇಕು.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{homaYagnaData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {homaYagnaData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <div className="space-y-6">
        {homaYagnaData.sections.map((item, index) => (
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

       <ScrollAnimate delay={400 + homaYagnaData.sections.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="text-primary"/>
              {homaYagnaData.conclusion.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {homaYagnaData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + homaYagnaData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ ಹೋಮ ಮತ್ತು ಯಜ್ಞ ಸೇವೆಗಳು
                </CardTitle>
                <CardDescription>
                ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಉದ್ದೇಶಗಳು ಮತ್ತು ಜಾತಕಕ್ಕೆ ಅನುಗುಣವಾಗಿ, ನಿಮಗಾಗಿ ವಿಶೇಷವಾಗಿ ಹೋಮ ಅಥವಾ ಯಜ್ಞವನ್ನು ನಡೆಸಲು ನಮ್ಮ ಪರಿಣಿತರನ್ನು ಸಂಪರ್ಕಿಸಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 space-y-4">
                    <p>
                    ನಿಮ್ಮ ಜೀವನದ ಅಡೆತಡೆಗಳನ್ನು ನಿವಾರಿಸಲು, ಗ್ರಹ ದೋಷಗಳನ್ನು ಶಾಂತಗೊಳಿಸಲು, ಅಥವಾ ನಿರ್ದಿಷ್ಟ ದೇವತೆಯ ಅನುಗ್ರಹವನ್ನು ಪಡೆಯಲು, ನಮ್ಮ ಅನುಭವಿ ಗುರುಗಳು ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ಹೋಮವನ್ನು ನಡೆಸಿಕೊಡುತ್ತಾರೆ. ನಿಮ್ಮ ಅಗತ್ಯಗಳನ್ನು ಚರ್ಚಿಸಲು ಮತ್ತು ಸೂಕ್ತವಾದ ಹೋಮವನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.
                    </p>
                    <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
                        <AlertTitle className="font-bold">ಗೌಪ್ಯತೆಯ ಸೂಚನೆ</AlertTitle>
                        <AlertDescription>
                        ನಾವು ಕೇವಲ ತಾಂತ್ರಿಕ ಹೋಮ ಮತ್ತು ಯಜ್ಞಗಳನ್ನು ಮಾತ್ರ ಮಾಡುತ್ತೇವೆ. ತಂತ್ರದ ಗೌಪ್ಯತೆಯ ತತ್ವವನ್ನು ಗೌರವಿಸಲು, ಈ ಆಚರಣೆಗಳನ್ನು ಅತ್ಯಂತ ರಹಸ್ಯವಾಗಿ ಮಾಡಲಾಗುತ್ತದೆ. ಹೋಮದ ಸ್ಥಳ, ದಿನಾಂಕ ಮತ್ತು ಸಮಯವನ್ನು ಯಾರಿಗೂ, ಯಾರಿಗಾಗಿ ಹೋಮ ಮಾಡಲಾಗುತ್ತದೆಯೋ ಅವರಿಗೂ ಸಹ, ತಿಳಿಸಲಾಗುವುದಿಲ್ಲ. ಆಚರಣೆಯ ಸಮಯದಲ್ಲಿ ಯಾರ ಉಪಸ್ಥಿತಿಗೂ ಅನುಮತಿಯಿಲ್ಲ. ಕಾರ್ಯವು ಪೂರ್ಣಗೊಂಡ ನಂತರ, 'ಕಾರ್ಯವು ಮುಗಿದಿದೆ' ಎಂಬ ಮಾಹಿತಿಯನ್ನು ಮಾತ್ರ ನೀಡಲಾಗುತ್ತದೆ.
                        </AlertDescription>
                    </Alert>
                </div>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row items-center gap-4">
                <p className="text-xl font-bold text-primary">ಶುಲ್ಕವು ಹೋಮದ ಪ್ರಕಾರವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ</p>
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
