
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { GraduationCap, AlertTriangle, UserCheck, Phone } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import tantraForStudentsData from '@/lib/content/tantra-for-students.json';
import StudentBrainAnimation from '@/components/student-brain-animation';

const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗಾಗಿ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function TantraForStudentsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <GraduationCap />
          ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಂತ್ರ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಶಿಕ್ಷಣದಲ್ಲಿ ಯಶಸ್ಸು ಮತ್ತು ಮಾನಸಿಕ ಸ್ಪಷ್ಟತೆಗಾಗಿ ತಾಂತ್ರಿಕ ಮಾರ್ಗದರ್ಶನ.
        </p>
      </header>
      
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center my-4 overflow-hidden rounded-lg bg-muted/30">
        <StudentBrainAnimation />
      </div>

      <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg">ಗಮನಿಸಿ</AlertTitle>
          <AlertDescription>
            ಈ ಪುಟದಲ್ಲಿನ ಮಾಹಿತಿಯು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಮಾನಸಿಕ ಬೆಂಬಲವನ್ನು ನೀಡುವ ಉದ್ದೇಶವನ್ನು ಹೊಂದಿದೆ. ಈ ತಂತ್ರಗಳು ಕಠಿಣ ಪರಿಶ್ರಮ ಮತ್ತು ಅಧ್ಯಯನಕ್ಕೆ ಪರ್ಯಾಯವಲ್ಲ, ಬದಲಿಗೆ ಅವುಗಳಿಗೆ ಪೂರಕವಾಗಿವೆ.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

      <ScrollAnimate>
        <Card>
            <CardHeader>
                <CardTitle>{tantraForStudentsData.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                {tantraForStudentsData.introduction.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </CardContent>
        </Card>
      </ScrollAnimate>

      <div className="space-y-6">
        {tantraForStudentsData.sections.map((item, index) => (
          <ScrollAnimate key={index} delay={300 + index * 150}>
            <Card className="transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 space-y-4 text-justify leading-relaxed">
                  {item.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimate>
        ))}
      </div>

       <ScrollAnimate delay={400 + tantraForStudentsData.sections.length * 150}>
         <Card className="bg-gradient-to-r from-primary/10 via-card to-accent/10 animated-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="text-primary"/>
              {tantraForStudentsData.conclusion.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
            {tantraForStudentsData.conclusion.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={500 + tantraForStudentsData.sections.length * 150}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ
                </CardTitle>
                <CardDescription>
                  ವಿದ್ಯಾರ್ಥಿಯ ಜನ್ಮ ಕುಂಡಲಿ ಮತ್ತು ಪ್ರಸ್ತುತ ಸವಾಲುಗಳ ಆಧಾರದ ಮೇಲೆ, ಅವರ ಶೈಕ್ಷಣಿಕ ಯಶಸ್ಸಿಗೆ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಆಧ್ಯಾತ್ಮಿಕ ಪರಿಹಾರಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶನ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                  ನಿಮ್ಮ ಮಗುವಿನ ಜಾತಕವನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ಅವರ ಏಕಾಗ್ರತೆ, ಸ್ಮರಣಶಕ್ತಿ ಮತ್ತು ಕಲಿಕೆಯ ಸಾಮರ್ಥ್ಯವನ್ನು ಹೆಚ್ಚಿಸಲು ಯಾವ ಮಂತ್ರ, ಯಂತ್ರ ಅಥವಾ ರತ್ನವು ಸೂಕ್ತವೆಂದು ತಿಳಿಯಿರಿ. ಪರೀಕ್ಷೆಯ ಭಯ, ಒತ್ತಡ ಮತ್ತು ಇತರ ಶೈಕ್ಷಣಿಕ ಅಡೆತಡೆಗಳನ್ನು ನಿವಾರಿಸಲು ಗುರೂಜಿಯವರಿಂದ ವೈಯಕ್ತಿಕ ಸಲಹೆ ಪಡೆಯಿರಿ.
                </p>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row items-center gap-4">
                <p className="text-xl font-bold text-primary">ಶುಲ್ಕ: ₹1,111</p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href={WHATSAPP_URL} target="_blank">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp ಮೂಲಕ ವಿನಂತಿಸಿ
                    </Link>
                </Button>
            </CardFooter>
        </Card>
      </ScrollAnimate>
    </div>
  );
}
