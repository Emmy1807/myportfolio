import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set. Please define it in your .env file.');
}

const adapter = new PrismaPg({ connectionString });

let prisma;

// Use a global variable in development to avoid creating multiple clients
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    log: ['error'],
    adapter,
  });
} else {
  // In dev, attach to globalThis to prevent multiple instances
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient({
      log: ['error'],
      adapter,
    });
  }
  prisma = globalThis.prisma;
}

export default prisma;
