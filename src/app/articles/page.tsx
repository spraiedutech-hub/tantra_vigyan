
'use client';

import { useState, useMemo } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateArticle, type ArticleOutput } from '@/ai/flows/generate-article';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Feather, CalendarDays } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

const formSchema = z.object({
  topic: z.string().min(3, 'ವಿಷಯವು ಕನಿಷ್ಠ 3 ಅಕ್ಷರಗಳನ್ನು ಹೊಂದಿರಬೇಕು'),
});
type FormValues = z.infer<typeof formSchema>;

const dailyTopics = [
    "ಕುಂಡಲಿನೀ ಶಕ್ತಿಯ ರಹಸ್ಯ", "ಮಂತ್ರ ಜಪದ ವೈಜ್ಞಾನಿಕ ಮಹತ್ವ", "ಯಂತ್ರಗಳ ಆಧ್ಯಾತ್ಮಿಕ ಅರ್ಥ",
    "ಪಂಚಮಕಾರ ಸಾಧನೆ", "ಗುರು-ಶಿಷ್ಯ ಪರಂಪರೆ", "ದೇಹವೇ ದೇವಾಲಯ", "ತಾಂತ್ರಿಕ ದೃಷ್ಟಿಯಲ್ಲಿನ ಬ್ರಹ್ಮಾಂಡ",
    "ಚಕ್ರಗಳ ಜಾಗೃತಿ", "ಬೀಜ ಮಂತ್ರಗಳ ಶಕ್ತಿ", "ದೀಕ್ಷೆಯ ಮಹತ್ವ"
];

export default function ArticleGeneratorPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState<ArticleOutput | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
    },
  });
  
  const topicOfTheDay = useMemo(() => {
    // This creates a pseudo-random topic that changes daily
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    return dailyTopics[dayOfYear % dailyTopics.length];
  }, []);

  const handleGenerateArticle = async (topic: string) => {
    setIsLoading(true);
    setArticle(null);
    try {
      const result = await generateArticle({ topic });
      setArticle(result);
    } catch (error) {
      console.error('Error generating article:', error);
      toast({
        variant: 'destructive',
        title: 'ದೋಷ',
        description: 'ಲೇಖನವನ್ನು ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleGenerateArticle(data.topic);
  };

  const handleTopicOfTheDay = () => {
    form.setValue('topic', topicOfTheDay);
    handleGenerateArticle(topicOfTheDay);
  };


  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Feather />
          AI ಲೇಖನ ಜನರೇಟರ್
        </h1>
        <p className="text-lg text-muted-foreground">
          ತಂತ್ರಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ವಿಷಯದ ಬಗ್ಗೆ ಆಳವಾದ ಲೇಖನಗಳನ್ನು ರಚಿಸಿ.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>ಹೊಸ ಲೇಖನವನ್ನು ರಚಿಸಿ</CardTitle>
          <CardDescription>
            ಕೆಳಗಿನ ಇಂದಿನ ವಿಷಯವನ್ನು ಬಳಸಿ ಅಥವಾ ನಿಮ್ಮ ಸ್ವಂತ ವಿಷಯವನ್ನು ನಮೂದಿಸಿ.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <Button onClick={handleTopicOfTheDay} variant="outline" className="w-full">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>ಇಂದಿನ ವಿಷಯದ ಮೇಲೆ ಓದಿ: <strong>{topicOfTheDay}</strong></span>
            </Button>

            <div className="flex items-center space-x-4">
                <div className="flex-1 border-t border-dashed"></div>
                <span className="text-sm text-muted-foreground">ಅಥವಾ</span>
                <div className="flex-1 border-t border-dashed"></div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ನಿಮ್ಮ ವಿಷಯ</FormLabel>
                      <FormControl>
                        <Input placeholder="ಉದಾ: ಶ್ರೀ ಚಕ್ರದ ಮಹತ್ವ" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : <Feather className="mr-2 h-4 w-4" />}
                  ಲೇಖನ ರಚಿಸಿ
                </Button>
              </form>
            </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <Card>
          <CardHeader>
             <Skeleton className="w-full h-64" />
            <Skeleton className="h-8 w-3/4 mt-4" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
      )}

      {article && (
        <Card className="animate-fade-in transform hover:scale-[1.01] transition-transform duration-300 ease-in-out overflow-hidden">
          <Image 
            src={article.imageUrl}
            alt={article.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">{article.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 whitespace-pre-wrap">
              {article.content}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
