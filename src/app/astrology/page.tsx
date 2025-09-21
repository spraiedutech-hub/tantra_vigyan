
'use client';

import { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateBirthChartAnalysis, type BirthChartAnalysisOutput } from '@/ai/flows/generate-birth-chart-analysis';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Star, Sparkles, AlertTriangle, CalendarDays } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import dailyHoroscopes from '@/lib/content/daily-horoscopes.json';

const birthChartSchema = z.object({
  dateOfBirth: z.string().min(1, 'ದಯವಿಟ್ಟು ಜನ್ಮ ದಿನಾಂಕವನ್ನು ನಮೂದಿಸಿ'),
  timeOfBirth: z.string().min(1, 'ದಯವಿಟ್ಟು ಜನ್ಮ ಸಮಯವನ್ನು ನಮೂದಿಸಿ'),
  placeOfBirth: z.string().min(2, 'ದಯವಿಟ್ಟು ಜನ್ಮ ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ'),
});
type BirthChartFormValues = z.infer<typeof birthChartSchema>;

const lagnas = [
  'ಮೇಷ', 'ವೃಷಭ', 'ಮಿಥುನ', 'ಕರ್ಕಾಟಕ', 'ಸಿಂಹ', 'ಕನ್ಯಾ',
  'ತುಲಾ', 'ವೃಶ್ಚಿಕ', 'ಧನು', 'ಮಕರ', 'ಕುಂಭ', 'ಮೀನ'
];

type Horoscope = {
  lagna: string;
  forecast: string;
};

export default function AstrologyPage() {
  const { toast } = useToast();
  const [isChartLoading, setIsChartLoading] = useState(false);
  const [analysis, setAnalysis] = useState<BirthChartAnalysisOutput | null>(null);
  const [horoscope, setHoroscope] = useState<Horoscope | null>(null);
  const [selectedLagna, setSelectedLagna] = useState<string>('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, []);

  const birthChartForm = useForm<BirthChartFormValues>({
    resolver: zodResolver(birthChartSchema),
    defaultValues: {
      dateOfBirth: '',
      timeOfBirth: '',
      placeOfBirth: '',
    },
  });

  const onBirthChartSubmit: SubmitHandler<BirthChartFormValues> = async (data) => {
    setIsChartLoading(true);
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
      setIsChartLoading(false);
    }
  };
  
  const handleDailyHoroscope = () => {
    if (!selectedLagna) {
        toast({
            variant: 'destructive',
            title: 'ದೋಷ',
            description: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಲಗ್ನವನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
        });
        return;
    }
    setHoroscope(null); // Clear previous horoscope
    const foundHoroscope = dailyHoroscopes.find(h => h.lagna === selectedLagna);
    if (foundHoroscope) {
        setHoroscope(foundHoroscope);
    } else {
        toast({
            variant: 'destructive',
            title: 'ದೋಷ',
            description: 'ಈ ಲಗ್ನಕ್ಕೆ ಭವಿಷ್ಯ ಲಭ್ಯವಿಲ್ಲ.',
        });
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
          ದಿನದ ಭವಿಷ್ಯ ಮತ್ತು ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ.
        </p>
      </header>

      <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
        <AlertDescription>
          ಈ AI-ಚಾಲಿತ ವಿಶ್ಲೇಷಣೆಯು ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ. ನಿಖರವಾದ ಮತ್ತು ಆಳವಾದ ವಿಶ್ಲೇಷಣೆಗಾಗಿ, ದಯವಿಟ್ಟು ಅನುಭವಿ ಜ್ಯೋತಿಷಿಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>ದಿನದ ಭವಿಷ್ಯ (ನಾಡಿ ಜ್ಯೋತಿಷ್ಯ ಆಧಾರಿತ)</CardTitle>
          <CardDescription>
            ನಿಮ್ಮ ಲಗ್ನವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು {currentDate} ದಿನಾಂಕದ ವೈಯಕ್ತಿಕ ಭವಿಷ್ಯವನ್ನು ಪಡೆಯಿರಿ.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
                 <Select onValueChange={setSelectedLagna} value={selectedLagna}>
                    <SelectTrigger>
                        <SelectValue placeholder="ನಿಮ್ಮ ಲಗ್ನವನ್ನು ಆಯ್ಕೆಮಾಡಿ" />
                    </SelectTrigger>
                    <SelectContent>
                        {lagnas.map(lagna => (
                            <SelectItem key={lagna} value={lagna}>{lagna}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button onClick={handleDailyHoroscope} disabled={!selectedLagna} className="w-full sm:w-auto">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    ಭವಿಷ್ಯ ಪಡೆಯಿರಿ
                </Button>
            </div>
            {horoscope && (
                <div className="pt-4 animate-fade-in">
                     <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/90 text-lg">
                        {horoscope.forecast}
                    </blockquote>
                </div>
            )}
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle>ಸಂಪೂರ್ಣ ಜನ್ಮ ಕುಂಡಲಿ ವಿಶ್ಲೇಷಣೆ</CardTitle>
          <CardDescription>
            ಆಳವಾದ ವಿಶ್ಲೇಷಣೆಗಾಗಿ, ದಯವಿಟ್ಟು ನಿಮ್ಮ ಜನ್ಮ ವಿವರಗಳನ್ನು ಒದಗಿಸಿ.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...birthChartForm}>
            <form onSubmit={birthChartForm.handleSubmit(onBirthChartSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={birthChartForm.control}
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
                  control={birthChartForm.control}
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
                  control={birthChartForm.control}
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
              <Button type="submit" disabled={isChartLoading} className="w-full">
                {isChartLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                ವಿಶ್ಲೇಷಣೆ ಪಡೆಯಿರಿ
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isChartLoading && (
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
            <CardTitle className="font-headline text-2xl text-accent">ಭೃಗು ನಂದಿ ನಾಡಿ ಪ್ರಕಾರ ನಿಮ್ಮ ಜಾತಕ ವಿಶ್ಲೇಷಣೆ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 whitespace-pre-wrap">
              {analysis.analysis}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

    