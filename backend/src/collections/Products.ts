import type { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier, e.g. "coffee-robot"',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            // Auto-generate slug from title if not set
            if (!value && data?.title) {
              return (data.title as string)
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'tagline',
      type: 'text',
      admin: {
        description: 'Short marketing line shown under the title',
      },
    },
    {
      name: 'excerpt',
      label: 'Short Description',
      type: 'textarea',
      admin: {
        description: 'Used in product cards and meta descriptions',
      },
    },
    {
      name: 'description',
      label: 'Full Description',
      type: 'richText',
    },
    {
      name: 'mainImage',
      label: 'Main Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      label: 'Product Gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'features',
      label: 'Key Features',
      type: 'array',
      admin: {
        description: 'Bullet-point features shown on the product page',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'specifications',
      label: 'Technical Specifications',
      type: 'group',
      fields: [
        { name: 'capacity', type: 'text', label: 'Capacity' },
        { name: 'dimensions', type: 'text', label: 'Dimensions' },
        { name: 'weight', type: 'text', label: 'Weight' },
        { name: 'powerConsumption', type: 'text', label: 'Power Consumption' },
        { name: 'operatingTemperature', type: 'text', label: 'Operating Temperature' },
      ],
    },
    {
      name: 'videoUrl',
      label: 'Product Video URL',
      type: 'text',
    },
    {
      name: 'brochureUrl',
      label: 'Brochure Download URL',
      type: 'text',
    },
    {
      name: 'order',
      label: 'Display Order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first',
      },
    },
  ],
  timestamps: true,
};

export default Products;
