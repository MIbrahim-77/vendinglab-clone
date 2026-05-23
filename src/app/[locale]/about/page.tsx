import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About VLT Robotics | Robotic Cafe Manufacturer Since 2015',
  description:
    'Learn about VLT Robotics — one of the oldest robotic cafe manufacturers in the world, founded in Dubai in 2015. Creators of CafeXbot and Ice Alice.',
  openGraph: {
    title: 'About VLT Robotics | Robotic Cafe Manufacturer Since 2015',
    description:
      'Founded in Dubai in 2015, VLT Robotics has been pioneering robotic cafe technology across 10+ countries.',
    images: [
      {
        url: 'https://vendinglab.tech/wp-content/uploads/2023/10/xbotcafe-final.png',
        width: 1952,
        height: 523,
        alt: 'VLT Robotics CafeXbot',
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
