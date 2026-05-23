import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import getClient from '@/lib/apollo-client';
import {
  GET_PRODUCTS,
  GET_EVENTS,
  type ProductsData,
  type EventsData,
} from '@/lib/queries/home';
import HeroSection from '@/components/home/HeroSection';
import ProductsGrid, { type Product } from '@/components/home/ProductsGrid';
import ReliableTechnologies from '@/components/home/ReliableTechnologies';
import EventsSection, { type EventItem } from '@/components/home/EventsSection';
import ManufacturingVideo from '@/components/home/ManufacturingVideo';
import BusinessSection from '@/components/home/BusinessSection';
import YouTubeVideos from '@/components/home/YouTubeVideos';
import NewsArticles from '@/components/home/NewsArticles';
import InstagramFeed from '@/components/home/InstagramFeed';

// ─── SEO ──────────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  return {
    title: 'VLT Robotics - Robotic Cafe Manufacturer Dubai',
    description: t('subtitle'),
    keywords: [
      'robotic cafe',
      'coffee robot',
      'cafe automation',
      'CafeXbot',
      'VLT Robotics',
      'Dubai',
      'UAE',
      'F&B robotics',
    ],
    openGraph: {
      title: 'VLT Robotics - Robotic Cafe Manufacturer Dubai',
      description: t('subtitle'),
      url: 'https://vendinglab.tech',
      siteName: 'VLT Robotics',
      locale,
      type: 'website',
      images: [
        {
          url: 'https://vendinglab.tech/wp-content/uploads/2023/10/xbotcafe-final.png',
          width: 1952,
          height: 523,
          alt: 'CafeXbot by VLT Robotics',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'VLT Robotics - Robotic Cafe Manufacturer Dubai',
      description: t('subtitle'),
      images: ['https://vendinglab.tech/wp-content/uploads/2023/10/xbotcafe-final.png'],
    },
    alternates: {
      canonical: `https://vendinglab.tech/${locale}`,
      languages: {
        en: 'https://vendinglab.tech/en',
        ar: 'https://vendinglab.tech/ar',
        fr: 'https://vendinglab.tech/fr',
      },
    },
  };
}

// ─── Static fallback data ─────────────────────────────────────────────────────

const FALLBACK_PRODUCTS: Product[] = [
  {
    title: 'CafeXbot Coffee Barista Robot',
    slug: 'xbot-coffee-barista-robot',
    imageUrl: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356445/Xbot-Mocca-2_wndj9h.webp',
    imageAlt: 'CafeXbot Coffee Barista Robot',
  },
  {
    title: 'CafeXbot Ice Cream Robot',
    slug: 'xbot-ice-cream-robot',
    imageUrl: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356445/xbot-Carnival-bot_mczhni.webp',
    imageAlt: 'CafeXbot Ice Cream Robot',
  },
  {
    title: 'CafeXbot Robotic Cafe',
    slug: 'xbot-robotic-cafe',
    imageUrl: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356439/5-scaled_oh9h7j.webp',
    imageAlt: 'CafeXbot Robotic Cafe',
  },
];

const FALLBACK_EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'IDC CIO Summit 2026',
    date: '11-12 February 2026',
    description:
      'VLT Robotics showcased the CafeXbot at the IDC CIO Summit, serving live coffee to hundreds of tech leaders.',
    coverImage:
      'https://vendinglab.tech/wp-content/uploads/2023/11/mocca-bot-xbot-tomorrow-conference.webp',
    galleryImages: [
      'https://vendinglab.tech/wp-content/uploads/2023/11/mocca-bot-xbot-tomorrow-conference.webp',
      'https://vendinglab.tech/wp-content/uploads/2023/10/Untitled-design-32-e1697442556922.png',
      'https://vendinglab.tech/wp-content/uploads/2023/10/xbotcafe-final.png',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'GITEX Global 2024',
    date: '14-18 October 2024',
    description:
      "The world's largest tech show in Dubai - CafeXbot served thousands of visitors at the VLT Robotics stand.",
    coverImage:
      'https://vendinglab.tech/wp-content/uploads/2023/10/Untitled-design-32-e1697442556922.png',
    galleryImages: [
      'https://vendinglab.tech/wp-content/uploads/2023/10/Untitled-design-32-e1697442556922.png',
      'https://vendinglab.tech/wp-content/uploads/2023/11/mocca-bot-xbot-tomorrow-conference.webp',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Tomorrow.io Conference',
    date: '5 November 2023',
    description:
      'CafeXbot made its regional debut at the Tomorrow.io climate-tech conference in Dubai.',
    coverImage: 'https://vendinglab.tech/wp-content/uploads/2023/10/xbotcafe-final.png',
    galleryImages: [
      'https://vendinglab.tech/wp-content/uploads/2023/10/xbotcafe-final.png',
      'https://vendinglab.tech/wp-content/uploads/2023/10/Untitled-design-32-e1697442556922.png',
    ],
  },
  {
    id: '4',
    title: 'Dubai Food Festival 2024',
    date: '23 Feb - 10 Mar 2024',
    description:
      "VLT Robotics participated in Dubai's premier food festival, demonstrating automated barista capabilities.",
    coverImage:
      'https://vendinglab.tech/wp-content/uploads/2023/11/mocca-bot-xbot-tomorrow-conference.webp',
    galleryImages: [
      'https://vendinglab.tech/wp-content/uploads/2023/11/mocca-bot-xbot-tomorrow-conference.webp',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '5',
    title: 'World Future Energy Summit',
    date: '16-18 January 2024',
    description:
      'VLT Robotics demonstrated sustainable robotic cafe solutions at Abu Dhabi World Future Energy Summit.',
    coverImage:
      'https://vendinglab.tech/wp-content/uploads/2023/10/Untitled-design-32-e1697442556922.png',
    galleryImages: [
      'https://vendinglab.tech/wp-content/uploads/2023/10/Untitled-design-32-e1697442556922.png',
    ],
  },
];

// ─── Data fetching helpers ────────────────────────────────────────────────────

async function fetchProducts(): Promise<Product[]> {
  try {
    const { data } = await getClient().query<ProductsData>({ query: GET_PRODUCTS });
    const nodes = data?.pages?.nodes;
    if (!nodes?.length) return FALLBACK_PRODUCTS;

    return nodes.map((node) => ({
      title: node.title,
      slug: node.slug,
      imageUrl: node.featuredImage?.node?.sourceUrl ?? '',
      imageAlt: node.title,
    }));
  } catch {
    return FALLBACK_PRODUCTS;
  }
}

async function fetchEvents(): Promise<EventItem[]> {
  try {
    const { data } = await getClient().query<EventsData>({ query: GET_EVENTS });
    const nodes = data?.posts?.nodes;
    if (!nodes?.length) return FALLBACK_EVENTS;

    return nodes.map((node, i) => ({
      id: node.id ?? String(i),
      title: node.title,
      date: new Date(node.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      description: node.excerpt
        ? node.excerpt.replace(/<[^>]+>/g, '').trim()
        : '',
      coverImage: node.featuredImage?.node?.sourceUrl ?? FALLBACK_EVENTS[0].coverImage,
      galleryImages:
        node.acfEvents?.gallery?.map((img) => img.sourceUrl) ??
        (node.featuredImage?.node?.sourceUrl
          ? [node.featuredImage.node.sourceUrl]
          : []),
      videoUrl: node.acfEvents?.videoUrl ?? undefined,
    }));
  } catch {
    return FALLBACK_EVENTS;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  // Run both fetches in parallel — if either fails, fallback data is used
  const [products, events] = await Promise.all([fetchProducts(), fetchEvents()]);

  return (
    <>
      <HeroSection />
      <ProductsGrid products={products} />
      <ReliableTechnologies />
      <EventsSection events={events} />
      <ManufacturingVideo />
      <BusinessSection />
      <YouTubeVideos />
      <NewsArticles />
      <InstagramFeed />
    </>
  );
}
