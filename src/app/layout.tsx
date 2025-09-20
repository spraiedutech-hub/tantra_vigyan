
import type { Metadata } from 'next';
import './globals.css';
import LayoutProvider from '@/components/layout-provider';
import { Noto_Sans, Noto_Sans_Kannada } from 'next/font/google';

const noto_sans_kannada = Noto_Sans_Kannada({
  subsets: ['kannada'],
  display: 'swap',
  variable: '--font-noto-sans-kannada',
});

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
});


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
    <html lang="kn" suppressHydrationWarning className={`${noto_sans_kannada.variable} ${noto_sans.variable}`}>
      <body className="font-body antialiased">
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
