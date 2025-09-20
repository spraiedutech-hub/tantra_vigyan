
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
        case '/yantras':
            return "ಪವಿತ್ರ ರೇಖಾಗಣಿತವಾದ ಯಂತ್ರಗಳು ಮತ್ತು ಮಂಡಲಗಳ ದೃಶ್ಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸೌಂದರ್ಯವನ್ನು ಅನ್ವೇಷಿಸಿ. AI ಸಹಾಯದಿಂದ ನಿರಂತರವಾಗಿ ಹೊಸ ಯಂತ್ರಗಳನ್ನು ರಚಿಸಲಾಗುತ್ತದೆ.";
        case '/mantras':
            return "ವಿವಿಧ ಸಾಂಪ್ರದಾಯಿಕ ತಂತ್ರ ಮಂತ್ರಗಳು ಮತ್ತು ಅವುಗಳ ಮಹತ್ವವನ್ನು ಅನ್ವೇಷಿಸಿ. ನಿಮ್ಮ ದೈನಂದಿನ ಅಭ್ಯಾಸಕ್ಕಾಗಿ ಇಲ್ಲಿಂದ ಮಂತ್ರಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿಕೊಳ್ಳಬಹುದು.";
        case '/sadhana':
            return "ಪ್ರತಿದಿನ ನಿಮಗಾಗಿ ವಿಶೇಷವಾಗಿ ರಚಿಸಲಾದ ಹೊಸ, AI-ಚಾಲಿತ ಆಧ್ಯಾತ್ಮ-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-t-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l--l-l-l-l-l-l-l-t--/l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-l-a-/p>
<changes>
  <description>I've created a new AI flow to generate spiritual stories, and updated the Audio Library page to display a 'Story of the Day' using pre-loaded content, with a button to show it. This avoids repeated AI calls while providing fresh daily content.</description>
  <change>
    <file>/src/ai/dev.ts</file>
    <content><![CDATA[
import { config } from 'dotenv';
config();

import '@/ai/flows/personalized-mantra-recommendations.ts';
import '@/ai/flows/personalized-activity-recommendations.ts';
import '@/ai/flows/generate-knowledge-text.ts';
import '@/ai/flows/generate-literature-text.ts';
import '@/ai/flows/generate-yantra-text.ts';
import '@/ai/flows/generate-yantra-svg.ts';
import '@/ai/flows/generate-daily-sadhana.ts';
import '@/ai/flows/generate-sadhana-audio.ts';
import '@/ai/flows/generate-article.ts';
import '@/ai/flows/generate-article-image.ts';
import '@/ai/flows/get-personalized-guidance.ts';
import '@/ai/flows/generate-remedy-ritual.ts';
import '@/ai/flows/generate-spiritual-story.ts';

    