
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Gem, AlertTriangle, UserCheck, Phone, ShoppingCart } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import energizedItemsData from '@/lib/content/energized-items.json';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ಶಕ್ತಿ ತುಂಬಿದ ಸಾಧನಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಲು ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function EnergizedItemsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Gem />
          ಶಕ್ತಿ ತುಂಬಿದ ಮಾಲಾ ಮತ್ತು ಯಂತ್ರಗಳು
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸವನ್ನು ಹೆಚ್ಚಿಸಲು ಪ್ರಾಣಪ್ರತಿಷ್ಠಾಪನೆ ಮಾಡಿದ ಸಾಧನಗಳು.
        </p>
      </header>
      
      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{energizedItemsData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {energizedItemsData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">ಗಮನಿಸಿ</AlertTitle>
          <AlertDescription>
            ಪ್ರಾಣಪ್ರತಿಷ್ಠಾಪನೆಯು ಅತ್ಯಂತ ಪವಿತ್ರವಾದ ಮತ್ತು ಶಕ್ತಿಶಾಲಿಯಾದ ಪ್ರಕ್ರಿಯೆ. ಇದನ್ನು ಕೇವಲ ಅರ್ಹ ಮತ್ತು ಅನುಭವಿ ಗುರುಗಳು ಮಾತ್ರ ಮಾಡಲು ಸಾಧ್ಯ. ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಸಿಗುವ ಎಲ್ಲಾ ಯಂತ್ರಗಳು ಮತ್ತು ಮಾಲಾಗಳು ಕೇವಲ ವಸ್ತುಗಳು, ಅವುಗಳಲ್ಲಿ ದೈವಿಕ ಶಕ್ತಿ ನೆಲೆಸಿರುವುದಿಲ್ಲ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <div className="space-y-6">
        {energizedItemsData.sections.map((item, index) => (
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

      <ScrollAnimate delay={300}>
        <section className="space-y-6">
            <h2 className="text-3xl font-bold font-headline text-primary text-center flex items-center justify-center gap-3">
                <ShoppingCart />
                ಲಭ್ಯವಿರುವ ಸಾಧನಗಳು
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {energizedItemsData.products.map((product, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-accent">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{product.description}</p>
                        </CardContent>
                        <CardFooter>
                            <p className="text-xl font-bold text-primary w-full text-center">{product.price}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + energizedItemsData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ನಿಮಗಾಗಿ ವೈಯಕ್ತಿಕವಾಗಿ ಸಿದ್ಧಪಡಿಸಿದ ಸಾಧನಗಳು
                </CardTitle>
                <CardDescription>
                ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿ, ನಿಮ್ಮ ಹೆಸರು ಮತ್ತು ನಿಮ್ಮ ಉದ್ದೇಶಕ್ಕೆ ಅನುಗುಣವಾಗಿ, ನಿಮಗಾಗಿಯೇ ವಿಶೇಷವಾಗಿ ಪ್ರಾಣಪ್ರತಿಷ್ಠಾಪನೆ ಮಾಡಿದ ಯಂತ್ರ, ಮಾಲಾ ಅಥವಾ ಇತರ ಸಾಧನಗಳನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                ಗುರೂಜಿಯವರು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ಆಧರಿಸಿ, ನಿರ್ದಿಷ್ಟ ಮುಹೂರ್ತದಲ್ಲಿ, ಮಂತ್ರಗಳನ್ನು ಜಪಿಸಿ, ಹೋಮವನ್ನು ಮಾಡಿ, ನಿಮಗಾಗಿ ವಿಶೇಷವಾಗಿ ಸಾಧನವನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತಾರೆ. ಇದು ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಲೌಕಿಕ ಗುರಿಗಳನ್ನು ಸಾಧಿಸಲು ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಸಹಕಾರಿಯಾಗುತ್ತದೆ.
                </p>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row items-center gap-4">
                <p className="text-xl font-bold text-primary">ಶುಲ್ಕವು ಸಾಧನ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ</p>
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
