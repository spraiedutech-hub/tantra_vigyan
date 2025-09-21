
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import content from '@/lib/content/human-technology-explainer.json';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function HumanTechnologyExplainer() {
  return (
    <ScrollAnimate>
        <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <Zap />
                    {content.title}
                </CardTitle>
                <CardDescription>
                    {content.subtitle}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                    {content.content}
                </p>
            </CardContent>
            <CardFooter>
                <Button asChild>
                    <Link href="/knowledge">
                        ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    </ScrollAnimate>
  );
}
