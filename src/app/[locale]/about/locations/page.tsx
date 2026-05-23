import type { Metadata } from 'next';
import LocationsContent from './LocationsContent';

export const metadata: Metadata = {
  title: 'Our Existing Locations | VLT Robotics',
  description:
    'Discover where CafeXbot robotic cafes are deployed worldwide — from Dubai malls to Singapore tech hubs.',
  openGraph: {
    title: 'Our Existing Locations | VLT Robotics',
    description:
      'CafeXbot is deployed across the UAE, Singapore, and 10+ countries. Find a location near you.',
  },
};

export default function LocationsPage() {
  return <LocationsContent />;
}
