# VLT Robotics — Website Clone

A production-grade clone of [vendinglab.tech](https://vendinglab.tech) — the website of VLT Robotic Manufacturing LLC, a robotic cafe manufacturer based in Dubai, UAE.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| i18n | next-intl (English, Arabic, French) |
| GraphQL | Apollo Client v4 → WordPress WPGraphQL |
| Lightbox | yet-another-react-lightbox |
| CMS (backend) | Payload CMS v2 + Express + MongoDB |
| Deployment | Vercel (frontend) |

---

## Project Structure

```
vendinglab/
├── src/
│   ├── app/
│   │   ├── [locale]/              # All pages (locale-prefixed routes)
│   │   │   ├── page.tsx           # Homepage
│   │   │   ├── layout.tsx         # Locale layout (Navbar, Footer, i18n)
│   │   │   ├── not-found.tsx      # 404 page
│   │   │   ├── about/             # About Us + Locations
│   │   │   ├── products/          # Products list + [slug] detail
│   │   │   ├── business/          # Business opportunities
│   │   │   ├── robot-rental/      # Rental page + inquiry form
│   │   │   ├── events/            # Events listing
│   │   │   └── articles/          # News articles
│   │   ├── api/
│   │   │   └── inquiry/route.ts   # POST handler for rental inquiries
│   │   ├── globals.css
│   │   └── layout.tsx             # Root layout (delegates to locale layout)
│   ├── components/
│   │   ├── home/                  # Homepage section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProductsGrid.tsx
│   │   │   ├── EventsSection.tsx
│   │   │   ├── BusinessSection.tsx
│   │   │   ├── NewsArticles.tsx
│   │   │   └── InstagramFeed.tsx
│   │   ├── layout/                # Navbar, Footer, LanguageSwitcher
│   │   └── ui/                    # LightboxGallery, VideoPopup, LoadingSpinner
│   ├── lib/
│   │   ├── apollo-client.ts       # Apollo Client singleton (server components)
│   │   └── queries/               # WPGraphQL query definitions + TypeScript types
│   ├── messages/                  # i18n translation files
│   │   ├── en.json
│   │   ├── ar.json
│   │   └── fr.json
│   ├── i18n.ts                    # next-intl request config
│   └── middleware.ts              # next-intl locale routing middleware
├── backend/                       # Payload CMS (separate Node.js project)
│   ├── src/
│   │   ├── collections/           # Events, Products, Locations, Inquiries, Media
│   │   ├── globals/               # Settings global
│   │   ├── payload.config.ts
│   │   └── server.ts              # Express + Payload server (port 3001)
│   ├── package.json
│   └── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── vercel.json
└── .env.local.example
```

---

## Getting Started

### 1. Clone and install

```bash
git clone <repo-url>
cd vendinglab
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
# Edit .env.local with your values
```

### 3. Run the frontend

```bash
npm run dev
# Opens at http://localhost:3000
```

The site works immediately with static fallback data — no backend required for development.

### 4. Run the Payload CMS backend (optional)

```bash
cd backend
npm install

# Make sure MongoDB is running locally, then:
npm run dev
# Admin panel at http://localhost:3001/admin
# REST API at  http://localhost:3001/api
```

---

## Supported Locales

| Code | Language | Direction |
|---|---|---|
| `en` | English | LTR |
| `ar` | Arabic | RTL |
| `fr` | French | LTR |

Routes are prefixed: `/en/products`, `/ar/products`, `/fr/products`

---

## GraphQL Data Source

The site fetches content from the live WordPress WPGraphQL endpoint at `https://vendinglab.tech/graphql`. If the endpoint is unreachable (e.g. during development or if blocked by Cloudflare), all pages fall back to static hardcoded data automatically — no errors are thrown.

To use your own WordPress instance, update `NEXT_PUBLIC_GRAPHQL_URL` in `.env.local`.

---

## Key Pages

| Route | Description |
|---|---|
| `/[locale]` | Homepage with all sections |
| `/[locale]/products` | Products listing |
| `/[locale]/products/[slug]` | Product detail (SSG, 3 slugs × 3 locales = 9 pages) |
| `/[locale]/robot-rental` | Rental page with inquiry form |
| `/[locale]/business` | Business opportunities |
| `/[locale]/about` | About VLT Robotics |
| `/[locale]/about/locations` | Existing deployment locations |
| `/[locale]/events` | Events listing |
| `/[locale]/articles` | News articles |
| `/api/inquiry` | POST endpoint for rental inquiries |

---

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Set the environment variables listed in `vercel.json` in your Vercel project settings.

### Manual

```bash
npm run build
npm start
```

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_GRAPHQL_URL` | No | WordPress WPGraphQL endpoint |
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | Public URL for canonical/OG tags |
| `NEXT_PUBLIC_INSTAGRAM_TOKEN` | No | Instagram API token for live feed |
| `PAYLOAD_API_URL` | No | Payload CMS backend URL |
| `PAYLOAD_API_SECRET` | No | Payload server-to-server secret |
| `MONGODB_URI` | Backend only | MongoDB connection string |
| `PAYLOAD_SECRET` | Backend only | Payload CMS secret key |

---

## License

Private project — VLT Robotic Manufacturing LLC
