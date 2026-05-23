import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const locales = ['en', 'ar', 'fr'];

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vendinglab.tech';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// ─── Base metadata (inherited by all child pages via title template) ───────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'VLT Robotics - Robotic Cafe Manufacturer Dubai',
    template: '%s | VLT Robotics - Robotic Cafe Manufacturer',
  },
  description:
    'VLT Robotics is one of the oldest robotic cafe manufacturers in the world. Manufacturing CafeXbot since 2015 in Dubai, UAE. Available in 10+ countries.',
  keywords: [
    'robotic cafe',
    'coffee robot',
    'cafe automation',
    'CafeXbot',
    'VLT Robotics',
    'robotic barista',
    'Dubai',
    'UAE',
    'F&B robotics',
    'robot rental Dubai',
    'ice cream robot',
    'autonomous cafe',
  ],
  authors: [{ name: 'VLT Robotic Manufacturing LLC' }],
  creator: 'VLT Robotic Manufacturing LLC',
  publisher: 'VLT Robotic Manufacturing LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'VLT Robotics',
    title: 'VLT Robotics - Robotic Cafe Manufacturer Dubai',
    description:
      'Manufacturing CafeXbot since 2015 in Dubai, UAE. Robotic cafe solutions for businesses worldwide.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'VLT Robotics CafeXbot Robotic Cafe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vltrobotics',
    creator: '@vltrobotics',
    title: 'VLT Robotics - Robotic Cafe Manufacturer Dubai',
    description:
      'Manufacturing CafeXbot since 2015 in Dubai, UAE. Robotic cafe solutions for businesses worldwide.',
    images: [OG_IMAGE],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // google: 'your-google-site-verification-token',
  },
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  const canonicalBase = `${SITE_URL}/${locale}`;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="canonical" href={canonicalBase} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="ar" href={`${SITE_URL}/ar`} />
        <link rel="alternate" hrefLang="fr" href={`${SITE_URL}/fr`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en`} />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
