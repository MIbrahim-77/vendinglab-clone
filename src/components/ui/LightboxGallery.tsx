'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LightboxGalleryProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

// Internal slide shape used by LightboxViewer (EventsSection)
export interface LightboxSlide {
  src: string;
  alt?: string;
}

// ─── Main controlled component (required props interface) ─────────────────────

export default function LightboxGallery({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: LightboxGalleryProps) {
  const slides = images.map((src) => ({ src }));

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      index={initialIndex}
      slides={slides}
      plugins={[Counter]}
      counter={{ separator: ' / ' }}
      animation={{ fade: 250, swipe: 300 }}
      carousel={{ finite: false, preload: 2 }}
      controller={{
        closeOnBackdropClick: true,
        closeOnPullDown: true,
      }}
      styles={{
        container: { backgroundColor: 'rgba(0, 0, 0, 0.92)' },
      }}
    />
  );
}

// ─── Headless viewer — used by EventsSection (no thumbnail grid) ──────────────

interface LightboxViewerProps {
  images: LightboxSlide[];
  open: boolean;
  startIndex?: number;
  onClose: () => void;
}

export function LightboxViewer({
  images,
  open,
  startIndex = 0,
  onClose,
}: LightboxViewerProps) {
  const slides = images.map(({ src }) => ({ src }));

  return (
    <Lightbox
      open={open}
      close={onClose}
      index={startIndex}
      slides={slides}
      plugins={[Counter]}
      counter={{ separator: ' / ' }}
      animation={{ fade: 250, swipe: 300 }}
      carousel={{ finite: false, preload: 2 }}
      controller={{
        closeOnBackdropClick: true,
        closeOnPullDown: true,
      }}
      styles={{
        container: { backgroundColor: 'rgba(0, 0, 0, 0.92)' },
      }}
    />
  );
}

// ─── Standalone thumbnail grid + lightbox ─────────────────────────────────────

interface StandaloneGalleryProps {
  images: LightboxSlide[];
}

export function StandaloneGallery({ images }: StandaloneGalleryProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-900 hover:opacity-90 transition-opacity"
          >
            <Image
              src={img.src}
              alt={img.alt ?? ''}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map(({ src }) => ({ src }))}
        plugins={[Counter]}
        counter={{ separator: ' / ' }}
        animation={{ fade: 250, swipe: 300 }}
        carousel={{ finite: false, preload: 2 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.92)' },
        }}
      />
    </>
  );
}
