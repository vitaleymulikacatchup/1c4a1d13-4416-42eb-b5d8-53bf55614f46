import type { Metadata } from 'next';
import { Inter_Tight, Playfair_Display } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'MVP SaaS Landing — Plan, Build, Launch Fast',
  description: 'Plan a lean SaaS MVP with a crisp, single-page layout: hero, about, buy flow, tokenomics, and a clear CTA—fast, simple, conversion-ready.',
  keywords: ['saas', 'landing-page', 'mvp', 'single-page', 'conversion', 'cta', 'tokenomics', 'how-to-buy', 'pricing', 'about-us'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MVP SaaS Landing — Plan, Build, Launch Fast',
    description: 'Plan a lean SaaS MVP with a crisp, single-page layout: hero, about, buy flow, tokenomics, and a clear CTA—fast, simple, conversion-ready.',
    type: 'website',
    url: '/',
    siteName: 'MVP Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP SaaS Landing — Plan, Build, Launch Fast',
    description: 'Plan a lean SaaS MVP with a crisp, single-page layout: hero, about, buy flow, tokenomics, and a clear CTA—fast, simple, conversion-ready.',
    images: ['https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/sleek-futuristic-background-in-16-9-prem-1759469892822-73a323e7.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang='en'>
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}