import Link from 'next/link';

// Note: This file is at [locale]/not-found.tsx so it has access to the locale
// layout (Navbar + Footer). The locale is not available as a param here, so
// we link to /en as the safe default.

export default function NotFound() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">

        {/* Large 404 */}
        <p className="text-[120px] sm:text-[160px] font-bold leading-none text-white/5 select-none" aria-hidden="true">
          404
        </p>

        <div className="-mt-8 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-yellow-400" />
            <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">
              Page not found
            </span>
            <span className="h-px w-8 bg-yellow-400" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            This page does not exist
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            The page you are looking for may have been moved, deleted, or never
            existed. Let us take you back to safety.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/en"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Homepage
            </Link>

            <Link
              href="/en/products"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
