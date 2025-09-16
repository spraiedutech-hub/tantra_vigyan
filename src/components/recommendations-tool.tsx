
'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  personalizedMantraRecommendations,
  type PersonalizedMantraRecommendationsOutput,
} from '@/ai/flows/personalized-mantra-recommendations';
import {
  getActivityRecommendations,
  type ActivityRecommendationsOutput,
} from '@/ai/flows/personalized-activity-recommendations';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2, AlertTriangle } from 'lucide-react';
import { Separator } from './ui/separator';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

// Zod schemas for form validation
const mantraSchema = z.object({
  desiredOutcome: z.string().min(1, 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಗುರಿಯನ್ನು ನಮೂದಿಸಿ'),
  timeCommitment: z.string().min(1, 'ದಯವಿಟ್ಟು ಸಮಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ'),
  experienceLevel: z.string().min(1, 'ದಯವಿಟ್ಟು ಅನುಭವವನ್ನು ಆಯ್ಕೆಮಾಡಿ'),
});

const activitySchema = z.object({
  experienceLevel: z.string().min(1, 'ದಯವಿಟ್ಟು ಅನುಭವವನ್ನು ಆಯ್ಕೆಮಾಡಿ'),
  availableTime: z.string().min(1, 'ದಯವಿಟ್ಟು ಸಮಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ'),
  preferences: z.string().min(1, 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆದ್ಯತೆಗಳನ್ನು ನಮೂದಿಸಿ'),
});

type MantraFormValues = z.infer<typeof mantraSchema>;
type ActivityFormValues = z.infer<typeof activitySchema>;

export default function RecommendationsTool() {
  const { toast } = useToast();
  const [mantraLoading, setMantraLoading] = useState(false);
  const [activityLoading, setActivityLoading] = useState(false);
  const [mantraResult, setMantraResult] =
    useState<PersonalizedMantraRecommendationsOutput | null>(null);
  const [activityResult, setActivityResult] =
    useState<ActivityRecommendationsOutput | null>(null);

  const mantraForm = useForm<MantraFormValues>({
    resolver: zodResolver(mantraSchema),
    defaultValues: {
      desiredOutcome: '',
      timeCommitment: '',
      experienceLevel: '',
    },
  });

  const activityForm = useForm<ActivityFormValues>({
    resolver: zodResolver(activitySchema),
    defaultValues: {
      experienceLevel: '',
      availableTime: '',
      preferences: '',
    },
  });

  const onMantraSubmit: SubmitHandler<MantraFormValues> = async (data) => {
    setMantraLoading(true);
    setMantraResult(null);
    try {
      const result = await personalizedMantraRecommendations(data);
      setMantraResult(result);
    } catch (error) {
      console.error('Error getting mantra recommendations:', error);
      toast({
        variant: 'destructive',
        title: 'ದೋಷ',
        description: 'ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯುವಲ್ಲಿ ದೋಷ ಕಂಡುಬಂದಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      });
    } finally {
      setMantraLoading(false);
    }
  };

  const onActivitySubmit: SubmitHandler<ActivityFormValues> = async (data) => {
    setActivityLoading(true);
    setActivityResult(null);
    try {
      const result = await getActivityRecommendations(data);
      setActivityResult(result);
    } catch (error) {
      console.error('Error getting activity recommendations:', error);
      toast({
        variant: 'destructive',
        title: 'ದೋಷ',
        description: 'ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯುವಲ್ಲಿ ದೋಷ ಕಂಡುಬಂದಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      });
    } finally {
      setActivityLoading(false);
    }
  };

  const Notice = () => (
    <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent mt-4">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>ಪ್ರಮುಖ ಸೂಚನೆ</AlertTitle>
        <AlertDescription>
          ಇಲ್ಲಿ ನೀಡಲಾದ ಶಿಫಾರಸುಗಳು ಸಾಮಾನ್ಯ ಮತ್ತು ಆರಂಭಿಕ ಮಾರ್ಗದರ್ಶನಗಳಾಗಿವೆ. ಮಂತ್ರ ಮತ್ತು ತಂತ್ರಗಳು ತಮ್ಮ ನಿಜವಾದ ಮತ್ತು ಸಂಪೂರ್ಣ ಪರಿಣಾಮವನ್ನು ಕರುಣಾಮಯಿ ಗುರುವಿನಿಂದ ದೀಕ್ಷೆ ಪಡೆದಾಗ ಮಾತ್ರ ತೋರಿಸುತ್ತವೆ.
        </AlertDescription>
    </Alert>
  );

  return (
    <Tabs defaultValue="mantra" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="mantra">ಮಂತ್ರ ಶಿಫಾರಸುಗಳು</TabsTrigger>
        <TabsTrigger value="activity">ಚಟುವಟಿಕೆ ಶಿಫಾರಸುಗಳು</TabsTrigger>
      </TabsList>
      <TabsContent value="mantra">
        <Card>
          <CardHeader>
            <CardTitle>ನಿಮಗಾಗಿ ಮಂತ್ರಗಳು</CardTitle>
            <CardDescription>
              ನಿಮ್ಮ ಗುರಿ, ಸಮಯ ಮತ್ತು ಅನುಭವದ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಮಂತ್ರಗಳನ್ನು
              ಪಡೆಯಿರಿ.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Form {...mantraForm}>
              <form
                onSubmit={mantraForm.handleSubmit(onMantraSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={mantraForm.control}
                  name="desiredOutcome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ನಿಮ್ಮ ಗುರಿ (ಉದಾ: ಒತ್ತಡ ಕಡಿಮೆ, ಗಮನ ಹೆಚ್ಚಳ)</FormLabel>
                      <FormControl>
                        <Input placeholder="ನಿಮ್ಮ ಗುರಿಯನ್ನು ನಮೂದಿಸಿ" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={mantraForm.control}
                    name="timeCommitment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ದೈನಂದಿನ ಸಮಯ</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="ಸಮಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="5 minutes">5 ನಿಮಿಷ</SelectItem>
                            <SelectItem value="15 minutes">15 ನಿಮಿಷ</SelectItem>
                            <SelectItem value="30 minutes">30 ನಿಮಿಷ</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={mantraForm.control}
                    name="experienceLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ಅನುಭವದ ಮಟ್ಟ</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="ಮಟ್ಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="beginner">ಆರಂಭಿಕ</SelectItem>
                            <SelectItem value="intermediate">ಮಧ್ಯಮ</SelectItem>
                            <SelectItem value="advanced">ಮುಂದುವರಿದ</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" disabled={mantraLoading} className="w-full">
                  {mantraLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : <Wand2 className="mr-2 h-4 w-4" />}
                  ಶಿಫಾರಸು ಪಡೆಯಿರಿ
                </Button>
              </form>
            </Form>
            {mantraLoading && (
              <div className="flex justify-center items-center py-8">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                <p className="ml-4 text-muted-foreground">ನಿಮಗಾಗಿ ಶಿಫಾರಸುಗಳನ್ನು ರಚಿಸಲಾಗುತ್ತಿದೆ...</p>
              </div>
            )}
            {mantraResult && (
              <div className="mt-6 space-y-4 animate-fade-in">
                <Separator />
                <h3 className="text-xl font-semibold">ನಿಮ್ಮ ಶಿಫಾರಸುಗಳು:</h3>
                <Notice />
                {mantraResult.mantraRecommendations.map((rec, index) => (
                  <Card key={index} className="bg-muted/50 transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <CardHeader>
                      <CardTitle className="text-accent">{rec.mantraName}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p><strong className="font-semibold">ವಿವರಣೆ:</strong> {rec.mantraDescription}</p>
                      <p><strong className="font-semibold">ಅಭ್ಯಾಸದ ಸೂಚನೆಗಳು:</strong> {rec.practiceInstructions}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="activity">
         <Card>
          <CardHeader>
            <CardTitle>ನಿಮಗಾಗಿ ಚಟುವಟಿಕೆಗಳು</CardTitle>
            <CardDescription>
              ನಿಮ್ಮ ಅನುಭವ, ಸಮಯ ಮತ್ತು ಆದ್ಯತೆಗಳ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಚಟುವಟಿಕೆಗಳನ್ನು ಪಡೆಯಿರಿ.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Form {...activityForm}>
              <form
                onSubmit={activityForm.handleSubmit(onActivitySubmit)}
                className="space-y-4"
              >
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={activityForm.control}
                      name="experienceLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ಅನುಭವದ ಮಟ್ಟ</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="ಮಟ್ಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="beginner">ಆರಂಭಿಕ</SelectItem>
                              <SelectItem value="intermediate">ಮಧ್ಯಮ</SelectItem>
                              <SelectItem value="advanced">ಮುಂದುವರಿದ</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={activityForm.control}
                      name="availableTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ಲಭ್ಯವಿರುವ ಸಮಯ</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="ಸಮಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="15 minutes">15 ನಿಮಿಷ</SelectItem>
                              <SelectItem value="30 minutes">30 ನಿಮಿಷ</SelectItem>
                              <SelectItem value="1 hour">1 ಗಂಟೆ</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                 </div>
                <FormField
                  control={activityForm.control}
                  name="preferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ಆದ್ಯತೆಗಳು (ಉದಾ: ಧ್ಯಾನ, ಮಂತ್ರ, ದೃಶ್ಯೀಕರಣ)</FormLabel>
                      <FormControl>
                        <Input placeholder="ನಿಮ್ಮ ಆದ್ಯತೆಗಳನ್ನು ನಮೂದಿಸಿ" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={activityLoading} className="w-full">
                  {activityLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : <Wand2 className="mr-2 h-4 w-4" />}
                  ಶಿಫಾರಸು ಪಡೆಯಿರಿ
                </Button>
              </form>
            </Form>
            {activityLoading && (
              <div className="flex justify-center items-center py-8">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                <p className="ml-4 text-muted-foreground">ನಿಮಗಾಗಿ ಶಿಫಾರಸುಗಳನ್ನು ರಚಿಸಲಾಗುತ್ತಿದೆ...</p>
              </div>
            )}
            {activityResult && (
              <div className="mt-6 space-y-4 animate-fade-in">
                <Separator />
                <h3 className="text-xl font-semibold">ನಿಮ್ಮ ಶಿಫಾರಸುಗಳು:</h3>
                <Notice />
                <Card className="bg-muted/50 transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <CardContent className="p-6">
                      <p className="whitespace-pre-wrap">{activityResult.recommendations}</p>
                    </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
