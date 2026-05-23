import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import getClient from '@/lib/apollo-client';
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_SLUG,
  type AllProductsData,
  type ProductBySlugData,
  type ProductDetail,
} from '@/lib/queries/products';
import CoffeeRobotCTASection from '@/components/products/CoffeeRobotCTASection';
import CoffeeRobotFeaturesSection from '@/components/products/CoffeeRobotFeaturesSection';
import CoffeeRobotVarietySection from '@/components/products/CoffeeRobotVarietySection';
import CoffeeRobotForYouSection from '@/components/products/CoffeeRobotForYouSection';
import CoffeeProfitSection from '@/components/products/CoffeeProfitSection';
import CoffeeProfitCalculator from '@/components/products/CoffeeProfitCalculator';
import CoffeeRevenueBoostSection from '@/components/products/CoffeeRevenueBoostSection';
import LocationsCarouselSection from '@/components/products/LocationsCarouselSection';
import HowCafeXbotMakesCoffeeSection from '@/components/products/HowCafeXbotMakesCoffeeSection';
import BestBaristaRobotSection from '@/components/products/BestBaristaRobotSection';
import GlobalCommunitySection from '@/components/products/GlobalCommunitySection';
import TelegramBannerSection from '@/components/products/TelegramBannerSection';
import CustomizeCafeXbotSection from '@/components/products/CustomizeCafeXbotSection';
import ContactBaristaRobotSection from '@/components/products/ContactBaristaRobotSection';
import FaqAndCharacteristicsSection from '@/components/products/FaqAndCharacteristicsSection';
import IceCreamRobotHeroSection from '@/components/products/IceCreamRobotHeroSection';
import IceCreamProductVarietySection from '@/components/products/IceCreamProductVarietySection';
import IceCreamToppingsSection from '@/components/products/IceCreamToppingsSection';
import IceCreamBusinessForYouSection from '@/components/products/IceCreamBusinessForYouSection';
import IceCreamROISection from '@/components/products/IceCreamROISection';
import IceCreamFeaturesSection from '@/components/products/IceCreamFeaturesSection';
import IceCreamProfitCalculator from '@/components/products/IceCreamProfitCalculator';
import IceCreamCTABox from '@/components/products/IceCreamCTABox';
import IceCreamLocationsSection from '@/components/products/IceCreamLocationsSection';
import IceCreamHowItWorksSection from '@/components/products/IceCreamHowItWorksSection';
import IceCreamBestKioskSection from '@/components/products/IceCreamBestKioskSection';
import IceCreamGlobalCommunitySection from '@/components/products/IceCreamGlobalCommunitySection';
import IceCreamTelegramBannerSection from '@/components/products/IceCreamTelegramBannerSection';
import IceCreamCustomizeSection from '@/components/products/IceCreamCustomizeSection';
import IceCreamContactSection from '@/components/products/IceCreamContactSection';
import IceCreamFaqSection from '@/components/products/IceCreamFaqSection';
import RoboticCafeCTASection from '@/components/products/RoboticCafeCTASection';
import RoboticCafeVarietySection from '@/components/products/RoboticCafeVarietySection';
import RoboticCafeYourWaySection from '@/components/products/RoboticCafeYourWaySection';
import RoboticCafeWhySection from '@/components/products/RoboticCafeWhySection';
import RoboticCafeProfitSection from '@/components/products/RoboticCafeProfitSection';
import RoboticCafeLocationsSlider from '@/components/products/RoboticCafeLocationsSlider';
import RoboticCafePricingSection from '@/components/products/RoboticCafePricingSection';
import RoboticCafeProfitCalculator from '@/components/products/RoboticCafeProfitCalculator';
import RoboticCafeLocationsSection from '@/components/products/RoboticCafeLocationsSection';
import RoboticCafeDistributorsSection from '@/components/products/RoboticCafeDistributorsSection';
import RoboticCafeBestSection from '@/components/products/RoboticCafeBestSection';
import RoboticCafeGlobalSection from '@/components/products/RoboticCafeGlobalSection';
import RoboticCafeTelegramSection from '@/components/products/RoboticCafeTelegramSection';
import RoboticCafeHowItWorksSection from '@/components/products/RoboticCafeHowItWorksSection';
import RoboticCafeDownloadCard from '@/components/products/RoboticCafeDownloadCard';
import RoboticCafeContactSection from '@/components/products/RoboticCafeContactSection';
import RoboticCafeFaqSection from '@/components/products/RoboticCafeFaqSection';

// ─── Static fallback catalogue ────────────────────────────────────────────────

interface FallbackProduct {
  title: string;
  slug: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  keyFeatures: string[];
  specs: Record<string, string>;
  tagline: string;
}

const FALLBACK_CATALOGUE: FallbackProduct[] = [
  {
    title: 'CafeXbot Coffee Barista Robot',
    slug: 'coffee-robot',
    imageUrl:
      'https://vendinglab.tech/wp-content/uploads/2023/10/Untitled-design-32-e1697442556922.png',
    excerpt: 'Fully automated espresso-based coffee robot serving barista-quality drinks 24/7.',
    tagline: 'Barista-quality coffee. Zero staff required.',
    content:
      'The CafeXbot Coffee Barista Robot is a fully autonomous espresso machine capable of preparing over 60 drink varieties. Designed for high-traffic locations such as airports, malls, and corporate offices, it operates 24/7 without any human intervention.',
    keyFeatures: [
      'Prepares 60+ coffee and beverage varieties',
      'Fully autonomous — no barista required',
      'Touchscreen ordering interface',
      'Cashless and cash payment support',
      'Remote monitoring via mobile app',
      'Self-cleaning cycle after each use',
    ],
    specs: {
      Capacity: '200 cups/day',
      Dimensions: '80 x 80 x 180 cm',
      Weight: '120 kg',
      'Power Consumption': '2.2 kW',
      'Operating Temperature': '5°C – 40°C',
    },
  },
  {
    title: 'CafeXbot Ice Cream Robot',
    slug: 'ice-cream-robot',
    imageUrl:
      'https://vendinglab.tech/wp-content/uploads/2023/11/mocca-bot-xbot-tomorrow-conference.webp',
    excerpt: 'Robotic soft-serve and gelato station with customisable flavours and toppings.',
    tagline: 'Delight customers with automated frozen treats.',
    content:
      'The CafeXbot Ice Cream Robot delivers soft-serve, gelato, and frozen yoghurt with customisable toppings — all without a single staff member. Perfect for malls, theme parks, and entertainment venues.',
    keyFeatures: [
      'Soft-serve, gelato, and frozen yoghurt modes',
      'Up to 6 customisable toppings',
      'AI-powered portion control',
      'Hygienic sealed dispensing system',
      'Real-time inventory tracking',
      'Multilingual touchscreen interface',
    ],
    specs: {
      Capacity: '300 servings/day',
      Dimensions: '90 x 90 x 190 cm',
      Weight: '140 kg',
      'Power Consumption': '3.0 kW',
      'Operating Temperature': '10°C – 35°C',
    },
  },
  {
    title: 'CafeXbot Robotic Cafe',
    slug: 'cafexbot',
    imageUrl: 'https://vendinglab.tech/wp-content/uploads/2023/10/xbotcafe-final.png',
    excerpt: 'Full-service robotic cafe concept — coffee, snacks, and more, fully unmanned.',
    tagline: 'A complete cafe experience. Fully automated.',
    content:
      'CafeXbot is a complete robotic cafe solution combining coffee, cold beverages, snacks, and desserts in a single unmanned kiosk. Launched in 2023, it has been deployed across Dubai, Singapore, and 10+ countries worldwide.',
    keyFeatures: [
      'Full cafe menu: coffee, cold drinks, snacks',
      'Unmanned 24/7 operation',
      'Modular design — fits any space',
      'Cloud-based management dashboard',
      'Integrated loyalty and rewards system',
      'Multi-currency and multi-language support',
    ],
    specs: {
      Capacity: '500 transactions/day',
      Dimensions: '200 x 100 x 220 cm',
      Weight: '350 kg',
      'Power Consumption': '5.5 kW',
      'Operating Temperature': '5°C – 45°C',
    },
  },
];

function getFallback(slug: string): FallbackProduct | null {
  return FALLBACK_CATALOGUE.find((p) => p.slug === slug) ?? null;
}

// ─── generateStaticParams ─────────────────────────────────────────────────────

export async function generateStaticParams() {
  const locales = ['en', 'ar', 'fr'];
  let slugs: string[] = FALLBACK_CATALOGUE.map((p) => p.slug);

  try {
    const { data } = await getClient().query<AllProductsData>({
      query: GET_ALL_PRODUCTS,
    });
    const nodes = data?.pages?.nodes;
    if (nodes?.length) slugs = nodes.map((n) => n.slug);
  } catch {
    // GraphQL unreachable — use fallback slugs
  }

  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

// ─── generateMetadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  let title = '';
  let description = '';
  let imageUrl = '';

  try {
    const { data } = await getClient().query<ProductBySlugData>({
      query: GET_PRODUCT_BY_SLUG,
      variables: { slug },
    });
    const product = data?.page;
    if (product) {
      title = product.seo?.title || product.title;
      description = product.seo?.metaDesc || product.excerpt?.replace(/<[^>]+>/g, '') || '';
      imageUrl =
        product.seo?.opengraphImage?.sourceUrl ||
        product.featuredImage?.node?.sourceUrl ||
        '';
    }
  } catch {
    const fallback = getFallback(slug);
    if (fallback) {
      title = fallback.title;
      description = fallback.excerpt;
      imageUrl = fallback.imageUrl;
    }
  }

  return {
    title: `${title} | VLT Robotics`,
    description,
    openGraph: {
      title,
      description,
      images: imageUrl ? [{ url: imageUrl }] : [],
      locale,
      type: 'website',
    },
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function RelatedCard({
  product,
  locale,
}: {
  product: FallbackProduct;
  locale: string;
}) {
  return (
    <Link
      href={`/${locale}/products/${product.slug}`}
      className="group relative block h-56 rounded-2xl overflow-hidden"
    >
      <Image
        src={product.imageUrl}
        alt={product.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-white font-semibold text-sm leading-snug">{product.title}</p>
        <p className="text-yellow-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          View product
        </p>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'products' });

  // ── Fetch product ──────────────────────────────────────────────────────────
  let product: ProductDetail | null = null;

  try {
    const { data } = await getClient().query<ProductBySlugData>({
      query: GET_PRODUCT_BY_SLUG,
      variables: { slug },
    });
    product = data?.page ?? null;
  } catch {
    // GraphQL unreachable — fall through to fallback below
  }

  // ── Resolve display data (GraphQL or fallback) ─────────────────────────────
  const fallback = getFallback(slug);

  if (!product && !fallback) notFound();

  const title = product?.title ?? fallback!.title;
  const imageUrl =
    product?.featuredImage?.node?.sourceUrl ?? fallback!.imageUrl;
  const imageAlt =
    product?.featuredImage?.node?.altText ?? fallback!.title;
  const tagline = product?.acfProduct?.tagline ?? fallback!.tagline;
  const content = product?.content ?? `<p>${fallback!.content}</p>`;
  const excerpt =
    product?.excerpt?.replace(/<[^>]+>/g, '') ?? fallback!.excerpt;

  // Key features: ACF field (newline-separated) or fallback array
  const keyFeatures: string[] =
    product?.acfProduct?.keyFeatures
      ? product.acfProduct.keyFeatures
          .split('\n')
          .map((f) => f.trim())
          .filter(Boolean)
      : (fallback?.keyFeatures ?? []);

  // Specs: ACF fields or fallback record
  const specs: Record<string, string | null> =
    product?.acfProduct
      ? {
          Capacity: product.acfProduct.capacity,
          Dimensions: product.acfProduct.dimensions,
          Weight: product.acfProduct.weight,
          'Power Consumption': product.acfProduct.powerConsumption,
          'Operating Temperature': product.acfProduct.operatingTemperature,
        }
      : (fallback?.specs ?? {});

  const hasSpecs = Object.values(specs).some(Boolean);

  // Related products — the other 2 from the fallback catalogue
  const related = FALLBACK_CATALOGUE.filter((p) => p.slug !== slug);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4" aria-label="Breadcrumb">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${locale}/products`} className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-300">{title}</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            {title}
          </h1>
          {tagline && (
            <p className="mt-3 text-lg text-yellow-400 font-medium">{tagline}</p>
          )}
          {excerpt && (
            <p className="mt-3 text-gray-300 max-w-xl leading-relaxed">{excerpt}</p>
          )}
        </div>
      </section>

      {/* ── Robotic Cafe CTA Section ── */}
      {slug === 'cafexbot' && <RoboticCafeCTASection />}
      {slug === 'cafexbot' && <RoboticCafeVarietySection />}
      {slug === 'cafexbot' && <RoboticCafeYourWaySection />}
      {slug === 'cafexbot' && <RoboticCafeWhySection />}
      {slug === 'cafexbot' && <RoboticCafeProfitSection />}
      {slug === 'cafexbot' && <RoboticCafeLocationsSlider />}
      {slug === 'cafexbot' && <RoboticCafePricingSection />}
      {slug === 'cafexbot' && <RoboticCafeProfitCalculator />}
      {slug === 'cafexbot' && <RoboticCafeLocationsSection />}
      {slug === 'cafexbot' && <RoboticCafeDistributorsSection />}
      {slug === 'cafexbot' && <RoboticCafeBestSection />}
      {slug === 'cafexbot' && <RoboticCafeContactSection />}
      {slug === 'cafexbot' && <RoboticCafeGlobalSection />}
      {slug === 'cafexbot' && <RoboticCafeTelegramSection />}
      {slug === 'cafexbot' && <RoboticCafeHowItWorksSection />}
      {slug === 'cafexbot' && <RoboticCafeDownloadCard />}
      {slug === 'cafexbot' && <RoboticCafeFaqSection />}

      {/* ── Ice Cream Robot Hero Section ── */}
      {slug === 'ice-cream-robot' && <IceCreamRobotHeroSection />}
      {slug === 'ice-cream-robot' && <IceCreamProductVarietySection />}
      {slug === 'ice-cream-robot' && <IceCreamToppingsSection />}
      {slug === 'ice-cream-robot' && <IceCreamBusinessForYouSection />}
      {slug === 'ice-cream-robot' && <IceCreamROISection />}
      {slug === 'ice-cream-robot' && <IceCreamFeaturesSection />}
      {slug === 'ice-cream-robot' && <IceCreamProfitCalculator />}
      {slug === 'ice-cream-robot' && <IceCreamCTABox />}
      {slug === 'ice-cream-robot' && <IceCreamLocationsSection />}
      {slug === 'ice-cream-robot' && <IceCreamHowItWorksSection />}
      {slug === 'ice-cream-robot' && <IceCreamBestKioskSection />}
      {slug === 'ice-cream-robot' && <IceCreamGlobalCommunitySection />}
      {slug === 'ice-cream-robot' && <IceCreamTelegramBannerSection />}
      {slug === 'ice-cream-robot' && <IceCreamCustomizeSection />}
      {slug === 'ice-cream-robot' && <IceCreamContactSection />}
      {slug === 'ice-cream-robot' && <IceCreamFaqSection />}

      {/* ── Coffee Robot CTA Section ── */}
      {slug === 'coffee-robot' && <CoffeeRobotCTASection />}

      {/* ── Coffee Robot Features Section ── */}
      {slug === 'coffee-robot' && <CoffeeRobotFeaturesSection />}

      {/* ── Coffee Robot Variety Section ── */}
      {slug === 'coffee-robot' && <CoffeeRobotVarietySection />}

      {/* ── Coffee Robot For You Section ── */}
      {slug === 'coffee-robot' && <CoffeeRobotForYouSection />}
      {slug === 'coffee-robot' && <CoffeeProfitSection />}
      {slug === 'coffee-robot' && <CoffeeProfitCalculator />}
      {slug === 'coffee-robot' && <CoffeeRevenueBoostSection />}
      {slug === 'coffee-robot' && <LocationsCarouselSection />}
      {slug === 'coffee-robot' && <HowCafeXbotMakesCoffeeSection />}
      {slug === 'coffee-robot' && <BestBaristaRobotSection />}
      {slug === 'coffee-robot' && <GlobalCommunitySection />}
      {slug === 'coffee-robot' && <TelegramBannerSection />}
      {slug === 'coffee-robot' && <CustomizeCafeXbotSection />}
      {slug === 'coffee-robot' && <ContactBaristaRobotSection />}
      {slug === 'coffee-robot' && <FaqAndCharacteristicsSection />}

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left: description + features */}
        <div className="lg:col-span-2 space-y-12">

          {/* Rich text content */}
          {content && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-5">About this product</h2>
              <div
                className="prose prose-invert prose-yellow max-w-none text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </section>
          )}

          {/* Key features */}
          {keyFeatures.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3">
                    <CheckIcon />
                    <span className="text-sm text-gray-200 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right: specs sidebar */}
        {hasSpecs && (
          <aside>
            <div className="sticky top-24 bg-[#111] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-5">Specifications</h3>
              <dl className="space-y-4">
                {Object.entries(specs).map(([key, value]) =>
                  value ? (
                    <div key={key} className="flex flex-col gap-0.5 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {key}
                      </dt>
                      <dd className="text-sm text-white font-medium">{value}</dd>
                    </div>
                  ) : null
                )}
              </dl>
            </div>
          </aside>
        )}
      </div>

      {/* ── CTA banner ── */}
      <section className="bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Interested in this product?
            </h2>
            <p className="mt-2 text-gray-400 text-sm max-w-md">
              Rent a robot for your event or location, or enquire about investment and franchise opportunities.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href={`/${locale}/robot-rental`}
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
            >
              Get a Quote
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/business`}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
            >
              Business Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related products ── */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Related Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p) => (
              <RelatedCard key={p.slug} product={p} locale={locale} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
