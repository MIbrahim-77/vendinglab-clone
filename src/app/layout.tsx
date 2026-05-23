import type { ReactNode } from 'react';

// Root layout must always render <html> and <body>.
// The [locale] layout renders its own <html>/<body> for localised routes,
// but Next.js requires this root layout to also have them for any route
// that falls outside the [locale] segment (e.g. unknown nested paths).
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
