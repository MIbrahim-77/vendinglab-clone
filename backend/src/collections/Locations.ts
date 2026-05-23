import type { CollectionConfig } from 'payload/types';

const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'city', 'country', 'status', 'updatedAt'],
    group: 'Content',
  },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'city', type: 'text', required: true },
    { name: 'country', type: 'text', required: true },
    { name: 'address', type: 'text' },
    {
      name: 'robotType',
      label: 'Robot Type',
      type: 'select',
      options: [
        { label: 'CafeXbot Coffee', value: 'coffee' },
        { label: 'CafeXbot Ice Cream', value: 'icecream' },
        { label: 'CafeXbot Full Cafe', value: 'cafe' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Coming Soon', value: 'coming_soon' },
        { label: 'Inactive', value: 'inactive' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    { name: 'description', type: 'textarea' },
  ],
  timestamps: true,
};

export default Locations;
