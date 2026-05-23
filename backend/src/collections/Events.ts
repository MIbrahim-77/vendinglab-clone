import type { CollectionConfig } from 'payload/types';

const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'isFeatured', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true, // public read for frontend
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'd MMM yyyy',
        },
      },
    },
    {
      name: 'dateLabel',
      label: 'Date Display Label',
      type: 'text',
      admin: {
        description: 'Human-readable date range, e.g. "14-18 October 2024"',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'coverImage',
      label: 'Cover Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      label: 'Gallery Images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'videoUrl',
      label: 'Video URL (YouTube)',
      type: 'text',
      admin: {
        description: 'Full YouTube URL, e.g. https://www.youtube.com/watch?v=...',
      },
    },
    {
      name: 'isFeatured',
      label: 'Featured Event',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show this event prominently on the homepage',
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      label: 'Event Location',
      type: 'text',
    },
  ],
  timestamps: true,
};

export default Events;
