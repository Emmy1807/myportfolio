import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    try {
      const testimonials = await prisma.testimonial.findMany({
        where: { approved: true },
        orderBy: { createdAt: 'desc' },
      });
      return res.status(200).json({ success: true, data: testimonials });
    } catch (error) {
      console.error('Testimonials GET error:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  if (method === 'POST') {
    try {
      const testimonial = await prisma.testimonial.create({ data: req.body });
      return res.status(201).json({ success: true, data: testimonial });
    } catch (error) {
      console.error('Testimonial create error:', error);
      return res.status(400).json({
        success: false,
        message: 'Failed to create testimonial',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${method} Not Allowed`);
}
