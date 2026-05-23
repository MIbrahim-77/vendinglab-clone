import type { GlobalConfig } from 'payload/types';

const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Site Settings',
  admin: { group: 'System' },
  access: { read: () => true },
  fields: [
    {
      name: 'siteTitle',
      label: 'Site Title',
      type: 'text',
      defaultValue: 'VLT Robotics - Robotic Cafe Manufacturer Dubai',
    },
    {
      name: 'hero',
      label: 'Homepage Hero',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text' },
        { name: 'subheading', type: 'textarea' },
        { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'contact',
      label: 'Contact Information',
      type: 'group',
      fields: [
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'textarea' },
      ],
    },
    {
      name: 'social',
      label: 'Social Links',
      type: 'group',
      fields: [
        { name: 'instagram', type: 'text', label: 'Instagram URL' },
        { name: 'linkedin', type: 'text', label: 'LinkedIn URL' },
        { name: 'youtube', type: 'text', label: 'YouTube URL' },
      ],
    },
  ],
};

export default Settings;
