
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, CheckCircle, CreditCard, Send, TrendingUp, Phone, Timer } from 'lucide-react';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const OFFER_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const REGULAR_PRICE = '₹11,111/-';
const DISCOUNTED_PRICE = '₹5,555.5/-';

export default function InitiationProcessPage() {
  const [offerEndTime, setOfferEndTime] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [isOfferActive, setIsOfferActive] = useState(false);

  useEffect(() => {
    const storedEndTime = localStorage.getItem('initiationOfferEndTime');
    let endTime: number;

    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      endTime = Date.now() + OFFER_DURATION;
      localStorage.setItem('initiationOfferEndTime', endTime.toString());
    }
    setOfferEndTime(endTime);
  }, []);

  useEffect(() => {
    if (!offerEndTime) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = offerEndTime - now;

      if (remaining > 0) {
        setIsOfferActive(true);
        const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        const minutes = Math.floor((remaining / 1000 / 60) % 60).toString().padStart(2, '0');
        const seconds = Math.floor((remaining / 1000) % 60).toString().padStart(2, '0');
        setTimeRemaining(`${hours}:${minutes}:${seconds}`);
      } else {
        setIsOfferActive(false);
        setTimeRemaining('');
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [offerEndTime]);

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <header className="flex items-center justify-between">
        <Button asChild variant="ghost">
          <Link href="/initiation">
            <ArrowLeft className="mr-2 h-4 w-4" />
            ಹಿಂದಕ್ಕೆ
          </Link>
        </Button>
      </header>
      
      <main className="space-y-8">
        <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold font-headline text-primary">ದೀಕ್ಷಾ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಶುಲ್ಕ</h1>
            <p className="text-lg text-muted-foreground">
            ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಅನುಸರಿಸಬೇಕಾದ ಹಂತಗಳು.
            </p>
        </div>

        {isOfferActive && (
          <Alert variant="destructive" className="border-accent text-accent [&>svg]:text-accent animate-pulse-glow">
            <Timer className="h-4 w-4" />
            <AlertTitle className="font-bold text-lg">ವಿಶೇಷ ಕೊಡುಗೆ!</AlertTitle>
            <AlertDescription>
              ಈಗ ನೋಂದಾಯಿಸಿ ಮತ್ತು 50% ರಿಯಾಯಿತಿ ಪಡೆಯಿರಿ. ಈ ಕೊಡುಗೆಯು ಸೀಮಿತ ಅವಧಿಗೆ ಮಾತ್ರ.
            </AlertDescription>
          </Alert>
        )}

        <Card className="border-primary/30 transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-accent">ದೀಕ್ಷಾ ಪ್ರಕ್ರಿಯೆ</CardTitle>
            <CardDescription>ದೀಕ್ಷೆ ಪಡೆಯಲು ಈ ಸರಳ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                    <span><strong className="font-semibold">ನೋಂದಣಿ:</strong> ಕೆಳಗಿನ 'ಈಗ ನೋಂದಾಯಿಸಿ' ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಪಾವತಿ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                    <span><strong className="font-semibold">ಶುಲ್ಕ ಪಾವತಿ:</strong> PhonePe ಬಳಸಿ ದೀಕ್ಷಾ ಶುಲ್ಕವನ್ನು ಪಾವತಿಸಿ.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                    <span><strong className="font-semibold">ಸಮಯ ನಿಗದಿ:</strong> ಪಾವತಿಯ ನಂತರ, ಪಾವತಿ ವಿವರಗಳನ್ನು 7022070287 ಸಂಖ್ಯೆಗೆ WhatsApp ಮಾಡಿ.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                    <span><strong className="font-semibold">ದೀಕ್ಷಾ ಸಂಸ್ಕಾರ:</strong> ನಿಗದಿತ ಸಮಯದಲ್ಲಿ, ಗುರುಗಳು ನಿಮಗೆ ಮಂತ್ರೋಪದೇಶ ಮತ್ತು ಶಕ್ತಿಪಾತವನ್ನು ನೀಡುತ್ತಾರೆ.</span>
                </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-accent/30 transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-accent">ಪ್ರವೇಶ ಮಟ್ಟ - ದೀಕ್ಷಾ ಶುಲ್ಕ</CardTitle>
            <CardDescription>ಈ ಶುಲ್ಕವು ಜ್ಞಾನ ಪರಂಪರೆಯ ನಿರ್ವಹಣೆ ಮತ್ತು ಮುಂದುವರಿಕೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
                {isOfferActive ? (
                  <>
                    <p className="text-3xl font-bold text-muted-foreground line-through decoration-destructive decoration-2">{REGULAR_PRICE}</p>
                    <p className="text-5xl font-bold text-primary">{DISCOUNTED_PRICE}</p>
                    <div className="mt-2 text-accent animate-pulse-glow">
                        <p className="text-sm font-semibold">ಕೊಡುಗೆ ಮುಕ್ತಾಯಗೊಳ್ಳುತ್ತದೆ:</p>
                        <span className="block text-2xl font-bold mt-1 tracking-widest">{timeRemaining}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-5xl font-bold text-primary">{REGULAR_PRICE}</p>
                )}
                <p className="text-muted-foreground mt-2">(ಒಂದು ಬಾರಿಯ ಪಾವತಿ)</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>ವೈಯಕ್ತಿಕ ಮಂತ್ರೋಪದೇಶ</li>
                <li>ನಿತ್ಯ ಸಾಧನಾ ಮಾರ್ಗದರ್ಶನಕ್ಕೆ ಪ್ರವೇಶ</li>
                <li>ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಬೆಂಬಲ</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2"/>
                    ಈಗ ನೋಂದಾಯಿಸಿ
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-headline text-primary">ಪಾವತಿ ವಿವರಗಳು</DialogTitle>
                  <DialogDescription>
                  ಪಾವತಿ ಮಾಡಲು ದಯವಿಟ್ಟು ಈ ವಿವರಗಳನ್ನು ಬಳಸಿ. ಪಾವತಿಯ ನಂತರ, ದೃಢೀಕರಣಕ್ಕಾಗಿ ನಿಮ್ಮ ಪಾವತಿ ವಿವರಗಳನ್ನು WhatsApp ಮಾಡಿ.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted">
                        <Phone className="h-6 w-6 text-accent"/>
                        <div>
                            <p className="text-sm text-muted-foreground">PhonePe ಸಂಖ್ಯೆ</p>
                            <p className="text-lg font-semibold">7022070287</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted">
                        <CreditCard className="h-6 w-6 text-accent"/>
                        <div>
                            <p className="text-sm text-muted-foreground">ಹೆಸರು</p>
                            <p className="text-lg font-semibold">D. Nagaraja</p>
                        </div>
                    </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>

        <Card className="border-secondary/30 transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-secondary-foreground flex items-center gap-3">
                    <TrendingUp />
                    ಮುಂದಿನ ಹಂತ: ಮಧ್ಯಮ ಮಟ್ಟ
                </CardTitle>
                <CardDescription>ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಪಯಣದಲ್ಲಿನ ಮುಂದಿನ ಹೆಜ್ಜೆ.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-foreground/90">
                ಪ್ರವೇಶ ಮಟ್ಟದ ದೀಕ್ಷೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಳಿಸಿ, ಮತ್ತು ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಮಂತ್ರ ಮತ್ತು ತಂತ್ರದ ಸಕಾರಾತ್ಮಕ ಪರಿಣಾಮಗಳನ್ನು ನೀವು ಅನುಭವಿಸಲು ಪ್ರಾರಂಭಿಸಿದ ನಂತರ, ನೀವು ಮುಂದಿನ ಹಂತದ ದೀಕ್ಷೆಗೆ ಅರ್ಹರಾಗುತ್ತೀರಿ. ಈ ಹಂತದಲ್ಲಿ, ನಿಮಗೆ ಹೆಚ್ಚು ಶಕ್ತಿಶಾಲಿಯಾದ ಸಾಧನೆಗಳನ್ನು ಪರಿಚಯಿಸಲಾಗುತ್ತದೆ.
                </p>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
