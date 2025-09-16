
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { mantras } from '@/lib/constants';
import { Music, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { recordMantraPracticed } from '@/lib/progress-tracker';
import { useToast } from '@/hooks/use-toast';

export default function MantrasPage() {
  const { toast } = useToast();

  const handlePractice = (mantraName: string) => {
    recordMantraPracticed();
    toast({
      title: 'ಅಭಿನಂದನೆಗಳು!',
      description: `"${mantraName}" ಮಂತ್ರವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿದ್ದೀರಿ.`,
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Music />
          ಮಂತ್ರ ಸಂಗ್ರಹ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಸಾಂಪ್ರದಾಯಿಕ ತಂತ್ರ ಮಂತ್ರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mantras.map((mantra, index) => (
          <Card key={index} className="flex flex-col transform hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent">{mantra.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{mantra.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => handlePractice(mantra.name)}
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                ಅಭ್ಯಾಸ ಮಾಡಿದ್ದೇನೆ
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
