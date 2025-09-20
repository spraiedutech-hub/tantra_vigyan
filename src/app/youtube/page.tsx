
'use client';

import { Youtube, BellRing } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

//
// How to add a new YouTube Playlist:
// 1. Find your playlist on YouTube and click on it.
// 2. Look at the URL in your browser's address bar. It will look like:
//    https://www.youtube.com/playlist?list=PLxxxxxxxxxxxxxxxxxx
// 3. The part after 'list=' is your playlist ID. (e.g., PLxxxxxxxxxxxxxxxxxx)
// 4. Copy the playlist ID.
// 5. Add a new object to the 'playlists' array below, following the format.
//
const playlists = [
  {
    name: 'Glimpses of Tantra',
    playlistId: 'PLGugaNSbpj0DwQW2AG2sswSr3JgpTY2QJ',
  },
  // Example of another playlist:
  // {
  //   name: 'My Awesome Playlist',
  //   playlistId: 'YOUR_PLAYLIST_ID_HERE',
  // },
];

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@YourChannelNameHere'; // <<<<< PLEASE UPDATE THIS LINK!

export default function YouTubePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-4 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Youtube />
          YouTube Gallery
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಮ್ಮ ಯೂಟ್ಯೂಬ್ ಪ್ಲೇಲಿಸ್ಟ್‌ಗಳಿಂದ ನೇರವಾಗಿ ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ.
        </p>
      </header>

      <Card className="bg-destructive/10 border-destructive/30">
        <CardHeader>
            <CardTitle>ನಮ್ಮ ಚಾನೆಲ್‌ಗೆ ಚಂದಾದಾರರಾಗಿ</CardTitle>
            <CardDescription>
            ನಮ್ಮ ಚಾನೆಲ್‌ನಲ್ಲಿ ಇನ್ನಷ್ಟು ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ. ಮುಂಬರುವ ವೀಡಿಯೊಗಳನ್ನು ತಪ್ಪಿಸಿಕೊಳ್ಳದಿರಲು, ಚಂದಾದಾರರಾಗಿ ಮತ್ತು ನೋಟಿಫಿಕೇಶನ್‌ಗಳಿಗಾಗಿ ಬೆಲ್ ಬಟನ್ ಒತ್ತಿ.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Button asChild className="bg-destructive text-destructive-foreground hover:bg-destructive/90 w-full sm:w-auto">
                <Link href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                    <BellRing className="mr-2" />
                    ಈಗ ಚಂದಾದಾರರಾಗಿ
                </Link>
            </Button>
        </CardContent>
      </Card>

      <div className="space-y-10">
        {playlists.map((playlist) => {
          const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlist.playlistId}`;
          return (
            <Card key={playlist.playlistId} className="transform hover:scale-[1.01] transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">{playlist.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
