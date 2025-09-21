
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
        // Main Pages
        case '/sadhana':
            return "ನಿಮ್ಮ ದಿನವನ್ನು ಶಾಂತಿ ಮತ್ತು ಉದ್ದೇಶದಿಂದ ಪ್ರಾರಂಭಿಸಲು ಸಹಾಯ ಮಾಡಲು, ಪ್ರತಿದಿನ ನಿಮಗಾಗಿ ವಿಶೇಷವಾಗಿ ರಚಿಸಲಾದ ಹೊಸ, ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸವನ್ನು (ಸಾಧನಾ) ಪಡೆಯಿರಿ.";
        case '/initiation':
            return "ತಂತ್ರ ಮಾರ್ಗದಲ್ಲಿ ದೀಕ್ಷೆಯ ಮಹತ್ವ, ಅದರ ಪ್ರಕಾರಗಳು, ಮತ್ತು ಅದು ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಪಯಣವನ್ನು ಹೇಗೆ ವೇಗಗೊಳಿಸುತ್ತದೆ ಎಂಬುದರ ಬಗ್ಗೆ ಆಳವಾಗಿ ತಿಳಿಯಿರಿ.";
        
        // Knowledge
        case '/knowledge':
            return "ತಂತ್ರ ಮತ್ತು ಮಂತ್ರಗಳ ಮೂಲಭೂತ ತತ್ವಗಳು, ಶಿವ-ಶಕ್ತಿ, ಕುಂಡಲಿನೀ, ಮತ್ತು ಚಕ್ರಗಳಂತಹ ಗಹನವಾದ ವಿಷಯಗಳ ಬಗ್ಗೆ ನಿಮ್ಮ ಜ್ಞಾನವನ್ನು ವಿಸ್ತರಿಸಿಕೊಳ್ಳಿ.";
        case '/literature':
            return "ಪ್ರಾಚೀನ ಮತ್ತು ಮಹತ್ವಪೂರ್ಣ ತಂತ್ರ ಗ್ರಂಥಗಳಾದ 'ಮಹಾನಿರ್ವಾಣ ತಂತ್ರ', 'ಕುಲಾರ್ಣವ ತಂತ್ರ' ಮತ್ತು ಇತರವುಗಳ ಬಗ್ಗೆ ಆಳವಾದ ಪರಿಚಯವನ್ನು ಪಡೆಯಿರಿ.";
        case '/karma-rahasya':
            return "ಕರ್ಮದ ನಿಯಮಗಳು, ಅದರ ವಿಧಗಳು (ಸಂಚಿತ, ಪ್ರಾರಬ್ಧ, ಆಗಾಮಿ) ಮತ್ತು ಅದು ನಮ್ಮ ಜೀವನವನ್ನು ಹೇಗೆ ರೂಪಿಸುತ್ತದೆ ಎಂಬುದರ ರಹಸ್ಯವನ್ನು ಅರಿಯಿರಿ.";
        case '/kaalagnana':
            return "ಭವಿಷ್ಯದ ಬಗ್ಗೆ ಮಹಾಪುರುಷರು ನುಡಿದಿರುವ ಕಾಲಜ್ಞಾನದ ವಚನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಮುಂಬರುವ ಪರಿವರ್ತನೆಗಳ ಬಗ್ಗೆ ಒಳನೋಟಗಳನ್ನು ಪಡೆಯಿರಿ.";
        case '/jataka':
            return "ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯು ನಿಮ್ಮ ಜೀವನದ ನೀಲನಕ್ಷೆಯಾಗಿದೆ. ಅದರ ಮೂಲಭೂತ ಅಂಶಗಳಾದ ಮನೆಗಳು, ಗ್ರಹಗಳು ಮತ್ತು ದಶಾಗಳ ಬಗ್ಗೆ ಸರಳವಾಗಿ ತಿಳಿಯಿರಿ.";
        case '/chakras-info':
            return "ನಿಮ್ಮ ಸೂಕ್ಷ್ಮ ಶರೀರದಲ್ಲಿರುವ ಏಳು ಪ್ರಮುಖ ಶಕ್ತಿ ಕೇಂದ್ರಗಳಾದ ಚಕ್ರಗಳ ಕಾರ್ಯ, ಗುಣಲಕ್ಷಣಗಳು ಮತ್ತು ಅವುಗಳನ್ನು ಸಮತೋಲನಗೊಳಿಸುವ ವಿಧಾನಗಳನ್ನು ಅರಿಯಿರಿ.";
        case '/homa-yagna':
            return "ಬ್ರಹ್ಮಾಂಡದ ಶಕ್ತಿಗಳೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸುವ ಪವಿತ್ರ ಅಗ್ನಿ ಆಚರಣೆಗಳಾದ ಹೋಮ ಮತ್ತು ಯಜ್ಞದ ಹಿಂದಿನ ವಿಜ್ಞಾನ ಮತ್ತು ಮಹತ್ವವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.";
        case '/tantra-and-disease':
            return "ಆರೋಗ್ಯ ಮತ್ತು ಅನಾರೋಗ್ಯದ ಬಗ್ಗೆ ತಂತ್ರದ ಆಧ್ಯಾತ್ಮಿಕ ದೃಷ್ಟಿಕೋನವನ್ನು ತಿಳಿಯಿರಿ ಮತ್ತು ರೋಗಗಳ ಮೂಲ ಕಾರಣವನ್ನು ಶಕ್ತಿಯ ಮಟ್ಟದಲ್ಲಿ ಹೇಗೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬಹುದು ಎಂಬುದನ್ನು ಅರಿಯಿರಿ.";
        case '/tantra-and-money':
            return "ಸಂಪತ್ತಿನ ಬಗ್ಗೆ ತಂತ್ರದ ದೃಷ್ಟಿಕೋನವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ಆಕರ್ಷಿಸಲು ಲಕ್ಷ್ಮೀ ಮತ್ತು ಕುಬೇರನ ಉಪಾಸನೆಯ ವಿಧಾನಗಳನ್ನು ಕಲಿಯಿರಿ.";
        case '/tantra-for-students':
            return "ವಿದ್ಯಾರ್ಥಿಗಳು ಏಕಾಗ್ರತೆ, ಸ್ಮರಣಶಕ್ತಿ ಮತ್ತು ಪರೀಕ್ಷೆಯ ಒತ್ತಡವನ್ನು ನಿವಾರಿಸಲು ತಂತ್ರ ಮತ್ತು ಯೋಗವನ್ನು ಹೇಗೆ ಬಳಸಬಹುದು ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.";
        case '/divine-and-other-energies':
            return "ದೇವತೆಗಳು, ಯಕ್ಷಿಣಿಯರು, ಭೂತ-ಪ್ರೇತಗಳಂತಹ ವಿವಿಧ ಶಕ್ತಿಗಳ ಸ್ವರೂಪ ಮತ್ತು ಅವುಗಳ ಅಸ್ತಿತ್ವದ ಬಗ್ಗೆ ತಂತ್ರವು ಏನು ಹೇಳುತ್ತದೆ ಎಂಬುದನ್ನು ಅರಿಯಿರಿ.";
        case '/overcoming-sad-memories':
            return "ಹಳೆಯ ನೋವಿನ ನೆನಪುಗಳಿಂದ ಮತ್ತು ಭಾವನಾತ್ಮಕ ಗಾಯಗಳಿಂದ ಮುಕ್ತರಾಗಲು ಸಹಾಯ ಮಾಡುವ ಶಕ್ತಿಶಾಲಿ ತಾಂತ್ರಿಕ ಮತ್ತು ಮಾನಸಿಕ ತಂತ್ರಗಳನ್ನು ಕಲಿಯಿರಿ.";
        case '/shatkriya-rahasya':
            return "ಹಠ ಯೋಗದಲ್ಲಿನ ಆರು ದೈಹಿಕ ಮತ್ತು ಮಾನಸಿಕ ಶುದ್ಧೀಕರಣ ಕ್ರಿಯೆಗಳಾದ ಧೌತಿ, ಬಸ್ತಿ, ನೇತಿ, ತ್ರಾಟಕ, ನೌಲಿ ಮತ್ತು ಕಪಾಲಭಾತಿಯ ರಹಸ್ಯಗಳನ್ನು ಅರಿಯಿರಿ.";
        case '/shatkarma-rahasya':
            return "ಮಾರಣ, ಮೋಹನ, ವಶೀಕರಣದಂತಹ ಆರು ಶಕ್ತಿಶಾಲಿ ತಾಂತ್ರಿಕ ಕ್ರಿಯೆಗಳ ಹಿಂದಿನ ರಹಸ್ಯ ಜ್ಞಾನವನ್ನು ಅರಿಯಿರಿ. (ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಜಾಗೃತಿ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ)";
        case '/black-magic':
            return "ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳ ಸ್ವರೂಪ, ಅವುಗಳ ಪ್ರಭಾವ ಮತ್ತು ಅವುಗಳಿಂದ ರಕ್ಷಣೆ ಪಡೆಯಲು ಇರುವ ಶಕ್ತಿಶಾಲಿ ತಾಂತ್ರಿಕ ವಿಧಾನಗಳ ಬಗ್ಗೆ ಜ್ಞಾನವನ್ನು ಪಡೆಯಿರಿ.";
        
        // Astrology
        case '/astrology':
            return "ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯದ ಮೂಲಕ ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯ ರಹಸ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಜೀವನದ ಮೇಲೆ ಗ್ರಹಗಳ ಪ್ರಭಾವವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.";
        case '/navagraha':
            return "ಸೂರ್ಯ, ಚಂದ್ರ, ಮಂಗಳ, ಬುಧ, ಗುರು, ಶುಕ್ರ, ಶನಿ, ರಾಹು ಮತ್ತು ಕೇತು - ಈ ಒಂಬತ್ತು ಗ್ರಹಗಳು ನಮ್ಮ ಜೀವನದ ಮೇಲೆ ಹೇಗೆ ಪ್ರಭಾವ ಬೀರುತ್ತವೆ ಎಂಬುದನ್ನು ಸಂವಾದಾತ್ಮಕವಾಗಿ ಅರಿಯಿರಿ.";
        case '/share-market-astrology':
            return "ಜ್ಯೋತಿಷ್ಯದ ದೃಷ್ಟಿಕೋನದಿಂದ ಶೇರು ಮಾರುಕಟ್ಟೆಯ ಚಲನವಲನಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. (ಇದು ಹಣಕಾಸು ಸಲಹೆಯಲ್ಲ, ಕೇವಲ ಜ್ಯೋತಿಷ್ಯದ ವಿಶ್ಲೇಷಣೆ)";
        case '/gambling':
            return "ಅದೃಷ್ಟ, ಆಕಸ್ಮಿಕ ಲಾಭ ಮತ್ತು ಜೂಜಾಟದ ಚಟುವಟಿಕೆಗಳ ಹಿಂದಿನ ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ತಾಂತ್ರಿಕ ರಹಸ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.";

        // Daily Practice
        case '/yantras':
            return "ಪವಿತ್ರ ರೇಖಾಗಣಿತವಾದ ಯಂತ್ರಗಳು ಮತ್ತು ಮಂಡಲಗಳ ದೃಶ್ಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸೌಂದರ್ಯವನ್ನು ಅನ್ವೇಷಿಸಿ.";
        case '/mantras':
            return "ವಿವಿಧ ಸಾಂಪ್ರದಾಯಿಕ ತಂತ್ರ ಮಂತ್ರಗಳು ಮತ್ತು ಅವುಗಳ ಮಹತ್ವವನ್ನು ಅನ್ವೇಷಿಸಿ. ನಿಮ್ಮ ದೈನಂದಿನ ಅಭ್ಯಾಸಕ್ಕಾಗಿ ಇಲ್ಲಿಂದ ಮಂತ್ರಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿಕೊಳ್ಳಬಹುದು.";
        case '/activities':
            return "ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸವನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ನಿಮ್ಮ ಪ್ರಜ್ಞೆಯನ್ನು ವಿಸ್ತರಿಸಲು ಸರಳವಾದ ಆದರೆ ಶಕ್ತಿಶಾಲಿಯಾದ ತಾಂತ್ರಿಕ ಕ್ರಿಯೆಗಳು ಮತ್ತು ಆಚರಣೆಗಳನ್ನು ಕಲಿಯಿರಿ.";
        case '/audio':
            return "ಮಾರ್ಗದರ್ಶಿ ಧ್ಯಾನಗಳು, ಮಂತ್ರ ಪಠಣಗಳು ಮತ್ತು ಸ್ಪೂರ್ತಿದಾಯಕ ಆಧ್ಯಾತ್ಮಿಕ ಕಥೆಗಳನ್ನು ಕೇಳಿ ನಿಮ್ಮ ಮನಸ್ಸನ್ನು ಶಾಂತಗೊಳಿಸಿ.";

        // AI Tools
        case '/recommendations':
            return "ನಿಮ್ಮ ಗುರಿಗಳು, ಸಮಯ ಮತ್ತು ಅನುಭವದ ಮಟ್ಟಕ್ಕೆ ಅನುಗುಣವಾಗಿ, ನಿಮಗಾಗಿ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಮಂತ್ರ ಮತ್ತು ಚಟುವಟಿಕೆ ಶಿಫಾರಸುಗಳನ್ನು ನಮ್ಮ AI ನಿಂದ ಪಡೆಯಿರಿ.";
        case '/remedies':
            return "ನಿಮ್ಮ ದೈನಂದಿನ ಜೀವನದ ಸವಾಲುಗಳಿಗೆ, ವಿಶೇಷವಾಗಿ ಆರ್ಥಿಕ ಮತ್ತು ಇತರ ಸಮಸ್ಯೆಗಳಿಗೆ, ಸರಳವಾದ ತಾಂತ್ರಿಕ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಿಹಾರಗಳನ್ನು AI ಸಹಾಯದಿಂದ ಪಡೆಯಿರಿ.";
        case '/articles':
            return "ತಂತ್ರ, ಮಂತ್ರ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕತೆಗೆ ಸಂಬಂಧಿಸಿದ ವಿವಿಧ ವಿಷಯಗಳ ಕುರಿತು AI-ರಚಿತ, ಆಳವಾದ ಮತ್ತು ಒಳನೋಟವುಳ್ಳ ಲೇಖನಗಳನ್ನು ಓದಿ.";
        case '/mantra-generator':
            return "ಯಾವುದೇ ಪಠ್ಯವನ್ನು ಅಥವಾ ಮಂತ್ರವನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ಅದರ ಆಡಿಯೋ ಆವೃತ್ತಿಯನ್ನು ತಕ್ಷಣವೇ ರಚಿಸಿ. ಅಭ್ಯಾಸ ಮಾಡಲು ಅಥವಾ ಕೇಳಲು ಇದು ಒಂದು ಉತ್ತಮ ಸಾಧನ.";

        // Community & Services
        case '/consultations':
            return "ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಲೌಕಿಕ ಸಮಸ್ಯೆಗಳಿಗೆ ನಮ್ಮ ಪರಿಣಿತರಿಂದ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಜ್ಯೋತಿಷ್ಯ ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ.";
        case '/duties':
            return "ಒಬ್ಬ ಸಾಧಕನಾಗಿ, ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಪಯಣದಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಲು ನೀವು ಪಾಲಿಸಬೇಕಾದ ಐದು ಪ್ರಮುಖ ಕರ್ತವ್ಯಗಳು ಮತ್ತು ಜವಾಬ್ದಾರಿಗಳ ಬಗ್ಗೆ ಅರಿಯಿರಿ.";
        case '/energized-items':
            return "ಗುರುಗಳಿಂದ ಪ್ರಾಣಪ್ರತಿಷ್ಠಾಪನೆ ಮಾಡಿದ ಮಾಲಾಗಳು ಮತ್ತು ಯಂತ್ರಗಳ ಮಹತ್ವವನ್ನು ತಿಳಿಯಿರಿ ಮತ್ತು ನಿಮ್ಮ ಸಾಧನೆಗೆ ಬೇಕಾದ ಶಕ್ತಿಶಾಲಿ ಸಾಧನಗಳನ್ನು ಪಡೆಯಿರಿ.";
        case '/progress':
            return "ನಿಮ್ಮ ಮಂತ್ರ ಜಪ ಮತ್ತು ಚಟುವಟಿಕೆಗಳ ಅಭ್ಯಾಸವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ. ನಿಮ್ಮ ದೈನಂದಿನ ಸರಣಿಯನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಶಿಸ್ತನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ.";
        case '/forum':
            return "ಇತರ ಸಾಧಕರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ, ನಿಮ್ಮ ಅನುಭವಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ ಮತ್ತು ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ. ನಮ್ಮ ಸಮುದಾಯದೊಂದಿಗೆ ಒಟ್ಟಾಗಿ ಬೆಳೆಯಿರಿ.";
        case '/youtube':
            return "ನಮ್ಮ ಯೂಟ್ಯೂಬ್ ಚಾನೆಲ್‌ನಿಂದ ನೇರವಾಗಿ ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ. ತಂತ್ರ, ಮಂತ್ರ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕತೆಯ ಕುರಿತು ಆಳವಾದ ಜ್ಞಾನವನ್ನು ಪಡೆಯಿರಿ.";

        default:
            return "ಈ ವಿಭಾಗದ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ.";
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
        <header className="space-y-2 p-4 rounded-lg animated-border">
            <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
            <Compass />
            ಅಪ್ಲಿಕೇಶನ್ ಪ್ರವಾಸ
            </h1>
            <p className="text-lg text-muted-foreground">
            ಈ ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಎಲ್ಲಾ ವೈಶಿಷ್ಟ್ಯಗಳು ಮತ್ತು ವಿಭಾಗಗಳ ಅವಲೋಕನ.
            </p>
        </header>

        <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center my-8">
            <AppTourAnimation />
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
