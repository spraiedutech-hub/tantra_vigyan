
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Users, MessageSquare, Clock, ThumbsUp, PlusCircle, Construction } from 'lucide-react';

const forumPosts = [
  {
    id: 1,
    title: 'ಧ್ಯಾನದ ಸಮಯದಲ್ಲಿ ಮನಸ್ಸನ್ನು ಕೇಂದ್ರೀಕರಿಸುವುದು ಹೇಗೆ?',
    author: 'ಸಾಧಕ_ಅನು',
    time: '2 ಗಂಟೆಗಳ ಹಿಂದೆ',
    replies: 5,
    likes: 12,
    category: 'ಧ್ಯಾನ',
  },
  {
    id: 2,
    title: 'ಶ್ರೀ ಯಂತ್ರದೊಂದಿಗೆ ನನ್ನ ಮೊದಲ ಅನುಭವ',
    author: 'ಜ್ಞಾನಿ_ಯೋಗಿ',
    time: '1 ದಿನದ ಹಿಂದೆ',
    replies: 18,
    likes: 45,
    category: 'ಯಂತ್ರ ಸಾಧನೆ',
  },
  {
    id: 3,
    title: 'ಆರಂಭಿಕರಿಗಾಗಿ ಸರಳವಾದ ದೈನಂದಿನ ಅಭ್ಯಾಸಗಳು ಯಾವುವು?',
    author: 'ಹೊಸಬ_ಪ್ರವೀಣ್',
    time: '3 ದಿನಗಳ ಹಿಂದೆ',
    replies: 12,
    likes: 28,
    category: 'ಆರಂಭಿಕರ ಪ್ರಶ್ನೆಗಳು',
  },
];

export default function ForumPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2 p-4 rounded-lg animated-border">
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-2">
          <Users />
          ಸಮುದಾಯ ವೇದಿಕೆ
        </h1>
        <p className="text-lg text-muted-foreground">
          ಇತರ ಸಾಧಕರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ, ಅನುಭವಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ ಮತ್ತು ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.
        </p>
      </header>
      
      <Alert variant="default" className="border-accent/50 text-accent [&>svg]:text-accent">
        <Construction className="h-4 w-4" />
        <AlertTitle className="font-bold">ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ!</AlertTitle>
        <AlertDescription>
          ನಮ್ಮ ಸಮುದಾಯ ವೇದಿಕೆಯು ಪ್ರಸ್ತುತ ನಿರ್ಮಾಣ ಹಂತದಲ್ಲಿದೆ. ಶೀಘ್ರದಲ್ಲೇ, ನೀವು ಇತರರೊಂದಿಗೆ ಸಂವಹನ ನಡೆಸಲು ಮತ್ತು ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಪಯಣವನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>ಇತ್ತೀಚಿನ ಚರ್ಚೆಗಳು</CardTitle>
            <CardDescription>ಸಮುದಾಯದಲ್ಲಿ ಏನು ನಡೆಯುತ್ತಿದೆ ಎಂದು ನೋಡಿ.</CardDescription>
          </div>
          <Button disabled>
            <PlusCircle className="mr-2 h-4 w-4" />
            ಹೊಸ ಪೋಸ್ಟ್
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {forumPosts.map((post) => (
            <Card key={post.id} className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-not-allowed opacity-70">
              <CardHeader>
                <CardTitle className="text-lg font-headline text-accent">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-xs">
                  <span>{post.author} ಅವರಿಂದ</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.time}</span>
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{post.replies} ಪ್ರತ್ಯುತ್ತರಗಳು</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{post.likes} ಇಷ್ಟಗಳು</span>
                </div>
                <div>
                    <span className="px-2 py-1 bg-muted rounded-full text-xs">{post.category}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
