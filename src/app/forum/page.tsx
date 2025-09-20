
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Users, Mail, Lightbulb, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const weeklyDiscussion = {
  topic: "ಗುರು-ಶಿಷ್ಯ ಸಂಬಂಧದ ಮಹತ್ವ",
  prompt: "ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಪಯಣದಲ್ಲಿ ಗುರುವಿನ ಪಾತ್ರದ ಬಗ್ಗೆ ನಿಮ್ಮ ಆಲೋಚನೆಗಳೇನು? ಒಬ್ಬ ನಿಜವಾದ ಗುರುವನ್ನು ಹೇಗೆ ಗುರುತಿಸುವುದು? ನಿಮ್ಮ ಅನುಭವಗಳು ಅಥವಾ ಅನಿಸಿಕೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.",
  mailto: "guruji@example.com?subject=Weekly%20Discussion:%20Guru-Shishya%20Relationship"
};

export default function ForumPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Users />
          ಸಮುದಾಯ ವೇದಿಕೆ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಇತರ ಸಾಧಕರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ, ಅನುಭವಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ ಮತ್ತು ಒಟ್ಟಿಗೆ ಬೆಳೆಯಿರಿ.
        </p>
      </header>
      
      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle className="font-bold">ಗೌಪ್ಯತೆ ಮತ್ತು ಗೌರವ</AlertTitle>
        <AlertDescription>
          ಇದು ಒಂದು ಸುರಕ್ಷಿತ ಮತ್ತು ಗೌರವಾನ್ವಿತ ಸ್ಥಳವಾಗಿದೆ. ದಯವಿಟ್ಟು ಎಲ್ಲರೊಂದಿಗೆ ಗೌರವದಿಂದ ವರ್ತಿಸಿ. ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಸಾಧನಾ ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುವುದನ್ನು தவிர்க்கಿ.
        </AlertDescription>
      </Alert>

      <Card className="transform hover:scale-[1.01] transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-accent flex items-center gap-3">
            <MessageSquare />
            ವಾರದ ಚರ್ಚಾ ವಿಷಯ
          </CardTitle>
          <CardDescription className="text-lg">{weeklyDiscussion.topic}</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                {weeklyDiscussion.prompt}
            </p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
            <Button asChild size="lg" className="w-full">
                <Link href={`mailto:${weeklyDiscussion.mailto}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    ಚರ್ಚೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ (ಇಮೇಲ್ ಮೂಲಕ)
                </Link>
            </Button>
            <p className="text-xs text-muted-foreground text-center w-full">
                ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಇಮೇಲ್ ಮೂಲಕ ಕಳುಹಿಸಿ. ಆಯ್ದ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಅನಾಮಧೇಯವಾಗಿ ಭವಿಷ್ಯದ ಅಪ್‌ಡೇಟ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಬಹುದು.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
