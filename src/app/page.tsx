
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { dailyAffirmations } from '@/lib/constants';
import { Heart, TrendingUp, Sunrise, ArrowRight } from 'lucide-react';
import ChakraPractitioner from '@/components/chakra-practitioner';
import { getProgressData, type ProgressData, INITIAL_PROGRESS_DATA } from '@/lib/progress-tracker';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const [affirmation, setAffirmation] = useState('');
  const [progressData, setProgressData] = useState<ProgressData | null>(null);

  useEffect(() => {
    // Select a random affirmation on client-side to avoid hydration mismatch
    const randomAffirmation =
      dailyAffirmations[Math.floor(Math.random() * dailyAffirmations.length)];
    setAffirmation(randomAffirmation);

    // Fetch progress data from localStorage on the client
    setProgressData(getProgressData());
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-4 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary">
          ಸಾಧಕ, ನಿಮಗೆ ಸುಸ್ವಾಗತ (Welcome, Practitioner)
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಪಯಣವನ್ನು ಮುಂದುವರಿಸಲು ಇಲ್ಲಿ ಎಲ್ಲವೂ ಸಿದ್ಧವಾಗಿದೆ.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Sadhana Card */}
        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out flex flex-col justify-between bg-primary/10 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-primary">
              <Sunrise />
              ಇಂದಿನ ಸಾಧನಾ
            </CardTitle>
            <CardDescription>ನಿಮ್ಮ ದೈನಂದಿನ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸಕ್ಕೆ ಸಿದ್ಧರಾಗಿ.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/sadhana">
                ಈಗ ಪ್ರಾರಂಭಿಸಿ <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Progress Streak Card */}
        <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out flex flex-col justify-between bg-accent/10 border-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-accent">
              <TrendingUp />
              ದೈನಂದಿನ ಸರಣಿ
            </CardTitle>
            <CardDescription>ನಿಮ್ಮ ಅಭ್ಯಾಸದ ಸ್ಥಿರತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {progressData ? (
                <>
                    <p className="text-5xl font-bold text-foreground">{progressData.dailyStreak}</p>
                    <p className="text-muted-foreground">ದಿನಗಳ ಸರಣಿ</p>
                </>
            ) : (
                <div className="space-y-2">
                    <Skeleton className="h-12 w-16 mx-auto" />
                    <Skeleton className="h-4 w-24 mx-auto" />
                </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Daily Affirmation Card */}
      <Card className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out flex flex-col justify-between bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Heart className="text-destructive" />
            ದಿನದ ದೃಢೀಕರಣ
          </CardTitle>
        </CardHeader>
        <CardContent>
          {affirmation ? (
              <blockquote className="text-lg italic text-foreground border-l-4 border-destructive pl-4">
              {affirmation}
            </blockquote>
          ) : (
              <Skeleton className="h-12 w-full" />
          )}
        </CardContent>
      </Card>
      
      <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center">
          <div className="relative w-full h-full max-w-[450px] md:max-w-none md:max-h-[500px]">
            <ChakraPractitioner />
          </div>
      </div>

    </div>
  );
}
