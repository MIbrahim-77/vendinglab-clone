import type { CollectionConfig } from 'payload/types';

const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'eventType', 'status', 'createdAt'],
    group: 'CRM',
    // Disable create/delete from admin — managed by API only
    disableDuplicate: true,
  },
  access: {
    read: () => true,
    create: () => true,   // API route writes here
    update: () => true,   // Admin can update status
    delete: () => false,  // Never delete from admin
  },
  fields: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'companyName', label: 'Company Name', type: 'text' },
    {
      name: 'eventType',
      label: 'Event Type',
      type: 'select',
      options: [
        { label: 'Corporate Event', value: 'corporate' },
        { label: 'Exhibition', value: 'exhibition' },
        { label: 'Wedding', value: 'wedding' },
        { label: 'Other', value: 'other' },
      ],
    },
    { name: 'eventDate', label: 'Event Date', type: 'date' },
    {
      name: 'eventDuration',
      label: 'Event Duration',
      type: 'select',
      options: [
        { label: '1 Day', value: '1day' },
        { label: '2-3 Days', value: '2-3days' },
        { label: '1 Week', value: '1week' },
        { label: '1 Month+', value: '1month+' },
      ],
    },
    { name: 'location', label: 'Venue / Location', type: 'text' },
    { name: 'notes', label: 'Additional Notes', type: 'textarea' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Read', value: 'read' },
        { label: 'Replied', value: 'replied' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
  timestamps: true,
};

export default Inquiries;
