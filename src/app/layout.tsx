import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { typeFirst, typeScript, typeTitle } from '@/fonts/fonts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pedro - modelo mirim',
  description: 'Site de divulgação do trabalho do pedro'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${typeFirst.variable} ${typeTitle.variable} ${typeScript.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
