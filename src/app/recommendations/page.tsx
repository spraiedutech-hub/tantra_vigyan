
import RecommendationsTool from "@/components/recommendations-tool";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, AlertTriangle, ArrowRight, HeartHandshake } from "lucide-react";
import Link from 'next/link';
import RemedySchoolsInfo from '@/components/remedy-schools-info';

export default function RecommendationsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Sparkles />
          ವೈಯಕ್ತಿಕ ಶಿಫಾರಸುಗಳು
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಆದ್ಯತೆಗಳ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಮಂತ್ರ ಮತ್ತು ಚಟುವಟಿಕೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ.
        </p>
      </header>

      <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
        <AlertDescription>
          ಇಲ್ಲಿ ನೀಡಲಾದ ಶಿಫಾರಸುಗಳು ಸಾಮಾನ್ಯ ಮತ್ತು ಆರಂಭಿಕ ಮಾರ್ಗದರ್ಶನಗಳಾಗಿವೆ. ಮಂತ್ರ ಮತ್ತು ತಂತ್ರಗಳು ತಮ್ಮ ನಿಜವಾದ ಮತ್ತು ಸಂಪೂರ್ಣ ಪರಿಣಾಮವನ್ನು ಕರುಣಾಮಯಿ ಗುರುವಿನಿಂದ ದೀಕ್ಷೆ ಪಡೆದಾಗ ಮಾತ್ರ ತೋರಿಸುತ್ತವೆ.
        </AlertDescription>
      </Alert>

      <Card className="mt-8 bg-gradient-to-r from-primary/20 via-card to-accent/20 animated-border transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
        <CardHeader>
            <CardTitle className="text-2xl font-headline text-center flex items-center justify-center gap-3">
                <HeartHandshake />
                ಜೀವನದ ಸಮಸ್ಯೆಗಳಿಗೆ ಪರಿಹಾರಗಳು
            </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
            ನಿಮ್ಮ ದೈನಂದಿನ ಜೀವನದ ಸವಾಲುಗಳಿಗೆ, ವಿಶೇಷವಾಗಿ ಆರ್ಥಿಕ ಮತ್ತು ಇತರ ಸಮಸ್ಯೆಗಳಿಗೆ, ಸರಳವಾದ ತಾಂತ್ರಿಕ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform">
                <Link href="/remedies">
                ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </CardContent>
      </Card>
      
      <RecommendationsTool />

      <RemedySchoolsInfo />
    </div>
  );
}
