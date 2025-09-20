
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/nav-items';
import { useMemo } from 'react';
import { ArrowRight, User, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AppHeader() {
  const pathname = usePathname();
  const { toast } = useToast();

  const currentPage = useMemo(() => {
    return navItems.find((item) => item.href === pathname);
  }, [pathname]);

  const handleShare = async () => {
    const shareData = {
      title: 'Tantra Vigyan',
      text: 'Check out this app for learning about Tantra and Mantras in Kannada.',
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      try {
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: 'ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ',
          description: 'ಅಪ್ಲಿಕೇಶನ್ ಲಿಂಕ್ ಅನ್ನು ನಿಮ್ಮ ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ.',
        });
      } catch (err) {
        console.error('Failed to copy: ', err);
        toast({
            variant: 'destructive',
            title: 'ದೋಷ',
            description: 'ಲಿಂಕ್ ನಕಲಿಸಲು ವಿಫಲವಾಗಿದೆ.',
        });
      }
    }
  };

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 md:h-16">
      <div className="flex items-center gap-2 md:hidden">
        <SidebarTrigger />
      </div>
      <div className="flex-1">
        {currentPage && (
          <h1 className="text-lg font-semibold md:text-xl">
            {currentPage.label}
          </h1>
        )}
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <Button asChild className="hidden sm:inline-flex bg-primary/80 hover:bg-primary text-primary-foreground">
            <Link href="/initiation/process">
            ದೀಕ್ಷಾ ಪ್ರಕ್ರಿಯೆ
            <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </Button>
        <Button variant="outline" size="icon" aria-label="Share App" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="User Profile">
            <User className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
