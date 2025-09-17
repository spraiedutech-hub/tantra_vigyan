
'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/app-sidebar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import SacredGeometry from '@/components/sacred-geometry';
import AnimatedBackground from '@/components/animated-background';
import AppHeader from '@/components/layout/app-header';
import AppFooter from '@/components/layout/app-footer';
import SplashScreen from '@/components/splash-screen';

// export const metadata: Metadata = {
//   title: 'Tantra Vigyan',
//   description: 'An app that teaches tantra activities and mantra practices in Kannada.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Splash screen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="kn" suppressHydrationWarning>
      <head>
        <title>Tantra Vigyan</title>
        <meta name="description" content="An app that teaches tantra activities and mantra practices in Kannada." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            disableTransitionOnChange
        >
          {isLoading ? <SplashScreen /> : (
            <>
              <AnimatedBackground />
              <SidebarProvider>
                <div className="flex min-h-screen">
                  <AppSidebar />
                  <SidebarInset>
                    <AppHeader />
                    <SacredGeometry className="top-6 right-6" />
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
      </body>
    </html>
  );
}
