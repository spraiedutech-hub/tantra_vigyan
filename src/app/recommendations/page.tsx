import RecommendationsTool from "@/components/recommendations-tool";
import { Sparkles } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Sparkles />
          ವೈಯಕ್ತಿಕ ಶಿಫಾರಸುಗಳು
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಆದ್ಯತೆಗಳ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಮಂತ್ರ ಮತ್ತು ಚಟುವಟಿಕೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ.
        </p>
      </header>
      <RecommendationsTool />
    </div>
  );
}
