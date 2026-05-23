'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LightboxViewer, type LightboxSlide } from '@/components/ui/LightboxGallery';
import { VideoModal } from '@/components/ui/VideoPopup';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  videoUrl?: string;
}

interface EventsSectionProps {
  events?: EventItem[];
}

interface ModalState {
  type: 'gallery' | 'video';
  eventId: string;
}

// ─── Cloudinary image helpers ─────────────────────────────────────────────────

const FALLBACK = 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356444/tomorrow-conference-768x512_iuswlu.webp';

// New images provided — distributed across events 8–38 in rotation
const IMG_A = 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356442/Dell-Technologies-Foum-2026-1_osnhwr.webp';
const IMG_B = 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356444/IMG_20230309_120404-768x768_c4cq6x.webp';
const IMG_C = 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356442/AW-Rostamani-Group-54th-Eid-Al-Etihad_kdvtzz.webp';

const COVER_MAP: Record<string, string> = {
  '1':  'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356444/IDC-CIO-Summit-2026-1_m3jkxo.webp',
  '2':  'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356442/Capacity-Middle-East-2026-3-1_jvpstt.webp',
  '3':  'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356442/Capacity-Middle-East-2026-3-1_jvpstt.webp',
  '4':  'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356442/Dell-Technologies-Foum-2026-1_osnhwr.webp',
  '5':  'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356442/AW-Rostamani-Group-54th-Eid-Al-Etihad_kdvtzz.webp',
  '6':  'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356441/ADIB-54th-Eid-Al-Etihad-4_hdbhbg.webp',
  '7':  'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356444/IMG_20230309_120404-768x768_c4cq6x.webp',
  // Remaining events cycle through the 5 new images
  '8':  IMG_A, '9':  IMG_B, '10': IMG_C, '11': IMG_A, '12': IMG_B,
  '13': IMG_C, '14': IMG_A, '15': IMG_B, '16': IMG_C, '17': IMG_A,
  '18': IMG_B, '19': IMG_C, '20': IMG_A, '21': IMG_B, '22': IMG_C,
  '23': IMG_A, '24': IMG_B, '25': IMG_C, '26': IMG_A, '27': IMG_B,
  '28': IMG_C, '29': IMG_A, '30': IMG_B, '31': IMG_C, '32': IMG_A,
  '33': IMG_B, '34': IMG_C, '35': IMG_A, '36': IMG_B, '37': IMG_C,
  '38': IMG_A,
};

const getCover = (id: string) => COVER_MAP[id] ?? FALLBACK;

// ─── Events data ──────────────────────────────────────────────────────────────

const ALL_EVENTS: EventItem[] = [
  { id: '1',  title: 'IDC CIO Summit - Middle East 2026',          date: '11 - 12 February 2026',    description: "The CafeXbot robot cafe once again stole the spotlight as the centerpiece of innovation at the region's premier gathering of technology decision-makers.", coverImage: getCover('1'),  galleryImages: [], videoUrl: '' },
  { id: '2',  title: 'AIBC Eurasia 2026',                          date: '10 - 11 February 2026',    description: 'The CafeXbot coffee and ice cream robot wowed visitors at this prestigious blockchain and crypto exhibition.',                                          coverImage: getCover('2'),  galleryImages: [], videoUrl: '' },
  { id: '3',  title: 'Capacity Middle East 2026',                  date: '10 - 12 February 2026',    description: 'The CafeXbot robotic kiosk added a cutting-edge innovation to the e& booth at this premier digital infrastructure event.',                            coverImage: getCover('3'),  galleryImages: [], videoUrl: '' },
  { id: '4',  title: 'Dell Technologies Forum 2026',               date: '22 January 2026',          description: 'The CafeXbot ice cream robot took center stage at the forum, highlighting cutting-edge innovations in AI technology.',                                  coverImage: getCover('4'),  galleryImages: [], videoUrl: '' },
  { id: '5',  title: 'AW Rostamani Group 54th Eid Al Etihad',      date: '27 November 2025',         description: 'The CafeXbot ice cream robot delighted everyone with delicious desserts, becoming the centerpiece of the UAE National Day celebrations.',               coverImage: getCover('5'),  galleryImages: [], videoUrl: '' },
  { id: '6',  title: 'ADIB 54th Eid Al Etihad',                    date: '26 November 2025',         description: 'The CafeXbot coffee robot entertained guests of all nationalities, serving a variety of beverages and desserts as they gathered to celebrate UAE National Day.', coverImage: getCover('6'), galleryImages: [], videoUrl: '' },
  { id: '7',  title: 'ADNOC Gas 54th Eid Al Etihad',               date: '25 November 2025',         description: "The CafeXbot robotic cafe delighted guests at the 54th Eid Al Etihad celebration held at ADNOC Gas's Al Maha camp.",                                  coverImage: getCover('7'),  galleryImages: [], videoUrl: '' },
  { id: '8',  title: 'Tawdheef x Zaheb 2025',                      date: '18 - 20 November 2025',    description: "CafeXbot robotic kiosk became e&'s robotic partner delighting Emirati job aspirants with its state-of-the-art innovation.",                           coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '9',  title: 'GenAI Roadshows Event - Emirates Airline',   date: '13 November 2025',         description: 'The CafeXbot robotic kiosk became a standout showcase, designed to enhance staff expertise in technology, data, and AI.',                              coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '10', title: 'Presidential Court Event 2026',              date: '11 November 2025',         description: 'The CafeXbot robot barista served as the robotic partner at this prestigious event in Abu Dhabi, showcasing innovation in hospitality.',               coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '11', title: 'ADIB Townhall 2025',                         date: '05 November 2025',         description: 'The CafeXbot robotic cafe captivated the audience at a corporate event designed to foster innovation and build a future-ready organization.',           coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '12', title: 'Flag Day - Dept of Finance, UAE',            date: '03 November 2025',         description: 'The CafeXbot coffee robot added a patriotic flair to a nation known for its love of innovation.',                                                      coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '13', title: 'Reuters Next Gulf 2025',                     date: '22 October 2025',          description: 'Captivating world leaders, innovators, and market movers, CafeXbot robotic kiosk made a lasting impression at a conference shaping the future.',       coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '14', title: 'Parliamentary Legislative Forum, FNC - UAE', date: '07 October 2025',          description: "The CafeXbot robotic kiosk served premium coffee and ice cream to parliamentary dignitaries, showcasing the UAE's commitment to future readiness.",    coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '15', title: 'Forex Expo 2025',                            date: '06 - 07 October 2025',     description: "CafeXbot robotic cafe kiosk proved to be a powerful lead-generation magnet at Valetax's booth at DWTC.",                                               coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '16', title: 'ADNOC Offshore AI & Technology Summit 2.0',  date: '29 - 30 September 2025',   description: "Adding robotic cafe innovation to ADNOC's prestigious summit at Abu Dhabi Energy Center.",                                                             coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '17', title: 'Ruya 2025',                                  date: '23 - 25 September 2025',   description: "Bringing a robotic flair to the e& by Etisalat booth at the Ru'ya Career Fair for Emirati nationals.",                                                coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '18', title: 'Dubai World Congress for Self Driving Transport', date: '24 - 25 September 2025', description: 'Showcasing two CafeXbot robotic kiosks at Dubai premier autonomous vehicles conference and exhibition.',                                            coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '19', title: 'GEMS School of Research And Innovation',     date: '23 May 2025',              description: 'Robotics partner of the GEMS Education Group at the launch of their new school at Jumeirah Mina Al Salam Hotel.',                                      coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '20', title: 'National Service Career Fair 2025',          date: '12 - 14 May 2025',         description: 'An integral part of e& by Etisalat innovation Zone at the National Service Career Fair 2025 held at Dubai Exhibition Center.',                         coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '21', title: 'iCapital Connect Dubai 2025',                date: '9 April 2025',             description: 'Robotics partner at iCapital Connect Dubai 2025 held in Atlantis The Palm.',                                                                           coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '22', title: 'GSMA WAS #21',                               date: '8 - 10 April 2025',        description: 'Robotics partner at GSMA WAS #21, an event hosted by e& at Mandarin Oriental Jumeira.',                                                               coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '23', title: 'Innovates 2025',                             date: '26 February 2025',         description: "Robotics partner at Innovates 2025 at the prestigious President's Court in Abu Dhabi.",                                                                coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '24', title: 'IDC Middle East CIO Summit 2025',            date: '19 - 20 February 2025',    description: 'Robotics partner for IDC at a summit architecting an AI-fueled business.',                                                                             coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '25', title: 'Abu Dhabi Mobility Innovation',              date: '18 - 19 February 2025',    description: 'Robotics partner at Abu Dhabi Mobility Innovation held at Integrated Transport Centre.',                                                               coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '26', title: 'Innovation Week AD Ports',                   date: '10 - 12 February 2025',    description: 'Robotics partner at a summit of Abu Dhabi Ports meant to discuss insights on the future of maritime and logistics.',                                   coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '27', title: 'AI Everything Global',                       date: '05 - 06 February 2025',    description: 'Robotics partner of Dubai Integrated Economic Zones at a summit for powering global collaborations in the new AI economy.',                             coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '28', title: 'Data Cloud Middle East 2025',                date: '04 - 06 February 2025',    description: 'Partnering with Etisalat (e&) at Grand Hyatt - Dubai.',                                                                                               coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '29', title: 'Dell Technologies Forum',                    date: '16 January 2025',          description: 'Robotics partner at a global tech & innovation summit held at Coca-Cola Arena - Dubai.',                                                               coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '30', title: 'Future Festival Dubai',                      date: '05-06 June 2024',          description: 'Robotics partner at an event showcasing how to leverage AI & future-facing trends to drive success in your industry.',                                 coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '31', title: 'Gulfood 2024',                               date: '20-23 February 2024',      description: 'You can find us at Dubai World Trade Centre held in the Gulfood event Exhibition Centre.',                                                             coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '32', title: 'Tawdheef x Zaheb',                          date: '13-15 November 2023',      description: 'You can find us at the Etisalat (E&) booth at the Tawdheef exhibition held in the Abu Dhabi National Exhibition Centre (ADNEC).',                     coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '33', title: 'GITEX, Dubai',                               date: '14-18 October 2023',       description: 'Largest Technology Event In The World has taken Dubai by a storm with 41 pavilions and more than 6000 exhibitors in 2023.',                            coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '34', title: 'Arab Media Forum, Dubai',                    date: '26-27 September 2023',     description: 'Forum uniting more than 3000 media from all over the region is back in town. This time with a great highlight of CafeXbot.',                           coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '35', title: "Ru'ya Careers, Dubai",                       date: '19-21 September 2023',     description: 'In partnership with Emirates Airlines Xbot has been treating all visitors to free Ice Cream and Coffee for all 3 event days.',                          coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '36', title: 'Robo Day, Dubai',                            date: '18 May 2023',              description: 'The day where all the robotic manufacturers in UAE came together to showcase new inventions and technologies.',                                          coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '37', title: 'Forsa Tec, Dubai',                           date: '09 March 2023',            description: 'In partnership with Emirates Airlines Xbot has been treating visitors to Ice Cream and Coffee throughout this tech event.',                              coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
  { id: '38', title: 'Tomorrow Conference, Dubai',                 date: '08-10 February 2023',      description: "CafeXbot Debuted in Tomorrow Conference in Dubai. Where else? We couldn't have asked for a better debut than this.",                                    coverImage: FALLBACK,       galleryImages: [], videoUrl: '' },
];

// ─── Responsive hook ──────────────────────────────────────────────────────────

function useCardsPerPage(): number {
  const [cards, setCards] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setCards(1);
      else if (w < 1024) setCards(2);
      else setCards(4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return cards;
}

// ─── Arrow buttons ────────────────────────────────────────────────────────────

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Previous events' : 'Next events'}
      className={`absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity duration-200 disabled:opacity-30 hover:bg-gray-100 ${
        direction === 'left' ? '-left-3 sm:-left-5' : '-right-3 sm:-right-5'
      }`}
    >
      {direction === 'left' ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-800" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-800" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </button>
  );
}

// ─── Event card ───────────────────────────────────────────────────────────────

function EventCard({
  event,
  onGalleryOpen,
  onVideoOpen,
}: {
  event: EventItem;
  onGalleryOpen: () => void;
  onVideoOpen: () => void;
}) {
  const hasVideo = !!event.videoUrl;

  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col flex-shrink-0 w-full">
      {/* Cover image — clicking opens gallery lightbox with the cover image */}
      <button
        onClick={onGalleryOpen}
        className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        aria-label={`View gallery for ${event.title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.coverImage}
          alt={event.title}
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.src = FALLBACK; }}
          className="w-full h-48 sm:h-56 object-cover rounded-t-2xl"
        />
      </button>

      {/* Card body */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-gray-900 font-bold text-base sm:text-base md:text-lg text-center leading-snug mb-2">
          {event.title}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm text-center mb-2">{event.date}</p>
        <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed line-clamp-3 mb-4 flex-1">
          {event.description}
        </p>

        {/* Action links */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onGalleryOpen}
            className="text-cyan-500 text-sm font-medium underline underline-offset-2 hover:text-cyan-600 transition-colors"
          >
            Gallery
          </button>
          {hasVideo && (
            <button
              onClick={onVideoOpen}
              className="text-cyan-500 text-sm font-medium underline underline-offset-2 hover:text-cyan-600 transition-colors"
            >
              Video
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function EventsSection({ events }: EventsSectionProps) {
  const source = events?.length ? events : ALL_EVENTS;
  const cardsPerPage = useCardsPerPage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState<ModalState | null>(null);

  const maxIndex = Math.max(0, source.length - cardsPerPage);

  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const activeEvent = modal ? (source.find((e) => e.id === modal.eventId) ?? null) : null;

  // Gallery slides: use cover image as the primary slide, then any extra gallery images
  const gallerySlides: LightboxSlide[] = activeEvent
    ? [
        { src: activeEvent.coverImage, alt: activeEvent.title },
        ...activeEvent.galleryImages.map((src) => ({ src, alt: activeEvent.title })),
      ]
    : [];

  return (
    <section className="bg-black py-12 sm:py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-white font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-8"
        >
          Events Where You Can Find Us
        </motion.h2>

        {/* Carousel wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative px-6"
        >
          {/* Left arrow */}
          <ArrowButton direction="left" onClick={prev} disabled={currentIndex === 0} />

          {/* Cards track */}
          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${currentIndex} * (100% / ${cardsPerPage} + 5px / ${cardsPerPage})))` }}
            >
              {source.map((event) => (
                <div
                  key={event.id}
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - ${(cardsPerPage - 1) * 20}px) / ${cardsPerPage})` }}
                >
                  <EventCard
                    event={event}
                    onGalleryOpen={() => setModal({ type: 'gallery', eventId: event.id })}
                    onVideoOpen={() => setModal({ type: 'video', eventId: event.id })}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <ArrowButton direction="right" onClick={next} disabled={currentIndex >= maxIndex} />
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                i === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Gallery lightbox — cover image is always the first slide */}
      <LightboxViewer
        images={gallerySlides}
        open={modal?.type === 'gallery'}
        onClose={() => setModal(null)}
      />

      {/* Video modal */}
      {activeEvent?.videoUrl && (
        <VideoModal
          videoUrl={activeEvent.videoUrl}
          open={modal?.type === 'video'}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}
