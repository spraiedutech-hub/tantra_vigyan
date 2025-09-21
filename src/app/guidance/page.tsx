
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ShieldQuestion, UserCheck, BookCheck, HeartHandshake, CircleAlert, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ConsultationPricing from '@/components/consultation-pricing';

const WHATSAPP_NUMBER = "917022070287"; // Using the number from the initiation page
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


export default function GuidancePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <ShieldQuestion />
          ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಸಾಧನೆಯಲ್ಲಿನ ಅಡೆತಡೆಗಳಿಗೆ ಮತ್ತು ಜೀವನದ ಸಮಸ್ಯೆಗಳಿಗೆ ನೇರ ಮತ್ತು ವೈಯಕ್ತಿಕ ಪರಿಹಾರಗಳು.
        </p>
      </header>
      
      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
            <UserCheck />
            ನಿಮಗಾಗಿ ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆ
          </CardTitle>
          <CardDescription>
            AI-ಚಾಲಿತ ಸಾಮಾನ್ಯ ಸಲಹೆಗಳಿಗಿಂತ ಹೆಚ್ಚಾಗಿ, ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಜಾತಕ ಮತ್ತು ಪ್ರಸ್ತುತ ಸಂದರ್ಭಗಳನ್ನು ಆಧರಿಸಿ ನೇರವಾಗಿ ಗುರೂಜಿಯವರಿಂದ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸದಲ್ಲಿ ನಿರ್ದಿಷ್ಟ ಅಡೆತಡೆಗಳನ್ನು ಎದುರಿಸುತ್ತಿದ್ದೀರಾ? ಅಥವಾ ಜೀವನದಲ್ಲಿ ಬಗೆಹರಿಯದ ಸಮಸ್ಯೆಗಳಿಂದ ಬಳಲುತ್ತಿದ್ದೀರಾ? ನಿಮಗಾಗಿ ವಿಶೇಷವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ, ಸರಳ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ತಾಂತ್ರಿಕ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸಲಾಗುವುದು.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild size="lg" className="w-full">
            <Link href={WHATSAPP_URL} target="_blank">
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp ಮೂಲಕ ಸಮಾಲೋಚನೆಗೆ ವಿನಂತಿಸಿ
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <ConsultationPricing />

      <div className="space-y-6">
        <h2 className="text-2xl font-headline text-accent mt-12">ಸಾధನೆಯಲ್ಲಿನ ಸಾಮಾನ್ಯ ಅಡೆತಡೆಗಳು</h2>
        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><UserCheck className="text-accent"/>ಗುರು ಮತ್ತು ದೀಕ್ಷೆಯ ಅಭಾವ</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ತಂತ್ರ ಮಾರ್ಗದಲ್ಲಿ ಯಶಸ್ಸಿಗೆ மிக ಮುಖ್ಯವಾದುದು ಅರ್ಹ ಗುರುವಿನ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಅವರಿಂದ ಪಡೆಯುವ ದೀಕ್ಷೆ. ದೀಕ್ಷೆಯು ಮಂತ್ರಕ್ಕೆ ಚೈತನ್ಯವನ್ನು ನೀಡುತ್ತದೆ. ಸರಿಯಾದ ಗುರುವಿಲ್ಲದೆ, ಪುಸ್ತಕಗಳಿಂದ ಅಥವಾ ಅಂತರ್ಜಾಲದಿಂದ ಕಲಿತ ಮಂತ್ರಗಳು ಕೇವಲ ಶಬ್ದಗಳಾಗಿ ಉಳಿಯುತ್ತವೆ, ಅವುಗಳಲ್ಲಿ ಶಕ್ತಿ ಸಂಚಾರವಾಗುವುದಿಲ್ಲ.
            </p>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><BookCheck className="text-accent"/>ತಪ್ಪಾದ ಉಚ್ಚಾರಣೆ ಮತ್ತು ವಿಧಾನ</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ಪ್ರತಿಯೊಂದು ಮಂತ್ರಕ್ಕೂ ತನ್ನದೇ ಆದ ನಿರ್ದಿಷ್ಟ ಉಚ್ಚಾರಣೆ, ಸ್ವರ ಮತ್ತು ಲಯವಿರುತ್ತದೆ. ಮಂತ್ರವನ್ನು ತಪ್ಪಾಗಿ ಪಠಿಸುವುದರಿಂದ ಅದರ ಶಕ್ತಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ ಅಥವಾ ಕೆಲವೊಮ್ಮೆ ನಕಾರಾತ್ಮಕ ಪರಿಣಾಮಗಳೂ ಉಂಟಾಗಬಹುದು. ಹಾಗೆಯೇ, ಪ್ರತಿಯೊಂದು ಸಾಧನೆಗೂ ನಿರ್ದಿಷ್ಟವಾದ ವಿಧಿ-ವಿಧಾನಗಳಿರುತ್ತವೆ. ಅವುಗಳನ್ನು ಪಾಲಿಸುವುದು ಅತ್ಯಗತ್ಯ.
            </p>
          </CardContent>
        </Card>
        
        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><HeartHandshake className="text-accent"/>ಶ್ರದ್ಧೆ ಮತ್ತು ಏಕಾಗ್ರತೆಯ ಕೊರತೆ</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ಮಂತ್ರ ಮತ್ತು ತಂತ್ರ ಸಾಧನೆಗಳಿಗೆ ಅಚಲವಾದ ಶ್ರದ್ಧೆ ಮತ್ತು ಸಂಪೂರ್ಣ ಏಕಾಗ್ರತೆ ಬೇಕು. ಮನಸ್ಸಿನಲ್ಲಿ ಅನುಮಾನ, ಅಪನಂಬಿಕೆ ಅಥವಾ ಚಂಚಲತೆ ಇದ್ದರೆ, ಸಾಧನೆಯು ಫಲ ನೀಡುವುದಿಲ್ಲ. ಮನಸ್ಸನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಮಂತ್ರದಲ್ಲಿ ಲೀನಗೊಳಿಸಿದಾಗ ಮಾತ್ರ ಅದರ ಪೂರ್ಣ ಪ್ರಯೋಜನವನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯ.
            </p>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><CircleAlert className="text-accent"/>ತಕ್ಷಣದ ಫಲಿತಾಂಶಗಳ ನಿರೀಕ್ಷೆ</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಗತಿಯು ಒಂದು ನಿರಂತರ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಪ್ರಕ್ರಿಯೆ. ತಂತ್ರ ಮತ್ತು ಮಂತ್ರಗಳು ರಾತ್ರೋರಾತ್ರಿ ಪವಾಡಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದಿಲ್ಲ. ತಾಳ್ಮೆ ಮತ್ತು ನಿರಂತರ ಅಭ್ಯಾಸದಿಂದ ಮಾತ್ರ ಕ್ರಮೇಣ ಫಲಿತಾಂಶಗಳನ್ನು ಕಾಣಲು ಸಾಧ್ಯ. ತಕ್ಷಣದ ಫಲಿತಾಂಶಗಳನ್ನು ನಿರೀಕ್ಷಿಸುವುದು ನಿರಾಶೆಗೆ ಕಾರಣವಾಗುತ್ತದೆ.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
