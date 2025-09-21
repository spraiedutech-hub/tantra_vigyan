
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { navGroups } from '@/lib/nav-items';
import { Compass } from 'lucide-react';
import Link from 'next/link';
import AppTourAnimation from '@/components/app-tour-animation';

export default function TourPage() {
  // Flatten the navGroups into a single array, excluding home and the tour page itself
  const tourSections = navGroups.flatMap(group => 
      group.items.map(item => ({ ...item, groupTitle: group.title }))
    ).filter(item => item.href !== '/' && item.href !== '/tour');
    

  function getPageDescription(href: string): string {
    switch (href) {
        case '/yantras':
            return "ಪವಿತ್ರ ರೇಖಾಗಣಿತವಾದ ಯಂತ್ರಗಳು ಮತ್ತು ಮಂಡಲಗಳ ದೃಶ್ಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸೌಂದರ್ಯವನ್ನು ಅನ್ವೇಷಿಸಿ. AI ಸಹಾಯದಿಂದ ನಿರಂತರವಾಗಿ ಹೊಸ ಯಂತ್ರಗಳನ್ನು ರಚಿಸಲಾಗುತ್ತದೆ.";
        case '/mantras':
            return "ವಿವಿಧ ಸಾಂಪ್ರದಾಯಿಕ ತಂತ್ರ ಮಂತ್ರಗಳು ಮತ್ತು ಅವುಗಳ ಮಹತ್ವವನ್ನು ಅನ್ವೇಷಿಸಿ. ನಿಮ್ಮ ದೈನಂದಿನ ಅಭ್ಯಾಸಕ್ಕಾಗಿ ಇಲ್ಲಿಂದ ಮಂತ್ರಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿಕೊಳ್ಳಬಹುದು.";
        case '/sadhana':
            return "ಪ್ರತಿದಿನ ನಿಮಗಾಗಿ ವಿಶೇಷವಾಗಿ ರಚಿಸಲಾದ ಹೊಸ, AI-ಚಾಲಿತ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸವನ್ನು (ಸಾಧನಾ) ಪಡೆಯಿರಿ. ಇದು ನಿಮ್ಮ ದಿನವನ್ನು ಶಾಂತಿ ಮತ್ತು ಉದ್ದೇಶದಿಂದ ಪ್ರಾರಂಭಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.";
        case '/activities':
            return "ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸವನ್ನು ಹೆಚ್ಚಿಸಲು ಸರಳವಾದ ತಾಂತ್ರಿಕ ಕ್ರಿಯೆಗಳು ಮತ್ತು ಆಚರಣೆಗಳನ್ನು ಕಲಿಯಿರಿ.";
        case '/recommendations':
            return "ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಮಂತ್ರ ಮತ್ತು ಚಟುವಟಿಕೆ ಶಿಫಾರಸುಗಳನ್ನು ನಮ್ಮ AI ನಿಂದ ಪಡೆಯಿರಿ.";
        case '/remedies':
            return "ನಿಮ್ಮ ದೈನಂದಿನ ಜೀವನದ ಸವಾಲುಗಳಿಗೆ, ವಿಶೇಷವಾಗಿ ಆರ್ಥಿಕ ಮತ್ತು ಇತರ ಸಮಸ್ಯೆಗಳಿಗೆ, ಸರಳವಾದ ತಾಂತ್ರಿಕ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ.";
        case '/articles':
            return "ತಂತ್ರ, ಮಂತ್ರ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕತೆಗೆ ಸಂಬಂಧಿಸಿದ ವಿವಿಧ ವಿಷಯಗಳ ಕುರಿತು AI-ರಚಿತ ಲೇಖನಗಳನ್ನು ಓದಿ.";
        case '/mantra-generator':
            return "ಯಾವುದೇ ಪಠ್ಯವನ್ನು ಅಥವಾ ಮಂತ್ರವನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ಅದರ ಆಡಿಯೋ ಆವೃತ್ತಿಯನ್ನು ತಕ್ಷಣವೇ ರಚಿಸಿ. ಅಭ್ಯಾಸ ಮಾಡಲು ಅಥವಾ ಕೇಳಲು ಉತ್ತಮ ಸಾಧನ.";
        case '/progress':
            return "ನಿಮ್ಮ ಮಂತ್ರ ಜಪ ಮತ್ತು ಚಟುವಟಿಕೆಗಳ ಅಭ್ಯಾಸವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ. ನಿಮ್ಮ ದೈನಂದಿನ ಸರಣಿಯನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಶಿಸ್ತನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ.";
        case '/forum':
            return "ಇತರ ಸಾಧಕರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ, ನಿಮ್ಮ ಅನುಭವಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ ಮತ್ತು ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ. ನಮ್ಮ ಸಮುದಾಯದೊಂದಿಗೆ ಒಟ್ಟಾಗಿ ಬೆಳೆಯಿರಿ.";
        case '/youtube':
            return "ನಮ್ಮ ಯೂಟ್ಯೂಬ್ ಚಾನೆಲ್‌ನಿಂದ ನೇರವಾಗಿ ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ. ತಂತ್ರ, ಮಂತ್ರ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕತೆಯ ಕುರಿತು ಆಳವಾದ ಜ್ಞಾನವನ್ನು ಪಡೆಯಿರಿ.";
        case '/initiation':
            return "ತಂತ್ರ ಮಾರ್ಗದಲ್ಲಿ ದೀಕ್ಷೆಯ ಮಹತ್ವ, ಅದರ ಪ್ರಕಾರಗಳು ಮತ್ತು ಅದು ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಪಯಣವನ್ನು ಹೇಗೆ ವೇಗಗೊಳಿಸುತ್ತದೆ ಎಂಬುದರ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.";
        case '/consultations':
            return "ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಲೌಕಿಕ ಸಮಸ್ಯೆಗಳಿಗೆ ನಮ್ಮ ಪರಿಣಿತರಿಂದ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ.";
        case '/astrology':
            return "ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯದ ಮೂಲಕ ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯ ರಹಸ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಜೀವನದ ಮೇಲೆ ಗ್ರಹಗಳ ಪ್ರಭಾವವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.";
        case '/share-market-astrology':
            return "ಜ್ಯೋತಿಷ್ಯದ ದೃಷ್ಟಿಕೋನದಿಂದ ಶೇರು ಮಾರುಕಟ್ಟೆಯ ಚಲನವಲನಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ಇದು ಹಣಕಾಸು ಸಲಹೆಯಲ್ಲ, ಕೇವಲ ಜ್ಯೋತಿಷ್ಯದ ವಿಶ್ಲೇಷಣೆ.";
        case '/knowledge':
            return "ತಂತ್ರ ಮತ್ತು ಮಂತ್ರಗಳ ಮೂಲಭೂತ ತತ್ವಗಳು, ಶಿವ-ಶಕ್ತಿ, ಕುಂಡಲಿನೀ, ಚಕ್ರಗಳು, ಮತ್ತು ಹೆಚ್ಚಿನವುಗಳ ಬಗ್ಗೆ ಆಳವಾಗಿ ತಿಳಿಯಿರಿ.";
        case '/literature':
            return "ಪ್ರಾಚೀನ ಮತ್ತು ಮಹತ್ವಪೂರ್ಣ ತಂತ್ರ ಗ್ರಂಥಗಳಾದ 'ಮಹಾನಿರ್ವಾಣ ತಂತ್ರ', 'ಕುಲಾರ್ಣವ ತಂತ್ರ' ಮತ್ತು ಇತರವುಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.";
        case '/duties':
            return "ಒಬ್ಬ ಸಾಧಕನಾಗಿ, ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಪಯಣದಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಲು ನೀವು ಪಾಲಿಸಬೇಕಾದ ಕರ್ತವ್ಯಗಳು ಮತ್ತು ಜವಾಬ್ದಾರಿಗಳ ಬಗ್ಗೆ ಅರಿಯಿರಿ.";
        case '/black-magic':
            return "ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳ ಸ್ವರೂಪ, ಅವುಗಳ ಪ್ರಭಾವ ಮತ್ತು ಅವುಗಳಿಂದ ರಕ್ಷಣೆ ಪಡೆಯಲು ಇರುವ ಶಕ್ತಿಶಾಲಿ ತಾಂತ್ರಿಕ ವಿಧಾನಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.";
        case '/shatkarma-rahasya':
            return "ಮಾರಣ, ಮೋಹನ, ವಶೀಕರಣದಂತಹ ಆರು ಶಕ್ತಿಶಾಲಿ ತಾಂತ್ರಿಕ ಕ್ರಿಯೆಗಳ ಹಿಂದಿನ ರಹಸ್ಯ ಜ್ಞಾನವನ್ನು ಅರಿಯಿರಿ. (ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ)";
        case '/shatkriya-rahasya':
            return "ಹಠ ಯೋಗದಲ್ಲಿನ ಆರು ದೈಹಿಕ ಮತ್ತು ಮಾನಸಿಕ ಶುದ್ಧೀಕರಣ ಕ್ರಿಯೆಗಳಾದ ಧೌತಿ, ಬಸ್ತಿ, ನೇತಿ, ತ್ರಾಟಕ, ನೌಲಿ ಮತ್ತು ಕಪಾಲಭಾತಿಯ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.";
        case '/energized-items':
            return "ಗುರುಗಳಿಂದ ಪ್ರಾಣಪ್ರತಿಷ್ಠಾಪನೆ ಮಾಡಿದ ಮಾಲಾಗಳು ಮತ್ತು ಯಂತ್ರಗಳ ಮಹತ್ವವನ್ನು ತಿಳಿಯಿರಿ ಮತ್ತು ನಿಮ್ಮ ಸಾಧನೆಗೆ ಬೇಕಾದ ಸಾಧನಗಳನ್ನು ಪಡೆಯಿರಿ.";
        case '/navagraha':
            return "ಸೂರ್ಯ, ಚಂದ್ರ, ಮಂಗಳ, ಬುಧ, ಗುರು, ಶುಕ್ರ, ಶನಿ, ರಾಹು ಮತ್ತು ಕೇತು - ಈ ಒಂಬತ್ತು ಗ್ರಹಗಳು ನಮ್ಮ ಜೀವನದ ಮೇಲೆ ಹೇಗೆ ಪ್ರಭಾವ ಬೀರುತ್ತವೆ ಎಂಬುದನ್ನು ಅರಿಯಿರಿ.";
        case '/tantra-for-students':
            return "ವಿದ್ಯಾರ್ಥಿಗಳು ಏಕಾಗ್ರತೆ, ಸ್ಮರಣಶಕ್ತಿ ಮತ್ತು ಪರೀಕ್ಷೆಯ ಒತ್ತಡವನ್ನು ನಿವಾರಿಸಲು ತಂತ್ರ ಮತ್ತು ಯೋಗವನ್ನು ಹೇಗೆ ಬಳಸಬಹುದು ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.";
        case '/tantra-and-money':
            return "ಸಂಪತ್ತಿನ ಬಗ್ಗೆ ತಂತ್ರದ ದೃಷ್ಟಿಕೋನವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ಆಕರ್ಷಿಸಲು ಲಕ್ಷ್ಮೀ ಮತ್ತು ಕುಬೇರನ ಉಪಾಸನೆಯ ವಿಧಾನಗಳನ್ನು ತಿಳಿಯಿರಿ.";
        case '/divine-and-other-energies':
            return "ದೇವತೆಗಳು, ಯಕ್ಷಿಣಿಯರು, ಭೂತ-ಪ್ರೇತಗಳಂತಹ ವಿವಿಧ ಶಕ್ತಿಗಳ ಸ್ವರೂಪ ಮತ್ತು ಅವುಗಳ ಅಸ್ತಿತ್ವದ ಬಗ್ಗೆ ತಂತ್ರವು ಏನು ಹೇಳುತ್ತದೆ ಎಂಬುದನ್ನು ಅರಿಯಿರಿ.";
        case '/overcoming-sad-memories':
            return "ಹಳೆಯ ನೋವಿನ ನೆನಪುಗಳಿಂದ ಮತ್ತು ಭಾವನಾತ್ಮಕ ಗಾಯಗಳಿಂದ ಮುಕ್ತರಾಗಲು ಸಹಾಯ ಮಾಡುವ ತಾಂತ್ರಿಕ ಮತ್ತು ಮಾನಸಿಕ ತಂತ್ರಗಳನ್ನು ಕಲಿಯಿರಿ.";
        case '/jataka':
            return "ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿ ಅಥವಾ ಜಾತಕವು ನಿಮ್ಮ ಜೀವನದ ನೀಲನಕ್ಷೆಯಾಗಿದೆ. ಅದರ ಮೂಲಭೂತ ಅಂಶಗಳಾದ ಮನೆಗಳು, ಗ್ರಹಗಳು ಮತ್ತು ದಶಾಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.";
        case '/chakras-info':
            return "ನಿಮ್ಮ ಸೂಕ್ಷ್ಮ ಶರೀರದಲ್ಲಿರುವ ಏಳು ಪ್ರಮುಖ ಶಕ್ತಿ ಕೇಂದ್ರಗಳಾದ ಚಕ್ರಗಳ ಬಗ್ಗೆ ಆಳವಾಗಿ ಅರಿಯಿರಿ. ಅವುಗಳ ಕಾರ್ಯ, ಗುಣಲಕ್ಷಣಗಳು ಮತ್ತು ಸಮತೋಲನಗೊಳಿಸುವ ವಿಧಾನಗಳನ್ನು ತಿಳಿಯಿರಿ.";
        case '/homa-yagna':
            return "ಬ್ರಹ್ಮಾಂಡದ ಶಕ್ತಿಗಳೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸುವ ಪವಿತ್ರ ಅಗ್ನಿ ಆಚರಣೆಗಳು.";
        default:
            return "ಈ ವಿಭಾಗದ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ.";
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <header className="space-y-2 p-4 rounded-lg animated-border flex-1 w-full">
                <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
                <Compass />
                ಅಪ್ಲಿಕೇಶನ್ ಪ್ರವಾಸ
                </h1>
                <p className="text-lg text-muted-foreground">
                ಈ ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಎಲ್ಲಾ ವೈಶಿಷ್ಟ್ಯಗಳು ಮತ್ತು ವಿಭಾಗಗಳ ಅವಲೋಕನ.
                </p>
            </header>
            <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
                <AppTourAnimation />
            </div>
        </div>

      <div className="space-y-6">
        {navGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-2xl font-bold font-headline text-primary mb-4">{group.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.items.filter(item => item.href !== '/' && item.href !== '/tour').map((item) => (
                <Link href={item.href} key={item.href} passHref>
                  <Card className="h-full flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out hover:border-primary">
                    <CardHeader className="flex-row items-center gap-4">
                        <item.icon className="w-8 h-8 text-accent" />
                        <CardTitle className="text-lg font-semibold">{item.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {getPageDescription(item.href)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
