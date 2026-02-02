import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    try {
      const projects = await prisma.project.findMany({
        orderBy: [
          { order: 'asc' },
          { createdAt: 'desc' },
        ],
      });
      return res.status(200).json({ success: true, data: projects });
    } catch (error) {
      console.error('Projects GET error:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  if (method === 'POST') {
    try {
      const project = await prisma.project.create({ data: req.body });
      return res.status(201).json({ success: true, data: project });
    } catch (error) {
      console.error('Project create error:', error);
      return res.status(400).json({
        success: false,
        message: 'Failed to create project',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${method} Not Allowed`);
}
