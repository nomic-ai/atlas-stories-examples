import './globals.css';
import type { Metadata } from 'next';
import { Inter, Crimson_Pro } from 'next/font/google';

// Define fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson-pro',
});

export const metadata: Metadata = {
  title: 'Atlas Stories Examples',
  description: 'Examples of Nomic Atlas Stories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body>{children}</body>
    </html>
  );
}