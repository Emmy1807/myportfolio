import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === 'GET') {
    try {
      const project = await prisma.project.findUnique({ where: { id } });
      if (!project) {
        return res.status(404).json({ success: false, message: 'Project not found' });
      }
      return res.status(200).json({ success: true, data: project });
    } catch (error) {
      console.error('Project GET by id error:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  if (method === 'PUT') {
    try {
      const project = await prisma.project.update({
        where: { id },
        data: req.body,
      });
      if (!project) {
        return res.status(404).json({ success: false, message: 'Project not found' });
      }
      return res.status(200).json({ success: true, data: project });
    } catch (error) {
      console.error('Project update error:', error);
      return res.status(400).json({
        success: false,
        message: 'Failed to update project',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  if (method === 'DELETE') {
    try {
      const project = await prisma.project.delete({ where: { id } });
      if (!project) {
        return res.status(404).json({ success: false, message: 'Project not found' });
      }
      return res.status(200).json({ success: true, message: 'Project deleted successfully' });
    } catch (error) {
      console.error('Project delete error:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  return res.status(405).end(`Method ${method} Not Allowed`);
}
