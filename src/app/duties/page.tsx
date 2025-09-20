
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardCheck, UserCheck, Lock, HandHeart, Scale, Share2 } from 'lucide-react';

export default function DutiesPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <ClipboardCheck />
          ಸಾಧಕನ ಕರ್ತವ್ಯಗಳು
        </h1>
        <p className="text-lg text-muted-foreground">
          ತಂತ್ರ ಮಾರ್ಗದಲ್ಲಿ ಯಶಸ್ಸು ಗಳಿಸಲು ಸಾಧಕನು ಪಾಲಿಸಬೇಕಾದ ನಿಯಮಗಳು ಮತ್ತು ಜವಾಬ್ದಾರಿಗಳು.
        </p>
      </header>

      <div className="space-y-6">
        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Share2 className="text-accent"/>ತಂತ್ರ ಸೇವೆ ಮತ್ತು ಪ್ರಸಾರ</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ತಂತ್ರದ ಜ್ಞಾನವನ್ನು ಸ್ವತಃ ಪರಮಶಿವನು ಮಾನವೀಯತೆಯ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಕರುಣಿಸಿದನು. ಯಾರು ನಿಸ್ವಾರ್ಥ ಸೇವಾ ಭಾವದಿಂದ ಈ ಜ್ಞಾನವನ್ನು ಇತರರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲು ಮತ್ತು ಅದನ್ನು ತಮ್ಮ ಜೀವನದ ಭಾಗವಾಗಿಸಲು ತಮ್ಮ ಸಮಯವನ್ನು ಮೀಸಲಿಡುತ್ತಾರೋ, ಅವರನ್ನು ಶಿವನು ಮೆಚ್ಚುತ್ತಾನೆ. ಎಲ್ಲಾ ತಂತ್ರ, ಮಂತ್ರ ಮತ್ತು ಯಂತ್ರಗಳು ಅವನ ಕೃಪೆಯಿಂದಲೇ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ. ಆ ಪರಮಶಿವನನ್ನು ಸಂತೃಪ್ತಿಗೊಳಿಸಲು ಇರುವ ಅತ್ಯುತ್ತಮ ಮಾರ್ಗವೆಂದರೆ, ತಂತ್ರದ ಸೇವೆ ಮಾಡುವುದು ಮತ್ತು ಅರ್ಹರಿಗೆ ಈ ಜ್ಞಾನವನ್ನು ಹಂಚುವುದು. ಇದು ಸಾಧಕನ ಅತ್ಯಂತ ಪ್ರಮುಖ ಮತ್ತು ಪವಿತ್ರ ಕರ್ತವ್ಯವಾಗಿದೆ.
            </p>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><UserCheck className="text-accent"/>ಗುರು ಸೇವೆ ಮತ್ತು ಅಚಲ ಶ್ರದ್ಧೆ</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ಸಾಧಕನಿಗೆ ಗುರುವಿನಲ್ಲಿ ಅಚಲವಾದ, ಪ್ರಶ್ನಾತೀತವಾದ ಶ್ರದ್ಧೆ ಮತ್ತು ಭಕ್ತಿ ಇರಬೇಕು. ಗುರುವನ್ನು ಕೇವಲ ವ್ಯಕ್ತಿಯೆಂದು ಭಾವಿಸದೆ, ದೈವಿಕ ಶಕ್ತಿಯ, ಜ್ಞಾನದ ಸಾಕಾರರೂಪವೆಂದು ತಿಳಿಯಬೇಕು. ಗುರುವಾಕ್ಯವನ್ನು ವೇದವಾಕ್ಯದಂತೆ ಪಾಲಿಸುವುದು ಮತ್ತು ಯಾವುದೇ ಪ್ರತಿಫಲಾಪೇಕ್ಷೆಯಿಲ್ಲದೆ (ನಿಷ್ಕಾಮ ಭಾವದಿಂದ) ಗುರು ಸೇವೆ ಮಾಡುವುದು ಸಾಧಕನ ಪ್ರಥಮ ಕರ್ತವ್ಯ. ಗುರುವಿನ ಕೃಪೆಯಿಲ್ಲದೆ ತಂತ್ರದಲ್ಲಿನ ಗূಢವಾದ ರಹಸ್ಯ ಜ್ಞಾನವು ಲಭಿಸುವುದಿಲ್ಲ ಮತ್ತು ಸಾಧನೆಯಲ್ಲಿ ಯಶಸ್ಸು ಅಸಾಧ್ಯ.
            </p>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Lock className="text-accent"/>ಗোপনীয়ತೆ (ರಹಸ್ಯವನ್ನು ಕಾಪಾಡುವುದು)</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ತಂತ್ರವು ಅತ್ಯಂತ ಗূಢವಾದ ಮತ್ತು ಶಕ್ತಿಶಾಲಿಯಾದ ವಿದ್ಯೆ. ಆದ್ದರಿಂದ, ತನ್ನ ದೀಕ್ಷೆ, ಮಂತ್ರ, ಸಾಧನಾ ವಿಧಾನ ಮತ್ತು ಅನುಭವಗಳನ್ನು ಅನರ್ಹ, ಶ್ರದ್ಧೆಯಿಲ್ಲದ ವ್ಯಕ್ತಿಗಳೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಬಾರದು. ಇದು ಜ್ಞಾನವನ್ನು ಅಹಂಕಾರದಿಂದ ಪ್ರದರ್ಶಿಸುವುದನ್ನು ತಡೆಯುತ್ತದೆ. ಗೋಪনীয়ತೆಯನ್ನು ಕಾಪಾಡುವುದರಿಂದ ಸಾಧನೆಯ ಶಕ್ತಿಯು ಸಂರಕ್ಷಿಸಲ್ಪಡುತ್ತದೆ ಮತ್ತು ಬಾಹ್ಯ ನಕಾರಾತ್ಮಕ ಪ್ರಭಾವಗಳಿಂದ ಹಾಗೂ ಸಂಶಯಗಳಿಂದ ರಕ್ಷಣೆ ದೊರೆಯುತ್ತದೆ.
            </p>
          </CardContent>
        </Card>
        
        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><HandHeart className="text-accent"/>ಸಮರ್ಪಣಾ ಭಾವ ಮತ್ತು ನಿರ್ಭಯತೆ</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ಸಾಧಕನು ತನ್ನ ಇಷ್ಟದೇವತೆಯಲ್ಲಿ ಮತ್ತು ಗುರುವಿನಲ್ಲಿ ಸಂಪೂರ್ಣ ಸಮರ್ಪಣಾ ಭಾವವನ್ನು ಹೊಂದಿರಬೇಕು. ಫಲಿತಾಂಶದ ಬಗ್ಗೆ ಚಿಂತಿಸದೆ, ಕೇವಲ ತನ್ನ ಕರ್ತವ್ಯವೆಂದು ಸಾಧನೆಯನ್ನು ಮಾಡಬೇಕು. ಸಾಧನೆಯ ಸಮಯದಲ್ಲಿ ಅನೇಕ ವಿಚಿತ್ರ, ಅಸಾಮಾನ್ಯ ಮತ್ತು ಕೆಲವೊಮ್ಮೆ ಭಯಾನಕ ಅನುಭವಗಳು ಎದುರಾಗಬಹುದು. ಅಂತಹ ಸಂದರ್ಭಗಳಲ್ಲಿ, ಧೈರ್ಯಗೆಡದೆ, ನಿರ್ಭಯವಾಗಿ ತನ್ನ ಸಾಧನೆಯನ್ನು ಮುಂದುವರಿಸಬೇಕು. ಗುರುವಿನ ಮತ್ತು ಇಷ್ಟದೇವತೆಯ ಮೇಲಿನ ಅಚಲವಾದ ನಂಬಿಕೆಯೇ ಅವನ ರಕ್ಷಾಕವಚವಾಗಿರುತ್ತದೆ.
            </p>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Scale className="text-accent"/>ಇಂದ್ರಿಯ ನಿಗ್ರಹ ಮತ್ತು ಶುದ್ಧತೆ</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ತಂತ್ರ ಸಾಧನೆಗೆ ದೈಹಿಕ ಮತ್ತು ಮಾನಸಿಕ ಶುದ್ಧತೆ ಅತ್ಯಗತ್ಯ. ಸಾಧಕನು ತನ್ನ ಇಂದ್ರಿಯಗಳನ್ನು ನಿಗ್ರಹದಲ್ಲಿಟ್ಟುಕೊಳ್ಳಬೇಕು, ಅವುಗಳ ದಾಸನಾಗಬಾರದು. ಆಹಾರ, ಮಾತು ಮತ್ತು ಆಲೋಚನೆಗಳಲ್ಲಿ ಸಾತ್ವಿಕತೆಯನ್ನು ಪಾಲಿಸಬೇಕು. ಕಾಮ, ಕ್ರೋಧ, ಲೋಭ, ಮೋಹ, ಮದ ಮತ್ತು ಮಾತ್ಸರ್ಯದಂತಹ ಅರಿಷಡ್ವರ್ಗಗಳನ್ನು ನಿಯಂತ್ರಣದಲ್ಲಿಟ್ಟುಕೊಳ್ಳಲು ನಿರಂತರವಾಗಿ ಪ್ರಯತ್ನಶೀಲನಾಗಿರಬೇಕು. ಆಂತರಿಕ ಮತ್ತು ಬಾಹ್ಯ ಶುದ್ಧತೆಯು ದೈವಿಕ ಶಕ್ತಿಯನ್ನು ಗ್ರಹಿಸಲು ನಮ್ಮನ್ನು ಯೋಗ್ಯರನ್ನಾಗಿ ಮಾಡುತ್ತದೆ.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
