import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import FloatingSpices from '@/components/FloatingSpices';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'American Dadar Biryani | Authentic Dum Experience',
  description: 'Experience authentic dum biryani crafted with tradition, served at our exclusive locations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Preloader />
        <CustomCursor />
        <FloatingSpices />
        {children}
      </body>
    </html>
  );
}
