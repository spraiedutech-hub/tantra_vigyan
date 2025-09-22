
'use client';

import { useState, useEffect } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/app-sidebar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import SacredGeometry from '@/components/sacred-geometry';
import AnimatedBackground from '@/components/animated-background';
import AppHeader from '@/components/layout/app-header';
import AppFooter from '@/components/layout/app-footer';
import SplashScreen from '@/components/splash-screen';
import { app } from '@/lib/firebase'; // Import Firebase

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Firebase App initialized:', app.name);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Splash screen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      disableTransitionOnChange
    >
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <AnimatedBackground />
          <SidebarProvider>
            <div className="flex min-h-screen">
              <AppSidebar />
              <SidebarInset>
                <AppHeader />
                <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
                <SacredGeometry className="bottom-6 left-6" mantra="श्रीं" />
                <AppFooter />
              </SidebarInset>
            </div>
          </SidebarProvider>
          <Toaster />
        </>
      )}
    </ThemeProvider>
  );
}
