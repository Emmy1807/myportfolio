import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === 'GET') {
    try {
      const testimonial = await prisma.testimonial.findUnique({ where: { id } });
      if (!testimonial) {
        return res.status(404).json({ success: false, message: 'Testimonial not found' });
      }
      return res.status(200).json({ success: true, data: testimonial });
    } catch (error) {
      console.error('Testimonial GET by id error:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  if (method === 'PUT') {
    try {
      const testimonial = await prisma.testimonial.update({
        where: { id },
        data: req.body,
      });
      if (!testimonial) {
        return res.status(404).json({ success: false, message: 'Testimonial not found' });
      }
      return res.status(200).json({ success: true, data: testimonial });
    } catch (error) {
      console.error('Testimonial update error:', error);
      return res.status(400).json({
        success: false,
        message: 'Failed to update testimonial',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  if (method === 'DELETE') {
    try {
      const testimonial = await prisma.testimonial.delete({ where: { id } });
      if (!testimonial) {
        return res.status(404).json({ success: false, message: 'Testimonial not found' });
      }
      return res.status(200).json({ success: true, message: 'Testimonial deleted successfully' });
    } catch (error) {
      console.error('Testimonial delete error:', error);
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
