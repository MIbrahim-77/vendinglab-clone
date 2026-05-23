import { buildConfig } from 'payload/config';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';

import Events from './collections/Events';
import Products from './collections/Products';
import Locations from './collections/Locations';
import Inquiries from './collections/Inquiries';
import Media from './collections/Media';
import Settings from './globals/Settings';

export default buildConfig({
  serverURL: process.env.SERVER_URL ?? 'http://localhost:3001',

  // ── Database adapter ─────────────────────────────────────────────────────────
  db: mongooseAdapter({
    url: process.env.MONGODB_URI ?? 'mongodb://localhost:27017/vendinglab',
  }),

  // ── Rich text editor ─────────────────────────────────────────────────────────
  editor: slateEditor({}),

  // ── Admin panel ─────────────────────────────────────────────────────────────
  admin: {
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '— VLT Robotics CMS',
      favicon: '/favicon.ico',
    },
    css: path.resolve(__dirname, 'admin.css'),
  },

  // ── Collections ──────────────────────────────────────────────────────────────
  collections: [Events, Products, Locations, Inquiries, Media],

  // ── Globals ──────────────────────────────────────────────────────────────────
  globals: [Settings],

  // ── CORS ─────────────────────────────────────────────────────────────────────
  cors: [
    process.env.FRONTEND_URL ?? 'http://localhost:3000',
    'https://vendinglab.tech',
  ],

  // ── CSRF ─────────────────────────────────────────────────────────────────────
  csrf: [
    process.env.FRONTEND_URL ?? 'http://localhost:3000',
    'https://vendinglab.tech',
  ],

  // ── TypeScript output ────────────────────────────────────────────────────────
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  // ── GraphQL ──────────────────────────────────────────────────────────────────
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
