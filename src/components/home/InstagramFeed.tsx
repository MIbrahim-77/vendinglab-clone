'use client';

// TODO: Replace with live Instagram Basic Display API
// GET https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=TOKEN
// Cache with: fetch(url, { next: { revalidate: 3600 } })

import { motion, type Variants } from 'framer-motion';

interface InstagramPost {
  id: string;
  date: string;
  caption: string;
  imageUrl: string;
  postUrl: string;
  likes: number;
}

const POSTS: InstagramPost[] = [
  {
    id: '1',
    date: 'May 13',
    caption: 'Robotic barista cafe built on four pillars of safety. Contactless — complete safety at every level. No direct handling, automatic cleaning cycles, protected ingredients & pasteurisation, Grade A Gold Certificate.',
    imageUrl: 'https://picsum.photos/400/400?random=20',
    postUrl: 'https://www.instagram.com/reel/DYRFcTBMDw7/',
    likes: 14,
  },
  {
    id: '2',
    date: 'May 1',
    caption: 'Robotic cafe technology is redefining what efficient work looks like. Operates 24/7 without shifts, breaks, or downtime. Delivers consistent quality.',
    imageUrl: 'https://picsum.photos/400/400?random=21',
    postUrl: 'https://www.instagram.com/reel/DXywZxgjKJc/',
    likes: 8,
  },
  {
    id: '3',
    date: 'Apr 29',
    caption: 'Coffee Robot vs Traditional Cafe — where would you put 100K? CafeXbot runs 24/7. No shifts. No supervision. No variability.',
    imageUrl: 'https://picsum.photos/400/400?random=22',
    postUrl: 'https://www.instagram.com/reel/DXuo4dWkcIL/',
    likes: 6,
  },
  {
    id: '4',
    date: 'Apr 28',
    caption: 'Coffee robot that serves hot, cold, and iced — all from one kiosk. Powered by the Franke A600 FoamMaster for precision in every cup.',
    imageUrl: 'https://picsum.photos/400/400?random=23',
    postUrl: 'https://www.instagram.com/p/DXqeOC_jGdi/',
    likes: 7,
  },
  {
    id: '5',
    date: 'Apr 24',
    caption: 'Coffee Robot CafeXbot App — Full Control in Your Hands. Live system monitoring. Instant alerts to prevent downtime. Real-time ingredient tracking.',
    imageUrl: 'https://picsum.photos/400/400?random=24',
    postUrl: 'https://www.instagram.com/p/DXgIjVfET-j/',
    likes: 6,
  },
  {
    id: '6',
    date: 'Apr 21',
    caption: 'Coffee robot built for high-footfall destinations. Powered by Franke, PASMO, and UFactory. Trusted by Emirates, Dell, Etisalat, ADNOC, Reuters.',
    imageUrl: 'https://picsum.photos/400/400?random=25',
    postUrl: 'https://www.instagram.com/reel/DXYc-O1gUwU/',
    likes: 7,
  },
];

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const cellVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function formatLikes(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0z" />
      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function PostCard({ post }: { post: InstagramPost }) {
  const shortCaption = post.caption.length > 100 ? post.caption.slice(0, 97) + '...' : post.caption;
  return (
    <motion.a
      variants={cellVariants}
      href={post.postUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-square overflow-hidden rounded-xl bg-[#1a1a1a]"
      aria-label={`Instagram post from ${post.date}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.imageUrl}
        alt={shortCaption}
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        onError={(e) => { e.currentTarget.src = 'https://picsum.photos/600/400?random=99'; }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex flex-col justify-between p-3">
        <div className="flex justify-between items-start">
          <span className="text-white/70 text-xs">{post.date}</span>
          <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-red-400" aria-hidden="true">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            {formatLikes(post.likes)}
          </span>
        </div>
        <p className="text-white text-xs leading-relaxed opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out line-clamp-4">
          {shortCaption}
        </p>
      </div>
      <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
        <InstagramIcon className="w-4 h-4 text-white" />
      </div>
    </motion.a>
  );
}

export default function InstagramFeed() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10"
        >
          <div>
            <motion.div variants={headerVariants} className="flex items-center gap-3 mb-4">
              <InstagramIcon className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 text-sm font-semibold uppercase tracking-widest">Instagram</span>
            </motion.div>
            <motion.h2 variants={headerVariants} className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-lg">
              Follow Our Instagram For Recent News
            </motion.h2>
          </div>
          <motion.a
            variants={headerVariants}
            href="https://www.instagram.com/vlt.robotics/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 text-sm flex-shrink-0 self-start sm:self-auto"
          >
            <InstagramIcon className="w-4 h-4" />
            @vlt.robotics
          </motion.a>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.instagram.com/vlt.robotics/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/30 px-6 py-3 rounded-full transition-colors duration-200"
          >
            <InstagramIcon className="w-4 h-4" />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
