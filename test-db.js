const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

dotenv.config();

console.log('DATABASE_URL:', process.env.DATABASE_URL);

const prisma = new PrismaClient();

async function test() {
    try {
        const result = await prisma.$queryRaw`SELECT 1`;
        console.log('Connection successful!', result);
    } catch (error) {
        console.error('Connection failed:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

test();
