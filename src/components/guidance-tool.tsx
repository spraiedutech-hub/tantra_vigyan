
'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getPersonalizedGuidance } from '@/ai/flows/get-personalized-guidance';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, AlertTriangle, Mic } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  problem: z.string().min(10, 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಕನಿಷ್ಠ 10 ಅಕ್ಷರಗಳಲ್ಲಿ ವಿವರಿಸಿ'),
});
type FormValues = z.infer<typeof formSchema>;

export default function GuidanceTool() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [guidance, setGuidance] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      problem: '',
    },
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        const recognition = recognitionRef.current;
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'kn-IN';

        recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            } else {
              interimTranscript += event.results[i][0].transcript;
            }
          }
          const currentText = form.getValues('problem');
          form.setValue('problem', currentText + finalTranscript + interimTranscript);
        };

        recognition.onerror = (event: any) => {
            console.error('Speech recognition error', event.error);
            toast({
                variant: 'destructive',
                title: 'ಧ್ವನಿ ದೋಷ',
                description: 'ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆಯಲ್ಲಿ ದೋಷ ಕಂಡುಬಂದಿದೆ. ದಯವಿಟ್ಟು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ ನೀವು ಮೈಕ್ರೊಫೋನ್ ಅನುಮತಿ ನೀಡಿದ್ದೀರಿ.',
            });
            setIsListening(false);
        };
        
        recognition.onend = () => {
          if (isListening) {
            recognition.start(); // Restart if it stops automatically and we still want to listen
          }
        };

      } else {
        console.warn("Speech recognition not supported in this browser.");
      }
    }

    return () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
    };
  }, [form, toast, isListening]);


  const handleToggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.start();
        setIsListening(true);
      } else {
        toast({
            variant: 'destructive',
            title: 'ಬೆಂಬಲವಿಲ್ಲ',
            description: 'ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ.',
        });
      }
    }
  };


  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setGuidance(null);
    if(isListening){
        recognitionRef.current?.stop();
        setIsListening(false);
    }
    try {
      const result = await getPersonalizedGuidance(data.problem);
      setGuidance(result.guidance);
    } catch (error) {
      console.error('Error getting guidance:', error);
      toast({
        variant: 'destructive',
        title: 'ದೋಷ',
        description: 'ಮಾರ್ಗದರ್ಶನವನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary"/>
          ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಕೇಳಿ
        </CardTitle>
        <CardDescription>
          ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸದಲ್ಲಿ ನೀವು ಎದುರಿಸುತ್ತಿರುವ ಯಾವುದೇ ಸವಾಲು ಅಥವಾ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ವಿವರಿಸಿ. ನಮ್ಮ AI ಗುರುಗಳು ನಿಮಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert variant="destructive" className="mb-6 border-accent/50 text-accent [&>svg]:text-accent">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
          <AlertDescription>
           ಈ AI ಮಾರ್ಗದರ್ಶನವು ನಿಮ್ಮ ಅಭ್ಯಾಸಕ್ಕೆ ಸಹಾಯ ಮಾಡಲು ಉದ್ದೇಶಿಸಲಾಗಿದೆ, ಆದರೆ ಇದು ಅರ್ಹ ಗುರುವಿನಿಂದ ವೈಯಕ್ತಿಕ ದೀಕ್ಷೆ ಮತ್ತು ಮಾರ್ಗದರ್ಶನಕ್ಕೆ ಬದಲಿಯಾಗಿಲ್ಲ.
          </AlertDescription>
        </Alert>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="problem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಅಥವಾ ಸಮಸ್ಯೆ (ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮಾತನಾಡಿ)</FormLabel>
                  <FormControl>
                    <div className="relative">
                        <Textarea
                          placeholder="ಉದಾ: ಧ್ಯಾನದ ಸಮಯದಲ್ಲಿ ನನ್ನ ಮನಸ್ಸು ತುಂಬಾ ಚಂಚಲವಾಗಿರುತ್ತದೆ, ಏನು ಮಾಡಲಿ?"
                          className="min-h-[100px] pr-12"
                          {...field}
                        />
                        <Button 
                            type="button" 
                            variant="ghost" 
                            size="icon" 
                            onClick={handleToggleListening}
                            className={cn("absolute right-2 top-1/2 -translate-y-1/2", isListening && "text-destructive animate-pulse")}
                        >
                            <Mic className="h-5 w-5"/>
                        </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ
            </Button>
          </form>
        </Form>
      </CardContent>

      {isLoading && (
        <CardFooter>
            <div className="w-full space-y-2">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
            </div>
        </CardFooter>
      )}

      {guidance && (
        <CardFooter>
          <div className="mt-6 w-full animate-fade-in">
            <h3 className="text-lg font-semibold text-accent mb-2">ಗುರುವಿನ ಮಾರ್ಗದರ್ಶನ:</h3>
            <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 whitespace-pre-wrap border-t pt-4">
                {guidance}
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
