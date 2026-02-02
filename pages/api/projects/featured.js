import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    try {
      console.log('Featured projects endpoint called');
      const projects = await prisma.project.findMany({
        where: { featured: true },
        orderBy: { order: 'asc' },
        take: 6,
      });
      console.log(`Found ${projects.length} featured projects`);
      return res.status(200).json({ success: true, data: projects });
    } catch (error) {
      console.error('Featured projects GET error:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${method} Not Allowed`);
}
