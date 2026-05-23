'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

interface Language {
  code: string;
  label: string;
  flag: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const LANGUAGES: Language[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', flag: '🇦🇪' },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.14 } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.28 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

// ─── Dropdown (desktop) ───────────────────────────────────────────────────────

function DesktopDropdown({
  label,
  items,
  locale,
}: {
  label: string;
  items: DropdownItem[];
  locale: string;
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-white transition-colors py-2"
        aria-expanded={open}
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 mt-1 w-56 bg-[#111] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50"
          >
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={`/${locale}${item.href}`}
                  className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Language Switcher (desktop) ──────────────────────────────────────────────

function DesktopLangSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  const switchLocale = (code: string) => {
    const segments = pathname.split('/');
    segments[1] = code;
    router.push(segments.join('/'));
    setOpen(false);
  };

  const handleEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-white transition-colors py-2"
        aria-expanded={open}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full right-0 mt-1 w-44 bg-[#111] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50"
          >
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => switchLocale(lang.code)}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                    locale === lang.code
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Mobile accordion item ────────────────────────────────────────────────────

function MobileNavItem({
  item,
  locale,
  onClose,
}: {
  item: NavItem;
  locale: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (!item.dropdown) {
    const href = `/${locale}${item.href}`;
    const active = pathname === href;
    return (
      <Link
        href={href}
        onClick={onClose}
        className={`block px-4 py-3 text-sm font-medium border-b border-white/5 transition-colors ${
          active ? 'text-yellow-400' : 'text-gray-200 hover:text-white'
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-200 hover:text-white transition-colors"
      >
        {item.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.2 } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.15 } }}
            className="overflow-hidden bg-white/5"
          >
            {item.dropdown.map((sub) => (
              <li key={sub.href}>
                <Link
                  href={`/${locale}${sub.href}`}
                  onClick={onClose}
                  className="block px-6 py-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const NAV_ITEMS: NavItem[] = [
    {
      label: t('models'),
      dropdown: [
        { label: t('models_coffee'), href: '/products/coffee-robot' },
        { label: t('models_icecream'), href: '/products/ice-cream-robot' },
        { label: t('models_cafexbot'), href: '/products/cafexbot' },
      ],
    },
    {
      label: t('business'),
      dropdown: [
        { label: t('business_investment'), href: '/business/investment' },
        { label: t('business_passive'), href: '/business/passive-income' },
      ],
    },
    {
      label: t('rental'),
      href: '/robot-rental',
    },
    {
      label: t('about'),
      dropdown: [
        { label: t('about_locations'), href: '/about/locations' },
        { label: t('about_us'), href: '/about' },
      ],
    },
    {
      label: t('articles'),
      href: '/articles',
    },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex-shrink-0 text-white font-bold text-lg lg:text-xl tracking-wide"
          >
            <span className="text-yellow-400">VLT</span> Robotics
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <DesktopDropdown
                  key={item.label}
                  label={item.label}
                  items={item.dropdown}
                  locale={locale}
                />
              ) : (
                <Link
                  key={item.label}
                  href={`/${locale}${item.href}`}
                  className={`text-sm transition-colors ${
                    pathname === `/${locale}${item.href}`
                      ? 'text-yellow-400'
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-4">
            <DesktopLangSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.div
              animate={mobileOpen ? 'open' : 'closed'}
              className="w-5 h-4 flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-current origin-center"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.15 }}
                className="block h-0.5 w-full bg-current"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-current origin-center"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden bg-[#0d0d0d] border-t border-white/5"
          >
            <div className="max-w-7xl mx-auto">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  locale={locale}
                  onClose={() => setMobileOpen(false)}
                />
              ))}

              {/* Mobile language switcher */}
              <div className="px-4 py-3 flex items-center gap-3">
                {LANGUAGES.map((lang) => (
                  <MobileLangButton
                    key={lang.code}
                    lang={lang}
                    current={locale}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Mobile lang button ───────────────────────────────────────────────────────

function MobileLangButton({
  lang,
  current,
  onClose,
}: {
  lang: Language;
  current: string;
  onClose: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const segments = pathname.split('/');
    segments[1] = lang.code;
    router.push(segments.join('/'));
    onClose();
  };

  return (
    <button
      onClick={switchLocale}
      className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border transition-colors ${
        current === lang.code
          ? 'border-yellow-400 text-yellow-400'
          : 'border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
      }`}
    >
      <span>{lang.flag}</span>
      <span>{lang.label}</span>
    </button>
  );
}
