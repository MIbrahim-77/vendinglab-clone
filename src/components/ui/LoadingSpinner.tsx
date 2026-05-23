interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

const SIZE = {
  sm: 'w-5 h-5 border-2',
  md: 'w-8 h-8 border-2',
  lg: 'w-12 h-12 border-[3px]',
};

export default function LoadingSpinner({
  size = 'md',
  className = '',
  label = 'Loading...',
}: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={`flex items-center justify-center ${className}`}
    >
      <div
        className={`${SIZE[size]} rounded-full border-white/20 border-t-yellow-400 animate-spin`}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

// ─── Full-page loading overlay ────────────────────────────────────────────────

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" />
        <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

// ─── Section skeleton ─────────────────────────────────────────────────────────

export function SectionSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="animate-pulse space-y-4 py-8" aria-hidden="true">
      <div className="h-6 bg-white/5 rounded-lg w-1/3" />
      <div className="h-10 bg-white/5 rounded-lg w-2/3" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="h-48 bg-white/5 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
