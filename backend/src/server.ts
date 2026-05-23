import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import payload from 'payload';

const app = express();
const PORT = parseInt(process.env.PORT ?? '3001', 10);

async function start() {
  // In Payload v2 with the mongooseAdapter, the DB URL is set in payload.config.ts
  // payload.init only needs the secret and the express app
  await payload.init({
    secret: process.env.PAYLOAD_SECRET ?? 'fallback-secret-change-in-production',
    express: app,
    onInit: () => {
      payload.logger.info(`Admin panel: http://localhost:${PORT}/admin`);
      payload.logger.info(`REST API:    http://localhost:${PORT}/api`);
    },
  });

  // Health check
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
