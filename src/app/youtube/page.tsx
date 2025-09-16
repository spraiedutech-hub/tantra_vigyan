
'use client';

import { Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    name: 'Ambika D Nagaraj - All Videos',
    playlistId: 'UU2-w9YEt2_8a_TDIZoE-3_A', // This is the special ID for all of a channel's uploads
  },
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

      <div className="space-y-10">
        {playlists.map((playlist) => {
          const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlist.playlistId}`;
          return (
            <Card key={playlist.playlistId} className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
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
