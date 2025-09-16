'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { progressData } from '@/lib/constants';
import { TrendingUp, Target, Repeat, Star } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { ChartTooltipContent } from '@/components/ui/chart';

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <TrendingUp />
          ನಿಮ್ಮ ಪ್ರಗತಿ
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ತಂತ್ರ ಅಭ್ಯಾಸಗಳ ಪ್ರಗತಿಯನ್ನು ಇಲ್ಲಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ಪಠಿಸಿದ ಮಂತ್ರಗಳು</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressData.mantrasPracticed}</div>
            <p className="text-xs text-muted-foreground">ಒಟ್ಟು ಪಠಣಗಳು</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ಪೂರ್ಣಗೊಂಡ ಚಟುವಟಿಕೆಗಳು</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressData.activitiesCompleted}</div>
            <p className="text-xs text-muted-foreground">ಒಟ್ಟು ಪೂರ್ಣಗೊಂಡಿದೆ</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ದೈನಂದಿನ ಸರಣಿ</CardTitle>
            <Repeat className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressData.dailyStreak} ದಿನಗಳು</div>
            <p className="text-xs text-muted-foreground">ಸತತ ಅಭ್ಯಾಸ</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">ಮಾಸಿಕ ಅಭ್ಯಾಸದ ಅವಲೋಕನ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData.chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="hsl(var(--foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--foreground))" fontSize={12} />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  content={<ChartTooltipContent />}
                />
                <Bar
                  dataKey="ಮಂತ್ರಗಳು"
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="ಚಟುವಟಿಕೆಗಳು"
                  fill="hsl(var(--accent))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
