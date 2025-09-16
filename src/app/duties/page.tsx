
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardCheck, UserCheck, Lock, HandHeart, Scale } from 'lucide-react';

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
            <CardTitle className="flex items-center gap-3"><UserCheck className="text-accent"/>ಗುರು ಸೇವೆ ಮತ್ತು ಅಚಲ ಶ್ರದ್ಧೆ</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ಸಾಧಕನಿಗೆ ಗುರುವಿನಲ್ಲಿ ಅಚಲವಾದ ಶ್ರದ್ಧೆ ಮತ್ತು ಭಕ್ತಿ ಇರಬೇಕು. ಗುರುವನ್ನು ಕೇವಲ ವ್ಯಕ್ತಿಯೆಂದು ಭಾವಿಸದೆ, ದೈವಿಕ ಶಕ್ತಿಯ ಸ್ವರೂಪವೆಂದು ತಿಳಿಯಬೇಕು. ಗುರುವಾಕ್ಯವನ್ನು ವೇದವಾಕ್ಯದಂತೆ ಪಾಲಿಸುವುದು ಮತ್ತು ನಿಷ್ಕಾಮ ಭಾವದಿಂದ ಗುರು ಸೇವೆ ಮಾಡುವುದು ಸಾಧಕನ ಪ್ರಥಮ ಕರ್ತವ್ಯ. ಗುರುವಿನ ಕೃಪೆಯಿಲ್ಲದೆ ತಂತ್ರದಲ್ಲಿನ ರಹಸ್ಯ ಜ್ಞಾನವು ಲಭಿಸುವುದಿಲ್ಲ.
            </p>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Lock className="text-accent"/>ಗোপনীয়ತೆ (ರಹಸ್ಯವನ್ನು ಕಾಪಾಡುವುದು)</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ತಂತ್ರವು ಅತ್ಯಂತ ಗূಢವಾದ ಮತ್ತು ಶಕ್ತಿಶಾಲಿಯಾದ ವಿದ್ಯೆ. ಆದ್ದರಿಂದ, ತನ್ನ ದೀಕ್ಷೆ, ಮಂತ್ರ, ಸಾಧನಾ ವಿಧಾನ ಮತ್ತು ಅನುಭವಗಳನ್ನು ಅನರ್ಹ ವ್ಯಕ್ತಿಗಳೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಬಾರದು. ಗೋಪনীয়ತೆಯನ್ನು ಕಾಪಾಡುವುದರಿಂದ ಸಾಧನೆಯ ಶಕ್ತಿಯು ಸಂರಕ್ಷಿಸಲ್ಪಡುತ್ತದೆ ಮತ್ತು ಬಾಹ್ಯ ನಕಾರಾತ್ಮಕ ಪ್ರಭಾವಗಳಿಂದ ರಕ್ಷಣೆ ದೊರೆಯುತ್ತದೆ.
            </p>
          </CardContent>
        </Card>
        
        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><HandHeart className="text-accent"/>ಸಮರ್ಪಣಾ ಭಾವ ಮತ್ತು ನಿರ್ಭಯತೆ</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ಸಾಧಕನು ತನ್ನ ಇಷ್ಟದೇವತೆಯಲ್ಲಿ ಸಂಪೂರ್ಣ ಸಮರ್ಪಣಾ ಭಾವವನ್ನು ಹೊಂದಿರಬೇಕು. ಸಾಧನೆಯ ಸಮಯದಲ್ಲಿ ಅನೇಕ ವಿಚಿತ್ರ ಮತ್ತು ಭಯಾನಕ ಅನುಭವಗಳು ಎದುರಾಗಬಹುದು. ಅಂತಹ ಸಂದರ್ಭಗಳಲ್ಲಿ, ಧೈರ್ಯಗೆಡದೆ, ನಿರ್ಭಯವಾಗಿ ತನ್ನ ಸಾಧನೆಯನ್ನು ಮುಂದುವರಿಸಬೇಕು. ಗುರುವಿನ ಮತ್ತು ಇಷ್ಟದೇವತೆಯ ಮೇಲಿನ ನಂಬಿಕೆಯೇ ಅವನ ರಕ್ಷಾಕವಚ.
            </p>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Scale className="text-accent"/>ಇಂದ್ರಿಯ ನಿಗ್ರಹ ಮತ್ತು ಶುದ್ಧತೆ</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            <p>
              ತಂತ್ರ ಸಾಧನೆಗೆ ದೈಹಿಕ ಮತ್ತು ಮಾನಸಿಕ ಶುದ್ಧತೆ ಅತ್ಯಗತ್ಯ. ಸಾಧಕನು ತನ್ನ ಇಂದ್ರಿಯಗಳನ್ನು ನಿಗ್ರಹದಲ್ಲಿಟ್ಟುಕೊಳ್ಳಬೇಕು. ಆಹಾರ, ಮಾತು ಮತ್ತು ಆಲೋಚನೆಗಳಲ್ಲಿ ಸಾತ್ವಿಕತೆಯನ್ನು ಪಾಲಿಸಬೇಕು. ಕಾಮ, ಕ್ರೋಧ, ಲೋಭ, ಮೋಹದಂತಹ ಅರಿಷಡ್ವರ್ಗಗಳನ್ನು ನಿಯಂತ್ರಣದಲ್ಲಿಟ್ಟುಕೊಳ್ಳಲು ನಿರಂತರ ಪ್ರಯತ್ನಶೀಲನಾಗಿರಬೇಕು.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
