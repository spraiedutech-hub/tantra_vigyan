
import { Youtube } from 'lucide-react';

export default function YouTubePage() {
  const channelId = 'UC2-w9YEt2_8a_TDIZoE-3_A';
  // This URL format is specifically for embedding a channel's uploads as a playlist.
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=UU2-w9YEt2_8a_TDIZoE-3_A`;

  return (
    <div className="space-y-8 animate-fade-in h-full flex flex-col">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Youtube />
          YouTube ಚಾನೆಲ್
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಮ್ಮ ಯೂಟ್ಯೂಬ್ ಚಾನೆಲ್‌ನಿಂದ ನೇರವಾಗಿ ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ.
        </p>
      </header>

      <div className="flex-1 w-full h-full min-h-[60vh] rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
