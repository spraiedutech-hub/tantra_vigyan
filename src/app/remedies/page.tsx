
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateRemedyRitual, type RemedyRitualOutput } from '@/ai/flows/generate-remedy-ritual';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, HeartHandshake, AlertTriangle, Wand2, BookOpen } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import preloadedRemedies from '@/lib/content/remedies-base.json';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import remedySchools from '@/lib/content/remedy-schools.json';
import { ScrollAnimate } from '@/components/ui/scroll-animate';


const commonProblems = [
    { id: 'financial', label: 'ಆರ್ಥಿಕ ಸ್ಥಿರತೆ', problem: 'Financial problems and stability' },
    { id: 'business', label: 'ವ್ಯಾಪಾರದಲ್ಲಿ ಯಶಸ್ಸು', problem: 'Success in business' },
    { id: 'obstacles', label: 'ಅಡೆತಡೆಗಳ ನಿವಾರಣೆ', problem: 'Removal of obstacles' },
    { id: 'peace', label: 'ಮನೆಯಲ್ಲಿ ಶಾಂತಿ', problem: 'Peace and harmony at home' },
];

const formSchema = z.object({
  problem: z.string().min(10, 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಕನಿಷ್ಠ 10 ಅಕ್ಷರಗಳಲ್ಲಿ ವಿವರಿಸಿ'),
});
type FormValues = z.infer<typeof formSchema>;


export default function RemediesPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [ritual, setRitual] = useState<RemedyRitualOutput | null>(null);
  const [currentProblem, setCurrentProblem] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      problem: '',
    },
  });

  const handlePreloadedRitual = (problemId: string, problemLabel: string) => {
    setIsLoading(false);
    const foundRemedy = preloadedRemedies.find(r => r.id === problemId);
    if (foundRemedy) {
        setRitual(foundRemedy.remedy);
        setCurrentProblem(problemLabel);
    } else {
        toast({
            variant: 'destructive',
            title: 'ದೋಷ',
            description: 'ಕ್ಷಮಿಸಿ, ಈ ಸಮಸ್ಯೆಗೆ ಪೂರ್ವ-ನಿರ್ಧರಿತ ಪರಿಹಾರ ಲಭ್ಯವಿಲ್ಲ.',
        });
    }
  }

  const handleAiRitual = async (problem: string, label: string) => {
    setIsLoading(true);
    setRitual(null);
    setCurrentProblem(label);
    try {
      const result = await generateRemedyRitual(problem);
      setRitual(result);
      form.reset();
    } catch (error) {
      console.error('Error generating ritual:', error);
      toast({
        variant: 'destructive',
        title: 'ದೋಷ',
        description: 'ಪರಿಹಾರವನ್ನು ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ನಿಮ್ಮ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onFormSubmit: SubmitHandler<FormValues> = (data) => {
    handleAiRitual(data.problem, "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಸಮಸ್ಯೆ");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <HeartHandshake />
          ದೈನಂದಿನ ಜೀವನದ ಪರಿಹಾರಗಳು
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಸಮಸ್ಯೆಗಳಿಗೆ ಸರಳ ಮತ್ತು ಶಕ್ತಿಯುತವಾದ ತಾಂತ್ರಿಕ ಪರಿಹಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.
        </p>
      </header>

      <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>ಅತ್ಯಂತ ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
        <AlertDescription>
          ಈ ಪರಿಹಾರಗಳು ಶ್ರದ್ಧೆ ಮತ್ತು ನಂಬಿಕೆಯ ಆಧಾರದ ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ. ಇದು ಯಾವುದೇ ರೀತಿಯ ವೈಜ್ಞಾನಿಕ ಅಥವಾ ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ. ನಿಜವಾದ ಮತ್ತು ಸಂಪೂರ್ಣ ಪರಿಣಾಮವನ್ನು ಕರುಣಾಮಯಿ ಗುರುವಿನಿಂದ ದೀಕ್ಷೆ ಪಡೆದಾಗ ಮಾತ್ರ ಪಡೆಯಲು ಸಾಧ್ಯ.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ</CardTitle>
          <CardDescription>
            ಕೆಳಗಿನ ಪೆಟ್ಟಿಗೆಯಲ್ಲಿ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ (AI ಬಳಸಿ), ಅಥವಾ ಸಾಮಾನ್ಯ ಸಮಸ್ಯೆಗಳಿಂದ ಒಂದನ್ನು ಆಯ್ಕೆಮಾಡಿ.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="problem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಸಮಸ್ಯೆ (ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ವಿವರಿಸಿ)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="ಉದಾ: ನನ್ನ ವ್ಯಾಪಾರದಲ್ಲಿ ಪ್ರಗತಿ ಕಾಣುತ್ತಿಲ್ಲ, ಅಡೆತಡೆಗಳು ಹೆಚ್ಚಾಗುತ್ತಿವೆ."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  AI ಮೂಲಕ ಪರಿಹಾರ ಪಡೆಯಿರಿ
                </Button>
              </form>
            </Form>
            
            <div className="flex items-center space-x-4">
                <div className="flex-1 border-t border-dashed"></div>
                <span className="text-sm text-muted-foreground">ಅಥವಾ ಸಾಮಾನ್ಯ ಸಮಸ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ</span>
                <div className="flex-1 border-t border-dashed"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commonProblems.map((problem) => (
                <Button
                  key={problem.id}
                  variant="outline"
                  size="lg"
                  className="justify-start text-left h-auto py-3"
                  onClick={() => handlePreloadedRitual(problem.id, problem.label)}
                  disabled={isLoading}
                >
                  <HeartHandshake className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span>{problem.label}</span>
                </Button>
              ))}
            </div>
        </CardContent>
      </Card>
      
      {(isLoading || ritual) && (
        <Card className="animate-fade-in">
          <CardHeader>
            {isLoading ? (
                <Skeleton className="h-8 w-3/4" />
            ) : (
                <CardTitle className="font-headline text-2xl text-accent">{ritual?.ritualName}</CardTitle>
            )}
            {isLoading ? (
                <Skeleton className="h-4 w-1/2 mt-2" />
            ) : (
                 <CardDescription>
                    {currentProblem} - ಈ ಸರಳ ಪೂಜಾ ವಿಧಾನವನ್ನು ಅನುಸರಿಸಿ
                </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-muted-foreground">{ritual?.description}</p>
                 <div className="space-y-3">
                    {ritual?.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-1 bg-primary/10 border-primary text-primary">{stepIndex + 1}</Badge>
                        <p className="text-foreground/90">{step}</p>
                      </div>
                    ))}
                  </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <section className="space-y-4 mt-12">
        <h2 className="text-3xl font-bold font-headline text-primary flex items-center gap-2">
            <BookOpen />
            ಪರಿಹಾರ ಶಾಸ್ತ್ರಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ
        </h2>
        <Accordion type="single" collapsible className="w-full">
            {remedySchools.map((item, index) => (
                <ScrollAnimate key={index} delay={index * 100}>
                    <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className="text-xl font-headline text-accent hover:no-underline text-left">
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 space-y-6 text-justify leading-relaxed">
                                {item.content.split('\n\n').map((paragraph, pIndex) => (
                                    <p key={pIndex}>{paragraph}</p>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </ScrollAnimate>
            ))}
        </Accordion>
      </section>

    </div>
  );
}
