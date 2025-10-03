import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MVP Studio — SaaS MVP Landing: Plan & Launch Fast",
  description: "Plan a lean SaaS MVP with a crisp, conversion-focused single-page layout featuring hero, about, how-to-buy, tokenomics, and a bold CTA to accelerate launch.",
  keywords: ["saas","landing-page","mvp","single-page","conversion","cta","tokenomics","how-to-buy","pricing","about-us","startup"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "MVP Studio — SaaS MVP Landing: Plan & Launch Fast",
    description: "Plan a lean SaaS MVP with a crisp, conversion-focused single-page layout featuring hero, about, how-to-buy, tokenomics, and a bold CTA to accelerate launch.",
    type: "website",
    url: "/",
    siteName: "MVP Studio",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-m-1759477517757-a0709b24.jpg", width: 1200, height: 630, alt: "MVP Studio Hero Image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Studio — SaaS MVP Landing: Plan & Launch Fast",
    description: "Plan a lean SaaS MVP with a crisp, conversion-focused single-page layout featuring hero, about, how-to-buy, tokenomics, and a bold CTA to accelerate launch.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-m-1759477517757-a0709b24.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
