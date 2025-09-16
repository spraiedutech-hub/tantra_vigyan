
'use client';

import { useState } from 'react';
import { Youtube } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Add your YouTube playlists to this list
// You can find the playlist ID in the URL of the playlist page on YouTube
const playlists = [
  {
    name: 'Ambika D Nagaraj - All Videos',
    playlistId: 'UU2-w9YEt2_8a_TDIZoE-3_A', // This is the special ID for all of a channel's uploads
  },
  // Example: Add another playlist below
  // {
  //   name: 'My Awesome Playlist',
  //   playlistId: 'PLxxxxxxxxxxxxxxxxxxxxxx', 
  // },
];

export default function YouTubePage() {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(playlists[0].playlistId);

  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${selectedPlaylistId}`;

  return (
    <div className="space-y-8 animate-fade-in h-full flex flex-col">
      <header className="space-y-4 p-4 rounded-lg animated-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
                <Youtube />
                YouTube Playlists
            </h1>
            <div className="max-w-xs">
                <Select onValueChange={setSelectedPlaylistId} defaultValue={selectedPlaylistId}>
                    <SelectTrigger>
                        <SelectValue placeholder="Playlist ಆಯ್ಕೆಮಾಡಿ" />
                    </SelectTrigger>
                    <SelectContent>
                        {playlists.map((playlist) => (
                        <SelectItem key={playlist.playlistId} value={playlist.playlistId}>
                            {playlist.name}
                        </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
        <p className="text-lg text-muted-foreground">
          ನಮ್ಮ ಯೂಟ್ಯೂಬ್ ಪ್ಲೇಲಿಸ್ಟ್‌ಗಳಿಂದ ನೇರವಾಗಿ ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ.
        </p>
      </header>

      <div className="flex-1 w-full h-full min-h-[60vh] rounded-lg overflow-hidden shadow-lg">
        <iframe
          key={selectedPlaylistId} // Add key to force re-render on change
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
