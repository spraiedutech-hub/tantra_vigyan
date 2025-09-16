
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/nav-items';
import { useMemo } from 'react';
import { ArrowRight, User } from 'lucide-react';

export default function AppHeader() {
  const pathname = usePathname();

  const currentPage = useMemo(() => {
    return navItems.find((item) => item.href === pathname);
  }, [pathname]);

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
      <div className="flex-1 flex justify-center items-center gap-4">
        <Button asChild className="bg-primary/80 hover:bg-primary text-primary-foreground animate-pulse">
            <Link href="/initiation/process">
            ದೀಕ್ಷಾ ಪ್ರಕ್ರಿಯೆ ಪ್ರಾರಂಭವಾಗಿದೆ
            <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </Button>
        <Button asChild variant="outline">
            <Link href="/">
                <User className="mr-2 h-4 w-4" />
                Nagaraja D, Hosadurga
            </Link>
        </Button>
      </div>
      <div className="flex-1" />
    </header>
  );
}
