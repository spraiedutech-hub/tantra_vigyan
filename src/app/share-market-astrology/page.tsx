
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LineChart, AlertTriangle, UserCheck, Phone, TrendingUp, CalendarDays, Star, BookOpen, Sun, Moon, Link as LinkIcon, Rss, Loader2 } from 'lucide-react';
import { ScrollAnimate } from '@/components/ui/scroll-animate';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import personalizedForecastInfo from '@/lib/content/personalized-forecast-info.json';
import planetaryInfluences from '@/lib/content/planetary-influences.json';
import dailyPrediction from '@/lib/content/market-predictions.json';
import type { MarketPredictionOutput } from '@/lib/types';


const WHATSAPP_NUMBER = "917022070287";
const WHATSAPP_MESSAGE_YEARLY = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ 1 ವರ್ಷದ ಶೇರು ಮಾರುಕಟ್ಟೆ ಜ್ಯೋತಿಷ್ಯ ವರದಿಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL_YEARLY = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_YEARLY)}`;

const WHATSAPP_MESSAGE_DAILY = "ನಮಸ್ಕಾರ, ನಾನು ತಂತ್ರ ವಿಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್‌ನಿಂದ ದೈನಂದಿನ ವೈಯಕ್ತಿಕ ಶೇರು ಮಾರುಕಟ್ಟೆ ಮುನ್ಸೂಚನೆ ಸೇವೆಗಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಿದ್ದೇನೆ.";
const WHATSAPP_URL_DAILY = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_DAILY)}`;

const planetIcons: { [key: string]: React.ElementType } = {
    "ಗುರು": TrendingUp,
    "ಬುಧ": Rss,
    "ರಾಹು": LinkIcon,
    "ಶನಿ": Loader2,
    "ಸೂರ್ಯ": Sun,
    "ಚಂದ್ರ": Moon,
};


export default function ShareMarketAstrologyPage() {
  const [prediction] = useState<MarketPredictionOutput>(dailyPrediction);

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <LineChart />
          ಶೇರು ಮಾರುಕಟ್ಟೆ ಜ್ಯೋತಿಷ್ಯ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಗ್ರಹಗಳ ಚಲನೆಯು ಮಾರುಕಟ್ಟೆಯ ಮೇಲೆ ಹೇಗೆ ಪ್ರಭಾವ ಬೀರುತ್ತದೆ ಎಂಬುದನ್ನು ಅರಿಯಿರಿ.
        </p>
      </header>
      
       <ScrollAnimate delay={150}>
        <Alert variant="destructive" className="border-accent/50 text-accent [&>svg]:text-accent">
          <AlertTitle>ಹಕ್ಕು ನಿರಾಕರಣೆ (Disclaimer)</AlertTitle>
          <AlertDescription>
            ಇಲ್ಲಿ ನೀಡಲಾದ ಮಾಹಿತಿಯು ಕೇವಲ ಜ್ಯೋತಿಷ್ಯದ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ಇದು ಯಾವುದೇ ರೀತಿಯ ಹಣಕಾಸು ಸಲಹೆ ಅಥವಾ ಹೂಡಿಕೆಯ ಶಿಫಾರಸು ಅಲ್ಲ. ಶೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುವುದು ಅಪಾಯಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ. ದಯವಿಟ್ಟು ಹೂಡಿಕೆ ಮಾಡುವ ಮೊದಲು ಅರ್ಹ ಹಣಕಾಸು ಸಲಹೆಗಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ. ಹಠಾತ್ ಘಟನೆಗಳು ಮತ್ತು ಸುದ್ದಿಗಳು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿನ ಜ್ಯೋತಿಷ್ಯದ ಮುನ್ಸೂಚನೆಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದು.
          </AlertDescription>
        </Alert>
      </ScrollAnimate>

       <Tabs defaultValue="forecast" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="forecast">ದೈನಂದಿನ ಮುನ್ಸೂಚನೆ</TabsTrigger>
                <TabsTrigger value="learn">ಜ್ಯೋತಿಷ್ಯದ ದೃಷ್ಟಿಯಲ್ಲಿ</TabsTrigger>
            </TabsList>
            <TabsContent value="forecast">
                <Card className="mt-4">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                        <CalendarDays className="text-primary"/>
                        ಇಂದಿನ ಮಾರುಕಟ್ಟೆ ಜ್ಯೋತಿಷ್ಯ ಮುನ್ಸೂಚನೆ
                        </CardTitle>
                        <CardDescription>ದಿನಾಂಕ: {prediction.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="nifty" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="nifty">ನಿಫ್ಟಿ</TabsTrigger>
                                <TabsTrigger value="banknifty">ಬ್ಯಾಂಕ್ ನಿಫ್ಟಿ</TabsTrigger>
                            </TabsList>
                            <TabsContent value="nifty" className="mt-4">
                                <div className="space-y-4">
                                    <div>
                                    <h3 className="font-semibold text-accent">ಒಟ್ಟಾರೆ ಪ್ರವೃತ್ತಿ:</h3>
                                    <p className="text-muted-foreground">{prediction.nifty.trend}</p>
                                    </div>
                                    <div>
                                    <h3 className="font-semibold text-accent">ಗಂಟೆಯ ವಿಶ್ಲೇಷಣೆ:</h3>
                                    <ul className="space-y-3 mt-2">
                                        {prediction.nifty.hourly.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 p-2 rounded-md bg-muted/50">
                                            <Badge variant="outline" className="mt-1">{item.time}</Badge>
                                            <p className="text-sm text-foreground/90">{item.prediction}</p>
                                        </li>
                                        ))}
                                    </ul>
                                    </div>
                                    <Separator className="my-6" />
                                    <div className="space-y-4">
                                    <h3 className="font-semibold text-accent flex items-center gap-2">
                                        <Star className="h-4 w-4" />
                                        ನಿಫ್ಟಿ ಸ್ಟಾಕ್‌ಗಳು (Stocks of the day)
                                    </h3>
                                    <ul className="space-y-3">
                                        {prediction.nifty.stocksToWatch.map((stock, index) => (
                                        <li key={index} className="p-3 rounded-md border bg-muted/30">
                                            <p className="font-bold text-foreground">{stock.name}</p>
                                            <p className="text-sm text-muted-foreground">{stock.reason}</p>
                                        </li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="banknifty" className="mt-4">
                                <div className="space-y-4">
                                    <div>
                                    <h3 className="font-semibold text-accent">ಒಟ್ಟಾರೆ ಪ್ರವೃತ್ತಿ:</h3>
                                    <p className="text-muted-foreground">{prediction.banknifty.trend}</p>
                                    </div>
                                    <div>
                                    <h3 className="font-semibold text-accent">ಗಂಟೆಯ ವಿಶ್ಲೇಷಣೆ:</h3>
                                    <ul className="space-y-3 mt-2">
                                        {prediction.banknifty.hourly.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 p-2 rounded-md bg-muted/50">
                                            <Badge variant="outline" className="mt-1">{item.time}</Badge>
                                            <p className="text-sm text-foreground/90">{item.prediction}</p>
                                        </li>
                                        ))}
                                    </ul>
                                    </div>
                                    <Separator className="my-6" />
                                    <div className="space-y-4">
                                    <h3 className="font-semibold text-accent flex items-center gap-2">
                                        <Star className="h-4 w-4" />
                                        ಬ್ಯಾಂಕ್ ನಿಫ್ಟಿ ಸ್ಟಾಕ್‌ಗಳು (Stocks of the day)
                                    </h3>
                                    <ul className="space-y-3">
                                        {prediction.banknifty.stocksToWatch.map((stock, index) => (
                                        <li key={index} className="p-3 rounded-md border bg-muted/30">
                                            <p className="font-bold text-foreground">{stock.name}</p>
                                            <p className="text-sm text-muted-foreground">{stock.reason}</p>
                                        </li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </TabsContent>
             <TabsContent value="learn" className="space-y-6">
                <Card className="mt-4">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                            <BookOpen className="text-primary"/>
                            {personalizedForecastInfo.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                        {personalizedForecastInfo.content.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </CardContent>
                </Card>
                 <div className="space-y-6 mt-6">
                    <h2 className="text-3xl font-bold font-headline text-primary">ಮಾರುಕಟ್ಟೆಯ ಮೇಲೆ ಗ್ರಹಗಳ ಪ್ರಭಾವ</h2>
                    {planetaryInfluences.map((item, index) => {
                        const Icon = planetIcons[item.planet] || Star;
                        return (
                        <Card key={index} className="transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl text-accent flex items-center gap-3">
                                    <Icon className="h-6 w-6"/>
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90 text-justify leading-relaxed">
                                {item.content}
                                </p>
                            </CardContent>
                        </Card>
                        )
                    })}
                </div>
            </TabsContent>
       </Tabs>
       
       <ScrollAnimate delay={500}>
        <Card className="bg-gradient-to-br from-primary/20 to-accent/20 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <Star className="animate-pulse-glow" />
                    ವಿಶೇಷ ಸೇವೆ: ವೈಯಕ್ತಿಕ ದೈನಂದಿನ ಮುನ್ಸೂಚನೆ
                </CardTitle>
                <CardDescription>
                ಪ್ರತಿದಿನ ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯನ್ನು ಆಧರಿಸಿ ನಿಮಗಾಗಿ ವಿಶೇಷವಾಗಿ ಸಿದ್ಧಪಡಿಸಿದ, ನಿಖರವಾದ ಮುನ್ಸೂಚನೆಗಳನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                ಸಾಮಾನ್ಯ ಮುನ್ಸೂಚನೆಗಳ ಆಚೆಗೆ, ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಗ್ರಹಸ್ಥಿತಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಪ್ರತಿದಿನ ಯಾವ ಸ್ಟಾಕ್‌ಗಳು ಲಾಭದಾಯಕ, ಯಾವ ಸಮಯದಲ್ಲಿ ವ್ಯಾಪಾರ ಮಾಡುವುದು ಉತ್ತಮ ಮತ್ತು ಯಾವ ದಿನಗಳು ನಿಮಗೆ ಅನುಕೂಲಕರವಾಗಿಲ್ಲ ಎಂಬುದರ ಕುರಿತು ನೇರ ಮಾರ್ಗದರ್ಶನವನ್ನು ಪಡೆಯಿರಿ.
                </p>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row items-center gap-4">
                <p className="text-xl font-bold text-primary">ಶುಲ್ಕ: ಲಾಭದಲ್ಲಿ ಪಾಲು (Profit Sharing)</p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href={WHATSAPP_URL_DAILY} target="_blank">
                    <Phone className="mr-2 h-5 w-5" />
                    ದೈನಂದಿನ ಸೇವೆಗೆ ವಿನಂತಿಸಿ
                    </Link>
                </Button>
            </CardFooter>
        </Card>
      </ScrollAnimate>

      <ScrollAnimate delay={700}>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 animated-border transform hover:scale-[1.01] transition-transform duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-headline text-accent flex items-center gap-3">
                    <UserCheck />
                    ವೈಯಕ್ತಿಕ 1 ವರ್ಷದ ಶೇರು ಮಾರುಕಟ್ಟೆ ವರದಿ
                </CardTitle>
                <CardDescription>
                ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯ ಆಧಾರದ ಮೇಲೆ, ನಿಮಗೆ ಯಾವ ಕ್ಷೇತ್ರಗಳು ಮತ್ತು ಸಮಯಗಳು ಹೂಡಿಕೆಗೆ ಅನುಕೂಲಕರವಾಗಿವೆ ಎಂಬುದರ ಕುರಿತು ವೈಯಕ್ತಿಕ ವರದಿಯನ್ನು ಪಡೆಯಿರಿ.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="prose prose-lg dark:prose-invert max-w-full text-foreground/90">
                ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿನ ಧನ ಯೋಗಗಳು, ಗ್ರಹಗಳ ಬಲಾಬಲ ಮತ್ತು ಪ್ರಸ್ತುತ ದಶಾ-ಭುಕ್ತಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ಶೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನಿಮ್ಮ ಯಶಸ್ಸಿನ ಸಾಧ್ಯತೆಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಸಂಭಾವ್ಯ ನಷ್ಟಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಗುರೂಜಿಯವರಿಂದ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಿರಿ.
                </p>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row items-center gap-4">
                <p className="text-xl font-bold text-primary">ಶುಲ್ಕ: ₹3,333</p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href={WHATSAPP_URL_YEARLY} target="_blank">
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
