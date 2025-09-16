
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  const { toast } = useToast();
  const [theme, setTheme] = useState('light');

  const handleSaveChanges = () => {
    toast({
      title: 'ಯಶಸ್ವಿ!',
      description: 'ನಿಮ್ಮ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ.',
    });
  };

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Settings />
          ಸೆಟ್ಟಿಂಗ್‌ಗಳು
        </h1>
        <p className="text-lg text-muted-foreground">
          ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್ ಆದ್ಯತೆಗಳನ್ನು ಇಲ್ಲಿ ನಿರ್ವಹಿಸಿ.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>ಪ್ರದರ್ಶನ</CardTitle>
          <CardDescription>ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್‌ನ ನೋಟವನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="theme-mode" className="font-semibold">
              ಥೀಮ್
            </Label>
            <RadioGroup
              defaultValue="light"
              className="flex items-center space-x-4"
              onValueChange={setTheme}
              value={theme}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light">ಬೆಳಕು</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark">ಗಾಢ</Label>
              </div>
            </RadioGroup>
          </div>

           <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="language-select" className="font-semibold">
                ಭಾಷೆ
              </Label>
              <Select defaultValue="kn">
                <SelectTrigger id="language-select" className="w-[180px]">
                  <SelectValue placeholder="ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kn">ಕನ್ನಡ</SelectItem>
                  <SelectItem value="en" disabled>English (Coming Soon)</SelectItem>
                </SelectContent>
              </Select>
            </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>ಅಧಿಸೂಚನೆಗಳು</CardTitle>
            <CardDescription>ನಿಮ್ಮ ಅಧಿಸೂಚನೆ ಆದ್ಯತೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="notifications-switch" className="font-semibold">
                ದೈನಂದಿನ ದೃಢೀಕರಣ ಅಧಿಸೂಚನೆಗಳು
                </Label>
                <Switch id="notifications-switch" />
            </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSaveChanges} className="bg-primary text-primary-foreground hover:bg-primary/90">
          ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ
        </Button>
      </div>

    </div>
  );
}
