
'use client';

import { useState } from 'react';
import { Youtube } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Add your YouTube channels to this list
// The 'id' is the part of your channel URL after '@' or the string starting with 'UC'
// The playlist for all uploads is the channel ID with the first two letters 'UC' replaced with 'UU'
const channels = [
  {
    name: 'Ambika D Nagaraj',
    playlistId: 'UU2-w9YEt2_8a_TDIZoE-3_A', // Derived from channel ID UC2-w9YEt2_8a_TDIZoE-3_A
  },
  // Example: Add another channel below
  // {
  //   name: 'Another Channel',
  //   playlistId: 'UUxxxxxxxxxxxxxxxxxxxxxx', 
  // },
];

export default function YouTubePage() {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(channels[0].playlistId);

  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${selectedPlaylistId}`;

  return (
    <div className="space-y-8 animate-fade-in h-full flex flex-col">
      <header className="space-y-4 p-4 rounded-lg animated-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
                <Youtube />
                YouTube ಚಾನೆಲ್‌ಗಳು
            </h1>
            <div className="max-w-xs">
                <Select onValueChange={setSelectedPlaylistId} defaultValue={selectedPlaylistId}>
                    <SelectTrigger>
                        <SelectValue placeholder="ಚಾನೆಲ್ ಆಯ್ಕೆಮಾಡಿ" />
                    </SelectTrigger>
                    <SelectContent>
                        {channels.map((channel) => (
                        <SelectItem key={channel.playlistId} value={channel.playlistId}>
                            {channel.name}
                        </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
        <p className="text-lg text-muted-foreground">
          ನಮ್ಮ ಯೂಟ್ಯೂಬ್ ಚಾನೆಲ್‌ಗಳಿಂದ ನೇರವಾಗಿ ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ.
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
