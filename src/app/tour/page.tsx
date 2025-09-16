
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { navItems } from '@/lib/nav-items';
import { Compass } from 'lucide-react';

// Exclude home and the tour page itself from the list
const tourSections = navItems.filter(item => item.href !== '/' && item.href !== '/tour');

export default function TourPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Compass />
          ಸೈಟ್ ಪ್ರವಾಸ
        </h1>
        <p className="text-lg text-muted-foreground">
          "ತಂತ್ರ ವಿಜ್ಞಾನ" ಅಪ್ಲಿಕೇಶನ್‌ನ ಪ್ರತಿಯೊಂದು ವಿಭಾಗದ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.
        </p>
      </header>

      <div className="space-y-6">
        {tourSections.map((item) => (
          <Card key={item.href} className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <item.icon className="text-accent"/>
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                <p>{getPageDescription(item.href)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function getPageDescription(href: string): string {
    switch (href) {
        case '/mantras':
            return "ವಿವಿಧ ಸಾಂಪ್ರದಾಯಿಕ ತಂತ್ರ ಮಂತ್ರಗಳು ಮತ್ತು ಅವುಗಳ ಮಹತ್ವವನ್ನು ಅನ್ವೇಷಿಸಿ. ನಿಮ್ಮ ದೈನಂದಿನ ಅಭ್ಯಾಸಕ್ಕಾಗಿ ಇಲ್ಲಿಂದ ಮಂತ್ರಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿಕೊಳ್ಳಬಹುದು.";
        case '/activities':
            return "ಆರಂಭಿಕರಿಗಾಗಿ ಹಂತ-ಹಂತದ ಸೂಚನೆಗಳೊಂದಿಗೆ ಧ್ಯಾನ, ಪ್ರಾಣಾಯಾಮದಂತಹ ವಿವಿಧ ತಂತ್ರ ಚಟುವಟಿಕೆಗಳನ್ನು ಕಲಿಯಿರಿ.";
        case '/recommendations':
            return "ನಿಮ್ಮ ಅನುಭವ, ಲಭ್ಯವಿರುವ ಸಮಯ ಮತ್ತು ಗುರಿಗಳ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಮಂತ್ರ ಮತ್ತು ಚಟುವಟಿಕೆಗಳ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ.";
        case '/initiation':
            return "ತಂತ್ರ ಮಾರ್ಗದಲ್ಲಿ ದೀಕ್ಷೆಯ ಮಹತ್ವ, ಅದರ ಪ್ರಕಾರಗಳು ಮತ್ತು ದೀಕ್ಷೆ ಪಡೆಯುವ ಪ್ರಕ್ರಿಯೆಯ ಬಗ್ಗೆ ವಿವರವಾಗಿ ತಿಳಿಯಿರಿ.";
        case '/knowledge':
            return "ತಂತ್ರ ಮತ್ತು ಮಂತ್ರಗಳ ಕುರಿತಾದ ಆಳವಾದ ಜ್ಞಾನದ ನಿರಂತರ ಹರಿವು. ಇನ್ನಷ್ಟು ತಿಳಿಯಲು ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ.";
        case '/literature':
            return "ಪ್ರಾಚೀನ ಮತ್ತು ಮಹತ್ವಪೂರ್ಣ ತಂತ್ರ ಗ್ರಂಥಗಳ ಬಗ್ಗೆ ಪರಿಚಯ ಮತ್ತು ವಿವರಣೆಗಳನ್ನು ಇಲ್ಲಿ ಓದಿ.";
        case '/yantras':
            return "ಪವಿತ್ರ ರೇಖಾಗಣಿತವಾದ ಯಂತ್ರಗಳು ಮತ್ತು ಮಂಡಲಗಳ ದೃಶ್ಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸೌಂದರ್ಯವನ್ನು ಅನ್ವೇಷಿಸಿ.";
        case '/duties':
            return "ಒಬ್ಬ ತಂತ್ರ ಸಾಧಕನು ಪಾಲಿಸಬೇಕಾದ ಪ್ರಮುಖ ಕರ್ತವ್ಯಗಳು ಮತ್ತು ಜವಾಬ್ದಾರಿಗಳ ಬಗ್ಗೆ ಇಲ್ಲಿ ತಿಳಿಯಿರಿ.";
        case '/progress':
            return "ನಿಮ್ಮ ದೈನಂದಿನ ಮಂತ್ರ ಮತ್ತು ಚಟುವಟಿಕೆಗಳ ಅಭ್ಯಾಸದ ಪ್ರಗತಿಯನ್ನು ಇಲ್ಲಿ ಗಮನಿಸಿ.";
        case '/guidance':
            return "ಸಾಧನೆಯ ಮಾರ್ಗದಲ್ಲಿ ಎದುರಾಗಬಹುದಾದ ಸಾಮಾನ್ಯ ಅಡೆತಡೆಗಳು ಮತ್ತು ಅವುಗಳ ಪರಿಹಾರಗಳ ಬಗ್ಗೆ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.";
        case '/youtube':
            return "ನಮ್ಮ ಯೂಟ್ಯೂಬ್ ಚಾನೆಲ್‌ನಿಂದ ನೇರವಾಗಿ ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ.";
        default:
            return "ಈ ವಿಭಾಗದ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ.";
    }
}
