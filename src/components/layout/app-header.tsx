'use client';

import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { navItems } from './app-sidebar';
import { useMemo } from 'react';

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
    </header>
  );
}
