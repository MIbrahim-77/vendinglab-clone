'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── YouTube ID extractor ─────────────────────────────────────────────────────

function extractYouTubeId(url: string): string | null {
  // Handles:
  //   https://www.youtube.com/watch?v=VIDEO_ID
  //   https://www.youtube.com/watch?v=VIDEO_ID&t=30s
  //   https://youtu.be/VIDEO_ID
  //   https://youtu.be/VIDEO_ID?t=30
  //   https://www.youtube.com/embed/VIDEO_ID
  //   https://www.youtube-nocookie.com/embed/VIDEO_ID
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /\/embed\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface VideoPopupProps {
  videoUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
}

// ─── Default export — required props interface ────────────────────────────────

export default function VideoPopup({ videoUrl, isOpen, onClose }: VideoPopupProps) {
  const videoId = videoUrl ? extractYouTubeId(videoUrl) : null;

  // Escape key handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll while modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          // Backdrop — click outside to close
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          {/* Video container — stop propagation so clicking video doesn't close */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-[80vw] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                className="w-full h-full rounded-xl"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
              />
            ) : (
              // Graceful fallback when URL is null or unrecognised
              <div className="w-full h-full rounded-xl bg-[#111] border border-white/10 flex flex-col items-center justify-center gap-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 opacity-40">
                  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.57 16.476c-.223.082-.448.161-.674.238L7.319 4.137A6.75 6.75 0 0119.5 9v.75a4.5 4.5 0 01-1.073 2.958l.904.904A6 6 0 0021 9.75V9a8.25 8.25 0 00-13.333-6.5l1.06 1.06A6.75 6.75 0 0120.57 16.476z" />
                  <path d="M3.75 9v.75a6 6 0 006.99 5.925l-1.065-1.065A4.5 4.5 0 015.25 9.75V9a4.5 4.5 0 014.5-4.5c.08 0 .16.002.239.007L8.928 3.446A6.75 6.75 0 003.75 9z" />
                </svg>
                <p className="text-sm">Video unavailable</p>
              </div>
            )}
          </motion.div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close video"
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Named export — used by EventsSection (videoUrl is always string there) ───

interface VideoModalProps {
  videoUrl: string;
  open: boolean;
  onClose: () => void;
}

export function VideoModal({ videoUrl, open, onClose }: VideoModalProps) {
  return <VideoPopup videoUrl={videoUrl} isOpen={open} onClose={onClose} />;
}
