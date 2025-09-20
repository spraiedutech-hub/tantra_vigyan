
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateMantraAudio } from '@/ai/flows/generate-mantra-audio';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mic, Download, Volume2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const formSchema = z.object({
  mantraText: z.string().min(3, 'ಮಂತ್ರವು ಕನಿಷ್ಠ 3 ಅಕ್ಷರಗಳನ್ನು ಹೊಂದಿರಬೇಕು').max(500, 'ಮಂತ್ರವು 500 ಅಕ್ಷರಗಳನ್ನು ಮೀರಬಾರದು'),
  voice: z.enum(['male', 'female'], {
    required_error: 'ದಯವಿಟ್ಟು ಧ್ವನಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
  }),
});
type FormValues = z.infer<typeof formSchema>;

export default function MantraAudioGeneratorPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [audioDataUri, setAudioDataUri] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mantraText: '',
      voice: 'male',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setAudioDataUri(null);
    try {
      const result = await generateMantraAudio({ text: data.mantraText, voice: data.voice });
      setAudioDataUri(result.audioDataUri);
    } catch (error) {
      console.error('Error generating audio:', error);
      toast({
        variant: 'destructive',
        title: 'ದೋಷ',
        description:
          'ಆಡಿಯೋ ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ನಿಮ್ಮ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!audioDataUri) return;
    const link = document.createElement('a');
    link.href = audioDataUri;
    link.download = 'mantra.wav';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Mic />
          ಮಂತ್ರ ಆಡಿಯೋ ಜನರೇಟರ್
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಸ್ವಂತ ಮಂತ್ರವನ್ನು ಪಠಿಸಿ ಮತ್ತು ಅದನ್ನು ಆಡಿಯೋ ರೂಪದಲ್ಲಿ ಕೇಳಿ ಅಥವಾ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>ನಿಮ್ಮ ಮಂತ್ರವನ್ನು ನಮೂದಿಸಿ</CardTitle>
          <CardDescription>
            ಯಾವುದೇ ಮಂತ್ರ ಅಥವಾ ಪವಿತ್ರ ಪಠ್ಯವನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ. AI ಅದನ್ನು ನಿಮಗಾಗಿ ಧ್ವನಿ ರೂಪಕ್ಕೆ ಪರಿವರ್ತಿಸುತ್ತದೆ.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="mantraText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ಮಂತ್ರ ಪಠ್ಯ (ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="ಉದಾ: ಓಂ ನಮಃ ಶಿವಾಯ"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="voice"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>ಧ್ವನಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            ಪುರುಷ ಧ್ವನಿ (Male Voice)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            ಮಹಿಳಾ ಧ್ವನಿ (Female Voice)
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Volume2 className="mr-2 h-4 w-4" />
                )}
                {isLoading ? 'ಆಡಿಯೋ ರಚಿಸಲಾಗುತ್ತಿದೆ...' : 'ಆಡಿಯೋ ರಚಿಸಿ'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <Card>
          <CardHeader>
            <CardTitle>ಆಡಿಯೋ ಪ್ಲೇಯರ್</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-10 w-32" />
          </CardContent>
        </Card>
      )}

      {audioDataUri && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>ನಿಮ್ಮ ಮಂತ್ರ ಆಡಿಯೋ ಸಿದ್ಧವಾಗಿದೆ</CardTitle>
            <CardDescription>
              ಕೆಳಗೆ ಆಲಿಸಿ ಅಥವಾ ನಿಮ್ಮ ಸಾಧನಕ್ಕೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <audio controls src={audioDataUri} className="w-full">
              Your browser does not support the audio element.
            </audio>
          </CardContent>
          <CardFooter>
            <Button onClick={handleDownload} className="w-full">
              <Download className="mr-2 h-4 w-4" />
              ಡೌನ್‌ಲೋಡ್ (.wav)
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
