'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

// ─── Instagram icon ───────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0z" />
      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

// ─── Language switcher row ────────────────────────────────────────────────────

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ar', label: 'العربية' },
];

function FooterLangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (code: string) => {
    const segments = pathname.split('/');
    segments[1] = code;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center justify-center gap-1 flex-wrap">
      {LANGUAGES.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => switchLocale(lang.code)}
            className={`text-sm transition-colors px-1 ${
              locale === lang.code
                ? 'text-white font-medium'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {lang.label}
          </button>
          {i < LANGUAGES.length - 1 && (
            <span className="text-gray-700 select-none">|</span>
          )}
        </span>
      ))}
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const t = useTranslations('footer');
  const n = useTranslations('nav');
  const locale = useLocale();

  const quickLinks = [
    { label: n('models'), href: '/products' },
    { label: n('business'), href: '/business' },
    { label: n('rental'), href: '/robot-rental' },
    { label: n('about'), href: '/about' },
    { label: n('articles'), href: '/articles' },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/5">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-2">
          <Link href={`/${locale}`} className="inline-block mb-4">
            <span className="text-2xl font-bold">
              <span className="text-yellow-400">VLT</span> Robotics
            </span>
          </Link>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">
            VLT Robotic Manufacturing LLC
          </p>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Quick links column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
            {t('quickLinks')}
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${locale}${link.href}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + social column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
            {t('contact')}
          </h4>
          <div className="flex items-start gap-2 text-sm text-gray-400 mb-6">
            {/* Location pin icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-400"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.218-4.402 3.218-7.327a7.5 7.5 0 10-15 0c0 2.925 1.274 5.248 3.218 7.327a19.579 19.579 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span>{t('location')}</span>
          </div>

          <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
            {t('followUs')}
          </h4>
          <a
            href="https://www.instagram.com/vlt.robotics/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
            aria-label="VLT Robotics on Instagram"
          >
            <span className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors text-pink-400">
              <InstagramIcon />
            </span>
            <span>@vlt.robotics</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600 text-center sm:text-left">
            {t('copyright')}
          </p>
          <FooterLangSwitcher />
        </div>
      </div>

    </footer>
  );
}
