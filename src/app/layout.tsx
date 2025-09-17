
import type { Metadata } from 'next';
import './globals.css';
import LayoutProvider from '@/components/layout-provider';

export const metadata: Metadata = {
  title: 'Tantra Vigyan',
  description: 'An app that teaches tantra activities and mantra practices in Kannada.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kn" suppressHydrationWarning>
      <body className="font-body antialiased">
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
