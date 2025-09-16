import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, CreditCard, Send } from 'lucide-react';
import Link from 'next/link';

export default function InitiationProcessPage() {
  const initiationFee = '₹5,400';

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

        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-accent">ದೀಕ್ಷಾ ಪ್ರಕ್ರಿಯೆ</CardTitle>
            <CardDescription>ದೀಕ್ಷೆ ಪಡೆಯಲು ಈ ಸರಳ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                    <span><strong className="font-semibold">ನೋಂದಣಿ:</strong> ಕೆಳಗಿನ 'ಈಗ ನೋಂದಾಯಿಸಿ' ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಅಗತ್ಯವಿರುವ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸಿ.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                    <span><strong className="font-semibold">ಶುಲ್ಕ ಪಾವತಿ:</strong> ನಮ್ಮ ಸುರಕ್ಷಿತ ಪಾವತಿ ಗೇಟ್‌ವೇ ಮೂಲಕ ದೀಕ್ಷಾ ಶುಲ್ಕವನ್ನು ಪಾವತಿಸಿ.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                    <span><strong className="font-semibold">ಸಮಯ ನಿಗದಿ:</strong> ಪಾವತಿಯ ನಂತರ, ನಿಮಗೆ ದೀಕ್ಷೆಗಾಗಿ ಸಮಯ ಮತ್ತು ದಿನಾಂಕವನ್ನು ನಿಗದಿಪಡಿಸಲು WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಲಾಗುತ್ತದೆ (ಪರೋಕ್ಷ ದೀಕ್ಷೆಗಾಗಿ).</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                    <span><strong className="font-semibold">ದೀಕ್ಷಾ ಸಂಸ್ಕಾರ:</strong> ನಿಗದಿತ ಸಮಯದಲ್ಲಿ, ಗುರುಗಳು ನಿಮಗೆ ಮಂತ್ರೋಪದೇಶ ಮತ್ತು ಶಕ್ತಿಪಾತವನ್ನು ನೀಡುತ್ತಾರೆ.</span>
                </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-accent/30">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-accent">ದೀಕ್ಷಾ ಶುಲ್ಕ (ಗುರು ದಕ್ಷಿಣೆ)</CardTitle>
            <CardDescription>ಈ ಶುಲ್ಕವು ಜ್ಞಾನ ಪರಂಪರೆಯ ನಿರ್ವಹಣೆ ಮತ್ತು ಮುಂದುವರಿಕೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
                <p className="text-5xl font-bold text-primary">{initiationFee}</p>
                <p className="text-muted-foreground">(ಒಂದು ಬಾರಿಯ ಪಾವತಿ)</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>ವೈಯಕ್ತಿಕ ಮಂತ್ರೋಪದೇಶ</li>
                <li>ನಿತ್ಯ ಸಾಧನಾ ಮಾರ್ಗದರ್ಶನಕ್ಕೆ ಪ್ರವೇಶ</li>
                <li>ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಬೆಂಬಲ</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2"/>
                ಈಗ ನೋಂದಾಯಿಸಿ
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
