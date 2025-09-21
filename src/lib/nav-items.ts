
import {
  Home,
  BookAudio,
  Sunrise,
  Sparkles,
  TrendingUp,
  BookOpen,
  KeyRound,
  ShieldQuestion,
  Library,
  ClipboardCheck,
  Shapes,
  Compass,
  Youtube,
  Feather,
  CheckCircle,
  HeartHandshake,
  Users,
  Mic,
  Star,
  Clock,
  Orbit,
  LineChart,
  Dices,
  ShieldOff,
  Recycle,
  Gem,
  HeartPulse,
  Coins,
  Ghost,
  Stars,
  GraduationCap,
  HeartCrack,
} from 'lucide-react';

export const mainPages = [
  { href: '/', label: 'ಮುಖಪುಟ', icon: Home },
  { href: '/tour', label: 'ಸೈಟ್ ಪ್ರವಾಸ', icon: Compass },
  { href: '/sadhana', label: 'ನಿತ್ಯ ಸಾಧನಾ', icon: Sunrise },
  { href: '/initiation', label: 'ದೀಕ್ಷೆ', icon: KeyRound },
];

export const knowledgePages = [
    { href: '/knowledge', label: 'ಜ್ಞಾನ ಭಂಡಾರ', icon: BookOpen },
    { href: '/literature', label: 'ಸಾಹಿತ್ಯ', icon: Library },
    { href: '/karma-rahasya', label: 'ಕರ್ಮ ರಹಸ್ಯ', icon: Orbit },
    { href: '/kaalagnana', label: 'ಕಾಲಜ್ಞಾನ', icon: Clock },
    { href: '/tantra-and-disease', label: 'ತಂತ್ರ ಮತ್ತು ರೋಗ', icon: HeartPulse },
    { href: '/tantra-and-money', label: 'ತಂತ್ರ ಮತ್ತು ಸಂಪತ್ತು', icon: Coins },
    { href: '/tantra-for-students', label: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಂತ್ರ', icon: GraduationCap },
    { href: '/divine-and-other-energies', label: 'ದೈವಿಕ ಶಕ್ತಿಗಳು', icon: Ghost },
    { href: '/overcoming-sad-memories', label: 'ದುಃಖದ ನೆನಪುಗಳು', icon: HeartCrack },
    { href: '/shatkriya-rahasya', label: 'ಷಟ್ಕ್ರಿಯಾ ರಹಸ್ಯ', icon: Recycle },
    { href: '/shatkarma-rahasya', label: 'ಷಟ್ಕರ್ಮ ರಹಸ್ಯ', icon: Recycle },
    { href: '/black-magic', label: 'ಮಾಟ ಮಂತ್ರ', icon: ShieldOff },
];

export const astrologyPages = [
    { href: '/astrology', label: 'ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ', icon: Star },
    { href: '/navagraha', label: 'ನವಗ್ರಹಗಳು', icon: Stars },
    { href: '/share-market-astrology', label: 'ಶೇರು ಮಾರುಕಟ್ಟೆ', icon: LineChart },
    { href: '/gambling', label: 'ಜೂಜು ಮತ್ತು ಅದೃಷ್ಟ', icon: Dices },
];

export const dailyPracticePages = [
    { href: '/yantras', label: 'ಯಂತ್ರಗಳು', icon: Shapes },
    { href: '/mantras', label: 'ಮಂತ್ರಗಳು', icon: BookAudio },
    { href: '/activities', label: 'ಚಟುವಿಕೆಗಳು', icon: CheckCircle },
];

export const aiToolsPages = [
    { href: '/recommendations', label: 'ಶಿಫಾರಸುಗಳು', icon: Sparkles },
    { href: '/remedies', label: 'ಪರಿಹಾರಗಳು', icon: HeartHandshake },
    { href: '/articles', label: 'ಲೇಖನಗಳು', icon: Feather },
    { href: '/mantra-generator', label: 'ಮಂತ್ರ ಆಡಿಯೋ', icon: Mic },
];

export const communityPages = [
    { href: '/consultations', label: 'ಸಮಾಲೋಚನೆ', icon: ShieldQuestion },
    { href: '/duties', label: 'ಸಾಧಕನ ಕರ್ತವ್ಯಗಳು', icon: ClipboardCheck },
    { href: '/energized-items', label: 'ಶಕ್ತಿ ತುಂಬಿದ ಸಾಧನಗಳು', icon: Gem },
    { href: '/progress', label: 'ಪ್ರಗತಿ', icon: TrendingUp },
    { href: '/forum', label: 'ಸಮುದಾಯ ವೇದಿಕೆ', icon: Users },
    { href: '/youtube', label: 'YouTube', icon: Youtube },
];


// For the new grouped sidebar structure
export const navGroups = [
  {
    title: "ಮುಖ್ಯ ಪುಟಗಳು",
    items: mainPages,
  },
  {
    title: "ಜ್ಞಾನ",
    items: knowledgePages,
  },
  {
    title: "ಜ್ಯೋತಿಷ್ಯ",
    items: astrologyPages,
  },
  {
    title: "ದೈನಂದಿನ ಅಭ್ಯಾಸ",
    items: dailyPracticePages,
  },
  {
    title: "AI ಪರಿಕರಗಳು",
    items: aiToolsPages,
  },
  {
    title: "ಸಮುದಾಯ ಮತ್ತು ಸೇವೆಗಳು",
    items: communityPages,
  },
];
