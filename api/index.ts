import type { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../src/app';
import AppDataSource from '../src/data-source';

async function ensureDB() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log('DB initialized (Vercel)');
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await ensureDB();
  return (app as any)(req, res);
}
