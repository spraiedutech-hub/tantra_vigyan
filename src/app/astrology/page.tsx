
'use client';

import { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateBirthChartAnalysis, type BirthChartAnalysisOutput } from '@/ai/flows/generate-birth-chart-analysis';
import { generatePrashnaAnalysis, type PrashnaAnalysisOutput } from '@/ai/flows/generate-prashna-analysis';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Star, Sparkles, AlertTriangle, Eye } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  dateOfBirth: z.string().min(1, 'ದಯವಿಟ್ಟು ಜನ್ಮ ದಿನಾಂಕವನ್ನು ನಮೂದಿಸಿ'),
  timeOfBirth: z.string().min(1, 'ದಯವಿಟ್ಟು ಜನ್ಮ ಸಮಯವನ್ನು ನಮೂದಿಸಿ'),
  placeOfBirth: z.string().min(2, 'ದಯವಿಟ್ಟು ಜನ್ಮ ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ'),
});
type FormValues = z.infer<typeof formSchema>;

function PrashnaCard() {
  const [prashna, setPrashna] = useState<PrashnaAnalysisOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPrashna = async () => {
      try {
        const result = await generatePrashnaAnalysis({ questionTime: new Date().toISOString() });
        setPrashna(result);
      } catch (error) {
        console.error('Error generating Prashna analysis:', error);
        toast({
            variant: 'destructive',
            title: 'ದೋಷ',
            description: 'ಪ್ರಶ್ನ ಕುಂಡಲಿ ವಿಶ್ಲೇಷಣೆಯನ್ನು ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrashna();
  }, [toast]);

  return (
    <Card className="bg-gradient-to-br from-accent/10 via-card to-primary/10 animated-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 font-headline text-2xl text-accent">
          <Eye />
          ಪ್ರಶ್ನ ಕುಂಡಲಿ: ನಿಮ್ಮ ಆಗಮನದ ರಹಸ್ಯ
        </CardTitle>
        <CardDescription>
          ನೀವು ಈ ಪುಟಕ್ಕೆ ಭೇಟಿ ನೀಡಿದ ಕ್ಷಣದ ಆಧಾರದ ಮೇಲೆ, ಜ್ಯೋತಿಷ್ಯವು ನಿಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿರುವುದನ್ನು ಹೀಗೆ ಸೂಚಿಸುತ್ತದೆ:
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && (
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </div>
        )}
        {prashna && (
            <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/90 text-lg">
                {prashna.analysis}
            </blockquote>
        )}
      </CardContent>
    </Card>
  );
}


export default function AstrologyPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<BirthChartAnalysisOutput | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateOfBirth: '',
      timeOfBirth: '',
      placeOfBirth: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await generateBirthChartAnalysis(data);
      setAnalysis(result);
    } catch (error) {
      console.error('Error generating analysis:', error);
      toast({
        variant: 'destructive',
        title: 'ದೋಷ',
        description: 'ವಿಶ್ಲೇಷಣೆಯನ್ನು ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Star />
          ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಆಗಮನದ ಕ್ಷಣದ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ.
        </p>
      </header>

      <PrashnaCard />

      <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
        <AlertDescription>
          ಈ AI-ಚಾಲಿತ ವಿಶ್ಲೇಷಣೆಯು ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ. ನಿಖರವಾದ ಮತ್ತು ಆಳವಾದ ವಿಶ್ಲೇಷಣೆಗಾಗಿ, ದಯವಿಟ್ಟು ಅನುಭವಿ ಜ್ಯೋತಿಷಿಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>ಸಂಪೂರ್ಣ ಜನ್ಮ ಕುಂಡಲಿ ವಿಶ್ಲೇಷಣೆ</CardTitle>
          <CardDescription>
            ಆಳವಾದ ವಿಶ್ಲೇಷಣೆಗಾಗಿ, ದಯವಿಟ್ಟು ನಿಮ್ಮ ಜನ್ಮ ವಿವರಗಳನ್ನು ಒದಗಿಸಿ.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ಜನ್ಮ ದಿನಾಂಕ</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timeOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ಜನ್ಮ ಸಮಯ</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="placeOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ಜನ್ಮ ಸ್ಥಳ</FormLabel>
                      <FormControl>
                        <Input placeholder="ಉದಾ: ಬೆಂಗಳೂರು" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                ವಿಶ್ಲೇಷಣೆ ಪಡೆಯಿರಿ
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-1/4 mt-2" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
      )}

      {analysis && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">ನಿಮ್ಮ ಜಾತಕ ವಿಶ್ಲೇಷಣೆ</CardTitle>
            <CardDescription>ಲಗ್ನ: {analysis.ascendant}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">ಗ್ರಹಗಳ ಸ್ಥಾನಗಳು</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {analysis.planetaryPositions.map((planet, index) => (
                  <li key={index}>
                    <span className="font-semibold text-foreground">{planet.planet}:</span> {planet.sign} ({planet.house}ನೇ ಮನೆ)
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">ವಿಶ್ಲೇಷಣೆ</h3>
              <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 whitespace-pre-wrap">
                {analysis.analysis}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
