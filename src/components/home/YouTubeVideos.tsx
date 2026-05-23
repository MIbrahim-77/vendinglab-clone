'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import VideoPopup from '@/components/ui/VideoPopup';

interface Video {
  id: number;
  thumbnail: string;
  videoUrl: string;
}

const VIDEOS: Video[] = [
  {
    id: 1,
    thumbnail: 'https://picsum.photos/640/360?random=9',
    videoUrl: 'https://www.youtube.com/watch?v=9Auq9mYxFEE',
  },
  {
    id: 2,
    thumbnail: 'https://picsum.photos/640/360?random=10',
    videoUrl: 'https://www.youtube.com/watch?v=9Auq9mYxFEE',
  },
  {
    id: 3,
    thumbnail: 'https://picsum.photos/640/360?random=11',
    videoUrl: 'https://www.youtube.com/watch?v=9Auq9mYxFEE',
  },
];

const sectionVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function PlayButton() {
  return (
    <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-black ml-1" aria-hidden="true">
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function VideoCard({ video, onPlay }: { video: Video; onPlay: () => void }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer bg-[#111]"
      onClick={onPlay}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={video.thumbnail}
        alt="Video thumbnail"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        onError={(e) => { e.currentTarget.src = 'https://picsum.photos/600/400?random=99'; }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <PlayButton />
      </div>
    </motion.div>
  );
}

export default function YouTubeVideos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14"
        >
          <motion.div variants={headerVariants} className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">Videos</span>
          </motion.div>
          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight"
          >
            Our Recent YouTube Videos
          </motion.h2>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {VIDEOS.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={() => setSelectedVideo(video.videoUrl)}
            />
          ))}
        </motion.div>
      </div>

      <VideoPopup
        videoUrl={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
