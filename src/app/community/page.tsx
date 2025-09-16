import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { communityThreads } from '@/lib/constants';
import { Users, MessageSquare, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div className="space-y-2">
            <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
                <Users />
                ಸಮುದಾಯ ವೇದಿಕೆ
            </h1>
            <p className="text-lg text-muted-foreground">
            ನಿಮ್ಮ ಅನುಭವಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ ಮತ್ತು ಇತರ ಸಾಧಕರೊಂದಿಗೆ ಚರ್ಚಿಸಿ.
            </p>
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            ಹೊಸ ಚರ್ಚೆ ಪ್ರಾರಂಭಿಸಿ
        </Button>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>ಇತ್ತೀಚಿನ ಚರ್ಚೆಗಳು</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60%]">ವಿಷಯ</TableHead>
                <TableHead className="text-center">ಪ್ರತಿಕ್ರಿಯೆಗಳು</TableHead>
                <TableHead>ಕೊನೆಯ ಪೋಸ್ಟ್</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {communityThreads.map((thread) => (
                <TableRow key={thread.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell>
                    <div className="font-medium">{thread.title}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <UserCircle className="w-4 h-4" />
                        {thread.author} ರಿಂದ
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-1">
                        <MessageSquare className="w-4 h-4 text-muted-foreground"/>
                        {thread.replies}
                    </div>
                  </TableCell>
                  <TableCell>{thread.lastPost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
